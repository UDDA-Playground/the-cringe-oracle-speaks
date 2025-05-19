
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
            Choose your personality test & coaching
          </h2>
          <p className="text-xl text-gray-600">
            From personality assessments to AI coaching sessions. Find the perfect voice conversation for your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ConversationCard 
            title="Personality Test Chat" 
            description="Take our engaging AI voice personality test that uncovers insights about your traits, strengths, and potential growth areas through natural conversation."
            gradient="bg-gradient-to-br from-udda-coral to-udda-yellow"
            path="/party-conversation" 
            illustration="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=240&auto=format&fit=crop"
          />
          <ConversationCard 
            title="Self Discovery Coach" 
            description="Our popular AI personality assessment and growth coach guides you through self-reflection to identify patterns, strengths and limiting beliefs."
            gradient="bg-gradient-to-br from-udda-green to-udda-mint"
            path="/self-discovery" 
            illustration="https://images.unsplash.com/photo-1546027031-83f112827114?q=80&w=240&auto=format&fit=crop"
          />
          <ConversationCard 
            title="Couple's Relationship Coach" 
            description="An AI coaching conversation that helps couples understand their relationship dynamics, communication styles, and pathways to deeper connection."
            gradient="bg-gradient-to-br from-udda-lavender to-udda-blush"
            path="/couples-blame-buffer" 
            illustration="https://images.unsplash.com/photo-1516589091380-5d8e87df6999?q=80&w=240&auto=format&fit=crop"
          />
          <ConversationCard 
            title="Co-Parenting Coach" 
            description="An impartial AI coach specializing in helping ex-couples navigate co-parenting challenges with customized strategies and communication tools."
            gradient="bg-gradient-to-br from-udda-yellow to-yellow-300"
            path="/ex-couple-entanglement" 
            illustration="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=240&auto=format&fit=crop"
          />
          <ConversationCard 
            title="Youth Mentor" 
            description="Evidence-based AI guidance for ages 10-25, supporting mental well-being, identity formation, and healthy relationships in both English and Swedish."
            gradient="bg-gradient-to-br from-udda-blue to-blue-300"
            path="/youth-mentor" 
            illustration="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=240&auto=format&fit=crop"
          />
          <ConversationCard 
            title="Weirdness Test" 
            description="Discover your hidden traits, secret fears, and true motivations through a fun AI voice conversation that's both hilarious and insightful."
            gradient="bg-gradient-to-br from-purple-500 to-udda-lavender"
            path="/personality-test" 
            illustration="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=240&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};

export default ConversationsSection;
