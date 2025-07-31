// src/components/interactives/VariationGraphsInteractive.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../Templates/MultipleChoiceInteractiveComponent';

const VariationGraphs: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      question: "What is the key feature of a direct variation graph?",
      options: [
        "Straight line passing through the origin",
        "Curved hyperbola",
        "Horizontal line",
        "Parabola opening upward"
      ],
      correct: 0,
      explanation: "The graph of direct variation $y = kx$ is always a straight line that passes through the origin (0,0), since when $x = 0$, $y = 0$.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "What does the graph of inverse variation look like?",
      options: [
        "Hyperbola with two branches",
        "Straight line through origin",
        "Circle centered at origin",
        "V-shaped graph"
      ],
      correct: 0,
      explanation: "The graph of inverse variation $y = \\frac{k}{x}$ is a hyperbola with two branches that approach but never touch the x-axis and y-axis (asymptotes).",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "Where are the branches of $y = \\frac{k}{x}$ when $k > 0$?",
      options: [
        "Quadrants I and III",
        "Quadrants II and IV",
        "Only in Quadrant I",
        "Only in Quadrant II"
      ],
      correct: 0,
      explanation: "When $k > 0$ in $y = \\frac{k}{x}$, both $x$ and $y$ have the same sign. This occurs in Quadrant I (both positive) and Quadrant III (both negative).",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "What happens to the inverse variation graph as $x$ approaches infinity?",
      options: [
        "$y$ approaches zero",
        "$y$ approaches infinity",
        "$y$ remains constant",
        "$y$ becomes negative"
      ],
      correct: 0,
      explanation: "As $x$ approaches infinity in $y = \\frac{k}{x}$, the fraction approaches zero. Therefore, $y$ approaches zero but never actually reaches it (asymptotic behavior).",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "What is special about the axes in inverse variation graphs?",
      options: [
        "They are asymptotes that the graph approaches but never touches",
        "The graph crosses both axes",
        "The graph is symmetric about both axes",
        "The axes are not relevant to the graph"
      ],
      correct: 0,
      explanation: "In inverse variation graphs, the x-axis and y-axis serve as asymptotes. The graph approaches these lines infinitely closely but never actually touches or crosses them.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    }
  ];

  const rules = [
    "Direct variation: straight line through origin $(0,0)$",
    "Inverse variation: hyperbola with two branches",
    "Inverse graphs approach but never touch x-axis or y-axis",
    "For $y = kx$: if $k > 0$, line slopes up; if $k < 0$, line slopes down",
    "For $y = \\frac{k}{x}$: if $k > 0$, branches in QI & QIII; if $k < 0$, branches in QII & QIV",
    "Inverse variation graphs are symmetric about $y = x$ when $k > 0$"
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Variation Graphs"
      icon="📊"
      theme={{
        from: "from-emerald-500",
        to: "to-teal-600",
        button: "bg-emerald-600 hover:bg-emerald-700",
        buttonHover: "hover:shadow-emerald-500/30"
      }}
      rules={rules}
      questions={questions}
      rulesTitle="Graphing Rules:"
    />
  );
};

export default VariationGraphs;