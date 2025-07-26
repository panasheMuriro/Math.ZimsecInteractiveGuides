// import React, { useState, ReactNode } from 'react';
// import { ChevronRight, Check, RotateCcw, Lightbulb, BookOpen, ArrowRight, Eye, X, AlertCircle } from 'lucide-react';
// import 'katex/dist/katex.min.css';
// import { InlineMath, BlockMath } from 'react-katex';

// // Define the structure for a practice problem
// interface PracticeProblem {
//   expression: string; // The expression to expand (e.g., "(x + 3)(x + 5)")
//   solution: {
//     first: string; // Result of First multiplication (e.g., "x^2")
//     outer: string; // Result of Outer multiplication (e.g., "5x")
//     inner: string; // Result of Inner multiplication (e.g., "3x")
//     last: string; // Result of Last multiplication (e.g., "15")
//     combined: string[]; // Array of terms after combining like terms (e.g., ["x^2", "8x", "15"])
//     finalExpanded: string; // The final expanded expression (e.g., "x^2 + 8x + 15")
//   };
//   explanation: {
//     first: string; // Explanation for First step (can contain KaTeX)
//     outer: string; // Explanation for Outer step (can contain KaTeX)
//     inner: string; // Explanation for Inner step (can contain KaTeX)
//     last: string; // Explanation for Last step (can contain KaTeX)
//     combined: string; // Explanation for combining terms (can contain KaTeX)
//     finalExpanded: string; // Explanation for the final form (can contain KaTeX)
//   };
//   hint: string; // Hint for the problem (can contain KaTeX)
// }

// // Define the structure for MCQ options at each step
// interface McqOptions {
//   first: string[]; // Options for First result
//   outer: string[]; // Options for Outer result
//   inner: string[]; // Options for Inner result
//   last: string[]; // Options for Last result
//   combined: string[][]; // Options for combined terms (array of arrays)
//   finalExpanded: string[]; // Options for the final expanded form
// }

// // Define the structure for a step in the process
// interface Step {
//   id: keyof McqOptions; // Links to the MCQ options and solution fields
//   title: string; // Can contain KaTeX
//   description: string; // Can contain KaTeX
//   isMcq: true; // All steps are MCQ in this version
// }

// const FoilMethodTool: React.FC = () => {
//   // --- State Management ---
//   const [currentProblemIndex, setCurrentProblemIndex] = useState<number>(0);
//   const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
//   const [userMcqSelection, setUserMcqSelection] = useState<string | string[] | null>(null); // Handles single string or array of strings
//   const [showFeedback, setShowFeedback] = useState<{ correct: boolean; show: boolean } | null>(null);
//   const [showHint, setShowHint] = useState<boolean>(false);
//   const [showAnswer, setShowAnswer] = useState<boolean>(false);
//   const [completedProblems, setCompletedProblems] = useState<Set<number>>(new Set());

//   // --- Practice Problems Data ---
//   const practiceProblems: PracticeProblem[] = [
//     {
//       expression: "(x + 3)(x + 5)",
//       solution: {
//         first: "x^2",
//         outer: "5x",
//         inner: "3x",
//         last: "15",
//         combined: ["x^2", "8x", "15"],
//         finalExpanded: "x^2 + 8x + 15"
//       },
//       explanation: {
//         first: "Multiply the First terms: $x \\times x = x^2$.",
//         outer: "Multiply the Outer terms: $x \\times 5 = 5x$.",
//         inner: "Multiply the Inner terms: $3 \\times x = 3x$.",
//         last: "Multiply the Last terms: $3 \\times 5 = 15$.",
//         combined: "Combine the results: $x^2 + 5x + 3x + 15$. Like terms $5x$ and $3x$ combine to $8x$.",
//         finalExpanded: "The final expanded form is $x^2 + 8x + 15$."
//       },
//       hint: "Remember FOIL: First, Outer, Inner, Last. Multiply the corresponding terms from each bracket."
//     },
//     {
//       expression: "(2x - 1)(x + 4)",
//       solution: {
//         first: "2x^2",
//         outer: "8x",
//         inner: "-x",
//         last: "-4",
//         combined: ["2x^2", "7x", "-4"],
//         finalExpanded: "2x^2 + 7x - 4"
//       },
//       explanation: {
//         first: "Multiply the First terms: $2x \\times x = 2x^2$.",
//         outer: "Multiply the Outer terms: $2x \\times 4 = 8x$.",
//         inner: "Multiply the Inner terms: $-1 \\times x = -x$.",
//         last: "Multiply the Last terms: $-1 \\times 4 = -4$.",
//         combined: "Combine the results: $2x^2 + 8x + (-x) + (-4)$. Like terms $8x$ and $-x$ combine to $7x$.",
//         finalExpanded: "The final expanded form is $2x^2 + 7x - 4$."
//       },
//       hint: "Apply FOIL. Be careful with the signs when multiplying, especially for the terms involving $-1$."
//     },
//     {
//       expression: "(x + 2)(x + 6)", // From the example
//       solution: {
//         first: "x^2",
//         outer: "6x",
//         inner: "2x",
//         last: "12",
//         combined: ["x^2", "8x", "12"],
//         finalExpanded: "x^2 + 8x + 12"
//       },
//       explanation: {
//         first: "Multiply the First terms: $x \\times x = x^2$.",
//         outer: "Multiply the Outer terms: $x \\times 6 = 6x$.",
//         inner: "Multiply the Inner terms: $2 \\times x = 2x$.",
//         last: "Multiply the Last terms: $2 \\times 6 = 12$.",
//         combined: "Combine the results: $x^2 + 6x + 2x + 12$. Like terms $6x$ and $2x$ combine to $8x$.",
//         finalExpanded: "The final expanded form is $x^2 + 8x + 12$."
//       },
//       hint: "Use the FOIL method. Add the coefficients of the like terms ($x$ terms) to combine them."
//     },
//     {
//       expression: "(3x - 2)(x - 5)", // New problem
//       solution: {
//         first: "3x^2",
//         outer: "-15x",
//         inner: "-2x",
//         last: "10",
//         combined: ["3x^2", "-17x", "10"],
//         finalExpanded: "3x^2 - 17x + 10"
//       },
//       explanation: {
//         first: "Multiply the First terms: $3x \\times x = 3x^2$.",
//         outer: "Multiply the Outer terms: $3x \\times -5 = -15x$.",
//         inner: "Multiply the Inner terms: $-2 \\times x = -2x$.",
//         last: "Multiply the Last terms: $-2 \\times -5 = 10$.",
//         combined: "Combine the results: $3x^2 + (-15x) + (-2x) + 10$. Like terms $-15x$ and $-2x$ combine to $-17x$.",
//         finalExpanded: "The final expanded form is $3x^2 - 17x + 10$."
//       },
//       hint: "FOIL it out. Remember that multiplying two negative numbers gives a positive result for the Last term."
//     }
//   ];

//   // --- MCQ Options Data ---
//   const mcqOptionsPerProblem: McqOptions[] = [
//     // Problem 1: (x + 3)(x + 5)
//     {
//       first: ["x^2", "x", "3x", "2x"],
//       outer: ["5x", "5", "x", "8x"],
//       inner: ["3x", "3", "x", "5x"],
//       last: ["15", "8", "3", "5"],
//       combined: [["x^2", "5x", "3x", "15"], ["x^2", "8x", "15"], ["x^2", "15"], ["2x", "8x", "15"]],
//       finalExpanded: ["x^2 + 8x + 15", "x^2 + 15", "x^2 + 5x + 3x", "2x + 8x + 15"]
//     },
//     // Problem 2: (2x - 1)(x + 4)
//     {
//       first: ["2x^2", "2x", "x^2", "2"],
//       outer: ["8x", "8", "2x", "4x"],
//       inner: ["-x", "x", "-1", "-4"],
//       last: ["-4", "4", "-1", "1"],
//       combined: [["2x^2", "8x", "-x", "-4"], ["2x^2", "7x", "-4"], ["2x^2", "-4"], ["2x^2", "8x", "-x"]],
//       finalExpanded: ["2x^2 + 7x - 4", "2x^2 - 7x - 4", "2x^2 + 8x - x - 4", "2x^2 - 4"]
//     },
//     // Problem 3: (x + 2)(x + 6)
//     {
//       first: ["x^2", "x", "2x", "2"],
//       outer: ["6x", "6", "x", "8x"],
//       inner: ["2x", "2", "x", "6x"],
//       last: ["12", "8", "2", "6"],
//       combined: [["x^2", "6x", "2x", "12"], ["x^2", "8x", "12"], ["x^2", "12"], ["2x", "8x", "12"]],
//       finalExpanded: ["x^2 + 8x + 12", "x^2 + 12", "x^2 + 6x + 2x", "2x + 8x + 12"]
//     },
//     // Problem 4: (3x - 2)(x - 5)
//     {
//         first: ["3x^2", "3x", "x^2", "3"],
//         outer: ["-15x", "-15", "3x", "-5x"],
//         inner: ["-2x", "-2", "x", "-5x"],
//         last: ["10", "-10", "2", "5"],
//         combined: [["3x^2", "-15x", "-2x", "10"], ["3x^2", "-17x", "10"], ["3x^2", "10"], ["3x^2", "-15x", "-2x"]],
//         finalExpanded: ["3x^2 - 17x + 10", "3x^2 + 17x + 10", "3x^2 - 15x - 2x + 10", "3x^2 + 10"]
//       }
//   ];

//   // --- Steps Definition ---
//   const steps: Step[] = [
//     {
//       id: "first",
//       title: "Step 1: Multiply First Terms (F)",
//       description: "Multiply the first term of the first bracket by the first term of the second bracket:",
//       isMcq: true
//     },
//     {
//       id: "outer",
//       title: "Step 2: Multiply Outer Terms (O)",
//       description: "Multiply the outer terms of the brackets:",
//       isMcq: true
//     },
//     {
//       id: "inner",
//       title: "Step 3: Multiply Inner Terms (I)",
//       description: "Multiply the inner terms of the brackets:",
//       isMcq: true
//     },
//     {
//       id: "last",
//       title: "Step 4: Multiply Last Terms (L)",
//       description: "Multiply the last term of the first bracket by the last term of the second bracket:",
//       isMcq: true
//     },
//     {
//       id: "combined",
//       title: "Step 5: Combine All Products",
//       description: "List all the products from the previous steps:",
//       isMcq: true
//     },
//     {
//       id: "finalExpanded",
//       title: "Final Step: Simplify by Combining Like Terms",
//       description: "Add or subtract like terms to get the final expanded expression:",
//       isMcq: true
//     }
//   ];

//   // --- Derived State ---
//   const currentProblem = practiceProblems[currentProblemIndex];
//   const currentMcqOptions = mcqOptionsPerProblem[currentProblemIndex];
//   const currentStep = steps[currentStepIndex];

//   // --- Helper Functions ---
//   const checkAnswer = (): boolean => {
//     if (!userMcqSelection) return false;
//     const stepId = currentStep.id;
//     const correctAnswer = currentProblem.solution[stepId];

//     // Handle array steps (combined)
//     if (stepId === "combined") {
//         // Normalize arrays for comparison
//         const normalizeArray = (arr: string[]) => arr.map(item => item.replace(/\s+/g, '').toLowerCase()).sort();
//         const userArray = Array.isArray(userMcqSelection) ? userMcqSelection : [userMcqSelection]; // Ensure user selection is an array
//         const correctArray = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer]; // Ensure correct answer is an array

//         const normalizedUser = normalizeArray(userArray);
//         const normalizedCorrect = normalizeArray(correctArray);

//         // Compare lengths and elements
//         if (normalizedUser.length !== normalizedCorrect.length) return false;
//         return normalizedUser.every((item, index) => item === normalizedCorrect[index]);
//     }

//     // Normalize single string expressions
//     const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase();
//     return normalize(String(userMcqSelection)) === normalize(String(correctAnswer));
//   };


//   const handleSubmit = (): void => {
//     if (!userMcqSelection) return;
//     const isCorrect = checkAnswer();
//     setShowFeedback({ correct: isCorrect, show: true });

//     if (isCorrect) {
//       setTimeout(() => {
//         if (currentStepIndex < steps.length - 1) {
//           setCurrentStepIndex(currentStepIndex + 1);
//           setUserMcqSelection(null);
//           setShowFeedback(null);
//         } else {
//           // Problem completed
//           setCompletedProblems(prev => new Set([...prev, currentProblemIndex]));
//           if (currentProblemIndex < practiceProblems.length - 1) {
//             setTimeout(() => {
//               nextProblem();
//             }, 1500);
//           }
//         }
//       }, 1000);
//     }
//   };

//   const handleOptionSelect = (option: string | string[]): void => {
//     setUserMcqSelection(option);
//     setShowFeedback(null); // Clear feedback on new selection
//   };

//   const nextProblem = (): void => {
//     if (currentProblemIndex < practiceProblems.length - 1) {
//       setCurrentProblemIndex(currentProblemIndex + 1);
//       setCurrentStepIndex(0);
//       setUserMcqSelection(null);
//       setShowFeedback(null);
//       setShowAnswer(false);
//       setShowHint(false);
//     }
//   };

//   const prevProblem = (): void => {
//     if (currentProblemIndex > 0) {
//       setCurrentProblemIndex(currentProblemIndex - 1);
//       setCurrentStepIndex(0);
//       setUserMcqSelection(null);
//       setShowFeedback(null);
//       setShowAnswer(false);
//       setShowHint(false);
//     }
//   };

//   const resetProgress = (): void => {
//     setCurrentProblemIndex(0);
//     setCurrentStepIndex(0);
//     setUserMcqSelection(null);
//     setShowFeedback(null);
//     setCompletedProblems(new Set());
//     setShowAnswer(false);
//     setShowHint(false);
//   };

//   const showSolution = (): void => {
//     setShowAnswer(true);
//     // Pre-select the correct answer
//     const correctAnswer = currentProblem.solution[currentStep.id];
//     setUserMcqSelection(correctAnswer);
//   };

//   const closeSolution = (): void => {
//     setShowAnswer(false);
//   };

//   // Helper to render option content correctly based on step type
//   const renderOptionContent = (option: string | string[], stepId: keyof McqOptions): ReactNode => {
//     // For steps that return arrays of terms
//     if (stepId === 'combined') {
//         const terms = Array.isArray(option) ? option : [option];
//         return (
//             <div className="flex flex-wrap items-center justify-center space-x-1">
//                 {terms.map((term, idx) => (
//                      <React.Fragment key={idx}>
//                         <InlineMath math={term} />
//                         {idx < terms.length - 1 && <span>+</span>}
//                     </React.Fragment>
//                 ))}
//             </div>
//         );
//     }
//     // For steps that are clearly mathematical expressions
//     if (stepId === 'first' || stepId === 'outer' || stepId === 'inner' || stepId === 'last' || stepId === 'finalExpanded') {
//       // Render mathematical options with KaTeX
//       return <InlineMath math={String(option)} />;
//     }
//     // Fallback (shouldn't be reached for this tool)
//     return <span>{String(option)}</span>;
//   };

//   // Helper to render the correct answer based on step type
//   const renderCorrectAnswer = (answer: string | string[], stepId: keyof McqOptions): ReactNode => {
//     // Apply same logic as options
//     if (stepId === 'combined') {
//         const terms = Array.isArray(answer) ? answer : [answer];
//         return (
//             <div className="flex flex-wrap items-center justify-center space-x-1">
//                  {terms.map((term, idx) => (
//                     <React.Fragment key={idx}>
//                         <InlineMath math={term} />
//                         {idx < terms.length - 1 && <span>+</span>}
//                     </React.Fragment>
//                  ))}
//             </div>
//         );
//     }
//     if (stepId === 'first' || stepId === 'outer' || stepId === 'inner' || stepId === 'last' || stepId === 'finalExpanded') {
//       // Render mathematical answers with KaTeX
//       return <InlineMath math={String(answer)} />;
//     }
//     // Render plain text answers (fallback)
//     return <span>{String(answer)}</span>;
//   };

//   // Helper to render text that might contain KaTeX
//   const renderTextWithMath = (text: string): ReactNode => {
//     const parts = text.split(/(\$[^$]*\$)/g);
//     return (
//       <>
//         {parts.map((part, i) =>
//           part.startsWith('$') && part.endsWith('$') ? (
//             <InlineMath key={i} math={part.slice(1, -1)} />
//           ) : (
//             <span key={i}>{part}</span>
//           )
//         )}
//       </>
//     );
//   };

//   // Helper to render previous steps summary
//   const getCompletedSteps = (): ReactNode => {
//     if (currentStepIndex === 0) return <></>;
//     return (
//       <div className="bg-gray-50 rounded-lg p-3 mb-4">
//         <h4 className="text-sm font-medium text-gray-700 mb-2">Previous Steps:</h4>
//         <div className="space-y-1 text-sm">
//           {currentStepIndex > 0 && (
//             <div className="flex justify-between">
//               <span className="text-gray-600">First (F):</span>
//               <span className="font-mono"><InlineMath math={currentProblem.solution.first} /></span>
//             </div>
//           )}
//           {currentStepIndex > 1 && (
//             <div className="flex justify-between">
//               <span className="text-gray-600">Outer (O):</span>
//               <span className="font-mono"><InlineMath math={currentProblem.solution.outer} /></span>
//             </div>
//           )}
//           {currentStepIndex > 2 && (
//             <div className="flex justify-between">
//               <span className="text-gray-600">Inner (I):</span>
//               <span className="font-mono"><InlineMath math={currentProblem.solution.inner} /></span>
//             </div>
//           )}
//           {currentStepIndex > 3 && (
//             <div className="flex justify-between">
//               <span className="text-gray-600">Last (L):</span>
//               <span className="font-mono"><InlineMath math={currentProblem.solution.last} /></span>
//             </div>
//           )}
//           {currentStepIndex > 4 && (
//             <div className="flex justify-between">
//               <span className="text-gray-600">Combined:</span>
//               <span className="font-mono flex flex-wrap space-x-1">
//                  {currentProblem.solution.combined.map((term, idx) => (
//                     <React.Fragment key={idx}>
//                         <InlineMath math={term} />
//                          {idx < currentProblem.solution.combined.length - 1 && <span>+</span>}
//                     </React.Fragment>
//                  ))}
//               </span>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   // --- Render Logic ---
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
//       <div className="max-w-md mx-auto">
//         {/* Header */}
//         <div className="text-center mb-6 pt-6">
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">Expanding Two Brackets (FOIL)</h1>
//           <p className="text-gray-600 text-sm">Use the FOIL method to multiply binomials: $(a+b)(c+d)$</p>
//         </div>

//         {/* Progress */}
//         <div className="mb-6">
//           <div className="flex justify-between text-xs text-gray-600 mb-2">
//             <span>Problems Completed</span>
//             <span>{completedProblems.size}/{practiceProblems.length}</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
//             <div
//               className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
//               style={{ width: `${(completedProblems.size / practiceProblems.length) * 100}%` }}
//             ></div>
//           </div>
//         </div>

//         {/* Problem Expression */}
//         <div className="bg-white rounded-xl shadow-sm p-6 mb-6 text-center">
//           <h2 className="text-lg font-semibold text-gray-800 mb-4">Expand this expression:</h2>
//           <div className="text-3xl font-bold text-indigo-600 mb-6">
//             <BlockMath math={currentProblem.expression} />
//           </div>
//           <div className="flex justify-center space-x-2 mb-4">
//             <button
//               onClick={prevProblem}
//               disabled={currentProblemIndex === 0}
//               className="p-2 rounded-full bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
//             >
//               <ChevronRight className="w-4 h-4 rotate-180" />
//             </button>
//             <button
//               onClick={resetProgress}
//               className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
//             >
//               <RotateCcw className="w-4 h-4 mr-1" />
//               <span className="text-sm">Reset</span>
//             </button>
//             <button
//               onClick={nextProblem}
//               disabled={currentProblemIndex === practiceProblems.length - 1}
//               className="p-2 rounded-full bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
//             >
//               <ChevronRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         {/* Previous Steps Reference */}
//         {getCompletedSteps()}

//         {/* Step-by-step Guide */}
//         <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center">
//               <BookOpen className="w-5 h-5 text-indigo-600 mr-2" />
//               <h2 className="text-lg font-semibold text-gray-800">{renderTextWithMath(currentStep.title)}</h2>
//             </div>
//             <button
//               onClick={() => setShowHint(!showHint)}
//               className="flex items-center px-2 py-1 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors"
//             >
//               <Lightbulb className="w-4 h-4" />
//             </button>
//           </div>
//           <p className="text-gray-700 mb-4">{renderTextWithMath(currentStep.description)}</p>

//           {showHint && (
//             <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
//               <p className="text-sm text-yellow-800">
//                 <span className="font-medium">Hint:</span> {renderTextWithMath(currentProblem.hint)}
//               </p>
//             </div>
//           )}

//           {/* MCQ Options */}
//           <div className="space-y-2 mb-4">
//             {currentMcqOptions[currentStep.id].map((option, index) => {
//               // Normalize option for state comparison
//               let normalizedOption: string | string[];
//               if (Array.isArray(option)) {
//                   // For array options, sort them for consistent comparison
//                   normalizedOption = [...option].sort();
//               } else {
//                   normalizedOption = String(option);
//               }

//               // Normalize user selection for comparison
//               let normalizedUserSelection: string | string[] | null;
//               if (Array.isArray(userMcqSelection)) {
//                   normalizedUserSelection = [...userMcqSelection].sort();
//               } else {
//                   normalizedUserSelection = userMcqSelection;
//               }


//               return (
//                 <button
//                   key={index}
//                   onClick={() => handleOptionSelect(option)} // Pass the original option
//                   className={`w-full text-left px-4 py-3 rounded-lg border transition-colors flex items-center justify-center ${
//                     JSON.stringify(normalizedUserSelection) === JSON.stringify(normalizedOption) // Compare normalized selections
//                       ? showFeedback?.show && showFeedback.correct
//                         ? 'border-green-500 bg-green-50'
//                         : showFeedback?.show && !showFeedback.correct
//                         ? 'border-red-500 bg-red-50'
//                         : 'border-indigo-500 bg-indigo-50'
//                       : 'border-gray-300 hover:bg-gray-50'
//                   } ${showAnswer && JSON.stringify(normalizedOption) === JSON.stringify(Array.isArray(currentProblem.solution[currentStep.id]) ? [...currentProblem.solution[currentStep.id]].sort() : String(currentProblem.solution[currentStep.id])) ? 'border-blue-500 bg-blue-50 font-bold' : ''}`}
//                   disabled={showAnswer}
//                 >
//                   {/* Use helper to render option content correctly */}
//                   {renderOptionContent(option, currentStep.id)}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Feedback */}
//           {showFeedback?.show && (
//             <div className={`p-4 rounded-lg mt-4 ${
//               showFeedback.correct
//                 ? 'bg-green-50 border border-green-200'
//                 : 'bg-red-50 border border-red-200'
//             }`}>
//               <div className="flex items-center mb-2">
//                 {showFeedback.correct ? (
//                   <Check className="w-5 h-5 text-green-600 mr-2" />
//                 ) : (
//                   <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
//                 )}
//                 <span className={`font-medium ${
//                   showFeedback.correct ? 'text-green-800' : 'text-red-800'
//                 }`}>
//                   {showFeedback.correct ? 'Correct!' : 'Not quite right'}
//                 </span>
//               </div>
//               {!showFeedback.correct && !showAnswer && (
//                 <p className="text-sm text-gray-700">
//                   {renderTextWithMath(currentProblem.explanation[currentStep.id])}
//                 </p>
//               )}
//             </div>
//           )}

//           {/* Action Buttons */}
//           <div className="flex space-x-3 mt-4">
//             <button
//               onClick={handleSubmit}
//               disabled={!userMcqSelection || showAnswer}
//               className="flex-1 bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors flex items-center justify-center"
//             >
//               {showFeedback?.correct ? (
//                 <>
//                   <Check className="w-5 h-5 mr-2" />
//                   Correct! Next
//                 </>
//               ) : (
//                 <>
//                   Check Answer
//                   <ArrowRight className="w-5 h-5 ml-2" />
//                 </>
//               )}
//             </button>
//             {!showFeedback?.correct && !showAnswer && (
//               <button
//                 onClick={showSolution}
//                 className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
//               >
//                 <Eye className="w-5 h-5 text-gray-600" />
//               </button>
//             )}
//           </div>

//           {showAnswer && (
//             <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
//               <div className="flex justify-between items-center mb-2">
//                 <span className="font-medium text-blue-800">Correct Answer:</span>
//                 <button
//                   onClick={closeSolution}
//                   className="text-blue-600 hover:text-blue-800"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               </div>
//               <div className="text-center my-2">
//                 {/* Use helper to render correct answer */}
//                 {renderCorrectAnswer(currentProblem.solution[currentStep.id], currentStep.id)}
//               </div>
//               <p className="text-sm text-blue-700 mt-2">
//                 {renderTextWithMath(currentProblem.explanation[currentStep.id])}
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Solution Review (on problem completion) */}
//         {completedProblems.has(currentProblemIndex) && (
//           <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl p-6 mb-6">
//             <div className="text-center">
//               <Check className="w-12 h-12 mx-auto mb-3" />
//               <h3 className="text-xl font-bold mb-4">Expression Expanded!</h3>
//               <div className="bg-white bg-opacity-20 rounded-lg p-4 text-left">
//                 <h4 className="font-semibold mb-3">Complete Solution:</h4>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex">
//                     <span className="font-medium w-32">Expression:</span>
//                     <InlineMath math={currentProblem.expression} />
//                   </div>
//                   <div className="flex">
//                     <span className="font-medium w-32">First (F):</span>
//                     <InlineMath math={currentProblem.solution.first} />
//                   </div>
//                   <div className="flex">
//                     <span className="font-medium w-32">Outer (O):</span>
//                     <InlineMath math={currentProblem.solution.outer} />
//                   </div>
//                   <div className="flex">
//                     <span className="font-medium w-32">Inner (I):</span>
//                     <InlineMath math={currentProblem.solution.inner} />
//                   </div>
//                    <div className="flex">
//                     <span className="font-medium w-32">Last (L):</span>
//                     <InlineMath math={currentProblem.solution.last} />
//                   </div>
//                   <div className="flex">
//                     <span className="font-medium w-32">Combined:</span>
//                      <div className="flex flex-wrap space-x-1">
//                         {currentProblem.solution.combined.map((term, idx) => (
//                             <React.Fragment key={idx}>
//                                 <InlineMath math={term} />
//                                  {idx < currentProblem.solution.combined.length - 1 && <span>+</span>}
//                             </React.Fragment>
//                          ))}
//                      </div>
//                   </div>
//                   <div className="flex">
//                     <span className="font-medium w-32">Expanded:</span>
//                     <InlineMath math={currentProblem.solution.finalExpanded} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Completion Message */}
//         {completedProblems.size === practiceProblems.length && (
//           <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl p-6 text-center mb-6">
//             <Check className="w-12 h-12 mx-auto mb-3" />
//             <h3 className="text-xl font-bold mb-2">Great Job!</h3>
//             <p className="text-purple-100">You've mastered the FOIL Method!</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FoilMethodTool;

import React, { useState, ReactNode } from 'react';
import { ChevronRight, Check, RotateCcw, Lightbulb, BookOpen, ArrowRight, Eye, X, AlertCircle } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// Define the structure for a practice problem
interface PracticeProblem {
  expression: string; // The expression to expand (e.g., "(x + 3)(x + 5)")
  solution: {
    first: string; // Result of First multiplication (e.g., "x^2")
    outer: string; // Result of Outer multiplication (e.g., "5x")
    inner: string; // Result of Inner multiplication (e.g., "3x")
    last: string; // Result of Last multiplication (e.g., "15")
    // Removed combined step
    finalExpanded: string; // The final expanded expression (e.g., "x^2 + 8x + 15")
  };
  explanation: {
    first: string; // Explanation for First step (can contain KaTeX)
    outer: string; // Explanation for Outer step (can contain KaTeX)
    inner: string; // Explanation for Inner step (can contain KaTeX)
    last: string; // Explanation for Last step (can contain KaTeX)
    // Removed combined step explanation
    finalExpanded: string; // Explanation for the final form (can contain KaTeX)
  };
  hint: string; // Hint for the problem (can contain KaTeX)
}

// Define the structure for MCQ options at each step
interface McqOptions {
  first: string[]; // Options for First result
  outer: string[]; // Options for Outer result
  inner: string[]; // Options for Inner result
  last: string[]; // Options for Last result
  // Removed combined step options
  finalExpanded: string[]; // Options for the final expanded form
}

// Define the structure for a step in the process
interface Step {
  id: keyof McqOptions; // Links to the MCQ options and solution fields
  title: string; // Can contain KaTeX
  description: string; // Can contain KaTeX
  isMcq: true; // All steps are MCQ in this version
}

const FoilMethodTool: React.FC = () => {
  // --- State Management ---
  const [currentProblemIndex, setCurrentProblemIndex] = useState<number>(0);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [userMcqSelection, setUserMcqSelection] = useState<string | null>(null); // Handles single string
  const [showFeedback, setShowFeedback] = useState<{ correct: boolean; show: boolean } | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [completedProblems, setCompletedProblems] = useState<Set<number>>(new Set());

  // --- Practice Problems Data ---
  const practiceProblems: PracticeProblem[] = [
    {
      expression: "(x + 3)(x + 5)",
      solution: {
        first: "x^2",
        outer: "5x",
        inner: "3x",
        last: "15",
        finalExpanded: "x^2 + 8x + 15"
      },
      explanation: {
        first: "Multiply the First terms: $x \\times x = x^2$.",
        outer: "Multiply the Outer terms: $x \\times 5 = 5x$.",
        inner: "Multiply the Inner terms: $3 \\times x = 3x$.",
        last: "Multiply the Last terms: $3 \\times 5 = 15$.",
        finalExpanded: "Combine the results: $x^2 + 5x + 3x + 15 = x^2 + 8x + 15$."
      },
      hint: "Remember FOIL: First, Outer, Inner, Last. Multiply the corresponding terms from each bracket."
    },
    {
      expression: "(2x - 1)(x + 4)",
      solution: {
        first: "2x^2",
        outer: "8x",
        inner: "-x",
        last: "-4",
        finalExpanded: "2x^2 + 7x - 4"
      },
      explanation: {
        first: "Multiply the First terms: $2x \\times x = 2x^2$.",
        outer: "Multiply the Outer terms: $2x \\times 4 = 8x$.",
        inner: "Multiply the Inner terms: $-1 \\times x = -x$.",
        last: "Multiply the Last terms: $-1 \\times 4 = -4$.",
        finalExpanded: "Combine the results: $2x^2 + 8x + (-x) + (-4) = 2x^2 + 7x - 4$."
      },
      hint: "Apply FOIL. Be careful with the signs when multiplying, especially for the terms involving $-1$."
    },
    {
      expression: "(x + 2)(x + 6)", // From the example
      solution: {
        first: "x^2",
        outer: "6x",
        inner: "2x",
        last: "12",
        finalExpanded: "x^2 + 8x + 12"
      },
      explanation: {
        first: "Multiply the First terms: $x \\times x = x^2$.",
        outer: "Multiply the Outer terms: $x \\times 6 = 6x$.",
        inner: "Multiply the Inner terms: $2 \\times x = 2x$.",
        last: "Multiply the Last terms: $2 \\times 6 = 12$.",
        finalExpanded: "Combine the results: $x^2 + 6x + 2x + 12 = x^2 + 8x + 12$."
      },
      hint: "Use the FOIL method. Add the coefficients of the like terms ($x$ terms) to combine them."
    },
    {
      expression: "(3x - 2)(x - 5)", // New problem
      solution: {
        first: "3x^2",
        outer: "-15x",
        inner: "-2x",
        last: "10",
        finalExpanded: "3x^2 - 17x + 10"
      },
      explanation: {
        first: "Multiply the First terms: $3x \\times x = 3x^2$.",
        outer: "Multiply the Outer terms: $3x \\times -5 = -15x$.",
        inner: "Multiply the Inner terms: $-2 \\times x = -2x$.",
        last: "Multiply the Last terms: $-2 \\times -5 = 10$.",
        finalExpanded: "Combine the results: $3x^2 + (-15x) + (-2x) + 10 = 3x^2 - 17x + 10$."
      },
      hint: "FOIL it out. Remember that multiplying two negative numbers gives a positive result for the Last term."
    }
  ];

  // --- MCQ Options Data ---
  const mcqOptionsPerProblem: McqOptions[] = [
    // Problem 1: (x + 3)(x + 5)
    {
      first: ["x^2", "x", "3x", "2x"],
      outer: ["5x", "5", "x", "8x"],
      inner: ["3x", "3", "x", "5x"],
      last: ["15", "8", "3", "5"],
      finalExpanded: ["x^2 + 8x + 15", "x^2 + 15", "x^2 + 5x + 3x", "2x + 8x + 15"]
    },
    // Problem 2: (2x - 1)(x + 4)
    {
      first: ["2x^2", "2x", "x^2", "2"],
      outer: ["8x", "8", "2x", "4x"],
      inner: ["-x", "x", "-1", "-4"],
      last: ["-4", "4", "-1", "1"],
      finalExpanded: ["2x^2 + 7x - 4", "2x^2 - 7x - 4", "2x^2 + 8x - x - 4", "2x^2 - 4"]
    },
    // Problem 3: (x + 2)(x + 6)
    {
      first: ["x^2", "x", "2x", "2"],
      outer: ["6x", "6", "x", "8x"],
      inner: ["2x", "2", "x", "6x"],
      last: ["12", "8", "2", "6"],
      finalExpanded: ["x^2 + 8x + 12", "x^2 + 12", "x^2 + 6x + 2x", "2x + 8x + 12"]
    },
    // Problem 4: (3x - 2)(x - 5)
    {
        first: ["3x^2", "3x", "x^2", "3"],
        outer: ["-15x", "-15", "3x", "-5x"],
        inner: ["-2x", "-2", "x", "-5x"],
        last: ["10", "-10", "2", "5"],
        finalExpanded: ["3x^2 - 17x + 10", "3x^2 + 17x + 10", "3x^2 - 15x - 2x + 10", "3x^2 + 10"]
      }
  ];

  // --- Steps Definition ---
  const steps: Step[] = [
    {
      id: "first",
      title: "Step 1: Multiply First Terms (F)",
      description: "Multiply the first term of the first bracket by the first term of the second bracket:",
      isMcq: true
    },
    {
      id: "outer",
      title: "Step 2: Multiply Outer Terms (O)",
      description: "Multiply the outer terms of the brackets:",
      isMcq: true
    },
    {
      id: "inner",
      title: "Step 3: Multiply Inner Terms (I)",
      description: "Multiply the inner terms of the brackets:",
      isMcq: true
    },
    {
      id: "last",
      title: "Step 4: Multiply Last Terms (L)",
      description: "Multiply the last term of the first bracket by the last term of the second bracket:",
      isMcq: true
    },
    // Removed combined step
    {
      id: "finalExpanded",
      title: "Final Step: Simplify by Combining Like Terms",
      description: "Add or subtract like terms to get the final expanded expression:",
      isMcq: true
    }
  ];

  // --- Derived State ---
  const currentProblem = practiceProblems[currentProblemIndex];
  const currentMcqOptions = mcqOptionsPerProblem[currentProblemIndex];
  const currentStep = steps[currentStepIndex];

  // --- Helper Functions ---
  const checkAnswer = (): boolean => {
    if (!userMcqSelection) return false;
    const stepId = currentStep.id;
    const correctAnswer = currentProblem.solution[stepId];

    // Normalize single string expressions
    const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase();
    return normalize(String(userMcqSelection)) === normalize(String(correctAnswer));
  };


  const handleSubmit = (): void => {
    if (!userMcqSelection) return;
    const isCorrect = checkAnswer();
    setShowFeedback({ correct: isCorrect, show: true });

    if (isCorrect) {
      setTimeout(() => {
        if (currentStepIndex < steps.length - 1) {
          setCurrentStepIndex(currentStepIndex + 1);
          setUserMcqSelection(null);
          setShowFeedback(null);
        } else {
          // Problem completed
          setCompletedProblems(prev => new Set([...prev, currentProblemIndex]));
          if (currentProblemIndex < practiceProblems.length - 1) {
            setTimeout(() => {
              nextProblem();
            }, 1500);
          }
        }
      }, 1000);
    }
  };

  const handleOptionSelect = (option: string): void => {
    setUserMcqSelection(option);
    setShowFeedback(null); // Clear feedback on new selection
  };

  const nextProblem = (): void => {
    if (currentProblemIndex < practiceProblems.length - 1) {
      setCurrentProblemIndex(currentProblemIndex + 1);
      setCurrentStepIndex(0);
      setUserMcqSelection(null);
      setShowFeedback(null);
      setShowAnswer(false);
      setShowHint(false);
    }
  };

  const prevProblem = (): void => {
    if (currentProblemIndex > 0) {
      setCurrentProblemIndex(currentProblemIndex - 1);
      setCurrentStepIndex(0);
      setUserMcqSelection(null);
      setShowFeedback(null);
      setShowAnswer(false);
      setShowHint(false);
    }
  };

  const resetProgress = (): void => {
    setCurrentProblemIndex(0);
    setCurrentStepIndex(0);
    setUserMcqSelection(null);
    setShowFeedback(null);
    setCompletedProblems(new Set());
    setShowAnswer(false);
    setShowHint(false);
  };

  const showSolution = (): void => {
    setShowAnswer(true);
    // Pre-select the correct answer
    const correctAnswer = currentProblem.solution[currentStep.id];
    setUserMcqSelection(correctAnswer);
  };

  const closeSolution = (): void => {
    setShowAnswer(false);
  };

  // Helper to render option content correctly based on step type
  const renderOptionContent = (option: string, stepId: keyof McqOptions): ReactNode => {
    // For steps that are clearly mathematical expressions
    if (stepId === 'first' || stepId === 'outer' || stepId === 'inner' || stepId === 'last' || stepId === 'finalExpanded') {
      // Render mathematical options with KaTeX
      return <InlineMath math={String(option)} />;
    }
    // Fallback (shouldn't be reached for this tool)
    return <span>{String(option)}</span>;
  };

  // Helper to render the correct answer based on step type
  const renderCorrectAnswer = (answer: string, stepId: keyof McqOptions): ReactNode => {
    if (stepId === 'first' || stepId === 'outer' || stepId === 'inner' || stepId === 'last' || stepId === 'finalExpanded') {
      // Render mathematical answers with KaTeX
      return <InlineMath math={String(answer)} />;
    }
    // Render plain text answers (fallback)
    return <span>{String(answer)}</span>;
  };

  // Helper to render text that might contain KaTeX
  const renderTextWithMath = (text: string): ReactNode => {
    const parts = text.split(/(\$[^$]*\$)/g);
    return (
      <>
        {parts.map((part, i) =>
          part.startsWith('$') && part.endsWith('$') ? (
            <InlineMath key={i} math={part.slice(1, -1)} />
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  // Helper to render previous steps summary (adjusted for removed step)
  const getCompletedSteps = (): ReactNode => {
    if (currentStepIndex === 0) return <></>;
    return (
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Previous Steps:</h4>
        <div className="space-y-1 text-sm">
          {currentStepIndex > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-600">First (F):</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.first} /></span>
            </div>
          )}
          {currentStepIndex > 1 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Outer (O):</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.outer} /></span>
            </div>
          )}
          {currentStepIndex > 2 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Inner (I):</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.inner} /></span>
            </div>
          )}
          {currentStepIndex > 3 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Last (L):</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.last} /></span>
            </div>
          )}
          {/* Removed combined step display */}
        </div>
      </div>
    );
  };

  // --- Render Logic ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6 pt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Expanding Two Brackets (FOIL)</h1>
          <p className="text-gray-600 text-sm">Use the FOIL method to multiply binomials: $(a+b)(c+d)$</p>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>Problems Completed</span>
            <span>{completedProblems.size}/{practiceProblems.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedProblems.size / practiceProblems.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Problem Expression */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Expand this expression:</h2>
          <div className="text-3xl font-bold text-indigo-600 mb-6">
            <BlockMath math={currentProblem.expression} />
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            <button
              onClick={prevProblem}
              disabled={currentProblemIndex === 0}
              className="p-2 rounded-full bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
            </button>
            <button
              onClick={resetProgress}
              className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              <span className="text-sm">Reset</span>
            </button>
            <button
              onClick={nextProblem}
              disabled={currentProblemIndex === practiceProblems.length - 1}
              className="p-2 rounded-full bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Previous Steps Reference */}
        {getCompletedSteps()}

        {/* Step-by-step Guide */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 text-indigo-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">{renderTextWithMath(currentStep.title)}</h2>
            </div>
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center px-2 py-1 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors"
            >
              <Lightbulb className="w-4 h-4" />
            </button>
          </div>
          <p className="text-gray-700 mb-4">{renderTextWithMath(currentStep.description)}</p>

          {showHint && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-yellow-800">
                <span className="font-medium">Hint:</span> {renderTextWithMath(currentProblem.hint)}
              </p>
            </div>
          )}

          {/* MCQ Options */}
          <div className="space-y-2 mb-4">
            {currentMcqOptions[currentStep.id].map((option, index) => {
              const optionString = String(option); // Ensure option is a string for state/value
              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(optionString)}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition-colors flex items-center justify-center ${
                    userMcqSelection === optionString
                      ? showFeedback?.show && showFeedback.correct
                        ? 'border-green-500 bg-green-50'
                        : showFeedback?.show && !showFeedback.correct
                        ? 'border-red-500 bg-red-50'
                        : 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-300 hover:bg-gray-50'
                  } ${showAnswer && optionString === String(currentProblem.solution[currentStep.id]) ? 'border-blue-500 bg-blue-50 font-bold' : ''}`}
                  disabled={showAnswer}
                >
                  {/* Use helper to render option content correctly */}
                  {renderOptionContent(optionString, currentStep.id)}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {showFeedback?.show && (
            <div className={`p-4 rounded-lg mt-4 ${
              showFeedback.correct
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-center mb-2">
                {showFeedback.correct ? (
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                )}
                <span className={`font-medium ${
                  showFeedback.correct ? 'text-green-800' : 'text-red-800'
                }`}>
                  {showFeedback.correct ? 'Correct!' : 'Not quite right'}
                </span>
              </div>
              {!showFeedback.correct && !showAnswer && (
                <p className="text-sm text-gray-700">
                  {renderTextWithMath(currentProblem.explanation[currentStep.id])}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-4">
            <button
              onClick={handleSubmit}
              disabled={!userMcqSelection || showAnswer}
              className="flex-1 bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              {showFeedback?.correct ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Correct! Next
                </>
              ) : (
                <>
                  Check Answer
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
            {!showFeedback?.correct && !showAnswer && (
              <button
                onClick={showSolution}
                className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
              >
                <Eye className="w-5 h-5 text-gray-600" />
              </button>
            )}
          </div>

          {showAnswer && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-blue-800">Correct Answer:</span>
                <button
                  onClick={closeSolution}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center my-2">
                {/* Use helper to render correct answer */}
                {renderCorrectAnswer(currentProblem.solution[currentStep.id], currentStep.id)}
              </div>
              <p className="text-sm text-blue-700 mt-2">
                {renderTextWithMath(currentProblem.explanation[currentStep.id])}
              </p>
            </div>
          )}
        </div>

        {/* Solution Review (on problem completion) */}
        {completedProblems.has(currentProblemIndex) && (
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl p-6 mb-6">
            <div className="text-center">
              <Check className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-4">Expression Expanded!</h3>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-left">
                <h4 className="font-semibold mb-3">Complete Solution:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="font-medium w-32">Expression:</span>
                    <InlineMath math={currentProblem.expression} />
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">First (F):</span>
                    <InlineMath math={currentProblem.solution.first} />
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Outer (O):</span>
                    <InlineMath math={currentProblem.solution.outer} />
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Inner (I):</span>
                    <InlineMath math={currentProblem.solution.inner} />
                  </div>
                   <div className="flex">
                    <span className="font-medium w-32">Last (L):</span>
                    <InlineMath math={currentProblem.solution.last} />
                  </div>
                  {/* Removed combined step display */}
                  <div className="flex">
                    <span className="font-medium w-32">Expanded:</span>
                    <InlineMath math={currentProblem.solution.finalExpanded} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Completion Message */}
        {completedProblems.size === practiceProblems.length && (
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl p-6 text-center mb-6">
            <Check className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Great Job!</h3>
            <p className="text-purple-100">You've mastered the FOIL Method!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoilMethodTool;
