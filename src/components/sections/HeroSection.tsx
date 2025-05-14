
import React from 'react';
import { Mic, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block -rotate-2 bg-udda-yellow/20 px-4 py-1 rounded-lg mb-4">
            <span className="text-udda-coral font-bold">Not boring therapy. Just weird chats!</span>
          </div>
          <h1 className="font-cabinet font-black text-5xl md:text-7xl mb-6 leading-tight rotate-1">
            Mental health conversations with a 
            <span className="bg-gradient-to-r from-udda-purple via-udda-coral to-udda-yellow bg-clip-text text-transparent"> weird twist</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-700 -rotate-1">
            Not therapy. Just absurdly helpful AI-guided conversations for when you need to talk things out.
            Available when you are, not when someone else is.
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl mb-8 shadow-sm">
            <h3 className="font-cabinet font-bold text-xl mb-2 text-udda-green">Expert Knowledge at Your Fingertips</h3>
            <p className="text-gray-700">
              Our AI is trained on insights from top psychologists, relationship coaches, and mental health experts to provide guidance that's both effective <span className="font-bold">and</span> entertaining.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg relative group">
              <span className="absolute -inset-1 bg-gradient-to-r from-udda-coral via-udda-yellow to-udda-lavender opacity-30 blur-md rounded-full group-hover:opacity-60 transition-opacity"></span>
              <Mic className="w-5 h-5" /> Start a Conversation
            </button>
            <Link to="#conversations" className="btn-outline text-lg">
              <MessageSquare className="w-5 h-5" /> See All Conversations
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Proudly European 🇪🇺 · GDPR Compliant · Not a replacement for licensed therapy
          </p>
          
          {/* Fun floating elements */}
          <div className="hidden md:block absolute top-20 right-[10%] w-16 h-16 bg-udda-yellow/30 rounded-full animate-float" style={{animationDelay: '1.2s'}}></div>
          <div className="hidden md:block absolute bottom-20 left-[5%] w-20 h-20 bg-udda-mint/30 rounded-full animate-pulse-soft" style={{animationDelay: '0.8s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
