/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStep, MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

// --- Visualizer Components ---

interface CombinedAreaVisualizerProps {
  step: MultiStep;
  sharedValues: { [key: string]: any };
}

// Visualizer for Rectangle + Semicircle on top (Question 1)
const CombinedAreaVisualizer1: React.FC<CombinedAreaVisualizerProps> = () => {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="relative w-full h-44 flex items-center justify-center mb-3 px-2">
        <svg viewBox="-15 -15 230 140" className="w-full h-full max-w-[280px]" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="30" width="120" height="60" fill="white" stroke="gray" strokeWidth="2" />
          <path d="M 40 30 A 60 60 0 0 1 160 30" fill="white" stroke="gray" strokeWidth="2" />
          <text x="100" y="98" textAnchor="middle" className="fill-black font-bold text-xs">l</text>
          <text x="32" y="60" textAnchor="end" className="fill-black font-bold text-xs">w</text>
          <text x="168" y="60" textAnchor="start" className="fill-black font-bold text-xs">w</text>
          <line x1="100" y1="30" x2="160" y2="30" stroke="red" strokeWidth="1" />
          <text x="130" y="25" textAnchor="middle" className="fill-red-500 font-bold text-xs">r</text>
        </svg>
      </div>
      <div className="text-white text-center mb-2">
        <p className="font-semibold text-sm">Given Dimensions (Q1):</p>
        <ul className="list-disc list-inside text-xs">
          <li>Rectangle Length (l) = 10 cm</li>
          <li>Rectangle Width (w) = 6 cm</li>
          <li>Semicircle Radius (r) = 4 cm</li>
        </ul>
      </div>
    </div>
  );
};

// Visualizer for Square + Quarter Circle Cut Out (Question 2)
const CombinedAreaVisualizer2: React.FC<CombinedAreaVisualizerProps> = () => {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="relative w-full h-44 flex items-center justify-center mb-3 px-2">
        <svg viewBox="-15 -15 150 150" className="w-full h-full max-w-[280px]" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          {/* Square */}
          <rect x="20" y="20" width="80" height="80" fill="white" stroke="gray" strokeWidth="2" />
          {/* Quarter Circle Cut-out in top-right corner (dashed line) */}
          <path d="M 100 20 A 80 80 0 0 1 20 100" fill="none" stroke="gray" strokeWidth="2" strokeDasharray="5,5"/>
          {/* Labels */}
          <text x="60" y="108" textAnchor="middle" className="fill-black font-bold text-xs">s</text>
          <text x="15" y="60" textAnchor="end" className="fill-black font-bold text-xs">s</text>
          <text x="108" y="60" textAnchor="start" className="fill-black font-bold text-xs">s</text>
          <line x1="100" y1="20" x2="20" y2="100" stroke="red" strokeWidth="1" />
          <text x="70" y="45" textAnchor="middle" className="fill-red-500 font-bold text-xs">r</text>
          {/* Cut-out indicator */}
          <text x="80" y="35" textAnchor="middle" className="fill-red-500 font-bold text-xs">Cut-out</text>
        </svg>
      </div>
      <div className="text-white text-center mb-2">
        <p className="font-semibold text-sm">Given Dimensions (Q2):</p>
        <ul className="list-disc list-inside text-xs">
          <li>Square Side (s) = 10 cm</li>
          <li>Quarter Circle Radius (r) = 10 cm</li>
        </ul>
      </div>
    </div>
  );
};

// Visualizer for Rectangle + Two Semicircles (Stadium) (Question 3)
const CombinedAreaVisualizer3: React.FC<CombinedAreaVisualizerProps> = () => {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="relative w-full h-44 flex items-center justify-center mb-3 px-2">
        <svg viewBox="-15 -15 250 130" className="w-full h-full max-w-[280px]" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          {/* Rectangle */}
          <rect x="50" y="30" width="100" height="40" fill="white" stroke="gray" strokeWidth="2" />
          {/* Left Semicircle */}
          <path d="M 50 30 A 20 20 0 1 0 50 70" fill="white" stroke="gray" strokeWidth="2" />
          {/* Right Semicircle */}
          <path d="M 150 30 A 20 20 0 1 1 150 70" fill="white" stroke="gray" strokeWidth="2" />
          {/* Labels */}
          <text x="100" y="78" textAnchor="middle" className="fill-black font-bold text-xs">l</text>
          <text x="42" y="50" textAnchor="end" className="fill-black font-bold text-xs">w</text>
          <text x="158" y="50" textAnchor="start" className="fill-black font-bold text-xs">w</text>
          <line x1="50" y1="30" x2="50" y2="70" stroke="red" strokeWidth="1" />
          <text x="35" y="50" textAnchor="end" className="fill-red-500 font-bold text-xs">r</text>
        </svg>
      </div>
      <div className="text-white text-center mb-2">
        <p className="font-semibold text-sm">Given Dimensions (Q3):</p>
        <ul className="list-disc list-inside text-xs">
          <li>Rectangle Length (l) = 12 cm</li>
          <li>Rectangle Width (w) = 6 cm</li>
          <li>Semicircle Radius (r) = 3 cm</li>
        </ul>
      </div>
    </div>
  );
};

// --- Multi-Step Question Data ---

// --- Question 1: Rectangle + Semicircle on top (Original) ---
const combinedAreaSteps1: MultiStep[] = [
  {
    id: 'identify_shapes_1',
    question: "Identify the basic shapes that make up this combined figure.",
    questionType: 'text',
    options: [
      "Rectangle and Circle",
      "Rectangle and Semicircle",
      "Square and Semicircle",
      "Rectangle and Triangle"
    ],
    optionType: 'text',
    correct: 1,
    explanation: `The combined shape consists of:
- A rectangle forming the base.
- A semicircle attached to one of the rectangle's sides.`,
    explanationType: 'text',
    CustomContentComponent: CombinedAreaVisualizer1,
  },
  {
    id: 'rectangle_area_1',
    question: "Calculate the area of the rectangular part.",
    questionType: 'text',
    options: ["60 cm²", "40 cm²", "36 cm²", "24 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `The area of a rectangle is calculated using the formula:\n $ A_{\\text{rectangle}} = \\text{length} \\times \\text{width} $\n Substituting the given values:\n $ A_{\\text{rectangle}} = 10 \\times 6 = 60 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: CombinedAreaVisualizer1,
  },
  {
    id: 'semicircle_area_1',
    question: "Calculate the area of the semicircular part. Use $\\pi \\approx 3.14$ and $ r = 4 \\, \\text{cm} $.",
    questionType: 'text',
    options: ["25.13 cm²", "50.27 cm²", "12.57 cm²", "16 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `The area of a circle is $ \\pi r^2 $. The area of a semicircle is half of that.\n $ A_{\\text{semicircle}} = \\frac{1}{2} \\pi r^2 $\n Substituting the given values:\n $ A_{\\text{semicircle}} = \\frac{1}{2} \\times 3.14 \\times 4^2 $\n $ A_{\\text{semicircle}} = \\frac{1}{2} \\times 3.14 \\times 16 $\n $ A_{\\text{semicircle}} = \\frac{1}{2} \\times 50.27 $\n $ A_{\\text{semicircle}} = 25.13 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: CombinedAreaVisualizer1,
  },
  {
    id: 'total_area_1',
    question: "What is the total area of the combined shape? Add the areas of the rectangle and the semicircle.",
    questionType: 'text',
    options: ["85.13 cm²", "95.13 cm²", "75.13 cm²", "110.27 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `To find the total area of the combined, non-overlapping shapes, add their individual areas:\n $ A_{\\text{total}} = A_{\\text{rectangle}} + A_{\\text{semicircle}} $\n $ A_{\\text{total}} = 60 + 25.13 = 85.13 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: CombinedAreaVisualizer1,
  },
  {
    id: 'concept_cutout_1',
    question: "If the combined shape had a rectangular cut-out instead of a semicircle added, how would you calculate the total area?",
    questionType: 'text',
    options: [
      "Add the area of the cut-out to the main shape",
      "Multiply the area of the main shape by the area of the cut-out",
      "Subtract the area of the cut-out from the main shape",
      "Ignore the cut-out"
    ],
    optionType: 'text',
    correct: 2,
    explanation: `When a shape has a cut-out (a hole), you calculate the area of the main outer shape and then subtract the area of the cut-out shape to get the remaining area.`,
    explanationType: 'text',
    // No CustomContentComponent for this step as it's conceptual
  }
];

// --- Question 2: Square + Quarter Circle Cut Out ---
const combinedAreaSteps2: MultiStep[] = [
  {
    id: 'identify_shapes_2',
    question: "This shape is a square with a quarter circle cut out from one corner. How do you calculate its total area?",
    questionType: 'text',
    options: [
      "Add the area of the square and the quarter circle",
      "Subtract the area of the quarter circle from the area of the square",
      "Multiply the area of the square by the area of the quarter circle",
      "Divide the area of the square by the area of the quarter circle"
    ],
    optionType: 'text',
    correct: 1,
    explanation: `Since a part of the square is removed (the quarter circle), you subtract the area of the cut-out from the area of the whole square to get the remaining area.`,
    explanationType: 'text',
    CustomContentComponent: CombinedAreaVisualizer2,
  },
  {
    id: 'square_area_2',
    question: "Calculate the area of the original square with side length 10 cm.",
    questionType: 'text',
    options: ["100 cm²", "40 cm²", "20 cm²", "50 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `The area of a square is calculated using the formula:\n $ A_{\\text{square}} = \\text{side} \\times \\text{side} $\n Substituting the given value:\n $ A_{\\text{square}} = 10 \\times 10 = 100 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: CombinedAreaVisualizer2,
  },
  {
    id: 'quarter_circle_area_2',
    question: "Calculate the area of the quarter circle cut-out. Use $\\pi \\approx 3.14$ and $ r = 10 \\, \\text{cm} $.",
    questionType: 'text',
    options: ["78.54 cm²", "314.16 cm²", "157.08 cm²", "39.27 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `The area of a circle is $ \\pi r^2 $. The area of a quarter circle is one-fourth of that.\n $ A_{\\text{quarter circle}} = \\frac{1}{4} \\pi r^2 $\n Substituting the given values:\n $ A_{\\text{quarter circle}} = \\frac{1}{4} \\times 3.14 \\times 10^2 $\n $ A_{\\text{quarter circle}} = \\frac{1}{4} \\times 3.14 \\times 100 $\n $ A_{\\text{quarter circle}} = \\frac{1}{4} \\times 314.16 $\n $ A_{\\text{quarter circle}} = 78.54 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: CombinedAreaVisualizer2,
  },
  {
    id: 'total_area_2',
    question: "What is the total area of the remaining shape after the quarter circle is cut out?",
    questionType: 'text',
    options: ["21.46 cm²", "121.46 cm²", "178.54 cm²", "22.14 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `Subtract the area of the cut-out from the area of the square:\n $ A_{\\text{remaining}} = A_{\\text{square}} - A_{\\text{quarter circle}} $\n $ A_{\\text{remaining}} = 100 - 78.54 = 21.46 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: CombinedAreaVisualizer2,
  }
];

// --- Question 3: Rectangle + Two Semicircles (Stadium) ---
const combinedAreaSteps3: MultiStep[] = [
  {
    id: 'identify_shapes_3',
    question: "This shape is a rectangle with a semicircle on each end. What simpler shape do the two semicircles form together?",
    questionType: 'text',
    options: [
      "A larger semicircle",
      "A full circle",
      "An ellipse",
      "Another rectangle"
    ],
    optionType: 'text',
    correct: 1,
    explanation: `Two semicircles with the same radius, placed base-to-base, form one complete circle.`,
    explanationType: 'text',
    CustomContentComponent: CombinedAreaVisualizer3,
  },
  {
    id: 'rectangle_area_3',
    question: "Calculate the area of the rectangular part.",
    questionType: 'text',
    options: ["72 cm²", "36 cm²", "48 cm²", "24 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `The area of a rectangle is calculated using the formula:\n $ A_{\\text{rectangle}} = \\text{length} \\times \\text{width} $\n Substituting the given values:\n $ A_{\\text{rectangle}} = 12 \\times 6 = 72 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: CombinedAreaVisualizer3,
  },
  {
    id: 'circle_area_3',
    question: "Calculate the total area of the two semicircular ends (which form a circle). Use $\\pi \\approx 3.14$ and $ r = 3 \\, \\text{cm} $.",
    questionType: 'text',
    options: ["28.27 cm²", "56.55 cm²", "14.14 cm²", "9.42 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `The two semicircles together form one full circle.\n The area of a circle is $ \\pi r^2 $.\n Substituting the given values:\n $ A_{\\text{circle}} = 3.14 \\times 3^2 $\n $ A_{\\text{circle}} = 3.14 \\times 9 $\n $ A_{\\text{circle}} = 28.27 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: CombinedAreaVisualizer3,
  },
  {
    id: 'total_area_3',
    question: "What is the total area of the stadium-shaped combined figure?",
    questionType: 'text',
    options: ["100.27 cm²", "80.27 cm²", "90.27 cm²", "110.27 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `Add the area of the rectangle and the area of the circle formed by the two semicircles:\n $ A_{\\text{total}} = A_{\\text{rectangle}} + A_{\\text{circle}} $\n $ A_{\\text{total}} = 72 + 28.27 = 100.27 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: CombinedAreaVisualizer3,
  }
];

// --- Combine all questions into an array ---
const questions: MultiStepQuestion[] = [
  {
    id: 'combined_area_calculation_1',
    title: 'Rectangle + Semicircle Area',
    steps: combinedAreaSteps1
  },
  {
    id: 'combined_area_calculation_2',
    title: 'Square with Cut-out Area',
    steps: combinedAreaSteps2
  },
  {
    id: 'combined_area_calculation_3',
    title: 'Stadium Shape Area',
    steps: combinedAreaSteps3
  }
];

// --- Initial Shared Values and Summary Renderer (Generic) ---
const initialSharedValues = {
  // Dimensions are now specific to each question/visualizer
};

const renderSharedValuesSummary = () => {
  // Summary can be generic or list static info if needed
  return (
    <ul className="list-disc list-inside text-xs space-y-1">
      <li>Dimensions are specific to each shape.</li>
      <li>See each question's visualizer for details.</li>
    </ul>
  );
};

// --- Main Component ---
const CombinedShapeAreas: React.FC = () => {
  return (
    <MultipleStepInteractiveComponent
      title="Combined Shape Areas"
      icon="📐"
      // theme is unused due to Neubrutalism styling in the template
      theme={{
        from: "from-green-600",
        to: "to-teal-700",
        button: "bg-teal-500",
        buttonHover: "hover:bg-teal-400",
      }}
      rulesTitle="Area Calculation Steps:"
      rules={[
        "Identify all basic shapes within the combined figure.",
        "Calculate the area of each individual shape.",
        "For adjacent shapes: Add all individual areas.",
        "For shapes with cut-outs: Subtract the cut-out area.",
        "Use consistent units throughout calculations.",
      ]}
      questions={questions}
      initialSharedValues={initialSharedValues}
      renderSharedValuesSummary={renderSharedValuesSummary}
    />
  );
};

export default CombinedShapeAreas;