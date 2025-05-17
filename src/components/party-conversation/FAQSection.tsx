
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
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-cabinet font-bold text-xl mb-2">Is it really that accurate?</h3>
              <p className="text-gray-600">
                Yes! Our AI has been trained to detect subtle conversational cues, body language patterns, and voice tonality that reveal unspoken thoughts and feelings with surprising accuracy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-cabinet font-bold text-xl mb-2">Can I control what gets revealed?</h3>
              <p className="text-gray-600">
                You can set sensitivity levels before starting. At lower settings, the AI will only reveal light, humorous observations. At higher levels... well, prepare for some potentially awkward truths!
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-cabinet font-bold text-xl mb-2">Is it appropriate for all friend groups?</h3>
              <p className="text-gray-600">
                Party Conversation works best with friends who have a good sense of humor and aren't easily offended. For brand new acquaintances or very formal settings, we recommend starting with our lowest sensitivity setting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
