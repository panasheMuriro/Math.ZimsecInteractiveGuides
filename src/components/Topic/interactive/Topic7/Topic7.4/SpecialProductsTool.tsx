import React, { useState, ReactNode } from 'react';
import { ChevronRight, Check, RotateCcw, Lightbulb, BookOpen, ArrowRight, Eye, X, AlertCircle } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// Define types for the different special product patterns
type SpecialProductPattern = "(a + b)^2" | "(a - b)^2" | "(a + b)(a - b)" | "Not a special product";

// Define the structure for a practice problem
interface PracticeProblem {
  expression: string; // The expression to expand (e.g., "(x + 3)^2", "(2x - 5)(2x + 5)")
  solution: {
    pattern: SpecialProductPattern; // The identified pattern
    a: string;       // The 'a' term in the pattern (e.g., "x", "2x")
    b: string;        // The 'b' term in the pattern (e.g., "3", "5")
    expandedForm: string;   // The result after applying the formula (e.g., "x^2 + 6x + 9")
  };
  explanation: {
    pattern: string; // Explanation for identifying the pattern (can contain KaTeX)
    a: string;       // Explanation for identifying 'a' (can contain KaTeX)
    b: string;        // Explanation for identifying 'b' (can contain KaTeX)
    expandedForm: string;   // Explanation for the final expanded form (can contain KaTeX)
  };
  hint: string; // Hint for the problem (can contain KaTeX)
}

// Define the structure for MCQ options at each step
interface McqOptions {
  pattern: SpecialProductPattern[]; // Options for the pattern
  a: string[];       // Options for 'a'
  b: string[];        // Options for 'b'
  expandedForm: string[];   // Options for the final expanded form
}

// Define the structure for a step in the process
interface Step {
  id: keyof McqOptions; // Links to the MCQ options and solution fields
  title: string; // Can contain KaTeX
  description: string; // Can contain KaTeX
  isMcq: true; // All steps are MCQ in this version
}

const SpecialProductsTool: React.FC = () => {
  // --- State Management ---
  const [currentProblemIndex, setCurrentProblemIndex] = useState<number>(0);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [userMcqSelection, setUserMcqSelection] = useState<string | null>(null); // Stores the selected option
  const [showFeedback, setShowFeedback] = useState<{ correct: boolean; show: boolean } | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [completedProblems, setCompletedProblems] = useState<Set<number>>(new Set());

  // --- Practice Problems Data ---
  const practiceProblems: PracticeProblem[] = [
    {
      expression: "(x + 3)^2",
      solution: {
        pattern: "(a + b)^2",
        a: "x",
        b: "3",
        expandedForm: "x^2 + 6x + 9"
      },
      explanation: {
        pattern: "The expression is a binomial squared with a plus sign: $(a + b)^2$.",
        a: "The first term inside the parentheses is $x$, so $a = x$.",
        b: "The second term inside the parentheses is $3$, so $b = 3$.",
        expandedForm: "Apply the formula $(a + b)^2 = a^2 + 2ab + b^2$: $x^2 + 2(x)(3) + 3^2 = x^2 + 6x + 9$."
      },
      hint: "Does this look like $(a + b)^2$, $(a - b)^2$, or $(a + b)(a - b)$? What are the terms $a$ and $b$?"
    },
    {
      expression: "(2x - 5)(2x + 5)",
      solution: {
        pattern: "(a + b)(a - b)",
        a: "2x",
        b: "5",
        expandedForm: "4x^2 - 25"
      },
      explanation: {
        pattern: "The expression is a sum and difference of the same two terms: $(a + b)(a - b)$.",
        a: "The common first term in both parentheses is $2x$, so $a = 2x$.",
        b: "The terms being added and subtracted are $5$, so $b = 5$.",
        expandedForm: "Apply the formula $(a + b)(a - b) = a^2 - b^2$: $(2x)^2 - 5^2 = 4x^2 - 25$."
      },
      hint: "This is a product of a sum and a difference. What are the $a$ and $b$ terms?"
    },
    {
      expression: "(x - 4)^2", // From the example
      solution: {
        pattern: "(a - b)^2",
        a: "x",
        b: "4",
        expandedForm: "x^2 - 8x + 16"
      },
      explanation: {
        pattern: "The expression is a binomial squared with a minus sign: $(a - b)^2$.",
        a: "The first term inside the parentheses is $x$, so $a = x$.",
        b: "The second term inside the parentheses is $4$, so $b = 4$.",
        expandedForm: "Apply the formula $(a - b)^2 = a^2 - 2ab + b^2$: $x^2 - 2(x)(4) + 4^2 = x^2 - 8x + 16$."
      },
      hint: "This is a binomial squared with a minus sign. Identify $a$ and $b$, then apply the correct formula."
    },
    {
      expression: "(3y + 2)^2", // New problem
      solution: {
        pattern: "(a + b)^2",
        a: "3y",
        b: "2",
        expandedForm: "9y^2 + 12y + 4"
      },
      explanation: {
        pattern: "The expression is a binomial squared with a plus sign: $(a + b)^2$.",
        a: "The first term inside the parentheses is $3y$, so $a = 3y$.",
        b: "The second term inside the parentheses is $2$, so $b = 2$.",
        expandedForm: "Apply the formula $(a + b)^2 = a^2 + 2ab + b^2$: $(3y)^2 + 2(3y)(2) + 2^2 = 9y^2 + 12y + 4$."
      },
      hint: "This is a binomial squared with a plus sign. What are $a$ and $b$? Use the $(a+b)^2$ formula."
    }
  ];

  // --- MCQ Options Data ---
  const mcqOptionsPerProblem: McqOptions[] = [
    // Problem 1: (x + 3)^2
    {
      pattern: ["(a + b)^2", "(a - b)^2", "(a + b)(a - b)", "Not a special product"],
      a: ["x", "3", "x + 3", "3x"],
      b: ["3", "x", "x + 3", "9"],
      expandedForm: ["x^2 + 6x + 9", "x^2 - 6x + 9", "x^2 + 9", "x^2 - 9"]
    },
    // Problem 2: (2x - 5)(2x + 5)
    {
      pattern: ["(a + b)(a - b)", "(a + b)^2", "(a - b)^2", "Not a special product"],
      a: ["2x", "5", "x", "-5"],
      b: ["5", "2x", "25", "x"],
      expandedForm: ["4x^2 - 25", "4x^2 + 25", "4x^2 - 20x + 25", "4x^2 + 20x + 25"]
    },
    // Problem 3: (x - 4)^2
    {
      pattern: ["(a - b)^2", "(a + b)^2", "(a + b)(a - b)", "Not a special product"],
      a: ["x", "4", "x - 4", "-4"],
      b: ["4", "x", "16", "-4"],
      expandedForm: ["x^2 - 8x + 16", "x^2 + 8x + 16", "x^2 - 16", "x^2 + 16"]
    },
    // Problem 4: (3y + 2)^2
    {
        pattern: ["(a + b)^2", "(a - b)^2", "(a + b)(a - b)", "Not a special product"],
        a: ["3y", "2", "y", "3"],
        b: ["2", "3y", "4", "y"],
        expandedForm: ["9y^2 + 12y + 4", "9y^2 - 12y + 4", "9y^2 + 4", "9y^2 - 4"]
      }
  ];

  // --- Steps Definition ---
  const steps: Step[] = [
    {
      id: "pattern",
      title: "Step 1: Identify the Special Product Pattern",
      description: "Which special product pattern does this expression match?",
      isMcq: true
    },
    {
      id: "a",
      title: "Step 2: Identify the 'a' Term",
      description: "What is the first term ($a$) in the pattern?",
      isMcq: true
    },
    {
      id: "b",
      title: "Step 3: Identify the 'b' Term",
      description: "What is the second term ($b$) in the pattern?",
      isMcq: true
    },
    {
      id: "expandedForm",
      title: "Final Step: Apply the Formula",
      description: "Expand the expression using the identified pattern:",
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

    // Normalize math expressions for comparison
    const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase();
    return normalize(userMcqSelection) === normalize(String(correctAnswer));
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
    const correctAnswer = String(currentProblem.solution[currentStep.id]);
    setUserMcqSelection(correctAnswer);
  };

  const closeSolution = (): void => {
    setShowAnswer(false);
  };

  // Helper to render option content correctly based on step type
  const renderOptionContent = (option: string, stepId: keyof McqOptions): ReactNode => {
    // For steps that are clearly mathematical expressions
    if (stepId === 'a' || stepId === 'b' || stepId === 'expandedForm') {
      // Render mathematical options with KaTeX
      return <InlineMath math={option} />;
    }
    // For 'pattern' step, render as plain text
    return <span>{option}</span>;
  };

  // Helper to render the correct answer based on step type
  const renderCorrectAnswer = (answer: string, stepId: keyof McqOptions): ReactNode => {
    // Apply same logic as options
    if (stepId === 'a' || stepId === 'b' || stepId === 'expandedForm') {
      // Render mathematical answers with KaTeX
      return <InlineMath math={answer} />;
    }
    // Render plain text answers
    return <span>{answer}</span>;
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
              <span className="text-gray-600">Pattern:</span>
              <span className="font-mono">{currentProblem.solution.pattern}</span>
            </div>
          )}
          {currentStepIndex > 1 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Term $a$:</span> {/* KaTeX */}
              <span className="font-mono"><InlineMath math={currentProblem.solution.a} /></span>
            </div>
          )}
          {currentStepIndex > 2 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Term $b$:</span> {/* KaTeX */}
              <span className="font-mono"><InlineMath math={currentProblem.solution.b} /></span>
            </div>
          )}
        </div>
      </div>
    );
  };

  // --- Render Logic ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6 pt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Special Products</h1>
          <p className="text-gray-600 text-sm">Recognize and expand patterns like $(a+b)^2$, $(a-b)^2$, $(a+b)(a-b)$</p>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>Problems Completed</span>
            <span>{completedProblems.size}/{practiceProblems.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
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
                {renderCorrectAnswer(String(currentProblem.solution[currentStep.id]), currentStep.id)}
              </div>
              <p className="text-sm text-blue-700 mt-2">
                {renderTextWithMath(currentProblem.explanation[currentStep.id])}
              </p>
            </div>
          )}
        </div>

        {/* Solution Review (on problem completion) */}
        {completedProblems.has(currentProblemIndex) && (
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-6 mb-6">
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
                    <span className="font-medium w-32">Pattern:</span>
                    <span>{currentProblem.solution.pattern}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Term $a$:</span> {/* KaTeX */}
                    <InlineMath math={currentProblem.solution.a} />
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Term $b$:</span> {/* KaTeX */}
                    <InlineMath math={currentProblem.solution.b} />
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Expanded:</span>
                    <InlineMath math={currentProblem.solution.expandedForm} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Completion Message */}
        {completedProblems.size === practiceProblems.length && (
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-6 text-center mb-6">
            <Check className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Great Job!</h3>
            <p className="text-blue-100">You've mastered Special Products!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialProductsTool;
