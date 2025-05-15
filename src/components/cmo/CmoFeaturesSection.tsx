
import React from 'react';
import { BookOpen, TrendingUp, Lightbulb, RefreshCw } from 'lucide-react';

const CmoFeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-udda-coral/10 transform -skew-y-2"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-4 section-title">
            Marketing expertise when you need it
          </h2>
          <p className="text-xl text-gray-600">
            Your dedicated marketing advisor combining decades of expertise with cutting-edge insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-blue-600 flex">
            <div className="mr-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600/30 to-blue-400/30 flex items-center justify-center">
                <BookOpen size={24} className="text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="font-cabinet font-bold text-xl mb-2">Vast Knowledge Bank</h3>
              <p className="text-gray-600">
                Access decades of marketing expertise, award-winning case studies, research, and best practices from global campaigns
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-purple-600 flex">
            <div className="mr-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/30 to-purple-400/30 flex items-center justify-center">
                <TrendingUp size={24} className="text-purple-600" />
              </div>
            </div>
            <div>
              <h3 className="font-cabinet font-bold text-xl mb-2">Action-Oriented Insights</h3>
              <p className="text-gray-600">
                Break through indecision with clear, actionable recommendations based on your specific business challenges
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
              <h3 className="font-cabinet font-bold text-xl mb-2">Personalized Strategy</h3>
              <p className="text-gray-600">
                Voice conversations reveal your true goals and knowledge gaps, allowing us to craft truly personalized marketing plans
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-green-600 flex">
            <div className="mr-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600/30 to-green-400/30 flex items-center justify-center">
                <RefreshCw size={24} className="text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="font-cabinet font-bold text-xl mb-2">Continuously Updated</h3>
              <p className="text-gray-600">
                Always stay current with the latest marketing trends, tools, and consumer behaviors through our constantly refreshed expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CmoFeaturesSection;
