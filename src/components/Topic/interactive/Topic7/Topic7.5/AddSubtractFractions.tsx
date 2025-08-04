/* eslint-disable @typescript-eslint/no-explicit-any */
// AddingSubtractingFractionsQuiz.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

// --- Helper Function for Summary (if needed) ---
const renderAddSubtractFractionsSummary = (sharedValues: { [key: string]: any }) => {
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

// --- Multi-Step Question 1: Concept and Common Denominator ---
const asfConceptQuestion: MultiStepQuestion = {
  id: 'asf-concept',
  title: 'Understanding Fraction Addition/Subtraction',
  steps: [
    {
      id: 'asfc-requirement',
      question: "What is the essential requirement before you can add or subtract two fractions like $\\frac{a}{b} + \\frac{c}{d}$?",
      questionType: 'text',
      options: [
        "The numerators must be the same",
        "The denominators must be the same",
        "Both numerators and denominators must be the same",
        "One fraction must be larger than the other"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "To add or subtract fractions, they must have a 'common denominator'. This means the bottom parts of the fractions must be identical so that you are essentially counting parts of the same whole.",
      explanationType: 'text'
    },
    {
      id: 'asfc-lcm-purpose',
      question: "What does finding the LCM (Least Common Multiple) of the denominators help you achieve?",
      questionType: 'text',
      options: [
        "It gives you the largest possible denominator",
        "It gives you a common denominator that both original denominators divide into evenly",
        "It simplifies the final fraction",
        "It finds the difference between the denominators"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "The LCM of two numbers is the smallest number that is a multiple of both. Finding the LCM of the denominators gives you the smallest common denominator that both fractions can be rewritten with.",
      explanationType: 'text'
    },
    {
      id: 'asfc-operation',
      question: "Once fractions have a common denominator, what part of the fraction do you add or subtract?",
      questionType: 'text',
      options: [
        "Only the denominators",
        "Only the numerators",
        "Both the numerators and denominators",
        "Multiply the numerators and denominators"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "With a common denominator, the denominator tells you the size of the parts. You then add or subtract the numerators, which tell you how many of those parts you have.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Finding the LCM ---
const findLCMQuestion: MultiStepQuestion = {
  id: 'find-lcm',
  title: 'Finding the LCM of Denominators',
  steps: [
    {
      id: 'flcm-identify',
      question: "To add $\\frac{3}{2x} + \\frac{5}{4x^2}$, what are the denominators?",
      questionType: 'text',
      options: [
        "$3$ and $5$",
        "$2x$ and $4x^2$",
        "$2$ and $4$",
        "$x$ and $x^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The denominators are the expressions on the bottom of each fraction. In $\\frac{3}{2x}$, the denominator is $2x$. In $\\frac{5}{4x^2}$, the denominator is $4x^2$.",
      explanationType: 'text'
    },
    {
      id: 'flcm-factorize',
      question: "Factorize the coefficients of the denominators $2x$ and $4x^2$. What are their prime factorizations?",
      questionType: 'text',
      options: [
        "$2x = 2^1 \\times x^1$, $4x^2 = 2^2 \\times x^2$",
        "$2x = 2 \\times x$, $4x^2 = 4 \\times x^2$",
        "$2x = 2x$, $4x^2 = 4x^2$",
        "$2x = 1 \\times 2x$, $4x^2 = 1 \\times 4x^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Factorize the numerical coefficients into primes and write the variables with exponents. $2 = 2^1$. $4 = 2^2$. So, $2x = 2^1 \\times x^1$ and $4x^2 = 2^2 \\times x^2$.",
      explanationType: 'text'
    },
    {
      id: 'flcm-find-lcm',
      question: "Using the factorizations $2x = 2^1 \\times x^1$ and $4x^2 = 2^2 \\times x^2$, what is the LCM?",
      questionType: 'text',
      options: [
        "$2^2 \\times x^2 = 4x^2$",
        "$2^1 \\times x^1 = 2x$",
        "$2^3 \\times x^3 = 8x^3$",
        "$2^2 + x^2 = 4 + x^2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "To find the LCM, take the highest power of each prime factor present. For factor $2$: highest power is $\\max(2^1, 2^2) = 2^2$. For factor $x$: highest power is $\\max(x^1, x^2) = x^2$. LCM = $2^2 \\times x^2 = 4x^2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("LCM (2x, 4x²)", "4x²");
      }
    }
  ]
};

// --- Multi-Step Question 3: Adding Fractions ---
const addFractionsQuestion: MultiStepQuestion = {
  id: 'add-fractions',
  title: 'Adding Fractions with Monomial Denominators',
  steps: [
    {
      id: 'af-rewrite-first',
      question: "Add $\\frac{1}{3y} + \\frac{2}{9y}$. The LCM of $3y$ and $9y$ is $9y$. Rewrite $\\frac{1}{3y}$ with denominator $9y$. What do you multiply the numerator and denominator by?",
      questionType: 'text',
      options: [
        "$1$",
        "$3$",
        "$9$",
        "$y$"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "To change the denominator from $3y$ to $9y$, you need to multiply by $\\frac{9y}{3y} = \\frac{9}{3} = 3$. You multiply both the numerator and denominator by $3$.",
      explanationType: 'text'
    },
    {
      id: 'af-multiply-first',
      question: "Multiply the numerator and denominator of $\\frac{1}{3y}$ by $3$. What is the result?",
      questionType: 'text',
      options: [
        "$\\frac{1 \\times 3}{3y \\times 3} = \\frac{3}{9y}$",
        "$\\frac{1 \\times 3}{3y} = \\frac{3}{3y}$",
        "$\\frac{1}{3y \\times 3} = \\frac{1}{9y}$",
        "$\\frac{1 + 3}{3y + 3} = \\frac{4}{3y + 3}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Multiply both the top (numerator) and bottom (denominator) by $3$: $\\frac{1}{3y} \\times \\frac{3}{3} = \\frac{1 \\times 3}{3y \\times 3} = \\frac{3}{9y}$.",
      explanationType: 'text'
    },
    {
      id: 'af-rewrite-second',
      question: "The second fraction $\\frac{2}{9y}$ already has the common denominator $9y$. Rewrite the full addition problem with the common denominator.",
      questionType: 'text',
      options: [
        "$\\frac{3}{9y} + \\frac{2}{9y}$",
        "$\\frac{1}{9y} + \\frac{2}{9y}$",
        "$\\frac{3}{3y} + \\frac{2}{9y}$",
        "$\\frac{1 \\times 3}{9y} + \\frac{2}{9y}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "After rewriting the first fraction, the problem becomes $\\frac{3}{9y} + \\frac{2}{9y}$.",
      explanationType: 'text'
    },
    {
      id: 'af-add-numerators',
      question: "Add the numerators of $\\frac{3}{9y} + \\frac{2}{9y}$. What is the result?",
      questionType: 'text',
      options: [
        "$\\frac{3 + 2}{9y} = \\frac{5}{9y}$",
        "$\\frac{3 \\times 2}{9y} = \\frac{6}{9y}$",
        "$\\frac{3 - 2}{9y} = \\frac{1}{9y}$",
        "$\\frac{3}{9y + 2} = \\frac{3}{9y + 2}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "With a common denominator, add the numerators: $3 + 2 = 5$. Keep the common denominator $9y$. The result is $\\frac{5}{9y}$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Sum (1/3y + 2/9y)", "5/9y");
      }
    }
  ]
};

// --- Multi-Step Question 4: Subtracting Fractions ---
const subtractFractionsQuestion: MultiStepQuestion = {
  id: 'subtract-fractions',
  title: 'Subtracting Fractions with Polynomial Denominators',
  steps: [
    {
      id: 'sf-identify',
      question: "Subtract $\\frac{x}{x+2} - \\frac{1}{x-3}$. What are the denominators?",
      questionType: 'text',
      options: [
        "$x$ and $1$",
        "$x+2$ and $x-3$",
        "$x$ and $x$",
        "$2$ and $-3$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The denominators are the expressions on the bottom of each fraction. They are $(x+2)$ and $(x-3)$.",
      explanationType: 'text'
    },
    {
      id: 'sf-find-lcm',
      question: "What is the LCM of the denominators $(x+2)$ and $(x-3)$?",
      questionType: 'text',
      options: [
        "$(x+2) + (x-3)$",
        "$(x+2) \\times (x-3)$",
        "$(x+2) - (x-3)$",
        "$\\frac{(x+2)}{(x-3)}$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Since $(x+2)$ and $(x-3)$ are different linear polynomials with no common factors, their LCM is simply their product: $(x+2)(x-3)$.",
      explanationType: 'text'
    },
    {
      id: 'sf-rewrite-first',
      question: "Rewrite $\\frac{x}{x+2}$ with the common denominator $(x+2)(x-3)$. What do you multiply the numerator and denominator by?",
      questionType: 'text',
      options: [
        "$x$",
        "$x+2$",
        "$x-3$",
        "$1$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "To get from denominator $(x+2)$ to $(x+2)(x-3)$, you multiply by $(x-3)$. Multiply both numerator and denominator by $(x-3)$: $\\frac{x}{x+2} \\times \\frac{x-3}{x-3} = \\frac{x(x-3)}{(x+2)(x-3)}$.",
      explanationType: 'text'
    },
    {
      id: 'sf-rewrite-second',
      question: "Rewrite $\\frac{1}{x-3}$ with the common denominator $(x+2)(x-3)$. What do you multiply the numerator and denominator by?",
      questionType: 'text',
      options: [
        "$x$",
        "$x+2$",
        "$x-3$",
        "$1$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "To get from denominator $(x-3)$ to $(x+2)(x-3)$, you multiply by $(x+2)$. Multiply both numerator and denominator by $(x+2)$: $\\frac{1}{x-3} \\times \\frac{x+2}{x+2} = \\frac{1(x+2)}{(x-3)(x+2)} = \\frac{x+2}{(x+2)(x-3)}$.",
      explanationType: 'text'
    },
    {
      id: 'sf-write-subtraction',
      question: "Write the full subtraction problem with the common denominator $(x+2)(x-3)$.",
      questionType: 'text',
      options: [
        "$\\frac{x(x-3)}{(x+2)(x-3)} - \\frac{x+2}{(x+2)(x-3)}$",
        "$\\frac{x}{(x+2)(x-3)} - \\frac{1}{(x+2)(x-3)}$",
        "$\\frac{x(x-3)}{x+2} - \\frac{x+2}{x-3}$",
        "$\\frac{x}{x+2} - \\frac{1}{x-3}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "After rewriting both fractions, the problem becomes $\\frac{x(x-3)}{(x+2)(x-3)} - \\frac{x+2}{(x+2)(x-3)}$.",
      explanationType: 'text'
    },
    {
      id: 'sf-subtract-numerators',
      question: "Subtract the numerators: $x(x-3) - (x+2)$. First, expand $x(x-3)$.",
      questionType: 'text',
      options: [
        "$x^2 - 3x$",
        "$x^2 - 3$",
        "$x^2 + 3x$",
        "$x - 3x$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Use the distributive property: $x(x-3) = x \\times x + x \\times (-3) = x^2 - 3x$.",
      explanationType: 'text'
    },
    {
      id: 'sf-complete-subtraction',
      question: "Now complete the subtraction: $(x^2 - 3x) - (x + 2)$. Remember to distribute the negative sign.",
      questionType: 'text',
      options: [
        "$x^2 - 3x - x - 2 = x^2 - 4x - 2$",
        "$x^2 - 3x - x + 2 = x^2 - 4x + 2$",
        "$x^2 - 3x + x + 2 = x^2 - 2x + 2$",
        "$x^2 - 3x + x - 2 = x^2 - 2x - 2$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Distribute the negative sign: $(x^2 - 3x) - (x + 2) = x^2 - 3x - x - 2$. Combine like terms: $x^2 + (-3x - x) + (-2) = x^2 - 4x - 2$.",
      explanationType: 'text'
    },
    {
      id: 'sf-write-result',
      question: "Write the final result of the subtraction $\\frac{x}{x+2} - \\frac{1}{x-3}$ with the simplified numerator.",
      questionType: 'text',
      options: [
        "$\\frac{x^2 - 4x - 2}{(x+2)(x-3)}$",
        "$\\frac{x^2 - 4x - 2}{x+2 + x-3}$",
        "$\\frac{x^2 - 4x - 2}{(x+2) - (x-3)}$",
        "$\\frac{x^2 - 4x - 2}{x^2 - x - 6}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Place the simplified numerator $x^2 - 4x - 2$ over the common denominator $(x+2)(x-3)$. The result is $\\frac{x^2 - 4x - 2}{(x+2)(x-3)}$. (Note: The denominator can also be expanded to $x^2 - x - 6$, but the factored form is often preferred).",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Difference (x/(x+2) - 1/(x-3))", "(x²-4x-2)/((x+2)(x-3))");
      }
    }
  ]
};

// --- Multi-Step Question 5: Applying the Method ---
const applyMethodQuestion: MultiStepQuestion = {
  id: 'apply-method',
  title: 'Applying Addition/Subtraction',
  steps: [
    {
      id: 'am-analyze',
      question: "Add $\\frac{2}{a} + \\frac{3}{a^2}$. What is the LCM of the denominators $a$ and $a^2$?",
      questionType: 'text',
      options: [
        "$a$",
        "$a^2$",
        "$a^3$",
        "$1$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "The LCM of variable powers is the highest power present. Between $a^1$ and $a^2$, the highest power is $a^2$. So, the LCM is $a^2$.",
      explanationType: 'text'
    },
    {
      id: 'am-rewrite-first',
      question: "Rewrite $\\frac{2}{a}$ with the common denominator $a^2$. What do you multiply the numerator and denominator by?",
      questionType: 'text',
      options: [
        "$2$",
        "$a$",
        "$a^2$",
        "$1$"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "To change the denominator from $a$ (which is $a^1$) to $a^2$, you multiply by $\\frac{a^2}{a} = a$. Multiply both numerator and denominator by $a$: $\\frac{2}{a} \\times \\frac{a}{a} = \\frac{2a}{a^2}$.",
      explanationType: 'text'
    },
    {
      id: 'am-rewrite-second',
      question: "The second fraction $\\frac{3}{a^2}$ already has the common denominator $a^2$. Rewrite the full addition problem.",
      questionType: 'text',
      options: [
        "$\\frac{2a}{a^2} + \\frac{3}{a^2}$",
        "$\\frac{2}{a^2} + \\frac{3}{a^2}$",
        "$\\frac{2}{a} + \\frac{3}{a^2}$",
        "$\\frac{2a}{a} + \\frac{3}{a^2}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "After rewriting the first fraction, the problem becomes $\\frac{2a}{a^2} + \\frac{3}{a^2}$.",
      explanationType: 'text'
    },
    {
      id: 'am-add-numerators',
      question: "Add the numerators of $\\frac{2a}{a^2} + \\frac{3}{a^2}$. What is the sum?",
      questionType: 'text',
      options: [
        "$\\frac{2a + 3}{a^2}$",
        "$\\frac{2a \\times 3}{a^2}$",
        "$\\frac{2a - 3}{a^2}$",
        "$\\frac{5a}{a^2}$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "With a common denominator, add the numerators: $2a + 3$. Keep the common denominator $a^2$. The result is $\\frac{2a + 3}{a^2}$.",
      explanationType: 'text'
    },
    {
      id: 'am-check-simplification',
      question: "Can the result $\\frac{2a + 3}{a^2}$ be simplified further?",
      questionType: 'text',
      options: [
        "Yes, by canceling $a$",
        "Yes, by factoring the numerator",
        "No, there are no common factors between the numerator and denominator",
        "Yes, it equals $2a + 3$"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "To simplify, we look for common factors in the numerator and denominator. The numerator is $2a + 3$. The denominator is $a^2$. There are no common factors between $2a + 3$ and $a^2$ that can be canceled. Therefore, $\\frac{2a + 3}{a^2}$ is already in its simplest form.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Sum (2/a + 3/a²)", "(2a+3)/a²");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const addingSubtractingFractionsQuestions: MultiStepQuestion[] = [
  asfConceptQuestion,
  findLCMQuestion,
  addFractionsQuestion,
  subtractFractionsQuestion,
  applyMethodQuestion
];


const AddingSubtractingFractions: React.FC = () => {
  const asfRules = [
    "Find the Least Common Multiple (LCM) of the denominators. This is your common denominator.",
    "Rewrite each fraction so that it has the common denominator. Multiply both numerator and denominator by the necessary factor.",
    "Add (or subtract) the numerators of the rewritten fractions. Keep the common denominator.",
    "Write the result as a single fraction with the sum/difference as the numerator and the common denominator.",
    "Simplify the resulting fraction by canceling any common factors in the numerator and denominator.",
    "State any restrictions on the variable(s) that would make any original or final denominator zero."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Adding and Subtracting Fractions"
        icon="➕" // Or any other relevant icon like "➗" or "🧮"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={asfRules}
        rulesTitle="Fraction Operation Rules:"
        questions={addingSubtractingFractionsQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderAddSubtractFractionsSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default AddingSubtractingFractions;