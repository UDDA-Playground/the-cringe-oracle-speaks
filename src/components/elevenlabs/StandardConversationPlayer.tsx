
import React, { useState } from 'react';
import { Mic, MicOff, Play, Pause, Trash2, Send, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/context/LanguageContext';
import { useElevenLabsConnection } from './useElevenLabsConnection';
import SoundWavesNative from './SoundWavesNative';

interface StandardConversationPlayerProps {
  agentId: string;
  accentColor?: string;
  className?: string;
}

const StandardConversationPlayer: React.FC<StandardConversationPlayerProps> = ({
  agentId,
  accentColor = 'blue',
  className = ''
}) => {
  const { language } = useLanguage();
  const [textInput, setTextInput] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const {
    conversation,
    isInitialized,
    startConversation,
    endConversation,
    resetConversation
  } = useElevenLabsConnection({ agentId });
  
  const isConnected = conversation.status === 'connected';
  const isConnecting = conversation.status === 'connecting';
  const isSpeaking = conversation.isSpeaking;
  
  // Handle text input submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInput.trim() && isConnected) {
      // Send text message to ElevenLabs
      textInput.trim();
      setTextInput('');
    }
  };
  
  // Handle mute toggle
  const handleMuteToggle = async () => {
    if (isConnected) {
      try {
        // Mute/unmute the microphone
        setIsMuted(!isMuted);
        // Note: Actual mute implementation would need ElevenLabs API support
      } catch (error) {
        console.error('Failed to toggle mute:', error);
      }
    }
  };
  
  // Handle pause toggle
  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
    // Note: Actual pause implementation would need ElevenLabs API support
  };
  
  // Get button colors based on accent
  const getButtonColor = (variant: 'primary' | 'danger' | 'warning' | 'muted') => {
    const colors = {
      primary: `bg-${accentColor}-500 hover:bg-${accentColor}-600`,
      danger: 'bg-red-500 hover:bg-red-600',
      warning: 'bg-yellow-500 hover:bg-yellow-600',
      muted: 'bg-gray-500 hover:bg-gray-600'
    };
    return colors[variant];
  };
  
  return (
    <div className={`flex flex-col h-full bg-white rounded-lg shadow ${className}`}>
      {/* Voice conversation visualization area */}
      <div className="flex-1 p-4 overflow-y-auto flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 relative">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
              {(isSpeaking || isConnecting) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <SoundWavesNative isActive={true} color={accentColor} />
                </div>
              )}
              <Mic className="h-12 w-12 text-gray-400" />
            </div>
          </div>
          
          <p className="text-gray-500 mb-4">
            {isConnecting ? 
              (language === 'sv' ? 'Ansluter...' : 'Connecting...') :
              !isConnected ? 
                (language === 'sv' ? 'Klicka för att starta konversation' : 'Click to start conversation') :
                isPaused ?
                  (language === 'sv' ? 'Pausad' : 'Paused') :
                  isSpeaking ?
                    (language === 'sv' ? 'AI talar...' : 'AI speaking...') :
                    (language === 'sv' ? 'Lyssnar...' : 'Listening...')
            }
          </p>
          
          {/* Small control buttons row */}
          {isConnected && (
            <div className="flex justify-center space-x-2 mb-4">
              {/* Pause button */}
              <Button
                onClick={handlePauseToggle}
                size="icon"
                variant="outline"
                className="w-8 h-8 rounded-full"
                title={isPaused ? (language === 'sv' ? 'Fortsätt' : 'Resume') : (language === 'sv' ? 'Pausa' : 'Pause')}
              >
                {isPaused ? <Play size={14} /> : <Pause size={14} />}
              </Button>
              
              {/* Mute button */}
              <Button
                onClick={handleMuteToggle}
                size="icon"
                variant="outline"
                className={`w-8 h-8 rounded-full ${isMuted ? 'bg-red-100 text-red-600' : ''}`}
                title={isMuted ? (language === 'sv' ? 'Slå på mikrofon' : 'Unmute') : (language === 'sv' ? 'Tysta mikrofon' : 'Mute')}
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Main controls */}
      <div className="p-4 border-t">
        <div className="flex mb-2 space-x-2">
          {/* Main conversation button */}
          {!isConnected ? (
            <Button
              onClick={startConversation}
              className={`${getButtonColor('primary')} flex-1`}
              disabled={isConnecting}
            >
              <Mic size={18} className="mr-2" />
              {isConnecting ? 
                (language === 'sv' ? 'Ansluter...' : 'Connecting...') :
                (language === 'sv' ? 'Starta Konversation' : 'Start Conversation')
              }
            </Button>
          ) : (
            <Button
              onClick={endConversation}
              className={`${getButtonColor('danger')} flex-1`}
            >
              <MicOff size={18} className="mr-2" />
              {language === 'sv' ? 'Stoppa' : 'Stop'}
            </Button>
          )}
          
          {/* Delete conversation button */}
          <Button
            onClick={resetConversation}
            variant="outline"
            className="flex items-center"
          >
            <Trash2 size={16} className="mr-1" />
            {language === 'sv' ? 'Radera' : 'Delete'}
          </Button>
        </div>
        
        {/* Text input */}
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder={language === 'sv' ? 'Skriv ett meddelande...' : 'Type a message...'}
            className="flex-1"
            disabled={!isConnected}
          />
          <Button 
            type="submit" 
            size="icon"
            className={getButtonColor('primary')}
            disabled={!textInput.trim() || !isConnected}
          >
            <Send size={16} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default StandardConversationPlayer;
