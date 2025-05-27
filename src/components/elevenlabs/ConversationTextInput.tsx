
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/context/LanguageContext';

interface ConversationTextInputProps {
  isConnected: boolean;
  accentColor: string;
}

const ConversationTextInput: React.FC<ConversationTextInputProps> = ({
  isConnected,
  accentColor
}) => {
  const { language } = useLanguage();
  const [textInput, setTextInput] = useState('');

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

  // Handle text input submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInput.trim() && isConnected) {
      console.log('Sending text message:', textInput);
      setTextInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <Input
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        placeholder={language === 'sv' ? 'Skriv ett meddelande...' : 'Type a message...'}
        className="mr-2"
        disabled={!isConnected}
      />
      <Button 
        type="submit" 
        className={buttonColor}
        disabled={!textInput.trim() || !isConnected}
      >
        <Send size={18} />
      </Button>
    </form>
  );
};

export default ConversationTextInput;
