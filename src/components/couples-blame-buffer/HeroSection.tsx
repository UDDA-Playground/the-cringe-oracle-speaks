
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Clock, Euro, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import ElevenLabsWidget from '../ElevenLabsWidget';

const HeroSection: React.FC = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-udda-blue hover:text-udda-blue/80 mb-6 font-semibold">
            <ArrowLeft size={16} className="mr-2" /> Back to all conversations
          </Link>
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-udda-coral flex items-center justify-center mr-4">
              <Heart size={32} className="text-white" />
            </div>
            <h1 className="font-cabinet font-black text-4xl md:text-5xl">
              Couples Blame Buffer
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            A safe space to vent frustrations, gain perspective, and foster understanding in your relationship.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-cabinet font-bold text-2xl mb-4">How it works</h2>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <p>Start a private conversation with your AI relationship coach</p>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <p>Express your feelings and frustrations about a specific situation</p>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <p>Receive empathetic feedback and alternative perspectives</p>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <p>Learn actionable strategies to communicate more effectively</p>
                </li>
              </ul>

              <div className="mt-8 space-y-4">
                <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-coral-600 text-coral-700 hover:bg-coral-50 hover:text-coral-800"
                    >
                      Watch Demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl h-[70vh]">
                    <div className="relative w-full h-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Couples Blame Buffer Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
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
                <ElevenLabsWidget agentId="cXEiaJLsMXO8XFzOQh8m" />
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
