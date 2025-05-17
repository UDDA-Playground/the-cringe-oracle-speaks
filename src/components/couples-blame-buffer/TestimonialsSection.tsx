
import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
          What couples are saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-udda-lavender flex items-center justify-center mr-4">
                <span className="font-cabinet font-bold">JL</span>
              </div>
              <div>
                <p className="font-bold">Jessica L.</p>
                <p className="text-sm text-gray-500">Improved communication</p>
              </div>
            </div>
            <p className="text-gray-700">
              "The Blame Buffer helped us understand each other's feelings without getting defensive. It's like having a therapist in your pocket!"
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-udda-blush flex items-center justify-center mr-4">
                <span className="font-cabinet font-bold">TB</span>
              </div>
              <div>
                <p className="font-bold">Tom B.</p>
                <p className="text-sm text-gray-500">Better conflict resolution</p>
              </div>
            </div>
            <p className="text-gray-700">
              "I was skeptical, but the AI actually helped us find common ground during a disagreement. We're communicating much better now."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
