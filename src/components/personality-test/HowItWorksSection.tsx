
import React from 'react';
import { Button } from '@/components/ui/button';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Start a conversation",
      description: "Begin a voice chat with our AI personality analyst. You can choose to answer prompts or just speak naturally about anything.",
      color: "bg-purple-100",
      textColor: "text-purple-800"
    },
    {
      number: "02",
      title: "Share your thoughts",
      description: "The AI asks unexpected questions designed to reveal your hidden traits. Just talk normally—the magic happens in how you express yourself.",
      color: "bg-yellow-100",
      textColor: "text-yellow-800"
    },
    {
      number: "03",
      title: "Get your weird profile",
      description: "Receive insights about your unique personality traits, from harmless quirks to deeper psychological patterns.",
      color: "bg-green-100",
      textColor: "text-green-800"
    },
    {
      number: "04",
      title: "Explore your results",
      description: "Dive deeper into specific aspects of your personality with guided follow-up conversations that expand on your initial results.",
      color: "bg-blue-100",
      textColor: "text-blue-800"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block rotate-2 bg-udda-mint/30 px-4 py-1 rounded-lg mb-4">
              <span className="text-udda-green font-bold">Simple & fun process</span>
            </div>
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
              How the Weirdness Test works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI analyzes your speech patterns, word choice, and thought processes to build a 
              psychological profile that reveals your hidden traits.
            </p>
          </div>
          
          <div className="space-y-8 mb-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-6 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className={`font-cabinet font-bold text-xl ${step.textColor}`}>{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-cabinet font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 text-center">
            <h3 className="font-cabinet font-bold text-2xl mb-4 text-gradient bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
              Ready to discover your weird side?
            </h3>
            <p className="text-gray-600 mb-6">
              Get your first 10 minutes free. No sign-up required. Just start talking and see what the AI reveals about you.
            </p>
            <Button variant="purple" size="lg" className="rounded-full">
              Take the Weirdness Test
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
