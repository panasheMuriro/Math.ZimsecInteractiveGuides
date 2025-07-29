import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

const SetTypes: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      question: `What type of set contains all possible elements under consideration?`,
      questionType: 'text', // Use 'text' to enable renderTextWithMath
      options: [
        String.raw`\text{Finite Set}`,
        String.raw`\text{Infinite Set}`,
        String.raw`\text{Universal Set } \mathbb{U}`,
        String.raw`\text{Empty Set } \emptyset`
      ],
      correct: 2,
      explanation: String.raw`\text{The Universal Set, denoted by } \mathbb{U}, \text{ contains all elements relevant to a particular discussion or problem.}`,
      explanationType: 'math'
    },
    {
      question: `Which of the following is an example of an Infinite Set?`,
      questionType: 'text', // Use 'text' to enable renderTextWithMath
      options: [
        String.raw`A = \{1, 2, 3, 4, 5\}`,
        String.raw`\mathbb{N} = \{1, 2, 3, \ldots\}`,
        String.raw`B = \{a, b, c\}`,
        String.raw`\emptyset`
      ],
      correct: 1,
      explanation: String.raw`\mathbb{N} = \{1, 2, 3, \ldots\} \text{ represents the set of natural numbers, which continues indefinitely and is therefore infinite. The other sets listed have a finite number of elements.}`,
      explanationType: 'math'
    },
    {
      question: `What is the cardinality of the Empty Set ($\\emptyset$)?`,
      questionType: 'text', // Use 'text' to enable renderTextWithMath
      options: [
        String.raw`1`,
        String.raw`\infty`,
        String.raw`\mathbb{U}`, // Intentionally incorrect
        String.raw`0`
      ],
      correct: 3,
      explanation: String.raw`\text{The Empty Set, denoted } \emptyset \text{ or } \{\}, \text{ contains no elements. Therefore, its cardinality, } |\emptyset|, \text{ is } 0.`,
      explanationType: 'math'
    },
    {
      question: `If every element of set $A$ is also an element of set $B$, what is the relationship between $A$ and $B$?`,
      questionType: 'text', // Use 'text' to enable renderTextWithMath for inline math
      options: [
        String.raw`A \text{ is equal to } B \ (A = B)`,
        String.raw`A \text{ is a Proper Subset of } B \ (A \subset B)`,
        String.raw`A \text{ is a Subset of } B \ (A \subseteq B)`,
        String.raw`B \text{ is an element of } A \ (B \in A)` // Intentionally incorrect
      ],
      correct: 2,
      explanation: String.raw`\text{If every element of set } A \text{ is also in set } B, \text{ then } A \text{ is a subset of } B, \text{ denoted as } A \subseteq B. \text{ This includes the possibility that } A \text{ and } B \text{ are the same set.}`,
      explanationType: 'math'
    },
    {
      question: `What symbol denotes a Proper Subset?`,
      questionType: 'text', // Use 'text' to enable renderTextWithMath
      options: [
        String.raw`\subseteq`,
        String.raw`\subset`,
        String.raw`\in`,
        String.raw`\cup` // Intentionally incorrect
      ],
      correct: 1,
      explanation: String.raw`A \subset B \text{ means that } A \text{ is a subset of } B, \text{ but } A \text{ is not equal to } B. \text{ The symbol } \subseteq \text{ means "is a subset of" (which allows for equality).}`,
      explanationType: 'math'
    }
  ];

  const rules = [
    "The Universal Set (𝒰) contains all elements under consideration.",
    "A Finite Set has a countable number of elements.",
    "An Infinite Set has an unlimited number of elements.",
    "The Empty Set (∅) contains no elements and has cardinality 0.",
    "Equal Sets contain exactly the same elements.",
    "A ⊆ B means A is a subset of B (every element of A is in B).",
    "A ⊂ B means A is a proper subset of B (A ⊆ B and A ≠ B)."
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Types of Sets"
      icon="🗂️" // You can choose a more appropriate icon
      theme={{
        from: "from-purple-600",
        to: "to-indigo-700",
        button: "bg-indigo-500",
        buttonHover: "hover:bg-indigo-400"
      }}
      rules={rules}
      rulesTitle="Set Types Summary:"
      questions={questions}
    />
  );
};

export default SetTypes;