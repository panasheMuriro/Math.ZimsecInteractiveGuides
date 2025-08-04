/* eslint-disable @typescript-eslint/no-explicit-any */

import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary (if needed) ---
const renderFOILSummary = (sharedValues: { [key: string]: any }) => {
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

// --- Multi-Step Question 1: Concept and Acronym ---
const foilConceptQuestion: MultiStepQuestion = {
  id: 'foil-concept',
  title: 'Understanding the FOIL Method',
  steps: [
    {
      id: 'foilc-acronym',
      question: "What does the acronym 'FOIL' stand for in algebra?",
      questionType: 'text',
      options: [
        "First, Outer, Inside, Last",
        "First, Outer, Inner, Last",
        "Factors, Operations, Isolate, Loop",
        "Function, Operator, Integer, Limit"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "FOIL is a mnemonic to help remember how to multiply two binomials. It stands for First, Outer, Inner, Last.",
      explanationType: 'text'
    },
    {
      id: 'foilc-purpose',
      question: "What is the main purpose of the FOIL method?",
      questionType: 'text',
      options: [
        "To factor quadratic expressions",
        "To solve linear equations",
        "To expand the product of two binomials",
        "To find the greatest common factor"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "The FOIL method is specifically used to expand expressions like $(a + b)(c + d)$ into a sum of terms.",
      explanationType: 'text'
    },
    {
      id: 'foilc-when-to-use',
      question: "When would you typically use the FOIL method?",
      questionType: 'text',
      options: [
        "To simplify $2x + 3x$",
        "To expand $(x + 2)(x - 5)$",
        "To solve $x + 3 = 7$",
        "To graph $y = x^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "FOIL is used when you have two binomials (expressions with two terms) being multiplied together, like $(x + 2)(x - 5)$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Applying FOIL (Simple) ---
const applyFOILSimpleQuestion: MultiStepQuestion = {
  id: 'apply-foil-simple',
  title: 'Applying FOIL to Simple Binomials',
  steps: [
    {
      id: 'afs-identify',
      question: "Expand $(x + 4)(x + 3)$ using FOIL. What are the 'First' terms you multiply?",
      questionType: 'text',
      options: [
        "$x$ and $x$",
        "$x$ and $4$",
        "$4$ and $x$",
        "$4$ and $3$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The 'First' terms are the first term in each binomial. In $(x + 4)(x + 3)$, the first terms are $x$ and $x$.",
      explanationType: 'text'
    },
    {
      id: 'afs-first-product',
      question: "Multiply the 'First' terms: $x \\times x$. What is the result?",
      questionType: 'text',
      options: [
        "$x$",
        "$x^2$",
        "$2x$",
        "$0$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "When multiplying variables with exponents, you add the exponents. $x^1 \\times x^1 = x^{1+1} = x^2$.",
      explanationType: 'text'
    },
    {
      id: 'afs-outer-product',
      question: "Multiply the 'Outer' terms: $x$ (from the first bracket) and $3$ (from the second bracket). What is $x \\times 3$?",
      questionType: 'text',
      options: [
        "$x$",
        "$3$",
        "$3x$",
        "$x3$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Multiply the coefficient (3) by the variable ($x$). $x \\times 3 = 3x$.",
      explanationType: 'text'
    },
    {
      id: 'afs-inner-product',
      question: "Multiply the 'Inner' terms: $4$ (from the first bracket) and $x$ (from the second bracket). What is $4 \\times x$?",
      questionType: 'text',
      options: [
        "$4$",
        "$x$",
        "$4x$",
        "$x4$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Multiply the coefficient (4) by the variable ($x$). $4 \\times x = 4x$.",
      explanationType: 'text'
    },
    {
      id: 'afs-last-product',
      question: "Multiply the 'Last' terms: $4$ and $3$. What is $4 \\times 3$?",
      questionType: 'text',
      options: [
        "$7$",
        "$1$",
        "$12$",
        "$43$"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "Simply multiply the numbers: $4 \\times 3 = 12$.",
      explanationType: 'text'
    },
    {
      id: 'afs-combine',
      question: "Combine all the products: $x^2 + 3x + 4x + 12$. What is the simplified result?",
      questionType: 'text',
      options: [
        "$x^2 + 7x + 12$",
        "$x^2 + 12x + 12$",
        "$x^2 + 3x + 4x + 12$",
        "$8x^2 + 12$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Add the like terms $3x$ and $4x$: $3x + 4x = 7x$. The constant term is $12$. The $x^2$ term remains. The final result is $x^2 + 7x + 12$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Expansion ((x+4)(x+3))", "x² + 7x + 12");
      }
    }
  ]
};

// --- Multi-Step Question 3: Applying FOIL (One Negative) ---
const applyFOILNegativeQuestion: MultiStepQuestion = {
  id: 'apply-foil-negative',
  title: 'Applying FOIL with a Negative Term',
  steps: [
    {
      id: 'afn-identify',
      question: "Expand $(x + 2)(x - 5)$ using FOIL. What are the 'Outer' terms you multiply?",
      questionType: 'text',
      options: [
        "$x$ and $x$",
        "$x$ and $-5$",
        "$2$ and $x$",
        "$2$ and $-5$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The 'Outer' terms are the first term of the first binomial and the second term of the second binomial. In $(x + 2)(x - 5)$, these are $x$ and $-5$.",
      explanationType: 'text'
    },
    {
      id: 'afn-outer-product',
      question: "Multiply the 'Outer' terms: $x \\times -5$. What is the result?",
      questionType: 'text',
      options: [
        "$-5x$",
        "$5x$",
        "$-4x$",
        "$x$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Multiply the coefficient ($-5$) by the variable ($x$). $x \\times -5 = -5x$.",
      explanationType: 'text'
    },
    {
      id: 'afn-inner-product',
      question: "Multiply the 'Inner' terms: $2$ and $x$. What is $2 \\times x$?",
      questionType: 'text',
      options: [
        "$2$",
        "$x$",
        "$2x$",
        "$x2$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Multiply the coefficient (2) by the variable ($x$). $2 \\times x = 2x$.",
      explanationType: 'text'
    },
    {
      id: 'afn-last-product',
      question: "Multiply the 'Last' terms: $2$ and $-5$. What is $2 \\times -5$?",
      questionType: 'text',
      options: [
        "$-3$",
        "$3$",
        "$-10$",
        "$10$"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "Multiply the numbers, remembering that a positive times a negative is negative: $2 \\times -5 = -10$.",
      explanationType: 'text'
    },
    {
      id: 'afn-combine',
      question: "Combine all the products: $x^2 + (-5x) + 2x + (-10)$. What is the simplified result?",
      questionType: 'text',
      options: [
        "$x^2 - 3x - 10$",
        "$x^2 - 7x - 10$",
        "$x^2 + 3x - 10$",
        "$x^2 - 10$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Combine the like $x$ terms: $-5x + 2x = -3x$. Combine the constant terms: $-10$. The $x^2$ term remains. The final result is $x^2 - 3x - 10$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Expansion ((x+2)(x-5))", "x² - 3x - 10");
      }
    }
  ]
};

// --- Multi-Step Question 4: Expanding and Simplifying ---
const expandAndSimplifyQuestion: MultiStepQuestion = {
  id: 'expand-and-simplify',
  title: 'Expanding and Simplifying Carefully',
  steps: [
    {
      id: 'eas-identify',
      question: "Expand $(3x - 1)(2x + 4)$ using FOIL. What are the 'First' terms you multiply?",
      questionType: 'text',
      options: [
        "$3x$ and $2x$",
        "$3x$ and $4$",
        "$-1$ and $2x$",
        "$-1$ and $4$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The 'First' terms are the first term in each binomial. In $(3x - 1)(2x + 4)$, the first terms are $3x$ and $2x$.",
      explanationType: 'text'
    },
    {
      id: 'eas-first-product',
      question: "Multiply the 'First' terms: $3x \\times 2x$. What is the result?",
      questionType: 'text',
      options: [
        "$5x$",
        "$6x$",
        "$5x^2$",
        "$6x^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 3, // Index of the correct option
      explanation: "Multiply the coefficients: $3 \\times 2 = 6$. Multiply the variables: $x \\times x = x^2$. So, $3x \\times 2x = 6x^2$.",
      explanationType: 'text'
    },
    {
      id: 'eas-outer-product',
      question: "Multiply the 'Outer' terms: $3x$ and $4$. What is $3x \\times 4$?",
      questionType: 'text',
      options: [
        "$7x$",
        "$12x$",
        "$34x$",
        "$x$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Multiply the coefficient (3) by the other coefficient (4) and keep the variable ($x$). $3x \\times 4 = 12x$.",
      explanationType: 'text'
    },
    {
      id: 'eas-inner-product',
      question: "Multiply the 'Inner' terms: $-1$ and $2x$. What is $-1 \\times 2x$?",
      questionType: 'text',
      options: [
        "$-2x$",
        "$2x$",
        "$-12x$",
        "$x$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Multiply the coefficient ($-1$) by the other coefficient (2) and keep the variable ($x$). $-1 \\times 2x = -2x$.",
      explanationType: 'text'
    },
    {
      id: 'eas-last-product',
      question: "Multiply the 'Last' terms: $-1$ and $4$. What is $-1 \\times 4$?",
      questionType: 'text',
      options: [
        "$-5$",
        "$3$",
        "$-4$",
        "$4$"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "Multiply the numbers, remembering that a negative times a positive is negative: $-1 \\times 4 = -4$.",
      explanationType: 'text'
    },
    {
      id: 'eas-combine',
      question: "Combine all the products: $6x^2 + 12x + (-2x) + (-4)$. What is the simplified result?",
      questionType: 'text',
      options: [
        "$6x^2 + 10x - 4$",
        "$6x^2 + 14x - 4$",
        "$6x^2 + 12x - 2x - 4$",
        "$4x^2 + 10x - 4$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Combine the like $x$ terms: $12x + (-2x) = 12x - 2x = 10x$. Combine the constant terms: $-4$. The $x^2$ term is $6x^2$. The final result is $6x^2 + 10x - 4$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Expansion ((3x-1)(2x+4))", "6x² + 10x - 4");
      }
    }
  ]
};

// --- Multi-Step Question 5: Applying the Method ---
const applyMethodQuestion: MultiStepQuestion = {
  id: 'apply-method',
  title: 'Applying the FOIL Method',
  steps: [
    {
      id: 'am-analyze',
      question: "Expand $(2x + 3)(x - 2)$ using FOIL. What are the 'Outer' terms you multiply?",
      questionType: 'text',
      options: [
        "$2x$ and $x$",
        "$2x$ and $-2$",
        "$3$ and $x$",
        "$3$ and $-2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The 'Outer' terms are the first term of the first binomial and the second term of the second binomial. In $(2x + 3)(x - 2)$, these are $2x$ and $-2$.",
      explanationType: 'text'
    },
    {
      id: 'am-outer-product',
      question: "Multiply the 'Outer' terms: $2x \\times -2$. What is the result?",
      questionType: 'text',
      options: [
        "$-4x$",
        "$4x$",
        "$-22x$",
        "$0$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Multiply the coefficient (2) by the other coefficient ($-2$) and keep the variable ($x$). $2x \\times -2 = -4x$.",
      explanationType: 'text'
    },
    {
      id: 'am-inner-product',
      question: "Multiply the 'Inner' terms: $3$ and $x$. What is $3 \\times x$?",
      questionType: 'text',
      options: [
        "$3$",
        "$x$",
        "$3x$",
        "$x3$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Multiply the coefficient (3) by the variable ($x$). $3 \\times x = 3x$.",
      explanationType: 'text'
    },
    {
      id: 'am-last-product',
      question: "Multiply the 'Last' terms: $3$ and $-2$. What is $3 \\times -2$?",
      questionType: 'text',
      options: [
        "$-5$",
        "$1$",
        "$-6$",
        "$6$"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "Multiply the numbers, remembering that a positive times a negative is negative: $3 \\times -2 = -6$.",
      explanationType: 'text'
    },
    {
      id: 'am-combine',
      question: "Combine all the products: $2x^2 + (-4x) + 3x + (-6)$. What is the simplified result?",
      questionType: 'text',
      options: [
        "$2x^2 - x - 6$",
        "$2x^2 - 7x - 6$",
        "$2x^2 + 7x - 6$",
        "$2x^2 + x - 6$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Combine the like $x$ terms: $-4x + 3x = -x$. Combine the constant terms: $-6$. The $x^2$ term is $2x^2$. The final result is $2x^2 - x - 6$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Expansion ((2x+3)(x-2))", "2x² - x - 6");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const foilMethodQuestions: MultiStepQuestion[] = [
  foilConceptQuestion,
  applyFOILSimpleQuestion,
  applyFOILNegativeQuestion,
  expandAndSimplifyQuestion,
  applyMethodQuestion
];


const ExpandingTwoBracketsFOIL: React.FC = () => {
  const foilRules = [
    "FOIL stands for First, Outer, Inner, Last.",
    "Identify the terms in each binomial: $(a + b)(c + d)$.",
    "Multiply the First terms: $a \\times c$.",
    "Multiply the Outer terms: $a \\times d$.",
    "Multiply the Inner terms: $b \\times c$.",
    "Multiply the Last terms: $b \\times d$.",
    "Add all four products together: $ac + ad + bc + bd$.",
    "Combine any like terms and simplify the expression.",
    "Be especially careful with signs when multiplying and adding terms."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Expanding Two Brackets (FOIL)"
        icon="✖️" // Or any other relevant icon like "🧮" or "📦"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={foilRules}
        rulesTitle="FOIL Expansion Rules:"
        questions={foilMethodQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderFOILSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default ExpandingTwoBracketsFOIL;