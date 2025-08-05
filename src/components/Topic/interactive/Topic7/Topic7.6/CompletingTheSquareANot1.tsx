/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary (if needed) ---
const renderCompletingSquareSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No expressions completed yet.</p>;
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
const csConceptQuestion: MultiStepQuestion = {
  id: 'cs-concept',
  title: 'Understanding Completing the Square ($a \\neq 1$)',
  steps: [
    {
      id: 'csc-first-step',
      question: "What is the FIRST step when completing the square for an expression like $ax^2 + bx + c$ where $a \\neq 1$?",
      questionType: 'text',
      options: [
        "Complete the square directly using $b$.",
        "Factor out the coefficient $a$ from the first two terms: $a(x^2 + \\frac{b}{a}x) + c$.",
        "Add and subtract $(\\frac{b}{2})^2$.",
        "Factor out $a$ from all terms: $a(x^2 + \\frac{b}{a}x + \\frac{c}{a})$."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "When the coefficient of $x^2$ is not 1, the first step is to factor it out from the $x^2$ and $x$ terms only. This allows you to complete the square on the simpler expression inside the parentheses.",
      explanationType: 'text'
    },
    {
      id: 'csc-inside-brackets',
      question: "After factoring out $a$, you have $a(x^2 + \\frac{b}{a}x) + c$. What do you do inside the brackets?",
      questionType: 'text',
      options: [
        "Complete the square using the coefficient of $x$, which is $\\frac{b}{a}$.",
        "Complete the square using the original coefficient $b$.",
        "Add $\\frac{b}{a}$ to the expression.",
        "Ignore the $\\frac{b}{a}$ term for now."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Once you've factored out $a$, you focus on the expression inside the brackets, $x^2 + \\frac{b}{a}x$. You complete the square for this part by taking half of the coefficient of $x$ (which is $\\frac{b}{a}$) and squaring it.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Working through the Example ---
const csExampleQuestion: MultiStepQuestion = {
  id: 'cs-example',
  title: 'Completing the Square: $2x^2 + 12x + 10$',
  steps: [
    {
      id: 'cse-factor',
      question: "Start with $2x^2 + 12x + 10$. Factor out the coefficient of $x^2$ from the first two terms.",
      questionType: 'text',
      options: [
        "$2(x^2 + 6x) + 10$",
        "$2(x^2 + 12x) + 10$",
        "$x^2(2 + \\frac{12}{x}) + 10$",
        "$2x(x + 6) + 10$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Factor out 2 from $2x^2 + 12x$. $2x^2 \\div 2 = x^2$ and $12x \\div 2 = 6x$. So, it becomes $2(x^2 + 6x) + 10$.",
      explanationType: 'text'
    },
    {
      id: 'cse-half-coeff',
      question: "Inside the brackets, you have $x^2 + 6x$. To complete the square, what number do you take half of?",
      questionType: 'text',
      options: [
        "$1$ (the coefficient of $x^2$)",
        "$6$ (the coefficient of $x$)",
        "$2$ (the coefficient factored out)",
        "$10$ (the constant term)"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "To complete the square for $x^2 + Bx$, you take half of the coefficient $B$. Here, $B = 6$, so you take half of 6.",
      explanationType: 'text'
    },
    {
      id: 'cse-square-half',
      question: "What is $(\\frac{6}{2})^2$?",
      questionType: 'text',
      options: [
        "$3$",
        "$6$",
        "$9$",
        "$12$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Half of 6 is 3. $3^2 = 9$. This is the number you add and subtract inside the brackets.",
      explanationType: 'text'
    },
    {
      id: 'cse-add-subtract',
      question: "How do you add and subtract 9 inside the brackets $2(x^2 + 6x) + 10$?",
      questionType: 'text',
      options: [
        "$2(x^2 + 6x + 9 - 9) + 10$",
        "$2(x^2 + 6x + 9) + 10 - 9$",
        "$2(x^2 + 6x + 9) + 10 - 18$",
        "$2(x^2 + 6x - 9 + 9) + 10$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "You add 9 inside the brackets to complete the square. Because the brackets are multiplied by 2, you effectively add $2 \\times 9 = 18$ to the expression. To keep the value the same, you must subtract 18 outside the brackets.",
      explanationType: 'text'
    },
    {
      id: 'cse-rewrite-square',
      question: "Rewrite $x^2 + 6x + 9$ as a perfect square.",
      questionType: 'text',
      options: [
        "$(x + 9)^2$",
        "$(x + 3)^2$",
        "$(x - 3)^2$",
        "$(x + 6)^2$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "$x^2 + 6x + 9$ is a perfect square trinomial. It factors to $(x + 3)^2$, because $3$ is half of $6$, and $3^2 = 9$.",
      explanationType: 'text'
    },
    {
      id: 'cse-distribute',
      question: "Substitute the perfect square and simplify: $2((x + 3)^2 - 9) + 10$. What is the next step?",
      questionType: 'text',
      options: [
        "Add $-9$ and $10$.",
        "Factor out 2 from $(x + 3)^2 - 9$.",
        "Distribute the 2: $2(x + 3)^2 - 2 \\times 9$.",
        "Ignore the $-9$ for now."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "You must distribute the 2 that is factored out across the terms inside the parentheses: $2 \\times (x + 3)^2$ and $2 \\times (-9)$.",
      explanationType: 'text'
    },
    {
      id: 'cse-final-simplify',
      question: "Finish simplifying $2(x + 3)^2 - 18 + 10$. What is the result?",
      questionType: 'text',
      options: [
        "$2(x + 3)^2 - 8$",
        "$2(x + 3)^2 - 28$",
        "$2(x + 3)^2 + 2$",
        "$2(x + 3)^2 - 180$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Distribute the 2: $2(x + 3)^2 - 18$. Then combine the constant terms: $-18 + 10 = -8$. The final expression is $2(x + 3)^2 - 8$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Example: $2x^2 + 12x + 10$", "$2(x + 3)^2 - 8$");
      }
    }
  ]
};

// --- Multi-Step Question 3: Applying the Method ---
const csApplyQuestion: MultiStepQuestion = {
  id: 'cs-apply',
  title: 'Your Turn: $3x^2 + 6x + 12$',
  steps: [
    {
      id: 'csa-factor',
      question: "Factor out the coefficient of $x^2$ from $3x^2 + 6x + 12$. What do you get?",
      questionType: 'text',
      options: [
        "$3(x^2 + 2x) + 12$",
        "$3(x^2 + 6x) + 12$",
        "$x^2(3 + \\frac{6}{x}) + 12$",
        "$3x(x + 2) + 12$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Factor out 3 from $3x^2 + 6x$. $3x^2 \\div 3 = x^2$ and $6x \\div 3 = 2x$. So, it becomes $3(x^2 + 2x) + 12$.",
      explanationType: 'text'
    },
    {
      id: 'csa-half-coeff',
      question: "Inside the brackets, you have $x^2 + 2x$. What number do you take half of to complete the square?",
      questionType: 'text',
      options: [
        "$1$",
        "$2$",
        "$3$",
        "$12$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Take half of the coefficient of the $x$ term, which is 2.",
      explanationType: 'text'
    },
    {
      id: 'csa-square-half',
      question: "What is $(\\frac{2}{2})^2$?",
      questionType: 'text',
      options: [
        "$1$",
        "$2$",
        "$4$",
        "$0$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Half of 2 is 1. $1^2 = 1$. This is the number you add and subtract inside the brackets.",
      explanationType: 'text'
    },
    {
      id: 'csa-adjust-constant',
      question: "You need to add 1 inside the brackets: $3(x^2 + 2x + 1 - 1) + 12$. How does this affect the overall constant outside the brackets?",
      questionType: 'text',
      options: [
        "You add $3 \\times 1 = 3$ to the constant, so it becomes $12 + 3 = 15$.",
        "You subtract $3 \\times 1 = 3$ from the constant, so it becomes $12 - 3 = 9$.",
        "The constant outside remains 12.",
        "You subtract 1 from the constant, so it becomes $12 - 1 = 11$."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Adding 1 *inside* the brackets is effectively adding $3 \\times 1 = 3$ to the entire expression. To compensate and keep the value the same, you must subtract 3 from the constant term outside the brackets ($+12$).",
      explanationType: 'text'
    },
    {
      id: 'csa-rewrite-square',
      question: "Rewrite $x^2 + 2x + 1$ as a perfect square.",
      questionType: 'text',
      options: [
        "$(x + 1)^2$",
        "$(x - 1)^2$",
        "$(x + 2)^2$",
        "$(x + \\frac{1}{2})^2$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "$x^2 + 2x + 1$ is a perfect square trinomial. It factors to $(x + 1)^2$, because $1$ is half of $2$, and $1^2 = 1$.",
      explanationType: 'text'
    },
    {
      id: 'csa-final-result',
      question: "Combine everything: $3((x + 1)^2 - 1) + 12$. Simplify to get the final form.",
      questionType: 'text',
      options: [
        "$3(x + 1)^2 - 1 + 12$",
        "$3(x + 1)^2 - 3 + 12$",
        "$3(x + 1)^2 + 3 + 12$",
        "$3(x + 1)^2 + 1 + 12$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "First, distribute the 3: $3(x + 1)^2 - 3$. Then add the remaining constant: $-3 + 12 = 9$. So the expression becomes $3(x + 1)^2 + 9$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Practice: $3x^2 + 6x + 12$", "$3(x + 1)^2 + 9$");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const completingSquareQuestions: MultiStepQuestion[] = [
  csConceptQuestion,
  csExampleQuestion,
  csApplyQuestion // You can add more questions here if needed
];

const CompletingTheSquareANot1: React.FC = () => {
  const csRules = [
    "Factor out the coefficient $a$ from the $x^2$ and $x$ terms: $a(x^2 + \\frac{b}{a}x) + c$.",
    "Complete the square inside the brackets: Take half of the coefficient of $x$ (which is $\\frac{b}{a}$), square it, and add/subtract this value inside the brackets.",
    "Compensate for adding the square term: Since the brackets are multiplied by $a$, subtract $a \\times (\\text{square term})$ outside the brackets.",
    "Rewrite the expression inside the brackets as a perfect square: $a((x + \\frac{b}{2a})^2 - \\text{square term}) + c$.",
    "Distribute the $a$ and combine the constant terms outside the brackets.",
    "Write the final result in the form $a(x + h)^2 + k$.",
    "Check your answer by expanding it."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Completing the Square (Coefficient ≠ 1)"
        icon="📐" // Square/Geometry related icon
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={csRules}
        rulesTitle="Completing the Square Rules:"
        questions={completingSquareQuestions}
        renderSharedValuesSummary={renderCompletingSquareSummary}
      />
    </div>
  );
};

export default CompletingTheSquareANot1;