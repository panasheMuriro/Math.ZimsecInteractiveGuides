/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStep, MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

// --- Visualizer Components ---

interface CombinedShapeVisualizerProps {
  step: MultiStep;
  sharedValues: { [key: string]: any };
}

// Visualizer for Rectangle + Semicircle on top (Question 1)
const CombinedShapeVisualizer1: React.FC<CombinedShapeVisualizerProps> = () => {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="relative w-full h-44 flex items-center justify-center mb-3 px-2">
        <svg viewBox="-15 -15 230 140" className="w-full h-full max-w-[280px]" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          {/* Rectangle */}
          <rect x="40" y="30" width="120" height="60" fill="white" stroke="gray" strokeWidth="2" />
          {/* Semicircle on top */}
          <path d="M 40 30 A 60 60 0 0 1 160 30" fill="white" stroke="gray" strokeWidth="2" />
          {/* Labels */}
          <text x="100" y="98" textAnchor="middle" className="fill-black font-bold text-xs">l</text>
          <text x="32" y="60" textAnchor="end" className="fill-black font-bold text-xs">w</text>
          <text x="168" y="60" textAnchor="start" className="fill-black font-bold text-xs">w</text>
          <line x1="100" y1="30" x2="160" y2="30" stroke="red" strokeWidth="1" />
          <text x="130" y="25" textAnchor="middle" className="fill-red-500 font-bold text-xs">r</text>
        </svg>
      </div>
      <div className=" text-center mb-2">
        <p className="font-semibold text-sm">Given Dimensions (Q1):</p>
        <ul className="list-disc list-inside text-xs">
          <li>Rectangle Length (l) = 10 cm</li>
          <li>Rectangle Width (w) = 6 cm</li>
          <li>Semicircle Radius (r) = 3 cm</li>
        </ul>
      </div>
    </div>
  );
};

// Visualizer for Square + Quarter Circle (Question 2)
const CombinedShapeVisualizer2: React.FC<CombinedShapeVisualizerProps> = () => {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="relative w-full h-44 flex items-center justify-center mb-3 px-2">
        <svg viewBox="-15 -15 150 150" className="w-full h-full max-w-[280px]" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          {/* Square */}
          <rect x="20" y="20" width="80" height="80" fill="white" stroke="gray" strokeWidth="2" />
          {/* Quarter Circle in top-right corner */}
          <path d="M 100 20 A 80 80 0 0 1 20 100" fill="white" stroke="gray" strokeWidth="2" />
          {/* Labels */}
          <text x="60" y="108" textAnchor="middle" className="fill-black font-bold text-xs">s</text>
          <text x="15" y="60" textAnchor="end" className="fill-black font-bold text-xs">s</text>
          <text x="108" y="60" textAnchor="start" className="fill-black font-bold text-xs">s</text>
          <line x1="100" y1="20" x2="20" y2="100" stroke="red" strokeWidth="1" />
          <text x="70" y="45" textAnchor="middle" className="fill-red-500 font-bold text-xs">r</text>
        </svg>
      </div>
      <div className=" text-center mb-2">
        <p className="font-semibold text-sm">Given Dimensions (Q2):</p>
        <ul className="list-disc list-inside text-xs">
          <li>Square Side (s) = 8 cm</li>
          <li>Quarter Circle Radius (r) = 8 cm</li>
        </ul>
      </div>
    </div>
  );
};

// Visualizer for Rectangle + Two Semicircles (Stadium) (Question 3)
const CombinedShapeVisualizer3: React.FC<CombinedShapeVisualizerProps> = () => {
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
      <div className=" text-center mb-2">
        <p className="font-semibold text-sm">Given Dimensions (Q3):</p>
        <ul className="list-disc list-inside text-xs">
          <li>Rectangle Length (l) = 12 cm</li>
          <li>Rectangle Width (w) = 4 cm</li>
          <li>Semicircle Radius (r) = 2 cm</li>
        </ul>
      </div>
    </div>
  );
};

// --- Multi-Step Question Data ---

// --- Question 1: Rectangle + Semicircle on top (Original) ---
const combinedPerimeterSteps1: MultiStep[] = [
  {
    id: 'dimensions_given_1',
    question: "A shape is made by attaching a semicircle to one side of a rectangle. The rectangle has a length of 10 cm and a width of 6 cm. The width of the rectangle is also the diameter of the semicircle. What is the radius (r) of the semicircle?",
    questionType: 'text',
    options: ["3 cm", "6 cm", "10 cm", "12 cm"],
    optionType: 'text',
    correct: 0,
    explanation: `The diameter of the semicircle is equal to the width of the rectangle.
Diameter $ d = 6 \\, \\text{cm} $
The radius is half the diameter.
$ r = \\frac{d}{2} = \\frac{6}{2} = 3 \\, \\text{cm} $`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer1,
  },
  {
    id: 'semicircle_perimeter_1',
    question: "Calculate the perimeter of the semicircular part (the curved edge only). Use $ \\pi \\approx 3.14 $.",
    questionType: 'text',
    options: ["9.42 cm", "18.84 cm", "3.14 cm", "6 cm"],
    optionType: 'text',
    correct: 0,
    explanation: `The perimeter (arc length) of a semicircle is half the circumference of a full circle.
$ \\text{Arc Length} = \\frac{1}{2} \\times 2\\pi r = \\pi r $
Using $ r = 3 \\, \\text{cm} $ and $ \\pi \\approx 3.14 $:
$ \\text{Arc Length} = 3.14 \\times 3 = 9.42 \\, \\text{cm} $`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer1,
  },
  {
    id: 'rectangle_parts_1',
    question: "Which sides of the rectangle contribute to the outer perimeter of the combined shape? (The side where the semicircle is attached is now internal).",
    questionType: 'text',
    options: [
      "Length (10 cm) and Width (6 cm)",
      "Two Lengths (10 cm each) and one Width (6 cm)",
      "One Length (10 cm) and two Widths (6 cm each)",
      "Two Lengths (10 cm each) and two Widths (6 cm each)"
    ],
    optionType: 'text',
    correct: 2,
    explanation: `The outer perimeter includes:
- The full length of the rectangle on the side opposite the semicircle: $ 10 \\, \\text{cm} $
- The two widths of the rectangle (the ends): $ 6 \\, \\text{cm} $ each
The length where the semicircle is attached is internal and not part of the outer perimeter.`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer1,
  },
  {
    id: 'rectangle_perimeter_calc_1',
    question: "Calculate the total length of the outer rectangle sides identified in the previous step.",
    questionType: 'text',
    options: ["16 cm", "22 cm", "32 cm", "26 cm"],
    optionType: 'text',
    correct: 1,
    explanation: `Add the lengths of the outer rectangle sides:
$ 1 \\times \\text{Length} + 2 \\times \\text{Width} $
$ = 10 + (2 \\times 6) $
$ = 10 + 12 $
$ = 22 \\, \\text{cm} $`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer1,
  },
  {
    id: 'final_combined_perimeter_1',
    question: "What is the total perimeter of the combined shape? Add the semicircle arc length and the outer rectangle sides length.",
    questionType: 'text',
    options: ["31.42 cm", "35.7 cm", "28.56 cm", "41.42 cm"],
    optionType: 'text',
    correct: 0,
    explanation: `Combine the results from the previous steps:
1.  Perimeter of semicircular arc: $ 9.42 \\, \\text{cm} $
2.  Perimeter of outer rectangle sides: $ 22 \\, \\text{cm} $
$ \\text{Total Perimeter} = 9.42 + 22 = 31.42 \\, \\text{cm} $`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer1,
  }
];

// --- Question 2: Square + Quarter Circle ---
const combinedPerimeterSteps2: MultiStep[] = [
  {
    id: 'dimensions_given_2',
    question: "A shape is a square with a side length of 8 cm. A quarter circle is attached to one of its corners, with the square's side as the radius. What is the arc length of the quarter circle? Use $ \\pi \\approx 3.14 $.",
    questionType: 'text',
    options: ["6.28 cm", "12.56 cm", "3.14 cm", "18.84 cm"],
    optionType: 'text',
    correct: 0,
    explanation: `The perimeter (arc length) of a quarter circle is one-fourth the circumference of a full circle.
$ \\text{Arc Length} = \\frac{1}{4} \\times 2\\pi r = \\frac{\\pi r}{2} $
Using $ r = 8 \\, \\text{cm} $ and $ \\pi \\approx 3.14 $:
$ \\text{Arc Length} = \\frac{3.14 \\times 8}{2} = \\frac{25.12}{2} = 12.56 \\, \\text{cm} $. Wait, let's recheck the options. The arc length is $\\frac{1}{4}$ of the full circumference $2\\pi r$. $C = 2 \\times 3.14 \\times 8 = 50.24$. Arc length = $50.24 / 4 = 12.56$. The correct option is 12.56 cm.`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer2,
  },
  {
    id: 'square_parts_2',
    question: "How many full sides of the original square contribute to the outer perimeter of the combined shape? (One corner is replaced by the quarter circle arc).",
    questionType: 'text',
    options: ["1", "2", "3", "4"],
    optionType: 'text',
    correct: 2, // Two full sides remain
    explanation: `When a quarter circle replaces one corner, it removes two half-sides. Effectively, two full sides of the square remain as part of the outer perimeter.`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer2,
  },
  {
    id: 'square_perimeter_calc_2',
    question: "Calculate the total length of the full square sides that contribute to the outer perimeter.",
    questionType: 'text',
    options: ["8 cm", "16 cm", "24 cm", "32 cm"],
    optionType: 'text',
    correct: 1, // 2 sides * 8 cm
    explanation: `Two full sides contribute.
$ \\text{Length} = 2 \\times \\text{side length} = 2 \\times 8 = 16 \\, \\text{cm} $.`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer2,
  },
  {
    id: 'final_combined_perimeter_2',
    question: "What is the total perimeter of this combined shape? Add the arc length and the length of the full square sides.",
    questionType: 'text',
    options: ["22.28 cm", "28.56 cm", "19.14 cm", "25.42 cm"],
    optionType: 'text',
    correct: 1, // 12.56 (arc) + 16 (sides)
    explanation: `Combine the results:
1.  Perimeter of quarter circle arc: $ 12.56 \\, \\text{cm} $
2.  Perimeter of outer square sides: $ 16 \\, \\text{cm} $
$ \\text{Total Perimeter} = 12.56 + 16 = 28.56 \\, \\text{cm} $.`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer2,
  }
];

// --- Question 3: Rectangle + Two Semicircles (Stadium) ---
const combinedPerimeterSteps3: MultiStep[] = [
  {
    id: 'dimensions_given_3',
    question: "A shape is a rectangle with a length of 12 cm and a width of 4 cm. A semicircle is attached to each end (width sides). What is the radius of each semicircle?",
    questionType: 'text',
    options: ["2 cm", "4 cm", "6 cm", "8 cm"],
    optionType: 'text',
    correct: 0, // Width is diameter, so radius is 4/2 = 2
    explanation: `The diameter of each semicircle is equal to the width of the rectangle.
Diameter $ d = 4 \\, \\text{cm} $
The radius is half the diameter.
$ r = \\frac{d}{2} = \\frac{4}{2} = 2 \\, \\text{cm} $.`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer3,
  },
  {
    id: 'semicircles_perimeter_3',
    question: "What is the combined perimeter of the two semicircular parts (the two curved edges)? Use $ \\pi \\approx 3.14 $.",
    questionType: 'text',
    options: ["12.56 cm", "6.28 cm", "25.12 cm", "3.14 cm"],
    optionType: 'text',
    correct: 0, // Two semicircles = one full circle circumference
    explanation: `The two semicircles together form the circumference of one full circle.
$ \\text{Circumference} = 2\\pi r $
Using $ r = 2 \\, \\text{cm} $ and $ \\pi \\approx 3.14 $:
$ \\text{Circumference} = 2 \\times 3.14 \\times 2 = 12.56 \\, \\text{cm} $.`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer3,
  },
  {
    id: 'rectangle_parts_3',
    question: "Which sides of the rectangle contribute to the outer perimeter of this combined shape? (The width sides are now internal, covered by semicircles).",
    questionType: 'text',
    options: [
      "Length (12 cm) and Width (4 cm)",
      "Two Lengths (12 cm each) and one Width (4 cm)",
      "Two Lengths (12 cm each)",
      "One Length (12 cm) and two Widths (4 cm each)"
    ],
    optionType: 'text',
    correct: 2, // Only the two lengths
    explanation: `The outer perimeter includes only the two lengths of the rectangle. The width sides are internal because they are replaced by the semicircles.`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer3,
  },
  {
    id: 'rectangle_perimeter_calc_3',
    question: "Calculate the total length of the outer rectangle sides identified in the previous step.",
    questionType: 'text',
    options: ["12 cm", "16 cm", "24 cm", "32 cm"],
    optionType: 'text',
    correct: 2, // 2 lengths * 12 cm
    explanation: `Add the lengths of the outer rectangle sides:
$ 2 \\times \\text{Length} $
$ = 2 \\times 12 $
$ = 24 \\, \\text{cm} $.`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer3,
  },
  {
    id: 'final_combined_perimeter_3',
    question: "What is the total perimeter of this stadium-shaped combined figure? Add the full circle circumference and the outer rectangle sides length.",
    questionType: 'text',
    options: ["36.56 cm", "30.28 cm", "39.7 cm", "41.12 cm"],
    optionType: 'text',
    correct: 0, // 12.56 (circumference) + 24 (lengths)
    explanation: `Combine the results:
1.  Perimeter of two semicircular arcs (full circle): $ 12.56 \\, \\text{cm} $
2.  Perimeter of outer rectangle sides: $ 24 \\, \\text{cm} $
$ \\text{Total Perimeter} = 12.56 + 24 = 36.56 \\, \\text{cm} $.`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer3,
  }
];

// --- Combine all questions into an array ---
const questions: MultiStepQuestion[] = [
  {
    id: 'combined_perimeter_calculation_1',
    title: 'Rectangle + Semicircle Perimeter',
    steps: combinedPerimeterSteps1
  },
  {
    id: 'combined_perimeter_calculation_2',
    title: 'Square + Quarter Circle Perimeter',
    steps: combinedPerimeterSteps2
  },
  {
    id: 'combined_perimeter_calculation_3',
    title: 'Stadium Shape Perimeter',
    steps: combinedPerimeterSteps3
  }
];

// --- Initial Shared Values and Summary Renderer (Generic) ---
const initialSharedValues = {
  // These can be updated by steps if needed, but for this example, they are static per question
  // We can use shared values to pass dimensions if questions were dynamic
  // For now, dimensions are fixed in the visualizers.
};

const renderSharedValuesSummary = () => {
  // Since dimensions are fixed per question, the summary can be generic or omitted
  // Or list static dimensions if needed
  return (
    <ul className="list-disc list-inside text-xs space-y-1">
      <li>Dimensions are specific to each shape.</li>
      <li>See each question's visualizer for details.</li>
    </ul>
  );
};

// --- Main Component ---
const CombinedShapePerimeters: React.FC = () => {
  return (
    <MultipleStepInteractiveComponent
      title="Combined Shape Perimeters"
      icon="📐"
      // theme is unused due to Neubrutalism styling in the template
      theme={{
        from: "from-purple-600",
        to: "to-indigo-700",
        button: "bg-indigo-500",
        buttonHover: "hover:bg-indigo-400",
      }}
      rulesTitle="Perimeter Calculation Steps:"
      rules={[
        "Trace the complete outer boundary.",
        "Identify each outer edge section (line, arc).",
        "Calculate the length of each outer section.",
        "Sum all outer edge lengths.",
        "**Important:** Exclude internal boundaries.",
      ]}
      questions={questions}
      initialSharedValues={initialSharedValues}
      renderSharedValuesSummary={renderSharedValuesSummary}
    />
  );
};

export default CombinedShapePerimeters;