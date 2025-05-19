
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
                No, Youth Mentor is not therapy and should not replace professional mental health care. It's a supportive tool that offers guidance, a listening ear, and evidence-based strategies for personal growth.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-cabinet font-bold text-xl mb-2">Is this suitable for all ages?</h3>
              <p className="text-gray-600">
                Youth Mentor is designed for young people ages 10-25, with a primary focus on teens aged 12-17. The content and communication style are adapted to be age-appropriate and relevant.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-cabinet font-bold text-xl mb-2">Är detta tillgängligt på svenska? (Is this available in Swedish?)</h3>
              <p className="text-gray-600">
                Ja! Youth Mentor kan kommunicera på både svenska och engelska. Du väljer själv vilket språk du vill använda. (Yes! Youth Mentor can communicate in both Swedish and English. You choose which language you prefer.)
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-cabinet font-bold text-xl mb-2">How is my privacy protected?</h3>
              <p className="text-gray-600">
                All conversations are confidential and encrypted. We follow strict data protection guidelines and GDPR compliance. Your data is never shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
