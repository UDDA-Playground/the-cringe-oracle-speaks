
import React from 'react';

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="Is this the same as therapy?"
              answer="No, Self Discovery is not therapy and should not replace professional mental health treatment. It's a tool for personal growth and reflection that complements professional support."
            />
            
            <FAQItem 
              question="How private are my conversations?"
              answer="Your conversations are completely private. We use industry-standard encryption, and your audio is only processed to provide real-time feedback. We do not store conversation content after sessions end."
            />
            
            <FAQItem 
              question="What kind of exercises will I do?"
              answer="Our AI offers a variety of brief, targeted exercises including guided reflections, journaling prompts, visualization techniques, and simple behavioral experiments tailored to your specific situation."
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
