// src/Data/ThreeSetVennQuizData.ts
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

// Define the region numbers for clarity (matching the diagram)
// 1: Only A
// 2: Only B
// 3: Only C
// 4: A ∩ B (not C)
// 5: A ∩ C (not B)
// 6: B ∩ C (not A)
// 7: A ∩ B ∩ C
// 8: Outside A, B, and C (A' ∩ B' ∩ C' ∩ U)

const threeSetVennQuizQuestions: QuizQuestion[] = [
  {
    question: `Which region represents elements in set $A$ only?`,
    questionType: 'text',
    optionType: 'text', // Options are plain text numbers
    options: ['1', '2', '3', '4', '5', '6', '7', '8'],
    correct: 0, // Index 0 corresponds to option '1'
    explanation: `Region 1 is the part of circle $A$ that does not overlap with $B$ or $C$. This is $A \\cap B' \\cap C'$.`,
    explanationType: 'math'
  },
  {
    question: `Which region represents elements in both set $B$ and set $C$, but not in set $A$?`,
    questionType: 'text',
    optionType: 'text',
    options: ['1', '2', '3', '4', '5', '6', '7', '8'],
    correct: 5, // Index 5 corresponds to option '6'
    explanation: `Region 6 is the part where circles $B$ and $C$ overlap, excluding the part that also overlaps with $A$. This is $A' \\cap B \\cap C$.`,
    explanationType: 'math'
  },
  {
    question: `Which region represents elements in all three sets $A$, $B$, and $C$?`,
    questionType: 'text',
    optionType: 'text',
    options: ['1', '2', '3', '4', '5', '6', '7', '8'],
    correct: 6, // Index 6 corresponds to option '7'
    explanation: `Region 7 is the central area where all three circles $A$, $B$, and $C$ overlap. This is $A \\cap B \\cap C$.`,
    explanationType: 'math'
  },
  {
    question: `Which region represents elements in set $A$ and set $C$, but not in set $B$?`,
    questionType: 'text',
    optionType: 'text',
    options: ['1', '2', '3', '4', '5', '6', '7', '8'],
    correct: 4, // Index 4 corresponds to option '5'
    explanation: `Region 5 is the part where circles $A$ and $C$ overlap, excluding the part that also overlaps with $B$. This is $A \\cap B' \\cap C$.`,
    explanationType: 'math'
  },
  {
    question: `Which region represents elements in the Universal Set $U$ but not in any of the sets $A$, $B$, or $C$?`,
    questionType: 'text',
    optionType: 'text',
    options: ['1', '2', '3', '4', '5', '6', '7', '8'],
    correct: 7, // Index 7 corresponds to option '8'
    explanation: `Region 8 is the area inside the rectangle $U$ but outside all three circles $A$, $B$, and $C$. This is $A' \\cap B' \\cap C' \\cap U$.`,
    explanationType: 'math'
  },
  {
    question: `Which region represents elements in set $B$ only?`,
    questionType: 'text',
    optionType: 'text',
    options: ['1', '2', '3', '4', '5', '6', '7', '8'],
    correct: 1, // Index 1 corresponds to option '2'
    explanation: `Region 2 is the part of circle $B$ that does not overlap with $A$ or $C$. This is $A' \\cap B \\cap C'$.`,
    explanationType: 'math'
  },
  {
    question: `Which region represents elements in both set $A$ and set $B$, but not in set $C$?`,
    questionType: 'text',
    optionType: 'text',
    options: ['1', '2', '3', '4', '5', '6', '7', '8'],
    correct: 3, // Index 3 corresponds to option '4'
    explanation: `Region 4 is the part where circles $A$ and $B$ overlap, excluding the part that also overlaps with $C$. This is $A \\cap B \\cap C'$.`,
    explanationType: 'math'
  },
  {
    question: `Which region represents elements in set $C$ only?`,
    questionType: 'text',
    optionType: 'text',
    options: ['1', '2', '3', '4', '5', '6', '7', '8'],
    correct: 2, // Index 2 corresponds to option '3'
    explanation: `Region 3 is the part of circle $C$ that does not overlap with $A$ or $B$. This is $A' \\cap B' \\cap C$.`,
    explanationType: 'math'
  }
];

export const threeSetVennRules = [
  "Region 1: Only A ($A \\cap B' \\cap C'$)",
  "Region 2: Only B ($A' \\cap B \\cap C'$)",
  "Region 3: Only C ($A' \\cap B' \\cap C$)",
  "Region 4: $A \\cap B \\cap C'$",
  "Region 5: $A \\cap B' \\cap C$",
  "Region 6: $A' \\cap B \\cap C$",
  "Region 7: $A \\cap B \\cap C$",
  "Region 8: Outside A, B, C ($A' \\cap B' \\cap C' \\cap U$)"
];

 const threeSetVennQuizTitle = "3-Set Venn Diagram Quiz";
const threeSetVennQuizIcon = "🧠";
const threeSetVennQuizTheme = {
  from: "from-slate-600",
  to: "to-slate-800",
  button: "bg-slate-500",
  buttonHover: "hover:bg-slate-400"
};


// src/Components/ThreeSetVennQuiz.tsx
import React from 'react';
// import MultipleChoiceInteractiveComponent from '../Templates/MultipleChoiceInteractiveComponent'; // Adjust path as needed

const ThreeSetVennQuiz: React.FC = () => {
  // --- Venn Diagram SVG Constants ---
  const width = 340;
  const height = 300;
  const padding = 15;
  const circleRadius = 60;
  const centerX = width / 2;
  const centerY = height / 2 + 10;
  const triangleHeight = Math.sqrt(3) / 2 * 90;
  const offsetX = 45;
  const offsetY = triangleHeight / 2;

  const circleA_Cx = centerX;
  const circleA_Cy = centerY - offsetY;
  const circleB_Cx = centerX - offsetX;
  const circleB_Cy = centerY + offsetY;
  const circleC_Cx = centerX + offsetX;
  const circleC_Cy = centerY + offsetY;

  const universalSetLabel = 'U'; // Can be customized
  const labelA = 'A'; // Can be customized
  const labelB = 'B'; // Can be customized
  const labelC = 'C'; // Can be customized

  const strokeColor = "#475569"; // slate-600
  const labelColor = "#1E293B"; // slate-800
  const circleColor = "#94A3B8"; // slate-400 (semi-transparent via opacity)
  const numberColor = "#1E293B"; // slate-800 for good contrast on gray
  // --- End Venn Diagram SVG Constants ---

  return (
    <div className="flex flex-col items-center w-full">
      {/* Venn Diagram Visualization */}
      <div className="mb-6 p-4 bg-slate-100 rounded-xl border border-slate-200 shadow-sm w-full max-w-md">
        <h3 className="text-xl font-bold mb-3 text-slate-800 text-center">Venn Diagram Regions</h3>
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-lg border border-slate-300 bg-white">
            <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="block">
              {/* Universal Set Rectangle */}
              <rect
                x={padding}
                y={padding}
                width={width - 2 * padding}
                height={height - 2 * padding}
                fill="none" // Transparent inside
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
              <text
                x={width - padding - 5}
                y={padding + 12}
                textAnchor="end"
                fill={labelColor}
                fontSize="14"
                fontWeight="normal"
              >
                {universalSetLabel}
              </text>

              {/* Set A Circle */}
              <circle
                cx={circleA_Cx}
                cy={circleA_Cy}
                r={circleRadius}
                fill={circleColor}
                stroke={strokeColor}
                strokeWidth="1.5"
                opacity="0.5" // Semi-transparent
              />
              <text
                x={circleA_Cx}
                y={circleA_Cy}
                textAnchor="middle"
                dy=".3em"
                fill={labelColor}
                fontSize="16"
                fontWeight="bold"
              >
                {labelA}
              </text>

              {/* Set B Circle */}
              <circle
                cx={circleB_Cx}
                cy={circleB_Cy}
                r={circleRadius}
                fill={circleColor}
                stroke={strokeColor}
                strokeWidth="1.5"
                opacity="0.5"
              />
              <text
                x={circleB_Cx}
                y={circleB_Cy}
                textAnchor="middle"
                dy=".3em"
                fill={labelColor}
                fontSize="16"
                fontWeight="bold"
              >
                {labelB}
              </text>

              {/* Set C Circle */}
              <circle
                cx={circleC_Cx}
                cy={circleC_Cy}
                r={circleRadius}
                fill={circleColor}
                stroke={strokeColor}
                strokeWidth="1.5"
                opacity="0.5"
              />
              <text
                x={circleC_Cx}
                y={circleC_Cy}
                textAnchor="middle"
                dy=".3em"
                fill={labelColor}
                fontSize="16"
                fontWeight="bold"
              >
                {labelC}
              </text>

              {/* --- Region Number Labels --- */}
              {/* 1: Only A */}
              <text
                x={circleA_Cx}
                y={circleA_Cy - circleRadius / 2}
                textAnchor="middle"
                dy=".3em"
                fill={numberColor}
                fontSize="16"
                fontWeight="bold"
                className="pointer-events-none select-none"
              >
                1
              </text>

              {/* 2: Only B */}
              <text
                x={circleB_Cx - circleRadius / 2}
                y={circleB_Cy + circleRadius / 3}
                textAnchor="middle"
                dy=".3em"
                fill={numberColor}
                fontSize="16"
                fontWeight="bold"
                className="pointer-events-none select-none"
              >
                2
              </text>

              {/* 3: Only C */}
              <text
                x={circleC_Cx + circleRadius / 2}
                y={circleC_Cy + circleRadius / 3}
                textAnchor="middle"
                dy=".3em"
                fill={numberColor}
                fontSize="16"
                fontWeight="bold"
                className="pointer-events-none select-none"
              >
                3
              </text>

              {/* 4: A ∩ B ∩ C' */}
              <text
                x={centerX - 25}
                y={centerY + 10}
                textAnchor="middle"
                fill={numberColor}
                fontSize="16"
                fontWeight="bold"
                className="pointer-events-none select-none"
              >
                4
              </text>

              {/* 5: A ∩ C ∩ B' */}
              <text
                x={centerX + 25}
                y={centerY + 10}
                textAnchor="middle"
                fill={numberColor}
                fontSize="16"
                fontWeight="bold"
                className="pointer-events-none select-none"
              >
                5
              </text>

              {/* 6: B ∩ C ∩ A' */}
              <text
                x={centerX}
                y={centerY + circleRadius - 10}
                textAnchor="middle"
                fill={numberColor}
                fontSize="16"
                fontWeight="bold"
                className="pointer-events-none select-none"
              >
                6
              </text>

              {/* 7: A ∩ B ∩ C (Center) */}
              <text
                x={centerX}
                y={centerY - 5}
                textAnchor="middle"
                fill={numberColor}
                fontSize="16"
                fontWeight="bold"
                className="pointer-events-none select-none"
              >
                7
              </text>

              {/* 8: Outside A, B, & C */}
              <text
                x={centerX}
                y={height - 25}
                textAnchor="middle"
                fill={numberColor}
                fontSize="16"
                fontWeight="bold"
                className="pointer-events-none select-none"
              >
                8
              </text>
              {/* --- End Region Number Labels --- */}
            </svg>
          </div>
        </div>
      </div>

      {/* Multiple Choice Quiz Component */}
      <MultipleChoiceInteractiveComponent
        title={threeSetVennQuizTitle}
        icon={threeSetVennQuizIcon}
        theme={threeSetVennQuizTheme}
        rules={threeSetVennRules}
        rulesTitle="Region Guide:"
        questions={threeSetVennQuizQuestions}
      />
    </div>
  );
};

export default ThreeSetVennQuiz;