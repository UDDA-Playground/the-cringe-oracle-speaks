
import React from 'react';
import { Mic } from 'lucide-react';

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
              <div className="w-12 h-12 rounded-full bg-udda-yellow flex items-center justify-center mr-4">
                <span className="font-cabinet font-bold">JL</span>
              </div>
              <div>
                <p className="font-bold">Jamie L.</p>
                <p className="text-sm text-gray-500">Used with college roommates</p>
              </div>
            </div>
            <p className="text-gray-700">
              "I never knew my roommate had a crush on our TA until UDDA called it out! Cue the red faces and awkward laughing. Now we can't stop using it at parties."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-udda-mint flex items-center justify-center mr-4">
                <span className="font-cabinet font-bold">AS</span>
              </div>
              <div>
                <p className="font-bold">Alex S.</p>
                <p className="text-sm text-gray-500">Used at a dinner party</p>
              </div>
            </div>
            <p className="text-gray-700">
              "We turned it on during dessert and within minutes UDDA correctly identified who was secretly job hunting. Awkward? Yes. But it actually led to an honest conversation we needed to have."
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-udda-coral text-white font-bold text-lg py-3 px-6 rounded-full flex items-center justify-center gap-2">
            <Mic className="w-5 h-5" /> Try Party Conversation Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
