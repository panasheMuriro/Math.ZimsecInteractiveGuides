import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

// Define the questions structure for the interactive component
const questions: MultiStepQuestion[] = [
  {
    id: 'q1-formula',
    title: 'Understanding the Formula',
    steps: [
      {
        id: 'q1-step1',
        question: "Which of the following correctly represents the Sine Rule?",
        questionType: 'text',
        options: [
          "$\\frac{a}{\\cos A} = \\frac{b}{\\cos B} = \\frac{c}{\\cos C}$",
          "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$",
          "$a^2 = b^2 + c^2 - 2bc\\cos A$",
          "$\\sin^2 A + \\cos^2 A = 1$"
        ],
        optionType: 'text',
        correct: 1, // Index of the correct answer
        explanation: "The Sine Rule relates the sides of a triangle to the sines of their opposite angles. It is $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$.",
      },
      {
        id: 'q1-step2',
        question: "When is the Sine Rule most useful?",
        questionType: 'text',
        options: [
          "Finding the third side when two sides and the included angle are known.",
          "Finding an angle when all three sides are known.",
          "Finding a side when two angles and one side are known.",
          "Finding the area of a triangle."
        ],
        optionType: 'text',
        correct: 2,
        explanation: "The Sine Rule is particularly useful when you know two angles and any side (AAS or ASA) or two sides and a non-included angle (SSA, which can lead to the ambiguous case)."
      }
    ]
  },
  {
    id: 'q2-calculations',
    title: 'Applying the Sine Rule',
    steps: [
      {
        id: 'q2-step1',
        question: "In triangle ABC, angle $A = 30^\\circ$, angle $B = 45^\\circ$, and side $a = 6$. Find the length of side $b$, correct to 2 decimal places.",
        questionType: 'text',
        options: [
          "$6.00$",
          "$8.49$",
          "$4.24$",
          "$12.00$"
        ],
        optionType: 'text',
        correct: 1,
        explanation: "Using the Sine Rule: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$. Plug in the values: $\\frac{6}{\\sin 30^\\circ} = \\frac{b}{\\sin 45^\\circ}$. $\\frac{6}{0.5} = \\frac{b}{\\frac{\\sqrt{2}}{2}}$. $12 = \\frac{b}{\\frac{\\sqrt{2}}{2}}$. $b = 12 \\times \\frac{\\sqrt{2}}{2} = 6\\sqrt{2} \\approx 8.49$.",
      },
      {
        id: 'q2-step2',
        question: "In triangle ABC, side $a = 10$, side $b = 7$, and angle $A = 50^\\circ$. Find angle $B$, correct to the nearest degree. (Note: This is an SSA case and may have two solutions, but find the acute one first.)",
        questionType: 'text',
        options: [
          "$33^\\circ$",
          "$57^\\circ$",
          "$123^\\circ$",
          "$90^\\circ$"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "Using the Sine Rule: $\\frac{\\sin A}{a} = \\frac{\\sin B}{b}$. Plug in the values: $\\frac{\\sin 50^\\circ}{10} = \\frac{\\sin B}{7}$. $\\frac{0.7660}{10} \\approx \\frac{\\sin B}{7}$. $0.0766 \\approx \\frac{\\sin B}{7}$. $\\sin B \\approx 0.0766 \\times 7 \\approx 0.5362$. $B \\approx \\arcsin(0.5362) \\approx 32.4^\\circ$. To the nearest degree, $B \\approx 33^\\circ$. (The other possible solution would be $180^\\circ - 33^\\circ = 147^\\circ$, but we are asked for the acute one first.)"
      }
    ]
  },
  {
    id: 'q3-ambiguous-case',
    title: 'The Ambiguous Case',
    steps: [
      {
        id: 'q3-step1',
        question: "The ambiguous case (SSA) can arise when using the Sine Rule. Under which condition does it occur?",
        questionType: 'text',
        options: [
          "When the given angle is obtuse.",
          "When the given angle is acute and the opposite side is shorter than the adjacent side.",
          "When all three sides are known.",
          "When two angles are known."
        ],
        optionType: 'text',
        correct: 1,
        explanation: "The ambiguous case occurs in the SSA scenario when the given angle $A$ is acute, the side $a$ (opposite to $A$) is shorter than the side $b$ (adjacent to $A$), and $a$ is greater than $b \\sin A$. This can lead to two different possible triangles."
      },
      {
        id: 'q3-step2',
        question: "In triangle ABC, side $a = 5$, side $b = 8$, and angle $A = 30^\\circ$. How many distinct triangles can be formed with these measurements?",
        questionType: 'text',
        options: [
          "0",
          "1",
          "2",
          "Infinitely many"
        ],
        optionType: 'text',
        correct: 2,
        explanation: "Check the conditions for the ambiguous case (A is acute). 1. Is $a < b$? Yes, $5 < 8$. 2. Calculate $b \\sin A = 8 \\times \\sin 30^\\circ = 8 \\times 0.5 = 4$. Is $a > b \\sin A$? Yes, $5 > 4$. Since both conditions are met ($a < b$ and $a > b \\sin A$), there are two distinct triangles possible."
      }
    ]
  }
];

const SineRuleQuiz: React.FC = () => {
  return (
    <MultipleStepInteractiveComponent
      title="Sine Rule"
      icon="📐" // You can choose a relevant icon
      theme={{
        from: "from-[#E07A5F]", // Tailwind gradient class
        to: "to-[#EB5B00]",   // Tailwind gradient class
        button: "bg-[#690B22]", // Tailwind background class for buttons
        buttonHover: "bg-[#690B22]" // Tailwind hover class for buttons
      }}
      rules={[
        "Identify the known elements (sides and angles) in the triangle.",
        "Use $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$ when finding a side.",
        "Use $\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$ when finding an angle.",
        "Be aware of the ambiguous case (SSA): check if two triangles are possible.",
        "Use a calculator for sine values and inverse sine ($\\sin^{-1}$)."
      ]}
      rulesTitle="Key Rules for Solving:"
      questions={questions}
    />
  );
};

export default SineRuleQuiz;