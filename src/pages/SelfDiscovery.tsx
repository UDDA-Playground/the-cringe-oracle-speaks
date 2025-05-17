
import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import refactored components
import HeroSection from '@/components/self-discovery/HeroSection';
import VideoDemoSection from '@/components/self-discovery/VideoDemoSection';
import GrowthAreasSection from '@/components/self-discovery/GrowthAreasSection';
import FAQSection from '@/components/self-discovery/FAQSection';
import FeaturesSection from '@/components/self-discovery/FeaturesSection';
import TestimonialsSection from '@/components/self-discovery/TestimonialsSection';
import CTASection from '@/components/self-discovery/CTASection';
import DisclaimerSection from '@/components/self-discovery/DisclaimerSection';

import { useSEO } from '@/hooks/useSEO';
import { useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

const SelfDiscovery = () => {
  // Use our SEO hook with targeted keywords for personality tests
  const { loading: seoLoading } = useSEO('/self-discovery', {
    title: 'Self Discovery AI Personality Tests & Coaching | UDDA',
    meta_description: 'Take personality tests with our AI-powered Self Discovery tool. Get personalized coaching through voice conversations to uncover strengths and growth areas.',
    keywords: 'personality test, AI personality assessment, self-discovery tool, AI coaching, voice coach, personal growth, mental wellbeing test',
    og_title: 'AI Personality Tests & Voice Coaching | Self Discovery Tool',
    og_description: 'Our AI-powered Self Discovery tool helps you explore your personality and get personalized coaching through guided voice conversations.',
    structured_data: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "UDDA Self Discovery Personality Tests",
      "description": "AI-powered personality tests and coaching through voice conversations",
      "provider": {
        "@type": "Organization",
        "name": "UDDA"
      },
      "serviceType": "Mental Wellbeing",
      "audience": {
        "@type": "Audience",
        "audienceType": "Anyone seeking personal growth"
      }
    }
  });
  
  // Log page view for analytics
  useEffect(() => {
    const logPageView = async () => {
      try {
        await supabase.from('page_views').insert({
          page_path: '/self-discovery',
          page_title: 'Self Discovery',
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
