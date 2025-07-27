// SolvingQuadraticEquationsCompletingSquareTool.tsx
import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData } from '../Templates/AlgebraMultiStepInteractiveTemplate'; // Adjust path as needed

// Define data for Solving Quadratic Equations (Completing the Square Method)
const solvingQuadraticEquationsCompletingSquareData: InteractiveToolData = {
  title: "Solving Quadratic Equations - Completing the Square",
  description: "Solve quadratic equations by transforming them into perfect square form and taking square roots.",
  theme: {
    primaryColor: 'indigo', // Specify the primary color theme
    backgroundColorFrom: 'indigo-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'purple-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "standardForm",
      title: "Step 1: Standard Form",
      description: "Ensure the equation is in the standard form $ax^2 + bx + c = 0$. What is the equation in this form?",
      type: "mcq"
    },
    {
      id: "coefficientA",
      title: "Step 2: Coefficient of $x^2$",
      description: "What is the coefficient $a$ of the $x^2$ term?",
      type: "mcq"
    },
    {
      id: "moveConstant",
      title: "Step 3: Move Constant Term",
      description: "Move the constant term $c$ to the right side of the equation. What does the equation look like now?",
      type: "mcq"
    },
    {
      id: "calculateBOver2Squared",
      title: "Step 4a: Calculate $(\\frac{b}{2})^2$",
      description: "Find the value of $(\\frac{b}{2})^2$, where $b$ is the coefficient of $x$. What is this value?",
      type: "mcq"
    },
    {
      id: "addSquareToBothSides",
      title: "Step 4b: Add to Both Sides",
      description: "Add the value calculated in the previous step to both sides of the equation. What is the resulting equation?",
      type: "mcq"
    },
    {
      id: "factoredForm",
      title: "Step 5a: Factor Perfect Square",
      description: "Factor the left side of the equation into a perfect square trinomial. What is the factored form?",
      type: "mcq"
    },
    {
      id: "takeSquareRoot",
      title: "Step 5b: Take Square Root",
      description: "Take the square root of both sides of the equation. Remember to include the $\\pm$ symbol. What equation do you get?",
      type: "mcq"
    },
    {
      id: "solveForX1",
      title: "Step 6a: Solve for $x$ (Solution 1)",
      description: "Solve one of the resulting linear equations (e.g., $x + ... = +...$) to find the first value of $x$.",
      type: "mcq"
    },
    {
      id: "solveForX2",
      title: "Step 6b: Solve for $x$ (Solution 2)",
      description: "Solve the other resulting linear equation (e.g., $x + ... = -...$) to find the second value of $x$.",
      type: "mcq"
    },
    {
      id: "verificationFirstSolution",
      title: "Step 7a: Check First Solution",
      description: "Substitute the first found value of $x$ back into the *original* equation. Is the left-hand side equal to zero?",
      type: "mcq"
    },
    {
      id: "verificationSecondSolution",
      title: "Step 7b: Check Second Solution",
      description: "Substitute the second found value of $x$ back into the *original* equation. Is the left-hand side equal to zero?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: x^2 + 6x + 5 = 0 ---
    {
      standardForm: ["x^2 + 6x + 5 = 0", "x^2 + 5 + 6x = 0", "x^2 + 6x = -5", "6x + x^2 + 5 = 0"],
      coefficientA: ["1", "6", "5", "2"],
      moveConstant: ["x^2 + 6x = -5", "x^2 + 6x + 5 = 0", "x^2 + 6x = 5", "6x + x^2 = -5"],
      calculateBOver2Squared: ["9", "3", "6", "18"],
      addSquareToBothSides: ["x^2 + 6x + 9 = 4", "x^2 + 6x + 9 = -5", "(x + 3)^2 = 4", "x^2 + 6x = 4"],
      factoredForm: ["(x + 3)^2 = 4", "x^2 + 6x + 9 = 4", "(x + 3)^2 = -5", "x^2 + 6x + 9 = -5"],
      takeSquareRoot: ["x + 3 = \\pm 2", "x + 3 = 2", "x + 3 = -2", "(x + 3) = \\pm \\sqrt{4}"],
      solveForX1: ["x = -1", "x = -3 + 2", "x = -5", "x = 1"],
      solveForX2: ["x = -5", "x = -3 - 2", "x = -1", "x = -7"],
      verificationFirstSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 1", "LHS = 5"],
      verificationSecondSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 25", "LHS = 5"]
    },
    // --- Problem 2: x^2 - 4x - 5 = 0 (Practice Example) ---
    {
      standardForm: ["x^2 - 4x - 5 = 0", "x^2 - 5 - 4x = 0", "x^2 - 4x = 5", "-4x + x^2 - 5 = 0"],
      coefficientA: ["1", "-4", "-5", "2"],
      moveConstant: ["x^2 - 4x = 5", "x^2 - 4x - 5 = 0", "x^2 - 4x = -5", "-4x + x^2 = 5"],
      calculateBOver2Squared: ["4", "-2", "2", "16"],
      addSquareToBothSides: ["x^2 - 4x + 4 = 9", "x^2 - 4x + 4 = 5", "(x - 2)^2 = 9", "x^2 - 4x = 9"],
      factoredForm: ["(x - 2)^2 = 9", "x^2 - 4x + 4 = 9", "(x - 2)^2 = 5", "x^2 - 4x + 4 = -5"],
      takeSquareRoot: ["x - 2 = \\pm 3", "x - 2 = 3", "x - 2 = -3", "(x - 2) = \\pm \\sqrt{9}"],
      solveForX1: ["x = 5", "x = 2 + 3", "x = -1", "x = 3"],
      solveForX2: ["x = -1", "x = 2 - 3", "x = 5", "x = -3"],
      verificationFirstSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 25", "LHS = -5"],
      verificationSecondSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 1", "LHS = -5"]
    },
    // --- Problem 3: x^2 + 8x + 12 = 0 ---
    {
      standardForm: ["x^2 + 8x + 12 = 0", "x^2 + 12 + 8x = 0", "x^2 + 8x = -12", "8x + x^2 + 12 = 0"],
      coefficientA: ["1", "8", "12", "2"],
      moveConstant: ["x^2 + 8x = -12", "x^2 + 8x + 12 = 0", "x^2 + 8x = 12", "8x + x^2 = -12"],
      calculateBOver2Squared: ["16", "4", "8", "64"],
      addSquareToBothSides: ["x^2 + 8x + 16 = 4", "x^2 + 8x + 16 = -12", "(x + 4)^2 = 4", "x^2 + 8x = 4"],
      factoredForm: ["(x + 4)^2 = 4", "x^2 + 8x + 16 = 4", "(x + 4)^2 = -12", "x^2 + 8x + 16 = -12"],
      takeSquareRoot: ["x + 4 = \\pm 2", "x + 4 = 2", "x + 4 = -2", "(x + 4) = \\pm \\sqrt{4}"],
      solveForX1: ["x = -2", "x = -4 + 2", "x = -6", "x = 2"],
      solveForX2: ["x = -6", "x = -4 - 2", "x = -2", "x = -8"],
      verificationFirstSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 4", "LHS = 12"],
      verificationSecondSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 36", "LHS = 12"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: x^2 + 6x + 5 = 0 ---
    {
      expression: "x^2 + 6x + 5 = 0",
      solution: {
        standardForm: "x^2 + 6x + 5 = 0", // Already in standard form
        coefficientA: "1", // Coefficient of x^2
        moveConstant: "x^2 + 6x = -5", // Move +5 to the right
        calculateBOver2Squared: "9", // b=6, (6/2)^2 = 3^2 = 9
        addSquareToBothSides: "x^2 + 6x + 9 = 4", // Add 9 to both sides: -5 + 9 = 4
        factoredForm: "(x + 3)^2 = 4", // Factor left side
        takeSquareRoot: "x + 3 = \\pm 2", // Take sqrt of both sides
        solveForX1: "x = -1", // x + 3 = 2 -> x = -1
        solveForX2: "x = -5", // x + 3 = -2 -> x = -5
        verificationFirstSolution: "Yes, LHS = 0", // Check x=-1: (-1)^2 + 6(-1) + 5 = 1 - 6 + 5 = 0
        verificationSecondSolution: "Yes, LHS = 0"  // Check x=-5: (-5)^2 + 6(-5) + 5 = 25 - 30 + 5 = 0
      },
      explanation: {
        standardForm: "The given equation $x^2 + 6x + 5 = 0$ is already written with the terms in descending order of powers of $x$, and it is set equal to zero. This is the standard form $ax^2 + bx + c = 0$.",
        coefficientA: "The coefficient of the $x^2$ term is the number multiplying $x^2$. In $x^2 + 6x + 5$, the coefficient of $x^2$ is $1$ (since $x^2 = 1 \\cdot x^2$).",
        moveConstant: "To complete the square, we need to isolate the $x$ terms. We move the constant term $+5$ to the right side by subtracting $5$ from both sides: $x^2 + 6x + 5 - 5 = 0 - 5$, which simplifies to $x^2 + 6x = -5$.",
        calculateBOver2Squared: "The next step involves adding a specific value to both sides to create a perfect square trinomial. This value is $(\\frac{b}{2})^2$, where $b$ is the coefficient of the $x$ term. Here, $b = 6$. So, we calculate $(\\frac{6}{2})^2 = (3)^2 = 9$.",
        addSquareToBothSides: "We add the value $9$, calculated in the previous step, to both sides of the equation $x^2 + 6x = -5$. This gives $x^2 + 6x + 9 = -5 + 9$. Simplifying the right side, we get $x^2 + 6x + 9 = 4$.",
        factoredForm: "The left side of the equation $x^2 + 6x + 9$ is now a perfect square trinomial. It can be factored as the square of a binomial. Since half of the coefficient of $x$ (which was 6) is 3, the binomial is $(x + 3)$. Therefore, $x^2 + 6x + 9 = (x + 3)^2$. The equation becomes $(x + 3)^2 = 4$.",
        takeSquareRoot: "To solve for $x$, we take the square root of both sides of the equation $(x + 3)^2 = 4$. Remember that taking the square root introduces a $\\pm$ sign: $\\sqrt{(x + 3)^2} = \\pm \\sqrt{4}$. This simplifies to $x + 3 = \\pm 2$.",
        solveForX1: "The equation $x + 3 = \\pm 2$ represents two separate linear equations. First, consider the positive case: $x + 3 = 2$. Subtract $3$ from both sides to solve for $x$: $x = 2 - 3 = -1$.",
        solveForX2: "Now, consider the negative case from $x + 3 = \\pm 2$: $x + 3 = -2$. Subtract $3$ from both sides to solve for $x$: $x = -2 - 3 = -5$.",
        verificationFirstSolution: "Check the first solution $x = -1$ by substituting it into the *original* equation $x^2 + 6x + 5 = 0$. LHS = $(-1)^2 + 6(-1) + 5 = 1 - 6 + 5 = 0$. RHS = $0$. Since LHS = RHS, $x = -1$ is correct.",
        verificationSecondSolution: "Check the second solution $x = -5$ by substituting it into the *original* equation $x^2 + 6x + 5 = 0$. LHS = $(-5)^2 + 6(-5) + 5 = 25 - 30 + 5 = 0$. RHS = $0$. Since LHS = RHS, $x = -5$ is correct."
      },
      hint: "Start by moving the constant term (+5) to the right side. Then, find $(\\frac{6}{2})^2$ and add that number to both sides. Factor the left side into a perfect square, take the square root of both sides (remember $\\pm$), and solve the two resulting equations."
    },
    // --- Problem 2: x^2 - 4x - 5 = 0 ---
    {
      expression: "x^2 - 4x - 5 = 0",
      solution: {
        standardForm: "x^2 - 4x - 5 = 0", // Already in standard form
        coefficientA: "1", // Coefficient of x^2
        moveConstant: "x^2 - 4x = 5", // Move -5 to the right
        calculateBOver2Squared: "4", // b=-4, ((-4)/2)^2 = (-2)^2 = 4
        addSquareToBothSides: "x^2 - 4x + 4 = 9", // Add 4 to both sides: 5 + 4 = 9
        factoredForm: "(x - 2)^2 = 9", // Factor left side
        takeSquareRoot: "x - 2 = \\pm 3", // Take sqrt of both sides
        solveForX1: "x = 5", // x - 2 = 3 -> x = 5
        solveForX2: "x = -1", // x - 2 = -3 -> x = -1
        verificationFirstSolution: "Yes, LHS = 0", // Check x=5: (5)^2 - 4(5) - 5 = 25 - 20 - 5 = 0
        verificationSecondSolution: "Yes, LHS = 0"  // Check x=-1: (-1)^2 - 4(-1) - 5 = 1 + 4 - 5 = 0
      },
      explanation: {
        standardForm: "The given equation $x^2 - 4x - 5 = 0$ is already written with the terms in descending order of powers of $x$, and it is set equal to zero. This is the standard form $ax^2 + bx + c = 0$.",
        coefficientA: "The coefficient of the $x^2$ term is the number multiplying $x^2$. In $x^2 - 4x - 5$, the coefficient of $x^2$ is $1$.",
        moveConstant: "To complete the square, we need to isolate the $x$ terms. We move the constant term $-5$ to the right side by adding $5$ to both sides: $x^2 - 4x - 5 + 5 = 0 + 5$, which simplifies to $x^2 - 4x = 5$.",
        calculateBOver2Squared: "We calculate $(\\frac{b}{2})^2$, where $b$ is the coefficient of the $x$ term. Here, $b = -4$. So, we calculate $(\\frac{-4}{2})^2 = (-2)^2 = 4$.",
        addSquareToBothSides: "We add the value $4$ to both sides of the equation $x^2 - 4x = 5$. This gives $x^2 - 4x + 4 = 5 + 4$. Simplifying the right side, we get $x^2 - 4x + 4 = 9$.",
        factoredForm: "The left side $x^2 - 4x + 4$ is a perfect square trinomial. Half of the coefficient of $x$ (which was -4) is -2. The binomial is $(x - 2)$. Therefore, $x^2 - 4x + 4 = (x - 2)^2$. The equation becomes $(x - 2)^2 = 9$.",
        takeSquareRoot: "Take the square root of both sides of $(x - 2)^2 = 9$: $\\sqrt{(x - 2)^2} = \\pm \\sqrt{9}$. This simplifies to $x - 2 = \\pm 3$.",
        solveForX1: "Consider the positive case: $x - 2 = 3$. Add $2$ to both sides: $x = 3 + 2 = 5$.",
        solveForX2: "Consider the negative case: $x - 2 = -3$. Add $2$ to both sides: $x = -3 + 2 = -1$.",
        verificationFirstSolution: "Check $x = 5$: LHS = $(5)^2 - 4(5) - 5 = 25 - 20 - 5 = 0$. RHS = $0$. Since LHS = RHS, $x = 5$ is correct.",
        verificationSecondSolution: "Check $x = -1$: LHS = $(-1)^2 - 4(-1) - 5 = 1 + 4 - 5 = 0$. RHS = $0$. Since LHS = RHS, $x = -1$ is correct."
      },
      hint: "Move the -5 to the right side. Find $(\\frac{-4}{2})^2$ and add that to both sides. Factor the left side (note the sign in the binomial), take the square root ($\\pm$), and solve the two linear equations."
    },
    // --- Problem 3: x^2 + 8x + 12 = 0 ---
    {
      expression: "x^2 + 8x + 12 = 0",
      solution: {
        standardForm: "x^2 + 8x + 12 = 0", // Already in standard form
        coefficientA: "1", // Coefficient of x^2
        moveConstant: "x^2 + 8x = -12", // Move +12 to the right
        calculateBOver2Squared: "16", // b=8, (8/2)^2 = 4^2 = 16
        addSquareToBothSides: "x^2 + 8x + 16 = 4", // Add 16 to both sides: -12 + 16 = 4
        factoredForm: "(x + 4)^2 = 4", // Factor left side
        takeSquareRoot: "x + 4 = \\pm 2", // Take sqrt of both sides
        solveForX1: "x = -2", // x + 4 = 2 -> x = -2
        solveForX2: "x = -6", // x + 4 = -2 -> x = -6
        verificationFirstSolution: "Yes, LHS = 0", // Check x=-2: (-2)^2 + 8(-2) + 12 = 4 - 16 + 12 = 0
        verificationSecondSolution: "Yes, LHS = 0"  // Check x=-6: (-6)^2 + 8(-6) + 12 = 36 - 48 + 12 = 0
      },
      explanation: {
        standardForm: "The given equation $x^2 + 8x + 12 = 0$ is already written with the terms in descending order of powers of $x$, and it is set equal to zero. This is the standard form $ax^2 + bx + c = 0$.",
        coefficientA: "The coefficient of the $x^2$ term is the number multiplying $x^2$. In $x^2 + 8x + 12$, the coefficient of $x^2$ is $1$.",
        moveConstant: "To complete the square, we need to isolate the $x$ terms. We move the constant term $+12$ to the right side by subtracting $12$ from both sides: $x^2 + 8x + 12 - 12 = 0 - 12$, which simplifies to $x^2 + 8x = -12$.",
        calculateBOver2Squared: "We calculate $(\\frac{b}{2})^2$, where $b$ is the coefficient of the $x$ term. Here, $b = 8$. So, we calculate $(\\frac{8}{2})^2 = (4)^2 = 16$.",
        addSquareToBothSides: "We add the value $16$ to both sides of the equation $x^2 + 8x = -12$. This gives $x^2 + 8x + 16 = -12 + 16$. Simplifying the right side, we get $x^2 + 8x + 16 = 4$.",
        factoredForm: "The left side $x^2 + 8x + 16$ is a perfect square trinomial. Half of the coefficient of $x$ (which was 8) is 4. The binomial is $(x + 4)$. Therefore, $x^2 + 8x + 16 = (x + 4)^2$. The equation becomes $(x + 4)^2 = 4$.",
        takeSquareRoot: "Take the square root of both sides of $(x + 4)^2 = 4$: $\\sqrt{(x + 4)^2} = \\pm \\sqrt{4}$. This simplifies to $x + 4 = \\pm 2$.",
        solveForX1: "Consider the positive case: $x + 4 = 2$. Subtract $4$ from both sides: $x = 2 - 4 = -2$.",
        solveForX2: "Consider the negative case: $x + 4 = -2$. Subtract $4$ from both sides: $x = -2 - 4 = -6$.",
        verificationFirstSolution: "Check $x = -2$: LHS = $(-2)^2 + 8(-2) + 12 = 4 - 16 + 12 = 0$. RHS = $0$. Since LHS = RHS, $x = -2$ is correct.",
        verificationSecondSolution: "Check $x = -6$: LHS = $(-6)^2 + 8(-6) + 12 = 36 - 48 + 12 = 0$. RHS = $0$. Since LHS = RHS, $x = -6$ is correct."
      },
      hint: "Subtract 12 from both sides to isolate the $x$ terms. Calculate $(\\frac{8}{2})^2$ and add that result to both sides. Factor the perfect square trinomial on the left, take the square root of both sides (don't forget $\\pm$), and solve for the two values of $x$."
    }
  ]
};

export default function SolvingQuadraticEquationsCompletingSquareTool() {
  return (
    <AlgebraMultiStepInteractiveTemplate toolData={solvingQuadraticEquationsCompletingSquareData} />
  );
}
