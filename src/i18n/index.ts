import { en } from './en';
import { fr } from './fr';
import { ar } from './ar';
import { Language, TranslationSchema } from './types';

export const dictionaries: Record<Language, TranslationSchema> = {
  en,
  fr,
  ar
};

export * from './types';
export * from './LanguageContext';
export * from './useTranslation';
