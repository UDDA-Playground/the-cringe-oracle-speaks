
import React from 'react';

const DisclaimerSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-cabinet font-semibold text-lg mb-4 text-gray-800">Important Note About This Test</h3>
            <div className="space-y-4 text-gray-600 text-sm">
              <p>
                The Weirdness Test is designed for entertainment and self-discovery purposes. While based on 
                psychological concepts, it is not a clinical diagnostic tool. The insights provided should 
                be taken as thought-provoking rather than definitive statements about your personality.
              </p>
              <p>
                This test is not a substitute for professional psychological assessment or therapy. If you're 
                experiencing mental health concerns, please consult with a qualified healthcare provider.
              </p>
              <p>
                Your privacy is important to us. All conversations with our AI are encrypted and processed in 
                accordance with our privacy policy. We do not permanently store the audio content of your session 
                beyond what is necessary to provide the service.
              </p>
              <p>
                By using this service, you acknowledge that the results are for entertainment and self-reflection 
                purposes only, and you will not make major life decisions based solely on the test outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
