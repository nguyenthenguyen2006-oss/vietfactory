"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  strength?: number;
  type?: "button" | "submit";
  onClick?: () => void;
}

export function MagneticButton({
  href,
  children,
  className,
  style,
  strength = 0.18,
  type = "button",
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const [canMagnet, setCanMagnet] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 18 });
  const springY = useSpring(y, { stiffness: 160, damping: 18 });

  useEffect(() => {
    setCanMagnet(
      !reduce &&
        typeof window !== "undefined" &&
        window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
  }, [reduce]);

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!canMagnet || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const inner = (
    <motion.span
      ref={ref}
      style={canMagnet ? { x: springX, y: springY, ...style } : style}
      onPointerMove={canMagnet ? onPointerMove : undefined}
      onPointerLeave={canMagnet ? reset : undefined}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-flex border-0 bg-transparent p-0">
      {inner}
    </button>
  );
}