// SolvingSimultaneousEquationsSubstitutionTool.tsx
import MultiStepInteractiveComponent, { InteractiveToolData } from '../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Solving Simultaneous Equations (Substitution Method)
const solvingSimultaneousEquationsSubstitutionData: InteractiveToolData = {
  title: "Solving Simultaneous Equations - Substitution Method",
  description: "Solve systems of two linear equations with two unknowns by expressing one variable in terms of the other.",
  theme: {
    primaryColor: 'amber', // Specify the primary color theme
    backgroundColorFrom: 'amber-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'orange-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "chosenEquation",
      title: "Step 1: Choose Equation to Rearrange",
      description: "Which equation will you solve for one variable (e.g., $x =$ ... or $y =$ ...)?",
      type: "mcq"
    },
    {
      id: "rearrangedEquation",
      title: "Step 2: Rearrange the Chosen Equation",
      description: "Solve the chosen equation for the selected variable. What is the resulting expression?",
      type: "mcq"
    },
    {
      id: "substitutionExpression",
      title: "Step 3: Identify Substitution Expression",
      description: "What expression will you substitute into the *other* equation?",
      type: "mcq"
    },
    {
      id: "substitutedEquation",
      title: "Step 4: Perform Substitution",
      description: "Substitute the expression into the other equation. What is the resulting single-variable equation?",
      type: "mcq"
    },
    {
      id: "solvedVariable",
      title: "Step 5: Solve for the First Variable",
      description: "Solve the single-variable equation obtained. What is the value of the first variable?",
      type: "mcq"
    },
    {
      id: "backSubstitutionEquation",
      title: "Step 6: Choose Equation for Back-Substitution",
      description: "Which of the original equations (or the rearranged one) will you substitute the found variable value into?",
      type: "mcq"
    },
    {
      id: "finalVariableValue",
      title: "Step 7: Solve for the Second Variable",
      description: "Substitute the known value into the chosen equation and solve for the remaining variable. What is its value?",
      type: "mcq"
    },
    {
      id: "verificationFirstEquation",
      title: "Step 8a: Check Solution (Equation 1)",
      description: "Substitute both found values ($x = ..., y = ...$) into the *first* original equation. Is the left-hand side equal to the right-hand side?",
      type: "mcq"
    },
    {
      id: "verificationSecondEquation",
      title: "Step 8b: Check Solution (Equation 2)",
      description: "Substitute both found values ($x = ..., y = ...$) into the *second* original equation. Is the left-hand side equal to the right-hand side?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: 3x + 2y = 11  and  x = y + 2 ---
    {
      chosenEquation: ["x = y + 2", "3x + 2y = 11", "\\text{Either equation}", "\\text{Neither equation}"],
      rearrangedEquation: ["x = y + 2", "y = x - 2", "3x + 2y = 11", "y = (11 - 3x)/2"],
      substitutionExpression: ["y + 2", "x - 2", "(11 - 3x)/2", "y"],
      substitutedEquation: ["3(y + 2) + 2y = 11", "3x + 2(x - 2) = 11", "(y + 2) = y + 2", "3((11 - 3x)/2) + 2y = 11"],
      solvedVariable: ["y = 1", "x = 3", "y = 2", "x = 1"],
      backSubstitutionEquation: ["x = y + 2", "3x + 2y = 11", "\\text{Either equation}", "\\text{Neither equation}"],
      finalVariableValue: ["x = 3", "y = 1", "x = 1", "y = 3"],
      verificationFirstEquation: ["Yes, LHS = RHS (11 = 11)", "No", "LHS = 9", "RHS = 11"],
      verificationSecondEquation: ["Yes, LHS = RHS (3 = 3)", "No", "LHS = 1", "RHS = 2"]
    },
    // --- Problem 2: 4x + y = 10 and 2x - y = 2 (Practice Example) ---
    {
      chosenEquation: ["2x - y = 2", "4x + y = 10", "\\text{Either equation}", "\\text{Neither equation}"],
      rearrangedEquation: ["y = 2x - 2", "y = 10 - 4x", "x = (10 - y)/4", "x = (y + 2)/2"],
      substitutionExpression: ["2x - 2", "10 - 4x", "(10 - y)/4", "(y + 2)/2"],
      substitutedEquation: ["4x + (2x - 2) = 10", "(2x - 2) = 2", "4((y + 2)/2) + y = 10", "2x - (10 - 4x) = 2"],
      solvedVariable: ["x = 2", "y = 2", "x = 5", "y = 10"],
      backSubstitutionEquation: ["y = 2x - 2", "4x + y = 10", "\\text{Either equation}", "\\text{Neither equation}"],
      finalVariableValue: ["y = 2", "x = 2", "y = 1", "x = 3"],
      verificationFirstEquation: ["Yes, LHS = RHS (10 = 10)", "No", "LHS = 8", "RHS = 10"],
      verificationSecondEquation: ["Yes, LHS = RHS (2 = 2)", "No", "LHS = 4", "RHS = 2"]
    },
    // --- Problem 3: x + y = 7 and 2x - y = 5 ---
    {
      chosenEquation: ["x + y = 7", "2x - y = 5", "\\text{Either equation}", "\\text{Neither equation}"],
      rearrangedEquation: ["y = 7 - x", "x = 7 - y", "y = 2x - 5", "x = (y + 5)/2"],
      substitutionExpression: ["7 - x", "7 - y", "2x - 5", "(y + 5)/2"],
      substitutedEquation: ["2x - (7 - x) = 5", "(7 - y) + y = 7", "2((y + 5)/2) - y = 5", "(7 - x) = 7 - x"],
      solvedVariable: ["x = 4", "y = 3", "x = 7", "y = 5"],
      backSubstitutionEquation: ["y = 7 - x", "x + y = 7", "\\text{Either equation}", "\\text{Neither equation}"],
      finalVariableValue: ["y = 3", "x = 4", "y = 7", "x = 3"],
      verificationFirstEquation: ["Yes, LHS = RHS (7 = 7)", "No", "LHS = 11", "RHS = 7"],
      verificationSecondEquation: ["Yes, LHS = RHS (5 = 5)", "No", "LHS = 3", "RHS = 5"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: 3x + 2y = 11  and  x = y + 2 ---
    {
      expression: "\\begin{cases} 3x + 2y = 11 \\\\ x = y + 2 \\end{cases}", // Using LaTeX cases environment for display
      solution: {
        chosenEquation: "x = y + 2", // Already solved for x
        rearrangedEquation: "x = y + 2", // No change needed
        substitutionExpression: "y + 2", // Expression for x to substitute
        substitutedEquation: "3(y + 2) + 2y = 11", // Substitute into first equation
        solvedVariable: "y = 1", // Solve 3(y+2)+2y=11 -> 5y+6=11 -> 5y=5
        backSubstitutionEquation: "x = y + 2", // Use the rearranged equation
        finalVariableValue: "x = 3", // Substitute y=1 into x=y+2
        verificationFirstEquation: "Yes, LHS = RHS (11 = 11)", // 3(3) + 2(1) = 9 + 2 = 11
        verificationSecondEquation: "Yes, LHS = RHS (3 = 3)"  // 3 = 1 + 2
      },
      explanation: {
        chosenEquation: "Look at the two equations. The second equation, $x = y + 2$, is already solved for $x$. This makes it the easiest choice for the substitution method.",
        rearrangedEquation: "The second equation is already in the form $x = y + 2$. No further rearrangement is needed.",
        substitutionExpression: "From the rearranged equation $x = y + 2$, the expression for $x$ is $y + 2$. This is what we will substitute.",
        substitutedEquation: "Substitute the expression $y + 2$ for $x$ in the *first* equation $3x + 2y = 11$. This gives $3(y + 2) + 2y = 11$.",
        solvedVariable: "Solve the equation $3(y + 2) + 2y = 11$. First, expand: $3y + 6 + 2y = 11$. Combine like terms: $5y + 6 = 11$. Subtract $6$ from both sides: $5y = 5$. Divide by $5$: $y = 1$.",
        backSubstitutionEquation: "We have found $y = 1$. Now we need to find $x$. We can substitute $y = 1$ into either the original first equation or the rearranged second equation. The rearranged second equation $x = y + 2$ is simpler for this step.",
        finalVariableValue: "Substitute $y = 1$ into the equation $x = y + 2$: $x = 1 + 2$. Therefore, $x = 3$.",
        verificationFirstEquation: "Check the solution $x=3, y=1$ in the first original equation $3x + 2y = 11$. Substitute: LHS = $3(3) + 2(1) = 9 + 2 = 11$. RHS = $11$. Since LHS = RHS, the solution is correct for this equation.",
        verificationSecondEquation: "Check the solution $x=3, y=1$ in the second original equation $x = y + 2$. Substitute: LHS = $x = 3$. RHS = $y + 2 = 1 + 2 = 3$. Since LHS = RHS, the solution is correct for this equation."
      },
      hint: "One equation is already solved for a variable. Which one? That's usually the best one to start with in substitution. What expression can you substitute into the other equation?"
    },
    // --- Problem 2: 4x + y = 10 and 2x - y = 2 ---
    {
      expression: "\\begin{cases} 4x + y = 10 \\\\ 2x - y = 2 \\end{cases}",
      solution: {
        chosenEquation: "2x - y = 2", // Choosing the second one
        rearrangedEquation: "y = 2x - 2", // Solve for y
        substitutionExpression: "2x - 2", // Expression for y to substitute
        substitutedEquation: "4x + (2x - 2) = 10", // Substitute into first equation
        solvedVariable: "x = 2", // Solve 4x+(2x-2)=10 -> 6x-2=10 -> 6x=12
        backSubstitutionEquation: "y = 2x - 2", // Use the rearranged equation
        finalVariableValue: "y = 2", // Substitute x=2 into y=2x-2
        verificationFirstEquation: "Yes, LHS = RHS (10 = 10)", // 4(2) + 2 = 8 + 2 = 10
        verificationSecondEquation: "Yes, LHS = RHS (2 = 2)"  // 2(2) - 2 = 4 - 2 = 2
      },
      explanation: {
        chosenEquation: "Look at the two equations. Neither is solved for a variable initially. However, the second equation $2x - y = 2$ has a $-y$ term, which might be slightly easier to isolate $y$. Let's choose this one.",
        rearrangedEquation: "Solve the second equation $2x - y = 2$ for $y$. Add $y$ to both sides: $2x = 2 + y$. Subtract $2$ from both sides: $2x - 2 = y$. This can be written as $y = 2x - 2$.",
        substitutionExpression: "From the rearranged equation $y = 2x - 2$, the expression for $y$ is $2x - 2$. This is what we will substitute.",
        substitutedEquation: "Substitute the expression $2x - 2$ for $y$ in the *first* equation $4x + y = 10$. This gives $4x + (2x - 2) = 10$.",
        solvedVariable: "Solve the equation $4x + (2x - 2) = 10$. First, remove parentheses: $4x + 2x - 2 = 10$. Combine like terms: $6x - 2 = 10$. Add $2$ to both sides: $6x = 12$. Divide by $6$: $x = 2$.",
        backSubstitutionEquation: "We have found $x = 2$. Now we need to find $y$. We can substitute $x = 2$ into either the original first equation or the rearranged second equation. Let's use the rearranged second equation $y = 2x - 2$ as it directly gives $y$.",
        finalVariableValue: "Substitute $x = 2$ into the equation $y = 2x - 2$: $y = 2(2) - 2$. Calculate: $y = 4 - 2$. Therefore, $y = 2$.",
        verificationFirstEquation: "Check the solution $x=2, y=2$ in the first original equation $4x + y = 10$. Substitute: LHS = $4(2) + 2 = 8 + 2 = 10$. RHS = $10$. Since LHS = RHS, the solution is correct for this equation.",
        verificationSecondEquation: "Check the solution $x=2, y=2$ in the second original equation $2x - y = 2$. Substitute: LHS = $2(2) - 2 = 4 - 2 = 2$. RHS = $2$. Since LHS = RHS, the solution is correct for this equation."
      },
      hint: "The hint suggests solving the second equation for $y$. Try that. Add $y$ to both sides, then subtract 2. What expression do you get for $y$? Substitute that into the first equation."
    },
    // --- Problem 3: x + y = 7 and 2x - y = 5 ---
    {
      expression: "\\begin{cases} x + y = 7 \\\\ 2x - y = 5 \\end{cases}",
      solution: {
        chosenEquation: "x + y = 7", // Choosing the first one
        rearrangedEquation: "y = 7 - x", // Solve for y
        substitutionExpression: "7 - x", // Expression for y to substitute
        substitutedEquation: "2x - (7 - x) = 5", // Substitute into second equation
        solvedVariable: "x = 4", // Solve 2x-(7-x)=5 -> 2x-7+x=5 -> 3x-7=5 -> 3x=12
        backSubstitutionEquation: "y = 7 - x", // Use the rearranged equation
        finalVariableValue: "y = 3", // Substitute x=4 into y=7-x
        verificationFirstEquation: "Yes, LHS = RHS (7 = 7)", // 4 + 3 = 7
        verificationSecondEquation: "Yes, LHS = RHS (5 = 5)"  // 2(4) - 3 = 8 - 3 = 5
      },
      explanation: {
        chosenEquation: "Look at the two equations. Neither is solved for a variable. Let's choose the first equation $x + y = 7$ to solve for one of the variables. Solving for $y$ might be straightforward.",
        rearrangedEquation: "Solve the first equation $x + y = 7$ for $y$. Subtract $x$ from both sides: $y = 7 - x$.",
        substitutionExpression: "From the rearranged equation $y = 7 - x$, the expression for $y$ is $7 - x$. This is what we will substitute.",
        substitutedEquation: "Substitute the expression $7 - x$ for $y$ in the *second* equation $2x - y = 5$. This gives $2x - (7 - x) = 5$. Note the parentheses around $(7 - x)$ because it's being subtracted.",
        solvedVariable: "Solve the equation $2x - (7 - x) = 5$. First, distribute the negative sign: $2x - 7 + x = 5$. Combine like terms: $3x - 7 = 5$. Add $7$ to both sides: $3x = 12$. Divide by $3$: $x = 4$.",
        backSubstitutionEquation: "We have found $x = 4$. Now we need to find $y$. We can substitute $x = 4$ into either the original second equation or the rearranged first equation. Let's use the rearranged first equation $y = 7 - x$ as it directly gives $y$.",
        finalVariableValue: "Substitute $x = 4$ into the equation $y = 7 - x$: $y = 7 - 4$. Therefore, $y = 3$.",
        verificationFirstEquation: "Check the solution $x=4, y=3$ in the first original equation $x + y = 7$. Substitute: LHS = $4 + 3 = 7$. RHS = $7$. Since LHS = RHS, the solution is correct for this equation.",
        verificationSecondEquation: "Check the solution $x=4, y=3$ in the second original equation $2x - y = 5$. Substitute: LHS = $2(4) - 3 = 8 - 3 = 5$. RHS = $5$. Since LHS = RHS, the solution is correct for this equation."
      },
      hint: "Pick one equation and solve it for one variable. Let's try solving the first equation $x + y = 7$ for $y$. What do you get? Then, substitute that expression for $y$ into the second equation $2x - y = 5$."
    }
  ]
};

export default function SolvingSimultaneousEquationsSubstitutionTool() {
  return (
    <MultiStepInteractiveComponent toolData={solvingSimultaneousEquationsSubstitutionData} />
  );
}