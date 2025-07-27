// QuadraticFactoringANot1Tool.tsx
import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData } from '../Templates/AlgebraMultiStepInteractiveTemplate'; // Adjust path as needed

// Define data for Quadratic Factoring (a ≠ 1)
const quadraticFactoringANot1Data: InteractiveToolData = {
  title: "Quadratic Factoring (Coefficient ≠ 1)",
  description: "Factor quadratic expressions of the form $ax^2 + bx + c$ (where $a \
eq 1$) by splitting the middle term.",
  theme: {
    primaryColor: 'purple', // Specify the primary color theme
    backgroundColorFrom: 'indigo-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'purple-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "multiplyAC",
      title: "Step 1: Calculate $a \\times c$",
      description: "Multiply the coefficient of $x^2$ ($a$) by the constant term ($c$).",
      type: "mcq"
    },
    {
      id: "findFactorsOfAC",
      title: "Step 2: Find Factors of $a \\times c$",
      description: "Find two numbers that multiply to give $a \\times c$ and add up to the coefficient of $x$ ($b$).",
      type: "mcq"
    },
    {
      id: "splitMiddleTerm",
      title: "Step 3: Split the Middle Term",
      description: "Rewrite the quadratic expression by replacing the middle term $bx$ with the sum of the two numbers found, expressed as terms with $x$.",
      type: "mcq"
    },
    {
      id: "groupTerms",
      title: "Step 4: Group Terms into Pairs",
      description: "Group the first two terms together and the last two terms together.",
      type: "mcq"
    },
    {
      id: "factorPairs",
      title: "Step 5: Factor Each Group",
      description: "Factor out the Greatest Common Factor (GCF) from each group.",
      type: "mcq"
    },
    {
      id: "factorCommonBinomial",
      title: "Step 6: Factor Out Common Binomial",
      description: "Factor out the common binomial factor from the resulting expression.",
      type: "mcq"
    },
    {
      id: "checkExpansion",
      title: "Step 7: Check Your Answer",
      description: "Expand the factored form. Does it match the original quadratic expression?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: 2x^2 + 7x + 3 ---
    {
      multiplyAC: ["6", "5", "21", "3"],
      findFactorsOfAC: ["6 and 1", "3 and 2", "7 and 1", "6 and 0"],
      splitMiddleTerm: ["2x^2 + 6x + x + 3", "2x^2 + 7x + 3", "2x^2 + 1x + 6x + 3", "2x^2 + 3x + 4x + 3"],
      groupTerms: ["(2x^2 + 6x) + (x + 3)", "(2x^2 + x) + (6x + 3)", "(2x^2 + 3) + (6x + x)", "(2x^2 + 7x) + (3)"],
      factorPairs: ["2x(x + 3) + 1(x + 3)", "x(2x + 1) + 3(2x + 1)", "2x(x + 3) + 1(x + 3)", "2x^2 + x + 6x + 3"],
      factorCommonBinomial: ["(2x + 1)(x + 3)", "(x + 3)(2x + 1)", "(2x + 1)(x + 3)", "2x + 1 + x + 3"],
      checkExpansion: ["Yes, (2x + 1)(x + 3) = 2x^2 + 7x + 3", "No", "(2x + 1)(x + 3) = 2x^2 + 3", "(2x + 1) + (x + 3) = 3x + 4"]
    },
    // --- Problem 2: 3x^2 + 11x + 6 (Practice Example) ---
    {
      multiplyAC: ["18", "9", "33", "6"],
      findFactorsOfAC: ["9 and 2", "6 and 3", "11 and 1", "18 and 1"],
      splitMiddleTerm: ["3x^2 + 9x + 2x + 6", "3x^2 + 11x + 6", "3x^2 + 6x + 5x + 6", "3x^2 + 2x + 9x + 6"],
      groupTerms: ["(3x^2 + 9x) + (2x + 6)", "(3x^2 + 2x) + (9x + 6)", "(3x^2 + 6) + (9x + 2x)", "(3x^2 + 11x) + (6)"],
      factorPairs: ["3x(x + 3) + 2(x + 3)", "x(3x + 2) + 3(3x + 2)", "3x(x + 3) + 2(x + 3)", "3x^2 + 2x + 9x + 6"],
      factorCommonBinomial: ["(3x + 2)(x + 3)", "(x + 3)(3x + 2)", "(3x + 2)(x + 3)", "3x + 2 + x + 3"],
      checkExpansion: ["Yes, (3x + 2)(x + 3) = 3x^2 + 11x + 6", "No", "(3x + 2)(x + 3) = 3x^2 + 6", "(3x + 2) + (x + 3) = 4x + 5"]
    },
    // --- Problem 3: 6x^2 + 5x - 6 ---
    {
      multiplyAC: ["-36", "36", "-1", "5"],
      findFactorsOfAC: ["9 and -4", "-9 and 4", "12 and -3", "-12 and 3"],
      splitMiddleTerm: ["6x^2 + 9x - 4x - 6", "6x^2 + 5x - 6", "6x^2 - 4x + 9x - 6", "6x^2 + 12x - 7x - 6"],
      groupTerms: ["(6x^2 + 9x) + (-4x - 6)", "(6x^2 - 4x) + (9x - 6)", "(6x^2 - 6) + (9x - 4x)", "(6x^2 + 5x) + (-6)"],
      factorPairs: ["3x(2x + 3) - 2(2x + 3)", "2x(3x - 2) + 3(3x - 2)", "3x(2x + 3) - 2(2x + 3)", "6x^2 - 4x + 9x - 6"],
      factorCommonBinomial: ["(3x - 2)(2x + 3)", "(2x + 3)(3x - 2)", "(3x - 2)(2x + 3)", "3x - 2 + 2x + 3"],
      checkExpansion: ["Yes, (3x - 2)(2x + 3) = 6x^2 + 5x - 6", "No", "(3x - 2)(2x + 3) = 6x^2 - 6", "(3x - 2) + (2x + 3) = 5x + 1"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: 2x^2 + 7x + 3 ---
    {
      expression: "2x^2 + 7x + 3",
      solution: {
        multiplyAC: "6", // a=2, c=3
        findFactorsOfAC: "6 and 1", // 6*1=6, 6+1=7
        splitMiddleTerm: "2x^2 + 6x + x + 3", // Replace 7x with 6x + 1x
        groupTerms: "(2x^2 + 6x) + (x + 3)", // Group first two, last two
        factorPairs: "2x(x + 3) + 1(x + 3)", // Factor GCF from each group
        factorCommonBinomial: "(2x + 1)(x + 3)", // Factor out (x+3)
        checkExpansion: "Yes, (2x + 1)(x + 3) = 2x^2 + 7x + 3" // Verification
      },
      explanation: {
        multiplyAC: "Identify the coefficients in the quadratic $ax^2 + bx + c$. Here, $a = 2$, $b = 7$, and $c = 3$. Calculate the product $a \\times c = 2 \\times 3 = 6$.",
        findFactorsOfAC: "We need two numbers that multiply to $a \\times c = 6$ and add up to $b = 7$. List the factor pairs of $6$: $1 \\times 6 = 6$ and $2 \\times 3 = 6$. Check the sums: $1 + 6 = 7$ and $2 + 3 = 5$. The pair $1$ and $6$ satisfies both conditions.",
        splitMiddleTerm: "Use the two numbers found ($1$ and $6$) to split the middle term $7x$. Write $7x$ as $1x + 6x$. The expression becomes $2x^2 + 1x + 6x + 3$, which is typically written as $2x^2 + 6x + x + 3$.",
        groupTerms: "Group the terms into two pairs: the first two terms and the last two terms. This gives $(2x^2 + 6x) + (x + 3)$.",
        factorPairs: "Factor out the Greatest Common Factor (GCF) from each group. From the first group $(2x^2 + 6x)$, the GCF is $2x$, so $2x^2 + 6x = 2x(x + 3)$. From the second group $(x + 3)$, the GCF is $1$, so $x + 3 = 1(x + 3)$. The expression is now $2x(x + 3) + 1(x + 3)$.",
        factorCommonBinomial: "Notice that both terms $2x(x + 3)$ and $1(x + 3)$ have a common factor of $(x + 3)$. Factor this out: $(x + 3)(2x + 1)$. This can also be written as $(2x + 1)(x + 3)$.",
        checkExpansion: "To verify, expand the factored form $(2x + 1)(x + 3)$ using the FOIL method: First $(2x \\times x = 2x^2)$, Outer $(2x \\times 3 = 6x)$, Inner $(1 \\times x = x)$, Last $(1 \\times 3 = 3)$. Combine like terms: $2x^2 + 6x + x + 3 = 2x^2 + 7x + 3$. This matches the original expression, confirming the factorization is correct."
      },
      hint: "Start by multiplying $a$ and $c$. Then, find two numbers that multiply to that product and add up to $b$. Use those numbers to rewrite the middle term. Group the terms and factor out the GCF from each group. Finally, factor out the common binomial."
    },
    // --- Problem 2: 3x^2 + 11x + 6 ---
    {
      expression: "3x^2 + 11x + 6",
      solution: {
        multiplyAC: "18", // a=3, c=6
        findFactorsOfAC: "9 and 2", // 9*2=18, 9+2=11
        splitMiddleTerm: "3x^2 + 9x + 2x + 6", // Replace 11x with 9x + 2x
        groupTerms: "(3x^2 + 9x) + (2x + 6)", // Group first two, last two
        factorPairs: "3x(x + 3) + 2(x + 3)", // Factor GCF from each group
        factorCommonBinomial: "(3x + 2)(x + 3)", // Factor out (x+3)
        checkExpansion: "Yes, (3x + 2)(x + 3) = 3x^2 + 11x + 6" // Verification
      },
      explanation: {
        multiplyAC: "Identify the coefficients: $a = 3$, $b = 11$, $c = 6$. Calculate $a \\times c = 3 \\times 6 = 18$.",
        findFactorsOfAC: "Find two numbers that multiply to $18$ and add to $11$. Factor pairs of $18$: $1 \\times 18$, $2 \\times 9$, $3 \\times 6$. Check sums: $1 + 18 = 19$, $2 + 9 = 11$, $3 + 6 = 9$. The pair $2$ and $9$ works.",
        splitMiddleTerm: "Split the middle term $11x$ into $2x + 9x$. The expression becomes $3x^2 + 9x + 2x + 6$.",
        groupTerms: "Group the terms: $(3x^2 + 9x) + (2x + 6)$.",
        factorPairs: "Factor the GCF from each group. First group $(3x^2 + 9x)$: GCF is $3x$, so $3x(x + 3)$. Second group $(2x + 6)$: GCF is $2$, so $2(x + 3)$. The expression is now $3x(x + 3) + 2(x + 3)$.",
        factorCommonBinomial: "Factor out the common binomial $(x + 3)$: $(x + 3)(3x + 2)$, which is $(3x + 2)(x + 3)$.",
        checkExpansion: "Expand $(3x + 2)(x + 3)$: $3x \\times x = 3x^2$, $3x \\times 3 = 9x$, $2 \\times x = 2x$, $2 \\times 3 = 6$. Combine: $3x^2 + 9x + 2x + 6 = 3x^2 + 11x + 6$. This matches the original expression."
      },
      hint: "Multiply $a$ and $c$ (3 * 6). Find two numbers that multiply to that result (18) and add to $b$ (11). Use those numbers to split the $x$ term. Group, factor each group, then factor out the common binomial."
    },
    // --- Problem 3: 6x^2 + 5x - 6 ---
    {
      expression: "6x^2 + 5x - 6",
      solution: {
        multiplyAC: "-36", // a=6, c=-6
        findFactorsOfAC: "9 and -4", // 9*(-4)=-36, 9+(-4)=5
        splitMiddleTerm: "6x^2 + 9x - 4x - 6", // Replace 5x with 9x - 4x
        groupTerms: "(6x^2 + 9x) + (-4x - 6)", // Group first two, last two
        factorPairs: "3x(2x + 3) - 2(2x + 3)", // Factor GCF from each group (note the - sign)
        factorCommonBinomial: "(3x - 2)(2x + 3)", // Factor out (2x+3)
        checkExpansion: "Yes, (3x - 2)(2x + 3) = 6x^2 + 5x - 6" // Verification
      },
      explanation: {
        multiplyAC: "Identify the coefficients: $a = 6$, $b = 5$, $c = -6$. Calculate $a \\times c = 6 \\times (-6) = -36$.",
        findFactorsOfAC: "Find two numbers that multiply to $-36$ and add to $5$. We need one positive and one negative factor. Factor pairs (considering signs): $1 \\times -36$, $-1 \\times 36$, $2 \\times -18$, $-2 \\times 18$, $3 \\times -12$, $-3 \\times 12$, $4 \\times -9$, $-4 \\times 9$, $6 \\times -6$, $-6 \\times 6$. Check sums: $1 + (-36) = -35$, $-1 + 36 = 35$, ..., $-4 + 9 = 5$. The pair $-4$ and $9$ works.",
        splitMiddleTerm: "Split the middle term $5x$ into $9x + (-4x)$ or $9x - 4x$. The expression becomes $6x^2 + 9x - 4x - 6$.",
        groupTerms: "Group the terms: $(6x^2 + 9x) + (-4x - 6)$.",
        factorPairs: "Factor the GCF from each group. First group $(6x^2 + 9x)$: GCF is $3x$, so $3x(2x + 3)$. Second group $(-4x - 6)$: GCF is $-2$, so $-2(2x + 3)$. The expression is now $3x(2x + 3) - 2(2x + 3)$.",
        factorCommonBinomial: "Factor out the common binomial $(2x + 3)$: $(2x + 3)(3x - 2)$, which is $(3x - 2)(2x + 3)$.",
        checkExpansion: "Expand $(3x - 2)(2x + 3)$: $3x \\times 2x = 6x^2$, $3x \\times 3 = 9x$, $-2 \\times 2x = -4x$, $-2 \\times 3 = -6$. Combine: $6x^2 + 9x - 4x - 6 = 6x^2 + 5x - 6$. This matches the original expression."
      },
      hint: "Calculate $a \\times c$ (6 * -6 = -36). Find two numbers that multiply to -36 and add to $b$ (5). Remember, one factor must be positive and one negative. Use these numbers to split the middle term. Group, factor out the GCF from each group (pay attention to signs), then factor out the common binomial."
    }
  ]
};

export default function QuadraticFactoringANot1Tool() {
  return (
    <AlgebraMultiStepInteractiveTemplate toolData={quadraticFactoringANot1Data} />
  );
}