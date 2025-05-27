
import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'sonner';
import { textToSpeech, getVoiceId } from '@/services/elevenlabs/api';
import { generateMockAIResponse } from '@/utils/mockAiResponse';
import { Message } from '@/hooks/useElevenlabsConversation';

interface UseMessageProcessorProps {
  language: string;
  gender: 'male' | 'female';
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setIsProcessing: React.Dispatch<React.SetStateAction<boolean>>;
  playAudio: (blob: Blob) => void;
  setAudioBlob: (blob: Blob | null) => void;
}

export const useMessageProcessor = ({
  language,
  gender,
  messages,
  setMessages,
  setIsProcessing,
  playAudio,
  setAudioBlob
}: UseMessageProcessorProps) => {

  const processUserMessage = useCallback(async (userMessage: Message) => {
    try {
      setIsProcessing(true);
      
      // Generate AI response
      const mockAssistantResponse = await generateMockAIResponse(userMessage.content, language, messages);
      console.log("Generated response:", mockAssistantResponse);
      
      // Generate audio for the assistant response
      const voiceId = getVoiceId(language === 'sv' ? 'sv' : 'en', gender);
      console.log("Using voice ID:", voiceId);
      
      const audioBlob = await textToSpeech(mockAssistantResponse, voiceId);
      console.log("Generated audio blob:", audioBlob ? `Success (${audioBlob.size} bytes)` : "Failed");
      
      // Add assistant message with audio
      const assistantMessage: Message = {
        id: uuidv4(),
        role: 'assistant',
        content: mockAssistantResponse,
        audioBlob: audioBlob || undefined
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      
      if (audioBlob) {
        setAudioBlob(audioBlob);
        playAudio(audioBlob);
      }
    } catch (error) {
      console.error('Error processing message:', error);
      toast.error('Failed to process message. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  }, [language, gender, messages, setMessages, setIsProcessing, playAudio, setAudioBlob]);

  const addUserMessage = useCallback(async (content: string) => {
    const messageId = uuidv4();
    const userMessage: Message = { id: messageId, role: 'user', content };
    
    setMessages(prev => [...prev, userMessage]);
    await processUserMessage(userMessage);
  }, [setMessages, processUserMessage]);

  return {
    addUserMessage,
    processUserMessage
  };
};
