
import { useState, useEffect, useCallback } from 'react';
import { useConversationAnalytics } from './useConversationAnalytics';
import { useSimplifiedMessageHandler } from './useSimplifiedMessageHandler';
import { useConversationActions } from './useConversationActions';
import { Language } from './types';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Main hook for ElevenLabs conversation handling
 */
export const useElevenLabsConversation = (
  agentId: string, 
  email?: string,
  updateListeningState?: (isListening: boolean) => void,
  updateSpeakingState?: (isSpeaking: boolean) => void
) => {
  const [userEmail, setUserEmail] = useState<string | undefined>(email);
  const { language } = useLanguage();
  const [initError, setInitError] = useState<Error | null>(null);
  
  // Use the analytics hook
  const {
    sessionId,
    transcript,
    trackUserMessage,
    trackAssistantMessage,
    saveConversationData
  } = useConversationAnalytics(agentId);

  // Create simplified message handler
  const { handleMessage } = useSimplifiedMessageHandler({
    trackUserMessage,
    trackAssistantMessage,
    updateListeningState,
    updateSpeakingState
  });

  // Setup message handler callback for conversation actions
  const onMessageCallback = useCallback((message: any) => {
    console.log("ElevenLabs message received:", message);
    return handleMessage(message);
  }, [handleMessage]);

  // Get conversation actions with current language from context and our message handler
  const conversationState = useConversationActions(
    agentId, 
    userEmail, 
    saveConversationData, 
    (language === 'sv' || language === 'en') ? (language as Language) : 'en',
    onMessageCallback
  );

  // Auto-start the conversation when the component mounts
  useEffect(() => {
    const initTimeout = setTimeout(() => {
      if (!conversationState.isInitialized && conversationState.conversation) {
        console.log("Auto-starting conversation after delay");
        conversationState.startConversation().catch(err => {
          console.error("Failed to auto-start conversation:", err);
          setInitError(err);
        });
      }
    }, 1000);
    
    return () => clearTimeout(initTimeout);
  }, [conversationState]);

  // Update email when prop changes
  useEffect(() => {
    if (email !== userEmail) {
      setUserEmail(email);
    }
  }, [email]);

  return {
    ...conversationState,
    sessionId,
    transcript,
    initError
  };
};
