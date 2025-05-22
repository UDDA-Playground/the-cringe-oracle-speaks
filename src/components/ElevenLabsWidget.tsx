
import React from 'react';
import ElevenlabsConversation from './elevenlabs/ElevenlabsConversation';

interface ElevenLabsWidgetProps {
  agentId: string;
  className?: string;
  pageTitle?: string;
  preventFloatingWidget?: boolean;
  accentColor?: string;
}

/**
 * A React-friendly wrapper for the ElevenLabs Conversational AI
 * Now using our direct API integration instead of the embedded widget
 */
const ElevenLabsWidget: React.FC<ElevenLabsWidgetProps> = ({ 
  agentId, 
  className = "",
  pageTitle,
  preventFloatingWidget = true,
  accentColor = "blue"
}) => {
  return (
    <div className={`elevenlabs-widget-container ${className}`}>
      <ElevenlabsConversation
        agentId={agentId}
        initialPrompt={pageTitle}
        accentColor={accentColor}
      />
    </div>
  );
};

export default ElevenLabsWidget;
