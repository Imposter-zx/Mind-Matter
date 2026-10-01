import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Terminal, HelpCircle, MessageSquare } from 'lucide-react';
import { NeuralNetVisualizer } from '../3d/NeuralNetVisualizer';
import { Badge } from '../ui/Badge';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';

export const AILab: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<1 | 2>(1);
  const [scenario1Choice, setScenario1Choice] = useState<'yes' | 'no' | 'unsure' | null>(null);
  const [scenario2Choice, setScenario2Choice] = useState<'yes' | 'no' | 'unsure' | null>(null);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const { playHover, playChime } = useAudio();
  const { t } = useTranslation();

  const handleSelect1 = (choice: 'yes' | 'no' | 'unsure') => {
    setIsAiThinking(true);
    setScenario1Choice(choice);
    playChime(choice === 'yes' ? 600 : choice === 'no' ? 400 : 500);
    setTimeout(() => setIsAiThinking(false), 800);
  };

  const handleSelect2 = (choice: 'yes' | 'no' | 'unsure') => {
    setIsAiThinking(true);
    setScenario2Choice(choice);
    playChime(choice === 'yes' ? 600 : choice === 'no' ? 400 : 500);
    setTimeout(() => setIsAiThinking(false), 800);
  };

  return (
    <section id="ailab" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-warm-secondary border border-warm-border text-warm-olive font-sans text-xs font-medium tracking-wide mb-4 shadow-warm-sm">
          <Bot className="w-3.5 h-3.5 text-warm-goldMuted" />
          <span>{t.aiSection.badge}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-warm-ink tracking-wide">
          {t.aiSection.title}
        </h2>
        <p className="mt-4 text-warm-inkMuted text-sm sm:text-base leading-relaxed font-sans">
          {t.aiSection.subtitle}
        </p>
      </div>

      {/* Scenario Switcher Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 rounded-full bg-warm-secondary border border-warm-border shadow-warm-sm">
          <button
            onClick={() => {
              setActiveScenario(1);
              playChime(450);
            }}
            onMouseEnter={playHover}
            className={`px-5 py-2 rounded-full font-sans text-xs font-medium tracking-wide transition-all ${
              activeScenario === 1
                ? 'bg-warm-gold text-warm-ink font-semibold shadow-warm-sm ring-1 ring-warm-goldMuted/40'
                : 'text-warm-inkMuted hover:text-warm-ink hover:bg-white/40'
            }`}
          >
            {t.aiSection.scenario1Tab}
          </button>
          <button
            onClick={() => {
              setActiveScenario(2);
              playChime(550);
            }}
            onMouseEnter={playHover}
            className={`px-5 py-2 rounded-full font-sans text-xs font-medium tracking-wide transition-all ${
              activeScenario === 2
                ? 'bg-warm-gold text-warm-ink font-semibold shadow-warm-sm ring-1 ring-warm-goldMuted/40'
                : 'text-warm-inkMuted hover:text-warm-ink hover:bg-white/40'
            }`}
          >
            {t.aiSection.scenario2Tab}
          </button>
        </div>
      </div>

      {/* Main Interactive AI Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: 3D Neural Sim & Simulated AI Output */}
        <div className="lg:col-span-6 flex flex-col justify-between warm-card border border-warm-border rounded-3xl p-6 sm:p-8 min-h-[440px] relative overflow-hidden shadow-warm-md">
          <div className="absolute inset-0 z-0 opacity-40">
            <NeuralNetVisualizer isThinking={isAiThinking} />
          </div>

          <div className="relative z-10 flex items-center justify-between pb-4 border-b border-warm-border">
            <div className="flex items-center gap-2 text-xs font-sans font-medium text-warm-olive">
              <Terminal className="w-4 h-4 text-warm-goldMuted" />
              <span>{t.aiSection.engineLabel}</span>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] font-sans font-semibold text-warm-olive">
              <span className="w-2 h-2 rounded-full bg-warm-olive animate-pulse" />
              {t.aiSection.online}
            </span>
          </div>

          {/* AI Dialogue Bubble */}
          <div className="relative z-10 my-8 space-y-4">
            <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-warm-border shadow-warm-md space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-sans font-semibold text-warm-olive tracking-wider">
                <MessageSquare className="w-3.5 h-3.5 text-warm-goldMuted" />
                <span>{t.aiSection.aiSelfReport}</span>
              </div>
              <p className="font-serif text-lg sm:text-xl text-warm-ink italic leading-relaxed">
                {activeScenario === 1 ? t.aiSection.scenario1Text : t.aiSection.scenario2Text}
              </p>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-warm-border flex items-center justify-between text-[11px] font-sans text-warm-inkMuted">
            <span>{t.aiSection.substrate}</span>
            <span>{t.aiSection.qualiaStatus}</span>
          </div>
        </div>

        {/* Right Column: Philosophical Dilemma & User Response */}
        <div className="lg:col-span-6 warm-card border border-warm-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-warm-md">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-sans font-semibold text-warm-olive tracking-wider uppercase">
                {activeScenario === 1 ? 'SCENARIO 1' : 'SCENARIO 2'}
              </span>
              <Badge status="THOUGHT EXPERIMENT" size="sm" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-warm-ink mb-3">
              {activeScenario === 1 ? t.aiSection.scenario1Question : t.aiSection.scenario2Question}
            </h3>

            <p className="text-xs sm:text-sm text-warm-inkMuted mb-6 leading-relaxed font-sans">
              {activeScenario === 1 ? t.aiSection.scenario1Desc : t.aiSection.scenario2Desc}
            </p>

            {/* Response Options */}
            <div className="grid grid-cols-3 gap-3 mb-6 font-sans text-xs">
              {(['yes', 'no', 'unsure'] as const).map((choice) => {
                const currentChoice = activeScenario === 1 ? scenario1Choice : scenario2Choice;
                const isSelected = currentChoice === choice;
                const label = choice === 'yes' ? t.aiSection.yes : choice === 'no' ? t.aiSection.no : t.aiSection.unsure;

                return (
                  <button
                    key={choice}
                    onClick={() => (activeScenario === 1 ? handleSelect1(choice) : handleSelect2(choice))}
                    onMouseEnter={playHover}
                    className={`p-3.5 rounded-2xl border text-center font-bold tracking-wide transition-all shadow-warm-sm ${
                      isSelected
                        ? 'bg-warm-gold text-warm-ink border-warm-goldMuted font-bold ring-1 ring-warm-goldMuted/40'
                        : 'bg-warm-secondary/60 border-warm-border text-warm-inkMuted hover:text-warm-ink hover:bg-warm-secondary'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Philosophical Feedback / Analysis */}
          <div>
            <AnimatePresence mode="wait">
              {activeScenario === 1 && scenario1Choice && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-5 rounded-2xl bg-warm-secondary/60 border border-warm-border text-xs text-warm-ink space-y-2 font-sans"
                >
                  <strong className="text-warm-olive block font-semibold">{t.aiSection.analysisHeading}</strong>
                  <p className="leading-relaxed">
                    {scenario1Choice === 'yes' && t.aiSection.scenario1YesAnalysis}
                    {scenario1Choice === 'no' && t.aiSection.scenario1NoAnalysis}
                    {scenario1Choice === 'unsure' && t.aiSection.scenario1UnsureAnalysis}
                  </p>
                </motion.div>
              )}

              {activeScenario === 2 && scenario2Choice && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-5 rounded-2xl bg-warm-secondary/60 border border-warm-border text-xs text-warm-ink space-y-2 font-sans"
                >
                  <strong className="text-warm-olive block font-semibold">{t.aiSection.analysisHeading}</strong>
                  <p className="leading-relaxed">
                    {scenario2Choice === 'yes' && t.aiSection.scenario2YesAnalysis}
                    {scenario2Choice === 'no' && t.aiSection.scenario2NoAnalysis}
                    {scenario2Choice === 'unsure' && t.aiSection.scenario2UnsureAnalysis}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {!((activeScenario === 1 && scenario1Choice) || (activeScenario === 2 && scenario2Choice)) && (
              <div className="p-4 rounded-2xl bg-warm-secondary/40 border border-warm-border text-xs font-sans text-warm-inkMuted flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-warm-oliveLight shrink-0" />
                <span>{t.aiSection.promptSelect}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
