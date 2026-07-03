"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { partners, partnersIntro } from "@/data/partners";
import { SectionHeading } from "@/components/SectionHeading";

export function PartnersSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <SectionHeading title="Đối tác" description={partnersIntro} />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="flex flex-col items-center justify-center rounded-sm border border-cold bg-surface px-4 py-7 text-center transition-colors hover:border-accent/30 hover:bg-white hover:shadow-[var(--shadow-navy-sm)] md:py-9"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-navy text-xl font-bold text-accent">
                  {partner.name.charAt(0)}
                </div>
                <p className="mt-3 text-base font-semibold text-navy">{partner.name}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}