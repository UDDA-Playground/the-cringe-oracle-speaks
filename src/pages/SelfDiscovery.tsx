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

const SelfDiscovery = () => {
  // Use our SEO hook
  const { loading: seoLoading } = useSEO('/self-discovery', {
    title: 'Self Discovery - UDDA Mental Health Conversations',
    meta_description: 'Talk through your thoughts and feelings with our AI-powered Self Discovery tool. Not therapy, just absurdly helpful conversations.',
    og_title: 'Self Discovery Tool - Talk Through Your Thoughts',
    og_description: 'Our AI-powered Self Discovery tool helps you explore your thoughts and feelings through guided conversations.'
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
