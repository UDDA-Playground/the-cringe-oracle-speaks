
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
            <div className="inline-block -rotate-2 bg-udda-yellow/20 px-4 py-1 rounded-lg mb-4">
              <span className="text-udda-coral font-bold">Not boring therapy. Just weird chats!</span>
            </div>
            <h1 className="font-cabinet font-black text-5xl md:text-7xl mb-6 leading-tight rotate-1">
              Mental health conversations with a 
              <span className="bg-gradient-to-r from-udda-purple via-udda-coral to-udda-yellow bg-clip-text text-transparent"> weird twist</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-700 -rotate-1">
              Not therapy. Just absurdly helpful AI-guided conversations for when you need to talk things out.
              Available when you are, not when someone else is.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg relative group">
                <span className="absolute -inset-1 bg-gradient-to-r from-udda-coral via-udda-yellow to-udda-lavender opacity-30 blur-md rounded-full group-hover:opacity-60 transition-opacity"></span>
                <Mic className="w-5 h-5" /> Start a Conversation
              </button>
              <Link to="#conversations" className="btn-outline text-lg">
                See All Conversations
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Proudly European 🇪🇺 · GDPR Compliant · Not a replacement for licensed therapy
            </p>
            
            {/* Fun floating elements */}
            <div className="hidden md:block absolute top-20 right-[10%] w-16 h-16 bg-udda-yellow/30 rounded-full animate-float" style={{animationDelay: '1.2s'}}></div>
            <div className="hidden md:block absolute bottom-20 left-[5%] w-20 h-20 bg-udda-mint/30 rounded-full animate-pulse-soft" style={{animationDelay: '0.8s'}}></div>
          </div>
        </div>
      </section>
      
      {/* Conversations Section */}
      <section id="conversations" className="py-16 md:py-24 relative bg-gradient-to-b from-white to-gray-50">
        <div className="absolute left-0 w-32 h-32 bg-udda-lavender/20 rounded-full -translate-y-1/2 blur-xl"></div>
        <div className="absolute right-0 bottom-0 w-40 h-40 bg-udda-mint/20 rounded-full translate-y-1/3 blur-xl"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-4 section-title">
              Choose your conversation
            </h2>
            <p className="text-xl text-gray-600">
              From awkward party revelations to deep personal growth. We've got the perfect weird conversation for every situation.
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
              description="An impartial \"nanny-boss,\" laying down clear rules for ex-couples. Diffuse conflicts around kids, money, and assets with firm but fair guidance."
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
            <div className="rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 p-6 flex flex-col items-center justify-center text-center card-hover">
              <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center mb-4">
                <span className="text-white text-3xl">➕</span>
              </div>
              <h3 className="text-xl font-cabinet font-bold mb-3">More coming soon</h3>
              <p className="text-gray-600 mb-6">
                We're constantly developing new conversation types. Subscribe to get access as soon as they launch.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -left-40 top-20 w-80 h-80 bg-gradient-to-br from-udda-lavender/10 to-transparent rounded-full"></div>
        <div className="absolute -right-40 bottom-20 w-80 h-80 bg-gradient-to-br from-udda-mint/10 to-transparent rounded-full"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-4 section-title">
              How it works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, fast, and weirdly effective. Start talking in seconds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center funky-card">
              <div className="w-20 h-20 bg-gradient-to-br from-udda-mint to-udda-green rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:rotate-12">
                <span className="font-cabinet font-bold text-2xl text-white">1</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Choose a conversation</h3>
              <p className="text-gray-600">
                Select the type of conversation that matches your current situation or need
              </p>
            </div>
            <div className="text-center funky-card md:translate-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-udda-blush to-udda-coral rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:-rotate-12">
                <span className="font-cabinet font-bold text-2xl text-white">2</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Start talking</h3>
              <p className="text-gray-600">
                Click the mic and start speaking. Invite friends if needed for group conversations
              </p>
            </div>
            <div className="text-center funky-card">
              <div className="w-20 h-20 bg-gradient-to-br from-udda-lavender to-udda-purple rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:rotate-12">
                <span className="font-cabinet font-bold text-2xl text-white">3</span>
              </div>
              <h3 className="font-cabinet font-bold text-xl mb-3">Get insights</h3>
              <p className="text-gray-600">
                Receive real-time feedback, guidance and a summary of your conversation after
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="btn-primary text-lg relative group">
              <span className="absolute -inset-1 bg-gradient-to-r from-udda-coral via-udda-yellow to-udda-lavender opacity-30 blur-md rounded-full group-hover:opacity-60 transition-opacity"></span>
              <Mic className="w-5 h-5" /> Try it now - Free for 10 minutes
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-udda-mint/10 via-udda-yellow/10 to-udda-coral/10 transform -skew-y-2"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-4 section-title">
              Not just any conversation
            </h2>
            <p className="text-xl text-gray-600">
              Our AI brings special expertise to help you get more from every discussion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-udda-green flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-udda-green/30 to-udda-mint/30 flex items-center justify-center">
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
            
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-udda-coral flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-udda-coral/30 to-udda-orange/30 flex items-center justify-center">
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
            
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-udda-lavender flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-udda-lavender/30 to-udda-purple/30 flex items-center justify-center">
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
            
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-udda-yellow flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-udda-yellow/30 to-udda-orange/30 flex items-center justify-center">
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
      <section className="py-12 bg-gray-100 relative overflow-hidden">
        <div className="absolute -right-20 top-0 w-40 h-40 bg-udda-yellow/20 rounded-full"></div>
        <div className="absolute -left-20 bottom-0 w-40 h-40 bg-udda-green/20 rounded-full"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm funky-border">
            <h3 className="font-cabinet font-bold text-xl mb-4 text-center">
              <span className="bg-yellow-100 px-2 py-1 rounded rotate-1 inline-block">Important: We're Not Therapists</span>
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-udda-green/10 via-udda-mint/20 to-udda-green/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-udda-yellow/20 rounded-full -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-udda-lavender/20 rounded-full translate-y-1/2 blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rotate-2 bg-udda-mint px-4 py-1 rounded-lg mb-4">
              <span className="text-udda-green font-bold">It's weird but it works!</span>
            </div>
            <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-6 section-title">
              Ready to have a weirdly helpful conversation?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start for free. No credit card required. Just 10 minutes of oddly therapeutic chat.
            </p>
            <button className="btn-primary text-lg relative group">
              <span className="absolute -inset-1 bg-gradient-to-r from-udda-coral via-udda-yellow to-udda-lavender opacity-30 blur-md rounded-full group-hover:opacity-60 transition-opacity"></span>
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
