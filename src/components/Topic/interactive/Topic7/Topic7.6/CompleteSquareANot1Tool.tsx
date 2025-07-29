// CompleteSquareANot1Tool.tsx
import MultiStepInteractiveComponent, { InteractiveToolData } from '../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Completing the Square (a ≠ 1)
const completeSquareANot1Data: InteractiveToolData = {
  title: "Completing the Square (Coefficient ≠ 1)",
  description: "Transform quadratic expressions of the form $ax^2 + bx + c$ (where $a \
eq 1$) into perfect square form $a(x + h)^2 + k$.",
  theme: {
    primaryColor: 'rose', // Specify the primary color theme
    backgroundColorFrom: 'rose-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'pink-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "factoredForm",
      title: "Step 1: Factor out the Coefficient $a$",
      description: "Factor the coefficient of $x^2$ out of the first two terms.",
      type: "mcq"
    },
    {
      id: "linearCoefficientOverA",
      title: "Step 2: Identify $\\frac{b}{a}$",
      description: "What is the coefficient of $x$ inside the parentheses after factoring?",
      type: "mcq"
    },
    {
      id: "halfBOverAValue",
      title: "Step 3: Calculate Half of $\\frac{b}{a}$",
      description: "Take the coefficient found in the previous step and divide it by 2.",
      type: "mcq"
    },
    {
      id: "halfBOverASquaredValue",
      title: "Step 4: Square Half of $\\frac{b}{a}$",
      description: "Square the result from the previous step.",
      type: "mcq"
    },
    {
      id: "completedSquareInBrackets",
      title: "Step 5: Rewrite Inside Brackets",
      description: "Express the terms inside the parentheses as a perfect square trinomial minus the value found in Step 4.",
      type: "mcq"
    },
    {
      id: "constantAdjustmentOutside",
      title: "Step 6: Adjust the Constant Outside",
      description: "Multiply the value subtracted inside the brackets by the coefficient $a$ that was factored out, and combine it with the original constant term.",
      type: "mcq"
    },
    {
      id: "finalForm",
      title: "Step 7: Write the Final Form",
      description: "Distribute the coefficient $a$ and combine the constants to write the expression in the form $a(x + h)^2 + k$.",
      type: "mcq"
    }
    // Add more steps as needed
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: 2x^2 + 12x + 10 ---
    {
      factoredForm: ["2(x^2 + 6x) + 10", "2x(x + 6) + 10", "2(x^2 + 12x) + 10", "x^2 + 6x + 5"],
      linearCoefficientOverA: ["6", "12", "3", "2"],
      halfBOverAValue: ["3", "6", "1.5", "9"],
      halfBOverASquaredValue: ["9", "3", "6", "18"],
      completedSquareInBrackets: ["(x + 3)^2 - 9", "(x + 3)^2", "x^2 + 6x + 9", "(x - 3)^2 - 9"],
      constantAdjustmentOutside: ["2(-9) + 10", "-18 + 10", "10 - 18", "-8"],
      finalForm: ["2(x + 3)^2 - 8", "2(x + 3)^2 - 18", "2x^2 + 12x + 10", "2(x - 3)^2 - 8"]
    },
    // --- Problem 2: 3x^2 + 6x + 12 (Practice Example) ---
    {
      factoredForm: ["3(x^2 + 2x) + 12", "3x(x + 2) + 12", "3(x^2 + 6x) + 12", "x^2 + 2x + 4"],
      linearCoefficientOverA: ["2", "6", "1", "3"],
      halfBOverAValue: ["1", "2", "0.5", "4"],
      halfBOverASquaredValue: ["1", "2", "4", "0.25"],
      completedSquareInBrackets: ["(x + 1)^2 - 1", "(x + 1)^2", "x^2 + 2x + 1", "(x - 1)^2 - 1"],
      constantAdjustmentOutside: ["3(-1) + 12", "-3 + 12", "12 - 3", "9"],
      finalForm: ["3(x + 1)^2 + 9", "3(x + 1)^2 - 3", "3x^2 + 6x + 12", "3(x - 1)^2 + 9"]
    },
    // --- Problem 3: -x^2 + 4x - 1 ---
    {
      factoredForm: ["-(x^2 - 4x) - 1", "-1(x^2 + 4x) - 1", "-x(x - 4) - 1", "x^2 - 4x - 1"],
      linearCoefficientOverA: ["-4", "4", "-2", "1"], // Coefficient inside () after factoring -1 is -4
      halfBOverAValue: ["-2", "-4", "2", "-1"],
      halfBOverASquaredValue: ["4", "-2", "2", "16"],
      completedSquareInBrackets: ["(x - 2)^2 - 4", "(x - 2)^2", "x^2 - 4x + 4", "(x + 2)^2 - 4"],
      constantAdjustmentOutside: ["-1(-4) + (-1)", "4 - 1", "3", "-4 - 1"],
      finalForm: ["-(x - 2)^2 + 3", "-(x - 2)^2 + 4", "-x^2 + 4x - 1", "-(x + 2)^2 + 3"]
    }
    // Add more problems...
  ],
  practiceProblems: [
    // --- Problem 1: 2x^2 + 12x + 10 ---
    {
      expression: "2x^2 + 12x + 10",
      solution: {
        factoredForm: "2(x^2 + 6x) + 10",
        linearCoefficientOverA: "6",
        halfBOverAValue: "3",
        halfBOverASquaredValue: "9",
        completedSquareInBrackets: "(x + 3)^2 - 9",
        constantAdjustmentOutside: "2(-9) + 10", // Or just "-8"
        finalForm: "2(x + 3)^2 - 8"
      },
      explanation: {
        factoredForm: "Factor the coefficient of $x^2$, which is $2$, out of the first two terms: $2x^2 + 12x = 2(x^2 + 6x)$. The expression becomes $2(x^2 + 6x) + 10$.",
        linearCoefficientOverA: "Inside the parentheses, the expression is $x^2 + \\mathbf{6}x$. The coefficient of $x$ is $6$. So, $\\frac{b}{a} = \\frac{12}{2} = 6$.",
        halfBOverAValue: "Take half of the coefficient found: $\\frac{6}{2} = 3$.",
        halfBOverASquaredValue: "Square the result: $(3)^2 = 9$.",
        completedSquareInBrackets: "Rewrite the terms inside the brackets $x^2 + 6x$ as a perfect square trinomial minus the squared value. Add $9$ to complete the square ($x^2 + 6x + 9 = (x+3)^2$) and immediately subtract $9$: $x^2 + 6x = (x^2 + 6x + 9) - 9 = (x + 3)^2 - 9$. So, the expression inside the brackets is $(x + 3)^2 - 9$.",
        constantAdjustmentOutside: "Remember the original expression was $2(x^2 + 6x) + 10$. We replaced $(x^2 + 6x)$ with $(x + 3)^2 - 9$, giving $2((x + 3)^2 - 9) + 10$. Distribute the $2$ that is multiplying the bracket: $2 \\times (x + 3)^2 = 2(x + 3)^2$ and $2 \\times (-9) = -18$. The expression is now $2(x + 3)^2 - 18 + 10$. Combine the constants outside the squared term: $-18 + 10 = -8$.",
        finalForm: "Combine the squared term $2(x + 3)^2$ with the simplified constant $-8$. The final form is $2(x + 3)^2 - 8$."
      },
      hint: "First, factor the number in front of $x^2$ out of the first two terms. What is left inside the brackets? Then, complete the square for the expression inside the brackets."
    },
    // --- Problem 2: 3x^2 + 6x + 12 ---
    {
      expression: "3x^2 + 6x + 12",
      solution: {
        factoredForm: "3(x^2 + 2x) + 12",
        linearCoefficientOverA: "2",
        halfBOverAValue: "1",
        halfBOverASquaredValue: "1",
        completedSquareInBrackets: "(x + 1)^2 - 1",
        constantAdjustmentOutside: "3(-1) + 12", // Or just "9"
        finalForm: "3(x + 1)^2 + 9"
      },
      explanation: {
        factoredForm: "Factor the coefficient of $x^2$, which is $3$, out of the first two terms: $3x^2 + 6x = 3(x^2 + 2x)$. The expression becomes $3(x^2 + 2x) + 12$.",
        linearCoefficientOverA: "Inside the parentheses, the expression is $x^2 + \\mathbf{2}x$. The coefficient of $x$ is $2$. So, $\\frac{b}{a} = \\frac{6}{3} = 2$.",
        halfBOverAValue: "Half of $2$ is $\\frac{2}{2} = 1$.",
        halfBOverASquaredValue: "Square the result: $(1)^2 = 1$.",
        completedSquareInBrackets: "Rewrite $x^2 + 2x$ as $(x^2 + 2x + 1) - 1$. Since $x^2 + 2x + 1 = (x+1)^2$, the expression inside the brackets is $(x + 1)^2 - 1$.",
        constantAdjustmentOutside: "The expression is $3((x + 1)^2 - 1) + 12$. Distribute the $3$: $3(x + 1)^2 - 3$. Combine the constants: $-3 + 12 = 9$.",
        finalForm: "Combine the squared term $3(x + 1)^2$ with the constant $9$. The final form is $3(x + 1)^2 + 9$."
      },
      hint: "Factor out the 3. What is the coefficient of $x$ inside the new brackets? Find half of it and square it to complete the square inside the brackets. Don't forget to adjust the constant outside after distributing the 3."
    },
    // --- Problem 3: -x^2 + 4x - 1 ---
    {
      expression: "-x^2 + 4x - 1",
      solution: {
        factoredForm: "-(x^2 - 4x) - 1",
        linearCoefficientOverA: "-4", // Coefficient inside () after factoring -1
        halfBOverAValue: "-2",
        halfBOverASquaredValue: "4",
        completedSquareInBrackets: "(x - 2)^2 - 4",
        constantAdjustmentOutside: "-1(-4) + (-1)", // Or just "3"
        finalForm: "-(x - 2)^2 + 3"
      },
      explanation: {
        factoredForm: "Factor the coefficient of $x^2$, which is $-1$, out of the first two terms: $-x^2 + 4x = -1(x^2 - 4x) = -(x^2 - 4x)$. The expression becomes $-(x^2 - 4x) - 1$.",
        linearCoefficientOverA: "Inside the parentheses, the expression is $x^2 \\mathbf{-4}x$. The coefficient of $x$ is $-4$. (Note: This is $\\frac{b}{a} = \\frac{4}{-1} = -4$).",
        halfBOverAValue: "Half of $-4$ is $\\frac{-4}{2} = -2$.",
        halfBOverASquaredValue: "Square the result: $(-2)^2 = 4$.",
        completedSquareInBrackets: "Rewrite $x^2 - 4x$ as $(x^2 - 4x + 4) - 4$. Since $x^2 - 4x + 4 = (x-2)^2$, the expression inside the brackets is $(x - 2)^2 - 4$.",
        constantAdjustmentOutside: "The expression is $-((x - 2)^2 - 4) - 1$. Distribute the negative sign: $-(x - 2)^2 - (-4) - 1 = -(x - 2)^2 + 4 - 1$. Combine the constants: $4 - 1 = 3$.",
        finalForm: "Combine the squared term $-(x - 2)^2$ with the constant $3$. The final form is $-(x - 2)^2 + 3$."
      },
      hint: "Factor out the negative sign first. What is the coefficient of $x$ inside the resulting brackets? Remember to be careful with signs when completing the square and distributing the negative."
    }
    // Add more problems...
  ]
};

export default function CompleteSquareANot1Tool() {
  return (
    <MultiStepInteractiveComponent toolData={completeSquareANot1Data} />
  );
}