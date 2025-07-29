// SolvingQuadraticEquationsFactoringTool.tsx
import MultiStepInteractiveComponent, { InteractiveToolData } from '../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Solving Quadratic Equations (Factoring Method)
const solvingQuadraticEquationsFactoringData: InteractiveToolData = {
  title: "Solving Quadratic Equations - Factoring Method",
  description: "Solve quadratic equations of the form $ax^2 + bx + c = 0$ by expressing them as a product of binomials.",
  theme: {
    primaryColor: 'teal', // Specify the primary color theme
    backgroundColorFrom: 'teal-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'cyan-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "standardForm",
      title: "Step 1: Standard Form",
      description: "Ensure the equation is in the standard form $ax^2 + bx + c = 0$. What is the equation in this form?",
      type: "mcq"
    },
    {
      id: "factorsOfAAndC",
      title: "Step 2a: Identify Factors (if $a=1$)",
      description: "Find two numbers that multiply to $c$ and add up to $b$. What are these two numbers?",
      type: "mcq"
    },
    {
      id: "factoredForm",
      title: "Step 2b: Write Factored Form",
      description: "Write the quadratic expression as a product of two binomials using the numbers found. What is the factored form?",
      type: "mcq"
    },
    {
      id: "zeroProductProperty",
      title: "Step 3: Apply Zero Product Property",
      description: "If the product of two factors is zero, at least one factor must be zero. Set each factor equal to zero.",
      type: "mcq"
    },
    {
      id: "linearEquations",
      title: "Step 4: Form Linear Equations",
      description: "Write the two separate linear equations obtained by setting each factor to zero.",
      type: "mcq"
    },
    {
      id: "solutions",
      title: "Step 5: Solve Linear Equations",
      description: "Solve each linear equation to find the values of $x$. What are the solutions?",
      type: "mcq"
    },
    {
      id: "verificationFirstSolution",
      title: "Step 6a: Check First Solution",
      description: "Substitute the first found value of $x$ back into the *original* equation. Is the left-hand side equal to zero?",
      type: "mcq"
    },
    {
      id: "verificationSecondSolution",
      title: "Step 6b: Check Second Solution",
      description: "Substitute the second found value of $x$ back into the *original* equation. Is the left-hand side equal to zero?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: x^2 + 5x + 6 = 0 ---
    {
      standardForm: ["x^2 + 5x + 6 = 0", "x^2 + 6x + 5 = 0", "x^2 + 5x + 6", "5x + x^2 + 6 = 0"],
      factorsOfAAndC: ["2 and 3", "1 and 6", "-2 and -3", "6 and 1"],
      factoredForm: ["(x + 2)(x + 3) = 0", "(x + 1)(x + 6) = 0", "(x - 2)(x - 3) = 0", "x^2 + 5x + 6 = 0"],
      zeroProductProperty: ["If (x + 2)(x + 3) = 0, then (x + 2) = 0 or (x + 3) = 0", "If (x + 2)(x + 3) = 0, then (x + 2) = 0 and (x + 3) = 0", "(x + 2) + (x + 3) = 0", "(x + 2) = (x + 3)"],
      linearEquations: ["x + 2 = 0 and x + 3 = 0", "x + 2 = 0 or x + 3 = 0", "(x + 2)(x + 3) = 0", "x = -2 and x = -3"],
      solutions: ["x = -2 and x = -3", "x = 2 and x = 3", "x = -2 or x = -3", "x = 2 or x = 3"],
      verificationFirstSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 4", "LHS = 6"],
      verificationSecondSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 9", "LHS = 6"]
    },
    // --- Problem 2: x^2 - 7x + 12 = 0 (Practice Example) ---
    {
      standardForm: ["x^2 - 7x + 12 = 0", "x^2 + 12 - 7x = 0", "x^2 - 7x + 12", "-7x + x^2 + 12 = 0"],
      factorsOfAAndC: ["-3 and -4", "3 and 4", "-1 and -12", "1 and 12"],
      factoredForm: ["(x - 3)(x - 4) = 0", "(x - 1)(x - 12) = 0", "(x + 3)(x + 4) = 0", "x^2 - 7x + 12 = 0"],
      zeroProductProperty: ["If (x - 3)(x - 4) = 0, then (x - 3) = 0 or (x - 4) = 0", "If (x - 3)(x - 4) = 0, then (x - 3) = 0 and (x - 4) = 0", "(x - 3) + (x - 4) = 0", "(x - 3) = (x - 4)"],
      linearEquations: ["x - 3 = 0 and x - 4 = 0", "x - 3 = 0 or x - 4 = 0", "(x - 3)(x - 4) = 0", "x = 3 and x = 4"],
      solutions: ["x = 3 and x = 4", "x = -3 and x = -4", "x = 3 or x = 4", "x = -3 or x = -4"],
      verificationFirstSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 9", "LHS = 12"],
      verificationSecondSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 16", "LHS = 12"]
    },
    // --- Problem 3: x^2 + 2x - 8 = 0 ---
    {
      standardForm: ["x^2 + 2x - 8 = 0", "x^2 - 8 + 2x = 0", "x^2 + 2x - 8", "2x + x^2 - 8 = 0"],
      factorsOfAAndC: ["4 and -2", "-4 and 2", "1 and -8", "-1 and 8"],
      factoredForm: ["(x + 4)(x - 2) = 0", "(x - 4)(x + 2) = 0", "(x + 1)(x - 8) = 0", "x^2 + 2x - 8 = 0"],
      zeroProductProperty: ["If (x + 4)(x - 2) = 0, then (x + 4) = 0 or (x - 2) = 0", "If (x + 4)(x - 2) = 0, then (x + 4) = 0 and (x - 2) = 0", "(x + 4) + (x - 2) = 0", "(x + 4) = (x - 2)"],
      linearEquations: ["x + 4 = 0 and x - 2 = 0", "x + 4 = 0 or x - 2 = 0", "(x + 4)(x - 2) = 0", "x = -4 and x = 2"],
      solutions: ["x = -4 and x = 2", "x = 4 and x = -2", "x = -4 or x = 2", "x = 4 or x = -2"],
      verificationFirstSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 16", "LHS = -8"],
      verificationSecondSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 4", "LHS = -8"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: x^2 + 5x + 6 = 0 ---
    {
      expression: "x^2 + 5x + 6 = 0",
      solution: {
        standardForm: "x^2 + 5x + 6 = 0", // Already in standard form
        factorsOfAAndC: "2 and 3", // Find p, q such that p*q = c=6 and p+q = b=5
        factoredForm: "(x + 2)(x + 3) = 0", // Write as (x+p)(x+q)
        zeroProductProperty: "If (x + 2)(x + 3) = 0, then (x + 2) = 0 or (x + 3) = 0", // State the property
        linearEquations: "x + 2 = 0 and x + 3 = 0", // Separate the equations
        solutions: "x = -2 and x = -3", // Solve the linear equations
        verificationFirstSolution: "Yes, LHS = 0", // Check x=-2: (-2)^2 + 5(-2) + 6 = 4 - 10 + 6 = 0
        verificationSecondSolution: "Yes, LHS = 0"  // Check x=-3: (-3)^2 + 5(-3) + 6 = 9 - 15 + 6 = 0
      },
      explanation: {
        standardForm: "The given equation $x^2 + 5x + 6 = 0$ is already written with the terms in descending order of powers of $x$, and it is set equal to zero. This is the standard form $ax^2 + bx + c = 0$, where $a=1$, $b=5$, and $c=6$.",
        factorsOfAAndC: "We need to find two numbers that multiply to give the constant term $c = 6$ and add up to give the coefficient of $x$, which is $b = 5$. Let's list the factor pairs of $6$: $1 \\times 6 = 6$ (sum $1+6=7$), $2 \\times 3 = 6$ (sum $2+3=5$). The pair $2$ and $3$ satisfies both conditions.",
        factoredForm: "Using the numbers $2$ and $3$ found in the previous step, we can write the quadratic expression $x^2 + 5x + 6$ as the product of two binomials: $(x + 2)(x + 3)$. The equation becomes $(x + 2)(x + 3) = 0$.",
        zeroProductProperty: "The Zero Product Property states that if the product of two factors is zero, then at least one of the factors must be zero. Applying this to $(x + 2)(x + 3) = 0$, we conclude that either $(x + 2) = 0$ or $(x + 3) = 0$.",
        linearEquations: "From the Zero Product Property, we get two separate linear equations to solve: $x + 2 = 0$ and $x + 3 = 0$.",
        solutions: "Solve the first equation $x + 2 = 0$ by subtracting $2$ from both sides: $x = -2$. Solve the second equation $x + 3 = 0$ by subtracting $3$ from both sides: $x = -3$. The solutions are $x = -2$ and $x = -3$.",
        verificationFirstSolution: "Check the first solution $x = -2$ by substituting it into the *original* equation $x^2 + 5x + 6 = 0$. LHS = $(-2)^2 + 5(-2) + 6 = 4 - 10 + 6 = 0$. RHS = $0$. Since LHS = RHS, $x = -2$ is correct.",
        verificationSecondSolution: "Check the second solution $x = -3$ by substituting it into the *original* equation $x^2 + 5x + 6 = 0$. LHS = $(-3)^2 + 5(-3) + 6 = 9 - 15 + 6 = 0$. RHS = $0$. Since LHS = RHS, $x = -3$ is correct."
      },
      hint: "You need two numbers that multiply to $6$ (the constant term) and add up to $5$ (the coefficient of $x$). What are those numbers? Use them to write the factored form $(x + ...)(x + ...) = 0$."
    },
    // --- Problem 2: x^2 - 7x + 12 = 0 ---
    {
      expression: "x^2 - 7x + 12 = 0",
      solution: {
        standardForm: "x^2 - 7x + 12 = 0", // Already in standard form
        factorsOfAAndC: "-3 and -4", // Find p, q such that p*q = c=12 and p+q = b=-7
        factoredForm: "(x - 3)(x - 4) = 0", // Write as (x+p)(x+q) where p=-3, q=-4
        zeroProductProperty: "If (x - 3)(x - 4) = 0, then (x - 3) = 0 or (x - 4) = 0",
        linearEquations: "x - 3 = 0 and x - 4 = 0",
        solutions: "x = 3 and x = 4", // Solve the linear equations
        verificationFirstSolution: "Yes, LHS = 0", // Check x=3: (3)^2 - 7(3) + 12 = 9 - 21 + 12 = 0
        verificationSecondSolution: "Yes, LHS = 0"  // Check x=4: (4)^2 - 7(4) + 12 = 16 - 28 + 12 = 0
      },
      explanation: {
        standardForm: "The given equation $x^2 - 7x + 12 = 0$ is already written with the terms in descending order of powers of $x$, and it is set equal to zero. This is the standard form $ax^2 + bx + c = 0$, where $a=1$, $b=-7$, and $c=12$.",
        factorsOfAAndC: "We need two numbers that multiply to $c = 12$ and add up to $b = -7$. Factor pairs of $12$: $1 \\times 12 = 12$ (sum $1+12=13$), $2 \\times 6 = 12$ (sum $2+6=8$), $3 \\times 4 = 12$ (sum $3+4=7$). We need the sum to be $-7$, so we use the negatives: $(-3) \\times (-4) = 12$ and $(-3) + (-4) = -7$. The numbers are $-3$ and $-4$.",
        factoredForm: "Using the numbers $-3$ and $-4$, the quadratic $x^2 - 7x + 12$ factors as $(x + (-3))(x + (-4))$, which simplifies to $(x - 3)(x - 4)$. The equation is $(x - 3)(x - 4) = 0$.",
        zeroProductProperty: "If the product $(x - 3)(x - 4)$ equals zero, then by the Zero Product Property, either $(x - 3) = 0$ or $(x - 4) = 0$.",
        linearEquations: "This gives us the two linear equations: $x - 3 = 0$ and $x - 4 = 0$.",
        solutions: "Solving $x - 3 = 0$ gives $x = 3$. Solving $x - 4 = 0$ gives $x = 4$. The solutions are $x = 3$ and $x = 4$.",
        verificationFirstSolution: "Check $x = 3$: LHS = $(3)^2 - 7(3) + 12 = 9 - 21 + 12 = 0$. RHS = $0$. Since LHS = RHS, $x = 3$ is correct.",
        verificationSecondSolution: "Check $x = 4$: LHS = $(4)^2 - 7(4) + 12 = 16 - 28 + 12 = 0$. RHS = $0$. Since LHS = RHS, $x = 4$ is correct."
      },
      hint: "Find two numbers that multiply to $12$ and add up to $-7$. Remember, if both numbers need to be negative to get a positive product and a negative sum. Use these numbers in the form $(x - ...)(x - ...) = 0$."
    },
    // --- Problem 3: x^2 + 2x - 8 = 0 ---
    {
      expression: "x^2 + 2x - 8 = 0",
      solution: {
        standardForm: "x^2 + 2x - 8 = 0", // Already in standard form
        factorsOfAAndC: "4 and -2", // Find p, q such that p*q = c=-8 and p+q = b=2
        factoredForm: "(x + 4)(x - 2) = 0", // Write as (x+p)(x+q) where p=4, q=-2
        zeroProductProperty: "If (x + 4)(x - 2) = 0, then (x + 4) = 0 or (x - 2) = 0",
        linearEquations: "x + 4 = 0 and x - 2 = 0",
        solutions: "x = -4 and x = 2", // Solve the linear equations
        verificationFirstSolution: "Yes, LHS = 0", // Check x=-4: (-4)^2 + 2(-4) - 8 = 16 - 8 - 8 = 0
        verificationSecondSolution: "Yes, LHS = 0"  // Check x=2: (2)^2 + 2(2) - 8 = 4 + 4 - 8 = 0
      },
      explanation: {
        standardForm: "The given equation $x^2 + 2x - 8 = 0$ is already written with the terms in descending order of powers of $x$, and it is set equal to zero. This is the standard form $ax^2 + bx + c = 0$, where $a=1$, $b=2$, and $c=-8$.",
        factorsOfAAndC: "We need two numbers that multiply to $c = -8$ and add up to $b = 2$. Factor pairs of $8$ (considering signs): $1 \\times 8 = 8$, $2 \\times 4 = 8$. We need a negative product, so one factor is positive and one is negative. We also need the sum to be positive ($+2$), so the larger absolute value number must be positive. Trying $4$ and $-2$: $4 \\times (-2) = -8$ and $4 + (-2) = 2$. This pair works.",
        factoredForm: "Using the numbers $4$ and $-2$, the quadratic $x^2 + 2x - 8$ factors as $(x + 4)(x + (-2))$, which simplifies to $(x + 4)(x - 2)$. The equation is $(x + 4)(x - 2) = 0$.",
        zeroProductProperty: "If the product $(x + 4)(x - 2)$ equals zero, then by the Zero Product Property, either $(x + 4) = 0$ or $(x - 2) = 0$.",
        linearEquations: "This gives us the two linear equations: $x + 4 = 0$ and $x - 2 = 0$.",
        solutions: "Solving $x + 4 = 0$ gives $x = -4$. Solving $x - 2 = 0$ gives $x = 2$. The solutions are $x = -4$ and $x = 2$.",
        verificationFirstSolution: "Check $x = -4$: LHS = $(-4)^2 + 2(-4) - 8 = 16 - 8 - 8 = 0$. RHS = $0$. Since LHS = RHS, $x = -4$ is correct.",
        verificationSecondSolution: "Check $x = 2$: LHS = $(2)^2 + 2(2) - 8 = 4 + 4 - 8 = 0$. RHS = $0$. Since LHS = RHS, $x = 2$ is correct."
      },
      hint: "You need two numbers that multiply to $-8$ and add up to $2$. Since the product is negative, one number is positive and the other is negative. Since the sum is positive, the positive number has a larger absolute value. What pair works? Use them in $(x + ...)(x - ...) = 0$."
    }
  ]
};

export default function SolvingQuadraticEquationsFactoringTool() {
  return (
    <MultiStepInteractiveComponent toolData={solvingQuadraticEquationsFactoringData} />
  );
}