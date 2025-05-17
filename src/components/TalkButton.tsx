
import React from 'react';
import { Button } from '@/components/ui/button';

interface TalkButtonProps {
  onClick: () => void;
  variant?: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

const TalkButton: React.FC<TalkButtonProps> = ({ 
  onClick, 
  variant = "logo", 
  className = "",
  size = "lg" 
}) => {
  return (
    <Button 
      variant={variant as any} 
      size={size} 
      className={`w-full ${className}`}
      onClick={onClick}
    >
      <img 
        src="/lovable-uploads/47cdb602-8198-43d1-aafc-392ca5669df0.png" 
        alt="UDDA Logo"
        className="h-6 mr-2"
      />
      Start Talking
    </Button>
  );
};

export default TalkButton;
