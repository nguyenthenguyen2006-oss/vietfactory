"use client";

import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { TextReveal } from "@/components/motion/TextReveal";
import { labacoHeroImage } from "@/data/labaco-showcase";

const ease = [0.16, 1, 0.3, 1] as const;

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  show3D?: boolean;
  compact?: boolean;
}

export function HeroSection({
  title = "Thiết kế & thi công công trình công nghiệp",
  subtitle = "Nhà xưởng, kho lạnh, phòng sạch, thiết bị và xe nâng",
  backgroundImage = labacoHeroImage,
  show3D = true,
  compact = false,
}: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 48]);

  const isFullHero = show3D && !compact;

  return (
    <section
      ref={ref}
      id="hero"
      className="relative overflow-hidden bg-ink"
      style={{ minHeight: compact ? "60vh" : "100dvh" }}
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: bgY, willChange: "transform" }}
      >
        <Image
          src={backgroundImage}
          alt="Công trình công nghiệp VietFactory"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
        {/* Lighter overlay — image breathes through */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-ink/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-transparent to-ink/20" />
        {/* Engineering grid */}
        <div className="eng-grid absolute inset-0 opacity-15" />
        {/* Noise texture */}
        <div className="noise-overlay absolute inset-0" />
      </motion.div>

      {/* Diagonal bottom cut */}
      {!compact && (
        <div
          className="absolute bottom-0 left-0 right-0 h-20 bg-paper"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      )}

      {/* Content */}
      <div
        className="container-wide relative flex flex-col justify-end px-5 pb-20 pt-28 md:px-10 md:pb-28 lg:px-16"
        style={{ minHeight: compact ? "60vh" : "100dvh" }}
      >
        <motion.div
          style={reduce ? undefined : { opacity: contentOpacity, y: contentY }}
        >
          {/* Label */}
          {isFullHero && (
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
              className="section-label mb-6"
            >
              Công trình công nghiệp
            </motion.div>
          )}

          {/* Main title */}
          <div className="max-w-4xl">
            {isFullHero ? (
              <TextReveal
                text={title}
                as="h1"
                delay={0.12}
                className="text-balance font-display font-bold text-white"
                style={{
                  fontSize: "clamp(40px, 6vw, 88px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.035em",
                  fontFamily: "var(--font-display)",
                }}
              />
            ) : (
              <h1
                className="text-balance font-bold text-white"
                style={{
                  fontSize: "clamp(32px, 5vw, 72px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  fontFamily: "var(--font-display)",
                }}
              >
                {title}
              </h1>
            )}

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl"
            >
              {subtitle}
            </motion.p>

            {!compact && (
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.5, ease }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <MagneticButton href="/dich-vu" className="btn-primary">
                  Xem dịch vụ
                  <ArrowRight size={16} weight="bold" />
                </MagneticButton>
                <MagneticButton href="/lien-he" className="btn-ghost">
                  Nhận tư vấn miễn phí
                </MagneticButton>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
