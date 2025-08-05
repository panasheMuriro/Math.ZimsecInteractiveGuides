/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderQuadraticInequalitiesSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No quadratic inequalities solved yet.</p>;
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
const qiConceptQuestion: MultiStepQuestion = {
  id: 'qi-concept',
  title: 'Understanding Quadratic Inequalities',
  steps: [
    {
      id: 'qic-define',
      question: "What is a quadratic inequality?",
      questionType: 'text',
      options: [
        "A linear equation with an inequality sign.",
        "An inequality involving a quadratic expression (e.g., $ax^2 + bx + c > 0$).",
        "An equation where the highest power of the variable is 1.",
        "A statement that two quadratic expressions are equal."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "A quadratic inequality is an inequality that contains a quadratic expression. It uses inequality signs like $>$, $<$, $\\geq$, or $\\leq$ instead of an equals sign.",
      explanationType: 'text'
    },
    {
      id: 'qic-solution',
      question: "What does the solution to a quadratic inequality typically represent?",
      questionType: 'text',
      options: [
        "A single value of $x$.",
        "A range or set of $x$ values that make the inequality true.",
        "The y-intercept of the parabola.",
        "The vertex of the parabola."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The solution to a quadratic inequality is the set of all $x$ values for which the inequality holds true. This is often expressed as an interval or a union of intervals on the number line.",
      explanationType: 'text'
    },
    {
      id: 'qic-methods',
      question: "Which method is commonly used to solve quadratic inequalities?",
      questionType: 'text',
      options: [
        "Only graphing the parabola.",
        "Factoring, finding roots, and testing intervals on a number line.",
        "Using the Quadratic Formula directly.",
        "Guessing and checking random numbers."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The standard algebraic method involves factoring the quadratic expression (if possible) to find its roots. These roots divide the number line into intervals. Testing a point from each interval determines where the inequality is satisfied.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Analyzing Example 1 ($x^2 - 5x + 6 > 0$) ---
const qiExample1AnalysisQuestion: MultiStepQuestion = {
  id: 'qi-example1-analysis',
  title: 'Analyzing Example 1: $x^2 - 5x + 6 > 0$',
  steps: [
    {
      id: 'qie1a-factor',
      question: "Factor the quadratic expression $x^2 - 5x + 6$.",
      questionType: 'text',
      options: [
        "$(x - 1)(x - 6)$",
        "$(x + 2)(x + 3)$",
        "$(x - 2)(x - 3)$",
        "$(x - 2)(x + 3)$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "We need two numbers that multiply to 6 and add to -5. Those numbers are -2 and -3. Therefore, $x^2 - 5x + 6 = (x - 2)(x - 3)$.",
      explanationType: 'text'
    },
    {
      id: 'qie1a-roots',
      question: "What are the roots of the equation $(x - 2)(x - 3) = 0$?",
      questionType: 'text',
      options: [
        "$x = -2$ and $x = -3$",
        "$x = 2$ and $x = 3$",
        "$x = 1$ and $x = 6$",
        "$x = 0$ and $x = 5$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Setting each factor equal to zero: $x - 2 = 0$ gives $x = 2$, and $x - 3 = 0$ gives $x = 3$.",
      explanationType: 'text'
    },
    {
      id: 'qie1a-intervals',
      question: "The roots $x = 2$ and $x = 3$ divide the number line into which intervals?",
      questionType: 'text',
      options: [
        "$(-\\infty, 2]$, $(2, 3)$, $[3, \\infty)$",
        "$(-\\infty, 2)$, $(2, 3)$, $(3, \\infty)$",
        "$(-\\infty, 3)$, $(3, 2)$, $(2, \\infty)$",
        "$[2, 3]$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The roots $x = 2$ and $x = 3$ create three distinct open intervals on the number line: everything less than 2, everything between 2 and 3, and everything greater than 3.",
      explanationType: 'text'
    },
    {
      id: 'qie1a-test-intervals',
      question: "Based on the example, in which intervals is $(x - 2)(x - 3) > 0$ true?",
      questionType: 'text',
      options: [
        "Only in $(-\\infty, 2)$",
        "Only in $(2, 3)$",
        "In $(-\\infty, 2)$ and $(3, \\infty)$",
        "In $(2, 3)$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The example tested points in each interval: $x=1$ (in $(-\\infty, 2)$) gave a positive result, $x=2.5$ (in $(2,3)$) gave a negative result, and $x=4$ (in $(3, \\infty)$) gave a positive result. The inequality $> 0$ is true where the product is positive.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 3: Analyzing Example 2 ($x^2 - 4 \\leq 0$) ---
const qiExample2AnalysisQuestion: MultiStepQuestion = {
  id: 'qi-example2-analysis',
  title: 'Analyzing Example 2: $x^2 - 4 \\leq 0$',
  steps: [
    {
      id: 'qie2a-factor',
      question: "Factor the quadratic expression $x^2 - 4$.",
      questionType: 'text',
      options: [
        "$(x - 2)^2$",
        "$(x - 2)(x + 2)$",
        "$(x + 2)^2$",
        "$x(x - 4)$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "$x^2 - 4$ is a difference of squares, which factors as $(x - a)(x + a)$ where $a^2 = 4$. Thus, $x^2 - 4 = (x - 2)(x + 2)$.",
      explanationType: 'text'
    },
    {
      id: 'qie2a-roots',
      question: "What are the roots of the equation $(x - 2)(x + 2) = 0$?",
      questionType: 'text',
      options: [
        "$x = -2$ and $x = 2$",
        "$x = 2$ and $x = 2$",
        "$x = -2$ and $x = -2$",
        "$x = 0$ and $x = 4$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Setting each factor equal to zero: $x - 2 = 0$ gives $x = 2$, and $x + 2 = 0$ gives $x = -2$.",
      explanationType: 'text'
    },
    {
      id: 'qie2a-intervals',
      question: "The roots $x = -2$ and $x = 2$ divide the number line into which intervals?",
      questionType: 'text',
      options: [
        "$[-2, 2]$",
        "$(-\\infty, -2)$, $(-2, 2)$, $(2, \\infty)$",
        "$(-\\infty, -2]$, $[-2, 2]$, $[2, \\infty)$",
        "$(-\\infty, 2)$, $(2, \\infty)$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The roots $x = -2$ and $x = 2$ create three distinct open intervals: $(-\\infty, -2)$, $(-2, 2)$, and $(2, \\infty)$.",
      explanationType: 'text'
    },
    {
      id: 'qie2a-test-intervals',
      question: "Based on the example, in which interval is $(x - 2)(x + 2) \\leq 0$ true?",
      questionType: 'text',
      options: [
        "Only in $(-\\infty, -2)$",
        "Only in $(2, \\infty)$",
        "In $(-\\infty, -2)$ and $(2, \\infty)$",
        "In $(-2, 2)$"
      ],
      optionType: 'text',
      correct: 3,
      explanation: "The example tested points: $x=-3$ (in $(-\\infty, -2)$) gave a positive result, $x=0$ (in $(-2,2)$) gave a negative result, and $x=3$ (in $(2, \\infty)$) gave a positive result. The inequality $\\leq 0$ is true where the product is negative or zero.",
      explanationType: 'text'
    },
    {
      id: 'qie2a-solution',
      question: "What is the solution to $x^2 - 4 \\leq 0$?",
      questionType: 'text',
      options: [
        "$x < -2$ or $x > 2$",
        "$-2 < x < 2$",
        "$x \\leq -2$ or $x \\geq 2$",
        "$-2 \\leq x \\leq 2$"
      ],
      optionType: 'text',
      correct: 3,
      explanation: "The product is negative in the interval $(-2, 2)$. Since the inequality is $\\leq 0$, we also include the points where the product equals zero, which are the roots $x = -2$ and $x = 2$. Therefore, the solution is the closed interval $[-2, 2]$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 4: Solving the Practice Example ($x^2 - x - 6 < 0$) ---
const qiPracticeExampleQuestion: MultiStepQuestion = {
  id: 'qi-practice-example',
  title: 'Solving the Practice Example: $x^2 - x - 6 < 0$',
  steps: [
    {
      id: 'qipe-factor',
      question: "Factor the quadratic expression $x^2 - x - 6$.",
      questionType: 'text',
      options: [
        "$(x - 1)(x + 6)$",
        "$(x + 1)(x - 6)$",
        "$(x - 3)(x + 2)$",
        "$(x + 3)(x - 2)$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "We need two numbers that multiply to -6 and add to -1. Those numbers are -3 and +2. Therefore, $x^2 - x - 6 = (x - 3)(x + 2)$.",
      explanationType: 'text'
    },
    {
      id: 'qipe-roots',
      question: "What are the roots of the equation $(x - 3)(x + 2) = 0$?",
      questionType: 'text',
      options: [
        "$x = 3$ and $x = -2$",
        "$x = -3$ and $x = 2$",
        "$x = 1$ and $x = -6$",
        "$x = 0$ and $x = 1$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Setting each factor equal to zero: $x - 3 = 0$ gives $x = 3$, and $x + 2 = 0$ gives $x = -2$.",
      explanationType: 'text'
    },
    {
      id: 'qipe-intervals',
      question: "The roots $x = -2$ and $x = 3$ divide the number line into which intervals?",
      questionType: 'text',
      options: [
        "$(-\\infty, -2]$, $[-2, 3]$, $[3, \\infty)$",
        "$(-\\infty, -2)$, $(-2, 3)$, $(3, \\infty)$",
        "$(-\\infty, 3)$, $(3, -2)$, $(-2, \\infty)$",
        "$[-2, 3]$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The roots $x = -2$ and $x = 3$ create three distinct open intervals: $(-\\infty, -2)$, $(-2, 3)$, and $(3, \\infty)$.",
      explanationType: 'text'
    },
    {
      id: 'qipe-test-intervals',
      question: "Test a point in each interval for $(x - 3)(x + 2) < 0$. Where is it true?",
      questionType: 'text',
      options: [
        "In $(-\\infty, -2)$",
        "In $(-2, 3)$",
        "In $(3, \\infty)$",
        "In $(-\\infty, -2)$ and $(3, \\infty)$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Let's test: $x = -3$ (in $(-\\infty, -2)$): $(-3-3)(-3+2) = (-6)(-1) = 6 > 0$. $x = 0$ (in $(-2, 3)$): $(0-3)(0+2) = (-3)(2) = -6 < 0$. $x = 4$ (in $(3, \\infty)$): $(4-3)(4+2) = (1)(6) = 6 > 0$. The inequality $< 0$ is true only in the middle interval $(-2, 3)$.",
      explanationType: 'text'
    },
    {
      id: 'qipe-solution',
      question: "What is the solution to $x^2 - x - 6 < 0$?",
      questionType: 'text',
      options: [
        "$x < -2$ or $x > 3$",
        "$-2 < x < 3$",
        "$x \\leq -2$ or $x \\geq 3$",
        "$-2 \\leq x \\leq 3$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The product is negative in the interval $(-2, 3)$. Since the inequality is strict ($<$), we do not include the endpoints where the product equals zero. The solution is $-2 < x < 3$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Practice Example Solution", "$-2 < x < 3$");
      }
    }
  ]
};

// --- Multi-Step Question 5: Applying Concepts to a New Problem ---
const qiApplyConceptsQuestion: MultiStepQuestion = {
  id: 'qi-apply-concepts',
  title: 'Applying Concepts: Solve $-x^2 + 4x - 3 \\geq 0$',
  steps: [
    {
      id: 'qiace-rearrange',
      question: "It's often easier to work with a positive $x^2$ coefficient. Multiply the inequality $-x^2 + 4x - 3 \\geq 0$ by $-1$. What happens to the inequality sign?",
      questionType: 'text',
      options: [
        "It stays the same: $x^2 - 4x + 3 \\geq 0$",
        "It flips: $x^2 - 4x + 3 \\leq 0$",
        "It disappears: $x^2 - 4x + 3 = 0$",
        "Nothing changes."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "When you multiply or divide both sides of an inequality by a negative number, you must flip the inequality sign. Multiplying by $-1$ gives $x^2 - 4x + 3 \\leq 0$.",
      explanationType: 'text'
    },
    {
      id: 'qiace-factor',
      question: "Factor the quadratic expression $x^2 - 4x + 3$.",
      questionType: 'text',
      options: [
        "$(x - 1)(x - 3)$",
        "$(x + 1)(x + 3)$",
        "$(x - 1)(x + 3)$",
        "$(x + 1)(x - 3)$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "We need two numbers that multiply to 3 and add to -4. Those numbers are -1 and -3. Therefore, $x^2 - 4x + 3 = (x - 1)(x - 3)$.",
      explanationType: 'text'
    },
    {
      id: 'qiace-roots',
      question: "What are the roots of the equation $(x - 1)(x - 3) = 0$?",
      questionType: 'text',
      options: [
        "$x = -1$ and $x = -3$",
        "$x = 1$ and $x = 3$",
        "$x = -1$ and $x = 3$",
        "$x = 1$ and $x = -3$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Setting each factor equal to zero: $x - 1 = 0$ gives $x = 1$, and $x - 3 = 0$ gives $x = 3$.",
      explanationType: 'text'
    },
    {
      id: 'qiace-test-intervals',
      question: "Test a point in each interval for $(x - 1)(x - 3) \\leq 0$. Where is it true?",
      questionType: 'text',
      options: [
        "In $(-\\infty, 1)$",
        "In $(1, 3)$",
        "In $(3, \\infty)$",
        "In $(-\\infty, 1)$ and $(3, \\infty)$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Intervals are $(-\\infty, 1)$, $(1, 3)$, $(3, \\infty)$. Test: $x = 0$ (in $(-\\infty, 1)$): $(0-1)(0-3) = (-1)(-3) = 3 > 0$. $x = 2$ (in $(1, 3)$): $(2-1)(2-3) = (1)(-1) = -1 < 0$. $x = 4$ (in $(3, \\infty)$): $(4-1)(4-3) = (3)(1) = 3 > 0$. The inequality $\\leq 0$ is true in $(1, 3)$.",
      explanationType: 'text'
    },
    {
      id: 'qiace-solution',
      question: "What is the solution to the original inequality $-x^2 + 4x - 3 \\geq 0$?",
      questionType: 'text',
      options: [
        "$x < 1$ or $x > 3$",
        "$1 < x < 3$",
        "$x \\leq 1$ or $x \\geq 3$",
        "$1 \\leq x \\leq 3$"
      ],
      optionType: 'text',
      correct: 3,
      explanation: "We solved $(x - 1)(x - 3) \\leq 0$, which gave us $1 \\leq x \\leq 3$. Remember, we flipped the inequality sign at the beginning, so this solution corresponds to the original inequality $-x^2 + 4x - 3 \\geq 0$. We include the endpoints because of the $\\leq$ sign.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Applied Concepts Solution", "$1 \\leq x \\leq 3$ for $-x^2 + 4x - 3 \\geq 0$");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const quadraticInequalitiesQuestions: MultiStepQuestion[] = [
  qiConceptQuestion,
  qiExample1AnalysisQuestion,
  qiExample2AnalysisQuestion,
  qiPracticeExampleQuestion,
  qiApplyConceptsQuestion
];

const SolvingQuadraticInequalities: React.FC = () => {
  const qiRules = [
    "Ensure the inequality is in standard form with zero on one side (e.g., $ax^2 + bx + c > 0$).",
    "Factor the quadratic expression to find its roots (values where it equals zero).",
    "Plot the roots on a number line. They divide the line into test intervals.",
    "Choose a test point from each interval and substitute it into the factored inequality.",
    "Determine the sign of the expression in each interval (positive or negative).",
    "Select the intervals where the inequality is satisfied (e.g., where the expression is positive for $> 0$).",
    "Include or exclude the roots based on the inequality sign ($\\geq/\\leq$ includes, $>/<$ excludes).",
    "Write the final solution in interval notation."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Solving Quadratic Inequalities"
        icon="📉" // Chart with Downwards Trend, representing inequalities/regions
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={qiRules}
        rulesTitle="Quadratic Inequalities Rules:"
        questions={quadraticInequalitiesQuestions}
        renderSharedValuesSummary={renderQuadraticInequalitiesSummary}
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default SolvingQuadraticInequalities