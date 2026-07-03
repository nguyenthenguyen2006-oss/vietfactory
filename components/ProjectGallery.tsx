"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryAngle } from "@/data/gallery";
import { ProjectLightbox } from "@/components/ProjectLightbox";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  gallery: GalleryAngle[];
}

export function ProjectGallery({ gallery }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {gallery.map((angle, i) => (
          <button
            key={angle.src}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className={cn(
              "group relative overflow-hidden rounded-sm bg-navy",
              i === 0 ? "col-span-2 row-span-2 aspect-[16/10]" : "aspect-square"
            )}
          >
            <Image
              src={angle.src}
              alt={angle.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes={i === 0 ? "100vw" : "33vw"}
            />
            <div className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/20" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-3 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              {angle.label}
            </span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <ProjectLightbox
          gallery={gallery}
          initialIndex={lightboxIndex}
          open
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}