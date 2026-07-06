import Link from "next/link";
import {
  ArrowRight,
  Fan,
  Snowflake,
  Truck,
} from "@phosphor-icons/react/dist/ssr";
import { RealProjectGallery } from "@/components/RealProjectGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { homepageRealProjects } from "@/data/real-projects";

const capabilityHighlights = [
  {
    title: "Kho lạnh & phòng sạch",
    description: "Panel, HVAC và kiểm soát môi trường theo yêu cầu vận hành.",
    icon: Snowflake,
    grid: "md:col-span-5",
  },
  {
    title: "Thiết bị lạnh công nghiệp",
    description: "Dàn lạnh, dàn ngưng và cụm máy cho hệ thống trung tâm.",
    icon: Fan,
    grid: "md:col-span-4",
  },
  {
    title: "Kệ kho & xe nâng",
    description: "Tổ chức lưu trữ và bốc xếp hàng hóa tại nhà máy.",
    icon: Truck,
    grid: "md:col-span-3",
  },
];

export function RealCapabilitySection() {
  return (
    <section
      id="hinh-anh-nang-luc"
      className="section-pad scroll-mt-20"
      style={{ background: "#FFF9E8" }}
    >
      <div className="container-wide">
        <SectionHeading
          title="Hình ảnh năng lực thực tế"
          description="Một số hình ảnh thi công, lắp đặt và vận hành thực tế trong các lĩnh vực kho lạnh, phòng sạch, kệ kho, thiết bị lạnh và xe nâng công nghiệp."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-12">
          {capabilityHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`${item.grid} rounded-[22px] border border-[#E8DFC4] bg-white p-5 shadow-[0_10px_28px_rgba(90,73,26,0.07)] md:p-6`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF4C2] text-[#E6A800]">
                  <Icon size={24} weight="regular" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#102033]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#657080]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10">
          <RealProjectGallery projects={homepageRealProjects} />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/nang-luc-thuc-te"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#102033] bg-[#102033] px-6 text-sm font-semibold text-white transition-colors hover:border-[#E6A800] hover:bg-[#E6A800] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC400]/35"
          >
            Xem toàn bộ dự án
            <ArrowRight size={17} weight="bold" />
          </Link>
          <Link
            href="/lien-he#form-lien-he"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#E6A800] bg-[#FFC400] px-6 text-sm font-semibold text-[#102033] transition-colors hover:bg-[#E6A800] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC400]/35"
          >
            Liên hệ tư vấn dự án tương tự
          </Link>
        </div>
      </div>
    </section>
  );
}
