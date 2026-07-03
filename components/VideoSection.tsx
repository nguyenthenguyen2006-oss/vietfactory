"use client";

import Image from "next/image";
import { Play } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useState } from "react";
import { videos } from "@/data/videos";
import { SectionHeading } from "@/components/SectionHeading";

export function VideoSection() {
  const [activeId, setActiveId] = useState(videos[0]?.youtubeId ?? "");

  const activeVideo = videos.find((v) => v.youtubeId === activeId) ?? videos[0];

  return (
    <section className="section-pad bg-navy">
      <div className="container-wide">
        <SectionHeading
          title="Video dự án"
          description="Hình ảnh thực tế từ công trường và quy trình triển khai công trình công nghiệp."
          dark
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="relative aspect-video overflow-hidden rounded-sm bg-navy-light">
              {activeVideo?.youtubeId && activeVideo.youtubeId !== "YOUR_VIDEO_ID" ? (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-white/60">
                  <Play size={48} weight="duotone" />
                  <p className="text-base">Video đang được cập nhật</p>
                </div>
              )}
            </div>
            <p className="mt-4 text-lg font-medium text-white">{activeVideo?.title}</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 lg:col-span-4 lg:grid-cols-1">
            {videos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveId(video.youtubeId)}
                className={`group relative overflow-hidden rounded-sm text-left transition-all ${
                  activeId === video.youtubeId
                    ? "ring-2 ring-accent"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <div className="relative aspect-video bg-navy-light">
                  {video.youtubeId !== "YOUR_VIDEO_ID" ? (
                    <Image
                      src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="200px"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 bg-navy-light" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-navy/40">
                    <Play size={24} weight="fill" className="text-white" />
                  </div>
                </div>
                <p className="mt-2 text-sm font-medium text-white md:text-base">
                  {video.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}