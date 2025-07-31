/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { renderTextWithMath } from '../../../../../utils/renderTextWithMath';
import MultipleStepInteractiveComponent, { MultiStep, MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

interface SphereVisualizerProps {
  step: MultiStep;
  sharedValues: { [key: string]: any };
}

const SphereVisualizer: React.FC<SphereVisualizerProps> = () => {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="relative w-40 h-40 flex items-center justify-center mb-3">
        <svg viewBox="0 0 120 120" className="w-40 h-40">
          <circle cx="60" cy="60" r="45" fill="#c0c0c0" stroke="gray" strokeWidth="1" />
          <ellipse cx="45" cy="45" rx="15" ry="20" fill="#e0e0e0" stroke="none" />
          <ellipse cx="55" cy="55" rx="5" ry="7" fill="#f5f5f5" stroke="none" />
          <line x1="60" y1="60" x2="105" y2="60" stroke="red" strokeWidth="1.5" />
          <text x="82.5" y="55" textAnchor="middle" className="fill-red-600 font-bold text-xs">r</text>
        </svg>
      </div>
      <div className="text-white text-center mb-2">
        <p className="font-semibold text-sm">Given Dimensions & Properties:</p>
        <ul className="list-disc list-inside text-xs">
          <li>Sphere Radius (r) = 3 cm</li>
          <li>Iron Density = 7.8 g/cm³</li>
          <li>{renderTextWithMath("Use $ \\pi \\approx 3.14 $")}</li>
        </ul>
      </div>
    </div>
  );
};

interface CubeVisualizerProps {
  step: MultiStep;
  sharedValues: { [key: string]: any };
}

const CubeVisualizer: React.FC<CubeVisualizerProps> = () => {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="relative w-32 h-32 flex items-center justify-center mb-3">
        <svg viewBox="0 0 100 100" className="w-32 h-32">
          <polygon points="20,30 80,30 80,70 20,70" fill="#f0f0f0" stroke="gray" strokeWidth="1"/>
          <polygon points="20,30 35,15 95,15 80,30" fill="#e0e0e0" stroke="gray" strokeWidth="1"/>
          <polygon points="80,30 95,15 95,55 80,70" fill="#d0d0d0" stroke="gray" strokeWidth="1"/>
          <text x="50" y="75" textAnchor="middle" className="fill-black font-bold text-xs">s</text>
        </svg>
      </div>
      <div className="text-white text-center mb-2">
        <p className="font-semibold text-sm">Given Dimensions & Properties:</p>
        <ul className="list-disc list-inside text-xs">
          <li>Cube Side (s) = 5 cm</li>
          <li>Aluminum Density = 2.7 g/cm³</li>
        </ul>
      </div>
    </div>
  );
};

const volumeDensitySteps: MultiStep[] = [
  {
    id: 'identify_shape',
    question: "Identify the 3D shape described in the problem.",
    questionType: 'text',
    options: ["Cube", "Cylinder", "Sphere", "Cone"],
    optionType: 'text',
    correct: 2,
    explanation: `The problem states: 'A solid iron sphere has radius 3 cm.'\n The shape is explicitly identified as a sphere.`,
    explanationType: 'text',
    CustomContentComponent: SphereVisualizer,
  },
  {
    id: 'sphere_volume_formula',
    question: "Which formula correctly calculates the volume of a sphere?",
    questionType: 'text',
    options: [
      "$ V = \\frac{1}{3} \\pi r^2 h $",
      "$ V = \\pi r^2 h $",
      "$ V = \\frac{4}{3} \\pi r^3 $",
      "$ V = 4 \\pi r^2 $"
    ],
    optionType: 'text',
    correct: 2,
    explanation: `The volume of a sphere is calculated using the formula:\n $ V = \\frac{4}{3} \\pi r^3 $\n where $ r $ is the radius of the sphere.`,
    explanationType: 'text',
    CustomContentComponent: SphereVisualizer,
  },
  {
    id: 'calculate_sphere_volume',
    question: "Calculate the volume of the iron sphere with radius 3 cm. Use $ \\pi \\approx 3.14 $.",
    questionType: 'text',
    options: ["113.04 cm³", "84.78 cm³", "28.26 cm³", "36π cm³"],
    optionType: 'text',
    correct: 0,
    explanation: `Using the formula $ V = \\frac{4}{3} \\pi r^3 $:\n $ V = \\frac{4}{3} \\times 3.14 \\times 3^3 $\n $ V = \\frac{4}{3} \\times 3.14 \\times 27 $\n $ V = \\frac{4}{3} \\times 84.78 $\n $ V = 1.333... \\times 84.78 $\n $ V = 113.04 \\, \\text{cm}^3 $`,
    explanationType: 'text',
    CustomContentComponent: SphereVisualizer,
  },
  {
    id: 'calculate_sphere_mass',
    question: "Calculate the mass of the iron sphere. Its volume is 113.04 cm³ and iron's density is 7.8 g/cm³.",
    questionType: 'text',
    options: ["14.49 g", "881.7 g", "15.6 g", "877.6 g"],
    optionType: 'text',
    correct: 1,
    explanation: `Using the formula $ \\text{Mass} = \\text{Density} \\times \\text{Volume} $:\n $ \\text{Mass} = 7.8 \\, \\text{g/cm}^3 \\times 113.04 \\, \\text{cm}^3 $\n $ \\text{Mass} = 881.7 \\, \\text{g} $\n (Note: If the exact volume $ 36\\pi $ cm³ was used, the mass would be $ 7.8 \\times 36\\pi \\approx 882.5 $ g)`,
    explanationType: 'text',
    CustomContentComponent: SphereVisualizer,
  },
  {
    id: 'cube_volume_formula',
    question: "What is the formula for the volume of a cube?",
    questionType: 'text',
    options: ["$ V = 6s^2 $", "$ V = s^3 $", "$ V = s^2 $", "$ V = 4s $"],
    optionType: 'text',
    correct: 1,
    explanation: `The volume of a cube is calculated by multiplying length × width × height. Since all sides of a cube are equal ($ s $), the formula is:\n $ V = s \\times s \\times s = s^3 $`,
    explanationType: 'text',
    CustomContentComponent: CubeVisualizer,
  },
  {
    id: 'calculate_cube_volume',
    question: "Calculate the volume of an aluminum cube with side length 5 cm.",
    questionType: 'text',
    options: ["125 cm³", "150 cm³", "25 cm³", "30 cm³"],
    optionType: 'text',
    correct: 0,
    explanation: `Using the formula $ V = s^3 $:\n $ V = 5^3 $\n $ V = 5 \\times 5 \\times 5 $\n $ V = 25 \\times 5 $\n $ V = 125 \\, \\text{cm}^3 $`,
    explanationType: 'text',
    CustomContentComponent: CubeVisualizer,
  },
  {
    id: 'calculate_cube_mass',
    question: "Calculate the mass of the aluminum cube. Its volume is 125 cm³ and aluminum's density is 2.7 g/cm³.",
    questionType: 'text',
    options: ["46.3 g", "337.5 g", "127.7 g", "450 g"],
    optionType: 'text',
    correct: 1,
    explanation: `Using the formula $ \\text{Mass} = \\text{Density} \\times \\text{Volume} $:\n $ \\text{Mass} = 2.7 \\, \\text{g/cm}^3 \\times 125 \\, \\text{cm}^3 $\n $ \\text{Mass} = 337.5 \\, \\text{g} $`,
    explanationType: 'text',
    CustomContentComponent: CubeVisualizer,
  }
];

const questions: MultiStepQuestion[] = [
  {
    id: 'volume_density_calculations',
    title: 'Volume and Density Calculations',
    steps: volumeDensitySteps
  }
];

const initialSharedValues = {
  sphereRadius: 3,
  ironDensity: 7.8,
  piApprox: 3.14,
  cubeSide: 5,
  aluminumDensity: 2.7
};

const renderSharedValuesSummary = (sharedValues: { [key: string]: any }) => {
  return (
    <ul className="list-disc list-inside text-xs space-y-1">
      <li>Sphere Radius: {sharedValues.sphereRadius} cm</li>
      <li>Iron Density: {sharedValues.ironDensity} g/cm³</li>
      <li>Cube Side: {sharedValues.cubeSide} cm</li>
      <li>Aluminum Density: {sharedValues.aluminumDensity} g/cm³</li>
    </ul>
  );
};

const VolumeDensity: React.FC = () => {
  return (
    <MultipleStepInteractiveComponent
      title="Volume and Density of Solids"
      icon="⚖️"
      theme={{
        from: "from-amber-600",
        to: "to-orange-700",
        button: "bg-orange-600",
        buttonHover: "hover:bg-orange-700",
      }}
      rulesTitle="Key Concepts & Formulas:"
      rules={[
        "Volume of a Sphere: $ V = \\frac{4}{3} \\pi r^3 $",
        "Volume of a Cube: $ V = s^3 $",
        "Mass = Density × Volume",
        "Density = Mass ÷ Volume",
        "Volume = Mass ÷ Density",
      ]}
      questions={questions}
      initialSharedValues={initialSharedValues}
      renderSharedValuesSummary={renderSharedValuesSummary}
    />
  );
};

export default VolumeDensity;