"use client";

import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface MarqueeStripProps {
  items: string[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
  dark?: boolean;
}

export function MarqueeStrip({
  items,
  className,
  speed = "normal",
  dark = false,
}: MarqueeStripProps) {
  const reduce = useReducedMotion();
  const doubled = [...items, ...items];
  const duration =
    speed === "slow" ? "48s" : speed === "fast" ? "22s" : "32s";

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y py-4",
        dark
          ? "border-white/10 bg-navy-light/50"
          : "border-cold bg-white",
        className
      )}
      aria-hidden
    >
      <div
        className={cn(
          "flex w-max gap-10 whitespace-nowrap",
          !reduce && "animate-marquee"
        )}
        style={reduce ? undefined : { animationDuration: duration }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={cn(
              "text-sm font-medium tracking-wide md:text-base",
              dark ? "text-white/50" : "text-slate-muted"
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}