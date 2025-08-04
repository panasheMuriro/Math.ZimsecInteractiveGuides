// import { useState } from 'react';
// import { BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';
// import { RotateCw, CheckCircle, XCircle, Shuffle } from 'lucide-react';

// const NumberTypesQuiz = () => {
//   const [mode, setMode] = useState<'identify' | 'select'>('identify');
//   const [currentQuestion, setCurrentQuestion] = useState<number>(0);
//   const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
//   const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
//   const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
//   const [score, setScore] = useState<number>(0);
//   const [attempts, setAttempts] = useState<number>(0);

//   // Helper function to check number types
//   const getNumberTypes = (num: number): string[] => {
//     const types: string[] = [];
    
//     // Check for irrational numbers first
//     if (num === Math.PI || num === Math.E || 
//         Math.abs(num - Math.sqrt(2)) < 0.001 || 
//         Math.abs(num - Math.sqrt(3)) < 0.001) {
//       types.push('irrational');
//       return types;
//     }
    
//     // Rational numbers (including integers, whole, natural)
//     if (typeof num === 'number') {
//       types.push('rational');
      
//       // Check if it's an integer
//       if (Number.isInteger(num)) {
//         types.push('integer');
        
//         // Check if it's a whole number
//         if (num >= 0) {
//           types.push('whole');
          
//           // Check if it's a natural number
//           if (num > 0) {
//             types.push('natural');
//           }
//         }
//       }
//     }
    
//     return types;
//   };

//   // Identify mode questions
//   const identifyQuestions = [
//     {
//       number: 5,
//       correctTypes: ['natural', 'whole', 'integer', 'rational'],
//       question: 'Which sets does this number belong to? (Select all that apply)',
//       options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
//     },
//     {
//       number: 0,
//       correctTypes: ['whole', 'integer', 'rational'],
//       question: 'Which sets does this number belong to? (Select all that apply)',
//       options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
//     },
//     {
//       number: -3,
//       correctTypes: ['integer', 'rational'],
//       question: 'Which sets does this number belong to? (Select all that apply)',
//       options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
//     },
//     {
//       number: 0.75,
//       correctTypes: ['rational'],
//       question: 'Which sets does this number belong to? (Select all that apply)',
//       options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
//     },
//     {
//       number: Math.PI,
//       correctTypes: ['irrational'],
//       question: 'Which sets does this number belong to? (Select all that apply)',
//       options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
//     },
//     {
//       number: -2.5,
//       correctTypes: ['rational'],
//       question: 'Which sets does this number belong to? (Select all that apply)',
//       options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
//     },
//     {
//       number: Math.sqrt(2),
//       correctTypes: ['irrational'],
//       question: 'Which sets does this number belong to? (Select all that apply)',
//       options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
//     },
//     {
//       number: 100,
//       correctTypes: ['natural', 'whole', 'integer', 'rational'],
//       question: 'Which sets does this number belong to? (Select all that apply)',
//       options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
//     }
//   ];

//   // Select mode questions
//   const selectQuestions = [
//     {
//       setType: 'natural',
//       numbers: [-2, 0, 1, 2, 3, 4.5, 5, Math.PI],
//       question: 'Select all natural numbers:'
//     },
//     {
//       setType: 'whole',
//       numbers: [-1, 0, 1, 2, 3.5, 4, 5, Math.sqrt(2)],
//       question: 'Select all whole numbers:'
//     },
//     {
//       setType: 'integer',
//       numbers: [-3, -2, -1.5, 0, 1, 2.5, 3, 4],
//       question: 'Select all integers:'
//     },
//     {
//       setType: 'rational',
//       numbers: [-1, -0.5, 0, 0.333, Math.PI, 1.5, 2, Math.sqrt(3)],
//       question: 'Select all rational numbers:'
//     },
//     {
//       setType: 'irrational',
//       numbers: [Math.PI, Math.E, Math.sqrt(2), Math.sqrt(3), 2, 3.14, 0],
//       question: 'Select all irrational numbers:'
//     }
//   ];

//   const toggleAnswerSelection = (index: number) => {
//     if (selectedAnswers.includes(index)) {
//       setSelectedAnswers(selectedAnswers.filter(i => i !== index));
//     } else {
//       setSelectedAnswers([...selectedAnswers, index]);
//     }
//   };

//   const checkIdentifyAnswer = () => {
//     if (selectedAnswers.length === 0) return;
    
//     const currentQuestionObj = identifyQuestions[currentQuestion];
    
//     // Get selected option types
//     const selectedTypes = selectedAnswers.map(i => 
//       currentQuestionObj.options[i].toLowerCase().replace(/s?$/, '')
//     );
    
//     // Check if all selected answers are correct and no correct answers are missing
//     const incorrectSelections = selectedTypes.filter(type => 
//       !currentQuestionObj.correctTypes.includes(type)
//     );
    
//     const missedCorrect = currentQuestionObj.correctTypes.filter(type => 
//       !selectedTypes.includes(type)
//     );
    
//     const isCorrect = incorrectSelections.length === 0 && missedCorrect.length === 0;
    
//     if (isCorrect) {
//       setFeedback({ 
//         message: 'Perfect! ✓', 
//         isCorrect: true 
//       });
//       setScore(score + 1);
//     } else {
//       const correctTypes = currentQuestionObj.correctTypes.map(t => 
//         t.charAt(0).toUpperCase() + t.slice(1)
//       ).join(', ');
//       setFeedback({ 
//         message: `Not quite. Correct sets: ${correctTypes}`, 
//         isCorrect: false 
//       });
//     }
    
//     setAttempts(attempts + 1);
//   };

//   const checkSelectAnswer = () => {
//     const currentQuestionObj = selectQuestions[currentQuestion];
//     const userSelected = selectedNumbers.map(i => currentQuestionObj.numbers[i]);
    
//     // Get correct numbers for the selected type
//     const correctNumbers = currentQuestionObj.numbers.filter(num => 
//       getNumberTypes(num).includes(currentQuestionObj.setType)
//     );
    
//     // Find correct selections
//     const correctSelections = userSelected.filter(selectedNum => 
//       correctNumbers.some(correctNum => 
//         typeof correctNum === 'number' && typeof selectedNum === 'number'
//           ? Math.abs(selectedNum - correctNum) < 0.001
//           : selectedNum === correctNum
//       )
//     );
    
//     // Find incorrect selections
//     const incorrectSelections = userSelected.filter(selectedNum => 
//       !correctNumbers.some(correctNum => 
//         typeof correctNum === 'number' && typeof selectedNum === 'number'
//           ? Math.abs(selectedNum - correctNum) < 0.001
//           : selectedNum === correctNum
//       )
//     );
    
//     // Find missed correct numbers
//     const missedCorrect = correctNumbers.filter(correctNum => 
//       !userSelected.some(selectedNum => 
//         typeof correctNum === 'number' && typeof selectedNum === 'number'
//           ? Math.abs(selectedNum - correctNum) < 0.001
//           : selectedNum === correctNum
//       )
//     );
    
//     const isCorrect = incorrectSelections.length === 0 && missedCorrect.length === 0;
    
//     if (isCorrect) {
//       setFeedback({ 
//         message: 'Perfect! ✓', 
//         isCorrect: true 
//       });
//       setScore(score + 1);
//     } else {
//       setFeedback({ 
//         message: `Not quite right. You got ${correctSelections.length}/${correctNumbers.length} correct.`, 
//         isCorrect: false 
//       });
//     }
    
//     setAttempts(attempts + 1);
//   };

//   const toggleNumberSelection = (index: number) => {
//     if (selectedNumbers.includes(index)) {
//       setSelectedNumbers(selectedNumbers.filter(i => i !== index));
//     } else {
//       setSelectedNumbers([...selectedNumbers, index]);
//     }
//   };

//   const nextQuestion = () => {
//     if (mode === 'identify') {
//       setCurrentQuestion((currentQuestion + 1) % identifyQuestions.length);
//     } else {
//       setCurrentQuestion((currentQuestion + 1) % selectQuestions.length);
//     }
    
//     setSelectedAnswers([]);
//     setSelectedNumbers([]);
//     setFeedback(null);
//   };

//   const resetQuiz = () => {
//     setCurrentQuestion(0);
//     setSelectedAnswers([]);
//     setSelectedNumbers([]);
//     setFeedback(null);
//     setScore(0);
//     setAttempts(0);
//   };

//   const switchMode = () => {
//     setMode(mode === 'identify' ? 'select' : 'identify');
//     setCurrentQuestion(0);
//     setSelectedAnswers([]);
//     setSelectedNumbers([]);
//     setFeedback(null);
//   };

//   const getFeedbackColor = () => {
//     if (!feedback) return '';
//     return feedback.isCorrect 
//       ? 'bg-green-500/20 border-green-400' 
//       : 'bg-amber-500/20 border-amber-400';
//   };

//   const getNumberTypeColor = (type: string) => {
//     switch (type) {
//       case 'natural': return 'bg-green-500';
//       case 'whole': return 'bg-blue-500';
//       case 'integer': return 'bg-purple-500';
//       case 'rational': return 'bg-indigo-500';
//       case 'irrational': return 'bg-amber-500';
//       default: return 'bg-gray-500';
//     }
//   };

//   const formatNumber = (num: number): string => {
//     if (num === Math.PI) return 'π';
//     if (num === Math.E) return 'e';
//     if (Math.abs(num - Math.sqrt(2)) < 0.001) return '√2';
//     if (Math.abs(num - Math.sqrt(3)) < 0.001) return '√3';
//     if (Number.isInteger(num)) return num.toString();
//     return num.toFixed(3).replace(/\.?0+$/, '');
//   };

//   return (
//     <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-6 rounded-3xl text-white shadow-xl max-w-md w-full">
//       <div className="flex items-center justify-between mb-5">
//         <h3 className="text-2xl font-bold flex items-center">
//           <span className="mr-2 text-3xl">🔢</span> Number Types Quiz
//         </h3>
//         <div className="flex gap-2">
//           <div className="bg-white/20 text-sm font-bold px-3 py-1 rounded-full">
//             {score}/{attempts || '0'}
//           </div>
//           <button
//             onClick={resetQuiz}
//             className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
//             aria-label="Reset quiz"
//           >
//             <RotateCw className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
      
//       <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-5 shadow-sm border border-white/10">
//         <div className="flex gap-2 mb-3">
//           <button
//             onClick={() => { setMode('identify'); resetQuiz(); }}
//             className={`flex-1 py-2 rounded-lg font-bold transition-all ${
//               mode === 'identify' 
//                 ? 'bg-white/30 shadow-md' 
//                 : 'bg-white/10 hover:bg-white/20'
//             }`}
//           >
//             Identify Type
//           </button>
//           <button
//             onClick={() => { setMode('select'); resetQuiz(); }}
//             className={`flex-1 py-2 rounded-lg font-bold transition-all ${
//               mode === 'select' 
//                 ? 'bg-white/30 shadow-md' 
//                 : 'bg-white/10 hover:bg-white/20'
//             }`}
//           >
//             Select Numbers
//           </button>
//         </div>
        
//         <div className="text-center">
//           <span className="text-sm opacity-90">
//             {mode === 'identify' 
//               ? 'Question ' + (currentQuestion + 1) + ' of ' + identifyQuestions.length
//               : 'Question ' + (currentQuestion + 1) + ' of ' + selectQuestions.length}
//           </span>
//         </div>
//       </div>
      
//       {mode === 'identify' ? (
//         <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 mb-5 shadow-sm border border-white/10">
//           <div className="text-center mb-5">
//             <h4 className="font-bold text-lg mb-3">{identifyQuestions[currentQuestion].question}</h4>
//             <div className="bg-white/10 rounded-xl p-6 inline-block overflow-x-auto">
//               {/* Use BlockMath for the large number display */}
//               <BlockMath math={`\\Huge{${identifyQuestions[currentQuestion].number}}`} />
//             </div>
//           </div>
          
//           <div className="flex flex-wrap gap-2 justify-center mb-5">
//             {identifyQuestions[currentQuestion].options.map((option, index) => (
//               <button
//                 key={index}
//                 onClick={() => toggleAnswerSelection(index)}
//                 disabled={!!feedback}
//                 className={`px-4 py-2 rounded-xl font-bold transition-all duration-200 ${
//                   selectedAnswers.includes(index)
//                     ? feedback
//                       ? identifyQuestions[currentQuestion].correctTypes.includes(option.toLowerCase().replace(/s?$/, ''))
//                         ? 'bg-green-500 text-white'
//                         : 'bg-red-500 text-white'
//                       : 'bg-white/40 text-white border-2 border-white'
//                     : feedback && identifyQuestions[currentQuestion].correctTypes.includes(option.toLowerCase().replace(/s?$/, ''))
//                       ? 'bg-green-500/30 text-white border-2 border-green-400'
//                       : 'bg-white/20 hover:bg-white/30 text-white border-2 border-transparent'
//                 } ${feedback ? 'cursor-default' : 'hover:scale-[1.03]'}`}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
          
//           {selectedAnswers.length > 0 && !feedback && (
//             <button
//               onClick={checkIdentifyAnswer}
//               className="w-full bg-indigo-500 hover:bg-indigo-600 rounded-xl p-3 font-bold transition-all duration-200 shadow-md"
//             >
//               Check Answer
//             </button>
//           )}
//         </div>
//       ) : (
//         <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 mb-5 shadow-sm border border-white/10">
//           <h4 className="font-bold text-lg mb-4 text-center">
//             {selectQuestions[currentQuestion].question}
//           </h4>
          
//           <div className="grid grid-cols-4 gap-2 mb-5">
//             {selectQuestions[currentQuestion].numbers.map((num, index) => (
//               <button
//                 key={index}
//                 onClick={() => toggleNumberSelection(index)}
//                 className={`aspect-square flex items-center justify-center rounded-xl font-bold text-sm transition-all duration-200 border-2 ${
//                   selectedNumbers.includes(index)
//                     ? 'bg-white/40 border-white scale-95'
//                     : 'bg-white/20 hover:bg-white/30 border-transparent'
//                 }`}
//               >
//                 {formatNumber(num)}
//               </button>
//             ))}
//           </div>
          
//           {selectedNumbers.length > 0 && !feedback && (
//             <button
//               onClick={checkSelectAnswer}
//               className="w-full bg-indigo-500 hover:bg-indigo-600 rounded-xl p-3 font-bold transition-all duration-200 shadow-md"
//             >
//               Check Selection
//             </button>
//           )}
//         </div>
//       )}
      
//       {feedback && (
//         <div className={`rounded-2xl p-5 mb-5 backdrop-blur-sm border ${getFeedbackColor()}`}>
//           <div className="flex items-center mb-3">
//             {feedback.isCorrect ? (
//               <CheckCircle className="text-green-300 mr-2" size={24} />
//             ) : (
//               <XCircle className="text-amber-300 mr-2" size={24} />
//             )}
//             <p className={`font-bold text-lg ${feedback.isCorrect ? 'text-green-100' : 'text-amber-100'}`}>
//               {feedback.message}
//             </p>
//           </div>
          
//           <div className="bg-white/10 rounded-xl p-4">
//             <h4 className="font-bold mb-2">Number Sets Hierarchy:</h4>
//             <div className="space-y-2 text-sm">
//               <div className="flex items-center">
//                 <div className={`w-3 h-3 rounded-full mr-2 ${getNumberTypeColor('natural')}`}></div>
//                 <span>Natural: 1, 2, 3, ... (Counting numbers)</span>
//               </div>
//               <div className="flex items-center">
//                 <div className={`w-3 h-3 rounded-full mr-2 ${getNumberTypeColor('whole')}`}></div>
//                 <span>Whole: 0, 1, 2, ... (Natural + zero)</span>
//               </div>
//               <div className="flex items-center">
//                 <div className={`w-3 h-3 rounded-full mr-2 ${getNumberTypeColor('integer')}`}></div>
//                 <span>Integer: ..., -1, 0, 1, ... (Whole + negatives)</span>
//               </div>
//               <div className="flex items-center">
//                 <div className={`w-3 h-3 rounded-full mr-2 ${getNumberTypeColor('rational')}`}></div>
//                 <span>Rational: Fractions/Decimals (Integer + fractions)</span>
//               </div>
//               <div className="flex items-center">
//                 <div className={`w-3 h-3 rounded-full mr-2 ${getNumberTypeColor('irrational')}`}></div>
//                 <span>Irrational: π, √2, e (Cannot be fractions)</span>
//               </div>
//             </div>
//             <p className="text-xs mt-2 opacity-80">
//               Note: Each set includes all sets above it in the hierarchy
//             </p>
//           </div>
//         </div>
//       )}
      
//       <div className="flex gap-3">
//         <button
//           onClick={switchMode}
//           className="flex items-center bg-white/20 hover:bg-white/30 rounded-xl p-3 font-bold transition-all duration-200"
//         >
//           <Shuffle className="mr-2" size={18} />
//           Switch Mode
//         </button>
//         <button
//           onClick={nextQuestion}
//           className="flex-1 bg-white/20 hover:bg-white/30 rounded-xl p-3 font-bold transition-all duration-200 shadow-md"
//         >
//           {mode === 'identify' 
//             ? currentQuestion === identifyQuestions.length - 1 
//               ? 'Restart Quiz' 
//               : 'Next Question'
//             : currentQuestion === selectQuestions.length - 1 
//               ? 'Restart Quiz' 
//               : 'Next Question'} →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NumberTypesQuiz;

import { useState } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { RotateCw, CheckCircle, XCircle, Shuffle } from 'lucide-react';

const NumberTypesQuiz = () => {
  const [mode, setMode] = useState<'identify' | 'select'>('identify');
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);

  // Helper function to check number types (remains the same)
  const getNumberTypes = (num: number): string[] => {
    const types: string[] = [];
    if (num === Math.PI || num === Math.E ||
        Math.abs(num - Math.sqrt(2)) < 0.001 ||
        Math.abs(num - Math.sqrt(3)) < 0.001) {
      types.push('irrational');
      return types;
    }
    if (typeof num === 'number') {
      types.push('rational');
      if (Number.isInteger(num)) {
        types.push('integer');
        if (num >= 0) {
          types.push('whole');
          if (num > 0) {
            types.push('natural');
          }
        }
      }
    }
    return types;
  };

  // Identify mode questions (remains the same)
  const identifyQuestions = [
    {
      number: 5,
      correctTypes: ['natural', 'whole', 'integer', 'rational'],
      question: 'Which sets does this number belong to? (Select all that apply)',
      options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
    },
    {
      number: 0,
      correctTypes: ['whole', 'integer', 'rational'],
      question: 'Which sets does this number belong to? (Select all that apply)',
      options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
    },
    {
      number: -3,
      correctTypes: ['integer', 'rational'],
      question: 'Which sets does this number belong to? (Select all that apply)',
      options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
    },
    {
      number: 0.75,
      correctTypes: ['rational'],
      question: 'Which sets does this number belong to? (Select all that apply)',
      options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
    },
    {
      number: Math.PI,
      correctTypes: ['irrational'],
      question: 'Which sets does this number belong to? (Select all that apply)',
      options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
    },
    {
      number: -2.5,
      correctTypes: ['rational'],
      question: 'Which sets does this number belong to? (Select all that apply)',
      options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
    },
    {
      number: Math.sqrt(2),
      correctTypes: ['irrational'],
      question: 'Which sets does this number belong to? (Select all that apply)',
      options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
    },
    {
      number: 100,
      correctTypes: ['natural', 'whole', 'integer', 'rational'],
      question: 'Which sets does this number belong to? (Select all that apply)',
      options: ['Natural', 'Whole', 'Integer', 'Rational', 'Irrational']
    }
  ];

  // Select mode questions (remains the same)
  const selectQuestions = [
    {
      setType: 'natural',
      numbers: [-2, 0, 1, 2, 3, 4.5, 5, Math.PI],
      question: 'Select all natural numbers:'
    },
    {
      setType: 'whole',
      numbers: [-1, 0, 1, 2, 3.5, 4, 5, Math.sqrt(2)],
      question: 'Select all whole numbers:'
    },
    {
      setType: 'integer',
      numbers: [-3, -2, -1.5, 0, 1, 2.5, 3, 4],
      question: 'Select all integers:'
    },
    {
      setType: 'rational',
      numbers: [-1, -0.5, 0, 0.333, Math.PI, 1.5, 2, Math.sqrt(3)],
      question: 'Select all rational numbers:'
    },
    {
      setType: 'irrational',
      numbers: [Math.PI, Math.E, Math.sqrt(2), Math.sqrt(3), 2, 3.14, 0],
      question: 'Select all irrational numbers:'
    }
  ];

  const toggleAnswerSelection = (index: number) => {
    if (selectedAnswers.includes(index)) {
      setSelectedAnswers(selectedAnswers.filter(i => i !== index));
    } else {
      setSelectedAnswers([...selectedAnswers, index]);
    }
  };

  const checkIdentifyAnswer = () => {
    if (selectedAnswers.length === 0) return;
    const currentQuestionObj = identifyQuestions[currentQuestion];
    const selectedTypes = selectedAnswers.map(i =>
      currentQuestionObj.options[i].toLowerCase().replace(/s?$/, '')
    );
    const incorrectSelections = selectedTypes.filter(type =>
      !currentQuestionObj.correctTypes.includes(type)
    );
    const missedCorrect = currentQuestionObj.correctTypes.filter(type =>
      !selectedTypes.includes(type)
    );
    const isCorrect = incorrectSelections.length === 0 && missedCorrect.length === 0;

    if (isCorrect) {
      setFeedback({
        message: 'Perfect! ✓',
        isCorrect: true
      });
      setScore(score + 1);
    } else {
      const correctTypes = currentQuestionObj.correctTypes.map(t =>
        t.charAt(0).toUpperCase() + t.slice(1)
      ).join(', ');
      setFeedback({
        message: `Not quite. Correct sets: ${correctTypes}`,
        isCorrect: false
      });
    }
    setAttempts(attempts + 1);
  };

  const checkSelectAnswer = () => {
    const currentQuestionObj = selectQuestions[currentQuestion];
    const userSelected = selectedNumbers.map(i => currentQuestionObj.numbers[i]);
    const correctNumbers = currentQuestionObj.numbers.filter(num =>
      getNumberTypes(num).includes(currentQuestionObj.setType)
    );
    const correctSelections = userSelected.filter(selectedNum =>
      correctNumbers.some(correctNum =>
        typeof correctNum === 'number' && typeof selectedNum === 'number'
          ? Math.abs(selectedNum - correctNum) < 0.001
          : selectedNum === correctNum
      )
    );
    const incorrectSelections = userSelected.filter(selectedNum =>
      !correctNumbers.some(correctNum =>
        typeof correctNum === 'number' && typeof selectedNum === 'number'
          ? Math.abs(selectedNum - correctNum) < 0.001
          : selectedNum === correctNum
      )
    );
    const missedCorrect = correctNumbers.filter(correctNum =>
      !userSelected.some(selectedNum =>
        typeof correctNum === 'number' && typeof selectedNum === 'number'
          ? Math.abs(selectedNum - correctNum) < 0.001
          : selectedNum === correctNum
      )
    );
    const isCorrect = incorrectSelections.length === 0 && missedCorrect.length === 0;

    if (isCorrect) {
      setFeedback({
        message: 'Perfect! ✓',
        isCorrect: true
      });
      setScore(score + 1);
    } else {
      setFeedback({
        message: `Not quite right. You got ${correctSelections.length}/${correctNumbers.length} correct.`,
        isCorrect: false
      });
    }
    setAttempts(attempts + 1);
  };

  const toggleNumberSelection = (index: number) => {
    if (selectedNumbers.includes(index)) {
      setSelectedNumbers(selectedNumbers.filter(i => i !== index));
    } else {
      setSelectedNumbers([...selectedNumbers, index]);
    }
  };

  const nextQuestion = () => {
    if (mode === 'identify') {
      setCurrentQuestion((currentQuestion + 1) % identifyQuestions.length);
    } else {
      setCurrentQuestion((currentQuestion + 1) % selectQuestions.length);
    }
    setSelectedAnswers([]);
    setSelectedNumbers([]);
    setFeedback(null);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setSelectedNumbers([]);
    setFeedback(null);
    setScore(0);
    setAttempts(0);
  };

  const switchMode = () => {
    setMode(mode === 'identify' ? 'select' : 'identify');
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setSelectedNumbers([]);
    setFeedback(null);
  };

  const getFeedbackColor = () => {
    if (!feedback) return '';
    return feedback.isCorrect
      ? 'bg-[#b56576]/20 border-[#b56576]' // Dusty Rose for correct
      : 'bg-[#e56b6f]/20 border-[#e56b6f]'; // Salmon Pink for incorrect
  };

  const getNumberTypeColor = (type: string) => {
    switch (type) {
      case 'natural': return 'bg-[#eaac8b]'; // Light Orange
      case 'whole': return 'bg-[#e56b6f]'; // Salmon Pink
      case 'integer': return 'bg-[#b56576]'; // Dusty Rose
      case 'rational': return 'bg-[#6d597a]'; // Purple
      case 'irrational': return 'bg-[#355070]'; // Dark Blue
      default: return 'bg-gray-500';
    }
  };

  const formatNumber = (num: number): string => {
    if (num === Math.PI) return 'π';
    if (num === Math.E) return 'e';
    if (Math.abs(num - Math.sqrt(2)) < 0.001) return '√2';
    if (Math.abs(num - Math.sqrt(3)) < 0.001) return '√3';
    if (Number.isInteger(num)) return num.toString();
    return num.toFixed(3).replace(/\.?0+$/, '');
  };

  // Helper for mode button colors
  const getModeButtonColor = (isActive: boolean) => {
    return isActive
      ? 'bg-[#eaac8b] text-[#355070] shadow-md font-extrabold' // Active: Light Orange with Dark Blue text
      : 'bg-[#6d597a] text-white hover:bg-[#355070]'; // Inactive: Purple with white text
  };

  // Helper for feedback icon color
  const getFeedbackIconColor = () => {
    if (!feedback) return '';
    return feedback.isCorrect ? 'text-[#b56576]' : 'text-[#e56b6f]';
  };

  // Helper for text color based on background (for legend)
  const getTextColorForLegendBackground = (bgColorClass: string) => {
    // Dark backgrounds (Dark Blue, Purple, Dusty Rose, Salmon Pink) need light text
    if (bgColorClass.includes('[#355070]') || bgColorClass.includes('[#6d597a]') || bgColorClass.includes('[#b56576]') || bgColorClass.includes('[#e56b6f]')) {
      return 'text-white';
    }
    // Light background (Light Orange) needs dark text
    if (bgColorClass.includes('[#eaac8b]')) {
      return 'text-[#355070]'; // Dark Blue text
    }
    // Default
    return 'text-white';
  };


  return (
    <div className="bg-[#6d597a] p-6 rounded-3xl text-white shadow-xl max-w-md w-full border-4 border-[#355070]"> {/* Purple background, Dark Blue border */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold flex items-center">
          <span className="mr-2 text-3xl">🔢</span> Number Types Quiz
        </h3>
        <div className="flex gap-2">
          <div className="bg-[#355070] text-white text-sm font-bold px-3 py-1 rounded-full border-2 border-[#eaac8b]">
            {score}/{attempts || '0'}
          </div>
          <button
            onClick={resetQuiz}
            className="bg-[#355070] text-white hover:bg-[#eaac8b] hover:text-[#355070] rounded-full p-2 transition-all border-2 border-white"
            aria-label="Reset quiz"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-[#355070]/30 rounded-2xl p-4 mb-5 shadow-sm border-2 border-[#eaac8b]"> {/* Dark Blue background, Light Orange border */}
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => { setMode('identify'); resetQuiz(); }}
            className={`flex-1 py-2 rounded-lg font-bold transition-all ${getModeButtonColor(mode === 'identify')}`}
          >
            Identify Type
          </button>
          <button
            onClick={() => { setMode('select'); resetQuiz(); }}
            className={`flex-1 py-2 rounded-lg font-bold transition-all ${getModeButtonColor(mode === 'select')}`}
          >
            Select Numbers
          </button>
        </div>
        <div className="text-center text-white">
          <span className="text-sm font-medium">
            {mode === 'identify'
              ? 'Question ' + (currentQuestion + 1) + ' of ' + identifyQuestions.length
              : 'Question ' + (currentQuestion + 1) + ' of ' + selectQuestions.length}
          </span>
        </div>
      </div>

      {mode === 'identify' ? (
        <div className="bg-[#355070]/30 rounded-2xl p-5 mb-5 shadow-sm border-2 border-[#eaac8b]"> {/* Dark Blue background, Light Orange border */}
          <div className="text-center mb-5">
            <h4 className="font-bold text-lg mb-3 text-white">{identifyQuestions[currentQuestion].question}</h4>
            <div className="bg-[#6d597a]/40 rounded-xl p-6 inline-block overflow-x-auto border-2 border-[#b56576]">
              {/* Use BlockMath for the large number display */}
              <BlockMath math={`\\Huge{${identifyQuestions[currentQuestion].number}}`} />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-5">
            {identifyQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => toggleAnswerSelection(index)}
                disabled={!!feedback}
                className={`px-4 py-2 rounded-xl font-bold transition-all duration-200 border-2
                  ${selectedAnswers.includes(index)
                    ? feedback
                      ? identifyQuestions[currentQuestion].correctTypes.includes(option.toLowerCase().replace(/s?$/, ''))
                        ? 'bg-[#b56576] text-white border-[#b56576]' // Correct selected
                        : 'bg-[#e56b6f] text-white border-[#e56b6f]' // Incorrect selected
                      : 'bg-[#eaac8b] text-[#355070] border-[#eaac8b]' // Selected, no feedback
                    : feedback && identifyQuestions[currentQuestion].correctTypes.includes(option.toLowerCase().replace(/s?$/, ''))
                      ? 'bg-[#b56576]/30 text-white border-[#b56576]' // Correct but not selected
                      : 'bg-[#b56576]/20 hover:bg-[#b56576]/40 text-white border-[#b56576]/30' // Default
                  } ${feedback ? 'cursor-default' : 'hover:scale-[1.03]'}`}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswers.length > 0 && !feedback && (
            <button
              onClick={checkIdentifyAnswer}
              className="w-full bg-[#eaac8b] hover:bg-[#f0c0a0] text-[#355070] rounded-xl p-3 font-bold transition-all duration-200 shadow-md border-2 border-[#355070]"
            >
              Check Answer
            </button>
          )}
        </div>
      ) : (
        <div className="bg-[#355070]/30 rounded-2xl p-5 mb-5 shadow-sm border-2 border-[#eaac8b]"> {/* Dark Blue background, Light Orange border */}
          <h4 className="font-bold text-lg mb-4 text-center text-white">
            {selectQuestions[currentQuestion].question}
          </h4>
          <div className="grid grid-cols-4 gap-2 mb-5">
            {selectQuestions[currentQuestion].numbers.map((num, index) => (
              <button
                key={index}
                onClick={() => toggleNumberSelection(index)}
                className={`aspect-square flex items-center justify-center rounded-xl font-bold text-sm transition-all duration-200 border-2
                  ${selectedNumbers.includes(index)
                    ? 'bg-[#eaac8b] text-[#355070] border-[#eaac8b] scale-95' // Selected
                    : 'bg-[#b56576]/20 hover:bg-[#b56576]/40 text-white border-[#b56576]/30' // Default
                  }`}
              >
                {formatNumber(num)}
              </button>
            ))}
          </div>
          {selectedNumbers.length > 0 && !feedback && (
            <button
              onClick={checkSelectAnswer}
              className="w-full bg-[#eaac8b] hover:bg-[#f0c0a0] text-[#355070] rounded-xl p-3 font-bold transition-all duration-200 shadow-md border-2 border-[#355070]"
            >
              Check Selection
            </button>
          )}
        </div>
      )}

      {feedback && (
        <div className={`rounded-2xl p-5 mb-5 border-2 ${getFeedbackColor()}`}>
          <div className="flex items-center mb-3">
            {feedback.isCorrect ? (
              <CheckCircle className={getFeedbackIconColor()} size={24} />
            ) : (
              <XCircle className={getFeedbackIconColor()} size={24} />
            )}
            <p className={`font-bold text-lg ml-2 ${feedback.isCorrect ? 'text-[#b56576]' : 'text-[#e56b6f]'}`}>
              {feedback.message}
            </p>
          </div>
          <div className="bg-[#6d597a]/40 rounded-xl p-4 border border-[#b56576]">
            <h4 className="font-bold mb-2 text-white">Number Sets Hierarchy:</h4>
            <div className="space-y-2 text-sm text-white">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${getNumberTypeColor('natural')}`}></div>
                <span className={getTextColorForLegendBackground(getNumberTypeColor('natural'))}>Natural: 1, 2, 3, ... (Counting numbers)</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${getNumberTypeColor('whole')}`}></div>
                <span className={getTextColorForLegendBackground(getNumberTypeColor('whole'))}>Whole: 0, 1, 2, ... (Natural + zero)</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${getNumberTypeColor('integer')}`}></div>
                <span className={getTextColorForLegendBackground(getNumberTypeColor('integer'))}>Integer: ..., -1, 0, 1, ... (Whole + negatives)</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${getNumberTypeColor('rational')}`}></div>
                <span className={getTextColorForLegendBackground(getNumberTypeColor('rational'))}>Rational: Fractions/Decimals (Integer + fractions)</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${getNumberTypeColor('irrational')}`}></div>
                <span className={getTextColorForLegendBackground(getNumberTypeColor('irrational'))}>Irrational: π, √2, e (Cannot be fractions)</span>
              </div>
            </div>
            <p className="text-xs mt-2 opacity-80 text-[#eaac8b]">
              Note: Each set includes all sets above it in the hierarchy
            </p>
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={switchMode}
          className="flex items-center bg-[#355070] hover:bg-[#eaac8b] hover:text-[#355070] text-white rounded-xl p-3 font-bold transition-all duration-200 border-2 border-[#eaac8b]"
        >
          <Shuffle className="mr-2" size={18} />
          Switch Mode
        </button>
        <button
          onClick={nextQuestion}
          className="flex-1 bg-[#355070] hover:bg-[#eaac8b] hover:text-[#355070] text-white rounded-xl p-3 font-bold transition-all duration-200 shadow-md border-2 border-[#eaac8b]"
        >
          {mode === 'identify'
            ? currentQuestion === identifyQuestions.length - 1
              ? 'Restart Quiz'
              : 'Next Question'
            : currentQuestion === selectQuestions.length - 1
              ? 'Restart Quiz'
              : 'Next Question'} →
        </button>
      </div>
    </div>
  );
};

export default NumberTypesQuiz;