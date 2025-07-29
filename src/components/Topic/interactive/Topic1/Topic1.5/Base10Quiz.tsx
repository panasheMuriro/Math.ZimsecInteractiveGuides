// Base10QuizQuestions.ts
// Adjust path as needed

import MultipleChoiceInteractiveComponent, { QuizQuestion } from "../../Templates/MultipleChoiceInteractiveComponent";

const base10QuizQuestions: QuizQuestion[] = [
  // Question 1: Standard -> Expanded (Powers)
  {
  question: "\\text{What is the expanded } \\\\ \\text{form of } 245_{10} \\\\ \\text{ using powers of 10?}",
    options: [
      "2 \\times 10^3 + 4 \\times 10^2 + 5 \\times 10^1",
      "2 \\times 10^2 + 4 \\times 10^1 + 5 \\times 10^0",
      "2 \\times 10^1 + 4 \\times 10^0 + 5 \\times 10^{-1}",
      "2 + 4 + 5"
    ],
    correct: 1,
    explanation: "Each digit is multiplied by the corresponding power of 10 based on its position. The rightmost digit (5) is in the 10^0 place, the next (4) is in the 10^1 place, and the leftmost (2) is in the 10^2 place.",
    explanationType: 'text'
  },
  // Question 2: Expanded (Values) -> Standard
  {
    question: "\\text{Which number is } \\\\ \\text{represented by } \\\\ 3000 + 400 + 20 + 7\\text{?}",
    options: [
      "3427_{10}",
      "3247_{10}",
      "30427_{10}",
      "3472_{10}"
    ],
    correct: 0,
    explanation: "Add the values together: 3000 + 400 + 20 + 7 = 3427.",
    explanationType: 'text'
  },
  // Question 3: Standard -> Expanded (Values)
  {
    question: "\\text{What is the expanded } \\\\ \\text{form of } 506_{10} \\\\ \\text{ showing the value of each place?}",
    options: [
      "500 + 6",
      "500 + 0 + 6",
      "5 \\times 100 + 0 \\times 10 + 6 \\times 1",
      "5 + 0 + 6"
    ],
    correct: 1,
    explanation: "Each digit's value is shown. 5 is in the hundreds place (500), 0 is in the tens place (0), and 6 is in the units place (6).",
    explanationType: 'text'
  },
  // Question 4: Expanded (Powers) -> Standard
  {
  question: "\\text{Which number is } \\\\ \\text{represented by } \\\\ 1 \\times 10^3 + 5 \\times 10^2 + 9 \\times 10^1 + 6 \\times 10^0\\text{?}",
    options: [
      "1596_{10}",
      "1956_{10}",
      "10596_{10}",
      "1695_{10}"
    ],
    correct: 0,
    explanation: "Calculate each term: 1 \\times 1000 = 1000, 5 \\times 100 = 500, 9 \\times 10 = 90, 6 \\times 1 = 6. Add them: 1000 + 500 + 90 + 6 = 1596.",
    explanationType: 'math'
  },
  // Question 5: Understanding Place Value
  {
  question: "\\text{In the number } \\\\ 3427_{10}\\text{, } \\\\ \\text{what is the place value of the digit 4?}",
    options: [
      "4",
      "40",
      "400",
      "4000"
    ],
    correct: 2,
    explanation: "The digit 4 is in the hundreds place. Its place value is 4 \\times 100 = 400.",
    explanationType: 'math'
  },
  // Question 6: Standard -> Expanded (Powers) - Different Number
  {
    question: "\\text{What is the expanded } \\\\ \\text{form of } 1024_{10} \\\\ \\text{ using powers of 10?}",
    options: [
      "1 \\times 10^4 + 0 \\times 10^3 + 2 \\times 10^2 + 4 \\times 10^1",
      "1 \\times 10^3 + 0 \\times 10^2 + 2 \\times 10^1 + 4 \\times 10^0",
      "1 \\times 10^3 + 2 \\times 10^1 + 4 \\times 10^0",
      "1 \\times 10^3 + 0 \\times 10^2 + 2 \\times 10^1 + 4 \\times 10^0"
    ],
    correct: 3,
    explanation: "The number 1024 has 4 digits. The rightmost digit (4) is 10^0, then 2 is 10^1, 0 is 10^2, and 1 is 10^3. So it's 1 \\times 10^3 + 0 \\times 10^2 + 2 \\times 10^1 + 4 \\times 10^0.",
    explanationType: 'math'
  }
];

// Base10QuizComponent.tsx (or .jsx) - No changes needed here for line breaks
import React from 'react';

const Base10Quiz: React.FC = () => {
  // Define theme and icon specific to Base 10
  const base10Theme = {
    from: 'from-blue-500',
    to: 'to-teal-400',
    button: 'bg-blue-600 hover:bg-blue-700',
    buttonHover: 'hover:shadow-lg hover:shadow-blue-500/30'
  };

  const base10Icon = "🔢"; // Or use an icon component

  // Define key rules for the quiz sidebar
  const base10Rules = [
    "Each position in a base 10 number represents a power of 10 (1, 10, 100, ...).",
    "Expanded form shows the value of each digit: $3427 = 3000 + 400 + 20 + 7$.",
    "Expanded form using powers: $3427 = 3 \\times 10^3 + 4 \\times 10^2 + 2 \\times 10^1 + 7 \\times 10^0$.",
    "The rightmost digit is in the $10^0$ (units) place."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleChoiceInteractiveComponent
        title="Base 10 Quiz"
        icon={base10Icon}
        theme={base10Theme}
        rules={base10Rules}
        rulesTitle="Base 10 Rules:"
        questions={base10QuizQuestions}
        // Optional: onReset handler if needed
        // onReset={() => console.log('Base 10 Quiz Reset')}
      />
    </div>
  );
};

export default Base10Quiz;