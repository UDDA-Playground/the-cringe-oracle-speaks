
import React from 'react';
import { Button } from '@/components/ui/button';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';

const CTASection: React.FC = () => {
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
          
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-lg mx-auto mb-8">
            <h3 className="font-cabinet font-bold text-xl mb-4 text-green-700">Start a conversation</h3>
            
            <div className="mb-6">
              {/* Using our enhanced ElevenLabsWidget */}
              <ElevenLabsWidget 
                agentId="CnBwaAX2hXt5v2L6m8g3" 
                pageTitle="Self Discovery" 
                className="w-full"
                accentColor="green"
              />
            </div>
            
            <p className="text-xs text-gray-500">
              By starting, you agree to our terms and acknowledge that UDDA will record and transcribe
              audio for this session only. GDPR compliant.
            </p>
          </div>
          
          <Button variant="outline" className="bg-white hover:bg-gray-100 text-green-700">
            Learn more about our approach
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
