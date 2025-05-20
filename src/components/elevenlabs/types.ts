
// Define available languages
export type Language = 'en' | 'sv';

// Props for the ElevenLabsWidget component
export interface ElevenLabsWidgetProps {
  agentId: string;
  className?: string;
  pageTitle?: string;
  preventFloatingWidget?: boolean;
  accentColor?: string;
}

// Message type for conversation
export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: number;
}

// Conversation data type for analytics
export interface ConversationData {
  sessionId: string;
  agentId: string;
  transcript: Message[];
  startTime: number;
  endTime?: number;
  userEmail?: string;
}

// Message format types for ElevenLabs API responses
export interface MessageFormat1 {
  source: 'user' | 'assistant';
  message: string;
}

export interface MessageFormat2 {
  type: 'final_transcript' | 'llm_response' | string;
  text: string | unknown;
}

// Define interface for Window with ElevenLabs settings
declare global {
  interface Window {
    ELEVENLABS_CONVAI_SETTINGS?: {
      disableFloatingButton?: boolean;
    };
  }
}
