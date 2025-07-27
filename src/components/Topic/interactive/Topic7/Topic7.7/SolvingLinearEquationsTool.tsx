// SolvingLinearEquationsTool.tsx
import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData } from '../Templates/AlgebraMultiStepInteractiveTemplate'; // Adjust path as needed

// Define data for Solving Linear Equations
const solvingLinearEquationsData: InteractiveToolData = {
  title: "Solving Linear Equations",
  description: "Find the value of the variable that makes a linear equation true. Learn to solve equations with one variable.",
  theme: {
    primaryColor: 'blue', // Specify the primary color theme
    backgroundColorFrom: 'blue-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'cyan-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "simplifiedEquation",
      title: "Step 1: Simplify Both Sides",
      description: "Combine like terms and clear fractions/decimals if necessary. What does the equation look like after simplification?",
      type: "mcq"
    },
    {
      id: "variableTermsMoved",
      title: "Step 2: Move Variable Terms",
      description: "Get all terms containing the variable on one side of the equation. What does the equation look like after this step?",
      type: "mcq"
    },
    {
      id: "constantTermsMoved",
      title: "Step 3: Move Constant Terms",
      description: "Get all constant terms (numbers) on the opposite side of the equation from the variable. What does the equation look like now?",
      type: "mcq"
    },
    {
      id: "isolatedVariable",
      title: "Step 4: Isolate the Variable",
      description: "Perform the final operation (multiplication or division) to get the variable by itself. What is the value of the variable?",
      type: "mcq"
    },
    {
      id: "checkSubstitution",
      title: "Step 5: Check Your Answer",
      description: "Substitute the found value back into the *original* equation. What is the result of the left-hand side?",
      type: "mcq"
    },
    {
      id: "checkVerification",
      title: "Step 6: Verify the Solution",
      description: "Is the left-hand side equal to the right-hand side after substitution?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: 2x + 3 = 7 ---
    {
      simplifiedEquation: ["2x + 3 = 7", "2x = 7 - 3", "2x = 4", "x + 3 = 7"],
      variableTermsMoved: ["2x = 7 - 3", "2x + 3 = 7", "2x = 4", "x = 7 - 3"],
      constantTermsMoved: ["2x = 7 - 3", "2x = 4", "2x + 3 = 7", "x = 4"],
      isolatedVariable: ["x = 2", "2x = 4", "x = 4/2", "x = 1"],
      checkSubstitution: ["2(2) + 3 = 7", "4 + 3 = 7", "7 = 7", "2x + 3"],
      checkVerification: ["Yes, LHS = RHS", "No, LHS ≠ RHS", "LHS = 4", "RHS = 7"]
    },
    // --- Problem 2: 3(2x - 1) = 15 ---
    {
      simplifiedEquation: ["6x - 3 = 15", "3(2x - 1) = 15", "6x = 15 + 3", "2x - 1 = 5"],
      variableTermsMoved: ["6x = 15 + 3", "6x - 3 = 15", "6x = 18", "6x - 15 = 3"],
      constantTermsMoved: ["6x = 15 + 3", "6x = 18", "6x - 3 = 15", "6x = 12"],
      isolatedVariable: ["x = 3", "6x = 18", "x = 18/6", "x = 6"],
      checkSubstitution: ["3(2(3) - 1) = 15", "3(6 - 1) = 15", "3(5) = 15", "15 = 15"],
      checkVerification: ["Yes, LHS = RHS", "No, LHS ≠ RHS", "LHS = 18", "RHS = 15"]
    },
    // --- Problem 3: \frac{x}{2} + 4 = 7 ---
    {
      simplifiedEquation: ["x + 8 = 14", "\\frac{x}{2} + 4 = 7", "x = 14 - 8", "\\frac{x}{2} = 3"],
      variableTermsMoved: ["x = 14 - 8", "x + 8 = 14", "x = 6", "x = 14"],
      constantTermsMoved: ["x = 14 - 8", "x = 6", "x + 8 = 14", "x = 14"],
      isolatedVariable: ["x = 6", "x = 6", "x = 6", "x = 6"], // All options are the same, consider variations or explanations
      checkSubstitution: ["\\frac{6}{2} + 4 = 7", "3 + 4 = 7", "7 = 7", "\\frac{x}{2} + 4"],
      checkVerification: ["Yes, LHS = RHS", "No, LHS ≠ RHS", "LHS = 6", "RHS = 7"]
    },
     // --- Problem 4: 4x - 5 = 11 (Practice Example) ---
     {
        simplifiedEquation: ["4x - 5 = 11", "4x = 11 + 5", "4x = 16", "x - 5 = 11"],
        variableTermsMoved: ["4x = 11 + 5", "4x - 5 = 11", "4x = 16", "x = 11 + 5"],
        constantTermsMoved: ["4x = 11 + 5", "4x = 16", "4x - 5 = 11", "4x = 6"],
        isolatedVariable: ["x = 4", "4x = 16", "x = 16/4", "x = 1"],
        checkSubstitution: ["4(4) - 5 = 11", "16 - 5 = 11", "11 = 11", "4x - 5"],
        checkVerification: ["Yes, LHS = RHS", "No, LHS ≠ RHS", "LHS = 16", "RHS = 11"]
      }
  ],
  practiceProblems: [
    // --- Problem 1: 2x + 3 = 7 ---
    {
      expression: "2x + 3 = 7",
      solution: {
        simplifiedEquation: "2x + 3 = 7", // Already simplified
        variableTermsMoved: "2x = 7 - 3", // Move +3
        constantTermsMoved: "2x = 4",     // Calculate 7-3
        isolatedVariable: "x = 2",        // Divide by 2
        checkSubstitution: "2(2) + 3 = 7",// Substitute x=2
        checkVerification: "Yes, LHS = RHS" // 4+3=7, which is true
      },
      explanation: {
        simplifiedEquation: "The equation $2x + 3 = 7$ is already in its simplest form. There are no like terms to combine or fractions to clear.",
        variableTermsMoved: "The variable term is $2x$. It is already on the left side. We need to move the constant term $+3$ to the right side. We do this by subtracting $3$ from both sides: $2x + 3 - 3 = 7 - 3$.",
        constantTermsMoved: "After subtracting $3$ from both sides, the equation becomes $2x = 7 - 3$. Simplifying the right side gives $2x = 4$.",
        isolatedVariable: "The variable $x$ is currently multiplied by $2$. To isolate $x$, we divide both sides of the equation by $2$: $\\frac{2x}{2} = \\frac{4}{2}$.",
        checkSubstitution: "To check the solution $x = 2$, substitute $2$ for $x$ in the *original* equation $2x + 3 = 7$. This gives the left-hand side (LHS) as $2(2) + 3$.",
        checkVerification: "Calculate the LHS: $2(2) + 3 = 4 + 3 = 7$. The right-hand side (RHS) of the original equation is $7$. Since LHS ($7$) equals RHS ($7$), the solution $x = 2$ is correct."
      },
      hint: "What is the opposite of adding 3? Use that to move the constant term. Then, how do you 'undo' multiplying by 2?"
    },
    // --- Problem 2: 3(2x - 1) = 15 ---
    {
      expression: "3(2x - 1) = 15",
      solution: {
        simplifiedEquation: "6x - 3 = 15", // Expand the left side
        variableTermsMoved: "6x = 15 + 3", // Move -3
        constantTermsMoved: "6x = 18",     // Calculate 15+3
        isolatedVariable: "x = 3",         // Divide by 6
        checkSubstitution: "3(2(3) - 1) = 15", // Substitute x=3
        checkVerification: "Yes, LHS = RHS" // 3(6-1)=3(5)=15, which is true
      },
      explanation: {
        simplifiedEquation: "The left side of the equation $3(2x - 1) = 15$ has parentheses. First, use the distributive property to expand it: $3 \\times 2x = 6x$ and $3 \\times (-1) = -3$. This gives $6x - 3 = 15$.",
        variableTermsMoved: "The variable term is $6x$. It is already on the left side. We need to move the constant term $-3$ to the right side. We do this by adding $3$ to both sides: $6x - 3 + 3 = 15 + 3$.",
        constantTermsMoved: "After adding $3$ to both sides, the equation becomes $6x = 15 + 3$. Simplifying the right side gives $6x = 18$.",
        isolatedVariable: "The variable $x$ is currently multiplied by $6$. To isolate $x$, we divide both sides of the equation by $6$: $\\frac{6x}{6} = \\frac{18}{6}$.",
        checkSubstitution: "To check the solution $x = 3$, substitute $3$ for $x$ in the *original* equation $3(2x - 1) = 15$. This gives the LHS as $3(2(3) - 1)$.",
        checkVerification: "Calculate the LHS step-by-step: $2(3) = 6$, then $6 - 1 = 5$, then $3 \\times 5 = 15$. The RHS is $15$. Since LHS ($15$) equals RHS ($15$), the solution $x = 3$ is correct."
      },
      hint: "Start by expanding the parentheses on the left. Then, what is the opposite of subtracting 3? Finally, how do you 'undo' multiplying by 6?"
    },
    // --- Problem 3: \frac{x}{2} + 4 = 7 ---
    {
      expression: "\\frac{x}{2} + 4 = 7",
      solution: {
        simplifiedEquation: "x + 8 = 14", // Multiply all terms by 2
        variableTermsMoved: "x = 14 - 8", // Move +8
        constantTermsMoved: "x = 6",      // Calculate 14-8
        isolatedVariable: "x = 6",        // Variable is already isolated
        checkSubstitution: "\\frac{6}{2} + 4 = 7", // Substitute x=6
        checkVerification: "Yes, LHS = RHS" // 3+4=7, which is true
      },
      explanation: {
        simplifiedEquation: "The equation $\\frac{x}{2} + 4 = 7$ contains a fraction. To simplify, we can clear the fraction by multiplying every term on both sides by the denominator, which is $2$: $2(\\frac{x}{2}) + 2(4) = 2(7)$. This simplifies to $x + 8 = 14$.",
        variableTermsMoved: "The variable term is $x$. It is already on the left side. We need to move the constant term $+8$ to the right side. We do this by subtracting $8$ from both sides: $x + 8 - 8 = 14 - 8$.",
        constantTermsMoved: "After subtracting $8$ from both sides, the equation becomes $x = 14 - 8$. Simplifying the right side gives $x = 6$.",
        isolatedVariable: "The variable $x$ is now by itself on the left side of the equation. The solution is $x = 6$.",
        checkSubstitution: "To check the solution $x = 6$, substitute $6$ for $x$ in the *original* equation $\\frac{x}{2} + 4 = 7$. This gives the LHS as $\\frac{6}{2} + 4$.",
        checkVerification: "Calculate the LHS: $\\frac{6}{2} = 3$, then $3 + 4 = 7$. The RHS is $7$. Since LHS ($7$) equals RHS ($7$), the solution $x = 6$ is correct."
      },
      hint: "To get rid of the fraction, multiply everything by the bottom number (the denominator). Then, how do you move the constant term? Is the variable isolated at the end?"
    },
     // --- Problem 4: 4x - 5 = 11 ---
     {
        expression: "4x - 5 = 11",
        solution: {
            simplifiedEquation: "4x - 5 = 11", // Already simplified
            variableTermsMoved: "4x = 11 + 5", // Move -5
            constantTermsMoved: "4x = 16",     // Calculate 11+5
            isolatedVariable: "x = 4",         // Divide by 4
            checkSubstitution: "4(4) - 5 = 11", // Substitute x=4
            checkVerification: "Yes, LHS = RHS" // 16-5=11, which is true
        },
        explanation: {
            simplifiedEquation: "The equation $4x - 5 = 11$ is already in its simplest form. There are no like terms to combine or fractions to clear.",
            variableTermsMoved: "The variable term is $4x$. It is already on the left side. We need to move the constant term $-5$ to the right side. We do this by adding $5$ to both sides: $4x - 5 + 5 = 11 + 5$.",
            constantTermsMoved: "After adding $5$ to both sides, the equation becomes $4x = 11 + 5$. Simplifying the right side gives $4x = 16$.",
            isolatedVariable: "The variable $x$ is currently multiplied by $4$. To isolate $x$, we divide both sides of the equation by $4$: $\\frac{4x}{4} = \\frac{16}{4}$.",
            checkSubstitution: "To check the solution $x = 4$, substitute $4$ for $x$ in the *original* equation $4x - 5 = 11$. This gives the LHS as $4(4) - 5$.",
            checkVerification: "Calculate the LHS: $4(4) = 16$, then $16 - 5 = 11$. The RHS is $11$. Since LHS ($11$) equals RHS ($11$), the solution $x = 4$ is correct."
        },
        hint: "What is the opposite of subtracting 5? Use that to move the constant term. Then, how do you 'undo' multiplying by 4?"
    }
  ]
};

export default function SolvingLinearEquationsTool() {
  return (
    <AlgebraMultiStepInteractiveTemplate toolData={solvingLinearEquationsData} />
  );
}