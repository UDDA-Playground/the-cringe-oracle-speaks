
import React from 'react';

interface SoundWavesProps {
  isActive: boolean;
}

const SoundWaves: React.FC<SoundWavesProps> = ({ isActive }) => {
  if (!isActive) return null;
  
  return (
    <div className="sound-waves-container absolute top-[-25px] left-1/2 transform -translate-x-1/2 flex items-end justify-center gap-1 h-5">
      <div className="sound-wave w-1 bg-white/80 rounded-full animate-soundwave1"></div>
      <div className="sound-wave w-1 bg-white/80 rounded-full animate-soundwave2"></div>
      <div className="sound-wave w-1 bg-white/80 rounded-full animate-soundwave3"></div>
      <div className="sound-wave w-1 bg-white/80 rounded-full animate-soundwave4"></div>
      <div className="sound-wave w-1 bg-white/80 rounded-full animate-soundwave2"></div>
    </div>
  );
};

export default SoundWaves;
