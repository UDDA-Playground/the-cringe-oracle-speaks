
import React, { useState, useEffect } from 'react';
import LanguageContext from './LanguageContext';
import { Language } from './languageTypes';
import { translations } from './translations';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get from local storage or use browser language
    const savedLang = localStorage.getItem('udda-language');
    if (savedLang === 'en' || savedLang === 'sv') return savedLang as Language;
    
    // Fallback to browser language
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'sv' ? 'sv' : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('udda-language', lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
