
import React from 'react';
import { Button } from '@/components/ui/button';
import ElevenLabsWidget from '../ElevenLabsWidget';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400 rounded-full translate-y-1/2 -translate-x-1/3 blur-2xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block rotate-2 bg-white/20 px-4 py-1 rounded-lg mb-4">
            <span className="text-white font-bold">Discover yourself today!</span>
          </div>
          <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-6 section-title">
            Ready to find out how weird you really are?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start with a free 10-minute AI voice coaching session. No credit card required. Get personalized insights about your unique personality traits.
          </p>
          
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto mb-8">
            <h3 className="text-gray-800 font-bold text-xl mb-4">Start talking now</h3>
            <div className="w-full min-h-[300px]">
              <ElevenLabsWidget 
                agentId="agent_01jvnb0nvbezg8btbfwdrgffqp"
                preventFloatingWidget={true}
                accentColor="purple"
              />
            </div>
            <p className="text-gray-600 text-sm mt-4">
              By starting, you agree to our terms and privacy policy. This service is completely free for 10 minutes.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="yellow" size="lg" className="text-lg">
              Take the Weirdness Test Now
            </Button>
            <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg">
              See Pricing Options
            </Button>
          </div>
          
          <p className="mt-8 text-white/80 text-sm max-w-lg mx-auto">
            Join thousands of people who have uncovered surprising insights about their personality. 
            Our AI voice analysis provides a unique perspective you won't find in traditional tests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
