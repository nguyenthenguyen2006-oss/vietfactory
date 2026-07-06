"use client";

import { motion } from "motion/react";
import { milestones } from "@/data/milestones";
import { SectionHeading } from "@/components/SectionHeading";

export function MilestonesSection() {
  return (
    <section className="section-pad industrial-grid" style={{ background: "var(--color-cream-alt)" }}>
      <div className="container-wide">
        <SectionHeading
          title="Hành trình phát triển"
          description="Các mốc quan trọng trong quá trình xây dựng năng lực thiết kế và thi công."
        />
        <div className="mt-14 space-y-0">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid gap-4 border-b py-8 md:grid-cols-12 md:gap-8"
              style={{ borderColor: "rgba(7,21,37,0.08)" }}
            >
              <div className="md:col-span-2">
                <span className="font-mono text-2xl font-semibold text-accent md:text-3xl">
                  {m.year}
                </span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-xl font-semibold text-navy md:text-2xl">{m.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-muted md:text-lg">
                  {m.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}