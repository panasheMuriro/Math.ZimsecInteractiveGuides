// SetBuilderNotationQuiz.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent'; // Adjust path as needed

const setBuilderNotationQuizQuestions: QuizQuestion[] = [
  {
    id: 'sb-purpose',
    question: `What is the primary purpose of Set Builder Notation?`,
    questionType: 'text',
    optionType: 'text',
    options: [
      `To list all elements of a set in order`,
      `To define a set by specifying a property its elements must satisfy`,
      `To find the cardinality of a set`,
      `To represent the union of two sets`
    ],
    correct: 1,
    explanation: `Set Builder Notation is a concise way to define sets by describing the common property that all elements of the set must satisfy.`,
    explanationType: 'text'
  },
  {
    id: 'sb-symbol-meaning',
    question: `In the set builder notation $\\{x \\mid x > 5\\}$, what does the symbol $\\mid$ represent?`,
    questionType: 'text',
    optionType: 'text',
    options: [
      `Union`,
      `Intersection`,
      `Such that`,
      `Element of`
    ],
    correct: 2,
    explanation: `In Set Builder Notation, the symbol $\\mid$ (or sometimes $:$) means "such that". It separates the variable from the condition.`,
    explanationType: 'math'
  },
  {
    id: 'sb-real-numbers-less-than',
    question: `How would you write "the set of all real numbers $x$ such that $x$ is less than 3" using Set Builder Notation?`,
    questionType: 'text',
    optionType: 'math',
    options: [
      `$\\{x \\mid x < 3\\}$`,
      `$\\{x \\in \\mathbb{R} \\mid x < 3\\}$`,
      `$\\{x \\mid x \\leq 3\\}$`,
      `$\\{x \\in \\mathbb{R} \\mid x \\leq 3\\}$`
    ],
    correct: 1,
    explanation: `To specify the set of real numbers with a condition, you write the set variable, the element symbol, the set of reals $(\\mathbb{R})$, the "such that" symbol, and then the condition: $\\{x \\in \\mathbb{R} \\mid x < 3\\}$.`,
    explanationType: 'math'
  },
  {
    id: 'sb-represent-roster-set',
    question: `Which set builder notation correctly represents the set $\\{2, 4, 6, 8\\}$?`,
    questionType: 'text',
    optionType: 'math',
    options: [
      `$\\{x \\mid x \\text{ is even}\\}$`,
      `$\\{x \\in \\mathbb{Z} \\mid x = 2n, n \\in \\{1, 2, 3, 4\\}\\}$`,
      `$\\{x \\mid x = 2n, n \\in \\mathbb{N}\\}$`,
      `$\\{x \\in \\mathbb{R} \\mid x \\text{ is positive}\\}$`
    ],
    correct: 1,
    explanation: `$\\{x \\in \\mathbb{Z} \\mid x = 2n, n \\in \\{1, 2, 3, 4\\}\\}$ correctly describes the set. It specifies $x$ is an integer $(\\mathbb{Z})$ such that $x$ is twice an $n$ where $n$ is specifically 1, 2, 3, or 4. This generates $\\{2, 4, 6, 8\\}$.`,
    explanationType: 'math'
  },
  {
    id: 'sb-inequality-solution-set',
    question: `What set does the notation $\\{x \\in \\mathbb{R} \\mid x^2 < 4\\}$ describe?`,
    questionType: 'text',
    optionType: 'math',
    options: [
      `$\\{x \\mid x < 2\\}$`,
      `$\\{x \\mid x > -2\\}$`,
      `$\\{x \\mid -2 < x < 2\\}$`,
      `$\\{-2, 2\\}$`
    ],
    correct: 2,
    explanation: `The condition $x^2 < 4$ is equivalent to $-2 < x < 2$. Combined with $x \\in \\mathbb{R}$, the notation describes all real numbers between -2 and 2.`,
    explanationType: 'math'
  }
];

const SetBuilderNotation: React.FC = () => {
  const rules = [
    "Set Builder Notation defines sets using properties: $\\{x \\mid P(x)\\}$ or $\\{x : P(x)\\}$.",
    "Read as 'the set of all $x$ such that property $P(x)$ is true'.",
    "Use $\\in$ to specify the domain: $\\{x \\in \\mathbb{R} \\mid x > 0\\}$.",
    "Equivalent to roster method when possible: $\\{2, 4, 6\\} = \\{x \\mid x = 2n, n \\in \\{1, 2, 3\\}\\}$."
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Set Builder Notation"
      icon="🛠️"
      // theme is unused in the provided component but kept for compatibility
      theme={{
        from: "from-amber-600",
        to: "to-orange-700",
        button: "bg-orange-500",
        buttonHover: "hover:bg-orange-400"
      }}
      rules={rules}
      rulesTitle="Set Builder Notation Guide:"
      questions={setBuilderNotationQuizQuestions}
    />
  );
};

export default SetBuilderNotation;
