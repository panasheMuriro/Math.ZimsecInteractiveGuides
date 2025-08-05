/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderQuadraticFormulaSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No quadratic equations solved yet.</p>;
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
  title: 'Understanding Quadratic Equations & Formula',
  steps: [
    {
      id: 'qfc-define',
      question: "What is the standard form of a quadratic equation?",
      questionType: 'text',
      options: [
        "$ax + b = 0$",
        "$ax^2 + bx + c = 0$, where $a ≠ 0$",
        "$ax^3 + bx^2 + cx + d = 0$",
        "$y = mx + c$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "A quadratic equation is a polynomial equation of degree 2. Its standard form is $ax^2 + bx + c = 0$, where $a$, $b$, and $c$ are constants, and $a$ must not be zero (otherwise it wouldn't be quadratic).",
      explanationType: 'text'
    },
    {
      id: 'qfc-formula',
      question: "What is the Quadratic Formula used to solve $ax^2 + bx + c = 0$?",
      questionType: 'text',
      options: [
        "$x = \\frac{-b ± \\sqrt{b^2 - ac}}{a}$",
        "$x = \\frac{b ± \\sqrt{b^2 - 4ac}}{2a}$",
        "$x = \\frac{-b ± \\sqrt{b^2 - 4ac}}{2a}$",
        "$x = -b ± \\sqrt{b^2 - 4ac}$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The Quadratic Formula is $x = \\frac{-b ± \\sqrt{b^2 - 4ac}}{2a}$. It provides the solutions for any quadratic equation in standard form.",
      explanationType: 'text'
    },
    {
      id: 'qfc-discriminant',
      question: "What is the name of the expression under the square root in the Quadratic Formula, $b^2 - 4ac$?",
      questionType: 'text',
      options: [
        "The root",
        "The coefficient",
        "The discriminant",
        "The variable"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The expression $b^2 - 4ac$ is called the discriminant. Its value determines the nature (real, repeated, or complex) of the roots.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Analyzing the Example ---
const qfExampleAnalysisQuestion: MultiStepQuestion = {
  id: 'qf-example-analysis',
  title: 'Analyzing the Quadratic Formula Example',
  steps: [
    {
      id: 'qfea-identify-coefficients',
      question: "In the example $2x^2 + 3x - 2 = 0$, what are the values of $a$, $b$, and $c$?",
      questionType: 'text',
      options: [
        "$a = 2, b = -3, c = -2$",
        "$a = 2, b = 3, c = -2$",
        "$a = 2, b = 3, c = 2$",
        "$a = 2x^2, b = 3x, c = -2$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Comparing $2x^2 + 3x - 2 = 0$ to the standard form $ax^2 + bx + c = 0$, we identify $a = 2$, $b = 3$, and $c = -2$.",
      explanationType: 'text'
    },
    {
      id: 'qfea-calculate-discriminant',
      question: "Calculate the discriminant $\\Delta = b^2 - 4ac$ for the example.",
      questionType: 'text',
      options: [
        "$\\Delta = 9 - 8 = 1$",
        "$\\Delta = 9 - 16 = -7$",
        "$\\Delta = 9 + 16 = 25$",
        "$\\Delta = 9 + 8 = 17$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Substitute $a = 2$, $b = 3$, $c = -2$: $\\Delta = (3)^2 - 4(2)(-2) = 9 - (-16) = 9 + 16 = 25$.",
      explanationType: 'text'
    },
    {
      id: 'qfea-apply-formula',
      question: "Apply the Quadratic Formula $x = \\frac{-b ± \\sqrt{\\Delta}}{2a}$. What is the expression before simplifying?",
      questionType: 'text',
      options: [
        "$x = \\frac{-3 ± \\sqrt{25}}{2}$",
        "$x = \\frac{3 ± \\sqrt{25}}{4}$",
        "$x = \\frac{-3 ± \\sqrt{25}}{4}$",
        "$x = \\frac{-3 ± 5}{2}$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Substitute $a = 2$, $b = 3$, $\\sqrt{\\Delta} = \\sqrt{25} = 5$: $x = \\frac{-3 ± 5}{2(2)} = \\frac{-3 ± 5}{4}$.",
      explanationType: 'text'
    },
    {
      id: 'qfea-find-solutions',
      question: "Simplify $x = \\frac{-3 ± 5}{4}$ to find the two solutions.",
      questionType: 'text',
      options: [
        "$x = \\frac{-3 + 5}{4} = \\frac{2}{4} = \\frac{1}{2}$ and $x = \\frac{-3 - 5}{4} = \\frac{-8}{4} = -2$",
        "$x = \\frac{-3 + 5}{4} = \\frac{8}{4} = 2$ and $x = \\frac{-3 - 5}{4} = \\frac{-2}{4} = -\\frac{1}{2}$",
        "$x = \\frac{3 + 5}{4} = \\frac{8}{4} = 2$ and $x = \\frac{3 - 5}{4} = \\frac{-2}{4} = -\\frac{1}{2}$",
        "$x = \\frac{-3 + 5}{2} = 1$ and $x = \\frac{-3 - 5}{2} = -4$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Calculate both possibilities: $x_1 = \\frac{-3 + 5}{4} = \\frac{2}{4} = \\frac{1}{2}$ and $x_2 = \\frac{-3 - 5}{4} = \\frac{-8}{4} = -2$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 3: Solving the Practice Example ---
const qfPracticeExampleQuestion: MultiStepQuestion = {
  id: 'qf-practice-example',
  title: 'Solving the Practice Example',
  steps: [
    {
      id: 'qfpe-identify-coefficients',
      question: "For the equation $x^2 - 6x + 9 = 0$, identify $a$, $b$, and $c$.",
      questionType: 'text',
      options: [
        "$a = 0, b = -6, c = 9$",
        "$a = 1, b = -6, c = 9$",
        "$a = 1, b = 6, c = 9$",
        "$a = x^2, b = -6x, c = 9$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The coefficient of $x^2$ is 1, so $a = 1$. The coefficient of $x$ is $-6$, so $b = -6$. The constant term is $9$, so $c = 9$.",
      explanationType: 'text'
    },
    {
      id: 'qfpe-calculate-discriminant',
      question: "Calculate the discriminant $\\Delta = b^2 - 4ac$ for this equation.",
      questionType: 'text',
      options: [
        "$\\Delta = 36 - 36 = 0$",
        "$\\Delta = 36 + 36 = 72$",
        "$\\Delta = -36 - 36 = -72$",
        "$\\Delta = 6 - 36 = -30$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $a = 1$, $b = -6$, $c = 9$: $\\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0$.",
      explanationType: 'text'
    },
    {
      id: 'qfpe-apply-formula',
      question: "Apply the Quadratic Formula. What does it simplify to?",
      questionType: 'text',
      options: [
        "$x = \\frac{6 ± \\sqrt{0}}{2} = \\frac{6 ± 0}{2}$",
        "$x = \\frac{-6 ± \\sqrt{0}}{2} = \\frac{-6 ± 0}{2}$",
        "$x = \\frac{6 ± 0}{1}$",
        "$x = \\frac{-6 ± 0}{1}$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $a = 1$, $b = -6$, $\\sqrt{\\Delta} = \\sqrt{0} = 0$: $x = \\frac{-(-6) ± 0}{2(1)} = \\frac{6 ± 0}{2}$.",
      explanationType: 'text'
    },
    {
      id: 'qfpe-find-solution',
      question: "Simplify $x = \\frac{6 ± 0}{2}$ to find the solution(s).",
      questionType: 'text',
      options: [
        "$x = \\frac{6 + 0}{2} = 3$ and $x = \\frac{6 - 0}{2} = 3$. One repeated root: $x = 3$.",
        "$x = \\frac{6}{2} = 3$ and $x = \\frac{0}{2} = 0$. Two roots: $x = 3$ and $x = 0$.",
        "$x = \\frac{6}{2} + 0 = 3$ and $x = \\frac{6}{2} - 0 = 3$. One repeated root: $x = 3$.",
        "$x = 6$ (repeated root)."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Since $±0$ is just $0$, we have $x = \\frac{6 + 0}{2} = 3$ and $x = \\frac{6 - 0}{2} = 3$. This means there is one repeated (or double) root at $x = 3$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Practice Example Solution", "$x = 3$ (repeated root)");
      }
    }
  ]
};

// --- Multi-Step Question 4: Discriminant Analysis ---
const qfDiscriminantQuestion: MultiStepQuestion = {
  id: 'qf-discriminant',
  title: 'Understanding the Discriminant',
  steps: [
    {
      id: 'qfd-analyze-positive',
      question: "If the discriminant $\\Delta = b^2 - 4ac$ is positive, what can you say about the solutions?",
      questionType: 'text',
      options: [
        "There are no real solutions.",
        "There is one repeated real solution.",
        "There are two distinct real solutions.",
        "The solutions are always integers."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "A positive discriminant means the square root $\\sqrt{\\Delta}$ is a real number. The '±' in the formula gives two different results, leading to two distinct real solutions.",
      explanationType: 'text'
    },
    {
      id: 'qfd-analyze-zero',
      question: "If the discriminant $\\Delta = b^2 - 4ac$ is zero, what can you say about the solutions?",
      questionType: 'text',
      options: [
        "There are no real solutions.",
        "There is one repeated real solution.",
        "There are two distinct real solutions.",
        "The equation is not quadratic."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "A discriminant of zero means $\\sqrt{\\Delta} = \\sqrt{0} = 0$. The formula becomes $x = \\frac{-b ± 0}{2a} = \\frac{-b}{2a}$. The '±' doesn't change the result, so there is exactly one real solution, which is repeated.",
      explanationType: 'text'
    },
    {
      id: 'qfd-analyze-negative',
      question: "If the discriminant $\\Delta = b^2 - 4ac$ is negative, what can you say about the solutions?",
      questionType: 'text',
      options: [
        "There are no real solutions (the solutions are complex).",
        "There is one repeated real solution.",
        "There are two distinct real solutions.",
        "The solutions are always zero."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "A negative discriminant means the square root $\\sqrt{\\Delta}$ is not a real number (it's an imaginary number). Therefore, the equation has no real solutions. The solutions are complex numbers.",
      explanationType: 'text'
    },
    {
      id: 'qfd-determine-nature',
      question: "For the equation $x^2 + x + 1 = 0$, determine the nature of its solutions using the discriminant.",
      questionType: 'text',
      options: [
        "$\\Delta = 1 - 4 = -3$. Two distinct real solutions.",
        "$\\Delta = 1 + 4 = 5$. Two distinct real solutions.",
        "$\\Delta = 1 - 4 = -3$. No real solutions (complex).",
        "$\\Delta = 1 - 2 = -1$. No real solutions (complex)."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Here, $a=1$, $b=1$, $c=1$. The discriminant is $\\Delta = b^2 - 4ac = (1)^2 - 4(1)(1) = 1 - 4 = -3$. Since the discriminant is negative, the equation has no real solutions; the solutions are complex.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 5: Applying the Formula ---
const qfApplyFormulaQuestion: MultiStepQuestion = {
  id: 'qf-apply-formula',
  title: 'Applying the Quadratic Formula',
  steps: [
    {
      id: 'qfaf-solve-equation',
      question: "Solve the equation $x^2 - 5x + 6 = 0$ using the Quadratic Formula.",
      questionType: 'text',
      options: [
        "$x = 2$ or $x = 3$",
        "$x = -2$ or $x = -3$",
        "$x = 1$ or $x = 6$",
        "$x = 0$ or $x = 5$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "1. Identify: $a=1$, $b=-5$, $c=6$. 2. Discriminant: $\\Delta = (-5)^2 - 4(1)(6) = 25 - 24 = 1$. 3. Apply formula: $x = \\frac{-(-5) ± \\sqrt{1}}{2(1)} = \\frac{5 ± 1}{2}$. 4. Solutions: $x = \\frac{5+1}{2}=3$ and $x = \\frac{5-1}{2}=2$.",
      explanationType: 'text'
    },
    {
      id: 'qfaf-check-solution',
      question: "Verify one of the solutions, $x = 2$, in the original equation $x^2 - 5x + 6 = 0$.",
      questionType: 'text',
      options: [
        "$(2)^2 - 5(2) + 6 = 4 - 10 + 6 = 0$. Correct!",
        "$(2)^2 - 5(2) + 6 = 4 - 10 + 6 = 1$. Incorrect.",
        "$(2)^2 - 5(2) + 6 = 2 - 10 + 6 = -2$. Incorrect.",
        "$(2)^2 - 5(2) + 6 = 4 - 5 + 6 = 5$. Incorrect."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substituting $x = 2$: LHS = $(2)^2 - 5(2) + 6 = 4 - 10 + 6 = 0$. This equals the RHS (0), confirming that $x = 2$ is a correct solution.",
      explanationType: 'text'
    },
    {
      id: 'qfaf-solve-negative-discriminant',
      question: "Consider the equation $x^2 + x + 1 = 0$. What does the Quadratic Formula give?",
      questionType: 'text',
      options: [
        "$x = \\frac{-1 ± \\sqrt{-3}}{2}$. No real solutions.",
        "$x = \\frac{1 ± \\sqrt{-3}}{2}$. No real solutions.",
        "$x = \\frac{-1 ± \\sqrt{3}}{2}$. Two real solutions.",
        "$x = \\frac{-1 ± 3}{2}$. Two real solutions: $x=1$ and $x=-2$."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "From the previous question, we know $\\Delta = -3$. Applying the formula: $x = \\frac{-b ± \\sqrt{\\Delta}}{2a} = \\frac{-1 ± \\sqrt{-3}}{2}$. Since we cannot take the square root of a negative number within the real numbers, there are no real solutions.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Complex Solution Example", "$x^2 + x + 1 = 0$ has no real solutions.");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const quadraticFormulaQuestions: MultiStepQuestion[] = [
  qfConceptQuestion,
  qfExampleAnalysisQuestion,
  qfPracticeExampleQuestion,
  qfDiscriminantQuestion,
  qfApplyFormulaQuestion
];

const SolvingQuadraticEquationsFormula: React.FC = () => {
  const qfRules = [
    "Ensure the equation is in standard form: $ax^2 + bx + c = 0$.",
    "Identify the coefficients $a$, $b$, and $c$.",
    "Calculate the discriminant: $\\Delta = b^2 - 4ac$.",
    "Substitute $a$, $b$, and $\\sqrt{\\Delta}$ into the formula: $x = \\frac{-b ± \\sqrt{b^2 - 4ac}}{2a}$.",
    "Simplify the expression to find the value(s) of $x$.",
    "Interpret the discriminant: Positive (2 real roots), Zero (1 repeated root), Negative (No real roots).",
    "Always check your solution(s) by substituting back into the original equation."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Solving Quadratic Equations - Quadratic Formula"
        icon="📐" // Triangle Ruler icon, often associated with formulas/geometry
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={qfRules}
        rulesTitle="Quadratic Formula Rules:"
        questions={quadraticFormulaQuestions}
        renderSharedValuesSummary={renderQuadraticFormulaSummary}
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default SolvingQuadraticEquationsFormula