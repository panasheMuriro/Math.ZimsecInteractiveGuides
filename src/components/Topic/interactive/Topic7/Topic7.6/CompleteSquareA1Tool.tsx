// CompleteSquareA1Tool.tsx
import MultiStepInteractiveComponent, { InteractiveToolData } from '../../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Completing the Square (a=1)
const completeSquareA1Data: InteractiveToolData = {
  title: "Completing the Square (Coefficient = 1)",
  description: "Transform quadratic expressions of the form $x^2 + bx + c$ into perfect square form $(x + h)^2 + k$.",
  theme: {
    primaryColor: 'teal', // Specify the primary color theme
    // backgroundColorFrom: 'blue-50', // Specify the 'from' color for the background gradient
    // backgroundColorTo: 'orange-100'  // Specify the 'to' color for the background gradient
    // You can add more theme properties here if your template supports them
  },
  steps: [
    {
      id: "isolatedExpression",
      title: "Step 1: Isolate Quadratic and Linear Terms",
      description: "Move the constant term to the other side of the equation. What is the expression with $x^2$ and $x$ terms only?",
      type: "mcq"
    },
    {
      id: "linearCoefficient",
      title: "Step 2: Identify the Linear Coefficient ($b$)",
      description: "What is the coefficient of the $x$ term in the isolated expression?",
      type: "mcq"
    },
    {
      id: "halfBValue",
      title: "Step 3: Calculate Half of $b$ ($\\frac{b}{2}$)",
      description: "Take the coefficient found in the previous step and divide it by 2.",
      type: "mcq"
    },
    {
      id: "halfBSquaredValue",
      title: "Step 4: Square Half of $b$ ($(\\frac{b}{2})^2$)",
      description: "Square the result from the previous step.",
      type: "mcq"
    },
    {
      id: "completedSquareForm",
      title: "Step 5: Rewrite as Perfect Square",
      description: "Express the quadratic and linear terms as a perfect square trinomial minus the value found in Step 4.",
      type: "mcq"
    },
    {
      id: "constantAdjustment",
      title: "Step 6: Adjust the Constant Term",
      description: "Bring the constant term from the original equation back to the other side, combining it with the value subtracted in the perfect square form.",
      type: "mcq"
    },
    {
      id: "finalForm",
      title: "Step 7: Write the Final Form",
      description: "Combine the perfect square and the simplified constant to write the expression in the form $(x + h)^2 + k$.",
      type: "mcq"
    }
    // Add more steps as needed
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: x^2 + 6x + 5 ---
    {
      isolatedExpression: ["x^2 + 6x", "x^2 + 6x = -5", "x^2 + 5", "6x + 5"],
      linearCoefficient: ["6", "5", "3", "1"],
      halfBValue: ["3", "6", "1.5", "9"],
      halfBSquaredValue: ["9", "3", "6", "18"],
      completedSquareForm: ["(x + 3)^2 - 9", "(x + 3)^2", "x^2 + 6x + 9", "(x - 3)^2 - 9"],
      constantAdjustment: ["-9 + 5", "-5 + 9", "5 - 9", "9 - 5"],
      finalForm: ["(x + 3)^2 - 4", "(x + 3)^2 - 9", "x^2 + 6x + 5", "(x - 3)^2 - 4"]
    },
    // --- Problem 2: x^2 + 8x + 10 (Practice Example) ---
    {
      isolatedExpression: ["x^2 + 8x", "x^2 + 8x = -10", "x^2 + 10", "8x + 10"],
      linearCoefficient: ["8", "10", "4", "1"],
      halfBValue: ["4", "8", "2", "16"],
      halfBSquaredValue: ["16", "4", "8", "32"],
      completedSquareForm: ["(x + 4)^2 - 16", "(x + 4)^2", "x^2 + 8x + 16", "(x - 4)^2 - 16"],
      constantAdjustment: ["-16 + 10", "-10 + 16", "10 - 16", "16 - 10"],
      finalForm: ["(x + 4)^2 - 6", "(x + 4)^2 - 16", "x^2 + 8x + 10", "(x - 4)^2 - 6"]
    },
    // --- Problem 3: x^2 - 4x + 2 ---
    {
      isolatedExpression: ["x^2 - 4x", "x^2 - 4x = -2", "x^2 + 2", "-4x + 2"],
      linearCoefficient: ["-4", "2", "-2", "4"],
      halfBValue: ["-2", "-4", "2", "1"],
      halfBSquaredValue: ["4", "-2", "2", "16"],
      completedSquareForm: ["(x - 2)^2 - 4", "(x - 2)^2", "x^2 - 4x + 4", "(x + 2)^2 - 4"],
      constantAdjustment: ["-4 + 2", "-2 + 4", "2 - 4", "4 - 2"],
      finalForm: ["(x - 2)^2 - 2", "(x - 2)^2 - 4", "x^2 - 4x + 2", "(x + 2)^2 - 2"]
    }
    // Add more problems...
  ],
  practiceProblems: [
    // --- Problem 1: x^2 + 6x + 5 ---
    {
      expression: "x^2 + 6x + 5",
      solution: {
        isolatedExpression: "x^2 + 6x", // Or "x^2 + 6x = -5" if you prefer equation form
        linearCoefficient: "6",
        halfBValue: "3",
        halfBSquaredValue: "9",
        completedSquareForm: "(x + 3)^2 - 9",
        constantAdjustment: "-9 + 5", // Or just "-4"
        finalForm: "(x + 3)^2 - 4"
      },
      explanation: {
        isolatedExpression: "To isolate the quadratic and linear terms, move the constant $+5$ to the other side. This gives $x^2 + 6x = -5$. The expression with only $x^2$ and $x$ terms is $x^2 + 6x$.",
        linearCoefficient: "In the expression $x^2 + \\mathbf{6}x$, the coefficient of $x$ is $6$. So, $b = 6$.",
        halfBValue: "Take half of the coefficient $b = 6$. Half of $6$ is $\\frac{6}{2} = 3$.",
        halfBSquaredValue: "Square the result from the previous step: $(3)^2 = 9$.",
        completedSquareForm: "Rewrite the isolated terms $x^2 + 6x$ as a perfect square trinomial minus the squared value. We add $9$ to complete the square ($x^2 + 6x + 9 = (x+3)^2$) and immediately subtract $9$ to keep the expression equivalent: $x^2 + 6x = (x^2 + 6x + 9) - 9 = (x + 3)^2 - 9$.",
        constantAdjustment: "Bring the constant term $+5$ from the original expression back. Combine it with the $-9$ from the perfect square form: $-9 + 5 = -4$.",
        finalForm: "Combine the perfect square $(x + 3)^2$ with the simplified constant $-4$. The final form is $(x + 3)^2 - 4$."
      },
      hint: "Start by moving the number without $x$ to the other side. What number is in front of $x$? What is half of that number?"
    },
    // --- Problem 2: x^2 + 8x + 10 ---
    {
      expression: "x^2 + 8x + 10",
      solution: {
        isolatedExpression: "x^2 + 8x",
        linearCoefficient: "8",
        halfBValue: "4",
        halfBSquaredValue: "16",
        completedSquareForm: "(x + 4)^2 - 16",
        constantAdjustment: "-16 + 10", // Or just "-6"
        finalForm: "(x + 4)^2 - 6"
      },
      explanation: {
        isolatedExpression: "Move the constant $+10$ to the other side: $x^2 + 8x = -10$. The expression with $x^2$ and $x$ terms is $x^2 + 8x$.",
        linearCoefficient: "In the expression $x^2 + \\mathbf{8}x$, the coefficient of $x$ is $8$. So, $b = 8$.",
        halfBValue: "Half of $b = 8$ is $\\frac{8}{2} = 4$.",
        halfBSquaredValue: "Square the result: $(4)^2 = 16$.",
        completedSquareForm: "Rewrite $x^2 + 8x$ as $(x^2 + 8x + 16) - 16$. Since $x^2 + 8x + 16 = (x+4)^2$, we have $x^2 + 8x = (x + 4)^2 - 16$.",
        constantAdjustment: "Bring back the original constant $+10$ and combine with $-16$: $-16 + 10 = -6$.",
        finalForm: "Combine the perfect square $(x + 4)^2$ with the constant $-6$. The final form is $(x + 4)^2 - 6$."
      },
      hint: "What is the coefficient of $x$? Find half of it and then square that result. How does that help form a perfect square trinomial?"
    },
    // --- Problem 3: x^2 - 4x + 2 ---
    {
      expression: "x^2 - 4x + 2",
      solution: {
        isolatedExpression: "x^2 - 4x",
        linearCoefficient: "-4",
        halfBValue: "-2",
        halfBSquaredValue: "4",
        completedSquareForm: "(x - 2)^2 - 4",
        constantAdjustment: "-4 + 2", // Or just "-2"
        finalForm: "(x - 2)^2 - 2"
      },
      explanation: {
        isolatedExpression: "Move the constant $+2$ to the other side: $x^2 - 4x = -2$. The expression with $x^2$ and $x$ terms is $x^2 - 4x$.",
        linearCoefficient: "In the expression $x^2 \\mathbf{-4}x$, the coefficient of $x$ is $-4$. So, $b = -4$.",
        halfBValue: "Half of $b = -4$ is $\\frac{-4}{2} = -2$.",
        halfBSquaredValue: "Square the result: $(-2)^2 = 4$.",
        completedSquareForm: "Rewrite $x^2 - 4x$ as $(x^2 - 4x + 4) - 4$. Since $x^2 - 4x + 4 = (x-2)^2$, we have $x^2 - 4x = (x - 2)^2 - 4$.",
        constantAdjustment: "Bring back the original constant $+2$ and combine with $-4$: $-4 + 2 = -2$.",
        finalForm: "Combine the perfect square $(x - 2)^2$ with the constant $-2$. The final form is $(x - 2)^2 - 2$."
      },
      hint: "Pay attention to the sign of the coefficient of $x$. What is half of $-4$? Remember that squaring a negative number gives a positive result."
    }
    // Add more problems...
  ]
};

export default function CompleteSquareA1Tool() {
  return (
    <MultiStepInteractiveComponent toolData={completeSquareA1Data} />
  );
}
