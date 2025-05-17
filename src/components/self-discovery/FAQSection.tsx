
import React from 'react';

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
              Frequently Asked Questions About Our Personality Tests
            </h2>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="How do your AI personality tests work?"
              answer="Our personality tests use voice AI technology to engage you in a natural conversation. The AI analyzes your responses, speech patterns, and content to identify personality traits, strengths, and growth areas. You'll receive personalized insights and coaching based on your assessment."
            />
            
            <FAQItem 
              question="Are these AI personality tests accurate?"
              answer="Our AI personality assessments are designed to provide meaningful insights based on established psychological frameworks. While no personality test is 100% definitive, our voice-based approach captures nuances that text-based tests often miss, offering valuable self-awareness tools for personal growth."
            />
            
            <FAQItem 
              question="How are voice coaching sessions different from regular therapy?"
              answer="Our AI voice coaching is not therapy and should not replace professional mental health treatment. It's a self-discovery tool that provides insights and exercises for personal growth. Unlike therapy, our conversations focus on exploration rather than treatment of clinical conditions."
            />
            
            <FAQItem 
              question="How private are my personality test results and coaching conversations?"
              answer="Your conversations are completely private. We use industry-standard encryption, and your audio is only processed to provide real-time feedback. We anonymize analytics data and do not store conversation content after sessions end. Your personality insights are for your eyes only."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-cabinet font-bold text-xl mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default FAQSection;
