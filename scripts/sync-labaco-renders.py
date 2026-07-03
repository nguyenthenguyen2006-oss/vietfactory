#!/usr/bin/env python3
"""Add all Labaco manifest images missing from data/renders-3d.ts."""
import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\ACER\OneDrive\Desktop\vietfactory")
MANIFEST = ROOT / "public/images/labaco/manifest.json"
RENDERS = ROOT / "data/renders-3d.ts"

SKIP = re.compile(
    r"(logo|footer|who-we-are|safety|mission|image-13|viettel|cjsc|capture|partner|"
    r"mt-sample|images\.jpg|Rectangle-11-2\.png|Rectangle-11-1\.png|Rectangle-11\.png|"
    r"Rectangle-11-3\.png|Rectangle-12\.png|kich-thuoc|Group-34|Screenshot|"
    r"-\d+x\d+\.)",
    re.I,
)

CAT_RULES: list[tuple[re.Pattern, str, str]] = [
    (re.compile(r"thi-nghiem|nghien-cuu|Rectangle-11", re.I), "phong-sach", "Phòng thí nghiệm"),
    (re.compile(r"Double-wall|ALC|LBC|panel|Smart|tam-be-tong|be-tong-nhe|1a|1b|1111", re.I), "noi-that", "Sản phẩm LBC"),
    (re.compile(r"Group-12|Picture|kho|warehouse", re.I), "logistics", "Kho logistics"),
    (re.compile(r"View-|hoan-thien|villa|mat-cat|tang-|tret|loi-di|MAP-2|Nghia|SDCC|PA-4|pctt|truong|iq-school|Labaco-Group|banner", re.I), "tong-the", "Tổng thể công trình"),
    (re.compile(r"Rectangle-3[468]|IMG_2022|thi-cong|tem-gian|cau-duong|z6|z7|275303|1\.-Thay", re.I), "nha-xuong", "Thi công Labaco"),
]


def categorize(fname: str) -> tuple[str, str]:
    for pat, cat, label_prefix in CAT_RULES:
        if pat.search(fname):
            stem = Path(fname).stem.replace("-scaled", "").replace("_", " ")[:40]
            return cat, f"{label_prefix} — {stem}"
    return "nha-xuong", f"Công trình — {Path(fname).stem[:40]}"


def main() -> None:
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    text = RENDERS.read_text(encoding="utf-8")
    existing = set(re.findall(r'src: "(/images/labaco/[^"]+)"', text))

    new_entries: list[str] = []
    for item in manifest:
        fname = item["file"]
        if SKIP.search(fname):
            continue
        src = f"/images/labaco/{fname}"
        if src in existing:
            continue
        cat, label = categorize(fname)
        alt = f"Hình ảnh Labaco — {label}"
        new_entries.append(
            f'  {{ src: "{src}", label: "{label}", category: "{cat}", '
            f'categoryLabel: categoryLabels["{cat}"], alt: "{alt}" }},'
        )

    if not new_entries:
        print("No new entries to add.")
        return

    marker = "\n];"
    idx = text.rfind(marker)
    if idx == -1:
        raise SystemExit("Could not find render3DImages closing bracket")
    updated = text[:idx] + "\n" + "\n".join(new_entries) + text[idx:]
    RENDERS.write_text(updated, encoding="utf-8")
    print(f"Added {len(new_entries)} images to renders-3d.ts")


if __name__ == "__main__":
    main()