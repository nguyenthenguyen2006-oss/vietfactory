import type { Metadata } from "next";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { equipment } from "@/data/capabilities";
import { company } from "@/data/company";
import { certificates } from "@/data/certificates";

export const metadata: Metadata = {
  title: "Năng lực",
  description: `Năng lực thiết kế và thi công công trình công nghiệp của ${company.name}.`,
};

export default function CapabilitiesPage() {
  return (
    <>
      <HeroSection
        title="Năng lực thiết kế & thi công"
        subtitle="Hệ sinh thái giải pháp kỹ thuật trọn gói cho nhà xưởng, kho lạnh, phòng sạch và công trình công nghiệp."
        compact
        show3D={false}
        backgroundImage="/images/labaco/IMG_20221229_115320-scaled.jpg"
      />
      <CapabilitiesSection showHeading={false} />

      <section className="section-pad bg-white">
        <div className="container-wide">
          <SectionHeading
            title="Thiết bị & vật tư triển khai"
            description="Các hạng mục kỹ thuật thường được tích hợp trong dự án công nghiệp."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((item) => (
              <div
                key={item}
                className="rounded-sm border border-cold bg-surface px-5 py-4 text-base font-medium text-navy"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-wide">
          <SectionHeading
            title="Chứng chỉ & giấy phép"
            description={`${certificates.length} chứng chỉ và giấy phép năng lực triển khai công trình công nghiệp.`}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="rounded-sm border border-cold bg-white p-6"
              >
                <p className="text-lg font-semibold text-navy">{cert.title}</p>
                <p className="mt-2 text-base text-slate-muted">{cert.issuer}</p>
                <p className="mt-1 font-mono text-sm text-accent">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}