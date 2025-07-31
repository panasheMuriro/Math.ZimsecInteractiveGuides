// src/components/interactives/VariationComparisonInteractive.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../Templates/MultipleChoiceInteractiveComponent';

const VariationComparison: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      question: "If the ratio $\\frac{y}{x}$ is constant for all data pairs, what type of variation is this?",
      options: [
        "Direct variation",
        "Inverse variation",
        "Neither direct nor inverse",
        "Partial variation"
      ],
      correct: 0,
      explanation: "In direct variation, the ratio $\\frac{y}{x}$ equals the constant of variation $k$. If this ratio is constant for all data pairs, it indicates direct variation.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "If the product $xy$ is constant for all data pairs, what type of variation is this?",
      options: [
        "Inverse variation",
        "Direct variation",
        "Neither direct nor inverse",
        "Joint variation"
      ],
      correct: 0,
      explanation: "In inverse variation, the product $xy$ equals the constant of variation $k$. If this product is constant for all data pairs, it indicates inverse variation.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "Which graph represents direct variation?",
      options: [
        "Straight line through the origin",
        "Hyperbola",
        "Parabola",
        "Horizontal line"
      ],
      correct: 0,
      explanation: "The graph of direct variation $y = kx$ is always a straight line that passes through the origin (0,0).",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "Which scenario shows inverse variation?",
      options: [
        "Speed and time to travel a fixed distance",
        "Distance and time at constant speed",
        "Cost and quantity at fixed price",
        "Perimeter and side length of a square"
      ],
      correct: 0,
      explanation: "For a fixed distance, speed and time are related by $d = s \\times t$. Since distance is constant, $s = \\frac{d}{t}$, which is inverse variation. As speed increases, time decreases.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "In a direct variation, if $x$ doubles, what happens to $y$?",
      options: [
        "$y$ also doubles",
        "$y$ is halved",
        "$y$ remains the same",
        "$y$ becomes four times larger"
      ],
      correct: 0,
      explanation: "In direct variation $y = kx$, if $x$ doubles, then $y = k(2x) = 2(kx) = 2y$. Therefore, $y$ also doubles when $x$ doubles.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    }
  ];

  const rules = [
    "For direct variation: $\\frac{y}{x} = k$ (constant ratio)",
    "For inverse variation: $xy = k$ (constant product)",
    "Direct variation graph: straight line through origin",
    "Inverse variation graph: hyperbola (curved)",
    "Direct: both variables increase/decrease together",
    "Inverse: one variable increases as the other decreases"
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Variation Types"
      icon="⚖️"
      theme={{
        from: "from-teal-500",
        to: "to-cyan-600",
        button: "bg-teal-600 hover:bg-teal-700",
        buttonHover: "hover:shadow-teal-500/30"
      }}
      rules={rules}
      questions={questions}
      rulesTitle="How to Identify Variation:"
    />
  );
};

export default VariationComparison;