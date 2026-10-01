import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Compass } from 'lucide-react';
import { PerformanceSelector } from '../ui/PerformanceSelector';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';

interface NavbarProps {
  onOpenAbout: () => void;
  onOpenReferences: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAbout,
  onOpenReferences,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { playHover, playChime } = useAudio();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'question', label: t.nav.question },
    { id: 'panpsychism', label: t.nav.panpsychism },
    { id: 'scale', label: t.nav.scale },
    { id: 'combination', label: t.nav.combination },
    { id: 'ailab', label: t.nav.ai },
    { id: 'experiments', label: t.nav.experiments },
    { id: 'cosmic', label: t.nav.cosmos },
    { id: 'quiz', label: t.nav.profile }
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    playChime(500);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-[#FAF6EC]/95 backdrop-blur-md border-b border-warm-border py-2.5 shadow-warm-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          onMouseEnter={playHover}
          className="flex items-center gap-2 group shrink-0"
        >
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-warm-goldMuted bg-warm-secondary flex items-center justify-center">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-warm-olive" />
          </div>
          <span className="font-serif font-bold text-base sm:text-lg tracking-wider text-warm-ink group-hover:text-warm-olive transition-colors whitespace-nowrap">
            MIND<span className="text-warm-goldMuted">//</span>MATTER
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1 shrink min-w-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                onMouseEnter={playHover}
                className={`px-2.5 py-1 2xl:px-3 2xl:py-1.5 rounded-full text-[11px] 2xl:text-xs font-sans font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-warm-ink bg-warm-gold/30 font-semibold shadow-warm-sm'
                    : 'text-warm-inkMuted hover:text-warm-ink hover:bg-warm-secondary/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <LanguageSwitcher />

          <button
            onClick={() => {
              playChime(600);
              onOpenAbout();
            }}
            onMouseEnter={playHover}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-sans text-warm-ink bg-warm-secondary/80 hover:bg-warm-sand border border-warm-border transition-all shadow-warm-sm whitespace-nowrap"
            title={t.aboutModal.title}
          >
            <Compass className="w-3.5 h-3.5 text-warm-olive" />
            <span className="hidden xl:inline">{t.common.about}</span>
          </button>

          <button
            onClick={() => {
              playChime(700);
              onOpenReferences();
            }}
            onMouseEnter={playHover}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-sans text-warm-ink bg-warm-secondary/80 hover:bg-warm-sand border border-warm-border transition-all shadow-warm-sm whitespace-nowrap"
            title={t.referencesModal.title}
          >
            <BookOpen className="w-3.5 h-3.5 text-warm-goldMuted" />
            <span className="hidden xl:inline">{t.common.sources}</span>
          </button>
        </div>

        {/* Mobile & Tablet Controls */}
        <div className="flex items-center gap-2 xl:hidden shrink-0">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 rounded-xl text-warm-olive bg-warm-secondary border border-warm-border"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF6EC] border-b border-warm-border px-6 py-6 mt-3 space-y-4 shadow-warm-md">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-start px-3 py-2 rounded-xl text-xs font-sans font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-warm-ink bg-warm-gold/30 font-semibold'
                    : 'text-warm-inkMuted hover:bg-warm-secondary'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-warm-border flex flex-col gap-2.5">
            <div className="flex justify-between items-center py-1">
              <span className="text-xs font-sans text-warm-inkMuted">{t.common.gpuTier}:</span>
              <PerformanceSelector />
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAbout();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-warm-secondary border border-warm-border text-xs font-sans font-medium text-warm-ink"
            >
              <Compass className="w-4 h-4 text-warm-olive" />
              <span>{t.nav.glossary}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReferences();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-warm-secondary border border-warm-border text-xs font-sans font-medium text-warm-ink"
            >
              <BookOpen className="w-4 h-4 text-warm-goldMuted" />
              <span>{t.nav.academicSources}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
