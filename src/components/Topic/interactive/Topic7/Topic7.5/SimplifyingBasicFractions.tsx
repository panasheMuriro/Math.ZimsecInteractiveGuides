/* eslint-disable @typescript-eslint/no-explicit-any */
// SimplifyingBasicFractionsQuiz.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

// --- Helper Function for Summary (if needed) ---
const renderSimplifyFractionsSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No specific fractions simplified.</p>;
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
const sbfConceptQuestion: MultiStepQuestion = {
  id: 'sbf-concept',
  title: 'Understanding Fraction Simplification',
  steps: [
    {
      id: 'sbf-def',
      question: "What is the main goal when simplifying a fraction like $\\frac{6x^2}{9x}$?",
      questionType: 'text',
      options: [
        "To make the numerator and denominator larger",
        "To express it in its simplest form by canceling common factors",
        "To solve for the value of $x$",
        "To add the numerator and denominator"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Simplifying a fraction means reducing it to its lowest terms by dividing both the numerator and the denominator by their greatest common factor (GCF).",
      explanationType: 'text'
    },
    {
      id: 'sbf-steps',
      question: "Which of these is NOT a standard step for simplifying algebraic fractions?",
      questionType: 'text',
      options: [
        "Factor the numerator and denominator completely",
        "Cancel common factors from the numerator and denominator",
        "Multiply the numerator by the denominator",
        "Write the final simplified fraction"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "Multiplying the numerator by the denominator is not a step in simplification. The standard steps involve factoring and then canceling common factors.",
      explanationType: 'text'
    },
    {
      id: 'sbf-why-factor',
      question: "Why is it important to factor the numerator and denominator completely before simplifying?",
      questionType: 'text',
      options: [
        "To make the numbers bigger",
        "To easily identify and cancel all common factors",
        "To change the value of the fraction",
        "To make the fraction more complicated"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "Factoring completely breaks down the numerator and denominator into their prime components (numbers and variables). This makes it easy to see which factors are common and can be canceled out.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Simplifying with Variables ---
const simplifyVariablesQuestion: MultiStepQuestion = {
  id: 'simplify-variables',
  title: 'Simplifying with Numbers and Variables',
  steps: [
    {
      id: 'sv-identify',
      question: "Simplify $\\frac{10y^3}{15y}$. What is the GCD of the coefficients 10 and 15?",
      questionType: 'text',
      options: [
        "$1$",
        "$5$",
        "$10$",
        "$150$"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "The Greatest Common Divisor (GCD) is the largest number that divides both coefficients evenly. Factors of 10: 1, 2, 5, 10. Factors of 15: 1, 3, 5, 15. The GCD is 5.",
      explanationType: 'text'
    },
    {
      id: 'sv-factor-numerator',
      question: "Factor the numerator $10y^3$. What is one way to write it?",
      questionType: 'text',
      options: [
        "$10 \\times y \\times y \\times y$",
        "$2 \\times 5 \\times y^3$",
        "$10 \\times y^3$",
        "All of the above are correct ways to factor it"
      ],
      optionType: 'text', // Options contain text
      correct: 3, // Index of the correct option
      explanation: "Factoring means expressing as a product. $10y^3$ can be written as $10 \\times y^3$, or broken down further as $2 \\times 5 \\times y \\times y \\times y$. All representations are valid factorizations.",
      explanationType: 'text'
    },
    {
      id: 'sv-cancel-factors',
      question: "After factoring, $\\frac{10y^3}{15y} = \\frac{2 \\times 5 \\times y \\times y \\times y}{3 \\times 5 \\times y}$. What common factors can be canceled?",
      questionType: 'text',
      options: [
        "$5$ and $y$",
        "$2$ and $y$",
        "$3$ and $y$",
        "$10$ and $15$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Look for factors that appear in both the numerator and the denominator. Both have a factor of $5$ and a factor of $y$. These can be canceled out.",
      explanationType: 'text'
    },
    {
      id: 'sv-write-result',
      question: "Cancel the common factors $5$ and $y$ from $\\frac{2 \\times 5 \\times y \\times y \\times y}{3 \\times 5 \\times y}$. What is the simplified fraction?",
      questionType: 'text',
      options: [
        "$\\frac{2y^2}{3}$",
        "$\\frac{2y}{3}$",
        "$\\frac{2 \\times y \\times y}{3}$",
        "Both $\\frac{2y^2}{3}$ and $\\frac{2 \\times y \\times y}{3}$ are correct"
      ],
      optionType: 'text', // Options contain text
      correct: 3, // Index of the correct option
      explanation: "Cancel one $5$ from top and bottom, and one $y$ from top and bottom. This leaves $\\frac{2 \\times y \\times y}{3}$ in the numerator and $3$ in the denominator. $y \\times y = y^2$. So, the result is $\\frac{2y^2}{3}$ or $\\frac{2 \\times y^2}{3}$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Simplified (10y³/15y)", "2y²/3");
      }
    }
  ]
};

// --- Multi-Step Question 3: Simplifying with HCF ---
const simplifyHCFQuestion: MultiStepQuestion = {
  id: 'simplify-hcf',
  title: 'Simplifying Using the HCF',
  steps: [
    {
      id: 'shcf-factorize',
      question: "Simplify $\\frac{18x^2}{24x}$. First, factorize the coefficients. What is the prime factorization of 18?",
      questionType: 'text',
      options: [
        "$2 \\times 9$",
        "$3 \\times 6$",
        "$2 \\times 3^2$",
        "$18 \\times 1$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Prime factorization breaks a number down into a product of prime numbers. $18 = 2 \\times 9 = 2 \\times 3 \\times 3 = 2 \\times 3^2$.",
      explanationType: 'text'
    },
    {
      id: 'shcf-factorize-denom',
      question: "What is the prime factorization of the denominator's coefficient, 24?",
      questionType: 'text',
      options: [
        "$2 \\times 12$",
        "$3 \\times 8$",
        "$2^3 \\times 3$",
        "$4 \\times 6$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Factorize 24: $24 = 2 \\times 12 = 2 \\times 2 \\times 6 = 2 \\times 2 \\times 2 \\times 3 = 2^3 \\times 3$.",
      explanationType: 'text'
    },
    {
      id: 'shcf-find-hcf',
      question: "Using the factorizations $18 = 2 \\times 3^2$ and $24 = 2^3 \\times 3$, what is the HCF?",
      questionType: 'text',
      options: [
        "$2^3 \\times 3^2 = 72$",
        "$2 \\times 3 = 6$",
        "$2^1 \\times 3^1 = 6$",
        "$1$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "To find the HCF, take the lowest power of all common prime factors. The common primes are 2 and 3. Lowest power of 2: $\\min(2^1, 2^3) = 2^1$. Lowest power of 3: $\\min(3^2, 3^1) = 3^1$. HCF = $2^1 \\times 3^1 = 2 \\times 3 = 6$.",
      explanationType: 'text'
    },
    {
      id: 'shcf-cancel-hcf',
      question: "Divide both the numerator and denominator of $\\frac{18x^2}{24x}$ by their HCF, 6. What do you get for the coefficients?",
      questionType: 'text',
      options: [
        "$\\frac{18}{6} = 3$ and $\\frac{24}{6} = 4$",
        "$\\frac{18}{6} = 6$ and $\\frac{24}{6} = 8$",
        "$\\frac{18}{6} = 12$ and $\\frac{24}{6} = 18$",
        "$\\frac{18}{6} = 3$ and $\\frac{24}{6} = 8$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Perform the divisions: $18 \\div 6 = 3$ and $24 \\div 6 = 4$. So the fraction becomes $\\frac{3x^2}{4x}$.",
      explanationType: 'text'
    },
    {
      id: 'shcf-cancel-vars',
      question: "Now simplify $\\frac{3x^2}{4x}$ by canceling the common variable factor. What is the result?",
      questionType: 'text',
      options: [
        "$\\frac{3x}{4}$",
        "$\\frac{3}{4x}$",
        "$\\frac{3x^2}{4}$",
        "$\\frac{3}{4}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The common variable factor is $x$. $x^2 = x \\times x$. So, $\\frac{3x^2}{4x} = \\frac{3 \\times x \\times x}{4 \\times x}$. Cancel one $x$ from the top and bottom. This leaves $\\frac{3x}{4}$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Simplified (18x²/24x)", "3x/4");
      }
    }
  ]
};

// --- Multi-Step Question 4: Simplifying with Factoring (Difference of Squares) ---
const simplifyFactoringQuestion: MultiStepQuestion = {
  id: 'simplify-factoring',
  title: 'Simplifying by Factoring',
  steps: [
    {
      id: 'sf-recognize-pattern',
      question: "Simplify $\\frac{x^2 - 9}{x + 3}$. What special pattern do you recognize in the numerator $x^2 - 9$?",
      questionType: 'text',
      options: [
        "It's a perfect square trinomial",
        "It's the difference of two squares",
        "It's a sum of two squares",
        "It cannot be factored"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "$x^2 - 9$ can be written as $x^2 - 3^2$. This is the difference of two squares, which follows the pattern $a^2 - b^2 = (a+b)(a-b)$.",
      explanationType: 'text'
    },
    {
      id: 'sf-factor-numerator',
      question: "Factor the numerator $x^2 - 9$ using the difference of squares pattern. What is the factored form?",
      questionType: 'text',
      options: [
        "$(x - 3)^2$",
        "$(x + 3)^2$",
        "$(x + 3)(x - 3)$",
        "$(x - 3)(x - 3)$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Apply the difference of squares formula $a^2 - b^2 = (a+b)(a-b)$ where $a = x$ and $b = 3$. So, $x^2 - 9 = x^2 - 3^2 = (x + 3)(x - 3)$.",
      explanationType: 'text'
    },
    {
      id: 'sf-write-fraction',
      question: "Rewrite the original fraction $\\frac{x^2 - 9}{x + 3}$ using the factored numerator.",
      questionType: 'text',
      options: [
        "$\\frac{(x + 3)(x - 3)}{x + 3}$",
        "$\\frac{(x + 3)(x - 3)}{x - 3}$",
        "$\\frac{(x + 3) + (x - 3)}{x + 3}$",
        "$\\frac{x + 3}{(x + 3)(x - 3)}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Substitute the factored form of the numerator into the fraction: $\\frac{x^2 - 9}{x + 3} = \\frac{(x + 3)(x - 3)}{x + 3}$.",
      explanationType: 'text'
    },
    {
      id: 'sf-cancel-common',
      question: "In the fraction $\\frac{(x + 3)(x - 3)}{x + 3}$, what common factor can be canceled?",
      questionType: 'text',
      options: [
        "$(x + 3)$",
        "$(x - 3)$",
        "$x$",
        "$3$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The factor $(x + 3)$ appears in both the numerator and the denominator. It can be canceled out, provided $x \\neq -3$ to avoid division by zero.",
      explanationType: 'text'
    },
    {
      id: 'sf-final-result',
      question: "Cancel the common factor $(x + 3)$ from $\\frac{(x + 3)(x - 3)}{x + 3}$. What is the simplified result?",
      questionType: 'text',
      options: [
        "$x - 3$",
        "$x + 3$",
        "$\\frac{x - 3}{x + 3}$",
        "$\\frac{x + 3}{x - 3}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Canceling $(x + 3)$ from the top and bottom leaves $(x - 3)$ in the numerator and $1$ in the denominator. $\\frac{(x + 3)(x - 3)}{x + 3} = \\frac{(x - 3)}{1} = x - 3$. Remember the restriction: $x \\neq -3$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Simplified ((x²-9)/(x+3))", "x - 3 (x≠-3)");
      }
    }
  ]
};

// --- Multi-Step Question 5: Applying the Method ---
const applyMethodQuestion: MultiStepQuestion = {
  id: 'apply-method',
  title: 'Applying Simplification',
  steps: [
    {
      id: 'am-analyze',
      question: "Simplify $\\frac{12a^2b}{18ab^2}$. What is the GCD of the coefficients 12 and 18?",
      questionType: 'text',
      options: [
        "$2$",
        "$3$",
        "$6$",
        "$1$"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. The largest common factor is 6.",
      explanationType: 'text'
    },
    {
      id: 'am-factorize',
      question: "Factorize the numerator and denominator using the GCD and variables. $\\frac{12a^2b}{18ab^2} = \\frac{6 \\times ? \\times a^2b}{6 \\times ? \\times ab^2}$. What terms go in the '?'?",
      questionType: 'text',
      options: [
        "Numerator: $2$, Denominator: $3$",
        "Numerator: $3$, Denominator: $2$",
        "Numerator: $12$, Denominator: $18$",
        "Numerator: $a^2$, Denominator: $b^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "$12 = 6 \\times 2$ and $18 = 6 \\times 3$. So, $\\frac{12a^2b}{18ab^2} = \\frac{6 \\times 2 \\times a^2b}{6 \\times 3 \\times ab^2}$.",
      explanationType: 'text'
    },
    {
      id: 'am-cancel-hcf',
      question: "Cancel the common factor of 6 from the numerator and denominator. What is the resulting fraction?",
      questionType: 'text',
      options: [
        "$\\frac{2a^2b}{3ab^2}$",
        "$\\frac{2 \\times a^2b}{3 \\times ab^2}$",
        "Both $\\frac{2a^2b}{3ab^2}$ and $\\frac{2 \\times a^2b}{3 \\times ab^2}$ are correct",
        "$\\frac{12a^2b}{18ab^2}$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Canceling the 6 gives $\\frac{2 \\times a^2b}{3 \\times ab^2}$ or equivalently $\\frac{2a^2b}{3ab^2}$.",
      explanationType: 'text'
    },
    {
      id: 'am-cancel-vars',
      question: "Now, cancel the common variable factors from $\\frac{2a^2b}{3ab^2}$. Recall $a^2 = a \\times a$ and $b^2 = b \\times b$. What can be canceled?",
      questionType: 'text',
      options: [
        "One $a$ and one $b$",
        "Two $a$'s and two $b$'s",
        "One $a$ and two $b$'s",
        "Two $a$'s and one $b$"
      ],
      optionType: 'text', // Options are plain text
      correct: 0, // Index of the correct option
      explanation: "The numerator has $a \\times a$ and $b$. The denominator has $a$ and $b \\times b$. They share one $a$ and one $b$ in common. These can be canceled.",
      explanationType: 'text'
    },
    {
      id: 'am-write-result',
      question: "Cancel one $a$ and one $b$ from $\\frac{2a^2b}{3ab^2}$. What is the final simplified fraction?",
      questionType: 'text',
      options: [
        "$\\frac{2a}{3b}$",
        "$\\frac{2ab}{3}$",
        "$\\frac{2}{3ab}$",
        "$\\frac{2b}{3a}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "After canceling one $a$ (leaving $a$ on top) and one $b$ (leaving $b$ on the bottom): Numerator: $2 \\times a$. Denominator: $3 \\times b$. The result is $\\frac{2a}{3b}$. Remember the restrictions: $a \\neq 0$ and $b \\neq 0$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Simplified (12a²b/18ab²)", "2a/3b (a,b≠0)");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const simplifyingBasicFractionsQuestions: MultiStepQuestion[] = [
  sbfConceptQuestion,
  simplifyVariablesQuestion,
  simplifyHCFQuestion,
  simplifyFactoringQuestion,
  applyMethodQuestion
];


const SimplifyingBasicFractions: React.FC = () => {
  const sbfRules = [
    "Factor the numerator and denominator completely (numbers into primes, variables into powers).",
    "Identify common factors (numbers, variables, or expressions) in the numerator and denominator.",
    "Cancel out the common factors by dividing them from both the numerator and denominator.",
    "Write the final result as a single fraction with the remaining factors.",
    "State any restrictions on the variable(s) that would make the original denominator zero."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Simplifying Basic Fractions"
        icon="➗" // Or any other relevant icon like "🧮" or "📉"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={sbfRules}
        rulesTitle="Simplification Rules:"
        questions={simplifyingBasicFractionsQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderSimplifyFractionsSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default SimplifyingBasicFractions;