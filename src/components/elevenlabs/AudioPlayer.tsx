
import React, { useRef, useState, useEffect } from 'react';
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
  const [audioSrc, setAudioSrc] = useState<string>('');

  // Create object URL from blob when blob changes
  useEffect(() => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      console.log("Created URL from blob:", url);
      setAudioSrc(url);
      
      // Auto-play if specified
      if (autoPlay && audioRef.current) {
        console.log("Auto-playing audio");
        audioRef.current.play().catch(error => {
          console.error('Error auto-playing audio:', error);
        });
      }
      
      return () => {
        console.log("Revoking object URL:", url);
        URL.revokeObjectURL(url);
      };
    } else if (audioUrl) {
      console.log("Using audio URL:", audioUrl);
      setAudioSrc(audioUrl);
    }
  }, [audioBlob, audioUrl, autoPlay]);

  // Toggle play/pause
  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      console.log("Pausing audio");
      audioRef.current.pause();
      setIsPlaying(false);
      if (onPause) onPause();
    } else {
      console.log("Playing audio");
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
    console.log("Audio playback ended");
    setIsPlaying(false);
    setProgress(0);
    if (onEnd) onEnd();
  };

  // Monitor play state from audio element events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const handlePlay = () => {
      console.log("Audio play event");
      setIsPlaying(true);
    };
    
    const handlePause = () => {
      console.log("Audio pause event");
      setIsPlaying(false);
    };
    
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

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
        className="hidden"
      />
    </div>
  );
};

export default AudioPlayer;
