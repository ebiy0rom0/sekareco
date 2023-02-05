import ja from "~/i18n/ja.ts";
import en from "~/i18n/en.ts";

export const useI18n = () => {
  const { navigator } = globalThis
  return {
    lang: navigator.language,
    t: navigator.language === "en" ? en : ja,
  }
}