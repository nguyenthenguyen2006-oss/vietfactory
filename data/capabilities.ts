export interface Capability {
  title: string;
  description: string;
  metrics?: string;
}

export const capabilities: Capability[] = [
  {
    title: "Thiết kế kiến trúc công nghiệp",
    description:
      "Triển khai hồ sơ kiến trúc, layout sản xuất, phối cảnh 3D và bản vẽ thi công chi tiết.",
    metrics: "200+ phương án/năm",
  },
  {
    title: "Thiết kế kết cấu thép & bê tông",
    description:
      "Kết cấu tiền chế, khung bê tông, cầu trục và giải pháp mở rộng theo module.",
    metrics: "Nhịp lên đến 36m",
  },
  {
    title: "Xây dựng nhà xưởng trọn gói",
    description:
      "Thi công kết cấu, mái, hoàn thiện, MEP và PCCC. Giám sát chất lượng và bàn giao đúng tiến độ.",
    metrics: "85+ dự án",
  },
  {
    title: "Kho lạnh & Panel cách nhiệt",
    description:
      "Thiết kế phân vùng nhiệt, panel PU/PIR, cửa ra vào và hệ thống làm lạnh công nghiệp.",
    metrics: "Multi-temperature",
  },
  {
    title: "Thiết bị kho lạnh",
    description:
      "Cung cấp và lắp đặt hệ thống làm lạnh Bitzer/Copeland, panel, cửa kho lạnh và giám sát nhiệt độ 24/7.",
    metrics: "Trọn gói thiết bị",
  },
  {
    title: "Phòng sạch GMP / ISO",
    description:
      "HVAC, áp suất phòng, panel phòng sạch và validation theo tiêu chuẩn ngành.",
    metrics: "Class 7-8",
  },
  {
    title: "Cung cấp xe nâng",
    description:
      "Xe nâng diesel và pin Li-ion, cho thuê linh hoạt, bảo trì định kỳ và đào tạo vận hành an toàn.",
    metrics: "Hangcha, đa tải trọng",
  },
  {
    title: "Tư vấn đầu tư & pháp lý",
    description:
      "Hỗ trợ hồ sơ xin phép xây dựng, nghiệm thu PCCC và hoàn công.",
    metrics: "Hỗ trợ trọn gói",
  },
];

export const equipment = [
  "Hệ thống làm lạnh Bitzer / Copeland",
  "Panel kho lạnh PU/PIR cách nhiệt",
  "Cửa kho lạnh chống ẩm công nghiệp",
  "Xe nâng Hangcha diesel & Li-ion",
  "HVAC phòng sạch HEPA",
  "Sàn bê tông chịu tải Fck 25-30",
  "Hệ thống PCCC sprinkler & báo cháy",
  "Cổng tự động & bãi xe logistics",
];
