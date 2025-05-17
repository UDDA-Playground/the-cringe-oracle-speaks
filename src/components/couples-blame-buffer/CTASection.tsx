import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Ensure the ElevenLabs script is loaded
    if (!document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }
    
    // Create the widget element once the script is loaded
    const scriptLoaded = () => {
      if (widgetContainerRef.current && !widgetContainerRef.current.querySelector('elevenlabs-convai')) {
        // Using DOM APIs to create the element instead of JSX
        const widgetElement = document.createElement('elevenlabs-convai');
        widgetElement.setAttribute('agent-id', 'cXEiaJLsMXO8XFzOQh8m');
        widgetContainerRef.current.appendChild(widgetElement);
      }
    };
    
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
    if (existingScript) {
      // If script exists, try to create widget right away
      scriptLoaded();
    } else {
      // Otherwise wait for script to load
      const scriptElement = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
      if (scriptElement) {
        scriptElement.addEventListener('load', scriptLoaded);
      }
    }
    
    // Add a setTimeout as a fallback to ensure widget is created
    const timeoutId = setTimeout(scriptLoaded, 1000);
    
    return () => {
      clearTimeout(timeoutId);
      const scriptElement = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
      if (scriptElement) {
        scriptElement.removeEventListener('load', scriptLoaded);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-coral-600 to-coral-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-6">
            Ready to strengthen your relationship?
          </h2>
          <p className="text-xl mb-8">
            Start your free 10-minute session today. No credit card required.
          </p>
          
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-lg mx-auto mb-8">
            <h3 className="font-cabinet font-bold text-xl mb-4 text-coral-700">Start a conversation</h3>
            
            <div className="mb-6">
              {/* Using a ref to append the widget element via JavaScript */}
              <div ref={widgetContainerRef} className="elevenlabs-widget-container" />
            </div>
            
            <p className="text-xs text-gray-500">
              By starting, you agree to our terms and acknowledge that UDDA will record and transcribe
              audio for this session only. GDPR compliant.
            </p>
          </div>
          
          <Button variant="outline" className="bg-white hover:bg-gray-100 text-coral-700">
            Learn more about our approach
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
