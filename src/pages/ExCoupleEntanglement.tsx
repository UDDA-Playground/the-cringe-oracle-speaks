
import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, ArrowLeft, Users, Clock, Euro } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExCoupleEntanglement = () => {
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
              <div className="w-16 h-16 rounded-full bg-udda-yellow flex items-center justify-center mr-4">
                <span className="text-white text-3xl">👮</span>
              </div>
              <h1 className="font-cabinet font-black text-4xl md:text-5xl">
                Ex-Couple Entanglement Sheriff
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              An impartial "nanny-boss" laying down clear rules and next steps. 
              We'll help diffuse conflicts around kids, money, and assets with firm but fair guidance, 
              tracking emotions and ensuring follow-through.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-cabinet font-bold text-2xl mb-4">How it works</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-yellow/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <p>Invite your ex-partner to join the conversation</p>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-yellow/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <p>Discuss joint issues with guided structure and fair time allocation</p>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-yellow/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <p>Have private sessions to share concerns confidentially</p>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-yellow/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <p>Receive clear action items and follow-up reminders</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <h2 className="font-cabinet font-bold text-2xl mb-4 text-udda-yellow">Start now</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Users size={20} className="text-udda-yellow mr-2" />
                    <p>For ex-partners with ongoing connections</p>
                  </div>
                  <div className="flex items-center">
                    <Clock size={20} className="text-udda-yellow mr-2" />
                    <p>Free for 10 minutes daily</p>
                  </div>
                  <div className="flex items-center">
                    <Euro size={20} className="text-udda-yellow mr-2" />
                    <p>€6.95 for 24h unlimited access</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button className="btn-primary w-full bg-udda-yellow hover:bg-udda-yellow/90">
                    <Mic className="w-5 h-5" /> Start Talking
                  </button>
                  <button className="w-full py-2 text-udda-yellow hover:underline">
                    Invite Your Ex
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
            What makes Ex-Couple Entanglement Sheriff special
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-udda-yellow/20 flex items-center justify-center mb-4">
                <span className="text-udda-yellow text-xl">🔒</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Private Sessions</h3>
              <p className="text-gray-600">
                Allows each person to speak freely in private before bringing concerns to joint discussion.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-udda-yellow/20 flex items-center justify-center mb-4">
                <span className="text-udda-yellow text-xl">📝</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Clear Documentation</h3>
              <p className="text-gray-600">
                Creates written summaries of agreements to reduce future misunderstandings or revisiting old issues.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-udda-yellow/20 flex items-center justify-center mb-4">
                <span className="text-udda-yellow text-xl">⏱️</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Follow-up System</h3>
              <p className="text-gray-600">
                Sends reminders about commitments and schedules check-in conversations to ensure progress.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
            What ex-couples are saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-udda-mint flex items-center justify-center mr-4">
                  <span className="font-cabinet font-bold">DB</span>
                </div>
                <div>
                  <p className="font-bold">David B.</p>
                  <p className="text-sm text-gray-500">Co-parenting for 3 years</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We were stuck in the same arguments every handoff day. The 'Sheriff' (yes, silly name) helped us create a specific schedule and communication protocol that finally works for both of us and our kids."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-udda-lavender flex items-center justify-center mr-4">
                  <span className="font-cabinet font-bold">AP</span>
                </div>
                <div>
                  <p className="font-bold">Anna P.</p>
                  <p className="text-sm text-gray-500">Finalizing property division</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We'd been dragging out our property settlement for over a year. Having a neutral third party track our agreements and send reminders finally got us to finalize everything in just two weeks."
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="btn-primary bg-udda-yellow hover:bg-udda-yellow/90">
              <Mic className="w-5 h-5" /> Try Ex-Couple Sheriff Free
            </button>
          </div>
        </div>
      </section>
      
      {/* Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-600">
              <strong>Not legal advice:</strong> Ex-Couple Entanglement Sheriff is designed to facilitate communication,
              but is not a substitute for legal representation or court-ordered mediation. For legal issues involving
              divorce, custody, or property division, please consult a qualified attorney.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ExCoupleEntanglement;
