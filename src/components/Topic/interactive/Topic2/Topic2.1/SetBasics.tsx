// SetBasicsQuiz.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent'; // Adjust path as needed

const setBasicsQuizQuestions: QuizQuestion[] = [
  {
    id: 'set-notation-braces',
    question: `Which of the following correctly represents the set containing the numbers 1, 2, and 3?`,
    questionType: 'text',
    options: [
      `$\\{1, 2, 3\\}$`,
      `$(1, 2, 3)$`,
      `$[1, 2, 3]$`,
      `$\\{1 2 3\\}$`
    ],
    optionType: 'text', // Options contain math
    correct: 0,
    explanation: `Sets are represented using curly braces $\\{ \\}$. The set containing 1, 2, and 3 is written as $\\{1, 2, 3\\}$. Parentheses $( )$ denote ordered pairs or intervals, and square brackets $[ ]$ denote intervals or lists in some contexts.`,
    explanationType: 'text'
  },
  {
    id: 'set-cardinality',
    question: `What is the cardinality of the set $A = \\{a, b, c, d\\}$?`,
    questionType: 'text',
    options: [
      `$3$`,
      `$4$`,
      `$5$`,
      `$\\infty$`
    ],
    optionType: 'text',
    correct: 1,
    explanation: `The cardinality of a set, denoted $|A|$ or $n(A)$, is the number of distinct elements in the set. The set $A = \\{a, b, c, d\\}$ contains 4 distinct elements, so $|A| = 4$.`,
    explanationType: 'text'
  },
  {
    id: 'element-symbol',
    question: `Which symbol means "is an element of"?`,
    questionType: 'text',
    options: [
      `$\\subset$`,
      `$\\subseteq$`,
      `$\\in$`,
      `$\\cup$`
    ],
    optionType: 'text',
    correct: 2,
    explanation: `The symbol $\\in$ means "is an element of". For example, if $A = \\{1, 2, 3\\}$, then $2 \\in A$ is true. The symbol $\\subset$ means "is a proper subset of", $\\subseteq$ means "is a subset of", and $\\cup$ represents the union of sets.`,
    explanationType: 'text'
  },
  {
    id: 'set-equivalence',
    question: `Which of these sets is equivalent to $\\{1, 2, 3\\}$?`,
    questionType: 'text',
    options: [
      `$\\{3, 2, 1, 2\\}$`,
      `$\\{1, 1, 2, 3\\}$`,
      `$\\{3, 2, 1\\}$`,
      `$\\{1, 2, 3, 4\\}$`
    ],
    optionType: 'text',
    correct: 2,
    explanation: `Sets are unordered collections, and duplicate elements are ignored. This means $\\{1, 2, 3\\}$ is the same set as $\\{3, 2, 1\\}$. The sets $\\{3, 2, 1, 2\\}$ and $\\{1, 1, 2, 3\\}$ simplify to $\\{3, 2, 1\\}$ or $\\{1, 2, 3\\}$, so they are also equivalent, but $\\{3, 2, 1\\}$ is the cleanest representation of the same set. The set $\\{1, 2, 3, 4\\}$ contains an extra element (4) and is therefore not equivalent.`,
    explanationType: 'text'
  },
  {
    id: 'not-element-symbol',
    question: `How do you denote that an element $x$ is not a member of set $A$?`,
    questionType: 'text',
    options: [
      `$x \\subset A$`,
      `$x \\not\\subset A$`,
      `$x \\in A$`,
      `$x \\not\\in A$`
    ],
    optionType: 'text',
    correct: 3,
    explanation: `The symbol $\\not\\in$ means "is not an element of". If $x$ is not a member of set $A$, we write $x \\not\\in A$. The symbol $\\in$ means "is an element of". The symbols $\\subset$ and $\\not\\subset$ relate to subsets, not element membership.`,
    explanationType: 'text'
  }
];

const SetBasics: React.FC = () => {
  const rules = [
    "Sets are unordered collections of distinct objects.",
    "Curly braces $\\{ \\}$ are used to denote sets.",
    "The symbol $\\in$ means 'is an element of'.",
    "The symbol $\\not\\in$ means 'is not an element of'.",
    "Duplicate elements in a set are ignored.",
    "The cardinality of a set is the number of its distinct elements."
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Sets and Set Notation"
      icon="📐" // You can choose a more appropriate icon
      // theme is unused in the provided component but kept for compatibility
     
      rules={rules}
      rulesTitle="Key Rules:"
      questions={setBasicsQuizQuestions}
    />
  );
};

export default SetBasics