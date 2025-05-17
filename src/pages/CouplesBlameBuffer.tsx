import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Clock, Euro, Heart } from 'lucide-react'; // Changed from Users to User
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import ElevenLabsConvaiWidget from '@/components/ElevenLabsConvaiWidget';
import TalkButton from '@/components/TalkButton';

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
            <Link to="/" className="inline-flex items-center text-udda-blue hover:text-udda-blue/80 mb-6 font-semibold">
              <ArrowLeft size={16} className="mr-2" /> Back to all conversations
            </Link>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-udda-coral flex items-center justify-center mr-4">
                <Heart size={32} className="text-white" />
              </div>
              <h1 className="font-cabinet font-black text-4xl md:text-5xl">
                Couples Blame Buffer
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              A safe space to vent frustrations, gain perspective, and foster understanding in your relationship.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-cabinet font-bold text-2xl mb-4">How it works</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <p>Start a private conversation with your AI relationship coach</p>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <p>Express your feelings and frustrations about a specific situation</p>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <p>Receive empathetic feedback and alternative perspectives</p>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 rounded-full bg-udda-coral/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <p>Learn actionable strategies to communicate more effectively</p>
                  </li>
                </ul>

                <div className="mt-8 space-y-4">
                  <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-coral-600 text-coral-700 hover:bg-coral-50 hover:text-coral-800"
                      >
                        Watch Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl h-[70vh]">
                      <div className="relative w-full h-full">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                          title="Couples Blame Buffer Demo"
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
                <h2 className="font-cabinet font-bold text-2xl mb-4 text-coral-700">Start now</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <User size={20} className="text-coral-700 mr-2" />
                    <p>Private one-on-one conversation</p>
                  </div>
                  <div className="flex items-center">
                    <Clock size={20} className="text-coral-700 mr-2" />
                    <p>Free for 10 minutes daily</p>
                  </div>
                  <div className="flex items-center">
                    <Euro size={20} className="text-coral-700 mr-2" />
                    <p>€6.95 for 24h unlimited access</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <TalkButton onClick={handleStartConversation} variant="high-contrast-green" />
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
                See Couples Blame Buffer in action
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Watch how our AI helps couples navigate conflicts and strengthen their relationship
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden relative aspect-video">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f825cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Couple in thoughtful reflection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="coral" className="rounded-full p-4 h-16 w-16">
                      <Heart size={32} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl h-[70vh]">
                    <div className="relative w-full h-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Couples Blame Buffer Demo"
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
                Strengthen your relationship
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Areas where our AI companion can help you grow together
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-coral-600 flex items-center justify-center mb-4">
                  <Heart className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Empathy Building</h3>
                <p className="text-gray-600">
                  Develop a deeper understanding of your partner's feelings and perspective.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-coral-600 flex items-center justify-center mb-4">
                  <User className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Communication Skills</h3>
                <p className="text-gray-600">
                  Learn effective strategies to express your needs and resolve conflicts constructively.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-coral-600 flex items-center justify-center mb-4">
                  <Clock className="text-white" />
                </div>
                <h3 className="font-cabinet font-bold text-xl mb-3">Conflict Resolution</h3>
                <p className="text-gray-600">
                  Find mutually agreeable solutions and prevent recurring arguments.
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
                <h3 className="font-cabinet font-bold text-xl mb-2">Is this couples therapy?</h3>
                <p className="text-gray-600">
                  No, Couples Blame Buffer is not a substitute for professional couples therapy. It's a tool for improving communication and understanding, not a replacement for clinical intervention.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-cabinet font-bold text-xl mb-2">How does it handle sensitive information?</h3>
                <p className="text-gray-600">
                  Your conversations are confidential and encrypted. We do not share your data with third parties, and your audio is only processed to provide real-time feedback.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-cabinet font-bold text-xl mb-2">Can this really help us?</h3>
                <p className="text-gray-600">
                  While results vary, many couples find that using the Blame Buffer helps them express themselves more openly, understand each other better, and develop healthier communication patterns.
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
            What makes Couples Blame Buffer special
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-coral-600/20 flex items-center justify-center mb-4">
                <span className="text-coral-700 text-xl">👂</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Active Listening</h3>
              <p className="text-gray-600">
                Encourages you to truly listen and understand your partner's perspective.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-coral-600/20 flex items-center justify-center mb-4">
                <span className="text-coral-700 text-xl">🎭</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Role-Playing</h3>
              <p className="text-gray-600">
                Simulates conversations to help you practice new communication techniques.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-coral-600/20 flex items-center justify-center mb-4">
                <span className="text-coral-700 text-xl">🤝</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Mediation</h3>
              <p className="text-gray-600">
                Helps you find common ground and resolve conflicts in a fair and respectful manner.
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
                <div className="w-12 h-12 rounded-full bg-udda-lavender flex items-center justify-center mr-4">
                  <span className="font-cabinet font-bold">JL</span>
                </div>
                <div>
                  <p className="font-bold">Jessica L.</p>
                  <p className="text-sm text-gray-500">Improved communication</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The Blame Buffer helped us understand each other's feelings without getting defensive. It's like having a therapist in your pocket!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-udda-blush flex items-center justify-center mr-4">
                  <span className="font-cabinet font-bold">TB</span>
                </div>
                <div>
                  <p className="font-bold">Tom B.</p>
                  <p className="text-sm text-gray-500">Better conflict resolution</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I was skeptical, but the AI actually helped us find common ground during a disagreement. We're communicating much better now."
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="coral"
              className="font-bold text-lg"
              onClick={handleStartConversation}
            >
              Try Couples Blame Buffer Free
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-coral-600 to-coral-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-6">
              Ready to strengthen your relationship?
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
                Start Talking Now
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
              <strong>Not therapy:</strong> Couples Blame Buffer is designed for general relationship improvement purposes,
              not as a substitute for professional couples therapy. For clinical support, please consult a licensed therapist.
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

export default CouplesBlameBuffer;
