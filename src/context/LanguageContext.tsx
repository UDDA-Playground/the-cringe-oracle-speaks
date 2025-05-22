
// This file re-exports everything from the refactored files
// to maintain backward compatibility

import LanguageContext, { useLanguage } from './LanguageContext';
import LanguageProvider from './LanguageProvider';
import { Language } from './languageTypes';

export { LanguageProvider, useLanguage };
export type { Language };

export default LanguageContext;
