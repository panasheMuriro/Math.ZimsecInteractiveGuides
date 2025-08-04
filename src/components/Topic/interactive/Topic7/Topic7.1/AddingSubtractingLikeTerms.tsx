/* eslint-disable @typescript-eslint/no-explicit-any */
// --- Helper Function for Summary (if needed) ---

import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// This example doesn't store intermediate values in sharedValues, but the function is required.
const renderAddSubtractSummary = (sharedValues: { [key: string]: any }) => {
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

// --- Multi-Step Question 1: Basic Addition ---
const basicAdditionQuestion: MultiStepQuestion = {
  id: 'basic-addition-like-terms',
  title: 'Basic Addition of Like Terms',
  steps: [
    {
      id: 'ba-identify-like-terms',
      question: "Are $4x$ and $9x$ like terms?",
      questionType: 'text',
      options: [
        "Yes, they have the same variable $x$ raised to the same power (1).",
        "No, they have different coefficients.",
        "No, they have different variables.",
        "No, they have the same variable but different powers."
      ],
      optionType: 'text',
      correct: 0, // Index of the correct option
      explanation: "Like terms must have identical variable parts. Both $4x$ and $9x$ have the variable $x$ raised to the first power ($x^1$), so they are like terms. The coefficients (4 and 9) can be different.",
      explanationType: 'text'
    },
    {
      id: 'ba-add-coefficients',
      question: "To add $4x + 9x$, what do you add?",
      questionType: 'text',
      options: [
        "The variables: $x + x$",
        "The coefficients: $4 + 9$",
        "Both coefficients and variables: $(4 + 9) + (x + x)$",
        "Multiply the coefficients: $4 \\times 9$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "When adding like terms, you add only the numerical coefficients (the numbers in front of the variables). The variable part remains the same.",
      explanationType: 'text'
    },
    {
      id: 'ba-final-result',
      question: "What is the result of $4x + 9x$?",
      questionType: 'text',
      options: [
        "$13x$",
        "$36x$",
        "$13x^2$",
        "$4x + 9x$" // Unchanged
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Add the coefficients: $4 + 9 = 13$. Keep the variable part $x$. So, $4x + 9x = 13x$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Basic Addition Result", "13x");
      }
    }
  ]
};

// --- Multi-Step Question 2: Basic Subtraction ---
const basicSubtractionQuestion: MultiStepQuestion = {
  id: 'basic-subtraction-like-terms',
  title: 'Basic Subtraction of Like Terms',
  steps: [
    {
      id: 'bs-identify-like-terms',
      question: "Are $8y^2$ and $3y^2$ like terms?",
      questionType: 'text',
      options: [
        "Yes, they have the same variable $y$ raised to the same power (2).",
        "No, they have different coefficients.",
        "No, they have different variables.",
        "No, they have the same variable but different powers."
      ],
      optionType: 'text',
      correct: 0, // Index of the correct option
      explanation: "Both terms have the variable $y$ raised to the power of 2. Therefore, they are like terms.",
      explanationType: 'text'
    },
    {
      id: 'bs-subtract-coefficients',
      question: "To subtract $8y^2 - 3y^2$, what do you subtract?",
      questionType: 'text',
      options: [
        "The variables: $y^2 - y^2$",
        "The coefficients: $8 - 3$",
        "Both coefficients and variables: $(8 - 3) - (y^2 - y^2)$",
        "Multiply the coefficients: $8 \\times 3$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "When subtracting like terms, you subtract only the numerical coefficients. The variable part remains the same.",
      explanationType: 'text'
    },
    {
      id: 'bs-final-result',
      question: "What is the result of $8y^2 - 3y^2$?",
      questionType: 'text',
      options: [
        "$5y^2$",
        "$24y^2$",
        "$5y^4$",
        "$8y^2 - 3y^2$" // Unchanged
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Subtract the coefficients: $8 - 3 = 5$. Keep the variable part $y^2$. So, $8y^2 - 3y^2 = 5y^2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Basic Subtraction Result", "5y^2");
      }
    }
  ]
};

// --- Multi-Step Question 3: Combining Terms (Same Variable) ---
const combineSameVariableQuestion: MultiStepQuestion = {
  id: 'combine-same-variable',
  title: 'Combining Terms with One Variable',
  steps: [
    {
      id: 'csv-group-terms',
      question: "In the expression $6m - 2m + 5m$, which terms are like terms?",
      questionType: 'text',
      options: [
        "Only $6m$ and $-2m$",
        "Only $-2m$ and $5m$",
        "All three terms: $6m$, $-2m$, and $5m$",
        "None of them are like terms"
      ],
      optionType: 'text',
      correct: 2, // Index of the correct option
      explanation: "All three terms have the same variable $m$ raised to the same power (1). Therefore, they are all like terms and can be combined.",
      explanationType: 'text'
    },
    {
      id: 'csv-perform-operations',
      question: "How do you simplify $6m - 2m + 5m$?",
      questionType: 'text',
      options: [
        "Add all coefficients: $6 + 2 + 5$",
        "Subtract then add coefficients: $(6 - 2) + 5$",
        "Multiply coefficients: $6 \\times (-2) \\times 5$",
        "Add and subtract coefficients: $6 + (-2) + 5$"
      ],
      optionType: 'text', // Options contain text
      correct: 3, // Index of the correct option
      explanation: "Treat subtraction as adding a negative number. Combine the coefficients: $6 + (-2) + 5$.",
      explanationType: 'text'
    },
    {
      id: 'csv-final-result',
      question: "What is the simplified form of $6m - 2m + 5m$?",
      questionType: 'text',
      options: [
        "$9m$",
        "$13m$",
        "$11m$",
        "$10m$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Calculate the sum of coefficients: $6 + (-2) + 5 = 6 - 2 + 5 = 4 + 5 = 9$. Keep the variable $m$. The result is $9m$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Combined Same Variable Result", "9m");
      }
    }
  ]
};

// --- Multi-Step Question 4: Multiple Variables ---
const multipleVariablesQuestion: MultiStepQuestion = {
  id: 'multiple-variables',
  title: 'Simplifying with Multiple Variables',
  steps: [
    {
      id: 'mv-group-like-terms',
      question: "In the expression $3a + 2b - a + 4b$, how should you group the like terms?",
      questionType: 'text',
      options: [
        "Group all terms together: $(3a + 2b - a + 4b)$",
        "Group by variable: $(3a - a)$ and $(2b + 4b)$",
        "Group by sign: $(3a + 2b)$ and $(-a + 4b)$",
        "Group by coefficient: $(3a - a)$ and $(2b + 4b)$"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "To combine like terms, group terms that have the exact same variable part. $a$ terms: $3a$ and $-a$. $b$ terms: $2b$ and $4b$.",
      explanationType: 'text'
    },
    {
      id: 'mv-simplify-a-terms',
      question: "Simplify the '$a$ terms': $3a - a$.",
      questionType: 'text',
      options: [
        "$2a$",
        "$3a$",
        "$4a$",
        "$a$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Remember, $a$ is the same as $1a$. So, $3a - 1a = (3 - 1)a = 2a$.",
      explanationType: 'text'
    },
    {
      id: 'mv-simplify-b-terms',
      question: "Simplify the '$b$ terms': $2b + 4b$.",
      questionType: 'text',
      options: [
        "$6b$",
        "$8b$",
        "$2b$",
        "$4b$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Add the coefficients of the $b$ terms: $2 + 4 = 6$. Keep the variable $b$. So, $2b + 4b = 6b$.",
      explanationType: 'text'
    },
    {
      id: 'mv-final-result',
      question: "Combine the simplified '$a$' and '$b$' parts. What is the final simplified expression?",
      questionType: 'text',
      options: [
        "$2a + 6b$",
        "$6b + 2a$",
        "$8ab$",
        "$2a - 6b$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Put the simplified parts together. The '$a$' part is $2a$, and the '$b$' part is $6b$. The final expression is $2a + 6b$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Multiple Variables Result", "2a + 6b");
      }
    }
  ]
};

// --- Multi-Step Question 5: Implied Coefficients ---
const impliedCoefficientsQuestion: MultiStepQuestion = {
  id: 'implied-coefficients',
  title: 'Handling Implied Coefficients',
  steps: [
    {
      id: 'ic-understand-implied',
      question: "What number is implied (understood to be there) in front of the variable $x$ in the term $x$?",
      questionType: 'text',
      options: [
        "$0$",
        "$1$",
        "$x$",
        "$-1$"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "If no number is written in front of a variable, the coefficient is understood to be $1$. So, $x$ means $1x$.",
      explanationType: 'text'
    },
    {
      id: 'ic-identify-coefficients',
      question: "In the expression $x + 3y - 2x + y$, what are the coefficients of the $x$ terms ($x$ and $-2x$)?",
      questionType: 'text',
      options: [
        "$1$ and $2$",
        "$1$ and $-2$",
        "$0$ and $-2$",
        "$x$ and $-2x$"
      ],
      optionType: 'text',
      correct: 1, // Index of the correct option
      explanation: "The term $x$ has an implied coefficient of $1$. The term $-2x$ has a coefficient of $-2$.",
      explanationType: 'text'
    },
    {
      id: 'ic-simplify-x',
      question: "Simplify the $x$ terms: $x - 2x$ (which is $1x - 2x$).",
      questionType: 'text',
      options: [
        "$-1x$ or $-x$",
        "$3x$",
        "$-3x$",
        "$x$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Subtract the coefficients: $1 - 2 = -1$. Keep the variable $x$. So, $1x - 2x = -1x$, which is usually written as $-x$.",
      explanationType: 'text'
    },
    {
      id: 'ic-simplify-y',
      question: "Simplify the $y$ terms: $3y + y$ (which is $3y + 1y$).",
      questionType: 'text',
      options: [
        "$3y$",
        "$4y$",
        "$2y$",
        "$y$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Add the coefficients: $3 + 1 = 4$. Keep the variable $y$. So, $3y + 1y = 4y$.",
      explanationType: 'text'
    },
    {
      id: 'ic-final-result',
      question: "Combine the simplified parts. What is the final simplified expression for $x + 3y - 2x + y$?",
      questionType: 'text',
      options: [
        "$-x + 4y$",
        "$4y - x$",
        "$-1x + 4y$",
        "$x + 4y$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The simplified $x$ part is $-x$. The simplified $y$ part is $4y$. Combining them gives $-x + 4y$. (Note: $-x + 4y$ is the same as $4y - x$).",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Implied Coefficients Result", "-x + 4y");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const addingSubtractingLikeTermsQuestions: MultiStepQuestion[] = [
  basicAdditionQuestion,
  basicSubtractionQuestion,
  combineSameVariableQuestion,
  multipleVariablesQuestion,
  impliedCoefficientsQuestion
];

const AddingSubtractingLikeTerms: React.FC = () => {
  const addSubtractRules = [
    "Like terms have identical variable parts (e.g., $3x$ and $5x$).",
    "To add/subtract like terms, combine only the coefficients.",
    "The variable part remains unchanged in the result.",
    "Group like terms together before combining.",
    "Remember implied coefficients: $x$ means $1x$, $-y$ means $-1y$."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Adding and Subtracting Like Terms"
        icon="➕" // Or any other relevant icon like "➖" or "🧮"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={addSubtractRules}
        rulesTitle="Like Terms Simplification Rules:"
        questions={addingSubtractingLikeTermsQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderAddSubtractSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default AddingSubtractingLikeTerms;