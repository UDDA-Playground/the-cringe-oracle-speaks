
import React from 'react';
import { MicIcon, PauseIcon } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { Language } from './types';
import SoundWaves from './SoundWaves';

interface ConversationControlsProps {
  status: string;
  isSpeaking: boolean;
  language: Language;
  onStart: () => void;
  onToggleLanguage: () => void;
}

const ConversationControls: React.FC<ConversationControlsProps> = ({
  status,
  isSpeaking,
  language,
  onStart,
  onToggleLanguage
}) => {
  return (
    <div className="elevenlabs-controls">
      <div className="elevenlabs-mic-container relative">
        <button 
          className={`elevenlabs-mic-button transition-colors duration-300 ${isSpeaking ? 'bg-red-500 hover:bg-red-600 animate-pulse' : 'bg-blue-500 hover:bg-blue-600'}`}
          onClick={onStart}
          aria-label={isSpeaking ? "Pause voice conversation" : "Start voice conversation"}
        >
          {isSpeaking ? <PauseIcon className="text-white" /> : <MicIcon className="text-white" />}
        </button>
        
        <SoundWaves isActive={isSpeaking} />
      </div>
      
      <div className="elevenlabs-status">
        {status === 'connected' ? 
          (isSpeaking ? 'Listening...' : 'Ready') : 
          'Click to start conversation'}
      </div>
      
      <LanguageToggle 
        language={language} 
        onToggle={onToggleLanguage} 
      />
    </div>
  );
};

export default ConversationControls;
