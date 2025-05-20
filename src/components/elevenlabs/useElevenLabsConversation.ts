
import { useState, useEffect } from 'react';
import { useConversationAnalytics } from './useConversationAnalytics';
import { useMessageHandler } from './useMessageHandler';
import { useConversationActions } from './useConversationActions';
import { Language } from './types';

export const useElevenLabsConversation = (agentId: string, email?: string) => {
  const [userEmail, setUserEmail] = useState<string | undefined>(email);

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

  // Get conversation actions
  const conversationState = useConversationActions(agentId, userEmail, saveConversationData);
  
  // Configure onMessage handler
  useEffect(() => {
    if (conversationState.conversation) {
      conversationState.conversation.onMessage = (message) => {
        // When receiving any message, the system is active
        if (message && typeof message === 'object') {
          if ('source' in message) {
            if (message.source === 'user') {
              conversationState.conversation.isListening = true;
            } else if (message.source === 'assistant') {
              conversationState.conversation.isListening = false;
            }
          }
        }
        
        // Process the message
        handleMessage(message);
      };
    }
  }, [conversationState.conversation, handleMessage]);

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
