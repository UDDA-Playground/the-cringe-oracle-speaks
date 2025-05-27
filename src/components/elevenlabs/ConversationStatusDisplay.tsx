
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ConversationStatusDisplayProps {
  status: string;
  isSpeaking: boolean;
  connectionAttempts: number;
}

const ConversationStatusDisplay: React.FC<ConversationStatusDisplayProps> = ({
  status,
  isSpeaking,
  connectionAttempts
}) => {
  const { language } = useLanguage();

  // Render sound wave animation
  const SoundWaveAnimation = () => (
    <div className="flex items-center gap-1">
      <div className="w-1 h-4 bg-current animate-pulse rounded-full"></div>
      <div className="w-1 h-6 bg-current animate-pulse rounded-full" style={{animationDelay: '0.1s'}}></div>
      <div className="w-1 h-4 bg-current animate-pulse rounded-full" style={{animationDelay: '0.2s'}}></div>
    </div>
  );

  // Determine current status for display
  const getStatusDisplay = () => {
    if (status === 'connecting') {
      return language === 'sv' ? 'Ansluter...' : 'Connecting...';
    }
    
    if (status === 'connected') {
      if (isSpeaking) {
        return language === 'sv' ? 'AI talar...' : 'AI speaking...';
      }
      return language === 'sv' ? 'Redo att prata' : 'Ready to talk';
    }
    
    return language === 'sv' ? 'Klicka för att starta' : 'Click to start';
  };

  const isConnected = status === 'connected';
  const isDisconnected = status === 'disconnected';

  return (
    <div className="flex-1 p-4 overflow-y-auto flex items-center justify-center min-h-[200px]">
      <div className="text-center">
        <div className="mb-4 relative">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
            {isSpeaking && isConnected && (
              <div className="absolute inset-0 flex items-center justify-center">
                <SoundWaveAnimation />
              </div>
            )}
            <MessageSquare className="h-12 w-12 text-gray-400" />
          </div>
        </div>
        
        <p className="text-gray-500">
          {getStatusDisplay()}
        </p>
        
        {connectionAttempts > 0 && isDisconnected && (
          <p className="text-orange-500 text-sm mt-2">
            {language === 'sv' ? `Återansluter (försök ${connectionAttempts}/3)` : `Reconnecting (${connectionAttempts}/3)`}
          </p>
        )}
      </div>
    </div>
  );
};

export default ConversationStatusDisplay;
