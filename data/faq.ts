export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = [
  "Tổng quan",
  "Thiết kế",
  "Thi công",
  "Kho lạnh",
  "Phòng sạch",
  "Chi phí",
] as const;

export const faqs: FAQItem[] = [
  {
    category: "Tổng quan",
    question: "VietFactory cung cấp những dịch vụ gì?",
    answer:
      "Chúng tôi cung cấp: (1) Thiết kế nhà xưởng và công trình công nghiệp, (2) Xây dựng nhà xưởng trọn gói, (3) Xây dựng phòng sạch GMP/ISO, (4) Xây dựng kho lạnh, (5) Cung cấp trang thiết bị kho lạnh, (6) Cung cấp và cho thuê xe nâng công nghiệp.",
  },
  {
    category: "Tổng quan",
    question: "Có nhận dự án ở tỉnh thành khác không?",
    answer:
      "Có, chúng tôi triển khai dự án tại các khu công nghiệp trên toàn quốc, đặc biệt khu vực phía Nam và các tỉnh lân cận TP.HCM.",
  },
  {
    category: "Thiết kế",
    question: "Thời gian thiết kế nhà xưởng bao lâu?",
    answer:
      "Tùy quy mô: dự án dưới 5.000 m² thường 4-6 tuần, dự án lớn hơn 10.000 m² có thể 8-12 tuần cho hồ sơ thiết kế cơ sở và chi tiết.",
  },
  {
    category: "Thiết kế",
    question: "Có hỗ trợ mô hình 3D và phối cảnh không?",
    answer:
      "Có, mọi dự án đều có phối cảnh đa góc. Dự án lớn được trình bày qua viewer 3D interactive, sẵn sàng tích hợp file GLB khi có.",
  },
  {
    category: "Thiết kế",
    question: "Một bản vẽ tốt có giúp tiết kiệm chi phí thi công không?",
    answer:
      "Có. Hồ sơ thiết kế đồng bộ giúp giảm phát sinh tại công trường, tránh sửa chữa và rút ngắn thời gian nghiệm thu.",
  },
  {
    category: "Thi công",
    question: "Thi công trọn gói gồm những hạng mục nào?",
    answer:
      "Bao gồm kết cấu, mái, hoàn thiện, MEP, PCCC và nghiệm thu. Chủ đầu tư nhận báo cáo tiến độ định kỳ và biên bản nghiệm thu từng giai đoạn.",
  },
  {
    category: "Thi công",
    question: "Có thi công theo hồ sơ của bên thứ ba không?",
    answer:
      "Có, chúng tôi thi công theo hồ sơ thiết kế do chủ đầu tư hoặc đối tác cung cấp, với cam kết tuân thủ bản vẽ đã duyệt.",
  },
  {
    category: "Thi công",
    question: "Nhà xưởng tiền chế hay bê tông tốt hơn?",
    answer:
      "Tiền chế phù hợp triển khai nhanh và mở rộng module. Bê tông cốt thép phù hợp nhịp lớn và tải trọng cao. Lựa chọn phụ thuộc địa chất, ngân sách và kế hoạch mở rộng.",
  },
  {
    category: "Kho lạnh",
    question: "Kho lạnh có thể phân nhiều vùng nhiệt không?",
    answer:
      "Có, chúng tôi thiết kế multi-temperature với panel ngăn vùng, hệ làm lạnh riêng và giám sát nhiệt độ theo từng khoang.",
  },
  {
    category: "Kho lạnh",
    question: "Chi phí vận hành kho lạnh phụ thuộc vào đâu?",
    answer:
      "Phụ thuộc diện tích, số vùng nhiệt, tần suất mở cửa, loại panel và công suất hệ làm lạnh. Thiết kế đúng ngay từ đầu giúp tiết kiệm điện năng đáng kể.",
  },
  {
    category: "Phòng sạch",
    question: "Phòng sạch class nào phù hợp ngành dược?",
    answer:
      "Khu sản xuất thường ISO Class 7, khu phụ trợ Class 8. Yêu cầu cụ thể phụ thuộc công đoạn và quy định GMP của từng sản phẩm.",
  },
  {
    category: "Phòng sạch",
    question: "Có hỗ trợ validation phòng sạch không?",
    answer:
      "Có, chúng tôi phối hợp kiểm tra áp suất, lưu lượng gió, độ sạch hạt và bàn giao hồ sơ validation theo yêu cầu.",
  },
  {
    category: "Chi phí",
    question: "Báo giá xây dựng nhà xưởng phụ thuộc yếu tố nào?",
    answer:
      "Quy mô diện tích, loại kết cấu, yêu cầu kỹ thuật (kho lạnh, phòng sạch), địa hình, vật liệu và thời gian triển khai. Báo giá tối ưu không phải báo giá rẻ nhất.",
  },
  {
    category: "Chi phí",
    question: "Có tư vấn miễn phí ban đầu không?",
    answer:
      "Có, chúng tôi trao đổi sơ bộ về quy mô, ngành nghề và phương án kỹ thuật. Khảo sát hiện trường và lập phương án chi tiết sẽ được báo giá riêng.",
  },
];