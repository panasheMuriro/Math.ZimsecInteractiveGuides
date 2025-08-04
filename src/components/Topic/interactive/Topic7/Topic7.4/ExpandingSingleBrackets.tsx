/* eslint-disable @typescript-eslint/no-explicit-any */
// ExpandingSingleBracketsQuiz.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

// --- Helper Function for Summary (if needed) ---
const renderExpandingSingleSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No specific expansions calculated.</p>;
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

// --- Multi-Step Question 1: Concept and Property ---
const esbConceptQuestion: MultiStepQuestion = {
  id: 'esb-concept',
  title: 'Understanding Expansion',
  steps: [
    {
      id: 'esbc-property',
      question: "What textematical property is the basis for expanding single brackets?",
      questionType: 'text',
      options: [
        "Associative Property",
        "Commutative Property",
        "Distributive Property",
        "Identity Property"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "The Distributive Property states that multiplying a sum by a number is the same as multiplying each addend by the number and then adding the products. This is exactly what we do when expanding brackets: $a(b + c) = ab + ac$.",
      explanationType: 'text'
    },
    {
      id: 'esbc-form',
      question: "Which of these expressions shows the correct form for expanding a single bracket?",
      questionType: 'text',
      options: [
        "$a(b + c) = ab + c$",
        "$a(b + c) = a + bc$",
        "$a(b + c) = ab + ac$",
        "$a(b + c) = (a + b)(a + c)$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "The Distributive Property tells us to multiply the term outside the bracket ($a$) by each term inside the bracket ($b$ and $c$). So, $a(b + c) = ab + ac$.",
      explanationType: 'text'
    },
    {
      id: 'esbc-goal',
      question: "What is the main goal of expanding an expression like $3(x + 4)$?",
      questionType: 'text',
      options: [
        "To solve for $x$",
        "To write it without brackets by multiplying",
        "To factor it",
        "To graph it"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "Expanding means removing the brackets by performing the multiplication indicated by the distributive property, resulting in a sum of terms (e.g., $3x + 12$).",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Expanding with Positive Coefficient ---
const expandPositiveCoeffQuestion: MultiStepQuestion = {
  id: 'expand-positive-coeff',
  title: 'Expanding with a Positive Number',
  steps: [
    {
      id: 'epcc-identify',
      question: "Expand $5(2x + 3)$. What is the term outside the bracket?",
      questionType: 'text',
      options: [
        "$2x$",
        "$3$",
        "$5$",
        "$2x + 3$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "The term outside the bracket is the factor that multiplies the entire expression within the parentheses. In $5(2x + 3)$, the term outside is $5$.",
      explanationType: 'text'
    },
    {
      id: 'epcc-multiply-first',
      question: "Multiply the outside term ($5$) by the FIRST term inside the bracket ($2x$). What is $5 \\times 2x$?",
      questionType: 'text',
      options: [
        "$7x$",
        "$10x$",
        "$3x$",
        "$52x$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Multiply the coefficients: $5 \\times 2 = 10$. Keep the variable part $x$. So, $5 \\times 2x = 10x$.",
      explanationType: 'text'
    },
    {
      id: 'epcc-multiply-second',
      question: "Multiply the outside term ($5$) by the SECOND term inside the bracket ($3$). What is $5 \\times 3$?",
      questionType: 'text',
      options: [
        "$8$",
        "$2$",
        "$15$",
        "$53$"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "Simply multiply the numbers: $5 \\times 3 = 15$.",
      explanationType: 'text'
    },
    {
      id: 'epcc-write-result',
      question: "Combine the results of the two multiplications. What is the expanded form of $5(2x + 3)$?",
      questionType: 'text',
      options: [
        "$10x + 15$",
        "$7x + 8$",
        "$10x \\times 15$",
        "$52x + 53$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Add the two products obtained: $10x$ (from $5 \\times 2x$) and $15$ (from $5 \\times 3$). The expanded form is $10x + 15$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Expansion (5(2x+3))", "10x + 15");
      }
    }
  ]
};

// --- Multi-Step Question 3: Expanding with Negative Coefficient ---
const expandNegativeCoeffQuestion: MultiStepQuestion = {
  id: 'expand-negative-coeff',
  title: 'Expanding with a Negative Term',
  steps: [
    {
      id: 'encc-identify',
      question: "Expand $-4x(3x - 5)$. What is the term outside the bracket?",
      questionType: 'text',
      options: [
        "$3x$",
        "$-5$",
        "$-4x$",
        "$3x - 5$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "The term outside the bracket is the factor that multiplies the entire expression within the parentheses. In $-4x(3x - 5)$, the term outside is $-4x$.",
      explanationType: 'text'
    },
    {
      id: 'encc-multiply-first',
      question: "Multiply the outside term ($-4x$) by the FIRST term inside the bracket ($3x$). What is $-4x \\times 3x$?",
      questionType: 'text',
      options: [
        "$-12x$",
        "$-12x^2$",
        "$-x^2$",
        "$-7x^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Multiply the coefficients: $-4 \\times 3 = -12$. Multiply the variables: $x \\times x = x^2$. So, $-4x \\times 3x = -12x^2$.",
      explanationType: 'text'
    },
    {
      id: 'encc-multiply-second',
      question: "Multiply the outside term ($-4x$) by the SECOND term inside the bracket ($-5$). What is $-4x \\times -5$?",
      questionType: 'text',
      options: [
        "$-20x$",
        "$20x$",
        "$-9x$",
        "$9x$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Multiply the coefficients: $-4 \\times -5 = 20$. Keep the variable part $x$. So, $-4x \\times -5 = 20x$. Remember, a negative times a negative is a positive.",
      explanationType: 'text'
    },
    {
      id: 'encc-write-result',
      question: "Combine the results of the two multiplications. What is the expanded form of $-4x(3x - 5)$?",
      questionType: 'text',
      options: [
        "$-12x^2 + 20x$",
        "$-12x^2 - 20x$",
        "$-12x^2 \\times 20x$",
        "$20x - 12x^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Add the two products obtained: $-12x^2$ (from $-4x \\times 3x$) and $20x$ (from $-4x \\times -5$). The expanded form is $-12x^2 + 20x$. (Note: $-12x^2 + 20x$ is the same as $20x - 12x^2$, but the standard form usually puts the term with the highest degree first).",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Expansion (-4x(3x-5))", "-12x² + 20x");
      }
    }
  ]
};

// --- Multi-Step Question 4: Expanding and Simplifying ---
const expandAndSimplifyQuestion: MultiStepQuestion = {
  id: 'expand-and-simplify',
  title: 'Expanding and Simplifying',
  steps: [
    {
      id: 'eas-expand-first',
      question: "Expand $2(3x + 4) + 5x$. First, expand the bracket $2(3x + 4)$. What is $2 \\times 3x$?",
      questionType: 'text',
      options: [
        "$5x$",
        "$6x$",
        "$9x$",
        "$23x$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Multiply the coefficient outside the bracket by the first term inside: $2 \\times 3x = 6x$.",
      explanationType: 'text'
    },
    {
      id: 'eas-expand-second',
      question: "Continue expanding $2(3x + 4)$. What is $2 \\times 4$?",
      questionType: 'text',
      options: [
        "$2$",
        "$4$",
        "$6$",
        "$8$"
      ],
      optionType: 'text', // Options are plain text
      correct: 3, // Index of the correct option
      explanation: "Multiply the coefficient outside the bracket by the second term inside: $2 \\times 4 = 8$.",
      explanationType: 'text'
    },
    {
      id: 'eas-write-expanded',
      question: "Write the expression after expanding the bracket: $2(3x + 4) + 5x = ?$",
      questionType: 'text',
      options: [
        "$6x + 8 + 5x$",
        "$6x + 8 \\times 5x$",
        "$2 \\times 3x + 4 + 5x$",
        "$6x + 8 + 5$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "After expanding $2(3x + 4)$ to $6x + 8$, the full expression becomes $6x + 8 + 5x$.",
      explanationType: 'text'
    },
    {
      id: 'eas-identify-like-terms',
      question: "In the expression $6x + 8 + 5x$, which terms are like terms and can be combined?",
      questionType: 'text',
      options: [
        "$6x$ and $8$",
        "$6x$ and $5x$",
        "$8$ and $5x$",
        "All three terms are like terms"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Like terms have the same variable part. $6x$ and $5x$ both have the variable $x$, so they are like terms and can be added together. The constant term $8$ cannot be combined with them.",
      explanationType: 'text'
    },
    {
      id: 'eas-combine-terms',
      question: "Combine the like terms $6x + 5x$ in the expression $6x + 8 + 5x$. What is the simplified result?",
      questionType: 'text',
      options: [
        "$11x + 8$",
        "$19x$",
        "$6x + 5x + 8$",
        "$11x$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Add the coefficients of the like terms: $6 + 5 = 11$. Keep the variable $x$. So, $6x + 5x = 11x$. Add the constant term $8$. The final simplified expression is $11x + 8$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Simplified (2(3x+4)+5x)", "11x + 8");
      }
    }
  ]
};

// --- Multi-Step Question 5: Applying the Method ---
const applyMethodQuestion: MultiStepQuestion = {
  id: 'apply-method',
  title: 'Applying the Expansion Method',
  steps: [
    {
      id: 'am-analyze',
      question: "Expand $3a(4 - 2a)$. What is the term outside the bracket?",
      questionType: 'text',
      options: [
        "$4$",
        "$-2a$",
        "$3a$",
        "$4 - 2a$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "The term outside the bracket is the factor that multiplies the entire expression within the parentheses. In $3a(4 - 2a)$, the term outside is $3a$.",
      explanationType: 'text'
    },
    {
      id: 'am-multiply-first',
      question: "Multiply the outside term ($3a$) by the FIRST term inside the bracket ($4$). What is $3a \\times 4$?",
      questionType: 'text',
      options: [
        "$7a$",
        "$12a$",
        "$34a$",
        "$12$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Multiply the coefficient: $3 \\times 4 = 12$. Keep the variable part $a$. So, $3a \\times 4 = 12a$.",
      explanationType: 'text'
    },
    {
      id: 'am-multiply-second',
      question: "Multiply the outside term ($3a$) by the SECOND term inside the bracket ($-2a$). What is $3a \\times -2a$?",
      questionType: 'text',
      options: [
        "$-6a$",
        "$-5a^2$",
        "$-6a^2$",
        "$1a^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Multiply the coefficients: $3 \\times -2 = -6$. Multiply the variables: $a \\times a = a^2$. So, $3a \\times -2a = -6a^2$.",
      explanationType: 'text'
    },
    {
      id: 'am-write-result',
      question: "Combine the results of the two multiplications. What is the expanded form of $3a(4 - 2a)$?",
      questionType: 'text',
      options: [
        "$12a - 6a^2$",
        "$12a + 6a^2$",
        "$12a \\times -6a^2$",
        "$-6a^2 + 12a$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option (also 3, but 0 is listed first)
      explanation: "Add the two products obtained: $12a$ (from $3a \\times 4$) and $-6a^2$ (from $3a \\times -2a$). The expanded form is $12a + (-6a^2)$, which is written as $12a - 6a^2$. (Note: $12a - 6a^2$ is the same as $-6a^2 + 12a$, but the former keeps the positive term first unless specified otherwise).",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Expansion (3a(4-2a))", "12a - 6a²");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const expandingSingleBracketsQuestions: MultiStepQuestion[] = [
  esbConceptQuestion,
  expandPositiveCoeffQuestion,
  expandNegativeCoeffQuestion,
  expandAndSimplifyQuestion,
  applyMethodQuestion
];


const ExpandingSingleBrackets: React.FC = () => {
  const esbRules = [
    "Identify the term outside the bracket.",
    "Multiply the outside term by EACH term inside the bracket.",
    "Write the results of the multiplications as a sum (or difference).",
    "Pay close attention to positive and negative signs during multiplication.",
    "If the resulting terms are like terms, combine them to simplify.",
    "Check your answer by substituting a value for the variable."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Expanding Single Brackets"
        icon="✖️" // Or any other relevant icon like "🧮" or "📦"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={esbRules}
        rulesTitle="Expansion Rules:"
        questions={expandingSingleBracketsQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderExpandingSingleSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default ExpandingSingleBrackets;