import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';

interface SoundToggleProps {
  className?: string;
  variant?: 'floating' | 'inline';
}

export const SoundToggle: React.FC<SoundToggleProps> = ({ className = '', variant = 'inline' }) => {
  const { isEnabled, toggleSound, playHover } = useAudio();
  const { t } = useTranslation();

  const handleToggle = () => {
    toggleSound();
  };

  if (variant === 'floating') {
    return (
      <button
        onClick={handleToggle}
        onMouseEnter={playHover}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full warm-card border border-warm-border hover:border-warm-goldMuted text-warm-ink transition-all duration-300 shadow-warm-md hover:shadow-warm-lg group ${className}`}
        title={isEnabled ? t.common.audioOn : t.common.audioOff}
        aria-label={isEnabled ? t.common.audioOn : t.common.audioOff}
      >
        <div className="flex items-center gap-2 px-1">
          {isEnabled ? (
            <>
              <Volume2 className="w-4 h-4 text-warm-olive" />
              <div className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 h-2 bg-warm-goldMuted animate-pulse" />
                <span className="w-0.5 h-3 bg-warm-olive animate-pulse delay-75" />
                <span className="w-0.5 h-1.5 bg-warm-goldMuted animate-pulse delay-150" />
              </div>
              <span className="text-xs font-sans font-medium text-warm-olive hidden sm:inline">{t.common.audioOn}</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-warm-oliveLight group-hover:text-warm-ink" />
              <span className="text-xs font-sans font-medium text-warm-inkMuted hidden sm:inline">{t.common.audioOff}</span>
            </>
          )}
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      onMouseEnter={playHover}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-warm-border transition-all duration-200 font-sans text-xs ${
        isEnabled
          ? 'bg-warm-gold/30 border-warm-goldMuted text-warm-ink font-semibold'
          : 'bg-warm-secondary/70 text-warm-inkMuted hover:text-warm-ink hover:bg-white/60'
      } ${className}`}
      title={isEnabled ? t.common.audioOn : t.common.audioOff}
      aria-label={isEnabled ? t.common.audioOn : t.common.audioOff}
    >
      {isEnabled ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-warm-olive" />
          <span>{t.common.audioOn}</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5" />
          <span>{t.common.audioOff}</span>
        </>
      )}
    </button>
  );
};
