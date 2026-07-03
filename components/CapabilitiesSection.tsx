"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { capabilities } from "@/data/capabilities";
import { SectionHeading } from "@/components/SectionHeading";

interface CapabilitiesSectionProps {
  limit?: number;
  showHeading?: boolean;
}

export function CapabilitiesSection({
  limit,
  showHeading = true,
}: CapabilitiesSectionProps) {
  const items = limit ? capabilities.slice(0, limit) : capabilities;

  return (
    <section className="relative overflow-hidden section-pad mesh-navy">
      <div className="absolute inset-0 industrial-grid-dense opacity-20" />
      <div className="container-wide relative">
        {showHeading && (
          <SectionHeading
            title="Năng lực kỹ thuật"
            description="Từ thiết kế đến thi công trọn gói, kiểm soát chất lượng và bàn giao hồ sơ đầy đủ."
            dark
          />
        )}
        <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${showHeading ? "mt-12" : ""}`}>
          {items.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.06}>
              <SpotlightCard className="h-full rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent/35 hover:bg-white/8 md:p-7">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                >
                  {cap.metrics && (
                    <span className="font-mono text-xs tracking-wide text-accent">
                      {cap.metrics}
                    </span>
                  )}
                  <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/70">
                    {cap.description}
                  </p>
                </motion.div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}