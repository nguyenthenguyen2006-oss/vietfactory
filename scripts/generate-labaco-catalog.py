#!/usr/bin/env python3
"""Generate data/labaco-catalog.ts entries for renders-3d replacement."""
import json
from pathlib import Path

ROOT = Path(r"C:\Users\ACER\OneDrive\Desktop\vietfactory")
manifest = json.loads((ROOT / "public/images/labaco/manifest.json").read_text(encoding="utf-8"))

# (filename, category, label, alt)
MAPPING = [
    ("banner-labaco.webp", "tong-the", "Banner Labaco", "Tổng thể công trình Labaco"),
    ("View-444-scaled.jpg", "tong-the", "Villa Sơn Thanh", "Phối cảnh Villa Sơn Thanh — Labaco"),
    ("View-111a.jpg", "tong-the", "Góc nhìn kiến trúc A", "Phối cảnh kiến trúc công trình Labaco"),
    ("View-222a.jpg", "tong-the", "Góc nhìn kiến trúc B", "Phối cảnh ngoại thất công trình"),
    ("View-333.jpg", "tong-the", "Góc nhìn kiến trúc C", "Không gian ngoại thất hiện đại"),
    ("hoan-thien.jpg", "tong-the", "Công trình hoàn thiện", "Công trình khung thô và hoàn thiện"),
    ("loi-di-san-vuon-scaled.jpg", "tong-the", "Lối đi sân vườn", "Không gian sân vườn công trình"),
    ("tret-scaled.jpg", "tong-the", "Mặt bằng tầng trệt", "Mặt bằng tầng trệt công trình"),
    ("tang-1-scaled.jpg", "tong-the", "Mặt bằng tầng 1", "Mặt bằng tầng 1"),
    ("tang-2-scaled.jpg", "tong-the", "Mặt bằng tầng 2", "Mặt bằng tầng 2"),
    ("mat-cat-scaled.jpg", "tong-the", "Mặt cắt công trình", "Mặt cắt thể hiện thế đất và kết cấu"),
    ("MAP-2.jpg", "tong-the", "Vị trí lô đất", "Hình ảnh vị trí lô đất từ trên cao"),
    ("Nghia-Do.jpg", "tong-the", "Dự án Nghĩa Đô", "Công trình Labaco tại Nghĩa Đô"),
    ("pctt-ban-dem.jpg", "tong-the", "PCCC ban đêm", "Công trình phòng cháy chữa cháy"),
    ("SDCC.jpg", "tong-the", "Dự án SDCC", "Công trình Labaco SDCC"),
    ("1705066802271-scaled.jpg", "tong-the", "Công trình quy mô lớn", "Tổng thể công trình Labaco"),
    ("PA-4.jpg", "tong-the", "Phối cảnh dự án", "Phối cảnh triển khai thực tế"),
    ("truong-lien-cap-quoc-te-iq-school-ninh-binh-ninh-khanh-l8V8rDxQuFqbRkz9-scaled.jpg", "tong-the", "Trường liên cấp IQ School", "Công trình giáo dục Labaco thi công"),
    ("z6674973652906_191eaabe00b391f478564b0ce0a795ce.jpg", "tong-the", "Dự án thực tế 01", "Hình ảnh công trình Labaco"),
    ("z6674973663472_3f0da3e45ef6af515dc963f61bb67aea.jpg", "tong-the", "Dự án thực tế 02", "Hình ảnh công trình Labaco"),
    ("z6674973675137_0bf9fba844f2a8611856ba31108eca21.jpg", "tong-the", "Dự án thực tế 03", "Hình ảnh công trình Labaco"),
    ("z6664566094374_f4301cb56e2d8bc09e00bc756c3853d1.jpg", "tong-the", "Dự án thực tế 04", "Hình ảnh công trình Labaco"),
    ("z6488409078665_1972c4056206934adea5d8b8a988c8be.jpg", "tong-the", "Dự án thực tế 05", "Hình ảnh công trình Labaco"),
    ("z6447802871344_c440ffd3ecfb70282e8afb0164704ccb.jpg", "tong-the", "Dự án thực tế 06", "Hình ảnh công trình Labaco"),
    ("z6377053792987_0c72423b739bed75599918949ae1105b.jpg", "tong-the", "Dự án thực tế 07", "Hình ảnh công trình Labaco"),
    ("z6480394365942_1409eddd91ba203794d60dde4daf20a0.jpg", "tong-the", "Dự án thực tế 08", "Hình ảnh công trình Labaco"),
    ("Rectangle-6.jpg", "tong-the", "Về Labaco", "Hình ảnh công ty Labaco"),
    ("Rectangle-34.jpg", "nha-xuong", "Thi công xây dựng", "Thi công công trình công nghiệp Labaco"),
    ("Rectangle-36.jpg", "nha-xuong", "Công trình dân dụng", "Xây dựng công trình dân dụng"),
    ("Rectangle-38.jpg", "nha-xuong", "Công trình công nghiệp", "Thi công nhà xưởng công nghiệp"),
    ("Rectangle-26.jpg", "nha-xuong", "Hạ tầng kỹ thuật", "Triển khai hạ tầng công trình"),
    ("IMG_20221229_115320-scaled.jpg", "nha-xuong", "Thi công hiện trường", "Ảnh thực tế công trường Labaco"),
    ("1.-Thay-Do-Duc-Thang-scaled.jpg", "nha-xuong", "Thẩm định công trình", "Thẩm định và đánh giá công trình"),
    ("baner-LBC-panel-scaled.jpg", "nha-xuong", "Sàn LBC Panel", "Sàn bê tông panel vượt nhịp"),
    ("tem-gian-scaled.jpg", "nha-xuong", "Tem giàn kết cấu", "Giàn kết cấu thép công nghiệp"),
    ("cau-duong-ben-cang.jpg", "nha-xuong", "Kết cấu cầu đường", "Kết cấu thép zigzag cầu đường bến cảng"),
    ("111.jpg", "nha-xuong", "Lắp dựng panel", "Thi công sàn panel tại công trường"),
    ("1111aa.jpg", "nha-xuong", "Khung công trình", "Khung công trình đang thi công"),
    ("11112ssss.jpg", "nha-xuong", "Công trường Labaco", "Hình ảnh thi công thực tế"),
    ("12121.jpg", "nha-xuong", "Hoàn thiện kết cấu", "Giai đoạn hoàn thiện kết cấu"),
    ("1-scaled.jpg", "nha-xuong", "Nhà xưởng lắp ghép", "Nhà xưởng prefab Labaco"),
    ("2.jpg", "nha-xuong", "Thi công module", "Lắp ghép module công trình"),
    ("4.jpg", "nha-xuong", "Kết cấu công trình", "Kết cấu công trình Labaco"),
    ("5.jpg", "nha-xuong", "Mặt bằng thi công", "Mặt bằng thi công nhà xưởng"),
    ("5-1.jpg", "nha-xuong", "Triển khai công trình", "Triển khai thi công Labaco"),
    ("7.jpg", "nha-xuong", "Công trình thực tế", "Công trình Labaco triển khai"),
    ("7-1.jpg", "nha-xuong", "Hiện trường thi công", "Hiện trường thi công Labaco"),
    ("11.jpg", "nha-xuong", "Nhà xưởng thực tế", "Nhà xưởng Labaco thi công"),
    ("12.jpg", "nha-xuong", "Công trình hoàn thiện", "Công trình sau thi công"),
    ("z6214285851981_5db37dc3245818e2e76896fddf0e4307.jpg", "nha-xuong", "Sản xuất cấu kiện", "Xưởng sản xuất cấu kiện bê tông"),
    ("z6325405551371_4757e237ce147a0afe3ad287a48a0c4f.jpg", "nha-xuong", "Tư vấn thiết kế", "Tư vấn thiết kế công trình"),
    ("z6325405553815_f9b386a51b34e89f92fb670a136e86c1.jpg", "nha-xuong", "Triển khai dự án", "Triển khai dự án xây dựng"),
    ("275303537_10220064178105209_6668291407971462588_n.jpg", "nha-xuong", "Công trình Facebook", "Công trình Labaco"),
    ("Tam-be-tong-da-nang-LBC_Smart-copy-scaled.jpg", "noi-that", "Tấm LBC Smart", "Tấm bê tông đa năng mác cao LBC Smart"),
    ("1111.jpg", "noi-that", "Sàn LBC Panel", "Sàn bê tông nhẹ vượt nhịp LBC Panel"),
    ("1-Double-wall-scaled.jpg", "noi-that", "Tường Double Wall", "Tấm tường bê tông Double Wall"),
    ("2-double-wall-scaled.jpg", "noi-that", "Double Wall lắp dựng", "Lắp dựng tường Double Wall"),
    ("ALC-LABACO-scaled.jpg", "noi-that", "Tấm ALC Labaco", "Tấm bê tông siêu nhẹ ALC"),
    ("5-uu-diem-cua-Double-wal.jpg", "noi-that", "Ưu điểm Double Wall", "Ưu điểm tường Double Wall"),
    ("1a.jpg", "noi-that", "Sản phẩm LBC 1", "Cấu kiện bê tông Labaco"),
    ("1b.jpg", "noi-that", "Sản phẩm LBC 2", "Cấu kiện bê tông Labaco"),
    ("1111-1.jpg", "noi-that", "Ứng dụng LBC Panel", "Ứng dụng sàn panel thực tế"),
    ("z3700615617101_4ff0137e5655b82fcb129850db489b41.jpg", "noi-that", "Panel vượt nhịp", "Sàn panel vượt nhịp thực tế"),
    ("Group-12-1.jpg", "logistics", "Kho công nghiệp", "Kho và logistics công nghiệp"),
    ("Picture1.jpg", "logistics", "Nhà kho", "Nhà kho công nghiệp Labaco"),
    ("z6214285851981_5db37dc3245818e2e76896fddf0e4307.jpg", "logistics", "Xưởng sản xuất", "Không gian xưởng sản xuất"),
    ("Rectangle-34.jpg", "logistics", "Kho logistics", "Thi công kho logistics"),
    ("thi-nghiem-1.jpg", "phong-sach", "Phòng thí nghiệm 1", "Phòng thí nghiệm vật liệu Labaco"),
    ("Thi-nghiem-2.jpg", "phong-sach", "Phòng thí nghiệm 2", "Thí nghiệm vật liệu xây dựng"),
    ("Rectangle-11-2.png", "phong-sach", "Nghiên cứu & ứng dụng", "Nghiên cứu khoa học công nghệ xây dựng"),
    ("ALC-LABACO-scaled.jpg", "phong-sach", "Vật liệu ALC", "Vật liệu ALC nghiên cứu Labaco"),
    ("Tam-be-tong-da-nang-LBC_Smart-copy-scaled.jpg", "kho-lanh", "Panel cách nhiệt", "Panel bê tông cách nhiệt"),
    ("1-Double-wall-scaled.jpg", "kho-lanh", "Tường panel", "Tường panel cách nhiệt"),
    ("Group-12-1.jpg", "kho-lanh", "Kho bảo quản", "Kho bảo quản công nghiệp"),
    ("Rectangle-38.jpg", "kho-lanh", "Kho công nghiệp", "Kho công nghiệp Labaco"),
    ("banner-labaco.webp", "nang-luong", "Giải pháp xanh", "Giải pháp xây dựng bền vững Labaco"),
    ("hoan-thien.jpg", "nang-luong", "Công trình tiết kiệm", "Công trình tiết kiệm năng lượng"),
    ("loi-di-san-vuon-scaled.jpg", "nang-luong", "Không gian xanh", "Không gian xanh công trình"),
    ("View-444-scaled.jpg", "nang-luong", "Kiến trúc bền vững", "Kiến trúc hiện đại bền vững"),
]

files = {m["file"] for m in manifest}
lines = []
seen_src = set()
for fname, cat, label, alt in MAPPING:
    if fname not in files:
        print("MISSING", fname)
        continue
    src = f"/images/labaco/{fname}"
    if src in seen_src:
        continue
    seen_src.add(src)
    lines.append(
        f'  {{ src: "{src}", label: "{label}", category: "{cat}", categoryLabel: categoryLabels["{cat}"], alt: "{alt}" }},'
    )

out = ROOT / "scripts" / "labaco-render-entries.txt"
out.write_text("\n".join(lines), encoding="utf-8")
print(f"Generated {len(lines)} entries -> {out}")