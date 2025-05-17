
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
  );
};

export default FAQSection;
