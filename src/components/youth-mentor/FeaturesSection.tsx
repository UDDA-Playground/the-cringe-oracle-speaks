
import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
          What makes Youth Mentor special
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-udda-blue/20 flex items-center justify-center mb-4">
              <span className="text-udda-blue text-xl">🧠</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">Evidence-Based</h3>
            <p className="text-gray-600">
              Designed using validated psychological frameworks like Self-Determination Theory and Cognitive Behavioral Therapy.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-udda-blue/20 flex items-center justify-center mb-4">
              <span className="text-udda-blue text-xl">🔒</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">Private & Safe</h3>
            <p className="text-gray-600">
              Completely confidential conversations with privacy safeguards and age-appropriate content guidelines.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-udda-blue/20 flex items-center justify-center mb-4">
              <span className="text-udda-blue text-xl">💬</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">Relatable & Engaging</h3>
            <p className="text-gray-600">
              Communicates in a friendly, relatable tone with appropriate language for young people, making guidance feel accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
