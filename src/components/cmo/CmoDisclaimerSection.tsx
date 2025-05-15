
import React from 'react';

const CmoDisclaimerSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 relative overflow-hidden">
      <div className="absolute -right-20 top-0 w-40 h-40 bg-blue-300/20 rounded-full"></div>
      <div className="absolute -left-20 bottom-0 w-40 h-40 bg-purple-300/20 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm funky-border">
          <h3 className="font-cabinet font-bold text-xl mb-4 text-center">
            <span className="bg-blue-100 px-2 py-1 rounded rotate-1 inline-block">Important Information</span>
          </h3>
          <p className="text-gray-600 mb-4">
            When you click the microphone button, your session will be recorded and transcribed to provide 
            you with the best possible marketing advice and a comprehensive written plan. All conversations 
            are securely stored and processed in accordance with GDPR regulations.
          </p>
          <p className="text-gray-600 font-medium">
            Our CMO on demand service is designed to provide expert marketing guidance, but the implementation 
            and results of any marketing strategy ultimately depend on your specific business circumstances and execution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CmoDisclaimerSection;
