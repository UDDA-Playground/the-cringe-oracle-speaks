
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Lightbulb, Eye, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TestWidgetCard from './TestWidgetCard';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-udda-blue hover:text-udda-blue/80 mb-6 font-semibold">
            <ArrowLeft size={16} className="mr-2" /> Back to all conversations
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-start gap-8 mb-12">
            <div className="md:w-1/2">
              <div className="inline-block -rotate-3 bg-udda-yellow/30 px-4 py-1 rounded-lg mb-4">
                <span className="text-udda-purple font-bold">You're weirder than you think</span>
              </div>
              
              <h1 className="font-cabinet font-black text-4xl md:text-5xl mb-6">
                The Weirdness Test
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-udda-purple to-udda-lavender">
                  Discover Your Strange Side
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-700">
                Discover your hidden traits, secret fears, and true motivations through a fun AI voice conversation that's both hilarious and insightful.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <FeatureCard 
                  icon={<Brain className="text-udda-purple" />} 
                  title="Secret Traits" 
                  description="Uncover quirks you hide from everyone else" 
                />
                <FeatureCard 
                  icon={<Lightbulb className="text-udda-yellow" />} 
                  title="True Motivations" 
                  description="Learn what really drives your decisions" 
                />
                <FeatureCard 
                  icon={<Eye className="text-udda-blue" />} 
                  title="Hidden Phobias" 
                  description="Discover fears you didn't know you had" 
                />
                <FeatureCard 
                  icon={<Key className="text-udda-green" />} 
                  title="Inner Secrets" 
                  description="See the side of yourself you rarely show" 
                />
              </div>
              
              <div className="flex gap-4 flex-wrap">
                <Button variant="purple" size="lg" className="rounded-full">
                  Start Your Free Test
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  How It Works
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <TestWidgetCard />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-udda-yellow/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-32 h-32 bg-udda-lavender/20 rounded-full blur-xl animate-pulse-slow"></div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-2">
        {icon}
        <h3 className="font-cabinet font-bold ml-2">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default HeroSection;
