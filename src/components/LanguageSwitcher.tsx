
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { GlobeIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sv' : 'en');
    
    // Force a re-render of the current page to apply translations
    window.location.reload();
  };
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage}
      className={`flex items-center gap-2 ${className}`}
      aria-label="Switch language"
    >
      <GlobeIcon size={16} />
      {t('language')}
    </Button>
  );
};

export default LanguageSwitcher;
