import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ_QUESTIONS } from '../../data/questions';
import { Compass, RotateCcw, CheckCircle2, Share2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';

interface LocalizedScore {
  panpsychismScore: number;
  fundamentalScore: number;
  artificialScore: number;
  holismScore: number;
  dominantArchetype: string;
  archetypeDescription: string;
  keyInsights: string[];
}

export const PhilosophyQuiz: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [result, setResult] = useState<LocalizedScore | null>(null);
  const [copied, setCopied] = useState(false);
  const { playHover, playChime, playSweep } = useAudio();
  const { t } = useTranslation();

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const currentAnswer = answers[currentQ.id];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const progressPercent = Math.round(((currentIndex + (currentAnswer ? 1 : 0)) / totalQuestions) * 100);

  const calculateLocalizedScore = (ans: Record<number, number>): LocalizedScore => {
    let pScore = 50;
    let fScore = 50;
    let aScore = 50;
    let hScore = 50;

    QUIZ_QUESTIONS.forEach((q) => {
      const rawVal = ans[q.id] || 3;
      const offset = (rawVal - 3) * q.polarity;

      if (q.category === 'physicalism-panpsychism') {
        pScore += offset * 12.5;
      } else if (q.category === 'emergence-fundamental') {
        fScore += offset * 25;
      } else if (q.category === 'biological-artificial') {
        aScore += offset * 25;
      } else if (q.category === 'reductionism-holism') {
        hScore += offset * 25;
      }
    });

    pScore = Math.max(5, Math.min(95, Math.round(pScore)));
    fScore = Math.max(5, Math.min(95, Math.round(fScore)));
    aScore = Math.max(5, Math.min(95, Math.round(aScore)));
    hScore = Math.max(5, Math.min(95, Math.round(hScore)));

    const archs = t.quizSection.archetypes;
    let dominantArchetype = archs.synthesist.title;
    let archetypeDescription = archs.synthesist.desc;

    if (pScore <= 35 && fScore <= 40) {
      dominantArchetype = archs.physicalist.title;
      archetypeDescription = archs.physicalist.desc;
    } else if (pScore >= 65 && fScore >= 60 && hScore >= 50) {
      dominantArchetype = archs.panpsychist.title;
      archetypeDescription = archs.panpsychist.desc;
    } else if (fScore <= 40 && aScore >= 60) {
      dominantArchetype = archs.emergentist.title;
      archetypeDescription = archs.emergentist.desc;
    } else if (pScore <= 45 && aScore <= 40) {
      dominantArchetype = archs.naturalist.title;
      archetypeDescription = archs.naturalist.desc;
    } else if (hScore >= 65) {
      dominantArchetype = archs.holist.title;
      archetypeDescription = archs.holist.desc;
    }

    const ins = t.quizSection.insights;
    const keyInsights: string[] = [
      `${pScore > 50 ? ins.panpsychismLean : ins.physicalismLean} (${pScore}%)`,
      fScore > 50 ? ins.fundamentalLean : ins.emergenceLean,
      aScore > 50 ? ins.syntheticLean : ins.biologicalLean,
      hScore > 50 ? ins.holistLean : ins.reductionistLean
    ];

    return {
      panpsychismScore: pScore,
      fundamentalScore: fScore,
      artificialScore: aScore,
      holismScore: hScore,
      dominantArchetype,
      archetypeDescription,
      keyInsights
    };
  };

  const handleSelectOption = (val: number) => {
    const updated = { ...answers, [currentQ.id]: val };
    setAnswers(updated);
    playChime(400 + val * 50);

    if (currentIndex < totalQuestions - 1) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 250);
    } else {
      setTimeout(() => {
        const score = calculateLocalizedScore(updated);
        setResult(score);
        playSweep(true);
        try {
          confetti({
            particleCount: 45,
            spread: 60,
            origin: { y: 0.8 },
            colors: ['#E3D27A', '#C7AE5D', '#51513B', '#FAF6EC']
          });
        } catch {
          // ignore
        }
      }, 300);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentIndex(0);
    setResult(null);
    playChime(350);
  };

  const handleShare = () => {
    if (!result) return;
    const text = `MIND//MATTER Consciousness Profile:\n${result.dominantArchetype}\n${result.archetypeDescription}\nPanpsychism Index: ${result.panpsychismScore}%`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const options = [
    { label: t.quizSection.stronglyDisagree, value: 1 },
    { label: t.quizSection.disagree, value: 2 },
    { label: t.quizSection.unsure, value: 3 },
    { label: t.quizSection.agree, value: 4 },
    { label: t.quizSection.stronglyAgree, value: 5 }
  ];

  return (
    <section id="quiz" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-warm-secondary border border-warm-border text-warm-olive font-sans text-xs font-medium tracking-wide mb-4 shadow-warm-sm">
          <Compass className="w-3.5 h-3.5 text-warm-goldMuted" />
          <span>{t.quizSection.badge}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-warm-ink tracking-wide">
          {t.quizSection.title}
        </h2>
        <p className="mt-4 text-warm-inkMuted text-sm sm:text-base leading-relaxed font-sans">
          {t.quizSection.subtitle}
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {!result ? (
          /* Quiz Question Card */
          <div className="warm-card border border-warm-border rounded-3xl p-6 sm:p-10 shadow-warm-md space-y-8">
            {/* Progress Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-sans text-warm-inkMuted">
                <span>{t.quizSection.questionCounter} {currentIndex + 1} / {totalQuestions}</span>
                <span className="text-warm-olive font-bold">{progressPercent}% {t.quizSection.complete}</span>
              </div>
              <div className="w-full h-2 bg-warm-secondary rounded-full overflow-hidden border border-warm-border">
                <div
                  className="h-full bg-warm-gold transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Question Statement */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQ.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <h3 className="font-serif text-2xl sm:text-3xl text-warm-ink font-semibold leading-relaxed">
                  "{currentQ.statement}"
                </h3>
                <p className="text-xs sm:text-sm text-warm-inkMuted font-sans bg-warm-secondary/50 p-4 rounded-2xl border border-warm-border">
                  <strong className="text-warm-ink">{t.quizSection.contextLabel}</strong> {currentQ.context}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Likert Scale Options */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 pt-2">
              {options.map((opt) => {
                const isSelected = currentAnswer === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleSelectOption(opt.value)}
                    onMouseEnter={playHover}
                    className={`p-3.5 sm:p-3 rounded-2xl border text-center font-sans text-xs transition-all flex sm:flex-col items-center justify-between sm:justify-center gap-2 shadow-warm-sm ${
                      isSelected
                        ? 'bg-warm-gold text-warm-ink border-warm-goldMuted font-bold ring-1 ring-warm-goldMuted/40'
                        : 'bg-warm-secondary/50 border-warm-border text-warm-inkMuted hover:text-warm-ink hover:bg-warm-secondary'
                    }`}
                  >
                    <span>{opt.label}</span>
                    <span className={`w-2.5 h-2.5 rounded-full border ${isSelected ? 'bg-warm-olive border-warm-ink' : 'border-warm-border'}`} />
                  </button>
                );
              })}
            </div>

            {/* Navigation footer */}
            <div className="flex items-center justify-between pt-4 border-t border-warm-border text-xs font-sans text-warm-inkMuted">
              <button
                onClick={() => {
                  if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
                }}
                disabled={currentIndex === 0}
                className="hover:text-warm-ink disabled:opacity-30 transition-colors"
              >
                {t.quizSection.prevQuestion}
              </button>
              <span>{t.quizSection.neutralMatrix}</span>
            </div>
          </div>
        ) : (
          /* Profile Result Display */
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="warm-card-elevated border border-warm-border rounded-3xl p-6 sm:p-10 shadow-warm-lg space-y-8"
          >
            {/* Header */}
            <div className="text-center space-y-2 pb-6 border-b border-warm-border">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-warm-gold/20 border border-warm-goldMuted/40 text-warm-olive text-xs font-sans font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-warm-goldMuted" />
                <span>{t.quizSection.profileBadge}</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-warm-ink">
                {result.dominantArchetype}
              </h3>
              <p className="text-sm sm:text-base text-warm-inkMuted max-w-xl mx-auto leading-relaxed pt-2 font-sans">
                {result.archetypeDescription}
              </p>
            </div>

            {/* 4 Multi-Dimensional Axes */}
            <div className="space-y-5">
              <span className="text-xs font-sans font-semibold text-warm-olive tracking-wider uppercase block text-center">
                {t.quizSection.dimensionsHeading}
              </span>

              {/* Axis 1 */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-warm-secondary/50 border border-warm-border">
                <div className="flex justify-between text-xs font-sans font-medium">
                  <span className="text-warm-olive font-bold">{t.quizSection.axis1Left}</span>
                  <span className="text-warm-ink font-bold">{result.panpsychismScore}%</span>
                  <span className="text-warm-goldMuted font-bold">{t.quizSection.axis1Right}</span>
                </div>
                <div className="w-full h-2.5 bg-warm-sand/80 rounded-full overflow-hidden relative">
                  <div
                    className="absolute top-0 bottom-0 bg-warm-gold rounded-full transition-all duration-1000"
                    style={{ width: `${result.panpsychismScore}%` }}
                  />
                </div>
              </div>

              {/* Axis 2 */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-warm-secondary/50 border border-warm-border">
                <div className="flex justify-between text-xs font-sans font-medium">
                  <span className="text-warm-olive font-bold">{t.quizSection.axis2Left}</span>
                  <span className="text-warm-ink font-bold">{result.fundamentalScore}%</span>
                  <span className="text-warm-goldMuted font-bold">{t.quizSection.axis2Right}</span>
                </div>
                <div className="w-full h-2.5 bg-warm-sand/80 rounded-full overflow-hidden relative">
                  <div
                    className="absolute top-0 bottom-0 bg-warm-gold rounded-full transition-all duration-1000"
                    style={{ width: `${result.fundamentalScore}%` }}
                  />
                </div>
              </div>

              {/* Axis 3 */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-warm-secondary/50 border border-warm-border">
                <div className="flex justify-between text-xs font-sans font-medium">
                  <span className="text-warm-olive font-bold">{t.quizSection.axis3Left}</span>
                  <span className="text-warm-ink font-bold">{result.artificialScore}%</span>
                  <span className="text-warm-goldMuted font-bold">{t.quizSection.axis3Right}</span>
                </div>
                <div className="w-full h-2.5 bg-warm-sand/80 rounded-full overflow-hidden relative">
                  <div
                    className="absolute top-0 bottom-0 bg-warm-gold rounded-full transition-all duration-1000"
                    style={{ width: `${result.artificialScore}%` }}
                  />
                </div>
              </div>

              {/* Axis 4 */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-warm-secondary/50 border border-warm-border">
                <div className="flex justify-between text-xs font-sans font-medium">
                  <span className="text-warm-olive font-bold">{t.quizSection.axis4Left}</span>
                  <span className="text-warm-ink font-bold">{result.holismScore}%</span>
                  <span className="text-warm-goldMuted font-bold">{t.quizSection.axis4Right}</span>
                </div>
                <div className="w-full h-2.5 bg-warm-sand/80 rounded-full overflow-hidden relative">
                  <div
                    className="absolute top-0 bottom-0 bg-warm-gold rounded-full transition-all duration-1000"
                    style={{ width: `${result.holismScore}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Key Analytical Insights */}
            <div className="p-5 rounded-2xl bg-warm-secondary/60 border border-warm-border space-y-2.5">
              <span className="text-xs font-sans font-semibold text-warm-olive tracking-wider uppercase block">
                {t.quizSection.summaryHeading}
              </span>
              <ul className="space-y-2 text-xs sm:text-sm font-sans text-warm-ink">
                {result.keyInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-warm-olive shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-warm-border">
              <button
                onClick={handleReset}
                onMouseEnter={playHover}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-warm-secondary border border-warm-border text-xs font-sans text-warm-ink hover:bg-warm-sand transition-all shadow-warm-sm"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{t.quizSection.retakeBtn}</span>
              </button>

              <button
                onClick={handleShare}
                onMouseEnter={playHover}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl bg-warm-gold hover:bg-warm-goldMuted text-warm-ink text-xs font-sans font-bold tracking-wider uppercase transition-all shadow-warm-md"
              >
                <Share2 className="w-4 h-4" />
                <span>{copied ? t.quizSection.copiedBtn : t.quizSection.copyBtn}</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
