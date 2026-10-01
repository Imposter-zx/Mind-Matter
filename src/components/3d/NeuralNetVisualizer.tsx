import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NeuralNetProps {
  isThinking: boolean;
}

const NetworkGraph: React.FC<NeuralNetProps> = ({ isThinking }) => {
  const groupRef = useRef<THREE.Group>(null);
  const NODE_COUNT = 55;

  const { nodePositions, linePositions, colors } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    const positions = new Float32Array(NODE_COUNT * 3);
    const colorArray = new Float32Array(NODE_COUNT * 3);

    const gold = new THREE.Color('#C7AE5D');
    const olive = new THREE.Color('#51513B');

    for (let i = 0; i < NODE_COUNT; i++) {
      const layer = Math.floor(i / 11) - 2;
      const x = layer * 3.2 + (Math.random() - 0.5) * 1.4;
      const y = (Math.random() - 0.5) * 5.5;
      const z = (Math.random() - 0.5) * 3.5;

      const vec = new THREE.Vector3(x, y, z);
      nodes.push(vec);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const col = Math.random() > 0.4 ? gold : olive;
      colorArray[i * 3] = col.r;
      colorArray[i * 3 + 1] = col.g;
      colorArray[i * 3 + 2] = col.b;
    }

    const lines: number[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 3.6 && Math.random() > 0.45) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lines.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }

    return {
      nodePositions: positions,
      linePositions: new Float32Array(lines),
      colors: colorArray
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const speed = isThinking ? 0.6 : 0.15;
    groupRef.current.rotation.y += delta * speed;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* Neurons */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={NODE_COUNT}
            array={nodePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={NODE_COUNT}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isThinking ? 0.3 : 0.2}
          vertexColors
          transparent
          opacity={0.85}
        />
      </points>

      {/* Synaptic Pathways */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={isThinking ? '#C7AE5D' : '#9E9479'}
          transparent
          opacity={isThinking ? 0.5 : 0.25}
        />
      </lineSegments>
    </group>
  );
};

export const NeuralNetVisualizer: React.FC<{ isThinking?: boolean; className?: string }> = ({
  isThinking = false,
  className = ''
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 14], fov: 44 }}>
        <ambientLight intensity={0.9} />
        <NetworkGraph isThinking={isThinking} />
      </Canvas>
    </div>
  );
};
