import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const skin = '#b87956';
const hair = '#17121b';
const jacket = '#171827';

function Eye({ x }) {
  return (
    <group position={[x, 0.13, 0.53]}>
      <mesh scale={[0.115, 0.075, 0.035]}>
        <sphereGeometry args={[1, 20, 16]} />
        <meshStandardMaterial color="#fff5ee" />
      </mesh>
      <mesh position={[0, 0, 0.034]} scale={[0.044, 0.057, 0.025]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#271c22" roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.11, -0.01]} rotation={[0, 0, x < 0 ? -0.12 : 0.12]} scale={[0.13, 0.025, 0.03]}>
        <sphereGeometry args={[1, 16, 12]} />
        <meshStandardMaterial color={hair} />
      </mesh>
    </group>
  );
}

export default function GirlAvatar() {
  const character = useRef();
  const head = useRef();
  const hairTail = useRef();
  useFrame(({ pointer, clock }, delta) => {
    const t = clock.getElapsedTime();
    if (character.current) {
      character.current.position.y = Math.sin(t * 1.4) * 0.055 - 0.1;
      character.current.rotation.y = THREE.MathUtils.damp(character.current.rotation.y, pointer.x * 0.22, 3, delta);
    }
    if (head.current) {
      head.current.rotation.y = THREE.MathUtils.damp(head.current.rotation.y, pointer.x * 0.3, 3, delta);
      head.current.rotation.x = THREE.MathUtils.damp(head.current.rotation.x, -pointer.y * 0.13, 3, delta);
    }
    if (hairTail.current) hairTail.current.rotation.z = Math.sin(t * 1.6) * 0.045;
  });
  return (
    <group ref={character} position={[0, -0.1, 0]}>
      {/* Torso: dark blazer over charcoal blouse */}
      <mesh position={[0, -0.9, 0]} scale={[0.85, 0.95, 0.43]}>
        <sphereGeometry args={[1, 32, 24]} />
        <meshStandardMaterial color={jacket} roughness={0.8} />
      </mesh>
      <mesh position={[0, -0.77, 0.405]} scale={[0.34, 0.58, 0.06]}>
        <sphereGeometry args={[1, 24, 16]} />
        <meshStandardMaterial color="#363b4a" />
      </mesh>
      <mesh position={[-0.69, -0.89, 0]} rotation={[0, 0, -0.23]} scale={[0.25, 0.67, 0.27]}>
        <sphereGeometry args={[1, 24, 16]} />
        <meshStandardMaterial color={jacket} />
      </mesh>
      <mesh position={[0.69, -0.89, 0]} rotation={[0, 0, 0.23]} scale={[0.25, 0.67, 0.27]}>
        <sphereGeometry args={[1, 24, 16]} />
        <meshStandardMaterial color={jacket} />
      </mesh>
      <mesh position={[0, -0.14, 0]} scale={[0.18, 0.28, 0.18]}>
        <cylinderGeometry args={[1, 1, 1, 24]} />
        <meshStandardMaterial color={skin} />
      </mesh>
      <group ref={head} position={[0, 0.53, 0]}>
        {/* Back hair and ponytail */}
        <mesh position={[0, 0.12, -0.16]} scale={[0.54, 0.67, 0.49]}>
          <sphereGeometry args={[1, 32, 24]} />
          <meshStandardMaterial color={hair} roughness={0.95} />
        </mesh>
        <group ref={hairTail} position={[0.36, -0.1, -0.45]}>
          <mesh position={[0.13, -0.35, -0.08]} rotation={[0, 0, -0.2]} scale={[0.19, 0.56, 0.19]}>
            <sphereGeometry args={[1, 24, 16]} />
            <meshStandardMaterial color={hair} />
          </mesh>
        </group>
        {/* Face */}
        <mesh scale={[0.47, 0.59, 0.48]}>
          <sphereGeometry args={[1, 40, 32]} />
          <meshStandardMaterial color={skin} roughness={0.82} />
        </mesh>
        <mesh position={[0, 0.49, -0.04]} scale={[0.49, 0.2, 0.46]}>
          <sphereGeometry args={[1, 28, 20]} />
          <meshStandardMaterial color={hair} />
        </mesh>
        <Eye x={-0.19} />
        <Eye x={0.19} />
        <mesh position={[0, -0.09, 0.51]} scale={[0.07, 0.11, 0.07]}>
          <sphereGeometry args={[1, 20, 16]} />
          <meshStandardMaterial color={skin} />
        </mesh>
        <mesh position={[0, -0.27, 0.464]} scale={[0.14, 0.033, 0.028]}>
          <sphereGeometry args={[1, 24, 16]} />
          <meshStandardMaterial color="#8b424c" />
        </mesh>
        {[-1, 1].map((side) => (
          <group key={side}>
            <mesh position={[side * 0.47, -0.01, 0]} scale={[0.1, 0.16, 0.11]}>
              <sphereGeometry args={[1, 20, 16]} />
              <meshStandardMaterial color={skin} />
            </mesh>
            <mesh position={[side * 0.53, -0.04, 0.082]} scale={[0.036, 0.036, 0.025]}>
              <sphereGeometry args={[1, 12, 12]} />
              <meshStandardMaterial color="#e6d9f9" metalness={0.65} roughness={0.3} />
            </mesh>
          </group>
        ))}
      </group>
      {/* Laptop in foreground */}
      <group position={[0, -1.23, 0.73]}>
        <RoundedBox args={[1.52, 0.88, 0.075]} radius={0.06} smoothness={4} rotation={[-0.16, 0, 0]} position={[0, 0.25, 0]}>
          <meshStandardMaterial color="#37334c" metalness={0.6} roughness={0.3} />
        </RoundedBox>
        <mesh position={[0, 0.26, 0.047]}>
          <torusGeometry args={[0.1, 0.015, 8, 32]} />
          <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={0.6} />
        </mesh>
        <RoundedBox args={[1.65, 0.055, 0.65]} radius={0.025} smoothness={3} position={[0, -0.23, 0.35]}>
          <meshStandardMaterial color="#59516d" metalness={0.45} roughness={0.4} />
        </RoundedBox>
      </group>
    </group>
  );
}
