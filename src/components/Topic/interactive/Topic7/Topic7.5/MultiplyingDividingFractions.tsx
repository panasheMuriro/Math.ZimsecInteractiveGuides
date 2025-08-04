/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary (if needed) ---
const renderMultiplyDivideFractionsSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No specific fractions calculated.</p>;
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

// --- Multi-Step Question 1: Concept and Multiplication Steps ---
const mdfConceptQuestion: MultiStepQuestion = {
  id: 'mdf-concept',
  title: 'Understanding Fraction Multiplication/Division',
  steps: [
    {
      id: 'mdfc-mult-rule',
      question: "What is the fundamental rule for multiplying two fractions like $\\frac{a}{b} \\times \\frac{c}{d}$?",
      questionType: 'text',
      options: [
        "Add the numerators and add the denominators: $\\frac{a+c}{b+d}$",
        "Multiply the numerators and multiply the denominators: $\\frac{a \\times c}{b \\times d}$",
        "Cross multiply: $\\frac{a \\times d}{b \\times c}$",
        "Subtract the numerators and subtract the denominators: $\\frac{a-c}{b-d}$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "To multiply fractions, you multiply the numerators (top parts) together to get the new numerator, and multiply the denominators (bottom parts) together to get the new denominator: $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$.",
      explanationType: 'text'
    },
    {
      id: 'mdfc-div-rule',
      question: "What is the fundamental rule for dividing two fractions like $\\frac{a}{b} \\div \\frac{c}{d}$?",
      questionType: 'text',
      options: [
        "Multiply the first fraction by the second fraction: $\\frac{a}{b} \\times \\frac{c}{d}$",
        "Multiply the first fraction by the reciprocal of the second: $\\frac{a}{b} \\times \\frac{d}{c}$",
        "Add the fractions: $\\frac{a}{b} + \\frac{c}{d}$",
        "Subtract the fractions: $\\frac{a}{b} - \\frac{c}{d}$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "To divide by a fraction, you multiply by its reciprocal. The reciprocal of a fraction is found by flipping the numerator and denominator. So, $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$.",
      explanationType: 'text'
    },
    {
      id: 'mdfc-reciprocal',
      question: "What is the reciprocal of the fraction $\\frac{x}{y}$?",
      questionType: 'text',
      options: [
        "$\\frac{x}{y}$",
        "$\\frac{y}{x}$",
        "$\\frac{1}{x}$",
        "$\\frac{1}{y}$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The reciprocal of a fraction is obtained by swapping its numerator and denominator. The reciprocal of $\\frac{x}{y}$ is $\\frac{y}{x}$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Multiplying Fractions ---
const multiplyFractionsQuestion: MultiStepQuestion = {
  id: 'multiply-fractions',
  title: 'Multiplying Algebraic Fractions',
  steps: [
    {
      id: 'mf-identify',
      question: "Multiply $\\frac{3a}{4b} \\times \\frac{8b^2}{6a}$. What do you do with the numerators first?",
      questionType: 'text',
      options: [
        "Add them: $3a + 8b^2$",
        "Multiply them: $3a \\times 8b^2$",
        "Subtract them: $3a - 8b^2$",
        "Divide them: $3a \\div 8b^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "When multiplying fractions, the first step is to multiply the numerators of the fractions together.",
      explanationType: 'text'
    },
    {
      id: 'mf-multiply-numerators',
      question: "Calculate the product of the numerators: $3a \\times 8b^2$. What is the result?",
      questionType: 'text',
      options: [
        "$11ab^2$",
        "$24ab^2$",
        "$24a^2b^2$",
        "$38ab^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Multiply the coefficients: $3 \\times 8 = 24$. Multiply the variables: $a \\times b^2 = ab^2$. So, $3a \\times 8b^2 = 24ab^2$.",
      explanationType: 'text'
    },
    {
      id: 'mf-multiply-denominators',
      question: "Calculate the product of the denominators: $4b \\times 6a$. What is the result?",
      questionType: 'text',
      options: [
        "$10ab$",
        "$24ab$",
        "$24a$",
        "$46ab$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Multiply the coefficients: $4 \\times 6 = 24$. Multiply the variables: $b \\times a = ab$. So, $4b \\times 6a = 24ab$.",
      explanationType: 'text'
    },
    {
      id: 'mf-write-fraction',
      question: "Write the fraction using the calculated numerator and denominator. What is the result before simplifying?",
      questionType: 'text',
      options: [
        "$\\frac{24ab^2}{24ab}$",
        "$\\frac{24ab^2 + 24ab}{1}$",
        "$\\frac{24ab^2}{24ab}$",
        "$\\frac{3a \\times 8b^2}{4b \\times 6a}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option (2 is also correct)
      explanation: "Place the product of the numerators ($24ab^2$) over the product of the denominators ($24ab$). The fraction is $\\frac{24ab^2}{24ab}$.",
      explanationType: 'text'
    },
    {
      id: 'mf-cancel-factors',
      question: "Simplify $\\frac{24ab^2}{24ab}$ by canceling common factors. What can be canceled?",
      questionType: 'text',
      options: [
        "$24$, $a$, and one $b$",
        "$24$ and $a$",
        "$24$ and $b$",
        "$a$ and $b$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Identify common factors in the numerator and denominator. Both have $24$, $a$, and $b$. Cancel one $24$, one $a$, and one $b$ from top and bottom.",
      explanationType: 'text'
    },
    {
      id: 'mf-final-result',
      question: "After canceling $24$, $a$, and one $b$ from $\\frac{24ab^2}{24ab}$, what is left in the numerator and denominator?",
      questionType: 'text',
      options: [
        "Numerator: $b$, Denominator: $1$",
        "Numerator: $1$, Denominator: $b$",
        "Numerator: $24b$, Denominator: $24$",
        "Numerator: $ab$, Denominator: $1$"
      ],
      optionType: 'text', // Options are plain text
      correct: 0, // Index of the correct option
      explanation: "Numerator: $24ab^2$. After canceling $24$, $a$, and $b$, we have $b$ left. Denominator: $24ab$. After canceling $24$, $a$, and $b$, we have $1$ left. The simplified fraction is $\\frac{b}{1} = b$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Product (3a/4b × 8b²/6a)", "b");
      }
    }
  ]
};

// --- Multi-Step Question 3: Concept and Division Steps ---
const divisionConceptQuestion: MultiStepQuestion = {
  id: 'division-concept',
  title: 'Understanding Fraction Division',
  steps: [
    {
      id: 'dc-div-to-mult',
      question: "To divide $\\frac{m}{n} \\div \\frac{p}{q}$, what is the FIRST step you must take?",
      questionType: 'text',
      options: [
        "Multiply the fractions directly: $\\frac{m}{n} \\times \\frac{p}{q}$",
        "Rewrite the division as multiplication by the reciprocal: $\\frac{m}{n} \\times \\frac{q}{p}$",
        "Add the fractions: $\\frac{m}{n} + \\frac{p}{q}$",
        "Subtract the fractions: $\\frac{m}{n} - \\frac{p}{q}$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The first and crucial step in dividing fractions is to convert the division problem into a multiplication problem by multiplying by the reciprocal of the second fraction.",
      explanationType: 'text'
    },
    {
      id: 'dc-find-reciprocal',
      question: "What is the reciprocal of $\\frac{x+2}{x-3}$?",
      questionType: 'text',
      options: [
        "$\\frac{x+2}{x-3}$",
        "$\\frac{x-2}{x+3}$",
        "$\\frac{x-3}{x+2}$",
        "$\\frac{-(x+2)}{x-3}$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "The reciprocal is found by flipping the numerator and denominator. The reciprocal of $\\frac{x+2}{x-3}$ is $\\frac{x-3}{x+2}$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 4: Dividing Fractions ---
const divideFractionsQuestion: MultiStepQuestion = {
  id: 'divide-fractions',
  title: 'Dividing Algebraic Fractions',
  steps: [
    {
      id: 'df-rewrite',
      question: "Divide $\\frac{2x^2}{5y} \\div \\frac{4x}{15y^2}$. What is the FIRST step?",
      questionType: 'text',
      options: [
        "Multiply the fractions directly",
        "Rewrite as multiplication by the reciprocal: $\\frac{2x^2}{5y} \\times \\frac{15y^2}{4x}$",
        "Add the fractions",
        "Subtract the fractions"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The first step in division is to rewrite it as multiplication by the reciprocal of the second fraction. The reciprocal of $\\frac{4x}{15y^2}$ is $\\frac{15y^2}{4x}$.",
      explanationType: 'text'
    },
    {
      id: 'df-multiply-numerators',
      question: "Multiply the numerators of the rewritten problem: $\\frac{2x^2}{5y} \\times \\frac{15y^2}{4x}$. What is $2x^2 \\times 15y^2$?",
      questionType: 'text',
      options: [
        "$30x^2y^2$",
        "$17x^2y^2$",
        "$30x^3y^3$",
        "$215x^2y^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Multiply the coefficients: $2 \\times 15 = 30$. Multiply the variables: $x^2 \\times y^2 = x^2y^2$. So, $2x^2 \\times 15y^2 = 30x^2y^2$.",
      explanationType: 'text'
    },
    {
      id: 'df-multiply-denominators',
      question: "Multiply the denominators: $5y \\times 4x$. What is the result?",
      questionType: 'text',
      options: [
        "$9xy$",
        "$20xy$",
        "$20x$",
        "$54xy$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Multiply the coefficients: $5 \\times 4 = 20$. Multiply the variables: $y \\times x = xy$. So, $5y \\times 4x = 20xy$.",
      explanationType: 'text'
    },
    {
      id: 'df-write-fraction',
      question: "Write the fraction using the calculated numerator and denominator. What is the result before simplifying?",
      questionType: 'text',
      options: [
        "$\\frac{30x^2y^2}{20xy}$",
        "$\\frac{30x^2y^2 + 20xy}{1}$",
        "$\\frac{2x^2 \\times 15y^2}{5y \\times 4x}$",
        "$\\frac{30x^2y^2}{20xy}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option (3 is also correct)
      explanation: "Place the product of the numerators ($30x^2y^2$) over the product of the denominators ($20xy$). The fraction is $\\frac{30x^2y^2}{20xy}$.",
      explanationType: 'text'
    },
    {
      id: 'df-cancel-factors',
      question: "Simplify $\\frac{30x^2y^2}{20xy}$ by canceling common factors. What is the GCD of the coefficients 30 and 20?",
      questionType: 'text',
      options: [
        "$2$",
        "$5$",
        "$10$",
        "$60$"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30. Factors of 20: 1, 2, 4, 5, 10, 20. The Greatest Common Divisor (GCD) is 10.",
      explanationType: 'text'
    },
    {
      id: 'df-complete-simplification',
      question: "Divide the coefficients and variables in $\\frac{30x^2y^2}{20xy}$ by their common factors. What is the simplified fraction?",
      questionType: 'text',
      options: [
        "$\\frac{3xy}{2}$",
        "$\\frac{3x^2y^2}{2xy}$",
        "$\\frac{30xy}{20}$",
        "$\\frac{3x}{2y}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Divide coefficients by GCD (10): $30 \\div 10 = 3$, $20 \\div 10 = 2$. Divide variables: $x^2 \\div x = x$, $y^2 \\div y = y$. Result: $\\frac{3xy}{2}$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Quotient (2x²/5y ÷ 4x/15y²)", "3xy/2");
      }
    }
  ]
};

// --- Multi-Step Question 5: Applying the Method ---
const applyMethodQuestion: MultiStepQuestion = {
  id: 'apply-method',
  title: 'Applying Multiplication/Division',
  steps: [
    {
      id: 'am-analyze',
      question: "Multiply $\\frac{6m^2n}{7p} \\times \\frac{14p^2}{9mn^3}$. What is the FIRST step?",
      questionType: 'text',
      options: [
        "Add the fractions",
        "Multiply the numerators together and the denominators together",
        "Rewrite as division",
        "Subtract the fractions"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "For multiplication, the first step is to multiply the numerators together and the denominators together.",
      explanationType: 'text'
    },
    {
      id: 'am-multiply-numerators',
      question: "Calculate the product of the numerators: $6m^2n \\times 14p^2$. What is the coefficient?",
      questionType: 'text',
      options: [
        "$20$",
        "$84$",
        "$614$",
        "$21$"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "Multiply the coefficients: $6 \\times 14 = 84$.",
      explanationType: 'text'
    },
    {
      id: 'am-complete-numerator',
      question: "Including the variables, what is the full product of the numerators: $6m^2n \\times 14p^2$?",
      questionType: 'text',
      options: [
        "$84m^2np^2$",
        "$84m^2n^3p^2$",
        "$84m^3n^3p^2$",
        "$84mnp$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Coefficient: $84$. Variables: $m^2 \\times n \\times p^2 = m^2np^2$. Full product: $84m^2np^2$.",
      explanationType: 'text'
    },
    {
      id: 'am-multiply-denominators',
      question: "Calculate the product of the denominators: $7p \\times 9mn^3$. What is the coefficient?",
      questionType: 'text',
      options: [
        "$16$",
        "$63$",
        "$79$",
        "$630$"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "Multiply the coefficients: $7 \\times 9 = 63$.",
      explanationType: 'text'
    },
    {
      id: 'am-complete-denominator',
      question: "Including the variables, what is the full product of the denominators: $7p \\times 9mn^3$?",
      questionType: 'text',
      options: [
        "$63pmn^3$",
        "$63p^2mn^3$",
        "$63mn^3p$",
        "Both $63pmn^3$ and $63mn^3p$ are correct"
      ],
      optionType: 'text', // Options contain text
      correct: 3, // Index of the correct option
      explanation: "Coefficient: $63$. Variables: $p \\times m \\times n^3 = pmn^3$ or $mn^3p$. Full product: $63pmn^3$ or $63mn^3p$. (Multiplication is commutative, so order doesn't matter).",
      explanationType: 'text'
    },
    {
      id: 'am-write-fraction',
      question: "Write the fraction before simplifying. What is it?",
      questionType: 'text',
      options: [
        "$\\frac{84m^2np^2}{63mn^3p}$",
        "$\\frac{84m^2np^2 + 63mn^3p}{1}$",
        "$\\frac{6m^2n \\times 14p^2}{7p \\times 9mn^3}$",
        "$\\frac{84m^2np^2}{63mn^3p}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option (3 is also correct)
      explanation: "Place the full numerator product over the full denominator product: $\\frac{84m^2np^2}{63mn^3p}$.",
      explanationType: 'text'
    },
    {
      id: 'am-find-gcd',
      question: "To simplify $\\frac{84m^2np^2}{63mn^3p}$, find the GCD of the coefficients 84 and 63.",
      questionType: 'text',
      options: [
        "$3$",
        "$7$",
        "$21$",
        "$1$"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "Factors of 84: 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84. Factors of 63: 1, 3, 7, 9, 21, 63. The GCD is 21.",
      explanationType: 'text'
    },
    {
      id: 'am-cancel-variables',
      question: "In $\\frac{84m^2np^2}{63mn^3p}$, which variables can be partially canceled, and how?",
      questionType: 'text',
      options: [
        "Cancel one $m$: $m^2 \\div m = m$. Cancel one $n$: $n \\div n^3 = \\frac{1}{n^2}$. Cancel one $p$: $p^2 \\div p = p$.",
        "Cancel one $m$: $m^2 \\div m = m$. Cancel two $n$'s: $n \\div n^3 = \\frac{1}{n}$. Cancel one $p$: $p^2 \\div p = p$.",
        "Cancel one $m$: $m^2 \\div m = m$. Cancel one $n$: $n \\div n = 1$. Cancel one $p$: $p^2 \\div p = p$.",
        "Cancel two $m$'s: $m^2 \\div m = m$. Cancel one $n$: $n \\div n^3 = \\frac{1}{n^2}$. Cancel one $p$: $p^2 \\div p = p$."
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "For variables: $m$: $m^2 \\div m = m^{2-1} = m^1 = m$. $n$: $n^1 \\div n^3 = n^{1-3} = n^{-2} = \\frac{1}{n^2}$. $p$: $p^2 \\div p = p^{2-1} = p^1 = p$.",
      explanationType: 'text'
    },
    {
      id: 'am-final-simplification',
      question: "Combine the simplified coefficients and variables: $\\frac{84}{63} = \\frac{4}{3}$, $m$, $\\frac{1}{n^2}$, $p$. What is the final simplified fraction?",
      questionType: 'text',
      options: [
        "$\\frac{4mp}{3n^2}$",
        "$\\frac{4m}{3n^2p}$",
        "$\\frac{4mp}{3n}$",
        "$\\frac{4m}{3pn^2}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Combine all parts: Numerator: $4 \\times m \\times p = 4mp$. Denominator: $3 \\times n^2 = 3n^2$. The final result is $\\frac{4mp}{3n^2}$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Product (6m²n/7p × 14p²/9mn³)", "4mp/3n²");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const multiplyingDividingFractionsQuestions: MultiStepQuestion[] = [
  mdfConceptQuestion,
  multiplyFractionsQuestion,
  divisionConceptQuestion,
  divideFractionsQuestion,
  applyMethodQuestion
];

const MultiplyingDividingFractions: React.FC = () => {
  const mdfRules = [
    "To multiply fractions: $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$",
    "To divide fractions: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$ (Multiply by the reciprocal)",
    "Factor numerators and denominators completely before multiplying/dividing.",
    "Cancel out any common factors between numerators and denominators before performing the final multiplication.",
    "Multiply the remaining factors in the numerators together and the remaining factors in the denominators together.",
    "Write the final result as a single simplified fraction.",
    "State any restrictions on the variable(s) that would make any original or final denominator zero."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Multiplying and Dividing Fractions"
        icon="✖️" // Or any other relevant icon like "➗" or "🧮"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={mdfRules}
        rulesTitle="Fraction Operation Rules:"
        questions={multiplyingDividingFractionsQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderMultiplyDivideFractionsSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default MultiplyingDividingFractions;