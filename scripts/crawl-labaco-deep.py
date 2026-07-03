#!/usr/bin/env python3
"""Deep crawl labaco.vn — WP REST API, sitemaps, all pages, project galleries."""
from __future__ import annotations

import json
import re
import ssl
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(r"C:\Users\ACER\OneDrive\Desktop\vietfactory")
OUT_LIST = ROOT / "scripts" / "labaco-images.txt"
REPORT = ROOT / "scripts" / "labaco-crawl-report.json"
BASE = "https://labaco.vn"

SKIP_PATTERNS = re.compile(
    r"(logo|favicon|icon|partner|viettel|cjsc|capture|who-we-are|safety-1|our-mission|image-13|"
    r"mt-sample-background|images\.jpg|"
    r"-\d+x\d+\.)",
    re.I,
)
IMG_URL_RE = re.compile(
    r"https?://(?:www\.)?labaco\.vn/wp-content/uploads/[^\s\"'<>)]+\.(?:jpg|jpeg|png|webp|gif)",
    re.I,
)

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE


def fetch(url: str, timeout: int = 45) -> bytes:
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (compatible; VietFactory-Crawler/1.0)"},
    )
    with urllib.request.urlopen(req, context=ctx, timeout=timeout) as r:
        return r.read()


def fetch_json(url: str) -> list | dict:
    return json.loads(fetch(url).decode("utf-8", errors="replace"))


def normalize_url(url: str) -> str | None:
    url = url.strip().replace("http://labaco.vn", BASE).replace("http://www.labaco.vn", BASE)
    if url.startswith("http://"):
        url = "https://" + url[7:]
    if "wp-content/uploads" not in url:
        return None
    if re.search(r"/\d{4}/\d{2}/\d{4}/\d{2}/", url):
        return None
    path = urllib.parse.urlparse(url).path
    name = urllib.parse.unquote(path.split("/")[-1]).lower()
    if SKIP_PATTERNS.search(name):
        return None
    if not re.search(r"\.(jpg|jpeg|png|webp|gif)$", name, re.I):
        return None
    return url.split("?")[0]


def add_url(urls: set[str], raw: str, source: str, sources: dict[str, set[str]]) -> None:
    norm = normalize_url(raw)
    if not norm:
        return
    urls.add(norm)
    sources.setdefault(norm, set()).add(source)


def paginate_wp(endpoint: str, label: str) -> list[dict]:
    items: list[dict] = []
    page = 1
    while True:
        url = f"{BASE}/wp-json/wp/v2/{endpoint}?per_page=100&page={page}"
        try:
            batch = fetch_json(url)
        except Exception as e:
            print(f"  {label} page {page}: stop ({e})")
            break
        if not batch:
            break
        items.extend(batch)
        print(f"  {label} page {page}: +{len(batch)}")
        if len(batch) < 100:
            break
        page += 1
        time.sleep(0.15)
    return items


def sitemap_urls() -> list[str]:
    xml = fetch(f"{BASE}/sitemap.xml").decode("utf-8", errors="replace")
    root = ET.fromstring(xml)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    child_maps = [loc.text for loc in root.findall(".//sm:loc", ns) if loc.text]
    pages: list[str] = []
    for sm in child_maps:
        try:
            data = fetch(sm).decode("utf-8", errors="replace")
            sub = ET.fromstring(data)
            for loc in sub.findall(".//sm:loc", ns):
                if loc.text:
                    pages.append(loc.text.replace("http://", "https://"))
        except Exception as e:
            print(f"  sitemap {sm}: {e}")
        time.sleep(0.1)
    return pages


def extract_from_html(html: str, urls: set[str], sources: dict[str, set[str]], source: str) -> None:
    for m in IMG_URL_RE.findall(html):
        add_url(urls, m, source, sources)
    for m in re.findall(r'srcset="([^"]+)"', html):
        for part in m.split(","):
            u = part.strip().split(" ")[0]
            add_url(urls, u, source, sources)
    for m in re.findall(r'data-src="([^"]+)"', html):
        add_url(urls, m, source, sources)
    for m in re.findall(r'data-lazy-src="([^"]+)"', html):
        add_url(urls, m, source, sources)


def media_from_item(item: dict, urls: set[str], sources: dict[str, set[str]], source: str) -> None:
    if item.get("media_type") != "image":
        return
    src = item.get("source_url")
    if src:
        add_url(urls, src, source, sources)
    details = item.get("media_details") or {}
    sizes = details.get("sizes") or {}
    for size in sizes.values():
        if isinstance(size, dict) and size.get("source_url"):
            add_url(urls, size["source_url"], source, sources)



def main() -> None:
    urls: set[str] = set()
    sources: dict[str, set[str]] = {}

    print("=== WP REST API: media ===")
    for item in paginate_wp("media", "media"):
        media_from_item(item, urls, sources, "wp-media")

    print("=== WP REST API: du_an (projects) ===")
    du_an = paginate_wp("du_an", "du_an")
    for post in du_an:
        slug = post.get("slug", "")
        link = post.get("link", "")
        content = post.get("content", {}).get("rendered", "")
        extract_from_html(content, urls, sources, f"du_an:{slug}")
        fm = post.get("featured_media")
        if fm:
            try:
                media = fetch_json(f"{BASE}/wp-json/wp/v2/media/{fm}")
                media_from_item(media, urls, sources, f"du_an-featured:{slug}")
            except Exception:
                pass
        if link:
            try:
                html = fetch(link).decode("utf-8", errors="replace")
                extract_from_html(html, urls, sources, f"du_an-page:{slug}")
            except Exception as e:
                print(f"  page {slug}: {e}")
            time.sleep(0.12)

    print("=== WP REST API: dich_vu, san_pham, pages, posts ===")
    for endpoint in ("dich_vu", "san_pham", "pages", "posts"):
        for post in paginate_wp(endpoint, endpoint):
            slug = post.get("slug", "")
            content = post.get("content", {}).get("rendered", "")
            extract_from_html(content, urls, sources, f"{endpoint}:{slug}")
            link = post.get("link")
            if link:
                try:
                    html = fetch(link).decode("utf-8", errors="replace")
                    extract_from_html(html, urls, sources, f"{endpoint}-page:{slug}")
                except Exception:
                    pass
                time.sleep(0.1)

    print("=== Sitemap pages ===")
    pages = sitemap_urls()
    print(f"  {len(pages)} URLs from sitemaps")
    for i, page_url in enumerate(pages):
        try:
            html = fetch(page_url).decode("utf-8", errors="replace")
            extract_from_html(html, urls, sources, f"sitemap:{page_url}")
        except Exception as e:
            print(f"  {page_url}: {e}")
        if (i + 1) % 10 == 0:
            print(f"  crawled {i + 1}/{len(pages)} pages, {len(urls)} images")
        time.sleep(0.08)

    existing = set()
    if OUT_LIST.exists():
        for line in OUT_LIST.read_text(encoding="utf-8").splitlines():
            n = normalize_url(line.strip())
            if n:
                existing.add(n)

    sorted_urls = sorted(urls)
    OUT_LIST.write_text("\n".join(sorted_urls) + "\n", encoding="utf-8")

    new_count = len([u for u in sorted_urls if u not in existing])
    report = {
        "total_images": len(sorted_urls),
        "new_vs_previous_list": new_count,
        "du_an_projects": len(du_an),
        "sitemap_pages": len(pages),
        "sources_sample": {u: sorted(v)[:3] for u, v in list(sources.items())[:20]},
    }
    REPORT.write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8")

    print(f"\nDone: {len(sorted_urls)} image URLs ({new_count} new)")
    print(f"Saved -> {OUT_LIST}")
    print(f"Report -> {REPORT}")


if __name__ == "__main__":
    main()