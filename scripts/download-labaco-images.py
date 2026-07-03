#!/usr/bin/env python3
"""Download all Labaco images for vietfactory."""
import json
import re
import ssl
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(r"C:\Users\ACER\OneDrive\Desktop\vietfactory")
LIST = ROOT / "scripts" / "labaco-images.txt"
OUT = ROOT / "public" / "images" / "labaco"

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    urls = LIST.read_text(encoding="utf-8").strip().splitlines()
    seen_names: set[str] = set()
    manifest_path = OUT / "manifest.json"
    manifest: list[dict] = []
    if manifest_path.exists():
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
        for entry in manifest:
            seen_names.add(entry["file"])

    for raw in urls:
        url = raw.strip()
        if not url:
            continue
        if url.startswith("http://"):
            url = "https://" + url[7:]
        name = urllib.parse.unquote(url.split("/")[-1].split("?")[0])
        if name in seen_names:
            continue
        seen_names.add(name)
        dest = OUT / name
        if dest.exists() and dest.stat().st_size > 1000:
            if name not in seen_names:
                manifest.append({"file": name, "url": url, "local": f"/images/labaco/{name}"})
                seen_names.add(name)
            continue
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, context=ctx, timeout=60) as r:
                data = r.read()
            dest.write_bytes(data)
            manifest.append({"file": name, "url": url, "local": f"/images/labaco/{name}", "bytes": len(data)})
            print(f"OK {name} ({len(data)} bytes)")
        except Exception as e:
            print(f"FAIL {name}: {e}")

    manifest_path.write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )
    print(f"\nDownloaded {len(manifest)} images -> {OUT}")


if __name__ == "__main__":
    main()