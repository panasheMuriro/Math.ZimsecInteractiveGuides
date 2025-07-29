import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

const SetOperations: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      question: `What does the union of sets $A$ and $B$ ($A \\cup B$) represent?`,
      questionType: 'text', // Use 'text' to enable renderTextWithMath
      options: [
        String.raw`\text{Elements only in } A`,
        String.raw`\text{Elements only in } B`,
        String.raw`\text{Elements in both } A \text{ and } B`,
        String.raw`\text{Elements in } A \text{ or } B \text{ or both}`
      ],
      correct: 3,
      explanation: String.raw`\text{The union } A \cup B \text{ includes all elements that belong to set } A, \text{ set } B, \text{ or both sets.}`,
      explanationType: 'math'
    },
    {
      question: `Given $A = \\{1, 2, 3\\}$ and $B = \\{3, 4, 5\\}$, what is $A \\cap B$?`,
      questionType: 'text', // Use 'text' to enable renderTextWithMath
      options: [
        String.raw`\{1, 2, 3, 4, 5\}`,
        String.raw`\{3\}`,
        String.raw`\{1, 2, 4, 5\}`,
        String.raw`\emptyset`
      ],
      correct: 1,
      explanation: String.raw`\text{The intersection } A \cap B \text{ includes only the elements common to both sets. Here, 3 is the only element present in both } A \text{ and } B.`,
      explanationType: 'math'
    },
    {
      question: `If $A \\cap B = \\emptyset$, what are sets $A$ and $B$ called?`,
      questionType: 'text', // Use 'text' to enable renderTextWithMath
      options: [
        String.raw`\text{Equal}`,
        String.raw`\text{Subsets}`,
        String.raw`\text{Disjoint}`,
        String.raw`\text{Complements}`
      ],
      correct: 2,
      explanation: String.raw`\text{Two sets are called disjoint if they have no elements in common, meaning their intersection is the empty set.}`,
      explanationType: 'math'
    },
    {
      question: `What does the set difference $A \\setminus B$ represent?`,
      questionType: 'text', // Use 'text' to enable renderTextWithMath
      options: [
        String.raw`\text{Elements in } A \text{ or } B \text{ but not both}`,
        String.raw`\text{Elements in the Universal Set but not in } A \text{ or } B`,
        String.raw`\text{Elements in } A \text{ but not in } B`,
        String.raw`\text{Elements in } B \text{ but not in } A`
      ],
      correct: 2,
      explanation: String.raw`A \setminus B \text{ (read as "A minus B" or "A difference B") is the set of elements that belong to } A \text{ but do not belong to } B.`,
      explanationType: 'math'
    },
    {
      question: `What is the complement of set $A$ (denoted $A'$ or $A^c$) relative to the Universal Set $\\mathbb{U}$?`,
      questionType: 'text', // Use 'text' to enable renderTextWithMath
      options: [
        String.raw`A \cap \mathbb{U}`,
        String.raw`\text{Elements in } A \text{ but not in } \mathbb{U}`,
        String.raw`\text{Elements in } \mathbb{U} \text{ but not in } A`,
        String.raw`\mathbb{U} \cup A`
      ],
      correct: 2,
      explanation: String.raw`\text{The complement of } A, \text{ denoted } A' \text{ or } A^c, \text{ consists of all elements in the Universal Set } \mathbb{U} \text{ that are not elements of } A.`,
      explanationType: 'math'
    }
  ];

  const rules = [
    "Union (A ∪ B): Elements in A or B or both.",
    "Intersection (A ∩ B): Elements in both A and B.",
    "Disjoint Sets: A ∩ B = ∅ (no common elements).",
    "Difference (A \\ B): Elements in A but not in B.",
    "Complement (A' or Aᶜ): Elements in Universal Set U but not in A."
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Union and Intersection of Sets"
      icon="🔗" // You can choose a more appropriate icon
      theme={{
        from: "from-emerald-600",
        to: "to-teal-700",
        button: "bg-teal-500",
        buttonHover: "hover:bg-teal-400"
      }}
      rules={rules}
      rulesTitle="Set Operations Summary:"
      questions={questions}
    />
  );
};

export default SetOperations;