// components/interactives/acuteAngleRatios/AcuteAngleRatiosQuiz.tsx

import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from  '../../Templates/MultipleStepInteractiveComponent';

// Define the questions structure for the interactive component
const questions: MultiStepQuestion[] = [
  {
    id: 'q1-sohcahtoa',
    title: 'Understanding SOH-CAH-TOA',
    steps: [
      {
        id: 'q1-step1',
        question: "Which ratio correctly defines the **sine** of an angle $\\theta$ in a right-angled triangle?",
        questionType: 'text',
        options: [
          "$\\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$",
          "$\\frac{\\text{Opposite}}{\\text{Hypotenuse}}$",
          "$\\frac{\\text{Opposite}}{\\text{Adjacent}}$",
          "$\\frac{\\text{Hypotenuse}}{\\text{Opposite}}$"
        ],
        optionType: 'text',
        correct: 1, // Index of the correct answer
        explanation: "SOH stands for Sine = Opposite / Hypotenuse."
      },
      {
        id: 'q1-step2',
        question: "If you need to find the length of the **Adjacent** side and you know the **Hypotenuse** and the angle $\\theta$, which ratio should you use?",
        questionType: 'text',
        options: [
          "Sine ($\\sin$)",
          "Tangent ($\\tan$)",
          "Cosine ($\\cos$)",
          "Pythagorean Theorem"
        ],
        optionType: 'text',
        correct: 2,
        explanation: "CAH stands for Cosine = Adjacent / Hypotenuse. You can rearrange this to solve for the Adjacent side: Adjacent = Hypotenuse × Cosine($\\theta$)."
      }
    ]
  },
  {
    id: 'q2-exact-values',
    title: 'Exact Trigonometric Values',
    steps: [
      {
        id: 'q2-step1',
        question: "What is the exact value of $\\sin 60^\\circ$?",
        questionType: 'text',
        options: [
          "$\\frac{1}{2}$",
          "$\\frac{\\sqrt{2}}{2}$",
          "$\\frac{\\sqrt{3}}{2}$",
          "$1$"
        ],
        optionType: 'text',
        correct: 2,
        explanation: "From the standard angle table, $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$."
      },
      {
        id: 'q2-step2',
        question: "Which angle $\\theta$ has the exact tangent value $\\tan \\theta = \\sqrt{3}$?",
        questionType: 'text',
        options: [
          "$30^\\circ$",
          "$45^\\circ$",
          "$60^\\circ$",
          "$90^\\circ$"
        ],
        optionType: 'text',
        correct: 2,
        explanation: "From the standard angle table, $\\tan 60^\\circ = \\sqrt{3}$."
      }
    ]
  },
  {
    id: 'q3-application',
    title: 'Applying Trigonometry',
    steps: [
      {
        id: 'q3-step1',
        question: "A ladder leans against a wall, making a $45^\\circ$ angle with the ground. If the ladder is 10 meters long (hypotenuse), how high up the wall does it reach (opposite side)?",
        questionType: 'text',
        options: [
          "$5$ m",
          "$5\\sqrt{2}$ m",
          "$10\\sqrt{2}$ m",
          "$10$ m"
        ],
        optionType: 'text',
        correct: 1,
        explanation: "Since the angle is $45^\\circ$, we can use $\\sin 45^\\circ = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$. We know $\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$ and Hypotenuse = 10m. So, $\\frac{\\sqrt{2}}{2} = \\frac{\\text{Height}}{10}$. Solving for Height: Height = $10 \\times \\frac{\\sqrt{2}}{2} = 5\\sqrt{2}$ meters."
      },
      {
        id: 'q3-step2',
        question: "In a right-angled triangle, the side adjacent to a $30^\\circ$ angle is $5\\sqrt{3}$ cm. Find the length of the hypotenuse.",
        questionType: 'text',
        options: [
          "$5$ cm",
          "$10$ cm",
          "$5\\sqrt{3}$ cm",
          "$\\frac{15}{2}$ cm"
        ],
        optionType: 'text',
        correct: 1,
        explanation: "We use the cosine ratio: $\\cos 30^\\circ = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$. We know $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$ and Adjacent = $5\\sqrt{3}$ cm. So, $\\frac{\\sqrt{3}}{2} = \\frac{5\\sqrt{3}}{\\text{Hypotenuse}}$. Solving for Hypotenuse: Hypotenuse = $\\frac{5\\sqrt{3}}{\\frac{\\sqrt{3}}{2}} = 5\\sqrt{3} \\times \\frac{2}{\\sqrt{3}} = 10$ cm."
      }
    ]
  }
];

const AcuteAngleRatios: React.FC = () => {
  return (
    <MultipleStepInteractiveComponent
      title="Ratios of Acute Angles"
      icon="📐" // You can choose a relevant icon
      theme={{
        from: "from-[#077A7D]", // Tailwind gradient class
        to: "to-[#03A791]",   // Tailwind gradient class
        button: "bg-amber-500", // Tailwind background class for buttons
        buttonHover: "hover:bg-amber-600" // Tailwind hover class for buttons
      }}
      rules={[
        "Identify the **Opposite**, **Adjacent**, and **Hypotenuse** sides relative to the angle.",
        "Use **SOH-CAH-TOA** to choose the correct trigonometric ratio.",
        "Memorize or recall exact values for $30^\\circ$, $45^\\circ$, and $60^\\circ$.",
        "Apply ratios to find unknown sides or angles in right-angled triangles."
      ]}
      rulesTitle="Key Rules for Solving:"
      questions={questions}

    />
  );
};

export default AcuteAngleRatios;