
import { useState, useCallback, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLanguage } from '@/context/LanguageContext';
import { toast } from 'sonner';
import { useSpeechRecognition } from './useSpeechRecognition';
import { useAudioPlayer } from './useAudioPlayer';
import { useMessageProcessor } from './useMessageProcessor';
import { supabase } from '@/integrations/supabase/client';

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
  const [conversationSaved, setConversationSaved] = useState(false);
  
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
  
  // Save conversation when messages change
  useEffect(() => {
    if (messages.length > 1 && !conversationSaved) { // More than just system message
      saveConversation();
    }
  }, [messages, conversationSaved]);
  
  // Save conversation to database
  const saveConversation = useCallback(async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const conversationData = {
        session_id: conversationId.current,
        agent_id: agentId,
        transcript: messages,
        user_id: user?.id || null,
      };

      const { error } = await supabase
        .from('ai_conversations')
        .insert([conversationData]);

      if (error) {
        console.error('Error saving conversation:', error);
      } else {
        setConversationSaved(true);
        console.log('Conversation saved successfully');
      }
    } catch (error) {
      console.error('Failed to save conversation:', error);
    }
  }, [agentId, messages]);
  
  // Enhanced toggle listening with conversation start callback
  const enhancedToggleListening = useCallback(() => {
    toggleListening();
    if (!isListening && onConversationStart) {
      onConversationStart();
    }
  }, [toggleListening, isListening, onConversationStart]);
  
  // Reset conversation with proper cleanup
  const resetConversation = useCallback(async () => {
    // Delete from database if conversation was saved
    if (conversationSaved) {
      try {
        const { error } = await supabase
          .from('ai_conversations')
          .delete()
          .eq('session_id', conversationId.current);

        if (error) {
          console.error('Error deleting conversation:', error);
          toast.error('Failed to delete conversation from database');
          return;
        }
      } catch (error) {
        console.error('Failed to delete conversation:', error);
        toast.error('Failed to delete conversation');
        return;
      }
    }
    
    // Reset local state
    setMessages([]);
    stopSpeaking();
    setIsListening(false);
    cleanupAudio();
    conversationId.current = uuidv4();
    setConversationSaved(false);
    
    if (onConversationEnd) onConversationEnd();
    
    toast.success('Conversation deleted successfully');
  }, [stopSpeaking, setIsListening, cleanupAudio, onConversationEnd, conversationSaved]);
  
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
