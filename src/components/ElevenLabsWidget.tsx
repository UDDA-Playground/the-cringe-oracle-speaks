
import React, { useEffect, useState } from 'react';
import { useConversation } from '@11labs/react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { detectClientInfo, recordVoiceAnalytics } from "@/utils/voiceAnalytics";

interface ElevenLabsWidgetProps {
  agentId: string;
  className?: string;
  pageTitle?: string;
  preventFloatingWidget?: boolean;
}

/**
 * A React-friendly wrapper for the ElevenLabs Conversational AI using official @11labs/react package
 */
const ElevenLabsWidget: React.FC<ElevenLabsWidgetProps> = ({ 
  agentId, 
  className = "",
  pageTitle,
  preventFloatingWidget = true
}) => {
  const [sessionId] = useState(`session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`);
  const [startTime] = useState<number>(Date.now());
  const [userQueries, setUserQueries] = useState<number>(0);
  const [aiResponses, setAiResponses] = useState<number>(0);
  const [transcript, setTranscript] = useState<Array<{role: string, content: string}>>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Use the official ElevenLabs React hook
  const conversation = useConversation({
    onMessage: (message) => {
      // Track messages for analytics
      if (message.type === 'final_transcript') {
        setUserQueries(prev => prev + 1);
        setTranscript(prev => [...prev, { role: 'user', content: message.text }]);
      } else if (message.type === 'llm_response') {
        setAiResponses(prev => prev + 1);
        setTranscript(prev => [...prev, { role: 'assistant', content: message.text }]);
      }
    },
    onError: (error) => {
      console.error('ElevenLabs conversation error:', error);
      toast({
        title: "Connection error",
        description: "There was a problem with the voice conversation. Please try again.",
        variant: "destructive"
      });
    },
    onDisconnect: () => {
      // Save conversation data when the session ends
      saveConversationData();
    }
  });

  // Save conversation data
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

  // Initialize the conversation when the component mounts
  useEffect(() => {
    if (preventFloatingWidget) {
      // Set global configuration to disable the floating widget
      window.ELEVENLABS_CONVAI_SETTINGS = {
        disableFloatingButton: true
      };
      
      // Remove any existing floating widgets
      document.querySelectorAll('elevenlabs-convai-button').forEach(widget => {
        if (widget.parentNode) {
          widget.parentNode.removeChild(widget);
        }
      });
    }
    
    // Initialize the conversation
    const startConversation = async () => {
      try {
        await conversation.startSession({ agentId });
        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to start ElevenLabs conversation:', error);
        toast({
          title: "Connection error",
          description: "Could not connect to voice service. Please try again later.",
          variant: "destructive"
        });
      }
    };
    
    startConversation();
    
    return () => {
      // Clean up the conversation on unmount
      conversation.endSession();
      saveConversationData();
    };
  }, [agentId, preventFloatingWidget]);

  // Add custom styles to ensure proper UI integration
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerText = `
      .elevenlabs-widget-container {
        position: relative;
        z-index: 10;
        width: 100%;
        min-height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .elevenlabs-controls {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
      .elevenlabs-mic-button {
        background-color: #3B82F6;
        color: white;
        border: none;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .elevenlabs-mic-button:hover {
        background-color: #2563EB;
        transform: scale(1.05);
      }
      .elevenlabs-mic-button svg {
        width: 24px;
        height: 24px;
      }
      .elevenlabs-status {
        font-size: 14px;
        color: #4B5563;
        text-align: center;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // CSS classes for the container
  const containerClasses = `elevenlabs-widget-container ${className}`;

  return (
    <div className={containerClasses}>
      {isInitialized ? (
        <div className="elevenlabs-controls">
          <button 
            className="elevenlabs-mic-button"
            onClick={() => {
              if (conversation.status === 'disconnected') {
                conversation.startSession({ agentId });
              }
            }}
            aria-label="Start voice conversation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <div className="elevenlabs-status">
            {conversation.status === 'connected' ? (
              conversation.isSpeaking ? 'Listening...' : 'Ready'
            ) : 'Click to start conversation'}
          </div>
        </div>
      ) : (
        <div className="elevenlabs-loading">Initializing voice conversation...</div>
      )}
    </div>
  );
};

// Add this to the global window object for TypeScript
declare global {
  interface Window {
    ELEVENLABS_CONVAI_SETTINGS?: {
      disableFloatingButton?: boolean;
    };
  }
}

export default ElevenLabsWidget;
