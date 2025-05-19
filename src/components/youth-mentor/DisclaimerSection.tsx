
import React from 'react';

const DisclaimerSection: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            <strong>Important:</strong> Youth Mentor is designed for guidance and support, not as a replacement for professional therapy or counseling. 
            If you're experiencing a mental health crisis, please contact a healthcare professional or call a crisis helpline immediately.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
