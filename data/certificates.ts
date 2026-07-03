export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export const certificates: Certificate[] = [
  {
    id: "gpkd",
    title: "Giấy phép kinh doanh",
    issuer: "Sở Kế hoạch & Đầu tư",
    year: "2013",
  },
  {
    id: "xd-hang-1",
    title: "Chứng chỉ xây dựng hạng I",
    issuer: "Bộ Xây dựng",
    year: "2018",
  },
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    issuer: "Tổ chức chứng nhận quốc tế",
    year: "2020",
  },
  {
    id: "iso-14001",
    title: "ISO 14001:2015",
    issuer: "Tổ chức chứng nhận quốc tế",
    year: "2021",
  },
  {
    id: "pccc",
    title: "Chứng nhận PCCC",
    issuer: "Cục Cảnh sát PCCC",
    year: "2022",
  },
  {
    id: "an-toan-lao-dong",
    title: "Chứng nhận an toàn lao động",
    issuer: "Bộ Lao động",
    year: "2023",
  },
  {
    id: "iso-45001",
    title: "ISO 45001:2018",
    issuer: "An toàn nghề nghiệp",
    year: "2023",
  },
  {
    id: "chung-chi-mep",
    title: "Chứng chỉ MEP công nghiệp",
    issuer: "Hiệp hội Xây dựng",
    year: "2024",
  },
];