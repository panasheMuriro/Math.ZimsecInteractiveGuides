import React, { useState, ReactNode } from 'react';
import { ChevronRight, Check, RotateCcw, Lightbulb, BookOpen, ArrowRight, Eye, X, AlertCircle } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// Define the structure for a practice problem
interface PracticeProblem {
  expression: string; // The expression to expand (e.g., "3(2x + 5)")
  solution: {
    outsideTerm: string; // The term outside the bracket (e.g., "3", "-2x")
    insideTerms: string[]; // Array of terms inside the bracket (e.g., ["2x", "5"])
    expandedTerms: string[]; // Array of resulting terms after multiplication (e.g., ["6x", "15"])
    finalExpanded: string; // The final expanded and simplified expression (e.g., "6x + 15")
  };
  explanation: {
    outsideTerm: string; // Explanation for identifying the outside term (can contain KaTeX)
    insideTerms: string; // Explanation for identifying inside terms (can contain KaTeX)
    expandedTerms: string; // Explanation for the multiplication step (can contain KaTeX)
    finalExpanded: string; // Explanation for the final form (can contain KaTeX)
  };
  hint: string; // Hint for the problem (can contain KaTeX)
}

// Define the structure for MCQ options at each step
interface McqOptions {
  outsideTerm: string[]; // Options for the outside term
  insideTerms: string[][]; // Options for the list of inside terms (array of arrays)
  expandedTerms: string[][]; // Options for the list of expanded terms (array of arrays)
  finalExpanded: string[]; // Options for the final expanded form
}

// Define the structure for a step in the process
interface Step {
  id: keyof McqOptions; // Links to the MCQ options and solution fields
  title: string; // Can contain KaTeX
  description: string; // Can contain KaTeX
  isMcq: true; // All steps are MCQ in this version
}

const ExpandingSingleBracketsTool: React.FC = () => {
  // --- State Management ---
  const [currentProblemIndex, setCurrentProblemIndex] = useState<number>(0);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [userMcqSelection, setUserMcqSelection] = useState<string | string[] | null>(null); // Handles single string or array of strings
  const [showFeedback, setShowFeedback] = useState<{ correct: boolean; show: boolean } | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [completedProblems, setCompletedProblems] = useState<Set<number>>(new Set());

  // --- Practice Problems Data ---
  const practiceProblems: PracticeProblem[] = [
    {
      expression: "3(2x + 5)",
      solution: {
        outsideTerm: "3",
        insideTerms: ["2x", "5"],
        expandedTerms: ["6x", "15"],
        finalExpanded: "6x + 15"
      },
      explanation: {
        outsideTerm: "The term outside the bracket is the coefficient multiplying the parentheses: $3$.",
        insideTerms: "The terms inside the bracket are $2x$ and $5$.",
        expandedTerms: "Multiply the outside term by each inside term: $3 \\times 2x = 6x$, $3 \\times 5 = 15$.",
        finalExpanded: "Combine the results with the correct signs: $6x + 15$."
      },
      hint: "What number or variable is multiplying the terms inside the parentheses? What are the terms being multiplied?"
    },
    {
      expression: "-2x(3x - 4)",
      solution: {
        outsideTerm: "-2x",
        insideTerms: ["3x", "-4"],
        expandedTerms: ["-6x^2", "8x"],
        finalExpanded: "-6x^2 + 8x"
      },
      explanation: {
        outsideTerm: "The term outside the bracket is $-2x$.",
        insideTerms: "The terms inside the bracket are $3x$ and $-4$.",
        expandedTerms: "Multiply the outside term by each inside term: $-2x \\times 3x = -6x^2$, $-2x \\times -4 = 8x$.",
        finalExpanded: "Combine the results: $-6x^2 + 8x$. Note the sign change from $-4$ to $+8x$."
      },
      hint: "Pay attention to the negative sign in front of $2x$. What are the two terms inside the parentheses?"
    },
    {
      expression: "4(3a - 2)", // From the example
      solution: {
        outsideTerm: "4",
        insideTerms: ["3a", "-2"],
        expandedTerms: ["12a", "-8"],
        finalExpanded: "12a - 8"
      },
      explanation: {
        outsideTerm: "The term outside the bracket is $4$.",
        insideTerms: "The terms inside the bracket are $3a$ and $-2$.",
        expandedTerms: "Multiply the outside term by each inside term: $4 \\times 3a = 12a$, $4 \\times -2 = -8$.",
        finalExpanded: "Combine the results: $12a - 8$."
      },
      hint: "Multiply 4 by each term inside the bracket. Remember the sign of the second term is negative."
    },
    {
      expression: "5x(x + 2y - 1)", // New problem with 3 terms inside
      solution: {
        outsideTerm: "5x",
        insideTerms: ["x", "2y", "-1"],
        expandedTerms: ["5x^2", "10xy", "-5x"],
        finalExpanded: "5x^2 + 10xy - 5x"
      },
      explanation: {
        outsideTerm: "The term outside the bracket is $5x$.",
        insideTerms: "The terms inside the bracket are $x$, $2y$, and $-1$.",
        expandedTerms: "Multiply the outside term by each inside term: $5x \\times x = 5x^2$, $5x \\times 2y = 10xy$, $5x \\times -1 = -5x$.",
        finalExpanded: "Combine the results: $5x^2 + 10xy - 5x$."
      },
      hint: "Distribute $5x$ to each of the three terms inside the parentheses. Keep track of all signs."
    }
  ];

  // --- MCQ Options Data ---
  const mcqOptionsPerProblem: McqOptions[] = [
    // Problem 1: 3(2x + 5)
    {
      outsideTerm: ["3", "2x", "5", "2x + 5"],
      insideTerms: [["2x", "5"], ["3", "2x"], ["5", "3"], ["2x", "+5"]],
      expandedTerms: [["6x", "15"], ["3x", "8"], ["6", "15x"], ["6x", "+15"]],
      finalExpanded: ["6x + 15", "6x - 15", "3(2x + 5)", "9x"]
    },
    // Problem 2: -2x(3x - 4)
    {
      outsideTerm: ["-2x", "3x", "-4", "2x"],
      insideTerms: [["3x", "-4"], ["-2x", "3x"], ["-4", "3x"], ["3x", "4"]],
      expandedTerms: [["-6x^2", "8x"], ["-6x", "8"], ["6x^2", "-8x"], ["-6x^2", "-8x"]],
      finalExpanded: ["-6x^2 + 8x", "-6x^2 - 8x", "-2x(3x - 4)", "2x^2 + 8x"]
    },
    // Problem 3: 4(3a - 2)
    {
      outsideTerm: ["4", "3a", "-2", "3"],
      insideTerms: [["3a", "-2"], ["4", "3a"], ["-2", "3a"], ["3a", "2"]],
      expandedTerms: [["12a", "-8"], ["4a", "-6"], ["12", "-8a"], ["12a", "8"]],
      finalExpanded: ["12a - 8", "12a + 8", "4(3a - 2)", "14a"]
    },
    // Problem 4: 5x(x + 2y - 1)
    {
        outsideTerm: ["5x", "x", "2y", "-1"],
        insideTerms: [["x", "2y", "-1"], ["5x", "x", "2y"], ["x", "2y", "1"], ["5x", "2y", "-1"]],
        expandedTerms: [["5x^2", "10xy", "-5x"], ["5x", "10y", "-5"], ["5x^2", "10xy", "5x"], ["5x^2", "2y", "-1"]],
        finalExpanded: ["5x^2 + 10xy - 5x", "5x^2 - 10xy + 5x", "5x(x + 2y - 1)", "5x^2 + 10xy + 5x"]
      }
  ];

  // --- Steps Definition ---
  const steps: Step[] = [
    {
      id: "outsideTerm",
      title: "Step 1: Identify the Outside Term",
      description: "What is the term that multiplies the entire bracket?",
      isMcq: true
    },
    {
      id: "insideTerms",
      title: "Step 2: List the Inside Terms",
      description: "What are the individual terms inside the bracket?",
      isMcq: true
    },
    {
      id: "expandedTerms",
      title: "Step 3: Multiply Each Inside Term",
      description: "Multiply the outside term by each of the inside terms. What do you get?",
      isMcq: true
    },
    {
      id: "finalExpanded",
      title: "Final Step: Write the Expanded Form",
      description: "Combine the results from the previous step with the correct signs:",
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

    // Handle array steps (insideTerms, expandedTerms)
    if (stepId === "insideTerms" || stepId === "expandedTerms") {
        // Normalize arrays for comparison
        const normalizeArray = (arr: string[]) => arr.map(item => item.replace(/\s+/g, '').toLowerCase()).sort();
        const userArray = Array.isArray(userMcqSelection) ? userMcqSelection : [userMcqSelection]; // Ensure user selection is an array
        const correctArray = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer]; // Ensure correct answer is an array

        const normalizedUser = normalizeArray(userArray);
        const normalizedCorrect = normalizeArray(correctArray);

        // Compare lengths and elements
        if (normalizedUser.length !== normalizedCorrect.length) return false;
        return normalizedUser.every((item, index) => item === normalizedCorrect[index]);
    }

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

  const handleOptionSelect = (option: string | string[]): void => {
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
  const renderOptionContent = (option: string | string[], stepId: keyof McqOptions): ReactNode => {
    // For steps that return arrays of terms
    if (stepId === 'insideTerms' || stepId === 'expandedTerms') {
        const terms = Array.isArray(option) ? option : [option];
        return (
            <div className="flex items-center space-x-1">
                {terms.map((term, idx) => (
                     <React.Fragment key={idx}>
                        <InlineMath math={term} />
                        {idx < terms.length - 1 && <span>,</span>}
                    </React.Fragment>
                ))}
            </div>
        );
    }
    // For steps that are clearly mathematical expressions
    if (stepId === 'outsideTerm' || stepId === 'finalExpanded') {
      // Render mathematical options with KaTeX
      return <InlineMath math={String(option)} />;
    }
    // Fallback (shouldn't be reached for this tool)
    return <span>{String(option)}</span>;
  };

  // Helper to render the correct answer based on step type
  const renderCorrectAnswer = (answer: string | string[], stepId: keyof McqOptions): ReactNode => {
    // Apply same logic as options
    if (stepId === 'insideTerms' || stepId === 'expandedTerms') {
        const terms = Array.isArray(answer) ? answer : [answer];
        return (
            <div className="flex items-center justify-center space-x-1">
                 {terms.map((term, idx) => (
                    <React.Fragment key={idx}>
                        <InlineMath math={term} />
                        {idx < terms.length - 1 && <span>,</span>}
                    </React.Fragment>
                ))}
            </div>
        );
    }
    if (stepId === 'outsideTerm' || stepId === 'finalExpanded') {
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

  // Helper to render previous steps summary
  const getCompletedSteps = (): ReactNode => {
    if (currentStepIndex === 0) return <></>;
    return (
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Previous Steps:</h4>
        <div className="space-y-1 text-sm">
          {currentStepIndex > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Outside Term:</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.outsideTerm} /></span>
            </div>
          )}
          {currentStepIndex > 1 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Inside Terms:</span>
              <span className="font-mono flex space-x-1">
                 {currentProblem.solution.insideTerms.map((term, idx) => (
                    <React.Fragment key={idx}>
                        <InlineMath math={term} />
                         {idx < currentProblem.solution.insideTerms.length - 1 && <span>,</span>}
                    </React.Fragment>
                 ))}
              </span>
            </div>
          )}
          {currentStepIndex > 2 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Expanded Terms:</span>
              <span className="font-mono flex space-x-1">
                 {currentProblem.solution.expandedTerms.map((term, idx) => (
                    <React.Fragment key={idx}>
                        <InlineMath math={term} />
                         {idx < currentProblem.solution.expandedTerms.length - 1 && <span>,</span>}
                    </React.Fragment>
                 ))}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  // --- Render Logic ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6 pt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Expanding Single Brackets</h1>
          <p className="text-gray-600 text-sm">Use the distributive property: $a(b + c) = ab + ac$</p>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>Problems Completed</span>
            <span>{completedProblems.size}/{practiceProblems.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedProblems.size / practiceProblems.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Problem Expression */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Expand this expression:</h2>
          <div className="text-3xl font-bold text-emerald-600 mb-6">
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
              <BookOpen className="w-5 h-5 text-emerald-600 mr-2" />
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
              // Normalize option for state comparison
              let normalizedOption: string | string[];
              if (Array.isArray(option)) {
                  // For array options, sort them for consistent comparison
                  normalizedOption = [...option].sort();
              } else {
                  normalizedOption = String(option);
              }

              // Normalize user selection for comparison
              let normalizedUserSelection: string | string[] | null;
              if (Array.isArray(userMcqSelection)) {
                  normalizedUserSelection = [...userMcqSelection].sort();
              } else {
                  normalizedUserSelection = userMcqSelection;
              }


              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)} // Pass the original option
                  className={`w-full text-left px-4 py-3 rounded-lg border transition-colors flex items-center justify-center ${
                    JSON.stringify(normalizedUserSelection) === JSON.stringify(normalizedOption) // Compare normalized selections
                      ? showFeedback?.show && showFeedback.correct
                        ? 'border-green-500 bg-green-50'
                        : showFeedback?.show && !showFeedback.correct
                        ? 'border-red-500 bg-red-50'
                        : 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-300 hover:bg-gray-50'
                  } ${showAnswer && JSON.stringify(normalizedOption) === JSON.stringify(Array.isArray(currentProblem.solution[currentStep.id]) ? [...currentProblem.solution[currentStep.id]].sort() : String(currentProblem.solution[currentStep.id])) ? 'border-blue-500 bg-blue-50 font-bold' : ''}`}
                  disabled={showAnswer}
                >
                  {/* Use helper to render option content correctly */}
                  {renderOptionContent(option, currentStep.id)}
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
              className="flex-1 bg-emerald-600 text-white py-3 px-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-700 transition-colors flex items-center justify-center"
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
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 mb-6">
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
                    <span className="font-medium w-32">Outside Term:</span>
                    <InlineMath math={currentProblem.solution.outsideTerm} />
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Inside Terms:</span>
                     <div className="flex space-x-1">
                        {currentProblem.solution.insideTerms.map((term, idx) => (
                            <React.Fragment key={idx}>
                                <InlineMath math={term} />
                                 {idx < currentProblem.solution.insideTerms.length - 1 && <span>,</span>}
                            </React.Fragment>
                         ))}
                     </div>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Expanded Terms:</span>
                    <div className="flex space-x-1">
                        {currentProblem.solution.expandedTerms.map((term, idx) => (
                            <React.Fragment key={idx}>
                                <InlineMath math={term} />
                                 {idx < currentProblem.solution.expandedTerms.length - 1 && <span>,</span>}
                            </React.Fragment>
                         ))}
                     </div>
                  </div>
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
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 text-center mb-6">
            <Check className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Great Job!</h3>
            <p className="text-green-100">You've mastered Expanding Single Brackets!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandingSingleBracketsTool;
