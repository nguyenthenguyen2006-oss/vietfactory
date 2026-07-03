"use client";

import { motion } from "motion/react";
import { Phone, EnvelopeSimple } from "@phosphor-icons/react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/data/company";

const ease = [0.16, 1, 0.3, 1] as const;

interface CTASectionProps {
  title?: string;
  description?: string;
  dark?: boolean;
}

export function CTASection({
  title = "Bắt đầu dự án của bạn",
  description = "Để lại thông tin, đội ngũ kỹ thuật sẽ phản hồi trong vòng 2 giờ làm việc.",
  dark = true,
}: CTASectionProps) {
  return (
    <section
      className="relative overflow-hidden section-pad"
      style={{ background: dark ? "var(--color-steel)" : "var(--color-paper)" }}
    >
      {/* Engineering grid */}
      {dark && <div className="eng-grid absolute inset-0 opacity-20" />}

      {/* Cyan corner accent */}
      {dark && (
        <>
          <div className="absolute left-0 top-0 h-px w-32" style={{ background: "var(--color-cyan)", opacity: 0.5 }} />
          <div className="absolute left-0 top-0 h-32 w-px" style={{ background: "var(--color-cyan)", opacity: 0.5 }} />
          <div className="absolute right-0 bottom-0 h-px w-32" style={{ background: "var(--color-cyan)", opacity: 0.3 }} />
          <div className="absolute right-0 bottom-0 h-32 w-px" style={{ background: "var(--color-cyan)", opacity: 0.3 }} />
        </>
      )}

      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left: headline + contacts */}
          <Reveal>
            <div>
              {/* Section label */}
              <div className="section-label mb-6">
                Liên hệ tư vấn
              </div>

              <h2
                className={dark ? "text-white" : "text-ink"}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 4vw, 52px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.035em",
                  maxWidth: "20ch",
                }}
              >
                {title}
              </h2>

              <p
                className="mt-4 text-base leading-relaxed md:text-lg"
                style={{ color: dark ? "rgba(160,180,200,0.7)" : "var(--color-smoke)", maxWidth: "50ch" }}
              >
                {description}
              </p>

              {/* Direct contact */}
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href={`tel:${company.hotline}`}
                  className="group flex items-center gap-4 transition-colors duration-200"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center transition-all duration-200 group-hover:scale-105"
                    style={{
                      background: "rgba(0,212,255,0.12)",
                      border: "1px solid rgba(0,212,255,0.2)",
                      clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))",
                    }}
                  >
                    <Phone size={16} weight="fill" style={{ color: "var(--color-cyan)" }} />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-widest" style={{ color: "var(--color-smoke)" }}>
                      Hotline
                    </p>
                    <p className="font-semibold" style={{ color: dark ? "white" : "var(--color-ink)", fontFamily: "var(--font-display)" }}>
                      {company.hotline}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="group flex items-center gap-4 transition-colors duration-200"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center transition-all duration-200 group-hover:scale-105"
                    style={{
                      background: "rgba(0,212,255,0.12)",
                      border: "1px solid rgba(0,212,255,0.2)",
                      clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))",
                    }}
                  >
                    <EnvelopeSimple size={16} weight="fill" style={{ color: "var(--color-cyan)" }} />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-widest" style={{ color: "var(--color-smoke)" }}>
                      Email
                    </p>
                    <p className="font-semibold" style={{ color: dark ? "white" : "var(--color-ink)", fontFamily: "var(--font-display)" }}>
                      {company.email}
                    </p>
                  </div>
                </a>
              </div>

              {/* Working hours */}
              <div
                className="mt-8 border-t pt-6 text-sm"
                style={{ borderColor: dark ? "rgba(255,255,255,0.07)" : "rgba(8,17,31,0.08)" }}
              >
                <p className="text-[11px] font-medium tracking-wide" style={{ color: "var(--color-smoke)" }}>
                  Giờ làm việc
                </p>
                <p className="mt-1" style={{ color: dark ? "rgba(255,255,255,0.6)" : "var(--color-smoke)" }}>
                  {company.workingHours}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15, ease }}
            className="relative p-6 md:p-8"
            style={{
              background: dark
                ? "rgba(255,255,255,0.04)"
                : "white",
              border: dark
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid rgba(8,17,31,0.08)",
              clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
            }}
          >
            {/* Corner accent */}
            <div
              className="absolute right-0 top-0 h-px w-16"
              style={{ background: "var(--color-cyan)", opacity: 0.5 }}
            />
            <div
              className="absolute right-0 top-0 h-16 w-px"
              style={{ background: "var(--color-cyan)", opacity: 0.5 }}
            />

            <ContactForm variant={dark ? "dark" : "light"} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
