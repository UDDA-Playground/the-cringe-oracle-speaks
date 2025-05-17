
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mic, ArrowLeft, Users, Clock, Euro, Play, MessagesSquare, CheckCircle } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ElevenLabsConvaiWidget from '@/components/ElevenLabsConvaiWidget';

const CouplesBlameBuffer = () => {
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
            <Link to="/" className="inline-flex items-center text-udda-blue hover:text-udda-blue/80 mb-6 font-bold">
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
                
                <div className="mt-8 space-y-4">
                  <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-udda-purple border-udda-purple hover:bg-udda-purple/10 text-base font-bold">
                        <Play className="mr-2" /> Watch Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl h-[70vh]">
                      <div className="relative w-full h-full">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                          title="Couple's Blame Buffer Demo"
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
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200">
                <h2 className="font-cabinet font-bold text-2xl mb-4 text-udda-purple">Start now</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Users size={20} className="text-udda-purple mr-2" />
                    <p>For you and your partner</p>
                  </div>
                  <div className="flex items-center">
                    <Clock size={20} className="text-udda-purple mr-2" />
                    <p>Free for 10 minutes daily</p>
                  </div>
                  <div className="flex items-center">
                    <Euro size={20} className="text-udda-purple mr-2" />
                    <p>€6.95 for 24h unlimited access</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    variant="ultra-purple" 
                    className="w-full"
                    onClick={handleStartConversation}
                  >
                    <Mic className="w-5 h-5" /> Start Talking
                  </Button>
                  <Button variant="outline" className="w-full text-udda-purple border-udda-purple hover:bg-udda-lavender hover:text-white font-bold">
                    Invite Your Partner
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
      <section className="py-16 bg-gradient-to-br from-udda-lavender/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
                See the Blame Buffer in action
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Watch how our AI mediator helps couples navigate difficult conversations with empathy and clarity
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden relative aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1516403374-eae67100494b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Couple talking" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ultra-purple" className="rounded-full p-4 h-16 w-16">
                      <Play size={32} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl h-[70vh]">
                    <div className="relative w-full h-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="Couple's Blame Buffer Demo"
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
                Benefits for your relationship
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Our AI mediator helps you build stronger connections through better communication
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-udda-lavender flex items-center justify-center mb-4">
                  <MessagesSquare className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Improved Communication</h3>
                <p className="text-gray-600">
                  Learn proven techniques that foster open dialogue and help express needs without blame or judgment.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-udda-lavender flex items-center justify-center mb-4">
                  <CheckCircle className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Conflict Resolution</h3>
                <p className="text-gray-600">
                  Transform recurring arguments into productive discussions that lead to genuine understanding and resolution.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-udda-lavender flex items-center justify-center mb-4">
                  <Users className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Deeper Connection</h3>
                <p className="text-gray-600">
                  Build stronger emotional bonds by learning how to truly listen and respond to each other's underlying needs.
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
                <h3 className="font-cabinet font-bold text-xl mb-2">Is this the same as couples therapy?</h3>
                <p className="text-gray-600">
                  No, the Couple's Blame Buffer is not a substitute for professional therapy. It's a communication tool that helps facilitate better conversations between partners, but it does not provide clinical treatment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-cabinet font-bold text-xl mb-2">How private are our conversations?</h3>
                <p className="text-gray-600">
                  Your conversations are completely private. We use industry-standard encryption, and your audio is only processed to provide real-time feedback during your session. We do not store conversation content after sessions end.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-cabinet font-bold text-xl mb-2">Can we use this for any relationship issue?</h3>
                <p className="text-gray-600">
                  The Couple's Blame Buffer is designed for day-to-day communication challenges and minor conflicts. For serious issues involving abuse, addiction, or mental health crises, please seek professional help immediately.
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
            What makes Couple's Blame Buffer special
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-udda-lavender flex items-center justify-center mb-4">
                <span className="text-white text-xl">👂</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Active Listening Guide</h3>
              <p className="text-gray-600">
                Helps ensure both partners truly hear each other by identifying when someone isn't feeling understood.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-udda-lavender flex items-center justify-center mb-4">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Emotion Buffer</h3>
              <p className="text-gray-600">
                Steps in to redirect when the conversation gets heated or shifts toward blame instead of understanding.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-udda-lavender flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔄</span>
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
      <section className="py-16 bg-gray-50">
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
            <Button variant="ultra-purple" className="text-lg">
              <Mic className="w-5 h-5" /> Try Couple's Blame Buffer Free
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-udda-purple to-[#7C3AED] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-6">
              Ready to transform your communication?
            </h2>
            <p className="text-xl mb-8">
              Start your free 10-minute session today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="ultra-yellow" className="text-lg">
                <Mic className="w-5 h-5" /> Start Talking Now
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/20 font-bold">
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
              <strong>Not couples therapy:</strong> Couple's Blame Buffer is designed to facilitate better communication,
              but is not a substitute for professional couples counseling. For relationship issues requiring clinical support, 
              please consult a licensed therapist.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />

      {/* ElevenLabs Conversation Widget */}
      <ElevenLabsConvaiWidget
        agentId="cXEiaJLsMXO8XFzOQh8m"
        isOpen={conversationOpen}
        onOpenChange={setConversationOpen}
      />
    </div>
  );
};

export default CouplesBlameBuffer;
