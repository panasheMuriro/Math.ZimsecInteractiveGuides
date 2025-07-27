// MultiplyingAlgebraicTermsTool.tsx
import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData } from '../Templates/AlgebraMultiStepInteractiveTemplate'; // Adjust path as needed

// Define data for Multiplying Algebraic Terms
const multiplyingAlgebraicTermsData: InteractiveToolData = {
  title: "Multiplying Algebraic Terms",
  description: "Multiply algebraic terms by handling coefficients and variables (with exponents) separately.",
  theme: {
    primaryColor: 'teal', // Specify the primary color theme
    backgroundColorFrom: 'teal-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'cyan-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "multiplyCoefficients",
      title: "Step 1: Multiply the Coefficients",
      description: "Multiply the numerical parts (coefficients) of the terms.",
      type: "mcq"
    },
    {
      id: "identifyXVariables",
      title: "Step 2a: Identify and Combine $x$ Variables",
      description: "For terms with the variable $x$, add their exponents.",
      type: "mcq"
    },
    {
      id: "identifyYVariables",
      title: "Step 2b: Identify and Combine $y$ Variables",
      description: "For terms with the variable $y$, add their exponents.",
      type: "mcq"
    },
    {
      id: "identifyOtherVariables",
      title: "Step 2c: Identify and Combine Other Variables",
      description: "For any other variables present, add their exponents.",
      type: "mcq"
    },
    {
      id: "combineResults",
      title: "Step 3: Combine the Results",
      description: "Write the final term by combining the multiplied coefficient and the simplified variables.",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: 3x * 4x ---
    {
      multiplyCoefficients: ["12", "7", "1", "12x"],
      identifyXVariables: ["x^2", "x", "x^1", "x^0"],
      identifyYVariables: ["N/A (No y variables)", "y^0", "y", "y^1"],
      identifyOtherVariables: ["N/A (No other variables)", "z^0", "z", "a"],
      combineResults: ["12x^2", "12x", "7x^2", "12x^0"]
    },
    // --- Problem 2: 2x^2 * 5x^3 ---
    {
      multiplyCoefficients: ["10", "7", "10x", "10x^5"],
      identifyXVariables: ["x^5", "x^6", "x^1", "x^0"],
      identifyYVariables: ["N/A (No y variables)", "y^0", "y", "y^1"],
      identifyOtherVariables: ["N/A (No other variables)", "z^0", "z", "a"],
      combineResults: ["10x^5", "10x^6", "7x^5", "10x^0"]
    },
    // --- Problem 3: 2xy * 3x^2y ---
    {
      multiplyCoefficients: ["6", "5", "6xy", "5x^2y"],
      identifyXVariables: ["x^3", "x^2", "x^1", "x^0"],
      identifyYVariables: ["y^2", "y^1", "y^0", "y"],
      identifyOtherVariables: ["N/A (No other variables)", "z^0", "z", "a"],
      combineResults: ["6x^3y^2", "6x^2y^2", "5x^3y^2", "6x^3y^1"]
    },
     // --- Problem 4: 4a^2 * 3a (Practice Example) ---
     {
        multiplyCoefficients: ["12", "7", "12a", "12a^2"],
        identifyXVariables: ["N/A (No x variables)", "x^0", "x", "x^1"],
        identifyYVariables: ["N/A (No y variables)", "y^0", "y", "y^1"],
        identifyOtherVariables: ["a^3", "a^2", "a^1", "a^0"],
        combineResults: ["12a^3", "12a^2", "7a^3", "12a^1"]
      }
  ],
  practiceProblems: [
    // --- Problem 1: 3x * 4x ---
    {
      expression: "3x \\times 4x",
      solution: {
        multiplyCoefficients: "12", // 3 * 4 = 12
        identifyXVariables: "x^2", // x^1 * x^1 = x^(1+1) = x^2
        identifyYVariables: "N/A (No y variables)", // No y terms
        identifyOtherVariables: "N/A (No other variables)", // No other variables
        combineResults: "12x^2" // Coefficient 12 with variable x^2
      },
      explanation: {
        multiplyCoefficients: "Multiply the coefficients (the numbers) of the terms: $3 \\times 4 = 12$.",
        identifyXVariables: "Identify the $x$ variables and add their exponents. $x$ is the same as $x^1$. So, $x^1 \\times x^1 = x^{1+1} = x^2$.",
        identifyYVariables: "There are no $y$ variables in either term ($3x$ or $4x$).",
        identifyOtherVariables: "There are no other variables besides $x$ in the terms.",
        combineResults: "Combine the result of multiplying the coefficients ($12$) with the result for the variables ($x^2$). The final simplified term is $12x^2$."
      },
      hint: "First, multiply the numbers (3 and 4). Then, for the $x$'s, remember $x$ is the same as $x^1$. What do you do with exponents when you multiply terms with the same base?"
    },
    // --- Problem 2: 2x^2 * 5x^3 ---
    {
      expression: "2x^2 \\times 5x^3",
      solution: {
        multiplyCoefficients: "10", // 2 * 5 = 10
        identifyXVariables: "x^5", // x^2 * x^3 = x^(2+3) = x^5
        identifyYVariables: "N/A (No y variables)", // No y terms
        identifyOtherVariables: "N/A (No other variables)", // No other variables
        combineResults: "10x^5" // Coefficient 10 with variable x^5
      },
      explanation: {
        multiplyCoefficients: "Multiply the coefficients: $2 \\times 5 = 10$.",
        identifyXVariables: "Identify the $x$ variables and add their exponents: $x^2 \\times x^3 = x^{2+3} = x^5$.",
        identifyYVariables: "There are no $y$ variables in either term ($2x^2$ or $5x^3$).",
        identifyOtherVariables: "There are no other variables besides $x$ in the terms.",
        combineResults: "Combine the coefficient result ($10$) with the variable result ($x^5$). The final simplified term is $10x^5$."
      },
      hint: "Multiply the coefficients (2 and 5). Add the exponents of the $x$ terms ($x^2$ and $x^3$). Put the results together."
    },
    // --- Problem 3: 2xy * 3x^2y ---
    {
      expression: "2xy \\times 3x^2y",
      solution: {
        multiplyCoefficients: "6", // 2 * 3 = 6
        identifyXVariables: "x^3", // x^1 * x^2 = x^(1+2) = x^3
        identifyYVariables: "y^2", // y^1 * y^1 = y^(1+1) = y^2
        identifyOtherVariables: "N/A (No other variables)", // No other variables
        combineResults: "6x^3y^2" // Coefficient 6 with variables x^3 and y^2
      },
      explanation: {
        multiplyCoefficients: "Multiply the coefficients: $2 \\times 3 = 6$.",
        identifyXVariables: "Identify the $x$ variables and add their exponents. $x$ is the same as $x^1$. So, $x^1 \\times x^2 = x^{1+2} = x^3$.",
        identifyYVariables: "Identify the $y$ variables and add their exponents. $y$ is the same as $y^1$. So, $y^1 \\times y^1 = y^{1+1} = y^2$.",
        identifyOtherVariables: "There are no other variables besides $x$ and $y$ in the terms.",
        combineResults: "Combine the coefficient result ($6$) with the variable results ($x^3$ and $y^2$). The final simplified term is $6x^3y^2$."
      },
      hint: "Start by multiplying the numbers (2 and 3). Then, handle the $x$'s: $x$ (which is $x^1$) times $x^2$. Next, handle the $y$'s: $y$ (which is $y^1$) times $y$. Combine all parts."
    },
     // --- Problem 4: 4a^2 * 3a ---
     {
        expression: "4a^2 \\times 3a",
        solution: {
            multiplyCoefficients: "12", // 4 * 3 = 12
            identifyXVariables: "N/A (No x variables)", // No x terms
            identifyYVariables: "N/A (No y variables)", // No y terms
            identifyOtherVariables: "a^3", // a^2 * a^1 = a^(2+1) = a^3
            combineResults: "12a^3" // Coefficient 12 with variable a^3
        },
        explanation: {
            multiplyCoefficients: "Multiply the coefficients: $4 \\times 3 = 12$.",
            identifyXVariables: "There are no $x$ variables in either term ($4a^2$ or $3a$).",
            identifyYVariables: "There are no $y$ variables in either term ($4a^2$ or $3a$).",
            identifyOtherVariables: "Identify the $a$ variables and add their exponents. $a$ is the same as $a^1$. So, $a^2 \\times a^1 = a^{2+1} = a^3$.",
            combineResults: "Combine the coefficient result ($12$) with the variable result ($a^3$). The final simplified term is $12a^3$."
        },
        hint: "Multiply the coefficients (4 and 3). For the $a$ terms, $a^2$ times $a$ (which is $a^1$). Add the exponents of $a$. Write the final answer with the number and the variable."
    }
  ]
};

export default function MultiplyingAlgebraicTermsTool() {
  return (
    <AlgebraMultiStepInteractiveTemplate toolData={multiplyingAlgebraicTermsData} />
  );
}
