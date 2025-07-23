export function setLanguageCookie(lang: 'uz' | 'ru') {
  document.cookie = `language=${lang}; path=/; max-age=31536000`; // 1 yil saqlanadi
}