
import React, { useEffect, useRef } from 'react';

interface ElevenLabsWidgetProps {
  agentId: string;
  className?: string;
}

const ElevenLabsWidget: React.FC<ElevenLabsWidgetProps> = ({ agentId, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the ElevenLabs script if it's not already loaded
    if (!document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }

    // Create and append the widget element when the script is loaded
    const checkAndCreateWidget = () => {
      if (containerRef.current && containerRef.current.childElementCount === 0) {
        // Create the widget element once the script is loaded
        const widget = document.createElement('elevenlabs-convai');
        widget.setAttribute('agent-id', agentId);
        containerRef.current.appendChild(widget);
      }
    };

    // Initial check
    checkAndCreateWidget();

    // Set up an interval to check until the element is successfully created
    // This is needed because the script may not be immediately loaded
    const interval = setInterval(checkAndCreateWidget, 300);

    // Clear interval after 5 seconds (assuming script should be loaded by then)
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      // We don't remove the script as it might be used by other components
    };
  }, [agentId]);

  return <div ref={containerRef} className={className}></div>;
};

export default ElevenLabsWidget;
