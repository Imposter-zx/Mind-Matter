import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, ArrowLeft, Compass, Sparkles } from 'lucide-react';
import { CosmicField } from '../3d/CosmicField';
import { useAudio } from '../../hooks/useAudio';
import { useTranslation } from '../../i18n';

interface HeroProps {
  onEnter: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnter, onExplore }) => {
  const { playHover, playSweep } = useAudio();
  const { t, isRTL } = useTranslation();

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      {/* 3D Sunlit Dust Particle Field */}
      <div className="absolute inset-0 z-0 opacity-70">
        <CosmicField />
      </div>

      {/* Very subtle warm radial gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(247,243,232,0.1)_0%,rgba(247,243,232,0.7)_65%,rgba(247,243,232,0.98)_100%)] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full warm-card border border-warm-border text-warm-olive text-xs font-sans font-medium tracking-wide mb-6 shadow-warm-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-warm-goldMuted" />
          <span>{t.hero.badge}</span>
        </motion.div>

        {/* Brand Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-wider text-warm-ink uppercase"
        >
          MIND<span className="text-warm-goldMuted">//</span>MATTER
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-xs sm:text-sm md:text-base text-warm-inkMuted tracking-widest uppercase mt-3 mb-8 font-medium"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Central Core Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="max-w-2xl warm-card border border-warm-border rounded-3xl p-6 sm:p-10 backdrop-blur-md mb-10 shadow-warm-md"
        >
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-warm-ink font-normal italic leading-relaxed">
            {t.hero.quote}
          </blockquote>
          <div className="mt-5 flex items-center justify-center gap-3 text-xs font-sans text-warm-oliveLight">
            <span className="w-8 h-[1px] bg-warm-border" />
            <span className="tracking-wider uppercase font-medium">{t.hero.subQuote}</span>
            <span className="w-8 h-[1px] bg-warm-border" />
          </div>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-5 w-full sm:w-auto"
        >
          <button
            onClick={() => {
              playSweep(true);
              onEnter();
            }}
            onMouseEnter={playHover}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-warm-gold hover:bg-warm-goldMuted/90 text-warm-ink font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-warm-md hover:shadow-warm-lg group"
          >
            <span>{t.hero.enterCta}</span>
            <ArrowIcon className={`w-4 h-4 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </button>

          <button
            onClick={() => {
              playSweep(false);
              onExplore();
            }}
            onMouseEnter={playHover}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl warm-card border border-warm-border text-warm-olive hover:text-warm-ink hover:border-warm-olive font-sans font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-warm-sm"
          >
            <Compass className="w-4 h-4 text-warm-goldMuted" />
            <span>{t.hero.exploreCta}</span>
          </button>
        </motion.div>

        {/* Microcopy Floating Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-14 font-sans text-xs text-warm-inkMuted tracking-wider flex items-center gap-2 text-center"
        >
          <span>{t.hero.microQuote}</span>
        </motion.div>
      </div>

      {/* Bottom Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="text-[10px] font-sans tracking-widest text-warm-oliveLight uppercase font-medium">
          {t.hero.scrollCue}
        </span>
        <ChevronDown className="w-4 h-4 text-warm-goldMuted animate-bounce" />
      </motion.div>
    </section>
  );
};
