/* eslint-disable @typescript-eslint/no-explicit-any */

import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary (if needed) ---
const renderSubstitutionSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No specific values calculated.</p>;
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

// --- Multi-Step Question 1: Basic Substitution ---
const basicSubstitutionQuestion: MultiStepQuestion = {
  id: 'basic-substitution',
  title: 'Basic Substitution with Positive Numbers',
  steps: [
    {
      id: 'bs-identify-variables',
      question: "In the expression $3x + 2y$, which are the variables?",
      questionType: 'text',
      options: [
        "$3$ and $2$",
        "$x$ and $y$",
        "$3x$ and $2y$",
        "$+$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Variables are the letters that represent unknown or changing values. In $3x + 2y$, the variables are $x$ and $y$. The numbers $3$ and $2$ are coefficients.",
      explanationType: 'text'
    },
    {
      id: 'bs-substitute-values',
      question: "Evaluate $3x + 2y$ when $x = 2$ and $y = 3$. What is the first step after substitution?",
      questionType: 'text',
      options: [
        "Add $3 + 2$",
        "Replace $x$ with $2$ and $y$ with $3$: $3(2) + 2(3)$",
        "Multiply $x \\times y$",
        "Subtract $3 - 2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Substitution means replacing each variable with its given value. Replace $x$ with $2$ and $y$ with $3$ to get $3(2) + 2(3)$.",
      explanationType: 'text'
    },
    {
      id: 'bs-perform-multiplication',
      question: "Calculate the multiplications in $3(2) + 2(3)$.",
      questionType: 'text',
      options: [
        "$6 + 6$",
        "$5 + 5$",
        "$9 + 9$",
        "$3 + 2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Perform the multiplications first: $3 \\times 2 = 6$ and $2 \\times 3 = 6$. This gives $6 + 6$.",
      explanationType: 'text'
    },
    {
      id: 'bs-final-addition',
      question: "Add the results: $6 + 6$. What is the final value of $3x + 2y$ when $x = 2$ and $y = 3$?",
      questionType: 'text',
      options: [
        "$12$",
        "$36$",
        "$0$",
        "$10$"
      ],
      optionType: 'text',
      correct: 0, // Index of the correct option
      explanation: "Add the results of the multiplications: $6 + 6 = 12$. The final value is $12$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Basic Substitution Result", "12");
      }
    }
  ]
};

// --- Multi-Step Question 2: Substitution with Negatives ---
const substitutionWithNegativesQuestion: MultiStepQuestion = {
  id: 'substitution-with-negatives',
  title: 'Handling Negative Numbers',
  steps: [
    {
      id: 'snw-substitute-negative',
      question: "Evaluate $5a - 3b$ when $a = -1$ and $b = 2$. What does the expression become after substitution?",
      questionType: 'text',
      options: [
        "$5(-1) - 3(2)$",
        "$5 - 1 - 3 \\times 2$",
        "$-5 - 3 \\times 2$",
        "$5 \\times -1 - 3b$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Replace $a$ with $-1$ and $b$ with $2$. This gives $5(-1) - 3(2)$.",
      explanationType: 'text'
    },
    {
      id: 'snw-multiply-with-negative',
      question: "Calculate the multiplications in $5(-1) - 3(2)$.",
      questionType: 'text',
      options: [
        "$-5 - 6$",
        "$5 - 6$",
        "$-5 - 3$",
        "$5 - 3$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Multiply: $5 \\times (-1) = -5$ and $3 \\times 2 = 6$. The expression becomes $-5 - 6$.",
      explanationType: 'text'
    },
    {
      id: 'snw-subtract-negatives',
      question: "Calculate $-5 - 6$.",
      questionType: 'text',
      options: [
        "$-11$",
        "$1$",
        "$11$",
        "$-1$"
      ],
      optionType: 'text',
      correct: 0, // Index of the correct option
      explanation: "Subtracting a positive number from a negative number makes the result more negative. $-5 - 6 = -11$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("With Negatives Result", "-11");
      }
    }
  ]
};

// --- Multi-Step Question 3: Substitution with Exponents ---
const substitutionWithExponentsQuestion: MultiStepQuestion = {
  id: 'substitution-with-exponents',
  title: 'Substituting into Expressions with Exponents',
  steps: [
    {
      id: 'sew-identify-exponent',
      question: "In the expression $x^2 + 2y$, which part involves an exponent?",
      questionType: 'text',
      options: [
        "$x^2$",
        "$2y$",
        "$+$",
        "Both $x^2$ and $2y$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "$x^2$ means $x$ is raised to the power of 2. The term $2y$ is multiplication, not an exponent.",
      explanationType: 'text'
    },
    {
      id: 'sew-substitute-exponent',
      question: "Evaluate $x^2 + 2y$ when $x = 3$ and $y = -1$. What is the expression after substitution?",
      questionType: 'text',
      options: [
        "$3^2 + 2(-1)$",
        "$3 \\times 2 + 2(-1)$",
        "$9 + 2(-1)$",
        "$3^2 + 2 \\times -1$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Replace $x$ with $3$ and $y$ with $-1$. This gives $3^2 + 2(-1)$.",
      explanationType: 'text'
    },
    {
      id: 'sew-calculate-exponent',
      question: "Calculate the exponent $3^2$ in the expression $3^2 + 2(-1)$.",
      questionType: 'text',
      options: [
        "$6$",
        "$9$",
        "$5$",
        "$1$"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "An exponent means multiplying the base by itself. $3^2 = 3 \\times 3 = 9$.",
      explanationType: 'text'
    },
    {
      id: 'sew-complete-calculation',
      question: "Continue evaluating $3^2 + 2(-1)$ with $3^2 = 9$. What is the next step?",
      questionType: 'text',
      options: [
        "Add $9 + 2$",
        "Calculate $2 \\times (-1)$",
        "Subtract $9 - 1$",
        "Add $3 + 2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Follow the order of operations. After calculating the exponent, perform multiplication. Calculate $2 \\times (-1) = -2$. The expression is now $9 + (-2)$.",
      explanationType: 'text'
    },
    {
      id: 'sew-final-result',
      question: "Add $9 + (-2)$. What is the final result?",
      questionType: 'text',
      options: [
        "$11$",
        "$7$",
        "$-7$",
        "$-11$"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "Adding a negative number is the same as subtracting. $9 + (-2) = 9 - 2 = 7$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("With Exponents Result", "7");
      }
    }
  ]
};

// --- Multi-Step Question 4: Order of Operations ---
const orderOfOperationsQuestion: MultiStepQuestion = {
  id: 'order-of-operations',
  title: 'Applying Order of Operations (PEMDAS)',
  steps: [
    {
      id: 'oop-identify-order',
      question: "When evaluating $2 + 3 \\times 4$ after substituting values, which operation do you perform first?",
      questionType: 'text',
      options: [
        "Addition ($2 + 3$)",
        "Multiplication ($3 \\times 4$)",
        "It doesn't matter, do either first",
        "Subtract if possible"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "According to the order of operations (PEMDAS/BODMAS), multiplication is performed before addition. You calculate $3 \\times 4$ first.",
      explanationType: 'text'
    },
    {
      id: 'oop-apply-to-expression',
      question: "Evaluate $x + y \\times z$ when $x = 1$, $y = 2$, $z = 3$. What is the correct order of steps?",
      questionType: 'text',
      options: [
        "1. Add $x + y$. 2. Multiply by $z$.",
        "1. Multiply $y \\times z$. 2. Add $x$.",
        "1. Add $x + z$. 2. Multiply by $y$.",
        "1. Multiply $x \\times y$. 2. Add $z$."
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Substitute first: $1 + 2 \\times 3$. Multiplication comes before addition. Step 1: $2 \\times 3 = 6$. Step 2: $1 + 6 = 7$.",
      explanationType: 'text'
    },
    {
      id: 'oop-calculate-multiplication',
      question: "After substituting into $x + y \\times z$ with $x = 1$, $y = 2$, $z = 3$, calculate $y \\times z$. What is $2 \\times 3$?",
      questionType: 'text',
      options: [
        "$5$",
        "$6$",
        "$9$",
        "$1$"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "Perform the multiplication: $2 \\times 3 = 6$.",
      explanationType: 'text'
    },
    {
      id: 'oop-final-addition',
      question: "Now add $x$ to the result of $y \\times z$. Calculate $1 + 6$. What is the final result?",
      questionType: 'text',
      options: [
        "$7$",
        "$6$",
        "$16$",
        "$5$"
      ],
      optionType: 'text',
      correct: 0, // Index of the correct option
      explanation: "Add the value of $x$ (which is $1$) to the result of the multiplication ($6$). $1 + 6 = 7$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Order of Operations Result", "7");
      }
    }
  ]
};

// --- Multi-Step Question 5: Complex Expression ---
const complexExpressionQuestion: MultiStepQuestion = {
  id: 'complex-expression',
  title: 'Substituting into a Complex Expression',
  steps: [
    {
      id: 'cew-substitute-all',
      question: "Evaluate $a^2 - 2ab + b^2$ when $a = 3$ and $b = 1$. What does the expression become after substitution?",
      questionType: 'text',
      options: [
        "$3^2 - 2(3)(1) + 1^2$",
        "$9 - 6 + 1$",
        "$a \\times a - 2 \\times a \\times b + b \\times b$",
        "$3 \\times 2 - 2 \\times 3 \\times 1 + 1 \\times 2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Replace every instance of $a$ with $3$ and every instance of $b$ with $1$. This gives $3^2 - 2(3)(1) + 1^2$.",
      explanationType: 'text'
    },
    {
      id: 'cew-calculate-exponents',
      question: "Calculate the exponents in $3^2 - 2(3)(1) + 1^2$.",
      questionType: 'text',
      options: [
        "$6 - 2(3)(1) + 2$",
        "$9 - 2(3)(1) + 1$",
        "$9 - 2(3)(1) + 2$",
        "$6 - 2(3)(1) + 1$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Calculate $3^2 = 9$ and $1^2 = 1$. The expression becomes $9 - 2(3)(1) + 1$.",
      explanationType: 'text'
    },
    {
      id: 'cew-perform-multiplication',
      question: "Calculate the multiplication $2(3)(1)$ in $9 - 2(3)(1) + 1$.",
      questionType: 'text',
      options: [
        "$2$",
        "$5$",
        "$6$",
        "$9$"
      ],
      optionType: 'text',
      correct: 2, // Index of the correct option
      explanation: "Multiply the numbers: $2 \\times 3 \\times 1 = 6$. The expression is now $9 - 6 + 1$.",
      explanationType: 'text'
    },
    {
      id: 'cew-subtract-first',
      question: "In $9 - 6 + 1$, which operation do you perform first (left to right)?",
      questionType: 'text',
      options: [
        "Addition ($6 + 1$)",
        "Subtraction ($9 - 6$)",
        "It doesn't matter",
        "Multiply if possible"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "When addition and subtraction are left, you perform them from left to right. First, calculate $9 - 6$.",
      explanationType: 'text'
    },
    {
      id: 'cew-complete-calculation',
      question: "Calculate $9 - 6 + 1$ from left to right. What is the final result?",
      questionType: 'text',
      options: [
        "$4$",
        "$14$",
        "$3$",
        "$10$"
      ],
      optionType: 'text',
      correct: 0, // Index of the correct option
      explanation: "First, $9 - 6 = 3$. Then, $3 + 1 = 4$. The final result is $4$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Complex Expression Result", "4");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const substitutionInExpressionsQuestions: MultiStepQuestion[] = [
  basicSubstitutionQuestion,
  substitutionWithNegativesQuestion,
  substitutionWithExponentsQuestion,
  orderOfOperationsQuestion,
  complexExpressionQuestion
];

const SubstitutionInExpressions: React.FC = () => {
  const substitutionRules = [
    "Identify all variables in the expression.",
    "Replace each variable with its given numerical value.",
    "Use parentheses around substituted values, especially negatives.",
    "Follow the order of operations: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).",
    "Calculate step-by-step to avoid errors."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Substitution in Expressions"
        icon="🔢" // Or any other relevant icon like "🧮" or "✏️"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={substitutionRules}
        rulesTitle="Substitution Rules:"
        questions={substitutionInExpressionsQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderSubstitutionSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default SubstitutionInExpressions;