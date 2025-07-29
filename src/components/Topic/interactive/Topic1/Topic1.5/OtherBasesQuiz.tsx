// OtherBasesQuizQuestions.ts
import MultipleChoiceInteractiveComponent, { QuizQuestion } from "../../Templates/MultipleChoiceInteractiveComponent"; // Adjust path as needed

const otherBasesQuizQuestions: QuizQuestion[] = [
  // Question 1: Octal Standard -> Expanded Form (Powers)
  {
    question: "\\text{What is the expanded } \\\\ \\text{form of } 345_8 \\\\ \\text{ using powers of 8?}",
    options: [
      "3 \\times 8^4 + 4 \\times 8^3 + 5 \\times 8^2", // Incorrect powers (shifted up)
      "3 \\times 8^2 + 4 \\times 8^1 + 5 \\times 8^0", // Correct
      "3 \\times 8^3 + 4 \\times 8^2 + 5 \\times 8^1", // Incorrect powers (shifted up)
      "3 \\times 8^1 + 4 \\times 8^0 + 5 \\times 8^{-1}" // Incorrect powers (shifted down/negative)
    ],
    correct: 1, // Index of the correct option
    explanation: "Each octal digit is multiplied by the corresponding power of 8. The rightmost digit (5) is in the 8^0 place, then 4 is in the 8^1 place, and 3 is in the 8^2 place.",
    explanationType: 'text'
  },
  // Question 2: Hexadecimal Standard -> Expanded Form (Values)
  {
    question: "\\text{What is } \\\\ 2A3_{16} \\\\ \\text{ in expanded form showing values?}",
    options: [
      "2 + 10 + 3",        // Too simple, ignores place values
      "512 + 160 + 3",     // Correct: (2*256) + (10*16) + (3*1)
      "200 + 100 + 3",     // Guess based on face value, ignores base
      "256 + 160 + 3"      // Incorrect: uses 256+160 but ignores '2' and 'A' meaning
    ],
    correct: 1,
    explanation: "Calculate place values: 2 is in the 16^2 (256) place = 512, A(10) is in the 16^1 (16) place = 160, 3 is in the 16^0 (1) place = 3. So, 512 + 160 + 3.",
    explanationType: 'math'
  },
  // Question 3: Base 5 Expanded (Powers) -> Standard
  {
    question: "\\text{Which base 5 number } \\\\ \\text{equals } 2 \\times 5^2 + 3 \\times 5^1 + 4 \\times 5^0\\text{?}",
    options: [
      "234_5", // Correct
      "432_5", // Reversed digits
      "243_5", // Mixed up digits
      "324_5"  // Mixed up digits
    ],
    correct: 0,
    explanation: "The expanded form directly corresponds to the digits in the number. Coefficients 2, 3, 4 from highest to lowest power give the number 234_5.",
    explanationType: 'text'
  },
  // Question 4: Octal Place Value Understanding (Revised options to 1-4 format)
  {
    question: "\\text{In octal (base 8)} \\\\  \\text{ what digits can you use?}",
    options: [
      "\\text{0 to 5}",  
      "\\text{0 to 7}",  
      "\\text{1 to 8}",  
      "\\text{0 to 8}",       // Missing 6, 7

    ],
    correct: 1,
    explanation: "Octal uses base 8, so it includes digits from 0 up to one less than the base, which is 7. Valid digits are 0, 1, 2, 3, 4, 5, 6, 7.",
    explanationType: 'text'
  },
  // Question 5: Hexadecimal Digit Identification (Revised options to 1-4 format)
  {
    question: "\\text{What decimal value does the hex digit C represent?}",
    options: [
      "10",
      "11",
      "12",
      "13"
    ],
    correct: 2,
    explanation: "In hexadecimal, the letters A-F represent the decimal values 10-15. C is the third letter, so it represents 10 + 2 = 12.",
    explanationType: 'text'
  }
];

// OtherBasesQuizComponent.tsx (or .jsx) - Remains the same
import React from 'react';

const OtherBasesQuiz: React.FC = () => {
  // Define theme and icon specific to Other Bases
  const otherBasesTheme = {
    from: 'from-orange-500',
    to: 'to-red-600',
    button: 'bg-orange-600 hover:bg-orange-700',
    buttonHover: 'hover:shadow-lg hover:shadow-orange-500/30'
  };

  const otherBasesIcon = "🔢"; // Or a different icon

  // Define key rules for the quiz sidebar - PLAIN TEXT
  const otherBasesRules = [
    "Octal (base 8) uses digits 0-7.",
    "Hexadecimal (base 16) uses digits 0-9 and letters A-F (A=10, B=11, ..., F=15).",
    "Base 5 uses digits 0-4.",
    "Expanded form shows value of each digit: 345₈ = 3×8² + 4×8¹ + 5×8⁰.",
    "In any base n, digits must be 0 to (n-1)."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleChoiceInteractiveComponent
        title="Other Bases Quiz"
        icon={otherBasesIcon}
        theme={otherBasesTheme}
        rules={otherBasesRules} // Pass plain text rules
        rulesTitle="Other Bases Rules:"
        questions={otherBasesQuizQuestions}
        // Optional: onReset handler if needed
        // onReset={() => console.log('Other Bases Quiz Reset')}
      />
    </div>
  );
};

export default OtherBasesQuiz;