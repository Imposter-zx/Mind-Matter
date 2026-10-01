import React from 'react';
import { Cpu } from 'lucide-react';
import { usePerformanceTier } from '../../hooks/usePerformanceTier';
import { PerformanceTier } from '../../types';
import { useTranslation } from '../../i18n';

export const PerformanceSelector: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { tier, setManualTier, particleCount } = usePerformanceTier();
  const { t } = useTranslation();

  return (
    <div className={`flex items-center gap-1.5 text-xs font-sans text-warm-inkMuted ${className}`}>
      <span className="flex items-center gap-1 text-warm-oliveLight">
        <Cpu className="w-3.5 h-3.5 text-warm-goldMuted" />
        <span className="hidden sm:inline">{t.common.gpuTier}:</span>
      </span>

      <div className="flex bg-warm-secondary/80 p-0.5 rounded-lg border border-warm-border">
        {(['high', 'medium', 'low'] as PerformanceTier[]).map((mode) => (
          <button
            key={mode}
            onClick={() => setManualTier(mode)}
            className={`px-2 py-0.5 rounded text-xs capitalize transition-all ${
              tier === mode
                ? 'bg-warm-gold text-warm-ink font-semibold shadow-warm-sm'
                : 'text-warm-inkMuted hover:text-warm-ink'
            }`}
            title={`${mode.toUpperCase()} (~${mode === 'high' ? '3,500' : mode === 'medium' ? '1,200' : '400'} particles)`}
          >
            {mode}
          </button>
        ))}
      </div>
      <span className="text-[10px] text-warm-oliveLight hidden md:inline">({particleCount.toLocaleString()} pts)</span>
    </div>
  );
};
