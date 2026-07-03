import type { Metadata } from "next";
import Image from "next/image";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { MilestonesSection } from "@/components/MilestonesSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectShowcaseSection } from "@/components/ProjectShowcaseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { company } from "@/data/company";
import { labacoHeroImage } from "@/data/labaco-showcase";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: `Giới thiệu ${company.name}: tầm nhìn, sứ mệnh và năng lực thiết kế thi công công trình công nghiệp.`,
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="Kiến tạo công trình công nghiệp bền vững"
        subtitle="Đội ngũ kỹ sư và kiến trúc sư triển khai giải pháp từ khảo sát đến bàn giao."
        compact
        show3D={false}
        backgroundImage={labacoHeroImage}
      />

      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              title="Về chúng tôi"
              description={company.aboutLong ?? company.description}
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/labaco/Rectangle-34.jpg"
                alt="Thi công công trình Labaco"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-wide grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              Tầm nhìn
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-muted md:text-xl">
              {company.vision}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              Sứ mệnh
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-muted md:text-xl">
              {company.mission}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy">
        <div className="container-wide">
          <SectionHeading
            title="Giá trị cốt lõi"
            description="Nền tảng cho mọi quyết định thiết kế và triển khai dự án."
            dark
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {company.values.map((value) => (
              <div
                key={value.title}
                className="rounded-sm border border-white/10 p-6 md:p-8"
              >
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70 md:text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm lg:col-span-7">
              <Image
                src="/images/labaco/Group-12-1.jpg"
                alt="Kho công nghiệp Labaco thi công"
                fill
                className="object-cover"
                sizes="60vw"
              />
            </div>
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-semibold tracking-tighter text-navy md:text-4xl">
                Tư duy triển khai dự án
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-muted md:text-xl">
                Mỗi dự án được tiếp cận như một bài toán vận hành: luồng hàng, mở rộng,
                tiêu chuẩn ngành và chi phí vòng đời. Thiết kế 3D và phối cảnh đa góc
                giúp chủ đầu tư hình dung rõ phương án trước khi thi công.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProjectShowcaseSection />

      <MilestonesSection />
      <CapabilitiesSection limit={4} />
      <TestimonialsSection />
      <CTASection dark={false} />
    </>
  );
}