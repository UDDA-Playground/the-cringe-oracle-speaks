import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Clock, Euro, Laugh, Sparkles, Play, Mic } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingSection from '../components/PricingSection';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const PartyConversation = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      {/* Hero Section */}
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
      <section className="py-16 bg-gradient-to-br from-udda-coral/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
                See the Party Conversation in action
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Watch how our AI turns ordinary hangouts into hilarious memory-makers
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden relative aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Friends having fun" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="bg-udda-coral text-white rounded-full p-4 h-16 w-16">
                      <Play size={32} />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl h-[70vh]">
                    <div className="relative w-full h-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="Party Conversation Demo"
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
      
      {/* Why You'll Love It Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
                Why you'll love Party Conversation
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Turn ordinary hangouts into unforgettable social experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-udda-coral flex items-center justify-center mb-4">
                  <Laugh className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Hilariously Revealing</h3>
                <p className="text-gray-600">
                  Creates moments of delightful awkwardness as the AI calls out what everyone's thinking but not saying.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-udda-coral flex items-center justify-center mb-4">
                  <Sparkles className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Memory Maker</h3>
                <p className="text-gray-600">
                  Creates shared experiences and inside jokes that your friend group will reference for years to come.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-udda-coral flex items-center justify-center mb-4">
                  <Users className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Ice Breaker Supreme</h3>
                <p className="text-gray-600">
                  Perfect for new friend groups, team building, or breaking through awkward social barriers.
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
                <h3 className="font-cabinet font-bold text-xl mb-2">Is it really that accurate?</h3>
                <p className="text-gray-600">
                  Yes! Our AI has been trained to detect subtle conversational cues, body language patterns, and voice tonality that reveal unspoken thoughts and feelings with surprising accuracy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-cabinet font-bold text-xl mb-2">Can I control what gets revealed?</h3>
                <p className="text-gray-600">
                  You can set sensitivity levels before starting. At lower settings, the AI will only reveal light, humorous observations. At higher levels... well, prepare for some potentially awkward truths!
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-cabinet font-bold text-xl mb-2">Is it appropriate for all friend groups?</h3>
                <p className="text-gray-600">
                  Party Conversation works best with friends who have a good sense of humor and aren't easily offended. For brand new acquaintances or very formal settings, we recommend starting with our lowest sensitivity setting.
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
            What makes Party Conversation special
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-udda-coral flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Uncanny Insight</h3>
              <p className="text-gray-600">
                UDDA analyzes speech patterns, word choice, and tone to reveal hidden dynamics and unspoken feelings.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-udda-coral flex items-center justify-center mb-4">
                <span className="text-white text-xl">😂</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Hilariously Awkward</h3>
              <p className="text-gray-600">
                Creates just the right amount of delightful discomfort that makes for memorable social moments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-udda-coral flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔄</span>
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
      <section className="py-16 bg-gray-50">
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
            <button className="bg-udda-coral text-white font-bold text-lg py-3 px-6 rounded-full flex items-center justify-center gap-2">
              <Mic className="w-5 h-5" /> Try Party Conversation Free
            </button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-udda-coral to-udda-orange text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-6">
              Ready to spice up your next hangout?
            </h2>
            <p className="text-xl mb-8">
              Start your free 10-minute session today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-udda-yellow text-gray-900 font-bold text-lg py-3 px-6 rounded-full flex items-center justify-center gap-2">
                <Mic className="w-5 h-5" /> Start Talking Now
              </button>
              <button className="border border-white text-white hover:bg-white/20 py-3 px-6 rounded-full">
                Learn more about our pricing
              </button>
            </div>
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
