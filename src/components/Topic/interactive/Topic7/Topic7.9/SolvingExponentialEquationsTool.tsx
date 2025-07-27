
// SolvingExponentialEquationsTool.tsx
import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData } from '../Templates/AlgebraMultiStepInteractiveTemplate'; // Adjust path as needed

// Define data for Solving Exponential Equations
const solvingExponentialEquationsData: InteractiveToolData = {
  title: "Solving Exponential Equations",
  description: "Solve equations where the variable is in the exponent by expressing both sides with the same base.",
  theme: {
    primaryColor: 'green', // Specify the primary color theme
    backgroundColorFrom: 'green-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'emerald-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "rewriteWithSameBase",
      title: "Step 1: Rewrite with the Same Base",
      description: "Express both sides of the equation using the same base. What is the equation after rewriting?",
      type: "mcq"
    },
    {
      id: "identifyExponents",
      title: "Step 2: Identify the Exponents",
      description: "Once the bases are the same, identify the expressions in the exponents on both sides.",
      type: "mcq"
    },
    {
      id: "setExponentsEqual",
      title: "Step 3: Set Exponents Equal",
      description: "If the bases are the same, the exponents must be equal. Write the equation formed by setting the exponents equal.",
      type: "mcq"
    },
    {
      id: "solveForVariable",
      title: "Step 4: Solve for the Variable",
      description: "Solve the resulting equation from the previous step to find the value of the variable.",
      type: "mcq"
    },
    {
      id: "checkSubstitution",
      title: "Step 5: Check Your Answer",
      description: "Substitute the found value back into the *original* equation. Is the left-hand side equal to the right-hand side?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: 3^x = 27 ---
    {
      rewriteWithSameBase: ["3^x = 3^3", "3^x = 27", "x = 3^3", "3 = 27^x"],
      identifyExponents: ["Left: x, Right: 3", "Left: 3, Right: x", "Left: 3^x, Right: 3^3", "Left: x^3, Right: 3^x"],
      setExponentsEqual: ["x = 3", "3 = x", "3^x = 3^3", "x^3 = 3^x"],
      solveForVariable: ["x = 3", "x = 27", "x = 1", "x = 9"],
      checkSubstitution: ["3^3 = 27", "27 = 27", "3 = 27", "9 = 27"]
    },
    // --- Problem 2: 4^x = 16 ---
    {
      rewriteWithSameBase: ["2^{2x} = 2^4", "4^x = 2^4", "2^x = 2^4", "4^x = 4^2"],
      identifyExponents: ["Left: 2x, Right: 4", "Left: x, Right: 4", "Left: 2^x, Right: 2^4", "Left: 4, Right: 2x"],
      setExponentsEqual: ["2x = 4", "x = 4", "2^x = 2^4", "4 = 2x"],
      solveForVariable: ["x = 2", "x = 4", "x = 8", "x = 1"],
      checkSubstitution: ["4^2 = 16", "16 = 16", "2^4 = 16", "8 = 16"]
    },
    // --- Problem 3: 5^{x-1} = 1/25 ---
    {
      rewriteWithSameBase: ["5^{x-1} = 5^{-2}", "5^{x-1} = 1/25", "5^x = 5^{-2}", "5^{-1} = 5^{-2}"],
      identifyExponents: ["Left: x-1, Right: -2", "Left: x, Right: -2", "Left: -1, Right: -2", "Left: 5^{x-1}, Right: 5^{-2}"],
      setExponentsEqual: ["x - 1 = -2", "x = -2", "x - 1 = -2", "5^{x-1} = 5^{-2}"],
      solveForVariable: ["x = -1", "x = -2", "x = 1", "x = 3"],
      checkSubstitution: ["5^{-1-1} = 1/25", "5^{-2} = 1/25", "1/5 = 1/25", "1/25 = 1/25"]
    },
     // --- Problem 4: 2^{x+1} = 8 (Practice Example) ---
     {
        rewriteWithSameBase: ["2^{x+1} = 2^3", "2^{x+1} = 8", "x + 1 = 2^3", "2 = 8^{x+1}"],
        identifyExponents: ["Left: x+1, Right: 3", "Left: x, Right: 3", "Left: 1, Right: 3", "Left: 2^{x+1}, Right: 2^3"],
        setExponentsEqual: ["x + 1 = 3", "x = 3", "2^{x+1} = 2^3", "x + 1 = 2^3"],
        solveForVariable: ["x = 2", "x = 3", "x = 1", "x = 4"],
        checkSubstitution: ["2^{2+1} = 8", "2^3 = 8", "4 = 8", "8 = 8"]
      }
  ],
  practiceProblems: [
    // --- Problem 1: 3^x = 27 ---
    {
      expression: "3^x = 27",
      solution: {
        rewriteWithSameBase: "3^x = 3^3",
        identifyExponents: "Left: x, Right: 3",
        setExponentsEqual: "x = 3",
        solveForVariable: "x = 3",
        checkSubstitution: "3^3 = 27"
      },
      explanation: {
        rewriteWithSameBase: "We need to express both sides with the same base. The left side is $3^x$. The right side is $27$. We know that $27$ can be written as a power of $3$: $27 = 3 \\times 3 \\times 3 = 3^3$. So the equation becomes $3^x = 3^3$.",
        identifyExponents: "Now that both sides have the same base ($3$), we look at the exponents. On the left side, the exponent is $x$. On the right side, the exponent is $3$.",
        setExponentsEqual: "If two expressions with the same base are equal, then their exponents must be equal. Therefore, we can set the exponents equal to each other: $x = 3$.",
        solveForVariable: "The equation $x = 3$ is already solved for $x$. The solution is $x = 3$.",
        checkSubstitution: "To verify the solution, substitute $x = 3$ back into the *original* equation $3^x = 27$. The left-hand side (LHS) becomes $3^3$. Calculating $3^3 = 27$. The right-hand side (RHS) is $27$. Since LHS ($27$) equals RHS ($27$), the solution $x = 3$ is correct."
      },
      hint: "What base is 27 a power of? Rewrite 27 using that base. Then, if the bases are the same, what must be true about the exponents?"
    },
    // --- Problem 2: 4^x = 16 ---
    {
      expression: "4^x = 16",
      solution: {
        rewriteWithSameBase: "2^{2x} = 2^4",
        identifyExponents: "Left: 2x, Right: 4",
        setExponentsEqual: "2x = 4",
        solveForVariable: "x = 2",
        checkSubstitution: "4^2 = 16"
      },
      explanation: {
        rewriteWithSameBase: "The bases $4$ and $16$ are different. We look for a common base. Both $4$ and $16$ are powers of $2$: $4 = 2^2$ and $16 = 2^4$. Rewrite the left side: $4^x = (2^2)^x$. Using the power rule $(a^m)^n = a^{mn}$, this becomes $(2^2)^x = 2^{2x}$. The equation is now $2^{2x} = 16$. Rewrite the right side: $16 = 2^4$. The equation becomes $2^{2x} = 2^4$.",
        identifyExponents: "Both sides now have the same base ($2$). The exponent on the left side is $2x$. The exponent on the right side is $4$.",
        setExponentsEqual: "Since the bases are equal, the exponents must be equal. Set $2x = 4$.",
        solveForVariable: "Solve the equation $2x = 4$ by dividing both sides by $2$: $\\frac{2x}{2} = \\frac{4}{2}$. This simplifies to $x = 2$.",
        checkSubstitution: "Check the solution $x = 2$ in the original equation $4^x = 16$. LHS = $4^2 = 16$. RHS = $16$. Since LHS ($16$) equals RHS ($16$), the solution $x = 2$ is correct."
      },
      hint: "4 and 16 are both powers of 2. Rewrite both sides of the equation using base 2. Remember the power rule $(a^m)^n = a^{mn}$ for the left side. Then, equate the exponents."
    },
    // --- Problem 3: 5^{x-1} = 1/25 ---
    {
      expression: "5^{x-1} = \\frac{1}{25}",
      solution: {
        rewriteWithSameBase: "5^{x-1} = 5^{-2}",
        identifyExponents: "Left: x-1, Right: -2",
        setExponentsEqual: "x - 1 = -2",
        solveForVariable: "x = -1",
        checkSubstitution: "5^{-1-1} = \\frac{1}{25}"
      },
      explanation: {
        rewriteWithSameBase: "The left side has base $5$. The right side is $\\frac{1}{25}$. We know $25 = 5^2$. Using the negative exponent rule $\\frac{1}{a^n} = a^{-n}$, we can write $\\frac{1}{25} = \\frac{1}{5^2} = 5^{-2}$. The equation becomes $5^{x-1} = 5^{-2}$.",
        identifyExponents: "Both sides now have the same base ($5$). The exponent on the left side is $x-1$. The exponent on the right side is $-2$.",
        setExponentsEqual: "With equal bases, the exponents must be equal. Therefore, $x - 1 = -2$.",
        solveForVariable: "Solve $x - 1 = -2$ by adding $1$ to both sides: $x - 1 + 1 = -2 + 1$. This simplifies to $x = -1$.",
        checkSubstitution: "Check $x = -1$ in the original equation $5^{x-1} = \\frac{1}{25}$. LHS = $5^{-1-1} = 5^{-2}$. RHS = $\\frac{1}{25}$. We know $5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}$. Since LHS ($\\frac{1}{25}$) equals RHS ($\\frac{1}{25}$), the solution $x = -1$ is correct."
      },
      hint: "How do you write 1/25 using a negative exponent? What base is 25 a power of? Rewrite the right side with the same base as the left side (base 5). Then, equate the exponents."
    },
     // --- Problem 4: 2^{x+1} = 8 ---
     {
        expression: "2^{x+1} = 8",
        solution: {
            rewriteWithSameBase: "2^{x+1} = 2^3",
            identifyExponents: "Left: x+1, Right: 3",
            setExponentsEqual: "x + 1 = 3",
            solveForVariable: "x = 2",
            checkSubstitution: "2^{2+1} = 8"
        },
        explanation: {
            rewriteWithSameBase: "The left side has base $2$. The right side is $8$. We know that $8$ can be written as a power of $2$: $8 = 2 \\times 2 \\times 2 = 2^3$. So the equation becomes $2^{x+1} = 2^3$.",
            identifyExponents: "Both sides now have the same base ($2$). The exponent on the left side is $x+1$. The exponent on the right side is $3$.",
            setExponentsEqual: "If two expressions with the same base are equal, then their exponents must be equal. Therefore, we can set the exponents equal to each other: $x + 1 = 3$.",
            solveForVariable: "Solve the equation $x + 1 = 3$ by subtracting $1$ from both sides: $x + 1 - 1 = 3 - 1$. This simplifies to $x = 2$.",
            checkSubstitution: "To verify the solution, substitute $x = 2$ back into the *original* equation $2^{x+1} = 8$. The left-hand side (LHS) becomes $2^{2+1} = 2^3$. Calculating $2^3 = 8$. The right-hand side (RHS) is $8$. Since LHS ($8$) equals RHS ($8$), the solution $x = 2$ is correct."
        },
        hint: "What base is 8 a power of? Rewrite 8 using that base (which should be the same as the left side's base). Then, if the bases are the same, what must be true about the exponents?"
    }
  ]
};

export default function SolvingExponentialEquationsTool() {
  return (
    <AlgebraMultiStepInteractiveTemplate toolData={solvingExponentialEquationsData} />
  );
}
