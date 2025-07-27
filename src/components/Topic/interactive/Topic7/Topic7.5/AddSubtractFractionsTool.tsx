const addSubtractFractionsData: InteractiveToolData = {
  title: "Simplifying Basic Fractions",
  description: "",
   theme: {
    primaryColor: "green", // e.g., "indigo", "blue", "green"
    backgroundColorFrom: "green-50", // e.g., "indigo-50", "blue-50"
    backgroundColorTo: "green-100", // e.g., "purple-100", "blue-100"
  },
  steps: [
    {
      id: "denominators",
      title: "Step 1: Identify Denominators",
      description: "List the denominators of the fractions:",
     type: "mcq"
    },
    {
      id: "lcm",
      title: "Step 2: Find the Least Common Multiple (LCM)",
      description: "What is the LCM of the denominators?",
     type: "mcq"
    },
    {
      id: "rewrittenFractions",
      title: "Step 3: Rewrite Fractions with Common Denominator",
      description: "Rewrite each fraction so they all have the LCM as their denominator:",
     type: "mcq"
    },
    {
      id: "combinedNumerator",
      title: "Step 4: Combine the Numerators",
      description: `Form the new numerator by adding/subtracting the numerators of the rewritten fractions:`,
     type: "mcq"
    },
    {
      id: "expandedNumerator",
      title: "Step 5: Simplify the Numerator",
      description: "Expand and simplify the combined numerator if necessary:",
     type: "mcq"
    },
    {
      id: "finalSimplified",
      title: "Step 6: Write the Final Fraction",
      description: "Place the simplified numerator over the common denominator:",
     type: "mcq"
    },
    {
      id: "restrictions",
      title: "Final Check: State Restrictions",
      description: "List any values that would make the original denominators zero:",
     type: "mcq"
    }
  ],
  mcqOptionsPerProblem:  [
    // Problem 1: \frac{2}{x} + \frac{3}{2x}
    {
      denominators: [["x", "2x"], ["2", "x"], ["1", "2x"], ["x", "2"]],
      lcm: ["2x", "x", "2", "2x^2"],
      rewrittenFractions: [["\\frac{4}{2x}", "\\frac{3}{2x}"], ["\\frac{2}{2x}", "\\frac{3}{2x}"], ["\\frac{4}{x}", "\\frac{3}{2x}"], ["\\frac{1}{2x}", "\\frac{3}{2x}"]],
      combinedNumerator: ["4 + 3", "2 + 3", "4 - 3", "3 + 4"],
      expandedNumerator: ["7", "5", "1", "12"],
      finalSimplified: ["\\frac{7}{2x}", "\\frac{5}{2x}", "\\frac{7}{x}", "\\frac{1}{2x}"],
      restrictions: [["x \\neq 0"], ["x > 0"], ["x \\neq 2"], []]
    },
    // Problem 2: \frac{x+1}{x-2} - \frac{x-3}{x+1}
    {
      denominators: [["x-2", "x+1"], ["x+1", "x-2"], ["x", "-2"], ["x", "1"]],
      lcm: ["(x-2)(x+1)", "(x-2)+(x+1)", "x^2-1", "x^2-4"],
      rewrittenFractions: [["\\frac{(x+1)(x+1)}{(x-2)(x+1)}", "\\frac{(x-3)(x-2)}{(x-2)(x+1)}"], ["\\frac{(x+1)}{(x-2)(x+1)}", "\\frac{(x-3)}{(x-2)(x+1)}"], ["\\frac{(x+1)^2}{(x-2)(x+1)}", "\\frac{(x-3)^2}{(x-2)(x+1)}"], ["\\frac{x+1}{x-2}", "\\frac{x-3}{x+1}"]],
      combinedNumerator: ["(x+1)^2 - (x-3)(x-2)", "(x+1) - (x-3)", "(x+1)^2 + (x-3)(x-2)", "(x+1)(x-2) - (x-3)(x+1)"],
      expandedNumerator: ["7x - 5", "x^2 - 5x + 6", "2x^2 - x - 5", "4x + 7"],
      finalSimplified: ["\\frac{7x - 5}{(x-2)(x+1)}", "\\frac{x^2 - 5x + 6}{(x-2)(x+1)}", "\\frac{2x^2 - x - 5}{(x-2)(x+1)}", "\\frac{4x + 7}{(x-2)(x+1)}"],
      restrictions: [["x \\neq 2", "x \\neq -1"], ["x \\neq 2"], ["x \\neq -1"], []]
    },
    // Problem 3: \frac{3}{a} + \frac{2}{a^2}
    {
      denominators: [["a", "a^2"], ["3", "2"], ["1", "a^2"], ["a", "2"]],
      lcm: ["a^2", "a", "a^3", "2a^2"],
      rewrittenFractions: [["\\frac{3a}{a^2}", "\\frac{2}{a^2}"], ["\\frac{3}{a^2}", "\\frac{2}{a^2}"], ["\\frac{3a}{a}", "\\frac{2}{a^2}"], ["\\frac{3}{a}", "\\frac{2a}{a^2}"]],
      combinedNumerator: ["3a + 2", "3 + 2", "3a - 2", "5a"],
      expandedNumerator: ["3a + 2", "5", "3a - 2", "5a"],
      finalSimplified: ["\\frac{3a + 2}{a^2}", "\\frac{5}{a^2}", "\\frac{3a - 2}{a^2}", "\\frac{3a + 2}{a}"],
      restrictions: [["a \\neq 0"], ["a > 0"], ["a \\neq 2"], []]
    },
    // Problem 4: \frac{1}{x} - \frac{2}{x+1}
    {
        denominators: [["x", "x+1"], ["1", "x+1"], ["x", "1"], ["1", "x"]],
        lcm: ["x(x+1)", "x+x+1", "x+1", "x"],
        rewrittenFractions: [["\\frac{x+1}{x(x+1)}", "\\frac{2x}{x(x+1)}"], ["\\frac{1}{x(x+1)}", "\\frac{2}{x(x+1)}"], ["\\frac{x+1}{x}", "\\frac{2x}{x+1}"], ["\\frac{1(x+1)}{x(x+1)}", "\\frac{2x}{x(x+1)}"]],
        combinedNumerator: ["(x+1) - 2x", "1 - 2", "x - 2x", "1 - 2x"],
        expandedNumerator: ["1 - x", "-x + 1", "-1", "1 - 2x"],
        finalSimplified: ["\\frac{1 - x}{x(x+1)}", "\\frac{-x + 1}{x(x+1)}", "\\frac{1 - x}{x}", "\\frac{1 - 2x}{x(x+1)}"],
        restrictions: [["x \\neq 0", "x \\neq -1"], ["x \\neq 0"], ["x \\neq -1"], []]
      }
  ],
  practiceProblems:  [
    {
      expression: "\\frac{2}{x} + \\frac{3}{2x}",
      // operation: 'add',
      solution: {
        denominators: ["x", "2x"],
        lcm: "2x",
        rewrittenFractions: ["\\frac{4}{2x}", "\\frac{3}{2x}"],
        combinedNumerator: "4 + 3",
        expandedNumerator: "7",
        finalSimplified: "\\frac{7}{2x}",
        restrictions: ["x \\neq 0"]
      },
      explanation: {
        denominators: "The denominators of the fractions are $x$ and $2x$.",
        lcm: "The LCM of $x$ and $2x$ is the smallest expression that both divide into evenly. Since $2x = 2 \\times x$, the LCM is $2x$.",
        rewrittenFractions: "Rewrite each fraction with the common denominator $2x$. For $\\frac{2}{x}$, multiply top and bottom by $2$: $\\frac{2 \\times 2}{x \\times 2} = \\frac{4}{2x}$. The second fraction is already over $2x$.",
        combinedNumerator: "Now that the denominators are the same, add the numerators: $4 + 3$.",
        expandedNumerator: "Calculate the sum in the numerator: $4 + 3 = 7$.",
        finalSimplified: "Combine the result over the common denominator: $\\frac{7}{2x}$.",
        restrictions: "The original denominators $x$ and $2x$ are undefined when $x = 0$. Therefore, $x \\neq 0$."
      },
      hint: "What is the Least Common Multiple of the denominators $x$ and $2x$? How do you rewrite each fraction with this common denominator?"
    },
    {
      expression: "\\frac{x+1}{x-2} - \\frac{x-3}{x+1}",
      // operation: 'subtract',
      solution: {
        denominators: ["x-2", "x+1"],
        lcm: "(x-2)(x+1)",
        rewrittenFractions: ["\\frac{(x+1)(x+1)}{(x-2)(x+1)}", "\\frac{(x-3)(x-2)}{(x-2)(x+1)}"],
        combinedNumerator: "(x+1)^2 - (x-3)(x-2)",
        expandedNumerator: "7x - 5",
        finalSimplified: "\\frac{7x - 5}{(x-2)(x+1)}",
        restrictions: ["x \\neq 2", "x \\neq -1"]
      },
      explanation: {
        denominators: "The denominators of the fractions are $x-2$ and $x+1$.",
        lcm: "The denominators $x-2$ and $x+1$ share no common factors. The LCM is their product: $(x-2)(x+1)$.",
        rewrittenFractions: "Rewrite each fraction with the common denominator $(x-2)(x+1)$. For $\\frac{x+1}{x-2}$, multiply top and bottom by $(x+1)$: $\\frac{(x+1)(x+1)}{(x-2)(x+1)}$. For $\\frac{x-3}{x+1}$, multiply top and bottom by $(x-2)$: $\\frac{(x-3)(x-2)}{(x-2)(x+1)}$.",
        combinedNumerator: "Now that the denominators are the same, subtract the numerators: $(x+1)^2 - (x-3)(x-2)$.",
        expandedNumerator: "Expand the numerator: $(x+1)^2 = x^2 + 2x + 1$, $(x-3)(x-2) = x^2 - 5x + 6$. Subtract: $(x^2 + 2x + 1) - (x^2 - 5x + 6) = x^2 + 2x + 1 - x^2 + 5x - 6 = 7x - 5$.",
        finalSimplified: "Combine the result over the common denominator: $\\frac{7x - 5}{(x-2)(x+1)}$.",
        restrictions: "The original denominators $x-2$ and $x+1$ are undefined when $x = 2$ and $x = -1$ respectively. Therefore, $x \\neq 2$ and $x \\neq -1$."
      },
      hint: "The denominators $x-2$ and $x+1$ have no common factors. What is their LCM? How do you adjust each fraction to have this denominator?"
    },
    {
      expression: "\\frac{3}{a} + \\frac{2}{a^2}", // From the example
      // operation: 'add',
      solution: {
        denominators: ["a", "a^2"],
        lcm: "a^2",
        rewrittenFractions: ["\\frac{3a}{a^2}", "\\frac{2}{a^2}"],
        combinedNumerator: "3a + 2",
        expandedNumerator: "3a + 2", // Already expanded
        finalSimplified: "\\frac{3a + 2}{a^2}",
        restrictions: ["a \\neq 0"]
      },
      explanation: {
        denominators: "The denominators of the fractions are $a$ and $a^2$.",
        lcm: "To find the LCM, take the highest power of each prime factor. The factors are $a^1$ and $a^2$. The LCM is $a^2$.",
        rewrittenFractions: "Rewrite each fraction with the common denominator $a^2$. For $\\frac{3}{a}$, multiply top and bottom by $a$: $\\frac{3 \\times a}{a \\times a} = \\frac{3a}{a^2}$. The second fraction is already over $a^2$.",
        combinedNumerator: "Now that the denominators are the same, add the numerators: $3a + 2$.",
        expandedNumerator: "The numerator $3a + 2$ is already fully expanded.",
        finalSimplified: "Combine the result over the common denominator: $\\frac{3a + 2}{a^2}$.",
        restrictions: "The original denominators $a$ and $a^2$ are undefined when $a = 0$. Therefore, $a \\neq 0$."
      },
      hint: "One denominator is $a$ and the other is $a^2$. What is the smallest expression that both divide into? How do you adjust the first fraction?"
    },
    {
      expression: "\\frac{1}{x} - \\frac{2}{x+1}", // New problem
      // operation: 'subtract',
      solution: {
        denominators: ["x", "x+1"],
        lcm: "x(x+1)",
        rewrittenFractions: ["\\frac{x+1}{x(x+1)}", "\\frac{2x}{x(x+1)}"],
        combinedNumerator: "(x+1) - 2x",
        expandedNumerator: "1 - x",
        finalSimplified: "\\frac{1 - x}{x(x+1)}",
        restrictions: ["x \\neq 0", "x \\neq -1"]
      },
      explanation: {
        denominators: "The denominators of the fractions are $x$ and $x+1$.",
        lcm: "The denominators $x$ and $x+1$ share no common factors. The LCM is their product: $x(x+1)$.",
        rewrittenFractions: "Rewrite each fraction with the common denominator $x(x+1)$. For $\\frac{1}{x}$, multiply top and bottom by $(x+1)$: $\\frac{1 \\times (x+1)}{x \\times (x+1)} = \\frac{x+1}{x(x+1)}$. For $\\frac{2}{x+1}$, multiply top and bottom by $x$: $\\frac{2 \\times x}{(x+1) \\times x} = \\frac{2x}{x(x+1)}$.",
        combinedNumerator: "Now that the denominators are the same, subtract the numerators: $(x+1) - 2x$.",
        expandedNumerator: "Simplify the numerator: $(x+1) - 2x = x + 1 - 2x = 1 - x$.",
        finalSimplified: "Combine the result over the common denominator: $\\frac{1 - x}{x(x+1)}$.",
        restrictions: "The original denominators $x$ and $x+1$ are undefined when $x = 0$ and $x = -1$ respectively. Therefore, $x \\neq 0$ and $x \\neq -1$."
      },
      hint: "The denominators $x$ and $x+1$ are different and share no common factors. What is their LCM? How do you rewrite each fraction?"
    }
  ]
};

import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData } from '../Templates/AlgebraMultiStepInteractiveTemplate';
export default function AddSubtractFractionsTool() {
  return <AlgebraMultiStepInteractiveTemplate toolData={addSubtractFractionsData} />
}
