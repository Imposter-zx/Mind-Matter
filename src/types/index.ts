export type EvidenceStatus =
  | 'ESTABLISHED SCIENTIFIC FACT'
  | 'SCIENTIFIC HYPOTHESIS'
  | 'PHILOSOPHICAL HYPOTHESIS'
  | 'THOUGHT EXPERIMENT'
  | 'OPEN QUESTION / DEBATE'
  | 'SPECULATION';

export interface ScaleLevel {
  id: string;
  name: string;
  order: number;
  scaleMetric: string;
  visualIcon: string;
  scientificDescription: string;
  philosophicalQuestion: string;
  evidenceStatus: EvidenceStatus;
  coreDilemma: string;
  perspectives: {
    physicalism: string;
    panpsychism: string;
    emergentism: string;
  };
}

export interface ThoughtExperiment {
  id: string;
  title: string;
  philosopher: string;
  year?: string;
  summary: string;
  scenario: string;
  centralQuestion: string;
  choices: {
    id: string;
    label: string;
    description: string;
    philosophicalImplication: string;
    representedView: string;
  }[];
  verdictAnalysis: string;
  evidenceStatus: EvidenceStatus;
  sepLink?: string;
}

export interface QuizQuestion {
  id: number;
  statement: string;
  context: string;
  category: 'physicalism-panpsychism' | 'emergence-fundamental' | 'biological-artificial' | 'reductionism-holism';
  polarity: 1 | -1; // 1 pushes toward panpsychism/fundamental/ai/holism, -1 toward physicalism/emergence/biological/reductionism
}

export interface QuizScore {
  panpsychismScore: number; // 0 to 100 (Physicalism -> Panpsychism)
  fundamentalScore: number; // 0 to 100 (Emergentism -> Fundamental)
  artificialScore: number;  // 0 to 100 (Biological Only -> Substrate Independent)
  holismScore: number;      // 0 to 100 (Micro-Reductionism -> Cosmopsychic Holism)
  dominantArchetype: string;
  archetypeDescription: string;
  keyInsights: string[];
}

export interface ConceptDefinition {
  id: string;
  title: string;
  subtitle: string;
  category: 'Metaphysics' | 'Philosophy of Mind' | 'Cognitive Science' | 'Epistemology';
  definition: string;
  keyTenets: string[];
  coreArgumentsFor: string[];
  coreArgumentsAgainst: string[];
  keyThinkers: string[];
  evidenceStatus: EvidenceStatus;
  sepUrl?: string;
}

export interface AcademicReference {
  id: string;
  title: string;
  authors: string;
  year: number;
  source: string;
  type: 'Book' | 'Peer-Reviewed Journal' | 'Stanford Encyclopedia of Philosophy' | 'Internet Encyclopedia of Philosophy';
  summary: string;
  url: string;
  category: 'Panpsychism' | 'Hard Problem' | 'Emergence' | 'AI & Mind' | 'Cosmopsychism';
}

export type PerformanceTier = 'high' | 'medium' | 'low';
