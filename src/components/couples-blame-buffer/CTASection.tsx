
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-coral-600 to-coral-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-6">
            Ready to strengthen your relationship?
          </h2>
          <p className="text-xl mb-8">
            Start your free 10-minute session today. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
