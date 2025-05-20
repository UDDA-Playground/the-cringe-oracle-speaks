
import { useState, useEffect } from 'react';
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
      // Attach the message handler to the conversation
      const eventHandlers = conversationState.conversation['_eventHandlers'] || {};
      
      // Store existing handlers if any
      const existingOnMessage = eventHandlers.onMessage;
      
      // Set up new message handler
      conversationState.conversation['_eventHandlers'] = {
        ...eventHandlers,
        onMessage: (message: any) => {
          // Call existing handler if available
          if (existingOnMessage) {
            existingOnMessage(message);
          }
          
          // Process the message
          handleMessage(message);
          
          // When receiving any message, update listening state based on message source
          if (message && typeof message === 'object' && 'source' in message) {
            if (message.source === 'user') {
              // Update state manually since we can't directly modify conversation object
              conversationState.toggleListeningState(true);
            } else if (message.source === 'assistant') {
              // Update state manually since we can't directly modify conversation object
              conversationState.toggleListeningState(false);
            }
          }
        }
      };
    }
  }, [conversationState.conversation, handleMessage, conversationState.toggleListeningState]);

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
