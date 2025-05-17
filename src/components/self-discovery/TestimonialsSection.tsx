
import React from 'react';
import ElevenLabsEmbed from '@/components/ElevenLabsEmbed';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-10 text-center">
          What people are saying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard 
            initials="MR"
            name="Michael R."
            context="Using for personal growth"
            bgColor="bg-udda-mint"
            testimonial="I was skeptical at first, but after a few sessions, UDDA helped me realize I kept sabotaging job opportunities because of an underlying fear of success. Weirdly accurate and actually helpful."
          />
          
          <TestimonialCard 
            initials="KT"
            name="Kim T."
            context="Working through a career change"
            bgColor="bg-udda-yellow"
            testimonial="The 'Mood-Muffin' (silly name, surprisingly helpful tool) helped me work through my indecision about changing careers. The mini-exercises actually gave me clarity where months of overthinking failed."
          />
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block">
            <ElevenLabsEmbed 
              agentId="agent_01jvfdv8ybemj84w5zb4yjav5y"
              className="min-h-12 w-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  initials: string;
  name: string;
  context: string;
  bgColor: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ initials, name, context, bgColor, testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center mr-4`}>
          <span className="font-cabinet font-bold">{initials}</span>
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-500">{context}</p>
        </div>
      </div>
      <p className="text-gray-700">{testimonial}</p>
    </div>
  );
};

export default TestimonialsSection;
