"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectLightbox } from "@/components/ProjectLightbox";
import { SectionHeading } from "@/components/SectionHeading";
import { solutionShowcase, toGallery } from "@/data/labaco-showcase";
import { useState } from "react";

const gallery = toGallery(solutionShowcase);
const tileClasses = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
];

export function ProjectShowcaseSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="section-pad" style={{ background: "var(--color-surface)" }}>
      <div className="container-wide">
        <SectionHeading
          title="Một hệ thống, sáu năng lực"
          description="Từ nhà xưởng đến phòng sạch, mỗi giải pháp được triển khai theo đúng yêu cầu vận hành."
        />

        <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-12">
          {gallery.map((item, i) => (
            <Reveal
              key={item.src}
              delay={i * 0.04}
              className={tileClasses[i]}
            >
              <motion.button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className={`group relative w-full overflow-hidden bg-ink ${
                  i === 0 ? "aspect-[16/10] md:h-full md:min-h-[520px]" : "aspect-[4/3]"
                }`}
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={i === 0 ? "66vw" : "25vw"}
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
              </motion.button>
              <p className="mt-3 text-sm font-semibold text-ink md:text-base">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/dich-vu"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-navy"
          >
            Khám phá toàn bộ dịch vụ
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </div>

      {lightboxIndex !== null && (
        <ProjectLightbox
          gallery={gallery}
          initialIndex={lightboxIndex}
          open
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
