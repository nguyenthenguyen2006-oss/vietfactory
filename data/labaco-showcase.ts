import type { GalleryAngle } from "./gallery";

const V = "/images/vietfactory";
const P = "/images/projects/nha-xuong-logistics";
const S = "/images/services";

export const labacoHeroImage = `${V}/hero-industrial-campus-v2.webp`;

export const solutionShowcase: { src: string; label: string; alt: string }[] = [
  {
    src: `${V}/service-factory-design-v2.webp`,
    label: "Thiết kế nhà xưởng",
    alt: "Kỹ sư phối hợp thiết kế kết cấu nhà xưởng công nghiệp",
  },
  {
    src: `${V}/service-factory-construction-v2.webp`,
    label: "Thi công kết cấu thép",
    alt: "Thi công khung thép cho nhà xưởng công nghiệp",
  },
  {
    src: `${V}/service-cold-storage-v2.webp`,
    label: "Kho lạnh công nghiệp",
    alt: "Kho lạnh công nghiệp với cửa và panel cách nhiệt",
  },
  {
    src: `${V}/service-cleanroom-v2.webp`,
    label: "Phòng sạch GMP",
    alt: "Hành lang phòng sạch GMP với hệ thống lọc khí",
  },
  {
    src: `${V}/service-refrigeration-v2.webp`,
    label: "Thiết bị lạnh",
    alt: "Cụm máy nén và đường ống của hệ thống lạnh công nghiệp",
  },
  {
    src: `${V}/forklift-operation-real-v2.webp`,
    label: "Xe nâng Hangcha",
    alt: "Xe nâng Hangcha vận hành tại xưởng sản xuất",
  },
];

export function toGallery(
  items: { src: string; label: string; alt: string }[]
): GalleryAngle[] {
  return items.map((item, i) => ({
    src: item.src,
    label: item.label,
    alt: item.alt,
    azimuth: i * 51,
  }));
}

export const serviceGalleries = {
  "thiet-ke-nha-xuong": toGallery([
    {
      src: `${V}/service-factory-design-v2.webp`,
      label: "Phối hợp thiết kế",
      alt: "Kỹ sư phối hợp thiết kế kết cấu nhà xưởng",
    },
    {
      src: `${P}/angle-01.jpg`,
      label: "Quy hoạch tổng mặt bằng",
      alt: "Mô hình quy hoạch tổng mặt bằng nhà xưởng logistics",
    },
    {
      src: `${P}/angle-04.jpg`,
      label: "Phương án tổng thể",
      alt: "Phương án tổng thể nhà xưởng và sân logistics",
    },
    {
      src: `${P}/angle-07.jpg`,
      label: "Mặt đứng nhà xưởng",
      alt: "Phối cảnh mặt đứng nhà xưởng công nghiệp",
    },
  ]),
  "xay-dung-nha-xuong": toGallery([
    {
      src: `${V}/service-factory-construction-v2.webp`,
      label: "Thi công khung thép",
      alt: "Thi công khung thép nhà xưởng công nghiệp",
    },
    {
      src: `${P}/angle-02.jpg`,
      label: "Khu xuất nhập hàng",
      alt: "Phối cảnh khu xuất nhập hàng của nhà xưởng",
    },
    {
      src: `${P}/angle-07.jpg`,
      label: "Nhà xưởng hoàn thiện",
      alt: "Phối cảnh nhà xưởng công nghiệp sau hoàn thiện",
    },
  ]),
  "kho-lanh": toGallery([
    {
      src: `${V}/service-cold-storage-v2.webp`,
      label: "Không gian kho lạnh",
      alt: "Không gian kho lạnh với cửa cách nhiệt",
    },
    {
      src: `${S}/kho-lanh.png`,
      label: "Cửa và panel cách nhiệt",
      alt: "Hệ cửa và panel cách nhiệt của kho lạnh",
    },
    {
      src: `${V}/service-refrigeration-v2.webp`,
      label: "Hệ thống làm lạnh",
      alt: "Cụm thiết bị làm lạnh công nghiệp",
    },
  ]),
  "phong-sach": toGallery([
    {
      src: `${V}/service-cleanroom-v2.webp`,
      label: "Hành lang phòng sạch",
      alt: "Hành lang phòng sạch tiêu chuẩn GMP",
    },
    {
      src: `${S}/phong-sach.png`,
      label: "Không gian sản xuất sạch",
      alt: "Không gian sản xuất sạch với sàn epoxy và hệ HVAC",
    },
  ]),
  "thiet-bi-kho-lanh": toGallery([
    {
      src: `${V}/service-refrigeration-v2.webp`,
      label: "Cụm máy nén",
      alt: "Cụm máy nén và đường ống hệ thống lạnh",
    },
    {
      src: `${V}/service-cold-storage-v2.webp`,
      label: "Thiết bị trong kho",
      alt: "Thiết bị bay hơi lắp đặt trong kho lạnh",
    },
    {
      src: `${S}/kho-lanh.png`,
      label: "Panel và cửa kho",
      alt: "Panel cách nhiệt và cửa kho lạnh công nghiệp",
    },
  ]),
  "xe-nang": toGallery([
    {
      src: `${V}/forklift-operation-real-v2.webp`,
      label: "Vận hành trong xưởng",
      alt: "Xe nâng Hangcha vận hành tại xưởng gỗ",
    },
    {
      src: `${V}/forklift-production-real-v2.webp`,
      label: "Nâng hạ vật liệu",
      alt: "Xe nâng Hangcha nâng hạ vật liệu trong xưởng",
    },
    {
      src: `${V}/forklift-side-real-v2.webp`,
      label: "Thân xe và khung nâng",
      alt: "Góc ngang xe nâng Hangcha tải trọng 3,5 tấn",
    },
    {
      src: `${V}/forklift-rear-real-v2.webp`,
      label: "Góc nhìn phía sau",
      alt: "Góc nhìn phía sau xe nâng Hangcha",
    },
  ]),
} as const;

export const serviceCovers = {
  "thiet-ke-nha-xuong": `${V}/service-factory-design-v2.webp`,
  "xay-dung-nha-xuong": `${V}/service-factory-construction-v2.webp`,
  "kho-lanh": `${V}/service-cold-storage-v2.webp`,
  "phong-sach": `${V}/service-cleanroom-v2.webp`,
  "thiet-bi-kho-lanh": `${V}/service-refrigeration-v2.webp`,
  "xe-nang": `${V}/forklift-operation-real-v2.webp`,
} as const;
