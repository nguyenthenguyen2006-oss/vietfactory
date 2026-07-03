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
        className="group relative block overflow-hidden transition-transform duration-500 hover:-translate-y-1"
        style={{
          background: "var(--color-steel)",
          border: "1px solid rgba(255,255,255,0.07)",
          clipPath:
            "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
        }}
      >
        {/* Cover - imagehover.css scale + gradient */}
        <div className="relative h-44 overflow-hidden md:h-52">
          <Image
            src={service.coverImage}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes={variant === "wide" ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-steel)] via-[var(--color-steel)]/20 to-transparent" />
          <div className="absolute inset-0 bg-cyan/0 transition-colors duration-500 group-hover:bg-cyan/10" />
        </div>

        {/* Engineering index - large ghost on hover */}
        <div
          className="pointer-events-none absolute right-4 top-4 z-0 font-bold transition-all duration-500 group-hover:text-cyan/15"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 80px)",
            lineHeight: 1,
            letterSpacing: "-0.05em",
            color: "rgba(0,212,255,0.12)",
          }}
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[200px] flex-col justify-end p-6 md:p-8">
          <div
            className="mb-3 h-px transition-all duration-500 group-hover:w-12"
            style={{
              width: "32px",
              background: "var(--color-cyan)",
              opacity: 0.6,
            }}
          />

          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan md:text-xl"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
              >
                {service.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/50">
                {service.shortDescription}
              </p>
            </div>

            <motion.span
              className="flex h-9 w-9 shrink-0 items-center justify-center text-ink transition-transform duration-300 group-hover:scale-110"
              style={{
                background: "var(--color-cyan)",
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

          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan opacity-0 transition-opacity duration-400 group-hover:opacity-100">
            Xem chi tiết
            <ArrowUpRight size={12} weight="bold" />
          </span>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "linear-gradient(90deg, transparent, var(--color-cyan), transparent)" }}
        />
      </Link>
    </motion.article>
  );
}
