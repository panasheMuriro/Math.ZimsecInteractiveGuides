/* eslint-disable @typescript-eslint/no-explicit-any */

import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary (if needed) ---
const renderHCFSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No specific HCFs calculated.</p>;
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
const hcfConceptQuestion: MultiStepQuestion = {
  id: 'hcf-concept',
  title: 'Understanding HCF Concept',
  steps: [
    {
      id: 'hcf-def',
      question: "What does the Highest Common Factor (HCF) of two or more expressions represent?",
      questionType: 'text',
      options: [
        "The smallest factor they share",
        "The largest expression that divides all of them without a remainder",
        "The sum of all their factors",
        "The product of all their factors"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "The HCF is the largest expression (number, variable, or combination) that is a factor of each of the given expressions. It's the biggest 'piece' they all contain.",
      explanationType: 'text'
    },
    {
      id: 'hcf-steps',
      question: "Which of these is NOT a standard step for finding the HCF of algebraic expressions?",
      questionType: 'text',
      options: [
        "Factorize each expression into primes and variables",
        "Identify common factors",
        "Take the lowest power of each common factor",
        "Add the coefficients of the common factors"
      ],
      optionType: 'text',
      correct: 3, // Index of the correct option
      explanation: "The standard steps involve factoring, identifying common parts, and taking the lowest powers. Adding coefficients is not part of the HCF process.",
      explanationType: 'text'
    },
    {
      id: 'hcf-why',
      question: "Why is finding the HCF useful in algebra?",
      questionType: 'text',
      options: [
        "To make expressions look more complicated",
        "Primarily for simplifying fractions or factoring expressions",
        "To find the least common multiple (LCM)",
        "To multiply expressions together"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "The HCF is primarily used to simplify algebraic fractions by canceling out the common factor, or to factor expressions by taking the HCF out as a common factor.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Numerical HCF ---
const numericalHCFQuestion: MultiStepQuestion = {
  id: 'numerical-hcf',
  title: 'Finding HCF of Numbers',
  steps: [
    {
      id: 'nhcf-factorize',
      question: "To find the HCF of 30 and 45, first factorize them into prime factors. What is the prime factorization of 30?",
      questionType: 'text',
      options: [
        "$2 \\times 3 \\times 5$",
        "$2^2 \\times 3$",
        "$3 \\times 10$",
        "$5 \\times 6$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Prime factorization breaks a number down into a product of prime numbers. $30 = 2 \\times 15 = 2 \\times 3 \\times 5$. All factors (2, 3, 5) are prime.",
      explanationType: 'text'
    },
    {
      id: 'nhcf-factorize-45',
      question: "What is the prime factorization of 45?",
      questionType: 'text',
      options: [
        "$3 \\times 15$",
        "$9 \\times 5$",
        "$3^2 \\times 5$",
        "$3 \\times 5^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Factorize 45: $45 = 9 \\times 5 = 3 \\times 3 \\times 5 = 3^2 \\times 5$.",
      explanationType: 'text'
    },
    {
      id: 'nhcf-identify-common',
      question: "Comparing $30 = 2 \\times 3 \\times 5$ and $45 = 3^2 \\times 5$, what are the common prime factors?",
      questionType: 'text',
      options: [
        "$2$ and $3$",
        "$3$ and $5$",
        "$2$ and $5$",
        "$2$, $3$, and $5$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Look for prime factors present in both factorizations. $2$ is only in $30$. $3$ is in both ($3^1$ in 30, $3^2$ in 45). $5$ is in both ($5^1$ in both). So, the common factors are $3$ and $5$.",
      explanationType: 'text'
    },
    {
      id: 'nhcf-lowest-powers',
      question: "For the common factors $3$ and $5$, what are the lowest powers present in both factorizations?",
      questionType: 'text',
      options: [
        "$3^2$ and $5^1$",
        "$3^1$ and $5^0$",
        "$3^1$ and $5^1$",
        "$3^0$ and $5^1$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "For factor $3$: The powers are $3^1$ (in 30) and $3^2$ (in 45). The lowest power is $3^1$. For factor $5$: The powers are $5^1$ (in 30) and $5^1$ (in 45). The lowest power is $5^1$.",
      explanationType: 'text'
    },
    {
      id: 'nhcf-final-result',
      question: "Multiply the common factors with their lowest powers: $3^1 \\times 5^1$. What is the HCF of 30 and 45?",
      questionType: 'text',
      options: [
        "$8$",
        "$15$",
        "$30$",
        "$45$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Calculate the product: $3^1 \\times 5^1 = 3 \\times 5 = 15$. The HCF of 30 and 45 is $15$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("HCF (30, 45)", "15");
      }
    }
  ]
};

// --- Multi-Step Question 3: HCF with One Variable ---
const oneVariableHCFQuestion: MultiStepQuestion = {
  id: 'one-variable-hcf',
  title: 'HCF with a Single Variable',
  steps: [
    {
      id: 'ovhcf-factorize',
      question: "Find the HCF of $12x^3$ and $8x^2$. First, factorize the coefficients. What are the prime factorizations?",
      questionType: 'text',
      options: [
        "$12 = 2^2 \\times 3$, $8 = 2^3$",
        "$12 = 3 \\times 4$, $8 = 2 \\times 4$",
        "$12 = 2 \\times 6$, $8 = 2^2 \\times 2$",
        "$12 = 2^3 \\times 3$, $8 = 2^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Factorize the numbers: $12 = 4 \\times 3 = 2 \\times 2 \\times 3 = 2^2 \\times 3$. $8 = 4 \\times 2 = 2 \\times 2 \\times 2 = 2^3$.",
      explanationType: 'text'
    },
    {
      id: 'ovhcf-variable-part',
      question: "Now look at the variable parts: $x^3$ and $x^2$. What is the common variable factor?",
      questionType: 'text',
      options: [
        "$x^3$",
        "$x^2$",
        "$x$",
        "$x^5$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Both terms have the variable $x$. To find the common factor, take the lowest power of $x$ present in both. The powers are 3 and 2. The lowest is 2. So, the common variable factor is $x^2$.",
      explanationType: 'text'
    },
    {
      id: 'ovhcf-combine-factors',
      question: "Combine the common numerical and variable factors. What is the HCF of $12x^3$ and $8x^2$?",
      questionType: 'text',
      options: [
        "$2^2 \\times 3 \\times x^2 = 4 \\times 3 \\times x^2 = 12x^2$",
        "$2^3 \\times x^2 = 8x^2$",
        "$2^2 \\times x^2 = 4x^2$",
        "$2 \\times 3 \\times x^2 = 6x^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Take the lowest power of common numerical primes: from $2^2 \\times 3$ and $2^3$, the common prime is $2$, lowest power is $2^2 = 4$. The common variable factor is $x^2$. HCF = $4 \\times x^2 = 4x^2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("HCF (12x³, 8x²)", "4x²");
      }
    }
  ]
};

// --- Multi-Step Question 4: HCF with Multiple Variables ---
const multipleVariablesHCFQuestion: MultiStepQuestion = {
  id: 'multiple-variables-hcf',
  title: 'HCF with Multiple Variables',
  steps: [
    {
      id: 'mvhcf-factorize',
      question: "Find the HCF of $18x^2y^3$ and $12xy^5$. Factorize the coefficients: $18$ and $12$.",
      questionType: 'text',
      options: [
        "$18 = 2 \\times 3^2$, $12 = 2^2 \\times 3$",
        "$18 = 9 \\times 2$, $12 = 6 \\times 2$",
        "$18 = 3 \\times 6$, $12 = 3 \\times 4$",
        "$18 = 2^2 \\times 3^2$, $12 = 2 \\times 3$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Factorize the numbers: $18 = 2 \\times 9 = 2 \\times 3 \\times 3 = 2 \\times 3^2$. $12 = 4 \\times 3 = 2 \\times 2 \\times 3 = 2^2 \\times 3$.",
      explanationType: 'text'
    },
    {
      id: 'mvhcf-x-variable',
      question: "Looking at the $x$ variable: $x^2$ (in $18x^2y^3$) and $x^1$ (in $12xy^5$). What is the HCF for the $x$ part?",
      questionType: 'text',
      options: [
        "$x^2$",
        "$x^1$ (or just $x$)",
        "$x^3$",
        "$1$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Take the lowest power of the common variable $x$. Powers are 2 and 1. The lowest is 1. So, the HCF for the $x$ part is $x^1$, which is simply $x$.",
      explanationType: 'text'
    },
    {
      id: 'mvhcf-y-variable',
      question: "Looking at the $y$ variable: $y^3$ (in $18x^2y^3$) and $y^5$ (in $12xy^5$). What is the HCF for the $y$ part?",
      questionType: 'text',
      options: [
        "$y^5$",
        "$y^3$",
        "$y^8$",
        "$y^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Take the lowest power of the common variable $y$. Powers are 3 and 5. The lowest is 3. So, the HCF for the $y$ part is $y^3$.",
      explanationType: 'text'
    },
    {
      id: 'mvhcf-numerical-hcf',
      question: "From the coefficient factorizations $18 = 2 \\times 3^2$ and $12 = 2^2 \\times 3$, what is the HCF of the numerical parts?",
      questionType: 'text',
      options: [
        "$2^2 \\times 3^2 = 4 \\times 9 = 36$",
        "$2 \\times 3 = 6$",
        "$2^1 \\times 3^1 = 2 \\times 3 = 6$",
        "$1$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Identify common prime factors and take the lowest power. Common primes are $2$ and $3$. Lowest power of $2$: $\\min(2^1, 2^2) = 2^1$. Lowest power of $3$: $\\min(3^2, 3^1) = 3^1$. HCF = $2^1 \\times 3^1 = 2 \\times 3 = 6$.",
      explanationType: 'text'
    },
    {
      id: 'mvhcf-final-result',
      question: "Combine the HCFs of the numerical part ($6$), the $x$ part ($x$), and the $y$ part ($y^3$). What is the HCF of $18x^2y^3$ and $12xy^5$?",
      questionType: 'text',
      options: [
        "$6xy^3$",
        "$6x^2y^5$",
        "$6x^3y^8$",
        "$6xy^5$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Multiply the HCFs of each part together: Numerical HCF ($6$) $\\times$ $x$ HCF ($x$) $\\times$ $y$ HCF ($y^3$) = $6 \\times x \\times y^3 = 6xy^3$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("HCF (18x²y³, 12xy⁵)", "6xy³");
      }
    }
  ]
};

// --- Multi-Step Question 5: Applying the Concept ---
const applyHCFQuestion: MultiStepQuestion = {
  id: 'apply-hcf',
  title: 'Applying HCF to a New Example',
  steps: [
    {
      id: 'ahcf-analyze',
      question: "Find the HCF of $24a^3b^2$ and $16a^2b^4$. Which part of the process should you start with?",
      questionType: 'text',
      options: [
        "Identify the variables $a$ and $b$",
        "Factorize the coefficients 24 and 16",
        "Look at the exponents of $a$",
        "Look at the exponents of $b$"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "The standard approach is to factorize the numerical coefficients first, then handle each variable separately.",
      explanationType: 'text'
    },
    {
      id: 'ahcf-factorize-coeffs',
      question: "Factorize the coefficients: $24$ and $16$. What are their prime factorizations?",
      questionType: 'text',
      options: [
        "$24 = 2^3 \\times 3$, $16 = 2^4$",
        "$24 = 8 \\times 3$, $16 = 8 \\times 2$",
        "$24 = 4 \\times 6$, $16 = 4 \\times 4$",
        "$24 = 2^4 \\times 3$, $16 = 2^3$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Factorize: $24 = 8 \\times 3 = 2^3 \\times 3$. $16 = 8 \\times 2 = 4 \\times 4 = 2^4$.",
      explanationType: 'text'
    },
    {
      id: 'ahcf-common-numerical',
      question: "Based on $24 = 2^3 \\times 3$ and $16 = 2^4$, what is the HCF of the numerical parts?",
      questionType: 'text',
      options: [
        "$2^4 = 16$",
        "$2^3 = 8$",
        "$2^7 = 128$",
        "$3$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The common prime factor is $2$. The lowest power is $\\min(2^3, 2^4) = 2^3 = 8$. The HCF of the numbers is $8$.",
      explanationType: 'text'
    },
    {
      id: 'ahcf-combine-all',
      question: "The HCF of coefficients is $8$. For variables: HCF of $a^3$ and $a^2$ is $a^2$. HCF of $b^2$ and $b^4$ is $b^2$. What is the final HCF?",
      questionType: 'text',
      options: [
        "$8a^2b^2$",
        "$8a^3b^4$",
        "$8a^5b^6$",
        "$8ab$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Multiply the HCF of the numerical part ($8$) by the HCFs of the variable parts ($a^2$ and $b^2$). HCF = $8 \\times a^2 \\times b^2 = 8a^2b^2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("HCF (24a³b², 16a²b⁴)", "8a²b²");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const understandingHCFQuestions: MultiStepQuestion[] = [
  hcfConceptQuestion,
  numericalHCFQuestion,
  oneVariableHCFQuestion,
  multipleVariablesHCFQuestion,
  applyHCFQuestion
];


const UnderstandingHCF: React.FC = () => {
  const hcfRules = [
    "HCF is the largest expression that divides two or more expressions exactly.",
    "Factorize numbers into primes and write variables with exponents.",
    "Identify factors (numbers and variables) common to ALL expressions.",
    "For each common factor, take the LOWEST power present.",
    "Multiply these common factors with their lowest powers to get the HCF."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Understanding HCF (GCD)"
        icon="🔍" // Or any other relevant icon like "➗" or "🧮"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={hcfRules}
        rulesTitle="HCF Rules:"
        questions={understandingHCFQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderHCFSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default UnderstandingHCF