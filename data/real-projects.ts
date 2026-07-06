import type { GalleryAngle } from "./gallery";

export type RealProjectCategory =
  | "Kho lạnh"
  | "Phòng sạch"
  | "Kho hàng"
  | "Thiết bị lạnh"
  | "Xe nâng";

export interface RealProject extends GalleryAngle {
  category: RealProjectCategory;
  width: number;
  height: number;
  homepage?: boolean;
}

const A = "/assets/nang-luc-thuc-te";

export const projectCategories = [
  "Tất cả",
  "Kho lạnh",
  "Phòng sạch",
  "Kho hàng",
  "Thiết bị lạnh",
  "Xe nâng",
] as const;

export type ProjectFilter = (typeof projectCategories)[number];

export const realProjects: RealProject[] = [
  {
    src: `${A}/kho-lanh-bao-quan-hang-hoa-01.webp`,
    label: "Kho lạnh bảo quản hàng hóa",
    alt: "Kho lạnh bảo quản hàng hóa thực tế do VietFactory triển khai",
    category: "Kho lạnh",
    width: 1920,
    height: 1440,
    azimuth: 0,
    homepage: true,
  },
  {
    src: `${A}/ke-pallet-kho-hang-01.webp`,
    label: "Kệ pallet kho hàng",
    alt: "Kệ pallet kho hàng công nghiệp do VietFactory triển khai",
    category: "Kho hàng",
    width: 1920,
    height: 1440,
    azimuth: 19,
  },
  {
    src: `${A}/he-thong-dan-lanh-cong-nghiep-01.webp`,
    label: "Hệ thống dàn lạnh công nghiệp",
    alt: "Hệ thống dàn lạnh công nghiệp trong kho lạnh VietFactory",
    category: "Kho lạnh",
    width: 1920,
    height: 1646,
    azimuth: 38,
    homepage: true,
  },
  {
    src: `${A}/phong-sach-panel-cach-nhiet-01.webp`,
    label: "Phòng sạch panel cách nhiệt",
    alt: "Phòng sạch panel cách nhiệt với sàn epoxy xanh",
    category: "Phòng sạch",
    width: 1920,
    height: 1440,
    azimuth: 57,
    homepage: true,
  },
  {
    src: `${A}/thiet-bi-san-xuat-khu-vuc-sach-01.webp`,
    label: "Thiết bị sản xuất trong khu vực sạch",
    alt: "Thiết bị sản xuất inox trong khu vực phòng sạch VietFactory",
    category: "Phòng sạch",
    width: 1080,
    height: 1080,
    azimuth: 76,
  },
  {
    src: `${A}/hanh-lang-phong-sach-gmp-01.webp`,
    label: "Hành lang phòng sạch GMP",
    alt: "Hành lang phòng sạch GMP do VietFactory thi công",
    category: "Phòng sạch",
    width: 1078,
    height: 1920,
    azimuth: 95,
    homepage: true,
  },
  {
    src: `${A}/hanh-lang-phong-sach-panel-02.webp`,
    label: "Hành lang phòng sạch panel",
    alt: "Hành lang phòng sạch panel cách nhiệt hoàn thiện",
    category: "Phòng sạch",
    width: 1080,
    height: 810,
    azimuth: 114,
  },
  {
    src: `${A}/thiet-bi-inox-phong-sach-01.webp`,
    label: "Thiết bị inox trong phòng sạch",
    alt: "Thiết bị inox vận hành trong phòng sạch sàn epoxy xanh",
    category: "Phòng sạch",
    width: 1920,
    height: 1440,
    azimuth: 133,
  },
  {
    src: `${A}/day-chuyen-san-xuat-phong-sach-01.webp`,
    label: "Dây chuyền sản xuất trong khu vực sạch",
    alt: "Dây chuyền thiết bị sản xuất trong khu vực phòng sạch",
    category: "Phòng sạch",
    width: 1920,
    height: 1440,
    azimuth: 152,
    homepage: true,
  },
  {
    src: `${A}/ke-pallet-kho-hang-cao-tang-01.webp`,
    label: "Kệ pallet kho hàng cao tầng",
    alt: "Kệ pallet kho hàng cao tầng do VietFactory triển khai",
    category: "Kho hàng",
    width: 1920,
    height: 1440,
    azimuth: 171,
    homepage: true,
  },
  {
    src: `${A}/ke-pallet-kho-lanh-cao-tang-02.webp`,
    label: "Hệ thống kệ pallet kho lạnh",
    alt: "Hệ thống kệ pallet cao tầng trong kho lạnh công nghiệp",
    category: "Kho hàng",
    width: 1536,
    height: 920,
    azimuth: 190,
  },
  {
    src: `${A}/xe-nang-van-chuyen-thiet-bi-01.webp`,
    label: "Vận chuyển thiết bị bằng xe nâng",
    alt: "Xe nâng vận chuyển thiết bị công nghiệp đến khu vực lắp đặt",
    category: "Xe nâng",
    width: 1440,
    height: 1920,
    azimuth: 209,
  },
  {
    src: `${A}/xe-nang-boc-xep-hang-02.webp`,
    label: "Bốc xếp hàng hóa bằng xe nâng",
    alt: "Xe nâng bốc xếp hàng hóa tại khu công nghiệp",
    category: "Xe nâng",
    width: 1440,
    height: 1920,
    azimuth: 228,
    homepage: true,
  },
  {
    src: `${A}/xe-nang-van-chuyen-hang-03.webp`,
    label: "Vận chuyển hàng hóa bằng xe nâng",
    alt: "Xe nâng vận chuyển hàng hóa trong khu công nghiệp",
    category: "Xe nâng",
    width: 1440,
    height: 1920,
    azimuth: 247,
  },
  {
    src: `${A}/dan-ngung-thiet-bi-lanh-01.webp`,
    label: "Dàn ngưng thiết bị lạnh công nghiệp",
    alt: "Dàn ngưng thiết bị lạnh công nghiệp tại xưởng VietFactory",
    category: "Thiết bị lạnh",
    width: 1920,
    height: 1440,
    azimuth: 266,
    homepage: true,
  },
  {
    src: `${A}/cum-thiet-bi-lanh-trung-tam-01.webp`,
    label: "Cụm thiết bị lạnh trung tâm",
    alt: "Cụm thiết bị lạnh trung tâm công suất lớn của VietFactory",
    category: "Thiết bị lạnh",
    width: 1920,
    height: 1440,
    azimuth: 285,
    homepage: true,
  },
  {
    src: `${A}/thi-cong-dan-lanh-kho-lanh-01.webp`,
    label: "Thi công dàn lạnh kho lạnh",
    alt: "Thi công lắp đặt dàn lạnh bên trong kho lạnh công nghiệp",
    category: "Kho lạnh",
    width: 1920,
    height: 1440,
    azimuth: 304,
  },
  {
    src: `${A}/cum-may-lanh-cong-nghiep-02.webp`,
    label: "Cụm máy lạnh công nghiệp",
    alt: "Cụm máy lạnh công nghiệp chuẩn bị lắp đặt cho dự án",
    category: "Thiết bị lạnh",
    width: 1920,
    height: 1440,
    azimuth: 323,
  },
  {
    src: `${A}/lap-dat-dan-lanh-cong-nghiep-02.webp`,
    label: "Lắp đặt dàn lạnh công nghiệp",
    alt: "Lắp đặt dàn lạnh công nghiệp trong kho panel cách nhiệt",
    category: "Kho lạnh",
    width: 1920,
    height: 1440,
    azimuth: 342,
  },
];

export const homepageRealProjects = realProjects.filter(
  (project) => project.homepage
);

const showcaseLabels: Record<string, string> = {
  "kho-lanh-bao-quan-hang-hoa-01.webp": "Kho lạnh công nghiệp",
  "hanh-lang-phong-sach-gmp-01.webp": "Phòng sạch GMP",
  "ke-pallet-kho-hang-cao-tang-01.webp": "Kho hàng & logistics",
  "cum-thiet-bi-lanh-trung-tam-01.webp": "Thiết bị lạnh",
  "xe-nang-boc-xep-hang-02.webp": "Xe nâng công nghiệp",
  "thiet-bi-san-xuat-khu-vuc-sach-01.webp": "Thiết bị khu vực sạch",
};

const showcaseSources = [
  "kho-lanh-bao-quan-hang-hoa-01.webp",
  "hanh-lang-phong-sach-gmp-01.webp",
  "ke-pallet-kho-hang-cao-tang-01.webp",
  "cum-thiet-bi-lanh-trung-tam-01.webp",
  "xe-nang-boc-xep-hang-02.webp",
  "thiet-bi-san-xuat-khu-vuc-sach-01.webp",
];

export const homepageCapabilityShowcase: GalleryAngle[] = showcaseSources.map(
  (file) => {
    const project = realProjects.find((item) => item.src.endsWith(file));
    if (!project) throw new Error(`Không tìm thấy ảnh năng lực: ${file}`);

    return {
      src: project.src,
      label: showcaseLabels[file],
      alt: project.alt,
      azimuth: project.azimuth,
    };
  }
);
