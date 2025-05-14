
import React from 'react';
import { Mic, Users, MessageSquare, Star, Zap, Lightbulb, Handshake, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConversationCard from '../components/ConversationCard';
import PricingSection from '../components/PricingSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-cabinet font-black text-5xl md:text-7xl mb-6 leading-tight">
              Mental health conversations with a 
              <span className="bg-gradient-to-r from-udda-green to-udda-yellow bg-clip-text text-transparent"> weird twist</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-700">
              Not therapy. Just absurdly helpful AI-guided conversations for when you need to talk things out.
              Available when you are, not when someone else is.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg">
                <Mic className="w-5 h-5" /> Start a Conversation
              </button>
              <Link to="#conversations" className="btn-outline text-lg">
                See All Conversations
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Proudly European 🇪🇺 · GDPR Compliant · Not a replacement for licensed therapy
            </p>
          </div>
        </div>
      </section>
      
      {/* Conversations Section */}
      <section id="conversations" className="py-16 md:py-24 relative bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-4">
              Choose your conversation
            </h2>
            <p className="text-xl text-gray-600">
              From awkward party revelations to deep personal growth. We&apos;ve got the perfect weird conversation for every situation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ConversationCard 
              title="Party Conversation" 
              description="Let three friends chat freely while the AI secretly annotates subtext. Pop up hilarious (and mortifying) insights into insecurities, phobias, and crushes."
              icon="🎭" 
              color="bg-udda-coral" 
              gradient="bg-gradient-to-br from-udda-coral to-udda-yellow"
              path="/party-conversation" 
            />
            <ConversationCard 
              title="Self Discovery Mood-Muffin" 
              description="Your growth-focused partner, guiding self-reflection and insight. Help you pinpoint recurring thoughts, blocks, and limiting beliefs."
              icon="🧠" 
              color="bg-udda-green" 
              gradient="bg-gradient-to-br from-udda-green to-udda-mint"
              path="/self-discovery" 
            />
            <ConversationCard 
              title="Couple's Blame Buffer" 
              description="A seasoned steward, steering dialogue toward deeper connection. Surface unspoken expectations and help partners own their roles in conflicts."
              icon="❤️" 
              color="bg-udda-lavender" 
              gradient="bg-gradient-to-br from-udda-lavender to-udda-blush"
              path="/couples-blame-buffer" 
            />
            <ConversationCard 
              title="Ex-Couple Entanglement Sheriff" 
              description="An impartial &quot;nanny-boss,&quot; laying down clear rules for ex-couples. Diffuse conflicts around kids, money, and assets with firm but fair guidance."
              icon="👮" 
              color="bg-udda-yellow" 
              gradient="bg-gradient-to-br from-udda-yellow to-yellow-300"
              path="/ex-couple-entanglement" 
            />
            <ConversationCard 
              title="Conflict & Friction Fixer" 
              description="A neutral mediator to structure tense exchanges and keep discussions on track. Uncover underlying needs and reframe blame into constructive dialogue."
              icon="🤝" 
              color="bg-blue-400" 
              gradient="bg-gradient-to-br from-blue-400 to-udda-mint"
              path="/conflict-fixer" 
            />
            <div className="rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center mb-4">
                <span className="text-white text-3xl">➕</span>
              </div>
              <h3 className="text-xl font-cabinet font-bold mb-3">More coming soon</h3>
              <p className="text-gray-600 mb-6">
                We&apos;re constantly developing new conversation types. Subscribe to get access as soon as they launch.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, fast, and weirdly effective. Start talking in seconds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-udda-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-cabinet font-bold text-2xl">1</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Choose a conversation</h3>
              <p className="text-gray-600">
                Select the type of conversation that matches your current situation or need
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-udda-blush rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-cabinet font-bold text-2xl">2</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Start talking</h3>
              <p className="text-gray-600">
                Click the mic and start speaking. Invite friends if needed for group conversations
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-udda-lavender rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-cabinet font-bold text-2xl">3</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Get insights</h3>
              <p className="text-gray-600">
                Receive real-time feedback, guidance and a summary of your conversation after
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="btn-primary text-lg">
              <Mic className="w-5 h-5" /> Try it now - Free for 10 minutes
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-4">
              Not just any conversation
            </h2>
            <p className="text-xl text-gray-600">
              Our AI brings special expertise to help you get more from every discussion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-udda-green/20 flex items-center justify-center">
                  <Zap size={24} className="text-udda-green" />
                </div>
              </div>
              <div>
                <h3 className="font-cabinet font-bold text-xl mb-2">Expert Knowledge</h3>
                <p className="text-gray-600">
                  Access the wisdom of a world-class expert with deep expertise in psychology, wellness, and other industry knowledge
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-udda-coral/20 flex items-center justify-center">
                  <Lightbulb size={24} className="text-udda-coral" />
                </div>
              </div>
              <div>
                <h3 className="font-cabinet font-bold text-xl mb-2">Truth Bombs</h3>
                <p className="text-gray-600">
                  Get honest, unfiltered insights that reveal hidden truths and opportunities others might miss
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-udda-lavender/20 flex items-center justify-center">
                  <Handshake size={24} className="text-udda-lavender" />
                </div>
              </div>
              <div>
                <h3 className="font-cabinet font-bold text-xl mb-2">Moderating Space</h3>
                <p className="text-gray-600">
                  Ensure everyone contributes equally with gentle guidance that keeps conversations productive
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-udda-yellow/20 flex items-center justify-center">
                  <Wrench size={24} className="text-udda-yellow" />
                </div>
              </div>
              <div>
                <h3 className="font-cabinet font-bold text-xl mb-2">Remove Bottlenecks in Real Time</h3>
                <p className="text-gray-600">
                  With an expert moderator, quickly resolve knots and frictions that block critical decisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Disclaimer */}
      <section className="py-12 bg-gray-100 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm">
            <h3 className="font-cabinet font-bold text-xl mb-4 text-center">
              Important: We're Not Therapists
            </h3>
            <p className="text-gray-600 mb-4">
              UDDA is designed to facilitate helpful conversations and provide general guidance for everyday 
              mental wellness. We're here to help you talk through issues, but we're not a replacement for 
              professional mental health care.
            </p>
            <p className="text-gray-600 font-medium">
              If you're experiencing a crisis or need clinical support, please contact a licensed mental 
              health professional or call your local emergency services.
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <PricingSection />
      
      {/* CTA */}
      <section className="py-16 md:py-24 bg-udda-green/10 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-6">
              Ready to have a weirdly helpful conversation?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start for free. No credit card required. Just 10 minutes of oddly therapeutic chat.
            </p>
            <button className="btn-primary text-lg">
              <Mic className="w-5 h-5" /> Start Talking Now
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
