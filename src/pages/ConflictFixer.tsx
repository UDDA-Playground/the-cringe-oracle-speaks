
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mic, ArrowLeft, Users, Clock, Euro, Play, Scale, Shield, ClipboardList } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ConflictFixer = () => {
  const [videoOpen, setVideoOpen] = useState(false);

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
              <div className="w-16 h-16 rounded-full bg-blue-400 flex items-center justify-center mr-4">
                <span className="text-white text-3xl">🤝</span>
              </div>
              <h1 className="font-cabinet font-black text-4xl md:text-5xl">
                Conflict & Friction Fixer
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              A neutral mediator to structure tense exchanges and keep discussions on track. 
              We'll help uncover underlying needs, reframe blame into constructive dialogue, 
              and identify mutual interests for lasting agreements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-cabinet font-bold text-2xl mb-4">How it works</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <p>Invite participants involved in the conflict to join</p>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <p>UDDA guides the conversation with a structured framework</p>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <p>Get real-time feedback to keep the discussion productive</p>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <p>Leave with clear next steps and follow-up tasks</p>
                  </li>
                </ul>
                
                <div className="mt-8 space-y-4">
                  <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                        <Play className="mr-2" /> Watch Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl h-[70vh]">
                      <div className="relative w-full h-full">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                          title="Conflict Fixer Demo"
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
                <h2 className="font-cabinet font-bold text-2xl mb-4 text-blue-600">Start now</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Users size={20} className="text-blue-600 mr-2" />
                    <p>For groups with conflict to resolve</p>
                  </div>
                  <div className="flex items-center">
                    <Clock size={20} className="text-blue-600 mr-2" />
                    <p>Free for 10 minutes daily</p>
                  </div>
                  <div className="flex items-center">
                    <Euro size={20} className="text-blue-600 mr-2" />
                    <p>€6.95 for 24h unlimited access</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button variant="blue" className="w-full font-bold">
                    <Mic className="w-5 h-5" /> Start Talking
                  </Button>
                  <Button variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                    Invite Others
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
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
                See the Conflict Fixer in action
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Watch how our AI mediator transforms tense discussions into productive problem-solving
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden relative aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Group discussion" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="blue" className="rounded-full p-4 h-16 w-16">
                      <Play size={32} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl h-[70vh]">
                    <div className="relative w-full h-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="Conflict Fixer Demo"
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
      
      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
                Turn conflict into opportunity
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                How our AI mediator helps transform disagreements into productive solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <Scale className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Fair Process</h3>
                <p className="text-gray-600">
                  Ensures everyone gets equal airtime and prevents interruptions or dominating voices.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <Shield className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Psychological Safety</h3>
                <p className="text-gray-600">
                  Creates a space where everyone feels comfortable expressing concerns without fear of backlash.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <ClipboardList className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Actionable Outcomes</h3>
                <p className="text-gray-600">
                  Ensures discussions lead to clear, actionable next steps with assigned responsibilities.
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
                <h3 className="font-cabinet font-bold text-xl mb-2">Is this the same as professional mediation?</h3>
                <p className="text-gray-600">
                  No, the Conflict Fixer is not a substitute for professional mediation services. It's a communication tool designed to help structure conversations and keep them productive, but does not replace human mediators for complex legal disputes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-cabinet font-bold text-xl mb-2">What types of conflicts work best with this tool?</h3>
                <p className="text-gray-600">
                  The Conflict Fixer works best for workplace disagreements, team friction, roommate disputes, and other interpersonal conflicts where parties are willing to engage in good faith. It's not suitable for legal matters or situations involving abuse.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-cabinet font-bold text-xl mb-2">How many people can participate?</h3>
                <p className="text-gray-600">
                  The free version supports up to 3 participants. Premium plans allow for up to 8 participants, making it suitable for team conflicts and multi-party disputes.
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
            What makes Conflict Fixer special
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">⚖️</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Balanced Airtime</h3>
              <p className="text-gray-600">
                Ensures everyone gets equal opportunity to speak and be heard without interruption.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">🔄</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Reframing Tool</h3>
              <p className="text-gray-600">
                Transforms accusatory "you" statements into perspective-sharing "I" statements in real time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">📋</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Action Planning</h3>
              <p className="text-gray-600">
                Creates clear, accountable next steps with specific deadlines and responsibilities.
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
                  <span className="font-cabinet font-bold">LK</span>
                </div>
                <div>
                  <p className="font-bold">Lisa K.</p>
                  <p className="text-sm text-gray-500">Small business owner</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We had two team members who just couldn't work together productively. After one hour with the Conflict Fixer, they finally understood each other's working styles and agreed on a communication protocol."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-udda-yellow flex items-center justify-center mr-4">
                  <span className="font-cabinet font-bold">RM</span>
                </div>
                <div>
                  <p className="font-bold">Raj M.</p>
                  <p className="text-sm text-gray-500">Used for roommate disputes</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Our apartment was a war zone over bills, cleaning and noise. The Conflict Fixer caught that we were all operating with different assumptions about 'normal' living standards. Now we have a roommate agreement!"
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="blue" className="font-bold text-lg">
              <Mic className="w-5 h-5" /> Try Conflict Fixer Free
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-6">
              Ready to resolve your conflict?
            </h2>
            <p className="text-xl mb-8">
              Start your free 10-minute session today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="yellow" className="text-gray-900 font-bold text-lg">
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
              <strong>Not legal mediation:</strong> Conflict & Friction Fixer is designed to facilitate productive discussions,
              but is not a substitute for professional mediation or legal advice. For legal disputes or complex conflicts,
              please consult a professional mediator or legal advisor.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ConflictFixer;
