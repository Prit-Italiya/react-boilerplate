import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './assets/locales/en.json';
import gjTranslation from './assets/locales/in-gj.json';
import hindiTranslation from './assets/locales/in-hindi.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    hi: { translation: gjTranslation },
    gj: { translation: hindiTranslation },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
