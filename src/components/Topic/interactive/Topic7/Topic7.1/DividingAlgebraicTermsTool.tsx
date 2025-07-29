import MultiStepInteractiveComponent, { InteractiveToolData } from '../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Dividing Algebraic Terms
const dividingAlgebraicTermsData: InteractiveToolData = {
  title: "Dividing Algebraic Terms",
  description: "Divide algebraic terms by handling coefficients and variables (with exponents) separately, subtracting exponents for like variables.",
  theme: {
    primaryColor: 'indigo', // Specify the primary color theme
    backgroundColorFrom: 'indigo-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'purple-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "divideCoefficients",
      title: "Step 1: Divide the Coefficients",
      description: "Divide the numerical parts (coefficients) of the terms.",
      type: "mcq"
    },
    {
      id: "identifyXVariables",
      title: "Step 2a: Identify and Divide $x$ Variables",
      description: "For terms with the variable $x$, subtract the denominator's exponent from the numerator's exponent ($x^a / x^b = x^{a-b}$).",
      type: "mcq"
    },
    {
      id: "identifyYVariables",
      title: "Step 2b: Identify and Divide $y$ Variables",
      description: "For terms with the variable $y$, subtract the denominator's exponent from the numerator's exponent ($y^c / y^d = y^{c-d}$).",
      type: "mcq"
    },
    {
      id: "identifyOtherVariables",
      title: "Step 2c: Identify and Divide Other Variables",
      description: "For any other variables present, subtract the denominator's exponent from the numerator's exponent.",
      type: "mcq"
    },
    {
      id: "combineResults",
      title: "Step 3: Combine the Results",
      description: "Write the final term by combining the divided coefficient and the simplified variables.",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: 12x^4 / 3x^2 ---
    {
      divideCoefficients: ["4", "9", "36", "1"],
      identifyXVariables: ["x^2", "x", "x^6", "x^0"],
      identifyYVariables: ["N/A (No y variables)", "y^0", "y", "y^1"],
      identifyOtherVariables: ["N/A (No other variables)", "z^0", "z", "a"],
      combineResults: ["4x^2", "4x", "4x^6", "4"]
    },
    // --- Problem 2: 15x^3y / 5xy ---
    {
      divideCoefficients: ["3", "10", "5", "75"],
      identifyXVariables: ["x^2", "x^3", "x^1", "x^0"],
      identifyYVariables: ["y^0", "1", "y^1", "y"],
      identifyOtherVariables: ["N/A (No other variables)", "z^0", "z", "a"],
      combineResults: ["3x^2", "3x^2y^0", "3x^3", "3x"]
    },
    // --- Problem 3: 20a^4b^2 / 4a^2b ---
    {
      divideCoefficients: ["5", "16", "80", "4"],
      identifyXVariables: ["N/A (No x variables)", "x^0", "x", "x^1"],
      identifyYVariables: ["N/A (No y variables)", "y^0", "y", "y^1"],
      identifyOtherVariables: ["a^2, b^1", "a^6, b^3", "a^2, b^2", "a^1, b^1"], // Representing a^2 and b^1
      combineResults: ["5a^2b", "5a^2b^1", "5a^6b^3", "5ab"]
    },
     // --- Problem 4: 18m^5 / 6m^2 (Practice Example) ---
     {
        divideCoefficients: ["3", "12", "3", "108"],
        identifyXVariables: ["N/A (No x variables)", "x^0", "x", "x^1"],
        identifyYVariables: ["N/A (No y variables)", "y^0", "y", "y^1"],
        identifyOtherVariables: ["m^3", "m^5", "m^2", "m^0"],
        combineResults: ["3m^3", "3m^5", "3m^2", "3"]
      }
  ],
  practiceProblems: [
    // --- Problem 1: 12x^4 / 3x^2 ---
    {
      expression: "\\frac{12x^4}{3x^2}",
      solution: {
        divideCoefficients: "4", // 12 / 3 = 4
        identifyXVariables: "x^2", // x^4 / x^2 = x^(4-2) = x^2
        identifyYVariables: "N/A (No y variables)", // No y terms
        identifyOtherVariables: "N/A (No other variables)", // No other variables
        combineResults: "4x^2" // Coefficient 4 with variable x^2
      },
      explanation: {
        divideCoefficients: "Divide the coefficients (the numbers): $12 \\div 3 = 4$.",
        identifyXVariables: "Identify the $x$ variables and subtract the denominator's exponent from the numerator's exponent: $x^4 \\div x^2 = x^{4-2} = x^2$.",
        identifyYVariables: "There are no $y$ variables in either the numerator ($12x^4$) or the denominator ($3x^2$).",
        identifyOtherVariables: "There are no other variables besides $x$ in the terms.",
        combineResults: "Combine the result of dividing the coefficients ($4$) with the result for the variables ($x^2$). The final simplified term is $4x^2$."
      },
      hint: "First, divide the numbers (12 and 3). Then, for the $x$'s, subtract the exponent in the denominator from the exponent in the numerator ($x^4$ divided by $x^2$)."
    },
    // --- Problem 2: 15x^3y / 5xy ---
    {
      expression: "\\frac{15x^3y}{5xy}",
      solution: {
        divideCoefficients: "3", // 15 / 5 = 3
        identifyXVariables: "x^2", // x^3 / x^1 = x^(3-1) = x^2
        identifyYVariables: "1", // y^1 / y^1 = y^(1-1) = y^0 = 1
        identifyOtherVariables: "N/A (No other variables)", // No other variables
        combineResults: "3x^2" // Coefficient 3 with variable x^2. y^0 = 1 is implied.
      },
      explanation: {
        divideCoefficients: "Divide the coefficients: $15 \\div 5 = 3$.",
        identifyXVariables: "Identify the $x$ variables and subtract exponents: $x^3 \\div x^1 = x^{3-1} = x^2$. (Remember $x$ is the same as $x^1$).",
        identifyYVariables: "Identify the $y$ variables and subtract exponents: $y^1 \\div y^1 = y^{1-1} = y^0$. By the rule of exponents, $y^0 = 1$.",
        identifyOtherVariables: "There are no other variables besides $x$ and $y$ in the terms.",
        combineResults: "Combine the coefficient result ($3$) with the variable results ($x^2$ and $y^0 = 1$). Multiplying by $1$ doesn't change the value, so the final simplified term is $3x^2$."
      },
      hint: "Divide the coefficients (15 and 5). Handle the $x$ terms: $x^3$ divided by $x$ (which is $x^1$). Handle the $y$ terms: $y$ (which is $y^1$) divided by $y$ ($y^1$). What happens when you divide something by itself?"
    },
    // --- Problem 3: 20a^4b^2 / 4a^2b ---
    {
      expression: "\\frac{20a^4b^2}{4a^2b}",
      solution: {
        divideCoefficients: "5", // 20 / 4 = 5
        identifyXVariables: "N/A (No x variables)", // No x terms
        identifyYVariables: "N/A (No y variables)", // No y terms
        identifyOtherVariables: "a^2, b^1", // a^4/a^2 = a^(4-2)=a^2; b^2/b^1 = b^(2-1)=b^1
        combineResults: "5a^2b" // Coefficient 5 with variables a^2 and b^1
      },
      explanation: {
        divideCoefficients: "Divide the coefficients: $20 \\div 4 = 5$.",
        identifyXVariables: "There are no $x$ variables in the expression.",
        identifyYVariables: "There are no $y$ variables in the expression.",
        identifyOtherVariables: "Identify the other variables and subtract their exponents. For $a$: $a^4 \\div a^2 = a^{4-2} = a^2$. For $b$: $b^2 \\div b^1 = b^{2-1} = b^1$. (Remember $b$ is the same as $b^1$).",
        combineResults: "Combine the coefficient result ($5$) with the variable results ($a^2$ and $b^1$). The final simplified term is $5a^2b$."
      },
      hint: "Start by dividing the numbers (20 and 4). Then, handle the $a$ terms: $a^4$ divided by $a^2$. Next, handle the $b$ terms: $b^2$ divided by $b$ (which is $b^1$). Subtract the exponents for each variable."
    },
     // --- Problem 4: 18m^5 / 6m^2 ---
     {
        expression: "\\frac{18m^5}{6m^2}",
        solution: {
            divideCoefficients: "3", // 18 / 6 = 3
            identifyXVariables: "N/A (No x variables)", // No x terms
            identifyYVariables: "N/A (No y variables)", // No y terms
            identifyOtherVariables: "m^3", // m^5 / m^2 = m^(5-2) = m^3
            combineResults: "3m^3" // Coefficient 3 with variable m^3
        },
        explanation: {
            divideCoefficients: "Divide the coefficients: $18 \\div 6 = 3$.",
            identifyXVariables: "There are no $x$ variables in the expression.",
            identifyYVariables: "There are no $y$ variables in the expression.",
            identifyOtherVariables: "Identify the $m$ variable and subtract the denominator's exponent from the numerator's exponent: $m^5 \\div m^2 = m^{5-2} = m^3$.",
            combineResults: "Combine the coefficient result ($3$) with the variable result ($m^3$). The final simplified term is $3m^3$."
        },
        hint: "Divide the coefficients (18 and 6). For the $m$ terms, subtract the exponent in the denominator ($m^2$) from the exponent in the numerator ($m^5$). Put the results together."
    }
  ]
};

export default function DividingAlgebraicTermsTool() {
  return (
    <MultiStepInteractiveComponent toolData={dividingAlgebraicTermsData} />
  );
}
