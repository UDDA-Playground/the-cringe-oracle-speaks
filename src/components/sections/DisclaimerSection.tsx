
import React from 'react';

const DisclaimerSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 relative overflow-hidden">
      <div className="absolute -right-20 top-0 w-40 h-40 bg-udda-yellow/20 rounded-full"></div>
      <div className="absolute -left-20 bottom-0 w-40 h-40 bg-udda-green/20 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm funky-border">
          <h3 className="font-cabinet font-bold text-xl mb-4 text-center">
            <span className="bg-yellow-100 px-2 py-1 rounded rotate-1 inline-block">Important: We&apos;re Not Therapists</span>
          </h3>
          <p className="text-gray-600 mb-4">
            UDDA is designed to facilitate helpful conversations and provide general guidance for everyday 
            mental wellness. We&apos;re here to help you talk through issues, but we&apos;re not a replacement for 
            professional mental health care.
          </p>
          <p className="text-gray-600 font-medium">
            If you&apos;re experiencing a crisis or need clinical support, please contact a licensed mental 
            health professional or call your local emergency services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
