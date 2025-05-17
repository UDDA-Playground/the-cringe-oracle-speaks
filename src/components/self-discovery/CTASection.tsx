
import React from 'react';
import { Button } from '@/components/ui/button';
import ElevenLabsEmbed from '@/components/ElevenLabsEmbed';

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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="w-full sm:w-auto">
              <ElevenLabsEmbed 
                agentId="agent_01jvfdv8ybemj84w5zb4yjav5y"
                className="min-h-12 w-full sm:w-[200px]"
              />
            </div>
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
