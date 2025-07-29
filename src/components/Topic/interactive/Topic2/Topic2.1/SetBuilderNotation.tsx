// import React from 'react';
// // import { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';
// import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

// const SetBuilderNotation: React.FC = () => {
//   const questions: QuizQuestion[] = [
//     {
//       question: `What is the primary purpose of Set Builder Notation?`,
//       questionType: 'text',
//       options: [
//         String.raw`\text{To list all elements of a set in order}`,
//         String.raw`\text{To define a set by specifying a property its elements must satisfy}`,
//         String.raw`\text{To find the cardinality of a set}`,
//         String.raw`\text{To represent the union of two sets}`
//       ],
//       correct: 1,
//       explanation: String.raw`\text{Set Builder Notation is a concise way to define sets by describing the common property that all elements of the set must satisfy.}`,
//       explanationType: 'math'
//     },
//     {
//       question: `In the set builder notation $\\{x \\mid x > 5\\}$, what does the symbol $\\mid$ represent?`,
//       questionType: 'text',
//       options: [
//         String.raw`\text{Union}`,
//         String.raw`\text{Intersection}`,
//         String.raw`\text{Such that}`,
//         String.raw`\text{Element of}`
//       ],
//       correct: 2,
//       explanation: String.raw`\text{In Set Builder Notation, the symbol } \mid \text{ (or sometimes } : \text{) means "such that". It separates the variable from the condition.}`,
//       explanationType: 'math'
//     },
//     {
//       question: `How would you write "the set of all real numbers $x$ such that $x$ is less than 3" using Set Builder Notation?`,
//       questionType: 'text',
//       options: [
//         String.raw`\{x \mid x < 3\}`,
//         String.raw`\{x \in \mathbb{R} \mid x < 3\}`,
//         String.raw`\{x \mid x \leq 3\}`,
//         String.raw`\{x \in \mathbb{R} \mid x \leq 3\}`
//       ],
//       correct: 1,
//       explanation: String.raw`\text{To specify the set of real numbers with a condition, you write the set variable, the element symbol, the set of reals } (\mathbb{R}), \text{ the "such that" symbol, and then the condition: } \{x \in \mathbb{R} \mid x < 3\}.`,
//       explanationType: 'math'
//     },
//     {
//       question: `Which set builder notation correctly represents the set $\\{2, 4, 6, 8\\}$?`,
//       questionType: 'text',
//       options: [
//         String.raw`\{x \mid x \text{ is even}\}`,
//         String.raw`\{x \in \mathbb{Z} \mid x = 2n, n \in \{1, 2, 3, 4\}\}`,
//         String.raw`\{x \mid x = 2n, n \in \mathbb{N}\}`,
//         String.raw`\{x \in \mathbb{R} \mid x \text{ is positive}\}`
//       ],
//       correct: 1,
//       explanation: String.raw`\{x \in \mathbb{Z} \mid x = 2n, n \in \{1, 2, 3, 4\}\} \text{ correctly describes the set. It specifies } x \text{ is an integer } (\mathbb{Z}) \text{ such that } x \text{ is twice an } n \text{ where } n \text{ is specifically 1, 2, 3, or 4. This generates } \{2, 4, 6, 8\}.`,
//       explanationType: 'math'
//     },
//     {
//       question: `What set does the notation $\\{x \\in \\mathbb{R} \\mid x^2 < 4\\}$ describe?`,
//       questionType: 'text',
//       options: [
//         String.raw`\{x \mid x < 2\}`,
//         String.raw`\{x \mid x > -2\}`,
//         String.raw`\{x \mid -2 < x < 2\}`,
//         String.raw`\{-2, 2\}`
//       ],
//       correct: 2,
//       explanation: String.raw`\text{The condition } x^2 < 4 \text{ is equivalent to } -2 < x < 2. \text{ Combined with } x \in \mathbb{R}, \text{ the notation describes all real numbers between -2 and 2.}`,
//       explanationType: 'math'
//     }
//   ];

//   const rules = [
//     "Set Builder Notation defines sets using properties: {x | P(x)} or {x : P(x)}.",
//     "Read as 'the set of all x such that property P(x) is true'.",
//     "Use ∈ to specify the domain: {x ∈ ℝ | x > 0}.",
//     "Equivalent to roster method when possible: {2, 4, 6} = {x | x = 2n, n ∈ {1, 2, 3}}."
//   ];

//   return (
//     <MultipleChoiceInteractiveComponent
//       title="Set Builder Notation"
//       icon="🛠️" // You can choose a more appropriate icon
//       theme={{
//         from: "from-amber-600",
//         to: "to-orange-700",
//         button: "bg-orange-500",
//         buttonHover: "hover:bg-orange-400"
//       }}
//       rules={rules}
//       rulesTitle="Set Builder Notation Guide:"
//       questions={questions}
//     />
//   );
// };

// export default SetBuilderNotation;


import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

const SetBuilderNotation: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      question: `What is the primary purpose of Set Builder Notation?`,
      questionType: 'text',
      optionType: 'text', // Specify option type as text
      options: [
        `To list all elements of a set in order`,
        `To define a set by specifying a property its elements must satisfy`,
        `To find the cardinality of a set`,
        `To represent the union of two sets`
      ],
      correct: 1, // Index of the correct option (0-based)
      explanation: `\\text{Set Builder Notation is a concise way to define sets by describing the common property that all elements of the set must satisfy.}`,
      explanationType: 'math'
    },
    {
      question: `In the set builder notation $\\{x \\mid x > 5\\}$, what does the symbol $\\mid$ represent?`,
      questionType: 'text',
      optionType: 'text', // Specify option type as text
      options: [
        `Union`,
        `Intersection`,
        `Such that`,
        `Element of`
      ],
      correct: 2, // Index of the correct option (0-based)
      explanation: `\\text{In Set Builder Notation, the symbol } \\mid \\text{ (or sometimes } : \\text{) means "such that". It separates the variable from the condition.}`,
      explanationType: 'math'
    },
    {
      question: `How would you write "the set of all real numbers $x$ such that $x$ is less than 3" using Set Builder Notation?`,
      questionType: 'text',
      optionType: 'math', // Options are pure math expressions
      options: [
        `\\{x \\mid x < 3\\}`,
        `\\{x \\in \\mathbb{R} \\mid x < 3\\}`,
        `\\{x \\mid x \\leq 3\\}`,
        `\\{x \\in \\mathbb{R} \\mid x \\leq 3\\}`
      ],
      correct: 1, // Index of the correct option (0-based)
      explanation: `\\text{To specify the set of real numbers with a condition, you write the set variable, the element symbol, the set of reals } (\\mathbb{R}), \\text{ the "such that" symbol, and then the condition: } \\{x \\in \\mathbb{R} \\mid x < 3\\}.`,
      explanationType: 'math'
    },
    {
      question: `Which set builder notation correctly represents the set $\\{2, 4, 6, 8\\}$?`,
      questionType: 'text',
      optionType: 'math', // Options are pure math expressions
      options: [
        `\\{x \\mid x \\text{ is even}\\}`,
        `\\{x \\in \\mathbb{Z} \\mid x = 2n, n \\in \\{1, 2, 3, 4\\}\\}`,
        `\\{x \\mid x = 2n, n \\in \\mathbb{N}\\}`,
        `\\{x \\in \\mathbb{R} \\mid x \\text{ is positive}\\}`
      ],
      correct: 1, // Index of the correct option (0-based)
      explanation: `\\{x \\in \\mathbb{Z} \\mid x = 2n, n \\in \\{1, 2, 3, 4\\}\\} \\text{ correctly describes the set. It specifies } x \\text{ is an integer } (\\mathbb{Z}) \\text{ such that } x \\text{ is twice an } n \\text{ where } n \\text{ is specifically 1, 2, 3, or 4. This generates } \\{2, 4, 6, 8\\}.`,
      explanationType: 'math'
    },
    {
      question: `What set does the notation $\\{x \\in \\mathbb{R} \\mid x^2 < 4\\}$ describe?`,
      questionType: 'text',
      optionType: 'math', // Options are pure math expressions
      options: [
        `\\{x \\mid x < 2\\}`,
        `\\{x \\mid x > -2\\}`,
        `\\{x \\mid -2 < x < 2\\}`,
        `\\{-2, 2\\}`
      ],
      correct: 2, // Index of the correct option (0-based)
      explanation: `\\text{The condition } x^2 < 4 \\text{ is equivalent to } -2 < x < 2. \\text{ Combined with } x \\in \\mathbb{R}, \\text{ the notation describes all real numbers between -2 and 2.}`,
      explanationType: 'math'
    }
  ];

  const rules = [
    "Set Builder Notation defines sets using properties: {x | P(x)} or {x : P(x)}.",
    "Read as 'the set of all x such that property P(x) is true'.",
    "Use ∈ to specify the domain: {x ∈ ℝ | x > 0}.",
    "Equivalent to roster method when possible: {2, 4, 6} = {x | x = 2n, n ∈ {1, 2, 3}}."
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Set Builder Notation"
      icon="🛠️"
      theme={{
        from: "from-amber-600",
        to: "to-orange-700",
        button: "bg-orange-500",
        buttonHover: "hover:bg-orange-400"
      }}
      rules={rules}
      rulesTitle="Set Builder Notation Guide:"
      questions={questions}
    />
  );
};

export default SetBuilderNotation;