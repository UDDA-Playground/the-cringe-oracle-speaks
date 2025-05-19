
import { useState, useEffect } from 'react';
import { useConversation } from '@11labs/react';
import { toast } from '@/hooks/use-toast';
import { Language } from './types';
import { useConversationAnalytics } from './useConversationAnalytics';
import { useMessageHandler } from './useMessageHandler';

export const useElevenLabsConversation = (agentId: string) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [isPaused, setIsPaused] = useState(false);

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
    onMessage: handleMessage,
    onError: (error) => {
      console.error('ElevenLabs conversation error:', error);
      toast({
        title: "Connection error",
        description: "There was a problem with the voice conversation. Please try again.",
        variant: "destructive"
      });
    },
    onDisconnect: () => {
      // Save conversation data when the session ends
      saveConversationData();
      setIsPaused(false);
    }
  });

  // Start or restart conversation
  const startConversation = async () => {
    try {
      if (conversation.status === 'disconnected') {
        await conversation.startSession({ 
          agentId,
          overrides: {
            agent: {
              language
            }
          }
        });
        setIsInitialized(true);
        setIsPaused(false);
      } else if (isPaused) {
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
        }, 500);
        setIsPaused(false);
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

  // Handle conversation pause/resume
  const togglePause = () => {
    if (conversation.status === 'connected') {
      if (isPaused) {
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
        }, 500);
        setIsPaused(false);
      } else {
        conversation.endSession();
        setIsPaused(true);
      }
    }
  };

  // Switch language
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'sv' : 'en';
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
        saveConversationData();
      }
    };
  }, [agentId]);

  return {
    conversation,
    isInitialized,
    language,
    isPaused,
    transcript,
    startConversation,
    togglePause,
    toggleLanguage,
    sessionId
  };
};
