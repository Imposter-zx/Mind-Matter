import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, HelpCircle, ChevronRight, ChevronLeft, Sparkles, User, HeartPulse, CircleDot, Dna, Atom, Orbit } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { EvidenceStatus } from '../../types';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';

const icons = [User, HeartPulse, CircleDot, Dna, Atom, Orbit, Sparkles];

const statusMapping: Record<string, EvidenceStatus> = {
  human: 'ESTABLISHED SCIENTIFIC FACT',
  animal: 'SCIENTIFIC HYPOTHESIS',
  cell: 'PHILOSOPHICAL HYPOTHESIS',
  molecule: 'PHILOSOPHICAL HYPOTHESIS',
  atom: 'PHILOSOPHICAL HYPOTHESIS',
  particle: 'SPECULATION',
  quantum: 'OPEN QUESTION / DEBATE'
};

export const QuestionProgression: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('human');
  const { playHover, playChime } = useAudio();
  const { t, isRTL } = useTranslation();

  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;
  const currentLevelIndex = t.questionSection.levels.findIndex((l) => l.id === selectedId);
  const currentLevel = t.questionSection.levels[currentLevelIndex >= 0 ? currentLevelIndex : 0];
  const currentStatus = statusMapping[currentLevel.id] || 'PHILOSOPHICAL HYPOTHESIS';

  return (
    <section id="question" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-warm-secondary border border-warm-border text-warm-olive font-sans text-xs font-medium tracking-wide mb-4 shadow-warm-sm">
          <HelpCircle className="w-3.5 h-3.5 text-warm-goldMuted" />
          <span>{t.questionSection.badge}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-warm-ink tracking-wide">
          {t.questionSection.title}
        </h2>
        <p className="mt-4 text-warm-inkMuted text-sm sm:text-base leading-relaxed font-sans">
          {t.questionSection.description}
        </p>
      </div>

      {/* Interactive Progression Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Ladder Column */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-2">
          {t.questionSection.levels.map((lvl, index) => {
            const isSelected = selectedId === lvl.id;
            const Icon = icons[index] || Sparkles;

            return (
              <React.Fragment key={lvl.id}>
                <button
                  onClick={() => {
                    setSelectedId(lvl.id);
                    playChime(350 + index * 40);
                  }}
                  onMouseEnter={playHover}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-200 text-start shadow-warm-sm ${
                    isSelected
                      ? 'bg-warm-gold/25 border-warm-goldMuted/80 text-warm-ink ring-1 ring-warm-goldMuted/30 font-semibold'
                      : 'bg-warm-secondary/60 border border-warm-border hover:bg-warm-secondary hover:border-warm-border/80 text-warm-inkMuted'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2 rounded-xl border ${
                        isSelected
                          ? 'border-warm-goldMuted/60 bg-warm-gold/40 text-warm-ink'
                          : 'border-warm-border bg-white/70 text-warm-olive'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-sans font-bold text-sm tracking-wide ${isSelected ? 'text-warm-ink' : 'text-warm-olive'}`}>
                          {lvl.title}
                        </span>
                      </div>
                      <span className="text-[11px] text-warm-inkMuted font-sans">{lvl.subtitle}</span>
                    </div>
                  </div>

                  <ChevronIcon
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-warm-olive translate-x-1' : 'text-warm-oliveLight/50'
                    }`}
                  />
                </button>

                {index < t.questionSection.levels.length - 1 && (
                  <div className="py-0.5 text-warm-oliveLight/40">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Right Detail Inspection Card */}
        <div className="lg:col-span-7 sticky top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLevel.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="warm-card border border-warm-border rounded-3xl p-6 sm:p-8 shadow-warm-md space-y-6"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-warm-border">
                <div>
                  <span className="text-[11px] font-sans font-semibold text-warm-olive uppercase tracking-wider">
                    {t.questionSection.levelInspection}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-warm-ink mt-0.5">
                    {currentLevel.title}
                  </h3>
                  <span className="text-xs font-sans text-warm-inkMuted">{currentLevel.subtitle}</span>
                </div>
                <Badge status={currentStatus} />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <span className="text-xs font-sans font-semibold text-warm-olive uppercase tracking-wider">
                  {t.questionSection.scientificProfile}
                </span>
                <p className="text-warm-ink text-sm sm:text-base leading-relaxed bg-warm-secondary/50 p-4 rounded-2xl border border-warm-border">
                  {currentLevel.text}
                </p>
              </div>

              {/* The Philosophical Dilemma */}
              <div className="space-y-2">
                <span className="text-xs font-sans font-semibold text-warm-olive uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-warm-goldMuted" />
                  {t.questionSection.explanatoryGap}
                </span>
                <div className="p-4 rounded-2xl bg-warm-gold/15 border border-warm-goldMuted/40 text-warm-ink text-sm leading-relaxed font-sans">
                  {currentLevel.keyDilemma}
                </div>
              </div>

              {/* Intellectual Neutrality Note */}
              <div className="pt-2 flex items-center gap-2 text-xs font-sans text-warm-inkMuted">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-oliveLight shrink-0" />
                <span>{t.questionSection.neutralityNote}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
