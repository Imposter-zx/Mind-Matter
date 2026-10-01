import React from 'react';
import { EvidenceStatus } from '../../types';
import { useTranslation } from '../../i18n';

interface BadgeProps {
  status: EvidenceStatus;
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({ status, className = '', size = 'md' }) => {
  const { t } = useTranslation();

  const getConfig = () => {
    switch (status) {
      case 'ESTABLISHED SCIENTIFIC FACT':
        return {
          color: 'text-warm-olive border-warm-olive/25 bg-warm-secondary/80',
          dot: 'bg-warm-olive',
          label: t.common.badgeFact
        };
      case 'SCIENTIFIC HYPOTHESIS':
        return {
          color: 'text-warm-ink border-warm-border bg-warm-card',
          dot: 'bg-warm-goldMuted',
          label: t.common.badgeScientificHypothesis
        };
      case 'PHILOSOPHICAL HYPOTHESIS':
        return {
          color: 'text-warm-ink border-warm-border bg-warm-card',
          dot: 'bg-warm-goldMuted',
          label: t.common.badgePhilosophicalHypothesis
        };
      case 'THOUGHT EXPERIMENT':
        return {
          color: 'text-warm-olive border-warm-border bg-warm-secondary/60',
          dot: 'bg-warm-oliveLight',
          label: t.common.badgeThoughtExperiment
        };
      case 'OPEN QUESTION / DEBATE':
        return {
          color: 'text-warm-ink border-warm-border bg-warm-secondary/80',
          dot: 'bg-warm-gold',
          label: t.common.badgeOpenQuestion
        };
      case 'SPECULATION':
        return {
          color: 'text-warm-oliveLight border-warm-border bg-warm-secondary/50',
          dot: 'bg-warm-oliveLight',
          label: t.common.badgeSpeculation
        };
      default:
        return {
          color: 'text-warm-inkMuted border-warm-border bg-warm-secondary/50',
          dot: 'bg-warm-oliveLight',
          label: status
        };
    }
  };

  const config = getConfig();

  const sizeClasses = size === 'sm' 
    ? 'text-[10px] px-2.5 py-0.5 tracking-wider gap-1.5' 
    : 'text-xs px-3 py-1 tracking-wider gap-2';

  return (
    <span
      className={`inline-flex items-center font-sans font-medium rounded-full border transition-all duration-200 shadow-warm-sm ${config.color} ${sizeClasses} ${className}`}
      title={config.label}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      <span className="font-semibold uppercase tracking-wider">{config.label}</span>
    </span>
  );
};
