import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectShowcaseSection } from "@/components/ProjectShowcaseSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { company } from "@/data/company";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description: `Dịch vụ thiết kế và thi công nhà xưởng, kho lạnh, phòng sạch của ${company.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Dịch vụ công trình công nghiệp"
        subtitle="Thiết kế, thi công và giải pháp tổng thể cho nhà xưởng, kho lạnh, phòng sạch."
        compact
        show3D={false}
        backgroundImage="/images/labaco/Rectangle-38.jpg"
      />

      <section className="section-pad bg-surface">
        <div className="container-wide">
          <SectionHeading
            title="Danh mục dịch vụ"
            description="Lựa chọn dịch vụ phù hợp hoặc liên hệ để được tư vấn gói giải pháp tổng thể."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ProjectShowcaseSection />
      <FAQSection limit={8} showViewAll />
      <CTASection />
    </>
  );
}