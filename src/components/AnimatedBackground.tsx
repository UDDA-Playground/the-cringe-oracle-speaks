
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Large background blobs with more vibrant colors */}
      <div 
        className="blob w-[600px] h-[600px] -left-64 -top-64 from-udda-green/50 to-udda-mint/50"
        style={{animation: 'blob 20s infinite alternate'}}
      />
      <div 
        className="blob w-[700px] h-[700px] right-0 top-96 from-udda-lavender/40 to-udda-pink/30"
        style={{animation: 'blob 25s infinite alternate-reverse'}}
      />
      <div 
        className="blob w-[600px] h-[600px] bottom-0 left-1/3 from-udda-yellow/30 to-udda-coral/30"
        style={{animation: 'blob 18s infinite alternate'}}
      />
      <div 
        className="blob w-[500px] h-[500px] top-1/2 right-1/4 from-udda-orange/20 to-udda-purple/20"
        style={{animation: 'blob 22s infinite alternate-reverse'}}
      />
      
      {/* Fun shapes and elements */}
      <div className="absolute top-20 left-[10%] w-16 h-16 bg-udda-purple/20 rounded-full animate-spin-slow"></div>
      <div className="absolute top-[30%] right-[5%] w-20 h-20 rotate-45 bg-udda-pink/15 rounded-lg animate-bounce-light"></div>
      <div className="absolute bottom-[10%] left-[15%] w-24 h-8 bg-udda-yellow/20 rounded-full animate-wiggle"></div>
      
      {/* Small floating elements with more playful animations */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-udda-mint/40 to-udda-green/40 animate-float" 
        style={{animationDelay: '0s'}} />
      <div className="absolute top-2/3 left-2/3 w-16 h-16 rounded-full bg-gradient-to-br from-udda-coral/30 to-udda-orange/30 animate-float"
        style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-udda-yellow/30 to-udda-orange/30 animate-float"
        style={{animationDelay: '2s'}} />
      <div className="absolute bottom-1/4 left-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-udda-lavender/30 to-udda-purple/30 animate-float"
        style={{animationDelay: '1.5s'}} />
      
      {/* Funky shapes */}
      <div className="absolute bottom-[30%] right-[20%] w-16 h-16 bg-udda-blue/15 rounded-tr-3xl rounded-bl-3xl animate-pulse-soft"
        style={{animationDelay: '3s'}}></div>
      <div className="absolute top-[15%] left-[30%] w-12 h-12 bg-udda-pink/10 rotate-12 rounded-tl-xl rounded-br-xl animate-wiggle"
        style={{animationDelay: '1s'}}></div>
    </div>
  );
};

export default AnimatedBackground;
