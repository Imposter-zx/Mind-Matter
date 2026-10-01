import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CombinationSim } from '../3d/CombinationSim';
import { Network, ChevronDown } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';

export const CombinationProblem: React.FC = () => {
  const [selectedPossibility, setSelectedPossibility] = useState<string | null>('emergence');
  const { playHover, playChime } = useAudio();
  const { t } = useTranslation();

  return (
    <section id="combination" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-warm-secondary border border-warm-border text-warm-olive font-sans text-xs font-medium tracking-wide mb-4 shadow-warm-sm">
          <Network className="w-3.5 h-3.5 text-warm-goldMuted" />
          <span>{t.combinationSection.badge}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-warm-ink tracking-wide">
          {t.combinationSection.title}
        </h2>
        <p className="mt-4 text-warm-inkMuted text-sm sm:text-base leading-relaxed font-sans">
          {t.combinationSection.subtitle}
        </p>
      </div>

      {/* 3D Simulation Container */}
      <div className="mb-16">
        <CombinationSim />
      </div>

      {/* The Central Dilemma Banner */}
      <div className="warm-card border border-warm-border rounded-3xl p-6 sm:p-10 text-center max-w-4xl mx-auto mb-16 shadow-warm-md">
        <blockquote className="font-serif text-xl sm:text-2xl text-warm-ink font-normal italic leading-relaxed">
          {t.combinationSection.quote}
        </blockquote>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Badge status="OPEN QUESTION / DEBATE" />
          <span className="text-xs font-sans text-warm-inkMuted">{t.combinationSection.noConsensus}</span>
        </div>
      </div>

      {/* 3 Conceptual Possibilities */}
      <div className="space-y-4">
        <div className="text-center mb-6">
          <span className="text-xs font-sans font-semibold text-warm-olive tracking-wider uppercase">
            {t.combinationSection.hypothesesHeading}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.combinationSection.theories.map((p) => {
            const isSelected = selectedPossibility === p.id;
            return (
              <div
                key={p.id}
                onClick={() => {
                  setSelectedPossibility(isSelected ? null : p.id);
                  playChime(500);
                }}
                onMouseEnter={playHover}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 border flex flex-col justify-between shadow-warm-sm ${
                  isSelected
                    ? 'warm-card-elevated border-warm-goldMuted ring-2 ring-warm-gold/40'
                    : 'warm-card hover:border-warm-goldMuted/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-sans font-semibold tracking-wider text-warm-olive uppercase">{p.tag}</span>
                    <ChevronDown className={`w-4 h-4 text-warm-olive transition-transform ${isSelected ? 'rotate-180' : ''}`} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-warm-ink mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-warm-inkMuted leading-relaxed mb-4 font-sans">
                    {p.summary}
                  </p>
                </div>

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3 pt-4 border-t border-warm-border text-xs font-sans"
                    >
                      <div className="p-3.5 rounded-2xl bg-warm-secondary/60 border border-warm-border">
                        <strong className="text-warm-ink block mb-1 font-semibold">Explication :</strong>
                        <p className="text-warm-inkMuted leading-relaxed text-[11px]">{p.explanation}</p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-warm-secondary/30 border border-warm-border/60">
                        <strong className="text-warm-olive block mb-1 font-semibold">Objection majeure :</strong>
                        <p className="text-warm-inkMuted leading-relaxed text-[11px]">{p.counterArgument}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
