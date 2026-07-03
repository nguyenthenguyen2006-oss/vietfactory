"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { cn } from "@/lib/utils";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1} />;
}

interface ModelCanvasProps {
  modelUrl: string;
  className?: string;
}

export function ModelCanvas({ modelUrl, className }: ModelCanvasProps) {
  return (
    <div className={cn("overflow-hidden rounded-sm bg-navy", className)}>
      <Canvas
        camera={{ position: [8, 4, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#0a1628"]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
        <Suspense fallback={null}>
          <Model url={modelUrl} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan
          enableZoom
          enableRotate
          minDistance={3}
          maxDistance={20}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      <div className="border-t border-white/10 bg-navy-light px-4 py-3">
        <p className="font-mono text-xs tracking-wide text-accent">
          Viewer 3D · Kéo để xoay · Cuộn để zoom
        </p>
      </div>
    </div>
  );
}

