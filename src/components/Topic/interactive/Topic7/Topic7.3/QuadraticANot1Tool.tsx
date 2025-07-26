import React, { useState } from 'react';
import { ChevronRight, Check, RotateCcw, Lightbulb, BookOpen, ArrowRight, Eye, X } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface ProblemSolution {
  step1: string;  // a * c
  step2a: string; // First number for splitting
  step2b: string; // Second number for splitting
  step3: string;  // Split expression
  step4: string;  // Grouped expression
  final: string;  // Final factored form
}

interface ProblemExplanation {
  step1: string;
  step2a: string;
  step2b: string;
  step3: string;
  step4: string;
  final: string;
}

interface PracticeProblem {
  expression: string;
  solution: ProblemSolution;
  explanation: ProblemExplanation;
  hint: string;
  acValue: number;
  bValue: number;
  factorPairs: Array<{ pair: [number, number]; sum: number; product: number }>;
  // New MCQ options for each step
  mcqOptions: {
    step1: string[];
    step2a: string[];
    step2b: string[];
    step3: string[];
    step4: string[];
    final: string[];
  };
}

interface Step {
  title: string;
  description: string;
  field: keyof ProblemSolution;
  // Indicate if this step uses MCQ
  isMcq: boolean;
}

// Helper function to normalize math expressions for comparison
const normalizeMathExpression = (expr: string): string => {
  return expr
    .replace(/\s+/g, '') // Remove all spaces
    .replace(/\u2212/g, '-') // Replace Unicode minus with ASCII minus
    .toLowerCase(); // Convert to lowercase
};

// Helper function to check if two factored forms are equivalent
const areFactoredFormsEquivalent = (form1: string, form2: string): boolean => {
  const normalizedForm1 = normalizeMathExpression(form1);
  const normalizedForm2 = normalizeMathExpression(form2);
  // If exactly the same, return true
  if (normalizedForm1 === normalizedForm2) {
    return true;
  }
  // For final step (factored form), check if it's a rearrangement
  // Extract factors like (x + a) or (ax + b)
  const factors1 = normalizedForm1.match(/\([^)]+\)/g);
  const factors2 = normalizedForm2.match(/\([^)]+\)/g);
  // Check if both have exactly two factors
  if (!factors1 || !factors2 || factors1.length !== 2 || factors2.length !== 2) {
    return false;
  }
  // Sort factors for comparison (since order doesn't matter)
  const sortedFactors1 = [...factors1].sort();
  const sortedFactors2 = [...factors2].sort();
  // Compare sorted factors
  return JSON.stringify(sortedFactors1) === JSON.stringify(sortedFactors2);
};

const QuadraticANot1Tool: React.FC = () => {
  const [currentProblem, setCurrentProblem] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(0);
  // State for user's selected MCQ answer
  const [userMcqSelection, setUserMcqSelection] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<{ [key: number]: { correct: boolean; show: boolean } }>({});
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [completedProblems, setCompletedProblems] = useState<Set<number>>(new Set());

  const practiceProblems: PracticeProblem[] = [
    {
      expression: "2x^2 + 7x + 3",
      solution: {
        step1: "6",
        step2a: "6",
        step2b: "1",
        step3: "2x^2 + 6x + x + 3",
        step4: "2x(x + 3) + 1(x + 3)",
        final: "(2x + 1)(x + 3)"
      },
      explanation: {
        step1: "Multiply the coefficient of x² (a = 2) by the constant term (c = 3): 2 × 3 = 6",
        step2a: "Find two numbers that multiply to 6 and add to 7 (the coefficient of x). The numbers are 6 and 1 because 6 × 1 = 6 and 6 + 1 = 7.",
        step2b: "Find two numbers that multiply to 6 and add to 7 (the coefficient of x). The numbers are 6 and 1 because 6 × 1 = 6 and 6 + 1 = 7.",
        step3: "Split the middle term (7x) using the two numbers found: 7x = 6x + 1x. So the expression becomes 2x² + 6x + x + 3.",
        step4: "Group the terms into pairs and factor each pair: (2x² + 6x) + (x + 3) = 2x(x + 3) + 1(x + 3).",
        final: "Factor out the common binomial factor (x + 3): (2x + 1)(x + 3)."
      },
      hint: "First multiply a × c = 2 × 3 = 6. Then find two numbers that multiply to 6 and add to 7.",
      acValue: 6,
      bValue: 7,
      factorPairs: [
        { pair: [1, 6], sum: 7, product: 6 },
        { pair: [2, 3], sum: 5, product: 6 },
        { pair: [-1, -6], sum: -7, product: 6 },
        { pair: [-2, -3], sum: -5, product: 6 }
      ],
      mcqOptions: {
        step1: ["5", "6", "7", "8"],
        step2a: ["1", "2", "5", "6"], // One of the correct numbers
        step2b: ["1", "2", "5", "6"], // The other correct number
        step3: [
          "2x^2 + 5x + 2x + 3",
          "2x^2 + 6x + x + 3",
          "2x^2 + 1x + 6x + 3",
          "2x^2 + 7x + 1x + 2"
        ],
        step4: [
          "2x(x + 2) + 1(x + 3)",
          "2x(x + 3) + 1(x + 3)",
          "x(2x + 6) + 3(1 + x)",
          "2x(x + 1) + 3(x + 2)"
        ],
        final: [
          "(2x + 3)(x + 1)",
          "(2x + 1)(x + 3)",
          "(x + 1)(2x + 3)",
          "(x + 3)(1 + 2x)"
        ]
      }
    },
    {
      expression: "3x^2 + 11x + 6",
      solution: {
        step1: "18",
        step2a: "9",
        step2b: "2",
        step3: "3x^2 + 9x + 2x + 6",
        step4: "3x(x + 3) + 2(x + 3)",
        final: "(3x + 2)(x + 3)"
      },
      explanation: {
        step1: "Multiply the coefficient of x² (a = 3) by the constant term (c = 6): 3 × 6 = 18",
        step2a: "Find two numbers that multiply to 18 and add to 11 (the coefficient of x). The numbers are 9 and 2 because 9 × 2 = 18 and 9 + 2 = 11.",
        step2b: "Find two numbers that multiply to 18 and add to 11 (the coefficient of x). The numbers are 9 and 2 because 9 × 2 = 18 and 9 + 2 = 11.",
        step3: "Split the middle term (11x) using the two numbers found: 11x = 9x + 2x. So the expression becomes 3x² + 9x + 2x + 6.",
        step4: "Group the terms into pairs and factor each pair: (3x² + 9x) + (2x + 6) = 3x(x + 3) + 2(x + 3).",
        final: "Factor out the common binomial factor (x + 3): (3x + 2)(x + 3)."
      },
      hint: "First multiply a × c = 3 × 6 = 18. Then find two numbers that multiply to 18 and add to 11.",
      acValue: 18,
      bValue: 11,
      factorPairs: [
        { pair: [1, 18], sum: 19, product: 18 },
        { pair: [2, 9], sum: 11, product: 18 },
        { pair: [3, 6], sum: 9, product: 18 },
        { pair: [-2, -9], sum: -11, product: 18 }
      ],
      mcqOptions: {
        step1: ["15", "17", "18", "21"],
        step2a: ["1", "2", "8", "9"], // One of the correct numbers
        step2b: ["1", "2", "8", "9"], // The other correct number
        step3: [
          "3x^2 + 8x + 3x + 6",
          "3x^2 + 9x + 2x + 6",
          "3x^2 + 2x + 9x + 6",
          "3x^2 + 10x + 1x + 6"
        ],
        step4: [
          "3x(x + 2) + 3(x + 2)",
          "3x(x + 3) + 2(x + 3)",
          "x(3x + 9) + 2(3 + x)",
          "3x(x + 1) + 6(x + 1)"
        ],
        final: [
          "(3x + 1)(x + 6)",
          "(3x + 2)(x + 3)",
          "(x + 2)(3x + 3)",
          "(x + 3)(2 + 3x)"
        ]
      }
    },
    {
      expression: "6x^2 + 5x + 1",
      solution: {
        step1: "6",
        step2a: "3",
        step2b: "2",
        step3: "6x^2 + 3x + 2x + 1",
        step4: "3x(2x + 1) + 1(2x + 1)",
        final: "(3x + 1)(2x + 1)"
      },
      explanation: {
        step1: "Multiply the coefficient of x² (a = 6) by the constant term (c = 1): 6 × 1 = 6",
        step2a: "Find two numbers that multiply to 6 and add to 5 (the coefficient of x). The numbers are 3 and 2 because 3 × 2 = 6 and 3 + 2 = 5.",
        step2b: "Find two numbers that multiply to 6 and add to 5 (the coefficient of x). The numbers are 3 and 2 because 3 × 2 = 6 and 3 + 2 = 5.",
        step3: "Split the middle term (5x) using the two numbers found: 5x = 3x + 2x. So the expression becomes 6x² + 3x + 2x + 1.",
        step4: "Group the terms into pairs and factor each pair: (6x² + 3x) + (2x + 1) = 3x(2x + 1) + 1(2x + 1).",
        final: "Factor out the common binomial factor (2x + 1): (3x + 1)(2x + 1)."
      },
      hint: "First multiply a × c = 6 × 1 = 6. Then find two numbers that multiply to 6 and add to 5.",
      acValue: 6,
      bValue: 5,
      factorPairs: [
        { pair: [1, 6], sum: 7, product: 6 },
        { pair: [2, 3], sum: 5, product: 6 },
        { pair: [-1, -6], sum: -7, product: 6 },
        { pair: [-2, -3], sum: -5, product: 6 }
      ],
      mcqOptions: {
        step1: ["4", "5", "6", "7"],
        step2a: ["1", "2", "3", "4"], // One of the correct numbers
        step2b: ["1", "2", "3", "4"], // The other correct number
        step3: [
          "6x^2 + 2x + 3x + 1",
          "6x^2 + 3x + 2x + 1",
          "6x^2 + 1x + 4x + 1",
          "6x^2 + 4x + 1x + 1"
        ],
        step4: [
          "2x(3x + 1) + 1(2x + 1)",
          "3x(2x + 1) + 1(2x + 1)",
          "x(6x + 3) + 1(2 + x)",
          "6x(x + 1) + 1(x + 1)"
        ],
        final: [
          "(3x + 2)(2x + 1)",
          "(3x + 1)(2x + 1)",
          "(2x + 3)(1 + x)",
          "(6x + 1)(x + 1)"
        ]
      }
    }
  ];

  const steps: Step[] = [
    {
      title: "Step 1: Calculate a × c",
      description: "Multiply the coefficient of x² (a) by the constant term (c):",
      field: "step1",
      isMcq: true // MCQ step
    },
    {
      title: "Step 2a: First Split Number",
      description: "Find the first number that helps split the middle term:",
      field: "step2a",
      isMcq: true // MCQ step
    },
    {
      title: "Step 2b: Second Split Number",
      description: "Find the second number that helps split the middle term:",
      field: "step2b",
      isMcq: true // MCQ step
    },
    {
      title: "Step 3: Split the Middle Term",
      description: "Rewrite the expression by splitting the middle term:",
      field: "step3",
      isMcq: true // MCQ step
    },
    {
      title: "Step 4: Group and Factor",
      description: "Group terms and factor out common factors:",
      field: "step4",
      isMcq: true // MCQ step
    },
    {
      title: "Final Step: Factor Completely",
      description: "Write the expression in its fully factored form:",
      field: "final",
      isMcq: true // MCQ step
    }
  ];

  const currentProblemData = practiceProblems[currentProblem];
  const currentStepData = steps[currentStep];

  const checkAnswer = (field: keyof ProblemSolution, userAnswer: string): boolean => {
    const correctAnswer = currentProblemData.solution[field];

    // For step 1, just check the numeric value
    if (field === 'step1') {
      return normalizeMathExpression(userAnswer) === normalizeMathExpression(correctAnswer);
    }

    // For step 2a and 2b, check if the number is one of the correct pair
    if (field === 'step2a' || field === 'step2b') {
      const userNum = parseInt(userAnswer, 10);
      const correctNum1 = parseInt(currentProblemData.solution.step2a, 10);
      const correctNum2 = parseInt(currentProblemData.solution.step2b, 10);
      return userNum === correctNum1 || userNum === correctNum2;
    }

    // For final step, allow rearranged factors
    if (field === 'final') {
      return areFactoredFormsEquivalent(userAnswer, correctAnswer);
    }

    // For other steps, use normalized comparison
    return normalizeMathExpression(userAnswer) === normalizeMathExpression(correctAnswer);
  };

  const handleSubmit = (): void => {
    if (!userMcqSelection) return; // Prevent submission if nothing is selected

    const isCorrect = checkAnswer(currentStepData.field, userMcqSelection);
    setShowFeedback(prev => ({
      ...prev,
      [currentStep]: { correct: isCorrect, show: true }
    }));

    if (isCorrect) {
      setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
          setUserMcqSelection(null); // Reset selection for next step
        } else {
          setCompletedProblems(prev => new Set([...prev, currentProblem]));
          if (currentProblem < practiceProblems.length - 1) {
            setTimeout(() => {
              setCurrentProblem(currentProblem + 1);
              setCurrentStep(0);
              setUserMcqSelection(null);
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
    setUserMcqSelection(option);
    // Clear feedback when user selects a new option
    setShowFeedback(prev => ({
      ...prev,
      [currentStep]: { ...prev[currentStep], show: false }
    }));
  };

  const nextProblem = (): void => {
    if (currentProblem < practiceProblems.length - 1) {
      setCurrentProblem(currentProblem + 1);
      setCurrentStep(0);
      setUserMcqSelection(null);
      setShowFeedback({});
      setShowAnswer(false);
      setShowHint(false);
    }
  };

  const prevProblem = (): void => {
    if (currentProblem > 0) {
      setCurrentProblem(currentProblem - 1);
      setCurrentStep(0);
      setUserMcqSelection(null);
      setShowFeedback({});
      setShowAnswer(false);
      setShowHint(false);
    }
  };

  const resetProgress = (): void => {
    setCurrentProblem(0);
    setCurrentStep(0);
    setUserMcqSelection(null);
    setShowFeedback({});
    setCompletedProblems(new Set());
    setShowAnswer(false);
    setShowHint(false);
  };

  const showSolution = (): void => {
    setShowAnswer(true);
    // Select the correct answer
    setUserMcqSelection(currentProblemData.solution[currentStepData.field]);
  };

  const closeSolution = (): void => {
    setShowAnswer(false);
  };

  const getCompletedSteps = (): React.ReactNode => {
    if (currentStep === 0) return <></>;
    return (
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Previous Steps:</h4>
        <div className="space-y-1 text-sm">
          {currentStep > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-600">a × c:</span>
              <span className="font-mono">{currentProblemData.solution.step1}</span>
            </div>
          )}
          {currentStep > 2 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Split Numbers:</span>
              <span className="font-mono">
                {currentProblemData.solution.step2a} and {currentProblemData.solution.step2b}
              </span>
            </div>
          )}
          {currentStep > 3 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Split Expression:</span>
              <span className="font-mono">
                <InlineMath math={currentProblemData.solution.step3} />
              </span>
            </div>
          )}
          {currentStep > 4 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Grouped Form:</span>
              <span className="font-mono">
                <InlineMath math={currentProblemData.solution.step4} />
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6 pt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Quadratic Factoring (a ≠ 1)</h1>
          <p className="text-gray-600 text-sm">Factor expressions of the form ax² + bx + c where a ≠ 1</p>
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
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Factor this expression:</h2>
          <div className="text-3xl font-bold text-indigo-600 mb-6">
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

        {/* Factor Pairs Reference */}
        {(currentStep >= 1 && currentStep <= 2) && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <h4 className="font-medium text-amber-800 mb-2">Factor Pairs of {currentProblemData.acValue}:</h4>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="font-medium text-amber-700">Pair</div>
              <div className="font-medium text-amber-700">Sum</div>
              <div className="font-medium text-amber-700">Product</div>
              {currentProblemData.factorPairs.map((pair, index) => (
                <React.Fragment key={index}>
                  <div className="font-mono">({pair.pair[0]}, {pair.pair[1]})</div>
                  <div className="font-mono">{pair.sum}</div>
                  <div className="font-mono">{pair.product}</div>
                </React.Fragment>
              ))}
            </div>
            <p className="text-xs text-amber-700 mt-2">We need the pair that adds to {currentProblemData.bValue}</p>
          </div>
        )}

         {/* Solution Review */}
        {completedProblems.has(currentProblem) && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 mb-6">
            <div className="text-center">
              <Check className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-4">Problem Solved!</h3>
            </div>
          </div>
        )}

        {/* Previous Steps Reference */}
        {getCompletedSteps()}

        {/* Step-by-step Guide */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 text-indigo-600 mr-2" />
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

          {/* MCQ Options */}
          {currentStepData.isMcq && (
            <div className="space-y-2 mb-4">
              {currentProblemData.mcqOptions[currentStepData.field].map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                    userMcqSelection === option
                      ? showFeedback[currentStep]?.show && showFeedback[currentStep].correct
                        ? 'border-green-500 bg-green-50'
                        : showFeedback[currentStep]?.show && !showFeedback[currentStep].correct
                        ? 'border-red-500 bg-red-50'
                        : 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-300 hover:bg-gray-50'
                  } ${showAnswer && option === currentProblemData.solution[currentStepData.field] ? 'border-blue-500 bg-blue-50 font-bold' : ''}`}
                  disabled={showAnswer} // Disable options if solution is shown
                >
                  <InlineMath math={option} />
                </button>
              ))}
            </div>
          )}

          {/* Feedback */}
          {showFeedback[currentStep]?.show && (
            <div className={`p-4 rounded-lg mt-4 ${
              showFeedback[currentStep].correct
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-center mb-2">
                {showFeedback[currentStep].correct ? (
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                ) : (
                  <span className="text-red-600 mr-2">✗</span>
                )}
                <span className={`font-medium ${
                  showFeedback[currentStep].correct ? 'text-green-800' : 'text-red-800'
                }`}>
                  {showFeedback[currentStep].correct ? 'Correct!' : 'Not quite right'}
                </span>
              </div>
              {!showFeedback[currentStep].correct && !showAnswer && (
                <p className="text-sm text-gray-700">
                  {currentProblemData.explanation[currentStepData.field]}
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
                <InlineMath math={currentProblemData.solution[currentStepData.field]} />
              </div>
              <p className="text-sm text-blue-700 mt-2">
                {currentProblemData.explanation[currentStepData.field]}
              </p>
            </div>
          )}
        </div>

       

        {/* Completion Message */}
        {completedProblems.size === practiceProblems.length && (
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl p-6 text-center mb-6">
            <Check className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
            <p className="text-purple-100">You've mastered Quadratic Factoring (a ≠ 1)!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuadraticANot1Tool;
