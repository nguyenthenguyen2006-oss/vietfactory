export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    year: "2013",
    title: "Thành lập VietFactory",
    description: "Bắt đầu hoạt động tư vấn thiết kế nhà xưởng tại khu vực Bình Dương.",
  },
  {
    year: "2016",
    title: "Mở rộng hạng mục kho lạnh",
    description: "Triển khai thiết kế và thi công kho lạnh cho ngành thực phẩm và logistics.",
  },
  {
    year: "2019",
    title: "Phòng sạch GMP",
    description: "Bổ sung năng lực phòng sạch phục vụ dược phẩm và thiết bị y tế.",
  },
  {
    year: "2022",
    title: "Tích hợp mô hình 3D",
    description: "Áp dụng phối cảnh đa góc và viewer 3D interactive trong trình bày phương án.",
  },
  {
    year: "2025",
    title: "85+ dự án hoàn thành",
    description: "Mở rộng phục vụ nhà đầu tư trong và ngoài nước tại các KCN phía Nam.",
  },
];