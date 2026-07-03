import type { GalleryAngle } from "./gallery";
import { serviceCovers, serviceGalleries } from "./labaco-showcase";

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  highlights: string[];
  process: string[];
  faq: { question: string; answer: string }[];
  gallery?: GalleryAngle[];
  specs?: ServiceSpec[];
}

export const services: Service[] = [
  {
    slug: "thiet-ke-nha-xuong",
    title: "Thiết kế nhà xưởng",
    shortDescription:
      "Phân tích chuyên sâu layout sản xuất, logistics và kết cấu theo quy mô và kế hoạch mở rộng của doanh nghiệp.",
    description:
      "Chúng tôi triển khai thiết kế nhà xưởng từ khảo sát hiện trường đến bản vẽ thi công chi tiết. Mỗi phương án được tối ưu theo ngành nghề, luồng vật liệu và yêu cầu PCCC.",
    coverImage: serviceCovers["thiet-ke-nha-xuong"],
    gallery: serviceGalleries["thiet-ke-nha-xuong"],
    highlights: [
      "Layout sản xuất và logistics hợp lý",
      "Kết cấu thép tiền chế hoặc bê tông theo nhu cầu",
      "Mô hình 3D và phối cảnh đa góc trình bày phương án",
      "Hồ sơ đồng bộ phục vụ thi công",
    ],
    process: [
      "Khảo sát và thu thập yêu cầu sản xuất",
      "Phương án sơ bộ và mô hình 3D",
      "Thiết kế kỹ thuật chi tiết",
      "Bàn giao hồ sơ thi công",
    ],
    faq: [
      {
        question: "Thời gian thiết kế nhà xưởng bao lâu?",
        answer:
          "Tùy quy mô, thông thường 4-8 tuần cho hồ sơ thiết kế cơ sở và chi tiết.",
      },
      {
        question: "Có hỗ trợ xin giấy phép xây dựng không?",
        answer:
          "Có, chúng tôi hỗ trợ hoàn thiện hồ sơ pháp lý theo yêu cầu địa phương.",
      },
    ],
  },
  {
    slug: "xay-dung-nha-xuong",
    title: "Xây dựng nhà xưởng",
    shortDescription:
      "Thế mạnh triển khai trọn gói: thi công, giám sát chất lượng, an toàn lao động và báo cáo tiến độ minh bạch.",
    description:
      "Triển khai thi công nhà xưởng theo hồ sơ thiết kế đã duyệt. Quy trình giám sát chặt chẽ, báo cáo tiến độ minh bạch và nghiệm thu từng hạng mục.",
    coverImage: serviceCovers["xay-dung-nha-xuong"],
    gallery: serviceGalleries["xay-dung-nha-xuong"],
    highlights: [
      "Thi công kết cấu, mái và hoàn thiện",
      "Giám sát chất lượng theo tiêu chuẩn",
      "An toàn lao động trên công trường",
      "Bàn giao đúng tiến độ cam kết",
    ],
    process: [
      "Mobilization và mặt bằng thi công",
      "Thi công kết cấu chính",
      "Lắp đặt MEP và hoàn thiện",
      "Nghiệm thu và bàn giao",
    ],
    faq: [
      {
        question: "Có thi công theo hồ sơ bên thứ ba không?",
        answer: "Có, chúng tôi thi công theo hồ sơ thiết kế của chủ đầu tư hoặc đối tác.",
      },
    ],
  },
  {
    slug: "kho-lanh",
    title: "Kho lạnh",
    shortDescription:
      "Thiết kế và thi công kho lạnh multi-temperature với panel, hệ làm lạnh và sàn chịu tải.",
    description:
      "Giải pháp kho lạnh trọn gói từ thiết kế phân vùng nhiệt độ, chọn panel cách nhiệt đến lắp đặt hệ thống làm lạnh và vận hành thử.",
    coverImage: serviceCovers["kho-lanh"],
    gallery: serviceGalleries["kho-lanh"],
    highlights: [
      "Panel cách nhiệt tiêu chuẩn công nghiệp",
      "Phân vùng nhiệt độ linh hoạt",
      "Hệ thống giám sát nhiệt độ",
      "Sàn bê tông chịu tải xe nâng",
    ],
    process: [
      "Khảo sát nhu cầu lưu trữ",
      "Thiết kế kho lạnh và hệ làm lạnh",
      "Thi công panel và lắp đặt",
      "Vận hành thử và bàn giao",
    ],
    faq: [
      {
        question: "Kho lạnh có thể mở rộng sau này không?",
        answer:
          "Có, chúng tôi thiết kế module hóa để mở rộng theo giai đoạn đầu tư.",
      },
    ],
  },
  {
    slug: "phong-sach",
    title: "Phòng sạch",
    shortDescription:
      "Thiết kế và thi công phòng sạch GMP, ISO với HVAC, panel và luồng người-hàng chuẩn.",
    description:
      "Triển khai phòng sạch cho dược phẩm, thực phẩm, điện tử. Thiết kế áp suất, lọc khí và vật liệu phòng sạch đạt tiêu chuẩn ngành.",
    coverImage: serviceCovers["phong-sach"],
    gallery: serviceGalleries["phong-sach"],
    highlights: [
      "Đạt tiêu chuẩn GMP / ISO",
      "Hệ HVAC và lọc khí HEPA",
      "Luồng người và hàng tách biệt",
      "Giám sát môi trường liên tục",
    ],
    process: [
      "Xác định class phòng sạch",
      "Thiết kế layout và HVAC",
      "Thi công panel phòng sạch",
      "Validation và bàn giao",
    ],
    faq: [
      {
        question: "Phòng sạch class nào phù hợp ngành dược?",
        answer:
          "Tùy công đoạn sản xuất, thường từ ISO Class 7 đến Class 8 cho khu vực phụ trợ.",
      },
    ],
  },
  {
    slug: "thiet-bi-kho-lanh",
    title: "Thiết bị kho lạnh",
    shortDescription:
      "Cung cấp và lắp đặt hệ thống làm lạnh, panel cách nhiệt, cửa kho lạnh và thiết bị phụ trợ cho kho lạnh công nghiệp.",
    description:
      "VietFactory cung cấp đầy đủ trang thiết bị kho lạnh công nghiệp: hệ thống làm lạnh công suất lớn (Bitzer, Copeland), panel cách nhiệt PU/PIR đạt chuẩn, cửa kho lạnh chống ẩm, hệ thống giám sát nhiệt độ 24/7 và sàn bê tông chịu tải xe nâng. Tư vấn lựa chọn thiết bị phù hợp quy mô và yêu cầu bảo quản từng loại hàng hóa.",
    coverImage: serviceCovers["thiet-bi-kho-lanh"],
    gallery: serviceGalleries["thiet-bi-kho-lanh"],
    highlights: [
      "Hệ thống làm lạnh Bitzer / Copeland công suất cao",
      "Panel cách nhiệt PU/PIR đạt tiêu chuẩn công nghiệp",
      "Cửa kho lạnh chống ẩm, giữ nhiệt tối ưu",
      "Hệ thống giám sát và cảnh báo nhiệt độ 24/7",
      "Tư vấn và lắp đặt trọn gói tại công trình",
    ],
    process: [
      "Khảo sát nhu cầu bảo quản và quy mô kho",
      "Tư vấn thiết bị phù hợp tải nhiệt và ngân sách",
      "Cung cấp và vận chuyển thiết bị đến công trình",
      "Lắp đặt, kiểm tra và vận hành thử",
      "Bàn giao hồ sơ kỹ thuật và hỗ trợ bảo trì",
    ],
    faq: [
      {
        question: "Thiết bị kho lạnh nào phù hợp cho thực phẩm đông lạnh?",
        answer:
          "Hệ thống làm lạnh Bitzer hoặc Copeland kết hợp panel PU 100mm trở lên, cửa kho lạnh đôi chống ẩm và hệ giám sát nhiệt độ liên tục là giải pháp tiêu chuẩn cho kho đông lạnh thực phẩm.",
      },
      {
        question: "Có hỗ trợ bảo trì thiết bị sau lắp đặt không?",
        answer:
          "Có, chúng tôi cung cấp gói bảo trì định kỳ, thay thế phụ tùng và hỗ trợ kỹ thuật khi sự cố.",
      },
    ],
  },
  {
    slug: "xe-nang",
    title: "Cung cấp xe nâng",
    shortDescription:
      "Cung cấp, cho thuê và bảo trì xe nâng công nghiệp, tích hợp bố trí nhà xưởng, kho bãi và logistics.",
    description:
      "VietFactory triển khai giải pháp xe nâng trọn gói cho nhà máy và kho logistics: tư vấn công suất nâng hạ, cung cấp xe nâng diesel và pin Li-ion, giao xe tại công trình, đào tạo vận hành an toàn và bảo dưỡng định kỳ. Khi thi công nhà xưởng, chúng tôi phối hợp bố trí lối đi, sàn chịu tải và khu vực sạc pin ngay từ giai đoạn thiết kế.",
    coverImage: serviceCovers["xe-nang"],
    gallery: serviceGalleries["xe-nang"],
    highlights: [
      "Xe nâng diesel và pin Li-ion đa tải trọng",
      "Cho thuê ngắn hạn / dài hạn theo mùa vụ sản xuất",
      "Bảo trì, sửa chữa và cung cấp phụ tùng chính hãng",
      "Tích hợp layout nhà xưởng, kho lạnh và bãi container",
      "Đào tạo vận hành và kiểm định an toàn lao động",
    ],
    process: [
      "Khảo sát nhu cầu nâng hạ, chiều cao kệ và không gian làm việc",
      "Tư vấn model, tải trọng và nguồn năng lượng phù hợp",
      "Cung cấp / cho thuê, giao xe và lắp đặt tại công trình",
      "Đào tạo vận hành và bàn giao hồ sơ kỹ thuật",
      "Bảo dưỡng định kỳ và hỗ trợ kỹ thuật 24/7",
    ],
    faq: [
      {
        question: "Nên chọn xe nâng diesel hay pin Li-ion?",
        answer:
          "Xe diesel phù hợp công trường ngoài trời và tải trọng lớn (3-3,5 tấn). Xe Li-ion tối ưu cho kho trong nhà: không khí thải, sạc nhanh, vận hành êm và chi phí năng lượng thấp hơn.",
      },
      {
        question: "Có cho thuê xe nâng theo tháng không?",
        answer:
          "Có, chúng tôi hỗ trợ cho thuê linh hoạt theo ngày, tháng hoặc mùa vụ, kèm bảo trì và thay xe dự phòng khi cần.",
      },
      {
        question: "Có tích hợp xe nâng khi thi công nhà xưởng không?",
        answer:
          "Có, từ giai đoạn thiết kế chúng tôi tính toán sàn chịu tải, bán kính quay, chiều rộng lối đi và vị trí sạc pin để vận hành tối ưu ngay khi bàn giao công trình.",
      },
      {
        question: "Thời gian bảo dưỡng định kỳ bao lâu một lần?",
        answer:
          "Khuyến nghị kiểm tra 250 giờ vận hành hoặc hàng tháng; bảo dưỡng toàn diện mỗi 2.000 giờ hoặc 6 tháng tùy cường độ sử dụng.",
      },
    ],
    specs: [
      { label: "Dòng sản phẩm", value: "Hangcha, diesel & pin Li-ion" },
      { label: "Model diesel", value: "CPCD35-XRG28" },
      { label: "Tải trọng nâng", value: "3.500 kg (tâm tải 500 mm)" },
      { label: "Chiều cao nâng tối đa", value: "3.000 mm" },
      { label: "Trọng lượng xe", value: "4.750 kg" },
      { label: "Công suất động cơ", value: "42 kW @ 2.650 v/phút" },
      { label: "Model Li-ion", value: "XE 20, pin lithium" },
      { label: "Ứng dụng", value: "Kho bãi, nhà xưởng, logistics, kho lạnh" },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
