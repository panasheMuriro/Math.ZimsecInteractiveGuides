// ScaleMeasurementsQuizQuestions.ts
import { QuizQuestion } from '../Templates/Topic1QuizTemplate'; // Adjust the path as needed



export const scaleMeasurementsQuizQuestions: QuizQuestion[] = [
  {
    question: "A road on a map is $5 cm$ long. $1:25,000$. What is the real length?",
    questionType: "text",
    options: [
      "1.25 \\text{ km}",
      "12.5 \\text{ km}",
      "125 \\text{ km}",
      "1250 \\text{ m}"
    ],
    correct: 0, // 1.25 km
    explanation: "5 \\text{ cm} \\times 25,000 = 125,000 \\text{ cm} \\\\ 125,000 \\text{ cm} = 1.25 \\text{ km}",
    explanationType: 'math'
  },
  {
    question: "The real distance between two towns is 24 km. The map scale is 1:100,000. How long is the line on the map?",
    questionType: "text",
    options: [
      "2.4 \\text{ cm}",
      "24 \\text{ cm}",
      "0.24 \\text{ cm}",
      "240 \\text{ cm}"
    ],
    correct: 1, // 24 cm
    explanation: "24 \\text{ km} = 2,400,000 \\text{ cm} \\\\ 2,400,000 \\text{ cm} \\div 100,000 = 24 \\text{ cm}",
    explanationType: 'math'
  },
  {
    question: "On a map, a river is 9 cm long. Its actual length is 18 km. What is the map scale?",
     questionType: "text",
    options: [
      "1:20,000",
      "1:200,000",
      "1:2,000",
      "2 \\text{ cm} : 1 \\text{ km}"
    ],
    correct: 1, // 1:200,000
    explanation: "18 \\text{ km} = 1,800,000 \\text{ cm} \\\\ \\text{Scale} = 9 \\text{ cm} : 1,800,000 \\text{ cm} \\\\ \\text{Divide both by 9: } 1 : 200,000",
    explanationType: 'math'
  },
  {
    question: "You want to draw a 40 m wall using a scale of 1:500 .How long should the drawing be?",
     questionType: "text",
    options: [
      "8 \\text{ cm}",
      "0.8 \\text{ cm}",
      "80 \\text{ cm}",
      "8 \\text{ mm}"
    ],
    correct: 0, // 8 cm
    explanation: "40 \\text{ m} = 4,000 \\text{ cm} \\\\ 4,000 \\text{ cm} \\div 500 = 8 \\text{ cm}",
    explanationType: 'math'
  },
  {
    question: "Which calculation finds the real distance from map distance?",
questionType: "text",
    options: [
      "\\text{Map Distance} \\times \\text{Scale Denominator}",
      "\\text{Map Distance} \\div \\text{Scale Denominator}",
      "\\text{Scale Denominator} \\div \\text{Map Distance}",
      "\\text{Map Distance} + \\text{Scale Denominator}"
    ],
    correct: 0, // Multiply
    explanation: "\\text{To find the real distance, you multiply} \\\\ \\text{the measured map distance by the scale factor} \\\\ \\text{(the number after the colon).}",
    explanationType: 'text'
  }
];


// ScaleMeasurementsQuizComponent.tsx
import React from 'react';
import Topic1QuizTemplate from '../Templates/Topic1QuizTemplate'; // Adjust the path as needed// Adjust the path as needed

const ScaleMeasurementsQuiz: React.FC = () => {
  // Define theme and icon specific to Scale Measurements
  const scaleMeasurementsTheme = {
    from: 'from-blue-500',
    to: 'to-green-400',
    button: 'bg-lime-600 hover:bg-lime-700',
    buttonHover: 'hover:shadow-lg hover:shadow-lime-500/30'
  };

  const scaleMeasurementsIcon = "📐"; // Triangular ruler emoji

  // Define key rules for the quiz sidebar
  const scaleMeasurementsRules = [
    "Real Distance = Map Distance × Scale Denominator",
    "Map Distance = Real Distance ÷ Scale Denominator",
    "Scale = Map Distance : Real Distance (in same units)",
    "Always convert units (e.g., km to cm) before calculating.",
    "Example: Scale 1:50,000 means 1 cm on map = 50,000 cm real.",
    "Drawing Length = Actual Length ÷ Scale Denominator"
  ];

  return (
    <div className="flex justify-center items-center">
      <Topic1QuizTemplate
        title="Scale Measurements Quiz"
        icon={scaleMeasurementsIcon}
        theme={scaleMeasurementsTheme}
        rules={scaleMeasurementsRules}
        rulesTitle="Measurement Rules:"
        questions={scaleMeasurementsQuizQuestions}

        // Optional: onReset handler if needed
        // onReset={() => console.log('Scale Measurements Quiz Reset')}
      />
    </div>
  );
};

export default ScaleMeasurementsQuiz;