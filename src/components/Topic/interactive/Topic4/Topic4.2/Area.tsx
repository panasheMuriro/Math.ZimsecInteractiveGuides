import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

interface ShapeAndDimensionsRendererProps {
  question: QuizQuestion;
}

const ShapeAndDimensionsRenderer: React.FC<ShapeAndDimensionsRendererProps> = ({ question }) => {
  const renderShapeAndDimensions = () => {
    switch (question.id) {
      case 'rectangle':
        return (
          <div className="flex flex-col items-center my-4">
            <div className="relative border-4 border-gray-500 w-64 h-40 flex items-center justify-center bg-white">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1 text-sm font-bold text-black bg-white/0 px-1">l</div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1 text-sm font-bold text-black bg-white/0 px-1">l</div>
              <div className="absolute left-0 top-1/2 transform translate-x-1 -translate-y-1/2 text-sm font-bold text-black bg-white/0 px-1">w</div>
              <div className="absolute right-0 top-1/2 transform -translate-x-1 -translate-y-1/2 text-sm font-bold text-black bg-white/0 px-1">w</div>
            </div>
            <div className="mt-4 text-black">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside">
                <li>l = 8 cm</li>
                <li>w = 5 cm</li>
              </ul>
            </div>
          </div>
        );
      case 'square':
        return (
          <div className="flex flex-col items-center my-4">
            <div className="relative border-4 border-gray-500 w-40 h-40 flex items-center justify-center bg-white">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1 text-sm font-bold text-black bg-white/0 px-1">s</div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1 text-sm font-bold text-black bg-white/0 px-1">s</div>
              <div className="absolute left-0 top-1/2 transform translate-x-1 -translate-y-1/2 text-sm font-bold text-black bg-white/0 px-1">s</div>
              <div className="absolute right-0 top-1/2 transform -translate-x-1 -translate-y-1/2 text-sm font-bold text-black bg-white/0 px-1">s</div>
            </div>
            <div className="mt-4 text-black">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside">
                <li>s = 6 cm</li>
              </ul>
            </div>
          </div>
        );
      case 'triangle':
        return (
          <div className="flex flex-col items-center my-4">
            <div className="relative w-64 h-40 flex items-center justify-center">
              <svg viewBox="0 0 200 100" className="w-64 h-40">
                <polygon points="20,90 180,90 100,20" fill="white" />
                <line x1="20" y1="90" x2="180" y2="90" stroke="gray" strokeWidth="2" />
                <line x1="180" y1="90" x2="100" y2="20" stroke="gray" strokeWidth="2" />
                <line x1="100" y1="20" x2="20" y2="90" stroke="gray" strokeWidth="2" />
                <line x1="100" y1="20" x2="100" y2="90" stroke="red" strokeWidth="2" strokeDasharray="4" />
                <text x="105" y="60" textAnchor="start" dominantBaseline="middle" className="fill-red-500 font-bold text-xs">h</text>
                <text x="100" y="95" textAnchor="middle" dominantBaseline="hanging" className="fill-black font-bold text-xs">b</text>
              </svg>
            </div>
            <div className="mt-4 text-black">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside">
                <li>b = 10 cm</li>
                <li>h = 6 cm</li>
              </ul>
            </div>
          </div>
        );
      case 'circle':
        return (
          <div className="flex flex-col items-center my-4">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-48 h-48">
                <circle cx="60" cy="60" r="50" stroke="gray" strokeWidth="2" fill="white" />
                <line x1="60" y1="60" x2="110" y2="60" stroke="gray" strokeWidth="1" />
                <text x="85" y="58" textAnchor="middle" dominantBaseline="baseline" className="fill-black font-bold text-xs">r</text>
              </svg>
            </div>
            <div className="mt-4 text-black">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside">
                <li>r = 7 cm</li>
              </ul>
            </div>
          </div>
        );
      case 'parallelogram':
        return (
          <div className="flex flex-col items-center my-4">
            <div className="relative w-64 h-40 flex items-center justify-center">
              <svg viewBox="0 0 200 100" className="w-64 h-40">
                <polygon points="30,20 170,20 150,80 10,80" fill="white" stroke="gray" strokeWidth="2"/>
                <text x="100" y="85" textAnchor="middle" dominantBaseline="hanging" className="fill-black font-bold text-xs">b</text>
                <line x1="30" y1="20" x2="30" y2="80" stroke="red" strokeWidth="1" strokeDasharray="3" />
                <text x="35" y="55" textAnchor="start" dominantBaseline="middle" className="fill-red-500 font-bold text-xs">h</text>
              </svg>
            </div>
            <div className="mt-4 text-black">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside">
                <li>b = 9 cm</li>
                <li>h = 4 cm</li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderShapeAndDimensions()}</div>;
};

const areaQuestions: QuizQuestion[] = [
  {
    id: 'rectangle',
    question: "Find the area of the rectangle shown below.",
    questionType: 'text',
    options: ["13 cm²", "40 cm²", "26 cm²", "35 cm²"],
    optionType: 'text',
    correct: 1,
    explanation: `The area of a rectangle is calculated using the formula:\n $ A = l \\times w $\n Substituting the given values:\n $ A = 8 \\times 5 $\n $ A = 40 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: ShapeAndDimensionsRenderer,
  },
  {
    id: 'square',
    question: "What is the area of this square?",
    questionType: 'text',
    options: ["12 cm²", "36 cm²", "24 cm²", "6 cm²"],
    optionType: 'text',
    correct: 1,
    explanation: `The area of a square is calculated using the formula:\n $ A = s^2 $\n Substituting the given value:\n $ A = 6^2 $\n $ A = 36 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: ShapeAndDimensionsRenderer,
  },
  {
    id: 'triangle',
    question: "Calculate the area of the triangle.",
    questionType: 'text',
    options: ["60 cm²", "30 cm²", "16 cm²", "15 cm²"],
    optionType: 'text',
    correct: 1,
    explanation: `The area of a triangle is calculated using the formula:\n $ A = \\frac{1}{2} b h $\n Substituting the given values:\n $ A = \\frac{1}{2} \\times 10 \\times 6 $\n $ A = \\frac{1}{2} \\times 60 $\n $ A = 30 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: ShapeAndDimensionsRenderer,
  },
  {
    id: 'circle',
    question: "Find the approximate area of the circle (use $ \\pi \\approx \\frac{22}{7} $).",
    questionType: 'text',
    options: ["22 cm²", "44 cm²", "154 cm²", "28 cm²"],
    optionType: 'text',
    correct: 2,
    explanation: `The area of a circle is calculated using the formula:\n $ A = \\pi r^2 $\n Substituting the given value and using $ \\pi \\approx \\frac{22}{7} $:\n $ A = \\frac{22}{7} \\times 7^2 $\n $ A = \\frac{22}{7} \\times 49 $\n $ A = 22 \\times 7 $\n $ A = 154 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: ShapeAndDimensionsRenderer,
  },
  {
    id: 'parallelogram',
    question: "What is the area of this parallelogram?",
    questionType: 'text',
    options: ["36 cm²", "26 cm²", "13 cm²", "20 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `The area of a parallelogram is calculated using the formula:\n $ A = b \\times h $\n Substituting the given values:\n $ A = 9 \\times 4 $\n $ A = 36 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: ShapeAndDimensionsRenderer,
  },
  {
    id: 'formula_rect',
    question: "Which formula correctly calculates the area of a rectangle?",
    questionType: 'text',
    options: ["$ A = l + w $", "$ A = 2l + 2w $", "$ A = l \\times w $", "$ A = l^2 + w^2 $"],
    optionType: 'text',
    correct: 2,
    explanation: "The area of a rectangle is found by multiplying its length by its width: $ A = l \\times w $.",
    explanationType: 'text',
  },
  {
    id: 'formula_tri',
    question: "How do you calculate the area of a triangle?",
    questionType: 'text',
    options: [
      "Base times height",
      "Half base times height",
      "Base plus height",
      "Half base plus height",
    ],
    optionType: 'text',
    correct: 1,
    explanation: "The area of a triangle is given by the formula: $ A = \\frac{1}{2} \\times \\text{base} \\times \\text{height} $.",
    explanationType: 'text',
  },
];

const Area: React.FC = () => {
  return (
    <MultipleChoiceInteractiveComponent
      title="Area of Plane Shapes"
      icon="📐"
      theme={{
        from: "from-green-600",
        to: "to-teal-700",
        button: "bg-teal-500",
        buttonHover: "hover:bg-teal-400",
      }}
      rulesTitle="Area Formulas:"
      rules={[
        "Area is the amount of surface enclosed by a shape.",
        "Rectangle: $ A = l \\times w $",
        "Square: $ A = s^2 $",
        "Triangle: $ A = \\frac{1}{2} b h $",
        "Circle: $ A = \\pi r^2 $",
        "Parallelogram: $ A = b \\times h $",
        "Trapezium: $ A = \\frac{1}{2}(a + b) \\times h $",
      ]}
      questions={areaQuestions}
    />
  );
};

export default Area;
