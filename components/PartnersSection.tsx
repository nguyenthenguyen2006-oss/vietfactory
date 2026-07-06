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
                className="flex flex-col items-center justify-center rounded-sm px-4 py-7 text-center transition-all duration-300 md:py-9"
                style={{
                  background: "white",
                  border: "1px solid rgba(7,21,37,0.05)",
                  boxShadow: "0 1px 6px rgba(7,21,37,0.04)",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,196,0,0.30)"; el.style.boxShadow = "0 4px 16px rgba(7,21,37,0.08)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(7,21,37,0.05)"; el.style.boxShadow = "0 1px 6px rgba(7,21,37,0.04)"; }}
              >
                <div 
                  className="flex h-14 w-14 items-center justify-center rounded-sm text-xl font-bold"
                  style={{ background: "rgba(255,196,0,0.12)", color: "var(--color-yellow-deep)", fontFamily: "var(--font-display)" }}>
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