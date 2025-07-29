// LawsOfIndicesTool.tsx
import MultiStepInteractiveComponent, { InteractiveToolData } from '../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Laws of Indices
const lawsOfIndicesData: InteractiveToolData = {
  title: "Laws of Indices",
  description: "Master the rules for simplifying expressions with exponents.",
  theme: {
    primaryColor: 'teal', // Specify the primary color theme
    backgroundColorFrom: 'teal-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'cyan-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "identifyOperation",
      title: "Step 1: Identify the Operation",
      description: "What mathematical operation (multiplication, division, power) is being performed on the terms with exponents?",
      type: "mcq"
    },
    {
      id: "identifyLaw",
      title: "Step 2: Identify the Relevant Law",
      description: "Which law of indices applies to the identified operation?",
      type: "mcq"
    },
    {
      id: "applyLaw",
      title: "Step 3: Apply the Law",
      description: "Apply the chosen law to combine the exponents. What is the resulting expression?",
      type: "mcq"
    },
    {
      id: "simplifyExponent",
      title: "Step 4: Simplify the Exponent",
      description: "Perform the arithmetic on the exponents (add, subtract, multiply). What is the simplified exponent?",
      type: "mcq"
    },
    {
      id: "finalExpression",
      title: "Step 5: Write the Final Expression",
      description: "Combine the base with the simplified exponent. What is the final simplified form?",
      type: "mcq"
    },
    {
      id: "checkCalculation",
      title: "Step 6: Check Your Work (Optional)",
      description: "Calculate the numerical value of the original expression and the simplified expression to verify they are equal.",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: 3^2 * 3^4 ---
    {
      identifyOperation: ["Multiplication", "Division", "Power", "Addition"],
      identifyLaw: ["Multiplication Law: a^m * a^n = a^(m+n)", "Division Law: a^m / a^n = a^(m-n)", "Power Law: (a^m)^n = a^(m*n)", "Zero Exponent Law: a^0 = 1"],
      applyLaw: ["3^(2+4)", "3^(2*4)", "3^(2-4)", "3^(4-2)"],
      simplifyExponent: ["6", "8", "-2", "2"],
      finalExpression: ["3^6", "729", "3^8", "3^2"],
      checkCalculation: ["9 * 81 = 729", "6 * 4 = 24", "3^2 + 3^4 = 90", "3^6 = 729"]
    },
    // --- Problem 2: (5^7 / 5^3) * 5^(-2) ---
    {
      identifyOperation: ["Division then Multiplication", "Multiplication then Division", "Power", "Addition"],
      identifyLaw: ["Division Law then Multiplication Law", "Multiplication Law then Division Law", "Power Law", "Negative Exponent Law"],
      applyLaw: ["5^(7-3) * 5^(-2) then 5^((7-3)+(-2))", "5^(7-3) * 5^(-2) then 5^(4-2)", "5^(7*3) * 5^(-2)", "5^(7+3) * 5^(-2)"],
      simplifyExponent: ["2", "4", "6", "5"],
      finalExpression: ["5^2", "25", "5^4", "5^6"],
      checkCalculation: ["(78125 / 125) * (1/25) = 625 * 1/25 = 25", "5^7 * 5^3 * 5^(-2) = ...", "5^2 + 5^(-2) = ...", "5^2 = 25"]
    },
    // --- Problem 3: (2^3)^(1/2) ---
    {
      identifyOperation: ["Power", "Multiplication", "Division", "Addition"],
      identifyLaw: ["Power Law: (a^m)^n = a^(m*n)", "Multiplication Law: a^m * a^n = a^(m+n)", "Division Law: a^m / a^n = a^(m-n)", "Fractional Exponent Law: a^(m/n) = (a^(1/n))^m"],
      applyLaw: ["2^(3 * 1/2)", "2^(3 + 1/2)", "2^(3 - 1/2)", "2^(3 / 1/2)"],
      simplifyExponent: ["3/2", "7/2", "5/2", "3"],
      finalExpression: ["2^(3/2)", "(\\sqrt{2})^3", "2\\sqrt{2}", "2^3"],
      checkCalculation: ["(2^3)^(1/2) = 8^(1/2) = \\sqrt{8} = 2\\sqrt{2}", "2^3 * 2^(1/2) = ...", "2^3 / 2^(1/2) = ...", "2^(3/2) = 2\\sqrt{2}"]
    },
     // --- Problem 4: (4^5 / 4^2) * 4^(-1) (Practice Example) ---
     {
        identifyOperation: ["Division then Multiplication", "Multiplication then Division", "Power", "Addition"],
        identifyLaw: ["Division Law then Multiplication Law", "Multiplication Law then Division Law", "Power Law", "Negative Exponent Law"],
        applyLaw: ["4^(5-2) * 4^(-1) then 4^((5-2)+(-1))", "4^(5-2) * 4^(-1) then 4^(3-1)", "4^(5*2) * 4^(-1)", "4^(5+2) * 4^(-1)"],
        simplifyExponent: ["2", "3", "1", "4"],
        finalExpression: ["4^2", "16", "4^1", "4^3"],
        checkCalculation: ["(1024 / 16) * (1/4) = 64 * 1/4 = 16", "4^5 * 4^2 * 4^(-1) = ...", "4^2 + 4^(-1) = ...", "4^2 = 16"]
      }
  ],
  practiceProblems: [
    // --- Problem 1: 3^2 * 3^4 ---
    {
      expression: "3^2 \\times 3^4",
      solution: {
        identifyOperation: "Multiplication",
        identifyLaw: "Multiplication Law: a^m \\times a^n = a^{m+n}",
        applyLaw: "3^{2+4}",
        simplifyExponent: "6",
        finalExpression: "3^6",
        checkCalculation: "9 \\times 81 = 729" // Or "3^6 = 729"
      },
      explanation: {
        identifyOperation: "The expression involves two terms with the same base ($3$) being multiplied together: $3^2 \\times 3^4$.",
        identifyLaw: "When multiplying terms with the same base, we use the Multiplication Law of indices: $a^m \\times a^n = a^{m+n}$.",
        applyLaw: "Apply the Multiplication Law with base $a=3$, $m=2$, and $n=4$: $3^2 \\times 3^4 = 3^{2+4}$.",
        simplifyExponent: "Perform the addition in the exponent: $2 + 4 = 6$.",
        finalExpression: "Combine the base $3$ with the simplified exponent $6$ to get the final expression: $3^6$.",
        checkCalculation: "To verify, calculate the original expression: $3^2 = 9$ and $3^4 = 81$. Multiply them: $9 \\times 81 = 729$. Calculate the simplified expression: $3^6 = 729$. Since both results are $729$, the simplification is correct."
      },
      hint: "Are the bases the same? If you are multiplying terms with the same base, what do you do with the exponents?"
    },
    // --- Problem 2: (5^7 / 5^3) * 5^(-2) ---
    {
      expression: "\\frac{5^7}{5^3} \\times 5^{-2}",
      solution: {
        identifyOperation: "Division then Multiplication",
        identifyLaw: "Division Law then Multiplication Law", // Or combined as "Apply laws sequentially"
        applyLaw: "5^{7-3} \\times 5^{-2} \\text{ then } 5^{(7-3)+(-2)}", // Or 5^{4 + (-2)}
        simplifyExponent: "2", // Or "4 - 2 = 2"
        finalExpression: "5^2",
        checkCalculation: "625 \\times \\frac{1}{25} = 25" // Or "5^2 = 25"
      },
      explanation: {
        identifyOperation: "The expression has two operations: division ($\\frac{5^7}{5^3}$) and multiplication ($... \\times 5^{-2}$). We handle them from left to right or simplify the division first.",
        identifyLaw: "We need to use two laws: the Division Law ($a^m / a^n = a^{m-n}$) for the first part, and then the Multiplication Law ($a^m \\times a^n = a^{m+n}$) for the result times $5^{-2}$.",
        applyLaw: "First, apply the Division Law to $\\frac{5^7}{5^3}$: $5^{7-3}$. This simplifies the expression to $5^{7-3} \\times 5^{-2}$. Next, apply the Multiplication Law to $5^{7-3} \\times 5^{-2}$: $5^{(7-3) + (-2)}$.",
        simplifyExponent: "Calculate the exponent: $(7-3) + (-2) = 4 - 2 = 2$.",
        finalExpression: "Combine the base $5$ with the simplified exponent $2$: $5^2$.",
        checkCalculation: "To verify, calculate the original expression step-by-step: $5^7 = 78125$, $5^3 = 125$, so $\\frac{5^7}{5^3} = \\frac{78125}{125} = 625$. Then, $5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}$. Multiply the results: $625 \\times \\frac{1}{25} = \\frac{625}{25} = 25$. Calculate the simplified expression: $5^2 = 25$. Since both results are $25$, the simplification is correct."
      },
      hint: "Handle the division first using the division law (subtract exponents). Then, multiply the result by the last term using the multiplication law (add exponents)."
    },
    // --- Problem 3: (2^3)^(1/2) ---
    {
      expression: "(2^3)^{1/2}",
      solution: {
        identifyOperation: "Power",
        identifyLaw: "Power Law: (a^m)^n = a^{m \\times n}",
        applyLaw: "2^{3 \\times 1/2}",
        simplifyExponent: "\\frac{3}{2}", // Or "3/2" or "1.5"
        finalExpression: "2^{3/2}",
        checkCalculation: "8^{1/2} = \\sqrt{8} = 2\\sqrt{2}" // Or "2^{3/2} = (2^{1/2})^3 = (\\sqrt{2})^3 = 2\\sqrt{2}"
      },
      explanation: {
        identifyOperation: "The expression is a power raised to another power: $(2^3)^{1/2}$.",
        identifyLaw: "When raising a power to another power, we use the Power Law of indices: $(a^m)^n = a^{m \\times n}$.",
        applyLaw: "Apply the Power Law with base $a=2$, $m=3$, and $n=1/2$: $(2^3)^{1/2} = 2^{3 \\times 1/2}$.",
        simplifyExponent: "Perform the multiplication in the exponent: $3 \\times \\frac{1}{2} = \\frac{3 \\times 1}{2} = \\frac{3}{2}$.",
        finalExpression: "Combine the base $2$ with the simplified exponent $3/2$: $2^{3/2}$.",
        checkCalculation: "To verify, calculate the original expression: $2^3 = 8$, so $(2^3)^{1/2} = 8^{1/2}$. By the definition of fractional exponents, $8^{1/2} = \\sqrt{8}$. Simplify $\\sqrt{8} = \\sqrt{4 \\times 2} = \\sqrt{4} \\times \\sqrt{2} = 2\\sqrt{2}$. Calculate the simplified expression using the property $a^{m/n} = (a^{1/n})^m$: $2^{3/2} = (2^{1/2})^3 = (\\sqrt{2})^3 = \\sqrt{2} \\times \\sqrt{2} \\times \\sqrt{2} = 2 \\times \\sqrt{2} = 2\\sqrt{2}$. Since both results are $2\\sqrt{2}$, the simplification is correct."
      },
      hint: "This is a power $(...)^{1/2}$. Which law applies when you have a power raised to another power? Multiply the exponents."
    },
     // --- Problem 4: (4^5 / 4^2) * 4^(-1) ---
     {
        expression: "\\frac{4^5}{4^2} \\times 4^{-1}",
        solution: {
            identifyOperation: "Division then Multiplication",
            identifyLaw: "Division Law then Multiplication Law",
            applyLaw: "4^{5-2} \\times 4^{-1} \\text{ then } 4^{(5-2)+(-1)}",
            simplifyExponent: "2",
            finalExpression: "4^2",
            checkCalculation: "1024 \\div 16 \\times \\frac{1}{4} = 64 \\times \\frac{1}{4} = 16"
        },
        explanation: {
            identifyOperation: "The expression involves division ($\\frac{4^5}{4^2}$) followed by multiplication ($... \\times 4^{-1}$).",
            identifyLaw: "We apply the Division Law first ($a^m / a^n = a^{m-n}$), and then the Multiplication Law ($a^m \\times a^n = a^{m+n}$).",
            applyLaw: "First, apply the Division Law to $\\frac{4^5}{4^2}$: $4^{5-2}$. The expression becomes $4^{5-2} \\times 4^{-1}$. Next, apply the Multiplication Law: $4^{(5-2) + (-1)}$.",
            simplifyExponent: "Calculate the exponent step by step: $5-2 = 3$. Then, $3 + (-1) = 3 - 1 = 2$.",
            finalExpression: "Combine the base $4$ with the simplified exponent $2$: $4^2$.",
            checkCalculation: "To verify, calculate the original expression: $4^5 = 1024$, $4^2 = 16$, so $\\frac{4^5}{4^2} = \\frac{1024}{16} = 64$. Then, $4^{-1} = \\frac{1}{4}$. Multiply the results: $64 \\times \\frac{1}{4} = \\frac{64}{4} = 16$. Calculate the simplified expression: $4^2 = 16$. Since both results are $16$, the simplification is correct."
        },
        hint: "Start with the division. Subtract the exponents. Then, multiply by the last term. Add the exponents (remember, adding a negative number is like subtracting)."
    }
  ]
};

export default function LawsOfIndicesTool() {
  return (
    <MultiStepInteractiveComponent toolData={lawsOfIndicesData} />
  );
}
