
import React from 'react';
import { GlobeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Language } from './types';

interface LanguageToggleProps {
  language: Language;
  onToggle: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  return (
    <div className="elevenlabs-language">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={onToggle}
        className="flex items-center gap-2"
      >
        <GlobeIcon size={16} />
        {language === 'en' ? 'English' : 'Svenska'}
      </Button>
    </div>
  );
};

export default LanguageToggle;
