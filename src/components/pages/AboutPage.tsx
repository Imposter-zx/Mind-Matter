import React, { useState } from 'react';
import { CONCEPTS } from '../../data/concepts';
import { Badge } from '../ui/Badge';
import { ExternalLink, Scale, ChevronRight, ChevronLeft } from 'lucide-react';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';

export const AboutPage: React.FC = () => {
  const [selectedConceptId, setSelectedConceptId] = useState<string>(CONCEPTS[0].id);
  const { playHover, playChime } = useAudio();
  const { t, isRTL } = useTranslation();

  const currentConcept = CONCEPTS.find((c) => c.id === selectedConceptId) || CONCEPTS[0];
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <div className="space-y-8 font-sans">
      {/* Science vs Philosophy Demarcation Banner */}
      <div className="p-6 rounded-3xl bg-warm-secondary/70 border border-warm-border space-y-4 shadow-warm-sm">
        <div className="flex items-center gap-2 text-xs font-sans font-semibold text-warm-olive uppercase tracking-wider">
          <Scale className="w-4 h-4 text-warm-goldMuted" />
          <span>{t.aboutModal.epistemologyTitle}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
          <div className="p-4 rounded-2xl bg-white/80 border border-warm-border space-y-2 shadow-warm-sm">
            <span className="text-warm-olive font-bold block">{t.aboutModal.scienceTitle}</span>
            <p className="text-warm-inkMuted leading-relaxed text-[11px]">
              {t.aboutModal.scienceText}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-warm-border space-y-2 shadow-warm-sm">
            <span className="text-warm-goldMuted font-bold block">{t.aboutModal.philosophyTitle}</span>
            <p className="text-warm-inkMuted leading-relaxed text-[11px]">
              {t.aboutModal.philosophyText}
            </p>
          </div>
        </div>
      </div>

      {/* Concept Navigator */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Concept Tabs */}
        <div className="md:col-span-4 space-y-1.5">
          <span className="text-xs font-sans font-semibold text-warm-olive uppercase tracking-wider block mb-2 px-1">
            {t.aboutModal.conceptsHeading}
          </span>
          {CONCEPTS.map((concept) => {
            const isSelected = concept.id === selectedConceptId;
            return (
              <button
                key={concept.id}
                onClick={() => {
                  setSelectedConceptId(concept.id);
                  playChime(500);
                }}
                onMouseEnter={playHover}
                className={`w-full text-start p-3.5 rounded-2xl text-xs font-sans transition-all flex items-center justify-between shadow-warm-sm ${
                  isSelected
                    ? 'bg-warm-gold text-warm-ink font-semibold shadow-warm-md ring-1 ring-warm-goldMuted/40'
                    : 'bg-warm-secondary/50 border border-warm-border text-warm-inkMuted hover:text-warm-ink hover:bg-warm-secondary'
                }`}
              >
                <span>{concept.title}</span>
                <ChevronIcon className={`w-4 h-4 ${isSelected ? 'text-warm-olive' : 'text-warm-oliveLight/50'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Detail Inspection */}
        <div className="md:col-span-8 p-6 rounded-3xl bg-white/90 border border-warm-border space-y-6 shadow-warm-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-warm-border">
            <div>
              <span className="text-[10px] font-sans font-semibold text-warm-olive tracking-wider uppercase">
                {currentConcept.category}
              </span>
              <h4 className="text-2xl font-serif font-bold text-warm-ink mt-0.5">
                {currentConcept.title}
              </h4>
              <span className="text-xs font-sans text-warm-inkMuted">{currentConcept.subtitle}</span>
            </div>
            <Badge status={currentConcept.evidenceStatus} size="sm" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-sans font-semibold text-warm-olive uppercase tracking-wider block">{t.aboutModal.definitionLabel}</span>
            <p className="text-sm text-warm-ink leading-relaxed font-sans">
              {currentConcept.definition}
            </p>
          </div>

          {/* Key Tenets */}
          <div className="space-y-2">
            <span className="text-xs font-sans font-semibold text-warm-olive uppercase tracking-wider block">{t.aboutModal.tenetsLabel}</span>
            <ul className="space-y-1.5 text-xs font-sans text-warm-inkMuted">
              {currentConcept.keyTenets.map((tenet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-warm-goldMuted font-bold">•</span>
                  <span>{tenet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arguments For & Against */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans text-xs">
            <div className="p-4 rounded-2xl bg-warm-secondary/60 border border-warm-border space-y-1.5 shadow-warm-sm">
              <strong className="text-warm-olive block font-semibold">{t.aboutModal.forLabel}</strong>
              <ul className="space-y-1 text-[11px] text-warm-inkMuted">
                {currentConcept.coreArgumentsFor.map((arg, i) => (
                  <li key={i}>+ {arg}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-warm-secondary/60 border border-warm-border space-y-1.5 shadow-warm-sm">
              <strong className="text-warm-oliveLight block font-semibold">{t.aboutModal.againstLabel}</strong>
              <ul className="space-y-1 text-[11px] text-warm-inkMuted">
                {currentConcept.coreArgumentsAgainst.map((arg, i) => (
                  <li key={i}>- {arg}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Thinkers & SEP Link */}
          <div className="pt-4 border-t border-warm-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans text-warm-inkMuted">
            <div>
              <strong className="text-warm-ink font-semibold">{t.aboutModal.thinkersLabel} </strong>
              <span>{currentConcept.keyThinkers.join(', ')}</span>
            </div>

            {currentConcept.sepUrl && (
              <a
                href={currentConcept.sepUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-warm-olive hover:text-warm-ink underline underline-offset-4 font-medium"
              >
                <span>{t.aboutModal.readSep}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
