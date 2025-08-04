// VolumeCylindersQuiz.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

interface CylinderVisualizerProps {
  question: QuizQuestion;
}

const CylinderVisualizer: React.FC<CylinderVisualizerProps> = ({ question }) => {
  const renderCylinderAndDimensions = () => {
    switch (question.id) {
      case 'cylinder_basic':
        return (
          <div className="flex flex-col items-center my-4">
            <div className="relative w-40 h-48 flex items-center justify-center">
              <svg viewBox="0 0 120 150" className="w-40 h-48">
                {/* Backface/Shadow (optional subtle effect) */}
                {/* <ellipse cx="62" cy="122" rx="40" ry="15" fill="#e0e0e0" stroke="none" /> */}

                {/* Main Cylinder Body - A rectangle representing the unrolled side surface */}
                {/* Positioned behind the ellipses for correct layering */}
                <rect x="20" y="30" width="80" height="90" fill="#f0f0f0" stroke="none" />

                {/* Top Ellipse */}
                <ellipse cx="60" cy="30" rx="40" ry="15" fill="white" stroke="gray" strokeWidth="2" />
                {/* Bottom Ellipse */}
                <ellipse cx="60" cy="120" rx="40" ry="15" fill="white" stroke="gray" strokeWidth="2" />
                {/* Optional: Curved lines for front surface (can imply 3D) */}
                {/* <path d="M20 30 Q 60 15 100 30" fill="none" stroke="gray" strokeWidth="1" />
                <path d="M20 120 Q 60 105 100 120" fill="none" stroke="gray" strokeWidth="1" /> */}

                {/* Left Side Line */}
                <line x1="20" y1="30" x2="20" y2="120" stroke="gray" strokeWidth="2" />
                {/* Right Side Line */}
                <line x1="100" y1="30" x2="100" y2="120" stroke="gray" strokeWidth="2" />

                {/* Labels */}
                <text x="60" y="135" textAnchor="middle" className="fill-black font-bold text-xs">r</text>
                <text x="15" y="75" textAnchor="middle" className="fill-black font-bold text-xs rotate-90">h</text>

                {/* Dimension lines */}
                <line x1="60" y1="120" x2="100" y2="120" stroke="red" strokeWidth="1" />
                <line x1="20" y1="30" x2="20" y2="120" stroke="red" strokeWidth="1" />
                <text x="80" y="115" textAnchor="middle" className="fill-red-500 font-bold text-xs">r</text>
                <text x="25" y="75" textAnchor="start" className="fill-red-500 font-bold text-xs">h</text>
              </svg>
            </div>
            <div className="mt-4 text-black">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside">
                <li>r = 5 cm</li>
                <li>h = 12 cm</li>
              </ul>
            </div>
          </div>
        );
      case 'cylinder_comparison':
        return (
          <div className="flex flex-col items-center my-4">
            <div className="relative w-full h-40 flex items-center justify-around px-4">
              {/* Cylinder 1 */}
              <div className="flex flex-col items-center">
                <svg viewBox="0 0 80 120" className="w-16 h-24">
                  {/* Main Cylinder Body */}
                  <rect x="15" y="15" width="50" height="90" fill="#f0f0f0" stroke="none" />
                  {/* Top Ellipse */}
                  <ellipse cx="40" cy="15" rx="25" ry="10" fill="white" stroke="gray" strokeWidth="2" />
                  {/* Bottom Ellipse */}
                  <ellipse cx="40" cy="105" rx="25" ry="10" fill="white" stroke="gray" strokeWidth="2" />
                  {/* Side Lines */}
                  <line x1="15" y1="15" x2="15" y2="105" stroke="gray" strokeWidth="2" />
                  <line x1="65" y1="15" x2="65" y2="105" stroke="gray" strokeWidth="2" />
                  <text x="5" y="60" textAnchor="middle" className="fill-black font-bold text-xs rotate-90">h₁</text>
                  <text x="40" y="118" textAnchor="middle" className="fill-black font-bold text-xs">r</text>
                </svg>
                <span className="text-black text-xs mt-1">Cylinder 1</span>
              </div>

              {/* Cylinder 2 */}
              <div className="flex flex-col items-center">
                <svg viewBox="0 0 80 120" className="w-16 h-24">
                   {/* Main Cylinder Body */}
                   <rect x="15" y="15" width="50" height="90" fill="#f0f0f0" stroke="none" />
                  {/* Top Ellipse */}
                  <ellipse cx="40" cy="15" rx="25" ry="10" fill="white" stroke="gray" strokeWidth="2" />
                  {/* Bottom Ellipse */}
                  <ellipse cx="40" cy="105" rx="25" ry="10" fill="white" stroke="gray" strokeWidth="2" />
                  {/* Side Lines */}
                  <line x1="15" y1="15" x2="15" y2="105" stroke="gray" strokeWidth="2" />
                  <line x1="65" y1="15" x2="65" y2="105" stroke="gray" strokeWidth="2" />
                  <text x="5" y="60" textAnchor="middle" className="fill-black font-bold text-xs rotate-90">h₂</text>
                  <text x="40" y="118" textAnchor="middle" className="fill-black font-bold text-xs">r</text>
                </svg>
                <span className="text-black text-xs mt-1">Cylinder 2</span>
              </div>
            </div>
            <div className="mt-4 text-black">
              <p className="font-semibold">Given Dimensions:</p>
              <ul className="list-disc list-inside text-xs">
                <li>Both cylinders have the same radius (r = 4 cm)</li>
                <li>Cylinder 1 height (h₁) = 10 cm</li>
                <li>Cylinder 2 height (h₂) = 15 cm</li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderCylinderAndDimensions()}</div>;
};

const volumeCylindersQuestions: QuizQuestion[] = [
  {
    id: 'cylinder_basic',
    question: "Find the volume of the cylinder shown below (use $ \\pi \\approx 3.14 $).",
    questionType: 'text',
    options: ["942 cm³", "300 cm³", "188.4 cm³", "376.8 cm³"],
    optionType: 'text',
    correct: 0,
    explanation: `The volume of a cylinder is calculated using the formula:\n $ V = \\pi r^2 h $\n Substituting the given values and using $ \\pi \\approx 3.14 $:\n $ V = 3.14 \\times 5^2 \\times 12 $\n $ V = 3.14 \\times 25 \\times 12 $\n $ V = 3.14 \\times 300 $\n $ V = 942 \\, \\text{cm}^3 $`,
    explanationType: 'text',
    CustomContentComponent: CylinderVisualizer,
  },
  {
    id: 'formula_cylinder',
    question: "Which formula correctly calculates the volume of a cylinder?",
    questionType: 'text',
    options: ["$ V = 2\\pi r h $", "$ V = \\pi r^2 h $", "$ V = \\pi r h^2 $", "$ V = 2\\pi r (r + h) $"],
    optionType: 'text',
    correct: 1,
    explanation: "The volume of a cylinder is found by multiplying the area of its circular base ($ \\pi r^2 $) by its height ($ h $): $ V = \\pi r^2 h $.",
    explanationType: 'text',
  },
  {
    id: 'cylinder_comparison',
    question: "If two cylinders have the same radius but different heights, how does the volume change?",
    questionType: 'text',
    options: [
      "Volume is the same regardless of height",
      "Volume is directly proportional to height",
      "Volume is inversely proportional to height",
      "Volume is proportional to the square of the height"
    ],
    optionType: 'text',
    correct: 1,
    explanation: `Looking at the formula $ V = \\pi r^2 h $, if the radius ($ r $) is constant, then $ \\pi r^2 $ is a constant value.\n The volume ($ V $) is therefore directly determined by the height ($ h $).\n This means volume is directly proportional to height ($ V \\propto h $).`,
    explanationType: 'text',
    CustomContentComponent: CylinderVisualizer,
  },
  {
    id: 'unit_conversion',
    question: "A cylindrical tank has a volume of 2000 liters. How many cubic centimeters (cm³) is this?",
    questionType: 'text',
    options: ["2000 cm³", "20000 cm³", "200000 cm³", "2000000 cm³"],
    optionType: 'text',
    correct: 3, // Corrected based on 1L = 1000 cm³
    explanation: `1 liter (L) is equal to 1000 cubic centimeters (cm³).\n To convert liters to cm³, multiply by 1000.\n $ 2000 \\, \\text{L} \\times 1000 = 2\\,000\\,000 \\, \\text{cm}^3 $.`,
    explanationType: 'text',
  }
];

const VolumeCylinders: React.FC = () => {
  return (
    <MultipleChoiceInteractiveComponent
      title="Volume of Cylinders"
      icon="🥤"
      theme={{
        from: "from-cyan-600",
        to: "to-blue-700",
        button: "bg-blue-600",
        buttonHover: "hover:bg-blue-700",
      }}
      rulesTitle="Volume Formula:"
      rules={[
        "Volume is the amount of space occupied by a 3D object.",
        "Cylinder: $ V = \\pi r^2 h $",
        "Where r = radius of the base, h = height.",
        "Unit: Cubic centimeters (cm³), Cubic meters (m³), Liters (1 L = 1000 cm³)"
      ]}
      questions={volumeCylindersQuestions}
    />
  );
};

export default VolumeCylinders;