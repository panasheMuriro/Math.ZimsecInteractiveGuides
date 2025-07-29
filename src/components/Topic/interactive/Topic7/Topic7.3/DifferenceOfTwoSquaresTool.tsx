
// DifferenceOfTwoSquaresTool.tsx
import MultiStepInteractiveComponent, { InteractiveToolData } from '../../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Difference of Two Squares
const differenceOfTwoSquaresData: InteractiveToolData = {
  title: "Difference of Two Squares",
  description: "Factor expressions that are the difference of two perfect squares using the formula $a^2 - b^2 = (a + b)(a - b)$.",
  theme: {
    primaryColor: 'teal', // Specify the primary color theme
    backgroundColorFrom: 'teal-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'cyan-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "identifySquares",
      title: "Step 1: Identify the Perfect Squares",
      description: "What are the two perfect square terms in the expression?",
      type: "mcq"
    },
    {
      id: "confirmDifference",
      title: "Step 2: Confirm Subtraction (Difference)",
      description: "Is the operation between the two squares subtraction?",
      type: "mcq"
    },
    {
      id: "identifyAandB",
      title: "Step 3: Identify $a$ and $b$",
      description: "Determine the terms $a$ and $b$ such that the expression is $a^2 - b^2$.",
      type: "mcq"
    },
    {
      id: "applyFormula",
      title: "Step 4: Apply the Formula",
      description: "Substitute $a$ and $b$ into the difference of squares formula: $a^2 - b^2 = (a + b)(a - b)$.",
      type: "mcq"
    },
    {
      id: "writeFactoredForm",
      title: "Step 5: Write the Final Factored Form",
      description: "Write the expression as the product of the two binomials found using the formula.",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: x^2 - 9 ---
    {
      identifySquares: [["x^2", "9"], ["x", "3"], ["x^2", "3"], ["x", "9"]],
      confirmDifference: ["Yes", "No", "Addition", "Multiplication"],
      identifyAandB: ["a = x, b = 3", "a = x^2, b = 9", "a = 3, b = x", "a = 9, b = x^2"],
      applyFormula: ["(x + 3)(x - 3)", "(x - 3)(x + 3)", "(x + 3)(x + 3)", "(x - 3)(x - 3)"],
      writeFactoredForm: ["(x + 3)(x - 3)", "(x - 3)(x + 3)", "x^2 - 9", "(x + 3)^2"]
    },
    // --- Problem 2: 4x^2 - 25y^2 ---
    {
      identifySquares: [["4x^2", "25y^2"], ["2x", "5y"], ["4x^2", "5y"], ["2x", "25y^2"]],
      confirmDifference: ["Yes", "No", "Addition", "Multiplication"],
      identifyAandB: ["a = 2x, b = 5y", "a = 4x^2, b = 25y^2", "a = 5y, b = 2x", "a = 25y^2, b = 4x^2"],
      applyFormula: ["(2x + 5y)(2x - 5y)", "(2x - 5y)(2x + 5y)", "(2x + 5y)(2x + 5y)", "(2x - 5y)(2x - 5y)"],
      writeFactoredForm: ["(2x + 5y)(2x - 5y)", "(2x - 5y)(2x + 5y)", "4x^2 - 25y^2", "(2x + 5y)^2"]
    },
    // --- Problem 3: 16a^2 - 81 (Practice Example) ---
    {
      identifySquares: [["16a^2", "81"], ["4a", "9"], ["16a^2", "9"], ["4a", "81"]],
      confirmDifference: ["Yes", "No", "Addition", "Multiplication"],
      identifyAandB: ["a = 4a, b = 9", "a = 16a^2, b = 81", "a = 9, b = 4a", "a = 81, b = 16a^2"],
      applyFormula: ["(4a + 9)(4a - 9)", "(4a - 9)(4a + 9)", "(4a + 9)(4a + 9)", "(4a - 9)(4a - 9)"],
      writeFactoredForm: ["(4a + 9)(4a - 9)", "(4a - 9)(4a + 9)", "16a^2 - 81", "(4a + 9)^2"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: x^2 - 9 ---
    {
      expression: "x^2 - 9",
      solution: {
        identifySquares: ["x^2", "9"],
        confirmDifference: "Yes",
        identifyAandB: "a = x, b = 3",
        applyFormula: "(x + 3)(x - 3)",
        writeFactoredForm: "(x + 3)(x - 3)"
      },
      explanation: {
        identifySquares: "The expression is $x^2 - 9$. We look for terms that are perfect squares. $x^2$ is clearly a perfect square ($(x)^2$). $9$ is also a perfect square because $9 = 3^2$. So the two perfect square terms are $x^2$ and $9$.",
        confirmDifference: "The operation between the two squares $x^2$ and $9$ is subtraction ($-$). This confirms the expression is a difference of two squares.",
        identifyAandB: "We need to express the original expression in the form $a^2 - b^2$. Comparing $x^2 - 9$ to $a^2 - b^2$, we see that $a^2 = x^2$ and $b^2 = 9$. Taking the square root of both sides gives $a = x$ and $b = 3$.",
        applyFormula: "Apply the difference of squares formula: $a^2 - b^2 = (a + b)(a - b)$. Substituting $a = x$ and $b = 3$, we get $x^2 - 9 = (x + 3)(x - 3)$.",
        writeFactoredForm: "The factored form of the expression $x^2 - 9$ is $(x + 3)(x - 3)$."
      },
      hint: "What number squared gives 9? Can you write $x^2$ and $9$ as $(...)^2$? Is there a minus sign between them? If so, use the formula $(a + b)(a - b)$ where $a$ and $b$ are the square roots."
    },
    // --- Problem 2: 4x^2 - 25y^2 ---
    {
      expression: "4x^2 - 25y^2",
      solution: {
        identifySquares: ["4x^2", "25y^2"],
        confirmDifference: "Yes",
        identifyAandB: "a = 2x, b = 5y",
        applyFormula: "(2x + 5y)(2x - 5y)",
        writeFactoredForm: "(2x + 5y)(2x - 5y)"
      },
      explanation: {
        identifySquares: "The expression is $4x^2 - 25y^2$. We look for perfect squares. $4x^2$ can be written as $(2x)^2$, so it's a perfect square. $25y^2$ can be written as $(5y)^2$, so it's also a perfect square. The two perfect square terms are $4x^2$ and $25y^2$.",
        confirmDifference: "The operation between $4x^2$ and $25y^2$ is subtraction ($-$). This confirms the expression is a difference of two squares.",
        identifyAandB: "We need to express $4x^2 - 25y^2$ as $a^2 - b^2$. Comparing, $a^2 = 4x^2 = (2x)^2$ and $b^2 = 25y^2 = (5y)^2$. Taking the square root gives $a = 2x$ and $b = 5y$.",
        applyFormula: "Apply the formula $a^2 - b^2 = (a + b)(a - b)$. Substituting $a = 2x$ and $b = 5y$, we get $4x^2 - 25y^2 = (2x + 5y)(2x - 5y)$.",
        writeFactoredForm: "The factored form of the expression $4x^2 - 25y^2$ is $(2x + 5y)(2x - 5y)$."
      },
      hint: "Can you write the first term $4x^2$ as a square like $(...)^2$? How about the second term $25y^2$? Is it a minus sign between them? Identify $a$ and $b$ as the expressions inside the squares, then apply the formula."
    },
    // --- Problem 3: 16a^2 - 81 ---
    {
      expression: "16a^2 - 81",
      solution: {
        identifySquares: ["16a^2", "81"],
        confirmDifference: "Yes",
        identifyAandB: "a = 4a, b = 9",
        applyFormula: "(4a + 9)(4a - 9)",
        writeFactoredForm: "(4a + 9)(4a - 9)"
      },
      explanation: {
        identifySquares: "The expression is $16a^2 - 81$. Identify the perfect squares. $16a^2$ can be written as $(4a)^2$, making it a perfect square. $81$ can be written as $9^2$, making it a perfect square. The two perfect square terms are $16a^2$ and $81$.",
        confirmDifference: "The operation between $16a^2$ and $81$ is subtraction ($-$). This confirms the expression is a difference of two squares.",
        identifyAandB: "Express $16a^2 - 81$ as $a^2 - b^2$. Comparing, $a^2 = 16a^2 = (4a)^2$ and $b^2 = 81 = 9^2$. Taking the square root gives $a = 4a$ and $b = 9$.",
        applyFormula: "Apply the formula $a^2 - b^2 = (a + b)(a - b)$. Substituting $a = 4a$ and $b = 9$, we get $16a^2 - 81 = (4a + 9)(4a - 9)$.",
        writeFactoredForm: "The factored form of the expression $16a^2 - 81$ is $(4a + 9)(4a - 9)$."
      },
      hint: "What squared gives $16a^2$? What squared gives $81$? Is the operation between them subtraction? Find $a$ and $b$, then plug them into the formula $(a + b)(a - b)$."
    }
  ]
};

export default function DifferenceOfTwoSquaresTool() {
  return (
    <MultiStepInteractiveComponent toolData={differenceOfTwoSquaresData} />
  );
}
