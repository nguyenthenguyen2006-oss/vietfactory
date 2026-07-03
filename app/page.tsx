import dynamic from "next/dynamic";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { LazyMount } from "@/components/LazyMount";
import { ProcessSection } from "@/components/ProcessSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectShowcaseSection } from "@/components/ProjectShowcaseSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { services } from "@/data/services";

const CapabilitiesSection = dynamic(
  () => import("@/components/CapabilitiesSection").then((m) => m.CapabilitiesSection)
);

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Services */}
      <section className="section-pad" style={{ background: "var(--color-paper)" }}>
        <div className="container-wide">
          <SectionHeading
            title="Dịch vụ của chúng tôi"
            description="6 lĩnh vực chuyên sâu về thiết kế, thi công và cung cấp thiết bị công nghiệp."
            index="01"
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={i}
                variant={i === 0 ? "wide" : "default"}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectShowcaseSection />

      <LazyMount>
        <CapabilitiesSection limit={4} />
      </LazyMount>

      <WhyUsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
