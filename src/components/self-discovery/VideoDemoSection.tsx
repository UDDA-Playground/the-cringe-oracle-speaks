
import React from 'react';

const VideoDemoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-udda-green/10 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
              See Self Discovery in action
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how our AI helps users achieve greater self-awareness and personal growth
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden relative aspect-video">
            <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="Person in thoughtful reflection" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemoSection;
