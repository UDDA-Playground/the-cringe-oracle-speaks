
import React from 'react';
import { Mic, Play } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const CmoHeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block -rotate-2 bg-udda-blue/20 px-4 py-1 rounded-lg mb-4">
            <span className="text-udda-blue font-bold">Expert marketing advice on demand!</span>
          </div>
          <h1 className="font-cabinet font-black text-5xl md:text-7xl mb-6 leading-tight rotate-1">
            Your <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-udda-coral bg-clip-text text-transparent">CMO on Demand</span> has arrived
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-700 -rotate-1">
            Instant, AI-powered marketing strategy when you need it most. No scheduling, no hiring delays—just expert guidance at a fraction of the cost.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <span className="inline-flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full shadow-sm text-sm">
              <span className="text-blue-600">✓</span> 
              Expert Marketing Strategy
            </span>
            <span className="inline-flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full shadow-sm text-sm">
              <span className="text-blue-600">✓</span> 
              Voice-First Interface
            </span>
            <span className="inline-flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full shadow-sm text-sm">
              <span className="text-blue-600">✓</span> 
              Always Up-to-Date
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2">
              <Mic className="w-5 h-5" /> Start Marketing Conversation
            </button>
            <Dialog>
              <DialogTrigger asChild>
                <button className="border border-gray-300 bg-white text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-md flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" /> See How It Works
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] p-0">
                <div className="aspect-video w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="How Our CMO On Demand Works" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Try free—no credit card required • GDPR Compliant • Used by marketers in 40+ countries
          </p>
          
          {/* Fun floating elements */}
          <div className="hidden md:block absolute top-20 right-[10%] w-16 h-16 bg-blue-500/30 rounded-full animate-float" style={{animationDelay: '1.2s'}}></div>
          <div className="hidden md:block absolute bottom-20 left-[5%] w-20 h-20 bg-purple-500/30 rounded-full animate-pulse-soft" style={{animationDelay: '0.8s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default CmoHeroSection;
