
import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
          What makes Ex-Couple Entanglement Navigator special
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-coral-600/20 flex items-center justify-center mb-4">
              <span className="text-coral-700 text-xl">💬</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">Communication Guidance</h3>
            <p className="text-gray-600">
              Provides strategies for healthier and more effective communication with your ex-partner.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-coral-600/20 flex items-center justify-center mb-4">
              <span className="text-coral-700 text-xl">🛡️</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">Boundary Reinforcement</h3>
            <p className="text-gray-600">
              Helps you set and maintain healthy boundaries to protect your emotional well-being.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-coral-600/20 flex items-center justify-center mb-4">
              <span className="text-coral-700 text-xl">❤️‍🩹</span>
            </div>
            <h3 className="font-cabinet font-bold text-xl mb-3">Emotional Support</h3>
            <p className="text-gray-600">
              Offers support and guidance for processing emotions and moving forward after a breakup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
