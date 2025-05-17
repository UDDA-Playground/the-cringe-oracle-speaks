
import React, { useEffect, useRef, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { detectClientInfo, recordVoiceAnalytics } from "@/utils/voiceAnalytics";

interface ElevenLabsWidgetProps {
  agentId: string;
  className?: string;
  pageTitle?: string;
}

const ElevenLabsWidget: React.FC<ElevenLabsWidgetProps> = ({ 
  agentId, 
  className = "",
  pageTitle
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sessionId] = useState(`session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`);
  const [startTime] = useState<number>(Date.now());
  const [userQueries, setUserQueries] = useState<number>(0);
  const [aiResponses, setAiResponses] = useState<number>(0);
  const [transcript, setTranscript] = useState<Array<{role: string, content: string}>>([]);

  // Track conversation interactions
  const trackInteraction = (type: 'user' | 'ai', content: string) => {
    if (type === 'user') {
      setUserQueries(prev => prev + 1);
    } else {
      setAiResponses(prev => prev + 1);
    }
    
    setTranscript(prev => [...prev, { 
      role: type === 'user' ? 'user' : 'assistant', 
      content 
    }]);
  };

  // Save conversation data when session ends
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

  useEffect(() => {
    // Load the ElevenLabs script if it's not already loaded
    if (!document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }

    // Create and append the widget element when the script is loaded
    const checkAndCreateWidget = () => {
      if (containerRef.current && containerRef.current.childElementCount === 0) {
        // Create the widget element once the script is loaded
        const widget = document.createElement('elevenlabs-convai');
        widget.setAttribute('agent-id', agentId);
        
        // Custom event listeners for tracking
        widget.addEventListener('user-speech-end', (e: any) => {
          if (e.detail && e.detail.transcript) {
            trackInteraction('user', e.detail.transcript);
          }
        });
        
        widget.addEventListener('ai-response-end', (e: any) => {
          if (e.detail && e.detail.response) {
            trackInteraction('ai', e.detail.response);
          }
        });
        
        containerRef.current.appendChild(widget);
      }
    };

    // Initial check
    checkAndCreateWidget();

    // Set up an interval to check until the element is successfully created
    const interval = setInterval(checkAndCreateWidget, 300);

    // Clear interval after 5 seconds (assuming script should be loaded by then)
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    // Save conversation data when component unmounts
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      saveConversationData();
    };
  }, [agentId, sessionId]);

  return <div ref={containerRef} className={className}></div>;
};

export default ElevenLabsWidget;
