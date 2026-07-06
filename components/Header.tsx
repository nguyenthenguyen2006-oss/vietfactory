"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useEffect, useState } from "react";
import { company } from "@/data/company";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 56);
  });

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "glass-header"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-[60px] items-center justify-between gap-6 px-5 md:h-16 md:px-10 lg:px-16">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3" aria-label="VietFactory - Trang chủ">
          <motion.span
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="flex h-8 w-8 items-center justify-center text-[11px] font-bold tracking-wider transition-all duration-200"
            style={{
              color: "var(--color-ink)",
              background: "var(--color-logo-yellow)",
              clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
              fontFamily: "var(--font-display)",
            }}
          >
            VF
          </motion.span>
          <span
            className="text-sm font-semibold tracking-tight transition-colors duration-300"
            style={{
              fontFamily: "var(--font-display)",
              color: solid ? "var(--color-ink)" : "rgba(255,255,255,0.95)",
            }}
          >
            {company.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {mainNav.map((item, i) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200",
                  solid
                    ? active
                      ? "text-yellow"
                      : "text-ink/60 hover:text-ink"
                    : active
                      ? "text-yellow"
                      : "text-white/70 hover:text-white"
                )}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {/* Engineering index */}
                <span
                  className="font-mono text-[9px] opacity-30 transition-opacity duration-200 group-hover:opacity-60"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
                {/* Active indicator */}
                <span
                  className="absolute bottom-0 left-3.5 right-3.5 h-px transition-all duration-300"
                  style={{
                    background: active ? "var(--color-yellow)" : "transparent",
                    opacity: active ? 1 : 0,
                  }}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/lien-he"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 text-[13px] font-semibold transition-all duration-200 hover:-translate-y-px"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-ink)",
              background: "var(--color-yellow)",
              clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              boxShadow: "var(--shadow-yellow)",
            }}
          >
            Liên hệ ngay
          </Link>

          <button
            type="button"
            aria-label="Mở menu"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center transition-colors lg:hidden"
            style={{ color: solid ? "var(--color-ink)" : "rgba(255,255,255,0.80)" }}
          >
            <List size={22} weight="bold" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
            style={{ background: "rgba(255,249,232,0.97)", backdropFilter: "blur(20px)" }}
          >
            {/* Mobile header */}
            <div className="flex h-[60px] items-center justify-between px-5" style={{ borderBottom: "1px solid rgba(7,21,37,0.08)" }}>
              <span
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
              >
                {company.name}
              </span>
              <button
                type="button"
                aria-label="Đóng menu"
                onClick={() => setMobileOpen(false)}
                style={{ color: "var(--color-ink)" }}
                className="opacity-60 transition-opacity hover:opacity-100"
              >
                <X size={22} weight="bold" />
              </button>
            </div>

            {/* Mobile nav */}
            <nav className="flex flex-col px-5 pt-6">
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ delay: i * 0.055, ease }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-4 text-lg font-medium transition-colors hover:text-yellow"
                    style={{
                      borderBottom: "1px solid rgba(7,21,37,0.07)",
                      fontFamily: "var(--font-display)",
                      color: "var(--color-ink)",
                    }}
                  >
                    <span
                      className="font-mono text-[10px]"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-yellow)", opacity: 0.7 }}
                    >
                      {String(i + 1).padStart(2, "00")}
                    </span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, ease }}
                className="mt-6"
              >
                <Link
                  href="/lien-he"
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-center text-sm font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-ink)",
                    background: "var(--color-yellow)",
                    clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  }}
                >
                  Liên hệ tư vấn
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
