import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../ui/Badge';
import { Globe, User, HeartPulse, Cpu, Zap, CircleDot, Dna, Atom, Sparkles, ChevronLeft, ChevronRight, Sliders } from 'lucide-react';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';
import { EvidenceStatus } from '../../types';

const iconMap = [Globe, User, HeartPulse, Cpu, Zap, CircleDot, Dna, Atom, Sparkles];

const statusMap: EvidenceStatus[] = [
  'SPECULATION',
  'ESTABLISHED SCIENTIFIC FACT',
  'SCIENTIFIC HYPOTHESIS',
  'ESTABLISHED SCIENTIFIC FACT',
  'OPEN QUESTION / DEBATE',
  'PHILOSOPHICAL HYPOTHESIS',
  'PHILOSOPHICAL HYPOTHESIS',
  'PHILOSOPHICAL HYPOTHESIS',
  'PHILOSOPHICAL HYPOTHESIS'
];

export const ConsciousnessScale: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const { playHover, playChime } = useAudio();
  const { t, isRTL } = useTranslation();

  const levels = t.scaleSection.levels;
  const currentLevel = levels[selectedIndex] || levels[0];
  const IconComponent = iconMap[selectedIndex] || Sparkles;
  const currentStatus = statusMap[selectedIndex] || 'PHILOSOPHICAL HYPOTHESIS';

  const PrevIcon = isRTL ? ChevronRight : ChevronLeft;
  const NextIcon = isRTL ? ChevronLeft : ChevronRight;

  const handleNext = () => {
    if (selectedIndex < levels.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      playChime(350 + (selectedIndex + 1) * 30);
    }
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      playChime(350 + (selectedIndex - 1) * 30);
    }
  };

  return (
    <section id="scale" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-warm-secondary border border-warm-border text-warm-olive font-sans text-xs font-medium tracking-wide mb-4 shadow-warm-sm">
          <Sliders className="w-3.5 h-3.5 text-warm-goldMuted" />
          <span>{t.scaleSection.badge}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-warm-ink tracking-wide">
          {t.scaleSection.title}
        </h2>
        <p className="mt-4 text-warm-inkMuted text-sm sm:text-base leading-relaxed font-sans">
          {t.scaleSection.subtitle}
        </p>
      </div>

      {/* Interactive Scale Navigation Bar */}
      <div className="mb-10 overflow-x-auto pb-4 pt-2">
        <div className="flex items-center justify-between min-w-[780px] gap-2 px-2">
          {levels.map((lvl, index) => {
            const isSelected = selectedIndex === index;
            const StepIcon = iconMap[index] || Sparkles;

            return (
              <button
                key={lvl.id}
                onClick={() => {
                  setSelectedIndex(index);
                  playChime(350 + index * 30);
                }}
                onMouseEnter={playHover}
                className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all text-center group shadow-warm-sm ${
                  isSelected
                    ? 'bg-warm-gold/25 border-warm-goldMuted/80 text-warm-ink ring-1 ring-warm-goldMuted/30 font-semibold'
                    : 'bg-warm-secondary/60 border-warm-border text-warm-inkMuted hover:text-warm-ink hover:bg-warm-secondary'
                }`}
              >
                <div
                  className={`p-2 rounded-xl border transition-transform group-hover:scale-105 ${
                    isSelected
                      ? 'border-warm-goldMuted/60 bg-warm-gold/40 text-warm-ink'
                      : 'border-warm-border bg-white/70 text-warm-olive'
                  }`}
                >
                  <StepIcon className="w-4 h-4" />
                </div>
                <div className="font-sans text-xs font-bold tracking-wide truncate w-full">
                  {lvl.name}
                </div>
                <span className="text-[10px] font-sans text-warm-oliveLight block">
                  {t.scaleSection.orderPrefix} {lvl.order}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Level Inspection Detail Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentLevel.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="warm-card border border-warm-border rounded-3xl p-6 sm:p-10 shadow-warm-md space-y-8"
        >
          {/* Level Header with Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-warm-border">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-warm-gold/20 border border-warm-goldMuted/40 text-warm-olive shadow-warm-sm">
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-sans font-semibold text-warm-olive tracking-wider uppercase">
                    {t.scaleSection.orderPrefix} {currentLevel.order}/9
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-warm-ink">
                  {currentLevel.name}
                </h3>
                <span className="text-xs font-sans text-warm-inkMuted">{t.scaleSection.physicalScale} {currentLevel.scaleMetric}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Badge status={currentStatus} />
              <div className="flex items-center gap-1.5 ms-auto">
                <button
                  onClick={handlePrev}
                  disabled={selectedIndex === 0}
                  className="p-2 rounded-xl bg-warm-secondary border border-warm-border text-warm-ink hover:bg-warm-sand disabled:opacity-30 transition-colors shadow-warm-sm"
                  aria-label={t.common.previous}
                >
                  <PrevIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={selectedIndex === levels.length - 1}
                  className="p-2 rounded-xl bg-warm-secondary border border-warm-border text-warm-ink hover:bg-warm-sand disabled:opacity-30 transition-colors shadow-warm-sm"
                  aria-label={t.common.next}
                >
                  <NextIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Scientific vs Philosophical Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Scientific Description */}
            <div className="space-y-2.5 p-5 rounded-2xl bg-warm-secondary/50 border border-warm-border">
              <span className="text-xs font-sans font-semibold text-warm-olive uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-warm-olive" />
                {t.scaleSection.scientificHeading}
              </span>
              <p className="text-warm-ink text-sm sm:text-base leading-relaxed font-sans">
                {currentLevel.scientificDescription}
              </p>
            </div>

            {/* Philosophical Central Question */}
            <div className="space-y-2.5 p-5 rounded-2xl bg-warm-gold/15 border border-warm-goldMuted/40">
              <span className="text-xs font-sans font-semibold text-warm-olive uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-warm-goldMuted" />
                {t.scaleSection.philosophicalHeading}
              </span>
              <p className="font-serif text-lg sm:text-xl text-warm-ink italic leading-relaxed">
                "{currentLevel.philosophicalQuestion}"
              </p>
            </div>
          </div>

          {/* Core Explanatory Dilemma */}
          <div className="p-4 rounded-2xl bg-warm-secondary/70 border border-warm-border text-xs sm:text-sm text-warm-ink font-sans">
            <strong className="text-warm-olive font-semibold">{t.scaleSection.tensionHeading} </strong>
            {currentLevel.coreDilemma}
          </div>

          {/* Tri-Metaphysical Perspective Grid */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-sans font-semibold text-warm-olive tracking-wider uppercase">
              {t.scaleSection.theoriesHeading}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
              <div className="p-4 rounded-2xl bg-white/70 border border-warm-border space-y-1.5 shadow-warm-sm">
                <span className="text-warm-olive font-bold block tracking-wide">PHYSICALISM</span>
                <p className="text-warm-inkMuted leading-relaxed text-[11px]">{currentLevel.physicalism}</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-warm-border space-y-1.5 shadow-warm-sm">
                <span className="text-warm-goldMuted font-bold block tracking-wide">PANPSYCHISM</span>
                <p className="text-warm-inkMuted leading-relaxed text-[11px]">{currentLevel.panpsychism}</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-warm-border space-y-1.5 shadow-warm-sm">
                <span className="text-warm-oliveLight font-bold block tracking-wide">EMERGENTISM</span>
                <p className="text-warm-inkMuted leading-relaxed text-[11px]">{currentLevel.emergentism}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
