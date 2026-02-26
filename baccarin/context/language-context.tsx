"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Record<any, any>;
  setTranslations: (translations: Record<any, any>) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialT,
}: {
  children: React.ReactNode;
  initialT?: Record<string, unknown>;
}) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("portfolio-lang") as Language;
      if (savedLang && (savedLang === "pt" || savedLang === "en")) {
        return savedLang;
      }
    }
    return "pt";
  });

  const [overriddenTranslations, setOverriddenTranslations] = useState<Record<string, unknown> | null>(null);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-lang", lang);
    }
  };

  const currentTranslations = overriddenTranslations || initialT || {};
  const t = (currentTranslations[language] as Record<string, unknown>) || {};

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t,
        setTranslations: setOverriddenTranslations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
