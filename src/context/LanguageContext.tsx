
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
  },
  // Youth mentor page
  'youth.title': {
    en: 'AI Youth Mentor',
    sv: 'AI-ungdomsmentor'
  },
  'youth.subtitle': {
    en: 'Supportive guidance for teens & young adults',
    sv: 'Stödjande vägledning för tonåringar och unga vuxna'
  },
  // Self discovery page
  'self-discovery.title': {
    en: 'Self Discovery Journey',
    sv: 'Självupptäcktsresa'
  },
  // Couples therapy page
  'couples.title': {
    en: 'Couples Therapy',
    sv: 'Parterapi'
  },
  // Ex-couple page
  'ex-couple.title': {
    en: 'Ex-Couple Sheriff',
    sv: 'Ex-par Medling'
  },
  // Party conversation page
  'party.title': {
    en: 'Party Conversation',
    sv: 'Festkonversation'
  },
  // Personality test page
  'personality.title': {
    en: 'Personality Test',
    sv: 'Personlighetstest'
  },
  'personality.subtitle': {
    en: 'Discover how weird you really are',
    sv: 'Upptäck hur konstig du verkligen är'
  },
  'personality.try': {
    en: 'Try the Test',
    sv: 'Prova testet'
  },
  // Common UI elements
  'button.start': {
    en: 'Start Now',
    sv: 'Börja nu'
  },
  'button.learn': {
    en: 'Learn More',
    sv: 'Läs mer'
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
