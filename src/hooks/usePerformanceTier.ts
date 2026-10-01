import { useState, useEffect } from 'react';
import { PerformanceTier } from '../types';

export function usePerformanceTier() {
  const [tier, setTier] = useState<PerformanceTier>(() => {
    const saved = localStorage.getItem('mindmatter_perf_tier') as PerformanceTier | null;
    if (saved && ['high', 'medium', 'low'].includes(saved)) {
      return saved;
    }
    return 'high';
  });

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion media query
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    motionQuery.addEventListener('change', handleMotionChange);

    // If not manually set, estimate performance tier
    const saved = localStorage.getItem('mindmatter_perf_tier');
    if (!saved) {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
      const cores = navigator.hardwareConcurrency || 4;

      if (motionQuery.matches) {
        setTier('low');
      } else if (isMobile || cores < 4) {
        setTier('medium');
      } else {
        setTier('high');
      }
    }

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  const setManualTier = (newTier: PerformanceTier) => {
    setTier(newTier);
    localStorage.setItem('mindmatter_perf_tier', newTier);
  };

  const particleCount = tier === 'high' ? (reducedMotion ? 1000 : 3500) : tier === 'medium' ? 1200 : 400;

  return {
    tier,
    setManualTier,
    reducedMotion,
    particleCount
  };
}
