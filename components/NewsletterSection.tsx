"use client";

import { PaperPlaneTilt } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function NewsletterSection() {
  const [done, setDone] = useState(false);

  return (
    <section className="border-t border-cold bg-surface section-pad !py-20">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionHeading
            title="Đăng ký nhận tin"
            description="Nhận cập nhật về xu hướng thiết kế công trình công nghiệp và dự án mới."
            align="center"
          />

          <AnimatePresence mode="wait">
            {done ? (
              <motion.p
                key="done"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-lg text-navy"
              >
                Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi thông tin mới nhất đến bạn.
              </motion.p>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
              >
                <input
                  type="email"
                  required
                  placeholder="Email của bạn"
                  className="w-full rounded-sm border border-cold bg-white px-5 py-3.5 text-base text-charcoal outline-none transition-shadow focus:border-accent focus:ring-2 focus:ring-accent/25 sm:max-w-sm"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-navy px-6 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-navy-sm)] transition-colors hover:bg-navy-light"
                >
                  Đăng ký
                  <PaperPlaneTilt size={18} weight="bold" />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}