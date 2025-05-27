
import { useState, useCallback, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLanguage } from '@/context/LanguageContext';
import { toast } from 'sonner';
import { useSpeechRecognition } from './useSpeechRecognition';
import { useAudioPlayer } from './useAudioPlayer';
import { useMessageProcessor } from './useMessageProcessor';

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  audioBlob?: Blob;
}

interface UseElevenlabsConversationProps {
  agentId: string;
  initialSystemPrompt?: string;
  gender?: 'male' | 'female';
  onConversationStart?: () => void;
  onConversationEnd?: () => void;
}

export const useElevenlabsConversation = ({
  agentId,
  initialSystemPrompt,
  gender = 'female',
  onConversationStart,
  onConversationEnd
}: UseElevenlabsConversationProps) => {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const conversationId = useRef(uuidv4());
  
  // Use the audio player hook
  const { 
    isSpeaking, 
    audioBlob, 
    playAudio, 
    stopSpeaking, 
    setAudioBlob,
    cleanup: cleanupAudio 
  } = useAudioPlayer();
  
  // Use the message processor hook
  const { addUserMessage } = useMessageProcessor({
    language,
    gender,
    messages,
    setMessages,
    setIsProcessing,
    playAudio,
    setAudioBlob
  });
  
  // Use the speech recognition hook
  const { isListening, toggleListening, setIsListening } = useSpeechRecognition({
    language,
    onTranscript: addUserMessage
  });
  
  // Add a system message at the start
  useEffect(() => {
    if (initialSystemPrompt && messages.length === 0) {
      setMessages([{
        id: uuidv4(),
        role: 'system',
        content: initialSystemPrompt
      }]);
    }
  }, [initialSystemPrompt, messages.length]);
  
  // Enhanced toggle listening with conversation start callback
  const enhancedToggleListening = useCallback(() => {
    toggleListening();
    if (!isListening && onConversationStart) {
      onConversationStart();
    }
  }, [toggleListening, isListening, onConversationStart]);
  
  // Reset conversation
  const resetConversation = useCallback(() => {
    setMessages([]);
    stopSpeaking();
    setIsListening(false);
    cleanupAudio();
    conversationId.current = uuidv4();
    if (onConversationEnd) onConversationEnd();
    
    toast.success('All conversation data has been deleted');
  }, [stopSpeaking, setIsListening, cleanupAudio, onConversationEnd]);
  
  // Add a text message manually (without speech)
  const addTextMessage = useCallback((text: string) => {
    addUserMessage(text);
  }, [addUserMessage]);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupAudio();
    };
  }, [cleanupAudio]);
  
  return {
    messages,
    isListening,
    isSpeaking,
    isProcessing,
    audioBlob,
    toggleListening: enhancedToggleListening,
    stopSpeaking,
    resetConversation,
    addTextMessage,
    conversationId: conversationId.current
  };
};

// Declare SpeechRecognition interface for TypeScript
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export default useElevenlabsConversation;
