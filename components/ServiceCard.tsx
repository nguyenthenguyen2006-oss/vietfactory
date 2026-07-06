"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import type { Service } from "@/data/services";
import { easeOut } from "@/lib/motion";

interface ServiceCardProps {
  service: Service;
  index?: number;
  variant?: "default" | "wide";
}

export function ServiceCard({ service, index = 0, variant = "default" }: ServiceCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: easeOut }}
      className={variant === "wide" ? "lg:col-span-2" : ""}
    >
      <Link
        href={`/dich-vu/${service.slug}`}
        className="group relative block overflow-hidden transition-all duration-500 hover:-translate-y-2"
        style={{
          background: "var(--color-cream-card)",
          border: "1px solid rgba(7,21,37,0.08)",
          clipPath:
            "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
          boxShadow: "0 2px 12px rgba(7,21,37,0.06)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(255,196,0,0.18), 0 2px 12px rgba(7,21,37,0.08)";
          (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,196,0,0.35)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 12px rgba(7,21,37,0.06)";
          (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(7,21,37,0.08)";
        }}
      >
        {/* Cover image — lighter overlay on light card */}
        <div className="relative h-44 overflow-hidden md:h-52">
          <Image
            src={service.coverImage}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes={variant === "wide" ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          {/* Very light overlay so image is clear */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FEFCF4]/70 via-[#FEFCF4]/10 to-transparent" />
          {/* Yellow tint on hover */}
          <div className="absolute inset-0 bg-yellow/0 transition-colors duration-500 group-hover:bg-yellow/5" />
        </div>

        {/* Engineering index — ghost behind card */}
        <div
          className="pointer-events-none absolute right-4 top-4 z-0 font-bold transition-all duration-500 group-hover:opacity-100"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 80px)",
            lineHeight: 1,
            letterSpacing: "-0.05em",
            color: "rgba(255,196,0,0.07)",
          }}
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[180px] flex-col justify-end p-6 md:p-8">
          {/* Yellow accent line — expands on hover */}
          <div
            className="mb-3 h-px transition-all duration-500 group-hover:w-12"
            style={{
              width: "32px",
              background: "var(--color-yellow)",
              opacity: 0.8,
            }}
          />

          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                className="text-lg font-semibold transition-colors duration-300 group-hover:text-yellow md:text-xl"
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.02em",
                  color: "var(--color-ink)",
                }}
              >
                {service.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed" style={{ color: "var(--color-smoke)" }}>
                {service.shortDescription}
              </p>
            </div>

            <motion.span
              className="flex h-9 w-9 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{
                background: "var(--color-yellow)",
                color: "var(--color-ink)",
                clipPath:
                  "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
              }}
              initial={reduce ? false : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 + 0.35, duration: 0.4 }}
            >
              <ArrowUpRight size={16} weight="bold" />
            </motion.span>
          </div>

          <span
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold opacity-0 transition-opacity duration-400 group-hover:opacity-100"
            style={{ color: "var(--color-yellow-deep)" }}
          >
            Xem chi tiết
            <ArrowUpRight size={12} weight="bold" />
          </span>
        </div>

        {/* Bottom yellow line on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "linear-gradient(90deg, transparent, var(--color-yellow), transparent)" }}
        />
      </Link>
    </motion.article>
  );
}
