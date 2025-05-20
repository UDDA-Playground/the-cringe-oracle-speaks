
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
  
  // Determine button color and icon based on state
  let buttonColor = "bg-blue-500 hover:bg-blue-600";
  let buttonIcon = <MicIcon className="text-white" />;
  let statusText = t('conversation.click_to_start');
  
  if (status === 'connected') {
    if (isPaused) {
      buttonColor = "bg-yellow-500 hover:bg-yellow-600";
      buttonIcon = <MicIcon className="text-white" />;
      statusText = t('conversation.paused');
    } else if (isSpeaking) {
      buttonColor = "bg-green-500 hover:bg-green-600 animate-pulse";
      buttonIcon = <PauseIcon className="text-white" />;
      statusText = t('conversation.talking');
    } else if (isListening) {
      buttonColor = "bg-green-500 hover:bg-green-600";
      buttonIcon = <HeadphonesIcon className="text-white" />;
      statusText = t('conversation.listening');
    }
  } else if (status === 'connecting') {
    buttonColor = "bg-blue-500 hover:bg-blue-600 animate-pulse";
    buttonIcon = <RefreshCwIcon className="text-white animate-spin" />;
    statusText = t('conversation.connecting');
  } else if (status === 'disconnecting') {
    buttonColor = "bg-red-500 hover:bg-red-600";
    buttonIcon = <StopCircleIcon className="text-white" />;
    statusText = t('conversation.ending');
  }

  return (
    <div className="elevenlabs-controls flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <div className="elevenlabs-mic-container relative">
          <button 
            className={`elevenlabs-mic-button transition-colors duration-300 ${buttonColor}`}
            onClick={onStart}
            aria-label={isSpeaking ? t('conversation.pause_button') : t('conversation.start_button')}
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
          placeholder={t('conversation.email_placeholder')}
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="w-full text-sm"
        />
      </div>
    </div>
  );
};

export default ConversationControls;
