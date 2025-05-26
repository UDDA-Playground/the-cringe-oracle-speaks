
import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, MessageSquare, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/context/LanguageContext';
import { useConversation } from '@11labs/react';

interface SimpleElevenlabsWidgetProps {
  agentId: string;
  accentColor?: string;
  className?: string;
}

const SimpleElevenlabsWidget: React.FC<SimpleElevenlabsWidgetProps> = ({
  agentId,
  accentColor = 'blue',
  className = ''
}) => {
  const { language } = useLanguage();
  const [textInput, setTextInput] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);
  
  // ElevenLabs conversation hook
  const conversation = useConversation({
    onConnect: () => {
      console.log('ElevenLabs connected');
      setIsInitialized(true);
    },
    onDisconnect: () => {
      console.log('ElevenLabs disconnected');
      setIsInitialized(false);
    },
    onError: (error) => {
      console.error('ElevenLabs error:', error);
    }
  });

  // Button color based on accent
  const getButtonColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-500 hover:bg-blue-600',
      purple: 'bg-purple-500 hover:bg-purple-600',
      green: 'bg-green-500 hover:bg-green-600',
      yellow: 'bg-yellow-500 hover:bg-yellow-600',
      orange: 'bg-orange-500 hover:bg-orange-600'
    };
    return colorMap[color] || colorMap.blue;
  };

  const buttonColor = getButtonColor(accentColor);

  // Start conversation
  const startConversation = async () => {
    try {
      if (conversation.status === 'disconnected') {
        await conversation.startSession({ agentId });
      }
    } catch (error) {
      console.error('Failed to start conversation:', error);
    }
  };

  // End conversation
  const endConversation = () => {
    if (conversation.status === 'connected') {
      conversation.endSession();
    }
  };

  // Handle text input submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInput.trim() && conversation.status === 'connected') {
      // For now, just clear the input - the conversation will handle the message
      setTextInput('');
    }
  };

  // Reset conversation
  const resetConversation = () => {
    endConversation();
    setTimeout(() => {
      setIsInitialized(false);
    }, 500);
  };

  return (
    <div className={`flex flex-col h-full bg-white rounded-lg shadow ${className}`}>
      {/* Voice conversation visualization area */}
      <div className="flex-1 p-4 overflow-y-auto flex items-center justify-center min-h-[200px]">
        <div className="text-center">
          <div className="mb-4 relative">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
              {conversation.isSpeaking && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-4 bg-current animate-pulse rounded-full"></div>
                    <div className="w-1 h-6 bg-current animate-pulse rounded-full" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-1 h-4 bg-current animate-pulse rounded-full" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              )}
              <MessageSquare className="h-12 w-12 text-gray-400" />
            </div>
          </div>
          
          <p className="text-gray-500">
            {conversation.status === 'connecting' ? 
              (language === 'sv' ? 'Ansluter...' : 'Connecting...') :
              conversation.status === 'connected' ? 
                (conversation.isSpeaking ? 
                  (language === 'sv' ? 'AI talar...' : 'AI speaking...') :
                  (language === 'sv' ? 'Redo att prata' : 'Ready to talk')
                ) :
                (language === 'sv' ? 'Klicka för att starta' : 'Click to start')
            }
          </p>
        </div>
      </div>
      
      {/* Controls */}
      <div className="p-4 border-t">
        <div className="flex mb-2 gap-2">
          {conversation.status === 'disconnected' ? (
            <Button
              type="button"
              onClick={startConversation}
              className={buttonColor}
            >
              <Mic size={18} className="mr-2" />
              <span>{language === 'sv' ? 'Starta Konversation' : 'Start Conversation'}</span>
            </Button>
          ) : (
            <Button
              type="button"
              onClick={endConversation}
              className="bg-red-500 hover:bg-red-600"
            >
              <MicOff size={18} className="mr-2" />
              <span>{language === 'sv' ? 'Stoppa' : 'Stop'}</span>
            </Button>
          )}
          
          <Button
            type="button"
            onClick={resetConversation}
            variant="outline"
          >
            {language === 'sv' ? 'Radera Allt' : 'Delete Everything'}
          </Button>
        </div>
        
        <form onSubmit={handleSubmit} className="flex">
          <Input
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder={language === 'sv' ? 'Skriv ett meddelande...' : 'Type a message...'}
            className="mr-2"
            disabled={conversation.status !== 'connected'}
          />
          <Button 
            type="submit" 
            className={buttonColor}
            disabled={!textInput.trim() || conversation.status !== 'connected'}
          >
            <Send size={18} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SimpleElevenlabsWidget;
