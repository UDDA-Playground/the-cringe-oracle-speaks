
import React, { useEffect, useState } from 'react';
import { useConversation } from '@11labs/react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { detectClientInfo, recordVoiceAnalytics } from "@/utils/voiceAnalytics";
import { PauseIcon, PlayIcon, MicIcon, GlobeIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ElevenLabsWidgetProps {
  agentId: string;
  className?: string;
  pageTitle?: string;
  preventFloatingWidget?: boolean;
}

type MessageFormat1 = {
  source: string;
  message: string;
};

type MessageFormat2 = {
  type: string;
  text: string;
};

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
  const [language, setLanguage] = useState<'en' | 'sv'>('en');
  const [isPaused, setIsPaused] = useState(false);

  // Use the official ElevenLabs React hook
  const conversation = useConversation({
    overrides: {
      agent: {
        language
      }
    },
    onMessage: (message) => {
      // The structure of message depends on the type of message received
      // Track messages for analytics
      if (message && 'source' in message) {
        // Handle @11labs/react message format
        if (message.source === 'user' && message.message) {
          setUserQueries(prev => prev + 1);
          setTranscript(prev => [...prev, { role: 'user', content: message.message }]);
        } else if (message.source === 'assistant' && message.message) {
          setAiResponses(prev => prev + 1);
          setTranscript(prev => [...prev, { role: 'assistant', content: message.message }]);
        }
      } else if (message && 'type' in message) {
        // Handle alternative message format for backward compatibility
        if (message.type === 'final_transcript' && 'text' in message) {
          setUserQueries(prev => prev + 1);
          setTranscript(prev => [...prev, { role: 'user', content: message.text as string }]);
        } else if (message.type === 'llm_response' && 'text' in message) {
          setAiResponses(prev => prev + 1);
          setTranscript(prev => [...prev, { role: 'assistant', content: message.text as string }]);
        }
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
      setIsPaused(false);
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

  // Handle conversation pause/resume
  const togglePause = () => {
    if (conversation.status === 'connected') {
      if (isPaused) {
        conversation.endSession();
        setTimeout(() => {
          conversation.startSession({ 
            agentId,
            overrides: {
              agent: {
                language
              }
            }
          });
        }, 500);
        setIsPaused(false);
      } else {
        conversation.endSession();
        setIsPaused(true);
      }
    }
  };

  // Start or restart conversation
  const startConversation = async () => {
    try {
      if (conversation.status === 'disconnected') {
        await conversation.startSession({ 
          agentId,
          overrides: {
            agent: {
              language
            }
          }
        });
        setIsInitialized(true);
        setIsPaused(false);
      } else if (isPaused) {
        conversation.endSession();
        setTimeout(() => {
          conversation.startSession({ 
            agentId,
            overrides: {
              agent: {
                language
              }
            }
          });
        }, 500);
        setIsPaused(false);
      }
    } catch (error) {
      console.error('Failed to start ElevenLabs conversation:', error);
      toast({
        title: "Connection error",
        description: "Could not connect to voice service. Please try again later.",
        variant: "destructive"
      });
    }
  };

  // Switch language
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'sv' : 'en';
    setLanguage(newLanguage);
    
    // If conversation is active, restart it with new language
    if (conversation.status === 'connected') {
      conversation.endSession();
      setTimeout(() => {
        conversation.startSession({ 
          agentId,
          overrides: {
            agent: {
              language: newLanguage
            }
          }
        });
      }, 500);
    }
  };

  // Initialize the component when it mounts - but don't auto-start
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
    
    // Don't auto-start the conversation, just initialize the component
    setIsInitialized(true);
    
    return () => {
      // Clean up the conversation on unmount
      if (conversation.status === 'connected') {
        conversation.endSession();
        saveConversationData();
      }
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
        flex-direction: column;
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
      .elevenlabs-buttons {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
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
      .elevenlabs-language {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 10px;
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
          <div className="elevenlabs-buttons">
            <button 
              className="elevenlabs-mic-button"
              onClick={startConversation}
              aria-label="Start voice conversation"
              disabled={conversation.status === 'connected' && !isPaused}
            >
              <MicIcon />
            </button>
            
            {conversation.status === 'connected' && (
              <button 
                className="elevenlabs-mic-button"
                onClick={togglePause}
                aria-label={isPaused ? "Resume conversation" : "Pause conversation"}
              >
                {isPaused ? <PlayIcon /> : <PauseIcon />}
              </button>
            )}
          </div>
          
          <div className="elevenlabs-status">
            {conversation.status === 'connected' ? (
              isPaused ? 'Paused' : (conversation.isSpeaking ? 'Listening...' : 'Ready')
            ) : 'Click to start conversation'}
          </div>
          
          <div className="elevenlabs-language">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <GlobeIcon size={16} />
              {language === 'en' ? 'English' : 'Svenska'}
            </Button>
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
    dataLayer?: any[];
  }
}

export default ElevenLabsWidget;
