import { useState, useEffect, useRef } from 'react';
import { useConversation } from '@11labs/react';
import { useLanguage } from '@/context/LanguageContext';
import { toast } from 'sonner';

interface UseElevenLabsConnectionProps {
  agentId: string;
}

export const useElevenLabsConnection = ({ agentId }: UseElevenLabsConnectionProps) => {
  const { language } = useLanguage();
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

  // Reset conversation and clear all data
  const resetConversation = () => {
    endConversation();
    setTimeout(() => {
      setIsInitialized(false);
      setConnectionAttempts(0);
      toast.success(language === 'sv' ? 'Allt raderat' : 'Everything deleted');
    }, 500);
  };

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

  return {
    conversation,
    isInitialized,
    connectionAttempts,
    startConversation,
    endConversation,
    resetConversation,
    sessionStartedRef
  };
};
