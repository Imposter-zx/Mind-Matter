import { useState, useEffect, useCallback } from 'react';
import { sound } from '../audio/soundSynth';

export function useAudio() {
  const [isEnabled, setIsEnabled] = useState(sound.getSoundEnabled());

  useEffect(() => {
    // Sync with sound state
    setIsEnabled(sound.getSoundEnabled());
  }, []);

  const toggleSound = useCallback(() => {
    const next = sound.toggleSound();
    setIsEnabled(next);
  }, []);

  const playHover = useCallback(() => {
    sound.playHover();
  }, []);

  const playChime = useCallback((freq?: number, type?: OscillatorType) => {
    sound.playChime(freq, type);
  }, []);

  const playSweep = useCallback((up?: boolean) => {
    sound.playSweep(up);
  }, []);

  return {
    isEnabled,
    toggleSound,
    playHover,
    playChime,
    playSweep
  };
}
