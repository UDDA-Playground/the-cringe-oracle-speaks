
import React from 'react';
import { Check } from 'lucide-react';

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  color?: string;
  gradient?: string;
  rotateClass?: string;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  period,
  description,
  features,
  isPopular = false,
  buttonText = "Get Started",
  color = "bg-udda-green",
  gradient = "from-udda-green to-udda-mint",
  rotateClass = ""
}) => {
  return (
    <div className={`relative ${rotateClass} transform transition-all duration-300 hover:rotate-0`}>
      <div className={`rounded-2xl p-0.5 ${isPopular ? `bg-gradient-to-br ${gradient} shadow-lg` : 'bg-gray-100'}`}>
        {isPopular && (
          <span className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-udda-yellow to-udda-orange px-3 py-1 rounded-full text-sm font-bold shadow-md">
            Most Popular
          </span>
        )}
        <div className="bg-white h-full rounded-2xl p-8 flex flex-col relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -right-6 -top-6 w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 z-0"></div>
          <div className="absolute -left-6 -bottom-6 w-16 h-16 rounded-full bg-gradient-to-tl from-white/10 to-white/5 z-0"></div>
          
          <h3 className="font-cabinet text-xl font-bold">{name}</h3>
          <div className="mt-4 mb-2 flex items-baseline">
            <span className="font-cabinet text-4xl font-bold">{price}</span>
            <span className="text-gray-500 ml-2">{period}</span>
          </div>
          <p className="text-gray-600 mb-6">{description}</p>
          <ul className="space-y-3 mb-8 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className={`text-${color.replace('bg-', '')} mr-2 flex-shrink-0 mt-1`} size={18} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button className={`bg-gradient-to-r ${gradient} hover:opacity-90 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-lg hover:-translate-y-1`}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-100 to-transparent"></div>
      
      {/* Fun elements */}
      <div className="absolute right-0 top-1/3 w-32 h-32 rounded-full bg-udda-mint/30 animate-pulse-soft"></div>
      <div className="absolute left-10 bottom-1/4 w-24 h-24 rounded-full bg-udda-yellow/20 animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block -rotate-1 bg-udda-lavender/20 px-4 py-1 rounded-lg mb-4">
            <span className="text-udda-purple font-bold">Pick your weirdness level</span>
          </div>
          <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-4 section-title">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your needs. No hidden fees, no contracts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PricingTier 
            name="Free" 
            price="€0" 
            period="forever"
            description="Dip your toes in and see if we're your cup of tea."
            features={[
              "10 minutes free per day", 
              "Up to 2 participants", 
              "Basic insights report", 
              "Try all conversation types"
            ]}
            buttonText="Start Free"
            color="bg-gray-500"
            gradient="from-gray-400 to-gray-500"
            rotateClass="-rotate-1"
          />
          
          <PricingTier 
            name="24-Hour Pass" 
            price="€6.95" 
            period="one-time"
            description="Need more time? Get a full day of unlimited access."
            features={[
              "Unlimited sessions for 24 hours", 
              "Up to 5 participants", 
              "Full AI analysis and reports", 
              "Continue same conversation"
            ]}
            buttonText="Get 24-Hour Pass"
            color="bg-udda-lavender"
            gradient="from-udda-lavender to-udda-purple"
            rotateClass="rotate-1"
          />
          
          <PricingTier 
            name="Monthly" 
            price="€14.95" 
            period="/month"
            description="Our most popular plan for regular users."
            features={[
              "Unlimited sessions", 
              "Up to 10 participants", 
              "Advanced insights", 
              "Save & share results", 
              "Resume past conversations"
            ]}
            isPopular={true}
            buttonText="Subscribe Monthly"
            color="bg-udda-green"
            gradient="from-udda-green to-udda-mint"
            rotateClass="-rotate-1"
          />
          
          <PricingTier 
            name="Annual" 
            price="€99.50" 
            period="/year"
            description="Best value! Save over 40% compared to monthly."
            features={[
              "Everything in Monthly plan", 
              "2 months free", 
              "Priority support", 
              "Early access to new features", 
              "Access to all upcoming features"
            ]}
            buttonText="Subscribe Yearly"
            color="bg-udda-coral"
            gradient="from-udda-coral to-udda-orange"
            rotateClass="rotate-1"
          />
        </div>
        
        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-100">
            <p className="text-sm text-gray-500">
              All plans include GDPR-compliant data handling. We never use your conversations for training 
              or sell your data to third parties. By starting a conversation, you consent to audio recording 
              and transcription for the purpose of providing our service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
