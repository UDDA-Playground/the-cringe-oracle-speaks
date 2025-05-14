
import React from 'react';
import { Zap, Lightbulb, Handshake, Wrench } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-udda-mint/10 via-udda-yellow/10 to-udda-coral/10 transform -skew-y-2"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-4 section-title">
            Not just any conversation
          </h2>
          <p className="text-xl text-gray-600">
            Our AI brings special expertise to help you get more from every discussion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-udda-green flex">
            <div className="mr-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-udda-green/30 to-udda-mint/30 flex items-center justify-center">
                <Zap size={24} className="text-udda-green" />
              </div>
            </div>
            <div>
              <h3 className="font-cabinet font-bold text-xl mb-2">Expert Knowledge</h3>
              <p className="text-gray-600">
                Access the wisdom of a world-class expert with deep expertise in psychology, wellness, and other industry knowledge
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-udda-coral flex">
            <div className="mr-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-udda-coral/30 to-udda-orange/30 flex items-center justify-center">
                <Lightbulb size={24} className="text-udda-coral" />
              </div>
            </div>
            <div>
              <h3 className="font-cabinet font-bold text-xl mb-2">Truth Bombs</h3>
              <p className="text-gray-600">
                Get honest, unfiltered insights that reveal hidden truths and opportunities others might miss
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-udda-lavender flex">
            <div className="mr-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-udda-lavender/30 to-udda-purple/30 flex items-center justify-center">
                <Handshake size={24} className="text-udda-lavender" />
              </div>
            </div>
            <div>
              <h3 className="font-cabinet font-bold text-xl mb-2">Moderating Space</h3>
              <p className="text-gray-600">
                Ensure everyone contributes equally with gentle guidance that keeps conversations productive
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-udda-yellow flex">
            <div className="mr-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-udda-yellow/30 to-udda-orange/30 flex items-center justify-center">
                <Wrench size={24} className="text-udda-yellow" />
              </div>
            </div>
            <div>
              <h3 className="font-cabinet font-bold text-xl mb-2">Remove Bottlenecks in Real Time</h3>
              <p className="text-gray-600">
                With an expert moderator, quickly resolve knots and frictions that block critical decisions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
