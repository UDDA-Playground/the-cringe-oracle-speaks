
import React from 'react';
import { MicIcon, PauseIcon, HeadphonesIcon, StopCircleIcon, RefreshCwIcon } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { Language } from './types';
import SoundWaves from './SoundWaves';
import { Input } from "@/components/ui/input";
import { useLanguage } from '@/context/LanguageContext';

interface ConversationControlsProps {
  status: string;
  isSpeaking: boolean;
  isListening: boolean;
  isPaused: boolean;
  language: Language;
  onStart: () => void;
  onToggleLanguage: (lang: Language) => void;
  accentColor?: string;
  email: string;
  onEmailChange: (email: string) => void;
}

const ConversationControls: React.FC<ConversationControlsProps> = ({
  status,
  isSpeaking,
  isListening,
  isPaused,
  language,
  onStart,
  onToggleLanguage,
  accentColor = "blue",
  email,
  onEmailChange
}) => {
  const { t } = useLanguage();
  
  // Define translations directly since they might be missing in the context
  const translations = {
    'conversation.click_to_start': {
      en: 'Click to start',
      sv: 'Klicka för att starta'
    },
    'conversation.paused': {
      en: 'Paused',
      sv: 'Pausad'
    },
    'conversation.talking': {
      en: 'AI is talking',
      sv: 'AI pratar'
    },
    'conversation.listening': {
      en: 'Listening',
      sv: 'Lyssnar'
    },
    'conversation.connecting': {
      en: 'Connecting',
      sv: 'Ansluter'
    },
    'conversation.ending': {
      en: 'Ending',
      sv: 'Avslutar'
    },
    'conversation.pause_button': {
      en: 'Pause conversation',
      sv: 'Pausa konversation'
    },
    'conversation.start_button': {
      en: 'Start conversation',
      sv: 'Starta konversation'
    },
    'conversation.email_placeholder': {
      en: 'Your email (optional)',
      sv: 'Din e-post (valfritt)'
    }
  };
  
  // Helper function to get translations with fallback
  const getTranslation = (key: string): string => {
    // Try to get from the t function first
    const fromContext = t(key);
    if (fromContext !== key) return fromContext;
    
    // Fall back to our hardcoded translations
    const translationKey = key as keyof typeof translations;
    return translations[translationKey]?.[language] || key;
  };
  
  // Determine button color and icon based on state
  let buttonColor = "bg-blue-500 hover:bg-blue-600";
  let buttonIcon = <MicIcon className="text-white" />;
  let statusText = getTranslation('conversation.click_to_start');
  
  // Use accent color if provided
  if (accentColor && accentColor !== "blue") {
    buttonColor = `bg-${accentColor}-500 hover:bg-${accentColor}-600`;
  }
  
  if (status === 'connected') {
    if (isPaused) {
      buttonColor = "bg-yellow-500 hover:bg-yellow-600";
      buttonIcon = <MicIcon className="text-white" />;
      statusText = getTranslation('conversation.paused');
    } else if (isSpeaking) {
      buttonColor = `bg-${accentColor}-500 hover:bg-${accentColor}-600 animate-pulse`;
      buttonIcon = <PauseIcon className="text-white" />;
      statusText = getTranslation('conversation.talking');
    } else if (isListening) {
      buttonColor = `bg-${accentColor}-500 hover:bg-${accentColor}-600`;
      buttonIcon = <HeadphonesIcon className="text-white" />;
      statusText = getTranslation('conversation.listening');
    }
  } else if (status === 'connecting') {
    buttonColor = `bg-${accentColor}-500 hover:bg-${accentColor}-600 animate-pulse`;
    buttonIcon = <RefreshCwIcon className="text-white animate-spin" />;
    statusText = getTranslation('conversation.connecting');
  } else if (status === 'disconnecting') {
    buttonColor = "bg-red-500 hover:bg-red-600";
    buttonIcon = <StopCircleIcon className="text-white" />;
    statusText = getTranslation('conversation.ending');
  }

  return (
    <div className="elevenlabs-controls flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <div className="elevenlabs-mic-container relative">
          <button 
            className={`elevenlabs-mic-button transition-colors duration-300 ${buttonColor}`}
            onClick={onStart}
            aria-label={isSpeaking ? getTranslation('conversation.pause_button') : getTranslation('conversation.start_button')}
          >
            {buttonIcon}
          </button>
          
          {/* Show sound waves only when AI is speaking */}
          {isSpeaking && <SoundWaves isActive={true} color={accentColor} />}
          
          {/* Show mini sound waves when user is speaking */}
          {isListening && !isSpeaking && 
            <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 flex items-end justify-center gap-1 h-3">
              <div className={`w-0.5 h-1 bg-${accentColor}-500/60 rounded-full animate-soundwave1`}></div>
              <div className={`w-0.5 h-2 bg-${accentColor}-500/60 rounded-full animate-soundwave3`}></div>
              <div className={`w-0.5 h-1 bg-${accentColor}-500/60 rounded-full animate-soundwave2`}></div>
            </div>
          }
        </div>
        
        <div className="elevenlabs-status font-medium">
          {statusText}
        </div>
        
        <LanguageToggle 
          language={language} 
          onToggle={onToggleLanguage} 
        />
      </div>
      
      <div className="w-full">
        <Input
          type="email"
          placeholder={getTranslation('conversation.email_placeholder')}
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="w-full text-sm"
        />
      </div>
    </div>
  );
};

export default ConversationControls;
