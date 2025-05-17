
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Clock, Euro } from 'lucide-react';
import ElevenLabsWidget from '../ElevenLabsWidget';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-udda-blue hover:text-udda-blue/80 mb-6 font-semibold">
            <ArrowLeft size={16} className="mr-2" /> Back to all conversations
          </Link>
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-udda-coral flex items-center justify-center mr-4">
              <span className="text-white text-3xl">💔</span>
            </div>
            <h1 className="font-cabinet font-black text-4xl md:text-5xl">
              Ex-Couple Entanglement Navigator
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Navigate the complexities of post-breakup dynamics with UDDA. 
            We'll help you identify unhealthy patterns, emotional triggers, and communication breakdowns 
            to foster healthier boundaries and personal growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-cabinet font-bold text-2xl mb-4">How it works</h2>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <p>Share your current challenges and concerns</p>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <p>Identify recurring patterns and emotional triggers</p>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <p>Explore healthier communication strategies</p>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <p>Set and maintain healthy boundaries</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <h2 className="font-cabinet font-bold text-2xl mb-4 text-coral-700">Information</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <User size={20} className="text-coral-700 mr-2" />
                  <p>Private one-on-one conversation</p>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="text-coral-700 mr-2" />
                  <p>Free for 10 minutes daily</p>
                </div>
                <div className="flex items-center">
                  <Euro size={20} className="text-coral-700 mr-2" />
                  <p>€6.95 for 24h unlimited access</p>
                </div>
              </div>
              
              {/* ElevenLabs widget */}
              <div className="mb-4">
                <ElevenLabsWidget agentId="JQByz0yMQbAvV8N7X9Or" />
              </div>
              
              <p className="text-xs text-gray-500">
                By starting, you agree to our terms and acknowledge that UDDA will record and transcribe 
                audio for this session only. GDPR compliant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
