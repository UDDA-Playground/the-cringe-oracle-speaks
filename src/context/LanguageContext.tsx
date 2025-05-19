
import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = 'en' | 'sv';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  'nav.home': {
    en: 'Home',
    sv: 'Hem'
  },
  'nav.about': {
    en: 'About',
    sv: 'Om'
  },
  'nav.services': {
    en: 'Services',
    sv: 'Tjänster'
  },
  'nav.contact': {
    en: 'Contact',
    sv: 'Kontakt'
  },
  'language': {
    en: 'English',
    sv: 'Svenska'
  }
  // Add more translations as needed
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get from local storage or use browser language
    const savedLang = localStorage.getItem('udda-language');
    if (savedLang === 'en' || savedLang === 'sv') return savedLang;
    
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
