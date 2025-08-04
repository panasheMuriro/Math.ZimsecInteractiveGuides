// SetOperationsQuiz.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent'; // Adjust path as needed

const setOperationsQuizQuestions: QuizQuestion[] = [
  {
    id: 'union-definition',
    question: `What does the union of sets $A$ and $B$ ($A \\cup B$) represent?`,
    questionType: 'text',
    options: [
      `$\\text{Elements only in } A$`,
      `$\\text{Elements only in } B$`,
      `$\\text{Elements in both } A \\text{ and } B$`,
      `$\\text{Elements in } A \\text{ or } B \\text{ or both}$`
    ],
    optionType: 'text', // Options contain math
    correct: 3,
    explanation: `The union $A \\cup B$ includes all elements that belong to set $A$, set $B$, or both sets.`,
    explanationType: 'text'
  },
  {
    id: 'intersection-example',
    question: `Given $A = \\{1, 2, 3\\}$ and $B = \\{3, 4, 5\\}$, what is $A \\cap B$?`,
    questionType: 'text',
    options: [
      `$\\{1, 2, 3, 4, 5\\}$`,
      `$\\{3\\}$`,
      `$\\{1, 2, 4, 5\\}$`,
      `$\\emptyset$`
    ],
    optionType: 'text',
    correct: 1,
    explanation: `The intersection $A \\cap B$ includes only the elements common to both sets. Here, 3 is the only element present in both $A$ and $B$.`,
    explanationType: 'text'
  },
  {
    id: 'disjoint-sets',
    question: `If $A \\cap B = \\emptyset$, what are sets $A$ and $B$ called?`,
    questionType: 'text',
    options: [
      `$\\text{Equal}$`,
      `$\\text{Subsets}$`,
      `$\\text{Disjoint}$`,
      `$\\text{Complements}$`
    ],
    optionType: 'text',
    correct: 2,
    explanation: `Two sets are called disjoint if they have no elements in common, meaning their intersection is the empty set.`,
    explanationType: 'text'
  },
  {
    id: 'set-difference',
    question: `What does the set difference $A \\setminus B$ represent?`,
    questionType: 'text',
    options: [
      `$\\text{Elements in } A \\text{ or } B \\text{ but not both}$`,
      `$\\text{Elements in the Universal Set but not in } A \\text{ or } B$`,
      `$\\text{Elements in } A \\text{ but not in } B$`,
      `$\\text{Elements in } B \\text{ but not in } A$`
    ],
    optionType: 'text',
    correct: 2,
    explanation: `$A \\setminus B$ (read as "A minus B" or "A difference B") is the set of elements that belong to $A$ but do not belong to $B$.`,
    explanationType: 'text'
  },
  {
    id: 'set-complement',
    question: `What is the complement of set $A$ (denoted $A'$ or $A^c$) relative to the Universal Set $\\mathbb{U}$?`,
    questionType: 'text',
    options: [
      `$A \\cap \\mathbb{U}$`,
      `$\\text{Elements in } A \\text{ but not in } \\mathbb{U}$`,
      `$\\text{Elements in } \\mathbb{U} \\text{ but not in } A$`,
      `$\\mathbb{U} \\cup A$`
    ],
    optionType: 'text',
    correct: 2,
    explanation: `The complement of $A$, denoted $A'$ or $A^c$, consists of all elements in the Universal Set $\\mathbb{U}$ that are not elements of $A$.`,
    explanationType: 'text'
  }
];

const SetOperations: React.FC = () => {
  const rules = [
    "Union ($A \\cup B$): Elements in $A$ or $B$ or both.",
    "Intersection ($A \\cap B$): Elements in both $A$ and $B$.",
    "Disjoint Sets: $A \\cap B = \\emptyset$ (no common elements).",
    "Difference ($A \\setminus B$): Elements in $A$ but not in $B$.",
    "Complement ($A'$ or $A^c$): Elements in Universal Set $\\mathbb{U}$ but not in $A$."
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Union and Intersection of Sets"
      icon="🔗"
    
      rules={rules}
      rulesTitle="Set Operations Summary:"
      questions={setOperationsQuizQuestions}
    />
  );
};

export default SetOperations