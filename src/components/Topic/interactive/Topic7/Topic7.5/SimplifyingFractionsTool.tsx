import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData } from "../Templates/AlgebraMultiStepInteractiveTemplate";

  // Define data for Add/Subtract Fractions
const simplifyingFractionsData: InteractiveToolData = {
  title: "Simplifying Basic Fractions",
  description: "",
    steps: [
    {
      id: "factoredNumerator",
      title: "Step 1: Factor the Numerator",
      description: "Factor the numerator completely:",
      type: "mcq"
    },
    {
      id: "factoredDenominator",
      title: "Step 2: Factor the Denominator",
      description: "Factor the denominator completely:",
       type: "mcq"
    },
    {
      id: "cancelledFactors",
      title: "Step 3: Identify Cancelled Factors",
      description: "List the common factors that can be cancelled from the numerator and denominator:",
      type: "mcq"
    },
    {
      id: "simplifiedNumerator",
      title: "Step 4: Simplify the Numerator",
      description: "After cancelling, what is the new numerator?",
       type: "mcq"
    },
    {
      id: "simplifiedDenominator",
      title: "Step 5: Simplify the Denominator",
      description: "After cancelling, what is the new denominator?",
       type: "mcq"
    },
    {
      id: "finalSimplified",
      title: "Step 6: Write the Simplified Fraction",
      description: "Combine the simplified numerator and denominator:",
      type: "mcq"
    },
    {
      id: "restrictions",
      title: "Final Check: State Restrictions",
      description: "Are there any values that would make the original denominator zero? (List them)",
     type: "mcq"
    }
  ],
   mcqOptionsPerProblem: [
    // Problem 1: \frac{6x^2}{9x}
    {
      factoredNumerator: ["2 \\times 3 \\times x \\times x", "6 \\times x^2", "2 \\times 3 \\times x^2", "3 \\times 2x^2"],
      factoredDenominator: ["3 \\times 3 \\times x", "9 \\times x", "3^2 \\times x", "9x"],
      cancelledFactors: [["3", "x"], ["x"], ["3"], ["6", "x"]],
      simplifiedNumerator: ["2x", "2x^2", "6x", "2"],
      simplifiedDenominator: ["3", "9", "1", "3x"],
      finalSimplified: ["\\frac{2x}{3}", "\\frac{2x^2}{3}", "\\frac{6x}{9}", "2x"],
      restrictions: [[], ["x \\neq 0"], ["x > 0"], ["x \\neq 3"]]
    },
    // Problem 2: \frac{x^2 - 4}{x + 2}
    {
      factoredNumerator: ["(x + 2)(x - 2)", "x^2 - 4", "(x - 2)^2", "(x + 2)^2"],
      factoredDenominator: ["x + 2", "1", "x - 2", "2"],
      cancelledFactors: [["x + 2"], ["x - 2"], ["2"], []],
      simplifiedNumerator: ["x - 2", "x + 2", "1", "x^2 - 4"],
      simplifiedDenominator: ["1", "x + 2", "x - 2", "-2"],
      finalSimplified: ["x - 2", "\\frac{x - 2}{1}", "x + 2", "\\frac{x^2 - 4}{x + 2}"],
      restrictions: [["x \\neq -2"], [], ["x \\neq 2"], ["x > 0"]]
    },
    // Problem 3: \frac{8a^3}{12a}
    {
      factoredNumerator: ["2^3 \\times a \\times a \\times a", "8 \\times a^3", "2^3 \\times a^3", "4 \\times 2 \\times a^3"],
      factoredDenominator: ["2^2 \\times 3 \\times a", "12 \\times a", "2^2 \\times 3a", "4 \\times 3 \\times a"],
      cancelledFactors: [["2^2", "a"], ["a"], ["2^2"], ["4", "a"]],
      simplifiedNumerator: ["2a^2", "2a^3", "8a^2", "4a^2"],
      simplifiedDenominator: ["3", "12", "6", "1"],
      finalSimplified: ["\\frac{2a^2}{3}", "\\frac{2a^3}{12}", "\\frac{4a^2}{6}", "2a^2"],
      restrictions: [[], ["a \\neq 0"], ["a > 0"], ["a \\neq 3"]]
    },
    // Problem 4: \frac{x^2 + 5x + 6}{x + 3}
    {
        factoredNumerator: ["(x + 2)(x + 3)", "x^2 + 5x + 6", "(x + 1)(x + 6)", "(x + 3)^2"],
        factoredDenominator: ["x + 3", "1", "x + 2", "3"],
        cancelledFactors: [["x + 3"], ["x + 2"], ["3"], []],
        simplifiedNumerator: ["x + 2", "x + 3", "1", "x^2 + 5x + 6"],
        simplifiedDenominator: ["1", "x + 3", "x + 2", "3"],
        finalSimplified: ["x + 2", "\\frac{x + 2}{1}", "x + 3", "\\frac{x^2 + 5x + 6}{x + 3}"],
        restrictions: [["x \\neq -3"], [], ["x \\neq -2"], ["x > 0"]]
      }
  ],
    practiceProblems: [
    {
      expression: "\\frac{6x^2}{9x}",
      solution: {
        factoredNumerator: "2 \\times 3 \\times x \\times x",
        factoredDenominator: "3 \\times 3 \\times x",
        cancelledFactors: ["3", "x"],
        simplifiedNumerator: "2x",
        simplifiedDenominator: "3",
        finalSimplified: "\\frac{2x}{3}",
        restrictions: [] // No restrictions for this problem
      },
      explanation: {
        factoredNumerator: "Factor the numerator $6x^2$: $6 = 2 \\times 3$, $x^2 = x \\times x$. So, $6x^2 = 2 \\times 3 \\times x \\times x$.",
        factoredDenominator: "Factor the denominator $9x$: $9 = 3 \\times 3$. So, $9x = 3 \\times 3 \\times x$.",
        cancelledFactors: "Identify common factors in the numerator and denominator: $3$ and $x$. These can be cancelled out.",
        simplifiedNumerator: "After cancelling $3$ and $x$, the numerator becomes $2 \\times x = 2x$.",
        simplifiedDenominator: "After cancelling $3$ and $x$, the denominator becomes $3$.",
        finalSimplified: "The fraction simplifies to $\\frac{2x}{3}$.",
        restrictions: "There are no values of $x$ that make the original denominator zero, so there are no restrictions."
      },
      hint: "Factor the numbers and variables in the numerator and denominator. What factors are common to both?"
    },
    {
      expression: "\\frac{x^2 - 4}{x + 2}",
      solution: {
        factoredNumerator: "(x + 2)(x - 2)",
        factoredDenominator: "x + 2",
        cancelledFactors: ["x + 2"],
        simplifiedNumerator: "x - 2",
        simplifiedDenominator: "1",
        finalSimplified: "x - 2",
        restrictions: ["x \\neq -2"] // x = -2 makes the original denominator zero
      },
      explanation: {
        factoredNumerator: "Factor the numerator $x^2 - 4$. This is a difference of squares: $x^2 - 4 = (x + 2)(x - 2)$.",
        factoredDenominator: "The denominator $x + 2$ is already in its simplest factored form.",
        cancelledFactors: "Identify common factors in the numerator and denominator: $(x + 2)$. This can be cancelled out.",
        simplifiedNumerator: "After cancelling $(x + 2)$, the numerator becomes $(x - 2)$.",
        simplifiedDenominator: "After cancelling $(x + 2)$, the denominator becomes $1$.",
        finalSimplified: "The fraction simplifies to $\\frac{x - 2}{1} = x - 2$.",
        restrictions: "The original denominator $x + 2$ cannot be zero. Solving $x + 2 = 0$ gives $x = -2$. Therefore, $x \\neq -2$."
      },
      hint: "Can the numerator be factored further? Is there a common factor between the numerator and denominator?"
    },
    {
      expression: "\\frac{8a^3}{12a}", // From the example
      solution: {
        factoredNumerator: "2^3 \\times a \\times a \\times a",
        factoredDenominator: "2^2 \\times 3 \\times a",
        cancelledFactors: ["2^2", "a"],
        simplifiedNumerator: "2a^2",
        simplifiedDenominator: "3",
        finalSimplified: "\\frac{2a^2}{3}",
        restrictions: [] // No restrictions for this problem
      },
      explanation: {
        factoredNumerator: "Factor the numerator $8a^3$: $8 = 2^3$, $a^3 = a \\times a \\times a$. So, $8a^3 = 2^3 \\times a \\times a \\times a$.",
        factoredDenominator: "Factor the denominator $12a$: $12 = 2^2 \\times 3$. So, $12a = 2^2 \\times 3 \\times a$.",
        cancelledFactors: "Identify common factors in the numerator and denominator: $2^2$ and $a$. These can be cancelled out.",
        simplifiedNumerator: "After cancelling $2^2$ and $a$, the numerator becomes $2 \\times a \\times a = 2a^2$.",
        simplifiedDenominator: "After cancelling $2^2$ and $a$, the denominator becomes $3$.",
        finalSimplified: "The fraction simplifies to $\\frac{2a^2}{3}$.",
        restrictions: "There are no values of $a$ that make the original denominator zero, so there are no restrictions."
      },
      hint: "Factor the coefficients (8 and 12) into primes. Factor the variables. Cancel the common parts."
    },
    {
      expression: "\\frac{x^2 + 5x + 6}{x + 3}", // New problem
      solution: {
        factoredNumerator: "(x + 2)(x + 3)",
        factoredDenominator: "x + 3",
        cancelledFactors: ["x + 3"],
        simplifiedNumerator: "x + 2",
        simplifiedDenominator: "1",
        finalSimplified: "x + 2",
        restrictions: ["x \\neq -3"] // x = -3 makes the original denominator zero
      },
      explanation: {
        factoredNumerator: "Factor the numerator $x^2 + 5x + 6$. Find two numbers that multiply to 6 and add to 5. Those are 2 and 3. So, $x^2 + 5x + 6 = (x + 2)(x + 3)$.",
        factoredDenominator: "The denominator $x + 3$ is already in its simplest factored form.",
        cancelledFactors: "Identify common factors in the numerator and denominator: $(x + 3)$. This can be cancelled out.",
        simplifiedNumerator: "After cancelling $(x + 3)$, the numerator becomes $(x + 2)$.",
        simplifiedDenominator: "After cancelling $(x + 3)$, the denominator becomes $1$.",
        finalSimplified: "The fraction simplifies to $\\frac{x + 2}{1} = x + 2$.",
        restrictions: "The original denominator $x + 3$ cannot be zero. Solving $x + 3 = 0$ gives $x = -3$. Therefore, $x \\neq -3$."
      },
      hint: "Factor the quadratic numerator. Is there a common binomial factor with the denominator?"
    }
  ]
};


export default function SimplifyingFractionsTool() {
  return (
   <AlgebraMultiStepInteractiveTemplate toolData={simplifyingFractionsData} />
  );
}