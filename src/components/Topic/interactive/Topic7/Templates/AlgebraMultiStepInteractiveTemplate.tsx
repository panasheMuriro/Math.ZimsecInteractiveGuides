// // --- Example Usage Data (for reference) ---

// // Define data for Add/Subtract Fractions
// // const addSubtractFractionsData: InteractiveToolData = {
// //   title: "Adding and Subtracting Fractions",
// //   description: "Combine algebraic fractions using a common denominator",
// //   steps: [
// //     {
// //       id: "denominators",
// //       title: "Step 1: Identify Denominators",
// //       description: "List the denominators of the fractions:",
// //       type: 'mcq'
// //     },
// //     {
// //       id: "lcm",
// //       title: "Step 2: Find the Least Common Multiple (LCM)",
// //       description: "What is the LCM of the denominators?",
// //       type: 'mcq'
// //     },
// //     {
// //       id: "rewrittenFractions",
// //       title: "Step 3: Rewrite Fractions with Common Denominator",
// //       description: "Rewrite each fraction so they all have the LCM as their denominator:",
// //       type: 'mcq'
// //     },
// //     {
// //       id: "combinedNumerator",
// //       title: "Step 4: Combine the Numerators",
// //       description: `Form the new numerator by ${/* You'd need to pass operation dynamically or handle it in data */ 'adding/subtracting'} the numerators of the rewritten fractions:`,
// //       type: 'mcq'
// //     },
// //     {
// //       id: "expandedNumerator",
// //       title: "Step 5: Simplify the Numerator",
// //       description: "Expand and simplify the combined numerator if necessary:",
// //       type: 'mcq'
// //     },
// //     {
// //       id: "finalSimplified",
// //       title: "Step 6: Write the Final Fraction",
// //       description: "Place the simplified numerator over the common denominator:",
// //       type: 'mcq'
// //     },
// //     {
// //       id: "restrictions",
// //       title: "Final Check: State Restrictions",
// //       description: "List any values that would make the original denominators zero:",
// //       type: 'mcq'
// //     }
// //   ],
// //   mcqOptionsPerProblem: [
// //     // ... (Your existing mcqOptionsPerProblem data from Pasted_Text_1753626233469.txt)
// //   ],
// //   practiceProblems: [
// //     // ... (Your existing practiceProblems data from Pasted_Text_1753626233469.txt)
// //   ]
// // };

// // In your main App component or where you render the tools:
// // <AlgebraMultiStepInteractiveTemplate toolData={addSubtractFractionsData} />

// AlgebraMultiStepInteractiveTemplate.tsx
import React, { useState } from 'react';
import { ChevronRight, RotateCcw, Lightbulb, BookOpen, ArrowRight, Eye, X, AlertCircle, Check } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// --- Generic Interfaces ---

// Define the structure for a generic interactive tool
export interface InteractiveToolData {
  title: string;
  description?: string; // Optional description for the tool
  steps: Step[];
  mcqOptionsPerProblem: McqOptions[];
  practiceProblems: PracticeProblem[];
  // Add optional theme property
  theme?: {
    primaryColor?: string; // e.g., "indigo", "blue", "green"
    backgroundColorFrom?: string; // e.g., "indigo-50", "blue-50"
    backgroundColorTo?: string; // e.g., "purple-100", "blue-100"
    // You can add more theme properties as needed
  };
}

// Define the structure for a practice problem
export interface PracticeProblem {
  expression: string; // The expression to work with (e.g., "\\frac{2}{x} + \\frac{3}{2x}")
  // Add other relevant fields specific to the tool if needed, or make it generic
  solution: Record<string, string | string[]>; // Generic solution object (keyed by step ID)
  explanation: Record<string, string>; // Generic explanation object (keyed by step ID)
  hint: string; // Hint for the problem (can contain KaTeX)
}

// Define the structure for MCQ options at each step
// Using index signature for maximum flexibility with step IDs
export interface McqOptions {
  [key: string]: (string | string[])[]; // Options for a given step ID (array of strings or arrays)
}

// Define the structure for a step in the process
export interface Step {
  id: string; // Dynamic step ID (e.g., "denominators", "lcm", "step1", "concept_check")
  title: string; // Can contain KaTeX
  description: string; // Can contain KaTeX
  type: 'mcq' | 'info' | 'input'; // Type of step. Template handles 'mcq'.
  // Add other properties like 'isRequired' if needed in the future
}

// Props for the generic component
export interface AlgebraMultiStepInteractiveTemplateProps {
  toolData: InteractiveToolData;
}

const AlgebraMultiStepInteractiveTemplate: React.FC<AlgebraMultiStepInteractiveTemplateProps> = ({ toolData }) => {
  // --- State Management ---
  const [currentProblemIndex, setCurrentProblemIndex] = useState<number>(0);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [userMcqSelection, setUserMcqSelection] = useState<string | string[] | null>(null); // Handles single string or array of strings
  const [showFeedback, setShowFeedback] = useState<{ correct: boolean; show: boolean } | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [completedProblems, setCompletedProblems] = useState<Set<number>>(new Set());

  // --- Theme Configuration ---
  // Extract theme properties with defaults
  const theme = toolData.theme || {};
  const primaryColor = theme.primaryColor || 'purple'; // Default to purple if not specified

  // Helper function to generate Tailwind classes based on theme
  const getThemeClasses = () => {
    // Map simple color names to Tailwind classes
    const colorMap: Record<string, { bgGradientFrom: string; bgGradientTo: string; buttonBg: string; buttonHover: string; progressBar: string }> = {
      indigo: {
        bgGradientFrom: 'from-indigo-50',
        bgGradientTo: 'to-purple-100',
        buttonBg: 'bg-indigo-600',
        buttonHover: 'hover:bg-indigo-700',
        progressBar: 'bg-gradient-to-r from-indigo-500 to-purple-600'
      },
      blue: {
        bgGradientFrom: 'from-blue-50',
        bgGradientTo: 'to-cyan-100',
        buttonBg: 'bg-blue-600',
        buttonHover: 'hover:bg-blue-700',
        progressBar: 'bg-gradient-to-r from-blue-500 to-cyan-600'
      },
      green: {
        bgGradientFrom: 'from-green-50',
        bgGradientTo: 'to-emerald-100',
        buttonBg: 'bg-green-600',
        buttonHover: 'hover:bg-green-700',
        progressBar: 'bg-gradient-to-r from-green-500 to-emerald-600'
      },
      purple: { // Default fallback
        bgGradientFrom: 'from-indigo-50',
        bgGradientTo: 'to-purple-100',
        buttonBg: 'bg-purple-600',
        buttonHover: 'hover:bg-purple-700',
        progressBar: 'bg-gradient-to-r from-indigo-500 to-purple-600'
      },
      // --- New Themes ---
      amber: {
        bgGradientFrom: 'from-amber-50',
        bgGradientTo: 'to-orange-100', // or yellow-100
        buttonBg: 'bg-amber-600', // or orange-600
        buttonHover: 'hover:bg-amber-700', // or orange-700
        progressBar: 'bg-gradient-to-r from-amber-500 to-orange-600' // or amber-600 to yellow-600
      },
      rose: {
        bgGradientFrom: 'from-rose-50',
        bgGradientTo: 'to-pink-100', // or red-100
        buttonBg: 'bg-rose-600', // or pink-600
        buttonHover: 'hover:bg-rose-700', // or pink-700
        progressBar: 'bg-gradient-to-r from-rose-500 to-pink-600' // or rose-600 to red-600
      },
      teal: {
        bgGradientFrom: 'from-teal-50',
        bgGradientTo: 'to-cyan-100', // or emerald-100
        buttonBg: 'bg-teal-600', // or cyan-600
        buttonHover: 'hover:bg-teal-700', // or cyan-700
        progressBar: 'bg-gradient-to-r from-teal-500 to-cyan-600' // or teal-600 to emerald-600
      }
      // --- End New Themes ---
    };

    return colorMap[primaryColor] || colorMap['purple']; // Fallback to purple if primaryColor not found
  };

  const themeClasses = getThemeClasses();

  // --- Utility Function for Shuffling ---
  const shuffleArray = <T,>(array: T[]): T[] => {
    // Create a copy to avoid mutating the original
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
  };

  // --- Derived State ---
  const practiceProblems = toolData.practiceProblems;
  const steps = toolData.steps;
  const currentProblem = practiceProblems[currentProblemIndex];
  const currentStep = steps[currentStepIndex];

  // --- MCQ Options Data (Shuffled) ---
   const generateShuffledMcqOptions = (): McqOptions[] => {
    return practiceProblems.map((_, problemIndex) => {
      const originalOptions = toolData.mcqOptionsPerProblem[problemIndex];
      const shuffledOptions: Partial<McqOptions> = {};
      for (const stepId in originalOptions) {
        // Use the older, more compatible method instead of Object.hasOwn
        if (Object.prototype.hasOwnProperty.call(originalOptions, stepId)) {
          shuffledOptions[stepId] = shuffleArray(originalOptions[stepId]);
        }
      }
      return shuffledOptions as McqOptions; // Cast back to full type
    });
  };

  // State for shuffled options
  const [shuffledMcqOptions] = useState<McqOptions[]>(generateShuffledMcqOptions());
  const currentMcqOptions = shuffledMcqOptions[currentProblemIndex];

  // --- Helper Functions ---
  const checkAnswer = (): boolean => {
    if (!userMcqSelection || currentStep.type !== 'mcq') return false;
    const stepId = currentStep.id;
    const correctAnswer = currentProblem.solution[stepId];

    // Handle array steps (e.g., denominators, rewrittenFractions, restrictions)
    if (Array.isArray(correctAnswer)) {
        // Normalize arrays for comparison
        const normalizeArray = (arr: string[]) => arr.map(item => item.replace(/\s+/g, '').toLowerCase()).sort();
        const userArray = Array.isArray(userMcqSelection) ? userMcqSelection : [userMcqSelection]; // Ensure user selection is an array
        const correctArray = correctAnswer; // Already an array
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
    if (!userMcqSelection || currentStep.type !== 'mcq') return;
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
    if (currentStep.type !== 'mcq') return;
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
    if (currentStep.type !== 'mcq') return;
    setShowAnswer(true);
    // Pre-select the correct answer
    const correctAnswer = currentProblem.solution[currentStep.id];
    // Normalize for state comparison (arrays sorted)
    setUserMcqSelection(Array.isArray(correctAnswer) ? [...correctAnswer].sort() : String(correctAnswer));
  };

  const closeSolution = (): void => {
    setShowAnswer(false);
  };

  // --- Helper Functions for Rendering ---

  // Helper to render option content correctly, using KaTeX for all math content
  // Updated: Removed unused 'stepId' parameter
  const renderOptionContent = (option: string | string[]): React.ReactNode => {
    // For array options (e.g., denominators, rewrittenFractions, restrictions)
    if (Array.isArray(option)) {
      return (
        <div className="flex flex-wrap items-center justify-center space-x-1">
          {option.map((term, idx) => (
            <React.Fragment key={idx}>
              {/* Render all terms in these steps with InlineMath */}
              <InlineMath math={String(term)} />
              {idx < option.length - 1 && <span>,</span>}
            </React.Fragment>
          ))}
        </div>
      );
    }
    // For single string options, render with KaTeX
    return <InlineMath math={String(option)} />;
  };

  // Helper to render the correct answer, using KaTeX for all math content
  // Updated: Removed unused 'stepId' parameter
  const renderCorrectAnswer = (answer: string | string[]): React.ReactNode => {
    // Apply same logic as options: Use InlineMath for everything
    if (Array.isArray(answer)) {
      return (
        <div className="flex flex-wrap items-center justify-center space-x-1">
          {answer.map((term, idx) => (
            <React.Fragment key={idx}>
              {/* Render all terms in these steps with InlineMath */}
              <InlineMath math={String(term)} />
              {idx < answer.length - 1 && <span>,</span>}
            </React.Fragment>
          ))}
        </div>
      );
    }
    // Render single string answers with KaTeX
    return <InlineMath math={String(answer)} />;
  };

  // Helper to render text that might contain KaTeX ($...$ delimiters)
  const renderTextWithMath = (text: string): React.ReactNode => {
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

  // Helper to render previous steps summary (generic version)
  const getCompletedSteps = (): React.ReactNode => {
    if (currentStepIndex === 0) return <></>;
    return (
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Previous Steps:</h4>
        <div className="space-y-1 text-sm">
          {steps.slice(0, currentStepIndex).map((step, idx) => {
            const stepSolution = currentProblem.solution[step.id];
            if (stepSolution === undefined) return null; // Skip if no solution data for this step

            return (
              <div key={idx} className="flex justify-between">
                <span className="text-gray-600">{renderTextWithMath(step.title.replace("Step", "").replace(/\d+:/, "").trim())}:</span>
                <span className="font-mono">
                  {Array.isArray(stepSolution) ? (
                    <div className="flex flex-wrap space-x-1">
                      {stepSolution.map((term, termIdx) => (
                        <React.Fragment key={termIdx}>
                          <InlineMath math={String(term)} />
                          {termIdx < stepSolution.length - 1 && <span>,</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  ) : (
                    <InlineMath math={String(stepSolution)} />
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };


  // --- Render Logic ---
  return (
    // Apply dynamic background gradient classes
    <div className={`min-h-screen bg-gradient-to-br rounded-2xl ${themeClasses.bgGradientFrom} ${themeClasses.bgGradientTo} p-4`}>
      <div className="max-w-md mx-auto">
        {/* Header */}
           <div className="text-center mb-6 pt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{toolData.title}</h1>
          {toolData.description && (
            <p className="text-gray-600 text-sm">
              {/* Use renderTextWithMath to handle potential KaTeX in the description */}
              {renderTextWithMath(toolData.description)} 
            </p>
          )}
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>Problems Completed</span>
            <span>{completedProblems.size}/{practiceProblems.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            {/* Apply dynamic progress bar gradient */}
            <div
              className={`h-2 rounded-full transition-all duration-300 ${themeClasses.progressBar}`}
              style={{ width: `${(completedProblems.size / practiceProblems.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Problem Expression */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Work on this expression:</h2>
          <div className={`text-3xl font-bold text-${primaryColor}-600 mb-6`}>
            <BlockMath math={currentProblem.expression} />
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            <button
              onClick={prevProblem}
              disabled={currentProblemIndex === 0}
              className="p-2 rounded-full bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
              aria-label="Previous Problem"
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
              aria-label="Next Problem"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Previous Steps Reference */}
        {getCompletedSteps()}

        {/* Completion Message */}
        {completedProblems.size === practiceProblems.length && (
          // Apply dynamic gradient to completion message
          <div className={`bg-gradient-to-r ${themeClasses.bgGradientFrom.replace('from-', 'from-')} ${themeClasses.bgGradientTo.replace('to-', 'to-')} text-white rounded-xl p-6 text-center mb-6`}>
            <Check className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Great Job!</h3>
            <p className="text-opacity-80"> {/* Adjust text opacity if needed for contrast */}
               You've mastered {toolData.title}!
            </p>
          </div>
        )}

        {/* Step-by-step Guide */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <BookOpen className={`w-5 h-5 text-${primaryColor}-600 mr-2`} /> {/* Dynamic icon color */}
              <h2 className="text-lg font-semibold text-gray-800">{renderTextWithMath(currentStep.title)}</h2>
            </div>
            <button
              onClick={() => setShowHint(!showHint)}
              className={`flex items-center px-2 py-1 bg-${primaryColor}-100 text-${primaryColor}-700 rounded-lg hover:bg-${primaryColor}-200 transition-colors`}
              aria-label={showHint ? "Hide Hint" : "Show Hint"}
            >
              <Lightbulb className="w-4 h-4" />
            </button>
          </div>

          <p className="text-gray-700 mb-4">{renderTextWithMath(currentStep.description)}</p>

          {showHint && (
            <div className={`bg-${primaryColor}-50 border border-${primaryColor}-200 rounded-lg p-3 mb-4`}>
              <p className={`text-sm text-${primaryColor}-800`}>
                <span className="font-medium">Hint:</span> {renderTextWithMath(currentProblem.hint)}
              </p>
            </div>
          )}

          {/* MCQ Options - Only render if the step is an MCQ */}
          {currentStep.type === 'mcq' && currentMcqOptions && currentMcqOptions[currentStep.id] && (
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
                          : `border-${primaryColor}-500 bg-${primaryColor}-50` // Dynamic selection color
                        : 'border-gray-300 hover:bg-gray-50'
                    } ${showAnswer && JSON.stringify(normalizedOption) === JSON.stringify(Array.isArray(currentProblem.solution[currentStep.id]) ? [...(currentProblem.solution[currentStep.id] as string[])].sort() : String(currentProblem.solution[currentStep.id])) ? `border-blue-500 bg-blue-50 font-bold` : ''}`}
                    disabled={showAnswer}
                  >
                    {/* Use helper to render option content correctly (all with KaTeX) */}
                    {renderOptionContent(option)}
                  </button>
                );
              })}
            </div>
          )}

          {/* Feedback - Only show if it's an MCQ step */}
          {currentStep.type === 'mcq' && showFeedback?.show && (
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

          {/* Action Buttons - Only show if it's an MCQ step */}
          {currentStep.type === 'mcq' && (
            <div className="flex space-x-3 mt-4">
              <button
                onClick={handleSubmit}
                disabled={!userMcqSelection || showAnswer}
                // Apply dynamic button classes
                className={`flex-1 text-white py-3 px-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center ${themeClasses.buttonBg} ${themeClasses.buttonHover}`}
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
                  aria-label="Show Solution"
                >
                  <Eye className="w-5 h-5 text-gray-600" />
                </button>
              )}
            </div>
          )}

          {/* Show Correct Answer - Only show if it's an MCQ step and answer is shown */}
          {currentStep.type === 'mcq' && showAnswer && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-blue-800">Correct Answer:</span>
                <button
                  onClick={closeSolution}
                  className="text-blue-600 hover:text-blue-800"
                  aria-label="Close Solution"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center my-2">
                {/* Use helper to render correct answer (all with KaTeX) */}
                {renderCorrectAnswer(currentProblem.solution[currentStep.id])}
              </div>
              <p className="text-sm text-blue-700 mt-2">
                {renderTextWithMath(currentProblem.explanation[currentStep.id])}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlgebraMultiStepInteractiveTemplate;