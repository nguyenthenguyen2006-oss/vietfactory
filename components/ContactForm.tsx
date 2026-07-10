"use client";

import { PaperPlaneTilt } from "@phosphor-icons/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  variant?: "dark" | "light";
}

export function ContactForm({ variant = "dark" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const isDark = variant === "dark";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-sm border p-8 text-center",
          isDark ? "border-white/10 bg-white/5" : "border-cold bg-surface"
        )}
      >
        <p className={cn("text-lg font-semibold", isDark ? "text-white" : "text-navy")}>
          Đã gửi yêu cầu
        </p>
        <p className={cn("mt-2 text-sm", isDark ? "text-white/70" : "text-slate-muted")}>
          Chúng tôi sẽ liên hệ trong thời gian sớm nhất. (Form demo, chưa kết nối backend)
        </p>
      </div>
    );
  }

  const inputClass = cn(
    "w-full rounded-sm border px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent",
    isDark
      ? "border-white/15 bg-white/5 text-white placeholder:text-white/40"
      : "border-cold bg-white text-charcoal placeholder:text-slate-muted"
  );

  const labelClass = cn(
    "mb-1.5 block text-sm font-medium",
    isDark ? "text-white/80" : "text-charcoal"
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Họ và tên
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Nguyễn Văn A" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Số điện thoại
          </label>
          <input id="phone" name="phone" required className={inputClass} placeholder="0981 956 111" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={inputClass}
          placeholder="email@congty.vn"
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          Nội dung cần tư vấn
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={inputClass}
          placeholder="Mô tả quy mô, loại công trình, địa điểm dự kiến..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-accent-deep hover:text-white active:scale-[0.98] sm:w-auto"
      >
        Gửi yêu cầu
        <PaperPlaneTilt size={18} weight="bold" />
      </button>
    </form>
  );
}