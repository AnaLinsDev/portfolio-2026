// src/hooks/useT.ts
import { useTranslation } from "react-i18next";

export function useT() {
  const { t, i18n } = useTranslation();

  const setLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return {
    t,
    lang: i18n.language,
    setLang,
  };
}
