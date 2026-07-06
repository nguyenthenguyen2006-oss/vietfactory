"use client";

import { useState } from "react";
import { ProjectLightbox } from "@/components/ProjectLightbox";
import { ProjectPhotoCard } from "@/components/RealProjectGallery";
import {
  projectCategories,
  type RealProject,
  type RealProjectCategory,
} from "@/data/real-projects";

interface GroupedRealProjectsProps {
  projects: RealProject[];
}

export function GroupedRealProjects({ projects }: GroupedRealProjectsProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const categories = projectCategories.filter(
    (category): category is RealProjectCategory => category !== "Tất cả"
  );

  return (
    <>
      <div className="space-y-20">
        {categories.map((category) => {
          const categoryProjects = projects.filter(
            (project) => project.category === category
          );

          return (
            <section
              key={category}
              id={category
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "-")
                .toLowerCase()}
              className="scroll-mt-24"
            >
              <div className="mb-7 flex items-end justify-between gap-5 border-b border-[#E8DFC4] pb-5">
                <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#102033] md:text-3xl">
                  {category === "Kho hàng"
                    ? "Kho hàng & logistics"
                    : category === "Kho lạnh"
                      ? "Kho lạnh công nghiệp"
                      : category}
                </h2>
                <span className="font-mono text-xs text-[#657080]">
                  {categoryProjects.length} hình ảnh
                </span>
              </div>

              <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
                {categoryProjects.map((project) => (
                  <ProjectPhotoCard
                    key={project.src}
                    project={project}
                    onOpen={() =>
                      setLightboxIndex(
                        projects.findIndex((item) => item.src === project.src)
                      )
                    }
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <ProjectLightbox
          gallery={projects}
          initialIndex={lightboxIndex}
          open
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
