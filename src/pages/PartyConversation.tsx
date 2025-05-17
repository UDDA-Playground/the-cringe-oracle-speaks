
import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import refactored components
import HeroSection from '@/components/party-conversation/HeroSection';
import VideoDemoSection from '@/components/party-conversation/VideoDemoSection';
import WhyLoveItSection from '@/components/party-conversation/WhyLoveItSection';
import FAQSection from '@/components/party-conversation/FAQSection';
import FeaturesSection from '@/components/party-conversation/FeaturesSection';
import TestimonialsSection from '@/components/party-conversation/TestimonialsSection';
import CTASection from '@/components/party-conversation/CTASection';
import DisclaimerSection from '@/components/party-conversation/DisclaimerSection';

const PartyConversation = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      <HeroSection />
      <VideoDemoSection />
      <WhyLoveItSection />
      <FAQSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <DisclaimerSection />
      
      <Footer />
    </div>
  );
};

export default PartyConversation;
