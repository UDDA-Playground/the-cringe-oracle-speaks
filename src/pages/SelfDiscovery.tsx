
import React, { useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ElevenLabsConvaiWidget from '@/components/ElevenLabsConvaiWidget';

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
  const [conversationOpen, setConversationOpen] = useState(false);

  const handleStartConversation = () => {
    setConversationOpen(true);
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      <HeroSection handleStartConversation={handleStartConversation} />
      <VideoDemoSection />
      <GrowthAreasSection />
      <FAQSection />
      <FeaturesSection />
      <TestimonialsSection handleStartConversation={handleStartConversation} />
      <CTASection handleStartConversation={handleStartConversation} />
      <DisclaimerSection />
      
      <Footer />

      {/* ElevenLabs Conversation Widget */}
      <ElevenLabsConvaiWidget
        agentId="w5c41E3SBg1LvGiUe5I8"
        isOpen={conversationOpen}
        onOpenChange={setConversationOpen}
      />
    </div>
  );
};

export default SelfDiscovery;
