
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
      <div className="elevenlabs-mic-container">
        <button 
          className={`elevenlabs-mic-button ${isSpeaking ? 'is-speaking' : ''}`}
          onClick={onStart}
          aria-label={isSpeaking ? "Pause voice conversation" : "Start voice conversation"}
        >
          {isSpeaking ? <PauseIcon /> : <MicIcon />}
        </button>
        
        {isSpeaking && <SoundWaves />}
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
