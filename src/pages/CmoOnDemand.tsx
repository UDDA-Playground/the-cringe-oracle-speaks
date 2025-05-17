
import React, { useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';
import CmoHeader from '../components/cmo/CmoHeader';
import CmoHeroSection from '../components/cmo/CmoHeroSection';
import CmoFeaturesSection from '../components/cmo/CmoFeaturesSection';
import CmoHowItWorksSection from '../components/cmo/CmoHowItWorksSection';
import CmoTestimonialsSection from '../components/cmo/CmoTestimonialsSection';
import CmoEmotionalBenefitsSection from '../components/cmo/CmoEmotionalBenefitsSection';
import CmoFaqSection from '../components/cmo/CmoFaqSection';
import CmoDisclaimerSection from '../components/cmo/CmoDisclaimerSection';
import CmoPricingSection from '../components/cmo/CmoPricingSection';
import CmoCtaSection from '../components/cmo/CmoCtaSection';

const CmoOnDemand = () => {
  // Add meta robots tag to prevent indexing
  useEffect(() => {
    // Create or update robots meta tag
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute('content', 'noindex, nofollow');
    
    // Clean up when component unmounts
    return () => {
      const currentRobotsTag = document.querySelector('meta[name="robots"]');
      if (currentRobotsTag) {
        // Instead of removing, reset to default indexable state when navigating away
        currentRobotsTag.setAttribute('content', 'index, follow');
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <CmoHeader />
      
      <CmoHeroSection />
      <CmoTestimonialsSection />
      <CmoFeaturesSection />
      <CmoHowItWorksSection />
      <CmoEmotionalBenefitsSection />
      <CmoPricingSection />
      <CmoCtaSection />
      <CmoFaqSection />
      <CmoDisclaimerSection />
      
      <Footer />
    </div>
  );
};

export default CmoOnDemand;
