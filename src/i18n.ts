import en from 'locales/en';
import i18next, { initReactI18next } from 'react-i18next';
// import intervalPlural from 'i18next-intervalplural-postprocessor';
import ja from 'locales/ja';
// import { getUserLocale } from 'utilities/locale';

const getUserLocale = () => {
  return 'ja';
};

(i18next as any).use(initReactI18next).init({
  lng: getUserLocale(),
  // ns: 'keihi',
  // defaultNS: 'keihi',
  resources: {
    en: {
      keihi: en
    },
    ja: {
      keihi: ja
    }
  },
  fallbackLng: 'ja'
});

export default i18next;
