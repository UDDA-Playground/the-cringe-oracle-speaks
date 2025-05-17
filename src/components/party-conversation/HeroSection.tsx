
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Clock, Euro } from 'lucide-react';
import ElevenLabsWidget from '../ElevenLabsWidget';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-udda-blue hover:text-udda-blue/80 mb-6">
            <ArrowLeft size={16} className="mr-2" /> Back to all conversations
          </Link>
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-udda-coral flex items-center justify-center mr-4">
              <span className="text-white text-3xl">🎭</span>
            </div>
            <h1 className="font-cabinet font-black text-4xl md:text-5xl">
              Party Conversation
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Let three friends chat freely while the AI secretly annotates subtext. Pop up hilarious 
            (and mortifying) insights into insecurities, phobias, and crushes. Turn every group hangout 
            into a playful "cringe exposé" you'll never forget.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-cabinet font-bold text-2xl mb-4">How it works</h2>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <p>Invite up to 5 friends to join your conversation</p>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <p>Start talking freely about any topic</p>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <p>UDDA listens in and pops up with hilarious observations</p>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <p>Get a summary of all the embarrassing revelations at the end</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <h2 className="font-cabinet font-bold text-2xl mb-4 text-udda-coral">Start now</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Users size={20} className="text-udda-coral mr-2" />
                  <p>Up to 5 friends in free mode</p>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="text-udda-coral mr-2" />
                  <p>Free for 10 minutes daily</p>
                </div>
                <div className="flex items-center">
                  <Euro size={20} className="text-udda-coral mr-2" />
                  <p>€6.95 for 24h unlimited access</p>
                </div>
              </div>
              
              {/* ElevenLabs widget */}
              <div className="mb-4">
                <ElevenLabsWidget agentId="agent_01jvfdv8ybemj84w5zb4yjav5y" />
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
