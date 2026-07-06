"use client";

import {
  ChartLineUp,
  Blueprint,
  Wrench,
  ArrowsClockwise,
  Clock,
  Headset,
} from "@phosphor-icons/react";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/data/company";
import { SectionHeading } from "@/components/SectionHeading";

const icons = [ChartLineUp, Blueprint, Wrench, ArrowsClockwise, Clock, Headset];

export function WhyUsSection() {
  return (
    <section
      className="relative overflow-hidden section-pad"
      style={{ background: "var(--color-cream)" }}
    >
      {/* Subtle engineering grid */}
      <div className="eng-grid absolute inset-0 opacity-50" />

      <div className="container-wide relative">
        <SectionHeading
          title="Vì sao chọn chúng tôi"
          description="Tư duy kỹ thuật, triển khai có kiểm soát, hỗ trợ dài hạn."
          index="02"
        />

        <div
          className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-3"
          style={{ border: "1px solid rgba(7,21,37,0.07)" }}
        >
          {company.whyUs.map((item, i) => {
            const Icon = icons[i] ?? Blueprint;

            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <div
                  className="group relative p-7 transition-all duration-350 md:p-8"
                  style={{
                    borderRight: "1px solid rgba(7,21,37,0.07)",
                    background: "white",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#FFF7D6";
                    el.style.borderBottomColor = "rgba(255,196,0,0.30)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "white";
                    el.style.borderBottomColor = "rgba(7,21,37,0.07)";
                  }}
                >
                  {/* Engineering index */}
                  <div
                    className="absolute right-5 top-5 font-bold select-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "56px",
                      lineHeight: 1,
                      letterSpacing: "-0.05em",
                      color: "rgba(7,21,37,0.04)",
                    }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center transition-all duration-300"
                    style={{
                      background: "rgba(255,196,0,0.12)",
                      clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                    }}
                  >
                    <Icon
                      size={20}
                      weight="duotone"
                      style={{ color: "var(--color-yellow-deep)" }}
                    />
                  </div>

                  <h3
                    className="text-base font-semibold md:text-lg"
                    style={{
                      fontFamily: "var(--font-display)",
                      letterSpacing: "-0.02em",
                      color: "var(--color-ink)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--color-smoke)" }}
                  >
                    {item.description}
                  </p>

                  {/* Bottom yellow line on hover */}
                  <div
                    className="absolute bottom-0 left-7 h-px opacity-0 transition-all duration-400 group-hover:opacity-100"
                    style={{ width: "40px", background: "var(--color-yellow)" }}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}