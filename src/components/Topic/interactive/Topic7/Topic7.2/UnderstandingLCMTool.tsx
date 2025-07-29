// UnderstandingLCMTool.tsx
import MultiStepInteractiveComponent, { InteractiveToolData } from '../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Understanding LCM
const understandingLCMData: InteractiveToolData = {
  title: "Understanding LCM",
  description: "Find the Lowest Common Multiple (LCM) of algebraic expressions by identifying factors and taking the highest powers.",
  theme: {
    primaryColor: 'green', // Specify the primary color theme
    backgroundColorFrom: 'green-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'emerald-100'   // Specify the 'to' color for the background gradient
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
      id: "listAllFactors",
      title: "Step 2: List All Factors",
      description: "Compile a list of all distinct factors (numbers and variables) that appear in either factorization.",
      type: "mcq"
    },
    {
      id: "findHighestPowers",
      title: "Step 3: Find the Highest Powers",
      description: "For each factor listed, determine the highest power it is raised to in the factorizations.",
      type: "mcq"
    },
    {
      id: "calculateLCM",
      title: "Step 4: Calculate the LCM",
      description: "Multiply the factors raised to their highest powers found in the previous step.",
      type: "mcq"
    },
    {
      id: "checkDivision",
      title: "Step 5: Check Your Answer (Optional)",
      description: "Divide the calculated LCM by each original expression. Do both divisions result in whole expressions (no remainder)?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: LCM of 12x^3y^2 and 18x^2y^4 ---
    {
      factorizeFirstExpression: ["2^2 \\times 3 \\times x^3 \\times y^2", "2 \\times 3 \\times x^3 \\times y^2", "12 \\times x^3 \\times y^2", "2^2 \\times 3^1 \\times x^3 \\times y^2"],
      factorizeSecondExpression: ["2 \\times 3^2 \\times x^2 \\times y^4", "2 \\times 3 \\times x^2 \\times y^4", "18 \\times x^2 \\times y^4", "2^1 \\times 3^2 \\times x^2 \\times y^4"],
      listAllFactors: [["2", "3", "x", "y"], ["2^2", "3^2", "x^3", "y^4"], ["6", "x^2", "y^2"], ["12", "18"]],
      findHighestPowers: [["2^2", "3^2", "x^3", "y^4"], ["2^1", "3^1", "x^2", "y^2"], ["2", "3", "x", "y"], ["4", "9", "3", "4"]],
      calculateLCM: ["2^2 \\times 3^2 \\times x^3 \\times y^4", "36x^3y^4", "2^2 \\times 3^2 \\times x^3 \\times y^4", "4 \\times 9 \\times x^3 \\times y^4"],
      checkDivision: ["Yes, 36x^3y^4 / 12x^3y^2 = 3y^2 and 36x^3y^4 / 18x^2y^4 = 2x", "No", "Yes, 36x^3y^4 / 12x^3y^2 = 3", "Yes, 36x^3y^4 / 18x^2y^4 = 2"]
    },
    // --- Problem 2: LCM of 15 and 20 ---
    {
      factorizeFirstExpression: ["3 \\times 5", "15", "3^1 \\times 5^1", "1 \\times 15"],
      factorizeSecondExpression: ["2^2 \\times 5", "20", "2^2 \\times 5^1", "1 \\times 20"],
      listAllFactors: [["2", "3", "5"], ["15", "20"], ["1", "2", "3", "5"], ["15", "20", "60"]],
      findHighestPowers: [["2^2", "3^1", "5^1"], ["2^0", "3^0", "5^1"], ["2", "3", "5"], ["1", "1", "1"]],
      calculateLCM: ["2^2 \\times 3 \\times 5", "60", "2^2 \\times 3^1 \\times 5^1", "4 \\times 3 \\times 5"],
      checkDivision: ["Yes, 60 / 15 = 4 and 60 / 20 = 3", "No", "Yes, 60 / 15 = 4", "Yes, 60 / 20 = 3"]
    },
    // --- Problem 3: LCM of 10m^2n and 15m^3n^2 (Practice Example) ---
    {
      factorizeFirstExpression: ["2 \\times 5 \\times m^2 \\times n", "2 \\times 5 \\times m^2 \\times n^1", "10 \\times m^2 \\times n", "2^1 \\times 5^1 \\times m^2 \\times n^1"],
      factorizeSecondExpression: ["3 \\times 5 \\times m^3 \\times n^2", "3 \\times 5 \\times m^3 \\times n^2", "15 \\times m^3 \\times n^2", "3^1 \\times 5^1 \\times m^3 \\times n^2"],
      listAllFactors: [["2", "3", "5", "m", "n"], ["10", "15", "m^2", "n"], ["2", "3", "5", "m^3", "n^2"], ["5", "m", "n"]],
      findHighestPowers: [["2^1", "3^1", "5^1", "m^3", "n^2"], ["2^0", "3^0", "5^1", "m^2", "n^1"], ["2", "3", "5", "m^3", "n^2"], ["1", "1", "1", "3", "2"]],
      calculateLCM: ["2 \\times 3 \\times 5 \\times m^3 \\times n^2", "30m^3n^2", "2^1 \\times 3^1 \\times 5^1 \\times m^3 \\times n^2", "6 \\times 5 \\times m^3 \\times n^2"],
      checkDivision: ["Yes, 30m^3n^2 / 10m^2n = 3mn and 30m^3n^2 / 15m^3n^2 = 2", "No", "Yes, 30m^3n^2 / 10m^2n = 3mn", "Yes, 30m^3n^2 / 15m^3n^2 = 2"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: LCM of 12x^3y^2 and 18x^2y^4 ---
    {
      expression: "\\text{LCM of } 12x^3y^2 \\\\ \\text{ and } 18x^2y^4",
      solution: {
        factorizeFirstExpression: "2^2 \\times 3 \\times x^3 \\times y^2",
        factorizeSecondExpression: "2 \\times 3^2 \\times x^2 \\times y^4",
        listAllFactors: ["2", "3", "x", "y"],
        findHighestPowers: ["2^2", "3^2", "x^3", "y^4"],
        calculateLCM: "36x^3y^4",
        checkDivision: "Yes, 36x^3y^4 / 12x^3y^2 = 3y^2 \\text{ and } 36x^3y^4 / 18x^2y^4 = 2x"
      },
      explanation: {
        factorizeFirstExpression: "Factorize $12x^3y^2$. The number $12$ can be broken down into prime factors: $12 = 2 \\times 2 \\times 3 = 2^2 \\times 3$. The variables are $x^3$ and $y^2$. So, the full factorization is $2^2 \\times 3 \\times x^3 \\times y^2$.",
        factorizeSecondExpression: "Factorize $18x^2y^4$. The number $18$ can be broken down: $18 = 2 \\times 3 \\times 3 = 2 \\times 3^2$. The variables are $x^2$ and $y^4$. The full factorization is $2 \\times 3^2 \\times x^2 \\times y^4$.",
        listAllFactors: "Compile a list of all distinct factors from both expressions. Expression 1: $2^2 \\times 3 \\times x^3 \\times y^2$. Expression 2: $2 \\times 3^2 \\times x^2 \\times y^4$. The distinct factors are $2$, $3$, $x$, and $y$.",
        findHighestPowers: "For each factor, find the highest power it appears at in either expression: For $2$: It's $2^2$ in the first expression and $2^1$ in the second. The highest power is $2^2$. For $3$: It's $3^1$ in the first and $3^2$ in the second. The highest power is $3^2$. For $x$: It's $x^3$ in the first and $x^2$ in the second. The highest power is $x^3$. For $y$: It's $y^2$ in the first and $y^4$ in the second. The highest power is $y^4$.",
        calculateLCM: "Multiply the factors raised to their highest powers: $2^2 \\times 3^2 \\times x^3 \\times y^4$. Calculate the numbers: $2^2 = 4$, $3^2 = 9$. So, $4 \\times 9 = 36$. Combine with the variables: $36x^3y^4$. The LCM is $36x^3y^4$.",
        checkDivision: "To verify, divide the LCM by each original expression. $36x^3y^4 \\div 12x^3y^2 = \\frac{36}{12} \\times \\frac{x^3}{x^3} \\times \\frac{y^4}{y^2} = 3 \\times x^{3-3} \\times y^{4-2} = 3x^0y^2 = 3y^2$. $36x^3y^4 \\div 18x^2y^4 = \\frac{36}{18} \\times \\frac{x^3}{x^2} \\times \\frac{y^4}{y^4} = 2 \\times x^{3-2} \\times y^{4-4} = 2x^1y^0 = 2x$. Both results ($3y^2$ and $2x$) are whole expressions, confirming the LCM is correct."
      },
      hint: "Start by finding the prime factors of the numbers (12 and 18). Then, for the variables, write down the exponents. What are all the different factors that appear? For each factor, take the highest exponent found. Multiply those together."
    },
    // --- Problem 2: LCM of 15 and 20 ---
    {
      expression: "\\text{LCM of } 15 \\text{ and } 20",
      solution: {
        factorizeFirstExpression: "3 \\times 5",
        factorizeSecondExpression: "2^2 \\times 5",
        listAllFactors: ["2", "3", "5"],
        findHighestPowers: ["2^2", "3^1", "5^1"],
        calculateLCM: "60",
        checkDivision: "Yes, 60 / 15 = 4 \\text{ and } 60 / 20 = 3"
      },
      explanation: {
        factorizeFirstExpression: "Factorize $15$. Find the prime factors: $15 = 3 \\times 5$.",
        factorizeSecondExpression: "Factorize $20$. Find the prime factors: $20 = 2 \\times 2 \\times 5 = 2^2 \\times 5$.",
        listAllFactors: "List all distinct factors from both expressions. Expression 1: $3 \\times 5$. Expression 2: $2^2 \\times 5$. The distinct factors are $2$, $3$, and $5$.",
        findHighestPowers: "Find the highest power for each factor: For $2$: It's $2^0$ (implicitly, not present) in the first expression and $2^2$ in the second. The highest power is $2^2$. For $3$: It's $3^1$ in the first and $3^0$ in the second. The highest power is $3^1$. For $5$: It's $5^1$ in the first and $5^1$ in the second. The highest power is $5^1$.",
        calculateLCM: "Multiply the factors raised to their highest powers: $2^2 \\times 3^1 \\times 5^1$. Calculate: $2^2 = 4$, $3^1 = 3$, $5^1 = 5$. So, $4 \\times 3 \\times 5 = 60$. The LCM is $60$.",
        checkDivision: "Verify by dividing the LCM by the originals. $60 \\div 15 = 4$. $60 \\div 20 = 3$. Both results are whole numbers, confirming the LCM is correct."
      },
      hint: "Factor both numbers into primes. What are all the prime factors involved (2, 3, 5)? For each prime factor, use the highest power found in either factorization. Multiply these together to get the LCM."
    },
    // --- Problem 3: LCM of 10m^2n and 15m^3n^2 ---
    {
      expression: "\\text{LCM of } 10m^2n \\\\ \\text{ and } 15m^3n^2",
      solution: {
        factorizeFirstExpression: "2 \\times 5 \\times m^2 \\times n",
        factorizeSecondExpression: "3 \\times 5 \\times m^3 \\times n^2",
        listAllFactors: ["2", "3", "5", "m", "n"],
        findHighestPowers: ["2^1", "3^1", "5^1", "m^3", "n^2"],
        calculateLCM: "30m^3n^2",
        checkDivision: "Yes, 30m^3n^2 / 10m^2n = 3mn \\text{ and } 30m^3n^2 / 15m^3n^2 = 2"
      },
      explanation: {
        factorizeFirstExpression: "Factorize $10m^2n$. The number $10 = 2 \\times 5$. The variables are $m^2$ and $n^1$. The full factorization is $2 \\times 5 \\times m^2 \\times n$.",
        factorizeSecondExpression: "Factorize $15m^3n^2$. The number $15 = 3 \\times 5$. The variables are $m^3$ and $n^2$. The full factorization is $3 \\times 5 \\times m^3 \\times n^2$.",
        listAllFactors: "List all distinct factors from both expressions. Expression 1: $2 \\times 5 \\times m^2 \\times n$. Expression 2: $3 \\times 5 \\times m^3 \\times n^2$. The distinct factors are $2$, $3$, $5$, $m$, and $n$.",
        findHighestPowers: "Find the highest power for each factor: For $2$: It's $2^1$ in the first expression and $2^0$ in the second. The highest power is $2^1$. For $3$: It's $3^0$ in the first and $3^1$ in the second. The highest power is $3^1$. For $5$: It's $5^1$ in both. The highest power is $5^1$. For $m$: It's $m^2$ in the first and $m^3$ in the second. The highest power is $m^3$. For $n$: It's $n^1$ in the first and $n^2$ in the second. The highest power is $n^2$.",
        calculateLCM: "Multiply the factors raised to their highest powers: $2^1 \\times 3^1 \\times 5^1 \\times m^3 \\times n^2$. Calculate the numbers: $2 \\times 3 \\times 5 = 30$. Combine with the variables: $30m^3n^2$. The LCM is $30m^3n^2$.",
        checkDivision: "Verify by dividing. $30m^3n^2 \\div 10m^2n = \\frac{30}{10} \\times \\frac{m^3}{m^2} \\times \\frac{n^2}{n} = 3 \\times m^{3-2} \\times n^{2-1} = 3m^1n^1 = 3mn$. $30m^3n^2 \\div 15m^3n^2 = \\frac{30}{15} \\times \\frac{m^3}{m^3} \\times \\frac{n^2}{n^2} = 2 \\times m^{3-3} \\times n^{2-2} = 2m^0n^0 = 2$. Both results ($3mn$ and $2$) are whole expressions, confirming the LCM."
      },
      hint: "Factor the coefficients (10 and 15) into primes. Identify the variables and their exponents in each term. What are all the different factors (numbers and variables) involved? For each factor, take the largest exponent found in either term. Multiply everything together."
    }
  ]
};

export default function UnderstandingLCMTool() {
  return (
    <MultiStepInteractiveComponent toolData={understandingLCMData} />
  );
}
