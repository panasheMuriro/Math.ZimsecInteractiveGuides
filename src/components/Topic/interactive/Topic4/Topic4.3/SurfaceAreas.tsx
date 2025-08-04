// SurfaceAreaQuiz.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

interface SolidShapeVisualizerProps {
  question: QuizQuestion;
}

const SolidShapeVisualizer: React.FC<SolidShapeVisualizerProps> = ({ question }) => {
  const renderShapeAndDimensions = () => {
    switch (question.id) {
      case 'cube':
        return (
          <div className="flex flex-col items-center my-4">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-32 h-32">
                <polygon points="20,30 80,30 80,70 20,70" fill="#f0f0f0" stroke="gray" strokeWidth="1"/>
                <polygon points="20,30 35,15 95,15 80,30" fill="#e0e0e0" stroke="gray" strokeWidth="1"/>
                <polygon points="80,30 95,15 95,55 80,70" fill="#d0d0d0" stroke="gray" strokeWidth="1"/>
                <text x="50" y="75" textAnchor="middle" className="fill-black font-bold text-xs">s</text>
                <text x="15" y="50" textAnchor="end" className="fill-black font-bold text-xs">s</text>
                <text x="87" y="22" textAnchor="start" className="fill-black font-bold text-xs">s</text>
              </svg>
            </div>
            <div className="mt-4 text-black">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside">
                <li>s = 6 cm</li>
              </ul>
            </div>
          </div>
        );
      case 'cuboid':
        return (
          <div className="flex flex-col items-center my-4">
            <div className="relative w-40 h-32 flex items-center justify-center">
              <svg viewBox="0 0 160 100" className="w-40 h-32">
                <polygon points="40,30 120,30 120,70 40,70" fill="#f0f0f0" stroke="gray" strokeWidth="1"/>
                <polygon points="40,30 60,10 140,10 120,30" fill="#e0e0e0" stroke="gray" strokeWidth="1"/>
                <polygon points="120,30 140,10 140,50 120,70" fill="#d0d0d0" stroke="gray" strokeWidth="1"/>
                <text x="80" y="75" textAnchor="middle" className="fill-black font-bold text-xs">l</text>
                <text x="35" y="50" textAnchor="end" className="fill-black font-bold text-xs">w</text>
                <text x="130" y="25" textAnchor="start" className="fill-black font-bold text-xs">h</text>
              </svg>
            </div>
            <div className="mt-4 text-black">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside">
                <li>l = 8 cm</li>
                <li>w = 5 cm</li>
                <li>h = 3 cm</li>
              </ul>
            </div>
          </div>
        );
      case 'cylinder':
        return (
          <div className="flex flex-col items-center my-4">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg viewBox="0 0 120 150" className="w-40 h-40">
                <rect x="20" y="30" width="80" height="90" fill="#f0f0f0" stroke="none" />
                <ellipse cx="60" cy="30" rx="40" ry="15" fill="white" stroke="gray" strokeWidth="1" />
                <ellipse cx="60" cy="120" rx="40" ry="15" fill="white" stroke="gray" strokeWidth="1" />
                <line x1="20" y1="30" x2="20" y2="120" stroke="gray" strokeWidth="1" />
                <line x1="100" y1="30" x2="100" y2="120" stroke="gray" strokeWidth="1" />
                <text x="60" y="135" textAnchor="middle" className="fill-black font-bold text-xs">r</text>
                <text x="15" y="75" textAnchor="middle" className="fill-black font-bold text-xs rotate-90">h</text>
              </svg>
            </div>
            <div className="mt-4 text-black">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside">
                <li>r = 4 cm</li>
                <li>h = 10 cm</li>
              </ul>
            </div>
          </div>
        );
      case 'sphere':
        return (
          <div className="flex flex-col items-center my-4">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-40 h-40">
                <circle cx="60" cy="60" r="45" fill="#c0c0c0" stroke="gray" strokeWidth="1" />
                <ellipse cx="45" cy="45" rx="15" ry="20" fill="#e0e0e0" stroke="none" />
                <ellipse cx="55" cy="55" rx="5" ry="7" fill="#f5f5f5" stroke="none" />
                <line x1="60" y1="60" x2="105" y2="60" stroke="red" strokeWidth="1.5" />
                <text x="82.5" y="55" textAnchor="middle" className="fill-red-600 font-bold text-xs">r</text>
              </svg>
            </div>
            <div className="mt-4 text-black">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside">
                <li>r = 5 cm</li>
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

const surfaceAreaQuestions: QuizQuestion[] = [
  {
    id: 'cube',
    question: "What is the surface area of this cube?",
    questionType: 'text',
    options: ["36 cm²", "144 cm²", "216 cm²", "72 cm²"],
    optionType: 'text',
    correct: 2,
    explanation: `The surface area of a cube is calculated using the formula:\n $ SA = 6s^2 $\n Substituting the given value:\n $ SA = 6 \\times 6^2 $\n $ SA = 6 \\times 36 $\n $ SA = 216 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: SolidShapeVisualizer,
  },
  {
    id: 'cuboid',
    question: "Find the surface area of the cuboid shown below.",
    questionType: 'text',
    options: ["158 cm²", "118 cm²", "236 cm²", "79 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `The surface area of a cuboid is calculated using the formula:\n $ SA = 2(lw + lh + wh) $\n Substituting the given values:\n $ SA = 2((8 \\times 5) + (8 \\times 3) + (5 \\times 3)) $\n $ SA = 2(40 + 24 + 15) $\n $ SA = 2(79) $\n $ SA = 158 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: SolidShapeVisualizer,
  },
  {
    id: 'cylinder',
    question: "Calculate the surface area of the cylinder (use $ \\pi \\approx 3.14 $).",
    questionType: 'text',
    options: ["351.68 cm²", "100.48 cm²", "50.24 cm²", "401.92 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `The surface area of a cylinder is calculated using the formula:\n $ SA = 2\\pi r^2 + 2\\pi rh = 2\\pi r(r + h) $\n Substituting the given values and using $ \\pi \\approx 3.14 $:\n $ SA = 2 \\times 3.14 \\times 4(4 + 10) $\n $ SA = 2 \\times 3.14 \\times 4 \\times 14 $\n $ SA = 2 \\times 3.14 \\times 56 $\n $ SA = 6.28 \\times 56 $\n $ SA = 351.68 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: SolidShapeVisualizer,
  },
  {
    id: 'sphere',
    question: "Find the surface area of the sphere (use $ \\pi \\approx 3.14 $).",
    questionType: 'text',
    options: ["314 cm²", "100 cm²", "523.3 cm²", "157 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `The surface area of a sphere is calculated using the formula:\n $ SA = 4\\pi r^2 $\n Substituting the given values and using $ \\pi \\approx 3.14 $:\n $ SA = 4 \\times 3.14 \\times 5^2 $\n $ SA = 4 \\times 3.14 \\times 25 $\n $ SA = 12.56 \\times 25 $\n $ SA = 314 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: SolidShapeVisualizer,
  },
  {
    id: 'formula_cube',
    question: "Which formula correctly calculates the surface area of a cube?",
    questionType: 'text',
    options: ["$ SA = s^3 $", "$ SA = 4s^2 $", "$ SA = 6s^2 $", "$ SA = s^2 $"],
    optionType: 'text',
    correct: 2,
    explanation: "A cube has 6 faces, each with an area of $ s^2 $. The total surface area is $ 6 \\times s^2 = 6s^2 $.",
    explanationType: 'text',
  },
  {
    id: 'formula_sphere',
    question: "Which formula correctly calculates the surface area of a sphere?",
    questionType: 'text',
    options: ["$ SA = \\pi r^2 $", "$ SA = 4\\pi r^2 $", "$ SA = 4\\pi r^3 $", "$ SA = \\frac{4}{3}\\pi r^3 $"],
    optionType: 'text',
    correct: 1,
    explanation: "The surface area of a sphere is given by the formula $ SA = 4\\pi r^2 $, where $ r $ is the radius.",
    explanationType: 'text',
  },
  {
    id: 'concept_cylinder_parts',
    question: "What do the two parts of the cylinder surface area formula $ 2\\pi r^2 + 2\\pi rh $ represent?",
    questionType: 'text',
    options: [
      "Curved surface and one base",
      "Two bases and the curved surface",
      "Volume and perimeter",
      "Height and radius"
    ],
    optionType: 'text',
    correct: 1,
    explanation: "The formula $ 2\\pi r^2 + 2\\pi rh $ breaks down as:\n- $ 2\\pi r^2 $: The combined area of the two circular bases (top and bottom).\n- $ 2\\pi rh $: The area of the curved side surface.",
    explanationType: 'text',
  }
];

const SurfaceArea: React.FC = () => {
  return (
    <MultipleChoiceInteractiveComponent
      title="Surface Area of Solid Shapes"
      icon="📦"
      theme={{
        from: "from-purple-600",
        to: "to-indigo-700",
        button: "bg-indigo-500",
        buttonHover: "hover:bg-indigo-400",
      }}
      rulesTitle="Surface Area Formulas:"
      rules={[
        "Surface area is the total area of all faces of a 3D object.",
        "Cuboid: $ SA = 2(lw + lh + wh) $",
        "Cube: $ SA = 6s^2 $",
        "Cylinder: $ SA = 2\\pi r^2 + 2\\pi rh = 2\\pi r(r + h) $",
        "Sphere: $ SA = 4\\pi r^2 $"
      ]}
      questions={surfaceAreaQuestions}
    />
  );
};

export default SurfaceArea;