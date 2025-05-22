
import { useState, useCallback, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLanguage } from '@/context/LanguageContext';
import { textToSpeech, getVoiceId } from '@/services/elevenlabs/api';
import { toast } from 'sonner';

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
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const conversationId = useRef(uuidv4());
  
  // Add speech recognition
  const recognitionRef = useRef<any>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  
  // Initialize speech recognition if available
  useEffect(() => {
    // Browser SpeechRecognition API
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = language === 'sv' ? 'sv-SE' : 'en-US';
      
      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        if (transcript.trim()) {
          addUserMessage(transcript);
        }
      };
      
      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        toast.error('Speech recognition error. Please try again.');
      };
      
      recognitionRef.current.onend = () => {
        // Only set listening to false if we're not manually restarting
        if (isListening) {
          setIsListening(false);
        }
      };
    }
    
    // Create audio element for TTS playback
    audioElementRef.current = new Audio();
    audioElementRef.current.onended = () => {
      setIsSpeaking(false);
    };
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      
      if (audioElementRef.current) {
        audioElementRef.current.pause();
        audioElementRef.current = null;
      }
    };
  }, [language]);
  
  // Update recognition language when language changes
  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = language === 'sv' ? 'sv-SE' : 'en-US';
    }
  }, [language]);
  
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
  
  // Add a message from the user
  const addUserMessage = useCallback(async (content: string) => {
    // Add message to state
    const messageId = uuidv4();
    const userMessage: Message = { id: messageId, role: 'user', content };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Process the message with API
    await processUserMessage(userMessage);
  }, []);
  
  // Process user message and get AI response
  const processUserMessage = useCallback(async (userMessage: Message) => {
    try {
      setIsProcessing(true);
      
      // Here you would typically call your backend API to process the message
      // For this example, we'll mock a response
      const mockAssistantResponse = await mockAIResponse(userMessage.content, language);
      console.log("Generated response:", mockAssistantResponse);
      
      // Generate audio for the assistant response
      const voiceId = getVoiceId(language === 'sv' ? 'sv' : 'en', gender);
      console.log("Using voice ID:", voiceId);
      
      const audioBlob = await textToSpeech(mockAssistantResponse, voiceId);
      console.log("Generated audio blob:", audioBlob ? "Success" : "Failed");
      
      // Add assistant message with audio
      const assistantMessage: Message = {
        id: uuidv4(),
        role: 'assistant',
        content: mockAssistantResponse,
        audioBlob: audioBlob || undefined
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      
      if (audioBlob) {
        // Play the audio
        setAudioBlob(audioBlob);
        setIsSpeaking(true);
        
        if (audioElementRef.current) {
          const audioUrl = URL.createObjectURL(audioBlob);
          audioElementRef.current.src = audioUrl;
          audioElementRef.current.onended = () => {
            setIsSpeaking(false);
            URL.revokeObjectURL(audioUrl);
          };
          
          try {
            await audioElementRef.current.play();
            console.log("Audio playback started");
          } catch (error) {
            console.error("Failed to play audio:", error);
            setIsSpeaking(false);
          }
        }
      }
    } catch (error) {
      console.error('Error processing message:', error);
      toast.error('Failed to process message. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  }, [language, gender]);
  
  // Mock AI response - replace with actual API call
  const mockAIResponse = async (userInput: string, lang: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (lang === 'sv') {
      return `Hej! Det här är ett exempel på ett svar på svenska till: "${userInput}"`;
    }
    return `Hello! This is a sample response to your message: "${userInput}"`;
  };
  
  // Toggle listening state
  const toggleListening = useCallback(() => {
    if (!recognitionRef.current) {
      toast.error('Speech recognition is not supported in this browser.');
      return;
    }
    
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        if (onConversationStart) onConversationStart();
      } catch (error) {
        console.error('Failed to start speech recognition:', error);
        toast.error('Failed to start speech recognition. Please try again.');
      }
    }
  }, [isListening, onConversationStart]);
  
  // Stop speaking
  const stopSpeaking = useCallback(() => {
    if (audioElementRef.current) {
      audioElementRef.current.pause();
      audioElementRef.current.currentTime = 0;
    }
    setIsSpeaking(false);
    setAudioBlob(null);
  }, []);
  
  // Reset conversation
  const resetConversation = useCallback(() => {
    setMessages([]);
    setIsSpeaking(false);
    setIsListening(false);
    setAudioBlob(null);
    if (audioElementRef.current) {
      audioElementRef.current.pause();
      audioElementRef.current.currentTime = 0;
    }
    conversationId.current = uuidv4();
    if (onConversationEnd) onConversationEnd();
  }, [onConversationEnd]);
  
  // Add a text message manually (without speech)
  const addTextMessage = useCallback((text: string) => {
    addUserMessage(text);
  }, [addUserMessage]);
  
  return {
    messages,
    isListening,
    isSpeaking,
    isProcessing,
    audioBlob,
    toggleListening,
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
