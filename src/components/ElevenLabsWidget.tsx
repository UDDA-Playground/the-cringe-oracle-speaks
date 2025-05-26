
import React from 'react';
import SimpleElevenlabsWidget from './elevenlabs/SimpleElevenlabsWidget';

interface ElevenLabsWidgetProps {
  agentId: string;
  className?: string;
  pageTitle?: string;
  preventFloatingWidget?: boolean;
  accentColor?: string;
}

/**
 * A React-friendly wrapper for the ElevenLabs Conversational AI
 * Now using our simplified direct API integration
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
      <SimpleElevenlabsWidget
        agentId={agentId}
        accentColor={accentColor}
      />
    </div>
  );
};

export default ElevenLabsWidget;
