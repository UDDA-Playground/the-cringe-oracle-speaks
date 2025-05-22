
import React, { useState } from 'react';
import { Mic, MicOff, MessageSquare, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/context/LanguageContext';
import useElevenlabsConversation, { Message } from '@/hooks/useElevenlabsConversation';
import AudioPlayer from './AudioPlayer';

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
  
  // Initialize conversation hook
  const {
    messages,
    isListening,
    isSpeaking,
    isProcessing,
    audioBlob,
    toggleListening,
    stopSpeaking,
    resetConversation,
    addTextMessage
  } = useElevenlabsConversation({
    agentId,
    initialSystemPrompt: initialPrompt,
    gender: 'female'
  });
  
  // Filter messages to only show user and assistant messages (not system)
  const displayMessages = messages.filter(msg => msg.role === 'user' || msg.role === 'assistant');
  
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
      {/* Message display area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {displayMessages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            <div className="text-center">
              <MessageSquare className="mx-auto h-12 w-12 mb-2" />
              <p>{language === 'sv' ? 'Starta en konversation' : 'Start a conversation'}</p>
            </div>
          </div>
        ) : (
          displayMessages.map((message) => (
            <div 
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.role === 'user' 
                    ? `bg-${accentColor}-100 text-gray-800` 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p>{message.content}</p>
                
                {/* Audio player for assistant messages */}
                {message.role === 'assistant' && message.audioBlob && (
                  <AudioPlayer 
                    audioBlob={message.audioBlob}
                    className="mt-2"
                    autoPlay={isSpeaking}
                  />
                )}
              </div>
            </div>
          ))
        )}
        
        {isProcessing && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-3 rounded-lg flex items-center space-x-2">
              <Loader2 className="animate-spin h-4 w-4" />
              <span className="text-sm text-gray-600">
                {language === 'sv' ? 'Bearbetar...' : 'Processing...'}
              </span>
            </div>
          </div>
        )}
      </div>
      
      {/* Controls */}
      <div className="p-4 border-t">
        <div className="flex mb-2">
          <Button
            type="button"
            onClick={toggleListening}
            className={`${isListening ? 'bg-red-500 hover:bg-red-600' : buttonColor} mr-2`}
          >
            {isListening ? <MicOff size={18} /> : <Mic size={18} />}
            <span className="ml-2">
              {isListening 
                ? (language === 'sv' ? 'Sluta lyssna' : 'Stop listening')
                : (language === 'sv' ? 'Börja lyssna' : 'Start listening')
              }
            </span>
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
