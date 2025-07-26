import React, { useState, ReactNode } from 'react';
import { ChevronRight, Check, RotateCcw, Lightbulb, BookOpen, ArrowRight, Eye, X, AlertCircle } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// Define the structure for a practice problem
interface PracticeProblem {
  expression: string; // The expression to factor
  solution: {
    gcd: string; // GCD of coefficients (as string for flexibility)
    variables: string; // Common variable part (e.g., "x", "a^2b")
    commonFactor: string; // Combined common factor (e.g., "3x", "5a^2b")
    remainingExpression: string; // Expression after factoring out CF (e.g., "2x + 3")
    finalFactored: string; // Final answer (e.g., "3x(2x + 3)")
  };
  explanation: {
    gcd: string; // Explanation for finding GCD (can contain KaTeX)
    variables: string; // Explanation for variable part (can contain KaTeX)
    commonFactor: string; // Explanation for combined CF (can contain KaTeX)
    remainingExpression: string; // Explanation for remaining expr (can contain KaTeX)
    finalFactored: string; // Explanation for final form (can contain KaTeX)
  };
  hint: string; // Hint for the problem (can contain KaTeX)
}

// Define the structure for MCQ options at each step
interface McqOptions {
  gcd: string[]; // GCD options (numbers/expressions)
  variables: string[]; // Variable part options (e.g., "x", "a^2b")
  commonFactor: string[]; // Combined CF options (e.g., "3x", "5a^2b")
  remainingExpression: string[]; // Remaining expression options (e.g., "2x + 3")
  finalFactored: string[]; // Final factored form options (e.g., "3x(2x + 3)")
}

// Define the structure for a step in the process
interface Step {
  id: keyof McqOptions; // Links to the MCQ options and solution fields
  title: string; // Can contain KaTeX
  description: string; // Can contain KaTeX
  isMcq: true; // All steps are MCQ in this version
}

const CommonFactorMethodTool: React.FC = () => {
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
      expression: "6x^2 + 9x",
      solution: {
        gcd: "3",
        variables: "x",
        commonFactor: "3x",
        remainingExpression: "2x + 3",
        finalFactored: "3x(2x + 3)"
      },
      explanation: {
        gcd: "The coefficients are 6 and 9. The GCD of 6 and 9 is 3.",
        variables: "The variable $x$ appears in both terms. The lowest power is $x^1$, so the common variable part is $x$.",
        commonFactor: "Combine the GCD of coefficients and the common variable part: $3 \\times x = 3x$.",
        remainingExpression: "Divide each term by $3x$: $6x^2 \\div 3x = 2x$, $9x \\div 3x = 3$. The remaining expression is $2x + 3$.",
        finalFactored: "Write the common factor $3x$ times the remaining expression $(2x + 3)$: $3x(2x + 3)$."
      },
      hint: "What is the greatest common divisor of 6 and 9? What is the lowest power of $x$ in both terms?"
    },
    {
      expression: "12x^3y - 8x^2y^2",
      solution: {
        gcd: "4",
        variables: "x^2y",
        commonFactor: "4x^2y",
        remainingExpression: "3x - 2y",
        finalFactored: "4x^2y(3x - 2y)"
      },
      explanation: {
        gcd: "The coefficients are 12 and 8. The GCD of 12 and 8 is 4.",
        variables: "Variables present in both terms are $x$ and $y$. Lowest power of $x$ is $x^2$, lowest power of $y$ is $y^1$. Common variable part is $x^2y$.",
        commonFactor: "Combine the GCD of coefficients and the common variable part: $4 \\times x^2y = 4x^2y$.",
        remainingExpression: "Divide each term by $4x^2y$: $12x^3y \\div 4x^2y = 3x$, $-8x^2y^2 \\div 4x^2y = -2y$. The remaining expression is $3x - 2y$.",
        finalFactored: "Write the common factor $4x^2y$ times the remaining expression $(3x - 2y)$: $4x^2y(3x - 2y)$."
      },
      hint: "Find the GCD of 12 and 8. For variables, take the lowest power of $x$ and $y$ found in both terms."
    },
    {
      expression: "10a^3b^2 + 15a^2b", // From the example
      solution: {
        gcd: "5",
        variables: "a^2b",
        commonFactor: "5a^2b",
        remainingExpression: "2ab + 3",
        finalFactored: "5a^2b(2ab + 3)"
      },
      explanation: {
        gcd: "The coefficients are 10 and 15. The GCD of 10 and 15 is 5.",
        variables: "Variables present in both terms are $a$ and $b$. Lowest power of $a$ is $a^2$, lowest power of $b$ is $b^1$. Common variable part is $a^2b$.",
        commonFactor: "Combine the GCD of coefficients and the common variable part: $5 \\times a^2b = 5a^2b$.",
        remainingExpression: "Divide each term by $5a^2b$: $10a^3b^2 \\div 5a^2b = 2ab$, $15a^2b \\div 5a^2b = 3$. The remaining expression is $2ab + 3$.",
        finalFactored: "Write the common factor $5a^2b$ times the remaining expression $(2ab + 3)$: $5a^2b(2ab + 3)$."
      },
      hint: "What is the GCD of 10 and 15? Identify the lowest power of $a$ and $b$ in both terms."
    },
    {
      expression: "7m^2n - 14mn^2 + 21mn", // New problem
      solution: {
        gcd: "7",
        variables: "mn",
        commonFactor: "7mn",
        remainingExpression: "m - 2n + 3",
        finalFactored: "7mn(m - 2n + 3)"
      },
      explanation: {
        gcd: "The coefficients are 7, 14, and 21. The GCD of 7, 14, and 21 is 7.",
        variables: "Variables present in all terms are $m$ and $n$. Lowest power of $m$ is $m^1$, lowest power of $n$ is $n^1$. Common variable part is $mn$.",
        commonFactor: "Combine the GCD of coefficients and the common variable part: $7 \\times mn = 7mn$.",
        remainingExpression: "Divide each term by $7mn$: $7m^2n \\div 7mn = m$, $-14mn^2 \\div 7mn = -2n$, $21mn \\div 7mn = 3$. The remaining expression is $m - 2n + 3$.",
        finalFactored: "Write the common factor $7mn$ times the remaining expression $(m - 2n + 3)$: $7mn(m - 2n + 3)$."
      },
      hint: "Find the GCD of 7, 14, and 21. What is the lowest power of $m$ and $n$ that appears in all three terms?"
    }
  ];

  // --- MCQ Options Data ---
  const mcqOptionsPerProblem: McqOptions[] = [
    // Problem 1: 6x^2 + 9x
    {
      gcd: ["3", "6", "9", "1"],
      variables: ["x", "x^2", "1", "6x"],
      commonFactor: ["3x", "3x^2", "6x", "9"],
      remainingExpression: ["2x + 3", "3x + 2", "6x + 9", "2x - 3"],
      finalFactored: ["3x(2x + 3)", "3(2x^2 + 3x)", "x(6x + 9)", "3x(2x - 3)"]
    },
    // Problem 2: 12x^3y - 8x^2y^2
    {
      gcd: ["4", "2", "8", "24"],
      variables: ["x^2y", "xy", "x^3y^2", "xy^2"],
      commonFactor: ["4x^2y", "4xy", "8x^2y", "2x^2y"],
      remainingExpression: ["3x - 2y", "3x + 2y", "12x - 8y", "3x^2 - 2y^2"],
      finalFactored: ["4x^2y(3x - 2y)", "4xy(3x^2 - 2y)", "2x^2y(6x - 4y)", "4x^2y(3x + 2y)"]
    },
    // Problem 3: 10a^3b^2 + 15a^2b
    {
      gcd: ["5", "10", "15", "1"],
      variables: ["a^2b", "ab", "a^3b^2", "b"],
      commonFactor: ["5a^2b", "5ab", "10a^2b", "15ab"],
      remainingExpression: ["2ab + 3", "2a + 3b", "10ab + 15", "2ab - 3"],
      finalFactored: ["5a^2b(2ab + 3)", "5ab(2a^2b + 3a)", "a^2b(10ab + 15)", "5a^2b(2ab - 3)"]
    },
    // Problem 4: 7m^2n - 14mn^2 + 21mn
    {
        gcd: ["7", "14", "21", "1"],
        variables: ["mn", "m^2n^2", "m", "n"],
        commonFactor: ["7mn", "7m^2n", "14mn", "21mn"],
        remainingExpression: ["m - 2n + 3", "m + 2n + 3", "7m - 14n + 21", "m - 2n - 3"],
        finalFactored: ["7mn(m - 2n + 3)", "7mn(m + 2n + 3)", "mn(7m - 14n + 21)", "7mn(m - 2n - 3)"]
      }
  ];

  // --- Steps Definition ---
  const steps: Step[] = [
    {
      id: "gcd",
      title: "Step 1: Find the GCD of Coefficients",
      description: "What is the greatest common divisor of the numerical coefficients?",
      isMcq: true
    },
    {
      id: "variables",
      title: "Step 2: Identify Common Variables",
      description: "What is the product of the lowest powers of variables common to all terms?",
      isMcq: true
    },
    {
      id: "commonFactor",
      title: "Step 3: Determine the Common Factor",
      description: "Multiply the GCD and the common variable part:",
      isMcq: true
    },
    {
      id: "remainingExpression",
      title: "Step 4: Find the Remaining Expression",
      description: "Divide the original expression by the common factor. What is left inside the parentheses?",
      isMcq: true
    },
    {
      id: "finalFactored",
      title: "Final Step: Write the Factored Form",
      description: "Combine the common factor and the remaining expression:",
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
    if (stepId === 'gcd' || stepId === 'variables' || stepId === 'commonFactor' || stepId === 'remainingExpression' || stepId === 'finalFactored') {
      // Render mathematical options with KaTeX
      return <InlineMath math={option} />;
    }
    // Fallback (shouldn't be reached for this tool)
    return <span>{option}</span>;
  };

  // Helper to render the correct answer based on step type
  const renderCorrectAnswer = (answer: string, stepId: keyof McqOptions): ReactNode => {
    // Apply same logic as options
    if (stepId === 'gcd' || stepId === 'variables' || stepId === 'commonFactor' || stepId === 'remainingExpression' || stepId === 'finalFactored') {
      // Render mathematical answers with KaTeX
      return <InlineMath math={answer} />;
    }
    // Render plain text answers (fallback)
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
              <span className="text-gray-600">GCD:</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.gcd} /></span>
            </div>
          )}
          {currentStepIndex > 1 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Common Variables:</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.variables} /></span>
            </div>
          )}
          {currentStepIndex > 2 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Common Factor:</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.commonFactor} /></span>
            </div>
          )}
          {currentStepIndex > 3 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Remaining Expression:</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.remainingExpression} /></span>
            </div>
          )}
        </div>
      </div>
    );
  };

  // --- Render Logic ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6 pt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Common Factor Method</h1>
          <p className="text-gray-600 text-sm">Factor expressions by finding the greatest common factor</p>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>Problems Completed</span>
            <span>{completedProblems.size}/{practiceProblems.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-amber-500 to-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedProblems.size / practiceProblems.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Problem Expression */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Factor this expression:</h2>
          <div className="text-3xl font-bold text-orange-600 mb-6">
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
              <h3 className="text-xl font-bold mb-4">Expression Factored!</h3> 
            </div>
          </div>
        )}

        {/* Previous Steps Reference */}
        {getCompletedSteps()}

        {/* Step-by-step Guide */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 text-orange-600 mr-2" />
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
                        : 'border-orange-500 bg-orange-50'
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
              className="flex-1 bg-orange-600 text-white py-3 px-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-700 transition-colors flex items-center justify-center"
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

       

        {/* Completion Message */}
        {completedProblems.size === practiceProblems.length && (
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl p-6 text-center mb-6">
            <Check className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Great Job!</h3>
            <p className="text-amber-100">You've mastered the Common Factor Method!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonFactorMethodTool;