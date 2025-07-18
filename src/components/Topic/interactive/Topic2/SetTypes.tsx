/* eslint-disable no-shadow-restricted-names */
// import React, { useState, useEffect } from 'react';
// import { Check, X, RotateCcw, ArrowRight, Infinity, Hash, Circle } from 'lucide-react';

// const SetTypes = () => {
//   const [currentExercise, setCurrentExercise] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [score, setScore] = useState(0);
//   const [draggedItem, setDraggedItem] = useState(null);
//   const [droppedItems, setDroppedItems] = useState({});

//   const exercises = [
//     {
//       type: 'classification',
//       question: 'What type of set is {1, 2, 3, 4, 5}?',
//       options: ['Finite Set', 'Infinite Set', 'Empty Set', 'Universal Set'],
//       correct: 0,
//       explanation: 'This set has exactly 5 elements, which is countable, making it a finite set.',
//       visualSet: [1, 2, 3, 4, 5],
//       setColor: 'bg-purple-100 border-purple-400 text-purple-800'
//     },
//     {
//       type: 'classification',
//       question: 'What type of set is ℕ = {1, 2, 3, ...}?',
//       options: ['Finite Set', 'Infinite Set', 'Empty Set', 'Universal Set'],
//       correct: 1,
//       explanation: 'The natural numbers continue forever, making this an infinite set.',
//       visualSet: ['1', '2', '3', '...'],
//       setColor: 'bg-blue-100 border-blue-400 text-blue-800'
//     },
//     {
//       type: 'classification',
//       question: 'What type of set is ∅ = {}?',
//       options: ['Finite Set', 'Infinite Set', 'Empty Set', 'Universal Set'],
//       correct: 2,
//       explanation: 'This set contains no elements, making it the empty set.',
//       visualSet: [],
//       setColor: 'bg-gray-100 border-gray-400 text-gray-800'
//     },
//     {
//       type: 'subset',
//       question: 'Is {2, 4} ⊆ {1, 2, 3, 4, 5}?',
//       options: ['Yes, it is a subset', 'No, it is not a subset'],
//       correct: 0,
//       explanation: 'All elements of {2, 4} are found in {1, 2, 3, 4, 5}, so {2, 4} ⊆ {1, 2, 3, 4, 5}.',
//       setA: [2, 4],
//       setB: [1, 2, 3, 4, 5],
//       colorA: 'bg-green-100 border-green-400 text-green-800',
//       colorB: 'bg-orange-100 border-orange-400 text-orange-800'
//     },
//     {
//       type: 'subset',
//       question: 'Is {1, 6} ⊆ {1, 2, 3, 4, 5}?',
//       options: ['Yes, it is a subset', 'No, it is not a subset'],
//       correct: 1,
//       explanation: 'Element 6 is not in {1, 2, 3, 4, 5}, so {1, 6} is not a subset.',
//       setA: [1, 6],
//       setB: [1, 2, 3, 4, 5],
//       colorA: 'bg-red-100 border-red-400 text-red-800',
//       colorB: 'bg-orange-100 border-orange-400 text-orange-800'
//     },
//     {
//       type: 'drag-drop',
//       question: 'Drag each set to its correct type:',
//       sets: [
//         { set: '{a, b, c}', type: 'Finite', color: 'bg-pink-100 border-pink-400 text-pink-800' },
//         { set: '∅', type: 'Empty', color: 'bg-gray-100 border-gray-400 text-gray-800' },
//         { set: '{1, 2, 3, ...}', type: 'Infinite', color: 'bg-cyan-100 border-cyan-400 text-cyan-800' },
//         { set: '{x, y, z}', type: 'Finite', color: 'bg-yellow-100 border-yellow-400 text-yellow-800' }
//       ],
//       categories: ['Finite', 'Infinite', 'Empty'],
//       explanation: 'Sets with countable elements are finite, sets that continue forever are infinite, and sets with no elements are empty.'
//     }
//   ];

//   const currentEx = exercises[currentExercise];

//   const handleAnswerSelect = (index) => {
//     setSelectedAnswer(index);
//     setShowFeedback(true);
//     if (index === currentEx.correct) {
//       setScore(score + 1);
//     }
//   };

//   const handleDragStart = (e, item) => {
//     setDraggedItem(item);
//     e.dataTransfer.effectAllowed = 'move';
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e, category) => {
//     e.preventDefault();
//     if (draggedItem) {
//       setDroppedItems(prev => ({
//         ...prev,
//         [draggedItem.set]: category
//       }));
//       setDraggedItem(null);
//     }
//   };

//   const checkDragDropAnswer = () => {
//     setShowFeedback(true);
//     const allCorrect = currentEx.sets.every(item => 
//       droppedItems[item.set] === item.type
//     );
//     if (allCorrect) {
//       setScore(score + 1);
//     }
//   };

//   const nextExercise = () => {
//     if (currentExercise < exercises.length - 1) {
//       setCurrentExercise(currentExercise + 1);
//     } else {
//       setCurrentExercise(0);
//       setScore(0);
//     }
//     setSelectedAnswer(null);
//     setShowFeedback(false);
//     setDroppedItems({});
//     setDraggedItem(null);
//   };

//   const resetExercise = () => {
//     setCurrentExercise(0);
//     setSelectedAnswer(null);
//     setShowFeedback(false);
//     setScore(0);
//     setDroppedItems({});
//     setDraggedItem(null);
//   };

//   const renderSetVisualization = () => {
//     if (currentEx.type === 'classification') {
//       return (
//         <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
//           <div className="text-center mb-4">
//             <div className="text-lg font-mono text-indigo-800 mb-2">
//               Set: {currentEx.visualSet.length === 0 ? '∅' : `{${currentEx.visualSet.join(', ')}}`}
//             </div>
//           </div>
//           <div className="flex flex-wrap justify-center gap-2">
//             {currentEx.visualSet.length === 0 ? (
//               <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500">
//                 Empty
//               </div>
//             ) : (
//               currentEx.visualSet.map((element, idx) => (
//                 <div
//                   key={idx}
//                   className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono text-sm ${currentEx.setColor}`}
//                 >
//                   {element}
//                 </div>
//               ))
//             )}
//           </div>
//           <div className="mt-4 text-center">
//             {currentEx.visualSet.length === 0 && (
//               <div className="text-sm text-gray-600">No elements</div>
//             )}
//             {currentEx.visualSet.includes('...') && (
//               <div className="text-sm text-blue-600 flex items-center justify-center gap-1">
//                 <Infinity className="w-4 h-4" />
//                 Continues infinitely
//               </div>
//             )}
//             {currentEx.visualSet.length > 0 && !currentEx.visualSet.includes('...') && (
//               <div className="text-sm text-purple-600 flex items-center justify-center gap-1">
//                 <Hash className="w-4 h-4" />
//                 {currentEx.visualSet.length} elements
//               </div>
//             )}
//           </div>
//         </div>
//       );
//     }

//     if (currentEx.type === 'subset') {
//       return (
//         <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-orange-50 rounded-lg">
//           <div className="text-center mb-4">
//             <div className="text-sm text-gray-600 mb-2">Set A</div>
//             <div className="text-lg font-mono text-green-800 mb-3">
//               {`{${currentEx.setA.join(', ')}}`}
//             </div>
//             <div className="text-sm text-gray-600 mb-2">Set B</div>
//             <div className="text-lg font-mono text-orange-800">
//               {`{${currentEx.setB.join(', ')}}`}
//             </div>
//           </div>
//           <div className="space-y-4">
//             <div>
//               <div className="text-sm text-gray-600 mb-2">Set A elements:</div>
//               <div className="flex flex-wrap justify-center gap-2">
//                 {currentEx.setA.map((element, idx) => (
//                   <div
//                     key={idx}
//                     className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-sm ${currentEx.colorA}`}
//                   >
//                     {element}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <div className="text-sm text-gray-600 mb-2">Set B elements:</div>
//               <div className="flex flex-wrap justify-center gap-2">
//                 {currentEx.setB.map((element, idx) => (
//                   <div
//                     key={idx}
//                     className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-sm ${
//                       currentEx.setA.includes(element) ? currentEx.colorA : currentEx.colorB
//                     }`}
//                   >
//                     {element}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     return null;
//   };

//   const renderDragDropExercise = () => {
//     if (currentEx.type !== 'drag-drop') return null;

//     return (
//       <div className="space-y-4">
//         <div className="text-center mb-4">
//           <div className="text-sm text-gray-600 mb-2">Drag sets to their categories:</div>
//         </div>
        
//         {/* Draggable sets */}
//         <div className="space-y-2">
//           {currentEx.sets.map((item, idx) => (
//             <div
//               key={idx}
//               draggable
//               onDragStart={(e) => handleDragStart(e, item)}
//               className={`p-3 rounded-lg border-2 ${item.color} cursor-move text-center font-mono transition-transform hover:scale-105 ${
//                 droppedItems[item.set] ? 'opacity-50' : ''
//               }`}
//             >
//               {item.set}
//             </div>
//           ))}
//         </div>

//         {/* Drop zones */}
//         <div className="grid grid-cols-1 gap-3 mt-6">
//           {currentEx.categories.map((category, idx) => (
//             <div
//               key={idx}
//               onDragOver={handleDragOver}
//               onDrop={(e) => handleDrop(e, category)}
//               className={`min-h-16 p-4 rounded-lg border-2 border-dashed text-center transition-colors ${
//                 category === 'Finite' ? 'border-purple-300 bg-purple-50' :
//                 category === 'Infinite' ? 'border-blue-300 bg-blue-50' :
//                 'border-gray-300 bg-gray-50'
//               }`}
//             >
//               <div className="font-semibold text-gray-700 mb-2">{category} Sets</div>
//               <div className="space-y-1">
//                 {Object.entries(droppedItems)
//                   .filter(([set, cat]) => cat === category)
//                   .map(([set, cat]) => (
//                     <div key={set} className="text-sm font-mono bg-white p-1 rounded border">
//                       {set}
//                     </div>
//                   ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {!showFeedback && Object.keys(droppedItems).length === currentEx.sets.length && (
//           <button
//             onClick={checkDragDropAnswer}
//             className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
//           >
//             Check Answer
//           </button>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg">
//       <div className="mb-4">
//         <div className="flex justify-between items-center mb-2">
//           <h3 className="text-lg font-bold text-gray-800">Set Types Explorer</h3>
//           <div className="text-sm text-gray-600 bg-white px-2 py-1 rounded-full">
//             Score: {score}/{exercises.length}
//           </div>
//         </div>
//         <div className="w-full bg-gradient-to-r from-purple-200 to-pink-200 rounded-full h-3">
//           <div 
//             className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
//             style={{ width: `${((currentExercise + 1) / exercises.length) * 100}%` }}
//           />
//         </div>
//         <div className="text-xs text-gray-500 mt-1">
//           Exercise {currentExercise + 1} of {exercises.length}
//         </div>
//       </div>

//       <div className="mb-6">
//         <div className="text-base font-medium text-gray-800 mb-4 bg-white p-3 rounded-lg shadow-sm">
//           {currentEx.question}
//         </div>

//         {renderSetVisualization()}

//         {currentEx.type === 'drag-drop' ? (
//           renderDragDropExercise()
//         ) : (
//           <div className="space-y-3">
//             {currentEx.options.map((option, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleAnswerSelect(index)}
//                 disabled={showFeedback}
//                 className={`w-full p-3 text-left rounded-lg border-2 transition-all transform hover:scale-105 ${
//                   selectedAnswer === index
//                     ? showFeedback
//                       ? index === currentEx.correct
//                         ? 'bg-gradient-to-r from-green-100 to-green-200 border-green-500 text-green-800'
//                         : 'bg-gradient-to-r from-red-100 to-red-200 border-red-500 text-red-800'
//                       : 'bg-gradient-to-r from-blue-100 to-blue-200 border-blue-500 text-blue-800'
//                     : showFeedback && index === currentEx.correct
//                     ? 'bg-gradient-to-r from-green-100 to-green-200 border-green-500 text-green-800'
//                     : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300 text-gray-700 hover:from-gray-100 hover:to-gray-200'
//                 } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="font-medium">{option}</span>
//                   {showFeedback && selectedAnswer === index && (
//                     index === currentEx.correct ? 
//                       <Check className="w-5 h-5 text-green-600" /> : 
//                       <X className="w-5 h-5 text-red-600" />
//                   )}
//                   {showFeedback && selectedAnswer !== index && index === currentEx.correct && (
//                     <Check className="w-5 h-5 text-green-600" />
//                   )}
//                 </div>
//               </button>
//             ))}
//           </div>
//         )}

//         {showFeedback && (
//           <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-400">
//             <div className="text-sm font-medium text-blue-800 mb-2">💡 Explanation:</div>
//             <div className="text-sm text-blue-700">{currentEx.explanation}</div>
//           </div>
//         )}

//         {showFeedback && (
//           <div className="mt-4 flex gap-2">
//             <button
//               onClick={nextExercise}
//               className="flex-1 py-2 px-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
//             >
//               {currentExercise === exercises.length - 1 ? '🔄 Restart' : '➡️ Next'}
//             </button>
//             <button
//               onClick={resetExercise}
//               className="py-2 px-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all transform hover:scale-105"
//             >
//               <RotateCcw className="w-4 h-4" />
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="text-xs text-gray-500 text-center bg-white p-2 rounded-lg">
//         🎯 Learn about finite, infinite, empty sets and subsets
//       </div>
//     </div>
//   );
// };

// export default SetTypes;

import React, { useState } from 'react';
import { Check, X, RotateCcw, Infinity, Hash } from 'lucide-react';

// Define types
// type ExerciseType = 'classification' | 'subset' | 'drag-drop';

interface ClassificationExercise {
  type: 'classification';
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  visualSet: (string | number)[];
  setColor: string;
}

interface SubsetExercise {
  type: 'subset';
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  setA: (string | number)[];
  setB: (string | number)[];
  colorA: string;
  colorB: string;
}

interface DragDropSet {
  set: string;
  type: string;
  color: string;
}

interface DragDropExercise {
  type: 'drag-drop';
  question: string;
  sets: DragDropSet[];
  categories: string[];
  explanation: string;
}

type Exercise = ClassificationExercise | SubsetExercise | DragDropExercise;

const SetTypes: React.FC = () => {
  const [currentExercise, setCurrentExercise] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [draggedItem, setDraggedItem] = useState<DragDropSet | null>(null);
  const [droppedItems, setDroppedItems] = useState<Record<string, string>>({});

  const exercises: Exercise[] = [
    {
      type: 'classification',
      question: 'What type of set is {1, 2, 3, 4, 5}?',
      options: ['Finite Set', 'Infinite Set', 'Empty Set', 'Universal Set'],
      correct: 0,
      explanation: 'This set has exactly 5 elements, which is countable, making it a finite set.',
      visualSet: [1, 2, 3, 4, 5],
      setColor: 'bg-purple-100 border-purple-400 text-purple-800',
    },
    {
      type: 'classification',
      question: 'What type of set is ℕ = {1, 2, 3, ...}?',
      options: ['Finite Set', 'Infinite Set', 'Empty Set', 'Universal Set'],
      correct: 1,
      explanation: 'The natural numbers continue forever, making this an infinite set.',
      visualSet: ['1', '2', '3', '...'],
      setColor: 'bg-blue-100 border-blue-400 text-blue-800',
    },
    {
      type: 'classification',
      question: 'What type of set is ∅ = {}?',
      options: ['Finite Set', 'Infinite Set', 'Empty Set', 'Universal Set'],
      correct: 2,
      explanation: 'This set contains no elements, making it the empty set.',
      visualSet: [],
      setColor: 'bg-gray-100 border-gray-400 text-gray-800',
    },
    {
      type: 'subset',
      question: 'Is {2, 4} ⊆ {1, 2, 3, 4, 5}?',
      options: ['Yes, it is a subset', 'No, it is not a subset'],
      correct: 0,
      explanation: 'All elements of {2, 4} are found in {1, 2, 3, 4, 5}, so {2, 4} ⊆ {1, 2, 3, 4, 5}.',
      setA: [2, 4],
      setB: [1, 2, 3, 4, 5],
      colorA: 'bg-green-100 border-green-400 text-green-800',
      colorB: 'bg-orange-100 border-orange-400 text-orange-800',
    },
    {
      type: 'subset',
      question: 'Is {1, 6} ⊆ {1, 2, 3, 4, 5}?',
      options: ['Yes, it is a subset', 'No, it is not a subset'],
      correct: 1,
      explanation: 'Element 6 is not in {1, 2, 3, 4, 5}, so {1, 6} is not a subset.',
      setA: [1, 6],
      setB: [1, 2, 3, 4, 5],
      colorA: 'bg-red-100 border-red-400 text-red-800',
      colorB: 'bg-orange-100 border-orange-400 text-orange-800',
    },
    {
      type: 'drag-drop',
      question: 'Drag each set to its correct type:',
      sets: [
        { set: '{a, b, c}', type: 'Finite', color: 'bg-pink-100 border-pink-400 text-pink-800' },
        { set: '∅', type: 'Empty', color: 'bg-gray-100 border-gray-400 text-gray-800' },
        { set: '{1, 2, 3, ...}', type: 'Infinite', color: 'bg-cyan-100 border-cyan-400 text-cyan-800' },
        { set: '{x, y, z}', type: 'Finite', color: 'bg-yellow-100 border-yellow-400 text-yellow-800' },
      ],
      categories: ['Finite', 'Infinite', 'Empty'],
      explanation: 'Sets with countable elements are finite, sets that continue forever are infinite, and sets with no elements are empty.',
    },
  ];

  const currentEx = exercises[currentExercise];

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowFeedback(true);
    if (index === (currentEx as ClassificationExercise | SubsetExercise).correct) {
      setScore(score + 1);
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: DragDropSet) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, category: string) => {
    e.preventDefault();
    if (draggedItem) {
      setDroppedItems((prev) => ({
        ...prev,
        [draggedItem.set]: category,
      }));
      setDraggedItem(null);
    }
  };

  const checkDragDropAnswer = () => {
    setShowFeedback(true);
    const allCorrect = (currentEx as DragDropExercise).sets.every(
      (item) => droppedItems[item.set] === item.type
    );
    if (allCorrect) {
      setScore(score + 1);
    }
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      setCurrentExercise(0);
      setScore(0);
    }
    setSelectedAnswer(null);
    setShowFeedback(false);
    setDroppedItems({});
    setDraggedItem(null);
  };

  const resetExercise = () => {
    setCurrentExercise(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setDroppedItems({});
    setDraggedItem(null);
  };

  const renderSetVisualization = () => {
    if (currentEx.type === 'classification') {
      const ex = currentEx as ClassificationExercise;
      return (
        <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-lg font-mono text-indigo-800 mb-2">
              Set: {ex.visualSet.length === 0 ? '∅' : `{${ex.visualSet.join(', ')}}`}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {ex.visualSet.length === 0 ? (
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500">
                Empty
              </div>
            ) : (
              ex.visualSet.map((element, idx) => (
                <div
                  key={idx}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono text-sm ${ex.setColor}`}
                >
                  {element}
                </div>
              ))
            )}
          </div>
          <div className="mt-4 text-center">
            {ex.visualSet.length === 0 && (
              <div className="text-sm text-gray-600">No elements</div>
            )}
            {ex.visualSet.includes('...') && (
              <div className="text-sm text-blue-600 flex items-center justify-center gap-1">
                <Infinity className="w-4 h-4" />
                Continues infinitely
              </div>
            )}
            {ex.visualSet.length > 0 && !ex.visualSet.includes('...') && (
              <div className="text-sm text-purple-600 flex items-center justify-center gap-1">
                <Hash className="w-4 h-4" />
                {ex.visualSet.length} elements
              </div>
            )}
          </div>
        </div>
      );
    }

    if (currentEx.type === 'subset') {
      const ex = currentEx as SubsetExercise;
      return (
        <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-orange-50 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-sm text-gray-600 mb-2">Set A</div>
            <div className="text-lg font-mono text-green-800 mb-3">
              {`{${ex.setA.join(', ')}}`}
            </div>
            <div className="text-sm text-gray-600 mb-2">Set B</div>
            <div className="text-lg font-mono text-orange-800">
              {`{${ex.setB.join(', ')}}`}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-600 mb-2">Set A elements:</div>
              <div className="flex flex-wrap justify-center gap-2">
                {ex.setA.map((element, idx) => (
                  <div
                    key={idx}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-sm ${ex.colorA}`}
                  >
                    {element}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">Set B elements:</div>
              <div className="flex flex-wrap justify-center gap-2">
                {ex.setB.map((element, idx) => (
                  <div
                    key={idx}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-sm ${
                      ex.setA.includes(element) ? ex.colorA : ex.colorB
                    }`}
                  >
                    {element}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  const renderDragDropExercise = () => {
    if (currentEx.type !== 'drag-drop') return null;
    const ex = currentEx as DragDropExercise;
    return (
      <div className="space-y-4">
        <div className="text-center mb-4">
          <div className="text-sm text-gray-600 mb-2">Drag sets to their categories:</div>
        </div>
        {/* Draggable sets */}
        <div className="space-y-2">
          {ex.sets.map((item, idx) => (
            <div
              key={idx}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              className={`p-3 rounded-lg border-2 ${item.color} cursor-move text-center font-mono transition-transform hover:scale-105 ${
                droppedItems[item.set] ? 'opacity-50' : ''
              }`}
            >
              {item.set}
            </div>
          ))}
        </div>
        {/* Drop zones */}
        <div className="grid grid-cols-1 gap-3 mt-6">
          {ex.categories.map((category, idx) => (
            <div
              key={idx}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, category)}
              className={`min-h-16 p-4 rounded-lg border-2 border-dashed text-center transition-colors ${
                category === 'Finite' ? 'border-purple-300 bg-purple-50' :
                category === 'Infinite' ? 'border-blue-300 bg-blue-50' :
                'border-gray-300 bg-gray-50'
              }`}
            >
              <div className="font-semibold text-gray-700 mb-2">{category} Sets</div>
              <div className="space-y-1">
                {Object.entries(droppedItems)
                  .filter(([, cat]) => cat === category)
                  .map(([set]) => (
                    <div key={set} className="text-sm font-mono bg-white p-1 rounded border">
                      {set}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        {!showFeedback && Object.keys(droppedItems).length === ex.sets.length && (
          <button
            onClick={checkDragDropAnswer}
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
          >
            Check Answer
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-gray-800">Set Types Explorer</h3>
          <div className="text-sm text-gray-600 bg-white px-2 py-1 rounded-full">
            Score: {score}/{exercises.length}
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-purple-200 to-pink-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${((currentExercise + 1) / exercises.length) * 100}%` }}
          />
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Exercise {currentExercise + 1} of {exercises.length}
        </div>
      </div>
      <div className="mb-6">
        <div className="text-base font-medium text-gray-800 mb-4 bg-white p-3 rounded-lg shadow-sm">
          {currentEx.question}
        </div>
        {renderSetVisualization()}
        {currentEx.type === 'drag-drop' ? (
          renderDragDropExercise()
        ) : (
          <div className="space-y-3">
            {(currentEx as ClassificationExercise | SubsetExercise).options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showFeedback}
                className={`w-full p-3 text-left rounded-lg border-2 transition-all transform hover:scale-105 ${
                  selectedAnswer === index
                    ? showFeedback
                      ? index === (currentEx as ClassificationExercise | SubsetExercise).correct
                        ? 'bg-gradient-to-r from-green-100 to-green-200 border-green-500 text-green-800'
                        : 'bg-gradient-to-r from-red-100 to-red-200 border-red-500 text-red-800'
                      : 'bg-gradient-to-r from-blue-100 to-blue-200 border-blue-500 text-blue-800'
                    : showFeedback && index === (currentEx as ClassificationExercise | SubsetExercise).correct
                    ? 'bg-gradient-to-r from-green-100 to-green-200 border-green-500 text-green-800'
                    : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300 text-gray-700 hover:from-gray-100 hover:to-gray-200'
                } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {showFeedback && selectedAnswer === index && (
                    index === (currentEx as ClassificationExercise | SubsetExercise).correct ? (
                      <Check className="w-5 h-5 text-green-600" />
                    ) : (
                      <X className="w-5 h-5 text-red-600" />
                    )
                  )}
                  {showFeedback && selectedAnswer !== index && index === (currentEx as ClassificationExercise | SubsetExercise).correct && (
                    <Check className="w-5 h-5 text-green-600" />
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
        {showFeedback && (
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-400">
            <div className="text-sm font-medium text-blue-800 mb-2">💡 Explanation:</div>
            <div className="text-sm text-blue-700">{currentEx.explanation}</div>
          </div>
        )}
        {showFeedback && (
          <div className="mt-4 flex gap-2">
            <button
              onClick={nextExercise}
              className="flex-1 py-2 px-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              {currentExercise === exercises.length - 1 ? '🔄 Restart' : '➡️ Next'}
            </button>
            <button
              onClick={resetExercise}
              className="py-2 px-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all transform hover:scale-105"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
      <div className="text-xs text-gray-500 text-center bg-white p-2 rounded-lg">
        🎯 Learn about finite, infinite, empty sets and subsets
      </div>
    </div>
  );
};

export default SetTypes;