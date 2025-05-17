
import React, { useEffect, useRef } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

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
      // Create the script element
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.type = 'text/javascript';
      
      // Create the widget element
      const widget = document.createElement('elevenlabs-convai');
      widget.setAttribute('agent-id', agentId);
      
      // Append elements
      containerRef.current.appendChild(widget);
      document.body.appendChild(script);
      
      return () => {
        // Clean up
        document.body.removeChild(script);
        if (containerRef.current && containerRef.current.contains(widget)) {
          containerRef.current.removeChild(widget);
        }
      };
    }
  }, [isOpen, agentId]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl sm:max-w-[800px] p-6">
        <h2 className="font-cabinet font-bold text-xl mb-4">Your conversation with UDDA</h2>
        <div 
          ref={containerRef}
          className="min-h-[400px] w-full"
        ></div>
      </DialogContent>
    </Dialog>
  );
};

export default ElevenLabsConvaiWidget;
