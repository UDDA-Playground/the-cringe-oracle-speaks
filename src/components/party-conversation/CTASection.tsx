
import React from 'react';
import { Mic } from 'lucide-react';

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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-udda-yellow text-gray-900 font-bold text-lg py-3 px-6 rounded-full flex items-center justify-center gap-2">
              <Mic className="w-5 h-5" /> Start Talking Now
            </button>
            <button className="border border-white text-white hover:bg-white/20 py-3 px-6 rounded-full">
              Learn more about our pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
