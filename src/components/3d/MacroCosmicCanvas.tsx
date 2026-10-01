import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CosmicNetworkProps {
  complexity: number; // 1 to 100
}

const CosmicNodes: React.FC<CosmicNetworkProps> = ({ complexity }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const activeCount = Math.floor(10 + (complexity / 100) * 750);

  const { allPositions, linePositions } = useMemo(() => {
    const MAX = 800;
    const positions = new Float32Array(MAX * 3);
    const nodeVectors: THREE.Vector3[] = [];

    for (let i = 0; i < MAX; i++) {
      const arm = i % 3;
      const armOffset = (arm * 2 * Math.PI) / 3;
      const distance = 0.5 + Math.pow(i / MAX, 0.7) * 13;
      const angle = distance * 0.75 + armOffset;

      const x = Math.cos(angle) * distance + (Math.random() - 0.5) * 1.8;
      const y = (Math.random() - 0.5) * (distance * 0.35);
      const z = Math.sin(angle) * distance + (Math.random() - 0.5) * 1.8;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      nodeVectors.push(new THREE.Vector3(x, y, z));
    }

    const lines: number[] = [];
    for (let i = 0; i < MAX; i++) {
      for (let j = i + 1; j < Math.min(i + 14, MAX); j++) {
        const dist = nodeVectors[i].distanceTo(nodeVectors[j]);
        if (dist < 3.2) {
          lines.push(nodeVectors[i].x, nodeVectors[i].y, nodeVectors[i].z);
          lines.push(nodeVectors[j].x, nodeVectors[j].y, nodeVectors[j].z);
        }
      }
    }

    return {
      allPositions: positions,
      linePositions: new Float32Array(lines)
    };
  }, []);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.08;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group>
      {/* Node Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={activeCount}
            array={allPositions.subarray(0, activeCount * 3)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={complexity > 70 ? 0.18 : 0.24}
          color={complexity > 60 ? '#C7AE5D' : '#51513B'}
          transparent
          opacity={0.8}
        />
      </points>

      {/* Connections */}
      {complexity > 20 && (
        <lineSegments ref={linesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={Math.min(linePositions.length / 3, Math.floor((complexity / 100) * (linePositions.length / 3)))}
              array={linePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#A89D7E"
            transparent
            opacity={Math.min(0.4, (complexity - 20) / 140)}
          />
        </lineSegments>
      )}
    </group>
  );
};

export const MacroCosmicCanvas: React.FC<{ complexity: number }> = ({ complexity }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 8, 22], fov: 48 }}>
        <ambientLight intensity={0.9} />
        <CosmicNodes complexity={complexity} />
      </Canvas>
    </div>
  );
};
