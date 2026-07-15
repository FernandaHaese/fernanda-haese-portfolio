import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import commonEn from "@/locales/en/common.json";
import homeEn from "@/locales/en/home.json";
import aboutEn from "@/locales/en/about.json";
import portfolioEn from "@/locales/en/portfolio.json";
import projectsEn from "@/locales/en/projects.json";
import contactEn from "@/locales/en/contact.json";

import commonPt from "@/locales/pt/common.json";
import homePt from "@/locales/pt/home.json";
import aboutPt from "@/locales/pt/about.json";
import portfolioPt from "@/locales/pt/portfolio.json";
import projectsPt from "@/locales/pt/projects.json";
import contactPt from "@/locales/pt/contact.json";

export const defaultNS = "common";
export const resources = {
  en: {
    common: commonEn,
    home: homeEn,
    about: aboutEn,
    portfolio: portfolioEn,
    projects: projectsEn,
    contact: contactEn,
  },
  pt: {
    common: commonPt,
    home: homePt,
    about: aboutPt,
    portfolio: portfolioPt,
    projects: projectsPt,
    contact: contactPt,
  },
} as const;

if (!i18n.isInitialized) {
  const chain = typeof window !== "undefined" ? i18n.use(LanguageDetector) : i18n;

  chain.use(initReactI18next).init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "pt"],
    load: "languageOnly",
    defaultNS,
    ns: ["common", "home", "about", "portfolio", "projects", "contact"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    react: { useSuspense: false },
  });
}

if (typeof window !== "undefined") {
  const applyLang = (lng: string) => {
    const short = lng.split("-")[0];
    document.documentElement.lang = short === "pt" ? "pt-BR" : "en";
  };
  applyLang(i18n.language || "en");
  i18n.on("languageChanged", applyLang);
}

export default i18n;
