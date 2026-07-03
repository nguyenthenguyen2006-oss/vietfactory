"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, useMemo } from "react";
import { easeOut } from "@/lib/motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

function parseNumeric(value: string): { num: number; prefix: string; suffix: string; decimals: number } | null {
  const match = value.match(/^([^0-9]*)([\d.,]+)(.*)$/);
  if (!match) return null;
  const numStr = match[2];
  const num = parseFloat(numStr.replace(/,/g, ""));
  if (Number.isNaN(num)) return null;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { num, prefix: match[1], suffix: match[3], decimals };
}

export function AnimatedCounter({
  value,
  className,
  duration = 1.4,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const parsed = useMemo(() => parseNumeric(value), [value]);
  const [display, setDisplay] = useState(reduce || !parsed ? value : `${parsed.prefix}0${parsed.decimals > 0 ? ".".padEnd(parsed.decimals + 1, "0") : ""}${parsed.suffix}`);

  useEffect(() => {
    if (!inView || reduce || !parsed) return;

    let start = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = parsed.num * eased;
      
      let formatted = "";
      if (parsed.num >= 1000) {
        formatted = Math.round(current).toLocaleString("vi-VN");
      } else {
        formatted = current.toFixed(parsed.decimals);
      }
      
      setDisplay(`${parsed.prefix}${formatted}${parsed.suffix}`);
      if (progress < 1) start = requestAnimationFrame(tick);
    };

    start = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(start);
  }, [inView, reduce, parsed, duration, value]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: easeOut }}
    >
      {display}
    </motion.span>
  );
}