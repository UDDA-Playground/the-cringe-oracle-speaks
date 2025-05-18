
import React, { useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSEO } from '@/hooks/useSEO';
import { supabase } from "@/integrations/supabase/client";

// Import personality test specific components
import HeroSection from '@/components/personality-test/HeroSection';
import TestExamplesSection from '@/components/personality-test/TestExamplesSection';
import HowItWorksSection from '@/components/personality-test/HowItWorksSection';
import FAQSection from '@/components/personality-test/FAQSection';
import TestimonialsSection from '@/components/personality-test/TestimonialsSection';
import CtaSection from '@/components/personality-test/CtaSection';
import DisclaimerSection from '@/components/personality-test/DisclaimerSection';

const PersonalityTest = () => {
  // Use our SEO hook with targeted keywords for personality tests
  const { loading: seoLoading } = useSEO('/personality-test', {
    title: 'Discover Your Weird Side - Fun AI Personality Test | UDDA',
    meta_description: 'Take our fun AI personality test to reveal your weird side, hidden traits, secret fears & true motivations. Free for 10 minutes, no signup required.',
    keywords: 'weird personality test, AI personality test, discover hidden traits, fun personality assessment, voice personality test, self-discovery, phobia assessment',
    og_title: 'The Weirdness Test - Discover Your Strange Side with AI | UDDA',
    og_description: 'Our AI-powered personality test reveals your weird side, hidden traits, secret fears & true motivations through a fun voice conversation.',
    structured_data: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "UDDA Weirdness Test",
      "applicationCategory": "LifestyleApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Fun AI-powered personality test that reveals your weird side and hidden traits"
    }
  });
  
  // Log page view for analytics
  useEffect(() => {
    const logPageView = async () => {
      try {
        await supabase.from('page_views').insert({
          page_path: '/personality-test',
          page_title: 'Personality Test',
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
      <TestExamplesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CtaSection />
      <DisclaimerSection />
      
      <Footer />
    </div>
  );
};

export default PersonalityTest;
