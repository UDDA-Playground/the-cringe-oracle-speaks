
import React from 'react';

interface SoundWavesNativeProps {
  isActive: boolean;
  color?: string;
  className?: string;
}

const SoundWavesNative: React.FC<SoundWavesNativeProps> = ({ 
  isActive, 
  color = 'blue',
  className = ''
}) => {
  return (
    <div className={`flex items-end justify-center gap-1 h-3 ${className}`}>
      {[1, 2, 3].map((i) => (
        <div 
          key={i}
          className={`w-0.5 rounded-full transition-all ${isActive ? 'animate-soundwaves' : 'h-0.5'}`}
          style={{
            backgroundColor: color === 'white' ? 'white' : `var(--${color}-500, #3b82f6)`,
            animationDelay: `${i * 0.1}s`,
            height: isActive ? `${Math.random() * 12 + 3}px` : '2px'
          }}
        />
      ))}
    </div>
  );
};

export default SoundWavesNative;
