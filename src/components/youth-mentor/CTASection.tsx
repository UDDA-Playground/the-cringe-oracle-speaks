
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mic } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-udda-blue to-blue-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-6">
            Ready to start your journey?
          </h2>
          <p className="text-xl mb-8">
            Begin your free 10-minute session with our Youth Mentor today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="default" 
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 flex items-center gap-2"
            >
              <Mic className="w-5 h-5" /> Start Talking Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/20"
            >
              Learn More About Our Approach
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
