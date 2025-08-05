/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderLogEquationsSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No logarithmic equations solved yet.</p>;
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
const leConceptQuestion: MultiStepQuestion = {
  id: 'le-concept',
  title: 'Understanding Logarithmic Equations',
  steps: [
    {
      id: 'lec-define',
      question: "What defines a logarithmic equation?",
      questionType: 'text',
      options: [
        "An equation where the variable is only in the base of a logarithm.",
        "An equation where the variable is inside a logarithm.",
        "An equation involving a polynomial.",
        "An equation with a square root."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "A logarithmic equation is characterized by having the variable inside the argument of a logarithm, such as $\\log_2(x) = 3$ or $\\log_5(2x) - \\log_5(x - 1) = 1$.",
      explanationType: 'text'
    },
    {
      id: 'lec-goal',
      question: "What is the main strategy for solving basic logarithmic equations like $\\log_b(x) = c$?",
      questionType: 'text',
      options: [
        "To guess the solution.",
        "To convert the logarithmic equation to its exponential form.",
        "To add the logarithms together.",
        "To multiply both sides by the base $b$."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The fundamental strategy for solving $\\log_b(x) = c$ is to rewrite it in its equivalent exponential form: $b^c = x$. This directly gives the value of $x$.",
      explanationType: 'text'
    },
    {
      id: 'lec-check',
      question: "Why is it crucial to check solutions found for logarithmic equations?",
      questionType: 'text',
      options: [
        "To make sure the answer is an integer.",
        "To verify the algebraic steps were correct.",
        "To ensure the argument of any logarithm in the original equation is positive.",
        "To compare with a classmate's answer."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The logarithm function $\\log_b(x)$ is only defined for positive real numbers ($x > 0$). Any solution that makes the argument of a logarithm zero or negative is invalid and must be rejected.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Analyzing Example 1 (Simple Log) ---
const leExample1AnalysisQuestion: MultiStepQuestion = {
  id: 'le-example1-analysis',
  title: 'Analyzing Example 1: $\\log_3(x) = 2$',
  steps: [
    {
      id: 'le1a-isolate',
      question: "In the equation $\\log_3(x) = 2$, is the logarithm already isolated?",
      questionType: 'text',
      options: [
        "Yes, $\\log_3(x)$ is by itself on one side.",
        "No, we need to subtract something.",
        "No, we need to divide by something.",
        "No, we need to add something."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "The logarithm $\\log_3(x)$ is already isolated on the left side of the equation. No further manipulation is needed for this step.",
      explanationType: 'text'
    },
    {
      id: 'le1a-convert-exp',
      question: "Convert $\\log_3(x) = 2$ to its exponential form.",
      questionType: 'text',
      options: [
        "$3^x = 2$",
        "$x^3 = 2$",
        "$3^2 = x$",
        "$2^3 = x$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The logarithmic equation $\\log_b(a) = c$ is equivalent to the exponential equation $b^c = a$. Applying this to $\\log_3(x) = 2$, we get $3^2 = x$.",
      explanationType: 'text'
    },
    {
      id: 'le1a-solve-x',
      question: "Solve the exponential equation $3^2 = x$. What is $x$?",
      questionType: 'text',
      options: [
        "$x = 6$",
        "$x = 9$",
        "$x = 8$",
        "$x = 5$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Calculate $3^2$: $3 \\times 3 = 9$. Therefore, $x = 9$.",
      explanationType: 'text'
    },
    {
      id: 'le1a-check-solution',
      question: "Check the solution $x = 9$ in the original equation $\\log_3(x) = 2$. Is it valid?",
      questionType: 'text',
      options: [
        "Yes, because $\\log_3(9) = 2$ (since $3^2 = 9$).",
        "No, because $\\log_3(9)$ is undefined.",
        "Yes, because $\\log_3(9) = 3$ (since $3^3 = 9$).",
        "No, because 9 is not positive."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = 9$ back into the original equation: $\\log_3(9)$. We ask, '3 to what power equals 9?' The answer is 2, because $3^2 = 9$. So, $\\log_3(9) = 2$, which matches the right side. Also, the argument 9 is positive, so the solution is valid.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 3: Analyzing Example 2 (Using Properties) ---
const leExample2AnalysisQuestion: MultiStepQuestion = {
  id: 'le-example2-analysis',
  title: 'Analyzing Example 2: $\\log_2(x) + \\log_2(x - 1) = 1$',
  steps: [
    {
      id: 'le2a-identify-property',
      question: "To simplify $\\log_2(x) + \\log_2(x - 1)$, which logarithm property should we use?",
      questionType: 'text',
      options: [
        "Power Rule: $n\\log_b(a) = \\log_b(a^n)$",
        "Change of Base Formula",
        "Product Rule: $\\log_b(m) + \\log_b(n) = \\log_b(mn)$",
        "Quotient Rule: $\\log_b(m) - \\log_b(n) = \\log_b(\\frac{m}{n})$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "When adding two logarithms with the same base, we use the Product Rule. This states that $\\log_b(m) + \\log_b(n) = \\log_b(m \\cdot n)$.",
      explanationType: 'text'
    },
    {
      id: 'le2a-apply-product-rule',
      question: "Apply the Product Rule to $\\log_2(x) + \\log_2(x - 1)$.",
      questionType: 'text',
      options: [
        "$\\log_2(x + (x - 1)) = \\log_2(2x - 1)$",
        "$\\log_2(x \\cdot (x - 1)) = \\log_2(x^2 - x)$",
        "$\\log_2(\\frac{x}{x - 1})$",
        "$\\log_2(x^{x - 1})$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Using the Product Rule, we multiply the arguments: $\\log_2(x) + \\log_2(x - 1) = \\log_2(x \\cdot (x - 1)) = \\log_2(x^2 - x)$.",
      explanationType: 'text'
    },
    {
      id: 'le2a-convert-exp',
      question: "The equation is now $\\log_2(x^2 - x) = 1$. Convert this to exponential form.",
      questionType: 'text',
      options: [
        "$2^{x^2 - x} = 1$",
        "$x^2 - x = 2^1$",
        "$(x^2 - x)^2 = 1$",
        "$1^2 = x^2 - x$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The logarithmic equation $\\log_b(a) = c$ is equivalent to the exponential equation $b^c = a$. Here, $b=2$, $a=x^2-x$, and $c=1$. So, $2^1 = x^2 - x$.",
      explanationType: 'text'
    },
    {
      id: 'le2a-solve-quadratic',
      question: "We have $x^2 - x = 2$. Rearrange and solve the quadratic equation $x^2 - x - 2 = 0$. What are the solutions?",
      questionType: 'text',
      options: [
        "$x = 2$ or $x = -1$",
        "$x = 1$ or $x = -2$",
        "$x = 3$ or $x = -1$",
        "$x = 0$ or $x = 2$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Rearranging gives $x^2 - x - 2 = 0$. We can factor this: $(x - 2)(x + 1) = 0$. Setting each factor to zero gives $x - 2 = 0$ (so $x = 2$) or $x + 1 = 0$ (so $x = -1$).",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 4: Checking Solutions for Example 2 ---
const leExample2CheckQuestion: MultiStepQuestion = {
  id: 'le-example2-check',
  title: 'Checking Solutions for Example 2',
  steps: [
    {
      id: 'le2c-check-x2',
      question: "Check the solution $x = 2$ in the original equation $\\log_2(x) + \\log_2(x - 1) = 1$. Is it valid?",
      questionType: 'text',
      options: [
        "Yes, $\\log_2(2) + \\log_2(1) = 1 + 0 = 1$. Both arguments (2 and 1) are positive.",
        "No, because $\\log_2(2) + \\log_2(1)$ is undefined.",
        "Yes, $\\log_2(2) + \\log_2(1) = 2 + 1 = 3$.",
        "No, because $x = 2$ does not satisfy $x^2 - x = 2$."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = 2$: $\\log_2(2) + \\log_2(2 - 1) = \\log_2(2) + \\log_2(1)$. We know $\\log_2(2) = 1$ and $\\log_2(1) = 0$. So, $1 + 0 = 1$. Also, both arguments (2 and 1) are positive, so the logarithms are defined. The solution is valid.",
      explanationType: 'text'
    },
    {
      id: 'le2c-check-x-1',
      question: "Check the solution $x = -1$ in the original equation $\\log_2(x) + \\log_2(x - 1) = 1$. Is it valid?",
      questionType: 'text',
      options: [
        "Yes, $\\log_2(-1) + \\log_2(-2) = 1$. Both arguments are negative.",
        "No, because $\\log_2(-1)$ is undefined (the argument is negative).",
        "Yes, $\\log_2(-1) + \\log_2(-2) = 0 + 0 = 0$.",
        "No, because $x = -1$ does not satisfy $x^2 - x = 2$."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Substitute $x = -1$: $\\log_2(-1) + \\log_2(-1 - 1) = \\log_2(-1) + \\log_2(-2)$. The logarithm function is undefined for negative numbers. Since the arguments (-1 and -2) are negative, $\\log_2(-1)$ and $\\log_2(-2)$ are both undefined. Therefore, $x = -1$ is not a valid solution.",
      explanationType: 'text'
    },
    {
      id: 'le2c-final-solution',
      question: "Based on the checks, what is the final solution for the equation $\\log_2(x) + \\log_2(x - 1) = 1$?",
      questionType: 'text',
      options: [
        "$x = 2$",
        "$x = -1$",
        "$x = 2$ or $x = -1$",
        "No solution"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "We found two potential solutions from the algebra: $x = 2$ and $x = -1$. However, checking showed that $x = -1$ is invalid because it makes the logarithms undefined. Therefore, the only valid solution is $x = 2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Example 2 Solution", "$x = 2$");
      }
    }
  ]
};

// --- Multi-Step Question 5: Solving the Practice Example ---
const lePracticeExampleQuestion: MultiStepQuestion = {
  id: 'le-practice-example',
  title: 'Solving the Practice Example: $\\log_4(x + 3) = 2$',
  steps: [
    {
      id: 'lep-isolate',
      question: "In the equation $\\log_4(x + 3) = 2$, is the logarithm already isolated?",
      questionType: 'text',
      options: [
        "Yes, $\\log_4(x + 3)$ is by itself on one side.",
        "No, we need to subtract 3.",
        "No, we need to divide by 4.",
        "No, we need to subtract 2."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "The logarithm $\\log_4(x + 3)$ is already isolated on the left side of the equation. We can proceed directly to converting it to exponential form.",
      explanationType: 'text'
    },
    {
      id: 'lep-convert-exp',
      question: "Convert $\\log_4(x + 3) = 2$ to its exponential form.",
      questionType: 'text',
      options: [
        "$4^{x + 3} = 2$",
        "$(x + 3)^4 = 2$",
        "$4^2 = x + 3$",
        "$2^4 = x + 3$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The logarithmic equation $\\log_b(a) = c$ is equivalent to the exponential equation $b^c = a$. Applying this to $\\log_4(x + 3) = 2$, we get $4^2 = x + 3$.",
      explanationType: 'text'
    },
    {
      id: 'lep-solve-x',
      question: "Solve the exponential equation $4^2 = x + 3$. What is $x$?",
      questionType: 'text',
      options: [
        "$x = 16$",
        "$x = 19$",
        "$x = 13$",
        "$x = 10$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Calculate $4^2$: $4 \\times 4 = 16$. So, the equation becomes $16 = x + 3$. Subtract 3 from both sides: $x = 16 - 3 = 13$.",
      explanationType: 'text'
    },
    {
      id: 'lep-check-solution',
      question: "Check the solution $x = 13$ in the original equation $\\log_4(x + 3) = 2$. Is it valid?",
      questionType: 'text',
      options: [
        "Yes, because $\\log_4(13 + 3) = \\log_4(16) = 2$ (since $4^2 = 16$). The argument 16 is positive.",
        "No, because $\\log_4(16)$ is undefined.",
        "Yes, because $\\log_4(13 + 3) = \\log_4(16) = 4$ (since $4^4 = 16$).",
        "No, because 13 is not positive."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = 13$ back into the original equation: $\\log_4(13 + 3) = \\log_4(16)$. We ask, '4 to what power equals 16?' The answer is 2, because $4^2 = 16$. So, $\\log_4(16) = 2$, which matches the right side. Also, the argument 16 is positive, so the solution is valid.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Practice Example Solution", "$x = 13$");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const logEquationsQuestions: MultiStepQuestion[] = [
  leConceptQuestion,
  leExample1AnalysisQuestion,
  leExample2AnalysisQuestion,
  leExample2CheckQuestion,
  lePracticeExampleQuestion
];

const SolvingLogarithmicEquations: React.FC = () => {
  const leRules = [
    "Ensure the logarithm (or logarithms) is isolated on one side of the equation.",
    "Use logarithm properties (Product, Quotient, Power) to combine or simplify logs if necessary.",
    "Convert the logarithmic equation to its exponential form: $\\log_b(a) = c$ becomes $b^c = a$.",
    "Solve the resulting equation (linear, quadratic, etc.) for the variable.",
    "CRITICALLY IMPORTANT: Check every solution in the original equation. Reject any solution that makes the argument of a logarithm non-positive (zero or negative).",
    "Write the final answer(s) as the value(s) of the variable that pass the check.",
    "Remember the domain: For $\\log_b(x)$, $x$ must be greater than 0."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Solving Logarithmic Equations"
        icon="📊" // Bar Chart icon, often associated with logarithmic scales/data
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={leRules}
        rulesTitle="Logarithmic Equations Rules:"
        questions={logEquationsQuestions}
        renderSharedValuesSummary={renderLogEquationsSummary}
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default SolvingLogarithmicEquations;