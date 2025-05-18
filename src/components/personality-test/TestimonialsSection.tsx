
import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "I laughed until I cried when the AI perfectly described my weird habit of organizing my refrigerator by color. Apparently that says a lot about my personality!",
      name: "Michael T.",
      location: "Amsterdam",
      rotate: "rotate-1"
    },
    {
      quote: "I've taken tons of personality tests, but this one actually surprised me. It pointed out patterns I never noticed in how I make decisions. Scarily accurate.",
      name: "Sarah K.",
      location: "London",
      rotate: "-rotate-1"
    },
    {
      quote: "At first I thought it was just fun, but then it started describing behaviors I've never told anyone about. I'm still thinking about the insights days later.",
      name: "David M.",
      location: "Berlin",
      rotate: "rotate-2"
    },
    {
      quote: "The test identified my 'controlled chaos' approach to life with painful accuracy. My friends couldn't stop laughing because it was so spot on.",
      name: "Emma L.",
      location: "Paris",
      rotate: "-rotate-2"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-purple-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block -rotate-2 bg-udda-yellow/30 px-4 py-1 rounded-lg mb-4">
              <span className="text-udda-purple font-bold">What people are saying</span>
            </div>
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
              From confused to enlightened
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what others have learned about their weird personality traits from our AI test
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-xl shadow-sm ${testimonial.rotate} hover:shadow-md transition-shadow`}
              >
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-purple-200 to-pink-200 p-8 rounded-2xl text-center">
            <h3 className="font-cabinet font-bold text-2xl mb-2">Join 10,000+ people who've discovered their weird side</h3>
            <p className="text-gray-700 mb-0">Start your free 10-minute test today</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
