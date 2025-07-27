// SolvingLinearInequalitiesTool.tsx
import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData } from '../Templates/AlgebraMultiStepInteractiveTemplate'; // Adjust path as needed

// Define data for Solving Linear Inequalities
const solvingLinearInequalitiesData: InteractiveToolData = {
  title: "Solving Linear Inequalities",
  description: "Find the range of values for the variable that make a linear inequality true.",
  theme: {
    primaryColor: 'blue', // Specify the primary color theme
    backgroundColorFrom: 'rose-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'pink-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "simplifiedInequality",
      title: "Step 1: Simplify Both Sides",
      description: "Combine like terms and clear fractions/decimals if necessary. What does the inequality look like after simplification?",
      type: "mcq"
    },
    {
      id: "variableTermsMoved",
      title: "Step 2: Move Variable Terms",
      description: "Get all terms containing the variable on one side of the inequality. What does the inequality look like after this step?",
      type: "mcq"
    },
    {
      id: "constantTermsMoved",
      title: "Step 3: Move Constant Terms",
      description: "Get all constant terms (numbers) on the opposite side of the inequality from the variable. What does the inequality look like now?",
      type: "mcq"
    },
    {
      id: "isolateVariable",
      title: "Step 4: Isolate the Variable",
      description: "Perform the final operation (multiplication or division) to get the variable by itself. Did you need to flip the inequality sign?",
      type: "mcq"
    },
    {
      id: "finalSolution",
      title: "Step 5: Write the Final Solution",
      description: "Express the solution as an inequality (e.g., $x < ...$, $x \\geq ...$).",
      type: "mcq"
    },
    {
      id: "checkValue",
      title: "Step 6: Choose a Check Value",
      description: "Select a value that fits within your solution range to test.",
      type: "mcq"
    },
    {
      id: "checkSubstitution",
      title: "Step 7: Substitute and Verify",
      description: "Substitute the chosen value back into the *original* inequality. Is the resulting statement true?",
      type: "mcq"
    }
    // Note: Graphing is visual and not easily represented in this MCQ format.
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: 3x + 5 < 14 ---
    {
      simplifiedInequality: ["3x + 5 < 14", "3x < 14 - 5", "3x < 9", "x + 5 < 14"],
      variableTermsMoved: ["3x < 14 - 5", "3x < 9", "3x + 5 < 14", "x < 14 - 5"],
      constantTermsMoved: ["3x < 14 - 5", "3x < 9", "3x + 5 < 14", "3x < 14"],
      isolateVariable: ["x < 3", "3x < 9", "x < 9/3", "Did not flip sign"],
      finalSolution: ["x < 3", "x > 3", "x ≤ 3", "x ≥ 3"],
      checkValue: ["x = 2", "x = 3", "x = 4", "x = 0"],
      checkSubstitution: ["3(2) + 5 < 14", "6 + 5 < 14", "11 < 14", "True"]
    },
    // --- Problem 2: -2x + 4 > 10 ---
    {
      simplifiedInequality: ["-2x + 4 > 10", "-2x > 10 - 4", "-2x > 6", "x + 4 > 10"],
      variableTermsMoved: ["-2x > 10 - 4", "-2x > 6", "-2x + 4 > 10", "x > 10 - 4"],
      constantTermsMoved: ["-2x > 10 - 4", "-2x > 6", "-2x + 4 > 10", "-2x > 10"],
      isolateVariable: ["x < -3", "-2x > 6", "x > 6/(-2)", "Flipped sign"],
      finalSolution: ["x < -3", "x > -3", "x ≤ -3", "x ≥ -3"],
      checkValue: ["x = -4", "x = -3", "x = -2", "x = 0"],
      checkSubstitution: ["-2(-4) + 4 > 10", "8 + 4 > 10", "12 > 10", "True"]
    },
    // --- Problem 3: \frac{x}{3} - 2 ≤ 1 ---
    {
      simplifiedInequality: ["x - 6 ≤ 3", "\\frac{x}{3} - 2 ≤ 1", "x ≤ 3 + 6", "x ≤ 9"],
      variableTermsMoved: ["x - 6 ≤ 3", "x ≤ 3 + 6", "\\frac{x}{3} ≤ 3", "x ≤ 9"],
      constantTermsMoved: ["x - 6 ≤ 3", "x ≤ 3 + 6", "x ≤ 9", "\\frac{x}{3} ≤ 3"],
      isolateVariable: ["x ≤ 9", "x ≤ 9", "x ≤ 9", "Did not flip sign"],
      finalSolution: ["x ≤ 9", "x < 9", "x ≥ 9", "x > 9"],
      checkValue: ["x = 6", "x = 9", "x = 10", "x = 0"],
      checkSubstitution: ["\\frac{6}{3} - 2 ≤ 1", "2 - 2 ≤ 1", "0 ≤ 1", "True"]
    },
    // --- Problem 4: 4x - 3 ≥ 9 (Practice Example) ---
    {
        simplifiedInequality: ["4x - 3 ≥ 9", "4x ≥ 9 + 3", "4x ≥ 12", "x - 3 ≥ 9"],
        variableTermsMoved: ["4x ≥ 9 + 3", "4x ≥ 12", "4x - 3 ≥ 9", "x ≥ 9 + 3"],
        constantTermsMoved: ["4x ≥ 9 + 3", "4x ≥ 12", "4x - 3 ≥ 9", "4x ≥ 9"],
        isolateVariable: ["x ≥ 3", "4x ≥ 12", "x ≥ 12/4", "Did not flip sign"],
        finalSolution: ["x ≥ 3", "x > 3", "x ≤ 3", "x < 3"],
        checkValue: ["x = 3", "x = 4", "x = 2", "x = 0"],
        checkSubstitution: ["4(3) - 3 ≥ 9", "12 - 3 ≥ 9", "9 ≥ 9", "True"]
      }
  ],
  practiceProblems: [
    // --- Problem 1: 3x + 5 < 14 ---
    {
      expression: "3x + 5 < 14",
      solution: {
        simplifiedInequality: "3x + 5 < 14", // Already simplified
        variableTermsMoved: "3x < 14 - 5", // Move +5
        constantTermsMoved: "3x < 9",     // Calculate 14-5
        isolateVariable: "x < 3",        // Divide by 3, no flip
        finalSolution: "x < 3",         // Final form
        checkValue: "x = 2",            // Value to test (must satisfy x < 3)
        checkSubstitution: "3(2) + 5 < 14" // Substitute x=2
      },
      explanation: {
        simplifiedInequality: "The inequality $3x + 5 < 14$ is already in its simplest form. There are no like terms to combine or fractions to clear.",
        variableTermsMoved: "The variable term is $3x$. It is already on the left side. We need to move the constant term $+5$ to the right side. We do this by subtracting $5$ from both sides: $3x + 5 - 5 < 14 - 5$.",
        constantTermsMoved: "After subtracting $5$ from both sides, the inequality becomes $3x < 14 - 5$. Simplifying the right side gives $3x < 9$.",
        isolateVariable: "The variable $x$ is currently multiplied by $3$. To isolate $x$, we divide both sides of the inequality by $3$: $\\frac{3x}{3} < \\frac{9}{3}$. Since we are dividing by a positive number, the inequality sign does not change.",
        finalSolution: "After dividing, we get $x < 3$. This is the solution to the inequality.",
        checkValue: "We need to check our solution. We should choose a value for $x$ that is less than $3$. Let's choose $x = 2$.",
        checkSubstitution: "To check, substitute $x = 2$ into the *original* inequality $3x + 5 < 14$. This gives the left-hand side (LHS) as $3(2) + 5$."
      },
      hint: "What is the opposite of adding 5? Use that to move the constant term. Then, how do you 'undo' multiplying by 3? Remember, only flip the sign if you multiply or divide by a negative number."
    },
    // --- Problem 2: -2x + 4 > 10 ---
    {
      expression: "-2x + 4 > 10",
      solution: {
        simplifiedInequality: "-2x + 4 > 10", // Already simplified
        variableTermsMoved: "-2x > 10 - 4", // Move +4
        constantTermsMoved: "-2x > 6",     // Calculate 10-4
        isolateVariable: "x < -3",        // Divide by -2, FLIP sign
        finalSolution: "x < -3",         // Final form
        checkValue: "x = -4",            // Value to test (must satisfy x < -3)
        checkSubstitution: "-2(-4) + 4 > 10" // Substitute x=-4
      },
      explanation: {
        simplifiedInequality: "The inequality $-2x + 4 > 10$ is already in its simplest form.",
        variableTermsMoved: "The variable term is $-2x$. It is already on the left side. We need to move the constant term $+4$ to the right side. We do this by subtracting $4$ from both sides: $-2x + 4 - 4 > 10 - 4$.",
        constantTermsMoved: "After subtracting $4$ from both sides, the inequality becomes $-2x > 10 - 4$. Simplifying the right side gives $-2x > 6$.",
        isolateVariable: "The variable $x$ is currently multiplied by $-2$. To isolate $x$, we divide both sides of the inequality by $-2$: $\\frac{-2x}{-2} < \\frac{6}{-2}$. **Crucially, because we are dividing by a negative number (-2), we must flip the inequality sign.** The $>$ becomes $<$.",
        finalSolution: "After dividing and flipping the sign, we get $x < -3$. This is the solution.",
        checkValue: "Check the solution. We need a value for $x$ that is less than $-3$. Let's choose $x = -4$.",
        checkSubstitution: "Substitute $x = -4$ into the *original* inequality $-2x + 4 > 10$. The LHS is $-2(-4) + 4$."
      },
      hint: "Start by moving the constant term (+4). When you divide by the coefficient of $x$, which is negative (-2), what must you do to the inequality sign? Choose a test value less than your answer."
    },
    // --- Problem 3: \frac{x}{3} - 2 ≤ 1 ---
    {
      expression: "\\frac{x}{3} - 2 \\leq 1",
      solution: {
        simplifiedInequality: "x - 6 ≤ 3", // Multiply all terms by 3
        variableTermsMoved: "x ≤ 3 + 6", // Move -6
        constantTermsMoved: "x ≤ 9",      // Calculate 3+6
        isolateVariable: "x ≤ 9",        // Variable is already isolated
        finalSolution: "x ≤ 9",         // Final form
        checkValue: "x = 6",            // Value to test (must satisfy x ≤ 9)
        checkSubstitution: "\\frac{6}{3} - 2 \\leq 1" // Substitute x=6
      },
      explanation: {
        simplifiedInequality: "The inequality $\\frac{x}{3} - 2 \\leq 1$ contains a fraction. To simplify, we can clear the fraction by multiplying every term on both sides by the denominator, which is $3$: $3(\\frac{x}{3}) - 3(2) \\leq 3(1)$. This simplifies to $x - 6 \\leq 3$.",
        variableTermsMoved: "The variable term is $x$. It is already on the left side. We need to move the constant term $-6$ to the right side. We do this by adding $6$ to both sides: $x - 6 + 6 \\leq 3 + 6$.",
        constantTermsMoved: "After adding $6$ to both sides, the inequality becomes $x \\leq 3 + 6$. Simplifying the right side gives $x \\leq 9$.",
        isolateVariable: "The variable $x$ is now by itself on the left side of the inequality. No further steps are needed to isolate it.",
        finalSolution: "The inequality simplifies directly to $x \\leq 9$. This is the solution.",
        checkValue: "Check the solution. We need a value for $x$ that is less than or equal to $9$. Let's choose $x = 6$.",
        checkSubstitution: "Substitute $x = 6$ into the *original* inequality $\\frac{x}{3} - 2 \\leq 1$. The LHS is $\\frac{6}{3} - 2$."
      },
      hint: "To get rid of the fraction, multiply everything by the bottom number (the denominator). Then, how do you move the constant term? Is the variable isolated at the end? Did you multiply or divide by a negative number?"
    },
     // --- Problem 4: 4x - 3 ≥ 9 ---
     {
        expression: "4x - 3 \\geq 9",
        solution: {
            simplifiedInequality: "4x - 3 ≥ 9", // Already simplified
            variableTermsMoved: "4x ≥ 9 + 3", // Move -3
            constantTermsMoved: "4x ≥ 12",     // Calculate 9+3
            isolateVariable: "x ≥ 3",         // Divide by 4, no flip
            finalSolution: "x ≥ 3",          // Final form
            checkValue: "x = 3",             // Value to test (must satisfy x ≥ 3)
            checkSubstitution: "4(3) - 3 \\geq 9" // Substitute x=3
        },
        explanation: {
            simplifiedInequality: "The inequality $4x - 3 \\geq 9$ is already in its simplest form.",
            variableTermsMoved: "The variable term is $4x$. It is already on the left side. We need to move the constant term $-3$ to the right side. We do this by adding $3$ to both sides: $4x - 3 + 3 \\geq 9 + 3$.",
            constantTermsMoved: "After adding $3$ to both sides, the inequality becomes $4x \\geq 9 + 3$. Simplifying the right side gives $4x \\geq 12$.",
            isolateVariable: "The variable $x$ is currently multiplied by $4$. To isolate $x$, we divide both sides of the inequality by $4$: $\\frac{4x}{4} \\geq \\frac{12}{4}$. Since we are dividing by a positive number, the inequality sign does not change.",
            finalSolution: "After dividing, we get $x \\geq 3$. This is the solution to the inequality.",
            checkValue: "We need to check our solution. We should choose a value for $x$ that is greater than or equal to $3$. Let's choose $x = 3$.",
            checkSubstitution: "To check, substitute $x = 3$ into the *original* inequality $4x - 3 \\geq 9$. This gives the left-hand side (LHS) as $4(3) - 3$."
        },
        hint: "What is the opposite of subtracting 3? Use that to move the constant term. Then, how do you 'undo' multiplying by 4? Remember, only flip the sign if you multiply or divide by a negative number. Test a value like 3 or 4."
    }
  ]
};

export default function SolvingLinearInequalitiesTool() {
  return (
    <AlgebraMultiStepInteractiveTemplate toolData={solvingLinearInequalitiesData} />
  );
}
