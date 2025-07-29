
// UnderstandingHCFTool.tsx
import MultiStepInteractiveComponent, { InteractiveToolData } from '../../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Understanding HCF
const understandingHCFData: InteractiveToolData = {
  title: "Understanding HCF",
  description: "Find the Highest Common Factor (HCF) of algebraic expressions by identifying common factors and taking the lowest powers.",
  theme: {
    primaryColor: 'amber', // Specify the primary color theme
    backgroundColorFrom: 'amber-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'orange-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "factorizeFirstExpression",
      title: "Step 1a: Factorize the First Expression",
      description: "Break down the first expression into its prime factors, including variables and their powers.",
      type: "mcq"
    },
    {
      id: "factorizeSecondExpression",
      title: "Step 1b: Factorize the Second Expression",
      description: "Break down the second expression into its prime factors, including variables and their powers.",
      type: "mcq"
    },
    {
      id: "identifyCommonFactors",
      title: "Step 2: Identify Common Factors",
      description: "List the factors (numbers and variables) that appear in the factorization of both expressions.",
      type: "mcq"
    },
    {
      id: "findLowestPowers",
      title: "Step 3: Find the Lowest Powers",
      description: "For each common factor identified, determine the lowest power it is raised to in the factorizations.",
      type: "mcq"
    },
    {
      id: "calculateHCF",
      title: "Step 4: Calculate the HCF",
      description: "Multiply the common factors raised to their lowest powers found in the previous step.",
      type: "mcq"
    },
    {
      id: "checkDivision",
      title: "Step 5: Check Your Answer (Optional)",
      description: "Divide each original expression by the calculated HCF. Do both divisions result in whole expressions (no remainder)?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: HCF of 12x^3y^2 and 18x^2y^4 ---
    {
      factorizeFirstExpression: ["2^2 \\times 3 \\times x^3 \\times y^2", "2 \\times 3 \\times x^3 \\times y^2", "12 \\times x^3 \\times y^2", "2^2 \\times 3^1 \\times x^3 \\times y^2"],
      factorizeSecondExpression: ["2 \\times 3^2 \\times x^2 \\times y^4", "2 \\times 3 \\times x^2 \\times y^4", "18 \\times x^2 \\times y^4", "2^1 \\times 3^2 \\times x^2 \\times y^4"],
      identifyCommonFactors: [["2", "3", "x", "y"], ["2^2", "3^2", "x^3", "y^4"], ["6", "x^2", "y^2"], ["12", "18"]],
      findLowestPowers: [["2^1", "3^1", "x^2", "y^2"], ["2^2", "3^2", "x^3", "y^4"], ["2", "3", "x", "y"], ["1", "1", "2", "2"]],
      calculateHCF: ["2 \\times 3 \\times x^2 \\times y^2", "6x^2y^2", "2^1 \\times 3^1 \\times x^2 \\times y^2", "6 \\times x^2 \\times y^2"],
      checkDivision: ["Yes, 12x^3y^2 / 6x^2y^2 = 2x and 18x^2y^4 / 6x^2y^2 = 3y^2", "No", "Yes, 12x^3y^2 / 6x^2y^2 = 2x^3y^2", "Yes, 18x^2y^4 / 6x^2y^2 = 3"]
    },
    // --- Problem 2: HCF of 24 and 36 ---
    {
      factorizeFirstExpression: ["2^3 \\times 3", "2 \\times 3", "24", "2^3 \\times 3^1"],
      factorizeSecondExpression: ["2^2 \\times 3^2", "2 \\times 3", "36", "2^2 \\times 3^2"],
      identifyCommonFactors: [["2", "3"], ["2^3", "3^2"], ["4", "6"], ["24", "36"]],
      findLowestPowers: [["2^2", "3^1"], ["2^3", "3^2"], ["2", "3"], ["1", "1"]],
      calculateHCF: ["2^2 \\times 3", "12", "2^2 \\times 3^1", "4 \\times 3"],
      checkDivision: ["Yes, 24 / 12 = 2 and 36 / 12 = 3", "No", "Yes, 24 / 12 = 2", "Yes, 36 / 12 = 3"]
    },
    // --- Problem 3: HCF of 16a^4b and 24a^2b^3 (Practice Example) ---
    {
      factorizeFirstExpression: ["2^4 \\times a^4 \\times b", "2 \\times 4 \\times a^4 \\times b", "16 \\times a^4 \\times b", "2^4 \\times a^4 \\times b^1"],
      factorizeSecondExpression: ["2^3 \\times 3 \\times a^2 \\times b^3", "2 \\times 3 \\times a^2 \\times b^3", "24 \\times a^2 \\times b^3", "2^3 \\times 3^1 \\times a^2 \\times b^3"],
      identifyCommonFactors: [["2", "a", "b"], ["2^4", "3", "a^4", "b^3"], ["8", "a^2", "b"], ["16", "24"]],
      findLowestPowers: [["2^3", "a^2", "b^1"], ["2^4", "a^4", "b^3"], ["2", "a", "b"], ["3", "2", "1"]],
      calculateHCF: ["2^3 \\times a^2 \\times b", "8a^2b", "2^3 \\times a^2 \\times b^1", "8 \\times a^2 \\times b"],
      checkDivision: ["Yes, 16a^4b / 8a^2b = 2a^2 and 24a^2b^3 / 8a^2b = 3b^2", "No", "Yes, 16a^4b / 8a^2b = 2a^4b", "Yes, 24a^2b^3 / 8a^2b = 3"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: HCF of 12x^3y^2 and 18x^2y^4 ---
    {
      expression: "\\text{HCF of } 12x^3y^2 \\\\ \\text{ and } 18x^2y^4",
      solution: {
        factorizeFirstExpression: "2^2 \\times 3 \\times x^3 \\times y^2",
        factorizeSecondExpression: "2 \\times 3^2 \\times x^2 \\times y^4",
        identifyCommonFactors: ["2", "3", "x", "y"],
        findLowestPowers: ["2^1", "3^1", "x^2", "y^2"],
        calculateHCF: "6x^2y^2",
        checkDivision: "Yes, 12x^3y^2 / 6x^2y^2 = 2x \\text{ and } 18x^2y^4 / 6x^2y^2 = 3y^2"
      },
      explanation: {
        factorizeFirstExpression: "Factorize $12x^3y^2$. The number $12$ can be broken down into prime factors: $12 = 2 \\times 2 \\times 3 = 2^2 \\times 3$. The variables are $x^3$ and $y^2$. So, the full factorization is $2^2 \\times 3 \\times x^3 \\times y^2$.",
        factorizeSecondExpression: "Factorize $18x^2y^4$. The number $18$ can be broken down: $18 = 2 \\times 3 \\times 3 = 2 \\times 3^2$. The variables are $x^2$ and $y^4$. The full factorization is $2 \\times 3^2 \\times x^2 \\times y^4$.",
        identifyCommonFactors: "Compare the factorizations: Expression 1: $2^2 \\times 3 \\times x^3 \\times y^2$. Expression 2: $2 \\times 3^2 \\times x^2 \\times y^4$. The common factors are those present in both: the number $2$, the number $3$, the variable $x$, and the variable $y$.",
        findLowestPowers: "For each common factor, find the lowest power it appears at: For $2$: It's $2^2$ in the first expression and $2^1$ in the second. The lowest power is $2^1$. For $3$: It's $3^1$ in the first and $3^2$ in the second. The lowest power is $3^1$. For $x$: It's $x^3$ in the first and $x^2$ in the second. The lowest power is $x^2$. For $y$: It's $y^2$ in the first and $y^4$ in the second. The lowest power is $y^2$.",
        calculateHCF: "Multiply the common factors raised to their lowest powers: $2^1 \\times 3^1 \\times x^2 \\times y^2$. Calculate the numbers: $2 \\times 3 = 6$. Combine with the variables: $6x^2y^2$. The HCF is $6x^2y^2$.",
        checkDivision: "To verify, divide each original expression by the HCF. $12x^3y^2 \\div 6x^2y^2 = \\frac{12}{6} \\times \\frac{x^3}{x^2} \\times \\frac{y^2}{y^2} = 2 \\times x^{3-2} \\times y^{2-2} = 2x^1y^0 = 2x$. $18x^2y^4 \\div 6x^2y^2 = \\frac{18}{6} \\times \\frac{x^2}{x^2} \\times \\frac{y^4}{y^2} = 3 \\times x^{2-2} \\times y^{4-2} = 3x^0y^2 = 3y^2$. Both results ($2x$ and $3y^2$) are whole expressions, confirming the HCF is correct."
      },
      hint: "Start by finding the prime factors of the numbers (12 and 18). Then, for the variables, write down the exponents. Compare the factors of both expressions. For each factor that appears in both, take the smallest exponent. Multiply those together."
    },
    // --- Problem 2: HCF of 24 and 36 ---
    {
      expression: "\\text{HCF of } 24 \\text{ and } 36",
      solution: {
        factorizeFirstExpression: "2^3 \\times 3",
        factorizeSecondExpression: "2^2 \\times 3^2",
        identifyCommonFactors: ["2", "3"],
        findLowestPowers: ["2^2", "3^1"],
        calculateHCF: "12",
        checkDivision: "Yes, 24 / 12 = 2 \\text{ and } 36 / 12 = 3"
      },
      explanation: {
        factorizeFirstExpression: "Factorize $24$. Find the prime factors: $24 = 2 \\times 2 \\times 2 \\times 3 = 2^3 \\times 3$.",
        factorizeSecondExpression: "Factorize $36$. Find the prime factors: $36 = 2 \\times 2 \\times 3 \\times 3 = 2^2 \\times 3^2$.",
        identifyCommonFactors: "Compare the factorizations: Expression 1: $2^3 \\times 3$. Expression 2: $2^2 \\times 3^2$. The common factors are the number $2$ and the number $3$.",
        findLowestPowers: "Find the lowest power for each common factor: For $2$: It's $2^3$ in the first expression and $2^2$ in the second. The lowest power is $2^2$. For $3$: It's $3^1$ in the first and $3^2$ in the second. The lowest power is $3^1$.",
        calculateHCF: "Multiply the common factors raised to their lowest powers: $2^2 \\times 3^1$. Calculate: $2^2 = 4$ and $3^1 = 3$. So, $4 \\times 3 = 12$. The HCF is $12$.",
        checkDivision: "Verify by dividing the originals by the HCF. $24 \\div 12 = 2$. $36 \\div 12 = 3$. Both results are whole numbers, confirming the HCF is correct."
      },
      hint: "Factor both numbers into primes. What prime factors do they share? For each shared prime factor, use the lowest power found in either factorization. Multiply these together to get the HCF."
    },
    // --- Problem 3: HCF of 16a^4b and 24a^2b^3 ---
    {
      expression: "\\text{HCF of } 16a^4b \\\\ \\text{ and } 24a^2b^3",
      solution: {
        factorizeFirstExpression: "2^4 \\times a^4 \\times b",
        factorizeSecondExpression: "2^3 \\times 3 \\times a^2 \\times b^3",
        identifyCommonFactors: ["2", "a", "b"],
        findLowestPowers: ["2^3", "a^2", "b^1"],
        calculateHCF: "8a^2b",
        checkDivision: "Yes, 16a^4b / 8a^2b = 2a^2 \\text{ and } 24a^2b^3 / 8a^2b = 3b^2"
      },
      explanation: {
        factorizeFirstExpression: "Factorize $16a^4b$. The number $16 = 2 \\times 2 \\times 2 \\times 2 = 2^4$. The variables are $a^4$ and $b^1$. The full factorization is $2^4 \\times a^4 \\times b$.",
        factorizeSecondExpression: "Factorize $24a^2b^3$. The number $24 = 2 \\times 2 \\times 2 \\times 3 = 2^3 \\times 3$. The variables are $a^2$ and $b^3$. The full factorization is $2^3 \\times 3 \\times a^2 \\times b^3$.",
        identifyCommonFactors: "Compare the factorizations: Expression 1: $2^4 \\times a^4 \\times b$. Expression 2: $2^3 \\times 3 \\times a^2 \\times b^3$. The common factors are the number $2$, the variable $a$, and the variable $b$. (Note: $3$ is not common).",
        findLowestPowers: "Find the lowest power for each common factor: For $2$: It's $2^4$ in the first expression and $2^3$ in the second. The lowest power is $2^3$. For $a$: It's $a^4$ in the first and $a^2$ in the second. The lowest power is $a^2$. For $b$: It's $b^1$ in the first and $b^3$ in the second. The lowest power is $b^1$.",
        calculateHCF: "Multiply the common factors raised to their lowest powers: $2^3 \\times a^2 \\times b^1$. Calculate the number: $2^3 = 8$. Combine with the variables: $8a^2b$. The HCF is $8a^2b$.",
        checkDivision: "Verify by dividing. $16a^4b \\div 8a^2b = \\frac{16}{8} \\times \\frac{a^4}{a^2} \\times \\frac{b}{b} = 2 \\times a^{4-2} \\times b^{1-1} = 2a^2b^0 = 2a^2$. $24a^2b^3 \\div 8a^2b = \\frac{24}{8} \\times \\frac{a^2}{a^2} \\times \\frac{b^3}{b} = 3 \\times a^{2-2} \\times b^{3-1} = 3a^0b^2 = 3b^2$. Both results ($2a^2$ and $3b^2$) are whole expressions, confirming the HCF."
      },
      hint: "Factor the coefficients (16 and 24) into primes. Identify the variables and their exponents in each term. What factors (numbers and variables) appear in both factorizations? For each common factor, take the smallest exponent. Multiply everything together."
    }
  ]
};

export default function UnderstandingHCFTool() {
  return (
    <MultiStepInteractiveComponent toolData={understandingHCFData} />
  );
}
