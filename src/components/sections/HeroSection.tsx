
import React from 'react';
import { Mic, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

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
            Not therapy. Just absurdly helpful AI-guided conversations based on world class expertise and research for when you need to talk things out.
            Available when you are, not when someone else is.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <span className="inline-flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full shadow-sm text-sm">
              <span className="text-udda-green">✓</span> 
              Expert Psychological Insights
            </span>
            <span className="inline-flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full shadow-sm text-sm">
              <span className="text-udda-green">✓</span> 
              Relationship Coaching
            </span>
            <span className="inline-flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full shadow-sm text-sm">
              <span className="text-udda-green">✓</span> 
              Mental Health Support
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-udda-purple text-white font-bold py-3 px-8 rounded-full hover:bg-udda-lavender transition-colors shadow-md flex items-center justify-center gap-2">
              <Mic className="w-5 h-5" /> Start a Conversation
            </button>
            <Dialog>
              <DialogTrigger asChild>
                <button className="btn-outline text-lg flex items-center justify-center">
                  <Play className="w-5 h-5" /> See How It Works
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] p-0">
                <div className="aspect-video w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="How UDDA Works" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
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
