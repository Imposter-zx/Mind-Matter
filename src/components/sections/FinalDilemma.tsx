import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Sparkles } from 'lucide-react';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';

export const FinalDilemma: React.FC<{ onExploreAgain: () => void }> = ({ onExploreAgain }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const { playHover, playChime, playSweep } = useAudio();
  const { t } = useTranslation();

  const handleSelect = (choice: string) => {
    setSelectedAnswer(choice);
    playSweep(true);
    playChime(528);
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    onExploreAgain();
  };

  return (
    <section className="relative min-h-[80vh] w-full flex flex-col items-center justify-center bg-[#EFE9D7] px-4 sm:px-6 lg:px-8 text-center py-24 border-t border-warm-border">
      <div className="max-w-3xl mx-auto space-y-10">
        <AnimatePresence mode="wait">
          {!selectedAnswer ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-warm-border text-warm-olive font-sans text-xs font-medium tracking-wide shadow-warm-sm">
                <Sparkles className="w-3.5 h-3.5 text-warm-goldMuted" />
                <span>{t.finalSection.badge}</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-warm-ink tracking-wide leading-tight">
                {t.finalSection.question}
              </h2>

              <p className="text-warm-inkMuted text-sm sm:text-base font-sans max-w-xl mx-auto leading-relaxed">
                {t.finalSection.subtitle}
              </p>

              {/* Three Final Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => handleSelect(t.finalSection.btnBrain)}
                  onMouseEnter={playHover}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-warm-secondary border border-warm-border text-warm-ink font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-warm-sm hover:shadow-warm-md"
                >
                  {t.finalSection.btnBrain}
                </button>

                <button
                  onClick={() => handleSelect(t.finalSection.btnMatter)}
                  onMouseEnter={playHover}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-warm-gold hover:bg-warm-goldMuted text-warm-ink font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-warm-md hover:shadow-warm-lg"
                >
                  {t.finalSection.btnMatter}
                </button>

                <button
                  onClick={() => handleSelect(t.finalSection.btnDontKnow)}
                  onMouseEnter={playHover}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-warm-secondary border border-warm-border text-warm-ink font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-warm-sm hover:shadow-warm-md"
                >
                  {t.finalSection.btnDontKnow}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="verdict"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.5 }}
              className="warm-card-elevated border border-warm-border rounded-3xl p-8 sm:p-14 space-y-8 max-w-2xl mx-auto shadow-warm-lg"
            >
              <span className="text-xs font-sans font-semibold text-warm-olive tracking-wider uppercase block">
                {t.finalSection.yourStance} {selectedAnswer}
              </span>

              <blockquote className="font-serif text-2xl sm:text-4xl text-warm-ink font-normal italic leading-relaxed">
                {t.finalSection.verdictQuote}
              </blockquote>

              <p className="text-sm font-sans text-warm-inkMuted leading-relaxed max-w-lg mx-auto">
                {t.finalSection.verdictDesc}
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  onMouseEnter={playHover}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-warm-gold hover:bg-warm-goldMuted text-warm-ink font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-warm-md hover:shadow-warm-lg"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{t.finalSection.exploreAgain}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
