
import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, ArrowLeft, User, Clock, Euro } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SelfDiscovery = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-udda-green mb-6">
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
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <h2 className="font-cabinet font-bold text-2xl mb-4 text-udda-green">Start now</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <User size={20} className="text-udda-green mr-2" />
                    <p>Private one-on-one conversation</p>
                  </div>
                  <div className="flex items-center">
                    <Clock size={20} className="text-udda-green mr-2" />
                    <p>Free for 10 minutes daily</p>
                  </div>
                  <div className="flex items-center">
                    <Euro size={20} className="text-udda-green mr-2" />
                    <p>€6.95 for 24h unlimited access</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button className="btn-primary w-full">
                    <Mic className="w-5 h-5" /> Start Talking
                  </button>
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
      
      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
            What makes Self Discovery special
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-udda-green/20 flex items-center justify-center mb-4">
                <span className="text-udda-green text-xl">🔍</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Pattern Recognition</h3>
              <p className="text-gray-600">
                Identifies recurring thoughts, behaviors and limiting beliefs that might be holding you back.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-udda-green/20 flex items-center justify-center mb-4">
                <span className="text-udda-green text-xl">💭</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Thought Reframing</h3>
              <p className="text-gray-600">
                Offers alternative perspectives to help you see situations from different angles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-udda-green/20 flex items-center justify-center mb-4">
                <span className="text-udda-green text-xl">🌱</span>
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
      <section className="py-16">
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
            <button className="btn-primary">
              <Mic className="w-5 h-5" /> Try Self Discovery Free
            </button>
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
    </div>
  );
};

export default SelfDiscovery;
