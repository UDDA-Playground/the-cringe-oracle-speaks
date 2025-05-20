
import React from 'react';
import { GlobeIcon, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Language } from './types';
import { useLanguage } from '@/context/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LanguageToggleProps {
  language: Language;
  onToggle: (lang: Language) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  const { t } = useLanguage();
  
  const languageOptions: {code: Language, label: string}[] = [
    { code: 'en', label: 'English' },
    { code: 'sv', label: 'Svenska' }
  ];

  const handleLanguageToggle = (lang: Language) => {
    console.log(`Toggling language to: ${lang}`);
    onToggle(lang);
  };

  return (
    <div className="elevenlabs-language">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1"
          >
            <GlobeIcon size={16} className="mr-1" />
            {language === 'en' ? 'English' : 'Svenska'}
            <ChevronDown size={14} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white">
          {languageOptions.map((option) => (
            <DropdownMenuItem 
              key={option.code}
              onClick={() => handleLanguageToggle(option.code)}
              className={language === option.code ? "font-bold" : ""}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageToggle;
