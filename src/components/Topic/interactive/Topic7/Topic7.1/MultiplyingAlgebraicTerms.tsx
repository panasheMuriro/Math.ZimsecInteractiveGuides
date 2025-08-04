/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';
// renderTextWithtext is imported within the template

// --- Helper Function for Summary (if needed) ---
const renderMultiplyTermsSummary = (sharedValues: { [key: string]: any }) => {
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

// --- Multi-Step Question 1: Basic Coefficient Multiplication ---
const basicCoefficientQuestion: MultiStepQuestion = {
  id: 'basic-coefficient-multiplication',
  title: 'Multiplying Coefficients',
  steps: [
    {
      id: 'bcm-identify-coefficients',
      question: "In the multiplication $5x \\times 3y$, what are the coefficients you need to multiply?",
      questionType: 'text',
      options: [
        "$x$ and $y$",
        "$5$ and $3$",
        "$5x$ and $3y$",
        "$5 + 3$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Coefficients are the numerical parts of the terms. In $5x$, the coefficient is $5$. In $3y$, the coefficient is $3$. You multiply these numbers first.",
      explanationType: 'text'
    },
    {
      id: 'bcm-multiply-coefficients',
      question: "Calculate the product of the coefficients: $5 \\times 3$.",
      questionType: 'text',
      options: [
        "$8$",
        "$15$",
        "$2$",
        "$53$"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "Multiply the numbers: $5 \\times 3 = 15$.",
      explanationType: 'text'
    },
    {
      id: 'bcm-combine-variables',
      question: "After multiplying the coefficients, how do you handle the variables $x$ and $y$ in $5x \\times 3y$?",
      questionType: 'text',
      options: [
        "Add them: $x + y$",
        "Multiply them: $x \\times y$",
        "Subtract them: $x - y$",
        "Ignore them"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "When multiplying terms, you also multiply their variable parts. $x \\times y$ is written as $xy$.",
      explanationType: 'text'
    },
    {
      id: 'bcm-final-result',
      question: "What is the final result of $5x \\times 3y$?",
      questionType: 'text',
      options: [
        "$15xy$",
        "$8xy$",
        "$15x + y$",
        "$53xy$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Multiply the coefficients ($5 \\times 3 = 15$) and multiply the variables ($x \\times y = xy$). Combine them to get $15xy$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Basic Coefficient Result", "15xy");
      }
    }
  ]
};

// --- Multi-Step Question 2: Adding Exponents ---
const addingExponentsQuestion: MultiStepQuestion = {
  id: 'adding-exponents',
  title: 'Adding Exponents with Like Bases',
  steps: [
    {
      id: 'ae-identify-like-bases',
      question: "When multiplying $x^2 \\times x^5$, what do you do with the exponents?",
      questionType: 'text',
      options: [
        "Add them: $2 + 5$",
        "Multiply them: $2 \\times 5$",
        "Subtract them: $5 - 2$",
        "Divide them: $5 \\div 2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "When multiplying terms with the same base variable, you add their exponents. For $x^m \\times x^n$, the result is $x^{m+n}$.",
      explanationType: 'text'
    },
    {
      id: 'ae-add-exponents',
      question: "Calculate the new exponent: $2 + 5$.",
      questionType: 'text',
      options: [
        "$3$",
        "$7$",
        "$10$",
        "$2.5$"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "Add the exponents: $2 + 5 = 7$.",
      explanationType: 'text'
    },
    {
      id: 'ae-apply-rule',
      question: "Apply the rule. What is $x^2 \\times x^5$?",
      questionType: 'text',
      options: [
        "$x^3$",
        "$x^7$",
        "$x^{10}$",
        "$2x^7$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Keep the base $x$ and use the sum of the exponents ($7$) as the new exponent. So, $x^2 \\times x^5 = x^7$.",
      explanationType: 'text'
    },
    {
      id: 'ae-with-coefficients',
      question: "Now, simplify $2x^2 \\times 3x^5$. What is the coefficient of the result?",
      questionType: 'text',
      options: [
        "$5$ (from $2 + 3$)",
        "$6$ (from $2 \\times 3$)",
        "$1$",
        "$23$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "First, multiply the coefficients: $2 \\times 3 = 6$. Then, add the exponents of $x$: $2 + 5 = 7$. The result is $6x^7$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("With Coefficients Result", "6x^7");
      }
    }
  ]
};

// --- Multi-Step Question 3: Coefficient of 1 ---
const coefficientOfOneQuestion: MultiStepQuestion = {
  id: 'coefficient-of-one',
  title: 'Handling Implied Coefficients of 1',
  steps: [
    {
      id: 'coo-understand-implied',
      question: "What coefficient is implied (understood to be there) in front of the variable $a$ in the term $a$?",
      questionType: 'text',
      options: [
        "$0$",
        "$1$",
        "$a$",
        "$-1$"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "If no number is written in front of a variable, the coefficient is understood to be $1$. So, $a$ means $1a$.",
      explanationType: 'text'
    },
    {
      id: 'coo-multiply-with-one',
      question: "Simplify $a \\times 4a$. (Think of $a$ as $1a$). What is the coefficient of the result?",
      questionType: 'text',
      options: [
        "$4$ (from $1 \\times 4$)",
        "$5$ (from $1 + 4$)",
        "$1$",
        "$4a$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Treat $a$ as $1a$. Multiply the coefficients: $1 \\times 4 = 4$. Add the exponents of $a$: $1 + 1 = 2$. The result is $4a^2$.",
      explanationType: 'text'
    },
    {
      id: 'coo-add-exponents',
      question: "Continuing with $a \\times 4a$, what is the exponent of $a$ in the result?",
      questionType: 'text',
      options: [
        "$1$ (from $a^1$)",
        "$2$ (from $1 + 1$)",
        "$0$ (from $1 - 1$)",
        "$a$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Add the exponents of the like base $a$: $1 + 1 = 2$. The variable part is $a^2$.",
      explanationType: 'text'
    },
    {
      id: 'coo-final-result',
      question: "Combine the coefficient and variable part. What is $a \\times 4a$?",
      questionType: 'text',
      options: [
        "$4a$",
        "$4a^2$",
        "$5a^2$",
        "$a4a$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Coefficient is $4$, variable part is $a^2$. The final result is $4a^2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Coefficient of One Result", "4a^2");
      }
    }
  ]
};

// --- Multi-Step Question 4: Multiple Variables ---
const multipleVariablesQuestion: MultiStepQuestion = {
  id: 'multiple-variables-multiply',
  title: 'Multiplying Terms with Multiple Variables',
  steps: [
    {
      id: 'mv-identify-variables',
      question: "In the multiplication $2xy \\times 3x$, which variables do you need to consider?",
      questionType: 'text',
      options: [
        "Only $x$",
        "Only $y$",
        "Both $x$ and $y$",
        "None of them"
      ],
      optionType: 'text',
      correct: 2, // Index of the correct option
      explanation: "You must consider all variables present in either term. The first term has $x$ and $y$, the second term has $x$. So, you handle both $x$ and $y$.",
      explanationType: 'text'
    },
    {
      id: 'mv-handle-x',
      question: "How do you combine the $x$ parts: $x^1$ (from $2xy$) and $x^1$ (from $3x$)?",
      questionType: 'text',
      options: [
        "Add exponents: $x^{1+1} = x^2$",
        "Multiply exponents: $x^{1\\times1} = x^1$",
        "Subtract exponents: $x^{1-1} = x^0$",
        "Write as $xx$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "For the $x$ variable, add the exponents: $1 + 1 = 2$. So, the $x$ part becomes $x^2$.",
      explanationType: 'text'
    },
    {
      id: 'mv-handle-y',
      question: "How do you combine the $y$ parts: $y^1$ (from $2xy$) and no $y$ (from $3x$, which is like $y^0$)?",
      questionType: 'text',
      options: [
        "Add exponents: $y^{1+0} = y^1$ (which is just $y$)",
        "Multiply exponents: $y^{1\\times0} = y^0$",
        "Subtract exponents: $y^{1-0} = y^1$",
        "Ignore $y$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The second term $3x$ has no $y$, which means it's $y^0$. Add the exponents for $y$: $1 + 0 = 1$. So, the $y$ part is $y^1$, or simply $y$.",
      explanationType: 'text'
    },
    {
      id: 'mv-multiply-coefficients',
      question: "Multiply the coefficients: $2 \\times 3$.",
      questionType: 'text',
      options: [
        "$5$",
        "$6$",
        "$1$",
        "$9$"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "Multiply the numerical coefficients: $2 \\times 3 = 6$.",
      explanationType: 'text'
    },
    {
      id: 'mv-final-result',
      question: "Combine the coefficient and all variable parts. What is $2xy \\times 3x$?",
      questionType: 'text',
      options: [
        "$6x^2y$",
        "$5x^2y$",
        "$6xy$",
        "$5xy$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Coefficient: $6$. $x$ part: $x^2$. $y$ part: $y$. Combine them to get $6x^2y$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Multiple Variables Result", "6x^2y");
      }
    }
  ]
};

// --- Multi-Step Question 5: Higher Powers ---
const higherPowersQuestion: MultiStepQuestion = {
  id: 'higher-powers-multiply',
  title: 'Multiplying Terms with Higher Powers',
  steps: [
    {
      id: 'hp-identify-parts',
      question: "Identify the parts of $3x^2y^4 \\times 2xy^3$. What are the coefficients?",
      questionType: 'text',
      options: [
        "$3$ and $2$",
        "$x^2$ and $x$",
        "$y^4$ and $y^3$",
        "$3x^2$ and $2y^3$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The coefficients are the numerical factors. For $3x^2y^4$, the coefficient is $3$. For $2xy^3$, the coefficient is $2$.",
      explanationType: 'text'
    },
    {
      id: 'hp-multiply-coefficients',
      question: "Multiply the coefficients: $3 \\times 2$.",
      questionType: 'text',
      options: [
        "$5$",
        "$6$",
        "$1$",
        "$9$"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "Multiply the numbers: $3 \\times 2 = 6$.",
      explanationType: 'text'
    },
    {
      id: 'hp-handle-x-variable',
      question: "Combine the $x$ parts: $x^2$ and $x^1$. What is the exponent of $x$ in the result?",
      questionType: 'text',
      options: [
        "$2$ (take the higher one)",
        "$3$ (from $2 + 1$)",
        "$1$ (take the lower one)",
        "$2$ (from $2 \\times 1$)"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Add the exponents of the like base $x$: $2 + 1 = 3$. The $x$ part is $x^3$.",
      explanationType: 'text'
    },
    {
      id: 'hp-handle-y-variable',
      question: "Combine the $y$ parts: $y^4$ and $y^3$. What is the exponent of $y$ in the result?",
      questionType: 'text',
      options: [
        "$7$ (from $4 + 3$)",
        "$12$ (from $4 \\times 3$)",
        "$1$ (from $4 - 3$)",
        "$4$ (take the higher one)"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Add the exponents of the like base $y$: $4 + 3 = 7$. The $y$ part is $y^7$.",
      explanationType: 'text'
    },
    {
      id: 'hp-final-result',
      question: "Combine the coefficient and all variable parts. What is $3x^2y^4 \\times 2xy^3$?",
      questionType: 'text',
      options: [
        "$6x^3y^7$",
        "$5x^3y^7$",
        "$6x^2y^{12}$",
        "$5x^2y^{12}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Coefficient: $6$. $x$ part: $x^3$. $y$ part: $y^7$. Combine them to get $6x^3y^7$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Higher Powers Result", "6x^3y^7");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const multiplyingAlgebraicTermsQuestions: MultiStepQuestion[] = [
  basicCoefficientQuestion,
  addingExponentsQuestion,
  coefficientOfOneQuestion,
  multipleVariablesQuestion,
  higherPowersQuestion
];


const MultiplyingAlgebraicTerms: React.FC = () => {
  const multiplyTermsRules = [
    "Multiply coefficients (numbers) first.",
    "For like variables, add their exponents: $x^m \\times x^n = x^{m+n}$.",
    "Handle each variable separately.",
    "Remember implied coefficients of 1 (e.g., $a = 1a$).",
    "Combine the results: (Product of coefficients) $\\times$ (Product of variables)."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Multiplying Algebraic Terms"
        icon="✖️" // Or any other relevant icon like "🔢" or "🧮"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={multiplyTermsRules}
        rulesTitle="Multiplication Rules:"
        questions={multiplyingAlgebraicTermsQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderMultiplyTermsSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default MultiplyingAlgebraicTerms;