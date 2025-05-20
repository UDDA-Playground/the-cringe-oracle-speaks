
import { useState, useEffect, useCallback } from 'react';
import { useConversationAnalytics } from './useConversationAnalytics';
import { useMessageHandler } from './useMessageHandler';
import { useConversationActions } from './useConversationActions';
import { Language } from './types';
import { useLanguage } from '@/context/LanguageContext';

export const useElevenLabsConversation = (agentId: string, email?: string) => {
  const [userEmail, setUserEmail] = useState<string | undefined>(email);
  const { language } = useLanguage();
  
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

  // Setup message handler callback for conversation actions
  const onMessageCallback = useCallback((message: any) => {
    console.log("ElevenLabs message received:", message);
    
    // Process the message
    handleMessage(message);
    
    // Update listening state based on message source
    if (message && typeof message === 'object' && 'source' in message) {
      if (message.source === 'user') {
        // User is speaking
        return true; // Return true to indicate listening state should be active
      } else if (message.source === 'assistant') {
        // Assistant is speaking
        return false; // Return false to indicate listening state should be inactive
      }
    }
    // Default return
    return undefined;
  }, [handleMessage]);

  // Get conversation actions with current language from context and our message handler
  const conversationState = useConversationActions(
    agentId, 
    userEmail, 
    saveConversationData, 
    language as Language,
    onMessageCallback
  );

  // Auto-start the conversation when the component mounts
  useEffect(() => {
    const initTimeout = setTimeout(() => {
      if (!conversationState.isInitialized && conversationState.conversation) {
        console.log("Auto-starting conversation after delay");
        conversationState.startConversation().catch(err => {
          console.error("Failed to auto-start conversation:", err);
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
    transcript
  };
};
