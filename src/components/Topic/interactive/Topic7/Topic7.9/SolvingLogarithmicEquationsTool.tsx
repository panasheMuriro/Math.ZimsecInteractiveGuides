// SolvingLogarithmicEquationsTool.tsx
import MultiStepInteractiveComponent, { InteractiveToolData } from '../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Solving Logarithmic Equations
const solvingLogarithmicEquationsData: InteractiveToolData = {
  title: "Solving Logarithmic Equations",
  description: "Solve equations where the variable is inside a logarithm by converting to exponential form and checking for valid solutions.",
  theme: {
    primaryColor: 'amber', // Specify the primary color theme
    backgroundColorFrom: 'indigo-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'purple-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "isolateLogarithm",
      title: "Step 1: Isolate the Logarithm",
      description: "If the logarithm is not already by itself on one side, perform operations to isolate it. What is the equation after isolation?",
      type: "mcq"
    },
    {
      id: "convertToExponential",
      title: "Step 2: Convert to Exponential Form",
      description: "Rewrite the logarithmic equation $\\log_b(A) = C$ in its exponential equivalent $b^C = A$. What is the exponential equation?",
      type: "mcq"
    },
    {
      id: "solveResultingEquation",
      title: "Step 3: Solve the Resulting Equation",
      description: "Solve the equation obtained after converting to exponential form to find the value(s) of the variable.",
      type: "mcq"
    },
    {
      id: "checkSolutions",
      title: "Step 4: Check for Valid Solutions",
      description: "Substitute the found value(s) back into the *original* logarithmic equation. Are the arguments of all logarithms positive?",
      type: "mcq"
    },
    {
      id: "stateFinalSolution",
      title: "Step 5: State the Final Solution",
      description: "Based on the checks, which value(s) of the variable are valid solutions to the original equation?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: log_3(x) = 2 ---
    {
      isolateLogarithm: ["\\log_3(x) = 2", "x = \\log_3(2)", "3^x = 2", "x = 2"],
      convertToExponential: ["3^2 = x", "x = 3^2", "2^3 = x", "x = 2^3"],
      solveResultingEquation: ["x = 9", "x = 8", "x = 6", "x = 3"],
      checkSolutions: ["x = 9 is valid (9 > 0)", "x = 9 is invalid", "No check needed", "x = 9 is valid (3 > 0)"],
      stateFinalSolution: ["x = 9", "x = 3", "No solution", "x = 8"]
    },
    // --- Problem 2: log_2(x) + log_2(x - 1) = 1 ---
    {
      isolateLogarithm: ["\\log_2(x(x - 1)) = 1", "\\log_2(x) + \\log_2(x - 1) = 1", "x + (x - 1) = 1", "2^{\\log_2(x)} + 2^{\\log_2(x-1)} = 2^1"],
      convertToExponential: ["2^1 = x(x - 1)", "x(x - 1) = 2^1", "2^{x(x-1)} = 1", "x + (x - 1) = 2"],
      solveResultingEquation: ["x = 2 or x = -1", "x = 2", "x = -1", "x = 1 or x = 2"],
      checkSolutions: ["x = 2 valid, x = -1 invalid", "Both x = 2 and x = -1 valid", "x = 2 invalid, x = -1 valid", "Neither is valid"],
      stateFinalSolution: ["x = 2", "x = -1", "x = 2 or x = -1", "No solution"]
    },
    // --- Problem 3: log_5(2x) - log_5(x - 1) = 1 ---
    {
      isolateLogarithm: ["\\log_5(\\frac{2x}{x - 1}) = 1", "\\log_5(2x) - \\log_5(x - 1) = 1", "\\frac{\\log_5(2x)}{\\log_5(x - 1)} = 1", "2x - (x - 1) = 1"],
      convertToExponential: ["5^1 = \\frac{2x}{x - 1}", "\\frac{2x}{x - 1} = 5^1", "5^{\\frac{2x}{x-1}} = 1", "2x - (x - 1) = 5"],
      solveResultingEquation: ["x = \\frac{5}{3}", "x = 5", "x = 3", "x = \\frac{3}{5}"],
      checkSolutions: ["x = 5/3 is valid (2*5/3 > 0 and 5/3 - 1 > 0)", "x = 5/3 is invalid", "No check needed", "x = 5/3 is valid (5/3 > 0)"],
      stateFinalSolution: ["x = \\frac{5}{3}", "x = 5", "x = 3", "No solution"]
    },
     // --- Problem 4: log_4(x + 3) = 2 (Practice Example) ---
     {
        isolateLogarithm: ["\\log_4(x + 3) = 2", "x + 3 = \\log_4(2)", "4^{x+3} = 2", "x = 2 - 3"],
        convertToExponential: ["4^2 = x + 3", "x + 3 = 4^2", "2^4 = x + 3", "x = 4^2 - 3"],
        solveResultingEquation: ["x = 13", "x = 16", "x = 19", "x = 1"],
        checkSolutions: ["x = 13 is valid (13 + 3 > 0)", "x = 13 is invalid", "No check needed", "x = 13 is valid (4 > 0)"],
        stateFinalSolution: ["x = 13", "x = 16", "x = 19", "x = 1"]
      }
  ],
  practiceProblems: [
    // --- Problem 1: log_3(x) = 2 ---
    {
      expression: "\\log_3(x) = 2",
      solution: {
        isolateLogarithm: "\\log_3(x) = 2", // Already isolated
        convertToExponential: "3^2 = x", // Convert log_b(A) = C to b^C = A
        solveResultingEquation: "x = 9", // Solve 3^2 = 9
        checkSolutions: "x = 9 is valid (9 > 0)", // Check if argument x is positive
        stateFinalSolution: "x = 9" // Final valid solution
      },
      explanation: {
        isolateLogarithm: "The logarithmic term $\\log_3(x)$ is already isolated on the left side of the equation $\\log_3(x) = 2$.",
        convertToExponential: "To solve for $x$, we convert the logarithmic equation to its exponential form. The definition $\\log_b(A) = C$ is equivalent to $b^C = A$. Applying this to $\\log_3(x) = 2$, we get $3^2 = x$.",
        solveResultingEquation: "Calculate the left side of the exponential equation: $3^2 = 3 \\times 3 = 9$. Therefore, $x = 9$.",
        checkSolutions: "It's crucial to check the solution in the original equation because logarithms are only defined for positive arguments. Substitute $x = 9$ back into the argument of the logarithm in the original equation: $x = 9$. Since $9 > 0$, the argument is positive, and the logarithm is defined. The solution is valid.",
        stateFinalSolution: "After verifying that $x = 9$ satisfies the original equation and makes the logarithm defined, we conclude that the solution is $x = 9$."
      },
      hint: "The logarithm is already by itself. How do you convert a logarithmic equation like $\\log_b(x) = y$ into an exponential equation? What number, when 3 is raised to the power of 2, gives you $x$?"
    },
    // --- Problem 2: log_2(x) + log_2(x - 1) = 1 ---
    {
      expression: "\\log_2(x) + \\log_2(x - 1) = 1",
      solution: {
        isolateLogarithm: "\\log_2(x(x - 1)) = 1", // Use Product Rule
        convertToExponential: "2^1 = x(x - 1)", // Convert log_b(A) = C to b^C = A
        solveResultingEquation: "x = 2 \\text{ or } x = -1", // Solve x^2 - x = 2
        checkSolutions: "x = 2 valid, x = -1 invalid", // Check arguments x>0 and x-1>0
        stateFinalSolution: "x = 2" // Final valid solution
      },
      explanation: {
        isolateLogarithm: "The equation has two logarithms being added. We can use the Product Rule of logarithms, which states $\\log_b(m) + \\log_b(n) = \\log_b(mn)$. Applying this: $\\log_2(x) + \\log_2(x - 1) = \\log_2(x \\cdot (x - 1)) = \\log_2(x(x - 1))$. The equation becomes $\\log_2(x(x - 1)) = 1$.",
        convertToExponential: "Now we have a single logarithm equal to a number. Convert $\\log_2(x(x - 1)) = 1$ to exponential form using $\\log_b(A) = C \\Rightarrow b^C = A$. This gives $2^1 = x(x - 1)$.",
        solveResultingEquation: "Simplify the exponential equation: $2 = x(x - 1)$. Expand the right side: $2 = x^2 - x$. Rearrange to standard quadratic form: $x^2 - x - 2 = 0$. Factor the quadratic: $(x - 2)(x + 1) = 0$. Set each factor to zero: $x - 2 = 0$ gives $x = 2$, and $x + 1 = 0$ gives $x = -1$. The potential solutions are $x = 2$ and $x = -1$.",
        checkSolutions: "We must check both potential solutions in the *original* equation because logarithms require positive arguments. 1. For $x = 2$: The arguments are $x = 2$ and $x - 1 = 2 - 1 = 1$. Both $2 > 0$ and $1 > 0$, so both logarithms are defined. This solution is valid. 2. For $x = -1$: The arguments are $x = -1$ and $x - 1 = -1 - 1 = -2$. Since $-1 < 0$ and $-2 < 0$, both logarithms $\\log_2(-1)$ and $\\log_2(-2)$ are undefined. This solution is invalid and must be rejected.",
        stateFinalSolution: "Only the solution $x = 2$ resulted in valid, positive arguments for all logarithms in the original equation. Therefore, the final solution is $x = 2$."
      },
      hint: "You are adding two logs with the same base. Is there a logarithm property that combines the sum of logs? Apply that first to get a single log equal to a number. Then, convert to exponential form. Don't forget to solve the resulting equation and check your answers!"
    },
    // --- Problem 3: log_5(2x) - log_5(x - 1) = 1 ---
    {
      expression: "\\log_5(2x) - \\log_5(x - 1) = 1",
      solution: {
        isolateLogarithm: "\\log_5(\\frac{2x}{x - 1}) = 1", // Use Quotient Rule
        convertToExponential: "5^1 = \\frac{2x}{x - 1}", // Convert log_b(A) = C to b^C = A
        solveResultingEquation: "x = \\frac{5}{3}", // Solve 5 = 2x/(x-1)
        checkSolutions: "x = 5/3 is valid (2*5/3 > 0 and 5/3 - 1 > 0)", // Check arguments 2x>0 and x-1>0
        stateFinalSolution: "x = \\frac{5}{3}" // Final valid solution
      },
      explanation: {
        isolateLogarithm: "The equation has two logarithms being subtracted. We can use the Quotient Rule of logarithms, which states $\\log_b(m) - \\log_b(n) = \\log_b(\\frac{m}{n})$. Applying this: $\\log_5(2x) - \\log_5(x - 1) = \\log_5(\\frac{2x}{x - 1})$. The equation becomes $\\log_5(\\frac{2x}{x - 1}) = 1$.",
        convertToExponential: "Convert the single logarithm equation $\\log_5(\\frac{2x}{x - 1}) = 1$ to exponential form using $\\log_b(A) = C \\Rightarrow b^C = A$. This gives $5^1 = \\frac{2x}{x - 1}$.",
        solveResultingEquation: "Simplify the left side: $5 = \\frac{2x}{x - 1}$. To solve for $x$, cross-multiply: $5(x - 1) = 2x$. Distribute on the left: $5x - 5 = 2x$. Subtract $2x$ from both sides: $5x - 2x - 5 = 0$, which simplifies to $3x - 5 = 0$. Add $5$ to both sides: $3x = 5$. Divide by $3$: $x = \\frac{5}{3}$.",
        checkSolutions: "Check the solution $x = \\frac{5}{3}$ in the original equation's arguments. 1. Argument of the first log: $2x = 2 \\cdot \\frac{5}{3} = \\frac{10}{3}$. Since $\\frac{10}{3} > 0$, $\\log_5(\\frac{10}{3})$ is defined. 2. Argument of the second log: $x - 1 = \\frac{5}{3} - 1 = \\frac{5}{3} - \\frac{3}{3} = \\frac{2}{3}$. Since $\\frac{2}{3} > 0$, $\\log_5(\\frac{2}{3})$ is defined. Both arguments are positive, so the solution $x = \\frac{5}{3}$ is valid.",
        stateFinalSolution: "The solution $x = \\frac{5}{3}$ makes both arguments of the logarithms in the original equation positive. Therefore, it is the valid solution."
      },
      hint: "You are subtracting two logs with the same base. Which logarithm property deals with the difference of logs? Use it to combine the logs first. Then, convert the resulting single log equation to exponential form and solve for x. Remember to check that your answer makes the insides of the original logs positive."
    },
     // --- Problem 4: log_4(x + 3) = 2 ---
     {
        expression: "\\log_4(x + 3) = 2",
        solution: {
            isolateLogarithm: "\\log_4(x + 3) = 2", // Already isolated
            convertToExponential: "4^2 = x + 3", // Convert log_b(A) = C to b^C = A
            solveResultingEquation: "x = 13", // Solve 16 = x + 3
            checkSolutions: "x = 13 is valid (13 + 3 > 0)", // Check if argument x+3 is positive
            stateFinalSolution: "x = 13" // Final valid solution
        },
        explanation: {
            isolateLogarithm: "The logarithmic term $\\log_4(x + 3)$ is already isolated on the left side of the equation $\\log_4(x + 3) = 2$.",
            convertToExponential: "To solve for $x$, we convert the logarithmic equation to its exponential form. Using the definition $\\log_b(A) = C \\Rightarrow b^C = A$, we convert $\\log_4(x + 3) = 2$ to $4^2 = x + 3$.",
            solveResultingEquation: "Calculate the left side of the exponential equation: $4^2 = 16$. So, the equation is $16 = x + 3$. Subtract $3$ from both sides to solve for $x$: $16 - 3 = x$, which gives $x = 13$.",
            checkSolutions: "It's important to check the solution in the original equation. Substitute $x = 13$ back into the argument of the logarithm: $x + 3 = 13 + 3 = 16$. Since $16 > 0$, the argument is positive, and the logarithm $\\log_4(16)$ is defined. The solution is valid.",
            stateFinalSolution: "Having verified that $x = 13$ satisfies the original equation and keeps the logarithm's argument positive, we conclude that the solution is $x = 13$."
        },
        hint: "The logarithm $\\log_4(x + 3)$ is already isolated. Convert this logarithmic equation directly to its exponential form $b^C = A$. What is $4$ raised to the power of $2$? Set that equal to $x + 3$ and solve for $x$. Finally, check that your value for $x$ makes the expression inside the log positive."
    }
  ]
};

export default function SolvingLogarithmicEquationsTool() {
  return (
    <MultiStepInteractiveComponent toolData={solvingLogarithmicEquationsData} />
  );
}
