
import { useState, useRef, useCallback } from 'react';

export const useAudioPlayer = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  const initializeAudio = useCallback(() => {
    if (!audioElementRef.current) {
      audioElementRef.current = new Audio();
      
      audioElementRef.current.onended = () => {
        console.log("Audio playback ended");
        setIsSpeaking(false);
      };
      
      audioElementRef.current.onplay = () => {
        console.log("Audio playback started");
        setIsSpeaking(true);
      };
      
      audioElementRef.current.onerror = (e) => {
        console.error("Audio playback error:", e);
        setIsSpeaking(false);
      };
    }
  }, []);

  const playAudio = useCallback((blob: Blob) => {
    initializeAudio();
    
    if (!audioElementRef.current) return;
    
    const url = URL.createObjectURL(blob);
    console.log("Playing audio from URL:", url);
    
    audioElementRef.current.src = url;
    audioElementRef.current.onended = () => {
      setIsSpeaking(false);
      URL.revokeObjectURL(url);
    };
    
    audioElementRef.current.play()
      .then(() => {
        console.log("Audio playback started successfully");
      })
      .catch(error => {
        console.error("Error playing audio:", error);
        setIsSpeaking(false);
        URL.revokeObjectURL(url);
      });
  }, [initializeAudio]);

  const stopSpeaking = useCallback(() => {
    if (audioElementRef.current) {
      audioElementRef.current.pause();
      audioElementRef.current.currentTime = 0;
    }
    setIsSpeaking(false);
    setAudioBlob(null);
  }, []);

  const cleanup = useCallback(() => {
    if (audioElementRef.current) {
      audioElementRef.current.pause();
      audioElementRef.current = null;
    }
  }, []);

  return {
    isSpeaking,
    audioBlob,
    playAudio,
    stopSpeaking,
    setAudioBlob,
    cleanup
  };
};
