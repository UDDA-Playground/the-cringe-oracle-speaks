
import React from 'react';
import { Lightbulb, BadgeCheck, User } from 'lucide-react';

const GrowthAreasSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
              Your journey to greater self-awareness
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Areas where our AI companion can help you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GrowthArea 
              icon={<Lightbulb className="text-white" />}
              title="Self-Awareness"
              description="Discover patterns in your thoughts and behaviors that you might not notice on your own."
            />
            
            <GrowthArea 
              icon={<BadgeCheck className="text-white" />}
              title="Limiting Beliefs"
              description="Identify and challenge the internal narratives that may be holding you back from your potential."
            />
            
            <GrowthArea 
              icon={<User className="text-white" />}
              title="Personal Values"
              description="Clarify what matters most to you and align your daily choices with your core values."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface GrowthAreaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GrowthArea: React.FC<GrowthAreaProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-cabinet font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default GrowthAreasSection;
