
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
    if (!audioElementRef.current) {
      audioElementRef.current = new Audio();
      
      audioElementRef.current.onended = () => {
        console.log("Audio playback ended");
        setIsSpeaking(false);
      };
      
      audioElementRef.current.onplay = () => {
        console.log("Audio playback started");
        setIsSpeaking(true);
      };
      
      audioElementRef.current.onerror = (e) => {
        console.error("Audio playback error:", e);
        setIsSpeaking(false);
      };
    }
    
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
      const mockAssistantResponse = await mockAIResponse(userMessage.content, language, messages);
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
        // Play the audio
        setAudioBlob(audioBlob);
        playAudio(audioBlob);
      }
    } catch (error) {
      console.error('Error processing message:', error);
      toast.error('Failed to process message. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  }, [language, gender, messages]);
  
  // Helper function to play audio blob
  const playAudio = useCallback((blob: Blob) => {
    if (!audioElementRef.current) {
      audioElementRef.current = new Audio();
      
      audioElementRef.current.onended = () => {
        console.log("Audio playback ended");
        setIsSpeaking(false);
      };
      
      audioElementRef.current.onplay = () => {
        console.log("Audio playback started");
        setIsSpeaking(true);
      };
    }
    
    const url = URL.createObjectURL(blob);
    console.log("Playing audio from URL:", url);
    
    audioElementRef.current.src = url;
    audioElementRef.current.onended = () => {
      setIsSpeaking(false);
      URL.revokeObjectURL(url);
    };
    
    audioElementRef.current.play()
      .then(() => {
        console.log("Audio playback started successfully");
      })
      .catch(error => {
        console.error("Error playing audio:", error);
        setIsSpeaking(false);
        URL.revokeObjectURL(url);
      });
  }, []);
  
  // Mock AI response with better context awareness
  const mockAIResponse = async (userInput: string, lang: string, previousMessages: Message[]): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Get conversation context (basic)
    const isFirstMessage = previousMessages.filter(m => m.role === 'user').length <= 1;
    const userInputLower = userInput.toLowerCase();
    
    // Check for greetings
    const isGreeting = userInputLower.includes('hello') || 
                       userInputLower.includes('hi') || 
                       userInputLower.includes('hey') ||
                       userInputLower === 'hello' ||
                       userInputLower === 'hi';
    
    // Check for questions about the service
    const isQuestionAboutService = userInputLower.includes('what can you do') || 
                                  userInputLower.includes('how does this work') ||
                                  userInputLower.includes('help me');
    
    // Swedish responses
    if (lang === 'sv') {
      if (isFirstMessage) {
        return "Välkommen till UDDA's personlighetstolk! Jag finns här för att hjälpa dig förstå mer om din personlighet och dina beteendemönster. Vad funderar du på idag?";
      }
      
      if (isGreeting) {
        return "Hej där! Trevligt att prata med dig. Vad kan jag hjälpa dig med idag angående din personlighet eller självkännedom?";
      }
      
      if (isQuestionAboutService) {
        return "Jag är en AI-coach specialiserad på personlighetsanalys och självinsikt. Jag kan hjälpa dig att förstå dina beteendemönster, identifiera dina styrkor och svagheter, och ge dig verktyg för personlig utveckling. Är det något särskilt du vill utforska?";
      }
      
      return `Det är en intressant tanke. När du nämner "${userInput}", får jag en känsla av att detta är något viktigt för dig. Kan du berätta mer om varför detta är betydelsefullt för dig just nu?`;
    }
    
    // English responses
    if (isFirstMessage) {
      return "Welcome to UDDA's personality interpreter! I'm here to help you understand more about your personality and behavioral patterns. What's on your mind today?";
    }
    
    if (isGreeting) {
      return "Hello there! Great to be chatting with you. What would you like to explore about your personality or self-awareness today?";
    }
    
    if (isQuestionAboutService) {
      return "I'm an AI coach specializing in personality analysis and self-discovery. I can help you understand your behavioral patterns, identify your strengths and weaknesses, and provide tools for personal growth. Is there something specific you'd like to explore?";
    }
    
    return `That's an interesting thought. When you mention "${userInput}", I sense this is something significant to you. Can you tell me more about why this matters to you right now?`;
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
    
    // Provide feedback
    toast.success('All conversation data has been deleted');
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
