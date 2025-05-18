
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
            <p className="text-lg text-gray-600">
              Everything you need to know about our weird AI personality test
            </p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="Is this test actually scientific?"
              answer="Our test combines elements of established personality psychology with cutting-edge AI language analysis. While it's packaged with humor, the underlying analysis draws from psychological frameworks for identifying personality traits, communication patterns, and cognitive tendencies. The results are both entertaining and genuinely insightful."
            />
            
            <FAQItem 
              question="How accurate is the weirdness assessment?"
              answer="The accuracy depends on how openly you speak with the AI. Most users report 80-90% accuracy in identifying traits they recognize but don't often discuss. The test is particularly good at spotting contradictions between your stated beliefs and emotional reactions, which often reveal hidden aspects of personality."
            />
            
            <FAQItem 
              question="Will my weird traits be shared with anyone else?"
              answer="Absolutely not. Your conversation and results are private. We use industry-standard encryption, and your audio is only processed to provide real-time feedback. We anonymize analytics data and do not store conversation content after sessions end. Your weirdness is for your eyes only."
            />
            
            <FAQItem 
              question="I don't think I'm weird. Will this test still work for me?"
              answer="That's exactly who this test is for! Everyone has unexpected quirks and contradictions in their personality that they don't recognize. The people who think they're 'completely normal' often have the most fascinating insights to discover. Our AI is designed to find the unique aspects of personality that make you distinctly you."
            />
            
            <FAQItem 
              question="Is this similar to therapy or psychological counseling?"
              answer="No, this is not therapy or a replacement for mental health services. While the test can provide valuable self-awareness, it's designed for entertainment and personal insight. If you're seeking help for mental health concerns, please consult with a licensed professional rather than an AI personality test."
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
