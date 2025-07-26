import React, { useState } from 'react';
import { ChevronRight, Check, RotateCcw, Lightbulb, BookOpen, ArrowRight, Eye, X } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface ProblemSolution {
  step1a: string; // First perfect square
  step1b: string; // Second perfect square
  step2: string; // Operation
  step3a: string; // Value of 'a'
  step3b: string; // Value of 'b'
  final: string;  // Final factored form (primary correct answer)
}

interface ProblemExplanation {
  step1a: string;
  step1b: string;
  step2: string;
  step3a: string;
  step3b: string;
  final: string;
}

interface PracticeProblem {
  expression: string;
  solution: ProblemSolution;
  explanation: ProblemExplanation;
  hint: string;
  options: {
    step1: string[]; // Combined options for both squares
    step2: string[];
    step3a: string[];
    step3b: string[];
    final: string[]; // Include both valid orders
  };
  // Store the correct pair for step 1
  correctSquares: [string, string];
  // Store both valid forms for final answer
  validFinalForms: [string, string];
}

interface Step {
  title: string;
  description: string;
  field: keyof ProblemSolution;
  multiSelect?: boolean; // For step 1 where user picks 2 squares
}

interface Feedback {
  [key: number]: {
    correct: boolean;
    show: boolean;
  };
}

// Helper function to normalize math expressions for comparison
const normalizeMathExpression = (expr: string): string => {
  return expr
    .replace(/\s+/g, '') // Remove all spaces
    .replace(/\u2212/g, '-') // Replace Unicode minus with ASCII minus
    .toLowerCase(); // Convert to lowercase
};

const DifferenceOfSquaresTool: React.FC = () => {
  const [currentProblem, setCurrentProblem] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]); // For multi-select
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // For single select
  const [showFeedback, setShowFeedback] = useState<Feedback>({});
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [completedProblems, setCompletedProblems] = useState<Set<number>>(new Set());

  const practiceProblems: PracticeProblem[] = [
    {
      expression: "x^2 - 9",
      solution: {
        step1a: "x^2",
        step1b: "9",
        step2: "subtraction",
        step3a: "x",
        step3b: "3",
        final: "(x + 3)(x - 3)"
      },
      explanation: {
        step1a: "x^2 is a perfect square because it's (x)^2",
        step1b: "9 is a perfect square because it's 3^2",
        step2: "The minus sign indicates subtraction",
        step3a: "Since x^2 = (x)^2, we have a = x",
        step3b: "Since 9 = 3^2, we have b = 3",
        final: "Using the formula a^2 - b^2 = (a + b)(a - b)"
      },
      hint: "Remember: 9 = 3^2",
      options: {
        step1: ["x^2", "9", "x", "3", "2"], // 5 options, 2 correct
        step2: ["subtraction", "addition", "multiplication", "division"],
        step3a: ["x", "x^2", "3", "9"],
        step3b: ["3", "9", "x", "x^2"],
        final: ["(x + 3)(x - 3)", "(x - 3)(x + 3)", "(x + 3)(x + 3)", "(x - 3)(x - 3)"] // Both orders valid
      },
      correctSquares: ["x^2", "9"],
      validFinalForms: ["(x + 3)(x - 3)", "(x - 3)(x + 3)"]
    },
    {
      expression: "4x^2 - 25",
      solution: {
        step1a: "4x^2",
        step1b: "25",
        step2: "subtraction",
        step3a: "2x",
        step3b: "5",
        final: "(2x + 5)(2x - 5)"
      },
      explanation: {
        step1a: "4x^2 is a perfect square because it's (2x)^2",
        step1b: "25 is a perfect square because it's 5^2",
        step2: "The minus sign indicates subtraction",
        step3a: "Since 4x^2 = (2x)^2, we have a = 2x",
        step3b: "Since 25 = 5^2, we have b = 5",
        final: "Using the formula a^2 - b^2 = (a + b)(a - b)"
      },
      hint: "Remember: 4x^2 = (2x)^2 and 25 = 5^2",
      options: {
        step1: ["4x^2", "25", "2x", "5", "x^2"], // 5 options, 2 correct
        step2: ["subtraction", "addition", "multiplication", "division"],
        step3a: ["2x", "4x^2", "5", "25"],
        step3b: ["5", "25", "2x", "4x^2"],
        final: ["(2x + 5)(2x - 5)", "(2x - 5)(2x + 5)", "(2x + 5)(2x + 5)", "(2x - 5)(2x - 5)"] // Both orders
      },
      correctSquares: ["4x^2", "25"],
      validFinalForms: ["(2x + 5)(2x - 5)", "(2x - 5)(2x + 5)"]
    },
    {
      expression: "16a^2 - 81",
      solution: {
        step1a: "16a^2",
        step1b: "81",
        step2: "subtraction",
        step3a: "4a",
        step3b: "9",
        final: "(4a + 9)(4a - 9)"
      },
      explanation: {
        step1a: "16a^2 is a perfect square because it's (4a)^2",
        step1b: "81 is a perfect square because it's 9^2",
        step2: "The minus sign indicates subtraction",
        step3a: "Since 16a^2 = (4a)^2, we have a = 4a",
        step3b: "Since 81 = 9^2, we have b = 9",
        final: "Using the formula a^2 - b^2 = (a + b)(a - b)"
      },
      hint: "Remember: 16a^2 = (4a)^2 and 81 = 9^2",
      options: {
        step1: ["16a^2", "81", "4a", "9", "a^2"], // 5 options, 2 correct
        step2: ["subtraction", "addition", "multiplication", "division"],
        step3a: ["4a", "16a^2", "9", "81"],
        step3b: ["9", "81", "4a", "16a^2"],
        final: ["(4a + 9)(4a - 9)", "(4a - 9)(4a + 9)", "(4a + 9)(4a + 9)", "(4a - 9)(4a - 9)"] // Both orders
      },
      correctSquares: ["16a^2", "81"],
      validFinalForms: ["(4a + 9)(4a - 9)", "(4a - 9)(4a + 9)"]
    }
  ];

  const steps: Step[] = [
    {
      title: "Step 1: Identify Perfect Squares",
      description: "Select the two perfect squares in the expression:",
      field: "step1a", // Placeholder, as both are selected together
      multiSelect: true
    },
    {
      title: "Step 2: Operation Type",
      description: "What operation connects these terms?",
      field: "step2"
    },
    {
      title: "Step 3a: Value of 'a'",
      description: "If the first square is a^2, what is 'a'?",
      field: "step3a"
    },
    {
      title: "Step 3b: Value of 'b'",
      description: "If the second square is b^2, what is 'b'?",
      field: "step3b"
    },
    {
      title: "Final Step: Apply Formula",
      description: "Factor using a^2 - b^2 = (a + b)(a - b):",
      field: "final"
    }
  ];

  const currentProblemData = practiceProblems[currentProblem];
  const currentStepData = steps[currentStep];
  const currentOptions = currentStepData.field === 'step2' ? currentProblemData.options.step2 :
                       currentStepData.field === 'step3a' ? currentProblemData.options.step3a :
                       currentStepData.field === 'step3b' ? currentProblemData.options.step3b :
                       currentStepData.field === 'final' ? currentProblemData.options.final :
                       currentProblemData.options.step1; // Default to step1 options

  const checkAnswer = (): boolean => {
    // Special handling for Step 1 (multi-select)
    if (currentStep === 0) {
      if (selectedOptions.length !== 2) return false;
      
      const normalizedSelected = selectedOptions.map(opt => normalizeMathExpression(opt)).sort();
      const normalizedCorrect = currentProblemData.correctSquares.map(opt => normalizeMathExpression(opt)).sort();
      
      return JSON.stringify(normalizedSelected) === JSON.stringify(normalizedCorrect);
    }
    
    // Special handling for Final Step (order doesn't matter)
    if (currentStep === 4) {
      if (!selectedOption) return false;
      
      const normalizedSelected = normalizeMathExpression(selectedOption);
      const normalizedValidForms = currentProblemData.validFinalForms.map(form => normalizeMathExpression(form));
      
      return normalizedValidForms.includes(normalizedSelected);
    }
    
    // Default handling for single-select steps
    if (!selectedOption) return false;
    
    const normalizedSelected = normalizeMathExpression(selectedOption);
    const normalizedCorrect = normalizeMathExpression(currentProblemData.solution[currentStepData.field]);
    
    // Special case for operation type
    if (currentStepData.field === 'step2') {
      const lowerSelected = selectedOption.toLowerCase();
      return lowerSelected.includes('subtract') || lowerSelected.includes('subtraction') || lowerSelected === 'minus';
    }
    
    return normalizedSelected === normalizedCorrect;
  };

  const handleSubmit = (): void => {
    // Validation for multi-select step
    if (currentStep === 0 && selectedOptions.length !== 2) {
      alert("Please select exactly 2 perfect squares.");
      return;
    }
    
    // Validation for single-select steps
    if (currentStep !== 0 && !selectedOption) {
      alert("Please select an option.");
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
          setSelectedOptions([]); // Reset for next step
          setSelectedOption(null); // Reset for next step
        } else {
          setCompletedProblems(prev => new Set([...prev, currentProblem]));
          if (currentProblem < practiceProblems.length - 1) {
            setTimeout(() => {
              setCurrentProblem(currentProblem + 1);
              setCurrentStep(0);
              setSelectedOptions([]);
              setSelectedOption(null);
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
    // Multi-select for Step 1
    if (currentStep === 0) {
      setSelectedOptions(prev => {
        if (prev.includes(option)) {
          // Deselect if already selected
          return prev.filter(opt => opt !== option);
        } else if (prev.length < 2) {
          // Select if less than 2 options are selected
          return [...prev, option];
        }
        // Do nothing if trying to select more than 2
        return prev;
      });
    } else {
      // Single select for other steps
      setSelectedOption(option);
    }
    
    // Clear feedback when user makes a selection
    setShowFeedback(prev => ({
      ...prev,
      [currentStep]: { ...prev[currentStep], show: false }
    }));
  };

  const nextProblem = (): void => {
    if (currentProblem < practiceProblems.length - 1) {
      setCurrentProblem(currentProblem + 1);
      setCurrentStep(0);
      setSelectedOptions([]);
      setSelectedOption(null);
      setShowFeedback({});
      setShowAnswer(false);
      setShowHint(false);
    }
  };

  const prevProblem = (): void => {
    if (currentProblem > 0) {
      setCurrentProblem(currentProblem - 1);
      setCurrentStep(0);
      setSelectedOptions([]);
      setSelectedOption(null);
      setShowFeedback({});
      setShowAnswer(false);
      setShowHint(false);
    }
  };

  const resetProgress = (): void => {
    setCurrentProblem(0);
    setCurrentStep(0);
    setSelectedOptions([]);
    setSelectedOption(null);
    setShowFeedback({});
    setCompletedProblems(new Set());
    setShowAnswer(false);
    setShowHint(false);
  };

  const showSolution = (): void => {
    setShowAnswer(true);
    
    if (currentStep === 0) {
      // Show both correct squares for step 1
      setSelectedOptions([...currentProblemData.correctSquares]);
    } else {
      // Show correct answer for other steps
      setSelectedOption(currentProblemData.solution[currentStepData.field]);
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
              <span className="text-gray-600">Perfect Squares:</span>
              <span className="font-mono">
                <InlineMath math={currentProblemData.solution.step1a} /> and <InlineMath math={currentProblemData.solution.step1b} />
              </span>
            </div>
          )}
          {currentStep > 1 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Operation:</span>
              <span className="font-mono">{currentProblemData.solution.step2}</span>
            </div>
          )}
          {currentStep > 2 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Value of a:</span>
              <span className="font-mono">
                <InlineMath math={currentProblemData.solution.step3a} />
              </span>
            </div>
          )}
          {currentStep > 3 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Value of b:</span>
              <span className="font-mono">
                <InlineMath math={currentProblemData.solution.step3b} />
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Determine if an option should be highlighted as correct/incorrect after feedback
  const getOptionHighlightClass = (option: string): string => {
    if (!showFeedback[currentStep]?.show) return ""; // No highlight if no feedback yet

    if (currentStep === 0) {
      // For step 1, highlight both correct squares
      const isCorrectSquare = currentProblemData.correctSquares.includes(option);
      if (isCorrectSquare) {
        return "border-green-500 bg-green-50 ring-2 ring-green-200";
      }
      // Highlight incorrect selections if user selected them
      const isSelectedIncorrect = selectedOptions.includes(option) && !isCorrectSquare;
      if (isSelectedIncorrect) {
        return "border-red-500 bg-red-50 ring-2 ring-red-200";
      }
    } else {
      // For other steps
      const isCorrectOption = option === currentProblemData.solution[currentStepData.field] ||
                             (currentStep === 4 && currentProblemData.validFinalForms.includes(option));
      
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

  // Determine if an option should show a checkmark
  const shouldShowCheckmark = (option: string): boolean => {
    if (!showFeedback[currentStep]?.show) return false;
    
    if (currentStep === 0) {
      return currentProblemData.correctSquares.includes(option);
    } else {
      return option === currentProblemData.solution[currentStepData.field] ||
             (currentStep === 4 && currentProblemData.validFinalForms.includes(option));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6 pt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Difference of Two Squares</h1>
          <p className="text-gray-600 text-sm">Step-by-step factoring practice</p>
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

        {/* Previous Steps Reference */}
        {getCompletedSteps()}



        {/* Solution Review */}
        {completedProblems.has(currentProblem) && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 mb-6">
            <div className="text-center">
              <Check className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-4">Problem Solved!</h3>
            </div>
          </div>
        )}

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

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentOptions.map((option, index) => {
              // Determine if option is selected
              const isSelected = currentStep === 0 
                ? selectedOptions.includes(option)
                : selectedOption === option;
              
              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full p-4 text-left rounded-lg border transition-all ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200'
                      : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                  } ${getOptionHighlightClass(option)}`}
                  disabled={showAnswer}
                >
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-500 text-white'
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
                      {currentStepData.field === 'step1a' || // This covers step 1 options
                       currentStepData.field === 'step3a' || 
                       currentStepData.field === 'step3b' || 
                       currentStepData.field === 'final' ||
                       currentStepData.field === 'step2' && (option === 'subtraction' || option === 'addition' || option === 'multiplication' || option === 'division') ? (
                        <InlineMath math={option} />
                      ) : (
                        option
                      )}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

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
                  {currentStep === 0 
                    ? `The perfect squares are ${currentProblemData.solution.step1a} and ${currentProblemData.solution.step1b}. ${currentProblemData.explanation.step1a} ${currentProblemData.explanation.step1b}`
                    : currentProblemData.explanation[currentStepData.field]}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-4">
            <button
              onClick={handleSubmit}
              disabled={(currentStep === 0 ? selectedOptions.length !== 2 : !selectedOption) || showAnswer}
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
                {currentStep === 0 ? (
                  <div>
                    <InlineMath math={currentProblemData.solution.step1a} /> and <InlineMath math={currentProblemData.solution.step1b} />
                  </div>
                ) : currentStepData.field === 'step3a' || 
                   currentStepData.field === 'step3b' || 
                   currentStepData.field === 'final' ? (
                  <InlineMath math={currentProblemData.solution[currentStepData.field]} />
                ) : (
                  <span>{currentProblemData.solution[currentStepData.field]}</span>
                )}
              </div>
              <p className="text-sm text-blue-700 mt-2">
                {currentStep === 0 
                  ? `${currentProblemData.explanation.step1a} ${currentProblemData.explanation.step1b}`
                  : currentProblemData.explanation[currentStepData.field]}
              </p>
            </div>
          )}
        </div>


        {/* Completion Message */}
        {completedProblems.size === practiceProblems.length && (
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl p-6 text-center mb-6">
            <Check className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
            <p className="text-purple-100">You've mastered Difference of Two Squares!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DifferenceOfSquaresTool;
