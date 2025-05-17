
import React, { useEffect } from 'react';
import { User, Clock, Euro } from 'lucide-react';

const StartNowCard: React.FC = () => {
  // Add effect to load the ElevenLabs script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Clean up when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
      <h2 className="font-cabinet font-bold text-2xl mb-4 text-green-700">Start now</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <User size={20} className="text-green-700 mr-2" />
          <p>Private one-on-one conversation</p>
        </div>
        <div className="flex items-center">
          <Clock size={20} className="text-green-700 mr-2" />
          <p>Free for 10 minutes daily</p>
        </div>
        <div className="flex items-center">
          <Euro size={20} className="text-green-700 mr-2" />
          <p>€6.95 for 24h unlimited access</p>
        </div>
      </div>
      
      {/* ElevenLabs widget */}
      <div className="mb-4">
        <elevenlabs-convai agent-id="w5c41E3SBg1LvGiUe5I8"></elevenlabs-convai>
      </div>
      
      <p className="text-xs text-gray-500">
        By starting, you agree to our terms and acknowledge that UDDA will record and transcribe 
        audio for this session only. GDPR compliant.
      </p>
    </div>
  );
};

export default StartNowCard;
