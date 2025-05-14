
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mic, ArrowLeft, Users, Clock, Euro, Play, Check } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ExCoupleEntanglement = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-udda-blue font-medium hover:text-udda-blue/80 mb-6">
              <ArrowLeft size={16} className="mr-2" /> Back to all conversations
            </Link>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-udda-yellow flex items-center justify-center mr-4">
                <span className="text-gray-900 text-3xl">👮</span>
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
                <h2 className="font-cabinet font-bold text-2xl mb-4 text-gray-800">Start now</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Users size={20} className="text-udda-blue mr-2" />
                    <p>For ex-partners with ongoing connections</p>
                  </div>
                  <div className="flex items-center">
                    <Clock size={20} className="text-udda-blue mr-2" />
                    <p>Free for 10 minutes daily</p>
                  </div>
                  <div className="flex items-center">
                    <Euro size={20} className="text-udda-blue mr-2" />
                    <p>€6.95 for 24h unlimited access</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button variant="blue" size="lg" className="w-full">
                    <Mic className="w-5 h-5" /> Start Talking
                  </Button>
                  <Button variant="outline" className="w-full text-udda-blue border-udda-blue hover:bg-udda-blue hover:text-white">
                    Invite Your Ex
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
      
      {/* How It Works Video */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-6">
              Watch how the Sheriff helps ex-couples
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              See how our AI mediator creates a structured environment for productive conversations between ex-partners
            </p>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="orange" size="lg" className="mx-auto">
                  <Play className="mr-2" /> Watch Demo Video
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-[90vw] h-[80vh] p-1">
                <div className="relative w-full h-full">
                  <iframe 
                    className="w-full h-full rounded-md"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Ex-Couple Sheriff Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
              </DialogContent>
            </Dialog>
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
              <div className="w-12 h-12 rounded-full bg-udda-blue/20 flex items-center justify-center mb-4">
                <span className="text-udda-blue text-xl">🔒</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Private Sessions</h3>
              <p className="text-gray-600">
                Allows each person to speak freely in private before bringing concerns to joint discussion.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-udda-blue/20 flex items-center justify-center mb-4">
                <span className="text-udda-blue text-xl">📝</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Clear Documentation</h3>
              <p className="text-gray-600">
                Creates written summaries of agreements to reduce future misunderstandings or revisiting old issues.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-udda-blue/20 flex items-center justify-center mb-4">
                <span className="text-udda-blue text-xl">⏱️</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Follow-up System</h3>
              <p className="text-gray-600">
                Sends reminders about commitments and schedules check-in conversations to ensure progress.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
            Benefits of using our Sheriff
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="text-udda-blue h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Reduced Legal Costs</h3>
                <p className="text-gray-600">
                  Resolve minor disagreements without expensive attorney involvement, saving thousands in legal fees.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="text-udda-blue h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Healthier Co-Parenting</h3>
                <p className="text-gray-600">
                  Create a stable communication environment that benefits children by reducing their exposure to conflict.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="text-udda-blue h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Emotional Boundaries</h3>
                <p className="text-gray-600">
                  Maintain healthy emotional distance while still addressing practical matters that need resolution.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="text-udda-blue h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Clear Records</h3>
                <p className="text-gray-600">
                  Maintain documented records of agreements that can be referenced later if misunderstandings arise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
            What ex-couples are saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-udda-mint flex items-center justify-center mr-4">
                  <span className="font-cabinet font-bold text-gray-800">DB</span>
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
                  <span className="font-cabinet font-bold text-gray-800">AP</span>
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
            <Button variant="blue" size="lg">
              <Mic className="w-5 h-5" /> Try Ex-Couple Sheriff Free
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Is this a replacement for legal mediation?</h3>
              <p className="text-gray-700">
                No. The Sheriff helps with everyday communication and minor disagreements, but formal legal matters should always involve qualified professionals.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">How confidential are these conversations?</h3>
              <p className="text-gray-700">
                All conversations are end-to-end encrypted and not shared with third parties. Private sessions remain confidential unless you choose to share specific points in joint discussions.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What if my ex refuses to participate?</h3>
              <p className="text-gray-700">
                The Sheriff can still help you structure your communication approach and prepare for difficult conversations, even if used independently.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-udda-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
              Ready to communicate better with your ex?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Start with a free 10-minute session and see the difference a neutral third party can make.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="blue" size="lg">
                <Mic className="w-5 h-5" /> Start Talking Now
              </Button>
              <Button variant="outline" className="border-udda-blue text-udda-blue hover:bg-udda-blue hover:text-white">
                Learn More
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
