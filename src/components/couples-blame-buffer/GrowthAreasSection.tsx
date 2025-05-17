
import React from 'react';
import { Heart, User, Clock } from 'lucide-react';

const GrowthAreasSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
              Strengthen your relationship
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Areas where our AI companion can help you grow together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-coral-600 flex items-center justify-center mb-4">
                <Heart className="text-white" />
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Empathy Building</h3>
              <p className="text-gray-600">
                Develop a deeper understanding of your partner's feelings and perspective.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-coral-600 flex items-center justify-center mb-4">
                <User className="text-white" />
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Communication Skills</h3>
              <p className="text-gray-600">
                Learn effective strategies to express your needs and resolve conflicts constructively.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-coral-600 flex items-center justify-center mb-4">
                <Clock className="text-white" />
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Conflict Resolution</h3>
              <p className="text-gray-600">
                Find mutually agreeable solutions and prevent recurring arguments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthAreasSection;
