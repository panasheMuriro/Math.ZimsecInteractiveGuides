// // import React, { useState } from 'react';
// // import { CheckCircle, XCircle } from 'lucide-react';

// // interface Term {
// //   term: string;
// //   isLike: boolean;
// // }

// // const LikeTermsPractice: React.FC = () => {
// //   const [selectedTerms, setSelectedTerms] = useState<string[]>([]);
// //   const [showFeedback, setShowFeedback] = useState(false);
// //   const [isCorrect, setIsCorrect] = useState(false);

// //   const terms: Term[] = [
// //     { term: '4x', isLike: true },
// //     { term: '2y', isLike: false },
// //     { term: '6x', isLike: true },
// //     { term: '-3x²', isLike: false },
// //   ];

// //   const handleTermClick = (term: string) => {
// //     if (selectedTerms.includes(term)) {
// //       setSelectedTerms(selectedTerms.filter((t) => t !== term));
// //     } else {
// //       setSelectedTerms([...selectedTerms, term]);
// //     }
// //     setShowFeedback(false);
// //   };

// //   const handleCheck = () => {
// //     const correctTerms = terms.filter((t) => t.isLike).map((t) => t.term);
// //     const isSelectionCorrect =
// //       selectedTerms.length === correctTerms.length &&
// //       selectedTerms.every((term) => correctTerms.includes(term));
// //     setIsCorrect(isSelectionCorrect);
// //     setShowFeedback(true);
// //   };

// //   const handleReset = () => {
// //     setSelectedTerms([]);
// //     setShowFeedback(false);
// //   };

// //   return (
// //     <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
// //       <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
// //         Identify Like Terms
// //       </h2>
// //       <p className="text-gray-600 mb-4 text-sm">
// //         Select the terms that are like terms with <strong>4x</strong>.
// //       </p>
// //       <div className="grid grid-cols-2 gap-2 mb-4">
// //         {terms.map((term) => (
// //           <button
// //             key={term.term}
// //             onClick={() => handleTermClick(term.term)}
// //             className={`p-3 rounded-lg text-center text-sm font-medium transition-colors ${
// //               selectedTerms.includes(term.term)
// //                 ? 'bg-blue-500 text-white'
// //                 : 'bg-white border border-gray-300 text-gray-800 hover:bg-blue-100'
// //             }`}
// //           >
// //             {term.term}
// //           </button>
// //         ))}
// //       </div>
// //       <div className="flex justify-between mb-4">
// //         <button
// //           onClick={handleCheck}
// //           className="flex-1 mr-2 bg-green-500 text-white py-2 rounded-lg text-sm hover:bg-green-600 transition-colors"
// //           disabled={selectedTerms.length === 0}
// //         >
// //           Check Answer
// //         </button>
// //         <button
// //           onClick={handleReset}
// //           className="flex-1 ml-2 bg-gray-300 text-gray-800 py-2 rounded-lg text-sm hover:bg-gray-400 transition-colors"
// //         >
// //           Reset
// //         </button>
// //       </div>
// //       {showFeedback && (
// //         <div
// //           className={`p-3 rounded-lg flex items-center justify-center text-sm ${
// //             isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
// //           }`}
// //         >
// //           {isCorrect ? (
// //             <>
// //               <CheckCircle className="w-5 h-5 mr-2" />
// //               Correct! 4x and 6x are like terms.
// //             </>
// //           ) : (
// //             <>
// //               <XCircle className="w-5 h-5 mr-2" />
// //               Incorrect. Try selecting only terms with x to the power of 1.
// //             </>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default LikeTermsPractice;

// import { useState } from 'react';
// import { Check, X, RotateCcw } from 'lucide-react';

// type Term = {
//   id: number;
//   text: string;
//   isLikeTerm: boolean;
//   selected: boolean;
// };

// const LikeTermsInteractive = () => {
//   const [terms, setTerms] = useState<Term[]>([
//     { id: 1, text: '4x', isLikeTerm: true, selected: false },
//     { id: 2, text: '2y', isLikeTerm: false, selected: false },
//     { id: 3, text: '6x', isLikeTerm: true, selected: false },
//     { id: 4, text: '-3x²', isLikeTerm: false, selected: false },
//   ]);
//   const [feedback, setFeedback] = useState<{ message: string; correct: boolean } | null>(null);
//   const [submitted, setSubmitted] = useState(false);

//   const toggleSelection = (id: number) => {
//     if (submitted) return;
//     setTerms(terms.map(term => 
//       term.id === id ? { ...term, selected: !term.selected } : term
//     ));
//   };

//   const handleSubmit = () => {
//     const selectedTerms = terms.filter(term => term.selected);
//     const correctSelections = selectedTerms.every(term => term.isLikeTerm);
//     const allCorrectSelected = terms
//       .filter(term => term.isLikeTerm)
//       .every(term => term.selected);
    
//     if (selectedTerms.length === 0) {
//       setFeedback({ message: 'Please select at least one term', correct: false });
//     } else if (correctSelections && allCorrectSelected) {
//       setFeedback({ message: 'Correct! These are like terms.', correct: true });
//     } else if (correctSelections) {
//       setFeedback({ message: 'Partially correct - you missed some like terms', correct: false });
//     } else {
//       setFeedback({ message: 'Incorrect - not all selected terms are like terms', correct: false });
//     }
//     setSubmitted(true);
//   };

//   const resetExercise = () => {
//     setTerms(terms.map(term => ({ ...term, selected: false })));
//     setFeedback(null);
//     setSubmitted(false);
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
//       <h3 className="text-xl font-bold mb-4 text-center">Identify Like Terms</h3>
      
//       <p className="mb-4 text-gray-700">
//         Select all terms that are like terms with each other:
//       </p>
      
//       <div className="flex flex-wrap justify-center gap-3 mb-6">
//         {terms.map((term) => (
//           <button
//             key={term.id}
//             onClick={() => toggleSelection(term.id)}
//             disabled={submitted}
//             className={`px-4 py-2 rounded-lg transition-all duration-200 ${
//               term.selected
//                 ? 'bg-blue-500 text-white ring-2 ring-blue-300'
//                 : 'bg-gray-100 hover:bg-gray-200'
//             } ${submitted ? 'opacity-90 cursor-not-allowed' : 'cursor-pointer'}`}
//           >
//             {term.text}
//           </button>
//         ))}
//       </div>

//       {feedback && (
//         <div className={`mb-4 p-3 rounded-lg flex items-center ${
//           feedback.correct 
//             ? 'bg-green-100 text-green-700' 
//             : 'bg-red-100 text-red-700'
//         }`}>
//           {feedback.correct ? (
//             <Check className="mr-2" size={20} />
//           ) : (
//             <X className="mr-2" size={20} />
//           )}
//           <span>{feedback.message}</span>
//         </div>
//       )}

//       <div className="flex justify-center gap-3">
//         <button
//           onClick={handleSubmit}
//           disabled={submitted}
//           className={`px-4 py-2 rounded-lg flex items-center ${
//             submitted
//               ? 'bg-gray-300 cursor-not-allowed'
//               : 'bg-blue-500 hover:bg-blue-600 text-white'
//           }`}
//         >
//           Check Answer
//         </button>
        
//         <button
//           onClick={resetExercise}
//           className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center"
//         >
//           <RotateCcw className="mr-2" size={18} />
//           Reset
//         </button>
//       </div>

//       <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-gray-700">
//         <p className="font-semibold mb-1">Remember:</p>
//         <p>Like terms have the same variable raised to the same power.</p>
//         <p className="mt-2">Example: 4x and 6x are like terms</p>
//       </div>
//     </div>
//   );
// };

// export default LikeTermsInteractive;

import { useState } from 'react';
import { Check, X, RotateCcw, BookOpen, Lightbulb } from 'lucide-react';

type Term = {
  id: number;
  text: string;
  isLikeTerm: boolean;
  selected: boolean;
};

type Problem = {
  id: number;
  instruction: string;
  terms: Term[];
  explanation: string;
};

type Feedback = {
  message: string;
  correct: boolean;
} | null;

const LikeTermsInteractive = () => {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [problems, setProblems] = useState<Problem[]>([
    {
      id: 1,
      instruction: "Select all terms that are like terms with each other:",
      terms: [
        { id: 1, text: '4x', isLikeTerm: true, selected: false },
        { id: 2, text: '2y', isLikeTerm: false, selected: false },
        { id: 3, text: '6x', isLikeTerm: true, selected: false },
        { id: 4, text: '-3x²', isLikeTerm: false, selected: false },
      ],
      explanation: "Like terms must have the same variable raised to the same power. Both 4x and 6x have x to the first power."
    },
    {
      id: 2,
      instruction: "Which of these terms are like terms?",
      terms: [
        { id: 1, text: '5a²b', isLikeTerm: true, selected: false },
        { id: 2, text: '3ab²', isLikeTerm: false, selected: false },
        { id: 3, text: '-2a²b', isLikeTerm: true, selected: false },
        { id: 4, text: '7ab', isLikeTerm: false, selected: false },
      ],
      explanation: "Both 5a²b and -2a²b have the same variables (a and b) with the same exponents (a² and b¹)."
    },
    {
      id: 3,
      instruction: "Identify the like terms in this group:",
      terms: [
        { id: 1, text: '8m³n', isLikeTerm: false, selected: false },
        { id: 2, text: '2m²n', isLikeTerm: true, selected: false },
        { id: 3, text: '-5m²n', isLikeTerm: true, selected: false },
        { id: 4, text: 'mn²', isLikeTerm: false, selected: false },
      ],
      explanation: "Both 2m²n and -5m²n have m to the second power and n to the first power."
    }
  ]);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [submitted, setSubmitted] = useState(false);
  const [completedProblems, setCompletedProblems] = useState<boolean[]>([false, false, false]);

  const toggleSelection = (termId: number) => {
    if (submitted) return;
    
    setProblems(prev => prev.map((problem, idx) => 
      idx === currentProblem 
        ? {
            ...problem,
            terms: problem.terms.map(term => 
              term.id === termId ? { ...term, selected: !term.selected } : term
            )
          }
        : problem
    ));
  };

  const handleSubmit = () => {
    const currentTerms = problems[currentProblem].terms;
    const selectedTerms = currentTerms.filter(term => term.selected);
    const correctSelections = selectedTerms.every(term => term.isLikeTerm);
    const allCorrectSelected = currentTerms
      .filter(term => term.isLikeTerm)
      .every(term => term.selected);
    
    if (selectedTerms.length === 0) {
      setFeedback({ message: 'Please select at least one term', correct: false });
    } else if (correctSelections && allCorrectSelected) {
      setFeedback({ message: 'Perfect! These are like terms.', correct: true });
      setCompletedProblems(prev => {
        const newCompleted = [...prev];
        newCompleted[currentProblem] = true;
        return newCompleted;
      });
    } else if (correctSelections) {
      setFeedback({ message: 'Partially correct - you missed some like terms', correct: false });
    } else {
      setFeedback({ message: 'Incorrect - not all selected terms are like terms', correct: false });
    }
    setSubmitted(true);
  };

  const resetProblem = () => {
    setProblems(prev => prev.map((problem, idx) => 
      idx === currentProblem 
        ? {
            ...problem,
            terms: problem.terms.map(term => ({ ...term, selected: false }))
          }
        : problem
    ));
    setFeedback(null);
    setSubmitted(false);
  };

  const nextProblem = () => {
    if (currentProblem < problems.length - 1) {
      setCurrentProblem(prev => prev + 1);
      setFeedback(null);
      setSubmitted(false);
    }
  };

  const prevProblem = () => {
    if (currentProblem > 0) {
      setCurrentProblem(prev => prev - 1);
      setFeedback(null);
      setSubmitted(false);
    }
  };

  const currentTerms = problems[currentProblem].terms;

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-indigo-800 flex items-center">
          <BookOpen className="mr-2" /> Like Terms Practice
        </h2>
  
      </div>

      {/* Problem header */}
      <div className="bg-white rounded-xl p-5 mb-6 shadow-md border border-indigo-100">
        <div className="flex items-center mb-2">
          <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
            Problem {currentProblem + 1} of {problems.length}
          </span>
          {completedProblems[currentProblem] && (
            <span className="ml-2 bg-green-100 text-green-800 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center">
              <Check size={14} className="mr-1" /> Completed
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {problems[currentProblem].instruction}
        </h3>
        
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {currentTerms.map((term) => (
            <button
              key={term.id}
              onClick={() => toggleSelection(term.id)}
              disabled={submitted}
              className={`px-5 py-3 rounded-xl text-lg font-mono transition-all duration-200 transform hover:scale-105 ${
                term.selected
                  ? 'bg-indigo-500 text-white shadow-md ring-2 ring-indigo-300'
                  : 'bg-white text-gray-800 shadow hover:shadow-md border border-gray-200'
              } ${submitted ? 'opacity-90 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {term.text}
            </button>
          ))}
        </div>
      </div>

      {/* Feedback section */}
      {feedback && (
        <div className={`mb-6 p-4 rounded-xl flex items-start ${
          feedback.correct 
            ? 'bg-green-50 border border-green-200' 
            : 'bg-red-50 border border-red-200'
        }`}>
          <div className={`mr-3 mt-0.5 ${feedback.correct ? 'text-green-500' : 'text-red-500'}`}>
            {feedback.correct ? <Check size={24} /> : <X size={24} />}
          </div>
          <div>
            <p className={`font-medium ${feedback.correct ? 'text-green-700' : 'text-red-700'}`}>
              {feedback.message}
            </p>
            <p className="text-gray-600 mt-1 text-sm">
              {problems[currentProblem].explanation}
            </p>
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex justify-evenly items-center flex-wrap gap-3">
      
        <div className="flex gap-3">
          <button
            onClick={resetProblem}
            className="px-4 py-2 bg-white text-gray-700 rounded-lg flex items-center shadow hover:bg-gray-50"
          >
            <RotateCcw size={18} className="mr-1" />
            Reset
          </button>
          
          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md flex items-center transition-colors"
            >
              Check Answer
            </button>
          ) : currentProblem < problems.length - 1 ? (
            <button
              onClick={nextProblem}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md flex items-center transition-colors"
            >
              Next Problem
            </button>
          ) : (
            <div className="px-5 py-2 bg-green-500 text-white rounded-lg shadow-md flex items-center">
              <Lightbulb className="mr-2" /> All Done!
            </div>
          )}
        </div>


          <button
          onClick={prevProblem}
          disabled={currentProblem === 0}
          className={`px-4 py-2 rounded-lg flex items-center ${
            currentProblem === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
          }`}
        >
          Previous Problem
        </button>
        
        
        <button
          onClick={nextProblem}
          disabled={currentProblem === problems.length - 1}
          className={`px-4 py-2 rounded-lg flex items-center ${
            currentProblem === problems.length - 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
          }`}
        >
          Next Problem
        </button>


      </div>

      {/* Concept reminder */}
      <div className="mt-8 p-4 bg-indigo-100 rounded-xl border border-indigo-200">
        <h4 className="font-bold text-indigo-800 flex items-center mb-2">
          <Lightbulb className="mr-2" size={20} /> Remember
        </h4>
        <p className="text-indigo-700 text-sm">
          Like terms have the same variables raised to the same powers. 
          You can only combine terms that are alike!
        </p>
      </div>
    </div>
  );
};

export default LikeTermsInteractive;