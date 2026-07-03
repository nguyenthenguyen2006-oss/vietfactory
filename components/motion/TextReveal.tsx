"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  splitBy?: "words" | "lines";
}

export function TextReveal({
  text,
  className,
  style,
  as = "h1",
  delay = 0,
  splitBy = "words",
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  if (reduce) {
    const Static = as;
    return (
      <Static className={className} style={style}>
        {text}
      </Static>
    );
  }

  const parts = splitBy === "words" ? text.split(" ") : [text];

  return (
    <Component className={cn(className)} style={style} aria-label={text}>
      {parts.map((part, i) => (
        <span key={`${part}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.045,
              ease: easeOut,
            }}
          >
            {part}
            {splitBy === "words" && i < parts.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}