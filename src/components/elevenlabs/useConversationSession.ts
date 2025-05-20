
import { useState, useCallback, useRef } from 'react';
import { useConversation } from '@11labs/react';
import { Language } from './types';
import { ConversationState, SessionConfig } from './conversation-types';

export const useConversationSession = (
  agentId: string,
  onConnect?: () => void,
  onDisconnect?: () => void,
  onMessageHandler?: (message: any) => boolean | undefined
) => {
  // State for tracking conversation status
  const [state, setState] = useState<ConversationState>({
    isInitialized: false,
    language: 'en',
    isPaused: false,
    isListening: false,
    currentSessionData: null
  });

  // Event handlers for the ElevenLabs conversation
  const eventHandlers = {
    onConnect: () => {
      console.log("ElevenLabs conversation connected");
      setState(prev => ({ ...prev, isInitialized: true, isListening: true }));
      if (onConnect) onConnect();
    },
    onDisconnect: () => {
      console.log("ElevenLabs conversation disconnected");
      setState(prev => ({ ...prev, isPaused: false, isListening: false }));
      if (onDisconnect) onDisconnect();
    },
    onError: (error: any) => {
      console.error("ElevenLabs conversation error:", error);
      setState(prev => ({ ...prev, isInitialized: false }));
    },
    onMessage: (message: any) => {
      if (onMessageHandler) {
        const shouldListen = onMessageHandler(message);
        if (typeof shouldListen === 'boolean') {
          setState(prev => ({ ...prev, isListening: shouldListen }));
        }
      }
    }
  };

  // Initialize conversation with event handlers
  const conversation = useConversation(eventHandlers);

  // Start a new conversation session
  const startSession = useCallback(async (language: Language) => {
    try {
      console.log("Starting ElevenLabs session with language:", language);
      
      if (conversation.status === 'disconnected') {
        const sessionConfig: SessionConfig = { 
          agentId,
          overrides: {
            agent: {
              language
            }
          }
        };
        
        await conversation.startSession(sessionConfig);
        setState(prev => ({
          ...prev,
          isInitialized: true,
          isPaused: false,
          isListening: true,
          currentSessionData: {
            agentId,
            language
          }
        }));
        console.log("ElevenLabs session started successfully");
      } else {
        console.log("ElevenLabs session already connected:", conversation.status);
      }
    } catch (error) {
      console.error('Failed to start ElevenLabs conversation:', error);
      setState(prev => ({ ...prev, isInitialized: false }));
      throw error;
    }
  }, [agentId, conversation]);

  // End the current session
  const endSession = useCallback(() => {
    console.log("Ending ElevenLabs session");
    if (conversation.status === 'connected') {
      conversation.endSession();
      setState(prev => ({ ...prev, isListening: false }));
    }
  }, [conversation]);

  // Update language setting
  const updateLanguage = useCallback((newLanguage: Language) => {
    setState(prev => ({ ...prev, language: newLanguage }));
  }, []);

  // Toggle pause state
  const togglePause = useCallback(() => {
    setState(prev => ({ ...prev, isPaused: !prev.isPaused }));
  }, []);

  return {
    conversation,
    state,
    startSession,
    endSession,
    updateLanguage,
    togglePause
  };
};
