"use client";

import Image from "next/image";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import type { GalleryAngle } from "@/data/gallery";

interface ProjectLightboxProps {
  gallery: GalleryAngle[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
}

export function ProjectLightbox({
  gallery,
  initialIndex = 0,
  open,
  onClose,
}: ProjectLightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    if (open) setIndex(initialIndex);
  }, [open, initialIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => (i > 0 ? i - 1 : gallery.length - 1));
      if (e.key === "ArrowRight") setIndex((i) => (i < gallery.length - 1 ? i + 1 : 0));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, gallery.length]);

  const current = gallery[index];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Đóng"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 text-white hover:bg-white/20"
          >
            <X size={22} weight="bold" />
          </button>

          <button
            type="button"
            aria-label="Ảnh trước"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i > 0 ? i - 1 : gallery.length - 1));
            }}
            className="absolute left-4 z-10 hidden h-12 w-12 items-center justify-center rounded-sm bg-white/10 text-white hover:bg-white/20 md:flex"
          >
            <CaretLeft size={24} weight="bold" />
          </button>

          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="relative h-[70dvh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-x-0 -bottom-12 text-center">
              <p className="text-sm font-medium text-white">{current.label}</p>
              <p className="mt-1 font-mono text-xs text-white/50">
                {index + 1} / {gallery.length}
              </p>
            </div>
          </motion.div>

          <button
            type="button"
            aria-label="Ảnh sau"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i < gallery.length - 1 ? i + 1 : 0));
            }}
            className="absolute right-4 z-10 hidden h-12 w-12 items-center justify-center rounded-sm bg-white/10 text-white hover:bg-white/20 md:flex"
          >
            <CaretRight size={24} weight="bold" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}