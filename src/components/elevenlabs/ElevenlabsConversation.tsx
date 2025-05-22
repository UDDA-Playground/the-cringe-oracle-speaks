
import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, MessageSquare, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/context/LanguageContext';
import useElevenlabsConversation from '@/hooks/useElevenlabsConversation';
import SoundWavesNative from './SoundWavesNative';

interface ElevenlabsConversationProps {
  agentId: string;
  initialPrompt?: string;
  accentColor?: string;
  className?: string;
}

const ElevenlabsConversation: React.FC<ElevenlabsConversationProps> = ({
  agentId,
  initialPrompt,
  accentColor = 'blue',
  className = ''
}) => {
  const { t, language } = useLanguage();
  const [textInput, setTextInput] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Initialize conversation hook
  const {
    isListening,
    isSpeaking,
    isProcessing,
    toggleListening,
    stopSpeaking,
    resetConversation,
    addTextMessage
  } = useElevenlabsConversation({
    agentId,
    initialSystemPrompt: initialPrompt,
    gender: 'female'
  });
  
  // Button color based on accent
  const buttonColor = `bg-${accentColor}-500 hover:bg-${accentColor}-600`;
  
  // Handle text input submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInput.trim()) {
      addTextMessage(textInput);
      setTextInput('');
    }
  };
  
  return (
    <div className={`flex flex-col h-full bg-white rounded-lg shadow ${className}`}>
      {/* Hidden audio element for playing speech */}
      <audio ref={audioRef} className="hidden" />
      
      {/* Voice conversation visualization area */}
      <div className="flex-1 p-4 overflow-y-auto flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 relative">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
              {isListening && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <SoundWavesNative isActive={true} color={accentColor} />
                </div>
              )}
              {isSpeaking && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <SoundWavesNative isActive={true} color={accentColor} />
                </div>
              )}
              <MessageSquare className="h-12 w-12 text-gray-400" />
            </div>
          </div>
          
          <p className="text-gray-500">
            {isProcessing ? 
              (language === 'sv' ? 'Bearbetar...' : 'Processing...') :
              isListening ? 
                (language === 'sv' ? 'Lyssnar...' : 'Listening...') :
                isSpeaking ?
                  (language === 'sv' ? 'Talar...' : 'Speaking...') :
                  (language === 'sv' ? 'Klicka på mikrofonknappen för att prata' : 'Click the microphone button to talk')
            }
          </p>
        </div>
      </div>
      
      {/* Controls */}
      <div className="p-4 border-t">
        <div className="flex mb-2">
          <Button
            type="button"
            onClick={toggleListening}
            className={`${isListening ? 'bg-red-500 hover:bg-red-600' : buttonColor} mr-2 relative`}
          >
            {isListening ? <MicOff size={18} /> : <Mic size={18} />}
            <span className="ml-2">
              {isListening 
                ? (language === 'sv' ? 'Sluta lyssna' : 'Stop listening')
                : (language === 'sv' ? 'Börja lyssna' : 'Start listening')
              }
            </span>
            {isListening && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                <SoundWavesNative isActive={true} color={accentColor} />
              </span>
            )}
          </Button>
          
          <Button
            type="button"
            onClick={resetConversation}
            variant="outline"
          >
            {language === 'sv' ? 'Återställ' : 'Reset'}
          </Button>
        </div>
        
        <form onSubmit={handleSubmit} className="flex">
          <Input
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder={language === 'sv' ? 'Skriv ett meddelande...' : 'Type a message...'}
            className="mr-2"
            disabled={isProcessing}
          />
          <Button 
            type="submit" 
            className={buttonColor}
            disabled={!textInput.trim() || isProcessing}
          >
            <Send size={18} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ElevenlabsConversation;
