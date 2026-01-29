import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Box, Torus } from "@react-three/drei";

export default function FloatingShapes() {
  const shapesRef = useRef([]);
  const shapes = Array.from({ length: 12 }).map((_, i) => {
    const types = ["Sphere", "Box", "Torus"];
    const type = types[Math.floor(Math.random() * types.length)];
    return { type, radius: 0.2 + Math.random() * 0.3, color: i % 2 ? "#22d3ee" : "#38bdf8", speed: 0.01 + Math.random() * 0.01 };
  });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    shapesRef.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.position.x = Math.sin(t * shapes[i].speed + i) * (2 + i * 0.5);
      mesh.position.y = Math.cos(t * shapes[i].speed + i * 0.3) * (1 + i * 0.2);
      mesh.position.z = Math.sin(t * shapes[i].speed * 0.7 + i) * (2 + i * 0.3);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    });
  });

  return shapes.map((s, i) => {
    const refSetter = (el) => (shapesRef.current[i] = el);
    switch (s.type) {
      case "Sphere": return <Sphere args={[s.radius, 32, 32]} ref={refSetter} key={i}><meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.5}/></Sphere>;
      case "Box": return <Box args={[s.radius, s.radius, s.radius]} ref={refSetter} key={i}><meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.5}/></Box>;
      case "Torus": return <Torus args={[s.radius, s.radius/4, 16, 100]} ref={refSetter} key={i}><meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.5}/></Torus>;
      default: return null;
    }
  });
}
