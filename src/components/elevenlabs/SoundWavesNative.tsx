
import React from 'react';

interface SoundWavesNativeProps {
  isActive: boolean;
  color?: string;
}

const SoundWavesNative: React.FC<SoundWavesNativeProps> = ({ 
  isActive, 
  color = 'blue' 
}) => {
  return (
    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex items-end justify-center gap-1 h-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div 
          key={i}
          className={`w-0.5 rounded-full transition-all ${isActive ? 'animate-soundwaves' : 'h-0.5'}`}
          style={{
            backgroundColor: `var(--${color}-500, #3b82f6)`,
            animationDelay: `${i * 0.1}s`,
            height: isActive ? `${Math.random() * 12 + 3}px` : '2px'
          }}
        />
      ))}
    </div>
  );
};

export default SoundWavesNative;
