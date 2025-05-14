
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, rating }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-udda-coral relative">
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={`${i < rating ? 'text-udda-yellow fill-udda-yellow' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-4">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-udda-green to-udda-mint flex items-center justify-center text-white font-bold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-cabinet font-bold">{author}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "I was skeptical at first, but these weird conversations really helped me break through patterns I've been stuck in for years.",
      author: "Mia K.",
      role: "Teacher & Anxious Overthinker",
      rating: 5
    },
    {
      quote: "The Party Conversation was HILARIOUS and actually helped my friend group address some tensions we'd been avoiding.",
      author: "Alex J.",
      role: "Marketing Manager",
      rating: 4
    },
    {
      quote: "After trying traditional therapy for months, this weird approach finally helped me see my relationship patterns clearly.",
      author: "Thomas R.",
      role: "Software Developer",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-udda-lavender/20 rounded-full -translate-y-1/2 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-udda-mint/20 rounded-full translate-y-1/2 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block rotate-1 bg-udda-yellow/20 px-4 py-1 rounded-lg mb-4">
            <span className="text-udda-coral font-bold">People are talking!</span>
          </div>
          <h2 className="font-cabinet font-bold text-4xl md:text-5xl mb-4 section-title">
            What our users say
          </h2>
          <p className="text-xl text-gray-600">
            Real people, real weird conversations, real results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
