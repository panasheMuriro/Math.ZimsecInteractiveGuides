/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { renderTextWithMath } from '../../../../../utils/renderTextWithMath'; // Adjust path as needed
import MultipleStepInteractiveComponent, { MultiStep, MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent'; // Adjust path as needed

// --- Visualizer Components ---

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
      <div className="text-black text-center mb-2">
        <p className="font-semibold text-sm">Given Dimensions & Properties (Sphere):</p>
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
      <div className="text-black text-center mb-2">
        <p className="font-semibold text-sm">Given Dimensions & Properties (Cube):</p>
        <ul className="list-disc list-inside text-xs">
          <li>Cube Side (s) = 5 cm</li>
          <li>Aluminum Density = 2.7 g/cm³</li>
        </ul>
      </div>
    </div>
  );
};

// --- New Visualizer Components ---

interface CylinderVisualizerProps {
  step: MultiStep;
  sharedValues: { [key: string]: any };
}

const CylinderVisualizer: React.FC<CylinderVisualizerProps> = () => {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="relative w-32 h-40 flex items-center justify-center mb-3">
        <svg viewBox="0 0 100 120" className="w-32 h-40">
          {/* Ellipses for top and bottom */}
          <ellipse cx="50" cy="20" rx="30" ry="10" fill="#e0e0e0" stroke="gray" strokeWidth="1" />
          <ellipse cx="50" cy="100" rx="30" ry="10" fill="#f0f0f0" stroke="gray" strokeWidth="1" />
          {/* Lines for the sides */}
          <line x1="20" y1="20" x2="20" y2="100" stroke="gray" strokeWidth="1" />
          <line x1="80" y1="20" x2="80" y2="100" stroke="gray" strokeWidth="1" />
          {/* Radius line */}
          <line x1="50" y1="100" x2="80" y2="100" stroke="red" strokeWidth="1.5" />
          <text x="65" y="95" textAnchor="middle" className="fill-red-600 font-bold text-xs">r</text>
          {/* Height line */}
          <line x1="85" y1="20" x2="85" y2="100" stroke="blue" strokeWidth="1.5" />
          <text x="90" y="60" textAnchor="start" className="fill-blue-600 font-bold text-xs">h</text>
        </svg>
      </div>
      <div className="text-black text-center mb-2">
        <p className="font-semibold text-sm">Given Dimensions & Properties (Cylinder):</p>
        <ul className="list-disc list-inside text-xs">
          <li>Cylinder Radius (r) = 4 cm</li>
          <li>Cylinder Height (h) = 10 cm</li>
          <li>Steel Density = 7.9 g/cm³</li>
          <li>{renderTextWithMath("Use $ \\pi \\approx 3.14 $")}</li>
        </ul>
      </div>
    </div>
  );
};

// Visualizer for comparison question (conceptual, no specific shape)
const ComparisonVisualizer: React.FC<SphereVisualizerProps> = () => {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="relative w-full h-32 flex items-center justify-around mb-3 px-4">
        {/* Representing two volumes of equal size but different materials */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-400 rounded-full mb-1 flex items-center justify-center text-xs font-bold text-black">Vol 1</div>
          <span className="text-xs text-black">Material A</span>
          <span className="text-xs text-black">Density: High</span>
        </div>
        <div className="text-black text-lg font-bold">VS</div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-green-400 rounded-full mb-1 flex items-center justify-center text-xs font-bold text-black">Vol 2</div>
          <span className="text-xs text-black">Material B</span>
          <span className="text-xs text-black">Density: Low</span>
        </div>
      </div>
      <div className="text-black text-center mb-2">
        <p className="font-semibold text-sm">Concept:</p>
        <ul className="list-disc list-inside text-xs">
          <li>Volume 1 = Volume 2</li>
          <li>Density of Material A {'>'} Density of Material B</li>
        </ul>
      </div>
    </div>
  );
};

// --- Multi-Step Question Data ---

// --- Question 1: Sphere & Cube (Original) ---
const volumeDensitySteps1: MultiStep[] = [
  {
    id: 'identify_shape_1',
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
    id: 'sphere_volume_formula_1',
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
    id: 'calculate_sphere_volume_1',
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
    id: 'calculate_sphere_mass_1',
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
    id: 'cube_volume_formula_1',
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
    id: 'calculate_cube_volume_1',
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
    id: 'calculate_cube_mass_1',
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

// --- Question 2: Cylinder Volume ---
const volumeDensitySteps2: MultiStep[] = [
  {
    id: 'cylinder_volume_formula',
    question: "Which formula correctly calculates the volume of a cylinder?",
    questionType: 'text',
    options: [
      "$ V = \\frac{1}{3} \\pi r^2 h $",
      "$ V = \\pi r^2 h $",
      "$ V = \\frac{4}{3} \\pi r^3 $",
      "$ V = 2 \\pi r h $"
    ],
    optionType: 'text',
    correct: 1,
    explanation: `The volume of a cylinder is calculated by finding the area of its circular base and multiplying by its height.\n $ V = \\text{Base Area} \\times \\text{Height} = \\pi r^2 \\times h = \\pi r^2 h $`,
    explanationType: 'text',
    CustomContentComponent: CylinderVisualizer,
  },
  {
    id: 'calculate_cylinder_volume',
    question: "Calculate the volume of a steel cylinder with radius 4 cm and height 10 cm. Use $ \\pi \\approx 3.14 $.",
    questionType: 'text',
    options: ["502.4 cm³", "125.6 cm³", "251.2 cm³", "150.72 cm³"],
    optionType: 'text',
    correct: 0,
    explanation: `Using the formula $ V = \\pi r^2 h $:\n $ V = 3.14 \\times 4^2 \\times 10 $\n $ V = 3.14 \\times 16 \\times 10 $\n $ V = 3.14 \\times 160 $\n $ V = 502.4 \\, \\text{cm}^3 $`,
    explanationType: 'text',
    CustomContentComponent: CylinderVisualizer,
  },
  {
    id: 'calculate_cylinder_mass',
    question: "Calculate the mass of the steel cylinder. Its volume is 502.4 cm³ and steel's density is 7.9 g/cm³.",
    questionType: 'text',
    options: ["3968.96 g", "63.6 g", "3970 g", "4500 g"],
    optionType: 'text',
    correct: 0,
    explanation: `Using the formula $ \\text{Mass} = \\text{Density} \\times \\text{Volume} $:\n $ \\text{Mass} = 7.9 \\, \\text{g/cm}^3 \\times 502.4 \\, \\text{cm}^3 $\n $ \\text{Mass} = 3968.96 \\, \\text{g} $`,
    explanationType: 'text',
    CustomContentComponent: CylinderVisualizer,
  }
];

// --- Question 3: Comparing Masses of Equal Volumes ---
const volumeDensitySteps3: MultiStep[] = [
  {
    id: 'concept_density_mass',
    question: "If two objects have the same volume but are made of different materials, what determines which one has a greater mass?",
    questionType: 'text',
    options: [
      "The shape of the object",
      "The color of the material",
      "The density of the material",
      "The surface area of the object"
    ],
    optionType: 'text',
    correct: 2,
    explanation: `Mass is calculated by multiplying volume by density ($ \\text{Mass} = \\text{Volume} \\times \\text{Density} $). If the volume is the same for both objects, the one with the higher density will have the greater mass.`,
    explanationType: 'text',
    CustomContentComponent: ComparisonVisualizer,
  },
  {
    id: 'compare_masses',
    question: "Object A has a volume of 100 cm³ and a density of 5 g/cm³. Object B has the same volume (100 cm³) but a density of 3 g/cm³. Which object is heavier?",
    questionType: 'text',
    options: [
      "Object A",
      "Object B",
      "They have the same mass",
      "Cannot be determined"
    ],
    optionType: 'text',
    correct: 0,
    explanation: `Calculate the mass of each object:\n Object A: $ \\text{Mass}_A = 100 \\, \\text{cm}^3 \\times 5 \\, \\text{g/cm}^3 = 500 \\, \\text{g} $\n Object B: $ \\text{Mass}_B = 100 \\, \\text{cm}^3 \\times 3 \\, \\text{g/cm}^3 = 300 \\, \\text{g} $\n Object A (500 g) is heavier than Object B (300 g).`,
    explanationType: 'text',
    CustomContentComponent: ComparisonVisualizer,
  }
];

// --- Combine all questions into an array ---
const questions: MultiStepQuestion[] = [
  {
    id: 'volume_density_calculations_1',
    title: 'Sphere & Cube Calculations',
    steps: volumeDensitySteps1
  },
  {
    id: 'volume_density_calculations_2',
    title: 'Cylinder Volume & Mass',
    steps: volumeDensitySteps2
  },
  {
    id: 'volume_density_calculations_3',
    title: 'Comparing Masses',
    steps: volumeDensitySteps3
  }
];

// --- Initial Shared Values and Summary Renderer ---
const initialSharedValues = {
  sphereRadius: 3,
  ironDensity: 7.8,
  piApprox: 3.14,
  cubeSide: 5,
  aluminumDensity: 2.7,
  cylinderRadius: 4,
  cylinderHeight: 10,
  steelDensity: 7.9
};

const renderSharedValuesSummary = (sharedValues: { [key: string]: any }) => {
  return (
    <ul className="list-disc list-inside text-xs space-y-1">
      <li>Sphere Radius: {sharedValues.sphereRadius} cm</li>
      <li>Iron Density: {sharedValues.ironDensity} g/cm³</li>
      <li>Cube Side: {sharedValues.cubeSide} cm</li>
      <li>Aluminum Density: {sharedValues.aluminumDensity} g/cm³</li>
      <li>Cylinder Radius: {sharedValues.cylinderRadius} cm</li>
      <li>Cylinder Height: {sharedValues.cylinderHeight} cm</li>
      <li>Steel Density: {sharedValues.steelDensity} g/cm³</li>
    </ul>
  );
};

// --- Main Component ---
const VolumeDensity: React.FC = () => {
  return (
    <MultipleStepInteractiveComponent
      title="Volume and Density of Solids"
      icon="⚖️"
      // theme is unused due to Neubrutalism styling in the template
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
        "Volume of a Cylinder: $ V = \\pi r^2 h $",
        "Mass = Density × Volume",
        "Density = Mass ÷ Volume",
        "Volume = Mass ÷ Density",
        "For equal volumes, higher density means higher mass.",
      ]}
      questions={questions}
      initialSharedValues={initialSharedValues}
      renderSharedValuesSummary={renderSharedValuesSummary}
    />
  );
};

export default VolumeDensity;