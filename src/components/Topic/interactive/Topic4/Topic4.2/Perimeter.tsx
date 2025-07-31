// PerimeterQuiz.tsx
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
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1 text-sm font-bold text-black bg-white/0 px-1">a</div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1 text-sm font-bold text-black bg-white/0 px-1">a</div>
              <div className="absolute left-0 top-1/2 transform translate-x-1 -translate-y-1/2 text-sm font-bold text-black bg-white/0 px-1">b</div>
              <div className="absolute right-0 top-1/2 transform -translate-x-1 -translate-y-1/2 text-sm font-bold text-black bg-white/0 px-1">b</div>
            </div>
            <div className="mt-4 text-white">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside">
                <li>a = 8 cm</li>
                <li>b = 5 cm</li>
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
            <div className="mt-4 text-white">
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
                <line x1="20" y1="90" x2="180" y2="90" stroke="gray" strokeWidth="4" />
                <line x1="180" y1="90" x2="100" y2="20" stroke="gray" strokeWidth="4" />
                <line x1="100" y1="20" x2="20" y2="90" stroke="gray" strokeWidth="4" />
                <text x="100" y="85" textAnchor="middle" dominantBaseline="baseline" className="fill-black font-bold text-sm">a</text>
                <text x="137" y="57" textAnchor="middle" dominantBaseline="middle" className="fill-black font-bold text-sm">b</text>
                <text x="63" y="57" textAnchor="middle" dominantBaseline="middle" className="fill-black font-bold text-sm">c</text>
              </svg>
            </div>
            <div className="mt-4 text-white">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside">
                <li>a = 5 cm</li>
                <li>b = 4 cm</li>
                <li>c = 3 cm</li>
              </ul>
            </div>
          </div>
        );
      case 'circle':
        return (
          <div className="flex flex-col items-center my-4">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-48 h-48">
                <circle cx="60" cy="60" r="50" stroke="gray" strokeWidth="4" fill="white" />
                <line x1="60" y1="60" x2="110" y2="60" stroke="gray" strokeWidth="2" />
                <text x="83" y="57" textAnchor="middle" dominantBaseline="baseline" className="fill-black font-bold text-sm">r</text>
              </svg>
            </div>
            <div className="mt-4 text-white">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside">
                <li>r = 7 cm</li>
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

const perimeterQuestions: QuizQuestion[] = [
  {
    id: 'rectangle',
    question: "Find the perimeter of the rectangle shown below.",
    questionType: 'text',
    options: ["21 cm", "26 cm", "40 cm", "13 cm"],
    optionType: 'text',
    correct: 1,
    explanation: `The perimeter of a rectangle is calculated using the formula:\n $ P = 2(a + b) $\n Substituting the given values:\n $ P = 2(8 + 5) $\n $ P = 2(13) $\n $ P = 26 \\, \\text{cm} $`,
    explanationType: 'text',
    CustomContentComponent: ShapeAndDimensionsRenderer,
  },
  {
    id: 'square',
    question: "What is the perimeter of this square?",
    questionType: 'text',
    options: ["12 cm", "36 cm", "24 cm", "6 cm"],
    optionType: 'text',
    correct: 2,
    explanation: `The perimeter of a square is calculated using the formula:\n $ P = 4s $\n Substituting the given value:\n $ P = 4 \\times 6 $\n $ P = 24 \\, \\text{cm} $`,
    explanationType: 'text',
    CustomContentComponent: ShapeAndDimensionsRenderer,
  },
  {
    id: 'triangle',
    question: "Calculate the perimeter of the triangle.",
    questionType: 'text',
    options: ["10 cm", "15 cm", "12 cm", "9 cm"],
    optionType: 'text',
    correct: 2,
    explanation: `The perimeter of a triangle is the sum of its three sides:\n $ P = a + b + c $\n Substituting the given values:\n $ P = 5 + 4 + 3 $\n $ P = 12 \\, \\text{cm} $`,
    explanationType: 'text',
    CustomContentComponent: ShapeAndDimensionsRenderer,
  },
  {
    id: 'circle',
    question: "Find the approximate circumference of the circle (use $ \\pi \\approx \\frac{22}{7} $).",
    questionType: 'text',
    options: ["22 cm", "44 cm", "154 cm", "14 cm"],
    optionType: 'text',
    correct: 1,
    explanation: `The circumference of a circle is calculated using the formula:\n $ C = 2\\pi r $\n Substituting the given value and using $ \\pi \\approx \\frac{22}{7} $:\n $ C = 2 \\times \\frac{22}{7} \\times 7 $\n $ C = 2 \\times 22 $\n $ C = 44 \\, \\text{cm} $`,
    explanationType: 'text',
    CustomContentComponent: ShapeAndDimensionsRenderer,
  },
  {
    id: 'formula_rect',
    question: "Which formula correctly calculates the perimeter of a rectangle?",
    questionType: 'text',
    options: ["$P = l \\times w$", "$ P = 2l + w $", "$ P = l^2 + w^2 $", "$ P = 2(l + w) $"],
    optionType: 'text',
    correct: 3,
    explanation: "The perimeter is the total distance around the shape. For a rectangle, you add up all four sides: $ l + w + l + w = 2l + 2w = 2(l + w) $.",
    explanationType: 'text',
  },
  {
    id: 'formula_tri',
    question: "How do you find the perimeter of any triangle?",
    questionType: 'text',
    options: [
      "Multiply the base by the height",
      "Add the lengths of all three sides",
      "Use the formula $ P = 3s $ (for all triangles)",
      "Double the length of one side",
    ],
    optionType: 'text',
    correct: 1,
    explanation: "The perimeter of any polygon is the sum of the lengths of its sides. A triangle has three sides, so its perimeter is the sum of those three side lengths.",
    explanationType: 'text',
  },
];

const Perimeter: React.FC = () => {
  return (
    <MultipleChoiceInteractiveComponent
      title="Perimeter of Plane Shapes"
      icon="📏"
      theme={{
        from: "from-blue-600",
        to: "to-indigo-700",
        button: "bg-indigo-500",
        buttonHover: "hover:bg-indigo-400",
      }}
      rulesTitle="Perimeter Formulas:"
      rules={[
        "Perimeter is the total distance around a shape.",
        "Rectangle: $ P = 2(l + w) $",
        "Square: $ P = 4s $",
        "Triangle: $ P = a + b + c $",
        "Circle: $ C = 2\\pi r $ or $ C = \\pi d $",
      ]}
      questions={perimeterQuestions}
    />
  );
};

export default Perimeter;