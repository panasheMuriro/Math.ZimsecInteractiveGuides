/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderQuadraticCompletingSquareSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No equations solved yet.</p>;
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

// --- Multi-Step Question 1: Concept Understanding ---
const qcsConceptQuestion: MultiStepQuestion = {
  id: 'qcs-concept',
  title: 'Understanding Quadratic Equations & Completing the Square',
  steps: [
    {
      id: 'qcsc-define',
      question: "What is the standard form of a quadratic equation?",
      questionType: 'text',
      options: [
        "$ax + b = 0$, where $a \\neq 0$",
        "$ax^2 + bx + c = 0$, where $a \\neq 0$",
        "$ax^3 + bx^2 + cx + d = 0$, where $a \\neq 0$",
        "$y = mx + b$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "A quadratic equation is a polynomial equation of degree 2. Its standard form is $ax^2 + bx + c = 0$, where $a$, $b$, and $c$ are constants, and $a$ must not be zero.",
      explanationType: 'text'
    },
    {
      id: 'qcsc-goal',
      question: "What is the main goal of the 'completing the square' method for solving $ax^2 + bx + c = 0$?",
      questionType: 'text',
      options: [
        "To graph the parabola.",
        "To rewrite the quadratic expression as a product of two binomials.",
        "To rewrite the quadratic in the form $(x + h)^2 = k$, so it can be solved by taking the square root of both sides.",
        "To add the coefficients $a$, $b$, and $c$."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The completing the square method aims to manipulate the equation so that one side is a perfect square trinomial, which can be written as $(x + h)^2$. This allows us to solve for $x$ by taking the square root of both sides.",
      explanationType: 'text'
    },
    {
      id: 'qcsc-square-form',
      question: "Which of the following is a perfect square trinomial that can be written in the form $(x + h)^2$?",
      questionType: 'text',
      options: [
        "$x^2 + 5x + 6$",
        "$x^2 + 6x + 9$",
        "$x^2 + 4x + 5$",
        "$x^2 + 2x + 3$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "A perfect square trinomial has the form $x^2 + 2hx + h^2$, which factors to $(x + h)^2$. $x^2 + 6x + 9$ fits this because $6 = 2 \\times 3$ and $9 = 3^2$. It factors to $(x + 3)^2$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Analyzing the Example ---
const qcsExampleAnalysisQuestion: MultiStepQuestion = {
  id: 'qcs-example-analysis',
  title: 'Analyzing the Completing the Square Example',
  steps: [
    {
      id: 'qcsea-identify-equation',
      question: "Consider the example: $x^2 + 6x + 5 = 0$. Is the coefficient of $x^2$ already 1?",
      questionType: 'text',
      options: [
        "Yes",
        "No",
        "It's 6",
        "It's 5"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "The coefficient of $x^2$ is the number multiplying $x^2$. In $x^2 + 6x + 5 = 0$, the coefficient of $x^2$ is 1. So, step 2 is already satisfied.",
      explanationType: 'text'
    },
    {
      id: 'qcsea-move-constant',
      question: "What is the next step, and how is it performed for this equation?",
      questionType: 'text',
      options: [
        "Multiply the equation by 1; the equation stays the same.",
        "Move the constant term (5) to the right side by subtracting 5 from both sides: $x^2 + 6x = -5$.",
        "Move the $x$ term (6x) to the right side: $x^2 + 5 = -6x$.",
        "Add 5 to both sides: $x^2 + 6x + 10 = 5$."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The next step is to isolate the $x^2$ and $x$ terms on one side. This is done by moving the constant term (+5) to the other side, which requires subtracting 5 from both sides.",
      explanationType: 'text'
    },
    {
      id: 'qcsea-find-square-term',
      question: "To complete the square for $x^2 + 6x$, we need to add $(\\frac{b}{2})^2$. What is $b$, and what is the value of $(\\frac{b}{2})^2$?",
      questionType: 'text',
      options: [
        "$b = 1$, so $(\\frac{1}{2})^2 = \\frac{1}{4}$",
        "$b = 6$, so $(\\frac{6}{2})^2 = 3^2 = 9$",
        "$b = 5$, so $(\\frac{5}{2})^2 = \\frac{25}{4}$",
        "$b = 2$, so $(\\frac{2}{2})^2 = 1^2 = 1$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "In the expression $x^2 + 6x$, the coefficient of the $x$ term is $b = 6$. We calculate $(\\frac{b}{2})^2 = (\\frac{6}{2})^2 = (3)^2 = 9$.",
      explanationType: 'text'
    },
    {
      id: 'qcsea-add-to-both-sides',
      question: "We add 9 to the left side to complete the square: $x^2 + 6x + 9$. What must we do to the right side of the equation $x^2 + 6x = -5$ to keep it balanced?",
      questionType: 'text',
      options: [
        "Subtract 9",
        "Add 9",
        "Multiply by 9",
        "Do nothing"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Whatever operation we perform on one side of an equation, we must perform on the other side to maintain equality. If we add 9 to the left side, we must also add 9 to the right side.",
      explanationType: 'text'
    },
    {
      id: 'qcsea-write-equation',
      question: "Perform the addition on both sides. What is the resulting equation?",
      questionType: 'text',
      options: [
        "$x^2 + 6x + 9 = -5 + 9$, which simplifies to $(x + 3)^2 = 4$",
        "$x^2 + 6x + 9 = -5 - 9$, which simplifies to $(x + 3)^2 = -14$",
        "$x^2 + 6x + 9 = -5$, which simplifies to $(x + 3)^2 = -5$",
        "$x^2 + 6x + 9 = 9$, which simplifies to $(x + 3)^2 = 9$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Left side: $x^2 + 6x + 9$ is a perfect square trinomial, which factors to $(x + 3)^2$. Right side: $-5 + 9 = 4$. The equation becomes $(x + 3)^2 = 4$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 3: Finishing the Example ---
const qcsFinishExampleQuestion: MultiStepQuestion = {
  id: 'qcs-finish-example',
  title: 'Finishing the Completing the Square Example',
  steps: [
    {
      id: 'qcsfe-take-square-root',
      question: "We have $(x + 3)^2 = 4$. To solve for $x$, what is the next step?",
      questionType: 'text',
      options: [
        "Add 4 to both sides.",
        "Subtract 4 from both sides.",
        "Take the square root of both sides.",
        "Multiply both sides by 2."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "To solve an equation where a variable expression is squared, we take the square root of both sides. Remember to consider both the positive and negative roots.",
      explanationType: 'text'
    },
    {
      id: 'qcsfe-apply-square-root',
      question: "Take the square root of both sides of $(x + 3)^2 = 4$. What equation do you get?",
      questionType: 'text',
      options: [
        "$x + 3 = 2$",
        "$x + 3 = -2$",
        "$x + 3 = \\pm 2$",
        "$x + 3 = \\pm 4$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Taking the square root of $(x + 3)^2$ gives $(x + 3)$. Taking the square root of 4 gives $\\pm \\sqrt{4} = \\pm 2$. So, the equation becomes $x + 3 = \\pm 2$.",
      explanationType: 'text'
    },
    {
      id: 'qcsfe-solve-for-x',
      question: "Solve $x + 3 = \\pm 2$ for $x$. This gives two equations. What are the two solutions?",
      questionType: 'text',
      options: [
        "$x = -3 + 2 = -1$ and $x = -3 - 2 = -5$",
        "$x = 3 + 2 = 5$ and $x = 3 - 2 = 1$",
        "$x = -3 + 2 = -1$ or $x = -3 - 2 = -5$",
        "$x = 3 + 2 = 5$ or $x = 3 - 2 = 1$"
      ],
      optionType: 'text',
      correct: 0, // 0 and 2 are essentially the same, 0 matches the example's format more closely.
      explanation: "We solve both cases. Case 1: $x + 3 = 2$. Subtract 3: $x = 2 - 3 = -1$. Case 2: $x + 3 = -2$. Subtract 3: $x = -2 - 3 = -5$. The two solutions are $x = -1$ and $x = -5$.",
      explanationType: 'text'
    },
    {
      id: 'qcsfe-check-solution',
      question: "Check one of the solutions, $x = -1$, in the original equation $x^2 + 6x + 5 = 0$. Substitute and simplify.",
      questionType: 'text',
      options: [
        "$(-1)^2 + 6(-1) + 5 = 1 - 6 + 5 = 0$",
        "$(-1)^2 + 6(-1) + 5 = 1 + 6 + 5 = 12$",
        "$(-1)^2 + 6(-1) + 5 = -1 - 6 + 5 = -2$",
        "$(-1)^2 + 6(-1) + 5 = 1 - 1 + 5 = 5$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = -1$: $(-1)^2 + 6(-1) + 5$. Calculate powers: $(-1)^2 = 1$. Calculate products: $6(-1) = -6$. Add: $1 - 6 + 5 = 0$. The equation holds true.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Example: $x^2 + 6x + 5 = 0$", "$x = -1$ or $x = -5$");
      }
    }
  ]
};

// --- Multi-Step Question 4: Solving the Practice Example ---
const qcsPracticeExampleQuestion: MultiStepQuestion = {
  id: 'qcs-practice-example',
  title: 'Solving the Practice Example',
  steps: [
    {
      id: 'qcspe-identify-equation',
      question: "Solve the practice example: $x^2 - 4x - 5 = 0$. Is the coefficient of $x^2$ already 1?",
      questionType: 'text',
      options: [
        "Yes",
        "No",
        "It's -4",
        "It's -5"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "The coefficient of $x^2$ is the number multiplying $x^2$. In $x^2 - 4x - 5 = 0$, the coefficient of $x^2$ is 1.",
      explanationType: 'text'
    },
    {
      id: 'qcspe-move-constant',
      question: "Move the constant term to the right side. What is the resulting equation?",
      questionType: 'text',
      options: [
        "$x^2 - 4x = 5$",
        "$x^2 - 4x = -5$",
        "$x^2 - 5 = 4x$",
        "$x^2 = 4x + 5$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "To move the constant (-5) to the right side, add 5 to both sides: $x^2 - 4x - 5 + 5 = 0 + 5$. This simplifies to $x^2 - 4x = 5$.",
      explanationType: 'text'
    },
    {
      id: 'qcspe-find-square-term',
      question: "To complete the square for $x^2 - 4x$, we add $(\\frac{b}{2})^2$. What is $b$, and what is the value of $(\\frac{b}{2})^2$?",
      questionType: 'text',
      options: [
        "$b = 1$, so $(\\frac{1}{2})^2 = \\frac{1}{4}$",
        "$b = -4$, so $(\\frac{-4}{2})^2 = (-2)^2 = 4$",
        "$b = -5$, so $(\\frac{-5}{2})^2 = \\frac{25}{4}$",
        "$b = 4$, so $(\\frac{4}{2})^2 = 2^2 = 4$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "In the expression $x^2 - 4x$, the coefficient of the $x$ term is $b = -4$. We calculate $(\\frac{b}{2})^2 = (\\frac{-4}{2})^2 = (-2)^2 = 4$.",
      explanationType: 'text'
    },
    {
      id: 'qcspe-add-to-both-sides',
      question: "Add 4 to both sides of $x^2 - 4x = 5$. What is the resulting equation?",
      questionType: 'text',
      options: [
        "$x^2 - 4x + 4 = 5 + 4$, which simplifies to $(x - 2)^2 = 9$",
        "$x^2 - 4x + 4 = 5 - 4$, which simplifies to $(x - 2)^2 = 1$",
        "$x^2 - 4x + 4 = 5$, which simplifies to $(x - 2)^2 = 5$",
        "$x^2 - 4x + 4 = 4$, which simplifies to $(x - 2)^2 = 4$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Left side: $x^2 - 4x + 4$ is a perfect square trinomial, which factors to $(x - 2)^2$. Right side: $5 + 4 = 9$. The equation becomes $(x - 2)^2 = 9$.",
      explanationType: 'text'
    },
    {
      id: 'qcspe-take-square-root',
      question: "Take the square root of both sides of $(x - 2)^2 = 9$. What equation do you get?",
      questionType: 'text',
      options: [
        "$x - 2 = 3$",
        "$x - 2 = -3$",
        "$x - 2 = \\pm 3$",
        "$x - 2 = \\pm 9$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Taking the square root of $(x - 2)^2$ gives $(x - 2)$. Taking the square root of 9 gives $\\pm \\sqrt{9} = \\pm 3$. So, the equation becomes $x - 2 = \\pm 3$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 5: Finishing the Practice Example ---
const qcsFinishPracticeQuestion: MultiStepQuestion = {
  id: 'qcs-finish-practice',
  title: 'Finishing the Practice Example',
  steps: [
    {
      id: 'qcsfp-solve-for-x',
      question: "Solve $x - 2 = \\pm 3$ for $x$. This gives two equations. What are the two solutions?",
      questionType: 'text',
      options: [
        "$x = 2 + 3 = 5$ and $x = 2 - 3 = -1$",
        "$x = -2 + 3 = 1$ and $x = -2 - 3 = -5$",
        "$x = 2 + 3 = 5$ or $x = 2 - 3 = -1$",
        "$x = -2 + 3 = 1$ or $x = -2 - 3 = -5$"
      ],
      optionType: 'text',
      correct: 0, // 0 and 2 are essentially the same, 0 matches the example's format more closely.
      explanation: "We solve both cases. Case 1: $x - 2 = 3$. Add 2: $x = 3 + 2 = 5$. Case 2: $x - 2 = -3$. Add 2: $x = -3 + 2 = -1$. The two solutions are $x = 5$ and $x = -1$.",
      explanationType: 'text'
    },
    {
      id: 'qcsfp-check-solution',
      question: "Check one of the solutions, $x = 5$, in the original equation $x^2 - 4x - 5 = 0$. Substitute and simplify.",
      questionType: 'text',
      options: [
        "$(5)^2 - 4(5) - 5 = 25 - 20 - 5 = 0$",
        "$(5)^2 - 4(5) - 5 = 25 + 20 - 5 = 40$",
        "$(5)^2 - 4(5) - 5 = 25 - 20 + 5 = 10$",
        "$(5)^2 - 4(5) - 5 = 25 - 4 - 5 = 16$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = 5$: $(5)^2 - 4(5) - 5$. Calculate powers: $(5)^2 = 25$. Calculate products: $-4(5) = -20$. Add: $25 - 20 - 5 = 0$. The equation holds true.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Practice: $x^2 - 4x - 5 = 0$", "$x = 5$ or $x = -1$");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const quadraticCompletingSquareQuestions: MultiStepQuestion[] = [
  qcsConceptQuestion,
  qcsExampleAnalysisQuestion,
  qcsFinishExampleQuestion,
  qcsPracticeExampleQuestion,
  qcsFinishPracticeQuestion
];

const SolvingQuadraticEquationsCompletingSquare: React.FC = () => {
  const qcsRules = [
    "Ensure the quadratic equation is in standard form: $ax^2 + bx + c = 0$.",
    "If $a \\neq 1$, divide every term by $a$ to make the coefficient of $x^2$ equal to 1.",
    "Move the constant term ($c$) to the right side of the equation.",
    "Identify the coefficient of the $x$-term ($b$). Calculate the square of half this coefficient: $(\\frac{b}{2})^2$.",
    "Add the value $(\\frac{b}{2})^2$ to both sides of the equation.",
    "The left side of the equation is now a perfect square trinomial. Factor it into the form $(x + h)^2$ or $(x - h)^2$.",
    "Take the square root of both sides of the equation. Remember to include the $\\pm$ symbol on the right side.",
    "Solve the resulting two linear equations for $x$.",
    "Check your solutions by substituting them back into the original equation."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Solving Quadratic Equations - Completing the Square"
        icon="📐" // Square/Geometry related icon, representing completing a square
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={qcsRules}
        rulesTitle="Completing the Square Rules:"
        questions={quadraticCompletingSquareQuestions}
        renderSharedValuesSummary={renderQuadraticCompletingSquareSummary}
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default SolvingQuadraticEquationsCompletingSquare