// SolvingSimultaneousEquationsEliminationTool.tsx
import MultiStepInteractiveComponent, { InteractiveToolData } from '../../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Solving Simultaneous Equations (Elimination Method)
const solvingSimultaneousEquationsEliminationData: InteractiveToolData = {
  title: "Solving Simultaneous Equations - Elimination Method",
  description: "Solve systems of two linear equations with two unknowns by eliminating one variable.",
  theme: {
    primaryColor: 'green', // Specify the primary color theme
    backgroundColorFrom: 'green-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'emerald-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "alignedCoefficients",
      title: "Step 1: Align Coefficients",
      description: "Identify the variable to eliminate and, if necessary, multiply one or both equations so the coefficients of that variable are equal (or opposites). What are the equations after this step?",
      type: "mcq"
    },
    {
      id: "eliminationOperation",
      title: "Step 2: Choose Elimination Operation",
      description: "Should you add or subtract the equations to eliminate the chosen variable?",
      type: "mcq"
    },
    {
      id: "eliminatedEquation",
      title: "Step 3: Perform Elimination",
      description: "Add or subtract the equations as chosen. What is the resulting equation in one variable?",
      type: "mcq"
    },
    {
      id: "solvedVariable",
      title: "Step 4: Solve for the First Variable",
      description: "Solve the single-variable equation obtained. What is the value of the first variable?",
      type: "mcq"
    },
    {
      id: "substitutionEquation",
      title: "Step 5: Choose Equation for Substitution",
      description: "Which of the original equations will you substitute the found variable value into?",
      type: "mcq"
    },
    {
      id: "finalVariableValue",
      title: "Step 6: Solve for the Second Variable",
      description: "Substitute the known value into the chosen equation and solve for the remaining variable. What is its value?",
      type: "mcq"
    },
    {
      id: "verificationFirstEquation",
      title: "Step 7a: Check Solution (Equation 1)",
      description: "Substitute both found values ($x = ..., y = ...$) into the *first* original equation. Is the left-hand side equal to the right-hand side?",
      type: "mcq"
    },
    {
      id: "verificationSecondEquation",
      title: "Step 7b: Check Solution (Equation 2)",
      description: "Substitute both found values ($x = ..., y = ...$) into the *second* original equation. Is the left-hand side equal to the right-hand side?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: 2x + y = 8  and  x - y = 1 ---
    {
      alignedCoefficients: [
        ["2x + y = 8", "x - y = 1"], // Already aligned for y
        ["2x + y = 8", "2x - 2y = 2"], // Multiply second by 2
        ["2x + y = 8", "-x + y = -1"], // Multiply second by -1
        ["4x + 2y = 16", "x - y = 1"]  // Multiply first by 2
      ],
      eliminationOperation: ["Add", "Subtract", "Multiply", "Divide"],
      eliminatedEquation: ["3x = 9", "x + 2y = 7", "x = 1", "2x = 8"],
      solvedVariable: ["x = 3", "x = 9/3", "y = 3", "x = 2"],
      substitutionEquation: ["x - y = 1", "2x + y = 8", "\\text{Either equation}", "\\text{Neither equation}"],
      finalVariableValue: ["y = 2", "y = 1", "x = 2", "y = 8"],
      verificationFirstEquation: ["Yes, LHS = RHS (8 = 8)", "No", "LHS = 7", "RHS = 8"],
      verificationSecondEquation: ["Yes, LHS = RHS (1 = 1)", "No", "LHS = 2", "RHS = 1"]
    },
    // --- Problem 2: 4x + y = 10 and 2x - y = 2 (Practice Example) ---
    {
      alignedCoefficients: [
        ["4x + y = 10", "2x - y = 2"], // Already aligned for y
        ["4x + y = 10", "4x - 2y = 4"], // Multiply second by 2
        ["4x + y = 10", "-2x + y = -2"], // Multiply second by -1
        ["8x + 2y = 20", "2x - y = 2"]  // Multiply first by 2
      ],
      eliminationOperation: ["Add", "Subtract", "Multiply", "Divide"],
      eliminatedEquation: ["6x = 12", "2x + 2y = 8", "2x = 10", "4x = 10"],
      solvedVariable: ["x = 2", "x = 12/6", "y = 2", "x = 5"],
      substitutionEquation: ["2x - y = 2", "4x + y = 10", "\\text{Either equation}", "\\text{Neither equation}"],
      finalVariableValue: ["y = 2", "y = 1", "x = 2", "y = 10"],
      verificationFirstEquation: ["Yes, LHS = RHS (10 = 10)", "No", "LHS = 8", "RHS = 10"],
      verificationSecondEquation: ["Yes, LHS = RHS (2 = 2)", "No", "LHS = 4", "RHS = 2"]
    },
    // --- Problem 3: 3x + 2y = 12 and x - y = 1 ---
    {
      alignedCoefficients: [
        ["3x + 2y = 12", "2x - 2y = 2"], // Multiply second by 2 to align y coefficients
        ["3x + 2y = 12", "x - y = 1"], // Not aligned
        ["3x + 2y = 12", "3x - 3y = 3"], // Multiply second by 3 to align x coefficients
        ["6x + 4y = 24", "x - y = 1"]  // Multiply first by 2
      ],
      eliminationOperation: ["Add (for y)", "Subtract (for x)", "Add (for x)", "Subtract (for y)"],
      eliminatedEquation: ["5x = 14", "5y = 9", "3x = 10", "2x = 12"],
      solvedVariable: ["x = 14/5", "y = 9/5", "x = 10/3", "x = 6"],
      substitutionEquation: ["x - y = 1", "3x + 2y = 12", "\\text{Either equation}", "\\text{Neither equation}"],
      finalVariableValue: ["y = 9/5", "x = 14/5", "y = 1", "x = 3"],
      verificationFirstEquation: ["Yes, LHS = RHS (12 = 12)", "No", "LHS = 15", "RHS = 12"],
      verificationSecondEquation: ["Yes, LHS = RHS (1 = 1)", "No", "LHS = 5", "RHS = 1"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: 2x + y = 8  and  x - y = 1 ---
    {
      expression: "\\begin{cases} 2x + y = 8 \\\\ x - y = 1 \\end{cases}", // Using LaTeX cases environment for display
      solution: {
        alignedCoefficients: "2x + y = 8, x - y = 1", // Coefficients of y (1, -1) are already opposites
        eliminationOperation: "Add", // Add to eliminate y
        eliminatedEquation: "3x = 9", // (2x + y) + (x - y) = 8 + 1
        solvedVariable: "x = 3", // Solve 3x = 9
        substitutionEquation: "x - y = 1", // Can use either, choosing the simpler one
        finalVariableValue: "y = 2", // Substitute x=3 into x-y=1: 3-y=1 -> y=2
        verificationFirstEquation: "Yes, LHS = RHS (8 = 8)", // 2(3) + 2 = 6 + 2 = 8
        verificationSecondEquation: "Yes, LHS = RHS (1 = 1)"  // 3 - 2 = 1
      },
      explanation: {
        alignedCoefficients: "Look at the coefficients of $x$ and $y$ in both equations. For $y$, they are $1$ and $-1$. These are already opposites, so no multiplication is needed. The equations are ready for elimination of $y$.",
        eliminationOperation: "Since the coefficients of $y$ are $1$ and $-1$ (opposites), we add the equations to eliminate $y$.",
        eliminatedEquation: "Adding the equations: $(2x + y) + (x - y) = 8 + 1$. This simplifies to $2x + x + y - y = 9$, resulting in $3x = 9$.",
        solvedVariable: "Solve the equation $3x = 9$ by dividing both sides by $3$: $x = 3$.",
        substitutionEquation: "We have found $x = 3$. Now, substitute this value into one of the original equations to find $y$. The second equation, $x - y = 1$, looks simpler for this substitution.",
        finalVariableValue: "Substitute $x = 3$ into $x - y = 1$: $3 - y = 1$. Subtract $3$ from both sides: $-y = 1 - 3$, so $-y = -2$. Multiply both sides by $-1$: $y = 2$.",
        verificationFirstEquation: "Check the solution $x=3, y=2$ in the first original equation $2x + y = 8$. Substitute: LHS = $2(3) + 2 = 6 + 2 = 8$. RHS = $8$. Since LHS = RHS, the solution is correct for this equation.",
        verificationSecondEquation: "Check the solution $x=3, y=2$ in the second original equation $x - y = 1$. Substitute: LHS = $3 - 2 = 1$. RHS = $1$. Since LHS = RHS, the solution is correct for this equation."
      },
      hint: "Look at the coefficients of $y$. What do you notice about 1 and -1? How can you use that to eliminate $y$?"
    },
    // --- Problem 2: 4x + y = 10 and 2x - y = 2 ---
    {
      expression: "\\begin{cases} 4x + y = 10 \\\\ 2x - y = 2 \\end{cases}",
      solution: {
        alignedCoefficients: "4x + y = 10, 2x - y = 2", // Coefficients of y (1, -1) are already opposites
        eliminationOperation: "Add", // Add to eliminate y
        eliminatedEquation: "6x = 12", // (4x + y) + (2x - y) = 10 + 2
        solvedVariable: "x = 2", // Solve 6x = 12
        substitutionEquation: "2x - y = 2", // Can use either, choosing the simpler one
        finalVariableValue: "y = 2", // Substitute x=2 into 2x-y=2: 2(2)-y=2 -> 4-y=2 -> y=2
        verificationFirstEquation: "Yes, LHS = RHS (10 = 10)", // 4(2) + 2 = 8 + 2 = 10
        verificationSecondEquation: "Yes, LHS = RHS (2 = 2)"  // 2(2) - 2 = 4 - 2 = 2
      },
      explanation: {
        alignedCoefficients: "Look at the coefficients of $y$ in both equations. They are $1$ and $-1$. These are opposites, so no multiplication is needed. The equations are ready for elimination of $y$.",
        eliminationOperation: "Since the coefficients of $y$ are $1$ and $-1$ (opposites), we add the equations to eliminate $y$.",
        eliminatedEquation: "Adding the equations: $(4x + y) + (2x - y) = 10 + 2$. This simplifies to $4x + 2x + y - y = 12$, resulting in $6x = 12$.",
        solvedVariable: "Solve the equation $6x = 12$ by dividing both sides by $6$: $x = 2$.",
        substitutionEquation: "We have found $x = 2$. Now, substitute this value into one of the original equations to find $y$. The second equation, $2x - y = 2$, looks simpler for this substitution.",
        finalVariableValue: "Substitute $x = 2$ into $2x - y = 2$: $2(2) - y = 2$. Simplify: $4 - y = 2$. Subtract $4$ from both sides: $-y = 2 - 4$, so $-y = -2$. Multiply both sides by $-1$: $y = 2$.",
        verificationFirstEquation: "Check the solution $x=2, y=2$ in the first original equation $4x + y = 10$. Substitute: LHS = $4(2) + 2 = 8 + 2 = 10$. RHS = $10$. Since LHS = RHS, the solution is correct for this equation.",
        verificationSecondEquation: "Check the solution $x=2, y=2$ in the second original equation $2x - y = 2$. Substitute: LHS = $2(2) - 2 = 4 - 2 = 2$. RHS = $2$. Since LHS = RHS, the solution is correct for this equation."
      },
      hint: "Check the coefficients of $y$ in both equations. Are they the same or opposites? What operation (add/subtract) will eliminate $y$?"
    },
    // --- Problem 3: 3x + 2y = 12 and x - y = 1 ---
    {
      expression: "\\begin{cases} 3x + 2y = 12 \\\\ x - y = 1 \\end{cases}",
      solution: {
        alignedCoefficients: "3x + 2y = 12, 2x - 2y = 2", // Multiply second equation by 2 to align y coefficients
        eliminationOperation: "Add (for y)", // Add to eliminate y
        eliminatedEquation: "5x = 14", // (3x + 2y) + (2x - 2y) = 12 + 2
        solvedVariable: "x = 14/5", // Solve 5x = 14
        substitutionEquation: "x - y = 1", // Can use either, choosing the simpler one
        finalVariableValue: "y = 9/5", // Substitute x=14/5 into x-y=1: 14/5 - y = 1 -> y = 14/5 - 1 = 9/5
        verificationFirstEquation: "Yes, LHS = RHS (12 = 12)", // 3(14/5) + 2(9/5) = 42/5 + 18/5 = 60/5 = 12
        verificationSecondEquation: "Yes, LHS = RHS (1 = 1)"  // 14/5 - 9/5 = 5/5 = 1
      },
      explanation: {
        // Coefficients of x: 3 and 1 (need to multiply second by 3)
        // Coefficients of y: 2 and -1 (need to multiply second by 2)
        // Easier to align y coefficients (multiply by 2)
        alignedCoefficients: "Look at the coefficients of $x$ and $y$. For $x$: $3$ and $1$. For $y$: $2$ and $-1$. It's easier to make the $y$ coefficients equal in magnitude. Multiply the second equation by $2$: $2(x - y) = 2(1)$ becomes $2x - 2y = 2$. Now the $y$ coefficients are $2$ and $-2$.",
        eliminationOperation: "Since the coefficients of $y$ are now $2$ and $-2$ (opposites), we add the equations to eliminate $y$.",
        eliminatedEquation: "The equations are now $3x + 2y = 12$ and $2x - 2y = 2$. Adding them: $(3x + 2y) + (2x - 2y) = 12 + 2$. This simplifies to $3x + 2x + 2y - 2y = 14$, resulting in $5x = 14$.",
        solvedVariable: "Solve the equation $5x = 14$ by dividing both sides by $5$: $x = \\frac{14}{5}$.",
        substitutionEquation: "We have found $x = \\frac{14}{5}$. Now, substitute this value into one of the original equations to find $y$. The second original equation, $x - y = 1$, looks simpler for this substitution.",
        finalVariableValue: "Substitute $x = \\frac{14}{5}$ into $x - y = 1$: $\\frac{14}{5} - y = 1$. Subtract $\\frac{14}{5}$ from both sides: $-y = 1 - \\frac{14}{5} = \\frac{5}{5} - \\frac{14}{5} = -\\frac{9}{5}$. Multiply both sides by $-1$: $y = \\frac{9}{5}$.",
        verificationFirstEquation: "Check the solution $x=\\frac{14}{5}, y=\\frac{9}{5}$ in the first original equation $3x + 2y = 12$. Substitute: LHS = $3(\\frac{14}{5}) + 2(\\frac{9}{5}) = \\frac{42}{5} + \\frac{18}{5} = \\frac{60}{5} = 12$. RHS = $12$. Since LHS = RHS, the solution is correct for this equation.",
        verificationSecondEquation: "Check the solution $x=\\frac{14}{5}, y=\\frac{9}{5}$ in the second original equation $x - y = 1$. Substitute: LHS = $\\frac{14}{5} - \\frac{9}{5} = \\frac{5}{5} = 1$. RHS = $1$. Since LHS = RHS, the solution is correct for this equation."
      },
      hint: "The coefficients of $y$ are 2 and -1. What number can you multiply the second equation by to make the $y$ coefficients opposites? Align them first, then decide whether to add or subtract."
    }
  ]
};

export default function SolvingSimultaneousEquationsEliminationTool() {
  return (
    <MultiStepInteractiveComponent toolData={solvingSimultaneousEquationsEliminationData} />
  );
}
