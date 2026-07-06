"use client";

import { Quotes } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/SectionHeading";

export function TestimonialsSection() {
  return (
    <section className="section-pad" style={{ background: "var(--color-cream)" }}>
      <div className="container-wide">
        <SectionHeading
          title="Khách hàng nói gì"
          description="Phản hồi từ các chủ đầu tư và đơn vị triển khai về chất lượng công trình."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, i) => (
            <Reveal key={item.author} delay={i * 0.1}>
              <div
                className="h-full rounded-sm p-6 transition-all duration-400 md:p-8"
                style={{
                  background: "white",
                  border: "1px solid rgba(7,21,37,0.07)",
                  boxShadow: "0 2px 12px rgba(7,21,37,0.05)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 8px 32px rgba(7,21,37,0.10), 0 2px 8px rgba(255,196,0,0.08)";
                  el.style.borderColor = "rgba(255,196,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 2px 12px rgba(7,21,37,0.05)";
                  el.style.borderColor = "rgba(7,21,37,0.07)";
                }}
              >
                <motion.div whileHover={{ rotate: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Quotes size={32} weight="duotone" style={{ color: "var(--color-yellow)" }} />
                </motion.div>
                <p
                  className="mt-4 text-lg leading-relaxed md:text-xl"
                  style={{ color: "var(--color-ink)" }}
                >
                  {item.quote}
                </p>
                <footer
                  className="mt-6 border-t pt-4"
                  style={{ borderColor: "rgba(7,21,37,0.07)" }}
                >
                  <p className="text-base font-semibold" style={{ color: "var(--color-ink)" }}>
                    {item.author}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-smoke)" }}>
                    {item.role} - {item.company}
                  </p>
                  <p className="mt-1 text-sm font-medium" style={{ color: "var(--color-yellow-deep)" }}>
                    {item.project}
                  </p>
                </footer>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}