
import { useCallback } from 'react';

// Define types for message formats directly in this file since they're implementation-specific
interface MessageWithSource {
  source: 'user' | 'assistant';
  message: string;
}

interface MessageWithType {
  type: 'final_transcript' | 'llm_response' | string;
  text: string | unknown;
}

interface MessageWithRole {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export const useMessageHandler = (
  trackUserMessage: (message: string) => void,
  trackAssistantMessage: (message: string) => void
) => {
  const handleMessage = useCallback((message: any) => {
    // Handle different message formats
    if (message && 'source' in message) {
      // Format 1: { source: string, message: string }
      const typedMessage = message as MessageWithSource;
      
      if (typedMessage.source === 'user' && typedMessage.message) {
        trackUserMessage(typedMessage.message);
      } else if (typedMessage.source === 'assistant' && typedMessage.message) {
        trackAssistantMessage(typedMessage.message);
      }
    } else if (message && 'type' in message) {
      // Format 2: { type: string, text: string }
      const typedMessage = message as MessageWithType;
      
      if (typedMessage.type === 'final_transcript' && 'text' in typedMessage) {
        trackUserMessage(typedMessage.text as string);
      } else if (typedMessage.type === 'llm_response' && 'text' in typedMessage) {
        trackAssistantMessage(typedMessage.text as string);
      }
    } else if (message && 'role' in message) {
      // Format 3: { role: string, content: string }
      const typedMessage = message as MessageWithRole;
      if (typedMessage.role === 'user' && typedMessage.content) {
        trackUserMessage(typedMessage.content);
      } else if (typedMessage.role === 'assistant' && typedMessage.content) {
        trackAssistantMessage(typedMessage.content);
      }
    }
  }, [trackUserMessage, trackAssistantMessage]);

  return { handleMessage };
};
