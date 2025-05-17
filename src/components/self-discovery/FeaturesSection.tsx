
import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
          What makes Self Discovery special
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            emoji="🔍"
            title="Pattern Recognition"
            description="Identifies recurring thoughts, behaviors and limiting beliefs that might be holding you back."
          />
          
          <FeatureCard
            emoji="💭"
            title="Thought Reframing"
            description="Offers alternative perspectives to help you see situations from different angles."
          />
          
          <FeatureCard
            emoji="🌱"
            title="Growth Exercises"
            description="Provides practical mini-exercises tailored to your specific challenges and goals."
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ emoji, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center mb-4">
        <span className="text-green-700 text-xl">{emoji}</span>
      </div>
      <h3 className="font-cabinet font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeaturesSection;
