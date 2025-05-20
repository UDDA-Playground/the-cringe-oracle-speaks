
import { useCallback, useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { Language } from './types';
import { useConversationSession } from './useConversationSession';

export const useConversationActions = (
  agentId: string, 
  email?: string,
  saveConversationData?: (email?: string) => void
) => {
  const [isListening, setIsListening] = useState(false);
  
  // Get the conversation session utilities
  const {
    conversation,
    state,
    startSession,
    endSession,
    updateLanguage,
    togglePause
  } = useConversationSession(
    agentId, 
    undefined, // onConnect
    () => {
      // Save conversation data when the session ends
      if (saveConversationData) {
        saveConversationData(email);
      }
      
      // If email was provided, show a toast
      if (email && email.trim() !== '') {
        toast({
          title: "Conversation summary",
          description: "A summary of your conversation will be sent to your email shortly.",
        });
      }
    } // onDisconnect
  );

  // Toggle listening state
  const toggleListeningState = useCallback((newState: boolean) => {
    setIsListening(newState);
  }, []);

  // Start or toggle conversation
  const startConversation = useCallback(async () => {
    try {
      if (conversation.status === 'disconnected') {
        await startSession(state.language);
      } else if (conversation.status === 'connected') {
        if (conversation.isSpeaking) {
          // If currently speaking, end the session since we can't pause
          endSession();
          togglePause();
        } else if (state.isPaused) {
          // If paused, start a new session
          await startSession(state.language);
          togglePause();
        } else {
          // Otherwise, end the session
          endSession();
        }
      }
    } catch (error) {
      console.error('Failed to start ElevenLabs conversation:', error);
      toast({
        title: "Connection error",
        description: "Could not connect to voice service. Please try again later.",
        variant: "destructive"
      });
    }
  }, [conversation.status, conversation.isSpeaking, state.isPaused, state.language, startSession, endSession, togglePause]);

  // Switch language
  const toggleLanguage = useCallback((newLanguage: Language) => {
    updateLanguage(newLanguage);
    
    // If conversation is active, restart it with new language
    if (conversation.status === 'connected') {
      endSession();
      setTimeout(() => {
        startSession(newLanguage);
      }, 500);
    }
  }, [conversation.status, updateLanguage, endSession, startSession]);

  return {
    conversation,
    ...state,
    isListening,
    startConversation,
    toggleLanguage,
    toggleListeningState
  };
};
