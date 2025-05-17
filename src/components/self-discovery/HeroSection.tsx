
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import VideoButton from './VideoButton';
import StartNowCard from './StartNowCard';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-udda-blue hover:text-udda-blue/80 mb-6 font-semibold">
            <ArrowLeft size={16} className="mr-2" /> Back to all conversations
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-udda-green flex items-center justify-center mr-4">
              <span className="text-white text-3xl">🧠</span>
            </div>
            <h1 className="font-cabinet font-black text-4xl md:text-5xl">
              Self Discovery Mood-Muffin
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Your growth-focused partner, guiding self-reflection and insight. 
            We'll help you pinpoint recurring thoughts, blocks, and limiting beliefs while offering 
            targeted questions and mini-exercises to build clarity and momentum.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <HowItWorks />
            <StartNowCard />
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <div>
      <h2 className="font-cabinet font-bold text-2xl mb-4">How it works</h2>
      <ul className="space-y-4">
        <li className="flex">
          <div className="w-8 h-8 rounded-full bg-udda-green/20 flex items-center justify-center mr-3 flex-shrink-0">
            <span className="font-bold">1</span>
          </div>
          <p>Connect with your personal AI growth partner in private</p>
        </li>
        <li className="flex">
          <div className="w-8 h-8 rounded-full bg-udda-green/20 flex items-center justify-center mr-3 flex-shrink-0">
            <span className="font-bold">2</span>
          </div>
          <p>Speak freely about what's on your mind or follow guided prompts</p>
        </li>
        <li className="flex">
          <div className="w-8 h-8 rounded-full bg-udda-green/20 flex items-center justify-center mr-3 flex-shrink-0">
            <span className="font-bold">3</span>
          </div>
          <p>Receive insightful questions and observations about patterns in your thinking</p>
        </li>
        <li className="flex">
          <div className="w-8 h-8 rounded-full bg-udda-green/20 flex items-center justify-center mr-3 flex-shrink-0">
            <span className="font-bold">4</span>
          </div>
          <p>Get actionable mini-exercises and a summary of your insights</p>
        </li>
      </ul>
      
      <VideoButton />
    </div>
  );
};

export default HeroSection;
