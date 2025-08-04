/* eslint-disable @typescript-eslint/no-explicit-any */
// UnderstandingLCMQuiz.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';
// renderTextWithtext is imported within the template

// --- Helper Function for Summary (if needed) ---
const renderLCMSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No specific LCMs calculated.</p>;
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
const lcmConceptQuestion: MultiStepQuestion = {
  id: 'lcm-concept',
  title: 'Understanding LCM Concept',
  steps: [
    {
      id: 'lcm-def',
      question: "What does the Lowest Common Multiple (LCM) of two or more expressions represent?",
      questionType: 'text',
      options: [
        "The largest expression that divides all of them without a remainder",
        "The smallest expression that all of them can divide into without a remainder",
        "The sum of all their factors",
        "The difference between the largest and smallest expressions"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "The LCM is the smallest expression (number, variable, or combination) that is a multiple of each of the given expressions. It's the smallest 'container' that all expressions can fit into evenly.",
      explanationType: 'text'
    },
    {
      id: 'lcm-steps',
      question: "Which of these is a standard step for finding the LCM of algebraic expressions?",
      questionType: 'text',
      options: [
        "Factorize each expression into primes and variables",
        "Identify only factors common to all expressions",
        "Take the lowest power of each factor",
        "Subtract the coefficients of the factors"
      ],
      optionType: 'text',
      correct: 0, // Index of the correct option
      explanation: "The standard first step is to factorize each expression completely into its prime numerical factors and variable bases with their exponents.",
      explanationType: 'text'
    },
    {
      id: 'lcm-why',
      question: "Why is finding the LCM useful in algebra?",
      questionType: 'text',
      options: [
        "To simplify fractions by canceling common factors",
        "Primarily for adding or subtracting algebraic fractions with different denominators",
        "To find the Highest Common Factor (HCF)",
        "To multiply expressions together"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "When adding or subtracting fractions, they need a common denominator. The LCM of the denominators provides the smallest possible common denominator, making the calculation easier.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Numerical LCM ---
const numericalLCMQuestion: MultiStepQuestion = {
  id: 'numerical-lcm',
  title: 'Finding LCM of Numbers',
  steps: [
    {
      id: 'nlcm-factorize',
      question: "To find the LCM of 12 and 18, first factorize them into prime factors. What is the prime factorization of 12?",
      questionType: 'text',
      options: [
        "$2^2 \\times 3$",
        "$2 \\times 3^2$",
        "$4 \\times 3$",
        "$2 \\times 6$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Prime factorization breaks a number down into a product of prime numbers. $12 = 4 \\times 3 = 2 \\times 2 \\times 3 = 2^2 \\times 3$. All factors (2, 3) are prime.",
      explanationType: 'text'
    },
    {
      id: 'nlcm-factorize-18',
      question: "What is the prime factorization of 18?",
      questionType: 'text',
      options: [
        "$2 \\times 3^2$",
        "$2^2 \\times 3$",
        "$6 \\times 3$",
        "$9 \\times 2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Factorize 18: $18 = 9 \\times 2 = 3 \\times 3 \\times 2 = 2 \\times 3^2$.",
      explanationType: 'text'
    },
    {
      id: 'nlcm-identify-all',
      question: "Comparing $12 = 2^2 \\times 3$ and $18 = 2 \\times 3^2$, what are the prime factors involved?",
      questionType: 'text',
      options: [
        "Only $2$",
        "Only $3$",
        "Both $2$ and $3$",
        "$2$, $3$, and $6$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Look at all prime factors present in either factorization. The primes are $2$ and $3$.",
      explanationType: 'text'
    },
    {
      id: 'nlcm-highest-powers',
      question: "For the factors $2$ and $3$, what are the highest powers present in the factorizations?",
      questionType: 'text',
      options: [
        "$2^2$ and $3^2$",
        "$2^1$ and $3^1$",
        "$2^3$ and $3^3$",
        "$2^0$ and $3^0$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "For factor $2$: The powers are $2^2$ (in 12) and $2^1$ (in 18). The highest power is $2^2$. For factor $3$: The powers are $3^1$ (in 12) and $3^2$ (in 18). The highest power is $3^2$.",
      explanationType: 'text'
    },
    {
      id: 'nlcm-final-result',
      question: "Multiply the factors with their highest powers: $2^2 \\times 3^2$. What is the LCM of 12 and 18?",
      questionType: 'text',
      options: [
        "$6$",
        "$36$",
        "$72$",
        "$24$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Calculate the product: $2^2 \\times 3^2 = 4 \\times 9 = 36$. The LCM of 12 and 18 is $36$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("LCM (12, 18)", "36");
      }
    }
  ]
};

// --- Multi-Step Question 3: LCM with One Variable ---
const oneVariableLCMQuestion: MultiStepQuestion = {
  id: 'one-variable-lcm',
  title: 'LCM with a Single Variable',
  steps: [
    {
      id: 'ovlcm-factorize',
      question: "Find the LCM of $8x^3$ and $6x^2$. First, factorize the coefficients. What are the prime factorizations?",
      questionType: 'text',
      options: [
        "$8 = 2^3$, $6 = 2 \\times 3$",
        "$8 = 4 \\times 2$, $6 = 3 \\times 2$",
        "$8 = 2^2 \\times 2$, $6 = 2^2 \\times 3$",
        "$8 = 2 \\times 3$, $6 = 2^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Factorize the numbers: $8 = 2 \\times 2 \\times 2 = 2^3$. $6 = 2 \\times 3$.",
      explanationType: 'text'
    },
    {
      id: 'ovlcm-variable-part',
      question: "Now look at the variable parts: $x^3$ and $x^2$. What is the LCM for the $x$ part?",
      questionType: 'text',
      options: [
        "$x^3$",
        "$x^2$",
        "$x$",
        "$x^5$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Both terms have the variable $x$. To find the LCM, take the highest power of $x$ present. The powers are 3 and 2. The highest is 3. So, the LCM for the $x$ part is $x^3$.",
      explanationType: 'text'
    },
    {
      id: 'ovlcm-combine-factors',
      question: "Combine the highest powers of common numerical factors and the variable factor. What is the LCM of $8x^3$ and $6x^2$?",
      questionType: 'text',
      options: [
        "$2^3 \\times 3 \\times x^3 = 8 \\times 3 \\times x^3 = 24x^3$",
        "$2 \\times 3 \\times x^3 = 6x^3$",
        "$2^3 \\times x^3 = 8x^3$",
        "$2^4 \\times 3 \\times x^3 = 48x^3$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Take the highest power of numerical primes: from $2^3$ and $2^1 \\times 3$, the primes are $2$ and $3$. Highest power of $2$ is $2^3$. Highest power of $3$ is $3^1$. The LCM for the variable part is $x^3$. LCM = $2^3 \\times 3 \\times x^3 = 8 \\times 3 \\times x^3 = 24x^3$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("LCM (8x³, 6x²)", "24x³");
      }
    }
  ]
};

// --- Multi-Step Question 4: LCM with Multiple Variables ---
const multipleVariablesLCMQuestion: MultiStepQuestion = {
  id: 'multiple-variables-lcm',
  title: 'LCM with Multiple Variables',
  steps: [
    {
      id: 'mvlcm-factorize',
      question: "Find the LCM of $12x^2y$ and $18xy^3$. Factorize the coefficients: $12$ and $18$.",
      questionType: 'text',
      options: [
        "$12 = 2^2 \\times 3$, $18 = 2 \\times 3^2$",
        "$12 = 3 \\times 4$, $18 = 9 \\times 2$",
        "$12 = 2 \\times 6$, $18 = 3 \\times 6$",
        "$12 = 2^3 \\times 3$, $18 = 2 \\times 3$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Factorize the numbers: $12 = 4 \\times 3 = 2 \\times 2 \\times 3 = 2^2 \\times 3$. $18 = 9 \\times 2 = 3 \\times 3 \\times 2 = 2 \\times 3^2$.",
      explanationType: 'text'
    },
    {
      id: 'mvlcm-x-variable',
      question: "Looking at the $x$ variable: $x^2$ (in $12x^2y$) and $x^1$ (in $18xy^3$). What is the LCM for the $x$ part?",
      questionType: 'text',
      options: [
        "$x^2$",
        "$x^1$ (or just $x$)",
        "$x^3$",
        "$1$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Take the highest power of the common variable $x$. Powers are 2 and 1. The highest is 2. So, the LCM for the $x$ part is $x^2$.",
      explanationType: 'text'
    },
    {
      id: 'mvlcm-y-variable',
      question: "Looking at the $y$ variable: $y^1$ (in $12x^2y$) and $y^3$ (in $18xy^3$). What is the LCM for the $y$ part?",
      questionType: 'text',
      options: [
        "$y^3$",
        "$y^1$",
        "$y^4$",
        "$y^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Take the highest power of the common variable $y$. Powers are 1 and 3. The highest is 3. So, the LCM for the $y$ part is $y^3$.",
      explanationType: 'text'
    },
    {
      id: 'mvlcm-numerical-lcm',
      question: "From the coefficient factorizations $12 = 2^2 \\times 3$ and $18 = 2 \\times 3^2$, what is the LCM of the numerical parts?",
      questionType: 'text',
      options: [
        "$2^2 \\times 3^2 = 4 \\times 9 = 36$",
        "$2 \\times 3 = 6$",
        "$2^3 \\times 3^3 = 8 \\times 27 = 216$",
        "$1$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Identify all prime factors and take the highest power for each. Primes are $2$ and $3$. Highest power of $2$: $\\max(2^2, 2^1) = 2^2$. Highest power of $3$: $\\max(3^1, 3^2) = 3^2$. LCM = $2^2 \\times 3^2 = 4 \\times 9 = 36$.",
      explanationType: 'text'
    },
    {
      id: 'mvlcm-final-result',
      question: "Combine the LCMs of the numerical part ($36$), the $x$ part ($x^2$), and the $y$ part ($y^3$). What is the LCM of $12x^2y$ and $18xy^3$?",
      questionType: 'text',
      options: [
        "$36x^2y^3$",
        "$36x^3y^4$",
        "$6xy$",
        "$36x^2y$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Multiply the LCMs of each part together: Numerical LCM ($36$) $\\times$ $x$ LCM ($x^2$) $\\times$ $y$ LCM ($y^3$) = $36 \\times x^2 \\times y^3 = 36x^2y^3$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("LCM (12x²y, 18xy³)", "36x²y³");
      }
    }
  ]
};

// --- Multi-Step Question 5: Applying the Concept (LCM vs HCF) ---
const applyLCMQuestion: MultiStepQuestion = {
  id: 'apply-lcm',
  title: 'Applying LCM and Comparing with HCF',
  steps: [
    {
      id: 'alcm-analyze',
      question: "Find the LCM of $15a^2b^3$ and $10a^3b$. Which part of the process should you start with?",
      questionType: 'text',
      options: [
        "Identify the variables $a$ and $b$",
        "Factorize the coefficients 15 and 10",
        "Look at the exponents of $a$",
        "Look at the exponents of $b$"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "The standard approach is to factorize the numerical coefficients first, then handle each variable separately.",
      explanationType: 'text'
    },
    {
      id: 'alcm-factorize-coeffs',
      question: "Factorize the coefficients: $15$ and $10$. What are their prime factorizations?",
      questionType: 'text',
      options: [
        "$15 = 3 \\times 5$, $10 = 2 \\times 5$",
        "$15 = 5 \\times 3$, $10 = 5 \\times 2$",
        "$15 = 15 \\times 1$, $10 = 10 \\times 1$",
        "$15 = 3 \\times 5^2$, $10 = 2 \\times 5^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Factorize: $15 = 3 \\times 5$. $10 = 2 \\times 5$.",
      explanationType: 'text'
    },
    {
      id: 'alcm-combine-all-lcm',
      question: "The primes are $2$, $3$, and $5$. Highest powers: $2^1$, $3^1$, $5^1$. For variables: LCM of $a^2$ and $a^3$ is $a^3$. LCM of $b^3$ and $b^1$ is $b^3$. What is the LCM?",
      questionType: 'text',
      options: [
        "$2 \\times 3 \\times 5 \\times a^3 \\times b^3 = 30a^3b^3$",
        "$6 \\times a^3 \\times b^3 = 6a^3b^3$",
        "$15 \\times 10 \\times a^3 \\times b^3 = 150a^3b^3$",
        "$a^3b^3$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Multiply the LCM of the numerical part ($2^1 \\times 3^1 \\times 5^1 = 2 \\times 3 \\times 5 = 30$) by the LCMs of the variable parts ($a^3$ and $b^3$). LCM = $30 \\times a^3 \\times b^3 = 30a^3b^3$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("LCM (15a²b³, 10a³b)", "30a³b³");
      }
    },
    {
      id: 'alcm-find-hcf',
      question: "(Bonus) What is the HCF of $15a^2b^3$ and $10a^3b$? (Think: Lowest powers of common factors).",
      questionType: 'text',
      options: [
        "$5a^2b$",
        "$5a^3b^3$",
        "$30a^3b^3$",
        "$5ab$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Common primes: $5$ (lowest power $5^1$). Common variables: $a$ (lowest power $a^2$) and $b$ (lowest power $b^1$). HCF = $5 \\times a^2 \\times b = 5a^2b$. Note that LCM $\\times$ HCF = Product of the numbers: $30a^3b^3 \\times 5a^2b = 150a^5b^4$. Check: $15a^2b^3 \\times 10a^3b = 150a^5b^4$. Correct!",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("HCF (15a²b³, 10a³b)", "5a²b");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const understandingLCMQuestions: MultiStepQuestion[] = [
  lcmConceptQuestion,
  numericalLCMQuestion,
  oneVariableLCMQuestion,
  multipleVariablesLCMQuestion,
  applyLCMQuestion // Includes LCM vs HCF comparison
];

const UnderstandingLCM: React.FC = () => {
  const lcmRules = [
    "LCM is the smallest expression that two or more expressions can divide into exactly.",
    "Factorize numbers into primes and write variables with exponents.",
    "List ALL prime factors and variables from the factorizations.",
    "For each factor (number or variable), take the HIGHEST power present in any expression.",
    "Multiply these factors with their highest powers to get the LCM."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Understanding LCM"
        icon="🔄" // Or any other relevant icon like "➕" or "🧮"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={lcmRules}
        rulesTitle="LCM Rules:"
        questions={understandingLCMQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderLCMSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default UnderstandingLCM