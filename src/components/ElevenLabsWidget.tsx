
import React, { useState, useEffect } from 'react';
import { useElevenLabsConversation } from './elevenlabs/useElevenLabsConversation';
import { useConversationStyles } from './elevenlabs/useConversationStyles';
import { useFloatingWidgetConfig } from './elevenlabs/useFloatingWidgetConfig';
import ConversationControls from './elevenlabs/ConversationControls';
import { ElevenLabsWidgetProps } from './elevenlabs/types';
import { Button } from '@/components/ui/button';

/**
 * A React-friendly wrapper for the ElevenLabs Conversational AI using official @11labs/react package
 */
const ElevenLabsWidget: React.FC<ElevenLabsWidgetProps> = ({ 
  agentId, 
  className = "",
  pageTitle,
  preventFloatingWidget = true,
  accentColor = "blue" // Default accent color, can be overridden per page
}) => {
  // Apply CSS styles
  useConversationStyles();
  
  // Configure floating widget
  useFloatingWidgetConfig(preventFloatingWidget);
  
  // State for email
  const [email, setEmail] = useState("");
  
  // State for initialization timeout
  const [initTimedOut, setInitTimedOut] = useState(false);
  const [initAttempts, setInitAttempts] = useState(0);
  
  // Get conversation management
  const {
    conversation,
    isInitialized,
    language,
    startConversation,
    toggleLanguage,
    isPaused,
    isListening
  } = useElevenLabsConversation(agentId, email);

  // Set a timeout to show a message if initialization takes too long
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isInitialized) {
        console.log("ElevenLabs initialization timed out");
        setInitTimedOut(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isInitialized]);

  // Reset initialization state when successfully initialized
  useEffect(() => {
    if (isInitialized) {
      setInitTimedOut(false);
      setInitAttempts(0);
    }
  }, [isInitialized]);

  // Handle manual retry
  const handleRetry = () => {
    setInitAttempts(prev => prev + 1);
    setInitTimedOut(false);
    
    console.log("Manually retrying ElevenLabs initialization");
    
    // Attempt to start conversation again
    startConversation().catch(err => {
      console.error("Retry failed:", err);
      setInitTimedOut(true);
    });
  };

  // CSS classes for the container
  const containerClasses = `elevenlabs-widget-container ${className}`;

  return (
    <div className={containerClasses}>
      {isInitialized ? (
        <ConversationControls
          status={conversation.status}
          isSpeaking={conversation.isSpeaking}
          isListening={isListening}
          isPaused={isPaused}
          language={language}
          accentColor={accentColor}
          onStart={startConversation}
          onToggleLanguage={toggleLanguage}
          email={email}
          onEmailChange={setEmail}
        />
      ) : (
        <div className="elevenlabs-loading">
          {initTimedOut ? 
            <div>
              <p>Voice conversation initialization is taking longer than expected.</p>
              <div className="flex gap-2 mt-2">
                <Button 
                  variant="outline"
                  className="bg-blue-500 text-white hover:bg-blue-600"
                  onClick={handleRetry}
                >
                  Try Again
                </Button>
                <Button 
                  variant="outline"
                  className="text-gray-700"
                  onClick={() => window.location.reload()}
                >
                  Refresh Page
                </Button>
              </div>
            </div>
            : 
            "Initializing voice conversation..."
          }
        </div>
      )}
    </div>
  );
};

export default ElevenLabsWidget;
