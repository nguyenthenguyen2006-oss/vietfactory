"use client";

import Link from "next/link";
import { Phone, ChatsCircle } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { company } from "@/data/company";

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 md:right-6">
      <motion.a
        href={`tel:${company.hotline.replace(/\s/g, "")}`}
        aria-label="Gọi hotline"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.94 }}
        className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent text-navy shadow-[var(--shadow-accent)]"
      >
        <Phone size={22} weight="bold" />
      </motion.a>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.15, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.94 }}
      >
        <Link
          href="/lien-he"
          aria-label="Liên hệ"
          className="flex h-12 w-12 items-center justify-center rounded-sm bg-navy text-white shadow-[var(--shadow-navy-md)]"
        >
          <ChatsCircle size={22} weight="bold" />
        </Link>
      </motion.div>
    </div>
  );
}