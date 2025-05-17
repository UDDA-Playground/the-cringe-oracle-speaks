
import React, { useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import ConversationsSection from '../components/sections/ConversationsSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import DisclaimerSection from '../components/sections/DisclaimerSection';
import PricingSection from '../components/PricingSection';
import CtaSection from '../components/sections/CtaSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import { useSEO } from '@/hooks/useSEO';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  // Use our SEO hook with targeted keywords
  const { loading: seoLoading } = useSEO('/', {
    title: 'UDDA - AI Voice Chats for Personality Tests and Mental Wellbeing',
    meta_description: 'Discover yourself with AI-powered personality tests and coaching conversations. Not therapy, just absurdly helpful voice chats for mental wellbeing.',
    keywords: 'personality tests, AI coaching, voice chats, mental wellbeing, self-discovery, personality assessment, AI conversations',
    og_title: 'AI-Powered Personality Tests & Coaching Voice Chats',
    og_description: 'Take personality tests, get AI coaching, and improve your mental wellbeing with our voice chat platform.',
    structured_data: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "UDDA - AI Voice Chats",
      "applicationCategory": "HealthApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "AI-powered personality tests and coaching voice chats for mental wellbeing"
    }
  });
  
  // Log page view for analytics
  useEffect(() => {
    const logPageView = async () => {
      try {
        await supabase.from('page_views').insert({
          page_path: '/',
          page_title: 'UDDA Home',
          referrer: document.referrer,
          user_agent: navigator.userAgent,
        });
      } catch (err) {
        console.error('Failed to log page view:', err);
      }
    };
    
    logPageView();
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      <HeroSection />
      <FeaturesSection />
      <ConversationsSection />
      <TestimonialsSection />
      <DisclaimerSection />
      <PricingSection />
      <CtaSection />
      
      <Footer />
    </div>
  );
};

export default Index;
