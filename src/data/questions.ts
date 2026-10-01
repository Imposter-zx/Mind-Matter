import { QuizQuestion, QuizScore } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    statement: "Consciousness is completely produced by, and identical to, physical biochemical processes in the biological brain.",
    context: "Physicalism argues that once neuroscience maps every neuron and synapse, subjective feeling will be fully explained without any surplus.",
    category: 'physicalism-panpsychism',
    polarity: -1 // Agree -> Physicalist, Disagree -> Panpsychist
  },
  {
    id: 2,
    statement: "Fundamental physical entities (such as electrons or quantum fields) could possess extremely primitive, basic forms of proto-experience.",
    context: "Constitutive panpsychism suggests that experience is a foundational ingredient of matter rather than a magical latecomer in cosmic evolution.",
    category: 'physicalism-panpsychism',
    polarity: 1 // Agree -> Panpsychist
  },
  {
    id: 3,
    statement: "Subjective conscious experience spontaneously emerges out of non-conscious matter once physical complexity crosses a critical threshold.",
    context: "Emergentism proposes that water is wet even though individual H₂O molecules are not wet; similarly, brain networks feel even though atoms do not.",
    category: 'emergence-fundamental',
    polarity: -1 // Agree -> Emergence
  },
  {
    id: 4,
    statement: "You cannot build a subjective conscious experience purely out of ingredients that have zero experience whatsoever, no matter how you arrange them.",
    context: "Galen Strawson and Philip Goff argue that radical emergence is akin to magic unless the fundamental building blocks already contain primitive proto-mind.",
    category: 'emergence-fundamental',
    polarity: 1 // Agree -> Fundamental
  },
  {
    id: 5,
    statement: "A sufficiently advanced artificial neural network running on silicon chips could develop genuine, felt subjective experiences (qualia).",
    context: "Substrate independence / functionalism posits that mental states depend on organizational causal roles, not on whether the hardware is carbon or silicon.",
    category: 'biological-artificial',
    polarity: 1 // Agree -> AI Consciousness Possible
  },
  {
    id: 6,
    statement: "Consciousness is an intrinsically biological phenomenon that requires evolutionary organic embodiment and cannot be replicated by silicon computation.",
    context: "Biological naturalists like John Searle argue that computer simulations of brains feel pain no more than computer simulations of rainstorms get wet.",
    category: 'biological-artificial',
    polarity: -1 // Agree -> Biological Exclusivity
  },
  {
    id: 7,
    statement: "A complete understanding of consciousness will come from breaking down the brain into its smallest microscopic components and tracking their interactions.",
    context: "Micro-reductionism assumes that macro-level phenomena are exhaustively explained by lower-level constituent parts.",
    category: 'reductionism-holism',
    polarity: -1 // Agree -> Reductionist
  },
  {
    id: 8,
    statement: "The universe as an integrated whole may possess its own form of cosmic consciousness, from which individual minds are derived (Cosmopsychism).",
    context: "Priority cosmopsychism reverses bottom-up thinking, suggesting the cosmos is the primary conscious whole and living beings are localized viewpoints.",
    category: 'reductionism-holism',
    polarity: 1 // Agree -> Holist / Cosmopsychist
  },
  {
    id: 9,
    statement: "A perfect behavioral and linguistic imitation of a conscious human does not necessarily prove that inner conscious feeling is actually present.",
    context: "This touches on the Philosophical Zombie and the Chinese Room: external performance can be decoupled from internal phenomenal reality.",
    category: 'physicalism-panpsychism',
    polarity: 1 // Agree -> Mind is more than functional behavior
  },
  {
    id: 10,
    statement: "Current scientific methods, which rely solely on third-person objective observation, will ultimately explain everything about first-person subjective feelings.",
    context: "Thomas Nagel argued that objective science can describe the bat's sonar and brain, but cannot bridge the subjective gap of 'what it is like' to be that bat.",
    category: 'physicalism-panpsychism',
    polarity: -1 // Agree -> Reductive Physicalist
  }
];

export function calculatePhilosophyScore(answers: Record<number, number>): QuizScore {
  // answers are 1 (Strongly Disagree), 2 (Disagree), 3 (Unsure), 4 (Agree), 5 (Strongly Agree)
  // Normalized to -2, -1, 0, 1, 2

  let pScore = 50; // Physicalism (0) to Panpsychism (100)
  let fScore = 50; // Emergence (0) to Fundamental (100)
  let aScore = 50; // Biological (0) to Artificial Mind (100)
  let hScore = 50; // Micro-Reductionism (0) to Cosmopsychic Holism (100)

  let pCount = 0;
  let fCount = 0;
  let aCount = 0;
  let hCount = 0;

  QUIZ_QUESTIONS.forEach((q) => {
    const rawVal = answers[q.id] || 3;
    const offset = (rawVal - 3) * q.polarity; // range -2 to 2

    if (q.category === 'physicalism-panpsychism') {
      pScore += offset * 12.5;
      pCount++;
    } else if (q.category === 'emergence-fundamental') {
      fScore += offset * 25;
      fCount++;
    } else if (q.category === 'biological-artificial') {
      aScore += offset * 25;
      aCount++;
    } else if (q.category === 'reductionism-holism') {
      hScore += offset * 25;
      hCount++;
    }
  });

  // Clamp 0 to 100
  pScore = Math.max(5, Math.min(95, Math.round(pScore)));
  fScore = Math.max(5, Math.min(95, Math.round(fScore)));
  aScore = Math.max(5, Math.min(95, Math.round(aScore)));
  hScore = Math.max(5, Math.min(95, Math.round(hScore)));

  // Determine Archetype
  let dominantArchetype = "Integrative Synthesist";
  let archetypeDescription = "Your views balance materialist physics with the philosophical richness of the mind problem.";

  if (pScore <= 35 && fScore <= 40) {
    dominantArchetype = "Empirical Physicalist";
    archetypeDescription = "You lean toward the view that matter and physical forces are foundational. For you, consciousness is a remarkable natural product of complex biological computation and neural networks.";
  } else if (pScore >= 65 && fScore >= 60 && hScore >= 50) {
    dominantArchetype = "Constitutive Panpsychist / Cosmopsychist";
    archetypeDescription = "You are drawn to the idea that consciousness cannot simply pop into existence from dead matter. You view awareness or proto-experience as an intrinsic, fundamental fabric of reality.";
  } else if (fScore <= 40 && aScore >= 60) {
    dominantArchetype = "Computational Emergentist";
    archetypeDescription = "You view mind as software running on organized hardware. Consciousness is an emergent phase transition that could arise in silicon neural networks just as it does in biological brains.";
  } else if (pScore <= 45 && aScore <= 40) {
    dominantArchetype = "Biological Naturalist";
    archetypeDescription = "You regard consciousness as a uniquely organic, evolutionary biological phenomenon—firmly grounded in physics and biochemistry, but irreducible to simple digital computation.";
  } else if (hScore >= 65) {
    dominantArchetype = "Cosmopsychic Holist";
    archetypeDescription = "You favor top-down holistic frameworks, considering whether the unified cosmos itself holds the primary conscious structure from which localized minds descend.";
  }

  const keyInsights: string[] = [
    `Ontological Lean: ${pScore > 50 ? 'Inclined toward Panpsychist / Proto-Mental hypotheses' : 'Inclined toward Physicalist / Material foundations'} (${pScore}% Panpsychism Index)`,
    `Generation Mechanism: ${fScore > 50 ? 'Favors Fundamental Consciousness (Consciousness as primitive feature)' : 'Favors Emergent Properties (Complex phase transition)'}`,
    `Substrate Stance: ${aScore > 50 ? 'Open to Substrate Independence (Synthetic consciousness achievable)' : 'Favors Biological Specificity (Organic necessity)'}`,
    `Systemic Scale: ${hScore > 50 ? 'Holistic / Cosmopsychic orientation' : 'Micro-Structural / Component-level focus'}`
  ];

  return {
    panpsychismScore: pScore,
    fundamentalScore: fScore,
    artificialScore: aScore,
    holismScore: hScore,
    dominantArchetype,
    archetypeDescription,
    keyInsights
  };
}
