// SolvingQuadraticEquationsFormulaTool.tsx
import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData } from '../Templates/AlgebraMultiStepInteractiveTemplate'; // Adjust path as needed

// Define data for Solving Quadratic Equations (Quadratic Formula Method)
const solvingQuadraticEquationsFormulaData: InteractiveToolData = {
  title: "Solving Quadratic Equations - Quadratic Formula",
  description: "Solve any quadratic equation using the universal quadratic formula.",
  theme: {
    primaryColor: 'rose', // Specify the primary color theme
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
      id: "identifyCoefficients",
      title: "Step 2: Identify Coefficients",
      description: "Identify the values of $a$, $b$, and $c$ from the standard form.",
      type: "mcq"
    },
    {
      id: "calculateDiscriminant",
      title: "Step 3: Calculate the Discriminant",
      description: "Calculate the discriminant $\\Delta = b^2 - 4ac$. What is its value?",
      type: "mcq"
    },
    {
      id: "discriminantNature",
      title: "Step 4: Interpret the Discriminant",
      description: "Based on the discriminant's value, what can you say about the nature of the roots?",
      type: "mcq"
    },
    {
      id: "applyFormula",
      title: "Step 5: Apply the Formula",
      description: "Substitute $a$, $b$, and $c$ into the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. What does the formula look like with these values?",
      type: "mcq"
    },
    {
      id: "simplifySolutions",
      title: "Step 6: Simplify the Solutions",
      description: "Calculate the two possible values of $x$ using the $+$ and $-$ signs in the formula.",
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
    // --- Problem 1: 2x^2 + 3x - 2 = 0 ---
    {
      standardForm: ["2x^2 + 3x - 2 = 0", "2x^2 + 3x = 2", "3x + 2x^2 - 2 = 0", "2x^2 - 2 + 3x = 0"],
      identifyCoefficients: ["a = 2, b = 3, c = -2", "a = 2, b = -3, c = -2", "a = 3, b = 2, c = -2", "a = -2, b = 3, c = 2"],
      calculateDiscriminant: ["25", "9", "17", "5"],
      discriminantNature: ["Two distinct real solutions", "One repeated real solution", "No real solutions", "Cannot determine"],
      applyFormula: ["x = \\frac{-3 \\pm \\sqrt{25}}{4}", "x = \\frac{-3 \\pm \\sqrt{9}}{4}", "x = \\frac{-2 \\pm \\sqrt{25}}{3}", "x = \\frac{3 \\pm \\sqrt{25}}{4}"],
      simplifySolutions: ["x = 1/2 and x = -2", "x = 1 and x = -4", "x = -1/2 and x = 2", "x = 2 and x = -1"],
      verificationFirstSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 4", "LHS = -2"],
      verificationSecondSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 4", "LHS = -2"]
    },
    // --- Problem 2: x^2 - 6x + 9 = 0 (Practice Example) ---
    {
      standardForm: ["x^2 - 6x + 9 = 0", "x^2 - 6x = -9", "-6x + x^2 + 9 = 0", "x^2 + 9 - 6x = 0"],
      identifyCoefficients: ["a = 1, b = -6, c = 9", "a = 1, b = 6, c = 9", "a = -6, b = 1, c = 9", "a = 9, b = -6, c = 1"],
      calculateDiscriminant: ["0", "36", "-36", "18"],
      discriminantNature: ["One repeated real solution", "Two distinct real solutions", "No real solutions", "Cannot determine"],
      applyFormula: ["x = \\frac{6 \\pm \\sqrt{0}}{2}", "x = \\frac{-6 \\pm \\sqrt{0}}{2}", "x = \\frac{6 \\pm 0}{2}", "x = \\frac{0 \\pm \\sqrt{36}}{2}"],
      simplifySolutions: ["x = 3", "x = 3 and x = 3", "x = 6", "x = 0"],
      verificationFirstSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 9", "LHS = 3"],
      verificationSecondSolution: ["Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 9", "LHS = 3"] // Same solution
    },
    // --- Problem 3: x^2 + 4x + 5 = 0 ---
    {
      standardForm: ["x^2 + 4x + 5 = 0", "x^2 + 4x = -5", "4x + x^2 + 5 = 0", "x^2 + 5 + 4x = 0"],
      identifyCoefficients: ["a = 1, b = 4, c = 5", "a = 1, b = -4, c = 5", "a = 4, b = 1, c = 5", "a = 5, b = 4, c = 1"],
      calculateDiscriminant: ["-4", "16", "36", "4"],
      discriminantNature: ["No real solutions", "Two distinct real solutions", "One repeated real solution", "Cannot determine"],
      applyFormula: ["x = \\frac{-4 \\pm \\sqrt{-4}}{2}", "x = \\frac{-4 \\pm \\sqrt{4}}{2}", "x = \\frac{-4 \\pm 2i}{2}", "x = \\frac{4 \\pm \\sqrt{-4}}{2}"],
      simplifySolutions: ["x = -2 \\pm i", "x = -2 + i and x = -2 - i", "x = 2 \\pm i", "No real solutions"],
      verificationFirstSolution: ["N/A (Complex)", "Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 5"],
      verificationSecondSolution: ["N/A (Complex)", "Yes, LHS = 0", "No, LHS ≠ 0", "LHS = 5"] // Same solution
    }
  ],
  practiceProblems: [
    // --- Problem 1: 2x^2 + 3x - 2 = 0 ---
    {
      expression: "2x^2 + 3x - 2 = 0",
      solution: {
        standardForm: "2x^2 + 3x - 2 = 0", // Already in standard form
        identifyCoefficients: "a = 2, b = 3, c = -2", // Coefficients identified
        calculateDiscriminant: "25", // b^2 - 4ac = 9 - 4(2)(-2) = 9 + 16 = 25
        discriminantNature: "Two distinct real solutions", // Δ = 25 > 0
        applyFormula: "x = \\frac{-3 \\pm \\sqrt{25}}{2(2)}", // Substituted values
        simplifySolutions: "x = 1/2 and x = -2", // Calculated (-3±5)/4
        verificationFirstSolution: "Yes, LHS = 0", // Check x=1/2: 2(1/4) + 3(1/2) - 2 = 1/2 + 3/2 - 2 = 0
        verificationSecondSolution: "Yes, LHS = 0"  // Check x=-2: 2(4) + 3(-2) - 2 = 8 - 6 - 2 = 0
      },
      explanation: {
        standardForm: "The given equation $2x^2 + 3x - 2 = 0$ is already written with the terms in descending order of powers of $x$, and it is set equal to zero. This is the standard form $ax^2 + bx + c = 0$.",
        identifyCoefficients: "Comparing the standard form $ax^2 + bx + c = 0$ with $2x^2 + 3x + (-2) = 0$, we can identify the coefficients: $a$ (coefficient of $x^2$) is $2$, $b$ (coefficient of $x$) is $3$, and $c$ (constant term) is $-2$.",
        calculateDiscriminant: "The discriminant $\\Delta$ is calculated using the formula $\\Delta = b^2 - 4ac$. Substituting the values $a=2$, $b=3$, and $c=-2$, we get $\\Delta = (3)^2 - 4(2)(-2) = 9 - (-16) = 9 + 16 = 25$.",
        discriminantNature: "The discriminant $\\Delta = 25$ is greater than zero ($25 > 0$). This indicates that the quadratic equation has two distinct real solutions.",
        applyFormula: "We use the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Substituting $a=2$, $b=3$, and $c=-2$, and using the discriminant $\\Delta = 25$, the formula becomes $x = \\frac{-3 \\pm \\sqrt{25}}{2(2)}$.",
        simplifySolutions: "First, simplify the square root: $\\sqrt{25} = 5$. The formula is now $x = \\frac{-3 \\pm 5}{4}$. This gives two solutions: 1) Using the plus sign: $x = \\frac{-3 + 5}{4} = \\frac{2}{4} = \\frac{1}{2}$. 2) Using the minus sign: $x = \\frac{-3 - 5}{4} = \\frac{-8}{4} = -2$. The solutions are $x = \\frac{1}{2}$ and $x = -2$.",
        verificationFirstSolution: "Check the first solution $x = \\frac{1}{2}$ by substituting it into the *original* equation $2x^2 + 3x - 2 = 0$. LHS = $2(\\frac{1}{2})^2 + 3(\\frac{1}{2}) - 2 = 2(\\frac{1}{4}) + \\frac{3}{2} - 2 = \\frac{1}{2} + \\frac{3}{2} - 2 = \\frac{4}{2} - 2 = 2 - 2 = 0$. RHS = $0$. Since LHS = RHS, $x = \\frac{1}{2}$ is correct.",
        verificationSecondSolution: "Check the second solution $x = -2$ by substituting it into the *original* equation $2x^2 + 3x - 2 = 0$. LHS = $2(-2)^2 + 3(-2) - 2 = 2(4) - 6 - 2 = 8 - 6 - 2 = 0$. RHS = $0$. Since LHS = RHS, $x = -2$ is correct."
      },
      hint: "Identify $a$, $b$, and $c$ from $2x^2 + 3x - 2 = 0$. Calculate the discriminant $b^2 - 4ac$. Then, plug the values into $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ and simplify."
    },
    // --- Problem 2: x^2 - 6x + 9 = 0 ---
    {
      expression: "x^2 - 6x + 9 = 0",
      solution: {
        standardForm: "x^2 - 6x + 9 = 0", // Already in standard form
        identifyCoefficients: "a = 1, b = -6, c = 9", // Coefficients identified
        calculateDiscriminant: "0", // b^2 - 4ac = 36 - 4(1)(9) = 36 - 36 = 0
        discriminantNature: "One repeated real solution", // Δ = 0
        applyFormula: "x = \\frac{-(-6) \\pm \\sqrt{0}}{2(1)}", // Substituted values
        simplifySolutions: "x = 3", // Calculated (6±0)/2 = 3
        verificationFirstSolution: "Yes, LHS = 0", // Check x=3: (3)^2 - 6(3) + 9 = 9 - 18 + 9 = 0
        verificationSecondSolution: "Yes, LHS = 0"  // Check x=3: (3)^2 - 6(3) + 9 = 9 - 18 + 9 = 0 (Same solution)
      },
      explanation: {
        standardForm: "The given equation $x^2 - 6x + 9 = 0$ is already written with the terms in descending order of powers of $x$, and it is set equal to zero. This is the standard form $ax^2 + bx + c = 0$.",
        identifyCoefficients: "Comparing the standard form $ax^2 + bx + c = 0$ with $1x^2 + (-6)x + 9 = 0$, we identify the coefficients: $a = 1$, $b = -6$, and $c = 9$.",
        calculateDiscriminant: "Calculate the discriminant $\\Delta = b^2 - 4ac$. Substituting $a=1$, $b=-6$, and $c=9$, we get $\\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0$.",
        discriminantNature: "The discriminant $\\Delta = 0$. This indicates that the quadratic equation has one repeated (or double) real solution.",
        applyFormula: "Use the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Substituting $a=1$, $b=-6$, and $c=9$, and using the discriminant $\\Delta = 0$, the formula becomes $x = \\frac{-(-6) \\pm \\sqrt{0}}{2(1)}$, which simplifies to $x = \\frac{6 \\pm \\sqrt{0}}{2}$.",
        simplifySolutions: "Simplify the square root: $\\sqrt{0} = 0$. The formula is now $x = \\frac{6 \\pm 0}{2}$. Since adding or subtracting zero gives the same result, there is only one solution: $x = \\frac{6}{2} = 3$. The solution is $x = 3$ (repeated).",
        verificationFirstSolution: "Check the solution $x = 3$ by substituting it into the *original* equation $x^2 - 6x + 9 = 0$. LHS = $(3)^2 - 6(3) + 9 = 9 - 18 + 9 = 0$. RHS = $0$. Since LHS = RHS, $x = 3$ is correct.",
        verificationSecondSolution: "Since there is only one unique solution ($x=3$), checking it again confirms its validity. LHS = $(3)^2 - 6(3) + 9 = 9 - 18 + 9 = 0$. RHS = $0$. The check is consistent."
      },
      hint: "Identify $a$, $b$, and $c$. Calculate the discriminant. Notice it's zero. What does that tell you about the solutions? Substitute into the formula and simplify."
    },
    // --- Problem 3: x^2 + 4x + 5 = 0 ---
    {
      expression: "x^2 + 4x + 5 = 0",
      solution: {
        standardForm: "x^2 + 4x + 5 = 0", // Already in standard form
        identifyCoefficients: "a = 1, b = 4, c = 5", // Coefficients identified
        calculateDiscriminant: "-4", // b^2 - 4ac = 16 - 4(1)(5) = 16 - 20 = -4
        discriminantNature: "No real solutions", // Δ = -4 < 0
        applyFormula: "x = \\frac{-4 \\pm \\sqrt{-4}}{2(1)}", // Substituted values
        simplifySolutions: "x = -2 \\pm i", // Calculated (-4±2i)/2 (using sqrt(-4) = 2i)
        verificationFirstSolution: "N/A (Complex)", // Verification not applicable for real checks
        verificationSecondSolution: "N/A (Complex)"  // Verification not applicable for real checks
      },
      explanation: {
        standardForm: "The given equation $x^2 + 4x + 5 = 0$ is already written with the terms in descending order of powers of $x$, and it is set equal to zero. This is the standard form $ax^2 + bx + c = 0$.",
        identifyCoefficients: "Comparing the standard form $ax^2 + bx + c = 0$ with $1x^2 + 4x + 5 = 0$, we identify the coefficients: $a = 1$, $b = 4$, and $c = 5$.",
        calculateDiscriminant: "Calculate the discriminant $\\Delta = b^2 - 4ac$. Substituting $a=1$, $b=4$, and $c=5$, we get $\\Delta = (4)^2 - 4(1)(5) = 16 - 20 = -4$.",
        discriminantNature: "The discriminant $\\Delta = -4$ is less than zero ($-4 < 0$). This indicates that the quadratic equation has no real solutions. It has two complex solutions involving the imaginary unit $i$, where $i = \\sqrt{-1}$.",
        applyFormula: "Use the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Substituting $a=1$, $b=4$, and $c=5$, and using the discriminant $\\Delta = -4$, the formula becomes $x = \\frac{-4 \\pm \\sqrt{-4}}{2(1)}$.",
        simplifySolutions: "Simplify the square root of the negative number: $\\sqrt{-4} = \\sqrt{4} \\times \\sqrt{-1} = 2i$. The formula is now $x = \\frac{-4 \\pm 2i}{2}$. Factor out the 2 in the numerator: $x = \\frac{2(-2 \\pm i)}{2}$. Cancel the 2: $x = -2 \\pm i$. The complex solutions are $x = -2 + i$ and $x = -2 - i$.",
        // Note: Verification for complex solutions would involve complex arithmetic, which is beyond the scope here.
        verificationFirstSolution: "The solutions are complex numbers ($x = -2 \\pm i$). Verifying them requires substituting complex numbers back into the original equation and performing complex arithmetic. This is typically beyond the scope of basic quadratic formula problems focused on real solutions. The formula itself guarantees these are the correct solutions.",
        verificationSecondSolution: "The solutions are complex numbers ($x = -2 \\pm i$). Verifying them requires substituting complex numbers back into the original equation and performing complex arithmetic. This is typically beyond the scope of basic quadratic formula problems focused on real solutions. The formula itself guarantees these are the correct solutions."
      },
      hint: "Identify $a$, $b$, and $c$. Calculate the discriminant. It's negative. What does that mean? Substitute into the formula. Remember that the square root of a negative number involves $i$. Simplify the expression."
    }
  ]
};

export default function SolvingQuadraticEquationsFormulaTool() {
  return (
    <AlgebraMultiStepInteractiveTemplate toolData={solvingQuadraticEquationsFormulaData} />
  );
}
