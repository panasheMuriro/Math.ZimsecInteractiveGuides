// src/components/interactives/PartialVariationInteractive.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../Templates/MultipleChoiceInteractiveComponent';

const PartialVariation: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      question: "Which equation represents linear partial variation?",
      options: [
        "$y = a + bx$",
        "$y = kx$",
        "$y = \\frac{k}{x}$",
        "$y = ax^2 + bx$"
      ],
      correct: 0,
      explanation: "Linear partial variation has the form $y = a + bx$ where $a$ is the constant (fixed) part and $bx$ is the variable part that depends on $x$.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "In the equation $y = 10 + 5x$, what does the '10' represent?",
      options: [
        "Fixed or constant part",
        "Variable part",
        "Slope of the line",
        "Y-intercept of the inverse part"
      ],
      correct: 0,
      explanation: "In partial variation $y = a + bx$, the constant $a$ represents the fixed part that doesn't change with $x$. Here, 10 is the fixed amount regardless of the value of $x$.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "Which real-world scenario represents partial variation?",
      options: [
        "Phone bill: $20 monthly fee + $0.10 per minute",
        "Distance and time at constant speed",
        "Pressure and volume relationship",
        "Area of a square and its side length"
      ],
      correct: 0,
      explanation: "A phone bill with a fixed monthly fee plus variable charges per minute is partial variation: Total Cost = Fixed Fee + (Rate × Minutes Used).",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "What is the graph of $y = a + bx$ (partial variation)?",
      options: [
        "Straight line with y-intercept at $a$",
        "Hyperbola",
        "Parabola",
        "Horizontal line"
      ],
      correct: 0,
      explanation: "The graph of $y = a + bx$ is a straight line with slope $b$ and y-intercept at $(0, a)$. The constant term $a$ shifts the line up or down from the origin.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "How many data points are needed to find the constants in $y = a + bx$?",
      options: [
        "Two points",
        "One point",
        "Three points",
        "Four points"
      ],
      correct: 0,
      explanation: "To find the two unknown constants $a$ and $b$ in $y = a + bx$, we need two data points to form a system of two equations with two unknowns.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    }
  ];

  const rules = [
    "Partial variation: $y = a + bx$ (linear) or $y = a + \\frac{b}{x}$ (mixed)",
    "Contains both fixed (constant) and variable parts",
    "Graph of $y = a + bx$ is a straight line with y-intercept at $(0, a)$",
    "Real examples: bills with fixed fees, taxi fares, total costs",
    "Need two data points to find constants $a$ and $b$",
    "Different from direct/inverse variation which pass through origin"
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Partial Variation"
      icon="📋"
      theme={{
        from: "from-amber-500",
        to: "to-orange-600",
        button: "bg-amber-600 hover:bg-amber-700",
        buttonHover: "hover:shadow-amber-500/30"
      }}
      rules={rules}
      questions={questions}
      rulesTitle="Partial Variation Rules:"
    />
  );
};

export default PartialVariation;