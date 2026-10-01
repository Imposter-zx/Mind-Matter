import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { usePerformanceTier } from '../../hooks/usePerformanceTier';

const SunlitDustParticles: React.FC<{ count: number; reducedMotion: boolean }> = ({ count, reducedMotion }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Warm organic dust colors (warm gold, soft olive, sand, gentle ivory)
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const gold = new THREE.Color('#C7AE5D');
    const olive = new THREE.Color('#717154');
    const sand = new THREE.Color('#A89D7E');

    for (let i = 0; i < count; i++) {
      // Gentle natural cloud distribution
      const radius = 10 + Math.random() * 26;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const rand = Math.random();
      const mixedColor = rand > 0.5 ? gold : rand > 0.2 ? sand : olive;

      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }

    return [pos, col];
  }, [count]);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((_state, delta) => {
    if (!pointsRef.current) return;

    if (!reducedMotion) {
      // Extremely slow, organic rotation like floating dust in sunlight
      pointsRef.current.rotation.y += delta * 0.015;
      pointsRef.current.rotation.x += delta * 0.008;

      const targetX = mouseRef.current.y * 0.08;
      const targetY = mouseRef.current.x * 0.08;

      pointsRef.current.rotation.x += (targetX - pointsRef.current.rotation.x) * 0.015;
      pointsRef.current.rotation.z += (targetY - pointsRef.current.rotation.z) * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.14}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

export const CosmicField: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { particleCount, reducedMotion } = usePerformanceTier();

  return (
    <div className={`w-full h-full pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 26], fov: 55 }}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.8} />
        <SunlitDustParticles count={particleCount} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
};
