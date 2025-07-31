// src/components/interactives/InverseVariationInteractive.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../Templates/MultipleChoiceInteractiveComponent';

const InverseVariation: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      question: "Which equation represents inverse variation?",
      options: [
        "$y = \\frac{k}{x}$",
        "$y = kx$",
        "$y = kx + b$",
        "$y = x^2$"
      ],
      correct: 0,
      explanation: "Inverse variation is represented by $y = \\frac{k}{x}$ where $k$ is the constant of variation. This equation shows that $y$ is inversely proportional to $x$.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "If $y$ varies inversely with $x$ and $y = 6$ when $x = 2$, what is the constant of variation $k$?",
      options: [
        "$k = 12$",
        "$k = 3$",
        "$k = 8$",
        "$k = 4$"
      ],
      correct: 0,
      explanation: "Using the inverse variation formula $y = \\frac{k}{x}$, we substitute the given values: $6 = \\frac{k}{2}$. Solving for $k$: $k = 6 \\times 2 = 12$.",
      questionType: "text",
       optionType: "text",
      explanationType: "text"
    },
    {
      question: "What is true about the graph of an inverse variation?",
      options: [
        "It's a hyperbola",
        "It's a straight line",
        "It's a parabola",
        "It's a circle"
      ],
      correct: 0,
      explanation: "The graph of inverse variation $y = \\frac{k}{x}$ is a hyperbola with two branches. It never touches the x-axis or y-axis, which are asymptotes.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "Which scenario represents inverse variation?",
      options: [
        "The time to complete a job and number of workers",
        "The distance traveled and time at constant speed",
        "The area of a square and its side length",
        "The cost and quantity at fixed price"
      ],
      correct: 0,
      explanation: "Time to complete a job and number of workers follow inverse variation. As more workers are added, the time to complete the job decreases proportionally (assuming constant work rate per worker).",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "In inverse variation, what happens to $y$ when $x$ is tripled?",
      options: [
        "$y$ becomes one-third of its original value",
        "$y$ is also tripled",
        "$y$ remains the same",
        "$y$ becomes nine times larger"
      ],
      correct: 0,
      explanation: "In inverse variation $y = \\frac{k}{x}$, if $x$ is tripled, then $y = \\frac{k}{3x} = \\frac{1}{3} \\cdot \\frac{k}{x} = \\frac{1}{3}y$. Therefore, $y$ becomes one-third of its original value when $x$ is tripled.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    }
  ];

  const rules = [
    "Inverse variation has the form $y = \\frac{k}{x}$ where $k$ is constant",
    "The graph is a hyperbola with two branches",
    "As $x$ increases, $y$ decreases proportionally",
    "The product $xy$ is always constant ($xy = k$)",
    "$y$ approaches zero as $x$ approaches infinity"
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Inverse Variation"
      icon="📉"
      theme={{
        from: "from-purple-500",
        to: "to-indigo-600",
        button: "bg-purple-600 hover:bg-purple-700",
        buttonHover: "hover:shadow-purple-500/30"
      }}
      rules={rules}
      questions={questions}
      rulesTitle="Inverse Variation Rules:"
    />
  );
};

export default InverseVariation;