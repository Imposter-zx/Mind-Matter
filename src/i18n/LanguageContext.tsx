import React, { createContext, useState, useEffect, useMemo } from 'react';
import { Language, TranslationSchema } from './types';
import { en } from './en';
import { fr } from './fr';
import { ar } from './ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: TranslationSchema;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  isRTL: false,
  t: en
});

const dictionaries: Record<Language, TranslationSchema> = {
  en,
  fr,
  ar
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('mindmatter-language') as Language | null;
    if (saved && ['en', 'fr', 'ar'].includes(saved)) {
      return saved;
    }

    // Auto-detect from browser locale
    const browserLang = (navigator.language || '').toLowerCase();
    if (browserLang.startsWith('ar')) return 'ar';
    if (browserLang.startsWith('fr')) return 'fr';
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('mindmatter-language', lang);
  };

  useEffect(() => {
    // Update HTML dir and lang tags
    const isRtl = language === 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

    if (isRtl) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [language]);

  const isRTL = language === 'ar';
  const t = useMemo(() => dictionaries[language] || en, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    isRTL,
    t
  }), [language, isRTL, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
