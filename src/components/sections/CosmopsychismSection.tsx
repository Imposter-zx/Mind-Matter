import React from 'react';
import { Badge } from '../ui/Badge';
import { Globe2, Orbit, Layers } from 'lucide-react';
import { useTranslation } from '../../i18n';

export const CosmopsychismSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Cinematic Editorial Container */}
      <div className="warm-card-elevated border border-warm-border rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-warm-lg">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-warm-secondary border border-warm-border text-warm-olive font-sans text-xs font-medium tracking-wide">
            <Globe2 className="w-3.5 h-3.5 text-warm-goldMuted" />
            <span>{t.cosmopsychismSection.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-warm-ink tracking-wide">
            {t.cosmopsychismSection.title}
          </h2>

          <div className="space-y-4 text-base sm:text-xl font-serif italic text-warm-inkMuted leading-relaxed">
            <p>{t.cosmopsychismSection.question1}</p>
            <p className="text-2xl sm:text-3xl text-warm-ink font-semibold not-italic">
              {t.cosmopsychismSection.question2}
            </p>
          </div>

          {/* Cosmopsychism Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start pt-6">
            <div className="p-6 rounded-3xl bg-warm-secondary/50 border border-warm-border space-y-3 shadow-warm-sm">
              <span className="text-xs font-sans font-semibold text-warm-olive uppercase tracking-wider flex items-center gap-1.5">
                <Orbit className="w-3.5 h-3.5 text-warm-goldMuted" />
                {t.cosmopsychismSection.card1Tag}
              </span>
              <h3 className="text-lg font-serif font-bold text-warm-ink">{t.cosmopsychismSection.card1Title}</h3>
              <p className="text-xs sm:text-sm text-warm-inkMuted leading-relaxed font-sans">
                {t.cosmopsychismSection.card1Desc}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-warm-secondary/50 border border-warm-border space-y-3 shadow-warm-sm">
              <span className="text-xs font-sans font-semibold text-warm-olive uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-warm-goldMuted" />
                {t.cosmopsychismSection.card2Tag}
              </span>
              <h3 className="text-lg font-serif font-bold text-warm-ink">{t.cosmopsychismSection.card2Title}</h3>
              <p className="text-xs sm:text-sm text-warm-inkMuted leading-relaxed font-sans">
                {t.cosmopsychismSection.card2Desc}
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Badge status="SPECULATION" />
            <span className="text-xs font-sans text-warm-inkMuted">
              {t.cosmopsychismSection.disclaimer}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
