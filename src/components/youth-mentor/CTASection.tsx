
import React from 'react';
import { Button } from '@/components/ui/button';
import ElevenLabsWidget from '../ElevenLabsWidget';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-udda-blue to-blue-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-6">
            Ready to start your journey?
          </h2>
          <p className="text-xl mb-8">
            Begin your session with our Youth Mentor today.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
            <h3 className="text-gray-800 font-bold text-xl mb-4">Start talking now</h3>
            <div className="w-full">
              <ElevenLabsWidget 
                agentId="agent_01jvn52jdnfnzt0g6vjwcjghx0" 
                preventFloatingWidget={true}
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
