
import React from 'react';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

interface ConversationControlButtonsProps {
  status: string;
  isSpeaking: boolean;
  onStart: () => void;
  onEnd: () => void;
  onReset: () => void;
  accentColor: string;
}

const ConversationControlButtons: React.FC<ConversationControlButtonsProps> = ({
  status,
  isSpeaking,
  onStart,
  onEnd,
  onReset,
  accentColor
}) => {
  const { language } = useLanguage();

  // Button color based on accent
  const getButtonColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-500 hover:bg-blue-600',
      purple: 'bg-purple-500 hover:bg-purple-600',
      green: 'bg-green-500 hover:bg-green-600',
      yellow: 'bg-yellow-500 hover:bg-yellow-600',
      orange: 'bg-orange-500 hover:bg-orange-600'
    };
    return colorMap[color] || colorMap.blue;
  };

  const buttonColor = getButtonColor(accentColor);

  // Render sound wave animation
  const SoundWaveAnimation = () => (
    <div className="flex items-center gap-1">
      <div className="w-1 h-4 bg-current animate-pulse rounded-full"></div>
      <div className="w-1 h-6 bg-current animate-pulse rounded-full" style={{animationDelay: '0.1s'}}></div>
      <div className="w-1 h-4 bg-current animate-pulse rounded-full" style={{animationDelay: '0.2s'}}></div>
    </div>
  );

  const isConnecting = status === 'connecting';
  const isConnected = status === 'connected';
  const isDisconnected = status === 'disconnected';

  return (
    <div className="flex mb-2 gap-2">
      {isDisconnected ? (
        <Button
          type="button"
          onClick={onStart}
          className={`${buttonColor} flex-1 relative overflow-hidden`}
          disabled={isConnecting}
        >
          {isConnecting ? (
            <>
              <Loader2 size={18} className="mr-2 animate-spin" />
              <span>{language === 'sv' ? 'Ansluter...' : 'Connecting...'}</span>
            </>
          ) : (
            <>
              <Mic size={18} className="mr-2" />
              <span>{language === 'sv' ? 'Starta Konversation' : 'Start Conversation'}</span>
            </>
          )}
        </Button>
      ) : (
        <Button
          type="button"
          onClick={onEnd}
          className="bg-red-500 hover:bg-red-600 flex-1 relative overflow-hidden"
        >
          {isSpeaking && isConnected ? (
            <>
              <SoundWaveAnimation />
              <span className="ml-2">{language === 'sv' ? 'AI Talar' : 'AI Speaking'}</span>
            </>
          ) : (
            <>
              <MicOff size={18} className="mr-2" />
              <span>{language === 'sv' ? 'Stoppa' : 'Stop'}</span>
            </>
          )}
        </Button>
      )}
      
      <Button
        type="button"
        onClick={onReset}
        variant="outline"
      >
        {language === 'sv' ? 'Radera Allt' : 'Delete Everything'}
      </Button>
    </div>
  );
};

export default ConversationControlButtons;
