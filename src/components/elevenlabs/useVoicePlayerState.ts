
import { useState, useCallback } from 'react';
import { Language } from './types';

/**
 * Custom hook for managing voice player UI state
 */
export const useVoicePlayerState = () => {
  const [isListening, setIsListening] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [initTimedOut, setInitTimedOut] = useState(false);
  const [initAttempts, setInitAttempts] = useState(0);
  const [userEmail, setUserEmail] = useState<string>('');
  const [connectionInProgress, setConnectionInProgress] = useState(false);
  
  // Handler to update speaking state
  const updateSpeakingState = useCallback((speaking: boolean) => {
    setIsSpeaking(speaking);
  }, []);
  
  // Handler to update listening state
  const updateListeningState = useCallback((listening: boolean) => {
    setIsListening(listening);
  }, []);
  
  // Handler for toggling pause state
  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);
  
  // Error handling for initialization
  const handleInitTimeout = useCallback(() => {
    setInitTimedOut(true);
    setConnectionInProgress(false);
  }, []);
  
  // Reset initialization state
  const resetInitState = useCallback(() => {
    setInitTimedOut(false);
    setInitAttempts(prev => prev + 1);
    setConnectionInProgress(true);
  }, []);
  
  // Update email state
  const updateEmail = useCallback((email: string) => {
    setUserEmail(email);
  }, []);
  
  return {
    isListening,
    isPaused,
    isSpeaking,
    initTimedOut,
    initAttempts,
    userEmail,
    connectionInProgress,
    updateSpeakingState,
    updateListeningState,
    togglePause,
    handleInitTimeout,
    resetInitState,
    updateEmail,
    setConnectionInProgress
  };
};
