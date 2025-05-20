
import React from 'react';
import { MicIcon, PauseIcon, HeadphonesIcon, StopCircleIcon } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { Language } from './types';
import SoundWaves from './SoundWaves';
import { Input } from "@/components/ui/input";

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
  // Determine button color and icon based on state
  let buttonColor = "bg-blue-500 hover:bg-blue-600";
  let buttonIcon = <MicIcon className="text-white" />;
  let statusText = "Click to start conversation";
  
  if (status === 'connected') {
    if (isPaused) {
      buttonColor = "bg-yellow-500 hover:bg-yellow-600";
      buttonIcon = <MicIcon className="text-white" />;
      statusText = "Paused";
    } else if (isSpeaking) {
      buttonColor = "bg-green-500 hover:bg-green-600 animate-pulse";
      buttonIcon = <PauseIcon className="text-white" />;
      statusText = "Talking";
    } else if (isListening) {
      buttonColor = "bg-green-500 hover:bg-green-600";
      buttonIcon = <HeadphonesIcon className="text-white" />;
      statusText = "Listening to you";
    }
  } else if (status === 'disconnecting') {
    buttonColor = "bg-red-500 hover:bg-red-600";
    buttonIcon = <StopCircleIcon className="text-white" />;
    statusText = "Ending conversation";
  }

  return (
    <div className="elevenlabs-controls flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <div className="elevenlabs-mic-container relative">
          <button 
            className={`elevenlabs-mic-button transition-colors duration-300 ${buttonColor}`}
            onClick={onStart}
            aria-label={isSpeaking ? "Pause voice conversation" : "Start voice conversation"}
          >
            {buttonIcon}
          </button>
          
          {/* Show sound waves only when AI is speaking */}
          {isSpeaking && <SoundWaves isActive={true} color={accentColor} />}
          
          {/* Show mini sound waves when user is speaking */}
          {isListening && !isSpeaking && 
            <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 flex items-end justify-center gap-1 h-3">
              <div className={`w-0.5 h-1 bg-${accentColor}/60 rounded-full animate-soundwave1`}></div>
              <div className={`w-0.5 h-2 bg-${accentColor}/60 rounded-full animate-soundwave3`}></div>
              <div className={`w-0.5 h-1 bg-${accentColor}/60 rounded-full animate-soundwave2`}></div>
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
          placeholder="Add your email if you want a summary sent to you after your conversation is finished"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="w-full text-sm"
        />
      </div>
    </div>
  );
};

export default ConversationControls;
