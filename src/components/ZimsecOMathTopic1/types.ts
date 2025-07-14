// export type Section = {
//   title: string;
//   icon: string;
//   content: string;
//   interactive: string;
// };

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