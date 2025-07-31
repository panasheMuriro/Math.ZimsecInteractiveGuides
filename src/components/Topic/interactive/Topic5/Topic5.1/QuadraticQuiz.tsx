// src/Components/QuadraticQuiz.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';
import QuadraticGraphPlot from './GraphViewers/QuadraticGraphPlot';
// import QuadraticGraphPlot from './QuadraticGraphPlot'; // Adjust path as needed

// Custom component to render a quadratic graph for questions
const QuadraticGraphQuestion: React.FC<{ question: QuizQuestion }> = ({ question }) => {
  // Extract graph parameters from question metadata or options
  // For simplicity, we'll use predefined sets based on question ID or content hints
  // In a real app, you might pass this data more explicitly via question.metadata if allowed
  const getGraphProps = () => {
    // Example logic based on question content or ID
    if (question.question.includes("y = x²")) {
      return { a: 1, b: 0, c: 0, xRange: [-3, 3] as [number, number], minX: -4, maxX: 4, minY: -1, maxY: 9 };
    }
    if (question.question.includes("y = -x²")) {
      return { a: -1, b: 0, c: 0, xRange: [-3, 3] as [number, number], minX: -4, maxX: 4, minY: -9, maxY: 1 };
    }
    if (question.question.includes("y = (x - 2)² - 1")) {
      // Expands to y = x² - 4x + 3
      return { a: 1, b: -4, c: 3, xRange: [-1, 5] as [number, number], minX: -2, maxX: 6, minY: -2, maxY: 6 };
    }
    if (question.question.includes("y = 2x²")) {
      return { a: 2, b: 0, c: 0, xRange: [-2, 2] as [number, number], minX: -3, maxX: 3, minY: -1, maxY: 8 };
    }
    if (question.question.includes("y = -0.5x²")) {
      return { a: -0.5, b: 0, c: 0, xRange: [-4, 4] as [number, number], minX: -5, maxX: 5, minY: -9, maxY: 1 };
    }
    // Default fallback
    return { a: 1, b: 0, c: 0, xRange: [-3, 3] as [number, number], minX: -4, maxX: 4, minY: -1, maxY: 9 };
  };

  const graphProps = getGraphProps();

  return (
    <div className="flex flex-col items-center">
        <h4 className="font-bold text-lg mb-4 text-center">
       {question.question}
      </h4>
      <div className="w-full h-64 mb-4"> {/* Adjust height as needed */}
        <QuadraticGraphPlot
          width={280}
          height={240}
          unitSize={25}
          showPoints={false} // Hide default integer points for cleaner quiz graphs
          {...graphProps}
        />
      </div>
    </div>
  );
};

const QuadraticQuiz: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      id: 'q1_shape_up',
      question: "What is the shape of this parabola?",
      options: ["U-shape (opens upward)", "∩-shape (opens downward)", "Linear", "None of the above"],
    optionType:"text",
      correct: 0, // U-shape
      explanation: "Since the coefficient of x² (a = 1) is positive, the parabola opens upward, forming a U-shape.",
      CustomContentComponent: QuadraticGraphQuestion,
      // Implicitly uses y = x² based on question text
    },
    {
      id: 'q2_shape_down',
      question: "What is the shape of this parabola?",
      options: ["U-shape (opens upward)", "∩-shape (opens downward)", "Linear", "None of the above"],
          optionType:"text",
      correct: 1, // ∩-shape
      explanation: "Since the coefficient of x² (a = -1) is negative, the parabola opens downward, forming a ∩-shape.",
      CustomContentComponent: QuadraticGraphQuestion,
      // Implicitly uses y = -x² based on question text
    },
    {
      id: 'q3_narrow',
      question: "Compared to y = x², how would you describe this parabola?",
      options: ["Wider", "Narrower", "The same width", "It's a straight line"],
      optionType:"text",
      correct: 1, // Narrower
      explanation: "The coefficient of x² (a = 2) is greater than 1. This makes the parabola narrower than the standard y = x².",
      CustomContentComponent: QuadraticGraphQuestion,
      // Implicitly uses y = 2x² based on question text
    },
    {
      id: 'q4_wide',
      question: "Compared to y = x², how would you describe this parabola?",
      options: ["Wider", "Narrower", "The same width", "It's a straight line"],
      optionType:"text",
      correct: 0, // Wider
      explanation: "The absolute value of the coefficient of x² (|a| = 0.5) is less than 1. This makes the parabola wider than the standard y = x².",
      CustomContentComponent: QuadraticGraphQuestion,
      // Implicitly uses y = -0.5x² based on question text
    },
    {
      id: 'q5_find_a',
      question: "What is the value of the coefficient 'a' in the equation y = ax² + bx + c for this graph?",
      options: ["a = 1", "a = -1", "a = 2", "a = 0.5"],
      correct: 0, // a = 1
      explanation: "The parabola opens upward and has a standard width, indicating a = 1. The equation is y = x².",
      CustomContentComponent: QuadraticGraphQuestion,
      // Implicitly uses y = x²
    },
    {
      id: 'q6_find_vertex_signs',
      question: "For the equation y = x² - 4x + 3, what are the signs of the coefficients 'a' and 'b'?",
      options: ["a is positive, b is positive", "a is positive, b is negative", "a is negative, b is positive", "a is negative, b is negative"],
      optionType:"text",
      correct: 1, // a positive, b negative
      explanation: "In the equation y = x² - 4x + 3, a = 1 (positive) and b = -4 (negative).",
      CustomContentComponent: QuadraticGraphQuestion,
      // Implicitly uses y = x² - 4x + 3
    },
  ];

  const rules = [
    "If 'a' > 0, the parabola opens upward (U-shape)",
    "If 'a' < 0, the parabola opens downward (∩-shape)",
    "The larger the absolute value of 'a', the narrower the parabola",
    "The smaller the absolute value of 'a', the wider the parabola",
    "The coefficient 'c' is the y-intercept",
    "The vertex form is y = a(x - h)² + k, where (h, k) is the vertex"
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Quadratic Functions Quiz"
      icon="📊" // Changed icon to something more related to graphs/quadratics
      theme={{
        from: "from-purple-600",
        to: "to-indigo-700",
        button: "bg-gradient-to-r from-amber-500 to-orange-500",
        buttonHover: "hover:from-amber-600 hover:to-orange-600"
      }}
      rules={rules}
      questions={questions}
      rulesTitle="Quadratic Rules:"
    />
  );
};

export default QuadraticQuiz;