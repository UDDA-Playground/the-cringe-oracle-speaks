
import React, { useState, useEffect } from 'react';
import { useVoicePlayerState } from './elevenlabs/useVoicePlayerState';
import { useConversationStyles } from './elevenlabs/useConversationStyles';
import { useFloatingWidgetConfig } from './elevenlabs/useFloatingWidgetConfig';
import ConversationControls from './elevenlabs/ConversationControls';
import { ElevenLabsWidgetProps } from './elevenlabs/types';
import { Button } from '@/components/ui/button';
import { useElevenLabsConversation } from './elevenlabs/useElevenLabsConversation';

/**
 * A React-friendly wrapper for the ElevenLabs Conversational AI
 */
const ElevenLabsWidget: React.FC<ElevenLabsWidgetProps> = ({ 
  agentId, 
  className = "",
  pageTitle,
  preventFloatingWidget = true,
  accentColor = "blue"
}) => {
  // Apply CSS styles
  useConversationStyles();
  
  // Configure floating widget
  useFloatingWidgetConfig(preventFloatingWidget);
  
  // Voice player state
  const voicePlayerState = useVoicePlayerState();
  
  // Get conversation management with voice player state
  const {
    conversation,
    isInitialized,
    language,
    startConversation,
    toggleLanguage,
    sessionId,
    transcript,
    initError
  } = useElevenLabsConversation(
    agentId, 
    voicePlayerState.userEmail,
    voicePlayerState.updateListeningState,
    voicePlayerState.updateSpeakingState
  );

  // Set a timeout to show a message if initialization takes too long
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isInitialized && !voicePlayerState.connectionInProgress) {
        console.log("ElevenLabs initialization timed out");
        voicePlayerState.handleInitTimeout();
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [isInitialized, voicePlayerState.connectionInProgress]);

  // Reset initialization state when successfully initialized
  useEffect(() => {
    if (isInitialized) {
      voicePlayerState.resetInitState();
    }
  }, [isInitialized]);

  // Handle manual retry
  const handleRetry = () => {
    voicePlayerState.resetInitState();
    
    console.log("Manually retrying ElevenLabs initialization");
    
    // Attempt to start conversation again
    startConversation().catch(err => {
      console.error("Retry failed:", err);
      voicePlayerState.handleInitTimeout();
    });
  };

  // CSS classes for the container
  const containerClasses = `elevenlabs-widget-container ${className}`;

  return (
    <div className={containerClasses}>
      {isInitialized ? (
        <ConversationControls
          status={conversation.status}
          isSpeaking={voicePlayerState.isSpeaking}
          isListening={voicePlayerState.isListening}
          isPaused={voicePlayerState.isPaused}
          language={language}
          accentColor={accentColor}
          onStart={startConversation}
          onToggleLanguage={toggleLanguage}
          email={voicePlayerState.userEmail}
          onEmailChange={voicePlayerState.updateEmail}
        />
      ) : (
        <div className="elevenlabs-loading">
          {voicePlayerState.initTimedOut ? 
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
              {initError && <p className="text-xs text-red-500 mt-2">Error: {initError.message}</p>}
            </div>
            : 
            voicePlayerState.connectionInProgress ? 
            "Initializing voice conversation..." : 
            "Click to initialize conversation"
          }
        </div>
      )}
    </div>
  );
};

export default ElevenLabsWidget;
