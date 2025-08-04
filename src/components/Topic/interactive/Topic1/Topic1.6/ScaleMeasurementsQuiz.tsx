// ScaleMeasurementsQuizQuestions.ts
import { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent'; // Adjust the path as needed


const scaleMeasurementsQuizQuestions: QuizQuestion[] = [
  {
    id: 'q1-map-to-real-length',
    question: "A road on a map is $5 \\, \\mathrm{cm}$ long. The scale is $1:25,000$. What is the real length?",
    questionType: "text",
    options: [
      "$1.25 \\, \\mathrm{km}$",
      "$12.5 \\, \\mathrm{km}$",
      "$125 \\, \\mathrm{km}$",
      "$1250 \\, \\mathrm{m}$"
    ],
    optionType: 'text', // Assuming options should be rendered as math
    correct: 0, // 1.25 km
    explanation: "$5 \\, \\mathrm{cm} \\times 25,000 = 125,000 \\, \\mathrm{cm}$. \\\\ $125,000 \\, \\mathrm{cm} = 1.25 \\, \\mathrm{km}$.",
    explanationType: 'text'
  },
  {
    id: 'q2-real-to-map-length',
    question: "The real distance between two towns is $24 \\, \\mathrm{km}$. The map scale is $1:100,000$. How long is the line on the map?",
    questionType: "text",
    options: [
      "$2.4 \\, \\mathrm{cm}$",
      "$24 \\, \\mathrm{cm}$",
      "$0.24 \\, \\mathrm{cm}$",
      "$240 \\, \\mathrm{cm}$"
    ],
    optionType: 'text',
    correct: 1, // 24 cm
    explanation: "$24 \\, \\mathrm{km} = 2,400,000 \\, \\mathrm{cm}$. \\\\ $2,400,000 \\, \\mathrm{cm} \\div 100,000 = 24 \\, \\mathrm{cm}$.",
    explanationType: 'text'
  },
  {
    id: 'q3-find-scale',
    question: "On a map, a river is $9 \\, \\mathrm{cm}$ long. Its actual length is $18 \\, \\mathrm{km}$. What is the map scale?",
    questionType: "text",
    options: [
      "$1:20,000$",
      "$1:200,000$",
      "$1:2,000$",
      "$2 \\, \\mathrm{cm} : 1 \\, \\mathrm{km}$"
    ],
    optionType: 'text',
    correct: 1, // 1:200,000
    explanation: "$18 \\, \\mathrm{km} = 1,800,000 \\, \\mathrm{cm}$. \\\\ Scale is $9 \\, \\mathrm{cm} : 1,800,000 \\, \\mathrm{cm}$. \\\\ Divide both by 9: $1 : 200,000$.",
    explanationType: 'text'
  },
  {
    id: 'q4-drawing-length',
    question: "You want to draw a $40 \\, \\mathrm{m}$ wall using a scale of $1:500$. How long should the drawing be?",
    questionType: "text",
    options: [
      "$8 \\, \\mathrm{cm}$",
      "$0.8 \\, \\mathrm{cm}$",
      "$80 \\, \\mathrm{cm}$",
      "$8 \\, \\mathrm{mm}$"
    ],
    optionType: 'text',
    correct: 0, // 8 cm
    explanation: "$40 \\, \\mathrm{m} = 4,000 \\, \\mathrm{cm}$. \\\\ $4,000 \\, \\mathrm{cm} \\div 500 = 8 \\, \\mathrm{cm}$.",
    explanationType: 'text'
  },
  {
    id: 'q5-calculation-principle',
    question: "Which calculation finds the real distance from map distance?",
    questionType: "text",
    options: [
      "$\\text{Map Distance} \\times \\text{Scale Denominator}$",
      "$\\text{Map Distance} \\div \\text{Scale Denominator}$",
      "$\\text{Scale Denominator} \\div \\text{Map Distance}$",
      "$\\text{Map Distance} + \\text{Scale Denominator}$"
    ],
    optionType: 'text',
    correct: 0, // Multiply
    explanation: "To find the real distance, you multiply the measured map distance by the scale factor (the number after the colon).",
    explanationType: 'text' // Explanation is descriptive text
  }
];



// ScaleMeasurementsQuizComponent.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent from '../../Templates/MultipleChoiceInteractiveComponent'; // Adjust the path as needed// Adjust the path as needed

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
      <MultipleChoiceInteractiveComponent
        title="Scale Measurements Quiz"
        icon={scaleMeasurementsIcon}
        theme={scaleMeasurementsTheme}
        rules={scaleMeasurementsRules}
        rulesTitle="Measurement Rules:"
        questions={scaleMeasurementsQuizQuestions}
      />
    </div>
  );
};

export default ScaleMeasurementsQuiz;