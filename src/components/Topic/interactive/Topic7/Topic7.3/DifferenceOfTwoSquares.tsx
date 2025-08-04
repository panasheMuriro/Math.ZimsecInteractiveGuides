/* eslint-disable @typescript-eslint/no-explicit-any */

import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary (if needed) ---
const renderDifferenceOfSquaresSummary = (sharedValues: { [key: string]: any }) => {
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
const dotwConceptQuestion: MultiStepQuestion = {
  id: 'dotw-concept',
  title: 'Understanding Difference of Two Squares',
  steps: [
    {
      id: 'dotwc-pattern',
      question: "Which of these expressions fits the pattern for the Difference of Two Squares?",
      questionType: 'text',
      options: [
        "$a^2 + b^2$",
        "$a^2 - b^2$",
        "$a^2 \\times b^2$",
        "$a^2 \\div b^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The Difference of Two Squares specifically refers to an expression where two perfect square terms are subtracted: $a^2 - b^2$.",
      explanationType: 'text'
    },
    {
      id: 'dotwc-formula',
      question: "What is the factored form of $a^2 - b^2$?",
      questionType: 'text',
      options: [
        "$(a - b)^2$",
        "$(a + b)^2$",
        "$(a + b)(a - b)$",
        "$a^2 + b^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "The standard formula for factoring the difference of two squares is $a^2 - b^2 = (a + b)(a - b)$.",
      explanationType: 'text'
    },
    {
      id: 'dotwc-why',
      question: "Why is it called the 'Difference' of Two Squares?",
      questionType: 'text',
      options: [
        "Because the factors are different",
        "Because it involves subtracting two squared terms",
        "Because the result is always different",
        "Because it's a difficult method"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "It's called the 'difference' because the operation between the two squared terms ($a^2$ and $b^2$) is subtraction (minus).",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Recognizing Perfect Squares ---
const recognizeSquaresQuestion: MultiStepQuestion = {
  id: 'recognize-squares',
  title: 'Recognizing Perfect Squares',
  steps: [
    {
      id: 'rsq-numbers',
      question: "Which of these numbers is NOT a perfect square?",
      questionType: 'text',
      options: [
        "$9$ (because $3^2 = 9$)",
        "$16$ (because $4^2 = 16$)",
        "$20$",
        "$25$ (because $5^2 = 25$)"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "A perfect square is a number that can be expressed as the product of an integer with itself. $9 = 3^2$, $16 = 4^2$, and $25 = 5^2$ are perfect squares. There is no integer $n$ such that $n^2 = 20$.",
      explanationType: 'text'
    },
    {
      id: 'rsq-variables',
      question: "Which of these expressions is a perfect square?",
      questionType: 'text',
      options: [
        "$x^3$",
        "$2x^2$",
        "$x^2$",
        "$x + x$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "$x^2$ is a perfect square because it can be written as $(x)^2$. $x^3$ is not a square, $2x^2$ has a coefficient that isn't a perfect square, and $x + x = 2x$ is not a square.",
      explanationType: 'text'
    },
    {
      id: 'rsq-complex',
      question: "How can the term $49y^4$ be written as a perfect square?",
      questionType: 'text',
      options: [
        "$(7y)^2$",
        "$(7y^2)^2$",
        "$7y^2$",
        "$(49y)^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "We need to find an expression that, when squared, gives $49y^4$. $49 = 7^2$ and $y^4 = (y^2)^2$. So, $49y^4 = (7)^2 \\times (y^2)^2 = (7y^2)^2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Perfect Square Form", "(7y²)²");
      }
    }
  ]
};

// --- Multi-Step Question 3: Factoring Simple Difference of Squares ---
const factorSimpleDotwQuestion: MultiStepQuestion = {
  id: 'factor-simple-dotw',
  title: 'Factoring a Simple Difference',
  steps: [
    {
      id: 'fsd-identify',
      question: "Factor $x^2 - 16$. First, identify the two perfect squares.",
      questionType: 'text',
      options: [
        "$x^2$ and $16$",
        "$x$ and $4$",
        "$x^2$ and $4$",
        "$x$ and $16$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The expression is $x^2 - 16$. These are the two terms being subtracted. We need to confirm they are perfect squares: $x^2 = (x)^2$ and $16 = (4)^2$.",
      explanationType: 'text'
    },
    {
      id: 'fsd-write-squares',
      question: "Write each term as a square: $x^2 = (\\;\\;\\;)^2$ and $16 = (\\;\\;\\;)^2$.",
      questionType: 'text',
      options: [
        "$x^2 = (x)^2$ and $16 = (4)^2$",
        "$x^2 = (x^2)^2$ and $16 = (16)^2$",
        "$x^2 = (2x)^2$ and $16 = (8)^2$",
        "$x^2 = (\\sqrt{x})^2$ and $16 = (\\sqrt{16})^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "$x^2$ is the square of $x$. $16$ is the square of $4$ (because $4 \\times 4 = 16$).",
      explanationType: 'text'
    },
    {
      id: 'fsd-apply-formula',
      question: "Using the formula $a^2 - b^2 = (a + b)(a - b)$, where $a = x$ and $b = 4$, what is the factored form?",
      questionType: 'text',
      options: [
        "$(x + 4)(x - 4)$",
        "$(x - 4)(x - 4)$",
        "$(x + 4)(x + 4)$",
        "$(x \\times 4)(x \\div 4)$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Substitute $a = x$ and $b = 4$ into the formula: $(a + b)(a - b) = (x + 4)(x - 4)$.",
      explanationType: 'text'
    },
    {
      id: 'fsd-check',
      question: "Check by expanding $(x + 4)(x - 4)$. What is the 'Outer' and 'Inner' product?",
      questionType: 'text',
      options: [
        "Outer: $x \\times (-4) = -4x$, Inner: $4 \\times x = 4x$",
        "Outer: $x \\times x = x^2$, Inner: $4 \\times (-4) = -16$",
        "Outer: $x \\times 4 = 4x$, Inner: $(-4) \\times x = -4x$",
        "Outer: $4 \\times (-4) = -16$, Inner: $x \\times x = x^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Using FOIL: First: $x \\times x = x^2$. Outer: $x \\times (-4) = -4x$. Inner: $4 \\times x = 4x$. Last: $4 \\times (-4) = -16$. Notice Outer + Inner: $-4x + 4x = 0$.",
      explanationType: 'text'
    },
    {
      id: 'fsd-final-check',
      question: "Combine the results from the check: $x^2 + (\\text{Outer} + \\text{Inner}) + \\text{Last}$. What is $x^2 + 0 + (-16)$?",
      questionType: 'text',
      options: [
        "$x^2 - 16$",
        "$x^2 + 16$",
        "$x^2$",
        "$-16$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Adding the terms: $x^2 + 0 + (-16) = x^2 - 16$. This matches the original expression, confirming the factorization $(x + 4)(x - 4)$ is correct.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Factored Form (x² - 16)", "(x + 4)(x - 4)");
      }
    }
  ]
};

// --- Multi-Step Question 4: Factoring Complex Difference of Squares ---
const factorComplexDotwQuestion: MultiStepQuestion = {
  id: 'factor-complex-dotw',
  title: 'Factoring a Complex Difference',
  steps: [
    {
      id: 'fcd-identify',
      question: "Factor $9x^2 - 4y^2$. Identify the two perfect squares.",
      questionType: 'text',
      options: [
        "$9x^2$ and $4y^2$",
        "$9x$ and $4y$",
        "$3x^2$ and $2y^2$",
        "$9$ and $4$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The expression is $9x^2 - 4y^2$. These are the two terms being subtracted. Confirm they are perfect squares: $9x^2 = (3x)^2$ and $4y^2 = (2y)^2$.",
      explanationType: 'text'
    },
    {
      id: 'fcd-write-squares',
      question: "Write each term as a square: $9x^2 = (\\;\\;\\;)^2$ and $4y^2 = (\\;\\;\\;)^2$.",
      questionType: 'text',
      options: [
        "$9x^2 = (3x)^2$ and $4y^2 = (2y)^2$",
        "$9x^2 = (9x)^2$ and $4y^2 = (4y)^2$",
        "$9x^2 = (3x^2)^2$ and $4y^2 = (2y^2)^2$",
        "$9x^2 = (\\sqrt{9}x)^2$ and $4y^2 = (\\sqrt{4}y)^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "$9x^2 = (3)^2 \\times (x)^2 = (3x)^2$. $4y^2 = (2)^2 \\times (y)^2 = (2y)^2$.",
      explanationType: 'text'
    },
    {
      id: 'fcd-apply-formula',
      question: "Using the formula $a^2 - b^2 = (a + b)(a - b)$, where $a = 3x$ and $b = 2y$, what is the factored form?",
      questionType: 'text',
      options: [
        "$(3x + 2y)(3x - 2y)$",
        "$(3x - 2y)(3x - 2y)$",
        "$(3x + 2y)(3x + 2y)$",
        "$(3x \\times 2y)(3x \\div 2y)$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Substitute $a = 3x$ and $b = 2y$ into the formula: $(a + b)(a - b) = (3x + 2y)(3x - 2y)$.",
      explanationType: 'text'
    },
    {
      id: 'fcd-check',
      question: "Check by expanding $(3x + 2y)(3x - 2y)$. What is the First term and the Last term?",
      questionType: 'text',
      options: [
        "First: $(3x) \\times (3x) = 9x^2$, Last: $(2y) \\times (-2y) = -4y^2$",
        "First: $3x \\times 2y = 6xy$, Last: $3x \\times (-2y) = -6xy$",
        "First: $9x^2$, Last: $4y^2$",
        "First: $3 \\times 3 = 9$, Last: $2 \\times (-2) = -4$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Using FOIL: First: $(3x) \\times (3x) = 9x^2$. Outer: $(3x) \\times (-2y) = -6xy$. Inner: $(2y) \\times (3x) = 6xy$. Last: $(2y) \\times (-2y) = -4y^2$. Notice Outer + Inner: $-6xy + 6xy = 0$. First + Last: $9x^2 + (-4y^2) = 9x^2 - 4y^2$.",
      explanationType: 'text'
    },
    {
      id: 'fcd-final-check',
      question: "Combine the non-zero results: $9x^2 + (-4y^2)$. Does this match the original expression?",
      questionType: 'text',
      options: [
        "Yes, it matches $9x^2 - 4y^2$",
        "No, it's different",
        "It's close but not exact",
        "It's the negative of the original"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The expansion $9x^2 - 4y^2$ is exactly the same as the original expression. This confirms that the factorization $(3x + 2y)(3x - 2y)$ is correct.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Factored Form (9x² - 4y²)", "(3x + 2y)(3x - 2y)");
      }
    }
  ]
};

// --- Multi-Step Question 5: Applying the Method ---
const applyDotwQuestion: MultiStepQuestion = {
  id: 'apply-dotw',
  title: 'Applying the Difference of Two Squares',
  steps: [
    {
      id: 'ad-analyze',
      question: "Factor $25m^2 - 36n^2$. Identify the two perfect squares.",
      questionType: 'text',
      options: [
        "$25m^2$ and $36n^2$",
        "$25m$ and $36n$",
        "$5m^2$ and $6n^2$",
        "$5m$ and $6n$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The expression is $25m^2 - 36n^2$. These are the two terms being subtracted. Confirm they are perfect squares: $25m^2 = (5m)^2$ and $36n^2 = (6n)^2$.",
      explanationType: 'text'
    },
    {
      id: 'ad-write-squares',
      question: "Write each term as a square: $25m^2 = (\\;\\;\\;)^2$ and $36n^2 = (\\;\\;\\;)^2$.",
      questionType: 'text',
      options: [
        "$25m^2 = (5m)^2$ and $36n^2 = (6n)^2$",
        "$25m^2 = (25m)^2$ and $36n^2 = (36n)^2$",
        "$25m^2 = (5m^2)^2$ and $36n^2 = (6n^2)^2$",
        "$25m^2 = (\\sqrt{25}m)^2$ and $36n^2 = (\\sqrt{36}n)^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "$25m^2 = (5)^2 \\times (m)^2 = (5m)^2$. $36n^2 = (6)^2 \\times (n)^2 = (6n)^2$.",
      explanationType: 'text'
    },
    {
      id: 'ad-apply-formula',
      question: "Using the formula $a^2 - b^2 = (a + b)(a - b)$, where $a = 5m$ and $b = 6n$, what is the factored form?",
      questionType: 'text',
      options: [
        "$(5m + 6n)(5m - 6n)$",
        "$(5m - 6n)(5m - 6n)$",
        "$(5m + 6n)(5m + 6n)$",
        "$(5m \\times 6n)(5m \\div 6n)$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Substitute $a = 5m$ and $b = 6n$ into the formula: $(a + b)(a - b) = (5m + 6n)(5m - 6n)$.",
      explanationType: 'text'
    },
    {
      id: 'ad-check',
      question: "(Bonus Check) Expanding $(5m + 6n)(5m - 6n)$, what are the First and Last terms?",
      questionType: 'text',
      options: [
        "First: $25m^2$, Last: $-36n^2$",
        "First: $5m \\times 5m$, Last: $6n \\times (-6n)$",
        "First: $10m$, Last: $-12n$",
        "First: $5 \\times 6$, Last: $m \\times n$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "First: $(5m) \\times (5m) = 25m^2$. Last: $(6n) \\times (-6n) = -36n^2$. The expansion confirms the factorization: $25m^2 - 36n^2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Factored Form (25m² - 36n²)", "(5m + 6n)(5m - 6n)");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const differenceOfTwoSquaresQuestions: MultiStepQuestion[] = [
  dotwConceptQuestion,
  recognizeSquaresQuestion,
  factorSimpleDotwQuestion,
  factorComplexDotwQuestion,
  applyDotwQuestion
];

const DifferenceOfTwoSquares: React.FC = () => {
  const dotwRules = [
    "The expression must be in the form $a^2 - b^2$ (difference of two squares).",
    "Identify the two terms that are perfect squares (e.g., $x^2$, $9=3^2$, $4y^2=(2y)^2$).",
    "Apply the formula: $a^2 - b^2 = (a + b)(a - b)$.",
    "The terms inside the parentheses are the square roots of the original terms.",
    "Always check your answer by expanding the factors using FOIL."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Difference of Two Squares"
        icon="🧮" // Or any other relevant icon like "➖" or "✖️"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={dotwRules}
        rulesTitle="Factoring Rules:"
        questions={differenceOfTwoSquaresQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderDifferenceOfSquaresSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default DifferenceOfTwoSquares;