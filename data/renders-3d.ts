export type RenderCategory =
  | "nha-xuong"
  | "kho-lanh"
  | "phong-sach"
  | "logistics"
  | "nang-luong"
  | "tong-the"
  | "noi-that";

export interface Render3DImage {
  src: string;
  label: string;
  category: RenderCategory;
  categoryLabel: string;
  alt: string;
}

const V = "/images/vietfactory";
const P = "/images/projects/nha-xuong-logistics";
const S = "/images/services";

const categoryLabels: Record<RenderCategory, string> = {
  "nha-xuong": "Nhà xưởng",
  "kho-lanh": "Kho lạnh",
  "phong-sach": "Phòng sạch",
  logistics: "Logistics",
  "nang-luong": "Năng lượng xanh",
  "tong-the": "Tổng thể công trình",
  "noi-that": "Không gian sản xuất",
};

export const renderCategories: { value: RenderCategory | "all"; label: string }[] = [
  { value: "all", label: "Tất cả" },
  { value: "nha-xuong", label: categoryLabels["nha-xuong"] },
  { value: "logistics", label: categoryLabels.logistics },
  { value: "kho-lanh", label: categoryLabels["kho-lanh"] },
  { value: "phong-sach", label: categoryLabels["phong-sach"] },
  { value: "nang-luong", label: categoryLabels["nang-luong"] },
  { value: "noi-that", label: categoryLabels["noi-that"] },
  { value: "tong-the", label: categoryLabels["tong-the"] },
];

export const render3DImages: Render3DImage[] = [
  {
    src: `${V}/hero-industrial-campus-v2.webp`,
    label: "Tổ hợp công nghiệp",
    category: "tong-the",
    categoryLabel: categoryLabels["tong-the"],
    alt: "Tổ hợp nhà xưởng và khu logistics hiện đại",
  },
  {
    src: `${V}/service-factory-design-v2.webp`,
    label: "Phối hợp thiết kế",
    category: "nha-xuong",
    categoryLabel: categoryLabels["nha-xuong"],
    alt: "Kỹ sư phối hợp thiết kế kết cấu nhà xưởng",
  },
  {
    src: `${V}/service-factory-construction-v2.webp`,
    label: "Thi công kết cấu thép",
    category: "nha-xuong",
    categoryLabel: categoryLabels["nha-xuong"],
    alt: "Thi công kết cấu thép nhà xưởng công nghiệp",
  },
  {
    src: `${P}/angle-01.jpg`,
    label: "Quy hoạch tổng mặt bằng",
    category: "tong-the",
    categoryLabel: categoryLabels["tong-the"],
    alt: "Mô hình tổng mặt bằng nhà xưởng logistics",
  },
  {
    src: `${P}/angle-02.jpg`,
    label: "Khu xuất nhập hàng",
    category: "logistics",
    categoryLabel: categoryLabels.logistics,
    alt: "Phối cảnh khu xuất nhập hàng của nhà xưởng",
  },
  {
    src: `${P}/angle-04.jpg`,
    label: "Mái năng lượng mặt trời",
    category: "nang-luong",
    categoryLabel: categoryLabels["nang-luong"],
    alt: "Phối cảnh nhà xưởng sử dụng điện mặt trời mái nhà",
  },
  {
    src: `${P}/angle-07.jpg`,
    label: "Mặt đứng khu logistics",
    category: "logistics",
    categoryLabel: categoryLabels.logistics,
    alt: "Mặt đứng khu nhà xưởng và bến xuất nhập hàng",
  },
  {
    src: `${V}/service-cold-storage-v2.webp`,
    label: "Kho lạnh công nghiệp",
    category: "kho-lanh",
    categoryLabel: categoryLabels["kho-lanh"],
    alt: "Kho lạnh công nghiệp với cửa cách nhiệt",
  },
  {
    src: `${S}/kho-lanh.png`,
    label: "Panel và cửa kho",
    category: "kho-lanh",
    categoryLabel: categoryLabels["kho-lanh"],
    alt: "Panel cách nhiệt và cửa kho lạnh",
  },
  {
    src: `${V}/service-refrigeration-v2.webp`,
    label: "Cụm thiết bị lạnh",
    category: "kho-lanh",
    categoryLabel: categoryLabels["kho-lanh"],
    alt: "Cụm máy nén của hệ thống lạnh công nghiệp",
  },
  {
    src: `${V}/service-cleanroom-v2.webp`,
    label: "Hành lang phòng sạch",
    category: "phong-sach",
    categoryLabel: categoryLabels["phong-sach"],
    alt: "Hành lang phòng sạch tiêu chuẩn GMP",
  },
  {
    src: `${S}/phong-sach.png`,
    label: "Không gian sản xuất sạch",
    category: "phong-sach",
    categoryLabel: categoryLabels["phong-sach"],
    alt: "Không gian sản xuất sạch với hệ HVAC",
  },
  {
    src: `${V}/forklift-operation-real-v2.webp`,
    label: "Xe nâng trong xưởng",
    category: "logistics",
    categoryLabel: categoryLabels.logistics,
    alt: "Xe nâng Hangcha vận hành trong xưởng sản xuất",
  },
  {
    src: `${V}/forklift-production-real-v2.webp`,
    label: "Nâng hạ vật liệu",
    category: "noi-that",
    categoryLabel: categoryLabels["noi-that"],
    alt: "Xe nâng hàng trong không gian sản xuất",
  },
  {
    src: `${V}/service-refrigeration-v2.webp`,
    label: "Phòng máy kỹ thuật",
    category: "noi-that",
    categoryLabel: categoryLabels["noi-that"],
    alt: "Không gian phòng máy kỹ thuật công nghiệp",
  },
];

export function getRendersByCategory(
  category: RenderCategory | "all"
): Render3DImage[] {
  if (category === "all") return render3DImages;
  return render3DImages.filter((render) => render.category === category);
}

export function buildGalleryFromRenders(
  paths: string[],
  labels?: string[]
): { src: string; label: string; azimuth: number; alt: string }[] {
  return paths.map((src, index) => {
    const match = render3DImages.find((render) => render.src === src);
    return {
      src,
      label: labels?.[index] ?? match?.label ?? `Góc nhìn ${index + 1}`,
      azimuth: index * 51,
      alt: match?.alt ?? `Phối cảnh công nghiệp ${index + 1}`,
    };
  });
}

export function getRenderCover(category: RenderCategory, index = 0): string {
  const items = getRendersByCategory(category);
  return items[index % items.length]?.src ?? render3DImages[0].src;
}

export function getRenderAt(index: number): Render3DImage {
  return render3DImages[index % render3DImages.length];
}
