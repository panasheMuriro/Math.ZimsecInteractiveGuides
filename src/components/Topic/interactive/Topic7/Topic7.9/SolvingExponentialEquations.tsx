/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderExponentialEquationsSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No exponential equations solved yet.</p>;
  }
  return (
    <ul className="space-y-2">
      {entries.map(([key, value]) => (
        <li key={key} className="flex justify-between items-center">
          <span style={{ color: '#264653' }}>{key}:</span>
          <span className="font-mono" style={{ color: '#264653' }}>{value}</span>
        </li>
      ))}
    </ul>
  );
};

// --- Multi-Step Question 1: Concept Understanding ---
const eeConceptQuestion: MultiStepQuestion = {
  id: 'ee-concept',
  title: 'Understanding Exponential Equations',
  steps: [
    {
      id: 'eec-define',
      question: "What defines an exponential equation?",
      questionType: 'text',
      options: [
        "An equation where the variable is only in the base.",
        "An equation where the variable is in the exponent.",
        "An equation involving a polynomial.",
        "An equation with a square root."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "An exponential equation is characterized by having the variable in the exponent, such as $2^x = 8$ or $5^{x-1} = \\frac{1}{25}$.",
      explanationType: 'text'
    },
    {
      id: 'eec-goal',
      question: "What is the main goal when solving exponential equations using the 'same base' method?",
      questionType: 'text',
      options: [
        "To make the exponents equal to zero.",
        "To rewrite both sides of the equation with the same base.",
        "To multiply both sides by the base.",
        "To add the exponents together."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The core strategy of the 'same base' method is to express both sides of the equation using the same base. This allows us to use the property that if $a^m = a^n$, then $m = n$.",
      explanationType: 'text'
    },
    {
      id: 'eec-key-property',
      question: "If $a^m = a^n$ (where $a > 0$ and $a \\neq 1$), what can we conclude?",
      questionType: 'text',
      options: [
        "The bases $a$ must be equal.",
        "The exponents $m$ and $n$ must be equal.",
        "The product $m \\times n$ must be 1.",
        "The sum $m + n$ must be 0."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "This is the fundamental property used in solving exponential equations with the same base. If the bases are identical and positive (not 1), the only way for the two exponential expressions to be equal is if their exponents are equal.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Analyzing Example 1 (Same Base) ---
const eeExample1AnalysisQuestion: MultiStepQuestion = {
  id: 'ee-example1-analysis',
  title: 'Analyzing Example 1: $3^x = 27$',
  steps: [
    {
      id: 'ee1a-rewrite-base',
      question: "To solve $3^x = 27$, we need to rewrite 27 as a power of 3. What is $27$ as a power of 3?",
      questionType: 'text',
      options: [
        "$27 = 3^2$",
        "$27 = 3^3$",
        "$27 = 3^4$",
        "$27 = 3^1 \\times 9$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "We know that $3 \\times 3 \\times 3 = 27$. Therefore, $27 = 3^3$.",
      explanationType: 'text'
    },
    {
      id: 'ee1a-equate-exponents',
      question: "After rewriting, the equation becomes $3^x = 3^3$. What do we do next?",
      questionType: 'text',
      options: [
        "Multiply the exponents: $x \\times 3 = 3$.",
        "Add the exponents: $x + 3 = 3$.",
        "Set the exponents equal: $x = 3$.",
        "Subtract the exponents: $x - 3 = 3$."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Since the bases are the same, we can equate the exponents directly. This gives us $x = 3$.",
      explanationType: 'text'
    },
    {
      id: 'ee1a-check-solution',
      question: "How do we check our solution $x = 3$ in the original equation $3^x = 27$?",
      questionType: 'text',
      options: [
        "Substitute $x = 3$: $3^3 = 9$. Is $9 = 27$? No.",
        "Substitute $x = 3$: $3^3 = 27$. Is $27 = 27$? Yes.",
        "Substitute $x = 3$: $3 \\times 3 = 9$. Is $9 = 27$? No.",
        "Substitute $x = 3$: $3 + 3 = 6$. Is $6 = 27$? No."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "To verify, substitute $x = 3$ back into the left side of the original equation: $3^3 = 27$. Since this equals the right side (27), our solution is correct.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 3: Analyzing Example 2 (Different Bases) ---
const eeExample2AnalysisQuestion: MultiStepQuestion = {
  id: 'ee-example2-analysis',
  title: 'Analyzing Example 2: $4^x = 16$',
  steps: [
    {
      id: 'ee2a-identify-common-base',
      question: "For $4^x = 16$, we need a common base. What is a base that works for both 4 and 16?",
      questionType: 'text',
      options: [
        "Base 10",
        "Base 3",
        "Base 2",
        "Base 5"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Both 4 and 16 are powers of 2. $4 = 2^2$ and $16 = 2^4$. Using base 2 allows us to rewrite both sides with the same base.",
      explanationType: 'text'
    },
    {
      id: 'ee2a-rewrite-equation',
      question: "Rewrite both sides of $4^x = 16$ using base 2.",
      questionType: 'text',
      options: [
        "$(2^2)^x = 2^4$, which simplifies to $2^{2x} = 2^4$.",
        "$2^x = 2^4$, because $4 = 2$.",
        "$(2^2)^x = 2^{x+2}$.",
        "$2^{2x} = 2^{16}$."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "First, rewrite 4 and 16: $4^x = (2^2)^x$ and $16 = 2^4$. Using the power rule $(a^m)^n = a^{mn}$, $(2^2)^x = 2^{2x}$. So the equation becomes $2^{2x} = 2^4$.",
      explanationType: 'text'
    },
    {
      id: 'ee2a-equate-exponents',
      question: "We have $2^{2x} = 2^4$. Now, equate the exponents. What equation do we get?",
      questionType: 'text',
      options: [
        "$2x = 4$",
        "$2 + x = 4$",
        "$2^x = 4$",
        "$x = 4$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "With the same base (2), the exponents must be equal. Therefore, $2x = 4$.",
      explanationType: 'text'
    },
    {
      id: 'ee2a-solve-for-x',
      question: "Solve the equation $2x = 4$ for $x$.",
      questionType: 'text',
      options: [
        "$x = 2$",
        "$x = 8$",
        "$x = 6$",
        "$x = 1$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Divide both sides of the equation $2x = 4$ by 2: $x = \\frac{4}{2} = 2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Example 2 Solution", "$x = 2$");
      }
    }
  ]
};

// --- Multi-Step Question 4: Analyzing Example 3 (Negative Exponent) ---
const eeExample3AnalysisQuestion: MultiStepQuestion = {
  id: 'ee-example3-analysis',
  title: 'Analyzing Example 3: $5^{x-1} = \\frac{1}{25}$',
  steps: [
    {
      id: 'ee3a-rewrite-negative-exponent',
      question: "To solve $5^{x-1} = \\frac{1}{25}$, we need to rewrite $\\frac{1}{25}$ using a power of 5. How can we do this?",
      questionType: 'text',
      options: [
        "$\\frac{1}{25} = 5^{-1}$",
        "$\\frac{1}{25} = 25^{-1} = (5^2)^{-1} = 5^{-2}$",
        "$\\frac{1}{25} = 5^{2}$",
        "$\\frac{1}{25} = 5^{0}$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "We know that $\\frac{1}{a} = a^{-1}$. So, $\\frac{1}{25} = 25^{-1}$. Since $25 = 5^2$, we have $25^{-1} = (5^2)^{-1}$. Using the power rule, $(5^2)^{-1} = 5^{2 \\times (-1)} = 5^{-2}$.",
      explanationType: 'text'
    },
    {
      id: 'ee3a-equate-exponents',
      question: "The equation is now $5^{x-1} = 5^{-2}$. Equate the exponents.",
      questionType: 'text',
      options: [
        "$x - 1 = -2$",
        "$x = -2$",
        "$x - 1 = 2$",
        "$x + 1 = -2$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "With the same base (5), the exponents must be equal. Therefore, $x - 1 = -2$.",
      explanationType: 'text'
    },
    {
      id: 'ee3a-solve-for-x',
      question: "Solve $x - 1 = -2$ for $x$.",
      questionType: 'text',
      options: [
        "$x = -1$",
        "$x = -3$",
        "$x = 1$",
        "$x = 3$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Add 1 to both sides of the equation $x - 1 = -2$: $x = -2 + 1 = -1$.",
      explanationType: 'text'
    },
    {
      id: 'ee3a-check-solution',
      question: "Check the solution $x = -1$ in the original equation $5^{x-1} = \\frac{1}{25}$.",
      questionType: 'text',
      options: [
        "LHS: $5^{-1-1} = 5^{-2} = \\frac{1}{25}$. RHS: $\\frac{1}{25}$. Is LHS = RHS? Yes.",
        "LHS: $5^{-1-1} = 5^{0} = 1$. RHS: $\\frac{1}{25}$. Is LHS = RHS? No.",
        "LHS: $5^{-1} = \\frac{1}{5}$. RHS: $\\frac{1}{25}$. Is LHS = RHS? No.",
        "LHS: $5^{-1-1} = 5^{2} = 25$. RHS: $\\frac{1}{25}$. Is LHS = RHS? No."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = -1$ into the left side: $5^{x-1} = 5^{-1-1} = 5^{-2}$. We know $5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}$. This matches the right side, confirming the solution is correct.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Example 3 Solution", "$x = -1$");
      }
    }
  ]
};

// --- Multi-Step Question 5: Solving the Practice Example ---
const eePracticeExampleQuestion: MultiStepQuestion = {
  id: 'ee-practice-example',
  title: 'Solving the Practice Example: $2^{x+1} = 8$',
  steps: [
    {
      id: 'eep-rewrite-base',
      question: "To solve $2^{x+1} = 8$, rewrite 8 as a power of 2.",
      questionType: 'text',
      options: [
        "$8 = 2^2$",
        "$8 = 2^3$",
        "$8 = 2^4$",
        "$8 = 2^1 \\times 4$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "We know that $2 \\times 2 \\times 2 = 8$. Therefore, $8 = 2^3$.",
      explanationType: 'text'
    },
    {
      id: 'eep-form-equation',
      question: "Rewrite the equation $2^{x+1} = 8$ using the power of 2.",
      questionType: 'text',
      options: [
        "$2^{x+1} = 2^2$",
        "$2^{x+1} = 2^3$",
        "$2^{x} \\times 2^{1} = 2^3$",
        "$2^{x+1} = 3^2$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Replacing 8 with $2^3$, the equation becomes $2^{x+1} = 2^3$.",
      explanationType: 'text'
    },
    {
      id: 'eep-equate-exponents',
      question: "With $2^{x+1} = 2^3$, equate the exponents.",
      questionType: 'text',
      options: [
        "$x + 1 = 3$",
        "$x = 3$",
        "$x + 1 = 2$",
        "$x \\times 1 = 3$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Since the bases are the same, the exponents must be equal. This gives us the equation $x + 1 = 3$.",
      explanationType: 'text'
    },
    {
      id: 'eep-solve-for-x',
      question: "Solve $x + 1 = 3$ for $x$.",
      questionType: 'text',
      options: [
        "$x = 2$",
        "$x = 4$",
        "$x = 1$",
        "$x = 3$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Subtract 1 from both sides of the equation $x + 1 = 3$: $x = 3 - 1 = 2$.",
      explanationType: 'text'
    },
    {
      id: 'eep-check-solution',
      question: "Check the solution $x = 2$ in the original equation $2^{x+1} = 8$.",
      questionType: 'text',
      options: [
        "LHS: $2^{2+1} = 2^3 = 8$. RHS: $8$. Is LHS = RHS? Yes.",
        "LHS: $2^{2+1} = 2^2 = 4$. RHS: $8$. Is LHS = RHS? No.",
        "LHS: $2^{2} + 1 = 4 + 1 = 5$. RHS: $8$. Is LHS = RHS? No.",
        "LHS: $2 \\times 2 + 1 = 5$. RHS: $8$. Is LHS = RHS? No."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = 2$ into the left side: $2^{x+1} = 2^{2+1} = 2^3 = 8$. This equals the right side (8), confirming our solution is correct.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Practice Example Solution", "$x = 2$");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const exponentialEquationsQuestions: MultiStepQuestion[] = [
  eeConceptQuestion,
  eeExample1AnalysisQuestion,
  eeExample2AnalysisQuestion,
  eeExample3AnalysisQuestion,
  eePracticeExampleQuestion
];

const SolvingExponentialEquations: React.FC = () => {
  const eeRules = [
    "Identify if both sides of the equation can be written with the same base.",
    "Rewrite numbers as powers of a common base (e.g., $8 = 2^3$, $9 = 3^2$, $\\frac{1}{a} = a^{-1}$).",
    "Use the power rule $(a^m)^n = a^{mn}$ to simplify expressions if necessary.",
    "Once both sides have the same base, set the exponents equal to each other.",
    "Solve the resulting equation (usually linear) for the variable.",
    "Always check your solution by substituting it back into the original equation.",
    "If bases cannot be easily matched, other methods (like logarithms) are needed (covered later)."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Solving Exponential Equations - Same Base Method"
        icon="📈" // Chart icon, often associated with exponential growth/decay
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={eeRules}
        rulesTitle="Same Base Method Rules:"
        questions={exponentialEquationsQuestions}
        renderSharedValuesSummary={renderExponentialEquationsSummary}
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default SolvingExponentialEquations;