
import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { detectClientInfo } from "@/utils/voiceAnalytics";
import { TranscriptItem } from './types';

export const useConversationAnalytics = (agentId: string) => {
  const [sessionId] = useState(`session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`);
  const [startTime] = useState<number>(Date.now());
  const [userQueries, setUserQueries] = useState<number>(0);
  const [aiResponses, setAiResponses] = useState<number>(0);
  const [transcript, setTranscript] = useState<Array<TranscriptItem>>([]);

  const trackUserMessage = (message: string) => {
    setUserQueries(prev => prev + 1);
    setTranscript(prev => [...prev, { role: 'user', content: message }]);
  };

  const trackAssistantMessage = (message: string) => {
    setAiResponses(prev => prev + 1);
    setTranscript(prev => [...prev, { role: 'assistant', content: message }]);
  };

  const saveConversationData = async () => {
    if (transcript.length === 0) return;
    
    try {
      const duration = Math.floor((Date.now() - startTime) / 1000);
      const wordCount = transcript
        .map(t => t.content.trim().split(/\s+/).length)
        .reduce((a, b) => a + b, 0);
      
      const clientInfo = detectClientInfo();

      // Store conversation transcript
      const { data, error } = await supabase
        .from('ai_conversations')
        .insert({
          session_id: sessionId,
          agent_id: agentId,
          transcript,
          user_id: (await supabase.auth.getUser()).data.user?.id
        })
        .select();

      if (error) {
        console.error('Error saving conversation:', error);
        return;
      }
      
      // Store analytics data
      if (data && data[0]) {
        await recordVoiceAnalytics({
          conversation_id: data[0].id,
          duration_seconds: duration,
          word_count: wordCount,
          user_query_count: userQueries,
          ai_response_count: aiResponses,
          device_type: clientInfo.deviceType,
          browser: clientInfo.browser
        });
      }
    } catch (err) {
      console.error('Failed to save conversation data:', err);
    }
  };

  // Import this from voiceAnalytics.ts to avoid duplication
  const recordVoiceAnalytics = async (data: {
    conversation_id: string;
    duration_seconds: number;
    word_count: number;
    user_query_count: number;
    ai_response_count: number;
    device_type: string;
    browser: string;
  }) => {
    try {
      await supabase.from('voice_analytics').insert([data]);
    } catch (error) {
      console.error('Failed to record voice analytics:', error);
    }
  };

  return {
    sessionId,
    startTime,
    userQueries,
    aiResponses,
    transcript,
    trackUserMessage,
    trackAssistantMessage,
    saveConversationData
  };
};
