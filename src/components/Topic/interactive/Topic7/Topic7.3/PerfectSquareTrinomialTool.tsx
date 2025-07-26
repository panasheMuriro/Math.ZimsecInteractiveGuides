import React, { useState, ReactNode } from 'react';
import { ChevronRight, Check, RotateCcw, Lightbulb, BookOpen, ArrowRight, Eye, X } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// Define the structure for a practice problem
interface PracticeProblem {
  expression: string; // The trinomial to factor
  solution: {
    isPerfectSquare: boolean; // Is it a perfect square trinomial?
    firstRoot: string;       // Square root of the first term (e.g., "x", "2x")
    lastRoot: string;        // Square root of the last term (e.g., "3", "5")
    sign: '+' | '-';         // Sign in the binomial (a + b) or (a - b)
    finalFactored: string;   // The final factored form (e.g., "(x + 3)^2")
  };
  explanation: {
    isPerfectSquare: string; // Explanation for the recognition step (can contain KaTeX)
    firstRoot: string;       // Explanation for finding the first root (can contain KaTeX)
    lastRoot: string;        // Explanation for finding the last root (can contain KaTeX)
    sign: string;            // Explanation for determining the sign (can contain KaTeX)
    finalFactored: string;   // Explanation for the final form (can contain KaTeX)
  };
  hint: string; // Hint for the problem (can contain KaTeX)
}

// Define the structure for MCQ options at each step
type SignOption = '+' | '-' | 'Not PS'; // Specific type for sign options

interface McqOptions {
  isPerfectSquare: string[]; // Yes/No/plain text options
  firstRoot: string[];       // Math expression options
  lastRoot: string[];        // Math expression options
  sign: SignOption[];        // Sign/plain text options
  finalFactored: string[];   // Math expression options
}

// Define the structure for a step in the process
interface Step {
  id: keyof McqOptions; // Links to the MCQ options and solution fields
  title: string; // Can contain KaTeX
  description: string; // Can contain KaTeX
  isMcq: true; // All steps are MCQ in this version
}

const PerfectSquareTrinomialTool: React.FC = () => {
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
      expression: "x^2 + 6x + 9",
      solution: {
        isPerfectSquare: true,
        firstRoot: "x",
        lastRoot: "3",
        sign: '+',
        finalFactored: "(x + 3)^2"
      },
      explanation: {
        isPerfectSquare: "The first term $x^2$ is $(x)^2$ and the last term $9$ is $(3)^2$. Both are perfect squares.",
        firstRoot: "The square root of the first term $x^2$ is $x$.",
        lastRoot: "The square root of the last term $9$ is $3$.",
        sign: "The middle term is $+6x$, which is $+2 \\times x \\times 3$. The sign is positive.",
        finalFactored: "Combining the roots and the sign: $(x + 3)^2$."
      },
      hint: "Check if the first and last terms are perfect squares. Is the middle term twice the product of their roots?"
    },
    {
      expression: "4x^2 - 12x + 9",
      solution: {
        isPerfectSquare: true,
        firstRoot: "2x",
        lastRoot: "3",
        sign: '-',
        finalFactored: "(2x - 3)^2"
      },
      explanation: {
        isPerfectSquare: "The first term $4x^2$ is $(2x)^2$ and the last term $9$ is $(3)^2$. Both are perfect squares.",
        firstRoot: "The square root of the first term $4x^2$ is $2x$.",
        lastRoot: "The square root of the last term $9$ is $3$.",
        sign: "The middle term is $-12x$, which is $-2 \\times 2x \\times 3$. The sign is negative.",
        finalFactored: "Combining the roots and the sign: $(2x - 3)^2$."
      },
      hint: "Identify the square roots of the first and last terms. What is the sign of the middle term?"
    },
    {
      expression: "x^2 + 10x + 25",
      solution: {
        isPerfectSquare: true,
        firstRoot: "x",
        lastRoot: "5",
        sign: '+',
        finalFactored: "(x + 5)^2"
      },
      explanation: {
        isPerfectSquare: "The first term $x^2$ is $(x)^2$ and the last term $25$ is $(5)^2$. Both are perfect squares.",
        firstRoot: "The square root of the first term $x^2$ is $x$.",
        lastRoot: "The square root of the last term $25$ is $5$.",
        sign: "The middle term is $+10x$, which is $+2 \\times x \\times 5$. The sign is positive.",
        finalFactored: "Combining the roots and the sign: $(x + 5)^2$."
      },
      hint: "What numbers squared give the first and last terms? How does the middle term relate to them?"
    },
    {
      expression: "x^2 + 5x + 9", // Not a perfect square
      solution: {
        isPerfectSquare: false,
        firstRoot: "x", // We can still identify these if we go that far
        lastRoot: "3",
        sign: '+', // Placeholder, not used if isPerfectSquare is false
        finalFactored: "Not a perfect square trinomial" // Special case option
      },
      explanation: {
        isPerfectSquare: "The first term $x^2$ is $(x)^2$ and the last term $9$ is $(3)^2$. However, the middle term $5x$ is not equal to $2 \\times x \\times 3 = 6x$. Therefore, it's not a perfect square trinomial.",
        firstRoot: "This step is only relevant if the expression is a perfect square.",
        lastRoot: "This step is only relevant if the expression is a perfect square.",
        sign: "This step is only relevant if the expression is a perfect square.",
        finalFactored: "Because it's not a perfect square trinomial, it cannot be factored into the form $(a \\pm b)^2$."
      },
      hint: "Are the first and last terms perfect squares? Does the middle term fit the $2ab$ pattern?"
    }
  ];

  // --- MCQ Options Data ---
  const mcqOptionsPerProblem: McqOptions[] = [
    // Problem 1: x^2 + 6x + 9
    {
      isPerfectSquare: ["Yes", "No"],
      firstRoot: ["x", "x^2", "3", "6x"],
      lastRoot: ["3", "9", "x", "6x"],
      sign: ["+", "-", "Not PS"],
      finalFactored: ["(x + 3)^2", "(x - 3)^2", "(x + 3)(x - 3)", "Not a perfect square trinomial"]
    },
    // Problem 2: 4x^2 - 12x + 9
    {
      isPerfectSquare: ["Yes", "No"],
      firstRoot: ["2x", "4x^2", "3", "2x^2"],
      lastRoot: ["3", "9", "2x", "12x"],
      sign: ["-", "+", "Not PS"],
      finalFactored: ["(2x - 3)^2", "(2x + 3)^2", "(2x - 3)(2x + 3)", "Not a perfect square trinomial"]
    },
    // Problem 3: x^2 + 10x + 25
    {
      isPerfectSquare: ["Yes", "No"],
      firstRoot: ["x", "x^2", "5", "10x"],
      lastRoot: ["5", "25", "x", "10x"],
      sign: ["+", "-", "Not PS"],
      finalFactored: ["(x + 5)^2", "(x - 5)^2", "(x + 5)(x - 5)", "Not a perfect square trinomial"]
    },
     // Problem 4: x^2 + 5x + 9 (Not PS)
     {
        isPerfectSquare: ["Yes", "No"],
        firstRoot: ["x", "x^2", "3", "5x"],
        lastRoot: ["3", "9", "x", "5x"],
        sign: ["+", "-", "Not PS"],
        finalFactored: ["(x + 3)^2", "(x - 3)^2", "(x + 3)(x - 3)", "Not a perfect square trinomial"]
      }
  ];

  // --- Steps Definition ---
  // Ensure descriptions with math use raw strings correctly for KaTeX
  const steps: Step[] = [
    {
      id: "isPerfectSquare",
      title: "Step 1: Is it a Perfect Square Trinomial?",
      description: "Determine if the expression fits the pattern $a^2 \\pm 2ab + b^2$:", // KaTeX here
      isMcq: true
    },
    {
      id: "firstRoot",
      title: "Step 2: Identify the First Root ($a$)", // KaTeX in title
      description: "Find the square root of the first term ($a^2$):", // KaTeX here
      isMcq: true
    },
    {
      id: "lastRoot",
      title: "Step 3: Identify the Last Root ($b$)", // KaTeX in title
      description: "Find the square root of the last term ($b^2$):", // KaTeX here
      isMcq: true
    },
    {
      id: "sign",
      title: "Step 4: Determine the Sign",
      description: "Based on the middle term ($\\pm 2ab$), what is the sign?", // KaTeX here
      isMcq: true
    },
    {
      id: "finalFactored",
      title: "Final Step: Write the Factored Form",
      description: "Combine the roots and sign into the perfect square form:", // No math in this specific description
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

  // Handle boolean step ("Yes" vs true)
  if (stepId === "isPerfectSquare") {
    const normalized = userMcqSelection.trim().toLowerCase();
    if (normalized === "yes") return correctAnswer === true;
    if (normalized === "no") return correctAnswer === false;
    return false;
  }

  // Handle sign step
  if (stepId === "sign") {
    return userMcqSelection === correctAnswer;
  }

  // Normalize math expressions
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
    if (stepId === 'firstRoot' || stepId === 'lastRoot' || stepId === 'finalFactored') {
      // Handle special non-math option
      if (option === "Not a perfect square trinomial") {
          return <span>{option}</span>;
      }
      // Render mathematical options with KaTeX
      return <InlineMath math={option} />;
    }
    // For 'sign' and 'isPerfectSquare' steps, render as plain text
    return <span>{option}</span>;
  };

  // Helper to render the correct answer based on step type
  const renderCorrectAnswer = (answer: string, stepId: keyof McqOptions): ReactNode=> {
    // Apply same logic as options
    if (stepId === 'firstRoot' || stepId === 'lastRoot' || stepId === 'finalFactored') {
         if (answer === "Not a perfect square trinomial") {
             return <span>{answer}</span>;
         }
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
              <span className="text-gray-600">Is Perfect Square?:</span>
              <span className="font-mono">{currentProblem.solution.isPerfectSquare ? 'Yes' : 'No'}</span>
            </div>
          )}
          {currentStepIndex > 1 && currentProblem.solution.isPerfectSquare && (
            <div className="flex justify-between">
              <span className="text-gray-600">Root $a$:</span> {/* KaTeX */}
              <span className="font-mono"><InlineMath math={currentProblem.solution.firstRoot} /></span>
            </div>
          )}
          {currentStepIndex > 2 && currentProblem.solution.isPerfectSquare && (
            <div className="flex justify-between">
              <span className="text-gray-600">Root $b$:</span> {/* KaTeX */}
              <span className="font-mono"><InlineMath math={currentProblem.solution.lastRoot} /></span>
            </div>
          )}
          {currentStepIndex > 3 && currentProblem.solution.isPerfectSquare && (
            <div className="flex justify-between">
              <span className="text-gray-600">Sign:</span>
              <span className="font-mono">{currentProblem.solution.sign}</span>
            </div>
          )}
        </div>
      </div>
    );
  };


  // --- Render Logic ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-sky-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6 pt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Perfect Square Trinomials</h1>
          <p className="text-gray-600 text-sm">Recognize and factor expressions like $a^2 + 2ab + b^2$</p> {/* KaTeX */}
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>Problems Completed</span>
            <span>{completedProblems.size}/{practiceProblems.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-cyan-500 to-sky-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedProblems.size / practiceProblems.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Problem Expression */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Analyze this expression:</h2>
          <div className="text-3xl font-bold text-sky-600 mb-6">
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



        {/* Solution Review (on problem completion) */}
        {completedProblems.has(currentProblemIndex) && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 mb-6">
            <div className="text-center">
              <Check className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-4">Problem Analyzed!</h3>
            </div>
          </div>
        )}
       

         {/* Previous Steps Reference */}
         {getCompletedSteps()}

        {/* Step-by-step Guide */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 text-sky-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">{renderTextWithMath(currentStep.title)}</h2> {/* KaTeX in title */}
            </div>
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center px-2 py-1 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors"
            >
              <Lightbulb className="w-4 h-4" />
            </button>
          </div>
          <p className="text-gray-700 mb-4">{renderTextWithMath(currentStep.description)}</p> {/* KaTeX in description */}
          {showHint && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-yellow-800">
                <span className="font-medium">Hint:</span> {renderTextWithMath(currentProblem.hint)} {/* KaTeX in hint */}
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
                      : 'border-sky-500 bg-sky-50'
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
                  <span className="text-red-600 mr-2">✗</span>
                )}
                <span className={`font-medium ${
                  showFeedback.correct ? 'text-green-800' : 'text-red-800'
                }`}>
                  {showFeedback.correct ? 'Correct!' : 'Not quite right'}
                </span>
              </div>
              {!showFeedback.correct && !showAnswer && (
                <p className="text-sm text-gray-700">
                  {renderTextWithMath(currentProblem.explanation[currentStep.id])} {/* KaTeX in explanation */}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-4">
            <button
              onClick={handleSubmit}
              disabled={!userMcqSelection || showAnswer}
              className="flex-1 bg-sky-600 text-white py-3 px-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-sky-700 transition-colors flex items-center justify-center"
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
                {renderTextWithMath(currentProblem.explanation[currentStep.id])} {/* KaTeX in explanation */}
              </p>
            </div>
          )}
        </div>


        {/* Completion Message */}
        {completedProblems.size === practiceProblems.length && (
          <div className="bg-gradient-to-r from-cyan-500 to-sky-600 text-white rounded-xl p-6 text-center mb-6">
            <Check className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Excellent!</h3>
            <p className="text-cyan-100">You've mastered Perfect Square Trinomials!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfectSquareTrinomialTool;
