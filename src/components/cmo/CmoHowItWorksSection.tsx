
import React from 'react';
import { Mic } from 'lucide-react';

const CmoHowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute -left-40 top-20 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full"></div>
      <div className="absolute -right-40 bottom-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-4 section-title">
            How it works
          </h2>
          <p className="text-xl text-gray-600">
            From marketing confusion to clear strategy in minutes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center funky-card">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:rotate-12">
              <span className="font-cabinet font-bold text-2xl text-white">1</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">Speak with your CMO</h3>
            <p className="text-gray-600">
              Share your marketing challenges, goals and current efforts in a natural voice conversation
            </p>
          </div>
          <div className="text-center funky-card md:translate-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:-rotate-12">
              <span className="font-cabinet font-bold text-2xl text-white">2</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">Get actionable advice</h3>
            <p className="text-gray-600">
              Receive clear, strategic recommendations based on proven marketing frameworks and industry data
            </p>
          </div>
          <div className="text-center funky-card">
            <div className="w-20 h-20 bg-gradient-to-br from-udda-coral to-udda-orange rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:rotate-12">
              <span className="font-cabinet font-bold text-2xl text-white">3</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">Implement with confidence</h3>
            <p className="text-gray-600">
              Execute your marketing plans with clarity and conviction, returning for guidance whenever needed
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white text-lg font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors shadow-md relative group flex items-center justify-center gap-2">
            <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-udda-coral opacity-30 blur-md rounded-full group-hover:opacity-60 transition-opacity"></span>
            <Mic className="w-5 h-5" /> Try it now - Free for 10 minutes
          </button>
        </div>
      </div>
    </section>
  );
};

export default CmoHowItWorksSection;
