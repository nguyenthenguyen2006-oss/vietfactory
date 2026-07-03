"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { LoadingScene } from "@/components/3d/LoadingScene";

const HeroWireframe = dynamic(
  () => import("@/components/3d/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false, loading: () => <LoadingScene label="Đang tải scene..." /> }
);

interface Hero3DSceneProps {
  fallbackImage: string;
  alt: string;
}

export function Hero3DScene({ fallbackImage, alt }: Hero3DSceneProps) {
  const [use3D, setUse3D] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReduced || isMobile) setUse3D(false);
  }, []);

  if (!mounted) {
    return (
      <div className="relative h-full w-full">
        <Image src={fallbackImage} alt={alt} fill className="object-cover" priority sizes="100vw" />
      </div>
    );
  }

  if (!use3D) {
    return (
      <div className="relative h-full w-full">
        <Image src={fallbackImage} alt={alt} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/50 to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <Suspense fallback={<LoadingScene />}>
        <HeroWireframe />
      </Suspense>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/40 to-transparent" />
    </div>
  );
}