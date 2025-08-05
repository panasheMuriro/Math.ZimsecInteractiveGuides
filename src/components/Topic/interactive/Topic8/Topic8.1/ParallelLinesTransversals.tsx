// // src/Components/ParallelLinesTransversals/ParallelLinesTransversalsQuiz.tsx
// import React, { useState, useEffect } from 'react';
// import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent'; // Adjust path as needed

// // --- Custom SVG Component with Corrected Labels ---
// const ParallelLinesDiagram: React.FC<{ question: QuizQuestion }> = ({ question }) => {
//   let data;
//   try {
//     data = question.id ? JSON.parse(question.id) : null;
//   } catch (e) {
//     console.error("Failed to parse question data:", e);
//     data = null;
//   }

//   if (!data) {
//     return <div className="text-center py-4">Diagram data unavailable</div>;
//   }

//   return (
//     <div className="flex justify-center mb-4">
//       <svg
//         width="100%"
//         viewBox="0 0 320 220"
//         xmlns="http://www.w3.org/2000/svg"
//         className="border rounded bg-slate-50"
//       >
//         {/* Parallel Lines */}
//         <line x1="20" y1="80" x2="300" y2="80" stroke="#1f2937" strokeWidth="4" />
//         <line x1="20" y1="160" x2="300" y2="160" stroke="#1f2937" strokeWidth="4" />

//         {/* Transversal */}
//         <line x1="60" y1="190" x2="260" y2="50" stroke="#4b5563" strokeWidth="4" />

//         {/* Angle Arcs */}
//         {/* Known Angle Arc (Red) */}
//         <path
//           d={data.knownArcPath}
//           stroke="#dc2626"
//           strokeWidth="5"
//           fill="none"
//         />
//         {/* Missing Angle Arc (Green) */}
//         <path
//           d={data.missingArcPath}
//           stroke="#059669"
//           strokeWidth="5"
//           fill="none"
//         />

//         {/* Angle Labels */}
//         <text
//           x={data.knownLabelX}
//           y={data.knownLabelY}
//           fontSize="18"
//           fontFamily="serif"
//           fill="#dc2626"
//           textAnchor="middle"
//           fontWeight="bold"
//         >
//           {data.knownAngle}°
//         </text>
//         <text
//           x={data.missingLabelX}
//           y={data.missingLabelY}
//           fontSize="18"
//           fontFamily="serif"
//           fill="#059669"
//           textAnchor="middle"
//           fontWeight="bold"
//         >
//           x = ?
//         </text>

//         {/* Angle Numbers (Reference) - Slightly dimmer and smaller */}
//         <text x="90" y="65" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">1</text>
//         <text x="130" y="65" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">2</text>
//         <text x="190" y="65" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">3</text>
//         <text x="230" y="65" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">4</text>

//         <text x="90" y="175" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">5</text>
//         <text x="130" y="175" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">6</text>
//         <text x="190" y="175" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">7</text>
//         <text x="230" y="175" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">8</text>
//       </svg>
//     </div>
//   );
// };

// // --- Main Component ---
// const ParallelLinesTransversalsQuiz: React.FC = () => {
//   const [questions, setQuestions] = useState<QuizQuestion[]>([]);
//   const [seed, setSeed] = useState<number>(Date.now());

//   const generateSingleQuestion = (): QuizQuestion => {
//     const relationships = [
//       { type: "corresponding", pairs: [[1, 5], [2, 6], [3, 7], [4, 8]] },
//       { type: "alternate interior", pairs: [[3, 6], [4, 5]] },
//       { type: "alternate exterior", pairs: [[1, 8], [2, 7]] },
//       { type: "co-interior", pairs: [[3, 5], [4, 6]] }
//     ];

//     const relationshipGroup = relationships[Math.floor(Math.random() * relationships.length)];
//     const chosenPair = relationshipGroup.pairs[Math.floor(Math.random() * relationshipGroup.pairs.length)];

//     const knownAngleNumber = chosenPair[0];
//     const missingAngleNumber = chosenPair[1];
//     const knownAngle = Math.floor(Math.random() * 120) + 30; // 30-150°

//     let missingAngle: number;
//     let explanationText: string;

//     if (relationshipGroup.type === "co-interior") {
//       missingAngle = 180 - knownAngle;
//       explanationText = `${relationshipGroup.type.charAt(0).toUpperCase() + relationshipGroup.type.slice(1)} angles are supplementary (add up to 180°).\n\nWorking:\nx = 180° - ${knownAngle}°\nx = ${missingAngle}°`;
//     } else {
//       missingAngle = knownAngle;
//       explanationText = `${relationshipGroup.type.charAt(0).toUpperCase() + relationshipGroup.type.slice(1)} angles are equal.\n\nWorking:\nx = ${knownAngle}°`;
//     }

//     // --- Corrected SVG paths and label positions ---
//     // Paths are designed to fit within the intersecting lines structure.
//     // Label positions are chosen to be clear of the lines and arcs.
//     const anglePathsAndLabels: Record<number, { path: string; labelPos: [number, number] }> = {
//       // --- Top Intersection (Angles 1-4) ---
//       1: { path: "M 100 70 A 20 20 0 0 1 120 60", labelPos: [95, 50] }, // Top-left
//       2: { path: "M 120 60 A 20 20 0 0 1 140 70", labelPos: [145, 50] }, // Top-middle-left
//       3: { path: "M 180 70 A 20 20 0 0 1 200 60", labelPos: [175, 50] }, // Top-middle-right
//       4: { path: "M 200 60 A 20 20 0 0 1 220 70", labelPos: [225, 50] }, // Top-right

//       // --- Bottom Intersection (Angles 5-8) ---
//       5: { path: "M 100 170 A 20 20 0 0 0 120 160", labelPos: [95, 190] }, // Bottom-left
//       6: { path: "M 120 160 A 20 20 0 0 0 140 170", labelPos: [145, 190] }, // Bottom-middle-left
//       7: { path: "M 180 160 A 20 20 0 0 0 200 170", labelPos: [175, 190] }, // Bottom-middle-right
//       8: { path: "M 200 170 A 20 20 0 0 0 220 160", labelPos: [225, 190] }, // Bottom-right
//     };

//     const knownArcPath = anglePathsAndLabels[knownAngleNumber]?.path || "";
//     const missingArcPath = anglePathsAndLabels[missingAngleNumber]?.path || "";
//     const [knownLabelX, knownLabelY] = anglePathsAndLabels[knownAngleNumber]?.labelPos || [0, 0];
//     const [missingLabelX, missingLabelY] = anglePathsAndLabels[missingAngleNumber]?.labelPos || [0, 0];

//     // --- Generate Options ---
//     const options = [
//       missingAngle.toString(),
//       (missingAngle === knownAngle ? (missingAngle + 10).toString() : knownAngle.toString()),
//       (180 - missingAngle).toString(),
//       (Math.abs(missingAngle - 20) > 10 ? (missingAngle - 20).toString() : (missingAngle + 15).toString()),
//     ].sort(() => 0.5 - Math.random());

//     const correctIndex = options.indexOf(missingAngle.toString());

//     // --- Store data ---
//     const questionData = {
//       knownAngle: knownAngle,
//       missingAngle: missingAngle,
//       knownAngleNumber: knownAngleNumber,
//       missingAngleNumber: missingAngleNumber,
//       relationshipType: relationshipGroup.type,
//       knownArcPath: knownArcPath,
//       missingArcPath: missingArcPath,
//       knownLabelX: knownLabelX,
//       knownLabelY: knownLabelY,
//       missingLabelX: missingLabelX,
//       missingLabelY: missingLabelY,
//     };

//     return {
//       id: JSON.stringify(questionData),
//       question: `If angle ${knownAngleNumber} is ${knownAngle}°, what is angle ${missingAngleNumber} (x)?`,
//       options: options,
//       correct: correctIndex,
//       explanation: explanationText,
//       explanationType: 'text',
//       questionType: 'text',
//       optionType: 'text',
//       CustomContentComponent: ParallelLinesDiagram,
//     };
//   };

//   useEffect(() => {
//     const initialQuestions = Array.from({ length: 5 }, () => generateSingleQuestion());
//     setQuestions(initialQuestions);
//   }, [seed]);

//   const handleReset = () => {
//     setSeed(prev => prev + 1);
//   };

//   if (questions.length === 0) {
//     return <div className="flex justify-center items-center h-screen">Loading questions...</div>;
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-4">
//       <MultipleChoiceInteractiveComponent
//         title="Parallel Lines & Transversals"
//         icon="🛤️" // Railroad tracks emoji
//         theme={{
//           from: "from-emerald-500",
//           to: "to-teal-600",
//           button: "bg-white text-teal-600",
//           buttonHover: "hover:bg-teal-50 hover:text-teal-700"
//         }}
//         rulesTitle="Key Rules:"
//         rules={[
//           "Corresponding angles are equal.",
//           "Alternate interior angles are equal.",
//           "Alternate exterior angles are equal.",
//           "Co-interior (same-side interior) angles are supplementary ($180^\\circ$)."
//         ]}
//         questions={questions}
//         onReset={handleReset}
//       />
//     </div>
//   );
// };

// export default ParallelLinesTransversalsQuiz;


/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'; // Added for custom component state
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Custom Content Component for Visualization ---
const ParallelLinesVisualization: React.FC<{ step: any; sharedValues: { [key: string]: any } }> = ({ step }) => {
  const [highlightedAngles, setHighlightedAngles] = useState<number[]>([]);

  // Effect to update highlights based on the current step ID
  useEffect(() => {
    const stepId = step.id;
    // Reset highlights first
    setHighlightedAngles([]);

    // Use setTimeout to ensure state updates after render cycle if needed,
    // though not strictly necessary here as it's triggered by prop change.
    // It's a common pattern for visual updates.
    const timer = setTimeout(() => {
      if (stepId === 'plca-definition' || stepId === 'plca-identify-pair' || stepId === 'plca-key-property') {
        // Corresponding Angles
        setHighlightedAngles([1, 5]); // Example pair
      } else if (stepId === 'plai-definition' || stepId === 'plai-identify-pair' || stepId === 'plai-key-property') {
        // Alternate Interior Angles
        setHighlightedAngles([3, 6]); // Example pair
      } else if (stepId === 'plae-definition' || stepId === 'plae-identify-pair' || stepId === 'plae-key-property') {
        // Alternate Exterior Angles
        setHighlightedAngles([1, 8]); // Example pair
      } else if (stepId === 'plci-definition' || stepId === 'plci-identify-pair' || stepId === 'plci-key-property') {
        // Co-Interior Angles
        setHighlightedAngles([3, 5]); // Example pair
      }
      // Add more conditions for other steps if visualization details change
    }, 0);

    return () => clearTimeout(timer);
  }, [step.id]);

  // SVG Dimensions and basic setup
  const svgWidth = 300;
  const svgHeight = 200;
  const lineY1 = 70;
  const lineY2 = 130;
  const transversalX1 = 30;
  const transversalX2 = svgWidth - 30;

  // Function to calculate angle positions
  // Returns [x, y] for the tip of the angle marker
  const getAnglePosition = (angleNumber: number): [number, number] => {
    const offset = 15; // Distance of angle marker from intersection
    switch (angleNumber) {
      case 1: return [transversalX1 + offset, lineY1 - offset]; // Upper left of top intersection
      case 2: return [transversalX1 + offset, lineY1 + offset]; // Lower left of top intersection
      case 3: return [transversalX2 - offset, lineY1 + offset]; // Lower right of top intersection
      case 4: return [transversalX2 - offset, lineY1 - offset]; // Upper right of top intersection
      case 5: return [transversalX1 + offset, lineY2 - offset]; // Upper left of bottom intersection
      case 6: return [transversalX1 + offset, lineY2 + offset]; // Lower left of bottom intersection
      case 7: return [transversalX2 - offset, lineY2 + offset]; // Lower right of bottom intersection
      case 8: return [transversalX2 - offset, lineY2 - offset]; // Upper right of bottom intersection
      default: return [0, 0];
    }
  };

  return (
    <div className="flex justify-center my-4">
      <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="border border-gray-300 rounded">
        {/* Parallel Lines */}
        <line x1="0" y1={lineY1} x2={svgWidth} y2={lineY1} stroke="black" strokeWidth="2" />
        <line x1="0" y1={lineY2} x2={svgWidth} y2={lineY2} stroke="black" strokeWidth="2" />

        {/* Transversal */}
        <line x1={transversalX1} y1="0" x2={transversalX2} y2={svgHeight} stroke="blue" strokeWidth="2" />

        {/* Angle Markers and Labels */}
        {/* Using simple arcs for angle markers */}
        {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => {
          const [cx, cy] = getAnglePosition(num);
          const isHighlighted = highlightedAngles.includes(num);
          const angleBase = Math.atan2(lineY2 - lineY1, transversalX2 - transversalX1); // Angle of transversal
          let startAngle, endAngle;

          // Determine arc angles based on position
          switch (num) {
            case 1: startAngle = Math.PI; endAngle = Math.PI + angleBase; break; // Upper left top
            case 2: startAngle = Math.PI + angleBase; endAngle = Math.PI * 1.5; break; // Lower left top
            case 3: startAngle = Math.PI * 1.5; endAngle = Math.PI * 2 - angleBase; break; // Lower right top
            case 4: startAngle = Math.PI * 2 - angleBase; endAngle = 0; break; // Upper right top
            case 5: startAngle = 0; endAngle = angleBase; break; // Upper left bottom
            case 6: startAngle = angleBase; endAngle = Math.PI * 0.5; break; // Lower left bottom
            case 7: startAngle = Math.PI * 0.5; endAngle = Math.PI - angleBase; break; // Lower right bottom
            case 8: startAngle = Math.PI - angleBase; endAngle = Math.PI; break; // Upper right bottom
            default: startAngle = 0; endAngle = 0;
          }

          // Calculate arc path
          const radius = 12;
          const x1 = cx + radius * Math.cos(startAngle);
          const y1 = cy + radius * Math.sin(startAngle);
          const x2 = cx + radius * Math.cos(endAngle);
          const y2 = cy + radius * Math.sin(endAngle);
          const largeArcFlag = Math.abs(endAngle - startAngle) > Math.PI ? 1 : 0;
          const sweepFlag = endAngle > startAngle ? 1 : 0;

          return (
            <g key={num}>
              <path
                d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${x2} ${y2}`}
                fill="none"
                stroke={isHighlighted ? "red" : "black"}
                strokeWidth={isHighlighted ? "3" : "1.5"}
              />
              <text
                x={cx + (radius + 5) * Math.cos((startAngle + endAngle) / 2)}
                y={cy + (radius + 5) * Math.sin((startAngle + endAngle) / 2)}
                fontSize="10"
                fill={isHighlighted ? "red" : "black"}
                textAnchor="middle"
                dominantBaseline="middle"
                fontWeight={isHighlighted ? "bold" : "normal"}
              >
                &ang;{num}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// --- Helper Function for Summary ---
const renderParallelLinesSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No angle relationships identified yet.</p>;
  }
  return (
    <ul className="space-y-2">
      {entries.map(([key, value]) => (
        <li key={key} className="flex justify-between items-center">
          <span style={{ color: '#264653' }}>{key}:</span>
          <span className="font-mono" style={{ color: '#264653' }}>{value}</span>
        </li>
      ))}
    </ul>
  );
};

// --- Multi-Step Question 1: Concept Understanding ---
const plConceptQuestion: MultiStepQuestion = {
  id: 'pl-concept',
  title: 'Understanding Parallel Lines and Transversals',
  steps: [
    {
      id: 'plc-define',
      question: "What are parallel lines?",
      questionType: 'text',
      options: [
        "Lines that intersect at one point.",
        "Lines that intersect at right angles.",
        "Lines in the same plane that never intersect.",
        "Lines that cross each other multiple times."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Parallel lines are lines that lie in the same plane and never meet, no matter how far they are extended in either direction.",
      explanationType: 'text'
    },
    {
      id: 'plc-transversal',
      question: "What is a transversal?",
      questionType: 'text',
      options: [
        "A line segment connecting two points.",
        "A line that intersects two or more other lines.",
        "A line that is perpendicular to another line.",
        "A curved line."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "A transversal is a line that crosses (intersects) two or more other lines at distinct points.",
      explanationType: 'text'
    },
    {
      id: 'plc-number-of-angles',
      question: "When a transversal cuts two lines, how many angles are formed at the intersections?",
      questionType: 'text',
      options: [
        "4 angles total",
        "6 angles total",
        "8 angles total (4 at each intersection)",
        "10 angles total"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "A transversal intersecting one line creates 4 angles. When it intersects a second line, it creates another 4 angles. This results in 8 angles in total.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Identifying Corresponding Angles ---
const plCorrespondingAnglesQuestion: MultiStepQuestion = {
  id: 'pl-corresponding',
  title: 'Identifying Corresponding Angles',
  steps: [
    {
      id: 'plca-definition',
      question: "What is the defining characteristic of corresponding angles?",
      questionType: 'text',
      options: [
        "They are on the same side of the transversal and between the parallel lines.",
        "They are on opposite sides of the transversal and between the parallel lines.",
        "They are on opposite sides of the transversal and outside the parallel lines.",
        "They are in the same relative position at each intersection."
      ],
      optionType: 'text',
      correct: 3,
      explanation: "Corresponding angles occupy the same relative position (e.g., both upper left, both lower right) where the transversal intersects the parallel lines.",
      explanationType: 'text'
    },
    {
      id: 'plca-identify-pair',
      question: "If angle 1 is in the upper left position at the first intersection, where would its corresponding angle be at the second intersection?",
      questionType: 'text',
      options: [
        "Upper left",
        "Upper right",
        "Lower left",
        "Lower right"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Its corresponding angle must also be in the upper left position relative to the transversal at the second intersection.",
      explanationType: 'text'
    },
    {
      id: 'plca-key-property',
      question: "What is the key property of corresponding angles when the lines cut by the transversal are parallel?",
      questionType: 'text',
      options: [
        "They are supplementary (add up to 180°).",
        "They are complementary (add up to 90°).",
        "They are equal.",
        "They are adjacent."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "One of the fundamental properties is that when two parallel lines are cut by a transversal, the corresponding angles formed are equal in measure.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Corresponding Angles", "Equal");
      }
    }
  ]
};

// --- Multi-Step Question 3: Identifying Alternate Interior Angles ---
const plAltInteriorAnglesQuestion: MultiStepQuestion = {
  id: 'pl-alt-interior',
  title: 'Identifying Alternate Interior Angles',
  steps: [
    {
      id: 'plai-definition',
      question: "Where are alternate interior angles located?",
      questionType: 'text',
      options: [
        "On the same side of the transversal and between the parallel lines.",
        "On opposite sides of the transversal and between the parallel lines.",
        "On opposite sides of the transversal and outside the parallel lines.",
        "In the same relative position at each intersection."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The term 'alternate' means 'on opposite sides,' and 'interior' means 'between the parallel lines.' So, these angles are on opposite sides of the transversal and inside the space between the parallel lines.",
      explanationType: 'text'
    },
    {
      id: 'plai-identify-pair',
      question: "If angle 3 is on the lower right side between the parallel lines, where would its alternate interior angle be?",
      questionType: 'text', // Corrected from 'image' to 'text'
      options: [
        "Upper left side between the lines",
        "Lower left side between the lines",
        "Upper right side between the lines",
        "Lower right side outside the lines"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "It must be on the opposite side of the transversal (upper) and still between the lines (interior). So, it's the upper left angle between the lines.",
      explanationType: 'text'
    },
    {
      id: 'plai-key-property',
      question: "What is the key property of alternate interior angles when the lines cut by the transversal are parallel?",
      questionType: 'text',
      options: [
        "They are supplementary (add up to 180°).",
        "They are complementary (add up to 90°).",
        "They are equal.",
        "They are adjacent."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "When two parallel lines are cut by a transversal, the alternate interior angles formed are equal in measure.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Alt. Interior Angles", "Equal");
      }
    }
  ]
};

// --- Multi-Step Question 4: Identifying Alternate Exterior Angles ---
const plAltExteriorAnglesQuestion: MultiStepQuestion = {
  id: 'pl-alt-exterior',
  title: 'Identifying Alternate Exterior Angles',
  steps: [
    {
      id: 'plae-definition',
      question: "Where are alternate exterior angles located?",
      questionType: 'text',
      options: [
        "On the same side of the transversal and between the parallel lines.",
        "On opposite sides of the transversal and between the parallel lines.",
        "On opposite sides of the transversal and outside the parallel lines.",
        "In the same relative position at each intersection."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The term 'alternate' means 'on opposite sides,' and 'exterior' means 'outside the parallel lines.' So, these angles are on opposite sides of the transversal and in the space outside the parallel lines.",
      explanationType: 'text'
    },
    {
      id: 'plae-identify-pair',
      question: "If angle 1 is on the upper left side outside the parallel lines, where would its alternate exterior angle be?",
      questionType: 'text',
      options: [
        "Upper left side between the lines",
        "Lower right side outside the lines",
        "Upper right side outside the lines",
        "Lower left side outside the lines"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "It must be on the opposite side of the transversal (lower) and still outside the lines (exterior). So, it's the lower right angle outside the lines.",
      explanationType: 'text'
    },
    {
      id: 'plae-key-property',
      question: "What is the key property of alternate exterior angles when the lines cut by the transversal are parallel?",
      questionType: 'text',
      options: [
        "They are supplementary (add up to 180°).",
        "They are complementary (add up to 90°).",
        "They are equal.",
        "They are adjacent."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "When two parallel lines are cut by a transversal, the alternate exterior angles formed are equal in measure.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Alt. Exterior Angles", "Equal");
      }
    }
  ]
};

// --- Multi-Step Question 5: Identifying Co-Interior Angles ---
const plCoInteriorAnglesQuestion: MultiStepQuestion = {
  id: 'pl-co-interior',
  title: 'Identifying Co-Interior Angles',
  steps: [
    {
      id: 'plci-definition',
      question: "Where are co-interior (same-side interior) angles located?",
      questionType: 'text',
      options: [
        "On the same side of the transversal and between the parallel lines.",
        "On opposite sides of the transversal and between the parallel lines.",
        "On opposite sides of the transversal and outside the parallel lines.",
        "In the same relative position at each intersection."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "The term 'co-interior' (or 'same-side interior') means 'on the same side' and 'between the parallel lines.' So, these angles are on the same side of the transversal and inside the space between the parallel lines.",
      explanationType: 'text'
    },
    {
      id: 'plci-identify-pair',
      question: "If angle 3 is on the lower right side between the parallel lines, where would its co-interior angle be?",
      questionType: 'text',
      options: [
        "Upper right side between the lines",
        "Lower left side between the lines",
        "Upper left side between the lines",
        "Upper right side outside the lines"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "It must be on the same side of the transversal (right) and still between the lines (interior). So, it's the upper right angle between the lines.",
      explanationType: 'text'
    },
    {
      id: 'plci-key-property',
      question: "What is the key property of co-interior (same-side interior) angles when the lines cut by the transversal are parallel?",
      questionType: 'text',
      options: [
        "They are supplementary (add up to 180°).",
        "They are complementary (add up to 90°).",
        "They are equal.",
        "They are adjacent."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "When two parallel lines are cut by a transversal, the co-interior (same-side interior) angles formed are supplementary, meaning their measures add up to 180 degrees.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Co-Interior Angles", "Supplementary (180°)");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const parallelLinesQuestions: MultiStepQuestion[] = [
  { ...plConceptQuestion, steps: plConceptQuestion.steps.map(s => ({ ...s, CustomContentComponent: ParallelLinesVisualization })) },
  { ...plCorrespondingAnglesQuestion, steps: plCorrespondingAnglesQuestion.steps.map(s => ({ ...s, CustomContentComponent: ParallelLinesVisualization })) },
  { ...plAltInteriorAnglesQuestion, steps: plAltInteriorAnglesQuestion.steps.map(s => ({ ...s, CustomContentComponent: ParallelLinesVisualization })) },
  { ...plAltExteriorAnglesQuestion, steps: plAltExteriorAnglesQuestion.steps.map(s => ({ ...s, CustomContentComponent: ParallelLinesVisualization })) },
  { ...plCoInteriorAnglesQuestion, steps: plCoInteriorAnglesQuestion.steps.map(s => ({ ...s, CustomContentComponent: ParallelLinesVisualization })) }
];

const ParallelLinesTransversals: React.FC = () => {
  const plRules = [
    "Parallel lines are lines in the same plane that never intersect.",
    "A transversal is a line that intersects two or more other lines.",
    "When a transversal cuts two parallel lines, eight angles are formed.",
    "Corresponding Angles: Angles in the same relative position at each intersection. They are EQUAL.",
    "Alternate Interior Angles: Angles on opposite sides of the transversal and between the parallel lines. They are EQUAL.",
    "Alternate Exterior Angles: Angles on opposite sides of the transversal and outside the parallel lines. They are EQUAL.",
    "Co-Interior (Same-Side Interior) Angles: Angles on the same side of the transversal and between the parallel lines. They are SUPPLEMENTARY (add up to 180°).",
    "These angle relationships are true IF AND ONLY IF the lines cut by the transversal are parallel."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Parallel Lines and Transversals"
        icon="📏" // Ruler/Triangle icon, representing geometric concepts
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={plRules}
        rulesTitle="Angle Relationships with Parallel Lines:"
        questions={parallelLinesQuestions}
        renderSharedValuesSummary={renderParallelLinesSummary}
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default ParallelLinesTransversals;