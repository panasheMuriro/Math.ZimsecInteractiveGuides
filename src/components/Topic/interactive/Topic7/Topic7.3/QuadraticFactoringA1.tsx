/* eslint-disable @typescript-eslint/no-explicit-any */

import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary (if needed) ---
const renderQuadraticA1Summary = (sharedValues: { [key: string]: any }) => {
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
const qfa1ConceptQuestion: MultiStepQuestion = {
  id: 'qfa1-concept',
  title: 'Understanding Quadratic Factoring (a=1)',
  steps: [
    {
      id: 'qfa1c-pattern',
      question: "Which of these expressions is a quadratic in the standard form $x^2 + bx + c$ where the coefficient of $x^2$ is 1?",
      questionType: 'text',
      options: [
        "$x^2 + 5x + 6$",
        "$2x^2 + 3x + 1$",
        "$x^3 + 2x + 1$",
        "$x + 5$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The standard form for this type of factoring is $x^2 + bx + c$. This means the coefficient of $x^2$ must be 1. $x^2 + 5x + 6$ fits this form with $b=5$ and $c=6$.",
      explanationType: 'text'
    },
    {
      id: 'qfa1c-goal',
      question: "What is the main goal when factoring a quadratic like $x^2 + bx + c$?",
      questionType: 'text',
      options: [
        "To find the value of $x$",
        "To express it as a product of two binomials: $(x + m)(x + n)$",
        "To solve for $b$ and $c$",
        "To graph the parabola"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Factoring means rewriting the quadratic expression as a multiplication (product) of two simpler expressions (binomials), typically in the form $(x + m)(x + n)$.",
      explanationType: 'text'
    },
    {
      id: 'qfa1c-logic',
      question: "For the quadratic $x^2 + bx + c$, if it factors as $(x + m)(x + n)$, what is the relationship between $b$, $c$, $m$, and $n$?",
      questionType: 'text',
      options: [
        "$b = m \\times n$ and $c = m + n$",
        "$b = m + n$ and $c = m \\times n$",
        "$b = m - n$ and $c = m \\div n$",
        "$b = m^2 + n^2$ and $c = m \\times n$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "When you expand $(x + m)(x + n)$, you get $x^2 + nx + mx + mn = x^2 + (m+n)x + mn$. Comparing to $x^2 + bx + c$, we see $b = m + n$ (coefficient of $x$) and $c = m \\times n$ (constant term).",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Factoring with Positive Terms ---
const factorPositiveQuadQuestion: MultiStepQuestion = {
  id: 'factor-positive-quad',
  title: 'Factoring with Positive Terms',
  steps: [
    {
      id: 'fpq-identify',
      question: "Factor $x^2 + 9x + 20$. Identify $b$ and $c$.",
      questionType: 'text',
      options: [
        "$b = 9$, $c = 20$",
        "$b = 20$, $c = 9$",
        "$b = 1$, $c = 20$",
        "$b = 9$, $c = 1$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "In the form $x^2 + bx + c$, $b$ is the coefficient of $x$, and $c$ is the constant term. So, $b = 9$ and $c = 20$.",
      explanationType: 'text'
    },
    {
      id: 'fpq-find-factors',
      question: "Find two numbers that multiply to $c = 20$ and add to $b = 9$. What are the factor pairs of 20?",
      questionType: 'text',
      options: [
        "$(1, 20)$, $(2, 10)$, $(4, 5)$",
        "$(1, 20)$, $(2, 10)$",
        "$(4, 5)$",
        "$(1, 20)$, $(4, 5)$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "List all pairs of integers that multiply to give 20. These are $1 \\times 20 = 20$, $2 \\times 10 = 20$, and $4 \\times 5 = 20$. So the pairs are $(1, 20)$, $(2, 10)$, and $(4, 5)$.",
      explanationType: 'text'
    },
    {
      id: 'fpq-check-sum',
      question: "Which pair of factors from $(1, 20)$, $(2, 10)$, $(4, 5)$ adds up to 9?",
      questionType: 'text',
      options: [
        "$1 + 20 = 21$",
        "$2 + 10 = 12$",
        "$4 + 5 = 9$",
        "None of them"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Calculate the sum for each pair: $1 + 20 = 21$, $2 + 10 = 12$, $4 + 5 = 9$. The pair $(4, 5)$ adds up to 9.",
      explanationType: 'text'
    },
    {
      id: 'fpq-write-factors',
      question: "Using the numbers 4 and 5, write the factored form $(x + m)(x + n)$.",
      questionType: 'text',
      options: [
        "$(x + 4)(x + 5)$",
        "$(x + 4)(x - 5)$",
        "$(x - 4)(x - 5)$",
        "$(x - 4)(x + 5)$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The numbers we found are $m = 4$ and $n = 5$. Substitute them into the factored form: $(x + m)(x + n) = (x + 4)(x + 5)$.",
      explanationType: 'text'
    },
    {
      id: 'fpq-check',
      question: "Check by expanding $(x + 4)(x + 5)$. What is the 'First' and 'Last' product using FOIL?",
      questionType: 'text',
      options: [
        "First: $x \\times x = x^2$, Last: $4 \\times 5 = 20$",
        "First: $x \\times 4 = 4x$, Last: $x \\times 5 = 5x$",
        "First: $x^2$, Last: $9x$",
        "First: $4 \\times 5 = 20$, Last: $x \\times x = x^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Using FOIL: First: $x \\times x = x^2$. Outer: $x \\times 5 = 5x$. Inner: $4 \\times x = 4x$. Last: $4 \\times 5 = 20$. First product is $x^2$, Last product is $20$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Factored Form (x² + 9x + 20)", "(x + 4)(x + 5)");
      }
    }
  ]
};

// --- Multi-Step Question 3: Factoring with Negative Middle Coefficient ---
const factorNegativeMiddleQuestion: MultiStepQuestion = {
  id: 'factor-negative-middle',
  title: 'Factoring with Negative Middle Term',
  steps: [
    {
      id: 'fnm-identify',
      question: "Factor $x^2 - 7x + 12$. Identify $b$ and $c$.",
      questionType: 'text',
      options: [
        "$b = -7$, $c = 12$",
        "$b = 7$, $c = 12$",
        "$b = -7$, $c = -12$",
        "$b = 12$, $c = -7$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "In the form $x^2 + bx + c$, $b$ is the coefficient of $x$, including its sign, and $c$ is the constant term. So, $b = -7$ and $c = 12$.",
      explanationType: 'text'
    },
    {
      id: 'fnm-find-factors',
      question: "Find two numbers that multiply to $c = 12$ and add to $b = -7$. What are the factor pairs of 12?",
      questionType: 'text',
      options: [
        "$(1, 12)$, $(2, 6)$, $(3, 4)$",
        "$(1, 12)$, $(2, 6)$",
        "$(3, 4)$",
        "$(1, 12)$, $(3, 4)$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "List all pairs of integers that multiply to give 12. These are $1 \\times 12 = 12$, $2 \\times 6 = 12$, and $3 \\times 4 = 12$. So the pairs are $(1, 12)$, $(2, 6)$, and $(3, 4)$.",
      explanationType: 'text'
    },
    {
      id: 'fnm-check-sum',
      question: "We need the sum to be $-7$. Which pair of factors from $(1, 12)$, $(2, 6)$, $(3, 4)$ can give a negative sum?",
      questionType: 'text',
      options: [
        "Both numbers must be positive",
        "Both numbers must be negative",
        "One number must be positive, one negative",
        "It's impossible"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "To get a negative sum, both numbers need to be negative (e.g., $-3 + (-4) = -7$). To get a positive product ($c=12$), both numbers must have the same sign (either both positive or both negative). Since the sum is negative, both must be negative.",
      explanationType: 'text'
    },
    {
      id: 'fnm-find-negative-pair',
      question: "Consider the negative counterparts of the pairs: $(-1, -12)$, $(-2, -6)$, $(-3, -4)$. Which pair adds to $-7$?",
      questionType: 'text',
      options: [
        "$-1 + (-12) = -13$",
        "$-2 + (-6) = -8$",
        "$-3 + (-4) = -7$",
        "$-1 + (-12) = 13$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Calculate the sum for the negative pairs: $-1 + (-12) = -13$, $-2 + (-6) = -8$, $-3 + (-4) = -7$. The pair $(-3, -4)$ adds up to $-7$.",
      explanationType: 'text'
    },
    {
      id: 'fnm-write-factors',
      question: "Using $m = -3$ and $n = -4$, write the factored form $(x + m)(x + n)$.",
      questionType: 'text',
      options: [
        "$(x - 3)(x - 4)$",
        "$(x + (-3))(x + (-4))$",
        "$(x - 3)(x + 4)$",
        "Both $(x - 3)(x - 4)$ and $(x + (-3))(x + (-4))$ are correct"
      ],
      optionType: 'text', // Options contain text
      correct: 3, // Index of the correct option
      explanation: "$m = -3$ and $n = -4$. Substituting gives $(x + (-3))(x + (-4))$. This is the same as $(x - 3)(x - 4)$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Factored Form (x² - 7x + 12)", "(x - 3)(x - 4)");
      }
    }
  ]
};

// --- Multi-Step Question 4: Factoring with Negative Constant ---
const factorNegativeConstantQuestion: MultiStepQuestion = {
  id: 'factor-negative-constant',
  title: 'Factoring with a Negative Constant',
  steps: [
    {
      id: 'fnc-identify',
      question: "Factor $x^2 + 2x - 15$. Identify $b$ and $c$.",
      questionType: 'text',
      options: [
        "$b = 2$, $c = -15$",
        "$b = -2$, $c = 15$",
        "$b = 2$, $c = 15$",
        "$b = -15$, $c = 2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "In the form $x^2 + bx + c$, $b$ is the coefficient of $x$, and $c$ is the constant term. So, $b = 2$ and $c = -15$.",
      explanationType: 'text'
    },
    {
      id: 'fnc-find-factors',
      question: "Find two numbers that multiply to $c = -15$ and add to $b = 2$. What are some factor pairs of $-15$?",
      questionType: 'text',
      options: [
        "$(1, -15)$, $(-1, 15)$, $(3, -5)$, $(-3, 5)$",
        "$(1, 15)$, $(3, 5)$",
        "$(1, -15)$, $(3, -5)$",
        "$(1, 15)$, $(-1, -15)$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "To get a negative product ($c=-15$), one factor must be positive and the other negative. The pairs are: $1 \\times (-15) = -15$, $-1 \\times 15 = -15$, $3 \\times (-5) = -15$, $-3 \\times 5 = -15$. So the pairs are $(1, -15)$, $(-1, 15)$, $(3, -5)$, $(-3, 5)$.",
      explanationType: 'text'
    },
    {
      id: 'fnc-check-sum',
      question: "Which pair of factors from $(1, -15)$, $(-1, 15)$, $(3, -5)$, $(-3, 5)$ adds up to 2?",
      questionType: 'text',
      options: [
        "$1 + (-15) = -14$",
        "$-1 + 15 = 14$",
        "$3 + (-5) = -2$",
        "$-3 + 5 = 2$"
      ],
      optionType: 'text', // Options contain text
      correct: 3, // Index of the correct option
      explanation: "Calculate the sum for each pair: $1 + (-15) = -14$, $-1 + 15 = 14$, $3 + (-5) = -2$, $-3 + 5 = 2$. The pair $(-3, 5)$ adds up to 2.",
      explanationType: 'text'
    },
    {
      id: 'fnc-write-factors',
      question: "Using $m = -3$ and $n = 5$, write the factored form $(x + m)(x + n)$.",
      questionType: 'text',
      options: [
        "$(x - 3)(x + 5)$",
        "$(x + (-3))(x + 5)$",
        "$(x - 3)(x - 5)$",
        "Both $(x - 3)(x + 5)$ and $(x + (-3))(x + 5)$ are correct"
      ],
      optionType: 'text', // Options contain text
      correct: 3, // Index of the correct option
      explanation: "$m = -3$ and $n = 5$. Substituting gives $(x + (-3))(x + 5)$. This is the same as $(x - 3)(x + 5)$.",
      explanationType: 'text'
    },
    {
      id: 'fnc-check',
      question: "(Bonus Check) Expanding $(x - 3)(x + 5)$, what is the 'Outer' and 'Inner' product using FOIL?",
      questionType: 'text',
      options: [
        "Outer: $x \\times 5 = 5x$, Inner: $-3 \\times x = -3x$",
        "Outer: $x \\times x = x^2$, Inner: $-3 \\times 5 = -15$",
        "Outer: $-3 \\times 5 = -15$, Inner: $x \\times x = x^2$",
        "Outer: $-3 + 5 = 2$, Inner: $x \\times x = x^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Using FOIL: First: $x \\times x = x^2$. Outer: $x \\times 5 = 5x$. Inner: $-3 \\times x = -3x$. Last: $-3 \\times 5 = -15$. Outer product is $5x$, Inner product is $-3x$. Sum: $5x + (-3x) = 2x$, matching the middle term of the original quadratic.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Factored Form (x² + 2x - 15)", "(x - 3)(x + 5)");
      }
    }
  ]
};

// --- Multi-Step Question 5: Applying the Method ---
const applyFactoringQuestion: MultiStepQuestion = {
  id: 'apply-factoring',
  title: 'Applying the Factoring Method',
  steps: [
    {
      id: 'af-analyze',
      question: "Factor $x^2 - x - 12$. What are $b$ and $c$?",
      questionType: 'text',
      options: [
        "$b = -1$, $c = -12$",
        "$b = 1$, $c = -12$",
        "$b = -1$, $c = 12$",
        "$b = -12$, $c = -1$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "In the form $x^2 + bx + c$, $b$ is the coefficient of $x$ (including the sign), and $c$ is the constant term. So, $b = -1$ and $c = -12$.",
      explanationType: 'text'
    },
    {
      id: 'af-find-factors',
      question: "Find two numbers that multiply to $c = -12$ and add to $b = -1$. Consider the pair $(3, -4)$.",
      questionType: 'text',
      options: [
        "Product: $3 \\times (-4) = -12$, Sum: $3 + (-4) = -1$",
        "Product: $3 \\times (-4) = -12$, Sum: $3 + (-4) = 1$",
        "Product: $3 \\times (-4) = 12$, Sum: $3 + (-4) = -1$",
        "Product: $3 \\times (-4) = -7$, Sum: $3 + (-4) = -1$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Calculate the product: $3 \\times (-4) = -12$. Calculate the sum: $3 + (-4) = 3 - 4 = -1$. This pair satisfies both conditions.",
      explanationType: 'text'
    },
    {
      id: 'af-write-factors',
      question: "Using $m = 3$ and $n = -4$, write the factored form $(x + m)(x + n)$.",
      questionType: 'text',
      options: [
        "$(x + 3)(x - 4)$",
        "$(x + 3)(x + (-4))$",
        "$(x - 3)(x + 4)$",
        "Both $(x + 3)(x - 4)$ and $(x + 3)(x + (-4))$ are correct"
      ],
      optionType: 'text', // Options contain text
      correct: 3, // Index of the correct option
      explanation: "$m = 3$ and $n = -4$. Substituting gives $(x + 3)(x + (-4))$. This is the same as $(x + 3)(x - 4)$.",
      explanationType: 'text'
    },
    {
      id: 'af-check',
      question: "Check by expanding $(x + 3)(x - 4)$. What is the 'First' and 'Last' product using FOIL?",
      questionType: 'text',
      options: [
        "First: $x^2$, Last: $3 \\times (-4) = -12$",
        "First: $x \\times 3 = 3x$, Last: $x \\times (-4) = -4x$",
        "First: $3 \\times (-4) = -12$, Last: $x \\times x = x^2$",
        "First: $x \\times (-4) = -4x$, Last: $x \\times 3 = 3x$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Using FOIL: First: $x \\times x = x^2$. Outer: $x \\times (-4) = -4x$. Inner: $3 \\times x = 3x$. Last: $3 \\times (-4) = -12$. First product is $x^2$, Last product is $-12$.",
      explanationType: 'text'
    },
    {
      id: 'af-final-check',
      question: "Combine the results: $x^2 + (\\text{Outer} + \\text{Inner}) + \\text{Last}$. What is $x^2 + (-4x + 3x) + (-12)$?",
      questionType: 'text',
      options: [
        "$x^2 - x - 12$",
        "$x^2 + x - 12$",
        "$x^2 - 7x - 12$",
        "$x^2 - x + 12$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Add the terms: $x^2 + (-4x + 3x) + (-12) = x^2 + (-1x) + (-12) = x^2 - x - 12$. This matches the original expression, confirming the factorization $(x + 3)(x - 4)$ is correct.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Factored Form (x² - x - 12)", "(x + 3)(x - 4)");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const quadraticFactoringA1Questions: MultiStepQuestion[] = [
  qfa1ConceptQuestion,
  factorPositiveQuadQuestion,
  factorNegativeMiddleQuestion,
  factorNegativeConstantQuestion,
  applyFactoringQuestion
];

const QuadraticFactoringA1: React.FC = () => {
  const qfa1Rules = [
    "The quadratic must be in the form $x^2 + bx + c$ (coefficient of $x^2$ is 1).",
    "Find two numbers, $m$ and $n$, such that $m \\times n = c$ (the constant term).",
    "AND $m + n = b$ (the coefficient of the $x$ term).",
    "Write the factors as $(x + m)(x + n)$.",
    "Check your answer by expanding the factors using FOIL."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Quadratic Factoring (a = 1)"
        icon="APolynomial" // Or any other relevant icon like "✖️" or "🧮"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={qfa1Rules}
        rulesTitle="Factoring Rules:"
        questions={quadraticFactoringA1Questions} // Pass the array of question objects
        renderSharedValuesSummary={renderQuadraticA1Summary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default QuadraticFactoringA1;