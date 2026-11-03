import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Stars, Text } from '@react-three/drei';
import GirlAvatar from './GirlAvatar';

function TechLabel({ children, position, color }) {
  return (
    <Float speed={1.5} floatIntensity={0.25} rotationIntensity={0.1}>
      <mesh position={position}>
        <boxGeometry args={[0.82, 0.44, 0.12]} />
        <meshStandardMaterial color="#1e1b38" metalness={0.25} roughness={0.3} />
        <Text position={[0, 0, 0.068]} fontSize={0.16} color={color} anchorX="center" anchorY="middle">
          {children}
        </Text>
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="h-[420px] w-full sm:h-[500px] lg:h-[560px]" aria-label="Interactive 3D girl developer character">
      <Canvas camera={{ position: [0, 0.15, 5.5], fov: 40 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={1.7} />
        <directionalLight position={[3, 5, 4]} intensity={2.6} color="#fff0e8" />
        <pointLight position={[-3, 2, 2]} intensity={22} color="#a78bfa" distance={8} />
        <pointLight position={[3, 0, -2]} intensity={18} color="#38bdf8" distance={8} />
        <Suspense fallback={null}>
          <GirlAvatar />
          <TechLabel position={[-1.65, 0.75, -0.2]} color="#61dafb">React</TechLabel>
          <TechLabel position={[1.55, 1.05, -0.3]} color="#facc15">JavaScript</TechLabel>
          <TechLabel position={[1.55, -0.6, -0.1]} color="#c4b5fd">Python</TechLabel>
          <TechLabel position={[-1.55, -0.75, -0.3]} color="#7dd3fc">GitHub</TechLabel>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
