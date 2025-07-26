import React, { useState } from 'react';
import { ChevronRight, Check, RotateCcw, Lightbulb, BookOpen, ArrowRight, Eye, X } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface ProblemSolution {
  step1: string;
  step2a: string;
  step2b: string;
  step3: string;
}

interface ProblemExplanation {
  step1: string;
  step2a: string;
  step2b: string;
  step3: string;
}

interface FactorPair {
  pair: [string, string];
  sum: string;
  product: string;
  isSelected?: boolean;
}

interface PracticeProblem {
  expression: string;
  solution: ProblemSolution;
  explanation: ProblemExplanation;
  hint: string;
  factorPairs: FactorPair[];
  correctPair: [string, string];
  coefficients: { b: string; c: string };
}

interface Step {
  title: string;
  description: string;
  field: keyof ProblemSolution;
  multiSelect?: boolean;
}

interface Feedback {
  [key: number]: {
    correct: boolean;
    show: boolean;
  };
}

const normalizeMathExpression = (expr: string): string => {
  return expr
    .replace(/\s+/g, '')
    .replace(/\u2212/g, '-')
    .toLowerCase();
};

// Helper function to normalize and sort factors in a factored expression
const normalizeFactoredExpression = (expr: string): string => {
  // Remove spaces and normalize minus signs
  const normalized = normalizeMathExpression(expr);
  // Extract factors, e.g., "(x+3)(x+4)" -> ["x+3", "x+4"]
  const factors = normalized.match(/\(x[+-][0-9]+\)/g);
  if (!factors || factors.length !== 2) return normalized;
  // Sort factors to ensure (x+3)(x+4) and (x+4)(x+3) are equivalent
  return factors.sort().join('');
};

const QuadraticA1Tool: React.FC = () => {
  const [currentProblem, setCurrentProblem] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedPair, setSelectedPair] = useState<[string, string] | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<Feedback>({});
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [completedProblems, setCompletedProblems] = useState<Set<number>>(new Set());

  const practiceProblems: PracticeProblem[] = [
    {
      expression: "x^2 + 7x + 12",
      solution: {
        step1: "b = 7, c = 12",
        step2a: "3",
        step2b: "4",
        step3: "(x + 3)(x + 4)"
      },
      explanation: {
        step1: "In the form x^2 + bx + c, b is the coefficient of x and c is the constant term.",
        step2a: "We need two numbers that multiply to c (12) and add to b (7). The pair (3, 4) satisfies this: 3 × 4 = 12 and 3 + 4 = 7.",
        step2b: "We need two numbers that multiply to c (12) and add to b (7). The pair (3, 4) satisfies this: 3 × 4 = 12 and 3 + 4 = 7.",
        step3: "Using the numbers 3 and 4, we write the factors as (x + 3)(x + 4)."
      },
      hint: "List all factor pairs of 12: (1,12), (2,6), (3,4). Which pair adds to 7?",
      factorPairs: [
        { pair: ["1", "12"], sum: "13", product: "12" },
        { pair: ["2", "6"], sum: "8", product: "12" },
        { pair: ["3", "4"], sum: "7", product: "12" }
      ],
      correctPair: ["3", "4"],
      coefficients: { b: "7", c: "12" }
    },
    {
      expression: "x^2 - 5x + 6",
      solution: {
        step1: "b = -5, c = 6",
        step2a: "-2",
        step2b: "-3",
        step3: "(x - 2)(x - 3)"
      },
      explanation: {
        step1: "In the form x^2 + bx + c, b is the coefficient of x and c is the constant term.",
        step2a: "We need two numbers that multiply to c (6) and add to b (-5). Since b is negative and c is positive, both numbers must be negative. The pair (-2, -3) satisfies this: (-2) × (-3) = 6 and (-2) + (-3) = -5.",
        step2b: "We need two numbers that multiply to c (6) and add to b (-5). Since b is negative and c is positive, both numbers must be negative. The pair (-2, -3) satisfies this: (-2) × (-3) = 6 and (-2) + (-3) = -5.",
        step3: "Using the numbers -2 and -3, we write the factors as (x + (-2))(x + (-3)) = (x - 2)(x - 3)."
      },
      hint: "Since c is positive and b is negative, both numbers must be negative. List factor pairs of 6: (1,6), (2,3), (-1,-6), (-2,-3).",
      factorPairs: [
        { pair: ["1", "6"], sum: "7", product: "6" },
        { pair: ["2", "3"], sum: "5", product: "6" },
        { pair: ["-1", "-6"], sum: "-7", product: "6" },
        { pair: ["-2", "-3"], sum: "-5", product: "6" }
      ],
      correctPair: ["-2", "-3"],
      coefficients: { b: "-5", c: "6" }
    },
    {
      expression: "x^2 + 8x + 15",
      solution: {
        step1: "b = 8, c = 15",
        step2a: "3",
        step2b: "5",
        step3: "(x + 3)(x + 5)"
      },
      explanation: {
        step1: "In the form x^2 + bx + c, b is the coefficient of x and c is the constant term.",
        step2a: "We need two numbers that multiply to c (15) and add to b (8). The pair (3, 5) satisfies this: 3 × 5 = 15 and 3 + 5 = 8.",
        step2b: "We need two numbers that multiply to c (15) and add to b (8). The pair (3, 5) satisfies this: 3 × 5 = 15 and 3 + 5 = 8.",
        step3: "Using the numbers 3 and 5, we write the factors as (x + 3)(x + 5)."
      },
      hint: "List all factor pairs of 15: (1,15), (3,5). Which pair adds to 8?",
      factorPairs: [
        { pair: ["1", "15"], sum: "16", product: "15" },
        { pair: ["3", "5"], sum: "8", product: "15" }
      ],
      correctPair: ["3", "5"],
      coefficients: { b: "8", c: "15" }
    }
  ];

  const steps: Step[] = [
    {
      title: "Step 1: Identify Coefficients",
      description: "What are the values of b and c in x^2 + bx + c?",
      field: "step1"
    },
    {
      title: "Step 2: Find the Factor Pair",
      description: "Select the pair of numbers that multiply to c and add to b:",
      field: "step2a",
      multiSelect: true
    },
    {
      title: "Step 3: Write the Factors",
      description: "Write the expression in factored form (x + m)(x + n):",
      field: "step3"
    }
  ];

  const currentProblemData = practiceProblems[currentProblem];
  const currentStepData = steps[currentStep];

  const checkAnswer = (): boolean => {
    if (currentStep === 0) {
      if (!selectedOption) return false;
      const normalizedSelected = normalizeMathExpression(selectedOption);
      const normalizedCorrect = normalizeMathExpression(currentProblemData.solution.step1);
      return normalizedSelected === normalizedCorrect;
    }

    if (currentStep === 1) {
      if (!selectedPair) return false;
      const normalizedSelected = selectedPair.map(n => normalizeMathExpression(n)).sort();
      const normalizedCorrect = currentProblemData.correctPair.map(n => normalizeMathExpression(n)).sort();
      return JSON.stringify(normalizedSelected) === JSON.stringify(normalizedCorrect);
    }

    if (currentStep === 2) {
      if (!selectedOption) return false;
      // Normalize and sort factors in both selected and correct expressions
      const normalizedSelected = normalizeFactoredExpression(selectedOption);
      const normalizedCorrect = normalizeFactoredExpression(currentProblemData.solution.step3);
      return normalizedSelected === normalizedCorrect;
    }

    return false;
  };

  const handleSubmit = (): void => {
    if (currentStep === 0 && !selectedOption) {
      alert("Please select the coefficients.");
      return;
    }

    if (currentStep === 1 && !selectedPair) {
      alert("Please select a factor pair.");
      return;
    }

    if (currentStep === 2 && !selectedOption) {
      alert("Please select the factored form.");
      return;
    }

    const isCorrect = checkAnswer();

    setShowFeedback(prev => ({
      ...prev,
      [currentStep]: { correct: isCorrect, show: true }
    }));

    if (isCorrect) {
      setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
          if (currentStep === 0 || currentStep === 2) setSelectedOption(null);
          if (currentStep === 1) setSelectedPair(null);
        } else {
          setCompletedProblems(prev => new Set([...prev, currentProblem]));
          if (currentProblem < practiceProblems.length - 1) {
            setTimeout(() => {
              setCurrentProblem(currentProblem + 1);
              setCurrentStep(0);
              setSelectedOption(null);
              setSelectedPair(null);
              setShowFeedback({});
              setShowAnswer(false);
              setShowHint(false);
            }, 1500);
          }
        }
      }, 1000);
    }
  };

  const handleOptionSelect = (option: string): void => {
    if (currentStep === 0 || currentStep === 2) {
      setSelectedOption(option);
    }

    setShowFeedback(prev => ({
      ...prev,
      [currentStep]: { ...prev[currentStep], show: false }
    }));
  };

  const handlePairSelect = (pair: [string, string]): void => {
    setSelectedPair(pair);

    setShowFeedback(prev => ({
      ...prev,
      [currentStep]: { ...prev[currentStep], show: false }
    }));
  };

  const nextProblem = (): void => {
    if (currentProblem < practiceProblems.length - 1) {
      setCurrentProblem(currentProblem + 1);
      setCurrentStep(0);
      setSelectedOption(null);
      setSelectedPair(null);
      setShowFeedback({});
      setShowAnswer(false);
      setShowHint(false);
    }
  };

  const prevProblem = (): void => {
    if (currentProblem > 0) {
      setCurrentProblem(currentProblem - 1);
      setCurrentStep(0);
      setSelectedOption(null);
      setSelectedPair(null);
      setShowFeedback({});
      setShowAnswer(false);
      setShowHint(false);
    }
  };

  const resetProgress = (): void => {
    setCurrentProblem(0);
    setCurrentStep(0);
    setSelectedOption(null);
    setSelectedPair(null);
    setShowFeedback({});
    setCompletedProblems(new Set());
    setShowAnswer(false);
    setShowHint(false);
  };

  const showSolution = (): void => {
    setShowAnswer(true);

    if (currentStep === 0) {
      setSelectedOption(currentProblemData.solution.step1);
    } else if (currentStep === 1) {
      setSelectedPair([...currentProblemData.correctPair] as [string, string]);
    } else if (currentStep === 2) {
      setSelectedOption(currentProblemData.solution.step3);
    }
  };

  const closeSolution = (): void => {
    setShowAnswer(false);
  };

  const getCompletedSteps = (): React.ReactNode => {
    if (currentStep === 0) return null;

    return (
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Previous Steps:</h4>
        <div className="space-y-1 text-sm">
          {currentStep > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Coefficients:</span>
              <span className="font-mono">{currentProblemData.solution.step1}</span>
            </div>
          )}
          {currentStep > 1 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Factor Pair:</span>
              <span className="font-mono">
                ({currentProblemData.solution.step2a}, {currentProblemData.solution.step2b})
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const getOptionHighlightClass = (option: string, isPairOption: boolean = false, pair?: [string, string]): string => {
    if (!showFeedback[currentStep]?.show) return "";

    if (currentStep === 0) {
      const isCorrectOption = normalizeMathExpression(option) === normalizeMathExpression(currentProblemData.solution.step1);
      if (isCorrectOption) {
        return "border-green-500 bg-green-50 ring-2 ring-green-200";
      }
      const isSelectedIncorrect = selectedOption === option && !isCorrectOption;
      if (isSelectedIncorrect) {
        return "border-red-500 bg-red-50 ring-2 ring-red-200";
      }
    } else if (currentStep === 1 && isPairOption && pair) {
      const normalizedPair = pair.map(n => normalizeMathExpression(n)).sort();
      const normalizedCorrect = currentProblemData.correctPair.map(n => normalizeMathExpression(n)).sort();
      const isCorrectPair = JSON.stringify(normalizedPair) === JSON.stringify(normalizedCorrect);

      if (isCorrectPair) {
        return "border-green-500 bg-green-50 ring-2 ring-green-200";
      }

      const isSelectedIncorrect = selectedPair &&
        JSON.stringify(selectedPair.map(n => normalizeMathExpression(n)).sort()) ===
        JSON.stringify(normalizedPair);

      if (isSelectedIncorrect) {
        return "border-red-500 bg-red-50 ring-2 ring-red-200";
      }
    } else if (currentStep === 2) {
      const isCorrectOption = normalizeFactoredExpression(option) === normalizeFactoredExpression(currentProblemData.solution.step3);
      if (isCorrectOption) {
        return "border-green-500 bg-green-50 ring-2 ring-green-200";
      }
      const isSelectedIncorrect = selectedOption === option && !isCorrectOption;
      if (isSelectedIncorrect) {
        return "border-red-500 bg-red-50 ring-2 ring-red-200";
      }
    }

    return "";
  };

  const shouldShowCheckmark = (option: string, isPairOption: boolean = false, pair?: [string, string]): boolean => {
    if (!showFeedback[currentStep]?.show) return false;

    if (currentStep === 0) {
      return normalizeMathExpression(option) === normalizeMathExpression(currentProblemData.solution.step1);
    } else if (currentStep === 1 && isPairOption && pair) {
      const normalizedPair = pair.map(n => normalizeMathExpression(n)).sort();
      const normalizedCorrect = currentProblemData.correctPair.map(n => normalizeMathExpression(n)).sort();
      return JSON.stringify(normalizedPair) === JSON.stringify(normalizedCorrect);
    } else if (currentStep === 2) {
      return normalizeFactoredExpression(option) === normalizeFactoredExpression(currentProblemData.solution.step3);
    }

    return false;
  };

  const getStepOptions = (): string[] => {
    if (currentStep === 0) {
      const { b, c } = currentProblemData.coefficients;
      return [
        `b = ${b}, c = ${c}`,
        `b = ${c}, c = ${b}`,
        `b = ${b}, c = ${b}`,
        `b = ${c}, c = ${c}`
      ];
    } else if (currentStep === 2) {
      return [
        currentProblemData.solution.step3,
        `(x + ${currentProblemData.solution.step2b})(x + ${currentProblemData.solution.step2a})`,
        `(x - ${currentProblemData.solution.step2a})(x - ${currentProblemData.solution.step2b})`,
        `(x + ${currentProblemData.solution.step2a})(x - ${currentProblemData.solution.step2b})`
      ];
    }
    return [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6 pt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Quadratic Factoring (a = 1)</h1>
          <p className="text-gray-600 text-sm">Factor expressions of the form x² + bx + c</p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>Problems Completed</span>
            <span>{completedProblems.size}/{practiceProblems.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-green-500 to-teal-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedProblems.size / practiceProblems.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Factor this expression:</h2>
          <div className="text-3xl font-bold text-teal-600 mb-6">
            <BlockMath math={currentProblemData.expression} />
          </div>

          <div className="flex justify-center space-x-2 mb-4">
            <button
              onClick={prevProblem}
              disabled={currentProblem === 0}
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
              disabled={currentProblem === practiceProblems.length - 1}
              className="p-2 rounded-full bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
   {completedProblems.has(currentProblem) && (
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl p-6 mb-6">
            <div className="text-center">
              <Check className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-4">Problem Solved!</h3>
            </div>
          </div>
        )}


        {getCompletedSteps()}

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 text-teal-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">{currentStepData.title}</h2>
            </div>

            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center px-2 py-1 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors"
            >
              <Lightbulb className="w-4 h-4" />
            </button>
          </div>

          <p className="text-gray-700 mb-4">{currentStepData.description}</p>

          {showHint && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-yellow-800">
                <span className="font-medium">Hint:</span> {currentProblemData.hint}
              </p>
            </div>
          )}

          {(currentStep === 0 || currentStep === 2) && (
            <div className="space-y-3 mb-6">
              {getStepOptions().map((option, index) => {
                const isSelected = selectedOption === option;

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full p-4 text-left rounded-lg border transition-all ${isSelected
                        ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200'
                        : 'border-gray-200 hover:border-teal-300 hover:bg-teal-50/50'
                      } ${getOptionHighlightClass(option)}`}
                    disabled={showAnswer}
                  >
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${isSelected
                          ? 'border-teal-500 bg-teal-500 text-white'
                          : 'border-gray-300'
                        } ${showFeedback[currentStep]?.show && shouldShowCheckmark(option) ? 'border-green-500 bg-green-500 text-white' : ''}`}>
                        {isSelected && !showFeedback[currentStep]?.show && (
                          <div className="w-2 h-2 rounded-full bg-current"></div>
                        )}
                        {showFeedback[currentStep]?.show && shouldShowCheckmark(option) && (
                          <Check className="w-4 h-4" />
                        )}
                      </div>
                      <span className="font-medium">
                        {option}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-3 mb-6">
              {currentProblemData.factorPairs.map((factorPair, index) => {
                const isSelected = selectedPair &&
                  JSON.stringify(selectedPair.map(n => normalizeMathExpression(n)).sort()) ===
                  JSON.stringify(factorPair.pair.map(n => normalizeMathExpression(n)).sort());

                return (
                  <button
                    key={index}
                    onClick={() => handlePairSelect([...factorPair.pair] as [string, string])}
                    className={`w-full p-4 text-left rounded-lg border transition-all ${isSelected
                        ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200'
                        : 'border-gray-200 hover:border-teal-300 hover:bg-teal-50/50'
                      } ${getOptionHighlightClass("", true, factorPair.pair)}`}
                    disabled={showAnswer}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${isSelected
                            ? 'border-teal-500 bg-teal-500 text-white'
                            : 'border-gray-300'
                          } ${showFeedback[currentStep]?.show && shouldShowCheckmark("", true, factorPair.pair) ? 'border-green-500 bg-green-500 text-white' : ''}`}>
                          {isSelected && !showFeedback[currentStep]?.show && (
                            <div className="w-2 h-2 rounded-full bg-current"></div>
                          )}
                          {showFeedback[currentStep]?.show && shouldShowCheckmark("", true, factorPair.pair) && (
                            <Check className="w-4 h-4" />
                          )}
                        </div>
                        <span className="font-medium">
                          Pair: ({factorPair.pair[0]}, {factorPair.pair[1]})
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Sum: {factorPair.sum}, Product: {factorPair.product}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {showFeedback[currentStep]?.show && (
            <div className={`p-4 rounded-lg mt-4 ${showFeedback[currentStep].correct
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
              }`}>
              <div className="flex items-center mb-2">
                {showFeedback[currentStep].correct ? (
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                ) : (
                  <span className="text-red-600 mr-2">✗</span>
                )}
                <span className={`font-medium ${showFeedback[currentStep].correct ? 'text-green-800' : 'text-red-800'
                  }`}>
                  {showFeedback[currentStep].correct ? 'Correct!' : 'Not quite right'}
                </span>
              </div>

              {!showFeedback[currentStep].correct && !showAnswer && (
                <p className="text-sm text-gray-700">
                  {currentStep === 0 ? currentProblemData.explanation.step1 :
                    currentStep === 1 ? `${currentProblemData.explanation.step2a} ${currentProblemData.explanation.step2b}` :
                      currentProblemData.explanation.step3}
                </p>
              )}
            </div>
          )}

          <div className="flex space-x-3 mt-4">
            <button
              onClick={handleSubmit}
              disabled={
                (currentStep === 0 && !selectedOption) ||
                (currentStep === 1 && !selectedPair) ||
                (currentStep === 2 && !selectedOption) ||
                showAnswer
              }
              className="flex-1 bg-teal-600 text-white py-3 px-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-teal-700 transition-colors flex items-center justify-center"
            >
              {showFeedback[currentStep]?.correct ? (
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

            {!showFeedback[currentStep]?.correct && !showAnswer && (
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
              <div className="text-center">
                {currentStep === 0 && (
                  <span>{currentProblemData.solution.step1}</span>
                )}
                {currentStep === 1 && (
                  <span>({currentProblemData.solution.step2a}, {currentProblemData.solution.step2b})</span>
                )}
                {currentStep === 2 && (
                  <InlineMath math={currentProblemData.solution.step3} />
                )}
              </div>
              <p className="text-sm text-blue-700 mt-2">
                {currentStep === 0 ? currentProblemData.explanation.step1 :
                  currentStep === 1 ? `${currentProblemData.explanation.step2a} ${currentProblemData.explanation.step2b}` :
                    currentProblemData.explanation.step3}
              </p>
            </div>
          )}
        </div>

     

        {completedProblems.size === practiceProblems.length && (
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl p-6 text-center mb-6">
            <Check className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
            <p className="text-purple-100">You've mastered Quadratic Factoring (a = 1)!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuadraticA1Tool;