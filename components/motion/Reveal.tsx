"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  amount?: number;
  as?: "div" | "section" | "article" | "li";
}

const offsets = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { y: 0, x: -32 },
  right: { y: 0, x: 32 },
  none: { y: 0, x: 0 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 0.2,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];
  const offset = offsets[direction];

  return (
    <Component
      initial={reduce ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.75, delay, ease: easeOut }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}