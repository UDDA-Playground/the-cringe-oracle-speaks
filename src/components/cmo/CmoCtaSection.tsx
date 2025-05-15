
import React from 'react';
import { Mic } from 'lucide-react';

const CmoCtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-blue-500/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-300/20 rounded-full -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-300/20 rounded-full translate-y-1/2 blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block rotate-2 bg-blue-100 px-4 py-1 rounded-lg mb-4">
            <span className="text-blue-600 font-bold">Start transforming your marketing today</span>
          </div>
          <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-6 section-title">
            Turn marketing complexity into simple, actionable plans
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start with 10 free minutes. No credit card required. Get a taste of what expert marketing guidance can do for your business.
          </p>
          <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2 mx-auto">
            <Mic className="w-5 h-5" /> Start Your Marketing Conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CmoCtaSection;
