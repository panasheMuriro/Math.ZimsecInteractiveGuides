/* eslint-disable @typescript-eslint/no-explicit-any */
// CompletingSquareA1Quiz.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';
// renderTextWithtext is imported within the template

// --- Helper Function for Summary (if needed) ---
const renderCompleteSquareA1Summary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No specific forms completed.</p>;
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

// --- Multi-Step Question 1: Concept and Goal ---
const csConceptQuestion: MultiStepQuestion = {
  id: 'cs-concept',
  title: 'Understanding Completing the Square',
  steps: [
    {
      id: 'csc-goal',
      question: "What is the main goal of the 'Completing the Square' technique?",
      questionType: 'text',
      options: [
        "To factor a quadratic expression",
        "To rewrite a quadratic expression in the form $(x + h)^2 + k$",
        "To solve a linear equation",
        "To find the GCD of terms"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "Completing the square is a method used to rewrite a quadratic expression of the form $x^2 + bx + c$ into the vertex form $(x + h)^2 + k$. This form is helpful for graphing parabolas and solving quadratic equations.",
      explanationType: 'text'
    },
    {
      id: 'csc-applicable-form',
      question: "For which type of quadratic expression is the basic 'completing the square' method (where you take half the linear coefficient and square it) primarily used?",
      questionType: 'text',
      options: [
        "Any quadratic expression $ax^2 + bx + c$",
        "Quadratic expressions where $a = 1$ (e.g., $x^2 + bx + c$)",
        "Quadratic expressions where $b = 0$",
        "Quadratic expressions where $c = 0$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The standard completing the square technique described here (taking $\\left(\\frac{b}{2}\\right)^2$) is primarily applied to quadratic expressions where the coefficient of $x^2$ (denoted as $a$) is 1. If $a \\neq 1$, the expression is usually factored first or a modified technique is used.",
      explanationType: 'text'
    },
    {
      id: 'csc-key-step',
      question: "What is the key calculation step in completing the square for $x^2 + bx + c$?",
      questionType: 'text',
      options: [
        "Find the derivative of the expression",
        "Calculate $\\left(\\frac{b}{2}\\right)^2$",
        "Find the GCD of $b$ and $c$",
        "Integrate the expression"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The core step involves taking half of the coefficient of the $x$ term (which is $b$) and then squaring the result. This value, $\\left(\\frac{b}{2}\\right)^2$, is the constant needed to create a perfect square trinomial.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Finding the Constant ---
const findConstantQuestion: MultiStepQuestion = {
  id: 'find-constant',
  title: 'Finding the Constant to Complete the Square',
  steps: [
    {
      id: 'fc-identify-coeff',
      question: "To complete the square for $x^2 + 10x + 7$, what is the coefficient of the $x$ term ($b$)?",
      questionType: 'text',
      options: [
        "$10$",
        "$7$",
        "$1$",
        "$2$"
      ],
      optionType: 'text', // Options are plain text
      correct: 0, // Index of the correct option
      explanation: "In the expression $x^2 + bx + c$, $b$ is the coefficient of the $x$ term. In $x^2 + 10x + 7$, the coefficient of $x$ is $10$.",
      explanationType: 'text'
    },
    {
      id: 'fc-calculate-half',
      question: "What is half of the coefficient $b = 10$?",
      questionType: 'text',
      options: [
        "$20$",
        "$5$",
        "$100$",
        "$2.5$"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "Half of $b$ means $\\frac{b}{2}$. So, $\\frac{10}{2} = 5$.",
      explanationType: 'text'
    },
    {
      id: 'fc-square-half',
      question: "Square the result from the previous step: $\\left(\\frac{b}{2}\\right)^2 = 5^2$. What is the value?",
      questionType: 'text',
      options: [
        "$10$",
        "$20$",
        "$25$",
        "$125$"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "Calculate the square: $5^2 = 5 \\times 5 = 25$. This value, $25$, is the constant needed to complete the square for the $x^2 + 10x$ part of the expression.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Constant to Add (x²+10x)", "25");
      }
    }
  ]
};

// --- Multi-Step Question 3: Completing the Square (Simple) ---
const completeSquareSimpleQuestion: MultiStepQuestion = {
  id: 'complete-square-simple',
  title: 'Completing the Square Simply',
  steps: [
    {
      id: 'css-isolate',
      question: "Start completing the square for $x^2 + 4x + 1$. What is the first step?",
      questionType: 'text',
      options: [
        "Factor out the coefficient of $x^2$",
        "Isolate the quadratic and linear terms: $x^2 + 4x$",
        "Subtract 1 from both sides",
        "Find the GCD of 4 and 1"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The first step is often to isolate the $x^2$ and $x$ terms. While subtracting 1 is also a valid first move, focusing on the $x^2 + 4x$ part is the standard approach to identify the completing square constant.",
      explanationType: 'text'
    },
    {
      id: 'css-find-constant',
      question: "For $x^2 + 4x$, what constant do you need to add (and then subtract) to complete the square?",
      questionType: 'text',
      options: [
        "$4$",
        "$8$",
        "$16$",
        "$2$"
      ],
      optionType: 'text', // Options are plain text
      correct: 0, // Index of the correct option
      explanation: "Take half of the coefficient of $x$, which is $4$. Half of $4$ is $2$. Then square it: $2^2 = 4$. The constant needed is $4$.",
      explanationType: 'text'
    },
    {
      id: 'css-add-subtract',
      question: "Add and subtract the constant 4 to the isolated terms: $x^2 + 4x$. What expression do you get?",
      questionType: 'text',
      options: [
        "$x^2 + 4x + 4 - 4$",
        "$x^2 + 4x + 4$",
        "$x^2 + 4x - 4$",
        "$x^2 + 4x + 4 + 4$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "To maintain equivalence, you add the constant and immediately subtract it: $x^2 + 4x + 4 - 4$.",
      explanationType: 'text'
    },
    {
      id: 'css-perfect-square',
      question: "Rewrite the first three terms of $x^2 + 4x + 4 - 4$ as a perfect square.",
      questionType: 'text',
      options: [
        "$(x + 2)^2$",
        "$(x + 4)^2$",
        "$(x^2 + 2)^2$",
        "$(x + 2^2)^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The first three terms, $x^2 + 4x + 4$, form a perfect square trinomial. It matches the pattern $a^2 + 2ab + b^2 = (a + b)^2$ where $a=x$ and $b=2$. So, $x^2 + 4x + 4 = (x + 2)^2$.",
      explanationType: 'text'
    },
    {
      id: 'css-write-form',
      question: "Combine the perfect square with the remaining constant. What is the expression $x^2 + 4x + 4 - 4$ rewritten as?",
      questionType: 'text',
      options: [
        "$(x + 2)^2 - 4$",
        "$(x + 2)^2 + 4$",
        "$x^2 + 4x + 0$",
        "$(x + 2)^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Replace $x^2 + 4x + 4$ with $(x + 2)^2$. The expression becomes $(x + 2)^2 - 4$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Completed Square (x²+4x)", "(x + 2)² - 4");
      }
    }
  ]
};

// --- Multi-Step Question 4: Completing the Square (Negative Coefficient) ---
const completeSquareNegativeQuestion: MultiStepQuestion = {
  id: 'complete-square-negative',
  title: 'Completing the Square with a Negative Coefficient',
  steps: [
    {
      id: 'csn-identify',
      question: "Complete the square for $x^2 - 6x + 2$. What is the coefficient of the $x$ term ($b$)?",
      questionType: 'text',
      options: [
        "$6$",
        "$-6$",
        "$2$",
        "$-2$"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "In the expression $x^2 + bx + c$, $b$ is the coefficient of the $x$ term. In $x^2 - 6x + 2$, the coefficient of $x$ is $-6$.",
      explanationType: 'text'
    },
    {
      id: 'csn-calculate-half',
      question: "What is half of the coefficient $b = -6$?",
      questionType: 'text',
      options: [
        "$-3$",
        "$3$",
        "$-12$",
        "$12$"
      ],
      optionType: 'text', // Options are plain text
      correct: 0, // Index of the correct option
      explanation: "Half of $b$ means $\\frac{b}{2}$. So, $\\frac{-6}{2} = -3$.",
      explanationType: 'text'
    },
    {
      id: 'csn-square-half',
      question: "Square the result from the previous step: $\\left(\\frac{b}{2}\\right)^2 = (-3)^2$. What is the value?",
      questionType: 'text',
      options: [
        "$-6$",
        "$9$",
        "$-9$",
        "$6$"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "Calculate the square: $(-3)^2 = (-3) \\times (-3) = 9$. Remember, squaring a negative number gives a positive result. The constant needed is $9$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Constant to Add (x²-6x)", "9");
      }
    },
    {
      id: 'csn-add-subtract',
      question: "Add and subtract the constant 9 to the isolated terms: $x^2 - 6x$. What expression do you get?",
      questionType: 'text',
      options: [
        "$x^2 - 6x + 9 - 9$",
        "$x^2 - 6x + 9$",
        "$x^2 - 6x - 9$",
        "$x^2 - 6x + 9 + 9$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "To maintain equivalence, you add the constant and immediately subtract it: $x^2 - 6x + 9 - 9$.",
      explanationType: 'text'
    },
    {
      id: 'csn-perfect-square',
      question: "Rewrite the first three terms of $x^2 - 6x + 9 - 9$ as a perfect square.",
      questionType: 'text',
      options: [
        "$(x - 3)^2$",
        "$(x + 3)^2$",
        "$(x - 6)^2$",
        "$(x^2 - 3)^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The first three terms, $x^2 - 6x + 9$, form a perfect square trinomial. It matches the pattern $a^2 - 2ab + b^2 = (a - b)^2$ where $a=x$ and $b=3$. So, $x^2 - 6x + 9 = (x - 3)^2$.",
      explanationType: 'text'
    },
    {
      id: 'csn-write-form',
      question: "Combine the perfect square with the remaining constant. What is the expression $x^2 - 6x + 9 - 9$ rewritten as?",
      questionType: 'text',
      options: [
        "$(x - 3)^2 - 9$",
        "$(x - 3)^2 + 9$",
        "$x^2 - 6x + 0$",
        "$(x - 3)^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Replace $x^2 - 6x + 9$ with $(x - 3)^2$. The expression becomes $(x - 3)^2 - 9$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Completed Square (x²-6x)", "(x - 3)² - 9");
      }
    }
  ]
};

// --- Multi-Step Question 5: Applying the Method ---
const applyMethodQuestion: MultiStepQuestion = {
  id: 'apply-method',
  title: 'Applying Completing the Square',
  steps: [
    {
      id: 'am-analyze',
      question: "Complete the square for $x^2 + 12x - 5$. What is the coefficient of the $x$ term ($b$)?",
      questionType: 'text',
      options: [
        "$12$",
        "$-5$",
        "$1$",
        "$2$"
      ],
      optionType: 'text', // Options are plain text
      correct: 0, // Index of the correct option
      explanation: "In the expression $x^2 + bx + c$, $b$ is the coefficient of the $x$ term. In $x^2 + 12x - 5$, the coefficient of $x$ is $12$.",
      explanationType: 'text'
    },
    {
      id: 'am-calculate-half',
      question: "What is half of the coefficient $b = 12$?",
      questionType: 'text',
      options: [
        "$6$",
        "$24$",
        "$144$",
        "$3$"
      ],
      optionType: 'text', // Options are plain text
      correct: 0, // Index of the correct option
      explanation: "Half of $b$ means $\\frac{b}{2}$. So, $\\frac{12}{2} = 6$.",
      explanationType: 'text'
    },
    {
      id: 'am-square-half',
      question: "Square the result from the previous step: $\\left(\\frac{b}{2}\\right)^2 = 6^2$. What is the value?",
      questionType: 'text',
      options: [
        "$12$",
        "$36$",
        "$216$",
        "$18$"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "Calculate the square: $6^2 = 6 \\times 6 = 36$. This value, $36$, is the constant needed to complete the square for the $x^2 + 12x$ part of the expression.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Constant to Add (x²+12x)", "36");
      }
    },
    {
      id: 'am-add-subtract',
      question: "Add and subtract the constant 36 to the isolated terms: $x^2 + 12x$. What expression do you get?",
      questionType: 'text',
      options: [
        "$x^2 + 12x + 36 - 36$",
        "$x^2 + 12x + 36$",
        "$x^2 + 12x - 36$",
        "$x^2 + 12x + 36 + 36$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "To maintain equivalence, you add the constant and immediately subtract it: $x^2 + 12x + 36 - 36$.",
      explanationType: 'text'
    },
    {
      id: 'am-perfect-square',
      question: "Rewrite the first three terms of $x^2 + 12x + 36 - 36$ as a perfect square.",
      questionType: 'text',
      options: [
        "$(x + 6)^2$",
        "$(x + 12)^2$",
        "$(x^2 + 6)^2$",
        "$(x + 36)^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "The first three terms, $x^2 + 12x + 36$, form a perfect square trinomial. It matches the pattern $a^2 + 2ab + b^2 = (a + b)^2$ where $a=x$ and $b=6$. So, $x^2 + 12x + 36 = (x + 6)^2$.",
      explanationType: 'text'
    },
    {
      id: 'am-write-form',
      question: "Combine the perfect square with the remaining constants. What is the expression $x^2 + 12x + 36 - 36 - 5$ rewritten as?",
      questionType: 'text',
      options: [
        "$(x + 6)^2 - 41$",
        "$(x + 6)^2 - 36$",
        "$(x + 6)^2 - 5$",
        "$(x + 6)^2 + 36$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Replace $x^2 + 12x + 36$ with $(x + 6)^2$. Combine the constants: $-36 - 5 = -41$. The final expression is $(x + 6)^2 - 41$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Completed Square (x²+12x-5)", "(x + 6)² - 41");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const completingSquareA1Questions: MultiStepQuestion[] = [
  csConceptQuestion,
  findConstantQuestion,
  completeSquareSimpleQuestion,
  completeSquareNegativeQuestion,
  applyMethodQuestion
];


const CompletingSquareA1: React.FC = () => {
  const csRules = [
    "Completing the square rewrites $x^2 + bx + c$ into the form $(x + h)^2 + k$.",
    "Focus on the coefficient of the $x$ term ($b$).",
    "Calculate $\\left(\\frac{b}{2}\\right)^2$. This is the constant needed to complete the square.",
    "Add and subtract this constant $\\left(\\frac{b}{2}\\right)^2$ to/from the expression (usually after isolating $x^2 + bx$).",
    "Rewrite the $x^2 + bx + \\left(\\frac{b}{2}\\right)^2$ part as a perfect square: $\\left(x + \\frac{b}{2}\\right)^2$.",
    "Combine the remaining constants to get the final form: $\\left(x + \\frac{b}{2}\\right)^2 + \\left(c - \\left(\\frac{b}{2}\\right)^2\\right)$.",
    "Check your answer by expanding the perfect square form."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Completing the Square (a = 1)"
        icon="🧮" // Or any other relevant icon like "✔️" or "📐"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={csRules}
        rulesTitle="Completing the Square Rules:"
        questions={completingSquareA1Questions} // Pass the array of question objects
        renderSharedValuesSummary={renderCompleteSquareA1Summary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default CompletingSquareA1;