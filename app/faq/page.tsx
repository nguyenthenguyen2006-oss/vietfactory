import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Câu hỏi thường gặp",
  description: `Giải đáp thắc mắc về thiết kế và thi công công trình công nghiệp từ ${company.name}.`,
};

export default function FAQPage() {
  return (
    <>
      <HeroSection
        title="Câu hỏi thường gặp"
        subtitle="Giải đáp các thắc mắc về thiết kế, thi công, kho lạnh, phòng sạch và chi phí đầu tư."
        compact
        show3D={false}
        backgroundImage="/images/labaco/1705066802271-scaled.jpg"
      />
      <FAQSection showViewAll={false} showFilter />
      <CTASection />
    </>
  );
}