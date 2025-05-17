
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductExperienceSection from './ProductExperienceSection';

const HeroSection: React.FC = () => {
  const [showExperiences, setShowExperiences] = useState(false);
  
  const scrollToConversations = () => {
    const element = document.getElementById('conversations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowExperiences(true);
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block -rotate-2 bg-udda-yellow/20 px-4 py-1 rounded-lg mb-4">
            <span className="text-udda-coral font-bold">AI Personality Tests & Coaching Voice Chats</span>
          </div>
          <h1 className="font-cabinet font-black text-5xl md:text-7xl mb-6 leading-tight rotate-1">
            Discover yourself with 
            <span className="bg-gradient-to-r from-udda-purple via-udda-coral to-udda-yellow bg-clip-text text-transparent"> AI voice coaching</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-700 -rotate-1">
            Take personality tests and get personalized coaching through AI voice conversations. 
            Not therapy. Just absurdly helpful insights when you need them.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <span className="inline-flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full shadow-sm text-sm">
              <span className="text-udda-green">✓</span> 
              Personality Insights
            </span>
            <span className="inline-flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full shadow-sm text-sm">
              <span className="text-udda-green">✓</span> 
              Personal Growth Coaching
            </span>
            <span className="inline-flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full shadow-sm text-sm">
              <span className="text-udda-green">✓</span> 
              Voice Powered Assessments
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToConversations}
              className="bg-white text-black font-bold shadow-md hover:bg-gray-50 border border-gray-100 h-11 rounded-md px-8 inline-flex items-center justify-center"
            >
              Find Your Personality Test
            </button>
          </div>
          
          {showExperiences && <ProductExperienceSection />}
          
          <p className="text-sm text-gray-500 mt-6">
            Proudly European 🇪🇺 · GDPR Compliant · Not a replacement for licensed therapy
          </p>
          
          {/* Fun floating elements */}
          <div className="hidden md:block absolute top-20 right-[10%] w-16 h-16 bg-udda-yellow/30 rounded-full animate-float" style={{animationDelay: '1.2s'}}></div>
          <div className="hidden md:block absolute bottom-20 left-[5%] w-20 h-20 bg-udda-mint/30 rounded-full animate-pulse-soft" style={{animationDelay: '0.8s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
