"use client"
import React, { createContext, useContext, useEffect, useState } from "react";

type Language = 'uz' | 'ru';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('uz');

  useEffect(() => {
    const existingLang = document.cookie
      .split("; ")
      .find((row) => row.startsWith("language="))
      ?.split("=")[1] as Language;

    if (existingLang === 'uz' || existingLang === 'ru') {
      setLangState(existingLang);
    }
  }, []);

  useEffect(() => {
    document.cookie = `language=${lang}; path=/; max-age=31536000`;
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
