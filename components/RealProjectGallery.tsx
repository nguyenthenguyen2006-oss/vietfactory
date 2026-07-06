"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ProjectLightbox } from "@/components/ProjectLightbox";
import {
  projectCategories,
  type ProjectFilter,
  type RealProject,
} from "@/data/real-projects";
import { cn } from "@/lib/utils";

interface ProjectPhotoCardProps {
  project: RealProject;
  onOpen: () => void;
  className?: string;
}

export function ProjectPhotoCard({
  project,
  onOpen,
  className,
}: ProjectPhotoCardProps) {
  return (
    <article
      className={cn(
        "group inline-block w-full break-inside-avoid overflow-hidden rounded-[22px] border border-[#E8DFC4] bg-white shadow-[0_12px_32px_rgba(90,73,26,0.08)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#FFC400]/60 hover:shadow-[0_18px_42px_rgba(90,73,26,0.13)]",
        className
      )}
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative block w-full overflow-hidden bg-[#EEE8D8] text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC400]/45"
        aria-label={`Xem ảnh lớn: ${project.label}`}
      >
        <Image
          src={project.src}
          alt={project.alt}
          width={project.width}
          height={project.height}
          loading="lazy"
          quality={78}
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 46vw, 30vw"
          className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </button>
      <div className="flex items-start justify-between gap-3 px-5 py-4">
        <h3 className="text-[15px] font-semibold leading-snug text-[#102033]">
          {project.label}
        </h3>
        <span className="shrink-0 rounded-full bg-[#FFC400] px-2.5 py-1 text-[10px] font-bold leading-none text-[#102033]">
          {project.category}
        </span>
      </div>
    </article>
  );
}

interface RealProjectGalleryProps {
  projects: RealProject[];
  className?: string;
}

export function RealProjectGallery({
  projects,
  className,
}: RealProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("Tất cả");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const filteredProjects = useMemo(
    () =>
      activeFilter === "Tất cả"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter, projects]
  );

  return (
    <>
      <div
        className={cn(
          "flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          className
        )}
        role="toolbar"
        aria-label="Lọc hình ảnh theo lĩnh vực"
      >
        {projectCategories.map((category) => {
          const active = activeFilter === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setActiveFilter(category);
                setLightboxIndex(null);
              }}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC400]/35",
                active
                  ? "border-[#FFC400] bg-[#FFC400] text-[#102033]"
                  : "border-[#E8DFC4] bg-white text-[#657080] hover:border-[#E6A800] hover:text-[#102033]"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-7 columns-1 gap-5 md:columns-2 xl:columns-3">
        {filteredProjects.map((project, index) => (
          <ProjectPhotoCard
            key={project.src}
            project={project}
            onOpen={() => setLightboxIndex(index)}
            className="mb-5"
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <ProjectLightbox
          gallery={filteredProjects}
          initialIndex={lightboxIndex}
          open
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
