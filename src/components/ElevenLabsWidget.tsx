
import React from 'react';
import StandardConversationPlayer from './elevenlabs/StandardConversationPlayer';

interface ElevenLabsWidgetProps {
  agentId: string;
  className?: string;
  pageTitle?: string;
  preventFloatingWidget?: boolean;
  accentColor?: string;
}

/**
 * A React-friendly wrapper for the ElevenLabs Conversational AI
 * Now using our standardized conversation player across all pages
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
      <StandardConversationPlayer
        agentId={agentId}
        accentColor={accentColor}
      />
    </div>
  );
};

export default ElevenLabsWidget;
