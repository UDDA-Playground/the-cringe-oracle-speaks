
import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, ArrowLeft, Users, Clock, Euro } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingSection from '../components/PricingSection';

const PartyConversation = () => {
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
                
                <div className="space-y-4">
                  <button className="btn-primary w-full bg-udda-coral">
                    <Mic className="w-5 h-5" /> Start Talking
                  </button>
                  <button className="w-full py-2 text-udda-coral hover:underline">
                    Invite Friends
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
            What makes Party Conversation special
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-udda-coral/20 flex items-center justify-center mb-4">
                <span className="text-udda-coral text-xl">🎯</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Uncanny Insight</h3>
              <p className="text-gray-600">
                UDDA analyzes speech patterns, word choice, and tone to reveal hidden dynamics and unspoken feelings.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-udda-coral/20 flex items-center justify-center mb-4">
                <span className="text-udda-coral text-xl">😂</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Hilariously Awkward</h3>
              <p className="text-gray-600">
                Creates just the right amount of delightful discomfort that makes for memorable social moments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-udda-coral/20 flex items-center justify-center mb-4">
                <span className="text-udda-coral text-xl">🔄</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Group Dynamic Shifter</h3>
              <p className="text-gray-600">
                Often leads to deeper, more authentic conversations after the initial awkward laughter subsides.
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
                <div className="w-12 h-12 rounded-full bg-udda-yellow flex items-center justify-center mr-4">
                  <span className="font-cabinet font-bold">JL</span>
                </div>
                <div>
                  <p className="font-bold">Jamie L.</p>
                  <p className="text-sm text-gray-500">Used with college roommates</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I never knew my roommate had a crush on our TA until UDDA called it out! Cue the red faces and awkward laughing. Now we can't stop using it at parties."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-udda-mint flex items-center justify-center mr-4">
                  <span className="font-cabinet font-bold">AS</span>
                </div>
                <div>
                  <p className="font-bold">Alex S.</p>
                  <p className="text-sm text-gray-500">Used at a dinner party</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We turned it on during dessert and within minutes UDDA correctly identified who was secretly job hunting. Awkward? Yes. But it actually led to an honest conversation we needed to have."
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="btn-primary bg-udda-coral">
              <Mic className="w-5 h-5" /> Try Party Conversation Free
            </button>
          </div>
        </div>
      </section>
      
      {/* Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-600">
              <strong>Fun, not therapy:</strong> Party Conversation is designed for entertainment and casual insight,
              not for therapeutic purposes. For mental health support, please consult a licensed professional.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PartyConversation;
