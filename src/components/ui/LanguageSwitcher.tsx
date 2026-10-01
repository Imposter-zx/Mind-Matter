import React from 'react';
import { useTranslation } from '../../i18n';
import { Language } from '../../i18n/types';
import { Globe } from 'lucide-react';
import { useAudio } from '../../hooks/useAudio';

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useTranslation();
  const { playHover, playChime } = useAudio();

  const languages: { code: Language; label: string; name: string }[] = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'ar', label: 'AR', name: 'العربية' },
  ];

  const handleSelect = (code: Language) => {
    setLanguage(code);
    playChime(code === 'ar' ? 580 : code === 'fr' ? 520 : 480);
  };

  return (
    <div className={`inline-flex items-center gap-1 p-0.5 rounded-full border border-warm-border bg-warm-secondary/70 text-xs font-sans shadow-warm-sm ${className}`}>
      <span className="pl-2 pr-1 text-warm-oliveLight flex items-center gap-1">
        <Globe className="w-3.5 h-3.5 text-warm-goldMuted" />
      </span>

      <div className="flex items-center gap-0.5">
        {languages.map((l) => {
          const isActive = language === l.code;
          return (
            <button
              key={l.code}
              onClick={() => handleSelect(l.code)}
              onMouseEnter={playHover}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-warm-gold text-warm-ink font-semibold shadow-warm-sm ring-1 ring-warm-goldMuted/40'
                  : 'text-warm-inkMuted hover:text-warm-ink hover:bg-white/50'
              }`}
              title={l.name}
              aria-label={`Switch language to ${l.name}`}
            >
              {l.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
