// ScaleTypesQuiz.tsx (or .jsx)

import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

// --- The Question Data ---
const scaleTypesQuizQuestions: QuizQuestion[] = [
  {
    id: 'scale-type-rf-definition',
    question: "What is a key characteristic of a Representative Fraction (RF) or Ratio Scale like $1:50,000$?",
    options: [
      "It is a graduated line printed on the map.",
      "The numerator is always 1, and it shows the ratio of map distance to real distance.",
      "It uses words to describe the scale (e.g., '1 inch equals 1 mile').",
      "It only works for very small scale maps."
    ],
    correct: 1, // Index of the correct option
    explanation: "An RF scale is written as a ratio (e.g., $1:50,000$) or fraction (e.g., $\\frac{1}{50,000}$) where the numerator is typically 1, and the denominator indicates how many real-world units correspond to 1 unit on the map.",
    explanationType: 'text', // Explanation contains math
    questionType: 'text', // Question is plain text with math rendered by helper
    optionType: 'text' // Options are plain text with math rendered by helper
  },
  {
    id: 'scale-type-linear-identification',
    question: "What type of scale is a graduated line printed on a map that shows actual distances?",
    options: [
      "Representative Fraction (RF) Scale",
      "Verbal Scale",
      "Linear Scale",
      "Proportional Scale"
    ],
    correct: 2, // Index of "Linear Scale"
    explanation: "A Linear Scale (also known as a Bar Scale) is a visual tool on a map, usually a line marked with units, that allows you to measure distances directly without calculations.",
    explanationType: 'text',
    questionType: 'text',
    optionType: 'text'
  },
  {
    id: 'scale-calculation-worded-to-rf',
    question: "If 2 cm on a map represents 5 km in reality, what is the Representative Fraction (RF) scale?",
    options: [
      "$1:25,000$",
      "$1:250,000$",
      "$1:2,500,000$",
      "$2:500,000$"
    ],
    correct: 1, // Index of "$1:250,000$"
    explanation: "First, convert units to the same base: $5 \\, \\mathrm{km} = 500,000 \\, \\mathrm{cm}$. \\\\ The scale is $2 \\, \\mathrm{cm} : 500,000 \\, \\mathrm{cm}$. \\\\ Simplify the ratio by dividing both sides by 2: $1 : 250,000$.",
    explanationType: 'text',
    questionType: 'text',
    optionType: 'text' // Options contain math
  },
  {
    id: 'scale-understanding-rf-meaning',
    question: "What does a map scale of $1:25,000$ mean?",
    options: [
      "1 unit on the map equals 25,000 units in reality.",
      "1 unit in reality equals 25,000 units on the map.",
      "The map is 25,000 times larger than the area it represents.",
      "The map covers an area of 25,000 square units."
    ],
    correct: 0, // Index of "1 unit on the map equals 25,000 units in reality."
    explanation: "In a scale like $1:25,000$, the first number (1) represents the distance on the map, and the second number (25,000) represents the corresponding distance in the real world. So, 1 cm on the map equals 25,000 cm in reality.",
    explanationType: 'text',
    questionType: 'text',
    optionType: 'text'
  }
];

// --- The Component ---
const ScaleTypesQuiz: React.FC = () => {
  // Define theme and icon specific to Scale Types
  // Note: Theme is unused in the provided MultipleChoice component, but kept for interface compatibility
  const scaleTypesTheme = {
    from: 'from-blue-500', // Unused
    to: 'to-teal-400',    // Unused
    button: 'bg-blue-600 hover:bg-blue-700', // Unused
    buttonHover: 'hover:shadow-lg hover:shadow-blue-500/30' // Unused
  };

  const scaleTypesIcon = "📏"; // Or use an icon component

  // Define key rules for the quiz sidebar
  const scaleTypesRules = [
    "Representative Fraction (RF) Scale: Written as $1:n$ or $\\frac{1}{n}$ (e.g., $1:50,000$).",
    "Linear Scale: A bar marked with units for direct measurement.",
    "To find RF from worded scale: Convert units, then simplify the ratio (e.g., $2 \\, \\mathrm{cm} : 5 \\, \\mathrm{km}$).",
    "RF numerator is usually 1. The denominator shows real-world units per map unit."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleChoiceInteractiveComponent
        title="Types of Scales Quiz"
        icon={scaleTypesIcon}
        theme={scaleTypesTheme} // Passed but not used
        rules={scaleTypesRules}
        rulesTitle="Scale Rules:"
        questions={scaleTypesQuizQuestions}
        // Optional: onReset handler if needed
        // onReset={() => console.log('Scale Types Quiz Reset')}
      />
    </div>
  );
};

export default ScaleTypesQuiz;