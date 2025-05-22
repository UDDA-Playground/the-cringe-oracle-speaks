
import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl?: string;
  audioBlob?: Blob;
  onPlay?: () => void;
  onPause?: () => void;
  onEnd?: () => void;
  autoPlay?: boolean;
  className?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioUrl,
  audioBlob,
  onPlay,
  onPause,
  onEnd,
  autoPlay = false,
  className = ''
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Create object URL from blob if provided
  const audioSrc = audioBlob ? URL.createObjectURL(audioBlob) : audioUrl;

  // Toggle play/pause
  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      if (onPause) onPause();
    } else {
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
      setIsPlaying(true);
      if (onPlay) onPlay();
    }
  };

  // Update progress bar during playback
  const updateProgress = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      const progressPercent = (currentTime / duration) * 100;
      setProgress(progressPercent);
    }
  };

  // Handle audio end event
  const handleAudioEnd = () => {
    setIsPlaying(false);
    setProgress(0);
    if (onEnd) onEnd();
  };

  // Clean up object URL when component unmounts or src changes
  React.useEffect(() => {
    return () => {
      if (audioBlob && audioSrc) {
        URL.revokeObjectURL(audioSrc);
      }
    };
  }, [audioBlob, audioSrc]);

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={togglePlayback}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        disabled={!audioSrc}
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>
      
      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all" 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <Volume2 size={16} className="text-gray-500" />
      
      <audio 
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={updateProgress}
        onEnded={handleAudioEnd}
        autoPlay={autoPlay}
        className="hidden"
      />
    </div>
  );
};

export default AudioPlayer;
