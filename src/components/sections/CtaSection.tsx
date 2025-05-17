
import React, { useState } from 'react';
import { Mic } from 'lucide-react';
import ElevenLabsConvaiWidget from '@/components/ElevenLabsConvaiWidget';

const CtaSection: React.FC = () => {
  const [conversationOpen, setConversationOpen] = useState(false);
  
  const handleStartConversation = () => {
    setConversationOpen(true);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-udda-green/10 via-udda-mint/20 to-udda-green/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-udda-yellow/20 rounded-full -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-udda-lavender/20 rounded-full translate-y-1/2 blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block rotate-2 bg-udda-mint px-4 py-1 rounded-lg mb-4">
            <span className="text-udda-green font-bold">It&apos;s weird but it works!</span>
          </div>
          <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-6 section-title">
            Ready to have a weirdly helpful conversation?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start for free. No credit card required. Just 10 minutes of oddly therapeutic chat.
          </p>
          <button 
            className="bg-udda-purple text-white font-bold py-3 px-8 rounded-full hover:bg-udda-lavender transition-colors shadow-md flex items-center justify-center gap-2"
            onClick={handleStartConversation}
          >
            <Mic className="w-5 h-5" /> Start Talking Now
          </button>
        </div>
      </div>
      
      {/* ElevenLabs Conversation Widget */}
      <ElevenLabsConvaiWidget
        agentId="w5c41E3SBg1LvGiUe5I8"
        isOpen={conversationOpen}
        onOpenChange={setConversationOpen}
      />
    </section>
  );
};

export default CtaSection;
