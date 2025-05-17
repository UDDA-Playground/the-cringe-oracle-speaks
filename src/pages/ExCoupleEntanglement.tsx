import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Clock, Euro, Play, Mic } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ElevenLabsConvaiWidget from '@/components/ElevenLabsConvaiWidget';
import TalkButton from '@/components/TalkButton';

const ExCoupleEntanglement = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [conversationOpen, setConversationOpen] = useState(false);

  const handleStartConversation = () => {
    setConversationOpen(true);
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-udda-blue hover:text-udda-blue/80 mb-6 font-semibold">
              <ArrowLeft size={16} className="mr-2" /> Back to all conversations
            </Link>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-udda-red flex items-center justify-center mr-4">
                <span className="text-white text-3xl">💔</span>
              </div>
              <h1 className="font-cabinet font-black text-4xl md:text-5xl">
                Ex-Couple Entanglement Navigator
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Navigating the complexities of post-breakup life. 
              We'll help you untangle shared friend groups, manage emotional triggers, 
              and establish healthy boundaries for a smoother transition.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-cabinet font-bold text-2xl mb-4">How it works</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-red/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <p>Connect with a supportive AI to discuss your situation</p>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-red/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <p>Share your challenges with shared friends, events, or emotional triggers</p>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-red/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <p>Receive guidance on setting boundaries and managing interactions</p>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-red/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <p>Develop strategies for detaching emotionally and moving forward</p>
                  </li>
                </ul>
                
                <div className="mt-8 space-y-4">
                  <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="border-red-600 text-red-700 hover:bg-red-50 hover:text-red-800"
                      >
                        <Play className="mr-2" /> Watch Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl h-[70vh]">
                      <div className="relative w-full h-full">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                          title="Ex-Couple Entanglement Demo"
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
                <h2 className="font-cabinet font-bold text-2xl mb-4 text-red-700">Start now</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <User size={20} className="text-red-700 mr-2" />
                    <p>Private one-on-one conversation</p>
                  </div>
                  <div className="flex items-center">
                    <Clock size={20} className="text-red-700 mr-2" />
                    <p>Free for 10 minutes daily</p>
                  </div>
                  <div className="flex items-center">
                    <Euro size={20} className="text-red-700 mr-2" />
                    <p>€6.95 for 24h unlimited access</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <TalkButton onClick={handleStartConversation} variant="high-contrast-red" />
                </div>
                
                <p className="text-xs text-gray-500 mt-6">
                  By starting, you agree to our terms and acknowledge that UDDA will record and transcribe 
                  audio for this session only. GDPR compliant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Demo Section */}
      <section className="py-16 bg-gradient-to-br from-udda-red/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
                See Ex-Couple Entanglement Navigator in action
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Watch how our AI helps users navigate the complexities of post-breakup life
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden relative aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1508214751196-bcfd6ca6dc90?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Couple sitting apart on a couch" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="red" className="rounded-full p-4 h-16 w-16">
                      <Play size={32} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl h-[70vh]">
                    <div className="relative w-full h-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="Ex-Couple Entanglement Demo"
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
          </div>
        </div>
      </section>
      
      {/* Challenges Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
                Common challenges in post-breakup life
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Areas where our AI companion can provide support and guidance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
                  <User className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Shared Friends</h3>
                <p className="text-gray-600">
                  Navigating social circles and managing interactions with mutual friends.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
                  <Clock className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Emotional Triggers</h3>
                <p className="text-gray-600">
                  Dealing with reminders of the past and managing emotional reactions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
                  <Euro className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Practical Matters</h3>
                <p className="text-gray-600">
                  Addressing shared finances, living arrangements, and other logistical issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-cabinet font-bold text-xl mb-2">Is this therapy?</h3>
                <p className="text-gray-600">
                  No, this tool is not a substitute for professional therapy. It's designed to provide guidance and support, but it's not a replacement for mental health treatment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-cabinet font-bold text-xl mb-2">How private are my conversations?</h3>
                <p className="text-gray-600">
                  Your conversations are completely private. We use industry-standard encryption, and your audio is only processed to provide real-time feedback. We do not store conversation content after sessions end.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-cabinet font-bold text-xl mb-2">What kind of guidance will I receive?</h3>
                <p className="text-gray-600">
                  Our AI offers practical advice, emotional support, and strategies for setting boundaries, managing interactions, and detaching emotionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
            What makes Ex-Couple Entanglement Navigator special
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                <span className="text-red-700 text-xl">🤝</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Boundary Setting</h3>
              <p className="text-gray-600">
                Provides guidance on establishing healthy boundaries with your ex and mutual friends.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                <span className="text-red-700 text-xl">💔</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Emotional Detachment</h3>
              <p className="text-gray-600">
                Offers strategies for managing emotional triggers and detaching from the past.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                <span className="text-red-700 text-xl">🌱</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Moving Forward</h3>
              <p className="text-gray-600">
                Helps you develop a plan for rebuilding your life and moving towards a positive future.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
            What people are saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-udda-mint flex items-center justify-center mr-4">
                  <span className="font-cabinet font-bold">JD</span>
                </div>
                <div>
                  <p className="font-bold">Jamie D.</p>
                  <p className="text-sm text-gray-500">Navigating shared custody</p>
                </div>
              </div>
              <p className="text-gray-700">
                "UDDA helped me communicate more effectively with my ex about our kids. It's still tough, but I feel more in control."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-udda-yellow flex items-center justify-center mr-4">
                  <span className="font-cabinet font-bold">LS</span>
                </div>
                <div>
                  <p className="font-bold">Laura S.</p>
                  <p className="text-sm text-gray-500">Dealing with mutual friends</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I was dreading seeing my ex at our friend's wedding, but UDDA helped me plan out how to handle the situation. I actually had a good time!"
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              variant="red" 
              className="font-bold text-lg"
              onClick={handleStartConversation}
            >
              <Mic className="w-5 h-5" /> Try Ex-Couple Navigator Free
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-6">
              Ready to navigate your post-breakup life with confidence?
            </h2>
            <p className="text-xl mb-8">
              Start your free 10-minute session today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="high-contrast-yellow" 
                className="text-gray-900 font-bold text-lg"
                onClick={handleStartConversation}
              >
                <Mic className="w-5 h-5" /> Start Talking Now
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/20">
                Learn more about our pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-600">
              <strong>Not therapy:</strong> Ex-Couple Entanglement Navigator is designed for general guidance and support,
              not as a substitute for professional mental health treatment. For clinical support, please consult a licensed professional.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />

      {/* ElevenLabs Conversation Widget */}
      <ElevenLabsConvaiWidget
        agentId="w5c41E3SBg1LvGiUe5I8"
        isOpen={conversationOpen}
        onOpenChange={setConversationOpen}
      />
    </div>
  );
};

export default ExCoupleEntanglement;
