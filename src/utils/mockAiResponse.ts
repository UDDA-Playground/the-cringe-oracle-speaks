
import { Message } from '@/hooks/useElevenlabsConversation';

export const generateMockAIResponse = async (
  userInput: string, 
  lang: string, 
  previousMessages: Message[]
): Promise<string> => {
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
