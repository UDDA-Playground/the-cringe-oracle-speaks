
import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
          What people are saying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-udda-mint flex items-center justify-center mr-4">
                <span className="font-cabinet font-bold">JD</span>
              </div>
              <div>
                <p className="font-bold">Jamie D.</p>
                <p className="text-sm text-gray-500">Navigating co-parenting</p>
              </div>
            </div>
            <p className="text-gray-700">
              "UDDA helped me communicate more effectively with my ex about our kids. It's made co-parenting much smoother."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-udda-yellow flex items-center justify-center mr-4">
                <span className="font-cabinet font-bold">LP</span>
              </div>
              <div>
                <p className="font-bold">Laura P.</p>
                <p className="text-sm text-gray-500">Setting boundaries</p>
              </div>
            </div>
            <p className="text-gray-700">
              "I was struggling to set boundaries with my ex, but UDDA gave me the tools and confidence to do it. It's been a game-changer."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
