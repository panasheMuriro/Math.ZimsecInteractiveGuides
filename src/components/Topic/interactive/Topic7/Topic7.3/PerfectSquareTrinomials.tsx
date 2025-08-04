/* eslint-disable @typescript-eslint/no-explicit-any */

import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary (if needed) ---
const renderPerfectSquareSummary = (sharedValues: { [key: string]: any }) => {
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

// --- Multi-Step Question 1: Concept and Pattern ---
const pstConceptQuestion: MultiStepQuestion = {
  id: 'pst-concept',
  title: 'Understanding Perfect Square Trinomials',
  steps: [
    {
      id: 'pstc-pattern',
      question: "Which of these expressions is a Perfect Square Trinomial?",
      questionType: 'text',
      options: [
        "$x^2 + 5x + 6$",
        "$x^2 + 6x + 9$",
        "$x^2 + 7x + 12$",
        "$x^2 + 8x + 15$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "A Perfect Square Trinomial is a special quadratic that can be written as the square of a binomial, like $(a + b)^2$ or $(a - b)^2$. $x^2 + 6x + 9$ fits this because it can be written as $(x + 3)^2$.",
      explanationType: 'text'
    },
    {
      id: 'pstc-forms',
      question: "What are the two standard forms of a Perfect Square Trinomial?",
      questionType: 'text',
      options: [
        "$a^2 + b^2$ and $a^2 - b^2$",
        "$a^2 + 2ab + b^2$ and $a^2 - 2ab + b^2$",
        "$a^2 + ab + b^2$ and $a^2 - ab + b^2$",
        "$(a + b)^3$ and $(a - b)^3$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The two standard forms are:\n1. $a^2 + 2ab + b^2 = (a + b)^2$\n2. $a^2 - 2ab + b^2 = (a - b)^2$\nNotice the first and last terms are perfect squares, and the middle term is twice the product of their roots.",
      explanationType: 'text'
    },
    {
      id: 'pstc-factored',
      question: "If a trinomial is of the form $a^2 + 2ab + b^2$, what is its factored form?",
      questionType: 'text',
      options: [
        "$(a \\times b)^2$",
        "$(a + b)^2$",
        "$(a - b)^2$",
        "$a^2 + b^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The trinomial $a^2 + 2ab + b^2$ factors into the square of the sum of the roots of the first and last terms: $(a + b)^2$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Recognizing Perfect Squares ---
const recognizeSquaresQuestion: MultiStepQuestion = {
  id: 'recognize-squares',
  title: 'Recognizing Perfect Square Terms',
  steps: [
    {
      id: 'rsq-first-last',
      question: "For the trinomial $9x^2 + 30x + 25$, which terms are perfect squares?",
      questionType: 'text',
      options: [
        "Only $9x^2$",
        "Only $25$",
        "Both $9x^2$ and $25$",
        "None of them"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Check if the first and last terms can be written as squares. $9x^2 = (3x)^2$ and $25 = (5)^2$. Both are perfect squares.",
      explanationType: 'text'
    },
    {
      id: 'rsq-write-squares',
      question: "Write the first and last terms of $9x^2 + 30x + 25$ as squares: $9x^2 = (\\;\\;\\;)^2$ and $25 = (\\;\\;\\;)^2$.",
      questionType: 'text',
      options: [
        "$9x^2 = (3x)^2$ and $25 = (5)^2$",
        "$9x^2 = (9x)^2$ and $25 = (25)^2$",
        "$9x^2 = (3x^2)^2$ and $25 = (5^2)^2$",
        "$9x^2 = (\\sqrt{9}x)^2$ and $25 = (\\sqrt{25})^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "$9x^2 = (3)^2 \\times (x)^2 = (3x)^2$. $25 = (5)^2$. So, $9x^2 = (3x)^2$ and $25 = (5)^2$.",
      explanationType: 'text'
    },
    {
      id: 'rsq-check-middle',
      question: "Using the roots $3x$ and $5$, calculate $2 \\times (3x) \\times (5)$. Does this match the middle term $30x$?",
      questionType: 'text',
      options: [
        "$2 \\times 3x \\times 5 = 30x$. Yes, it matches.",
        "$2 \\times 3x \\times 5 = 15x$. No, it doesn't match.",
        "$2 \\times 3x \\times 5 = 6x$. No, it doesn't match.",
        "$2 \\times 3x \\times 5 = 30$. No, it doesn't match."
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Calculate the product: $2 \\times (3x) \\times (5) = 2 \\times 3 \\times 5 \\times x = 30x$. This is exactly the middle term of the trinomial $9x^2 + 30x + 25$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Middle Term Check (9x²+30x+25)", "30x (Matches)");
      }
    }
  ]
};

// --- Multi-Step Question 3: Factoring Simple PST (+ve middle) ---
const factorSimplePSTQuestion: MultiStepQuestion = {
  id: 'factor-simple-pst',
  title: 'Factoring a Simple PST',
  steps: [
    {
      id: 'fspst-identify',
      question: "Factor $x^2 + 8x + 16$. Identify the roots of the first and last perfect square terms.",
      questionType: 'text',
      options: [
        "First term root: $x$, Last term root: $4$",
        "First term root: $x^2$, Last term root: $16$",
        "First term root: $1$, Last term root: $4$",
        "First term root: $\\sqrt{x}$, Last term root: $\\sqrt{16}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The first term is $x^2 = (x)^2$, so its root is $x$. The last term is $16 = (4)^2$, so its root is $4$.",
      explanationType: 'text'
    },
    {
      id: 'fspst-check-middle',
      question: "Calculate $2 \\times (\\text{root of first}) \\times (\\text{root of last}) = 2 \\times x \\times 4$. Does this equal the middle term $8x$?",
      questionType: 'text',
      options: [
        "Yes, $2 \\times x \\times 4 = 8x$",
        "No, $2 \\times x \\times 4 = 2x$",
        "No, $2 \\times x \\times 4 = 8$",
        "No, $2 \\times x \\times 4 = x$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Multiply: $2 \\times x \\times 4 = 8x$. This matches the middle term $8x$, confirming it's a perfect square trinomial.",
      explanationType: 'text'
    },
    {
      id: 'fspst-determine-sign',
      question: "The middle term is $+8x$. What sign goes between the roots $x$ and $4$ in the factored form?",
      questionType: 'text',
      options: [
        "Plus sign: $(x + 4)^2$",
        "Minus sign: $(x - 4)^2$",
        "Either plus or minus",
        "No sign is needed"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Since the middle term is positive ($+8x$), the factored form uses the plus sign. The pattern is $a^2 + 2ab + b^2 = (a + b)^2$. Here, $a=x$ and $b=4$, so the factor is $(x + 4)^2$.",
      explanationType: 'text'
    },
    {
      id: 'fspst-write-factored',
      question: "Write the fully factored form of $x^2 + 8x + 16$.",
      questionType: 'text',
      options: [
        "$(x + 4)^2$",
        "$(x - 4)^2$",
        "$(x + 4)(x - 4)$",
        "$x(x + 8) + 16$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Because the first term is $(x)^2$, the last term is $(4)^2$, and the middle term is $+2 \\times x \\times 4$, the trinomial factors as the square of the sum: $(x + 4)^2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Factored Form (x²+8x+16)", "(x + 4)²");
      }
    }
  ]
};

// --- Multi-Step Question 4: Factoring Complex PST (-ve middle) ---
const factorComplexPSTQuestion: MultiStepQuestion = {
  id: 'factor-complex-pst',
  title: 'Factoring a Complex PST',
  steps: [
    {
      id: 'fcpst-identify',
      question: "Factor $4x^2 - 20x + 25$. Identify the roots of the first and last perfect square terms.",
      questionType: 'text',
      options: [
        "First term root: $4x$, Last term root: $25$",
        "First term root: $2x$, Last term root: $5$",
        "First term root: $2x^2$, Last term root: $5^2$",
        "First term root: $\\sqrt{4}x$, Last term root: $\\sqrt{25}$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The first term is $4x^2 = (2x)^2$, so its root is $2x$. The last term is $25 = (5)^2$, so its root is $5$.",
      explanationType: 'text'
    },
    {
      id: 'fcpst-check-middle',
      question: "Calculate $2 \\times (\\text{root of first}) \\times (\\text{root of last}) = 2 \\times 2x \\times 5$. Does this equal the absolute value of the middle term $|-20x|$?",
      questionType: 'text',
      options: [
        "Yes, $2 \\times 2x \\times 5 = 20x$",
        "No, $2 \\times 2x \\times 5 = 10x$",
        "No, $2 \\times 2x \\times 5 = 4x$",
        "No, $2 \\times 2x \\times 5 = 20$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Multiply: $2 \\times 2x \\times 5 = 20x$. The absolute value of the middle term is $|-20x| = 20x$. They match.",
      explanationType: 'text'
    },
    {
      id: 'fcpst-determine-sign',
      question: "The middle term is $-20x$. What sign goes between the roots $2x$ and $5$ in the factored form?",
      questionType: 'text',
      options: [
        "Plus sign: $(2x + 5)^2$",
        "Minus sign: $(2x - 5)^2$",
        "Either plus or minus",
        "No sign is needed"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Since the middle term is negative ($-20x$), the factored form uses the minus sign. The pattern is $a^2 - 2ab + b^2 = (a - b)^2$. Here, $a=2x$ and $b=5$, so the factor is $(2x - 5)^2$.",
      explanationType: 'text'
    },
    {
      id: 'fcpst-write-factored',
      question: "Write the fully factored form of $4x^2 - 20x + 25$.",
      questionType: 'text',
      options: [
        "$(2x + 5)^2$",
        "$(2x - 5)^2$",
        "$(2x - 5)(2x + 5)$",
        "$2x(2x - 10) + 25$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Because the first term is $(2x)^2$, the last term is $(5)^2$, and the middle term is $-2 \\times 2x \\times 5$, the trinomial factors as the square of the difference: $(2x - 5)^2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Factored Form (4x²-20x+25)", "(2x - 5)²");
      }
    }
  ]
};

// --- Multi-Step Question 5: Applying the Method ---
const applyPSTQuestion: MultiStepQuestion = {
  id: 'apply-pst',
  title: 'Applying the PST Method',
  steps: [
    {
      id: 'apst-analyze',
      question: "Factor $x^2 + 14x + 49$. Is the first term $x^2$ a perfect square? If so, what is its root?",
      questionType: 'text',
      options: [
        "Yes, root is $x$",
        "Yes, root is $x^2$",
        "No, it's not a perfect square",
        "Yes, root is $1$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "$x^2$ is a perfect square because it can be written as $(x)^2$. Its root is $x$.",
      explanationType: 'text'
    },
    {
      id: 'apst-check-last',
      question: "Is the last term $49$ a perfect square? If so, what is its root?",
      questionType: 'text',
      options: [
        "Yes, root is $49$",
        "Yes, root is $7$",
        "No, it's not a perfect square",
        "Yes, root is $\\sqrt{49}$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "$49$ is a perfect square because $7 \\times 7 = 49$. It can be written as $(7)^2$. Its root is $7$.",
      explanationType: 'text'
    },
    {
      id: 'apst-check-middle',
      question: "Calculate $2 \\times (\\text{root of first}) \\times (\\text{root of last}) = 2 \\times x \\times 7$. Does this equal the middle term $14x$?",
      questionType: 'text',
      options: [
        "Yes, $2 \\times x \\times 7 = 14x$",
        "No, $2 \\times x \\times 7 = 7x$",
        "No, $2 \\times x \\times 7 = 2x$",
        "No, $2 \\times x \\times 7 = 14$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Multiply: $2 \\times x \\times 7 = 14x$. This matches the middle term $14x$, confirming it's a perfect square trinomial.",
      explanationType: 'text'
    },
    {
      id: 'apst-determine-sign',
      question: "The middle term is $+14x$. What sign goes between the roots $x$ and $7$ in the factored form?",
      questionType: 'text',
      options: [
        "Plus sign: $(x + 7)^2$",
        "Minus sign: $(x - 7)^2$",
        "Either plus or minus",
        "No sign is needed"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Since the middle term is positive ($+14x$), the factored form uses the plus sign. The pattern is $a^2 + 2ab + b^2 = (a + b)^2$. Here, $a=x$ and $b=7$, so the factor is $(x + 7)^2$.",
      explanationType: 'text'
    },
    {
      id: 'apst-write-factored',
      question: "Write the fully factored form of $x^2 + 14x + 49$.",
      questionType: 'text',
      options: [
        "$(x + 7)^2$",
        "$(x - 7)^2$",
        "$(x + 7)(x - 7)$",
        "$x(x + 14) + 49$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Because the first term is $(x)^2$, the last term is $(7)^2$, and the middle term is $+2 \\times x \\times 7$, the trinomial factors as the square of the sum: $(x + 7)^2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Factored Form (x²+14x+49)", "(x + 7)²");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const perfectSquareTrinomialsQuestions: MultiStepQuestion[] = [
  pstConceptQuestion,
  recognizeSquaresQuestion,
  factorSimplePSTQuestion,
  factorComplexPSTQuestion,
  applyPSTQuestion
];

const PerfectSquareTrinomials: React.FC = () => {
  const pstRules = [
    "Check if the FIRST and LAST terms are PERFECT SQUARES (e.g., $x^2$, $9=3^2$, $4y^2=(2y)^2$).",
    "Find the square roots of these terms.",
    "Calculate $2 \\times (\\text{root of first}) \\times (\\text{root of last})$.",
    "Check if this product EQUALS the ABSOLUTE VALUE of the MIDDLE TERM.",
    "If yes, it's a Perfect Square Trinomial.",
    "Write the factors as $(a + b)^2$ or $(a - b)^2$ based on the SIGN of the middle term.",
    "Always check your answer by expanding the factors."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Perfect Square Trinomials"
        icon="🧮" // Or any other relevant icon like "✅" or "✖️"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={pstRules}
        rulesTitle="Factoring Rules:"
        questions={perfectSquareTrinomialsQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderPerfectSquareSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default PerfectSquareTrinomials;