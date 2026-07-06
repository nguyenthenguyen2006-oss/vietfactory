"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
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
    <section
      className="relative overflow-hidden section-pad"
      style={{ background: "var(--color-cream-alt)" }}
    >
      {/* Subtle engineering grid on light bg */}
      <div className="eng-grid absolute inset-0 opacity-60" />

      <div className="container-wide relative">
        {showHeading && (
          <SectionHeading
            title="Năng lực kỹ thuật"
            description="Từ thiết kế đến thi công trọn gói, kiểm soát chất lượng và bàn giao hồ sơ đầy đủ."
            dark={false}
          />
        )}
        <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${showHeading ? "mt-12" : ""}`}>
          {items.map((cap, i) => {
            const isFeatured = i === 0;
            return (
              <Reveal key={cap.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  className="h-full rounded-sm p-6 md:p-7"
                  style={{
                    background: isFeatured
                      ? "linear-gradient(135deg, #ffffff 0%, #FFF7D6 100%)"
                      : "#ffffff",
                    border: isFeatured
                      ? "1px solid rgba(255,196,0,0.45)"
                      : "1px solid rgba(7,21,37,0.07)",
                    boxShadow: isFeatured
                      ? "0 4px 20px rgba(255,196,0,0.14), 0 1px 4px rgba(7,21,37,0.06)"
                      : "0 2px 12px rgba(7,21,37,0.05)",
                    transition: "box-shadow 0.4s ease, border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = isFeatured
                      ? "0 8px 32px rgba(255,196,0,0.24), 0 2px 8px rgba(7,21,37,0.08)"
                      : "0 6px 24px rgba(255,196,0,0.16), 0 2px 8px rgba(7,21,37,0.06)";
                    el.style.borderColor = isFeatured
                      ? "rgba(255,196,0,0.65)"
                      : "rgba(255,196,0,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = isFeatured
                      ? "0 4px 20px rgba(255,196,0,0.14), 0 1px 4px rgba(7,21,37,0.06)"
                      : "0 2px 12px rgba(7,21,37,0.05)";
                    el.style.borderColor = isFeatured
                      ? "rgba(255,196,0,0.45)"
                      : "rgba(7,21,37,0.07)";
                  }}
                >
                  {cap.metrics && (
                    <span
                      className="font-mono text-xs tracking-wide font-semibold"
                      style={{ color: "var(--color-yellow-deep)" }}
                    >
                      {cap.metrics}
                    </span>
                  )}
                  <h3
                    className="mt-2 text-lg font-semibold md:text-xl"
                    style={{ color: "var(--color-ink)" }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    className="mt-3 text-base leading-relaxed"
                    style={{ color: "var(--color-smoke)" }}
                  >
                    {cap.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}