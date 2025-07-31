/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStep, MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

// --- Visualizer Component ---
interface CombinedAreaVisualizerProps {
  step: MultiStep; // Use MultiStep for individual steps
  sharedValues: { [key: string]: any };
}

const CombinedAreaVisualizer: React.FC<CombinedAreaVisualizerProps> = () => {
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
        <p className="font-semibold text-sm">Given Dimensions:</p>
        <ul className="list-disc list-inside text-xs">
          <li>Rectangle Length (l) = 10 cm</li>
          <li>Rectangle Width (w) = 6 cm</li>
          <li>Semicircle Radius (r) = 4 cm</li>
        </ul>
      </div>
    </div>
  );
};

const combinedAreaSteps: MultiStep[] = [ // Use MultiStep[] for the array of steps
  {
    id: 'identify_shapes',
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
    CustomContentComponent: CombinedAreaVisualizer,
  },
  {
    id: 'rectangle_area',
    question: "Calculate the area of the rectangular part.",
    questionType: 'text',
    options: ["60 cm²", "40 cm²", "36 cm²", "24 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `The area of a rectangle is calculated using the formula:\n $ A_{\\text{rectangle}} = \\text{length} \\times \\text{width} $\n Substituting the given values:\n $ A_{\\text{rectangle}} = 10 \\times 6 = 60 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: CombinedAreaVisualizer,
  },
  {
    id: 'semicircle_area',
    question: "Calculate the area of the semicircular part. Use $\\pi \\approx 3.14$ and $ r = 4 \\, \\text{cm} $.",
    questionType: 'text',
    options: ["25.13 cm²", "50.27 cm²", "12.57 cm²", "16 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `The area of a circle is $ \\pi r^2 $. The area of a semicircle is half of that.\n $ A_{\\text{semicircle}} = \\frac{1}{2} \\pi r^2 $\n Substituting the given values:\n $ A_{\\text{semicircle}} = \\frac{1}{2} \\times 3.14 \\times 4^2 $\n $ A_{\\text{semicircle}} = \\frac{1}{2} \\times 3.14 \\times 16 $\n $ A_{\\text{semicircle}} = \\frac{1}{2} \\times 50.27 $\n $ A_{\\text{semicircle}} = 25.13 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: CombinedAreaVisualizer,
  },
  {
    id: 'total_area',
    question: "What is the total area of the combined shape? Add the areas of the rectangle and the semicircle.",
    questionType: 'text',
    options: ["85.13 cm²", "95.13 cm²", "75.13 cm²", "110.27 cm²"],
    optionType: 'text',
    correct: 0,
    explanation: `To find the total area of the combined, non-overlapping shapes, add their individual areas:\n $ A_{\\text{total}} = A_{\\text{rectangle}} + A_{\\text{semicircle}} $\n $ A_{\\text{total}} = 60 + 25.13 = 85.13 \\, \\text{cm}^2 $`,
    explanationType: 'text',
    CustomContentComponent: CombinedAreaVisualizer,
  },
  {
    id: 'concept_cutout',
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


const questions: MultiStepQuestion[] = [ // Use MultiStepQuestion[] for the array of questions
  {
    id: 'combined_area_calculation', // Unique ID for the question group
    title: 'Calculate Combined Area', // Title for the question group
    steps: combinedAreaSteps // The array of steps belonging to this question
  }
];

const initialSharedValues = {
  rectangleLength: 10,
  rectangleWidth: 6,
  semiCircleRadius: 4,
};

const renderSharedValuesSummary = (sharedValues: { [key: string]: any }) => {
  return (
    <ul className="list-disc list-inside text-xs space-y-1">
      <li>Rectangle Length: {sharedValues.rectangleLength} cm</li>
      <li>Rectangle Width: {sharedValues.rectangleWidth} cm</li>
      <li>Semicircle Radius: {sharedValues.semiCircleRadius} cm</li>
    </ul>
  );
};
// --- End Shared Values ---

// --- Main Component ---
const CombinedShapeAreas: React.FC = () => {
  return (
    <MultipleStepInteractiveComponent
      title="Combined Shape Areas"
      icon="📐"
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
      questions={questions} // Use the new 'questions' prop instead of 'steps'
      initialSharedValues={initialSharedValues}
      renderSharedValuesSummary={renderSharedValuesSummary}
    />
  );
};

export default CombinedShapeAreas;
// --- End Main Component ---