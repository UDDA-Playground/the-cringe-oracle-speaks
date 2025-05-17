
import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import refactored components
import HeroSection from '@/components/ex-couple-entanglement/HeroSection';
import VideoDemoSection from '@/components/ex-couple-entanglement/VideoDemoSection';
import GrowthAreasSection from '@/components/ex-couple-entanglement/GrowthAreasSection';
import FAQSection from '@/components/ex-couple-entanglement/FAQSection';
import FeaturesSection from '@/components/ex-couple-entanglement/FeaturesSection';
import TestimonialsSection from '@/components/ex-couple-entanglement/TestimonialsSection';
import CTASection from '@/components/ex-couple-entanglement/CTASection';
import DisclaimerSection from '@/components/ex-couple-entanglement/DisclaimerSection';

const ExCoupleEntanglement = () => {
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

export default ExCoupleEntanglement;
