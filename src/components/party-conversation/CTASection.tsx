
import React from 'react';
import { Mic } from 'lucide-react';
import ElevenLabsWidget from '../ElevenLabsWidget';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-udda-coral to-udda-orange text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-6">
            Ready to spice up your next hangout?
          </h2>
          <p className="text-xl mb-8">
            Start your free 10-minute session today. No credit card required.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
            <h3 className="text-gray-800 font-bold text-xl mb-4">Start talking now</h3>
            <div className="w-full">
              <ElevenLabsWidget 
                agentId="agent_01jvn52jdnfnzt0g6vjwcjghx0" 
                preventFloatingWidget={true}
                accentColor="orange"
              />
            </div>
            <p className="text-gray-600 text-sm mt-4">
              By starting, you agree to our terms and privacy policy. This service is completely free to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
