
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Heart, Users } from 'lucide-react';
import ElevenLabsWidget from '../ElevenLabsWidget';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-udda-blue hover:text-udda-blue/80 mb-6 font-semibold">
            <ArrowLeft size={16} className="mr-2" /> Back to all conversations
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
            <div>
              <div className="inline-block -rotate-3 bg-udda-blue/30 px-4 py-1 rounded-lg mb-4">
                <span className="text-blue-700 font-bold">För åldrarna 10-25 / For ages 10-25</span>
              </div>
              
              <h1 className="font-cabinet font-black text-4xl md:text-5xl mb-6">
                Youth Mentor
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-udda-blue to-udda-lavender">
                  Guidance for Young People
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-700">
                A supportive AI mentor that helps young people navigate emotions, relationships, identity, and personal growth through engaging, evidence-based conversations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-cabinet font-bold text-2xl mb-4">How it works</h2>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="w-8 h-8 rounded-full bg-udda-blue/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-bold">1</span>
                      </div>
                      <p>Share your thoughts, challenges, or questions</p>
                    </li>
                    <li className="flex">
                      <div className="w-8 h-8 rounded-full bg-udda-blue/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-bold">2</span>
                      </div>
                      <p>Get personalized guidance based on psychology</p>
                    </li>
                    <li className="flex">
                      <div className="w-8 h-8 rounded-full bg-udda-blue/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-bold">3</span>
                      </div>
                      <p>Learn practical skills for life's challenges</p>
                    </li>
                    <li className="flex">
                      <div className="w-8 h-8 rounded-full bg-udda-blue/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-bold">4</span>
                      </div>
                      <p>Build confidence, resilience, and self-awareness</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <h2 className="font-cabinet font-bold text-2xl mb-4 text-udda-blue">Start now</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Users size={20} className="text-udda-blue mr-2" />
                      <p>Confidential one-on-one conversation</p>
                    </div>
                    <div className="flex items-center">
                      <Heart size={20} className="text-udda-blue mr-2" />
                      <p>Completely free service</p>
                    </div>
                  </div>
                  
                  {/* ElevenLabs widget */}
                  <div className="mb-4">
                    <elevenlabs-convai agent-id="agent_01jvn52jdnfnzt0g6vjwcjghx0"></elevenlabs-convai>
                    <script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    By starting, you agree to our terms and acknowledge that UDDA will record and transcribe 
                    audio for this session only. GDPR compliant. Not a replacement for professional therapy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-udda-blue/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-32 h-32 bg-udda-lavender/20 rounded-full blur-xl animate-pulse-slow"></div>
    </section>
  );
};

export default HeroSection;
