import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import deTranslation from "./locales/de/translation.json";
import enTranslation from "./locales/en/translation.json";
import uaTranslation from "./locales/ua/translation.json";

const resources = {
  de: {
    translation: deTranslation,
  },
  en: {
    translation: enTranslation,
  },
  ua: {
    translation: uaTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "de",
    debug: false,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
