import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Play, RotateCcw } from 'lucide-react';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';

interface ParticleClusterProps {
  isBound: boolean;
  progress: number;
}

const ParticleCluster: React.FC<ParticleClusterProps> = ({ isBound }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const COUNT = 320;

  const [unboundPos, boundPos] = useMemo(() => {
    const unbound = new Float32Array(COUNT * 3);
    const bound = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      unbound[i * 3] = (Math.random() - 0.5) * 14;
      unbound[i * 3 + 1] = (Math.random() - 0.5) * 14;
      unbound[i * 3 + 2] = (Math.random() - 0.5) * 14;

      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.4 + Math.random() * 1.2;

      bound[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      bound[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      bound[i * 3 + 2] = r * Math.cos(phi);
    }
    return [unbound, bound];
  }, []);

  const currentPos = useMemo(() => new Float32Array(COUNT * 3), []);

  useFrame((_state, delta) => {
    if (!pointsRef.current) return;

    const targetPos = isBound ? boundPos : unboundPos;
    const lerpFactor = delta * 2.5;

    for (let i = 0; i < COUNT * 3; i++) {
      currentPos[i] += (targetPos[i] - currentPos[i]) * lerpFactor;
    }

    const geo = pointsRef.current.geometry;
    geo.attributes.position.needsUpdate = true;

    pointsRef.current.rotation.y += delta * (isBound ? 0.25 : 0.08);
    pointsRef.current.rotation.x += delta * 0.08;

    if (linesRef.current) {
      linesRef.current.rotation.y = pointsRef.current.rotation.y;
      linesRef.current.rotation.x = pointsRef.current.rotation.x;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={COUNT}
            array={currentPos}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isBound ? 0.2 : 0.13}
          color={isBound ? '#C7AE5D' : '#51513B'}
          transparent
          opacity={0.8}
        />
      </points>
    </group>
  );
};

export const CombinationSim: React.FC = () => {
  const [isBound, setIsBound] = useState(false);
  const { playChime, playSweep } = useAudio();
  const { t } = useTranslation();

  const handleToggle = () => {
    const next = !isBound;
    setIsBound(next);
    if (next) {
      playSweep(true);
      playChime(580);
    } else {
      playSweep(false);
      playChime(380);
    }
  };

  return (
    <div className="relative w-full h-[450px] sm:h-[480px] warm-card rounded-2xl overflow-hidden border border-warm-border flex flex-col justify-between p-6 shadow-warm-md">
      {/* Simulation Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10">
        <div>
          <span className="text-[11px] font-sans font-semibold tracking-wider text-warm-olive uppercase">
            {t.common.conceptualVisualization}
          </span>
          <h4 className="text-lg font-serif font-bold text-warm-ink mt-0.5">
            {isBound ? t.combinationSection.simTitleBound : t.combinationSection.simTitleUnbound}
          </h4>
        </div>

        <div>
          <button
            onClick={handleToggle}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-sans font-medium transition-all shadow-warm-sm ${
              isBound
                ? 'bg-warm-gold text-warm-ink border border-warm-goldMuted/60 font-semibold'
                : 'bg-warm-secondary hover:bg-warm-sand text-warm-olive border border-warm-border'
            }`}
          >
            {isBound ? <RotateCcw className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isBound ? t.combinationSection.simBtnDisperse : t.combinationSection.simBtnBind}</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 48 }}>
          <ambientLight intensity={0.9} />
          <ParticleCluster isBound={isBound} progress={0} />
        </Canvas>
      </div>

      {/* Simulation Bottom Legend */}
      <div className="z-10 bg-warm-bg/90 backdrop-blur-md p-3.5 rounded-xl border border-warm-border text-xs text-warm-inkMuted max-w-xl shadow-warm-sm">
        <p className="font-sans leading-relaxed">
          {t.combinationSection.simProblem}
        </p>
      </div>
    </div>
  );
};
