import React, { useState } from 'react';
import { ArrowDown, Layers, Info } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';

export const PanpsychismSection: React.FC = () => {
  const [activeModel, setActiveModel] = useState<'physicalism' | 'panpsychism'>('panpsychism');
  const { playHover, playChime } = useAudio();
  const { t } = useTranslation();

  return (
    <section id="panpsychism" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-warm-secondary border border-warm-border text-warm-olive font-sans text-xs font-medium tracking-wide mb-4 shadow-warm-sm">
          <Layers className="w-3.5 h-3.5 text-warm-goldMuted" />
          <span>{t.panpsychismSection.badge}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-warm-ink tracking-wide">
          {t.panpsychismSection.title}
        </h2>
        <p className="mt-4 text-warm-inkMuted text-sm sm:text-base leading-relaxed font-sans">
          {t.panpsychismSection.subtitle}
        </p>
      </div>

      {/* Main Definition Quote Banner */}
      <div className="warm-card border border-warm-border rounded-3xl p-6 sm:p-10 mb-16 text-center max-w-4xl mx-auto shadow-warm-md">
        <span className="text-[11px] font-sans font-semibold tracking-wider text-warm-olive uppercase">
          {t.panpsychismSection.quoteBadge}
        </span>
        <blockquote className="font-serif text-xl sm:text-2xl text-warm-ink font-normal italic mt-2 mb-4 leading-relaxed">
          {t.panpsychismSection.quote}
        </blockquote>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Badge status="PHILOSOPHICAL HYPOTHESIS" />
          <span className="text-xs font-sans text-warm-inkMuted">{t.panpsychismSection.neutralityCallout}</span>
        </div>
      </div>

      {/* Interactive Flow Visualizer Controls */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1 rounded-full bg-warm-secondary border border-warm-border shadow-warm-sm">
          <button
            onClick={() => {
              setActiveModel('physicalism');
              playChime(420);
            }}
            onMouseEnter={playHover}
            className={`px-5 py-2 rounded-full font-sans text-xs font-medium tracking-wide transition-all ${
              activeModel === 'physicalism'
                ? 'bg-warm-gold text-warm-ink font-semibold shadow-warm-sm ring-1 ring-warm-goldMuted/40'
                : 'text-warm-inkMuted hover:text-warm-ink hover:bg-white/40'
            }`}
          >
            {t.panpsychismSection.btnPhysicalism}
          </button>
          <button
            onClick={() => {
              setActiveModel('panpsychism');
              playChime(560);
            }}
            onMouseEnter={playHover}
            className={`px-5 py-2 rounded-full font-sans text-xs font-medium tracking-wide transition-all ${
              activeModel === 'panpsychism'
                ? 'bg-warm-gold text-warm-ink font-semibold shadow-warm-sm ring-1 ring-warm-goldMuted/40'
                : 'text-warm-inkMuted hover:text-warm-ink hover:bg-white/40'
            }`}
          >
            {t.panpsychismSection.btnPanpsychism}
          </button>
        </div>
      </div>

      {/* Animated Visual Flow Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Physicalism Card */}
        <div
          onClick={() => {
            setActiveModel('physicalism');
            playChime(420);
          }}
          className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 border shadow-warm-md ${
            activeModel === 'physicalism'
              ? 'warm-card-elevated border-warm-goldMuted ring-2 ring-warm-gold/40'
              : 'warm-card opacity-70 hover:opacity-100'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-sans font-semibold text-warm-olive tracking-wider uppercase">
              {t.panpsychismSection.physicalism.tag}
            </span>
            <Badge status="PHILOSOPHICAL HYPOTHESIS" size="sm" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-warm-ink mb-1">{t.panpsychismSection.physicalism.title}</h3>
          <p className="text-xs text-warm-inkMuted font-sans mb-6">{t.panpsychismSection.physicalism.summary}</p>

          {/* Flow Stages */}
          <div className="space-y-3 font-sans text-xs">
            <div className="p-3.5 rounded-2xl bg-warm-secondary/60 border border-warm-border flex items-center justify-between text-warm-ink font-medium">
              <span>{t.panpsychismSection.physicalism.step1}</span>
              <span className="text-[11px] text-warm-inkMuted">{t.panpsychismSection.physicalism.step1Sub}</span>
            </div>
            <div className="flex justify-center text-warm-oliveLight"><ArrowDown className="w-4 h-4" /></div>
            <div className="p-3.5 rounded-2xl bg-warm-secondary/60 border border-warm-border flex items-center justify-between text-warm-ink font-medium">
              <span>{t.panpsychismSection.physicalism.step2}</span>
              <span className="text-[11px] text-warm-olive font-semibold">{t.panpsychismSection.physicalism.step2Sub}</span>
            </div>
            <div className="flex justify-center text-warm-oliveLight"><ArrowDown className="w-4 h-4" /></div>
            <div className="p-3.5 rounded-2xl bg-warm-gold/25 border border-warm-goldMuted/60 flex items-center justify-between text-warm-ink font-bold">
              <span>{t.panpsychismSection.physicalism.step3}</span>
              <span className="text-[11px] text-warm-olive">{t.panpsychismSection.physicalism.step3Sub}</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-warm-border text-xs text-warm-inkMuted space-y-2 font-sans">
            <p><strong className="text-warm-ink">{t.panpsychismSection.physicalism.strengthLabel}</strong> {t.panpsychismSection.physicalism.strength}</p>
            <p><strong className="text-warm-ink">{t.panpsychismSection.physicalism.hardProblemLabel}</strong> {t.panpsychismSection.physicalism.hardProblem}</p>
          </div>
        </div>

        {/* Panpsychism Card */}
        <div
          onClick={() => {
            setActiveModel('panpsychism');
            playChime(560);
          }}
          className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 border shadow-warm-md ${
            activeModel === 'panpsychism'
              ? 'warm-card-elevated border-warm-goldMuted ring-2 ring-warm-gold/40'
              : 'warm-card opacity-70 hover:opacity-100'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-sans font-semibold text-warm-olive tracking-wider uppercase">
              {t.panpsychismSection.panpsychism.tag}
            </span>
            <Badge status="PHILOSOPHICAL HYPOTHESIS" size="sm" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-warm-ink mb-1">{t.panpsychismSection.panpsychism.title}</h3>
          <p className="text-xs text-warm-inkMuted font-sans mb-6">{t.panpsychismSection.panpsychism.summary}</p>

          {/* Flow Stages */}
          <div className="space-y-3 font-sans text-xs">
            <div className="p-3.5 rounded-2xl bg-warm-secondary/60 border border-warm-border flex items-center justify-between text-warm-ink font-medium">
              <span>{t.panpsychismSection.panpsychism.step1}</span>
              <span className="text-[11px] text-warm-olive font-semibold">{t.panpsychismSection.panpsychism.step1Sub}</span>
            </div>
            <div className="flex justify-center text-warm-oliveLight"><ArrowDown className="w-4 h-4" /></div>
            <div className="p-3.5 rounded-2xl bg-warm-secondary/60 border border-warm-border flex items-center justify-between text-warm-ink font-medium">
              <span>{t.panpsychismSection.panpsychism.step2}</span>
              <span className="text-[11px] text-warm-olive font-semibold">{t.panpsychismSection.panpsychism.step2Sub}</span>
            </div>
            <div className="flex justify-center text-warm-oliveLight"><ArrowDown className="w-4 h-4" /></div>
            <div className="p-3.5 rounded-2xl bg-warm-gold/25 border border-warm-goldMuted/60 flex items-center justify-between text-warm-ink font-bold">
              <span>{t.panpsychismSection.panpsychism.step3}</span>
              <span className="text-[11px] text-warm-olive">{t.panpsychismSection.panpsychism.step3Sub}</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-warm-border text-xs text-warm-inkMuted space-y-2 font-sans">
            <p><strong className="text-warm-ink">{t.panpsychismSection.panpsychism.strengthLabel}</strong> {t.panpsychismSection.panpsychism.strength}</p>
            <p><strong className="text-warm-ink">{t.panpsychismSection.panpsychism.problemLabel}</strong> {t.panpsychismSection.panpsychism.problem}</p>
          </div>
        </div>
      </div>

      {/* Philosophical Neutrality Callout */}
      <div className="warm-card rounded-2xl p-5 border border-warm-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-warm-inkMuted text-center sm:text-start shadow-warm-sm">
        <div className="flex items-center gap-2.5">
          <Info className="w-4 h-4 text-warm-goldMuted shrink-0" />
          <span>{t.panpsychismSection.disclaimer}</span>
        </div>
        <span className="text-warm-oliveLight whitespace-nowrap">{t.panpsychismSection.sourceSep}</span>
      </div>
    </section>
  );
};
