
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mic, ArrowLeft, User, Clock, Euro, Play, Lightbulb, BadgeCheck } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ElevenLabsConvaiWidget from '@/components/ElevenLabsConvaiWidget';

const SelfDiscovery = () => {
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
                
                <div className="mt-8 space-y-4">
                  <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800"
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
                          title="Self Discovery Demo"
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
                <h2 className="font-cabinet font-bold text-2xl mb-4 text-green-700">Start now</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <User size={20} className="text-green-700 mr-2" />
                    <p>Private one-on-one conversation</p>
                  </div>
                  <div className="flex items-center">
                    <Clock size={20} className="text-green-700 mr-2" />
                    <p>Free for 10 minutes daily</p>
                  </div>
                  <div className="flex items-center">
                    <Euro size={20} className="text-green-700 mr-2" />
                    <p>€6.95 for 24h unlimited access</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    variant="high-contrast-green" 
                    className="w-full font-bold text-base"
                    onClick={handleStartConversation}
                  >
                    <Mic className="w-5 h-5" /> Start Talking
                  </Button>
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
      <section className="py-16 bg-gradient-to-br from-udda-green/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
                See Self Discovery in action
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Watch how our AI helps users achieve greater self-awareness and personal growth
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden relative aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Person in thoughtful reflection" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="green" className="rounded-full p-4 h-16 w-16">
                      <Play size={32} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl h-[70vh]">
                    <div className="relative w-full h-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="Self Discovery Demo"
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
      
      {/* Growth Areas Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
                Your journey to greater self-awareness
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Areas where our AI companion can help you grow
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-4">
                  <Lightbulb className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Self-Awareness</h3>
                <p className="text-gray-600">
                  Discover patterns in your thoughts and behaviors that you might not notice on your own.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-4">
                  <BadgeCheck className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Limiting Beliefs</h3>
                <p className="text-gray-600">
                  Identify and challenge the internal narratives that may be holding you back from your potential.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-4">
                  <User className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Personal Values</h3>
                <p className="text-gray-600">
                  Clarify what matters most to you and align your daily choices with your core values.
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
                <h3 className="font-cabinet font-bold text-xl mb-2">Is this the same as therapy?</h3>
                <p className="text-gray-600">
                  No, Self Discovery is not therapy and should not replace professional mental health treatment. It's a tool for personal growth and reflection that complements professional support.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-cabinet font-bold text-xl mb-2">How private are my conversations?</h3>
                <p className="text-gray-600">
                  Your conversations are completely private. We use industry-standard encryption, and your audio is only processed to provide real-time feedback. We do not store conversation content after sessions end.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-cabinet font-bold text-xl mb-2">What kind of exercises will I do?</h3>
                <p className="text-gray-600">
                  Our AI offers a variety of brief, targeted exercises including guided reflections, journaling prompts, visualization techniques, and simple behavioral experiments tailored to your specific situation.
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
            What makes Self Discovery special
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center mb-4">
                <span className="text-green-700 text-xl">🔍</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Pattern Recognition</h3>
              <p className="text-gray-600">
                Identifies recurring thoughts, behaviors and limiting beliefs that might be holding you back.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center mb-4">
                <span className="text-green-700 text-xl">💭</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Thought Reframing</h3>
              <p className="text-gray-600">
                Offers alternative perspectives to help you see situations from different angles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center mb-4">
                <span className="text-green-700 text-xl">🌱</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Growth Exercises</h3>
              <p className="text-gray-600">
                Provides practical mini-exercises tailored to your specific challenges and goals.
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
                  <span className="font-cabinet font-bold">MR</span>
                </div>
                <div>
                  <p className="font-bold">Michael R.</p>
                  <p className="text-sm text-gray-500">Using for personal growth</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I was skeptical at first, but after a few sessions, UDDA helped me realize I kept sabotaging job opportunities because of an underlying fear of success. Weirdly accurate and actually helpful."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-udda-yellow flex items-center justify-center mr-4">
                  <span className="font-cabinet font-bold">KT</span>
                </div>
                <div>
                  <p className="font-bold">Kim T.</p>
                  <p className="text-sm text-gray-500">Working through a career change</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The 'Mood-Muffin' (silly name, surprisingly helpful tool) helped me work through my indecision about changing careers. The mini-exercises actually gave me clarity where months of overthinking failed."
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              variant="green" 
              className="font-bold text-lg"
              onClick={handleStartConversation}
            >
              <Mic className="w-5 h-5" /> Try Self Discovery Free
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-6">
              Ready to discover more about yourself?
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
              <strong>Not therapy:</strong> Self Discovery Mood-Muffin is designed for general personal development purposes,
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

export default SelfDiscovery;
