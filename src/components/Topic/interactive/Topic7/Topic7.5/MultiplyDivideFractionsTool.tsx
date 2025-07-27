// MultiplyDivideFractionsTool.tsx
import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData } from '../Templates/AlgebraMultiStepInteractiveTemplate'; // Adjust path as needed

// Define data for Multiplying and Dividing Fractions
const multiplyDivideFractionsData: InteractiveToolData = {
  title: "Multiplying and Dividing Fractions",
  description: "Master multiplying and dividing algebraic fractions by factoring and canceling.",
  theme: {
    primaryColor: 'blue', // Specify the primary color theme
    backgroundColorFrom: 'blue-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'cyan-100'  // Specify the 'to' color for the background gradient
    // You can add more theme properties here if your template supports them
  },
  steps: [
    {
      id: "operationType",
      title: "Step 1: Identify the Operation",
      description: "Is this problem multiplication or division?",
      type: "mcq"
    },
    {
      id: "factoredNumerators",
      title: "Step 2: Factor Numerators",
      description: "Factor the numerators of all fractions completely:",
      type: "mcq"
    },
    {
      id: "factoredDenominators",
      title: "Step 3: Factor Denominators",
      description: "Factor the denominators of all fractions completely:",
      type: "mcq"
    },
    {
      id: "cancelledFactors",
      title: "Step 4: Identify Cancelled Factors",
      description: "List the common factors that can be cancelled from the overall numerator and denominator:",
      type: "mcq"
    },
    {
      id: "simplifiedNumerator",
      title: "Step 5: Simplify the Overall Numerator",
      description: "After cancelling, what is the product of the remaining numerator factors?",
      type: "mcq"
    },
    {
      id: "simplifiedDenominator",
      title: "Step 6: Simplify the Overall Denominator",
      description: "After cancelling, what is the product of the remaining denominator factors?",
      type: "mcq"
    },
    {
      id: "finalSimplified",
      title: "Step 7: Write the Simplified Fraction",
      description: "Combine the simplified numerator and denominator:",
      type: "mcq"
    },
    {
      id: "restrictions",
      title: "Final Check: State Restrictions",
      description: "Are there any values that would make any original denominator zero? (List them)",
      type: "mcq"
    }
    // Add more steps as needed
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: \frac{2x}{3y} \times \frac{9y^2}{4x} ---
    {
      operationType: ["Multiplication", "Division", "Addition", "Subtraction"],
      factoredNumerators: ["[2 \\times x, 3^2 \\times y \\times y]", "[2x, 9y^2]", "[2, x, 9, y^2]", "[2 \\times x, 9 \\times y^2]"],
      factoredDenominators: ["[3 \\times x, 2^2 \\times x]", "[3y, 4x]", "[3, y, 4, x]", "[3 \\times y, 2^2 \\times x]"],
      cancelledFactors: [["2", "x", "y"], ["x", "y"], ["2", "y"], ["3", "y^2"]], // Array of strings for options
      simplifiedNumerator: ["3y", "18xy^2", "2x \\times 9y^2", "6y"],
      simplifiedDenominator: ["2", "12xy", "3y \\times 4x", "4x"],
      finalSimplified: ["\\frac{3y}{2}", "\\frac{18xy^2}{12xy}", "\\frac{6y}{4x}", "3y"],
      restrictions: [["x \\neq 0, y \\neq 0"], ["x \\neq 0"], ["y \\neq 0"], []]
    },
    // --- Problem 2: \frac{x^2}{3} \div \frac{x}{6} ---
    {
      operationType: ["Division", "Multiplication", "Addition", "Subtraction"],
      factoredNumerators: ["[x \\times x, 2 \\times 3]", "[x^2, 6]", "[x^2, 2, 3]", "[x, x, 2, 3]"],
      factoredDenominators: ["[3, x]", "[3, x]", ["3", "x"], ["3", "x"]], // Mixing array and string array styles for options
      cancelledFactors: [["x", "3"], ["x"], ["3"], ["x^2"]], // Array of strings for options
      simplifiedNumerator: ["2x", "6x^2", "x^2 \\times 6", "6x"],
      simplifiedDenominator: ["1", "3x", "3", "x"],
      finalSimplified: ["2x", "\\frac{6x^2}{3x}", "\\frac{6x}{3}", "2x"], // Note: 2x appears twice, might want unique options
      restrictions: [["x \\neq 0"], [], ["x \\neq 3"], ["x > 0"]]
    },
    // --- Problem 3: \frac{4a}{5} \times \frac{10}{2a^2} (Practice Example) ---
    {
      operationType: ["Multiplication", "Division", "Addition", "Subtraction"],
      factoredNumerators: ["[2^2 \\times a, 2 \\times 5]", ["4a", "10"], ["2^2", "a", "2", "5"], ["4 \\times a, 10"]],
      factoredDenominators: ["[5, 2 \\times a \\times a]", ["5", "2a^2"], ["5", "2", "a^2"], ["5", "2 \\times a^2"]],
      cancelledFactors: [["2", "a"], ["a"], ["2"], ["5", "a"]], // Array of strings for options
      simplifiedNumerator: ["4", "40a", "2^2 \\times a \\times 2 \\times 5", "20"],
      simplifiedDenominator: ["a", "10a^2", "5 \\times 2 \\times a^2", "5a"],
      finalSimplified: ["\\frac{4}{a}", "\\frac{40a}{10a^2}", "\\frac{20}{5a}", "\\frac{4}{a}"], // Note: \frac{4}{a} appears twice
      restrictions: [["a \\neq 0"], [], ["a \\neq 2"], ["a > 0"]]
    }
    // Add more problems...
  ],
  practiceProblems: [
    // --- Problem 1: \frac{2x}{3y} \times \frac{9y^2}{4x} ---
    {
      expression: "\\frac{2x}{3y} \\times \\frac{9y^2}{4x}",
      solution: {
        operationType: "Multiplication",
        factoredNumerators: "[2 \\times x, 3^2 \\times y \\times y]", // Store as string if array comparison in checkAnswer needs adjustment
        factoredDenominators: "[3 \\times y, 2^2 \\times x]",
        cancelledFactors: ["2", "x", "y"], // Solution is an array
        simplifiedNumerator: "3y",
        simplifiedDenominator: "2",
        finalSimplified: "\\frac{3y}{2}",
        restrictions: ["x \\neq 0, y \\neq 0"] // Or ["x \\neq 0", "y \\neq 0"] if you adjust checkAnswer
      },
      explanation: {
        operationType: "The operation symbol is $\\times$, indicating multiplication.",
        factoredNumerators: "Factor $2x = 2 \\times x$ and $9y^2 = 3^2 \\times y \\times y$.",
        factoredDenominators: "Factor $3y = 3 \\times y$ and $4x = 2^2 \\times x$.",
        cancelledFactors: "Identify common factors in the overall numerator ($2, x, 3^2, y, y$) and denominator ($3, y, 2^2, x$). These are $2, x, y$.",
        simplifiedNumerator: "Multiply the remaining numerator factors after canceling: $3 \\times y = 3y$.",
        simplifiedDenominator: "Multiply the remaining denominator factors after canceling: $2$.",
        finalSimplified: "The simplified fraction is $\\frac{3y}{2}$.",
        restrictions: "The original denominators $3y$ and $4x$ are zero when $y = 0$ or $x = 0$. Thus, $x \\neq 0, y \\neq 0$."
      },
      hint: "Start by factoring all coefficients and variables. What factors appear in both the overall numerator and denominator?"
    },
    // --- Problem 2: \frac{x^2}{3} \div \frac{x}{6} ---
    {
      expression: "\\frac{x^2}{3} \\div \\frac{x}{6}",
      solution: {
        operationType: "Division",
        factoredNumerators: "[x \\times x, 2 \\times 3]",
        factoredDenominators: "[3, x]",
        cancelledFactors: ["x", "3"], // Solution is an array
        simplifiedNumerator: "2x",
        simplifiedDenominator: "1",
        finalSimplified: "2x",
        restrictions: ["x \\neq 0"] // Or ["x \\neq 0"] if you adjust checkAnswer
      },
      explanation: {
        operationType: "The operation symbol is $\\div$, indicating division.",
        factoredNumerators: "Factor $x^2 = x \\times x$ and $6 = 2 \\times 3$.",
        factoredDenominators: "The denominators are $3$ and $x$, which are already factored.",
        cancelledFactors: "For division, multiply by the reciprocal: $\\frac{x^2}{3} \\times \\frac{6}{x}$. Now identify common factors in the numerator ($x, x, 2, 3$) and denominator ($3, x$). These are $x, 3$.",
        simplifiedNumerator: "Multiply the remaining numerator factors after canceling: $x \\times 2 = 2x$.",
        simplifiedDenominator: "Multiply the remaining denominator factors after canceling: $1$.",
        finalSimplified: "The simplified fraction is $\\frac{2x}{1} = 2x$.",
        restrictions: "The original denominators $3$ and $x$, and the divisor denominator $x$, are zero when $x = 0$. Thus, $x \\neq 0$."
      },
      hint: "First, rewrite the division as multiplication by the reciprocal. Then factor and look for common terms to cancel."
    },
    // --- Problem 3: \frac{4a}{5} \times \frac{10}{2a^2} ---
    {
      expression: "\\frac{4a}{5} \\times \\frac{10}{2a^2}",
      solution: {
         operationType: "Multiplication",
        factoredNumerators: "[2^2 \\times a, 2 \\times 5]",
        factoredDenominators: "[5, 2 \\times a \\times a]",
        cancelledFactors: ["2", "a"], // Solution is an array
        simplifiedNumerator: "4",
        simplifiedDenominator: "a",
        finalSimplified: "\\frac{4}{a}",
        restrictions: ["a \\neq 0"] // Or ["a \\neq 0"] if you adjust checkAnswer
      },
      explanation: {
         operationType: "The operation symbol is $\\times$, indicating multiplication.",
        factoredNumerators: "Factor $4a = 2^2 \\times a$ and $10 = 2 \\times 5$.",
        factoredDenominators: "The denominator $5$ is factored. Factor $2a^2 = 2 \\times a \\times a$.",
        cancelledFactors: "Identify common factors in the overall numerator ($2^2, a, 2, 5$) and denominator ($5, 2, a^2$). These are $2, a$ (one $2$ and one $a$ can be canceled).",
        simplifiedNumerator: "Multiply the remaining numerator factors after canceling: $2 \\times 2 = 4$.",
        simplifiedDenominator: "Multiply the remaining denominator factors after canceling: $a$.",
        finalSimplified: "The simplified fraction is $\\frac{4}{a}$.",
        restrictions: "The original denominators $5$ and $2a^2$ are zero when $a = 0$. Thus, $a \\neq 0$."
      },
      hint: "Factor numbers into primes and variables. Be careful with exponents when canceling (e.g., $a^2 / a = a$)."
    }
    // Add more problems...
  ]
};

export default function MultiplyDivideFractionsTool() {
  return (
    <AlgebraMultiStepInteractiveTemplate toolData={multiplyDivideFractionsData} />
  );
}