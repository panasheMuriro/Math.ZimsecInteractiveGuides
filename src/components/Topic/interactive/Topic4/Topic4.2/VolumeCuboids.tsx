// VolumeCuboidsQuiz.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

interface CuboidVisualizerProps {
  question: QuizQuestion;
}

const CuboidVisualizer: React.FC<CuboidVisualizerProps> = ({ question }) => {
  const renderCuboidAndDimensions = () => {
    switch (question.id) {
      case 'cuboid':
        return (
          <div className="flex flex-col items-center my-4">
            <div className="relative w-48 h-32 flex items-center justify-center">
              <svg viewBox="0 0 160 100" className="w-48 h-32">
                {/* Front face */}
                <polygon points="40,30 120,30 120,70 40,70" fill="white" stroke="gray" strokeWidth="2"/>
                {/* Top face */}
                <polygon points="40,30 60,10 140,10 120,30" fill="white" stroke="gray" strokeWidth="2"/>
                {/* Side face */}
                <polygon points="120,30 140,10 140,50 120,70" fill="white" stroke="gray" strokeWidth="2"/>
                
                {/* Labels */}
                <text x="80" y="75" textAnchor="middle" className="fill-black font-bold text-xs">l</text>
                <text x="35" y="50" textAnchor="end" className="fill-black font-bold text-xs">w</text>
                <text x="130" y="25" textAnchor="start" className="fill-black font-bold text-xs">h</text>
              </svg>
            </div>
            <div className="mt-4 text-white">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside">
                <li>l = 10 cm</li>
                <li>w = 6 cm</li>
                <li>h = 4 cm</li>
              </ul>
            </div>
          </div>
        );
      case 'cube':
        return (
          <div className="flex flex-col items-center my-4">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-32 h-32">
                {/* Front face */}
                <polygon points="20,30 80,30 80,70 20,70" fill="white" stroke="gray" strokeWidth="2"/>
                {/* Top face */}
                <polygon points="20,30 35,15 95,15 80,30" fill="white" stroke="gray" strokeWidth="2"/>
                {/* Side face */}
                <polygon points="80,30 95,15 95,55 80,70" fill="white" stroke="gray" strokeWidth="2"/>
                
                {/* Labels */}
                <text x="50" y="75" textAnchor="middle" className="fill-black font-bold text-xs">s</text>
                <text x="15" y="50" textAnchor="end" className="fill-black font-bold text-xs">s</text>
                <text x="87" y="22" textAnchor="start" className="fill-black font-bold text-xs">s</text>
              </svg>
            </div>
            <div className="mt-4 text-white">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside">
                <li>s = 5 cm</li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderCuboidAndDimensions()}</div>;
};

const volumeCuboidsQuestions: QuizQuestion[] = [
  {
    id: 'cuboid',
    question: "Find the volume of the cuboid shown below.",
    questionType: 'text',
    options: ["240 cm³", "200 cm³", "144 cm³", "60 cm³"],
    optionType: 'text',
    correct: 0,
    explanation: `The volume of a cuboid is calculated using the formula:\n $ V = l \\times w \\times h $\n Substituting the given values:\n $ V = 10 \\times 6 \\times 4 = 240 \\, \\text{cm}^3 $`,
    explanationType: 'text',
    CustomContentComponent: CuboidVisualizer,
  },
  {
    id: 'cube',
    question: "What is the volume of this cube?",
    questionType: 'text',
    options: ["125 cm³", "15 cm³", "25 cm³", "75 cm³"],
    optionType: 'text',
    correct: 0,
    explanation: `The volume of a cube is calculated using the formula:\n $ V = s^3 $\n Substituting the given value:\n $ V = 5^3 = 5 \\times 5 \\times 5 = 125 \\, \\text{cm}^3 $`,
    explanationType: 'text',
    CustomContentComponent: CuboidVisualizer,
  },
  {
    id: 'formula_cuboid',
    question: "Which formula correctly calculates the volume of a cuboid?",
    questionType: 'text',
    options: ["$ V = l + w + h $", "$ V = 2(lw + lh + wh) $", "$ V = l \\times w \\times h $", "$ V = l^2 + w^2 + h^2 $"],
    optionType: 'text',
    correct: 2,
    explanation: "The volume of a cuboid is found by multiplying its length, width, and height: $ V = l \\times w \\times h $.",
    explanationType: 'text',
  },
  {
    id: 'unit_conversion',
    question: "A container has a volume of 2000 cm³. How many liters is this?",
    questionType: 'text',
    options: ["200 L", "20 L", "2 L", "0.2 L"],
    optionType: 'text',
    correct: 2,
    explanation: `1 liter (L) is equal to 1000 cubic centimeters (cm³).\n To convert cm³ to L, divide by 1000.\n $ 2000 \\, \\text{cm}^3 \\div 1000 = 2 \\, \\text{L} $`,
    explanationType: 'text',
  }
];

const VolumeCuboids: React.FC = () => {
  return (
    <MultipleChoiceInteractiveComponent
      title="Volume of Cuboids"
      icon="📦"
      theme={{
        from: "from-orange-600",
        to: "to-red-700",
        button: "bg-red-600",
        buttonHover: "hover:bg-red-700",
      }}
      rulesTitle="Volume Formulas:"
      rules={[
        "Volume is the amount of space occupied by a 3D object.",
        "Cuboid: $ V = l \\times w \\times h $",
        "Cube: $ V = s^3 $",
        "Unit: Cubic centimeters (cm³), Cubic meters (m³), Liters (1 L = 1000 cm³)"
      ]}
      questions={volumeCuboidsQuestions}
    />
  );
};

export default VolumeCuboids;