import React, { useState } from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { QuestionProgression } from './components/sections/QuestionProgression';
import { PanpsychismSection } from './components/sections/PanpsychismSection';
import { ConsciousnessScale } from './components/sections/ConsciousnessScale';
import { CombinationProblem } from './components/sections/CombinationProblem';
import { AILab } from './components/sections/AILab';
import { ThoughtExperiments } from './components/sections/ThoughtExperiments';
import { CosmicVisualization } from './components/sections/CosmicVisualization';
import { CosmopsychismSection } from './components/sections/CosmopsychismSection';
import { PhilosophyQuiz } from './components/sections/PhilosophyQuiz';
import { FinalDilemma } from './components/sections/FinalDilemma';
import { Footer } from './components/sections/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { Modal } from './components/ui/Modal';
import { SoundToggle } from './components/ui/SoundToggle';
import { AboutPage } from './components/pages/AboutPage';
import { ReferencesPage } from './components/pages/ReferencesPage';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useTranslation } from './i18n/useTranslation';

export const App: React.FC = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isReferencesOpen, setIsReferencesOpen] = useState(false);
  const { t } = useTranslation();

  const sectionIds = [
    'hero',
    'question',
    'panpsychism',
    'scale',
    'combination',
    'ailab',
    'experiments',
    'cosmic',
    'quiz'
  ];

  const activeSection = useScrollSpy(sectionIds, 200);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      const pos = elRect - bodyRect - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-warm-bg text-warm-ink selection:bg-warm-gold/40 selection:text-warm-ink relative overflow-x-hidden font-sans">
      {/* Subtle Custom Interactive Cursor */}
      <CustomCursor />

      {/* Floating Sound Toggle */}
      <SoundToggle variant="floating" />

      {/* Fixed Navigation Bar */}
      <Navbar
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenReferences={() => setIsReferencesOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Experience Flow */}
      <main>
        <Hero
          onEnter={() => scrollToSection('question')}
          onExplore={() => scrollToSection('panpsychism')}
        />

        <QuestionProgression />

        <PanpsychismSection />

        <ConsciousnessScale />

        <CombinationProblem />

        <AILab />

        <ThoughtExperiments />

        <CosmicVisualization />

        <CosmopsychismSection />

        <PhilosophyQuiz />

        <FinalDilemma onExploreAgain={() => scrollToSection('hero')} />
      </main>

      {/* Comprehensive Academic Footer */}
      <Footer
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenReferences={() => setIsReferencesOpen(true)}
      />

      {/* About / Philosophical Glossary Modal */}
      <Modal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        title={t.aboutModal.title}
        maxWidth="max-w-4xl"
      >
        <AboutPage />
      </Modal>

      {/* Academic Sources & SEP References Modal */}
      <Modal
        isOpen={isReferencesOpen}
        onClose={() => setIsReferencesOpen(false)}
        title={t.referencesModal.title}
        maxWidth="max-w-3xl"
      >
        <ReferencesPage />
      </Modal>
    </div>
  );
};

export default App;

