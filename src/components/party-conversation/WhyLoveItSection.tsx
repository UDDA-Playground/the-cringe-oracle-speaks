
import React from 'react';
import { Laugh, Sparkles, Users } from 'lucide-react';

const WhyLoveItSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
              Why you'll love Party Conversation
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Turn ordinary hangouts into unforgettable social experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-udda-coral flex items-center justify-center mb-4">
                <Laugh className="text-white" />
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Hilariously Revealing</h3>
              <p className="text-gray-600">
                Creates moments of delightful awkwardness as the AI calls out what everyone's thinking but not saying.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-udda-coral flex items-center justify-center mb-4">
                <Sparkles className="text-white" />
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Memory Maker</h3>
              <p className="text-gray-600">
                Creates shared experiences and inside jokes that your friend group will reference for years to come.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-udda-coral flex items-center justify-center mb-4">
                <Users className="text-white" />
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Ice Breaker Supreme</h3>
              <p className="text-gray-600">
                Perfect for new friend groups, team building, or breaking through awkward social barriers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLoveItSection;
