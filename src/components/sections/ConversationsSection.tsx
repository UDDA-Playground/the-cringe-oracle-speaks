
import React from 'react';
import ConversationCard from '../ConversationCard';

const ConversationsSection: React.FC = () => {
  return (
    <section id="conversations" className="py-16 md:py-24 relative bg-gradient-to-b from-white to-gray-50">
      <div className="absolute left-0 w-32 h-32 bg-udda-lavender/20 rounded-full -translate-y-1/2 blur-xl"></div>
      <div className="absolute right-0 bottom-0 w-40 h-40 bg-udda-mint/20 rounded-full translate-y-1/3 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-4 section-title">
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
            description="An impartial 'nanny-boss,' laying down clear rules for ex-couples. Diffuse conflicts around kids, money, and assets with firm but fair guidance."
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
              We&apos;re constantly developing new conversation types. Subscribe to get access as soon as they launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversationsSection;
