"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/data/company";
import { SectionHeading } from "@/components/SectionHeading";
import { easeOut } from "@/lib/motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function ProcessSection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative section-pad"
      style={{ background: "var(--color-ink)" }}
    >
      {/* Engineering grid */}
      <div className="eng-grid-dense absolute inset-0 opacity-15" />

      {/* Glowing orbs */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 60%)" }} />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(0,170,204,0.06) 0%, transparent 60%)" }} />

      <div className="container-wide relative">
        <SectionHeading
          title="Quy trình làm việc"
          description="Từ khảo sát đến bàn giao, mỗi bước đều có kiểm soát và minh bạch."
          dark
          index="04"
        />

        {/* Process steps - alternating layout on desktop */}
        <div className="relative mt-16 lg:mt-20">
          {/* Vertical line */}
          <div
            className="absolute left-[22px] top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(180deg, var(--color-cyan), rgba(0,212,255,0.1))", opacity: 0.3 }}
          />

          <div className="grid gap-0 md:gap-0">
            {company.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.09}>
                <div className="group relative grid grid-cols-1 gap-6 py-8 md:grid-cols-12 md:gap-10 md:py-6">

                  {/* Step number - left column on desktop */}
                  <div className="md:col-span-1 flex md:justify-center md:pt-1">
                    <motion.div
                      className="relative flex h-11 w-11 items-center justify-center font-mono text-xs font-bold text-ink"
                      initial={reduce ? false : { scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.09 + 0.2, ease }}
                      style={{
                        background: "var(--color-cyan)",
                        clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div
                    className="md:col-span-11 relative pb-8 transition-colors duration-300 md:pb-0"
                    style={{
                      borderBottom: i < company.process.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}
                  >
                    {/* Step connector line on hover */}
                    <motion.div
                      className="absolute -left-6 top-5 h-px opacity-0 transition-opacity duration-400 group-hover:opacity-60 hidden md:block"
                      initial={{ width: 0 }}
                      whileInView={{ width: 24 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.09 + 0.35, ease: easeOut }}
                      style={{ background: "var(--color-cyan)" }}
                    />

                    <h3
                      className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan md:text-xl"
                      style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.025em" }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/45 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
