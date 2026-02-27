import { useRef, useEffect } from 'react';

export const useWithSound = (audioSource: string) => {
  const soundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    soundRef.current = new Audio(audioSource);
    return () => {
      soundRef.current?.pause();
      soundRef.current = null;
    };
  }, [audioSource]);

  const playSound = () => {
    soundRef.current?.play();
  };

  const pauseSound = () => {
    soundRef.current?.pause();
  };

  return {
    playSound,
    pauseSound,
  };
};
