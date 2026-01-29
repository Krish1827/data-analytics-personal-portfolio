import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function ParticlesBackground() {
  const points = useRef();
  const count = 1000;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 50;

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y += 0.001;
    points.current.rotation.x += 0.0005;
  });

  return (
    <Points ref={points} positions={positions}>
      <PointMaterial transparent color="#22d3ee" size={0.05} sizeAttenuation />
    </Points>
  );
}
