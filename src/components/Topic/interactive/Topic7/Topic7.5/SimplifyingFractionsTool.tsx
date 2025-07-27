import React, { useState, ReactNode } from 'react';
import { ChevronRight, Check, RotateCcw, Lightbulb, BookOpen, ArrowRight, Eye, X, AlertCircle } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// Define the structure for a practice problem
interface PracticeProblem {
  expression: string; // The fraction to simplify (e.g., "\\frac{6x^2}{9x}")
  solution: {
    factoredNumerator: string; // Numerator after factoring (e.g., "2 \\times 3 \\times x \\times x")
    factoredDenominator: string; // Denominator after factoring (e.g., "3 \\times 3 \\times x")
    cancelledFactors: string[]; // Array of cancelled factors (e.g., ["3", "x"])
    simplifiedNumerator: string; // Numerator after cancelling (e.g., "2x")
    simplifiedDenominator: string; // Denominator after cancelling (e.g., "3")
    finalSimplified: string; // Final simplified form (e.g., "\\frac{2x}{3}" or "x - 2")
    restrictions: string[]; // Values that make the original denominator zero (e.g., ["x \\neq -2"])
  };
  explanation: {
    factoredNumerator: string; // Explanation for factoring numerator (can contain KaTeX)
    factoredDenominator: string; // Explanation for factoring denominator (can contain KaTeX)
    cancelledFactors: string; // Explanation for cancelling factors (can contain KaTeX)
    simplifiedNumerator: string; // Explanation for simplified numerator (can contain KaTeX)
    simplifiedDenominator: string; // Explanation for simplified denominator (can contain KaTeX)
    finalSimplified: string; // Explanation for the final form (can contain KaTeX)
    restrictions: string; // Explanation for restrictions (can contain KaTeX)
  };
  hint: string; // Hint for the problem (can contain KaTeX)
}

// Define the structure for MCQ options at each step
interface McqOptions {
  factoredNumerator: string[]; // Options for factored numerator
  factoredDenominator: string[]; // Options for factored denominator
  cancelledFactors: string[][]; // Options for cancelled factors (array of arrays)
  simplifiedNumerator: string[]; // Options for simplified numerator
  simplifiedDenominator: string[]; // Options for simplified denominator
  finalSimplified: string[]; // Options for final simplified form
  restrictions: string[][]; // Options for restrictions (array of arrays)
}

// Define the structure for a step in the process
interface Step {
  id: keyof McqOptions; // Links to the MCQ options and solution fields
  title: string; // Can contain KaTeX
  description: string; // Can contain KaTeX
  isMcq: true; // All steps are MCQ in this version
}

const SimplifyingFractionsTool: React.FC = () => {
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
      expression: "\\frac{6x^2}{9x}",
      solution: {
        factoredNumerator: "2 \\times 3 \\times x \\times x",
        factoredDenominator: "3 \\times 3 \\times x",
        cancelledFactors: ["3", "x"],
        simplifiedNumerator: "2x",
        simplifiedDenominator: "3",
        finalSimplified: "\\frac{2x}{3}",
        restrictions: [] // No restrictions for this problem
      },
      explanation: {
        factoredNumerator: "Factor the numerator $6x^2$: $6 = 2 \\times 3$, $x^2 = x \\times x$. So, $6x^2 = 2 \\times 3 \\times x \\times x$.",
        factoredDenominator: "Factor the denominator $9x$: $9 = 3 \\times 3$. So, $9x = 3 \\times 3 \\times x$.",
        cancelledFactors: "Identify common factors in the numerator and denominator: $3$ and $x$. These can be cancelled out.",
        simplifiedNumerator: "After cancelling $3$ and $x$, the numerator becomes $2 \\times x = 2x$.",
        simplifiedDenominator: "After cancelling $3$ and $x$, the denominator becomes $3$.",
        finalSimplified: "The fraction simplifies to $\\frac{2x}{3}$.",
        restrictions: "There are no values of $x$ that make the original denominator zero, so there are no restrictions."
      },
      hint: "Factor the numbers and variables in the numerator and denominator. What factors are common to both?"
    },
    {
      expression: "\\frac{x^2 - 4}{x + 2}",
      solution: {
        factoredNumerator: "(x + 2)(x - 2)",
        factoredDenominator: "x + 2",
        cancelledFactors: ["x + 2"],
        simplifiedNumerator: "x - 2",
        simplifiedDenominator: "1",
        finalSimplified: "x - 2",
        restrictions: ["x \\neq -2"] // x = -2 makes the original denominator zero
      },
      explanation: {
        factoredNumerator: "Factor the numerator $x^2 - 4$. This is a difference of squares: $x^2 - 4 = (x + 2)(x - 2)$.",
        factoredDenominator: "The denominator $x + 2$ is already in its simplest factored form.",
        cancelledFactors: "Identify common factors in the numerator and denominator: $(x + 2)$. This can be cancelled out.",
        simplifiedNumerator: "After cancelling $(x + 2)$, the numerator becomes $(x - 2)$.",
        simplifiedDenominator: "After cancelling $(x + 2)$, the denominator becomes $1$.",
        finalSimplified: "The fraction simplifies to $\\frac{x - 2}{1} = x - 2$.",
        restrictions: "The original denominator $x + 2$ cannot be zero. Solving $x + 2 = 0$ gives $x = -2$. Therefore, $x \\neq -2$."
      },
      hint: "Can the numerator be factored further? Is there a common factor between the numerator and denominator?"
    },
    {
      expression: "\\frac{8a^3}{12a}", // From the example
      solution: {
        factoredNumerator: "2^3 \\times a \\times a \\times a",
        factoredDenominator: "2^2 \\times 3 \\times a",
        cancelledFactors: ["2^2", "a"],
        simplifiedNumerator: "2a^2",
        simplifiedDenominator: "3",
        finalSimplified: "\\frac{2a^2}{3}",
        restrictions: [] // No restrictions for this problem
      },
      explanation: {
        factoredNumerator: "Factor the numerator $8a^3$: $8 = 2^3$, $a^3 = a \\times a \\times a$. So, $8a^3 = 2^3 \\times a \\times a \\times a$.",
        factoredDenominator: "Factor the denominator $12a$: $12 = 2^2 \\times 3$. So, $12a = 2^2 \\times 3 \\times a$.",
        cancelledFactors: "Identify common factors in the numerator and denominator: $2^2$ and $a$. These can be cancelled out.",
        simplifiedNumerator: "After cancelling $2^2$ and $a$, the numerator becomes $2 \\times a \\times a = 2a^2$.",
        simplifiedDenominator: "After cancelling $2^2$ and $a$, the denominator becomes $3$.",
        finalSimplified: "The fraction simplifies to $\\frac{2a^2}{3}$.",
        restrictions: "There are no values of $a$ that make the original denominator zero, so there are no restrictions."
      },
      hint: "Factor the coefficients (8 and 12) into primes. Factor the variables. Cancel the common parts."
    },
    {
      expression: "\\frac{x^2 + 5x + 6}{x + 3}", // New problem
      solution: {
        factoredNumerator: "(x + 2)(x + 3)",
        factoredDenominator: "x + 3",
        cancelledFactors: ["x + 3"],
        simplifiedNumerator: "x + 2",
        simplifiedDenominator: "1",
        finalSimplified: "x + 2",
        restrictions: ["x \\neq -3"] // x = -3 makes the original denominator zero
      },
      explanation: {
        factoredNumerator: "Factor the numerator $x^2 + 5x + 6$. Find two numbers that multiply to 6 and add to 5. Those are 2 and 3. So, $x^2 + 5x + 6 = (x + 2)(x + 3)$.",
        factoredDenominator: "The denominator $x + 3$ is already in its simplest factored form.",
        cancelledFactors: "Identify common factors in the numerator and denominator: $(x + 3)$. This can be cancelled out.",
        simplifiedNumerator: "After cancelling $(x + 3)$, the numerator becomes $(x + 2)$.",
        simplifiedDenominator: "After cancelling $(x + 3)$, the denominator becomes $1$.",
        finalSimplified: "The fraction simplifies to $\\frac{x + 2}{1} = x + 2$.",
        restrictions: "The original denominator $x + 3$ cannot be zero. Solving $x + 3 = 0$ gives $x = -3$. Therefore, $x \\neq -3$."
      },
      hint: "Factor the quadratic numerator. Is there a common binomial factor with the denominator?"
    }
  ];

  // --- MCQ Options Data ---
  const mcqOptionsPerProblem: McqOptions[] = [
    // Problem 1: \frac{6x^2}{9x}
    {
      factoredNumerator: ["2 \\times 3 \\times x \\times x", "6 \\times x^2", "2 \\times 3 \\times x^2", "3 \\times 2x^2"],
      factoredDenominator: ["3 \\times 3 \\times x", "9 \\times x", "3^2 \\times x", "9x"],
      cancelledFactors: [["3", "x"], ["x"], ["3"], ["6", "x"]],
      simplifiedNumerator: ["2x", "2x^2", "6x", "2"],
      simplifiedDenominator: ["3", "9", "1", "3x"],
      finalSimplified: ["\\frac{2x}{3}", "\\frac{2x^2}{3}", "\\frac{6x}{9}", "2x"],
      restrictions: [[], ["x \\neq 0"], ["x > 0"], ["x \\neq 3"]]
    },
    // Problem 2: \frac{x^2 - 4}{x + 2}
    {
      factoredNumerator: ["(x + 2)(x - 2)", "x^2 - 4", "(x - 2)^2", "(x + 2)^2"],
      factoredDenominator: ["x + 2", "1", "x - 2", "2"],
      cancelledFactors: [["x + 2"], ["x - 2"], ["2"], []],
      simplifiedNumerator: ["x - 2", "x + 2", "1", "x^2 - 4"],
      simplifiedDenominator: ["1", "x + 2", "x - 2", "-2"],
      finalSimplified: ["x - 2", "\\frac{x - 2}{1}", "x + 2", "\\frac{x^2 - 4}{x + 2}"],
      restrictions: [["x \\neq -2"], [], ["x \\neq 2"], ["x > 0"]]
    },
    // Problem 3: \frac{8a^3}{12a}
    {
      factoredNumerator: ["2^3 \\times a \\times a \\times a", "8 \\times a^3", "2^3 \\times a^3", "4 \\times 2 \\times a^3"],
      factoredDenominator: ["2^2 \\times 3 \\times a", "12 \\times a", "2^2 \\times 3a", "4 \\times 3 \\times a"],
      cancelledFactors: [["2^2", "a"], ["a"], ["2^2"], ["4", "a"]],
      simplifiedNumerator: ["2a^2", "2a^3", "8a^2", "4a^2"],
      simplifiedDenominator: ["3", "12", "6", "1"],
      finalSimplified: ["\\frac{2a^2}{3}", "\\frac{2a^3}{12}", "\\frac{4a^2}{6}", "2a^2"],
      restrictions: [[], ["a \\neq 0"], ["a > 0"], ["a \\neq 3"]]
    },
    // Problem 4: \frac{x^2 + 5x + 6}{x + 3}
    {
        factoredNumerator: ["(x + 2)(x + 3)", "x^2 + 5x + 6", "(x + 1)(x + 6)", "(x + 3)^2"],
        factoredDenominator: ["x + 3", "1", "x + 2", "3"],
        cancelledFactors: [["x + 3"], ["x + 2"], ["3"], []],
        simplifiedNumerator: ["x + 2", "x + 3", "1", "x^2 + 5x + 6"],
        simplifiedDenominator: ["1", "x + 3", "x + 2", "3"],
        finalSimplified: ["x + 2", "\\frac{x + 2}{1}", "x + 3", "\\frac{x^2 + 5x + 6}{x + 3}"],
        restrictions: [["x \\neq -3"], [], ["x \\neq -2"], ["x > 0"]]
      }
  ];

  // --- Steps Definition ---
  const steps: Step[] = [
    {
      id: "factoredNumerator",
      title: "Step 1: Factor the Numerator",
      description: "Factor the numerator completely:",
      isMcq: true
    },
    {
      id: "factoredDenominator",
      title: "Step 2: Factor the Denominator",
      description: "Factor the denominator completely:",
      isMcq: true
    },
    {
      id: "cancelledFactors",
      title: "Step 3: Identify Cancelled Factors",
      description: "List the common factors that can be cancelled from the numerator and denominator:",
      isMcq: true
    },
    {
      id: "simplifiedNumerator",
      title: "Step 4: Simplify the Numerator",
      description: "After cancelling, what is the new numerator?",
      isMcq: true
    },
    {
      id: "simplifiedDenominator",
      title: "Step 5: Simplify the Denominator",
      description: "After cancelling, what is the new denominator?",
      isMcq: true
    },
    {
      id: "finalSimplified",
      title: "Step 6: Write the Simplified Fraction",
      description: "Combine the simplified numerator and denominator:",
      isMcq: true
    },
    {
      id: "restrictions",
      title: "Final Check: State Restrictions",
      description: "Are there any values that would make the original denominator zero? (List them)",
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

    // Handle array steps (cancelledFactors, restrictions)
    if (stepId === "cancelledFactors" || stepId === "restrictions") {
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
    if (stepId === 'cancelledFactors' || stepId === 'restrictions') {
        const terms = Array.isArray(option) ? option : [option];
        return (
            <div className="flex flex-wrap items-center justify-center space-x-1">
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
    if (stepId === 'factoredNumerator' || stepId === 'factoredDenominator' || stepId === 'simplifiedNumerator' || stepId === 'simplifiedDenominator' || stepId === 'finalSimplified') {
      // Render mathematical options with KaTeX
      return <InlineMath math={String(option)} />;
    }
    // Fallback (shouldn't be reached for this tool)
    return <span>{String(option)}</span>;
  };

  // Helper to render the correct answer based on step type
  const renderCorrectAnswer = (answer: string | string[], stepId: keyof McqOptions): ReactNode => {
    // Apply same logic as options
    if (stepId === 'cancelledFactors' || stepId === 'restrictions') {
        const terms = Array.isArray(answer) ? answer : [answer];
        return (
            <div className="flex flex-wrap items-center justify-center space-x-1">
                 {terms.map((term, idx) => (
                    <React.Fragment key={idx}>
                        <InlineMath math={term} />
                        {idx < terms.length - 1 && <span>,</span>}
                    </React.Fragment>
                 ))}
            </div>
        );
    }
    if (stepId === 'factoredNumerator' || stepId === 'factoredDenominator' || stepId === 'simplifiedNumerator' || stepId === 'simplifiedDenominator' || stepId === 'finalSimplified') {
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
              <span className="text-gray-600">Factored Numerator:</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.factoredNumerator} /></span>
            </div>
          )}
          {currentStepIndex > 1 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Factored Denominator:</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.factoredDenominator} /></span>
            </div>
          )}
          {currentStepIndex > 2 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Cancelled Factors:</span>
              <span className="font-mono flex flex-wrap space-x-1">
                 {currentProblem.solution.cancelledFactors.map((term, idx) => (
                    <React.Fragment key={idx}>
                        <InlineMath math={term} />
                         {idx < currentProblem.solution.cancelledFactors.length - 1 && <span>,</span>}
                    </React.Fragment>
                 ))}
              </span>
            </div>
          )}
          {currentStepIndex > 3 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Simplified Numerator:</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.simplifiedNumerator} /></span>
            </div>
          )}
          {currentStepIndex > 4 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Simplified Denominator:</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.simplifiedDenominator} /></span>
            </div>
          )}
          {currentStepIndex > 5 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Restrictions:</span>
              <span className="font-mono flex flex-wrap space-x-1">
                 {currentProblem.solution.restrictions.length > 0 ? currentProblem.solution.restrictions.map((term, idx) => (
                    <React.Fragment key={idx}>
                        <InlineMath math={term} />
                         {idx < currentProblem.solution.restrictions.length - 1 && <span>,</span>}
                    </React.Fragment>
                 )) : "None"}
              </span>
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
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Simplifying Basic Fractions</h1>
          <p className="text-gray-600 text-sm">Reduce fractions to their simplest form by cancelling common factors</p>
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
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Simplify this fraction:</h2>
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
                        : 'border-orange-500 bg-orange-50'
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
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl p-6 mb-6">
            <div className="text-center">
              <Check className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-4">Fraction Simplified!</h3>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-left">
                <h4 className="font-semibold mb-3">Complete Solution:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="font-medium w-32">Expression:</span>
                    <InlineMath math={currentProblem.expression} />
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Factored Num.:</span>
                    <InlineMath math={currentProblem.solution.factoredNumerator} />
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Factored Den.:</span>
                    <InlineMath math={currentProblem.solution.factoredDenominator} />
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Cancelled:</span>
                     <div className="flex flex-wrap space-x-1">
                        {currentProblem.solution.cancelledFactors.map((term, idx) => (
                            <React.Fragment key={idx}>
                                <InlineMath math={term} />
                                 {idx < currentProblem.solution.cancelledFactors.length - 1 && <span>,</span>}
                            </React.Fragment>
                         ))}
                     </div>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Simplified:</span>
                    <InlineMath math={currentProblem.solution.finalSimplified} />
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Restrictions:</span>
                     <div className="flex flex-wrap space-x-1">
                        {currentProblem.solution.restrictions.length > 0 ? currentProblem.solution.restrictions.map((term, idx) => (
                            <React.Fragment key={idx}>
                                <InlineMath math={term} />
                                 {idx < currentProblem.solution.restrictions.length - 1 && <span>,</span>}
                            </React.Fragment>
                         )) : "None"}
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Completion Message */}
        {completedProblems.size === practiceProblems.length && (
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl p-6 text-center mb-6">
            <Check className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Great Job!</h3>
            <p className="text-amber-100">You've mastered Simplifying Fractions!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimplifyingFractionsTool;
