
import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-udda-green/10 via-udda-mint/20 to-udda-green/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-udda-yellow/20 rounded-full -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-udda-lavender/20 rounded-full translate-y-1/2 blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block rotate-2 bg-udda-mint px-4 py-1 rounded-lg mb-4">
            <span className="text-udda-green font-bold">Discover your true self today!</span>
          </div>
          <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-6 section-title">
            Ready to take your personality test?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start with a free 10-minute AI voice coaching session. No credit card required. Get personalized insights about your personality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
