export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Phương án layout logistics được trình bày rõ qua mô hình 3D, giúp ban lãnh đạo thống nhất phạm vi trước khi thi công. Tiến độ bàn giao đúng cam kết.",
    author: "Nguyễn Văn A",
    role: "Giám đốc dự án",
    company: "Công ty Logistics (placeholder)",
    project: "Nhà xưởng Logistics Bình Dương",
  },
  {
    quote:
      "Đội ngũ nắm rõ yêu cầu GMP và phối hợp tốt với bên tư vấn dược. Hệ HVAC và panel phòng sạch đạt tiêu chuẩn nghiệm thu.",
    author: "Trần Thị B",
    role: "Trưởng phòng Kỹ thuật",
    company: "Công ty Dược phẩm (placeholder)",
    project: "Phòng sạch sản xuất dược",
  },
  {
    quote:
      "Kho lạnh multi-temperature vận hành ổn định, hệ giám sát nhiệt độ rõ ràng. Chi phí điện năng trong mức dự kiến nhờ thiết kế phân vùng hợp lý.",
    author: "Lê Minh C",
    role: "Quản lý vận hành",
    company: "Công ty Thực phẩm (placeholder)",
    project: "Kho lạnh thực phẩm đông lạnh",
  },
  {
    quote:
      "Báo cáo tiến độ minh bạch theo tuần, giám sát chất lượng chặt chẽ. Phù hợp doanh nghiệp cần đối tác thi công trọn gói.",
    author: "Phạm Đức D",
    role: "Chủ đầu tư",
    company: "Công ty Sản xuất (placeholder)",
    project: "Nhà xưởng sản xuất cơ khí",
  },
];