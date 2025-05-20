
import { useState, useCallback, useEffect } from 'react';
import { useConversationSession } from './useConversationSession';
import { Language } from './types';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Hook for managing conversation actions and state
 */
export const useConversationActions = (
  agentId: string, 
  userEmail?: string,
  onEndSession?: () => void,
  initialLanguage?: Language,
  onMessage?: (message: any) => boolean | undefined
) => {
  const { language: contextLanguage } = useLanguage();
  
  // Determine which language to use - prop takes precedence, then context
  const resolvedLanguage = initialLanguage || 
    ((contextLanguage === 'sv' || contextLanguage === 'en') ? 
      (contextLanguage as Language) : 'en');
  
  // Set up session state
  const [language, setLanguage] = useState<Language>(resolvedLanguage);
  const [isPaused, setIsPaused] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [initializationAttempt, setInitializationAttempt] = useState(0);
  
  // Event handlers for conversation session
  const handleConnect = useCallback(() => {
    setIsListening(true);
  }, []);
  
  const handleDisconnect = useCallback(() => {
    setIsListening(false);
  }, []);
  
  // Initialize conversation session with event handlers
  const {
    conversation,
    state,
    startSession,
    endSession,
    updateLanguage
  } = useConversationSession(
    agentId, 
    handleConnect, 
    handleDisconnect,
    onMessage
  );
  
  // Start the conversation
  const startConversation = useCallback(async () => {
    console.log("Starting conversation with language:", language);
    setInitializationAttempt(prev => prev + 1);
    
    try {
      await startSession(language);
      return true;
    } catch (error) {
      console.error("Failed to start conversation:", error);
      return false;
    }
  }, [startSession, language, initializationAttempt]);
  
  // End the conversation
  const stopConversation = useCallback(() => {
    console.log("Stopping conversation");
    endSession();
    setIsListening(false);
    if (onEndSession) {
      onEndSession();
    }
  }, [endSession, onEndSession]);
  
  // Toggle the conversation language
  const toggleLanguage = useCallback((newLanguage: Language) => {
    console.log("Toggling language to:", newLanguage);
    setLanguage(newLanguage);
    updateLanguage(newLanguage);
    
    // If conversation is already active, restart with new language
    if (state.isInitialized) {
      endSession();
      setTimeout(() => {
        startSession(newLanguage).catch(err => {
          console.error("Failed to restart session with new language:", err);
        });
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
    if (contextLanguage && contextLanguage !== language && 
        (contextLanguage === 'en' || contextLanguage === 'sv')) {
      console.log("Language context changed, updating language to:", contextLanguage);
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
