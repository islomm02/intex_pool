import { useEffect, useState } from "react";

export function useLanguage(defaultLang: 'uz' | 'ru' = 'uz') {
  const [lang, setLang] = useState<'uz' | 'ru'>(defaultLang);

  // Fayldan tilni olish
  useEffect(() => {
    const existingLang = document.cookie
      .split("; ")
      .find((row) => row.startsWith("language="))
      ?.split("=")[1] as 'uz' | 'ru' | undefined;

    if (existingLang === 'uz' || existingLang === 'ru') {
      setLang(existingLang);
    }
  }, []);

  useEffect(() => {
    document.cookie = `language=${lang}; path=/; max-age=31536000`; 
  }, [lang]);

  return [lang, setLang] as const;
}
