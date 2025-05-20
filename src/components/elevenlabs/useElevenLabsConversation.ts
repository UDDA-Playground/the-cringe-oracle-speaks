import { useState, useEffect } from 'react';
import { useConversation } from '@11labs/react';
import { toast } from '@/hooks/use-toast';
import { Language } from './types';
import { useConversationAnalytics } from './useConversationAnalytics';
import { useMessageHandler } from './useMessageHandler';

export const useElevenLabsConversation = (agentId: string, email?: string) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [isPaused, setIsPaused] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [currentSessionData, setCurrentSessionData] = useState<{
    agentId: string;
    language: Language;
    email?: string;
  } | null>(null);

  // Use the analytics hook
  const {
    sessionId,
    transcript,
    trackUserMessage,
    trackAssistantMessage,
    saveConversationData
  } = useConversationAnalytics(agentId);

  // Create message handler
  const { handleMessage } = useMessageHandler(trackUserMessage, trackAssistantMessage);

  // Use the official ElevenLabs React hook
  const conversation = useConversation({
    overrides: {
      agent: {
        language
      }
    },
    onMessage: (message) => {
      // When receiving any message, the system is active
      if (message && typeof message === 'object') {
        if ('source' in message) {
          if (message.source === 'user') {
            setIsListening(true);
          } else if (message.source === 'assistant') {
            setIsListening(false);
          }
        }
      }
      
      handleMessage(message);
    },
    onError: (error) => {
      console.error('ElevenLabs conversation error:', error);
      toast({
        title: "Connection error",
        description: "There was a problem with the voice conversation. Please try again.",
        variant: "destructive"
      });
    },
    onConnect: () => {
      setIsListening(true);
    },
    onDisconnect: () => {
      // Save conversation data when the session ends
      saveConversationData(email);
      setIsPaused(false);
      setIsListening(false);
      
      // If email was provided, show a toast
      if (email && email.trim() !== '') {
        toast({
          title: "Conversation summary",
          description: "A summary of your conversation will be sent to your email shortly.",
        });
      }
    }
  });

  // Start or toggle conversation
  const startConversation = async () => {
    try {
      if (conversation.status === 'disconnected') {
        const sessionConfig = { 
          agentId,
          overrides: {
            agent: {
              language
            }
          }
        };
        
        await conversation.startSession(sessionConfig);
        setCurrentSessionData({
          agentId,
          language,
          email
        });
        setIsInitialized(true);
        setIsPaused(false);
        setIsListening(true);
      } else if (conversation.status === 'connected') {
        if (conversation.isSpeaking) {
          // If currently speaking, end the session since we can't pause
          conversation.endSession();
          setIsPaused(true);
          setIsListening(false);
        } else if (isPaused) {
          // If paused, start a new session
          const sessionConfig = { 
            agentId,
            overrides: {
              agent: {
                language
              }
            }
          };
          await conversation.startSession(sessionConfig);
          setIsPaused(false);
          setIsListening(true);
        } else {
          // Otherwise, end the session
          conversation.endSession();
          setIsListening(false);
        }
      }
    } catch (error) {
      console.error('Failed to start ElevenLabs conversation:', error);
      toast({
        title: "Connection error",
        description: "Could not connect to voice service. Please try again later.",
        variant: "destructive"
      });
    }
  };

  // Switch language
  const toggleLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    
    // If conversation is active, restart it with new language
    if (conversation.status === 'connected') {
      conversation.endSession();
      setTimeout(() => {
        conversation.startSession({ 
          agentId,
          overrides: {
            agent: {
              language: newLanguage
            }
          }
        });
      }, 500);
    }
  };

  // Initialize the component
  useEffect(() => {
    // Don't auto-start the conversation, just initialize the component
    setIsInitialized(true);
    
    return () => {
      // Clean up the conversation on unmount
      if (conversation.status === 'connected') {
        conversation.endSession();
        saveConversationData(email);
      }
    };
  }, [agentId]);

  // Update conversation parameters when they change
  useEffect(() => {
    if (currentSessionData && 
        (currentSessionData.language !== language || 
         currentSessionData.email !== email)) {
      
      // Only restart if actually connected and parameters changed
      if (conversation.status === 'connected') {
        conversation.endSession();
        setTimeout(() => {
          conversation.startSession({ 
            agentId,
            overrides: {
              agent: {
                language
              }
            }
          });
          
          setCurrentSessionData({
            agentId, 
            language,
            email
          });
        }, 500);
      }
    }
  }, [language, email]);

  return {
    conversation,
    isInitialized,
    language,
    isPaused,
    isListening,
    startConversation,
    toggleLanguage,
    sessionId,
    transcript
  };
};
