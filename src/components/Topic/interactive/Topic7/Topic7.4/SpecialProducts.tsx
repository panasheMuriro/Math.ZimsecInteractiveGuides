/* eslint-disable @typescript-eslint/no-explicit-any */

import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary (if needed) ---
const renderSpecialProductsSummary = (sharedValues: { [key: string]: any }) => {
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

// --- Multi-Step Question 1: Concept and Patterns ---
const spConceptQuestion: MultiStepQuestion = {
  id: 'sp-concept',
  title: 'Understanding Special Products',
  steps: [
    {
      id: 'spc-define',
      question: "What is the main advantage of recognizing 'Special Products' in algebra?",
      questionType: 'text',
      options: [
        "They are the only products that exist",
        "They allow for faster expansion using memorized formulas",
        "They are always equal to zero",
        "They are only applicable to numbers, not variables"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "Special Products are common algebraic patterns for which shortcut formulas exist. Recognizing them allows you to expand expressions quickly without having to use methods like FOIL every time.",
      explanationType: 'text'
    },
    {
      id: 'spc-patterns',
      question: "Which of these is NOT one of the three main Special Product patterns?",
      questionType: 'text',
      options: [
        "$(a + b)^2 = a^2 + 2ab + b^2$",
        "$(a - b)^2 = a^2 - 2ab + b^2$",
        "$(a + b)(a - b) = a^2 - b^2$",
        "$(a + b)(c + d) = ac + ad + bc + bd$"
      ],
      optionType: 'text', // Options contain text
      correct: 3, // Index of the correct option
      explanation: "The first three options are the standard Special Product patterns: Square of a Sum, Square of a Difference, and Difference of Squares. The fourth option, $(a + b)(c + d) = ac + ad + bc + bd$, is the general FOIL expansion and not considered a 'special' shortcut pattern.",
      explanationType: 'text'
    },
    {
      id: 'spc-identify',
      question: "Which Special Product pattern does $(x + y)^2$ represent?",
      questionType: 'text',
      options: [
        "Difference of Squares",
        "Square of a Sum",
        "Square of a Difference",
        "None of the above"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "$(x + y)^2$ is of the form $(a + b)^2$, which is the 'Square of a Sum' pattern.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Square of a Sum ---
const squareOfSumQuestion: MultiStepQuestion = {
  id: 'square-of-sum',
  title: 'Expanding the Square of a Sum',
  steps: [
    {
      id: 'sos-identify',
      question: "Expand $(m + 4)^2$ using the Special Product pattern. Which pattern does this represent?",
      questionType: 'text',
      options: [
        "Difference of Squares: $(a + b)(a - b) = a^2 - b^2$",
        "Square of a Difference: $(a - b)^2 = a^2 - 2ab + b^2$",
        "Square of a Sum: $(a + b)^2 = a^2 + 2ab + b^2$",
        "It's not a Special Product"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "The expression $(m + 4)^2$ is a binomial squared where both terms are added. This matches the 'Square of a Sum' pattern: $(a + b)^2$.",
      explanationType: 'text'
    },
    {
      id: 'sos-apply',
      question: "Apply the 'Square of a Sum' formula: $(a + b)^2 = a^2 + 2ab + b^2$. Let $a = m$ and $b = 4$. What is the first term, $a^2$?",
      questionType: 'text',
      options: [
        "$m$",
        "$m^2$",
        "$2m$",
        "$4$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The first term in the formula is $a^2$. Substituting $a = m$, we get $a^2 = m^2$.",
      explanationType: 'text'
    },
    {
      id: 'sos-middle-term',
      question: "What is the middle term, $2ab$, when $a = m$ and $b = 4$?",
      questionType: 'text',
      options: [
        "$2m$",
        "$8m$",
        "$2m4$",
        "$6m$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The middle term is $2ab$. Substituting $a = m$ and $b = 4$: $2ab = 2 \\times m \\times 4 = 8m$.",
      explanationType: 'text'
    },
    {
      id: 'sos-last-term',
      question: "What is the last term, $b^2$, when $b = 4$?",
      questionType: 'text',
      options: [
        "$4$",
        "$8$",
        "$16$",
        "$2$"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "The last term is $b^2$. Substituting $b = 4$: $b^2 = 4^2 = 16$.",
      explanationType: 'text'
    },
    {
      id: 'sos-combine',
      question: "Combine the terms $m^2$, $8m$, and $16$. What is the expansion of $(m + 4)^2$?",
      questionType: 'text',
      options: [
        "$m^2 + 8m + 16$",
        "$m^2 + 16m + 8$",
        "$m^2 \\times 8m \\times 16$",
        "$8m + 16$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Add the three terms obtained from the formula: $a^2 + 2ab + b^2 = m^2 + 8m + 16$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Expansion ((m+4)²)", "m² + 8m + 16");
      }
    }
  ]
};

// --- Multi-Step Question 3: Square of a Difference ---
const squareOfDifferenceQuestion: MultiStepQuestion = {
  id: 'square-of-difference',
  title: 'Expanding the Square of a Difference',
  steps: [
    {
      id: 'sod-identify',
      question: "Expand $(3x - 2)^2$ using the Special Product pattern. Which pattern does this represent?",
      questionType: 'text',
      options: [
        "Difference of Squares: $(a + b)(a - b) = a^2 - b^2$",
        "Square of a Sum: $(a + b)^2 = a^2 + 2ab + b^2$",
        "Square of a Difference: $(a - b)^2 = a^2 - 2ab + b^2$",
        "It's not a Special Product"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "The expression $(3x - 2)^2$ is a binomial squared where the terms are subtracted. This matches the 'Square of a Difference' pattern: $(a - b)^2$.",
      explanationType: 'text'
    },
    {
      id: 'sod-apply',
      question: "Apply the 'Square of a Difference' formula: $(a - b)^2 = a^2 - 2ab + b^2$. Let $a = 3x$ and $b = 2$. What is the first term, $a^2$?",
      questionType: 'text',
      options: [
        "$3x$",
        "$9x$",
        "$9x^2$",
        "$6x^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "The first term in the formula is $a^2$. Substituting $a = 3x$, we get $a^2 = (3x)^2 = 3^2 \\times x^2 = 9x^2$.",
      explanationType: 'text'
    },
    {
      id: 'sod-middle-term',
      question: "What is the middle term, $-2ab$, when $a = 3x$ and $b = 2$?",
      questionType: 'text',
      options: [
        "$-2 \\times 3x \\times 2 = -12x$",
        "$-2 \\times 3x \\times 2 = -7x$",
        "$-2 \\times 3x \\times 2 = -6x$",
        "$-2 \\times 3x \\times 2 = 12x$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The middle term is $-2ab$. Substituting $a = 3x$ and $b = 2$: $-2ab = -2 \\times 3x \\times 2 = -12x$.",
      explanationType: 'text'
    },
    {
      id: 'sod-last-term',
      question: "What is the last term, $b^2$, when $b = 2$?",
      questionType: 'text',
      options: [
        "$2$",
        "$4$",
        "$8$",
        "$0$"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "The last term is $b^2$. Substituting $b = 2$: $b^2 = 2^2 = 4$.",
      explanationType: 'text'
    },
    {
      id: 'sod-combine',
      question: "Combine the terms $9x^2$, $-12x$, and $4$. What is the expansion of $(3x - 2)^2$?",
      questionType: 'text',
      options: [
        "$9x^2 - 12x + 4$",
        "$9x^2 + 12x + 4$",
        "$9x^2 - 12x - 4$",
        "$9x^2 - 8x + 4$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Add the three terms obtained from the formula: $a^2 - 2ab + b^2 = 9x^2 + (-12x) + 4 = 9x^2 - 12x + 4$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Expansion ((3x-2)²)", "9x² - 12x + 4");
      }
    }
  ]
};

// --- Multi-Step Question 4: Difference of Squares ---
const differenceOfSquaresQuestion: MultiStepQuestion = {
  id: 'difference-of-squares',
  title: 'Expanding the Difference of Squares',
  steps: [
    {
      id: 'dos-identify',
      question: "Expand $(5y + 3)(5y - 3)$ using the Special Product pattern. Which pattern does this represent?",
      questionType: 'text',
      options: [
        "Square of a Sum: $(a + b)^2 = a^2 + 2ab + b^2$",
        "Square of a Difference: $(a - b)^2 = a^2 - 2ab + b^2$",
        "Difference of Squares: $(a + b)(a - b) = a^2 - b^2$",
        "It's not a Special Product"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "The expression $(5y + 3)(5y - 3)$ is the product of a sum and a difference of the same two terms ($(5y)$ and $(3)$). This matches the 'Difference of Squares' pattern: $(a + b)(a - b)$.",
      explanationType: 'text'
    },
    {
      id: 'dos-apply',
      question: "Apply the 'Difference of Squares' formula: $(a + b)(a - b) = a^2 - b^2$. Let $a = 5y$ and $b = 3$. What is $a^2$?",
      questionType: 'text',
      options: [
        "$5y$",
        "$10y$",
        "$25y$",
        "$25y^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 3, // Index of the correct option
      explanation: "In the formula, the first term of the result is $a^2$. Substituting $a = 5y$, we get $a^2 = (5y)^2 = 5^2 \\times y^2 = 25y^2$.",
      explanationType: 'text'
    },
    {
      id: 'dos-second-term',
      question: "What is $b^2$ when $b = 3$?",
      questionType: 'text',
      options: [
        "$3$",
        "$6$",
        "$9$",
        "$0$"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "In the formula, the second term of the result is $b^2$. Substituting $b = 3$, we get $b^2 = 3^2 = 9$.",
      explanationType: 'text'
    },
    {
      id: 'dos-combine',
      question: "Combine the terms using the formula: $a^2 - b^2$. What is the expansion of $(5y + 3)(5y - 3)$?",
      questionType: 'text',
      options: [
        "$25y^2 + 9$",
        "$25y^2 - 9$",
        "$25y^2 \\times 9$",
        "$25y - 9$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Substitute the calculated terms into the formula: $a^2 - b^2 = 25y^2 - 9$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Expansion ((5y+3)(5y-3))", "25y² - 9");
      }
    }
  ]
};

// --- Multi-Step Question 5: Applying the Method ---
const applyMethodQuestion: MultiStepQuestion = {
  id: 'apply-method',
  title: 'Applying a Special Product Pattern',
  steps: [
    {
      id: 'am-analyze',
      question: "Expand $(2a + 5)^2$. Which Special Product pattern should you use?",
      questionType: 'text',
      options: [
        "Difference of Squares: $(a + b)(a - b) = a^2 - b^2$",
        "Square of a Sum: $(a + b)^2 = a^2 + 2ab + b^2$",
        "Square of a Difference: $(a - b)^2 = a^2 - 2ab + b^2$",
        "It's not a Special Product"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The expression $(2a + 5)^2$ is a binomial squared where both terms are added. This matches the 'Square of a Sum' pattern: $(a + b)^2$.",
      explanationType: 'text'
    },
    {
      id: 'am-apply',
      question: "Apply the 'Square of a Sum' formula: $(a + b)^2 = a^2 + 2ab + b^2$. Let $a = 2a$ and $b = 5$. What is $a^2$?",
      questionType: 'text',
      options: [
        "$2a$",
        "$4a$",
        "$4a^2$",
        "$2a^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Calculate $a^2$ where $a = 2a$: $a^2 = (2a)^2 = 2^2 \\times a^2 = 4a^2$.",
      explanationType: 'text'
    },
    {
      id: 'am-middle-term',
      question: "What is the middle term, $2ab$, when $a = 2a$ and $b = 5$?",
      questionType: 'text',
      options: [
        "$2 \\times 2a \\times 5 = 20a$",
        "$2 \\times 2a \\times 5 = 10a$",
        "$2 \\times 2a \\times 5 = 7a$",
        "$2 \\times 2a \\times 5 = 4a$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Calculate $2ab$ where $a = 2a$ and $b = 5$: $2ab = 2 \\times (2a) \\times 5 = 2 \\times 2 \\times 5 \\times a = 20a$.",
      explanationType: 'text'
    },
    {
      id: 'am-last-term',
      question: "What is $b^2$ when $b = 5$?",
      questionType: 'text',
      options: [
        "$5$",
        "$10$",
        "$25$",
        "$0$"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "Calculate $b^2$ where $b = 5$: $b^2 = 5^2 = 25$.",
      explanationType: 'text'
    },
    {
      id: 'am-combine',
      question: "Combine the terms $4a^2$, $20a$, and $25$. What is the expansion of $(2a + 5)^2$?",
      questionType: 'text',
      options: [
        "$4a^2 + 20a + 25$",
        "$4a^2 + 25a + 20$",
        "$4a^2 \\times 20a \\times 25$",
        "$20a + 25$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Add the three terms obtained from the formula: $a^2 + 2ab + b^2 = 4a^2 + 20a + 25$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Expansion ((2a+5)²)", "4a² + 20a + 25");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const specialProductsQuestions: MultiStepQuestion[] = [
  spConceptQuestion,
  squareOfSumQuestion,
  squareOfDifferenceQuestion,
  differenceOfSquaresQuestion,
  applyMethodQuestion
];


const SpecialProducts: React.FC = () => {
  const spRules = [
    "Memorize the three main Special Product patterns:",
    "1. Square of a Sum: $(a + b)^2 = a^2 + 2ab + b^2$",
    "2. Square of a Difference: $(a - b)^2 = a^2 - 2ab + b^2$",
    "3. Difference of Squares: $(a + b)(a - b) = a^2 - b^2$",
    "Identify which pattern matches the expression you need to expand.",
    "Substitute the terms of your expression into the corresponding formula.",
    "Simplify the terms generated by the formula.",
    "Write the final expanded expression.",
    "Check your answer by expanding manually (e.g., using FOIL for squares)."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Special Products"
        icon="✨" // Or any other relevant icon like "🧮" or "✖️"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={spRules}
        rulesTitle="Special Product Patterns:"
        questions={specialProductsQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderSpecialProductsSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default SpecialProducts;