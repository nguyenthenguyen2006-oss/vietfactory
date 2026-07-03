"use client";

import {
  ChartLineUp,
  Blueprint,
  Wrench,
  ArrowsClockwise,
  Clock,
  Headset,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/data/company";
import { SectionHeading } from "@/components/SectionHeading";

const icons = [ChartLineUp, Blueprint, Wrench, ArrowsClockwise, Clock, Headset];

export function WhyUsSection() {
  return (
    <section
      className="relative overflow-hidden section-pad"
      style={{ background: "var(--color-paper)" }}
    >
      {/* Subtle eng grid */}
      <div className="eng-grid absolute inset-0 opacity-40" />

      <div className="container-wide relative">
        <SectionHeading
          title="Vì sao chọn chúng tôi"
          description="Tư duy kỹ thuật, triển khai có kiểm soát, hỗ trợ dài hạn."
          index="02"
        />

        <div className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ border: "1px solid rgba(8,17,31,0.08)" }}>
          {company.whyUs.map((item, i) => {
            const Icon = icons[i] ?? Blueprint;

            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <motion.div
                  className="group relative p-7 transition-colors duration-300 md:p-8"
                  style={{ borderRight: "1px solid rgba(8,17,31,0.08)", background: "white" }}
                  whileHover={{ background: "var(--color-ink)" }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Engineering index */}
                  <div
                    className="absolute right-5 top-5 font-bold opacity-6 transition-opacity duration-300 group-hover:opacity-10"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "56px",
                      lineHeight: 1,
                      letterSpacing: "-0.05em",
                      color: "var(--color-ink)",
                    }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center transition-all duration-300 group-hover:bg-cyan"
                    style={{
                      background: "rgba(0,212,255,0.10)",
                      clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                    }}
                  >
                    <Icon
                      size={20}
                      weight="duotone"
                      className="text-ink transition-colors duration-300 group-hover:text-ink"
                      style={{ color: "var(--color-ink)" }}
                    />
                  </div>

                  <h3
                    className="text-base font-semibold text-ink transition-colors duration-300 group-hover:text-white md:text-lg"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-smoke transition-colors duration-300 group-hover:text-white/55">
                    {item.description}
                  </p>

                  {/* Bottom cyan line on hover */}
                  <div
                    className="absolute bottom-0 left-7 h-px opacity-0 transition-all duration-400 group-hover:opacity-100"
                    style={{ width: "40px", background: "var(--color-cyan)" }}
                  />
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}