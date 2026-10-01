import React, { useState } from 'react';
import { ACADEMIC_REFERENCES } from '../../data/references';
import { ExternalLink, Filter } from 'lucide-react';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';

export const ReferencesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const { playHover, playChime } = useAudio();
  const { t } = useTranslation();

  const categories = ['ALL', 'Panpsychism', 'Hard Problem', 'Emergence', 'AI & Mind', 'Cosmopsychism'];

  const filtered = selectedCategory === 'ALL'
    ? ACADEMIC_REFERENCES
    : ACADEMIC_REFERENCES.filter((r) => r.category === selectedCategory);

  return (
    <div className="space-y-6 font-sans">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <span className="text-xs font-sans text-warm-inkMuted flex items-center gap-1 shrink-0 font-medium">
          <Filter className="w-3.5 h-3.5 text-warm-goldMuted" />
          {t.referencesModal.filterLabel}
        </span>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          const label = t.referencesModal.categories[cat] || cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                playChime(500);
              }}
              onMouseEnter={playHover}
              className={`px-3.5 py-1 rounded-full text-xs font-sans transition-all shrink-0 shadow-warm-sm ${
                isSelected
                  ? 'bg-warm-gold text-warm-ink font-semibold ring-1 ring-warm-goldMuted/40'
                  : 'bg-warm-secondary/70 text-warm-inkMuted border border-warm-border hover:text-warm-ink hover:bg-white/60'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Bibliography Cards */}
      <div className="grid grid-cols-1 gap-4 max-h-[60vh] overflow-y-auto pr-1">
        {filtered.map((ref) => (
          <div
            key={ref.id}
            className="p-5 rounded-3xl bg-white/90 border border-warm-border space-y-3 hover:border-warm-goldMuted/60 transition-colors shadow-warm-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-[10px] font-sans font-semibold px-2.5 py-0.5 rounded-full bg-warm-secondary border border-warm-border text-warm-olive w-fit">
                {ref.type} • {ref.category}
              </span>
              <span className="text-xs font-sans text-warm-oliveLight font-medium">{ref.year}</span>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold text-warm-ink">
                {ref.title}
              </h4>
              <p className="text-xs font-sans text-warm-inkMuted mt-0.5">
                {ref.authors} — <span className="text-warm-oliveLight">{ref.source}</span>
              </p>
            </div>

            <p className="text-xs text-warm-ink leading-relaxed font-sans">
              {ref.summary}
            </p>

            <div className="pt-2 border-t border-warm-border/60 flex justify-end">
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-sans text-warm-olive hover:text-warm-ink underline underline-offset-4 font-medium"
              >
                <span>{t.referencesModal.accessSource}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
