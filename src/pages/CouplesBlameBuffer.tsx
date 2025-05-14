
import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, ArrowLeft, Users, Clock, Euro } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CouplesBlameBuffer = () => {
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
              <div className="w-16 h-16 rounded-full bg-udda-lavender flex items-center justify-center mr-4">
                <span className="text-white text-3xl">❤️</span>
              </div>
              <h1 className="font-cabinet font-black text-4xl md:text-5xl">
                Couple's Blame Buffer
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              A seasoned steward, steering dialogue toward deeper connection. 
              We'll surface unspoken expectations, help partners own their roles in conflicts,
              and provide on-the-fly prompts for empathy and constructive feedback.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-cabinet font-bold text-2xl mb-4">How it works</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-lavender/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <p>Invite your partner to join the conversation</p>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-lavender/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <p>Discuss any topic that's been causing friction or needs attention</p>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-lavender/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <p>Get real-time guidance to help structure the conversation productively</p>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-lavender/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <p>Receive summary insights and next steps for continued growth</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <h2 className="font-cabinet font-bold text-2xl mb-4 text-udda-lavender">Start now</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Users size={20} className="text-udda-lavender mr-2" />
                    <p>For you and your partner</p>
                  </div>
                  <div className="flex items-center">
                    <Clock size={20} className="text-udda-lavender mr-2" />
                    <p>Free for 10 minutes daily</p>
                  </div>
                  <div className="flex items-center">
                    <Euro size={20} className="text-udda-lavender mr-2" />
                    <p>€6.95 for 24h unlimited access</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button className="btn-primary w-full bg-udda-lavender">
                    <Mic className="w-5 h-5" /> Start Talking
                  </button>
                  <button className="w-full py-2 text-udda-lavender hover:underline">
                    Invite Your Partner
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
            What makes Couple's Blame Buffer special
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-udda-lavender/20 flex items-center justify-center mb-4">
                <span className="text-udda-lavender text-xl">👂</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Active Listening Guide</h3>
              <p className="text-gray-600">
                Helps ensure both partners truly hear each other by identifying when someone isn't feeling understood.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-udda-lavender/20 flex items-center justify-center mb-4">
                <span className="text-udda-lavender text-xl">🛡️</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Emotion Buffer</h3>
              <p className="text-gray-600">
                Steps in to redirect when the conversation gets heated or shifts toward blame instead of understanding.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-udda-lavender/20 flex items-center justify-center mb-4">
                <span className="text-udda-lavender text-xl">🔄</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Pattern Spotting</h3>
              <p className="text-gray-600">
                Identifies recurring communication patterns that may be creating unnecessary friction in your relationship.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
            What couples are saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-udda-blush flex items-center justify-center mr-4">
                  <span className="font-cabinet font-bold">S&J</span>
                </div>
                <div>
                  <p className="font-bold">Sarah & James</p>
                  <p className="text-sm text-gray-500">Together 4 years</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We kept having the same fight about household chores for years. The Buffer actually caught our pattern of him making promises without specifics and me setting unrealistic expectations. Weirdly helpful!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-udda-mint flex items-center justify-center mr-4">
                  <span className="font-cabinet font-bold">T&M</span>
                </div>
                <div>
                  <p className="font-bold">Tara & Malik</p>
                  <p className="text-sm text-gray-500">Newlyweds</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The name is ridiculous but the service works. We use it whenever we need to discuss something sensitive now. It's like having a funny but incredibly perceptive friend who stops us from saying things we'd regret."
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="btn-primary bg-udda-lavender">
              <Mic className="w-5 h-5" /> Try Couple's Blame Buffer Free
            </button>
          </div>
        </div>
      </section>
      
      {/* Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-600">
              <strong>Not couples therapy:</strong> Couple's Blame Buffer is designed to facilitate better communication,
              but is not a substitute for professional couples counseling. For relationship issues requiring clinical support, 
              please consult a licensed therapist.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CouplesBlameBuffer;
