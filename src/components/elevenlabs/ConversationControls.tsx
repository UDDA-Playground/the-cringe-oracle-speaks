
import React from 'react';
import { MicIcon, PauseIcon, PlayIcon } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { Language } from './types';

interface ConversationControlsProps {
  status: string;
  isSpeaking: boolean;
  isPaused: boolean;
  language: Language;
  onStart: () => void;
  onTogglePause: () => void;
  onToggleLanguage: () => void;
}

const ConversationControls: React.FC<ConversationControlsProps> = ({
  status,
  isSpeaking,
  isPaused,
  language,
  onStart,
  onTogglePause,
  onToggleLanguage
}) => {
  return (
    <div className="elevenlabs-controls">
      <div className="elevenlabs-buttons">
        <button 
          className="elevenlabs-mic-button"
          onClick={onStart}
          aria-label="Start voice conversation"
          disabled={status === 'connected' && !isPaused}
        >
          <MicIcon />
        </button>
        
        {status === 'connected' && (
          <button 
            className="elevenlabs-mic-button"
            onClick={onTogglePause}
            aria-label={isPaused ? "Resume conversation" : "Pause conversation"}
          >
            {isPaused ? <PlayIcon /> : <PauseIcon />}
          </button>
        )}
      </div>
      
      <div className="elevenlabs-status">
        {status === 'connected' ? (
          isPaused ? 'Paused' : (isSpeaking ? 'Listening...' : 'Ready')
        ) : 'Click to start conversation'}
      </div>
      
      <LanguageToggle 
        language={language} 
        onToggle={onToggleLanguage} 
      />
    </div>
  );
};

export default ConversationControls;
