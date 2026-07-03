"use client";

import { motion, useReducedMotion } from "motion/react";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/data/company";
import { easeOut } from "@/lib/motion";

const stats = [
  { value: `${company.stats.years}`, suffix: "+", label: "Năm kinh nghiệm" },
  { value: `${company.stats.projects}`, suffix: "+", label: "Dự án triển khai" },
  { value: company.stats.area, suffix: "", label: "m² quy mô thi công" },
  { value: `${company.stats.foreignInvestors}`, suffix: "%", label: "Khách hàng nước ngoài" },
  { value: `${company.stats.employees}`, suffix: "+", label: "Kỹ sư & chuyên gia" },
];

export function StatsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--color-steel)" }}>
      {/* Engineering grid overlay */}
      <div className="eng-grid absolute inset-0 opacity-20" />

      {/* Cyan accent line top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-cyan), transparent)" }}
      />

      <div className="container-wide relative px-5 py-16 md:px-10 lg:px-16">
        {/* Label */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="section-label mb-10"
        >
          Thành tựu
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-px md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.07}>
              <div
                className="group relative px-6 py-8 transition-colors duration-300 hover:bg-white/4"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                {/* Number */}
                <div
                  className="flex items-end gap-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(36px, 4vw, 60px)",
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "var(--color-cyan)",
                    transition: "color 0.3s",
                  }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    className=""
                  />
                  {stat.suffix && (
                    <span style={{ fontSize: "0.55em", color: "rgba(0,212,255,0.6)", marginBottom: "0.1em" }}>
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Label */}
                <p
                  className="mt-2 text-xs font-medium tracking-wide"
                  style={{ color: "rgba(160,180,200,0.7)" }}
                >
                  {stat.label}
                </p>

                {/* Hover bottom line */}
                <motion.div
                  className="absolute bottom-0 left-6 h-px"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 + 0.3, ease: easeOut }}
                  style={{ background: "var(--color-cyan)", opacity: 0.5 }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)" }}
      />
    </section>
  );
}