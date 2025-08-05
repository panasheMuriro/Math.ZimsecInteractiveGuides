/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderQuadraticFactoringSummary = (sharedValues: { [key: string]: any }) => {
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
const qfConceptQuestion: MultiStepQuestion = {
  id: 'qf-concept',
  title: 'Understanding Quadratic Equations & Factoring',
  steps: [
    {
      id: 'qfc-define',
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
      explanation: "A quadratic equation is a polynomial equation of degree 2. Its standard form is $ax^2 + bx + c = 0$, where $a$, $b$, and $c$ are constants, and $a$ must not be zero (otherwise it wouldn't be quadratic).",
      explanationType: 'text'
    },
    {
      id: 'qfc-degree',
      question: "What does the 'degree' of a polynomial refer to, and what is the degree of a quadratic?",
      questionType: 'text',
      options: [
        "The number of terms; degree 2.",
        "The highest power of the variable; degree 2.",
        "The number of solutions; degree 2.",
        "The coefficient of $x^2$; degree $a$."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The degree of a polynomial is the highest power of the variable in the polynomial. For a quadratic like $ax^2 + bx + c$, the highest power of $x$ is 2, so its degree is 2.",
      explanationType: 'text'
    },
    {
      id: 'qfc-factoring-goal',
      question: "What is the main goal of the factoring method for solving $ax^2 + bx + c = 0$?",
      questionType: 'text',
      options: [
        "To graph the parabola.",
        "To rewrite the quadratic expression as a product of two binomials set equal to zero: $(px + q)(rx + s) = 0$.",
        "To find the vertex of the parabola.",
        "To add the coefficients $a$, $b$, and $c$."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The factoring method aims to express the left side of the equation as a product of two factors. Once in the form $(...)(...) = 0$, we can use the Zero Product Property.",
      explanationType: 'text'
    },
    {
      id: 'qfc-zero-product',
      question: "What is the Zero Product Property?",
      questionType: 'text',
      options: [
        "If $A + B = 0$, then $A = 0$ and $B = 0$.",
        "If $A \\times B = 0$, then $A = 0$ or $B = 0$ (or both).",
        "If $A \\times B = 1$, then $A = 1$ and $B = 1$.",
        "If $A = B$, then $A - B = 0$."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The Zero Product Property states that if the product of two factors is zero, then at least one of the factors must be zero. This is the key principle that allows us to solve the factored equation.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Analyzing the Example ---
const qfExampleAnalysisQuestion: MultiStepQuestion = {
  id: 'qf-example-analysis',
  title: 'Analyzing the Factoring Example',
  steps: [
    {
      id: 'qfea-identify-equation',
      question: "Consider the example: $x^2 + 5x + 6 = 0$. What are the values of $a$, $b$, and $c$?",
      questionType: 'text',
      options: [
        "$a = 1, b = 5, c = 6$",
        "$a = 0, b = 5, c = 6$",
        "$a = 1, b = 6, c = 5$",
        "$a = 5, b = 1, c = 6$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Comparing $x^2 + 5x + 6 = 0$ to the standard form $ax^2 + bx + c = 0$, we see $a$ (coefficient of $x^2$) is 1, $b$ (coefficient of $x$) is 5, and $c$ (constant term) is 6.",
      explanationType: 'text'
    },
    {
      id: 'qfea-find-factors',
      question: "To factor $x^2 + 5x + 6$, we need two numbers that multiply to $c$ (which is 6) and add to $b$ (which is 5). What are these two numbers?",
      questionType: 'text',
      options: [
        "$2$ and $3$",
        "$1$ and $6$",
        "$-2$ and $-3$",
        "$-1$ and $-6$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "We look for two numbers. First condition: multiply to $c = 6$. Pairs are (1,6) and (2,3). Second condition: add to $b = 5$. $1 + 6 = 7$ (No). $2 + 3 = 5$ (Yes). The numbers are 2 and 3.",
      explanationType: 'text'
    },
    {
      id: 'qfea-write-factors',
      question: "Using the numbers 2 and 3, how do we write the factored form of $x^2 + 5x + 6$?",
      questionType: 'text',
      options: [
        "$(x + 2)(x + 3)$",
        "$(x - 2)(x - 3)$",
        "$(x + 2)(x - 3)$",
        "$(x - 2)(x + 3)$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "If the two numbers are $m$ and $n$, the factored form is $(x + m)(x + n)$. Since our numbers are 2 and 3, the factored form is $(x + 2)(x + 3)$.",
      explanationType: 'text'
    },
    {
      id: 'qfea-apply-zero-product',
      question: "We have $(x + 2)(x + 3) = 0$. Applying the Zero Product Property, what two equations do we get?",
      questionType: 'text',
      options: [
        "$x + 2 = 0$ and $x + 3 = 0$",
        "$x + 2 = 0$ or $x + 3 = 0$",
        "$x + 2 + x + 3 = 0$",
        "$x + 2 = 1$ and $x + 3 = 1$"
      ],
      optionType: 'text',
      correct: 0, // Both 0 and 1 are technically correct in meaning, but 0 is the standard form shown in the example.
      explanation: "The Zero Product Property tells us that either $(x + 2) = 0$ OR $(x + 3) = 0$. For the solution process, we solve both equations: $x + 2 = 0$ and $x + 3 = 0$.",
      explanationType: 'text'
    },
    {
      id: 'qfea-solve-linear',
      question: "Solve the two linear equations: $x + 2 = 0$ and $x + 3 = 0$. What are the solutions for $x$?",
      questionType: 'text',
      options: [
        "$x = -2$ and $x = -3$",
        "$x = 2$ and $x = 3$",
        "$x = -2$ or $x = -3$",
        "$x = 2$ or $x = 3$"
      ],
      optionType: 'text',
      correct: 0, // Again, 0 and 2 are correct in meaning, 0 matches the example format.
      explanation: "Solving $x + 2 = 0$ gives $x = -2$. Solving $x + 3 = 0$ gives $x = -3$. The two solutions are $x = -2$ and $x = -3$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 3: Checking the Example ---
const qfCheckExampleQuestion: MultiStepQuestion = {
  id: 'qf-check-example',
  title: 'Checking the Example Solutions',
  steps: [
    {
      id: 'qfce-check-first',
      question: "The solutions are $x = -2$ and $x = -3$. Check $x = -2$ in the original equation $x^2 + 5x + 6 = 0$. Substitute and simplify.",
      questionType: 'text',
      options: [
        "$(-2)^2 + 5(-2) + 6 = 4 - 10 + 6 = 0$",
        "$(-2)^2 + 5(-2) + 6 = 4 + 10 + 6 = 20$",
        "$(-2)^2 + 5(-2) + 6 = -4 - 10 + 6 = -8$",
        "$(-2)^2 + 5(-2) + 6 = 4 - 5 + 6 = 5$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = -2$: $(-2)^2 + 5(-2) + 6$. Calculate powers: $(-2)^2 = 4$. Calculate products: $5(-2) = -10$. Add: $4 - 10 + 6 = 0$. The equation holds true.",
      explanationType: 'text'
    },
    {
      id: 'qfce-check-second',
      question: "Now check $x = -3$ in $x^2 + 5x + 6 = 0$. Substitute and simplify.",
      questionType: 'text',
      options: [
        "$(-3)^2 + 5(-3) + 6 = 9 - 15 + 6 = 0$",
        "$(-3)^2 + 5(-3) + 6 = 9 + 15 + 6 = 30$",
        "$(-3)^2 + 5(-3) + 6 = -9 - 15 + 6 = -18$",
        "$(-3)^2 + 5(-3) + 6 = 9 - 5 + 6 = 10$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = -3$: $(-3)^2 + 5(-3) + 6$. Calculate powers: $(-3)^2 = 9$. Calculate products: $5(-3) = -15$. Add: $9 - 15 + 6 = 0$. The equation holds true.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Example: $x^2 + 5x + 6 = 0$", "$x = -2$ or $x = -3$");
      }
    }
  ]
};

// --- Multi-Step Question 4: Solving the Practice Example ---
const qfPracticeExampleQuestion: MultiStepQuestion = {
  id: 'qf-practice-example',
  title: 'Solving the Practice Example',
  steps: [
    {
      id: 'qfpe-identify-equation',
      question: "Solve the practice example: $x^2 - 7x + 12 = 0$. What are $a$, $b$, and $c$?",
      questionType: 'text',
      options: [
        "$a = 1, b = -7, c = 12$",
        "$a = 1, b = 7, c = 12$",
        "$a = 1, b = -7, c = -12$",
        "$a = 0, b = -7, c = 12$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Comparing $x^2 - 7x + 12 = 0$ to $ax^2 + bx + c = 0$, we have $a = 1$, $b = -7$, and $c = 12$.",
      explanationType: 'text'
    },
    {
      id: 'qfpe-find-factors',
      question: "Find two numbers that multiply to $c = 12$ and add to $b = -7$.",
      questionType: 'text',
      options: [
        "$3$ and $4$",
        "$-3$ and $-4$",
        "$1$ and $12$",
        "$-1$ and $-12$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "We need two numbers that multiply to 12. Pairs: (1,12), (2,6), (3,4). They must also add to -7. $3 + 4 = 7$ (No). $-3 + (-4) = -7$ (Yes). The numbers are -3 and -4.",
      explanationType: 'text'
    },
    {
      id: 'qfpe-write-factors',
      question: "Using the numbers -3 and -4, write the factored form of $x^2 - 7x + 12$.",
      questionType: 'text',
      options: [
        "$(x - 3)(x - 4)$",
        "$(x + 3)(x + 4)$",
        "$(x - 3)(x + 4)$",
        "$(x + 3)(x - 4)$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "If the two numbers are $m$ and $n$, the factored form is $(x + m)(x + n)$. Here, $m = -3$ and $n = -4$. So, it's $(x + (-3))(x + (-4)) = (x - 3)(x - 4)$.",
      explanationType: 'text'
    },
    {
      id: 'qfpe-apply-zero-product',
      question: "Set the factored form equal to zero: $(x - 3)(x - 4) = 0$. Apply the Zero Product Property.",
      questionType: 'text',
      options: [
        "$x - 3 = 0$ and $x - 4 = 0$",
        "$x - 3 = 0$ or $x - 4 = 0$",
        "$x - 3 + x - 4 = 0$",
        "$x - 3 = 1$ and $x - 4 = 1$"
      ],
      optionType: 'text',
      correct: 0, // Standard form shown in examples.
      explanation: "By the Zero Product Property, either $(x - 3) = 0$ OR $(x - 4) = 0$. We solve both: $x - 3 = 0$ and $x - 4 = 0$.",
      explanationType: 'text'
    },
    {
      id: 'qfpe-solve-linear',
      question: "Solve $x - 3 = 0$ and $x - 4 = 0$. What are the solutions?",
      questionType: 'text',
      options: [
        "$x = 3$ and $x = 4$",
        "$x = -3$ and $x = -4$",
        "$x = 3$ or $x = 4$",
        "$x = -3$ or $x = -4$"
      ],
      optionType: 'text',
      correct: 0, // Matches example format.
      explanation: "Solving $x - 3 = 0$ gives $x = 3$. Solving $x - 4 = 0$ gives $x = 4$. The two solutions are $x = 3$ and $x = 4$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 5: Checking the Practice Example ---
const qfCheckPracticeQuestion: MultiStepQuestion = {
  id: 'qf-check-practice',
  title: 'Checking the Practice Example Solutions',
  steps: [
    {
      id: 'qfcp-check-first',
      question: "Check the solution $x = 3$ in the original equation $x^2 - 7x + 12 = 0$. Substitute and simplify.",
      questionType: 'text',
      options: [
        "$(3)^2 - 7(3) + 12 = 9 - 21 + 12 = 0$",
        "$(3)^2 - 7(3) + 12 = 9 + 21 + 12 = 42$",
        "$(3)^2 - 7(3) + 12 = -9 - 21 + 12 = -18$",
        "$(3)^2 - 7(3) + 12 = 9 - 7 + 12 = 14$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = 3$: $(3)^2 - 7(3) + 12$. Calculate powers: $(3)^2 = 9$. Calculate products: $-7(3) = -21$. Add: $9 - 21 + 12 = 0$. The equation holds true.",
      explanationType: 'text'
    },
    {
      id: 'qfcp-check-second',
      question: "Check the solution $x = 4$ in $x^2 - 7x + 12 = 0$. Substitute and simplify.",
      questionType: 'text',
      options: [
        "$(4)^2 - 7(4) + 12 = 16 - 28 + 12 = 0$",
        "$(4)^2 - 7(4) + 12 = 16 + 28 + 12 = 56$",
        "$(4)^2 - 7(4) + 12 = -16 - 28 + 12 = -32$",
        "$(4)^2 - 7(4) + 12 = 16 - 7 + 12 = 21$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = 4$: $(4)^2 - 7(4) + 12$. Calculate powers: $(4)^2 = 16$. Calculate products: $-7(4) = -28$. Add: $16 - 28 + 12 = 0$. The equation holds true.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Practice: $x^2 - 7x + 12 = 0$", "$x = 3$ or $x = 4$");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const quadraticFactoringQuestions: MultiStepQuestion[] = [
  qfConceptQuestion,
  qfExampleAnalysisQuestion,
  qfCheckExampleQuestion,
  qfPracticeExampleQuestion,
  qfCheckPracticeQuestion
];

const SolvingQuadraticEquationsFactoring: React.FC = () => {
  const qfRules = [
    "Ensure the quadratic equation is in standard form: $ax^2 + bx + c = 0$.",
    "Identify the coefficients $a$, $b$, and $c$.",
    "Find two numbers that multiply to $a \\times c$ (or just $c$ if $a=1$) and add up to $b$.",
    "Use these two numbers to rewrite the middle term ($bx$) and then factor by grouping (or directly if $a=1$).",
    "Write the quadratic as a product of two binomials: $(...)(...) = 0$.",
    "Apply the Zero Product Property: Set each factor equal to zero.",
    "Solve the resulting linear equations to find the values of $x$.",
    "Check each solution by substituting it back into the original equation.",
    "Write the final answer as $x = \\text{value}_1$ or $x = \\text{value}_2$."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Solving Quadratic Equations - Factoring Method"
        icon="🔍" // Magnifying glass icon, representing finding factors
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={qfRules}
        rulesTitle="Factoring Method Rules:"
        questions={quadraticFactoringQuestions}
        renderSharedValuesSummary={renderQuadraticFactoringSummary}
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default SolvingQuadraticEquationsFactoring