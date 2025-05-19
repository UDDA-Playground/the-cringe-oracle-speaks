
import { MessageFormat1, MessageFormat2 } from './types';

export const useMessageHandler = (
  trackUserMessage: (message: string) => void,
  trackAssistantMessage: (message: string) => void
) => {
  const handleMessage = (message: any) => {
    // Handle different message formats
    if (message && 'source' in message) {
      // Format 1: { source: string, message: string }
      const typedMessage = message as MessageFormat1;
      
      if (typedMessage.source === 'user' && typedMessage.message) {
        trackUserMessage(typedMessage.message);
      } else if (typedMessage.source === 'assistant' && typedMessage.message) {
        trackAssistantMessage(typedMessage.message);
      }
    } else if (message && 'type' in message) {
      // Format 2: { type: string, text: string }
      const typedMessage = message as MessageFormat2;
      
      if (typedMessage.type === 'final_transcript' && 'text' in typedMessage) {
        trackUserMessage(typedMessage.text as string);
      } else if (typedMessage.type === 'llm_response' && 'text' in typedMessage) {
        trackAssistantMessage(typedMessage.text as string);
      }
    }
  };

  return { handleMessage };
};
