
import { Language } from './types';

// Types for conversation state
export interface ConversationState {
  isInitialized: boolean;
  language: Language;
  isPaused: boolean;
  isListening: boolean;
  currentSessionData: SessionData | null;
}

// Types for session data
export interface SessionData {
  agentId: string;
  language: Language;
  email?: string;
}

// Types for conversation event handlers
export interface ConversationEventHandlers {
  onConnect?: () => void;
  onDisconnect?: () => void;
  onMessage?: (message: any) => void;
  onError?: (error: any) => void;
}

// Types for conversation session config
export interface SessionConfig {
  agentId: string;
  overrides?: {
    agent?: {
      language?: Language;
      [key: string]: any;
    };
    [key: string]: any;
  };
}
