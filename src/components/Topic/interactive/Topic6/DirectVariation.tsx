// src/components/interactives/DirectVariationInteractive.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../Templates/MultipleChoiceInteractiveComponent';

const DirectVariation: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      question: "Which equation represents direct variation?",
      options: [
        "$y = kx$",
        "$y = kx + b$",
        "$y = \\frac{k}{x}$",
        "$y = x^2$"
      ],
      correct: 0,
      explanation: "Direct variation is represented by $y = kx$ where $k$ is the constant of variation. This equation shows that $y$ is directly proportional to $x$.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "If $y$ varies directly with $x$ and $y = 12$ when $x = 3$, what is the constant of variation $k$?",
      options: [
        "$k = 4$",
        "$k = 9$",
        "$k = 36$",
        "$k = 15$"
      ],
      correct: 0,
      explanation: "Using the direct variation formula $y = kx$, we substitute the given values: $12 = k \\cdot 3$. Solving for $k$: $k = \\frac{12}{3} = 4$.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "What is true about the graph of a direct variation?",
      options: [
        "It's a straight line passing through the origin",
        "It's a parabola",
        "It's a hyperbola",
        "It's a horizontal line"
      ],
      correct: 0,
      explanation: "The graph of direct variation $y = kx$ is always a straight line that passes through the origin (0,0) since when $x = 0$, $y = 0$.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "Which scenario represents direct variation?",
      options: [
        "The distance traveled and time at constant speed",
        "The area of a square and its side length",
        "The cost per item and number of items bought",
        "The time to complete a job and number of workers"
      ],
      correct: 0,
      explanation: "Distance and time at constant speed follow the relationship $d = vt$ where $v$ is constant. This is direct variation since distance increases proportionally with time.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "In direct variation, what happens to $y$ when $x$ is doubled?",
      options: [
        "$y$ is also doubled",
        "$y$ is halved",
        "$y$ remains the same",
        "$y$ is quadrupled"
      ],
      correct: 0,
      explanation: "In direct variation $y = kx$, if $x$ is doubled, then $y = k(2x) = 2(kx) = 2y$. Therefore, $y$ is also doubled when $x$ is doubled.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    }
  ];

  const rules = [
    "Direct variation has the form $y = kx$ where $k$ is constant",
    "The graph is a straight line through the origin (0,0)",
    "When $x = 0$, $y = 0$",
    "The ratio $\\frac{y}{x}$ is always constant",
    "$y$ increases proportionally as $x$ increases"
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Direct Variation"
      icon="📈"
      theme={{
        from: "from-blue-500",
        to: "to-indigo-600",
        button: "bg-blue-600 hover:bg-blue-700",
        buttonHover: "hover:shadow-blue-500/30"
      }}
      rules={rules}
      questions={questions}
      rulesTitle="Direct Variation Rules:"
    />
  );
};

export default DirectVariation;