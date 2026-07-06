import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { CTASection } from "@/components/CTASection";
import { GroupedRealProjects } from "@/components/GroupedRealProjects";
import { HeroSection } from "@/components/HeroSection";
import { realProjects } from "@/data/real-projects";

export const metadata: Metadata = {
  title: "Dự án & năng lực thực tế",
  description:
    "Hình ảnh thực tế các dự án kho lạnh, phòng sạch, kho hàng, thiết bị lạnh và xe nâng công nghiệp do VietFactory triển khai.",
};

export default function RealCapabilitiesPage() {
  return (
    <>
      <HeroSection
        title="Dự án & năng lực thực tế"
        subtitle="Công trình, thiết bị và hoạt động vận hành được ghi nhận trực tiếp tại các dự án VietFactory triển khai."
        compact
        show3D={false}
        backgroundImage="/assets/nang-luc-thuc-te/kho-lanh-bao-quan-hang-hoa-01.webp"
      />

      <section className="section-pad" style={{ background: "#FFF9E8" }}>
        <div className="container-wide">
          <div className="mb-14 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#102033] md:text-5xl">
              Hình ảnh từ công trình và vận hành thực tế
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#657080] md:text-lg">
              Toàn bộ hình ảnh được sắp xếp theo nhóm năng lực để khách hàng dễ
              đối chiếu với nhu cầu dự án.
            </p>
            <Link
              href="/lien-he#form-lien-he"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FFC400] px-6 text-sm font-semibold text-[#102033] transition-colors hover:bg-[#E6A800] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC400]/35"
            >
              Liên hệ tư vấn dự án tương tự
              <ArrowRight size={17} weight="bold" />
            </Link>
          </div>

          <GroupedRealProjects projects={realProjects} />
        </div>
      </section>

      <CTASection
        title="Trao đổi phương án cho dự án của bạn"
        description="Gửi quy mô, yêu cầu vận hành và địa điểm dự kiến. Đội ngũ VietFactory sẽ tư vấn cấu hình phù hợp."
      />
    </>
  );
}
