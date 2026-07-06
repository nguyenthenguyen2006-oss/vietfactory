export const mainNav = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Năng lực", href: "/nang-luc" },
  { label: "Dịch vụ", href: "/dich-vu" },
  { label: "Liên hệ", href: "/lien-he" },
] as const;

export const footerNav = {
  company: [
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Năng lực", href: "/nang-luc" },
    { label: "Dự án thực tế", href: "/nang-luc-thuc-te" },
    { label: "Liên hệ", href: "/lien-he" },
  ],
  services: [
    { label: "Thiết kế nhà xưởng", href: "/dich-vu/thiet-ke-nha-xuong" },
    { label: "Xây dựng nhà xưởng", href: "/dich-vu/xay-dung-nha-xuong" },
    { label: "Xây dựng kho lạnh", href: "/dich-vu/kho-lanh" },
    { label: "Xây dựng phòng sạch", href: "/dich-vu/phong-sach" },
    { label: "Thiết bị kho lạnh", href: "/dich-vu/thiet-bi-kho-lanh" },
    { label: "Cung cấp xe nâng", href: "/dich-vu/xe-nang" },
  ],
} as const;
