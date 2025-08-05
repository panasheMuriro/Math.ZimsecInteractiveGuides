/* eslint-disable @typescript-eslint/no-explicit-any */
// SolvingLinearEquationsQuiz.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

// --- Helper Function for Summary (if needed) ---
const renderLinearEquationsSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No specific solutions calculated.</p>;
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

// --- Multi-Step Question 1: Concept and Structure ---
const leConceptQuestion: MultiStepQuestion = {
  id: 'le-concept',
  title: 'Understanding Linear Equations',
  steps: [
    {
      id: 'lec-identify',
      question: "Which of the following is a linear equation in one variable?",
      questionType: 'text',
      options: [
        "$x^2 + 3x = 5$",
        "$\\sqrt{x} + 2 = 7$",
        "$3x - 4 = 2x + 1$",
        "$\\frac{1}{x} = 5$"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "A linear equation in one variable has the variable raised only to the power of 1 (e.g., $x$, $3x$, $-4x$) and does not involve roots, fractions with the variable in the denominator, or other non-linear operations. $3x - 4 = 2x + 1$ fits this definition.",
      explanationType: 'text'
    },
    {
      id: 'lec-goal',
      question: "What is the main goal when solving a linear equation like $2x + 1 = 7$?",
      questionType: 'text',
      options: [
        "To find the value of the variable that makes the equation true",
        "To graph the equation",
        "To factor the left side",
        "To make the variable equal to zero"
      ],
      optionType: 'text', // Options are plain text
      correct: 0, // Index of the correct option
      explanation: "The goal of solving an equation is to determine the specific value(s) of the variable that satisfy the equation, making both sides equal.",
      explanationType: 'text'
    },
    {
      id: 'lec-balance',
      question: "Why is it important to perform the same operation on both sides of an equation?",
      questionType: 'text',
      options: [
        "To make the equation longer",
        "To keep the equation balanced, like a scale",
        "To change the value of the variable",
        "It's not necessary"
      ],
      optionType: 'text', // Options are plain text
      correct: 1, // Index of the correct option
      explanation: "Think of an equation like a balanced scale. Whatever you do to one side, you must do to the other side to maintain the balance (equality). This ensures the solution remains valid.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Simple Two-Step Equation ---
const simpleEquationQuestion: MultiStepQuestion = {
  id: 'simple-equation',
  title: 'Solving a Simple Linear Equation',
  steps: [
    {
      id: 'seq-isolate',
      question: "Solve $4x + 6 = 18$. What is the FIRST step to isolate the term with $x$?",
      questionType: 'text',
      options: [
        "Add 6 to both sides",
        "Subtract 6 from both sides",
        "Divide both sides by 4",
        "Multiply both sides by 6"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "To isolate the term with $x$ ($4x$), you need to eliminate the constant term on the same side ($+6$). You do this by performing the inverse operation, which is subtraction. Subtract 6 from both sides.",
      explanationType: 'text'
    },
    {
      id: 'seq-subtract',
      question: "Subtract 6 from both sides of $4x + 6 = 18$. What equation do you get?",
      questionType: 'text',
      options: [
        "$4x = 12$",
        "$4x = 24$",
        "$4x + 0 = 12$",
        "$4x - 6 = 12$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Perform the subtraction on both sides: Left side: $4x + 6 - 6 = 4x + 0 = 4x$. Right side: $18 - 6 = 12$. The new equation is $4x = 12$.",
      explanationType: 'text'
    },
    {
      id: 'seq-solve-for-x',
      question: "Now, solve for $x$ in $4x = 12$. What operation do you perform?",
      questionType: 'text',
      options: [
        "Add 4 to both sides",
        "Subtract 4 from both sides",
        "Multiply both sides by 4",
        "Divide both sides by 4"
      ],
      optionType: 'text', // Options are plain text
      correct: 3, // Index of the correct option
      explanation: "To isolate $x$ from $4x$, you need to undo the multiplication by 4. The inverse operation of multiplication is division. Divide both sides by 4.",
      explanationType: 'text'
    },
    {
      id: 'seq-divide',
      question: "Divide both sides of $4x = 12$ by 4. What is the value of $x$?",
      questionType: 'text',
      options: [
        "$x = 3$",
        "$x = 48$",
        "$x = 8$",
        "$x = 16$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Perform the division on both sides: Left side: $4x \\div 4 = x$. Right side: $12 \\div 4 = 3$. Therefore, $x = 3$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Solution (4x + 6 = 18)", "x = 3");
      }
    }
  ]
};

// --- Multi-Step Question 3: Multi-Step Equation (Distribution) ---
const multiStepEquationQuestion: MultiStepQuestion = {
  id: 'multi-step-equation',
  title: 'Solving a Multi-Step Linear Equation',
  steps: [
    {
      id: 'mse-expand',
      question: "Solve $2(x + 3) = 16$. What is the FIRST step?",
      questionType: 'text',
      options: [
        "Add 3 to both sides",
        "Subtract 3 from both sides",
        "Divide both sides by 2",
        "Expand the brackets using the distributive property"
      ],
      optionType: 'text', // Options are plain text
      correct: 3, // Index of the correct option
      explanation: "The expression $2(x + 3)$ is grouped together. To simplify the left side, you need to expand (or distribute) the 2 to both terms inside the parentheses.",
      explanationType: 'text'
    },
    {
      id: 'mse-distribute',
      question: "Apply the distributive property: $2(x + 3)$. What is the result?",
      questionType: 'text',
      options: [
        "$2x + 3$",
        "$2x + 6$",
        "$2x + 5$",
        "$2x + 23$"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "Multiply the 2 by each term inside the parentheses: $2 \\times x = 2x$ and $2 \\times 3 = 6$. So, $2(x + 3) = 2x + 6$. The equation becomes $2x + 6 = 16$.",
      explanationType: 'text'
    },
    {
      id: 'mse-isolate',
      question: "Now solve $2x + 6 = 16$. What is the next step to isolate the term with $x$?",
      questionType: 'text',
      options: [
        "Add 6 to both sides",
        "Subtract 6 from both sides",
        "Divide both sides by 2",
        "Multiply both sides by 6"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "To isolate $2x$, you need to eliminate the constant term $+6$ on the same side. Subtract 6 from both sides.",
      explanationType: 'text'
    },
    {
      id: 'mse-subtract',
      question: "Subtract 6 from both sides of $2x + 6 = 16$. What equation do you get?",
      questionType: 'text',
      options: [
        "$2x = 10$",
        "$2x = 22$",
        "$2x + 0 = 10$",
        "$2x - 6 = 10$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Perform the subtraction on both sides: Left side: $2x + 6 - 6 = 2x + 0 = 2x$. Right side: $16 - 6 = 10$. The new equation is $2x = 10$.",
      explanationType: 'text'
    },
    {
      id: 'mse-solve-for-x',
      question: "Finally, solve for $x$ in $2x = 10$. What is the value of $x$?",
      questionType: 'text',
      options: [
        "$x = 5$",
        "$x = 20$",
        "$x = 8$",
        "$x = 12$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "To isolate $x$ from $2x$, divide both sides by 2: $2x \\div 2 = x$ and $10 \\div 2 = 5$. Therefore, $x = 5$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Solution (2(x+3) = 16)", "x = 5");
      }
    }
  ]
};

// --- Multi-Step Question 4: Equation with Fractions ---
const fractionEquationQuestion: MultiStepQuestion = {
  id: 'fraction-equation',
  title: 'Solving an Equation with Fractions',
  steps: [
    {
      id: 'fe-clear-fractions',
      question: "Solve $\\frac{x}{3} + 2 = 5$. What is a good strategy for the FIRST step?",
      questionType: 'text',
      options: [
        "Add 2 to both sides",
        "Subtract 2 from both sides",
        "Multiply both sides by the denominator (3) to clear the fraction",
        "Divide both sides by 3"
      ],
      optionType: 'text', // Options are plain text
      correct: 2, // Index of the correct option
      explanation: "While you could subtract 2 first, a common strategy when fractions are present is to eliminate them early. You can do this by multiplying every term in the equation by the denominator of the fraction.",
      explanationType: 'text'
    },
    {
      id: 'fe-multiply-by-denominator',
      question: "Multiply every term in $\\frac{x}{3} + 2 = 5$ by 3. What is the result?",
      questionType: 'text',
      options: [
        "$x + 6 = 15$",
        "$3x + 6 = 15$",
        "$\\frac{x}{9} + 6 = 15$",
        "$x + 2 = 5$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Apply the multiplication to each term: $3 \\times \\frac{x}{3} = x$, $3 \\times 2 = 6$, $3 \\times 5 = 15$. The new equation is $x + 6 = 15$.",
      explanationType: 'text'
    },
    {
      id: 'fe-isolate',
      question: "Now solve $x + 6 = 15$. What is the next step to isolate $x$?",
      questionType: 'text',
      options: [
        "Add 6 to both sides",
        "Subtract 6 from both sides",
        "Multiply both sides by 6",
        "Divide both sides by 6"
      ],
      optionType: 'text', // Options contain text
      correct: 1, // Index of the correct option
      explanation: "To isolate $x$, you need to eliminate the constant term $+6$ on the same side. Subtract 6 from both sides.",
      explanationType: 'text'
    },
    {
      id: 'fe-subtract',
      question: "Subtract 6 from both sides of $x + 6 = 15$. What is the value of $x$?",
      questionType: 'text',
      options: [
        "$x = 9$",
        "$x = 21$",
        "$x = 3$",
        "$x = 11$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Perform the subtraction on both sides: Left side: $x + 6 - 6 = x + 0 = x$. Right side: $15 - 6 = 9$. Therefore, $x = 9$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Solution (x/3 + 2 = 5)", "x = 9");
      }
    }
  ]
};

// --- Multi-Step Question 5: Applying the Method ---
const applyMethodQuestion: MultiStepQuestion = {
  id: 'apply-method',
  title: 'Applying the Solving Method',
  steps: [
    {
      id: 'am-analyze',
      question: "Solve $5x - 7 = 3x + 5$. What should you do FIRST to start collecting variable terms on one side?",
      questionType: 'text',
      options: [
        "Add 7 to both sides",
        "Subtract 5 from both sides",
        "Subtract $3x$ from both sides",
        "Add $3x$ to both sides"
      ],
      optionType: 'text', // Options contain text
      correct: 2, // Index of the correct option
      explanation: "A good first step is to get all terms containing the variable ($x$) on one side. You can subtract $3x$ from both sides to move the $3x$ term from the right side to the left side.",
      explanationType: 'text'
    },
    {
      id: 'am-subtract-variable',
      question: "Subtract $3x$ from both sides of $5x - 7 = 3x + 5$. What equation do you get?",
      questionType: 'text',
      options: [
        "$2x - 7 = 5$",
        "$8x - 7 = 5$",
        "$5x - 3x - 7 = 5$",
        "$2x - 7 = 3x + 5 - 3x$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Perform the subtraction on both sides: Left side: $5x - 3x - 7 = 2x - 7$. Right side: $3x + 5 - 3x = 0 + 5 = 5$. The new equation is $2x - 7 = 5$.",
      explanationType: 'text'
    },
    {
      id: 'am-isolate',
      question: "Now solve $2x - 7 = 5$. What is the next step to isolate the term with $x$?",
      questionType: 'text',
      options: [
        "Add 7 to both sides",
        "Subtract 7 from both sides",
        "Divide both sides by 2",
        "Multiply both sides by 7"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "To isolate the term with $x$ ($2x$), you need to eliminate the constant term $-7$ on the same side. You do this by adding 7 to both sides.",
      explanationType: 'text'
    },
    {
      id: 'am-add',
      question: "Add 7 to both sides of $2x - 7 = 5$. What equation do you get?",
      questionType: 'text',
      options: [
        "$2x = 12$",
        "$2x = -2$",
        "$2x + 0 = 12$",
        "$2x - 7 + 7 = 5 + 7$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Perform the addition on both sides: Left side: $2x - 7 + 7 = 2x + 0 = 2x$. Right side: $5 + 7 = 12$. The new equation is $2x = 12$.",
      explanationType: 'text'
    },
    {
      id: 'am-solve-for-x',
      question: "Finally, solve for $x$ in $2x = 12$. What is the value of $x$?",
      questionType: 'text',
      options: [
        "$x = 6$",
        "$x = 24$",
        "$x = 10$",
        "$x = 14$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "To isolate $x$ from $2x$, divide both sides by 2: $2x \\div 2 = x$ and $12 \\div 2 = 6$. Therefore, $x = 6$.",
      explanationType: 'text'
    },
    {
      id: 'am-check',
      question: "(Bonus Check) Substitute $x = 6$ back into the original equation $5x - 7 = 3x + 5$. Does it hold true?",
      questionType: 'text',
      options: [
        "Yes: Left side = $5(6) - 7 = 23$, Right side = $3(6) + 5 = 23$. $23 = 23$ ✓",
        "No: Left side = $23$, Right side = $25$",
        "No: Left side = $25$, Right side = $23$",
        "Yes: Left side = $30$, Right side = $15$"
      ],
      optionType: 'text', // Options contain text
      correct: 0, // Index of the correct option
      explanation: "Check the left side: $5x - 7 = 5(6) - 7 = 30 - 7 = 23$. Check the right side: $3x + 5 = 3(6) + 5 = 18 + 5 = 23$. Since both sides equal 23, the solution $x = 6$ is correct.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Solution (5x-7=3x+5)", "x = 6");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const solvingLinearEquationsQuestions: MultiStepQuestion[] = [
  leConceptQuestion,
  simpleEquationQuestion,
  multiStepEquationQuestion,
  fractionEquationQuestion,
  applyMethodQuestion
];


const SolvingLinearEquations: React.FC = () => {
  const leRules = [
    "Simplify both sides of the equation (clear fractions, expand brackets).",
    "Use the balance principle: perform the same operation on both sides.",
    "Isolate the variable term ($x$) on one side by adding/subtracting terms.",
    "Solve for the variable by dividing/multiplying both sides by its coefficient.",
    "Check your solution by substituting it back into the original equation."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Solving Linear Equations"
        icon="🧮" // Or any other relevant icon like "✖️" or "❓"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={leRules}
        rulesTitle="Solving Rules:"
        questions={solvingLinearEquationsQuestions} // Pass the array of question objects
        renderSharedValuesSummary={renderLinearEquationsSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default SolvingLinearEquations