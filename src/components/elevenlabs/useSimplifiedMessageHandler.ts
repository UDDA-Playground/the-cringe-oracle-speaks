
import { useCallback } from 'react';

interface MessageHandler {
  trackUserMessage: (message: string) => void;
  trackAssistantMessage: (message: string) => void;
  updateListeningState?: (isListening: boolean) => void;
}

export const useSimplifiedMessageHandler = ({
  trackUserMessage,
  trackAssistantMessage,
  updateListeningState
}: MessageHandler) => {
  const handleMessage = useCallback((message: any) => {
    if (!message) return undefined;
    
    // Handle message with source format (most common)
    if (typeof message === 'object' && 'source' in message) {
      if (message.source === 'user' && message.message) {
        trackUserMessage(message.message);
        if (updateListeningState) updateListeningState(true);
        return true;
      } 
      else if ((message.source === 'assistant' || message.source === 'ai') && message.message) {
        trackAssistantMessage(message.message);
        if (updateListeningState) updateListeningState(false);
        return false;
      }
    }
    
    // Handle message with type format
    if (typeof message === 'object' && 'type' in message && 'text' in message) {
      if (message.type === 'final_transcript') {
        trackUserMessage(message.text as string);
        if (updateListeningState) updateListeningState(true);
        return true;
      } 
      else if (message.type === 'llm_response') {
        trackAssistantMessage(message.text as string);
        if (updateListeningState) updateListeningState(false);
        return false;
      }
    }
    
    // Handle message with role format
    if (typeof message === 'object' && 'role' in message && 'content' in message) {
      if (message.role === 'user') {
        trackUserMessage(message.content);
        if (updateListeningState) updateListeningState(true);
        return true;
      } 
      else if (message.role === 'assistant') {
        trackAssistantMessage(message.content);
        if (updateListeningState) updateListeningState(false);
        return false;
      }
    }
    
    return undefined;
  }, [trackUserMessage, trackAssistantMessage, updateListeningState]);

  return { handleMessage };
};
