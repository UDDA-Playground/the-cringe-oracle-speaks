
import React from 'react';
import { Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  handleStartConversation: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ handleStartConversation }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-6">
            Ready to discover more about yourself?
          </h2>
          <p className="text-xl mb-8">
            Start your free 10-minute session today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="high-contrast-yellow" 
              className="text-gray-900 font-bold text-lg"
              onClick={handleStartConversation}
            >
              <Mic className="w-5 h-5" /> Start Talking Now
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/20">
              Learn more about our pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
