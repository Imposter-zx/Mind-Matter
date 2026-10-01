import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../ui/Badge';
import { ExternalLink, Lightbulb, CheckCircle2, Compass } from 'lucide-react';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';

const sepLinks: Record<string, string> = {
  zombie: 'https://plato.stanford.edu/entries/zombies/',
  'chinese-room': 'https://plato.stanford.edu/entries/chinese-room/',
  'ship-of-theseus': 'https://plato.stanford.edu/entries/identity-time/',
  'brain-in-a-vat': 'https://plato.stanford.edu/entries/brain-in-a-vat/',
  'ai-copy': 'https://plato.stanford.edu/entries/identity-personal/'
};

export const ThoughtExperiments: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>('zombie');
  const [userChoices, setUserChoices] = useState<Record<string, string>>({});
  const { playHover, playChime } = useAudio();
  const { t } = useTranslation();

  const experiments = t.experimentsSection.experiments;
  const currentExp = experiments.find((e) => e.id === selectedExpId) || experiments[0];
  const userChoiceId = userChoices[currentExp.id];

  const handleChoice = (choiceId: string) => {
    setUserChoices((prev) => ({
      ...prev,
      [currentExp.id]: choiceId
    }));
    playChime(550);
  };

  return (
    <section id="experiments" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-warm-secondary border border-warm-border text-warm-olive font-sans text-xs font-medium tracking-wide mb-4 shadow-warm-sm">
          <Compass className="w-3.5 h-3.5 text-warm-goldMuted" />
          <span>{t.experimentsSection.badge}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-warm-ink tracking-wide">
          {t.experimentsSection.title}
        </h2>
        <p className="mt-4 text-warm-inkMuted text-sm sm:text-base leading-relaxed font-sans">
          {t.experimentsSection.subtitle}
        </p>
      </div>

      {/* Experiment Selector Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10">
        {experiments.map((exp) => {
          const isSelected = exp.id === selectedExpId;
          const isAnswered = !!userChoices[exp.id];

          return (
            <button
              key={exp.id}
              onClick={() => {
                setSelectedExpId(exp.id);
                playChime(450);
              }}
              onMouseEnter={playHover}
              className={`px-4 py-2 rounded-full font-sans text-xs tracking-wide transition-all whitespace-nowrap flex items-center gap-2 shadow-warm-sm ${
                isSelected
                  ? 'bg-warm-gold text-warm-ink font-semibold ring-1 ring-warm-goldMuted/40'
                  : 'bg-warm-secondary/70 border border-warm-border text-warm-inkMuted hover:text-warm-ink hover:bg-white/50'
              }`}
            >
              <span>{exp.title}</span>
              {isAnswered && <CheckCircle2 className="w-3.5 h-3.5 text-warm-olive" />}
            </button>
          );
        })}
      </div>

      {/* Main Experiment Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentExp.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="warm-card border border-warm-border rounded-3xl p-6 sm:p-10 shadow-warm-md space-y-8"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-warm-border">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-sans font-semibold text-warm-olive uppercase tracking-wider">
                  {currentExp.philosopher} ({currentExp.year})
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-warm-ink mt-1">
                {currentExp.title}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <Badge status="THOUGHT EXPERIMENT" />
              {sepLinks[currentExp.id] && (
                <a
                  href={sepLinks[currentExp.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-sans text-warm-olive hover:text-warm-ink underline underline-offset-4"
                >
                  <span>{t.experimentsSection.sepArticle}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* The Scenario Narrative */}
          <div className="space-y-3">
            <span className="text-xs font-sans font-semibold text-warm-olive uppercase tracking-wider flex items-center gap-2">
              <Lightbulb className="w-3.5 h-3.5 text-warm-goldMuted" />
              {t.experimentsSection.scenarioLabel}
            </span>
            <div className="p-6 rounded-3xl bg-warm-secondary/50 border border-warm-border text-warm-ink text-sm sm:text-base leading-relaxed font-sans">
              {currentExp.scenario}
            </div>
          </div>

          {/* The Central Question */}
          <div className="p-6 rounded-3xl bg-warm-gold/15 border border-warm-goldMuted/40">
            <span className="text-xs font-sans font-semibold text-warm-olive uppercase tracking-wider block mb-1">
              {t.experimentsSection.coreDilemmaLabel}
            </span>
            <p className="font-serif text-lg sm:text-xl text-warm-ink font-semibold italic leading-relaxed">
              "{currentExp.centralQuestion}"
            </p>
          </div>

          {/* Interactive Choices Grid */}
          <div className="space-y-3">
            <span className="text-xs font-sans font-semibold text-warm-olive uppercase tracking-wider">
              {t.experimentsSection.selectPositionLabel}
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentExp.choices.map((choice) => {
                const isSelected = userChoiceId === choice.id;

                return (
                  <button
                    key={choice.id}
                    onClick={() => handleChoice(choice.id)}
                    onMouseEnter={playHover}
                    className={`p-5 rounded-3xl border text-start transition-all duration-200 flex flex-col justify-between shadow-warm-sm ${
                      isSelected
                        ? 'bg-warm-gold/25 border-warm-goldMuted ring-2 ring-warm-gold/40'
                        : 'bg-warm-secondary/40 border-warm-border hover:border-warm-goldMuted/60 hover:bg-warm-secondary'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-sans font-semibold text-warm-oliveLight uppercase">{choice.representedView}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-warm-olive" />}
                      </div>
                      <h4 className={`font-sans text-xs sm:text-sm font-bold mb-2 ${isSelected ? 'text-warm-ink' : 'text-warm-olive'}`}>
                        {choice.label}
                      </h4>
                      <p className="text-xs text-warm-inkMuted leading-relaxed font-sans">
                        {choice.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-warm-border text-[11px] font-sans text-warm-oliveLight">
                      <span>{choice.philosophicalImplication}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Verdict Summary */}
          <div className="pt-4 border-t border-warm-border text-xs font-sans text-warm-inkMuted leading-relaxed">
            <strong className="text-warm-ink font-semibold">{t.experimentsSection.epistemicStatusLabel}</strong> {currentExp.verdictAnalysis}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
