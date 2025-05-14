
import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import ConversationsSection from '../components/sections/ConversationsSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import DisclaimerSection from '../components/sections/DisclaimerSection';
import PricingSection from '../components/PricingSection';
import CtaSection from '../components/sections/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      <HeroSection />
      <ConversationsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <DisclaimerSection />
      <PricingSection />
      <CtaSection />
      
      <Footer />
    </div>
  );
};

export default Index;
