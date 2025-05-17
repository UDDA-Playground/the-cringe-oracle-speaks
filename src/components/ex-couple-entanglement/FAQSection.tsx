
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
              <h3 className="font-cabinet font-bold text-xl mb-2">Is this therapy?</h3>
              <p className="text-gray-600">
                No, this tool is designed to provide guidance and support, not to replace professional therapy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-cabinet font-bold text-xl mb-2">How does it handle sensitive information?</h3>
              <p className="text-gray-600">
                Your privacy is our priority. All conversations are encrypted and kept confidential.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-cabinet font-bold text-xl mb-2">Can this tool help with co-parenting issues?</h3>
              <p className="text-gray-600">
                Yes, it can provide strategies for healthier communication and boundary setting, which can be beneficial in co-parenting situations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
