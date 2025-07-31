// src/Components/GradientQuiz.tsx
import React from 'react';
import LinearGraphPlot from './LinearGraphPlot'; // Your linear graph component
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

// Custom component for gradient type questions
const GradientTypeQuestion: React.FC<{ question: QuizQuestion }> = ({ question }) => {
  // Determine which gradient type to show based on question ID
  let gradient = 1;
  let yIntercept = 0;
  
  switch(question.id) {
    case 'q1': // Positive gradient
      gradient = 1;
      yIntercept = 0;
      break;
    case 'q2': // Negative gradient
      gradient = -1;
      yIntercept = 0;
      break;
    case 'q3': // Zero gradient
      gradient = 0;
      yIntercept = 1;
      break;
    case 'q4': // Undefined gradient (vertical line)
      // For vertical line, we'll use a steep gradient approximation
      gradient = 1000; // Very steep positive slope
      yIntercept = 0;
      break;
    default:
      gradient = 1;
      yIntercept = 0;
  }

  // Special handling for undefined gradient (vertical line)
  const isVertical = question.id === 'q4';
  
  return (
    <div className="flex flex-col items-center">
      <h4 className="font-bold text-lg mb-4 text-center">
        What type of gradient does this line have?
      </h4>
      <div className="w-full h-48 mb-4">
        {isVertical ? (
          // Special case for vertical line
          <LinearGraphPlot 
            width={250} 
            height={180} 
            unitSize={25}
            gradient={1000} // Very steep slope to simulate vertical
            yIntercept={0}
            xRange={[-0.5, 0.5]}
            minX={-3}
            maxX={3}
            minY={-3}
            maxY={3}
          />
        ) : (
          <LinearGraphPlot 
            width={250} 
            height={180} 
            unitSize={25}
            gradient={gradient}
            yIntercept={yIntercept}
            xRange={[-2, 2]}
            minX={-3}
            maxX={3}
            minY={-3}
            maxY={3}
          />
        )}
      </div>
    </div>
  );
};

// Custom component for equation questions
const EquationQuestion: React.FC<{ question: QuizQuestion }> = ({ question }) => {
  // Extract data based on question ID
  const isSecondEquation = question.id === 'q6';
  
  const gradient = isSecondEquation ? 1 : 2;
  const yIntercept = isSecondEquation ? 0 : -1;
  const xRange: [number, number] = isSecondEquation ? [-2, 2] : [-1, 2];

  return (
    <div className="flex flex-col items-center">
      <h4 className="font-bold text-lg mb-4 text-center">
        What is the equation of this line?
      </h4>
      <div className="w-full h-48 mb-4">
        <LinearGraphPlot 
          width={250} 
          height={180} 
          unitSize={25}
          gradient={gradient}
          yIntercept={yIntercept}
          xRange={xRange}
          minX={-4}
          maxX={4}
          minY={-4}
          maxY={4}
        />
      </div>
    </div>
  );
};

const LinearGraphs: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      id: 'q1',
      question: "What type of gradient does this line have?",
      options: ["Positive", "Negative", "Zero", "Undefined"],
      optionType:"text",
      correct: 0, // Positive
      explanation: "The line slopes upward from left to right, indicating a positive gradient (m > 0).",
      CustomContentComponent: GradientTypeQuestion
    },
    {
      id: 'q2',
      question: "What type of gradient does this line have?",
      options: ["Positive", "Negative", "Zero", "Undefined"],
       optionType:"text",
      correct: 1, // Negative
      explanation: "The line slopes downward from left to right, indicating a negative gradient (m < 0).",
      CustomContentComponent: GradientTypeQuestion
    },
    {
      id: 'q3',
      question: "What type of gradient does this line have?",
      options: ["Positive", "Negative", "Zero", "Undefined"],
       optionType:"text",
      correct: 2, // Zero
      explanation: "The line is horizontal, indicating a zero gradient (m = 0).",
      CustomContentComponent: GradientTypeQuestion
    },
    {
      id: 'q4',
      question: "What type of gradient does this line have?",
      options: ["Positive", "Negative", "Zero", "Undefined"],
       optionType:"text",
      correct: 3, // Undefined
      explanation: "The line is vertical, indicating an undefined gradient.",
      CustomContentComponent: GradientTypeQuestion
    },
    {
      id: 'q5',
      question: "What is the gradient (m) and y-intercept (c) of this line?",
      options: [
        "m = 2, c = -1",
        "m = -2, c = 1",
        "m = 1, c = -2",
        "m = -1, c = 2"
      ],
      correct: 0,
      explanation: "Using the formula $y = mx + c$, we can see the line rises 2 units for every 1 unit right (gradient = 2) and crosses the y-axis at (0, -1) (y-intercept = -1).",
      CustomContentComponent: EquationQuestion,
      optionType: "math"
    },
    {
      id: 'q6',
      question: "What is the gradient (m) and y-intercept (c) of this line?",
      options: [
        "m = 1, c = 0",
        "m = -1, c = 0",
        "m = 0, c = 1",
        "m = 1, c = 1"
      ],
      correct: 0,
      explanation: "The line follows the equation $y = x$, which means gradient = 1 and y-intercept = 0.",
      CustomContentComponent: EquationQuestion,
      optionType: "math"
    }
  ];

  const rules = [
    "Positive gradient: Line slopes upward (m > 0)",
    "Negative gradient: Line slopes downward (m < 0)",
    "Zero gradient: Horizontal line (m = 0)",
    "Undefined gradient: Vertical line",
    "Gradient formula: $m = \\frac{y_2 - y_1}{x_2 - x_1}$",
    "Y-intercept: Where line crosses y-axis (x = 0)"
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Gradient Quiz"
      icon="📈"
      theme={{
        from: "from-blue-600",
        to: "to-purple-700",
        button: "bg-gradient-to-r from-amber-500 to-orange-500",
        buttonHover: "hover:from-amber-600 hover:to-orange-600"
      }}
      rules={rules}
      questions={questions}
      rulesTitle="Gradient Rules:"
    />
  );
};

export default LinearGraphs;