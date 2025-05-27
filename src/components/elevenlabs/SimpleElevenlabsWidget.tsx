
import React from 'react';
import { useElevenLabsConnection } from './useElevenLabsConnection';
import ConversationStatusDisplay from './ConversationStatusDisplay';
import ConversationControlButtons from './ConversationControlButtons';
import ConversationTextInput from './ConversationTextInput';

interface SimpleElevenlabsWidgetProps {
  agentId: string;
  accentColor?: string;
  className?: string;
}

const SimpleElevenlabsWidget: React.FC<SimpleElevenlabsWidgetProps> = ({
  agentId,
  accentColor = 'blue',
  className = ''
}) => {
  const {
    conversation,
    isInitialized,
    connectionAttempts,
    startConversation,
    endConversation,
    resetConversation
  } = useElevenLabsConnection({ agentId });

  const isConnected = conversation.status === 'connected';

  return (
    <div className={`flex flex-col h-full bg-white rounded-lg shadow ${className}`}>
      {/* Voice conversation visualization area */}
      <ConversationStatusDisplay
        status={conversation.status}
        isSpeaking={conversation.isSpeaking}
        connectionAttempts={connectionAttempts}
      />
      
      {/* Controls */}
      <div className="p-4 border-t">
        <ConversationControlButtons
          status={conversation.status}
          isSpeaking={conversation.isSpeaking}
          onStart={startConversation}
          onEnd={endConversation}
          onReset={resetConversation}
          accentColor={accentColor}
        />
        
        <ConversationTextInput
          isConnected={isConnected}
          accentColor={accentColor}
        />
      </div>
    </div>
  );
};

export default SimpleElevenlabsWidget;
