
import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
          What makes Party Conversation special
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-udda-coral flex items-center justify-center mb-4">
              <span className="text-white text-xl">🎯</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">Uncanny Insight</h3>
            <p className="text-gray-600">
              UDDA analyzes speech patterns, word choice, and tone to reveal hidden dynamics and unspoken feelings.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-udda-coral flex items-center justify-center mb-4">
              <span className="text-white text-xl">😂</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">Hilariously Awkward</h3>
            <p className="text-gray-600">
              Creates just the right amount of delightful discomfort that makes for memorable social moments.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-udda-coral flex items-center justify-center mb-4">
              <span className="text-white text-xl">🔄</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">Group Dynamic Shifter</h3>
            <p className="text-gray-600">
              Often leads to deeper, more authentic conversations after the initial awkward laughter subsides.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
