
import React from 'react';

const CmoTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      content: "This CMO on demand service completely transformed our marketing strategy. We were stuck in a cycle of ineffective campaigns, but after one conversation, we had clear direction and started seeing results within weeks.",
      author: "Sarah Johnson",
      position: "Marketing Director, TechScale Inc."
    },
    {
      content: "As a solo entrepreneur, I couldn't afford a full-time CMO, but I desperately needed that expertise. This service gave me exactly what I needed at a fraction of the cost. The marketing plan was comprehensive and perfectly tailored to my business.",
      author: "Michael Chen",
      position: "Founder, GrowthLoop"
    },
    {
      content: "We had been making the classic mistake of focusing too much on lead generation without proper demand generation. Our CMO conversation opened our eyes to this fundamental issue and completely changed our approach.",
      author: "Rebecca Torres",
      position: "VP Marketing, Elevate Brands"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block rotate-2 bg-blue-100 px-4 py-1 rounded-lg mb-4">
            <span className="text-blue-600 font-bold">Success stories</span>
          </div>
          <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-4 section-title">
            Marketing transformations
          </h2>
          <p className="text-xl text-gray-600">
            See how businesses like yours are achieving remarkable results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CmoTestimonialsSection;
