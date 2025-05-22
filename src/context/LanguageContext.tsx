
// This file re-exports everything from the refactored files
// to maintain backward compatibility

import LanguageContext, { useLanguage } from './LanguageContext';
import LanguageProvider from './LanguageProvider';
import { Language } from './languageTypes';

export { useLanguage, LanguageProvider };
export type { Language };

export default LanguageContext;
