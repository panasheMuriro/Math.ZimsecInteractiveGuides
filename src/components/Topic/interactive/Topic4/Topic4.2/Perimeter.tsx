// import React, { useState, useEffect } from 'react';
// import { RefreshCw, Eye, EyeOff, Check, X } from 'lucide-react';

// interface Shape {
//   type: string;
//   name: string;
//   formula: string;
//   dimensions: { [key: string]: number };
//   answer: number;
// }

// const PerimeterCalculator: React.FC = () => {
//   const [currentShape, setCurrentShape] = useState<Shape | null>(null);
//   const [userAnswer, setUserAnswer] = useState<string>('');
//   const [showHint, setShowHint] = useState<boolean>(false);
//   const [feedback, setFeedback] = useState<string>('');
//   const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
//   const [score, setScore] = useState<number>(0);
//   const [attempts, setAttempts] = useState<number>(0);

//   const shapes: Shape[] = [
//     {
//       type: 'rectangle',
//       name: 'Rectangle',
//       formula: 'Perimeter = 2(length + width)',
//       dimensions: { length: 8, width: 5 },
//       answer: 26
//     },
//     {
//       type: 'square',
//       name: 'Square',
//       formula: 'Perimeter = 4 × side',
//       dimensions: { side: 6 },
//       answer: 24
//     },
//     {
//       type: 'triangle',
//       name: 'Triangle',
//       formula: 'Perimeter = side₁ + side₂ + side₃',
//       dimensions: { side1: 5, side2: 7, side3: 9 },
//       answer: 21
//     },
//     {
//       type: 'circle',
//       name: 'Circle',
//       formula: 'Perimeter = 2πr (use π ≈ 3.14)',
//       dimensions: { radius: 4 },
//       answer: 25.12
//     },
//     {
//       type: 'parallelogram',
//       name: 'Parallelogram',
//       formula: 'Perimeter = 2(base + side)',
//       dimensions: { base: 10, side: 6 },
//       answer: 32
//     }
//   ];

//   const generateNewShape = (): void => {
//     const randomIndex = Math.floor(Math.random() * shapes.length);
//     const baseShape = shapes[randomIndex];

//     // Generate random dimensions
//     const newShape: Shape = {
//       ...baseShape,
//       dimensions: { ...baseShape.dimensions },
//       answer: 0
//     };

//     switch (baseShape.type) {
//       case 'rectangle':
//         newShape.dimensions.length = Math.floor(Math.random() * 10) + 3;
//         newShape.dimensions.width = Math.floor(Math.random() * 8) + 2;
//         newShape.answer = 2 * (newShape.dimensions.length + newShape.dimensions.width);
//         break;
//       case 'square':
//         newShape.dimensions.side = Math.floor(Math.random() * 8) + 3;
//         newShape.answer = 4 * newShape.dimensions.side;
//         break;
//       case 'triangle':
//         newShape.dimensions.side1 = Math.floor(Math.random() * 6) + 3;
//         newShape.dimensions.side2 = Math.floor(Math.random() * 6) + 4;
//         newShape.dimensions.side3 = Math.floor(Math.random() * 6) + 5;
//         newShape.answer = newShape.dimensions.side1 + newShape.dimensions.side2 + newShape.dimensions.side3;
//         break;
//       case 'circle':
//         newShape.dimensions.radius = Math.floor(Math.random() * 6) + 2;
//         newShape.answer = Math.round(2 * Math.PI * newShape.dimensions.radius * 100) / 100;
//         break;
//       case 'parallelogram':
//         newShape.dimensions.base = Math.floor(Math.random() * 8) + 4;
//         newShape.dimensions.side = Math.floor(Math.random() * 6) + 3;
//         newShape.answer = 2 * (newShape.dimensions.base + newShape.dimensions.side);
//         break;
//     }

//     setCurrentShape(newShape);
//     setUserAnswer('');
//     setShowHint(false);
//     setFeedback('');
//     setIsCorrect(null);
//   };

//   const checkAnswer = (): void => {
//     if (!currentShape || !userAnswer.trim()) return;

//     const userValue = parseFloat(userAnswer);
//     const tolerance = 0.1; // Allow small rounding differences
//     const correct = Math.abs(userValue - currentShape.answer) <= tolerance;

//     setIsCorrect(correct);
//     setAttempts(attempts + 1);

//     if (correct) {
//       setScore(score + 1);
//       setFeedback('Correct! Well done!');
//     } else {
//       setFeedback(`Incorrect. The correct answer is ${currentShape.answer}${currentShape.type === 'circle' ? ' cm' : ' cm'}`);
//     }
//   };

//   const renderShape = (): JSX.Element => {
//     if (!currentShape) return <div></div>;

//     const { type, dimensions } = currentShape;

//     switch (type) {
//       case 'rectangle':
//         return (
//           <div className="flex flex-col items-center">
//             <div
//               className="border-4 border-blue-600 bg-blue-100"
//               style={{
//                 width: `${dimensions.length * 15}px`,
//                 height: `${dimensions.width * 15}px`,
//                 maxWidth: '180px',
//                 maxHeight: '120px'
//               }}
//             />
//             <div className="mt-2 text-sm text-gray-700">
//               Length: {dimensions.length} cm, Width: {dimensions.width} cm
//             </div>
//           </div>
//         );
//       case 'square':
//         return (
//           <div className="flex flex-col items-center">
//             <div
//               className="border-4 border-green-600 bg-green-100"
//               style={{
//                 width: `${dimensions.side * 15}px`,
//                 height: `${dimensions.side * 15}px`,
//                 maxWidth: '120px',
//                 maxHeight: '120px'
//               }}
//             />
//             <div className="mt-2 text-sm text-gray-700">
//               Side: {dimensions.side} cm
//             </div>
//           </div>
//         );
//       case 'triangle':
//         return (
//           <div className="flex flex-col items-center">
//             <div className="relative">
//               <svg width="120" height="80" viewBox="0 0 120 80">
//                 <polygon
//                   points="60,10 10,70 110,70"
//                   fill="#fef3c7"
//                   stroke="#d97706"
//                   strokeWidth="3"
//                 />
//               </svg>
//             </div>
//             <div className="mt-2 text-sm text-gray-700">
//               Sides: {dimensions.side1} cm, {dimensions.side2} cm, {dimensions.side3} cm
//             </div>
//           </div>
//         );
//       case 'circle':
//         return (
//           <div className="flex flex-col items-center">
//             <div
//               className="border-4 border-red-600 bg-red-100 rounded-full"
//               style={{
//                 width: `${dimensions.radius * 20}px`,
//                 height: `${dimensions.radius * 20}px`,
//                 maxWidth: '120px',
//                 maxHeight: '120px'
//               }}
//             />
//             <div className="mt-2 text-sm text-gray-700">
//               Radius: {dimensions.radius} cm
//             </div>
//           </div>
//         );
//       case 'parallelogram':
//         return (
//           <div className="flex flex-col items-center">
//             <div className="relative">
//               <svg width="140" height="80" viewBox="0 0 140 80">
//                 <polygon
//                   points="20,60 120,60 100,20 0,20"
//                   fill="#e0e7ff"
//                   stroke="#6366f1"
//                   strokeWidth="3"
//                 />
//               </svg>
//             </div>
//             <div className="mt-2 text-sm text-gray-700">
//               Base: {dimensions.base} cm, Side: {dimensions.side} cm
//             </div>
//           </div>
//         );
//       default:
//         return <div></div>;
//     }
//   };

//   useEffect(() => {
//     generateNewShape();
//   }, []);

//   return (
//     <div className="max-w-md mx-auto p-6 bg-[#F0BB78] rounded-xl">
//       <div className="text-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-2">Perimeter Calculator</h1>
//         <div className="text-sm text-gray-600">
//           Score: {score}/{attempts} {attempts > 0 && `(${Math.round((score/attempts) * 100)}%)`}
//         </div>
//       </div>

//       {currentShape && (
//         <div className="space-y-6">
//           <div className="bg-gray-50 p-4 rounded-lg">
//             <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">
//               Calculate the perimeter of this {currentShape.name.toLowerCase()}:
//             </h2>
//             <div className="flex justify-center mb-4">
//               {renderShape()}
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div className="flex items-center justify-between">
//               <label className="text-sm font-medium text-gray-700">
//                 Your answer (cm):
//               </label>
//               <button
//                 onClick={() => setShowHint(!showHint)}
//                 className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
//               >
//                 {showHint ? <EyeOff size={16} /> : <Eye size={16} />}
//                 {showHint ? 'Hide' : 'Show'} Hint
//               </button>
//             </div>

//             {showHint && (
//               <div className="bg-blue-50 border border-blue-200 p-3 rounded-md">
//                 <p className="text-sm text-blue-800 font-medium">
//                   {currentShape.formula}
//                 </p>
//               </div>
//             )}

//             <div className="flex gap-2">
//               <input
//                 type="number"
//                 step="0.01"
//                 value={userAnswer}
//                 onChange={(e) => setUserAnswer(e.target.value)}
//                 className="flex-1 bg-white px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
//                 placeholder="Enter your answer..."
//               />
//               <button
//                 onClick={checkAnswer}
//                 disabled={!userAnswer.trim()}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
//               >
//                 <Check size={20} />
//               </button>
//             </div>

//             {feedback && (
//               <div className={`p-3 rounded-md flex items-center gap-2 ${
//                 isCorrect
//                   ? 'bg-green-50 border border-green-200 text-green-800'
//                   : 'bg-red-50 border border-red-200 text-red-800'
//               }`}>
//                 {isCorrect ? <Check size={16} /> : <X size={16} />}
//                 {feedback}
//               </div>
//             )}

//             <button
//               onClick={generateNewShape}
//               className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
//             >
//               <RefreshCw size={20} />
//               New Shape
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PerimeterCalculator;

import ShapeCalculator, {
  perimeterCalculateAnswer,
  perimeterGenerateDimensions,
  perimeterShapes,
} from "./ShapeCalculator";

export default function PerimeterChallenge() {
  return (
    <ShapeCalculator
      mode="perimeter"
      shapes={perimeterShapes}
      title="Perimeter Challenge"
      calculateAnswer={perimeterCalculateAnswer}
      generateDimensions={perimeterGenerateDimensions}
    />
  );
}
