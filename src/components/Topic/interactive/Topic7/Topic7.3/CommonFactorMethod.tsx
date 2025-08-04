/* eslint-disable @typescript-eslint/no-explicit-any */

import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary (if needed) ---
const renderCommonFactorSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No specific factors calculated.</p>;
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

// --- Multi-Step Question 1: Concept and Steps ---
const commonFactorConceptQuestion: MultiStepQuestion = {
  id: 'cf-concept',
  title: 'Understanding the Common Factor Method',
  steps: [
    {
      id: 'cfc-def',
      question: "What is the main goal of the Common Factor Method?",
      questionType: 'text',
      options: [
        "To multiply an expression by itself",
        "To find the largest factor shared by all terms and write the expression as a product",
        "To solve for the value of the variable",
        "To expand a factored expression"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "The Common Factor Method aims to rewrite an expression as a product of two factors: the Greatest Common Factor (GCF) of all terms and another expression in parentheses.",
      explanationType: 'text'
    },
    {
      id: 'cfc-steps',
      question: "Which of these is NOT a standard step in the Common Factor Method?",
      questionType: 'text',
      options: [
        "Find the GCD of the coefficients",
        "Identify the lowest power of each variable present in all terms",
        "Write the common factor",
        "Add the coefficients of the terms"
      ],
      optionType: 'text',
      correct: 3, // Index of the correct option
      explanation: "Adding coefficients is not part of the factoring process. The standard steps involve finding the GCD, identifying variable powers, writing the common factor, dividing terms, and writing the final product.",
      explanationType: 'text'
    },
    {
      id: 'cfc-why',
      question: "Why is it important to check your factored answer?",
      questionType: 'text',
      options: [
        "To make sure the parentheses are balanced",
        "To verify that expanding the factors gives back the original expression",
        "To find the numerical value of the expression",
        "To make the expression look more complicated"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "Checking by expanding (multiplying) the factors ensures that no mistakes were made during the factoring process and that the result is equivalent to the original expression.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Finding the Common Factor (Simple) ---
const findCommonFactorQuestion: MultiStepQuestion = {
  id: 'find-common-factor',
  title: 'Finding the Common Factor',
  steps: [
    {
      id: 'fcf-analyze',
      question: "To factor $8x^3 + 12x^2$, what should you find first?",
      questionType: 'text',
      options: [
        "The sum of the coefficients",
        "The GCD of the coefficients (8 and 12)",
        "The highest power of $x$",
        "The difference of the terms"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The first step is to find the Greatest Common Divisor (GCD) of the numerical coefficients of the terms.",
      explanationType: 'text'
    },
    {
      id: 'fcf-find-gcd',
      question: "What is the GCD of the coefficients 8 and 12?",
      questionType: 'text',
      options: [
        "$2$",
        "$4$",
        "$6$",
        "$24$"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "Factors of 8: 1, 2, 4, 8. Factors of 12: 1, 2, 3, 4, 6, 12. The largest common factor is 4.",
      explanationType: 'text'
    },
    {
      id: 'fcf-find-variable',
      question: "Looking at the variable parts $x^3$ and $x^2$, what is the lowest power of $x$ present in both?",
      questionType: 'text',
      options: [
        "$x^3$",
        "$x^2$",
        "$x^1$ (or $x$)",
        "$x^0$ (or $1$)"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "To find the common factor for variables, take the lowest exponent. The exponents are 3 and 2. The lowest is 2. So, the common variable factor is $x^2$.",
      explanationType: 'text'
    },
    {
      id: 'fcf-combine',
      question: "Combine the GCD of coefficients ($4$) and the common variable factor ($x^2$). What is the overall common factor?",
      questionType: 'text',
      options: [
        "$4 + x^2$",
        "$4x^2$",
        "$4 \\times x^2$",
        "$16x^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The common factor is the product of the GCD of the numbers and the common variable part. So, it's $4 \\times x^2 = 4x^2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Common Factor (8x³, 12x²)", "4x²");
      }
    }
  ]
};

// --- Multi-Step Question 3: Factoring Completely (Simple) ---
const factorSimpleExpressionQuestion: MultiStepQuestion = {
  id: 'factor-simple',
  title: 'Factoring a Simple Expression',
  steps: [
    {
      id: 'fse-common-factor',
      question: "We found the common factor of $8x^3 + 12x^2$ is $4x^2$. Now, divide each term by $4x^2$. What is $8x^3 \\div 4x^2$?",
      questionType: 'text',
      options: [
        "$2x$",
        "$2x^5$",
        "$4x$",
        "$2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Divide coefficients: $8 \\div 4 = 2$. Divide variables: $x^3 \\div x^2 = x^{3-2} = x^1 = x$. So, $8x^3 \\div 4x^2 = 2x$.",
      explanationType: 'text'
    },
    {
      id: 'fse-divide-term-2',
      question: "Divide the second term: $12x^2 \\div 4x^2$.",
      questionType: 'text',
      options: [
        "$3x^2$",
        "$3x$",
        "$3$",
        "$8$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Divide coefficients: $12 \\div 4 = 3$. Divide variables: $x^2 \\div x^2 = x^{2-2} = x^0 = 1$. So, $12x^2 \\div 4x^2 = 3 \\times 1 = 3$.",
      explanationType: 'text'
    },
    {
      id: 'fse-write-factored',
      question: "Write the expression as the common factor times the result of the divisions: $4x^2(\\;\\;\\;\\;\\;)$. What goes inside the parentheses?",
      questionType: 'text',
      options: [
        "$2x + 3$",
        "$2x \\times 3$",
        "$8x^3 + 12x^2$",
        "$2x - 3$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The terms resulting from the divisions are added inside the parentheses. We got $2x$ and $3$. So, the factored form is $4x^2(2x + 3)$.",
      explanationType: 'text'
    },
    {
      id: 'fse-check',
      question: "Check by expanding $4x^2(2x + 3)$. What is $4x^2 \\times 2x$?",
      questionType: 'text',
      options: [
        "$8x^2$",
        "$6x^2$",
        "$8x^3$",
        "$6x^3$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Multiply coefficients: $4 \\times 2 = 8$. Multiply variables: $x^2 \\times x = x^{2+1} = x^3$. So, $4x^2 \\times 2x = 8x^3$.",
      explanationType: 'text'
    },
    {
      id: 'fse-final-check',
      question: "Continue the check: $4x^2 \\times 3 = 12x^2$. Add the results: $8x^3 + 12x^2$. Does this match the original expression?",
      questionType: 'text',
      options: [
        "Yes, it matches $8x^3 + 12x^2$",
        "No, it's different",
        "It's close but not exact",
        "It's the negative of the original"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The expansion $8x^3 + 12x^2$ is exactly the same as the original expression. This confirms that the factoring $4x^2(2x + 3)$ is correct.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Factored Form (8x³ + 12x²)", "4x²(2x + 3)");
      }
    }
  ]
};

// --- Multi-Step Question 4: Factoring with Multiple Variables ---
const multipleVariablesFactorQuestion: MultiStepQuestion = {
  id: 'multiple-variables-factor',
  title: 'Factoring with Multiple Variables',
  steps: [
    {
      id: 'mvf-analyze',
      question: "Factor $15x^2y^3 - 10xy^2$. First, find the GCD of the coefficients 15 and 10.",
      questionType: 'text',
      options: [
        "$5$",
        "$10$",
        "$15$",
        "$1$"
      ],
      optionType: 'text',
      correct: 0, // Index of the correct option
      explanation: "Factors of 15: 1, 3, 5, 15. Factors of 10: 1, 2, 5, 10. The largest common factor is 5.",
      explanationType: 'text'
    },
    {
      id: 'mvf-variable-x',
      question: "For the variable $x$: $x^2$ (in $15x^2y^3$) and $x^1$ (in $-10xy^2$). What is the lowest power of $x$?",
      questionType: 'text',
      options: [
        "$x^2$",
        "$x^1$ (or $x$)",
        "$x^3$",
        "$x^0$ (or $1$)"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The exponents of $x$ are 2 and 1. The lowest power is $x^1$, which is simply $x$.",
      explanationType: 'text'
    },
    {
      id: 'mvf-variable-y',
      question: "For the variable $y$: $y^3$ (in $15x^2y^3$) and $y^2$ (in $-10xy^2$). What is the lowest power of $y$?",
      questionType: 'text',
      options: [
        "$y^3$",
        "$y^2$",
        "$y^1$ (or $y$)",
        "$y^5$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The exponents of $y$ are 3 and 2. The lowest power is $y^2$.",
      explanationType: 'text'
    },
    {
      id: 'mvf-common-factor',
      question: "Combine the GCD ($5$) and the lowest variable powers ($x$ and $y^2$). What is the common factor?",
      questionType: 'text',
      options: [
        "$5 + xy^2$",
        "$5xy^2$",
        "$5 \\times x \\times y^2$",
        "$5x^2y^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Multiply the GCD and the common variable parts: $5 \\times x \\times y^2 = 5xy^2$.",
      explanationType: 'text'
    },
    {
      id: 'mvf-divide-terms',
      question: "Divide each term by $5xy^2$. $15x^2y^3 \\div 5xy^2 = ?$ and $-10xy^2 \\div 5xy^2 = ?$",
      questionType: 'text',
      options: [
        "$3x$ and $-2$",
        "$3x^3y^5$ and $-2x^2y^4$",
        "$3xy$ and $-2y$",
        "$10x$ and $-5$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "First term: Coefficients $15 \\div 5 = 3$. $x$ part: $x^2 \\div x = x$. $y$ part: $y^3 \\div y^2 = y$. Result: $3xy$. \nSecond term: Coefficients $-10 \\div 5 = -2$. $x$ part: $x \\div x = 1$. $y$ part: $y^2 \\div y^2 = 1$. Result: $-2 \\times 1 \\times 1 = -2$. \nSo, the results are $3x$ and $-2$.",
      explanationType: 'text'
    },
    {
      id: 'mvf-final-result',
      question: "Write the factored form: $5xy^2(\\;\\;\\;\\;\\;)$. What goes inside the parentheses based on the divisions?",
      questionType: 'text',
      options: [
        "$3x - 2$",
        "$3x + (-2)$",
        "$3x \\times (-2)$",
        "$3x + 2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The terms from the divisions are $3x$ and $-2$. They are added inside the parentheses. $3x + (-2)$ is the same as $3x - 2$. The factored form is $5xy^2(3x - 2)$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Factored Form (15x²y³ - 10xy²)", "5xy²(3x - 2)");
      }
    }
  ]
};

// --- Multi-Step Question 5: Applying the Method ---
const applyCommonFactorQuestion: MultiStepQuestion = {
  id: 'apply-common-factor',
  title: 'Applying the Common Factor Method',
  steps: [
    {
      id: 'acf-analyze',
      question: "Factor $18a^3b - 12a^2b^2$. Identify the GCD of the coefficients 18 and 12.",
      questionType: 'text',
      options: [
        "$2$",
        "$3$",
        "$6$",
        "$1$"
      ],
      optionType: 'text',
      correct: 2, // Index of the correct option
      explanation: "Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 12: 1, 2, 3, 4, 6, 12. The largest common factor is 6.",
      explanationType: 'text'
    },
    {
      id: 'acf-variable-parts',
      question: "For variables: Lowest power of $a$ is $a^2$. Lowest power of $b$ is $b^1$ (or $b$). What is the common factor?",
      questionType: 'text',
      options: [
        "$6 + a^2b$",
        "$6a^2b$",
        "$6ab$",
        "$6a^3b^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Combine the GCD of coefficients (6) with the lowest powers of variables ($a^2$ and $b$). Common factor = $6 \\times a^2 \\times b = 6a^2b$.",
      explanationType: 'text'
    },
    {
      id: 'acf-divide-first',
      question: "Divide the first term by the common factor: $18a^3b \\div 6a^2b$. What is the result?",
      questionType: 'text',
      options: [
        "$3a$",
        "$3a^5b^2$",
        "$12a$",
        "$3ab$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Divide coefficients: $18 \\div 6 = 3$. Divide $a$: $a^3 \\div a^2 = a$. Divide $b$: $b \\div b = 1$. Result: $3 \\times a \\times 1 = 3a$.",
      explanationType: 'text'
    },
    {
      id: 'acf-divide-second',
      question: "Divide the second term by the common factor: $-12a^2b^2 \\div 6a^2b$. What is the result?",
      questionType: 'text',
      options: [
        "$-2b$",
        "$-2b^3$",
        "$-6b$",
        "$-2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Divide coefficients: $-12 \\div 6 = -2$. Divide $a$: $a^2 \\div a^2 = 1$. Divide $b$: $b^2 \\div b = b$. Result: $-2 \\times 1 \\times b = -2b$.",
      explanationType: 'text'
    },
    {
      id: 'acf-write-answer',
      question: "Combine the common factor and the results of the divisions. What is the factored form?",
      questionType: 'text',
      options: [
        "$6a^2b(3a - 2b)$",
        "$6a^2b(3a + 2b)$",
        "$6a^2b(3a \\times (-2b))$",
        "$6a^2b(3a) - 6a^2b(2b)$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The common factor is $6a^2b$. The results of the divisions are $3a$ and $-2b$. Add them inside the parentheses. Factored form = $6a^2b(3a - 2b)$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Factored Form (18a³b - 12a²b²)", "6a²b(3a - 2b)");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const commonFactorMethodQuestions: MultiStepQuestion[] = [
  commonFactorConceptQuestion,
  findCommonFactorQuestion,
  factorSimpleExpressionQuestion,
  multipleVariablesFactorQuestion,
  applyCommonFactorQuestion
];

const CommonFactorMethod: React.FC = () => {
  const commonFactorRules = [
    "Identify the Greatest Common Factor (GCF) of all terms' coefficients.",
    "For each variable, find the lowest power present in ALL terms.",
    "The common factor is the GCF multiplied by the common variables with their lowest powers.",
    "Divide each term of the original expression by this common factor.",
    "Write the final answer as: (Common Factor) $\\times$ (Result of Divisions).",
    "Always check your answer by expanding the factors."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Common Factor Method"
        icon="🔍" // Or any other relevant icon like "✖️" or "🧮"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={commonFactorRules}
        rulesTitle="Factoring Rules:"
        questions={commonFactorMethodQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderCommonFactorSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default CommonFactorMethod;