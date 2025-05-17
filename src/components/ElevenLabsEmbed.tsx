
import React, { useEffect, useRef } from 'react';

interface ElevenLabsEmbedProps {
  agentId: string;
  className?: string;
}

const ElevenLabsEmbed: React.FC<ElevenLabsEmbedProps> = ({ agentId, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
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
  }, [agentId]);

  return (
    <div 
      ref={containerRef}
      className={className}
    ></div>
  );
};

export default ElevenLabsEmbed;
