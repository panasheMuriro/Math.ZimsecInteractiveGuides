import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

const SetBasics: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      question: `Which of the following correctly represents the set containing the numbers 1, 2, and 3?`,
      questionType: 'text', // Use 'text' to enable renderTextWithMath
      options: [
        String.raw`\{1, 2, 3\}`,
        String.raw`(1, 2, 3)`,
        String.raw`[1, 2, 3]`,
        String.raw`\{1 2 3\}`
      ],
      correct: 0,
      explanation: String.raw`\text{Sets are represented using curly braces } \{ \}. \text{ The set containing 1, 2, and 3 is written as } \{1, 2, 3\}. \text{ Parentheses } ( ) \text{ denote ordered pairs or intervals, and square brackets } [ ] \text{ denote intervals or lists in some contexts.}`,
      explanationType: 'math' // Use 'math' for BlockMath explanation
    },
    {
      question: `What is the cardinality of the set $A = \\{a, b, c, d\\}$?`,
      questionType: 'text', // Use 'text' to enable renderTextWithMath for inline math
      options: [
        String.raw`3`,
        String.raw`4`,
        String.raw`5`,
        String.raw`\infty`
      ],
      correct: 1,
      explanation: String.raw`\text{The cardinality of a set, denoted } |A| \text{ or } n(A), \text{ is the number of distinct elements in the set. The set } A = \{a, b, c, d\} \text{ contains 4 distinct elements, so } |A| = 4.`,
      explanationType: 'math' // Use 'math' for BlockMath explanation
    },
    {
      question: `Which symbol means "is an element of"?`,
      questionType: 'text',
      options: [
        String.raw`\subset`,
        String.raw`\subseteq`,
        String.raw`\in`,
        String.raw`\cup`
      ],
      correct: 2,
      explanation: String.raw`\text{The symbol } \in \text{ means "is an element of". For example, if } A = \{1, 2, 3\}, \text{ then } 2 \in A \text{ is true. The symbol } \subset \text{ means "is a proper subset of", } \subseteq \text{ means "is a subset of", and } \cup \text{ represents the union of sets.}`,
      explanationType: 'math' // Use 'math' for BlockMath explanation
    },
    {
      question: `Which of these sets is equivalent to $\\{1, 2, 3\\}$?`,
      questionType: 'text', // Use 'text' to enable renderTextWithMath for inline math
      options: [
        String.raw`\{3, 2, 1, 2\}`,
        String.raw`\{1, 1, 2, 3\}`,
        String.raw`\{3, 2, 1\}`,
        String.raw`\{1, 2, 3, 4\}`
      ],
      correct: 2,
      explanation: String.raw`\text{Sets are unordered collections, and duplicate elements are ignored. This means } \{1, 2, 3\} \text{ is the same set as } \{3, 2, 1\}. \text{ The sets } \{3, 2, 1, 2\} \text{ and } \{1, 1, 2, 3\} \text{ simplify to } \{3, 2, 1\} \text{ or } \{1, 2, 3\}, \text{ so they are also equivalent, but } \{3, 2, 1\} \text{ is the cleanest representation of the same set. The set } \{1, 2, 3, 4\} \text{ contains an extra element (4) and is therefore not equivalent.}`,
      explanationType: 'math' // Use 'math' for BlockMath explanation
    },
    {
      question: `How do you denote that an element $x$ is not a member of set $A$?`,
      questionType: 'text', // Use 'text' to enable renderTextWithMath for inline math
      options: [
        String.raw`x \subset A`,
        String.raw`x \not\subset A`,
        String.raw`x \in A`,
        String.raw`x \not\in A`
      ],
      correct: 3,
      explanation: String.raw`\text{The symbol } \not\in \text{ means "is not an element of". If } x \text{ is not a member of set } A, \text{ we write } x \not\in A. \text{ The symbol } \in \text{ means "is an element of". The symbols } \subset \text{ and } \not\subset \text{ relate to subsets, not element membership.}`,
      explanationType: 'math' // Use 'math' for BlockMath explanation
    }
  ];

  const rules = [
    "Sets are unordered collections of distinct objects.",
    "Curly braces { } are used to denote sets.",
    "The symbol ∈ means 'is an element of'.",
    "The symbol ∉ means 'is not an element of'.",
    "Duplicate elements in a set are ignored.",
    "The cardinality of a set is the number of its distinct elements."
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Sets and Set Notation"
      icon="📐" // You can choose a more appropriate icon
      theme={{
        from: "from-blue-600",
        to: "to-indigo-700",
        button: "bg-indigo-500",
        buttonHover: "hover:bg-indigo-400"
      }}
      rules={rules}
      rulesTitle="Key Rules:"
      questions={questions}
    />
  );
};

export default SetBasics;