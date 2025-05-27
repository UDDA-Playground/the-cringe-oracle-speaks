import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, MessageSquare, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/context/LanguageContext';
import { useConversation } from '@11labs/react';
import { toast } from 'sonner';

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
  const [connectionAttempts, setConnectionAttempts] = useState(0);
  const [lastActivity, setLastActivity] = useState<number>(Date.now());
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const keepAliveIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const sessionStartedRef = useRef<boolean>(false);
  
  // ElevenLabs conversation hook
  const conversation = useConversation({
    onConnect: () => {
      console.log('ElevenLabs connected successfully');
      setIsInitialized(true);
      setConnectionAttempts(0);
      setLastActivity(Date.now());
      sessionStartedRef.current = true;
      
      // Start keep-alive pings every 30 seconds
      if (keepAliveIntervalRef.current) {
        clearInterval(keepAliveIntervalRef.current);
      }
      keepAliveIntervalRef.current = setInterval(() => {
        setLastActivity(Date.now());
        console.log('Keep-alive ping sent');
      }, 30000);
      
      toast.success(language === 'sv' ? 'Ansluten till AI' : 'Connected to AI');
    },
    onDisconnect: () => {
      console.log('ElevenLabs disconnected');
      setIsInitialized(false);
      sessionStartedRef.current = false;
      
      // Clear keep-alive
      if (keepAliveIntervalRef.current) {
        clearInterval(keepAliveIntervalRef.current);
        keepAliveIntervalRef.current = null;
      }
      
      // Only attempt reconnection if we had a successful session and haven't exceeded attempts
      if (sessionStartedRef.current && connectionAttempts < 3) {
        const delay = Math.min(1000 * Math.pow(2, connectionAttempts), 10000);
        console.log(`Attempting reconnection in ${delay}ms (attempt ${connectionAttempts + 1})`);
        
        reconnectTimeoutRef.current = setTimeout(() => {
          setConnectionAttempts(prev => prev + 1);
          startConversation();
        }, delay);
        
        toast.info(language === 'sv' ? 'Återansluter...' : 'Reconnecting...');
      } else {
        toast.error(language === 'sv' ? 'Anslutning förlorad' : 'Connection lost');
      }
    },
    onError: (error) => {
      console.error('ElevenLabs error:', error);
      toast.error(language === 'sv' ? 'Anslutningsfel' : 'Connection error');
      setIsInitialized(false);
    },
    onMessage: (message) => {
      setLastActivity(Date.now());
      console.log('ElevenLabs message received:', message);
    }
  });

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (keepAliveIntervalRef.current) {
        clearInterval(keepAliveIntervalRef.current);
      }
    };
  }, []);

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

  // Start conversation with retry logic
  const startConversation = async () => {
    try {
      console.log('Starting conversation with agent:', agentId);
      
      // Only start if not already connected or connecting
      if (conversation.status === 'disconnected') {
        await conversation.startSession({ 
          agentId,
          overrides: {
            agent: {
              language: language === 'sv' ? 'sv' : 'en'
            }
          }
        });
      } else {
        console.log('Conversation already active, status:', conversation.status);
      }
    } catch (error) {
      console.error('Failed to start conversation:', error);
      toast.error(language === 'sv' ? 'Kunde inte starta samtal' : 'Failed to start conversation');
      setIsInitialized(false);
    }
  };

  // End conversation
  const endConversation = () => {
    console.log('Ending conversation');
    setConnectionAttempts(0);
    sessionStartedRef.current = false;
    
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
    
    if (keepAliveIntervalRef.current) {
      clearInterval(keepAliveIntervalRef.current);
      keepAliveIntervalRef.current = null;
    }
    
    if (conversation.status === 'connected') {
      conversation.endSession();
    }
    
    setIsInitialized(false);
  };

  // Handle text input submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInput.trim() && conversation.status === 'connected') {
      console.log('Sending text message:', textInput);
      setLastActivity(Date.now());
      setTextInput('');
    }
  };

  // Reset conversation and clear all data
  const resetConversation = () => {
    endConversation();
    setTimeout(() => {
      setIsInitialized(false);
      setConnectionAttempts(0);
      toast.success(language === 'sv' ? 'Allt raderat' : 'Everything deleted');
    }, 500);
  };

  // Render sound wave animation
  const SoundWaveAnimation = () => (
    <div className="flex items-center gap-1">
      <div className="w-1 h-4 bg-current animate-pulse rounded-full"></div>
      <div className="w-1 h-6 bg-current animate-pulse rounded-full" style={{animationDelay: '0.1s'}}></div>
      <div className="w-1 h-4 bg-current animate-pulse rounded-full" style={{animationDelay: '0.2s'}}></div>
    </div>
  );

  // Determine current status for display
  const getStatusDisplay = () => {
    if (conversation.status === 'connecting') {
      return language === 'sv' ? 'Ansluter...' : 'Connecting...';
    }
    
    if (conversation.status === 'connected') {
      if (conversation.isSpeaking) {
        return language === 'sv' ? 'AI talar...' : 'AI speaking...';
      }
      return language === 'sv' ? 'Redo att prata' : 'Ready to talk';
    }
    
    return language === 'sv' ? 'Klicka för att starta' : 'Click to start';
  };

  const isConnecting = conversation.status === 'connecting';
  const isConnected = conversation.status === 'connected';
  const isDisconnected = conversation.status === 'disconnected';

  return (
    <div className={`flex flex-col h-full bg-white rounded-lg shadow ${className}`}>
      {/* Voice conversation visualization area */}
      <div className="flex-1 p-4 overflow-y-auto flex items-center justify-center min-h-[200px]">
        <div className="text-center">
          <div className="mb-4 relative">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
              {conversation.isSpeaking && isConnected && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <SoundWaveAnimation />
                </div>
              )}
              <MessageSquare className="h-12 w-12 text-gray-400" />
            </div>
          </div>
          
          <p className="text-gray-500">
            {getStatusDisplay()}
          </p>
          
          {connectionAttempts > 0 && isDisconnected && (
            <p className="text-orange-500 text-sm mt-2">
              {language === 'sv' ? `Återansluter (försök ${connectionAttempts}/3)` : `Reconnecting (${connectionAttempts}/3)`}
            </p>
          )}
        </div>
      </div>
      
      {/* Controls */}
      <div className="p-4 border-t">
        <div className="flex mb-2 gap-2">
          {isDisconnected ? (
            <Button
              type="button"
              onClick={startConversation}
              className={`${buttonColor} flex-1 relative overflow-hidden`}
              disabled={isConnecting}
            >
              {isConnecting ? (
                <>
                  <Loader2 size={18} className="mr-2 animate-spin" />
                  <span>{language === 'sv' ? 'Ansluter...' : 'Connecting...'}</span>
                </>
              ) : (
                <>
                  <Mic size={18} className="mr-2" />
                  <span>{language === 'sv' ? 'Starta Konversation' : 'Start Conversation'}</span>
                </>
              )}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={endConversation}
              className="bg-red-500 hover:bg-red-600 flex-1 relative overflow-hidden"
            >
              {conversation.isSpeaking && isConnected ? (
                <>
                  <SoundWaveAnimation />
                  <span className="ml-2">{language === 'sv' ? 'AI Talar' : 'AI Speaking'}</span>
                </>
              ) : (
                <>
                  <MicOff size={18} className="mr-2" />
                  <span>{language === 'sv' ? 'Stoppa' : 'Stop'}</span>
                </>
              )}
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
            disabled={!isConnected}
          />
          <Button 
            type="submit" 
            className={buttonColor}
            disabled={!textInput.trim() || !isConnected}
          >
            <Send size={18} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SimpleElevenlabsWidget;
