// Base2QuizQuestions.ts
import Topic1QuizTemplate, { QuizQuestion } from "../Templates/Topic1QuizTemplate"; // Adjust path as needed

const base2QuizQuestions: QuizQuestion[] = [
  // Question 1: Standard Binary -> Expanded Form (Powers)
  {
   question: "\\text{What is the expanded } \\\\ \\text{form of } 1011_2 \\\\ \\text{ using powers of 2?}",
    options: [
      "1 \\times 2^4 + 0 \\times 2^3 + 1 \\times 2^2 + 1 \\times 2^1",
      "1 \\times 2^3 + 0 \\times 2^2 + 1 \\times 2^1 + 1 \\times 2^0",
      "1 \\times 2^2 + 0 \\times 2^1 + 1 \\times 2^0 + 1 \\times 2^{-1}",
      "1 + 0 + 1 + 1"
    ],
    correct: 1,
    explanation: "Each binary digit is multiplied by the corresponding power of 2. The rightmost digit (1) is 2^0, then 1 is 2^1, 0 is 2^2, and the leftmost 1 is 2^3.",
    explanationType: 'text' // Explanation is plain text
  },

  // Question 4: Expanded Form (Powers) -> Standard Binary
  {
     question: "\\text{Which binary number } \\\\ \\text{equals } 1 \\times 2^2 + 1 \\times 2^1 + \\\\ 0 \\times 2^0\\text{?}",
    options: [
      "101_2",
      "110_2",
      "011_2",
      "111_2"
    ],
    correct: 1,
    explanation: "Calculate the sum: (1 \\times 4) + (1 \\times 2) + (0 \\times 1) = 4 + 2 + 0 = 6. The binary for 6 is 110_2.",
    explanationType: 'math' // Explanation contains math
  },
  // Question 5: Understanding Binary Place Values
  {
   question: "\\text{In binary, what power } \\\\ \\text{of 2 does the third digit } \\\\ \\text{from the right represent?}",
    options: [
      "2^0",
      "2^1",
      "2^2",
      "2^3"
    ],
    correct: 2,
    explanation: "Binary place values from right to left are 2^0, 2^1, 2^2, 2^3... The third digit from the right is in the 2^2 place.",
    explanationType: 'text'
  },
  // Question 6: Standard Binary -> Expanded Form (Powers) - Different Number
  {
   question: "\\text{What is the expanded } \\\\ \\text{form of } 10010_2 \\\\ \\text{ using powers of 2?}",
    options: [
      "1 \\times 2^5 + 0 \\times 2^4 + 0 \\times 2^3 + 1 \\times 2^2 + 0 \\times 2^1",
      "1 \\times 2^4 + 0 \\times 2^3 + 0 \\times 2^2 + 1 \\times 2^1 + 0 \\times 2^0",
      "1 \\times 2^3 + 0 \\times 2^2 + 0 \\times 2^1 + 1 \\times 2^0 + 0 \\times 2^{-1}",
      "1 \\times 2^4 + 1 \\times 2^1"
    ],
    correct: 1,
    explanation: "The digits of 10010_2 represent powers 2^4, 2^3, 2^2, 2^1, 2^0 from left to right. So it's 1 \\times 2^4 + 0 \\times 2^3 + 0 \\times 2^2 + 1 \\times 2^1 + 0 \\times 2^0.",
    explanationType: 'math'
  }
];

// Base2QuizComponent.tsx (or .jsx)
import React from 'react';

const Base2Quiz: React.FC = () => {
  // Define theme and icon specific to Base 2
  const base2Theme = {
    from: 'from-purple-600',
    to: 'to-indigo-700',
    button: 'bg-purple-700 hover:bg-purple-800',
    buttonHover: 'hover:shadow-lg hover:shadow-purple-600/30'
  };

  const base2Icon = "🖥️"; // Or use an icon component

  // Define key rules for the quiz sidebar - PLAIN TEXT NOW
  const base2Rules = [
    "Binary uses only digits 0 and 1.",
    "Each position represents a power of 2 (1, 2, 4, 8, 16, ...).",
    "Expanded form shows value of each digit: 1011 = 8 + 0 + 2 + 1.",
    "Expanded form using powers: 1011 = 1×2³ + 0×2² + 1×2¹ + 1×2⁰.",
    "The rightmost digit is in the 2⁰ (units) place."
  ];

  return (
    <div className="flex justify-center items-center">
      <Topic1QuizTemplate
        title="Base 2 Quiz"
        icon={base2Icon}
        theme={base2Theme}
        rules={base2Rules} // Pass plain text rules
        rulesTitle="Binary Rules:"
        questions={base2QuizQuestions}
        // Optional: onReset handler if needed
        // onReset={() => console.log('Base 2 Quiz Reset')}
      />
    </div>
  );
};

export default Base2Quiz;