/* eslint-disable @typescript-eslint/no-explicit-any */

import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary (if needed) ---
const renderDivideTermsSummary = (sharedValues: { [key: string]: any }) => {
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

// --- Multi-Step Question 1: Basic Coefficient Division ---
const basicCoefficientQuestion: MultiStepQuestion = {
  id: 'basic-coefficient-division',
  title: 'Dividing Coefficients',
  steps: [
    {
      id: 'bcd-identify-coefficients',
      question: "In the division $\\frac{10a}{2a}$, what are the coefficients you need to divide?",
      questionType: 'text',
      options: [
        "$a$ and $a$",
        "$10$ and $2$",
        "$10a$ and $2a$",
        "$10 - 2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Coefficients are the numerical parts of the terms. In the numerator $10a$, the coefficient is $10$. In the denominator $2a$, the coefficient is $2$. You divide these numbers first.",
      explanationType: 'text'
    },
    {
      id: 'bcd-divide-coefficients',
      question: "Calculate the quotient of the coefficients: $10 \\div 2$.",
      questionType: 'text',
      options: [
        "$5$",
        "$12$",
        "$8$",
        "$20$"
      ],
      optionType: 'text',
      correct: 0, // Index of the correct option
      explanation: "Divide the numbers: $10 \\div 2 = 5$.",
      explanationType: 'text'
    },
    {
      id: 'bcd-combine-variables',
      question: "After dividing the coefficients, how do you handle the variables $a$ in $\\frac{10a}{2a}$?",
      questionType: 'text',
      options: [
        "Add them: $a + a$",
        "Subtract the exponents: $a^{1-1}$",
        "Multiply them: $a \\times a$",
        "Subtract them: $a - a$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "When dividing terms with the same base variable, you subtract the exponent in the denominator from the exponent in the numerator. Both $a$ terms are $a^1$, so you calculate $a^{1-1} = a^0$.",
      explanationType: 'text'
    },
    {
      id: 'bcd-final-result',
      question: "What is the final result of $\\frac{10a}{2a}$?",
      questionType: 'text',
      options: [
        "$5a^0$ or $5$",
        "$5a$",
        "$5a^2$",
        "$\\frac{10a}{2a}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Divide the coefficients ($10 \\div 2 = 5$). Subtract the exponents of $a$ ($1 - 1 = 0$), giving $a^0 = 1$. Combine them: $5 \\times 1 = 5$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Basic Coefficient Result", "5");
      }
    }
  ]
};

// --- Multi-Step Question 2: Subtracting Exponents ---
const subtractingExponentsQuestion: MultiStepQuestion = {
  id: 'subtracting-exponents',
  title: 'Subtracting Exponents with Like Bases',
  steps: [
    {
      id: 'se-identify-rule',
      question: "When dividing $\\frac{x^7}{x^3}$, what do you do with the exponents?",
      questionType: 'text',
      options: [
        "Subtract them: $7 - 3$",
        "Add them: $7 + 3$",
        "Multiply them: $7 \\times 3$",
        "Divide them: $7 \\div 3$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "When dividing terms with the same base variable, you subtract the exponent in the denominator from the exponent in the numerator. For $\\frac{x^m}{x^n}$, the result is $x^{m-n}$.",
      explanationType: 'text'
    },
    {
      id: 'se-subtract-exponents',
      question: "Calculate the new exponent: $7 - 3$.",
      questionType: 'text',
      options: [
        "$4$",
        "$10$",
        "$21$",
        "$2.33$"
      ],
      optionType: 'text',
      correct: 0, // Index of the correct option
      explanation: "Subtract the exponents: $7 - 3 = 4$.",
      explanationType: 'text'
    },
    {
      id: 'se-apply-rule',
      question: "Apply the rule. What is $\\frac{x^7}{x^3}$?",
      questionType: 'text',
      options: [
        "$x^4$",
        "$x^{10}$",
        "$x^{21}$",
        "$\\frac{7}{3}x$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Keep the base $x$ and use the difference of the exponents ($4$) as the new exponent. So, $\\frac{x^7}{x^3} = x^4$.",
      explanationType: 'text'
    },
    {
      id: 'se-with-coefficients',
      question: "Now, simplify $\\frac{8x^7}{2x^3}$. What is the coefficient of the result?",
      questionType: 'text',
      options: [
        "$6$ (from $8 - 2$)",
        "$4$ (from $8 \\div 2$)",
        "$16$ (from $8 \\times 2$)",
        "$1$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "First, divide the coefficients: $8 \\div 2 = 4$. Then, subtract the exponents of $x$: $7 - 3 = 4$. The result is $4x^4$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("With Coefficients Result", "4x^4");
      }
    }
  ]
};

// --- Multi-Step Question 3: Negative Exponents ---
const negativeExponentsQuestion: MultiStepQuestion = {
  id: 'negative-exponents',
  title: 'Dealing with Negative Exponents',
  steps: [
    {
      id: 'ne-subtract-rule',
      question: "When simplifying $\\frac{y^2}{y^5}$, what is the exponent of $y$ in the result?",
      questionType: 'text',
      options: [
        "$3$ (from $5 - 2$)",
        "$-3$ (from $2 - 5$)",
        "$7$ (from $2 + 5$)",
        "$0.4$ (from $2 \\div 5$)"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Subtract the exponent in the denominator from the exponent in the numerator: $2 - 5 = -3$. The result is $y^{-3}$.",
      explanationType: 'text'
    },
    {
      id: 'ne-understand-negative',
      question: "What does a negative exponent like $y^{-3}$ mean?",
      questionType: 'text',
      options: [
        "It means $-y^3$",
        "It means $\\frac{1}{y^3}$",
        "It means $y^3$",
        "It means $y$ is negative"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "A negative exponent indicates the reciprocal of the base raised to the positive exponent. So, $y^{-3} = \\frac{1}{y^3}$.",
      explanationType: 'text'
    },
    {
      id: 'ne-apply-negative',
      question: "Simplify $\\frac{y^2}{y^5}$ considering the negative exponent.",
      questionType: 'text',
      options: [
        "$y^{-3}$",
        "$\\frac{1}{y^3}$",
        "Both $y^{-3}$ and $\\frac{1}{y^3}$ are correct",
        "$y^3$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Subtracting exponents gives $y^{2-5} = y^{-3}$. This is equivalent to $\\frac{1}{y^3}$.",
      explanationType: 'text'
    },
    {
      id: 'ne-with-coefficients',
      question: "Simplify $\\frac{6m^3}{2m^7}$. What is the simplified form?",
      questionType: 'text',
      options: [
        "$3m^{-4}$",
        "$\\frac{3}{m^4}$",
        "Both $3m^{-4}$ and $\\frac{3}{m^4}$ are correct",
        "$3m^4$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "Divide coefficients: $6 \\div 2 = 3$. Subtract exponents: $3 - 7 = -4$. Result: $3m^{-4}$ or $\\frac{3}{m^4}$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Negative Exponent Result", "3/m^4 or 3m^-4");
      }
    }
  ]
};

// --- Multi-Step Question 4: Multiple Variables ---
const multipleVariablesQuestion: MultiStepQuestion = {
  id: 'multiple-variables-divide',
  title: 'Dividing Terms with Multiple Variables',
  steps: [
    {
      id: 'mvd-identify-variables',
      question: "In the division $\\frac{12x^3y^2}{4xy}$, which variables do you need to consider?",
      questionType: 'text',
      options: [
        "Only $x$",
        "Only $y$",
        "Both $x$ and $y$",
        "None of them"
      ],
      optionType: 'text',
      correct: 2, // Index of the correct option
      explanation: "You must consider all variables present in the numerator and denominator. Both terms have $x$ and $y$.",
      explanationType: 'text'
    },
    {
      id: 'mvd-handle-x',
      question: "How do you handle the $x$ parts: $\\frac{x^3}{x^1}$?",
      questionType: 'text',
      options: [
        "Subtract exponents: $x^{3-1} = x^2$",
        "Add exponents: $x^{3+1} = x^4$",
        "Multiply exponents: $x^{3\\times1} = x^3$",
        "Divide exponents: $x^{3\\div1} = x^3$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "For the $x$ variable, subtract the denominator exponent from the numerator exponent: $3 - 1 = 2$. So, the $x$ part becomes $x^2$.",
      explanationType: 'text'
    },
    {
      id: 'mvd-handle-y',
      question: "How do you handle the $y$ parts: $\\frac{y^2}{y^1}$?",
      questionType: 'text',
      options: [
        "Subtract exponents: $y^{2-1} = y^1$ (which is just $y$)",
        "Add exponents: $y^{2+1} = y^3$",
        "Multiply exponents: $y^{2\\times1} = y^2$",
        "Divide exponents: $y^{2\\div1} = y^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "For the $y$ variable, subtract the denominator exponent from the numerator exponent: $2 - 1 = 1$. So, the $y$ part is $y^1$, or simply $y$.",
      explanationType: 'text'
    },
    {
      id: 'mvd-divide-coefficients',
      question: "Divide the coefficients: $12 \\div 4$.",
      questionType: 'text',
      options: [
        "$3$",
        "$8$",
        "$16$",
        "$48$"
      ],
      optionType: 'text',
      correct: 0, // Index of the correct option
      explanation: "Divide the numerical coefficients: $12 \\div 4 = 3$.",
      explanationType: 'text'
    },
    {
      id: 'mvd-final-result',
      question: "Combine the coefficient and all variable parts. What is $\\frac{12x^3y^2}{4xy}$?",
      questionType: 'text',
      options: [
        "$3x^2y$",
        "$3x^3y^2$",
        "$3xy$",
        "$\\frac{3x^2}{y}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Coefficient: $3$. $x$ part: $x^2$. $y$ part: $y$. Combine them to get $3x^2y$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Multiple Variables Result", "3x^2y");
      }
    }
  ]
};

// --- Multi-Step Question 5: Canceling Variables (Exponent Zero) ---
const cancelingVariablesQuestion: MultiStepQuestion = {
  id: 'canceling-variables',
  title: 'Canceling Variables (Exponent Zero)',
  steps: [
    {
      id: 'cv-subtract-equal-exponents',
      question: "When simplifying $\\frac{a^4b}{a^2b}$, what happens to the $b$ terms: $\\frac{b^1}{b^1}$?",
      questionType: 'text',
      options: [
        "They become $b^0 = 1$",
        "They become $b^{1-1} = b^0 = 1$",
        "They cancel out completely",
        "All of the above are correct ways to think about it"
      ],
      optionType: 'text', // Options contain text
      correct: 3, // Index of the correct option
      explanation: "When dividing like bases with equal exponents ($b^1 \\div b^1$), you subtract the exponents: $1 - 1 = 0$. Any non-zero number to the power of 0 is 1 ($b^0 = 1$). Effectively, the $b$ terms cancel out.",
      explanationType: 'text'
    },
    {
      id: 'cv-handle-a',
      question: "How do you simplify the $a$ parts: $\\frac{a^4}{a^2}$?",
      questionType: 'text',
      options: [
        "Subtract exponents: $a^{4-2} = a^2$",
        "Add exponents: $a^{4+2} = a^6$",
        "Multiply exponents: $a^{4\\times2} = a^8$",
        "Divide exponents: $a^{4\\div2} = a^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Subtract the exponent in the denominator from the exponent in the numerator: $4 - 2 = 2$. The $a$ part simplifies to $a^2$.",
      explanationType: 'text'
    },
    {
      id: 'cv-divide-coefficients',
      question: "Are there any coefficients to divide in $\\frac{a^4b}{a^2b}$?",
      questionType: 'text',
      options: [
        "Yes, divide $1 \\div 1 = 1$",
        "No, there are no explicit coefficients, so they are understood to be 1",
        "Yes, divide $a \\div a = 1$",
        "No, because the variables are the same"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "There are no numbers written in front of the variables, meaning the coefficients are implicitly $1$. Dividing $1 \\div 1 = 1$, so the coefficient part of the result is just $1$.",
      explanationType: 'text'
    },
    {
      id: 'cv-combine-parts',
      question: "Combine the simplified parts: coefficient (1), $a^2$, and $b^0$ (which is 1). What is the final result?",
      questionType: 'text',
      options: [
        "$1 \\times a^2 \\times 1 = a^2$",
        "$a^2 \\times 1 = a^2$",
        "$1a^2 = a^2$",
        "All of the above are correct"
      ],
      optionType: 'text', // Options contain text
      correct: 3, // Index of the correct option
      explanation: "Multiply all the simplified parts together: $1 \\times a^2 \\times 1 = a^2$. Since multiplying by $1$ doesn't change the value, the final result is simply $a^2$.",
      explanationType: 'text'
    },
    {
      id: 'cv-final-result',
      question: "What is the simplified form of $\\frac{a^4b}{a^2b}$?",
      questionType: 'text',
      options: [
        "$a^2$",
        "$a^2b^0$",
        "$\\frac{a^2b}{1}$",
        "$1a^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Following the steps: Coefficient $1$, $a$ part $a^2$, $b$ part $b^0 = 1$. Multiplying together gives $1 \\times a^2 \\times 1 = a^2$. We typically don't write the coefficient $1$ or $b^0$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Canceling Variables Result", "a^2");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const dividingAlgebraicTermsQuestions: MultiStepQuestion[] = [
  basicCoefficientQuestion,
  subtractingExponentsQuestion,
  negativeExponentsQuestion,
  multipleVariablesQuestion,
  cancelingVariablesQuestion
];

const DividingAlgebraicTerms: React.FC = () => {
  const divideTermsRules = [
    "Divide coefficients (numbers) first.",
    "For like variables, subtract denominator exponent from numerator exponent: $\\frac{x^m}{x^n} = x^{m-n}$.",
    "Handle each variable separately.",
    "A negative exponent means the reciprocal: $x^{-n} = \\frac{1}{x^n}$.",
    "If exponents cancel ($x^n \\div x^n = x^{n-n} = x^0$), the variable equals 1 and can be omitted.",
    "Combine the results: (Quotient of coefficients) $\\times$ (Product of variable parts)."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Dividing Algebraic Terms"
        icon="➗" // Or any other relevant icon like "🔢" or "🧮"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={divideTermsRules}
        rulesTitle="Division Rules:"
        questions={dividingAlgebraicTermsQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderDivideTermsSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default DividingAlgebraicTerms;