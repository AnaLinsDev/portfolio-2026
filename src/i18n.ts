import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation files
import en from "./i18n/en.json";
import pt from "./i18n/pt.json";

// Connect i18next with React
i18n.use(initReactI18next).init({
  resources: {
    // Available languages
    en: { translation: en },
    pt: { translation: pt },
  },

  // Default language
  lng: "pt",

  // Fallback if translation is missing
  fallbackLng: "en",

  interpolation: {
    // React already escapes values (prevents XSS)
    escapeValue: false,
  },
});

export default i18n;