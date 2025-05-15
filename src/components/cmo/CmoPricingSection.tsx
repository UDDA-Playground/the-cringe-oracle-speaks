
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  buttonVariant?: string;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  period,
  description,
  features,
  isPopular = false,
  buttonText = "Get Started",
  color = "bg-blue-600",
  gradient = "from-blue-600 to-blue-500",
  rotateClass = "",
  buttonVariant = "high-contrast-blue"
}) => {
  return (
    <div className={`relative ${rotateClass} transform transition-all duration-300 hover:rotate-0`}>
      <div className={`rounded-2xl p-0.5 ${isPopular ? `bg-gradient-to-br ${gradient} shadow-lg` : 'bg-gray-100'}`}>
        {isPopular && (
          <span className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-700 px-3 py-1 rounded-full text-sm font-bold shadow-md text-white">
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
                <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button variant={buttonVariant as any} className="w-full py-3 font-bold shadow-lg transition-all hover:-translate-y-1">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

const CmoPricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("individual");
  
  const individualTiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Try our CMO on demand service and see the value firsthand.",
      features: [
        "10 minutes free per day",
        "Basic marketing insights",
        "Email summary after conversation",
        "1 user only"
      ],
      buttonText: "Start Free",
      color: "bg-gray-600",
      gradient: "from-gray-500 to-gray-600",
      rotateClass: "-rotate-1",
      buttonVariant: "secondary"
    },
    {
      name: "24-Hour Pass",
      price: "$11.95",
      period: "one-time",
      description: "Need help now? Get unlimited access for a full day.",
      features: [
        "Unlimited access for 24 hours",
        "Full marketing plan via email",
        "Resume previous conversations",
        "1 user only"
      ],
      buttonText: "Get 24-Hour Pass",
      color: "bg-purple-600",
      gradient: "from-purple-600 to-purple-700",
      rotateClass: "rotate-1",
      buttonVariant: "high-contrast-purple"
    },
    {
      name: "Monthly",
      price: "$14.95",
      period: "/month",
      description: "Regular marketing guidance whenever you need it.",
      features: [
        "Unlimited conversations",
        "Detailed marketing plan",
        "Ongoing strategy refinement",
        "Resume any conversation",
        "1 user only"
      ],
      isPopular: true,
      buttonText: "Subscribe Monthly",
      color: "bg-blue-600",
      gradient: "from-blue-600 to-blue-500",
      rotateClass: "-rotate-1",
      buttonVariant: "high-contrast-blue"
    },
    {
      name: "Annual",
      price: "$99.50",
      period: "/year",
      description: "Best value! Save over 40% compared to monthly.",
      features: [
        "Everything in Monthly plan",
        "2 months free",
        "Priority support",
        "Advanced analytics",
        "1 user only"
      ],
      buttonText: "Subscribe Yearly",
      color: "bg-green-600",
      gradient: "from-green-600 to-green-500",
      rotateClass: "rotate-1",
      buttonVariant: "high-contrast-green"
    }
  ];
  
  const teamTiers = [
    {
      name: "Team Free",
      price: "$0",
      period: "forever",
      description: "Let your team experience our CMO on demand service.",
      features: [
        "10 minutes free per day",
        "Basic marketing insights",
        "Email summary after conversation",
        "Up to 5 team members"
      ],
      buttonText: "Start Free",
      color: "bg-gray-600",
      gradient: "from-gray-500 to-gray-600",
      rotateClass: "-rotate-1",
      buttonVariant: "secondary"
    },
    {
      name: "Team 24-Hour Pass",
      price: "$19.50",
      period: "one-time",
      description: "Team collaboration for important marketing decisions.",
      features: [
        "Unlimited access for 24 hours",
        "Collaborative marketing plan",
        "Resume previous conversations",
        "Up to 5 simultaneous users (10 total)"
      ],
      buttonText: "Get Team 24-Hour Pass",
      color: "bg-purple-600",
      gradient: "from-purple-600 to-purple-700",
      rotateClass: "rotate-1",
      buttonVariant: "high-contrast-purple"
    },
    {
      name: "Team Monthly",
      price: "$29.95",
      period: "/month",
      description: "Align your entire team with consistent marketing guidance.",
      features: [
        "Unlimited team conversations",
        "Collaborative marketing plan",
        "Individual & group sessions",
        "Resume any conversation",
        "Up to 5 simultaneous users (10 total)"
      ],
      isPopular: true,
      buttonText: "Subscribe Team Monthly",
      color: "bg-blue-600",
      gradient: "from-blue-600 to-blue-500",
      rotateClass: "-rotate-1",
      buttonVariant: "high-contrast-blue"
    },
    {
      name: "Team Annual",
      price: "$299.50",
      period: "/year",
      description: "Best team value! Save over 40% compared to monthly.",
      features: [
        "Everything in Team Monthly",
        "2 months free",
        "Priority support",
        "Advanced team analytics",
        "Up to 5 simultaneous users (10 total)"
      ],
      buttonText: "Subscribe Team Yearly",
      color: "bg-green-600",
      gradient: "from-green-600 to-green-500",
      rotateClass: "rotate-1",
      buttonVariant: "high-contrast-green"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="pricing">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-100 to-transparent"></div>
      
      {/* Fun elements */}
      <div className="absolute right-0 top-1/3 w-32 h-32 rounded-full bg-blue-500/30 animate-pulse-soft"></div>
      <div className="absolute left-10 bottom-1/4 w-24 h-24 rounded-full bg-purple-500/20 animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block -rotate-1 bg-purple-700/20 px-4 py-1 rounded-lg mb-4">
            <span className="text-purple-800 font-bold">Flexible pricing options</span>
          </div>
          <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-4 section-title">
            Marketing expertise that fits your budget
          </h2>
          <p className="text-xl text-gray-600">
            Whether you're an individual or a team, we have the right plan for you
          </p>
          
          <div className="mt-8 mb-12 flex justify-center">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md">
              <TabsList className="grid grid-cols-2 w-full bg-gray-200 p-1 rounded-lg">
                <TabsTrigger 
                  value="individual" 
                  className={`text-base py-3 font-medium ${activeTab === "individual" ? "bg-white text-blue-600 shadow-md" : "text-gray-700"}`}
                >
                  Individual
                </TabsTrigger>
                <TabsTrigger 
                  value="team" 
                  className={`text-base py-3 font-medium ${activeTab === "team" ? "bg-white text-blue-600 shadow-md" : "text-gray-700"}`}
                >
                  Team
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activeTab === "individual" ? 
            individualTiers.map((tier, index) => (
              <PricingTier key={index} {...tier} />
            )) : 
            teamTiers.map((tier, index) => (
              <PricingTier key={index} {...tier} />
            ))
          }
        </div>
        
        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-100">
            <p className="text-sm text-gray-600">
              All plans include GDPR-compliant data handling. By starting a conversation, you consent to audio recording 
              and transcription for the purpose of providing our service. Team plans allow up to 5 users in a conversation simultaneously, 
              with a total of 10 users who can access the account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CmoPricingSection;
