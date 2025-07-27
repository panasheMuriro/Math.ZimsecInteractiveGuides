import React, { useState, ReactNode } from 'react';
import { ChevronRight, Check, RotateCcw, Lightbulb, BookOpen, ArrowRight, Eye, X, AlertCircle } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// Define the structure for a practice problem
interface PracticeProblem {
  expression: string; // The expression to simplify (e.g., "\\frac{2}{x} + \\frac{3}{2x}")
  operation: 'add' | 'subtract'; // The operation being performed
  solution: {
    denominators: string[]; // Array of original denominators (e.g., ["x", "2x"])
    lcm: string; // The Least Common Multiple (e.g., "2x", "(x-2)(x+1)")
    rewrittenFractions: string[]; // Array of fractions after rewriting with LCM (e.g., ["\\frac{4}{2x}", "\\frac{3}{2x}"])
    combinedNumerator: string; // The numerator after combining (e.g., "4 + 3", "(x+1)^2 - (x-3)(x-2)")
    expandedNumerator: string; // The numerator after expanding (if applicable) (e.g., "7", "7x - 5")
    finalSimplified: string; // Final simplified form (e.g., "\\frac{7}{2x}", "\\frac{7x - 5}{(x-2)(x+1)}")
    restrictions: string[]; // Values that make any original denominator zero (e.g., ["x \\neq 0"], ["x \\neq 2", "x \\neq -1"])
  };
  explanation: {
    denominators: string; // Explanation for identifying denominators (can contain KaTeX)
    lcm: string; // Explanation for finding the LCM (can contain KaTeX)
    rewrittenFractions: string; // Explanation for rewriting fractions (can contain KaTeX)
    combinedNumerator: string; // Explanation for combining numerators (can contain KaTeX)
    expandedNumerator: string; // Explanation for expanding (can contain KaTeX)
    finalSimplified: string; // Explanation for the final form (can contain KaTeX)
    restrictions: string; // Explanation for restrictions (can contain KaTeX)
  };
  hint: string; // Hint for the problem (can contain KaTeX)
}

// Define the structure for MCQ options at each step
interface McqOptions {
  denominators: string[][]; // Options for denominators (array of arrays)
  lcm: string[]; // Options for LCM
  rewrittenFractions: string[][]; // Options for rewritten fractions (array of arrays)
  combinedNumerator: string[]; // Options for combined numerator expression
  expandedNumerator: string[]; // Options for expanded numerator
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

const AddSubtractFractionsTool: React.FC = () => {
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
      expression: "\\frac{2}{x} + \\frac{3}{2x}",
      operation: 'add',
      solution: {
        denominators: ["x", "2x"],
        lcm: "2x",
        rewrittenFractions: ["\\frac{4}{2x}", "\\frac{3}{2x}"],
        combinedNumerator: "4 + 3",
        expandedNumerator: "7",
        finalSimplified: "\\frac{7}{2x}",
        restrictions: ["x \\neq 0"]
      },
      explanation: {
        denominators: "The denominators of the fractions are $x$ and $2x$.",
        lcm: "The LCM of $x$ and $2x$ is the smallest expression that both divide into evenly. Since $2x = 2 \\times x$, the LCM is $2x$.",
        rewrittenFractions: "Rewrite each fraction with the common denominator $2x$. For $\\frac{2}{x}$, multiply top and bottom by $2$: $\\frac{2 \\times 2}{x \\times 2} = \\frac{4}{2x}$. The second fraction is already over $2x$.",
        combinedNumerator: "Now that the denominators are the same, add the numerators: $4 + 3$.",
        expandedNumerator: "Calculate the sum in the numerator: $4 + 3 = 7$.",
        finalSimplified: "Combine the result over the common denominator: $\\frac{7}{2x}$.",
        restrictions: "The original denominators $x$ and $2x$ are undefined when $x = 0$. Therefore, $x \\neq 0$."
      },
      hint: "What is the Least Common Multiple of the denominators $x$ and $2x$? How do you rewrite each fraction with this common denominator?"
    },
    {
      expression: "\\frac{x+1}{x-2} - \\frac{x-3}{x+1}",
      operation: 'subtract',
      solution: {
        denominators: ["x-2", "x+1"],
        lcm: "(x-2)(x+1)",
        rewrittenFractions: ["\\frac{(x+1)(x+1)}{(x-2)(x+1)}", "\\frac{(x-3)(x-2)}{(x-2)(x+1)}"],
        combinedNumerator: "(x+1)^2 - (x-3)(x-2)",
        expandedNumerator: "7x - 5",
        finalSimplified: "\\frac{7x - 5}{(x-2)(x+1)}",
        restrictions: ["x \\neq 2", "x \\neq -1"]
      },
      explanation: {
        denominators: "The denominators of the fractions are $x-2$ and $x+1$.",
        lcm: "The denominators $x-2$ and $x+1$ share no common factors. The LCM is their product: $(x-2)(x+1)$.",
        rewrittenFractions: "Rewrite each fraction with the common denominator $(x-2)(x+1)$. For $\\frac{x+1}{x-2}$, multiply top and bottom by $(x+1)$: $\\frac{(x+1)(x+1)}{(x-2)(x+1)}$. For $\\frac{x-3}{x+1}$, multiply top and bottom by $(x-2)$: $\\frac{(x-3)(x-2)}{(x-2)(x+1)}$.",
        combinedNumerator: "Now that the denominators are the same, subtract the numerators: $(x+1)^2 - (x-3)(x-2)$.",
        expandedNumerator: "Expand the numerator: $(x+1)^2 = x^2 + 2x + 1$, $(x-3)(x-2) = x^2 - 5x + 6$. Subtract: $(x^2 + 2x + 1) - (x^2 - 5x + 6) = x^2 + 2x + 1 - x^2 + 5x - 6 = 7x - 5$.",
        finalSimplified: "Combine the result over the common denominator: $\\frac{7x - 5}{(x-2)(x+1)}$.",
        restrictions: "The original denominators $x-2$ and $x+1$ are undefined when $x = 2$ and $x = -1$ respectively. Therefore, $x \\neq 2$ and $x \\neq -1$."
      },
      hint: "The denominators $x-2$ and $x+1$ have no common factors. What is their LCM? How do you adjust each fraction to have this denominator?"
    },
    {
      expression: "\\frac{3}{a} + \\frac{2}{a^2}", // From the example
      operation: 'add',
      solution: {
        denominators: ["a", "a^2"],
        lcm: "a^2",
        rewrittenFractions: ["\\frac{3a}{a^2}", "\\frac{2}{a^2}"],
        combinedNumerator: "3a + 2",
        expandedNumerator: "3a + 2", // Already expanded
        finalSimplified: "\\frac{3a + 2}{a^2}",
        restrictions: ["a \\neq 0"]
      },
      explanation: {
        denominators: "The denominators of the fractions are $a$ and $a^2$.",
        lcm: "To find the LCM, take the highest power of each prime factor. The factors are $a^1$ and $a^2$. The LCM is $a^2$.",
        rewrittenFractions: "Rewrite each fraction with the common denominator $a^2$. For $\\frac{3}{a}$, multiply top and bottom by $a$: $\\frac{3 \\times a}{a \\times a} = \\frac{3a}{a^2}$. The second fraction is already over $a^2$.",
        combinedNumerator: "Now that the denominators are the same, add the numerators: $3a + 2$.",
        expandedNumerator: "The numerator $3a + 2$ is already fully expanded.",
        finalSimplified: "Combine the result over the common denominator: $\\frac{3a + 2}{a^2}$.",
        restrictions: "The original denominators $a$ and $a^2$ are undefined when $a = 0$. Therefore, $a \\neq 0$."
      },
      hint: "One denominator is $a$ and the other is $a^2$. What is the smallest expression that both divide into? How do you adjust the first fraction?"
    },
    {
      expression: "\\frac{1}{x} - \\frac{2}{x+1}", // New problem
      operation: 'subtract',
      solution: {
        denominators: ["x", "x+1"],
        lcm: "x(x+1)",
        rewrittenFractions: ["\\frac{x+1}{x(x+1)}", "\\frac{2x}{x(x+1)}"],
        combinedNumerator: "(x+1) - 2x",
        expandedNumerator: "1 - x",
        finalSimplified: "\\frac{1 - x}{x(x+1)}",
        restrictions: ["x \\neq 0", "x \\neq -1"]
      },
      explanation: {
        denominators: "The denominators of the fractions are $x$ and $x+1$.",
        lcm: "The denominators $x$ and $x+1$ share no common factors. The LCM is their product: $x(x+1)$.",
        rewrittenFractions: "Rewrite each fraction with the common denominator $x(x+1)$. For $\\frac{1}{x}$, multiply top and bottom by $(x+1)$: $\\frac{1 \\times (x+1)}{x \\times (x+1)} = \\frac{x+1}{x(x+1)}$. For $\\frac{2}{x+1}$, multiply top and bottom by $x$: $\\frac{2 \\times x}{(x+1) \\times x} = \\frac{2x}{x(x+1)}$.",
        combinedNumerator: "Now that the denominators are the same, subtract the numerators: $(x+1) - 2x$.",
        expandedNumerator: "Simplify the numerator: $(x+1) - 2x = x + 1 - 2x = 1 - x$.",
        finalSimplified: "Combine the result over the common denominator: $\\frac{1 - x}{x(x+1)}$.",
        restrictions: "The original denominators $x$ and $x+1$ are undefined when $x = 0$ and $x = -1$ respectively. Therefore, $x \\neq 0$ and $x \\neq -1$."
      },
      hint: "The denominators $x$ and $x+1$ are different and share no common factors. What is their LCM? How do you rewrite each fraction?"
    }
  ];

  // --- MCQ Options Data ---
  const mcqOptionsPerProblem: McqOptions[] = [
    // Problem 1: \frac{2}{x} + \frac{3}{2x}
    {
      denominators: [["x", "2x"], ["2", "x"], ["1", "2x"], ["x", "2"]],
      lcm: ["2x", "x", "2", "2x^2"],
      rewrittenFractions: [["\\frac{4}{2x}", "\\frac{3}{2x}"], ["\\frac{2}{2x}", "\\frac{3}{2x}"], ["\\frac{4}{x}", "\\frac{3}{2x}"], ["\\frac{1}{2x}", "\\frac{3}{2x}"]],
      combinedNumerator: ["4 + 3", "2 + 3", "4 - 3", "3 + 4"],
      expandedNumerator: ["7", "5", "1", "12"],
      finalSimplified: ["\\frac{7}{2x}", "\\frac{5}{2x}", "\\frac{7}{x}", "\\frac{1}{2x}"],
      restrictions: [["x \\neq 0"], ["x > 0"], ["x \\neq 2"], []]
    },
    // Problem 2: \frac{x+1}{x-2} - \frac{x-3}{x+1}
    {
      denominators: [["x-2", "x+1"], ["x+1", "x-2"], ["x", "-2"], ["x", "1"]],
      lcm: ["(x-2)(x+1)", "(x-2)+(x+1)", "x^2-1", "x^2-4"],
      rewrittenFractions: [["\\frac{(x+1)(x+1)}{(x-2)(x+1)}", "\\frac{(x-3)(x-2)}{(x-2)(x+1)}"], ["\\frac{(x+1)}{(x-2)(x+1)}", "\\frac{(x-3)}{(x-2)(x+1)}"], ["\\frac{(x+1)^2}{(x-2)(x+1)}", "\\frac{(x-3)^2}{(x-2)(x+1)}"], ["\\frac{x+1}{x-2}", "\\frac{x-3}{x+1}"]],
      combinedNumerator: ["(x+1)^2 - (x-3)(x-2)", "(x+1) - (x-3)", "(x+1)^2 + (x-3)(x-2)", "(x+1)(x-2) - (x-3)(x+1)"],
      expandedNumerator: ["7x - 5", "x^2 - 5x + 6", "2x^2 - x - 5", "4x + 7"],
      finalSimplified: ["\\frac{7x - 5}{(x-2)(x+1)}", "\\frac{x^2 - 5x + 6}{(x-2)(x+1)}", "\\frac{2x^2 - x - 5}{(x-2)(x+1)}", "\\frac{4x + 7}{(x-2)(x+1)}"],
      restrictions: [["x \\neq 2", "x \\neq -1"], ["x \\neq 2"], ["x \\neq -1"], []]
    },
    // Problem 3: \frac{3}{a} + \frac{2}{a^2}
    {
      denominators: [["a", "a^2"], ["3", "2"], ["1", "a^2"], ["a", "2"]],
      lcm: ["a^2", "a", "a^3", "2a^2"],
      rewrittenFractions: [["\\frac{3a}{a^2}", "\\frac{2}{a^2}"], ["\\frac{3}{a^2}", "\\frac{2}{a^2}"], ["\\frac{3a}{a}", "\\frac{2}{a^2}"], ["\\frac{3}{a}", "\\frac{2a}{a^2}"]],
      combinedNumerator: ["3a + 2", "3 + 2", "3a - 2", "5a"],
      expandedNumerator: ["3a + 2", "5", "3a - 2", "5a"],
      finalSimplified: ["\\frac{3a + 2}{a^2}", "\\frac{5}{a^2}", "\\frac{3a - 2}{a^2}", "\\frac{3a + 2}{a}"],
      restrictions: [["a \\neq 0"], ["a > 0"], ["a \\neq 2"], []]
    },
    // Problem 4: \frac{1}{x} - \frac{2}{x+1}
    {
        denominators: [["x", "x+1"], ["1", "x+1"], ["x", "1"], ["1", "x"]],
        lcm: ["x(x+1)", "x+x+1", "x+1", "x"],
        rewrittenFractions: [["\\frac{x+1}{x(x+1)}", "\\frac{2x}{x(x+1)}"], ["\\frac{1}{x(x+1)}", "\\frac{2}{x(x+1)}"], ["\\frac{x+1}{x}", "\\frac{2x}{x+1}"], ["\\frac{1(x+1)}{x(x+1)}", "\\frac{2x}{x(x+1)}"]],
        combinedNumerator: ["(x+1) - 2x", "1 - 2", "x - 2x", "1 - 2x"],
        expandedNumerator: ["1 - x", "-x + 1", "-1", "1 - 2x"],
        finalSimplified: ["\\frac{1 - x}{x(x+1)}", "\\frac{-x + 1}{x(x+1)}", "\\frac{1 - x}{x}", "\\frac{1 - 2x}{x(x+1)}"],
        restrictions: [["x \\neq 0", "x \\neq -1"], ["x \\neq 0"], ["x \\neq -1"], []]
      }
  ];

  // --- Steps Definition ---
  const steps: Step[] = [
    {
      id: "denominators",
      title: "Step 1: Identify Denominators",
      description: "List the denominators of the fractions:",
      isMcq: true
    },
    {
      id: "lcm",
      title: "Step 2: Find the Least Common Multiple (LCM)",
      description: "What is the LCM of the denominators?",
      isMcq: true
    },
    {
      id: "rewrittenFractions",
      title: "Step 3: Rewrite Fractions with Common Denominator",
      description: "Rewrite each fraction so they all have the LCM as their denominator:",
      isMcq: true
    },
    {
      id: "combinedNumerator",
      title: "Step 4: Combine the Numerators",
      description: `Form the new numerator by ${practiceProblems[currentProblemIndex]?.operation === 'add' ? 'adding' : 'subtracting'} the numerators of the rewritten fractions:`,
      isMcq: true
    },
    {
      id: "expandedNumerator",
      title: "Step 5: Simplify the Numerator",
      description: "Expand and simplify the combined numerator if necessary:",
      isMcq: true
    },
    {
      id: "finalSimplified",
      title: "Step 6: Write the Final Fraction",
      description: "Place the simplified numerator over the common denominator:",
      isMcq: true
    },
    {
      id: "restrictions",
      title: "Final Check: State Restrictions",
      description: "List any values that would make the original denominators zero:",
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

    // Handle array steps (denominators, rewrittenFractions, restrictions)
    if (stepId === "denominators" || stepId === "rewrittenFractions" || stepId === "restrictions") {
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
    if (stepId === 'denominators' || stepId === 'rewrittenFractions' || stepId === 'restrictions') {
        const terms = Array.isArray(option) ? option : [option];
        return (
            <div className="flex flex-wrap items-center justify-center space-x-1">
                {terms.map((term, idx) => (
                     <React.Fragment key={idx}>
                         {stepId === 'rewrittenFractions' ? <InlineMath math={term} /> : <span>{term}</span>}
                        {idx < terms.length - 1 && <span>,</span>}
                    </React.Fragment>
                ))}
            </div>
        );
    }
    // For steps that are clearly mathematical expressions
    if (stepId === 'lcm' || stepId === 'combinedNumerator' || stepId === 'expandedNumerator' || stepId === 'finalSimplified') {
      // Render mathematical options with KaTeX
      return <InlineMath math={String(option)} />;
    }
    // Fallback (shouldn't be reached for this tool)
    return <span>{String(option)}</span>;
  };

  // Helper to render the correct answer based on step type
  const renderCorrectAnswer = (answer: string | string[], stepId: keyof McqOptions): ReactNode => {
    // Apply same logic as options
    if (stepId === 'denominators' || stepId === 'rewrittenFractions' || stepId === 'restrictions') {
        const terms = Array.isArray(answer) ? answer : [answer];
        return (
            <div className="flex flex-wrap items-center justify-center space-x-1">
                 {terms.map((term, idx) => (
                    <React.Fragment key={idx}>
                         {stepId === 'rewrittenFractions' ? <InlineMath math={term} /> : <span>{term}</span>}
                         {idx < terms.length - 1 && <span>,</span>}
                    </React.Fragment>
                 ))}
            </div>
        );
    }
    if (stepId === 'lcm' || stepId === 'combinedNumerator' || stepId === 'expandedNumerator' || stepId === 'finalSimplified') {
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
              <span className="text-gray-600">Denominators:</span>
              <span className="font-mono flex flex-wrap space-x-1">
                 {currentProblem.solution.denominators.map((term, idx) => (
                    <React.Fragment key={idx}>
                        <span>{term}</span>
                         {idx < currentProblem.solution.denominators.length - 1 && <span>,</span>}
                    </React.Fragment>
                 ))}
              </span>
            </div>
          )}
          {currentStepIndex > 1 && (
            <div className="flex justify-between">
              <span className="text-gray-600">LCM:</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.lcm} /></span>
            </div>
          )}
          {currentStepIndex > 2 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Rewritten Fractions:</span>
              <span className="font-mono flex flex-wrap space-x-1">
                 {currentProblem.solution.rewrittenFractions.map((term, idx) => (
                    <React.Fragment key={idx}>
                        <InlineMath math={term} />
                         {idx < currentProblem.solution.rewrittenFractions.length - 1 && <span>,</span>}
                    </React.Fragment>
                 ))}
              </span>
            </div>
          )}
          {currentStepIndex > 3 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Combined Numerator:</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.combinedNumerator} /></span>
            </div>
          )}
          {currentStepIndex > 4 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Expanded Numerator:</span>
              <span className="font-mono"><InlineMath math={currentProblem.solution.expandedNumerator} /></span>
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6 pt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Adding and Subtracting Fractions</h1>
          <p className="text-gray-600 text-sm">Combine algebraic fractions using a common denominator</p>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>Problems Completed</span>
            <span>{completedProblems.size}/{practiceProblems.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedProblems.size / practiceProblems.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Problem Expression */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Simplify this expression:</h2>
          <div className="text-3xl font-bold text-purple-600 mb-6">
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
              <BookOpen className="w-5 h-5 text-purple-600 mr-2" />
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
                        : 'border-purple-500 bg-purple-50'
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
              className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors flex items-center justify-center"
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
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 mb-6">
            <div className="text-center">
              <Check className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-4">Expression Simplified!</h3>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-left">
                <h4 className="font-semibold mb-3">Complete Solution:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="font-medium w-32">Expression:</span>
                    <InlineMath math={currentProblem.expression} />
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Denominators:</span>
                     <div className="flex flex-wrap space-x-1">
                        {currentProblem.solution.denominators.map((term, idx) => (
                            <React.Fragment key={idx}>
                                <span>{term}</span>
                                 {idx < currentProblem.solution.denominators.length - 1 && <span>,</span>}
                            </React.Fragment>
                         ))}
                     </div>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">LCM:</span>
                    <InlineMath math={currentProblem.solution.lcm} />
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Rewritten Frac.:</span>
                     <div className="flex flex-wrap space-x-1">
                        {currentProblem.solution.rewrittenFractions.map((term, idx) => (
                            <React.Fragment key={idx}>
                                <InlineMath math={term} />
                                 {idx < currentProblem.solution.rewrittenFractions.length - 1 && <span>,</span>}
                            </React.Fragment>
                         ))}
                     </div>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Combined Num.:</span>
                    <InlineMath math={currentProblem.solution.combinedNumerator} />
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Expanded Num.:</span>
                    <InlineMath math={currentProblem.solution.expandedNumerator} />
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
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 text-center mb-6">
            <Check className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Great Job!</h3>
            <p className="text-indigo-100">You've mastered Adding and Subtracting Fractions!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddSubtractFractionsTool;
