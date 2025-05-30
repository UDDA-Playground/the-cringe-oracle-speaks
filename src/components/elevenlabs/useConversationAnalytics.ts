
import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { v4 as uuidv4 } from 'uuid';
import { Message } from './types';

export const useConversationAnalytics = (agentId: string) => {
  const [sessionId] = useState<string>(uuidv4());
  const [transcript, setTranscript] = useState<Message[]>([]);
  const [startTime] = useState<number>(Date.now());

  // Track user message
  const trackUserMessage = useCallback((message: string) => {
    const newMessage: Message = {
      role: 'user',
      content: message,
      timestamp: Date.now(),
    };
    
    setTranscript(prev => [...prev, newMessage]);
    console.log('User:', message);
  }, []);

  // Track assistant message
  const trackAssistantMessage = useCallback((message: string) => {
    const newMessage: Message = {
      role: 'assistant',
      content: message,
      timestamp: Date.now(),
    };
    
    setTranscript(prev => [...prev, newMessage]);
    console.log('Assistant:', message);
  }, []);

  // Save conversation data
  const saveConversationData = useCallback(async (userEmail?: string) => {
    if (transcript.length === 0) return;
    
    try {
      const conversationData = {
        session_id: sessionId,
        agent_id: agentId,
        transcript: JSON.stringify(transcript),
        start_time: new Date(startTime).toISOString(),
        end_time: new Date().toISOString(),
        user_email: userEmail || null,
      };

      const { error } = await supabase
        .from('ai_conversations')
        .insert([conversationData]);

      if (error) {
        console.error('Error saving conversation data:', error);
      } else {
        console.log('Conversation data saved successfully');
      }
    } catch (error) {
      console.error('Failed to save conversation data:', error);
    }
  }, [sessionId, agentId, transcript, startTime]);

  // Delete conversation data
  const deleteConversationData = useCallback(async () => {
    try {
      const { error } = await supabase
        .from('ai_conversations')
        .delete()
        .eq('session_id', sessionId);

      if (error) {
        console.error('Error deleting conversation data:', error);
      } else {
        console.log('Conversation data deleted successfully');
      }
    } catch (error) {
      console.error('Failed to delete conversation data:', error);
    }
  }, [sessionId]);

  // Reset transcript (for local state)
  const resetTranscript = useCallback(() => {
    setTranscript([]);
  }, []);

  return {
    sessionId,
    transcript,
    trackUserMessage,
    trackAssistantMessage,
    saveConversationData,
    deleteConversationData,
    resetTranscript,
  };
};
