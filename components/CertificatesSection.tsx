"use client";

import { FileText } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { certificates } from "@/data/certificates";
import { SectionHeading } from "@/components/SectionHeading";

export function CertificatesSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <SectionHeading
          title="Giấy phép và chứng chỉ"
          description="Hồ sơ pháp lý và chứng nhận năng lực triển khai công trình công nghiệp."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {certificates.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col items-center rounded-sm border border-cold bg-surface p-4 text-center transition-colors hover:border-accent/40 hover:bg-white hover:shadow-[var(--shadow-navy-sm)] md:p-5"
              >
                <div className="mb-3 flex h-24 w-full items-center justify-center rounded-sm bg-navy/5 transition-colors group-hover:bg-accent/10 md:h-28">
                  <FileText
                    size={40}
                    weight="duotone"
                    className="text-navy/40 transition-colors group-hover:text-accent"
                  />
                </div>
                <p className="text-sm font-semibold leading-snug text-navy md:text-base">
                  {cert.title}
                </p>
                <p className="mt-1 text-xs text-slate-muted md:text-sm">{cert.issuer}</p>
                <span className="mt-2 font-mono text-xs text-accent">{cert.year}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}