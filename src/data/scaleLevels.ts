import { ScaleLevel } from '../types';

export const SCALE_LEVELS: ScaleLevel[] = [
  {
    id: 'universe',
    name: 'The Universe',
    order: 1,
    scaleMetric: '10²⁶ meters (~93 Billion Light Years)',
    visualIcon: 'Globe',
    scientificDescription: 'The totality of space, time, matter, dark energy, and cosmic structures expanding since the Big Bang.',
    philosophicalQuestion: 'Could the universe as an undivided whole possess cosmic consciousness (Cosmopsychism)?',
    evidenceStatus: 'SPECULATION',
    coreDilemma: 'Is cosmic unity an active integrated system or an uncoordinated spatial aggregate of independent local physical interactions?',
    perspectives: {
      physicalism: 'The universe is a non-sentient physical manifold governed by mathematical laws; consciousness exists only in local biological niches.',
      panpsychism: 'In its "priority cosmopsychist" variant, the universe is the fundamental conscious entity, and individual minds are derivative aspects of the whole.',
      emergentism: 'The universe does not think; it merely hosts the cosmic conditions that eventually permit complex conscious organisms to evolve.'
    }
  },
  {
    id: 'human',
    name: 'Human Being',
    order: 2,
    scaleMetric: '1.7 meters',
    visualIcon: 'User',
    scientificDescription: 'An organism endowed with roughly 86 billion neurons, forming trillions of synaptic connections that correlate with rich phenomenological experience.',
    philosophicalQuestion: 'Why should physical brain dynamics feel like anything from the inside (The Hard Problem of Consciousness)?',
    evidenceStatus: 'ESTABLISHED SCIENTIFIC FACT',
    coreDilemma: 'While the correlation between neurochemistry and subjective reports is empirically proven, the explanatory bridge between objective physical matter and subjective qualia remains unbuilt.',
    perspectives: {
      physicalism: 'Human consciousness is identical to, or an algorithmic computation of, specific neurobiological brain states.',
      panpsychism: 'The human brain is a macro-assembler that unifies countless micro-experiences into a coherent executive ego.',
      emergentism: 'When matter is arranged in a brain architecture with high feedback and recurrent processing, subjective experience spontaneously emerges.'
    }
  },
  {
    id: 'animal',
    name: 'Animal Kingdom',
    order: 3,
    scaleMetric: '10⁻¹ to 10¹ meters',
    visualIcon: 'HeartPulse',
    scientificDescription: 'Diverse non-human animals (mammals, birds, octopuses, corvids) possessing specialized nervous systems capable of learning, pain, grief, and spatial navigation.',
    philosophicalQuestion: 'What is it like to be a bat or an octopus, whose sensory systems have no human equivalent?',
    evidenceStatus: 'SCIENTIFIC HYPOTHESIS',
    coreDilemma: 'The Cambridge Declaration on Consciousness (2012) affirmed non-human animals possess neurophysiological substrates of consciousness, but the exact subjective boundary remains debated.',
    perspectives: {
      physicalism: 'Animals with sufficiently centralized nervous systems and thalamocortical loops have conscious states calibrated for survival.',
      panpsychism: 'Animal minds are natural middle-tier aggregations along a continuous spectrum of experiential complexity.',
      emergentism: 'Consciousness emerges in animals once sensory integration reaches an evolutionary threshold of predictive modeling.'
    }
  },
  {
    id: 'nervous-system',
    name: 'Nervous System & Brain',
    order: 4,
    scaleMetric: '10⁻¹ meters (~1.4 kg mass)',
    visualIcon: 'Cpu',
    scientificDescription: 'A complex organ system comprising cerebral cortex, thalamus, brainstem, and autonomic pathways orchestrating homeostatic regulation and information processing.',
    philosophicalQuestion: 'Which specific physical structures are necessary and sufficient for phenomenal awareness (the Neural Correlates of Consciousness)?',
    evidenceStatus: 'ESTABLISHED SCIENTIFIC FACT',
    coreDilemma: 'Does consciousness require a localized brain network (e.g., Global Neuronal Workspace or Posterior Hot Zone), or can any information-integrating network feel?',
    perspectives: {
      physicalism: 'Brain networks process and broadcast information; conscious experience is just the internal informational geometry of that processing.',
      panpsychism: 'The nervous system acts as an amplifier and funnel, weaving primordial micro-experiences into high-resolution macro-experience.',
      emergentism: 'High causal interconnectedness (high Phi in Integrated Information Theory) causes the leap from non-feeling matter to feeling system.'
    }
  },
  {
    id: 'neuron',
    name: 'Neuron',
    order: 5,
    scaleMetric: '10⁻⁵ meters (10–100 μm)',
    visualIcon: 'Zap',
    scientificDescription: 'Electrically excitable cell communicating via action potentials and neurotransmitters through thousands of synaptic clefts.',
    philosophicalQuestion: 'Does an isolated single neuron experience a faint spark of feeling, or is it purely mechanical plumbing?',
    evidenceStatus: 'OPEN QUESTION / DEBATE',
    coreDilemma: 'Neuroscientists view individual neurons as biological transistors obeying biophysics, yet some philosophers ask whether the threshold of experience begins at the single cell.',
    perspectives: {
      physicalism: 'A single neuron is entirely insentient—just ion channels and membrane potentials. It is a biological switch.',
      panpsychism: 'The neuron may possess a basic composite experiential state formed from its molecular constituents.',
      emergentism: 'One neuron has 0% consciousness; only a million interconnected neurons cross the critical phase-transition boundary.'
    }
  },
  {
    id: 'cell',
    name: 'Single Cell / Amoeba',
    order: 6,
    scaleMetric: '10⁻⁶ meters (1–10 μm)',
    visualIcon: 'CircleDot',
    scientificDescription: 'Autonomous living unit with membrane, metabolic machinery, DNA/RNA, capable of chemotaxis, sensory reaction, and reproduction without a nervous system.',
    philosophicalQuestion: 'Does intentional behavior and self-preservation in single cells indicate rudimentary subjective awareness (Biopsychism)?',
    evidenceStatus: 'PHILOSOPHICAL HYPOTHESIS',
    coreDilemma: 'Single-celled organisms navigate gradients toward food and flee toxins. Is this complex chemical computation, or the very dawn of phenomenal agency?',
    perspectives: {
      physicalism: 'Chemotaxis is entirely mechanistic biochemical feedback; there is no inner subjective observer.',
      panpsychism: 'Cells are living complexes built upon the foundational experiential nature of underlying matter.',
      emergentism: 'Agency and life are preconditions, but true qualia require specialized neural networks.'
    }
  },
  {
    id: 'molecule',
    name: 'Complex Molecule (DNA / Protein)',
    order: 7,
    scaleMetric: '10⁻⁹ meters (1–10 nm)',
    visualIcon: 'Dna',
    scientificDescription: 'Polymers and macromolecular structures folded in 3D conformations governed by electromagnetic bonding and quantum chemistry.',
    philosophicalQuestion: 'Can an inert chemical configuration possess any intrinsic interiority or subjective property?',
    evidenceStatus: 'PHILOSOPHICAL HYPOTHESIS',
    coreDilemma: 'Molecules obey quantum mechanics and thermodynamic gradients with zero apparent autonomous decision-making or self-reporting capability.',
    perspectives: {
      physicalism: 'Macromolecules are strictly non-conscious chemical automata obeying electromagnetic forces.',
      panpsychism: 'Molecules inherit the intrinsic proto-experiential qualities of the atoms that constitute them.',
      emergentism: 'Consciousness is absent at this scale; it is an organizational property that requires billions of organized molecules.'
    }
  },
  {
    id: 'atom',
    name: 'Atom',
    order: 8,
    scaleMetric: '10⁻¹⁰ meters (0.1 nm / 1 Å)',
    visualIcon: 'Atom',
    scientificDescription: 'A dense nucleus composed of protons and neutrons surrounded by a quantum electron probability cloud.',
    philosophicalQuestion: 'Could atoms have an intrinsic "inside" (proto-qualia) that physics cannot measure because physics only describes relational dynamics?',
    evidenceStatus: 'PHILOSOPHICAL HYPOTHESIS',
    coreDilemma: 'Physics describes what an atom does (its mass, charge, spin, and equations of motion), but is silent on what matter is in and of itself (its intrinsic nature).',
    perspectives: {
      physicalism: 'Atoms have no feeling, awareness, or proto-experience. They are physical building blocks.',
      panpsychism: 'Russellian Monism proposes that physics describes the extrinsic relational properties of atoms, while intrinsic consciousness is their inner nature.',
      emergentism: 'Atoms are utterly non-conscious; consciousness only emerges when vast numbers of atoms are organized in specific functional architectures.'
    }
  },
  {
    id: 'particle',
    name: 'Fundamental Particle (Quark / Electron)',
    order: 9,
    scaleMetric: '≤ 10⁻¹⁸ meters (Point-like)',
    visualIcon: 'Sparkles',
    scientificDescription: 'Indivisible elementary quantum fields possessing mass, charge, and spin according to the Standard Model of particle physics.',
    philosophicalQuestion: 'If consciousness is fundamental, does every electron possess the most rudimentary form of proto-experience?',
    evidenceStatus: 'PHILOSOPHICAL HYPOTHESIS',
    coreDilemma: 'This is speculative philosophy of mind, not an established physical discovery. No particle physics experiment has ever observed or required consciousness.',
    perspectives: {
      physicalism: 'Particles are fundamental physical excitations with zero mental properties. Consciousness is an emergent macro-phenomenon.',
      panpsychism: 'Consciousness is a fundamental irreducible property of physical reality alongside mass and electric charge (Constitutive Panpsychism).',
      emergentism: 'Particles are simple and inanimate; complexity and feedback are the sole generative engines of awareness.'
    }
  }
];
