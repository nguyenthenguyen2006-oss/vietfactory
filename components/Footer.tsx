"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/data/company";
import { footerNav } from "@/data/navigation";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--color-ink)", color: "white" }}
    >
      {/* Engineering grid */}
      <div className="eng-grid-dense absolute inset-0 opacity-10" />

      {/* Cyan top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-cyan), transparent)" }}
      />

      {/* Ghost "VF" watermark */}
      <div
        className="pointer-events-none absolute -bottom-8 -right-4 select-none"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(120px, 20vw, 280px)",
          lineHeight: 1,
          letterSpacing: "-0.06em",
          color: "rgba(255,255,255,0.025)",
        }}
        aria-hidden
      >
        VF
      </div>

      <div className="container-wide relative px-5 pt-16 pb-8 md:px-10 md:pt-20 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Brand column */}
          <Reveal className="lg:col-span-4">
            <div>
              {/* Logo */}
              <div className="mb-6 flex items-center gap-3">
                <motion.span
                  whileHover={{ scale: 1.06 }}
                  className="flex h-9 w-9 items-center justify-center text-[11px] font-bold text-ink"
                  style={{
                    background: "var(--color-logo-yellow)",
                    clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  VF
                </motion.span>
                <div>
                  <p
                    className="text-base font-semibold text-white"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                  >
                    {company.name}
                  </p>
                  <p className="text-xs text-white/40">{company.tagline}</p>
                </div>
              </div>

              <p className="max-w-xs text-sm leading-relaxed" style={{ color: "rgba(160,180,200,0.6)" }}>
                {company.description}
              </p>

              <div className="mt-6 flex gap-4">
                {[
                  { href: company.social.facebook, label: "Facebook" },
                  { href: company.social.youtube, label: "YouTube" },
                  { href: company.social.linkedin, label: "LinkedIn" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-white/35 transition-colors duration-200 hover:text-cyan"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {s.label}
                    <ArrowUpRight size={10} className="opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Nav columns */}
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5">
            <Reveal delay={0.07}>
              <p
                className="mb-4 text-[11px] font-semibold tracking-wide"
                style={{ color: "var(--color-cyan)" }}
              >
                Dịch vụ
              </p>
              <ul className="space-y-2">
                {footerNav.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-1.5 text-sm text-white/45 transition-colors duration-200 hover:text-white"
                    >
                      <span className="h-px w-3 bg-white/20 transition-all duration-200 group-hover:w-4 group-hover:bg-cyan" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.11}>
              <p
                className="mb-4 text-[11px] font-semibold tracking-wide"
                style={{ color: "var(--color-cyan)" }}
              >
                Công ty
              </p>
              <ul className="space-y-2">
                {footerNav.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-1.5 text-sm text-white/45 transition-colors duration-200 hover:text-white"
                    >
                      <span className="h-px w-3 bg-white/20 transition-all duration-200 group-hover:w-4 group-hover:bg-cyan" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Contact column */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <p
              className="mb-4 text-[11px] font-semibold tracking-wide"
              style={{ color: "var(--color-cyan)" }}
            >
              Liên hệ
            </p>
            <ul className="space-y-4">
              <li>
                <p className="text-[10px] font-medium uppercase tracking-widest text-white/30">Hotline</p>
                <a
                  href={`tel:${company.hotline.replace(/\s/g, "")}`}
                  className="mt-0.5 block font-semibold text-white transition-colors hover:text-cyan"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {company.hotline}
                </a>
              </li>
              <li>
                <p className="text-[10px] font-medium uppercase tracking-widest text-white/30">Email</p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-0.5 block text-sm text-white/55 transition-colors hover:text-cyan"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <p className="text-[10px] font-medium tracking-wide text-white/30">Địa chỉ</p>
                <p className="mt-0.5 text-sm text-white/50 leading-relaxed">{company.address}</p>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <Reveal delay={0.2}>
          <div
            className="mt-14 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} {company.name}. Bảo lưu mọi quyền.
            </p>
            <p className="text-xs text-white/20">
              Thiết kế &amp; thi công công trình công nghiệp
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
