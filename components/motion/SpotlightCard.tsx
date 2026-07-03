"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [canSpotlight, setCanSpotlight] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    setCanSpotlight(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
  }, []);

  const background = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, rgba(0, 180, 216, 0.14), transparent 65%)`;

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || !canSpotlight || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      ref={ref}
      onPointerMove={canSpotlight ? onMove : undefined}
      onPointerLeave={canSpotlight ? onLeave : undefined}
      className={cn("group relative overflow-hidden", className)}
    >
      {!reduce && canSpotlight && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background }}
        />
      )}
      <div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-accent/25" />
      {children}
    </div>
  );
}