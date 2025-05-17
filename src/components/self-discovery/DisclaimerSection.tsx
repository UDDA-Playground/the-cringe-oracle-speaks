
import React from 'react';

const DisclaimerSection: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            <strong>Not therapy:</strong> Self Discovery Mood-Muffin is designed for general personal development purposes,
            not as a substitute for professional mental health treatment. For clinical support, please consult a licensed professional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
