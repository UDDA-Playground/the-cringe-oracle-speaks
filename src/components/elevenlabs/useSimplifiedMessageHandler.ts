
import { useCallback } from 'react';

interface MessageHandler {
  trackUserMessage: (message: string) => void;
  trackAssistantMessage: (message: string) => void;
  updateListeningState?: (isListening: boolean) => void;
  updateSpeakingState?: (isSpeaking: boolean) => void;
}

export const useSimplifiedMessageHandler = ({
  trackUserMessage,
  trackAssistantMessage,
  updateListeningState,
  updateSpeakingState
}: MessageHandler) => {
  const handleMessage = useCallback((message: any) => {
    if (!message) return undefined;
    
    // Log all messages for debugging
    console.log("Handling message:", message);
    
    // Handle message with source format (most common)
    if (typeof message === 'object' && 'source' in message) {
      if (message.source === 'user' && message.message) {
        trackUserMessage(message.message);
        if (updateListeningState) updateListeningState(true);
        if (updateSpeakingState) updateSpeakingState(false);
        return true;
      } 
      else if ((message.source === 'assistant' || message.source === 'ai') && message.message) {
        trackAssistantMessage(message.message);
        if (updateListeningState) updateListeningState(false);
        if (updateSpeakingState) updateSpeakingState(true);
        return false;
      }
    }
    
    // Handle message with type format
    if (typeof message === 'object' && 'type' in message) {
      if (message.type === 'final_transcript') {
        trackUserMessage(message.text as string);
        if (updateListeningState) updateListeningState(true);
        if (updateSpeakingState) updateSpeakingState(false);
        return true;
      } 
      else if (message.type === 'llm_response') {
        trackAssistantMessage(message.text as string);
        if (updateListeningState) updateListeningState(false);
        if (updateSpeakingState) updateSpeakingState(true);
        return false;
      }
      else if (message.type === 'speaking_started') {
        if (updateSpeakingState) updateSpeakingState(true);
        if (updateListeningState) updateListeningState(false);
        return false;
      }
      else if (message.type === 'speaking_stopped') {
        if (updateSpeakingState) updateSpeakingState(false);
        if (updateListeningState) updateListeningState(true);
        return true;
      }
    }
    
    // Handle message with role format
    if (typeof message === 'object' && 'role' in message && 'content' in message) {
      if (message.role === 'user') {
        trackUserMessage(message.content);
        if (updateListeningState) updateListeningState(true);
        if (updateSpeakingState) updateSpeakingState(false);
        return true;
      } 
      else if (message.role === 'assistant') {
        trackAssistantMessage(message.content);
        if (updateListeningState) updateListeningState(false);
        if (updateSpeakingState) updateSpeakingState(true);
        return false;
      }
    }
    
    return undefined;
  }, [trackUserMessage, trackAssistantMessage, updateListeningState, updateSpeakingState]);

  return { handleMessage };
};
