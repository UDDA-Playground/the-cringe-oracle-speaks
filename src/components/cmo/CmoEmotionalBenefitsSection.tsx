
import React from 'react';

const CmoEmotionalBenefitsSection: React.FC = () => {
  const benefits = [
    {
      emoji: "😌",
      title: "Relief",
      description: "End decision-fatigue with expert guidance that cuts through marketing complexity"
    },
    {
      emoji: "🚀",
      title: "Confidence",
      description: "Make marketing moves with the assurance of data-backed strategy"
    },
    {
      emoji: "💪",
      title: "Empowerment",
      description: "Access C-level expertise regardless of your company size or budget"
    },
    {
      emoji: "💡",
      title: "Inspiration",
      description: "Discover fresh approaches and innovative ideas to revitalize your marketing"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cabinet font-bold text-4xl mb-4">Beyond Strategy: The Emotional Impact</h2>
            <p className="text-xl text-gray-600">
              Experience how CMO on Demand transforms not just your marketing, but how you feel about it
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="text-4xl mb-3">{benefit.emoji}</div>
                <h3 className="font-cabinet font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-md">
            <h3 className="font-cabinet font-bold text-2xl mb-4 text-center">The Job to Be Done</h3>
            <p className="text-lg text-gray-600 text-center italic">
              "As a founder or marketer, I need a straightforward way to get expert marketing strategy—on my schedule and budget—so I can execute campaigns confidently and grow my business."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CmoEmotionalBenefitsSection;
