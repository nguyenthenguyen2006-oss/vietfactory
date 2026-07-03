"use client";

import { Quotes } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/SectionHeading";

export function TestimonialsSection() {
  return (
    <section className="section-pad mesh-surface">
      <div className="container-wide">
        <SectionHeading
          title="Khách hàng nói gì"
          description="Phản hồi từ các chủ đầu tư và đơn vị triển khai về chất lượng công trình."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, i) => (
            <Reveal key={item.author} delay={i * 0.1}>
              <SpotlightCard className="h-full rounded-sm border border-cold/80 bg-white p-6 transition-shadow duration-500 hover:shadow-[var(--shadow-navy-md)] md:p-8">
                <motion.div whileHover={{ rotate: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Quotes size={32} weight="duotone" className="text-accent" />
                </motion.div>
                <p className="mt-4 text-lg leading-relaxed text-charcoal md:text-xl">
                  {item.quote}
                </p>
                <footer className="mt-6 border-t border-cold pt-4">
                  <p className="text-base font-semibold text-navy">{item.author}</p>
                  <p className="text-sm text-slate-muted">
                    {item.role} - {item.company}
                  </p>
                  <p className="mt-1 text-sm text-accent">{item.project}</p>
                </footer>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}