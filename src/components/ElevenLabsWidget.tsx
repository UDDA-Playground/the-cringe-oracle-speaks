
import React, { useState, useEffect } from 'react';
import { useElevenLabsConversation } from './elevenlabs/useElevenLabsConversation';
import { useConversationStyles } from './elevenlabs/useConversationStyles';
import { useFloatingWidgetConfig } from './elevenlabs/useFloatingWidgetConfig';
import ConversationControls from './elevenlabs/ConversationControls';
import { ElevenLabsWidgetProps } from './elevenlabs/types';

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
        setInitTimedOut(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isInitialized]);

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
              <button 
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </button>
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
