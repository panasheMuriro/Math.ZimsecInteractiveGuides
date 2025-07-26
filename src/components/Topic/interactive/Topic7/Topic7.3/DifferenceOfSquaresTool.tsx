// // // import React, { useState, useEffect, ReactNode } from 'react';
// // // import { Book, CheckCircle } from 'lucide-react';
// // // import { InlineMath, BlockMath } from 'react-katex';
// // // import 'katex/dist/katex.min.css';

// // // interface Term {
// // //   coefficient: number;
// // //   variable: string;
// // //   power: number;
// // // }

// // // interface UserAnswer {
// // //   firstSquare: string;
// // //   secondSquare: string;
// // //   factoredForm: string;
// // // }

// // // interface Solution {
// // //   firstSquare: string;
// // //   secondSquare: string;
// // //   factoredForm: string;
// // // }

// // // const DifferenceOfSquaresTool: React.FC = () => {
// // //   const [question, setQuestion] = useState<Term[]>([]);
// // //   const [userAnswer, setUserAnswer] = useState<UserAnswer>({
// // //     firstSquare: '',
// // //     secondSquare: '',
// // //     factoredForm: '',
// // //   });
// // //   const [solution, setSolution] = useState<Solution>({
// // //     firstSquare: '',
// // //     secondSquare: '',
// // //     factoredForm: '',
// // //   });
// // //   const [step, setStep] = useState<number>(0);
// // //   const [feedback, setFeedback] = useState<string[]>(['', '', '']);
// // //   const [showSolution, setShowSolution] = useState<boolean>(false);

// // //   const generateQuestion = (): void => {
// // //     const possibleVars: string[] = ['x', 'y', 'a', 'b'];
// // //     const varIndex: number = Math.floor(Math.random() * possibleVars.length);
// // //     const var2Index: number = Math.floor(Math.random() * (possibleVars.length - 1));
// // //     const secondVar: string = possibleVars.filter((_, i) => i !== varIndex)[var2Index];
    
// // //     const firstCoef: number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10][Math.floor(Math.random() * 10)];
// // //     const secondCoef: number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10][Math.floor(Math.random() * 10)];
// // //     const firstPower: number = [2, 4][Math.floor(Math.random() * 2)]; // x^2 or x^4
// // //     const secondPower: number = [2, 4][Math.floor(Math.random() * 2)];
    
// // //     const useSecondVar: boolean = Math.random() > 0.5; // 50% chance to use a second variable
// // //     const terms: Term[] = [
// // //       { coefficient: firstCoef * firstCoef, variable: useSecondVar ? possibleVars[varIndex] : '', power: firstPower },
// // //       { coefficient: secondCoef * secondCoef, variable: useSecondVar ? secondVar : '', power: secondPower },
// // //     ];

// // //     setQuestion(terms);
// // //     calculateSolution(terms);
// // //     setUserAnswer({ firstSquare: '', secondSquare: '', factoredForm: '' });
// // //     setFeedback(['', '', '']);
// // //     setShowSolution(false);
// // //     setStep(0);
// // //   };

// // //   useEffect(() => {
// // //     generateQuestion();
// // //   }, []);

// // //   const calculateSolution = (terms: Term[]): void => {
// // //     const firstTerm: Term = terms[0];
// // //     const secondTerm: Term = terms[1];
    
// // //     const firstBase: string = firstTerm.coefficient === 1 
// // //       ? (firstTerm.variable ? firstTerm.variable : '1') 
// // //       : firstTerm.variable 
// // //         ? `${Math.sqrt(firstTerm.coefficient)}${firstTerm.variable}` 
// // //         : Math.sqrt(firstTerm.coefficient).toString();
// // //     const secondBase: string = secondTerm.coefficient === 1 
// // //       ? (secondTerm.variable ? secondTerm.variable : '1') 
// // //       : secondTerm.variable 
// // //         ? `${Math.sqrt(secondTerm.coefficient)}${secondTerm.variable}` 
// // //         : Math.sqrt(secondTerm.coefficient).toString();
    
// // //     const firstSquare: string = firstTerm.power > 2 
// // //       ? `(${firstBase})^{${firstTerm.power / 2}}` 
// // //       : firstBase;
// // //     const secondSquare: string = secondTerm.power > 2 
// // //       ? `(${secondBase})^{${secondTerm.power / 2}}` 
// // //       : secondBase;
    
// // //     const factoredForm: string = `(${firstSquare} + ${secondSquare})(${firstSquare} - ${secondSquare})`;

// // //     setSolution({ firstSquare, secondSquare, factoredForm });
// // //   };

// // //   const checkStep = (currentStep: number): void => {
// // //     const newFeedback: string[] = [...feedback];
// // //     if (currentStep === 0) {
// // //       if (userAnswer.firstSquare === solution.firstSquare) {
// // //         newFeedback[0] = 'Correct! Proceed to the next step.';
// // //         setStep(1);
// // //       } else {
// // //         newFeedback[0] = 'Incorrect first square. Hint: Identify the term that is a perfect square (e.g., x^2, 9 = 3^2).';
// // //       }
// // //     } else if (currentStep === 1) {
// // //       if (userAnswer.secondSquare === solution.secondSquare) {
// // //         newFeedback[1] = 'Correct! Proceed to the final step.';
// // //         setStep(2);
// // //       } else {
// // //         newFeedback[1] = 'Incorrect second square. Hint: Identify the second term that is a perfect square.';
// // //       }
// // //     } else if (currentStep === 2) {
// // //       if (userAnswer.factoredForm === solution.factoredForm) {
// // //         newFeedback[2] = 'Correct! You factored the polynomial successfully!';
// // //       } else {
// // //         newFeedback[2] = 'Incorrect factored form. Hint: Use the formula a^2 - b^2 = (a + b)(a - b).';
// // //       }
// // //     }
// // //     setFeedback(newFeedback);
// // //   };

// // //   const handleUserAnswerChange = (field: keyof UserAnswer, value: string): void => {
// // //     setUserAnswer(prev => ({
// // //       ...prev,
// // //       [field]: value,
// // //     }));
// // //   };

// // //   const renderQuestion = (): JSX.Element => {
// // //     const termsString: string = question
// // //       .map(term => {
// // //         const coef: number = term.coefficient;
// // //         const vars: string = term.variable && term.power > 0
// // //           ? term.power > 1
// // //             ? `${term.variable}^${term.power}`
// // //             : term.variable
// // //           : '';
// // //         return coef === 1 && vars ? vars : `${coef}${vars}`;
// // //       })
// // //       .join(' - ');
// // //     return <BlockMath math={termsString} />;
// // //   };

// // //   const steps: { title: string; content: string; input: JSX.Element }[] = [
// // //     {
// // //       title: 'Step 1: Identify First Perfect Square',
// // //       content: 'Enter the base of the first perfect square (e.g., for 9x^2, enter 3x).',
// // //       input: (
// // //         <div className="mb-2">
// // //           <input
// // //             type="text"
// // //             value={userAnswer.firstSquare}
// // //             onChange={e => handleUserAnswerChange('firstSquare', e.target.value)}
// // //             className="w-full p-2 border rounded-md"
// // //             placeholder="e.g., 3x"
// // //           />
// // //         </div>
// // //       ),
// // //     },
// // //     {
// // //       title: 'Step 2: Identify Second Perfect Square',
// // //       content: 'Enter the base of the second perfect square (e.g., for 16, enter 4).',
// // //       input: (
// // //         <div className="mb-2">
// // //           <input
// // //             type="text"
// // //             value={userAnswer.secondSquare}
// // //             onChange={e => handleUserAnswerChange('secondSquare', e.target.value)}
// // //             className="w-full p-2 border rounded-md"
// // //             placeholder="e.g., 4"
// // //           />
// // //         </div>
// // //       ),
// // //     },
// // //     {
// // //       title: 'Step 3: Write Factored Form',
// // //       content: 'Enter the factored form using the formula a^2 - b^2 = (a + b)(a - b).',
// // //       input: (
// // //         <div className="mb-2">
// // //           <input
// // //             type="text"
// // //             value={userAnswer.factoredForm}
// // //             onChange={e => handleUserAnswerChange('factoredForm', e.target.value)}
// // //             className="w-full p-2 border rounded-md"
// // //             placeholder="e.g., (x + 3)(x - 3)"
// // //           />
// // //         </div>
// // //       ),
// // //     },
// // //   ];

// // //   return (
// // //     <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
// // //       <h2 className="text-xl font-bold mb-4 flex items-center">
// // //         <Book className="mr-2" /> Difference of Two Squares Practice Tool
// // //       </h2>
// // //       <p className="mb-4 text-sm">Factor the following polynomial using the Difference of Two Squares method:</p>
// // //       <div className="mb-4">{question.length > 0 && renderQuestion() as ReactNode}</div>
// // //       {steps.map((s, index) => (
// // //         <div key={index} className="mb-4">
// // //           {step >= index && (
// // //             <>
// // //               <h3 className="font-semibold">{s.title}</h3>
// // //               <p className="text-sm mb-2">{s.content}</p>
// // //               {s.input}
// // //               <button
// // //                 onClick={() => checkStep(index)}
// // //                 className="w-full p-2 bg-green-500 text-white rounded-md mb-2"
// // //               >
// // //                 Check Step
// // //               </button>
// // //               {feedback[index] && (
// // //                 <p className={`text-sm ${feedback[index].includes('Correct') ? 'text-green-500' : 'text-red-500'}`}>
// // //                   {feedback[index]}
// // //                   {feedback[index].includes('Incorrect') && (
// // //                     <button
// // //                       onClick={() => setShowSolution(true)}
// // //                       className="ml-2 text-blue-500 underline"
// // //                     >
// // //                       Show Solution
// // //                     </button>
// // //                   )}
// // //                 </p>
// // //               )}
// // //             </>
// // //           )}
// // //         </div>
// // //       ))}
// // //       {showSolution && (
// // //         <div className="mt-4 p-4 bg-gray-100 rounded-md">
// // //           <h3 className="font-semibold">Solution:</h3>
// // //           <p>
// // //             <strong>First perfect square:</strong> <InlineMath math={solution.firstSquare} />
// // //           </p>
// // //           <p>
// // //             <strong>Second perfect square:</strong> <InlineMath math={solution.secondSquare} />
// // //           </p>
// // //           <p>
// // //             <strong>Factored form:</strong> <BlockMath math={solution.factoredForm} />
// // //           </p>
// // //           <CheckCircle className="text-green-500 mt-2" />
// // //         </div>
// // //       )}
// // //       <button
// // //         onClick={generateQuestion}
// // //         className="w-full p-2 bg-blue-500 text-white rounded-md mt-4"
// // //       >
// // //         New Question
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default DifferenceOfSquaresTool;

// // import React, { useState, useEffect, ReactNode } from 'react';
// // import { Book, CheckCircle } from 'lucide-react';
// // import { InlineMath, BlockMath } from 'react-katex';
// // import 'katex/dist/katex.min.css';

// // interface Term {
// //   coefficient: number;
// //   variable: string;
// //   power: number;
// // }

// // interface UserAnswer {
// //   firstSquare: string;
// //   secondSquare: string;
// //   factoredForm: string;
// // }

// // interface Solution {
// //   firstSquare: string;
// //   secondSquare: string;
// //   factoredForm: string;
// // }

// // const DifferenceOfSquaresTool: React.FC = () => {
// //   const [question, setQuestion] = useState<Term[]>([]);
// //   const [userAnswer, setUserAnswer] = useState<UserAnswer>({
// //     firstSquare: '',
// //     secondSquare: '',
// //     factoredForm: '',
// //   });
// //   const [solution, setSolution] = useState<Solution>({
// //     firstSquare: '',
// //     secondSquare: '',
// //     factoredForm: '',
// //   });
// //   const [step, setStep] = useState<number>(0);
// //   const [feedback, setFeedback] = useState<string[]>(['', '', '']);
// //   const [showSolution, setShowSolution] = useState<boolean>(false);

// //   const generateQuestion = (): void => {
// //     const possibleVars: string[] = ['x', 'y', 'a', 'b'];
// //     const varIndex: number = Math.floor(Math.random() * possibleVars.length);
// //     const var2Index: number = Math.floor(Math.random() * (possibleVars.length - 1));
// //     const secondVar: string = possibleVars.filter((_, i) => i !== varIndex)[var2Index];

// //     const firstCoef: number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10][Math.floor(Math.random() * 10)];
// //     const secondCoef: number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10][Math.floor(Math.random() * 10)];
// //     const firstPower: number = [2, 4][Math.floor(Math.random() * 2)];
// //     const secondPower: number = [2, 4][Math.floor(Math.random() * 2)];

// //     const useSecondVar: boolean = Math.random() > 0.5;
// //     const terms: Term[] = [
// //       { coefficient: firstCoef * firstCoef, variable: useSecondVar ? possibleVars[varIndex] : '', power: firstPower },
// //       { coefficient: secondCoef * secondCoef, variable: useSecondVar ? secondVar : '', power: secondPower },
// //     ];

// //     setQuestion(terms);
// //     calculateSolution(terms);
// //     setUserAnswer({ firstSquare: '', secondSquare: '', factoredForm: '' });
// //     setFeedback(['', '', '']);
// //     setShowSolution(false);
// //     setStep(0);
// //   };

// //   useEffect(() => {
// //     generateQuestion();
// //   }, []);

// //   const calculateSolution = (terms: Term[]): void => {
// //     const formatBase = (term: Term): string => {
// //       const coefSqrt = Math.sqrt(term.coefficient);
// //       const powerSqrt = term.power / 2;

// //       const coefPart = coefSqrt % 1 === 0 ? coefSqrt.toString() : `\\sqrt{${term.coefficient}}`;
// //       const variablePart = term.variable
// //         ? powerSqrt === 1
// //           ? term.variable
// //           : `${term.variable}^{${powerSqrt}}`
// //         : '';

// //       return `${coefPart}${variablePart}`;
// //     };

// //     const firstBase = formatBase(terms[0]);
// //     const secondBase = formatBase(terms[1]);

// //     const factoredForm = `(${firstBase} + ${secondBase})(${firstBase} - ${secondBase})`;

// //     setSolution({
// //       firstSquare: firstBase,
// //       secondSquare: secondBase,
// //       factoredForm,
// //     });
// //   };

// //   const checkStep = (currentStep: number): void => {
// //     const newFeedback: string[] = [...feedback];
// //     if (currentStep === 0) {
// //       if (userAnswer.firstSquare === solution.firstSquare) {
// //         newFeedback[0] = 'Correct! Proceed to the next step.';
// //         setStep(1);
// //       } else {
// //         newFeedback[0] = 'Incorrect first square. Hint: Identify the term that is a perfect square (e.g., x^2, 9 = 3^2).';
// //       }
// //     } else if (currentStep === 1) {
// //       if (userAnswer.secondSquare === solution.secondSquare) {
// //         newFeedback[1] = 'Correct! Proceed to the final step.';
// //         setStep(2);
// //       } else {
// //         newFeedback[1] = 'Incorrect second square. Hint: Identify the second term that is a perfect square.';
// //       }
// //     } else if (currentStep === 2) {
// //       if (userAnswer.factoredForm === solution.factoredForm) {
// //         newFeedback[2] = 'Correct! You factored the polynomial successfully!';
// //       } else {
// //         newFeedback[2] = 'Incorrect factored form. Hint: Use the formula a^2 - b^2 = (a + b)(a - b).';
// //       }
// //     }
// //     setFeedback(newFeedback);
// //   };

// //   const handleUserAnswerChange = (field: keyof UserAnswer, value: string): void => {
// //     setUserAnswer(prev => ({
// //       ...prev,
// //       [field]: value,
// //     }));
// //   };

// //   const renderQuestion = (): JSX.Element => {
// //     const termsString: string = question
// //       .map(term => {
// //         const coef: number = term.coefficient;
// //         const vars: string = term.variable && term.power > 0
// //           ? term.power > 1
// //             ? `${term.variable}^{${term.power}}`
// //             : term.variable
// //           : '';
// //         return coef === 1 && vars ? vars : `${coef}${vars}`;
// //       })
// //       .join(' - ');
// //     return <BlockMath math={termsString} />;
// //   };

// //   const steps: { title: string; content: string; input: JSX.Element }[] = [
// //     {
// //       title: 'Step 1: Identify First Perfect Square',
// //       content: 'Enter the base of the first perfect square (e.g., for 9x^2, enter 3x).',
// //       input: (
// //         <div className="mb-2">
// //           <input
// //             type="text"
// //             value={userAnswer.firstSquare}
// //             onChange={e => handleUserAnswerChange('firstSquare', e.target.value)}
// //             className="w-full p-2 border rounded-md"
// //             placeholder="e.g., 3x"
// //           />
// //         </div>
// //       ),
// //     },
// //     {
// //       title: 'Step 2: Identify Second Perfect Square',
// //       content: 'Enter the base of the second perfect square (e.g., for 16, enter 4).',
// //       input: (
// //         <div className="mb-2">
// //           <input
// //             type="text"
// //             value={userAnswer.secondSquare}
// //             onChange={e => handleUserAnswerChange('secondSquare', e.target.value)}
// //             className="w-full p-2 border rounded-md"
// //             placeholder="e.g., 4"
// //           />
// //         </div>
// //       ),
// //     },
// //     {
// //       title: 'Step 3: Write Factored Form',
// //       content: 'Enter the factored form using the formula a^2 - b^2 = (a + b)(a - b).',
// //       input: (
// //         <div className="mb-2">
// //           <input
// //             type="text"
// //             value={userAnswer.factoredForm}
// //             onChange={e => handleUserAnswerChange('factoredForm', e.target.value)}
// //             className="w-full p-2 border rounded-md"
// //             placeholder="e.g., (x + 3)(x - 3)"
// //           />
// //         </div>
// //       ),
// //     },
// //   ];

// //   return (
// //     <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
// //       <h2 className="text-xl font-bold mb-4 flex items-center">
// //         <Book className="mr-2" /> Difference of Two Squares Practice Tool
// //       </h2>
// //       <p className="mb-4 text-sm">Factor the following polynomial using the Difference of Two Squares method:</p>
// //       <div className="mb-4">{question.length > 0 && renderQuestion() as ReactNode}</div>
// //       {steps.map((s, index) => (
// //         <div key={index} className="mb-4">
// //           {step >= index && (
// //             <>
// //               <h3 className="font-semibold">{s.title}</h3>
// //               <p className="text-sm mb-2">{s.content}</p>
// //               {s.input}
// //               <button
// //                 onClick={() => checkStep(index)}
// //                 className="w-full p-2 bg-green-500 text-white rounded-md mb-2"
// //               >
// //                 Check Step
// //               </button>
// //               {feedback[index] && (
// //                 <p className={`text-sm ${feedback[index].includes('Correct') ? 'text-green-500' : 'text-red-500'}`}>
// //                   {feedback[index]}
// //                   {feedback[index].includes('Incorrect') && (
// //                     <button
// //                       onClick={() => setShowSolution(true)}
// //                       className="ml-2 text-blue-500 underline"
// //                     >
// //                       Show Solution
// //                     </button>
// //                   )}
// //                 </p>
// //               )}
// //             </>
// //           )}
// //         </div>
// //       ))}
// //       {showSolution && (
// //         <div className="mt-4 p-4 bg-gray-100 rounded-md">
// //           <h3 className="font-semibold">Solution:</h3>
// //           <p>
// //             <strong>First perfect square:</strong> <InlineMath math={solution.firstSquare} />
// //           </p>
// //           <p>
// //             <strong>Second perfect square:</strong> <InlineMath math={solution.secondSquare} />
// //           </p>
// //           <p>
// //             <strong>Factored form:</strong> <BlockMath math={solution.factoredForm} />
// //           </p>
// //           <CheckCircle className="text-green-500 mt-2" />
// //         </div>
// //       )}
// //       <button
// //         onClick={generateQuestion}
// //         className="w-full p-2 bg-blue-500 text-white rounded-md mt-4"
// //       >
// //         New Question
// //       </button>
// //     </div>
// //   );
// // };

// // export default DifferenceOfSquaresTool;



// import React, { useState, useEffect, ReactNode } from 'react';
// import { Book, CheckCircle } from 'lucide-react';
// import { InlineMath, BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';

// interface Term {
//   coefficient: number;
//   variable: string;
//   power: number;
// }

// interface UserAnswer {
//   firstSquare: string;
//   secondSquare: string;
//   factoredForm: string;
// }

// interface Solution {
//   firstSquare: string;
//   secondSquare: string;
//   factoredForm: string;
// }

// const DifferenceOfSquaresTool: React.FC = () => {
//   const [question, setQuestion] = useState<Term[]>([]);
//   const [userAnswer, setUserAnswer] = useState<UserAnswer>({
//     firstSquare: '',
//     secondSquare: '',
//     factoredForm: '',
//   });
//   const [solution, setSolution] = useState<Solution>({
//     firstSquare: '',
//     secondSquare: '',
//     factoredForm: '',
//   });
//   const [step, setStep] = useState<number>(0);
//   const [feedback, setFeedback] = useState<string[]>(['', '', '']);
//   const [showSolution, setShowSolution] = useState<boolean>(false);

//   const generateQuestion = (): void => {
//     const possibleVars: string[] = ['x', 'y', 'a', 'b'];
//     const varIndex: number = Math.floor(Math.random() * possibleVars.length);
//     const var2Index: number = Math.floor(Math.random() * (possibleVars.length - 1));
//     const secondVar: string = possibleVars.filter((_, i) => i !== varIndex)[var2Index];

//     const firstCoef: number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10][Math.floor(Math.random() * 10)];
//     const secondCoef: number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10][Math.floor(Math.random() * 10)];
//     const firstPower: number = [2, 4][Math.floor(Math.random() * 2)];
//     const secondPower: number = [2, 4][Math.floor(Math.random() * 2)];

//     const useSecondVar: boolean = Math.random() > 0.5;
//     const terms: Term[] = [
//       { coefficient: firstCoef * firstCoef, variable: useSecondVar ? possibleVars[varIndex] : '', power: firstPower },
//       { coefficient: secondCoef * secondCoef, variable: useSecondVar ? secondVar : '', power: secondPower },
//     ];

//     setQuestion(terms);
//     calculateSolution(terms);
//     setUserAnswer({ firstSquare: '', secondSquare: '', factoredForm: '' });
//     setFeedback(['', '', '']);
//     setShowSolution(false);
//     setStep(0);
//   };

//   useEffect(() => {
//     generateQuestion();
//   }, []);

//   const calculateSolution = (terms: Term[]): void => {
//     const formatBase = (term: Term): string => {
//       const coefSqrt = Math.sqrt(term.coefficient);
//       const powerSqrt = term.power / 2;

//       const coefPart = coefSqrt % 1 === 0 ? coefSqrt.toString() : `\\sqrt{${term.coefficient}}`;
//       const variablePart = term.variable
//         ? powerSqrt === 1
//           ? term.variable
//           : `${term.variable}^{${powerSqrt}}`
//         : '';

//       return `${coefPart}${variablePart}`;
//     };

//     const firstBase = formatBase(terms[0]);
//     const secondBase = formatBase(terms[1]);

//     const factoredForm = `(${firstBase} + ${secondBase})(${firstBase} - ${secondBase})`;

//     setSolution({
//       firstSquare: firstBase,
//       secondSquare: secondBase,
//       factoredForm,
//     });
//   };

//   const checkStep = (currentStep: number): void => {
//     const newFeedback: string[] = [...feedback];
//     const normalize = (input: string): string =>
//       input.replace(/\s+/g, '').replace(/\^\{?(\d+)\}?/g, '^{$1}');

//     if (currentStep === 0) {
//       if (normalize(userAnswer.firstSquare) === normalize(solution.firstSquare)) {
//         newFeedback[0] = 'Correct! Proceed to the next step.';
//         setStep(1);
//       } else {
//         newFeedback[0] = 'Incorrect first square. Hint: Identify the term that is a perfect square (e.g., x^2, 9 = 3^2).';
//       }
//     } else if (currentStep === 1) {
//       if (normalize(userAnswer.secondSquare) === normalize(solution.secondSquare)) {
//         newFeedback[1] = 'Correct! Proceed to the final step.';
//         setStep(2);
//       } else {
//         newFeedback[1] = 'Incorrect second square. Hint: Identify the second term that is a perfect square.';
//       }
//     } else if (currentStep === 2) {
//       if (normalize(userAnswer.factoredForm) === normalize(solution.factoredForm)) {
//         newFeedback[2] = 'Correct! You factored the polynomial successfully!';
//       } else {
//         newFeedback[2] = 'Incorrect factored form. Hint: Use the formula a^2 - b^2 = (a + b)(a - b).';
//       }
//     }
//     setFeedback(newFeedback);
//   };

//   const handleUserAnswerChange = (field: keyof UserAnswer, value: string): void => {
//     setUserAnswer(prev => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const renderQuestion = (): JSX.Element => {
//     const termsString: string = question
//       .map(term => {
//         const coef: number = term.coefficient;
//         const vars: string = term.variable && term.power > 0
//           ? term.power > 1
//             ? `${term.variable}^${term.power}`
//             : term.variable
//           : '';
//         return coef === 1 && vars ? vars : `${coef}${vars}`;
//       })
//       .join(' - ');
//     return <BlockMath math={termsString} />;
//   };

//   const steps: { title: string; content: string; input: JSX.Element }[] = [
//     {
//       title: 'Step 1: Identify First Perfect Square',
//       content: 'Enter the base of the first perfect square (e.g., for 9x^2, enter 3x).',
//       input: (
//         <div className="mb-2">
//           <input
//             type="text"
//             value={userAnswer.firstSquare}
//             onChange={e => handleUserAnswerChange('firstSquare', e.target.value)}
//             className="w-full p-2 border rounded-md"
//             placeholder="e.g., 3x"
//           />
//         </div>
//       ),
//     },
//     {
//       title: 'Step 2: Identify Second Perfect Square',
//       content: 'Enter the base of the second perfect square (e.g., for 16, enter 4).',
//       input: (
//         <div className="mb-2">
//           <input
//             type="text"
//             value={userAnswer.secondSquare}
//             onChange={e => handleUserAnswerChange('secondSquare', e.target.value)}
//             className="w-full p-2 border rounded-md"
//             placeholder="e.g., 4"
//           />
//         </div>
//       ),
//     },
//     {
//       title: 'Step 3: Write Factored Form',
//       content: 'Enter the factored form using the formula a^2 - b^2 = (a + b)(a - b).',
//       input: (
//         <div className="mb-2">
//           <input
//             type="text"
//             value={userAnswer.factoredForm}
//             onChange={e => handleUserAnswerChange('factoredForm', e.target.value)}
//             className="w-full p-2 border rounded-md"
//             placeholder="e.g., (x + 3)(x - 3)"
//           />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl font-bold mb-4 flex items-center">
//         <Book className="mr-2" /> Difference of Two Squares Practice Tool
//       </h2>
//       <p className="mb-4 text-sm">Factor the following polynomial using the Difference of Two Squares method:</p>
//       <div className="mb-4">{question.length > 0 && renderQuestion() as ReactNode}</div>
//       {steps.map((s, index) => (
//         <div key={index} className="mb-4">
//           {step >= index && (
//             <>
//               <h3 className="font-semibold">{s.title}</h3>
//               <p className="text-sm mb-2">{s.content}</p>
//               {s.input}
//               <button
//                 onClick={() => checkStep(index)}
//                 className="w-full p-2 bg-green-500 text-white rounded-md mb-2"
//               >
//                 Check Step
//               </button>
//               {feedback[index] && (
//                 <p className={`text-sm ${feedback[index].includes('Correct') ? 'text-green-500' : 'text-red-500'}`}>
//                   {feedback[index]}
//                   {feedback[index].includes('Incorrect') && (
//                     <button
//                       onClick={() => setShowSolution(true)}
//                       className="ml-2 text-blue-500 underline"
//                     >
//                       Show Solution
//                     </button>
//                   )}
//                 </p>
//               )}
//             </>
//           )}
//         </div>
//       ))}
//       {showSolution && (
//         <div className="mt-4 p-4 bg-gray-100 rounded-md">
//           <h3 className="font-semibold">Solution:</h3>
//           <p>
//             <strong>First perfect square:</strong> <InlineMath math={solution.firstSquare} />
//           </p>
//           <p>
//             <strong>Second perfect square:</strong> <InlineMath math={solution.secondSquare} />
//           </p>
//           <p>
//             <strong>Factored form:</strong> <BlockMath math={solution.factoredForm} />
//           </p>
//           <CheckCircle className="text-green-500 mt-2" />
//         </div>
//       )}
//       <button
//         onClick={generateQuestion}
//         className="w-full p-2 bg-blue-500 text-white rounded-md mt-4"
//       >
//         New Question
//       </button>
//     </div>
//   );
// };
// export default DifferenceOfSquaresTool;

import React, { useState, useEffect } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface Term {
  coefficient: number;
  variable?: string;
  power?: number;
}

interface Solution {
  firstSquare: string;
  secondSquare: string;
  factoredForm: string;
}

interface UserAnswer {
  firstSquare: string;
  secondSquare: string;
  factoredForm: string;
}

const DifferenceOfSquaresTool: React.FC = () => {
  const [solution, setSolution] = useState<Solution>({
    firstSquare: '',
    secondSquare: '',
    factoredForm: '',
  });

  const [userAnswer, setUserAnswer] = useState<UserAnswer>({
    firstSquare: '',
    secondSquare: '',
    factoredForm: '',
  });

  const [feedback, setFeedback] = useState<string[]>(['', '', '']);
  const [stepComplete, setStepComplete] = useState<boolean[]>([false, false, false]);

  const terms: Term[] = [
    { coefficient: 4, variable: 'a', power: 4 },
    { coefficient: 1 },
  ];

  useEffect(() => {
    calculateSolution(terms);
  }, []);

  const calculateSolution = (terms: Term[]) => {
    const formatBase = (term: Term): string => {
      const coefSqrt = Math.sqrt(term.coefficient);
      const powerSqrt = term.power ? term.power / 2 : 0;

      const coefPart = coefSqrt % 1 === 0 ? coefSqrt.toString() : `\\sqrt{${term.coefficient}}`;
      const variablePart = term.variable
        ? powerSqrt === 1
          ? term.variable
          : `${term.variable}^{${powerSqrt}}`
        : '';

      return `${coefPart}${variablePart}`;
    };

    const firstBase = formatBase(terms[0]);
    const secondBase = formatBase(terms[1]);
    const factoredForm = `(${firstBase} + ${secondBase})(${firstBase} - ${secondBase})`;

    setSolution({
      firstSquare: firstBase,
      secondSquare: secondBase,
      factoredForm,
    });
  };

  const normalize = (input: string): string =>
    input.replace(/\s+/g, '').replace(/\^\{?(\d+)\}?/g, '^{$1}');

  const handleChange = (field: keyof UserAnswer, value: string) => {
    setUserAnswer((prev) => ({ ...prev, [field]: value }));
  };

  const checkAnswer = (field: keyof UserAnswer, index: number, expected: string) => {
    const updatedFeedback = [...feedback];
    if (normalize(userAnswer[field]) === normalize(expected)) {
      updatedFeedback[index] = '✅ Correct!';
      const updatedStepComplete = [...stepComplete];
      updatedStepComplete[index] = true;
      setStepComplete(updatedStepComplete);
    } else {
      updatedFeedback[index] = '❌ Try again. Hint: Think of what squared gives this term.';
    }
    setFeedback(updatedFeedback);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Factor the Difference of Squares</h2>

      <p className="mb-4">
        Given:
        <BlockMath
          math={`${terms[0].coefficient}${terms[0].variable ?? ''}${terms[0].power ? `^${terms[0].power}` : ''} - ${terms[1].coefficient}`}
        />
      </p>

      {/* Step 1 */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">1. What is the square root of the first term?</label>
        
           {userAnswer.firstSquare && (
          <div className="mt-2 text-sm text-gray-600">
            <span>You entered:</span>
            <BlockMath math={userAnswer.firstSquare} />
          </div>
        )}
        <input
          type="text"
          value={userAnswer.firstSquare}
          onChange={(e) => handleChange('firstSquare', e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="e.g., 2a^2"
        />
     
        <button
          onClick={() => checkAnswer('firstSquare', 0, solution.firstSquare)}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Check
        </button>
        {feedback[0] && <p className="mt-2">{feedback[0]}</p>}
      </div>

      {/* Step 2 */}
      {stepComplete[0] && (
        <div className="mb-6">
          <label className="block mb-1 font-medium">2. What is the square root of the second term?</label>
              {userAnswer.secondSquare && (
            <div className="mt-2 text-sm text-gray-600">
              <span>You entered:</span>
              <BlockMath math={userAnswer.secondSquare} />
            </div>
          )}
          <input
            type="text"
            value={userAnswer.secondSquare}
            onChange={(e) => handleChange('secondSquare', e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="e.g., 1"
          />
     
          <button
            onClick={() => checkAnswer('secondSquare', 1, solution.secondSquare)}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Check
          </button>
          {feedback[1] && <p className="mt-2">{feedback[1]}</p>}
        </div>
      )}

      {/* Step 3 */}
      {stepComplete[1] && (
        <div className="mb-6">
          <label className="block mb-1 font-medium">3. Write the fully factored form</label>
          <input
            type="text"
            value={userAnswer.factoredForm}
            onChange={(e) => handleChange('factoredForm', e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="e.g., (3a^3 + 2)(3a^3 - 2)"
          />
          {userAnswer.factoredForm && (
            <div className="mt-2 text-sm text-gray-600">
              <span>You entered:</span>
              <BlockMath math={userAnswer.factoredForm} />
            </div>
          )}
          <button
            onClick={() => checkAnswer('factoredForm', 2, solution.factoredForm)}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Check
          </button>
          {feedback[2] && <p className="mt-2">{feedback[2]}</p>}
        </div>
      )}

      {/* Final Answer */}
      {stepComplete[2] && (
        <div className="mt-6">
          <p className="font-semibold mb-2">🎉 Final Answer:</p>
          <BlockMath math={solution.factoredForm} />
        </div>
      )}
    </div>
  );
};

export default DifferenceOfSquaresTool;

