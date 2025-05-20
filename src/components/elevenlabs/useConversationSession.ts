
import { useState, useCallback } from 'react';
import { useConversation } from '@11labs/react';
import { Language } from './types';
import { ConversationState, SessionConfig, ConversationEventHandlers } from './conversation-types';

export const useConversationSession = (
  agentId: string,
  onConnect?: () => void,
  onDisconnect?: () => void
) => {
  const [state, setState] = useState<ConversationState>({
    isInitialized: false,
    language: 'en',
    isPaused: false,
    isListening: false,
    currentSessionData: null
  });

  // Set up conversation event handlers
  const eventHandlers: ConversationEventHandlers = {
    onConnect: () => {
      setState(prev => ({ ...prev, isListening: true }));
      if (onConnect) onConnect();
    },
    onDisconnect: () => {
      setState(prev => ({ ...prev, isPaused: false, isListening: false }));
      if (onDisconnect) onDisconnect();
    }
  };

  // Use the official ElevenLabs React hook
  const conversation = useConversation(eventHandlers);

  // Configure and start a session
  const startSession = useCallback(async (language: Language) => {
    try {
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
      }
    } catch (error) {
      console.error('Failed to start ElevenLabs conversation:', error);
      throw error;
    }
  }, [agentId, conversation]);

  // End the current session
  const endSession = useCallback(() => {
    if (conversation.status === 'connected') {
      conversation.endSession();
      setState(prev => ({ ...prev, isListening: false }));
    }
  }, [conversation]);

  // Update the language setting
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
