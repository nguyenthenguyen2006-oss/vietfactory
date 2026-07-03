"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

function IndustrialBlock() {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={group} position={[2, -0.5, 0]}>
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[4, 1.2, 2.5]} />
        <meshStandardMaterial color="#1e3a5f" metalness={0.6} roughness={0.3} wireframe />
      </mesh>
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[3.8, 0.15, 2.3]} />
        <meshStandardMaterial color="#00b4d8" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-1.5, 0.3, 1.4]}>
        <boxGeometry args={[1, 0.6, 0.8]} />
        <meshStandardMaterial color="#334155" metalness={0.4} roughness={0.5} wireframe />
      </mesh>
      <mesh position={[1.5, 0.3, 1.4]}>
        <boxGeometry args={[1, 0.6, 0.8]} />
        <meshStandardMaterial color="#334155" metalness={0.4} roughness={0.5} wireframe />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[12, 12, 12, 12]} />
        <meshStandardMaterial color="#00b4d8" wireframe opacity={0.15} transparent />
      </mesh>
    </group>
  );
}

export function HeroWireframe() {
  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [6, 3, 6], fov: 40 }}
      dpr={[1, 1.25]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#0a1628"]} />
      <fog attach="fog" args={["#0a1628", 8, 20]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 5]} intensity={1} color="#00b4d8" />
      <pointLight position={[-3, 2, 4]} intensity={0.5} color="#ffffff" />
      <IndustrialBlock />
    </Canvas>
  );
}