
import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import refactored components
import HeroSection from '@/components/couples-blame-buffer/HeroSection';
import VideoDemoSection from '@/components/couples-blame-buffer/VideoDemoSection';
import GrowthAreasSection from '@/components/couples-blame-buffer/GrowthAreasSection';
import FAQSection from '@/components/couples-blame-buffer/FAQSection';
import FeaturesSection from '@/components/couples-blame-buffer/FeaturesSection';
import TestimonialsSection from '@/components/couples-blame-buffer/TestimonialsSection';
import CTASection from '@/components/couples-blame-buffer/CTASection';
import DisclaimerSection from '@/components/couples-blame-buffer/DisclaimerSection';

const CouplesBlameBuffer = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      <HeroSection />
      <VideoDemoSection />
      <GrowthAreasSection />
      <FAQSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <DisclaimerSection />
      
      <Footer />
    </div>
  );
};

export default CouplesBlameBuffer;
