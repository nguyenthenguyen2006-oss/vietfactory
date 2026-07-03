"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";
import { faqCategories, faqs } from "@/data/faq";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  limit?: number;
  showViewAll?: boolean;
  showFilter?: boolean;
}

export function FAQSection({
  limit,
  showViewAll = true,
  showFilter = false,
}: FAQSectionProps) {
  const [activeCat, setActiveCat] = useState<string>("Tất cả");

  const filtered =
    activeCat === "Tất cả"
      ? faqs
      : faqs.filter((f) => f.category === activeCat);

  const items = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            title="Câu hỏi thường gặp"
            description="Giải đáp các thắc mắc phổ biến về thiết kế và thi công công trình công nghiệp."
          />
          {showViewAll && (
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-base font-semibold text-accent"
            >
              Xem tất cả
              <ArrowRight size={18} weight="bold" />
            </Link>
          )}
        </div>

        {showFilter && (
          <div className="mt-8 flex flex-wrap gap-2">
            {["Tất cả", ...faqCategories].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCat(cat)}
                className={cn(
                  "rounded-sm px-4 py-2 text-base font-medium transition-colors",
                  activeCat === cat
                    ? "bg-navy text-white"
                    : "bg-cold text-charcoal hover:bg-cold/80"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="mt-10 space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-sm border border-cold bg-surface"
            >
              <summary className="cursor-pointer px-6 py-4 text-base font-semibold text-navy md:text-lg">
                {item.question}
              </summary>
              <p className="border-t border-cold px-6 py-4 text-base leading-relaxed text-slate-muted md:text-lg">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}