
import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mic } from 'lucide-react';

// Import refactored components
import HeroSection from '@/components/self-discovery/HeroSection';
import VideoDemoSection from '@/components/self-discovery/VideoDemoSection';
import GrowthAreasSection from '@/components/self-discovery/GrowthAreasSection';
import FAQSection from '@/components/self-discovery/FAQSection';
import FeaturesSection from '@/components/self-discovery/FeaturesSection';
import TestimonialsSection from '@/components/self-discovery/TestimonialsSection';
import CTASection from '@/components/self-discovery/CTASection';
import DisclaimerSection from '@/components/self-discovery/DisclaimerSection';

const SelfDiscovery = () => {
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

export default SelfDiscovery;
