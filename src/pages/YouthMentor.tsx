
import React, { useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSEO } from '@/hooks/useSEO';
import { supabase } from "@/integrations/supabase/client";

// Import youth mentor specific components
import HeroSection from '@/components/youth-mentor/HeroSection';
import GrowthAreasSection from '@/components/youth-mentor/GrowthAreasSection';
import FAQSection from '@/components/youth-mentor/FAQSection';
import FeaturesSection from '@/components/youth-mentor/FeaturesSection';
import TestimonialsSection from '@/components/youth-mentor/TestimonialsSection';
import CTASection from '@/components/youth-mentor/CTASection';
import DisclaimerSection from '@/components/youth-mentor/DisclaimerSection';
import VideoDemoSection from '@/components/youth-mentor/VideoDemoSection';

const YouthMentor = () => {
  // Use our SEO hook with targeted keywords for youth mentoring
  const { loading: seoLoading } = useSEO('/youth-mentor', {
    title: 'AI Youth Mentor - Personalized Guidance for Teens & Young Adults | UDDA',
    meta_description: 'Our AI Youth Mentor provides evidence-based guidance for ages 10-25 on mental well-being, identity, relationships, and personal growth through engaging voice conversations.',
    keywords: 'youth mentor, AI teen guidance, teen mental well-being, adolescent support, AI coach for teenagers, identity formation, teen resilience, youth development',
    og_title: 'AI Youth Mentor - Supportive Guidance for Teens & Young Adults',
    og_description: 'Evidence-based AI guidance for young people ages 10-25, focusing on mental well-being, identity formation, resilience, and healthy relationships.',
    structured_data: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "UDDA Youth Mentor",
      "description": "AI-powered mentoring and guidance for teenagers and young adults",
      "provider": {
        "@type": "Organization",
        "name": "UDDA"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Teenagers and young adults ages 10-25"
      }
    }
  });
  
  // Log page view for analytics
  useEffect(() => {
    const logPageView = async () => {
      try {
        await supabase.from('page_views').insert({
          page_path: '/youth-mentor',
          page_title: 'Youth Mentor',
          referrer: document.referrer,
          user_agent: navigator.userAgent,
        });
      } catch (err) {
        console.error('Failed to log page view:', err);
      }
    };
    
    logPageView();
    
    // This helps remove any floating widget on this page specifically
    document.querySelectorAll('elevenlabs-convai-button').forEach(widget => {
      widget.parentNode?.removeChild(widget);
    });
    
    // Ensure the global setting is applied
    window.ELEVENLABS_CONVAI_SETTINGS = {
      disableFloatingButton: true
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      <HeroSection />
      <VideoDemoSection />
      <GrowthAreasSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <DisclaimerSection />
      
      <Footer />
    </div>
  );
};

export default YouthMentor;
