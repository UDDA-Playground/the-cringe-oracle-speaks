
import React, { useEffect, useRef, useState, useCallback } from 'react';
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
 * A React-friendly wrapper for the ElevenLabs Conversational AI widget
 */
const ElevenLabsWidget: React.FC<ElevenLabsWidgetProps> = ({ 
  agentId, 
  className = "",
  pageTitle,
  preventFloatingWidget = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLElement | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [sessionId] = useState(`session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`);
  const [startTime] = useState<number>(Date.now());
  const [userQueries, setUserQueries] = useState<number>(0);
  const [aiResponses, setAiResponses] = useState<number>(0);
  const [transcript, setTranscript] = useState<Array<{role: string, content: string}>>([]);

  // Track conversation interactions
  const trackInteraction = useCallback((type: 'user' | 'ai', content: string) => {
    if (type === 'user') {
      setUserQueries(prev => prev + 1);
    } else {
      setAiResponses(prev => prev + 1);
    }
    
    setTranscript(prev => [...prev, { 
      role: type === 'user' ? 'user' : 'assistant', 
      content 
    }]);
  }, []);

  // Save conversation data when session ends
  const saveConversationData = useCallback(async () => {
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
  }, [transcript, sessionId, startTime, agentId, userQueries, aiResponses]);

  // Load script only once and prevent floating widget if specified
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.type = 'text/javascript';
      
      // Prevent the automatic floating widget
      if (preventFloatingWidget) {
        // Set global configuration to disable the floating widget
        window.ELEVENLABS_CONVAI_SETTINGS = {
          disableFloatingButton: true
        };
      }
      
      script.onload = () => {
        setIsScriptLoaded(true);
      };
      
      document.body.appendChild(script);
      
      return () => {
        // Clean up script only if we added it
        try {
          document.body.removeChild(script);
        } catch (e) {
          console.warn('Could not remove script:', e);
        }
      };
    } else {
      // Script already exists, mark as loaded
      setIsScriptLoaded(true);
      
      // If preventing floating widget, we need to remove any existing ones
      if (preventFloatingWidget) {
        // Find and remove any existing floating widgets
        const floatingWidgets = document.querySelectorAll('elevenlabs-convai-button');
        floatingWidgets.forEach(widget => {
          widget.parentNode?.removeChild(widget);
        });
        
        // Set global configuration to disable the floating widget
        window.ELEVENLABS_CONVAI_SETTINGS = {
          disableFloatingButton: true
        };
      }
    }
  }, [preventFloatingWidget]);

  // Create and attach the widget after script is loaded
  useEffect(() => {
    if (isScriptLoaded && containerRef.current && !widgetRef.current) {
      // Create the widget element
      const widget = document.createElement('elevenlabs-convai');
      widget.setAttribute('agent-id', agentId);
      widgetRef.current = widget;
      
      // Add event listeners for tracking
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
      
      // Clear container just in case
      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
      
      // Append the widget
      containerRef.current.appendChild(widget);
    }
    
    return () => {
      // Clean up event listeners when component unmounts
      if (widgetRef.current) {
        widgetRef.current.removeEventListener('user-speech-end', () => {});
        widgetRef.current.removeEventListener('ai-response-end', () => {});
      }
    };
  }, [isScriptLoaded, agentId, trackInteraction]);

  // Save conversation data on component unmount
  useEffect(() => {
    return () => {
      saveConversationData();
    };
  }, [saveConversationData]);

  // Add custom CSS to ensure proper z-index and positioning
  useEffect(() => {
    // Create a style element for our custom CSS
    const styleEl = document.createElement('style');
    styleEl.innerText = `
      .elevenlabs-widget-container {
        position: relative;
        z-index: 10;
        width: 100%;
      }
      elevenlabs-convai {
        display: block;
        width: 100%;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return <div ref={containerRef} className={`elevenlabs-widget-container ${className}`}></div>;
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
