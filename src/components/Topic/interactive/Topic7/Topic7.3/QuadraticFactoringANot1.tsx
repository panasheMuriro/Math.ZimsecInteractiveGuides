/* eslint-disable @typescript-eslint/no-explicit-any */

import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary (if needed) ---
const renderQuadraticANot1Summary = (sharedValues: { [key: string]: any }) => {
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

// --- Multi-Step Question 1: Concept and Initial Steps ---
const qfan1ConceptQuestion: MultiStepQuestion = {
  id: 'qfan1-concept',
  title: 'Understanding Factoring (a≠1)',
  steps: [
    {
      id: 'qfan1c-identify',
      question: "Which of these expressions requires the 'a ≠ 1' factoring method?",
      questionType: 'text',
      options: [
        "$x^2 + 5x + 6$",
        "$2x^2 + 7x + 3$",
        "$x + 5$",
        "$3x + 2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The 'a ≠ 1' method is used when the coefficient of the $x^2$ term is not 1. In $2x^2 + 7x + 3$, the coefficient $a$ is 2.",
      explanationType: 'text'
    },
    {
      id: 'qfan1c-first-step',
      question: "For the quadratic $ax^2 + bx + c$, what is the FIRST step in the 'a ≠ 1' method?",
      questionType: 'text',
      options: [
        "Find two numbers that add to $b$",
        "Multiply $a \\times c$",
        "Split the middle term",
        "Factor out the GCD"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The first step is to calculate the product of the coefficient of $x^2$ ($a$) and the constant term ($c$). This product, $a \\times c$, is crucial for finding the correct numbers to split the middle term.",
      explanationType: 'text'
    },
    {
      id: 'qfan1c-why-ac',
      question: "Why do we calculate $a \\times c$?",
      questionType: 'text',
      options: [
        "To find the GCD of the coefficients",
        "To create a new quadratic where $a=1$",
        "To find two numbers that multiply to this value and add to $b$",
        "To simplify the expression"
      ],
      optionType: 'text',
      correct: 2, // Index of the correct option
      explanation: "The key insight is that we need two numbers whose product is $a \\times c$ and whose sum is $b$ (the coefficient of the $x$ term). This allows us to rewrite the middle term ($bx$) as the sum of two terms, enabling factoring by grouping.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Finding the Numbers ---
const findNumbersQuestion: MultiStepQuestion = {
  id: 'find-numbers',
  title: 'Finding the Key Numbers',
  steps: [
    {
      id: 'fn-identify',
      question: "Factor $3x^2 + 10x + 8$. What is $a$, $b$, and $c$?",
      questionType: 'text',
      options: [
        "$a = 3$, $b = 10$, $c = 8$",
        "$a = 8$, $b = 10$, $c = 3$",
        "$a = 3$, $b = 8$, $c = 10$",
        "$a = 10$, $b = 3$, $c = 8$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "In the standard form $ax^2 + bx + c$, $a$ is the coefficient of $x^2$, $b$ is the coefficient of $x$, and $c$ is the constant. So, $a = 3$, $b = 10$, $c = 8$.",
      explanationType: 'text'
    },
    {
      id: 'fn-calculate-ac',
      question: "Calculate $a \\times c$ for $3x^2 + 10x + 8$.",
      questionType: 'text',
      options: [
        "$30$",
        "$24$",
        "$13$",
        "$11$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Multiply the coefficient of $x^2$ ($a = 3$) by the constant term ($c = 8$): $a \\times c = 3 \\times 8 = 24$.",
      explanationType: 'text'
    },
    {
      id: 'fn-find-factors',
      question: "Find two numbers that multiply to $a \\times c = 24$ and add to $b = 10$. What are the factor pairs of 24?",
      questionType: 'text',
      options: [
        "$(1, 24)$, $(2, 12)$, $(3, 8)$, $(4, 6)$",
        "$(1, 24)$, $(2, 12)$",
        "$(3, 8)$",
        "$(4, 6)$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "List all pairs of integers that multiply to give 24. These are $1 \\times 24 = 24$, $2 \\times 12 = 24$, $3 \\times 8 = 24$, and $4 \\times 6 = 24$. So the pairs are $(1, 24)$, $(2, 12)$, $(3, 8)$, $(4, 6)$.",
      explanationType: 'text'
    },
    {
      id: 'fn-check-sum',
      question: "Which pair of factors from $(1, 24)$, $(2, 12)$, $(3, 8)$, $(4, 6)$ adds up to $b = 10$?",
      questionType: 'text',
      options: [
        "$1 + 24 = 25$",
        "$2 + 12 = 14$",
        "$3 + 8 = 11$",
        "$4 + 6 = 10$"
      ],
      optionType: 'text', // Options contain text
      correct: 3, // Index of the correct option
      explanation: "Calculate the sum for each pair: $1 + 24 = 25$, $2 + 12 = 14$, $3 + 8 = 11$, $4 + 6 = 10$. The pair $(4, 6)$ adds up to 10.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Key Numbers (3x²+10x+8)", "4 and 6");
      }
    }
  ]
};

// --- Multi-Step Question 3: Splitting and Grouping ---
const splitAndGroupQuestion: MultiStepQuestion = {
  id: 'split-and-group',
  title: 'Splitting the Middle Term & Grouping',
  steps: [
    {
      id: 'sag-split',
      question: "We found the numbers 4 and 6 for $3x^2 + 10x + 8$. How do we split the middle term $10x$?",
      questionType: 'text',
      options: [
        "Rewrite $10x$ as $4x + 6x$",
        "Rewrite $10x$ as $4x \\times 6x$",
        "Rewrite $10x$ as $4 + 6$",
        "Rewrite $10x$ as $10x + 4 + 6$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "We replace the middle term ($bx$) with the sum of the two numbers we found. So, $10x$ becomes $4x + 6x$.",
      explanationType: 'text'
    },
    {
      id: 'sag-rewrite',
      question: "Rewrite the full expression $3x^2 + 10x + 8$ using the split middle term.",
      questionType: 'text',
      options: [
        "$3x^2 + 4x + 6x + 8$",
        "$3x^2 + (4x + 6x) + 8$",
        "$3x^2 \\times 4x + 6x + 8$",
        "$3x^2 + 4x + 6x \\times 8$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Substitute $10x$ with $4x + 6x$ in the original expression: $3x^2 + 10x + 8 = 3x^2 + 4x + 6x + 8$.",
      explanationType: 'text'
    },
    {
      id: 'sag-group',
      question: "Group the terms in pairs: $(3x^2 + 4x) + (6x + 8)$. What is the GCD of the first pair $3x^2 + 4x$?",
      questionType: 'text',
      options: [
        "$x$",
        "$3x$",
        "$4$",
        "$3$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Look for the greatest common divisor of the terms $3x^2$ and $4x$. The GCD of the coefficients 3 and 4 is 1. The GCD of the variable parts $x^2$ and $x$ is $x$. So, the GCD of the terms is $x$.",
      explanationType: 'text'
    },
    {
      id: 'sag-factor-pairs',
      question: "Factor out the GCD from each pair. $(3x^2 + 4x) = x(\\;\\;\\;)$ and $(6x + 8) = 2(\\;\\;\\;)$. What goes in the parentheses?",
      questionType: 'text',
      options: [
        "$x(3x + 4)$ and $2(3x + 4)$",
        "$x(3x) + x(4)$ and $2(3x) + 2(4)$",
        "$x(3x + 4)$ and $2(3x + 4)$",
        "$x(3x^2) + x(4x)$ and $2(3x) + 2(4)$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option (also 2, but 0 is first)
      explanation: "For the first pair: $3x^2 + 4x$. Factor out $x$: $x(3x + 4)$. For the second pair: $6x + 8$. Factor out $2$: $2(3x + 4)$. So, the expression becomes $x(3x + 4) + 2(3x + 4)$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 4: Factoring Out the Binomial ---
const factorBinomialQuestion: MultiStepQuestion = {
  id: 'factor-binomial',
  title: 'Factoring Out the Common Binomial',
  steps: [
    {
      id: 'fb-identify-common',
      question: "After grouping and factoring, we have $x(3x + 4) + 2(3x + 4)$. What is the common factor in both terms?",
      questionType: 'text',
      options: [
        "$x$",
        "$2$",
        "$3x + 4$",
        "$x + 2$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Both terms contain the binomial expression $(3x + 4)$. This is the common factor that can be factored out.",
      explanationType: 'text'
    },
    {
      id: 'fb-factor-out',
      question: "Factor out the common binomial $(3x + 4)$ from $x(3x + 4) + 2(3x + 4)$.",
      questionType: 'text',
      options: [
        "$(3x + 4)(x + 2)$",
        "$(3x + 4)(x) + (3x + 4)(2)$",
        "$(3x + 4) + (x + 2)$",
        "$(3x + 4)(x \\times 2)$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "When you factor out $(3x + 4)$, you are left with what was being multiplied by it in each term. From the first term $x(3x + 4)$, you have $x$. From the second term $2(3x + 4)$, you have $2$. So, factoring out $(3x + 4)$ gives $(3x + 4)(x + 2)$.",
      explanationType: 'text'
    },
    {
      id: 'fb-write-factored',
      question: "What is the fully factored form of $3x^2 + 10x + 8$?",
      questionType: 'text',
      options: [
        "$(3x + 4)(x + 2)$",
        "$(x + 2)(3x + 4)$",
        "Both $(3x + 4)(x + 2)$ and $(x + 2)(3x + 4)$ are correct",
        "$3x^2 + 10x + 8$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "The factored form is the product of the common binomial and the remaining terms in parentheses. Both $(3x + 4)(x + 2)$ and $(x + 2)(3x + 4)$ represent the same product due to the commutative property of multiplication.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Factored Form (3x²+10x+8)", "(3x + 4)(x + 2)");
      }
    },
    {
      id: 'fb-check',
      question: "(Bonus Check) Expand $(3x + 4)(x + 2)$ using FOIL. What is the 'First' and 'Last' product?",
      questionType: 'text',
      options: [
        "First: $3x \\times x = 3x^2$, Last: $4 \\times 2 = 8$",
        "First: $3x \\times 2 = 6x$, Last: $4 \\times x = 4x$",
        "First: $3 \\times 4 = 12$, Last: $x \\times 2 = 2x$",
        "First: $3x^2$, Last: $8$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Using FOIL: First: $3x \\times x = 3x^2$. Outer: $3x \\times 2 = 6x$. Inner: $4 \\times x = 4x$. Last: $4 \\times 2 = 8$. First product is $3x^2$, Last product is $8$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 5: Applying the Entire Method ---
const applyFullMethodQuestion: MultiStepQuestion = {
  id: 'apply-full-method',
  title: 'Applying the Full Method',
  steps: [
    {
      id: 'afm-analyze',
      question: "Factor $2x^2 + 9x + 4$. What is $a \\times c$?",
      questionType: 'text',
      options: [
        "$8$",
        "$18$",
        "$6$",
        "$13$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Identify $a = 2$, $b = 9$, $c = 4$. Calculate $a \\times c = 2 \\times 4 = 8$.",
      explanationType: 'text'
    },
    {
      id: 'afm-find-numbers',
      question: "Find two numbers that multiply to $8$ and add to $b = 9$.",
      questionType: 'text',
      options: [
        "$1$ and $8$",
        "$2$ and $4$",
        "$-1$ and $-8$",
        "$1$ and $9$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "List factor pairs of 8: $(1, 8)$, $(2, 4)$, $(-1, -8)$, $(-2, -4)$. Check sums: $1 + 8 = 9$, $2 + 4 = 6$, $-1 + (-8) = -9$, $-2 + (-4) = -6$. The pair $(1, 8)$ multiplies to 8 and adds to 9.",
      explanationType: 'text'
    },
    {
      id: 'afm-split-middle',
      question: "Split the middle term $9x$ using the numbers 1 and 8.",
      questionType: 'text',
      options: [
        "$9x = 1x + 8x$",
        "$9x = 1 + 8x$",
        "$9x = 1x \\times 8x$",
        "$9x = 1 + 8$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Replace $9x$ with the sum of $1x$ and $8x$: $9x = 1x + 8x$.",
      explanationType: 'text'
    },
    {
      id: 'afm-rewrite-expression',
      question: "Rewrite the full expression $2x^2 + 9x + 4$ with the split middle term.",
      questionType: 'text',
      options: [
        "$2x^2 + 1x + 8x + 4$",
        "$2x^2 + (1x + 8x) + 4$",
        "$2x^2 \\times 1x + 8x + 4$",
        "$2x^2 + 1x + 8x \\times 4$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Substitute $9x$ with $1x + 8x$: $2x^2 + 9x + 4 = 2x^2 + 1x + 8x + 4$.",
      explanationType: 'text'
    },
    {
      id: 'afm-group-and-factor',
      question: "Group and factor: $(2x^2 + 1x) + (8x + 4)$. What do you get after factoring each group?",
      questionType: 'text',
      options: [
        "$x(2x + 1) + 4(2x + 1)$",
        "$2x(x + 1) + 4(2x + 1)$",
        "$x(2x + 1) + 2(4x + 2)$",
        "$2x(x) + x(1) + 4(2x) + 4(1)$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Factor the first group $2x^2 + 1x = x(2x + 1)$. Factor the second group $8x + 4 = 4(2x + 1)$. This gives $x(2x + 1) + 4(2x + 1)$.",
      explanationType: 'text'
    },
    {
      id: 'afm-final-factor',
      question: "Factor out the common binomial from $x(2x + 1) + 4(2x + 1)$.",
      questionType: 'text',
      options: [
        "$(2x + 1)(x + 4)$",
        "$(x + 4)(2x + 1)$",
        "Both $(2x + 1)(x + 4)$ and $(x + 4)(2x + 1)$ are correct",
        "$(2x + 1) + (x + 4)$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "The common binomial is $(2x + 1)$. Factoring it out leaves $x$ from the first term and $4$ from the second term. So, the result is $(2x + 1)(x + 4)$ or $(x + 4)(2x + 1)$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Factored Form (2x²+9x+4)", "(2x + 1)(x + 4)");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const quadraticFactoringANot1Questions: MultiStepQuestion[] = [
  qfan1ConceptQuestion,
  findNumbersQuestion,
  splitAndGroupQuestion,
  factorBinomialQuestion,
  applyFullMethodQuestion
];

const QuadraticFactoringANot1: React.FC = () => {
  const qfan1Rules = [
    "Identify the quadratic in the form $ax^2 + bx + c$ where $a \\neq 1$.",
    "Calculate the product $a \\times c$.",
    "Find two numbers that multiply to $a \\times c$ AND add to $b$.",
    "Split the middle term ($bx$) into the sum of these two numbers.",
    "Group the first two terms and the last two terms.",
    "Factor out the GCD from each group.",
    "Factor out the common binomial factor.",
    "Check your answer by expanding the factors using FOIL."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Quadratic Factoring (a ≠ 1)"
        icon="APolynomial" // Or any other relevant icon like "✖️" or "🧮"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={qfan1Rules}
        rulesTitle="Factoring Rules:"
        questions={quadraticFactoringANot1Questions} // Pass the array of question objects
        renderSharedValuesSummary={renderQuadraticANot1Summary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default QuadraticFactoringANot1