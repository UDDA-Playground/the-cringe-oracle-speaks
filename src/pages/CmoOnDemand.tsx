
import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';
import CmoHeader from '../components/cmo/CmoHeader';
import CmoHeroSection from '../components/cmo/CmoHeroSection';
import CmoFeaturesSection from '../components/cmo/CmoFeaturesSection';
import CmoHowItWorksSection from '../components/cmo/CmoHowItWorksSection';
import CmoTestimonialsSection from '../components/cmo/CmoTestimonialsSection';
import CmoDisclaimerSection from '../components/cmo/CmoDisclaimerSection';
import CmoPricingSection from '../components/cmo/CmoPricingSection';
import CmoCtaSection from '../components/cmo/CmoCtaSection';

const CmoOnDemand = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <CmoHeader />
      
      <CmoHeroSection />
      <CmoFeaturesSection />
      <CmoHowItWorksSection />
      <CmoTestimonialsSection />
      <CmoDisclaimerSection />
      <CmoPricingSection />
      <CmoCtaSection />
      
      <Footer />
    </div>
  );
};

export default CmoOnDemand;
