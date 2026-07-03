"use client";

import { useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

interface LazyMountProps {
  children: ReactNode;
  minHeight?: number;
  className?: string;
}

/** Chỉ mount children khi section sắp vào viewport - giảm tải lần đầu. */
export function LazyMount({ children, minHeight = 320, className }: LazyMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "240px 0px" });

  return (
    <div ref={ref} className={className} style={inView ? undefined : { minHeight }}>
      {inView ? children : null}
    </div>
  );
}
