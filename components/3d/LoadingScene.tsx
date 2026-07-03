"use client";

import { motion } from "motion/react";

export function LoadingScene({ label = "Đang tải mô hình..." }: { label?: string }) {
  return (
    <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 bg-navy/5">
      <div className="relative h-16 w-16">
        <motion.div
          className="absolute inset-0 rounded-sm border-2 border-accent/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 rounded-sm border-2 border-navy/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <p className="font-mono text-xs tracking-wide text-slate-muted">
        {label}
      </p>
    </div>
  );
}