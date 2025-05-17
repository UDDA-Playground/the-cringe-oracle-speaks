
import React, { useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface ElevenLabsConvaiWidgetProps {
  agentId: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ElevenLabsConvaiWidget: React.FC<ElevenLabsConvaiWidgetProps> = ({
  agentId,
  isOpen,
  onOpenChange
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen && containerRef.current) {
      // Create the widget directly
      const widget = document.createElement('elevenlabs-convai');
      widget.setAttribute('agent-id', agentId);
      
      // Add the widget to the container
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(widget);
      
      // Add the script only if it doesn't exist already
      if (!document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://elevenlabs.io/convai-widget/index.js';
        script.async = true;
        script.type = 'text/javascript';
        document.body.appendChild(script);
      }
    }
  }, [isOpen, agentId]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl sm:max-w-[800px] p-6">
        <DialogTitle className="font-cabinet font-bold text-xl">Your conversation with UDDA</DialogTitle>
        <div 
          ref={containerRef}
          className="min-h-[400px] w-full"
        ></div>
      </DialogContent>
    </Dialog>
  );
};

export default ElevenLabsConvaiWidget;
