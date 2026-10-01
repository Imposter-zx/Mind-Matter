import React from 'react';
import { Compass, BookOpen } from 'lucide-react';
import { PerformanceSelector } from '../ui/PerformanceSelector';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';

interface FooterProps {
  onOpenAbout: () => void;
  onOpenReferences: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAbout, onOpenReferences }) => {
  const { playHover, playChime } = useAudio();
  const { t } = useTranslation();

  return (
    <footer className="relative border-t border-warm-border bg-[#EFE9D7]/80 py-16 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full border border-warm-goldMuted bg-warm-secondary flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-olive" />
              </div>
              <span className="font-serif font-bold text-xl tracking-wider text-warm-ink">
                MIND<span className="text-warm-goldMuted">//</span>MATTER
              </span>
            </div>
            <p className="font-serif text-sm text-warm-ink italic max-w-md leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="font-sans text-xs text-warm-inkMuted leading-relaxed max-w-lg">
              {t.footer.mission}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-sans text-xs">
            <span className="text-warm-ink font-bold uppercase tracking-wider block">{t.footer.modulesHeading}</span>
            <ul className="space-y-2 text-warm-inkMuted">
              <li><a href="#question" className="hover:text-warm-ink transition-colors">{t.nav.question}</a></li>
              <li><a href="#panpsychism" className="hover:text-warm-ink transition-colors">{t.nav.panpsychism}</a></li>
              <li><a href="#scale" className="hover:text-warm-ink transition-colors">{t.nav.scale}</a></li>
              <li><a href="#combination" className="hover:text-warm-ink transition-colors">{t.nav.combination}</a></li>
              <li><a href="#ailab" className="hover:text-warm-ink transition-colors">{t.nav.ai}</a></li>
              <li><a href="#experiments" className="hover:text-warm-ink transition-colors">{t.nav.experiments}</a></li>
              <li><a href="#quiz" className="hover:text-warm-ink transition-colors">{t.nav.profile}</a></li>
            </ul>
          </div>

          {/* Academic Sources */}
          <div className="md:col-span-3 space-y-3 font-sans text-xs">
            <span className="text-warm-ink font-bold uppercase tracking-wider block">{t.footer.researchHeading}</span>
            <div className="space-y-2.5">
              <button
                onClick={() => {
                  playChime(600);
                  onOpenAbout();
                }}
                onMouseEnter={playHover}
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-warm-card border border-warm-border text-warm-ink hover:bg-white transition-all text-start shadow-warm-sm"
              >
                <span className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-warm-olive" />
                  {t.footer.glossaryBtn}
                </span>
                <span>→</span>
              </button>

              <button
                onClick={() => {
                  playChime(700);
                  onOpenReferences();
                }}
                onMouseEnter={playHover}
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-warm-card border border-warm-border text-warm-ink hover:bg-white transition-all text-start shadow-warm-sm"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-warm-goldMuted" />
                  {t.footer.biblioBtn}
                </span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Intellectual Neutrality Manifesto Box */}
        <div className="p-6 rounded-3xl bg-warm-card border border-warm-border font-sans text-xs text-warm-inkMuted space-y-2 leading-relaxed shadow-warm-sm">
          <strong className="text-warm-ink block uppercase tracking-wider font-semibold">
            {t.footer.neutralityTitle}
          </strong>
          <p>
            {t.footer.neutralityText}
          </p>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-warm-border font-sans text-xs text-warm-oliveLight">
          <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
          <div className="flex flex-wrap items-center gap-4">
            <PerformanceSelector />
            <span>{t.footer.techStack}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
