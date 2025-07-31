/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import MultiStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';
interface CombinedShapeVisualizerProps {
  step: MultiStepQuestion;
  sharedValues: { [key: string]: any };
}

const CombinedShapeVisualizer: React.FC<CombinedShapeVisualizerProps> = () => {

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
          <li>Semicircle Radius (r) = 3 cm</li>
        </ul>
      </div>
    </div>
  );
};

const combinedPerimeterSteps: MultiStepQuestion[] = [
  {
    id: 'dimensions_given',
    question: "A shape is made by attaching a semicircle to one side of a rectangle. The rectangle has a length of 10 cm and a width of 6 cm. The width of the rectangle is also the diameter of the semicircle. What is the radius (r) of the semicircle?",
    questionType: 'text',
    options: ["3 cm", "6 cm", "10 cm", "12 cm"],
    optionType: 'text',
    correct: 0, // Index of "3 cm"
    explanation: `The diameter of the semicircle is equal to the width of the rectangle.
Diameter $ d = 6 \\, \\text{cm} $
The radius is half the diameter.
$ r = \\frac{d}{2} = \\frac{6}{2} = 3 \\, \\text{cm} $`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer, // Attach the visualizer to this step
  },
  {
    id: 'semicircle_perimeter',
    question: "Calculate the perimeter of the semicircular part (the curved edge only). Use $ \\pi \\approx 3.14 $.",
    questionType: 'text',
    options: ["9.42 cm", "18.84 cm", "3.14 cm", "6 cm"],
    optionType: 'text',
    correct: 0, // Index of "9.42 cm"
    explanation: `The perimeter (arc length) of a semicircle is half the circumference of a full circle.
$ \\text{Arc Length} = \\frac{1}{2} \\times 2\\pi r = \\pi r $
Using $ r = 3 \\, \\text{cm} $ and $ \\pi \\approx 3.14 $:
$ \\text{Arc Length} = 3.14 \\times 3 = 9.42 \\, \\text{cm} $`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer, // Attach the visualizer to this step
  },
  {
    id: 'rectangle_parts',
    question: "Which sides of the rectangle contribute to the outer perimeter of the combined shape? (The side where the semicircle is attached is now internal).",
    questionType: 'text',
    options: [
      "Length (10 cm) and Width (6 cm)",
      "Two Lengths (10 cm each) and one Width (6 cm)",
      "One Length (10 cm) and two Widths (6 cm each)",
      "Two Lengths (10 cm each) and two Widths (6 cm each)"
    ],
    optionType: 'text',
    correct: 2, // Index of "One Length (10 cm) and two Widths (6 cm each)"
    explanation: `The outer perimeter includes:
- The full length of the rectangle on the side opposite the semicircle: $ 10 \\, \\text{cm} $
- The two widths of the rectangle (the ends): $ 6 \\, \\text{cm} $ each
The length where the semicircle is attached is internal and not part of the outer perimeter.`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer, // Attach the visualizer to this step
  },
  {
    id: 'rectangle_perimeter_calc',
    question: "Calculate the total length of the outer rectangle sides identified in the previous step.",
    questionType: 'text',
    options: ["16 cm", "22 cm", "32 cm", "26 cm"],
    optionType: 'text',
    correct: 1, // Index of "22 cm"
    explanation: `Add the lengths of the outer rectangle sides:
$ 1 \\times \\text{Length} + 2 \\times \\text{Width} $
$ = 10 + (2 \\times 6) $
$ = 10 + 12 $
$ = 22 \\, \\text{cm} $`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer, // Attach the visualizer to this step
  },
  {
    id: 'final_combined_perimeter',
    question: "What is the total perimeter of the combined shape? Add the semicircle arc length and the outer rectangle sides length.",
    questionType: 'text',
    options: ["31.42 cm", "35.7 cm", "28.56 cm", "41.42 cm"],
    optionType: 'text',
    correct: 0, // Index of "31.42 cm"
    explanation: `Combine the results from the previous steps:
1.  Perimeter of semicircular arc: $ 9.42 \\, \\text{cm} $
2.  Perimeter of outer rectangle sides: $ 22 \\, \\text{cm} $
$ \\text{Total Perimeter} = 9.42 + 22 = 31.42 \\, \\text{cm} $`,
    explanationType: 'text',
    CustomContentComponent: CombinedShapeVisualizer, // Attach the visualizer to this step
  }
];

const initialSharedValues = {
  rectangleLength: 10, // cm
  rectangleWidth: 6,   // cm
};

const renderSharedValuesSummary = (sharedValues: { [key: string]: any }) => {
  return (
    <ul className="list-disc list-inside text-xs space-y-1">
      <li>Rectangle Length: {sharedValues.rectangleLength} cm</li>
      <li>Rectangle Width: {sharedValues.rectangleWidth} cm</li>
    </ul>
  );
};

const CombinedShapePerimeters: React.FC = () => {
  return (
    <MultiStepInteractiveComponent
      title="Combined Shape Perimeters"
      icon="📐" // Triangular Ruler emoji
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
      steps={combinedPerimeterSteps}
      initialSharedValues={initialSharedValues}
      renderSharedValuesSummary={renderSharedValuesSummary}
    />
  );
};

export default CombinedShapePerimeters;