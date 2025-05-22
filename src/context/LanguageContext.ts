
import { createContext, useContext } from 'react';
import { LanguageContextType } from './languageTypes';

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key
});

export const useLanguage = () => useContext(LanguageContext);

// Re-export LanguageProvider from LanguageProvider.tsx
export { LanguageProvider } from './LanguageProvider';

export default LanguageContext;
