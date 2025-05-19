
import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
          What young people are saying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-udda-blue/20 flex items-center justify-center mr-4">
                <span className="font-cabinet font-bold">LS</span>
              </div>
              <div>
                <p className="font-bold">Liam S.</p>
                <p className="text-sm text-gray-500">16 years old</p>
              </div>
            </div>
            <p className="text-gray-700">
              "The Youth Mentor helped me work through my anxiety about school presentations. It taught me breathing techniques and how to challenge negative thoughts. I went from dreading class to actually volunteering to present!"
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-udda-blue/20 flex items-center justify-center mr-4">
                <span className="font-cabinet font-bold">EA</span>
              </div>
              <div>
                <p className="font-bold">Emma A.</p>
                <p className="text-sm text-gray-500">14 years old</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Jag älskar att kunna prata med Youth Mentor på svenska! Det hjälpte mig att hantera bråk med min bästa vän och förstå båda sidorna. Nu har vi löst det och är närmare än någonsin." (I love being able to talk to Youth Mentor in Swedish! It helped me handle a fight with my best friend and understand both sides. Now we've resolved it and are closer than ever.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
