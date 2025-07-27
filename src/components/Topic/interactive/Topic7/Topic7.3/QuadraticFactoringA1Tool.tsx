// QuadraticFactoringA1Tool.tsx
import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData } from '../Templates/AlgebraMultiStepInteractiveTemplate'; // Adjust path as needed

// Define data for Quadratic Factoring (a = 1)
const quadraticFactoringA1Data: InteractiveToolData = {
  title: "Quadratic Factoring (Coefficient = 1)",
  description: "Factor quadratic expressions of the form $x^2 + bx + c$ by finding two numbers that multiply to $c$ and add to $b$.",
  theme: {
    primaryColor: 'indigo', // Specify the primary color theme
    backgroundColorFrom: 'indigo-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'purple-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "identifyBAndC",
      title: "Step 1: Identify $b$ and $c$",
      description: "In the quadratic $x^2 + bx + c$, what are the coefficients $b$ and the constant $c$?",
      type: "mcq"
    },
    {
      id: "listFactorPairs",
      title: "Step 2: List Factor Pairs of $c$",
      description: "List all pairs of integers that multiply to give the constant term $c$.",
      type: "mcq"
    },
    {
      id: "findCorrectPair",
      title: "Step 3: Find the Correct Pair",
      description: "Which pair of factors from the list adds up to the coefficient $b$?",
      type: "mcq"
    },
    {
      id: "writeFactors",
      title: "Step 4: Write the Factors",
      description: "Write the quadratic as a product of two binomials $(x + m)(x + n)$ using the numbers found.",
      type: "mcq"
    },
    {
      id: "checkExpansion",
      title: "Step 5: Check Your Answer",
      description: "Expand the factored form. Does it match the original quadratic expression?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: x^2 + 7x + 12 ---
    {
      identifyBAndC: ["b = 7, c = 12", "b = 1, c = 12", "b = 12, c = 7", "b = 1, c = 7"],
      listFactorPairs: [["1 and 12", "2 and 6", "3 and 4"], ["1 and 7", "2 and 5", "3 and 4"], ["1 and 12", "2 and 6", "4 and 3"], ["12 and 1", "6 and 2", "4 and 3"]],
      findCorrectPair: ["3 and 4", "1 and 12", "2 and 6", "6 and 2"],
      writeFactors: ["(x + 3)(x + 4)", "(x + 1)(x + 12)", "(x + 2)(x + 6)", "(x + 6)(x + 2)"],
      checkExpansion: ["Yes, (x + 3)(x + 4) = x^2 + 7x + 12", "No", "(x + 3)(x + 4) = x^2 + 12", "(x + 3) + (x + 4) = 2x + 7"]
    },
    // --- Problem 2: x^2 - 5x + 6 ---
    {
      identifyBAndC: ["b = -5, c = 6", "b = 5, c = 6", "b = 1, c = 6", "b = 6, c = -5"],
      listFactorPairs: [["1 and 6", "2 and 3", "-1 and -6", "-2 and -3"], ["1 and 6", "2 and 3"], ["1 and -6", "2 and -3", "-1 and 6", "-2 and 3"], ["6 and 1", "3 and 2", "-6 and -1", "-3 and -2"]],
      findCorrectPair: ["-2 and -3", "1 and 6", "2 and 3", "-1 and -6"],
      writeFactors: ["(x - 2)(x - 3)", "(x + 1)(x + 6)", "(x + 2)(x + 3)", "(x - 1)(x - 6)"],
      checkExpansion: ["Yes, (x - 2)(x - 3) = x^2 - 5x + 6", "No", "(x - 2)(x - 3) = x^2 + 6", "(x - 2) + (x - 3) = 2x - 5"]
    },
    // --- Problem 3: x^2 + 8x + 15 (Practice Example) ---
    {
      identifyBAndC: ["b = 8, c = 15", "b = 1, c = 15", "b = 15, c = 8", "b = 1, c = 8"],
      listFactorPairs: [["1 and 15", "3 and 5"], ["1 and 8", "2 and 6", "3 and 5"], ["1 and 15", "5 and 3"], ["15 and 1", "5 and 3"]],
      findCorrectPair: ["3 and 5", "1 and 15", "5 and 3", "15 and 1"],
      writeFactors: ["(x + 3)(x + 5)", "(x + 1)(x + 15)", "(x + 5)(x + 3)", "(x + 15)(x + 1)"],
      checkExpansion: ["Yes, (x + 3)(x + 5) = x^2 + 8x + 15", "No", "(x + 3)(x + 5) = x^2 + 15", "(x + 3) + (x + 5) = 2x + 8"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: x^2 + 7x + 12 ---
    {
      expression: "x^2 + 7x + 12",
      solution: {
        identifyBAndC: "b = 7, c = 12",
        listFactorPairs: ["1 and 12", "2 and 6", "3 and 4"],
        findCorrectPair: "3 and 4",
        writeFactors: "(x + 3)(x + 4)",
        checkExpansion: "Yes, (x + 3)(x + 4) = x^2 + 7x + 12"
      },
      explanation: {
        identifyBAndC: "The quadratic is in the standard form $x^2 + bx + c$. Comparing $x^2 + 7x + 12$ to this form, the coefficient of $x$ (which is $b$) is $7$, and the constant term (which is $c$) is $12$.",
        listFactorPairs: "We need to find two numbers that multiply to $c = 12$. The factor pairs of $12$ are: $1 \\times 12 = 12$, $2 \\times 6 = 12$, and $3 \\times 4 = 12$. So the pairs are $(1, 12)$, $(2, 6)$, and $(3, 4)$.",
        findCorrectPair: "Now we check which of these pairs adds up to $b = 7$. Calculate the sum for each pair: $1 + 12 = 13$, $2 + 6 = 8$, $3 + 4 = 7$. The pair $(3, 4)$ adds up to $7$.",
        writeFactors: "We have found the two numbers, $m = 3$ and $n = 4$, such that $m \\times n = 12$ and $m + n = 7$. The factored form is $(x + m)(x + n)$, which gives us $(x + 3)(x + 4)$.",
        checkExpansion: "To verify, expand the factored form $(x + 3)(x + 4)$ using the FOIL method or the distributive property: $(x + 3)(x + 4) = x \\cdot x + x \\cdot 4 + 3 \\cdot x + 3 \\cdot 4 = x^2 + 4x + 3x + 12 = x^2 + 7x + 12$. This matches the original expression, confirming the factorization is correct."
      },
      hint: "What number is the coefficient of $x$? What number is the constant term? List all pairs of numbers that multiply to give the constant term. Which pair adds up to the coefficient of $x$?"
    },
    // --- Problem 2: x^2 - 5x + 6 ---
    {
      expression: "x^2 - 5x + 6",
      solution: {
        identifyBAndC: "b = -5, c = 6",
        listFactorPairs: ["1 and 6", "2 and 3", "-1 and -6", "-2 and -3"],
        findCorrectPair: "-2 and -3",
        writeFactors: "(x - 2)(x - 3)",
        checkExpansion: "Yes, (x - 2)(x - 3) = x^2 - 5x + 6"
      },
      explanation: {
        identifyBAndC: "The quadratic is $x^2 - 5x + 6$. Comparing to $x^2 + bx + c$, the coefficient of $x$ is $b = -5$, and the constant term is $c = 6$.",
        listFactorPairs: "Find pairs of integers that multiply to $c = 6$. The factor pairs are: $1 \\times 6 = 6$, $2 \\times 3 = 6$, $(-1) \\times (-6) = 6$, and $(-2) \\times (-3) = 6$. So the pairs are $(1, 6)$, $(2, 3)$, $(-1, -6)$, and $(-2, -3)$.",
        findCorrectPair: "Check which pair adds up to $b = -5$. Calculate the sums: $1 + 6 = 7$, $2 + 3 = 5$, $(-1) + (-6) = -7$, $(-2) + (-3) = -5$. The pair $(-2, -3)$ adds up to $-5$.",
        writeFactors: "The two numbers are $m = -2$ and $n = -3$. The factored form is $(x + m)(x + n) = (x + (-2))(x + (-3))$. This simplifies to $(x - 2)(x - 3)$.",
        checkExpansion: "Expand $(x - 2)(x - 3)$: $(x - 2)(x - 3) = x^2 - 3x - 2x + (-2)(-3) = x^2 - 5x + 6$. This matches the original expression, confirming the factorization."
      },
      hint: "Identify $b$ (the coefficient of $x$) and $c$ (the constant). Don't forget the negative sign on $b$. List all factor pairs of $c$, including negative pairs. Which pair adds up to $b$? Remember that subtracting a number is the same as adding its negative."
    },
    // --- Problem 3: x^2 + 8x + 15 ---
    {
      expression: "x^2 + 8x + 15",
      solution: {
        identifyBAndC: "b = 8, c = 15",
        listFactorPairs: ["1 and 15", "3 and 5"],
        findCorrectPair: "3 and 5",
        writeFactors: "(x + 3)(x + 5)",
        checkExpansion: "Yes, (x + 3)(x + 5) = x^2 + 8x + 15"
      },
      explanation: {
        identifyBAndC: "The quadratic is $x^2 + 8x + 15$. Comparing to $x^2 + bx + c$, we have $b = 8$ and $c = 15$.",
        listFactorPairs: "Find pairs of integers that multiply to $c = 15$. The factor pairs are: $1 \\times 15 = 15$ and $3 \\times 5 = 15$. So the pairs are $(1, 15)$ and $(3, 5)$.",
        findCorrectPair: "Check which pair adds up to $b = 8$. Calculate the sums: $1 + 15 = 16$, $3 + 5 = 8$. The pair $(3, 5)$ adds up to $8$.",
        writeFactors: "The two numbers are $m = 3$ and $n = 5$. The factored form is $(x + m)(x + n) = (x + 3)(x + 5)$.",
        checkExpansion: "Expand $(x + 3)(x + 5)$: $(x + 3)(x + 5) = x^2 + 5x + 3x + 3 \\times 5 = x^2 + 8x + 15$. This matches the original expression, confirming the factorization is correct."
      },
      hint: "What is the coefficient of $x$ (that's $b$)? What is the constant term (that's $c$)? List the factor pairs of $c$. Which pair gives the sum $b$? Use those numbers to write the factors $(x + ...)(x + ...)$."
    }
  ]
};

export default function QuadraticFactoringA1Tool() {
  return (
    <AlgebraMultiStepInteractiveTemplate toolData={quadraticFactoringA1Data} />
  );
}
