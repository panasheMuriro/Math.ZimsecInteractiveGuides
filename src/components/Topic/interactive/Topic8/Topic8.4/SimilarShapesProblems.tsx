/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

const UnknownLengthsVisual: React.FC = () => {
  return (
    <div className="flex justify-center w-full h-32">
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <defs>
          <marker 
            id="arrow" 
            markerWidth="10" 
            markerHeight="10" 
            refX="9" 
            refY="3" 
            orient="auto" 
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#6B7280" />
          </marker>
        </defs>
        {/* Smaller Triangle */}
        <polygon 
          points="20,80 50,30 70,80" 
          fill="none" 
          stroke="#000" // Light blue (tailwind blue-200)
          strokeWidth="2"
        />
        <text x="40" y="25" fontSize="8" fill="#000">8 cm</text>
        <text x="10" y="90" fontSize="8" fill="#000">Small</text>
        
        {/* Larger Triangle */}
        <polygon 
          points="120,80 165,15 195,80" 
          fill="none" 
          stroke="#000" // Light green (tailwind green-200)
          strokeWidth="2"
        />
        <text x="150" y="10" fontSize="8" fill="#000">? cm</text>
        <text x="110" y="90" fontSize="8" fill="#000">Large</text>
        
        {/* Scale factor indicator */}
        <text x="95" y="50" fontSize="10" fill="#000">k = 2:3</text> {/* Gray-200 */}
        <line x1="80" y1="45" x2="110" y2="45" stroke="#000" strokeWidth="1" markerEnd="url(#arrow)" />
      </svg>
    </div>
  );
};

const ScaleModelsVisual: React.FC = () => {
  return (
    <div className="flex justify-center w-full h-32">
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <defs>
          <marker 
            id="arrow2" 
            markerWidth="10" 
            markerHeight="10" 
            refX="9" 
            refY="3" 
            orient="auto" 
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#6B7280" />
          </marker>
        </defs>
        {/* Model Car */}
        <rect x="20" y="60" width="30" height="10" fill="#BFDBFE" />
        <rect x="25" y="50" width="20" height="10" fill="#BFDBFE" />
        <circle cx="25" cy="75" r="5" fill="#9CA3AF" /> {/* Gray-400 */}
        <circle cx="45" cy="75" r="5" fill="#9CA3AF" />
        <text x="15" y="90" fontSize="8" fill="#BFDBFE">6.5"</text>
        <text x="10" y="40" fontSize="8" fill="#BFDBFE">Model</text>
        
        {/* Actual Car */}
        <rect x="100" y="50" width="80" height="25" fill="#A7F3D0" />
        <rect x="110" y="30" width="60" height="20" fill="#A7F3D0" />
        <circle cx="115" cy="80" r="10" fill="#9CA3AF" />
        <circle cx="165" cy="80" r="10" fill="#9CA3AF" />
        <text x="120" y="95" fontSize="8" fill="#A7F3D0">? feet</text>
        <text x="120" y="20" fontSize="8" fill="#A7F3D0">Actual</text>
        
        {/* Scale indicator */}
        <text x="75" y="40" fontSize="10" fill="#E5E7EB">1:24</text>
        <line x1="60" y1="35" x2="90" y2="35" stroke="#E5E7EB" strokeWidth="1" markerEnd="url(#arrow2)" />
      </svg>
    </div>
  );
};

const AreaRatiosVisual: React.FC = () => {
  return (
    <div className="flex justify-center w-full h-32">
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <defs>
          <marker 
            id="arrow3" 
            markerWidth="10" 
            markerHeight="10" 
            refX="9" 
            refY="3" 
            orient="auto" 
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#6B7280" />
          </marker>
        </defs>
        {/* Smaller Rectangle */}
        <rect x="20" y="30" width="30" height="20" fill="none" stroke="#BFDBFE" strokeWidth="2" />
        <text x="25" y="25" fontSize="8" fill="#BFDBFE">18 cm²</text>
        <text x="15" y="60" fontSize="8" fill="#BFDBFE">Small</text>
        
        {/* Larger Rectangle */}
        <rect x="100" y="20" width="50" height="35" fill="none" stroke="#A7F3D0" strokeWidth="2" />
        <text x="105" y="15" fontSize="8" fill="#A7F3D0">? cm²</text>
        <text x="105" y="70" fontSize="8" fill="#A7F3D0">Large</text>
        
        {/* Scale factor indicator */}
        <text x="70" y="45" fontSize="10" fill="#E5E7EB">k = 3:5</text>
        <line x1="60" y1="40" x2="90" y2="40" stroke="#E5E7EB" strokeWidth="1" markerEnd="url(#arrow3)" />
      </svg>
    </div>
  );
};

// --- Quiz Data ---
// Define the questions and steps for the Similar Shapes Problems quiz
const similarShapesQuestions: MultiStepQuestion[] = [
  {
    id: 'q1',
    title: 'Finding Unknown Lengths',
    steps: [
      {
        id: 'q1-step1',
        question: 'What is the first step when solving problems with similar shapes?',
        questionType: 'text',
        options: [
          'Calculate the area',
          'Identify similar shapes and correspondence',
          'Guess the answer',
          'Multiply all sides'
        ],
        optionType: 'text',
        correct: 1,
        explanation: 'Always start by confirming the shapes are similar and identifying which parts correspond to each other.',
        CustomContentComponent: UnknownLengthsVisual // Pass the visual component
      },
      {
        id: 'q1-step2',
        question: 'Two similar triangles have corresponding sides in the ratio 2:3. If the smaller triangle has a side of 8 cm, what is the corresponding side in the larger triangle?',
        questionType: 'text',
        options: [
          '10 cm',
          '12 cm',
          '16 cm',
          '24 cm'
        ],
        optionType: 'text',
        correct: 1,
        explanation: 'Using the proportion 2/3 = 8/x, we solve for x: 2x = 24, so x = 12 cm.',
        CustomContentComponent: UnknownLengthsVisual // Pass the visual component
      }
    ]
  },
  {
    id: 'q2',
    title: 'Scale Models',
    steps: [
      {
        id: 'q2-step1',
        question: 'A model car is built at a scale of 1:24. What does this mean?',
        questionType: 'text',
        options: [
          'The model is 24 times larger than the actual car',
          'The actual car is 24 times larger than the model',
          'The model and car are the same size',
          'The model is 24 cm long'
        ],
        optionType: 'text',
        correct: 1,
        explanation: 'A scale of 1:24 means 1 unit on the model represents 24 units on the actual object, so the actual object is 24 times larger.',
        CustomContentComponent: ScaleModelsVisual // Pass the visual component
      },
      {
        id: 'q2-step2',
        question: 'If the model car is 6.5 inches long, how long is the actual car?',
        questionType: 'text',
        options: [
          '156 inches',
          '26 inches',
          '15.6 inches',
          '65 inches'
        ],
        optionType: 'text',
        correct: 0,
        explanation: 'Actual length = Model length × Scale factor = 6.5 inches × 24 = 156 inches (or 13 feet).',
        CustomContentComponent: ScaleModelsVisual // Pass the visual component
      }
    ]
  },
  {
    id: 'q3',
    title: 'Area Ratios',
    steps: [
      {
        id: 'q3-step1',
        question: 'Two similar rectangles have a linear scale factor of 3:5. What is the ratio of their areas?',
        questionType: 'text',
        options: [
          '3:5',
          '6:10',
          '9:25',
          '27:125'
        ],
        optionType: 'text',
        correct: 2,
        explanation: 'The area scale factor is the square of the linear scale factor: (3/5)² = 9/25.',
        CustomContentComponent: AreaRatiosVisual // Pass the visual component
      },
      {
        id: 'q3-step2',
        question: 'If the smaller rectangle has an area of 18 cm², what is the area of the larger rectangle?',
        questionType: 'text',
        options: [
          '30 cm²',
          '50 cm²',
          '90 cm²',
          '250 cm²'
        ],
        optionType: 'text',
        correct: 1,
        explanation: 'Using the area ratio 9:25, we set up the proportion 9/25 = 18/x. Solving gives x = (18 × 25)/9 = 50 cm².',
        CustomContentComponent: AreaRatiosVisual // Pass the visual component
      }
    ]
  }
];

// Define rules for similar shapes problems
const similarShapesRules = [
  'Identify similar shapes by checking equal angles and proportional sides',
  'Find the linear scale factor: $k = \\frac{\\text{known length in image}}{\\text{corresponding length in object}}$',
  'Apply scale factor: Lengths ($\\times k$), Areas ($\\times k^2$), Volumes ($\\times k^3$)',
  'Set up proportions for unknown lengths: $\\frac{a}{a\'} = \\frac{b}{b\'} = k$'
];

const SimilarShapesProblems = () => {
  return (
    <div className="flex justify-center w-full">
      <MultipleStepInteractiveComponent
        title="Similar Shapes Problems"
        icon="📐"
        theme={{
          from: 'from-[#2E4F4F]',
          to: 'to-[#4E6E81]',
          button: 'bg-white text-blue-600',
          buttonHover: 'hover:bg-gray-100'
        }}
        rules={similarShapesRules}
        rulesTitle="Problem-Solving Steps:"
        questions={similarShapesQuestions}
      />
    </div>
  );
};

export default SimilarShapesProblems;