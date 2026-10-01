import { ThoughtExperiment } from '../types';

export const THOUGHT_EXPERIMENTS: ThoughtExperiment[] = [
  {
    id: 'zombie',
    title: 'The Philosophical Zombie',
    philosopher: 'David Chalmers',
    year: '1996',
    summary: 'Could a being exist that is physically and behaviorally identical to you, but possesses zero inner subjective experience?',
    scenario: 'Imagine a physical duplicate of yourself—molecule for molecule, neuron for neuron, synapse for synapse. This "p-zombie" laughs at jokes, winces when pricked with a pin, writes poetry, and debates philosophy. However, on the inside, all is totally dark. There is no feeling of pain, no redness when seeing a rose, no inner "what-it-is-likeness."',
    centralQuestion: 'Is the existence of such a philosophical zombie logically conceivable and metaphysically possible?',
    choices: [
      {
        id: 'conceivable-possible',
        label: 'YES — It is conceivable',
        description: 'If complete physical descriptions leave open the question of whether subjective experience exists, consciousness cannot be purely physical.',
        philosophicalImplication: 'Supports Property Dualism or Panpsychism: Physical facts alone do not logically entail phenomenal facts.',
        representedView: 'Non-Physicalism / Dualism / Panpsychism'
      },
      {
        id: 'inconceivable-impossible',
        label: 'NO — It is an illusion',
        description: 'If a being has all your brain wiring, sensory integration, and behavioral feedback, it MUST be conscious by definition.',
        philosophicalImplication: 'Supports Type-Identity Physicalism or Illusionism (Daniel Dennett): To imagine a zombie is like imagining water that isn\'t H₂O—a conceptual confusion.',
        representedView: 'Physicalism / Functionalism / Illusionism'
      },
      {
        id: 'epistemic-gap',
        label: 'UNSURE — Epistemic Limit',
        description: 'Our inability to prove or disprove a zombie might just reflect limitations in our cognitive concepts rather than reality.',
        philosophicalImplication: 'Supports Epistemic Agnosticism / Mysterianism: The human mind may not possess the conceptual tools to resolve the gap between matter and mind.',
        representedView: 'Epistemic Agnosticism'
      }
    ],
    verdictAnalysis: 'There is no consensus among philosophers. Dualists and panpsychists argue the "conceivability argument" proves consciousness is an extra ingredient in reality. Physicalists counter that once all physical and functional processes are accounted for, consciousness is already fully explained without any surplus.',
    evidenceStatus: 'THOUGHT EXPERIMENT',
    sepLink: 'https://plato.stanford.edu/entries/zombies/'
  },
  {
    id: 'chinese-room',
    title: 'The Chinese Room',
    philosopher: 'John Searle',
    year: '1980',
    summary: 'Can syntactic symbol manipulation (computation) ever produce genuine semantic understanding and conscious thought?',
    scenario: 'Imagine a person who speaks only English locked inside a room. Through a slot in the door, they receive slips of paper with Chinese characters. Using an enormous rulebook in English ("When symbol 𠀋 and 𠀌 arrive, reply with 𠀍"), they manipulate symbols and slide answers back out. To native Chinese speakers outside, the room produces fluent, intelligent conversation.',
    centralQuestion: 'Does the person—or the room as a system—genuinely understand Chinese, or is it merely simulating comprehension?',
    choices: [
      {
        id: 'no-understanding',
        label: 'NO — Syntax is not Semantics',
        description: 'Blindly manipulating symbols according to computational rules does not equal genuine understanding or meaning.',
        philosophicalImplication: 'Challenges Strong AI: Computers and Large Language Models merely simulate syntax without genuine subjective understanding.',
        representedView: 'Biological Naturalism (Searle)'
      },
      {
        id: 'systems-reply',
        label: 'YES — The Whole System Understands',
        description: 'The person in the room does not understand, but the total integrated system (person + rules + memory) DOES understand Chinese.',
        philosophicalImplication: 'Supports Computational Functionalism: Understanding is a property of the overall organized system, not isolated local sub-components.',
        representedView: 'Functionalism / Computationalism'
      },
      {
        id: 'behavioral-equivalence',
        label: 'DIFFERENCE IS MEANINGLESS',
        description: 'If a system communicates indistinguishably from a fluent speaker across all contexts, denying understanding is an unfalsifiable semantic game.',
        philosophicalImplication: 'Supports Pragmatism & Turing Operationalism: If a system acts intelligently, it possesses functional intelligence.',
        representedView: 'Turing Behavioral Operationalism'
      }
    ],
    verdictAnalysis: 'Searle argued that computation alone cannot generate semantics or intentionality. Proponents of AI and functionalism counter that human brains are also physical systems executing complex causal transformations, and that distributed systems can comprehend meaning even when individual neurons do not.',
    evidenceStatus: 'THOUGHT EXPERIMENT',
    sepLink: 'https://plato.stanford.edu/entries/chinese-room/'
  },
  {
    id: 'ship-of-theseus',
    title: 'The Ship of Theseus',
    philosopher: 'Plutarch / Thomas Hobbes',
    year: 'c. 75 CE / 1655',
    summary: 'If every physical part of an entity is replaced over time, does its identity persist?',
    scenario: 'The mythical ship of Theseus was preserved in Athens. Over centuries, every single wooden plank, beam, and mast rotted and was replaced one by one with new timber until no original physical piece remained. In Hobbes’s extension, an observer collects the discarded old planks and reconstructs the original ship.',
    centralQuestion: 'Which ship is the true Ship of Theseus: the continuously repaired ship, or the reconstructed one?',
    choices: [
      {
        id: 'continuity',
        label: 'THE REPAIRED SHIP (Spatiotemporal Continuity)',
        description: 'Identity is defined by continuous functional pattern and history over time, not static material substance.',
        philosophicalImplication: 'Supports Patternism / Functional Identity: Your human identity survives even though almost all biological atoms in your body turn over every ~7 years.',
        representedView: 'Pattern Identity'
      },
      {
        id: 'original-matter',
        label: 'THE RECONSTRUCTED SHIP (Substance Identity)',
        description: 'Identity is anchored in the original fundamental matter. Once all material is swapped, the identity is broken.',
        philosophicalImplication: 'Supports Mereological Essentialism: Objects cannot survive the loss or replacement of their essential components.',
        representedView: 'Substance Essentialism'
      },
      {
        id: 'conventional-construct',
        label: 'NEITHER — Identity is a Useful Linguistic Fiction',
        description: 'Identity is not an objective property written into the fabric of the universe, but a human mental classification.',
        philosophicalImplication: 'Supports Buddhist Anatta / Derek Parfit Reductionism: There is no permanent "self" or fixed essence beneath dynamic flux.',
        representedView: 'Reductionist Anti-Realism'
      }
    ],
    verdictAnalysis: 'This paradox directly challenges the concept of personal identity and human consciousness. If human neural cells and molecular structures are constantly recycled, are you the same conscious observer today as you were as an infant, or a continuous chain of overlapping psychological states?',
    evidenceStatus: 'THOUGHT EXPERIMENT',
    sepLink: 'https://plato.stanford.edu/entries/identity-time/'
  },
  {
    id: 'brain-in-a-vat',
    title: 'The Brain in a Vat',
    philosopher: 'Hilary Putnam / René Descartes',
    year: '1981 / 1641',
    summary: 'How can you be certain that your conscious experiences correspond to a real external physical world?',
    scenario: 'Imagine a mad scientist removes your brain and places it in a life-sustaining nutrient vat. High-tech supercomputers feed electrical impulses directly to your sensory nerves, perfectly simulating the experience of sitting in your chair, feeling the keyboard, seeing light, and breathing air.',
    centralQuestion: 'Can you prove with certainty that you are currently in the physical world and not in the simulation vat?',
    choices: [
      {
        id: 'cannot-prove',
        label: 'NO — Epistemically Impossible to Disprove',
        description: 'All conscious evidence arrives via neural electrical signals; internal phenomenal experience alone cannot verify its external source.',
        philosophicalImplication: 'Supports Cartesian Skepticism / Simulation Hypothesis: Radical doubt remains logically coherent.',
        representedView: 'Radical Skepticism'
      },
      {
        id: 'externalist-proof',
        label: 'YES — Semantic Externalism Disproves It',
        description: 'Putnam argued that words and thoughts derive meaning from actual causal connections with the environment. A vat-brain cannot even refer to real brains or vats.',
        philosophicalImplication: 'Supports Semantic Externalism: Meaning and mental content are not solely "in the head."',
        representedView: 'Semantic Externalism (Putnam)'
      },
      {
        id: 'pragmatic-realism',
        label: 'IRRELEVANT TO LIVED EXPERIENCE',
        description: 'Whether generated by biological physics or silicon simulation, the qualitative reality of lived conscious experience remains identical.',
        philosophicalImplication: 'Supports Phenomenological Realism (Chalmers\' Virtual Realism): Virtual experiences are real subjective experiences.',
        representedView: 'Phenomenological Pragmatism'
      }
    ],
    verdictAnalysis: 'This thought experiment illuminates the deep asymmetry between first-person subjective certainty ("I think, therefore I am") and third-person objective verification. It underscores that consciousness is the only phenomenon whose existence is directly self-verifying to the experiencer.',
    evidenceStatus: 'THOUGHT EXPERIMENT',
    sepLink: 'https://plato.stanford.edu/entries/brain-in-a-vat/'
  },
  {
    id: 'ai-copy',
    title: 'The Digital Mind Copy & Teletransporter',
    philosopher: 'Derek Parfit',
    year: '1984',
    summary: 'If an exact atomic digital duplicate of your mind and body is created on another planet, is the copy "you"?',
    scenario: 'A teletransporter scans every atom of your body, destroys your original biological form on Earth, and beams the exact digital blueprint to Mars where an atomic assembler reconstructs you down to the quantum state. The reconstructed person steps out, remembers your childhood, loves your family, and believes they are you. But what if the scanner fails to destroy your Earth body, leaving two identical beings standing in different rooms?',
    centralQuestion: 'Did you survive the teleportation, or were you quietly obliterated while a duplicate took your place?',
    choices: [
      {
        id: 'death-duplicate',
        label: 'DEATH — The Copy is an Impostor',
        description: 'Subjective consciousness requires numerical physical continuity of the original biological stream. Scanning destroyed you.',
        philosophicalImplication: 'Supports Biological Identity: Personal identity requires an unbroken continuous physical trajectory.',
        representedView: 'Biological Continuity View'
      },
      {
        id: 'survival-pattern',
        label: 'SURVIVAL — Pattern is Identity',
        description: 'If psychological continuity, memories, and personality traits are preserved 100%, personal identity has survived.',
        philosophicalImplication: 'Supports Psychological Continuity Theory: What matters for survival is relational psychological connectedness, not particular carbon atoms.',
        representedView: 'Psychological Continuity (Parfit)'
      },
      {
        id: 'fission-branching',
        label: 'FISSION — Identity Has No Fact of the Matter',
        description: 'Parfit argued that identity is not an "all-or-nothing" binary; both entities on Earth and Mars are future continuations of the past self.',
        philosophicalImplication: 'Supports Parfitian Bundle Theory: There is no indivisible Cartesian ego; survival comes in degrees of psychological connection.',
        representedView: 'Bundle Theory (Parfit)'
      }
    ],
    verdictAnalysis: 'This thought experiment reveals the tension between third-person objective information (the blueprint) and first-person subjective perspective (the stream of experience). It lies at the heart of debates on mind uploading, artificial consciousness, and personal identity.',
    evidenceStatus: 'THOUGHT EXPERIMENT',
    sepLink: 'https://plato.stanford.edu/entries/identity-personal/'
  }
];
