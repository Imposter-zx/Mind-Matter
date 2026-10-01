import React, { useState } from 'react';
import { MacroCosmicCanvas } from '../3d/MacroCosmicCanvas';
import { Orbit, Sparkles, Sliders, Info } from 'lucide-react';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';

export const CosmicVisualization: React.FC = () => {
  const [complexity, setComplexity] = useState<number>(45);
  const { playHover, playChime } = useAudio();
  const { t } = useTranslation();

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setComplexity(val);
    if (val % 10 === 0) {
      playChime(300 + val * 3.5);
    }
  };

  return (
    <section id="cosmic" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-warm-secondary border border-warm-border text-warm-olive font-sans text-xs font-medium tracking-wide mb-4 shadow-warm-sm">
          <Orbit className="w-3.5 h-3.5 text-warm-goldMuted" />
          <span>{t.cosmicSection.badge}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-warm-ink tracking-wide">
          {t.cosmicSection.title}
        </h2>
        <p className="mt-4 text-warm-inkMuted text-sm sm:text-base leading-relaxed font-sans">
          {t.cosmicSection.subtitle}
        </p>
      </div>

      {/* 3D Canvas Box */}
      <div className="relative w-full h-[520px] sm:h-[600px] warm-card rounded-3xl overflow-hidden border border-warm-border shadow-warm-lg flex flex-col justify-between p-6 sm:p-8">
        {/* Top Floating Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10">
          <div>
            <span className="text-[11px] font-sans font-semibold text-warm-olive tracking-wider uppercase">
              {t.cosmicSection.topologyTitle}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-warm-ink mt-0.5">
              {complexity < 25 ? t.cosmicSection.lowDesc : complexity < 70 ? t.cosmicSection.midDesc : t.cosmicSection.highDesc}
            </h3>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-bg/90 border border-warm-border text-xs font-sans font-medium text-warm-olive shadow-warm-sm">
            <Sparkles className="w-3.5 h-3.5 text-warm-goldMuted" />
            <span>{t.common.conceptualVisualization}</span>
          </div>
        </div>

        {/* 3D Cosmic Network */}
        <div className="absolute inset-0 z-0">
          <MacroCosmicCanvas complexity={complexity} />
        </div>

        {/* Bottom Floating Interactive Control Deck */}
        <div className="z-10 bg-warm-bg/95 backdrop-blur-md p-5 sm:p-6 rounded-3xl border border-warm-border shadow-warm-md max-w-2xl mx-auto w-full space-y-4">
          <div className="flex items-center justify-between font-sans text-xs">
            <span className="text-warm-ink flex items-center gap-1.5 font-bold tracking-wide">
              <Sliders className="w-4 h-4 text-warm-goldMuted" />
              {t.cosmicSection.complexityLabel} {complexity}%
            </span>
            <span className="text-warm-inkMuted">
              {complexity < 25 ? t.cosmicSection.lowDesc : complexity < 70 ? t.cosmicSection.midDesc : t.cosmicSection.highDesc}
            </span>
          </div>

          {/* Slider */}
          <input
            type="range"
            min="5"
            max="100"
            value={complexity}
            onChange={handleSliderChange}
            onMouseEnter={playHover}
            className="w-full h-2 bg-warm-sand rounded-lg appearance-none cursor-pointer accent-warm-gold hover:accent-warm-goldMuted"
            aria-label="Structural Complexity Slider"
          />

          {/* Provocative Thought */}
          <p className="font-serif text-xs sm:text-sm text-warm-ink italic text-center pt-1 leading-relaxed">
            {t.cosmicSection.quote}
          </p>
        </div>
      </div>

      {/* Clarification Note */}
      <div className="mt-6 flex items-center justify-center gap-2 text-xs font-sans text-warm-inkMuted text-center">
        <Info className="w-3.5 h-3.5 text-warm-oliveLight shrink-0" />
        <span>{t.cosmicSection.disclaimer}</span>
      </div>
    </section>
  );
};
