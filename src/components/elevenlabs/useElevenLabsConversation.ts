
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

  // Get conversation actions with current language from context
  const conversationState = useConversationActions(agentId, userEmail, saveConversationData, language as Language);
  
  // Configure onMessage handler
  useEffect(() => {
    if (conversationState.conversation) {
      console.log("Setting up ElevenLabs conversation message handler");
      
      // Store the conversation object for event handling
      const conv = conversationState.conversation;
      
      // Set up event handlers if they don't exist already
      if (!conv._eventHandlers) {
        conv._eventHandlers = {};
      }
      
      // Store existing handlers
      const existingOnMessage = conv._eventHandlers.onMessage;
      
      // Set up new message handler
      conv._eventHandlers.onMessage = (message: any) => {
        console.log("ElevenLabs message received:", message);
        
        // Call existing handler if available
        if (existingOnMessage) {
          existingOnMessage(message);
        }
        
        // Process the message
        handleMessage(message);
        
        // Update listening state based on message source
        if (message && typeof message === 'object' && 'source' in message) {
          if (message.source === 'user') {
            conversationState.toggleListeningState(true);
          } else if (message.source === 'assistant') {
            conversationState.toggleListeningState(false);
          }
        }
      };
    }
  }, [conversationState.conversation, handleMessage, conversationState.toggleListeningState]);

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
