export type QuizQuestion = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type ViewType = 'home' | 'study' | 'quiz' | 'quiz-complete';

export type MathJaxConfig = {
  loader: { load: string[] };
  tex: {
    packages: { "[+]": string[] };
    inlineMath: string[][];
    displayMath: string[][];
  };
};

export interface Subsection {
  title: string;
  content: string;
  interactive: string;
}

export interface Section {
  title: string;
  icon: string;
  content: string;
  subsections?: Subsection[];
  interactive?: string;
}

export interface TopicData {
  id: number;
  title: string;
  description: string;
  icon: string;
  sections: Section[];
  quizQuestions: QuizQuestion[];
}

// types.ts
export interface TopicContext {
  topicData: TopicData;
  completedSections: Set<number>;
  quizState: {
    score: number;
    setScore: (score: number) => void;
  };
}





//  Topic 2
export interface SetType {
  name: string;
  definition: string;
  examples: string[];
  color: string;
  symbol?: string;
}

export interface VennOperation {
  symbol: string;
  name: string;
  description: string;
}

export interface VennRegion {
  name: string;
  description: string;
  color: string;
}

export const domains = {
  integers: { symbol: 'ℤ', name: 'Integers', range: [-10, 10] },
  naturals: { symbol: 'ℕ', name: 'Natural Numbers', range: [1, 20] },
  reals: { symbol: 'ℝ', name: 'Real Numbers', range: [-5, 5] }
} as const;

export interface Domain {
  symbol: string;
  name: string;
  range: [number, number];
}
export type DomainKey = keyof typeof domains;

export interface PresetCondition {
  name: string;
  condition: string;
  domain: DomainKey
}