"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
  animate?: boolean;
  index?: string;
}

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
  dark = false,
  animate = true,
}: SectionHeadingProps) {
  const reduce = useReducedMotion();

  const content = (
    <div
      className={cn(
        "relative",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-balance",
          "relative z-10",
          dark ? "text-white" : "text-ink"
        )}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 4vw, 52px)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.035em",
          maxWidth: align === "center" ? undefined : "24ch",
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            align === "center" && "mx-auto",
            dark ? "text-white/60" : "text-smoke"
          )}
          style={{ maxWidth: "60ch" }}
        >
          {description}
        </p>
      )}
    </div>
  );

  if (!animate || reduce) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: easeOut }}
    >
      {content}
    </motion.div>
  );
}
