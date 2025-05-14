
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Large background blobs */}
      <div 
        className="blob w-[500px] h-[500px] -left-64 -top-64 from-udda-green/30 to-udda-mint/30"
        style={{animation: 'blob 20s infinite alternate'}}
      />
      <div 
        className="blob w-[600px] h-[600px] right-0 top-96 from-udda-lavender/30 to-udda-blush/20"
        style={{animation: 'blob 25s infinite alternate-reverse'}}
      />
      <div 
        className="blob w-[500px] h-[500px] bottom-0 left-1/3 from-udda-yellow/20 to-udda-coral/20"
        style={{animation: 'blob 18s infinite alternate'}}
      />
      
      {/* Small floating elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-udda-mint/30 animate-float" 
        style={{animationDelay: '0s'}} />
      <div className="absolute top-2/3 left-2/3 w-16 h-16 rounded-full bg-udda-coral/20 animate-float"
        style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-udda-yellow/20 animate-float"
        style={{animationDelay: '2s'}} />
      <div className="absolute bottom-1/4 left-1/2 w-12 h-12 rounded-full bg-udda-lavender/20 animate-float"
        style={{animationDelay: '1.5s'}} />
    </div>
  );
};

export default AnimatedBackground;
