import { Canvas } from "@react-three/fiber";
import { Sphere, OrbitControls, Stars, Float } from "@react-three/drei";

export default function DataGlobe() {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#22d3ee" />
      <Stars radius={100} depth={50} count={6000} factor={4} fade speed={1} />
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[3, 64, 64]}>
          <meshStandardMaterial 
            color="#0f172a" 
            emissive="#0e7490" 
            wireframe 
            transparent 
            opacity={0.4}
          />
        </Sphere>
      </Float>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
}