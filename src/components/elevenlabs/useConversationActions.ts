
import { useState, useCallback, useEffect } from 'react';
import { useConversationSession } from './useConversationSession';
import { Language } from './types';
import { useLanguage } from '@/context/LanguageContext';

export const useConversationActions = (
  agentId: string, 
  userEmail?: string,
  onEndSession?: () => void,
  initialLanguage?: Language
) => {
  const { language: contextLanguage } = useLanguage();
  
  // Determine which language to use - prop takes precedence, then context
  const resolvedLanguage = initialLanguage || (contextLanguage as Language) || 'en';
  
  // Set up session state
  const [language, setLanguage] = useState<Language>(resolvedLanguage);
  const [isListening, setIsListening] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Initialize conversation session
  const {
    conversation,
    state,
    startSession,
    endSession,
    updateLanguage
  } = useConversationSession(agentId, () => setIsListening(true), () => setIsListening(false));
  
  // Start the conversation
  const startConversation = useCallback(async () => {
    try {
      await startSession(language);
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  }, [startSession, language]);
  
  // End the conversation
  const stopConversation = useCallback(() => {
    endSession();
    setIsListening(false);
    if (onEndSession) {
      onEndSession();
    }
  }, [endSession, onEndSession]);
  
  // Toggle the conversation language
  const toggleLanguage = useCallback((newLanguage: Language) => {
    setLanguage(newLanguage);
    updateLanguage(newLanguage);
    
    // If conversation is already active, restart with new language
    if (state.isInitialized) {
      endSession();
      setTimeout(() => {
        startSession(newLanguage);
      }, 500);
    }
  }, [endSession, startSession, state.isInitialized, updateLanguage]);
  
  // Toggle listening state for UI updates
  const toggleListeningState = useCallback((listening: boolean) => {
    setIsListening(listening);
  }, []);
  
  // Toggle pause state
  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);
  
  // Update language if context language changes
  useEffect(() => {
    if (contextLanguage && contextLanguage !== language && (contextLanguage === 'en' || contextLanguage === 'sv')) {
      toggleLanguage(contextLanguage as Language);
    }
  }, [contextLanguage, language, toggleLanguage]);
  
  return {
    conversation,
    isInitialized: state.isInitialized,
    isListening,
    isPaused,
    language,
    startConversation,
    stopConversation,
    toggleLanguage,
    toggleListeningState,
    togglePause
  };
};
