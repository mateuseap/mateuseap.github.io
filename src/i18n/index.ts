import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import ptBR from './locales/pt-BR.json';
import es from './locales/es.json';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'pt-BR', label: 'Portugues', short: 'PT' },
  { code: 'es', label: 'Espanol', short: 'ES' },
] as const;

export const DEFAULT_LANGUAGE = 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      'pt-BR': { translation: ptBR },
      es: { translation: es },
    },
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: ['en', 'pt-BR', 'es'],
    load: 'currentOnly',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'language',
      caches: ['localStorage'],
    },
  });

export default i18n;
