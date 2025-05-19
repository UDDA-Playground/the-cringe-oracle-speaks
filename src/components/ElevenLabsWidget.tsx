
import React from 'react';
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
  preventFloatingWidget = true
}) => {
  // Apply CSS styles
  useConversationStyles();
  
  // Configure floating widget
  useFloatingWidgetConfig(preventFloatingWidget);
  
  // Get conversation management
  const {
    conversation,
    isInitialized,
    language,
    startConversation,
    toggleLanguage
  } = useElevenLabsConversation(agentId);

  // CSS classes for the container
  const containerClasses = `elevenlabs-widget-container ${className}`;

  return (
    <div className={containerClasses}>
      {isInitialized ? (
        <ConversationControls
          status={conversation.status}
          isSpeaking={conversation.isSpeaking}
          language={language}
          onStart={startConversation}
          onToggleLanguage={toggleLanguage}
        />
      ) : (
        <div className="elevenlabs-loading">Initializing voice conversation...</div>
      )}
    </div>
  );
};

export default ElevenLabsWidget;
