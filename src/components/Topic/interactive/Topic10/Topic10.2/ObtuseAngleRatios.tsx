// components/interactives/obtuseAngleRatios/ObtuseAngleRatiosQuiz.tsx

import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

// Define the questions structure for the interactive component
const questions: MultiStepQuestion[] = [
  {
    id: 'q1-definitions',
    title: 'Understanding Definitions',
    steps: [
      {
        id: 'q1-step1',
        question: "What is the correct formula for finding the cosine of an obtuse angle $\\theta$ using its reference angle?",
        questionType: 'text',
        options: [
          "$\\cos \\theta = \\cos (180^\\circ - \\theta)$",
          "$\\cos \\theta = -\\cos (180^\\circ - \\theta)$",
          "$\\cos \\theta = \\sin (180^\\circ - \\theta)$",
          "$\\cos \\theta = -\\sin (180^\\circ - \\theta)$"
        ],
        optionType: 'text',
        correct: 1, // Index of the correct answer
        explanation: "For an obtuse angle $\\theta$ in the second quadrant, cosine is negative. The reference angle is $(180^\\circ - \\theta)$, so $\\cos \\theta = -\\cos (180^\\circ - \\theta)$."
      },
      {
        id: 'q1-step2',
        question: "In which quadrant are obtuse angles located, and what is the sign of the sine ratio in that quadrant?",
        questionType: 'text',
        options: [
          "Quadrant I; Positive",
          "Quadrant II; Negative",
          "Quadrant II; Positive",
          "Quadrant III; Negative"
        ],
        optionType: 'text',
        correct: 2,
        explanation: "Obtuse angles ($90^\\circ < \\theta < 180^\\circ$) lie in Quadrant II. In Quadrant II, the sine ratio is positive."
      }
    ]
  },
  {
    id: 'q2-calculations',
    title: 'Calculating Ratios',
    steps: [
      {
        id: 'q2-step1',
        question: "Calculate the exact value of $\\sin 150^\\circ$.",
        questionType: 'text',
        options: [
          "$\\frac{1}{2}$",
          "$-\\frac{1}{2}$",
          "$\\frac{\\sqrt{3}}{2}$",
          "$-\\frac{\\sqrt{3}}{2}$"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "The reference angle is $180^\\circ - 150^\\circ = 30^\\circ$. Sine is positive in Quadrant II. So, $\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$."
      },
      {
        id: 'q2-step2',
        question: "What is the value of $\\tan 120^\\circ$?",
        questionType: 'text',
        options: [
          "$\\sqrt{3}$",
          "$-\\sqrt{3}$",
          "$\\frac{\\sqrt{3}}{3}$",
          "$-\\frac{\\sqrt{3}}{3}$"
        ],
        optionType: 'text',
        correct: 1,
        explanation: "The reference angle is $180^\\circ - 120^\\circ = 60^\\circ$. Tangent is negative in Quadrant II. So, $\\tan 120^\\circ = -\\tan 60^\\circ = -\\sqrt{3}$."
      }
    ]
  },
  {
    id: 'q3-application',
    title: 'Applying Concepts',
    steps: [
      {
        id: 'q3-step1',
        question: "An angle $\\theta$ is obtuse, and $\\cos \\theta = -\\frac{\\sqrt{2}}{2}$. What is the measure of $\\theta$?",
        questionType: 'text',
        options: [
          "$45^\\circ$",
          "$135^\\circ$",
          "$150^\\circ$",
          "$225^\\circ$"
        ],
        optionType: 'text',
        correct: 1,
        explanation: "Since cosine is negative and the angle is obtuse, it's in Quadrant II. The reference angle $\\alpha$ satisfies $\\cos \\alpha = \\frac{\\sqrt{2}}{2}$, so $\\alpha = 45^\\circ$. Therefore, $\\theta = 180^\\circ - 45^\\circ = 135^\\circ$."
      },
      {
        id: 'q3-step2',
        question: "If $\\sin \\theta = \\frac{1}{2}$ and $\\theta$ is obtuse, what is $\\cos \\theta$?",
        questionType: 'text',
        options: [
          "$\\frac{\\sqrt{3}}{2}$",
          "$-\\frac{\\sqrt{3}}{2}$",
          "$\\frac{1}{2}$",
          "$-\\frac{1}{2}$"
        ],
        optionType: 'text',
        correct: 1,
        explanation: "If $\\sin \\theta = \\frac{1}{2}$, the reference angle is $30^\\circ$. Since $\\theta$ is obtuse, $\\theta = 180^\\circ - 30^\\circ = 150^\\circ$. The cosine of $150^\\circ$ is $-\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$."
      }
    ]
  }
];

const ObtuseAngleRatios: React.FC = () => {
  return (
    <MultipleStepInteractiveComponent
      title="Ratios of Obtuse Angles"
      icon="📐" // You can choose a relevant icon, maybe one suggesting 'greater than' 90 degrees?
      theme={{
        from: "from-[#D84040]", // Tailwind gradient class
        to: "to-[#A31D1D]",   // Tailwind gradient class
        button: "bg-amber-500", // Tailwind background class for buttons
        buttonHover: "hover:bg-amber-600" // Tailwind hover class for buttons
      }}
      rules={[
        "Identify the reference angle: $\\text{ref} = 180^\\circ - \\theta$.",
        "Determine the sign of the ratio based on the quadrant (QII: $\\sin$ positive, $\\cos$ & $\\tan$ negative).",
        "Apply the formulas: $\\sin \\theta = \\sin (\\text{ref})$, $\\cos \\theta = -\\cos (\\text{ref})$, $\\tan \\theta = -\\tan (\\text{ref})$.",
        "Use exact values for standard reference angles ($30^\\circ$, $45^\\circ$, $60^\\circ$)."
      ]}
      rulesTitle="Key Rules for Solving:"
      questions={questions}
    />
  );
};

export default ObtuseAngleRatios;