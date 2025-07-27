// CommonFactorMethodTool.tsx
import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData } from '../Templates/AlgebraMultiStepInteractiveTemplate'; // Adjust path as needed

// Define data for Common Factor Method
const commonFactorMethodData: InteractiveToolData = {
  title: "Common Factor Method",
  description: "Factor algebraic expressions by finding and extracting the greatest common factor (GCD of coefficients and lowest powers of variables).",
  theme: {
    primaryColor: 'green', // Specify the primary color theme
    backgroundColorFrom: 'green-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'emerald-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "findGCD",
      title: "Step 1: Find the GCD of Coefficients",
      description: "What is the Greatest Common Divisor (GCD) of the numerical coefficients of all terms?",
      type: "mcq"
    },
    {
      id: "findLowestPowers",
      title: "Step 2: Identify Lowest Powers of Variables",
      description: "For each variable present in all terms, what is the lowest power?",
      type: "mcq"
    },
    {
      id: "writeCommonFactor",
      title: "Step 3: Write the Common Factor",
      description: "Combine the GCD and the variables raised to their lowest powers.",
      type: "mcq"
    },
    {
      id: "divideTerms",
      title: "Step 4: Divide Each Term by the Common Factor",
      description: "Divide the original expression by the common factor. What is the resulting expression inside the parentheses?",
      type: "mcq"
    },
    {
      id: "writeFactoredForm",
      title: "Step 5: Write the Final Factored Form",
      description: "Express the original polynomial as the product of the common factor and the result from the previous step.",
      type: "mcq"
    },
    {
      id: "checkExpansion",
      title: "Step 6: Check Your Answer",
      description: "Expand the factored form. Does it match the original expression?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: 6x^2 + 9x ---
    {
      findGCD: ["3", "1", "9", "6"],
      findLowestPowers: [["x^1"], ["x^2"], ["x"], ["x^0"]],
      writeCommonFactor: ["3x", "3x^1", "3", "x"],
      divideTerms: ["2x + 3", "2x^2 + 3x", "3x(2x + 3)", "6x + 9"],
      writeFactoredForm: ["3x(2x + 3)", "3(2x^2 + 3x)", "x(6x + 9)", "3x(2x) + 3x(3)"],
      checkExpansion: ["Yes, 3x(2x + 3) = 6x^2 + 9x", "No", "3x * 2x = 6x^2", "3x + 3 = 6x"]
    },
    // --- Problem 2: 12x^3y - 8x^2y^2 ---
    {
      findGCD: ["4", "2", "8", "24"],
      findLowestPowers: [["x^2", "y^1"], ["x^3", "y^2"], ["x^2", "y^2"], ["x", "y"]],
      writeCommonFactor: ["4x^2y", "4xy", "4x^2y^1", "8x^2y"],
      divideTerms: ["3x - 2y", "3x^2 - 2y", "12x^3y - 8x^2y^2", "4x^2y(3x - 2y)"],
      writeFactoredForm: ["4x^2y(3x - 2y)", "4xy(3x^2 - 2y)", "4x^2y(3x) - 4x^2y(2y)", "12x^3y - 8x^2y^2"],
      checkExpansion: ["Yes, 4x^2y(3x - 2y) = 12x^3y - 8x^2y^2", "No", "4x^2y * 3x = 12x^3y", "4x^2y - 2y = 12x^3y"]
    },
    // --- Problem 3: 10a^3b^2 + 15a^2b (Practice Example) ---
    {
      findGCD: ["5", "1", "15", "10"],
      findLowestPowers: [["a^2", "b^1"], ["a^3", "b^2"], ["a^2", "b^2"], ["a", "b"]],
      writeCommonFactor: ["5a^2b", "5ab", "5a^2b^1", "10a^2b"],
      divideTerms: ["2ab + 3", "2a^2b + 3", "10a^3b^2 + 15a^2b", "5a^2b(2ab + 3)"],
      writeFactoredForm: ["5a^2b(2ab + 3)", "5ab(2a^2b + 3)", "5a^2b(2ab) + 5a^2b(3)", "10a^3b^2 + 15a^2b"],
      checkExpansion: ["Yes, 5a^2b(2ab + 3) = 10a^3b^2 + 15a^2b", "No", "5a^2b * 2ab = 10a^3b^2", "5a^2b + 3 = 10a^3b^2"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: 6x^2 + 9x ---
    {
      expression: "6x^2 + 9x",
      solution: {
        findGCD: "3",
        findLowestPowers: ["x^1"], // Or just "x"
        writeCommonFactor: "3x",
        divideTerms: "2x + 3",
        writeFactoredForm: "3x(2x + 3)",
        checkExpansion: "Yes, 3x(2x + 3) = 6x^2 + 9x"
      },
      explanation: {
        findGCD: "The coefficients of the terms are 6 and 9. The factors of 6 are 1, 2, 3, 6. The factors of 9 are 1, 3, 9. The greatest common factor of the numbers is 3.",
        findLowestPowers: "Look at the variable $x$. The first term has $x^2$, and the second term has $x^1$. The lowest power of $x$ present in both terms is $x^1$ (or simply $x$). There are no other variables common to both terms.",
        writeCommonFactor: "Combine the GCD of the coefficients (3) with the lowest power of the common variable ($x$). The common factor is $3x$.",
        divideTerms: "Divide the original expression $6x^2 + 9x$ by the common factor $3x$. This is equivalent to dividing each term by $3x$: $\\frac{6x^2}{3x} + \\frac{9x}{3x}$. Simplifying each part: $\\frac{6x^2}{3x} = 2x$ and $\\frac{9x}{3x} = 3$. The expression inside the parentheses is $2x + 3$.",
        writeFactoredForm: "Write the original expression as the product of the common factor and the result from the division: $3x(2x + 3)$.",
        checkExpansion: "To verify, expand the factored form $3x(2x + 3)$ using the distributive property: $3x \\times 2x + 3x \\times 3 = 6x^2 + 9x$. This matches the original expression, confirming the factorization is correct."
      },
      hint: "What is the biggest number that divides both 6 and 9? What is the lowest power of $x$ that appears in both terms? Multiply these together to get the common factor. Then, divide the original expression by this common factor."
    },
    // --- Problem 2: 12x^3y - 8x^2y^2 ---
    {
      expression: "12x^3y - 8x^2y^2",
      solution: {
        findGCD: "4",
        findLowestPowers: ["x^2", "y^1"], // Or "x^2, y"
        writeCommonFactor: "4x^2y",
        divideTerms: "3x - 2y",
        writeFactoredForm: "4x^2y(3x - 2y)",
        checkExpansion: "Yes, 4x^2y(3x - 2y) = 12x^3y - 8x^2y^2"
      },
      explanation: {
        findGCD: "The coefficients are 12 and -8 (we consider the absolute values for GCD). The factors of 12 are 1, 2, 3, 4, 6, 12. The factors of 8 are 1, 2, 4, 8. The greatest common factor of the numbers is 4.",
        findLowestPowers: "Look at the variables. Both terms contain $x$ and $y$. For $x$: The first term has $x^3$, and the second term has $x^2$. The lowest power is $x^2$. For $y$: The first term has $y^1$, and the second term has $y^2$. The lowest power is $y^1$ (or simply $y$).",
        writeCommonFactor: "Combine the GCD of the coefficients (4) with the lowest powers of the common variables ($x^2$ and $y$). The common factor is $4x^2y$.",
        divideTerms: "Divide the original expression $12x^3y - 8x^2y^2$ by the common factor $4x^2y$. This is $\\frac{12x^3y}{4x^2y} - \\frac{8x^2y^2}{4x^2y}$. Simplifying each part: $\\frac{12x^3y}{4x^2y} = 3x$ and $\\frac{8x^2y^2}{4x^2y} = 2y$. The expression inside the parentheses is $3x - 2y$.",
        writeFactoredForm: "Write the original expression as the product of the common factor and the result from the division: $4x^2y(3x - 2y)$.",
        checkExpansion: "To verify, expand $4x^2y(3x - 2y)$: $4x^2y \\times 3x - 4x^2y \\times 2y = 12x^3y - 8x^2y^2$. This matches the original expression, confirming the factorization is correct."
      },
      hint: "Find the GCD of 12 and 8. For the variables, find the lowest power of $x$ in both terms and the lowest power of $y$ in both terms. Multiply the GCD and these variable powers to get the common factor. Divide the original expression by this factor."
    },
    // --- Problem 3: 10a^3b^2 + 15a^2b ---
    {
      expression: "10a^3b^2 + 15a^2b",
      solution: {
        findGCD: "5",
        findLowestPowers: ["a^2", "b^1"], // Or "a^2, b"
        writeCommonFactor: "5a^2b",
        divideTerms: "2ab + 3",
        writeFactoredForm: "5a^2b(2ab + 3)",
        checkExpansion: "Yes, 5a^2b(2ab + 3) = 10a^3b^2 + 15a^2b"
      },
      explanation: {
        findGCD: "The coefficients are 10 and 15. The factors of 10 are 1, 2, 5, 10. The factors of 15 are 1, 3, 5, 15. The greatest common factor of the numbers is 5.",
        findLowestPowers: "Look at the variables. Both terms contain $a$ and $b$. For $a$: The first term has $a^3$, and the second term has $a^2$. The lowest power is $a^2$. For $b$: The first term has $b^2$, and the second term has $b^1$. The lowest power is $b^1$ (or simply $b$).",
        writeCommonFactor: "Combine the GCD of the coefficients (5) with the lowest powers of the common variables ($a^2$ and $b$). The common factor is $5a^2b$.",
        divideTerms: "Divide the original expression $10a^3b^2 + 15a^2b$ by the common factor $5a^2b$. This is $\\frac{10a^3b^2}{5a^2b} + \\frac{15a^2b}{5a^2b}$. Simplifying each part: $\\frac{10a^3b^2}{5a^2b} = 2ab$ and $\\frac{15a^2b}{5a^2b} = 3$. The expression inside the parentheses is $2ab + 3$.",
        writeFactoredForm: "Write the original expression as the product of the common factor and the result from the division: $5a^2b(2ab + 3)$.",
        checkExpansion: "To verify, expand $5a^2b(2ab + 3)$: $5a^2b \\times 2ab + 5a^2b \\times 3 = 10a^3b^2 + 15a^2b$. This matches the original expression, confirming the factorization is correct."
      },
      hint: "What is the largest number that divides both 10 and 15? Find the lowest power of $a$ and the lowest power of $b$ that appear in both terms. Multiply these together to form the common factor. Finally, divide the original expression by this factor to find the terms inside the parentheses."
    }
  ]
};

export default function CommonFactorMethodTool() {
  return (
    <AlgebraMultiStepInteractiveTemplate toolData={commonFactorMethodData} />
  );
}