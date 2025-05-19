
import { Role } from "@11labs/react";

export type Language = 'en' | 'sv';

export type MessageFormat1 = {
  source: string;
  message: string;
};

export type MessageFormat2 = {
  type: string;
  text: string;
};

export type TranscriptItem = {
  role: string;
  content: string;
};

export interface ElevenLabsWidgetProps {
  agentId: string;
  className?: string;
  pageTitle?: string;
  preventFloatingWidget?: boolean;
}

export interface ConversationData {
  sessionId: string;
  startTime: number;
  userQueries: number;
  aiResponses: number;
  transcript: Array<TranscriptItem>;
}

// For TypeScript to recognize the global ELEVENLABS_CONVAI_SETTINGS
declare global {
  interface Window {
    ELEVENLABS_CONVAI_SETTINGS?: {
      disableFloatingButton?: boolean;
    };
    dataLayer?: any[];
  }
}
