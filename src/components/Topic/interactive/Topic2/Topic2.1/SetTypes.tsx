// SetTypesQuiz.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent'; // Adjust path as needed

const setTypesQuizQuestions: QuizQuestion[] = [
  {
    id: 'universal-set',
    question: `What type of set contains all possible elements under consideration?`,
    questionType: 'text',
    options: [
      `$\\text{Finite Set}$`,
      `$\\text{Infinite Set}$`,
      `$\\text{Universal Set } \\mathbb{U}$`,
      `$\\text{Empty Set } \\emptyset$`
    ],
    optionType: 'text', // Options contain math
    correct: 2,
    explanation: `The Universal Set, denoted by $\\mathbb{U}$, contains all elements relevant to a particular discussion or problem.`,
    explanationType: 'text'
  },
  {
    id: 'infinite-set-example',
    question: `Which of the following is an example of an Infinite Set?`,
    questionType: 'text',
    options: [
      `$A = \\{1, 2, 3, 4, 5\\}$`,
      `$\\mathbb{N} = \\{1, 2, 3, \\ldots\\}$`,
      `$B = \\{a, b, c\\}$`,
      `$\\emptyset$`
    ],
    optionType: 'text',
    correct: 1,
    explanation: `$\\mathbb{N} = \\{1, 2, 3, \\ldots\\}$ represents the set of natural numbers, which continues indefinitely and is therefore infinite. The other sets listed have a finite number of elements.`,
    explanationType: 'text'
  },
  {
    id: 'empty-set-cardinality',
    question: `What is the cardinality of the Empty Set ($\\emptyset$)?`,
    questionType: 'text',
    options: [
      `$1$`,
      `$\\infty$`,
      `$\\mathbb{U}$`, // Intentionally incorrect
      `$0$`
    ],
    optionType: 'text',
    correct: 3,
    explanation: `The Empty Set, denoted $\\emptyset$ or $\\{\\}$, contains no elements. Therefore, its cardinality, $|\\emptyset|$, is $0$.`,
    explanationType: 'text'
  },
  {
    id: 'subset-relationship',
    question: `If every element of set $A$ is also an element of set $B$, what is the relationship between $A$ and $B$?`,
    questionType: 'text',
    options: [
      `$A \\text{ is equal to } B \\ (A = B)$`,
      `$A \\text{ is a Proper Subset of } B \\ (A \\subset B)$`,
      `$A \\text{ is a Subset of } B \\ (A \\subseteq B)$`,
      `$B \\text{ is an element of } A \\ (B \\in A)$` // Intentionally incorrect
    ],
    optionType: 'text',
    correct: 2,
    explanation: `If every element of set $A$ is also in set $B$, then $A$ is a subset of $B$, denoted as $A \\subseteq B$. This includes the possibility that $A$ and $B$ are the same set.`,
    explanationType: 'text'
  },
  {
    id: 'proper-subset-symbol',
    question: `What symbol denotes a Proper Subset?`,
    questionType: 'text',
    options: [
      `$\\subseteq$`,
      `$\\subset$`,
      `$\\in$`,
      `$\\cup$` // Intentionally incorrect
    ],
    optionType: 'text',
    correct: 1,
    explanation: `$A \\subset B$ means that $A$ is a subset of $B$, but $A$ is not equal to $B$. The symbol $\\subseteq$ means "is a subset of" (which allows for equality).`,
    explanationType: 'text'
  }
];

const SetTypes: React.FC = () => {
  const rules = [
    "The Universal Set ($\\mathbb{U}$) contains all elements under consideration.",
    "A Finite Set has a countable number of elements.",
    "An Infinite Set has an unlimited number of elements.",
    "The Empty Set ($\\emptyset$) contains no elements and has cardinality $0$.",
    "Equal Sets contain exactly the same elements.",
    "$A \\subseteq B$ means $A$ is a subset of $B$ (every element of $A$ is in $B$).",
    "$A \\subset B$ means $A$ is a proper subset of $B$ ($A \\subseteq B$ and $A \\ne B$)."
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Types of Sets"
      icon="🗂️"
      rules={rules}
      rulesTitle="Set Types Summary:"
      questions={setTypesQuizQuestions}
    />
  );
};

export default SetTypes;