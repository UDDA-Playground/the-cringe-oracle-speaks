
import React from 'react';
import { Mic } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute -left-40 top-20 w-80 h-80 bg-gradient-to-br from-udda-lavender/10 to-transparent rounded-full"></div>
      <div className="absolute -right-40 bottom-20 w-80 h-80 bg-gradient-to-br from-udda-mint/10 to-transparent rounded-full"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-4 section-title">
            How it works
          </h2>
          <p className="text-xl text-gray-600">
            Simple, fast, and weirdly effective. Start talking in seconds.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center funky-card">
            <div className="w-20 h-20 bg-gradient-to-br from-udda-mint to-udda-green rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:rotate-12">
              <span className="font-cabinet font-bold text-2xl text-white">1</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">Choose a conversation</h3>
            <p className="text-gray-600">
              Select the type of conversation that matches your current situation or need
            </p>
          </div>
          <div className="text-center funky-card md:translate-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-udda-blush to-udda-coral rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:-rotate-12">
              <span className="font-cabinet font-bold text-2xl text-white">2</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">Start talking</h3>
            <p className="text-gray-600">
              Click the mic and start speaking. Invite friends if needed for group conversations
            </p>
          </div>
          <div className="text-center funky-card">
            <div className="w-20 h-20 bg-gradient-to-br from-udda-lavender to-udda-purple rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:rotate-12">
              <span className="font-cabinet font-bold text-2xl text-white">3</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">Get insights</h3>
            <p className="text-gray-600">
              Receive real-time feedback, guidance and a summary of your conversation after
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn-primary text-lg relative group">
            <span className="absolute -inset-1 bg-gradient-to-r from-udda-coral via-udda-yellow to-udda-lavender opacity-30 blur-md rounded-full group-hover:opacity-60 transition-opacity"></span>
            <Mic className="w-5 h-5" /> Try it now - Free for 10 minutes
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
