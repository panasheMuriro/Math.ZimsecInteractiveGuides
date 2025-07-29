import MultiStepInteractiveComponent, { InteractiveToolData } from "../../Templates/MultiStepInteractiveComponent";

// Define data for Dividing Numbers in Standard Form
const standardFormDivisionData: InteractiveToolData = {
  title: "Dividing Numbers in Standard Form",
  description: "Practice dividing numbers in standard form by handling coefficients and powers separately.",
  theme: {
    primaryColor: "green", // Using a different color
  },
  steps: [
    {
      id: "divideCoefficients",
      title: "Step 1: Divide the Coefficients",
      description: "Calculate the quotient of the numerical parts (coefficients).",
      type: 'mcq'
    },
    {
      id: "subtractPowers",
      title: "Step 2: Subtract the Powers of 10",
      description: "Subtract the exponent of the divisor from the exponent of the dividend.",
      type: 'mcq'
    },
    {
      id: "initialResult",
      title: "Step 3: Form the Initial Result",
      description: "Combine the quotient of coefficients with the new power of 10.",
      type: 'mcq'
    },
    {
      id: "convertToStandard",
      title: "Step 4: Convert to Proper Standard Form",
      description: "If the coefficient is not between 1 and 10, rewrite the number in correct standard form.",
      type: 'mcq'
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: $(8.4 \times 10^7) \div (2.1 \times 10^3)$ ---
    {
      divideCoefficients: ["4.0", "17.64", "6.3", "10.5"],
      subtractPowers: ["4", "10", "21", "7 \\div 3"],
      initialResult: ["4.0 \\times 10^4", "4.0 \\times 10^{10}", "6.3 \\times 10^4", "17.64 \\times 10^{21}"],
      convertToStandard: ["4.0 \\times 10^4", "4.0 \\times 10^3", "40 \\times 10^3", "0.4 \\times 10^5"]
    },
    // --- Problem 2: $(6.3 \times 10^{-2}) \div (9.0 \times 10^4)$ ---
    {
      divideCoefficients: ["0.7", "1.43", "56.7", "0.14"],
      subtractPowers: ["-6", "2", "-8", "-2 - 4"],
      initialResult: ["0.7 \\times 10^{-6}", "0.7 \\times 10^2", "56.7 \\times 10^{-8}", "1.43 \\times 10^{-6}"],
      convertToStandard: ["7.0 \\times 10^{-7}", "0.7 \\times 10^{-6}", "7.0 \\times 10^{-5}", "7 \\times 10^{-7}"]
    },
    // --- Problem 3: $(1.8 \times 10^5) \div (3.6 \times 10^{-2})$ ---
    {
      divideCoefficients: ["0.5", "2.0", "5.0", "6.48"],
      subtractPowers: ["7", "3", "-7", "5 - (-2)"],
      initialResult: ["0.5 \\times 10^7", "0.5 \\times 10^3", "2.0 \\times 10^7", "5.0 \\times 10^{-7}"],
      convertToStandard: ["5.0 \\times 10^6", "0.5 \\times 10^7", "5.0 \\times 10^5", "5 \\times 10^6"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: $(8.4 \times 10^7) \div (2.1 \times 10^3)$ ---
    {
      expression: "(8.4 \\times 10^7) \\\\ \\div (2.1 \\times 10^3)",
      solution: {
        divideCoefficients: "4.0",
        subtractPowers: "4",
        initialResult: "4.0 \\times 10^4",
        convertToStandard: "4.0 \\times 10^4"
      },
      explanation: {
        divideCoefficients: "Divide the coefficients: $8.4 \\div 2.1 = 4.0$.",
        subtractPowers: "Subtract the exponents: $7 - 3 = 4$.",
        initialResult: "Combine the results: $\\frac{8.4}{2.1} \\times 10^{7-3} = 4.0 \\times 10^4$.",
        convertToStandard: "The coefficient $4.0$ is between 1 and 10, so $4.0 \\times 10^4$ is already in proper standard form."
      },
      hint: "Divide the numbers in front, subtract the powers of 10 (top minus bottom). Remember to check if the final coefficient is between 1 and 10."
    },
    // --- Problem 2: $(6.3 \times 10^{-2}) \div (9.0 \times 10^4)$ ---
    {
      expression: "(6.3 \\times 10^{-2})\\\\ \\div (9.0 \\times 10^4)",
      solution: {
        divideCoefficients: "0.7",
        subtractPowers: "-6",
        initialResult: "0.7 \\times 10^{-6}",
        convertToStandard: "7.0 \\times 10^{-7}"
      },
      explanation: {
        divideCoefficients: "Divide the coefficients: $6.3 \\div 9.0 = 0.7$.",
        subtractPowers: "Subtract the exponents: $-2 - 4 = -6$.",
        initialResult: "Combine the results: $\\frac{6.3}{9.0} \\times 10^{-2-4} = 0.7 \\times 10^{-6}$.",
        convertToStandard: "The coefficient $0.7$ is not between 1 and 10. Move the decimal one place right to get $7.0$, and decrease the power by 1: $7.0 \\times 10^{-6-1} = 7.0 \\times 10^{-7}$."
      },
      hint: "Follow the same steps. If your initial coefficient (like 0.7) is less than 1, you'll need to adjust it to standard form at the end by making the coefficient larger and the power more negative."
    },
    // --- Problem 3: $(1.8 \times 10^5) \div (3.6 \times 10^{-2})$ ---
    {
      expression: "(1.8 \\times 10^5) \\\\ \\div (3.6 \\times 10^{-2})",
      solution: {
        divideCoefficients: "0.5",
        subtractPowers: "7",
        initialResult: "0.5 \\times 10^7",
        convertToStandard: "5.0 \\times 10^6"
      },
      explanation: {
        divideCoefficients: "Divide the coefficients: $1.8 \\div 3.6 = 0.5$.",
        subtractPowers: "Subtract the exponents: $5 - (-2) = 5 + 2 = 7$.",
        initialResult: "Combine the results: $\\frac{1.8}{3.6} \\times 10^{5-(-2)} = 0.5 \\times 10^7$.",
        convertToStandard: "The coefficient $0.5$ is not between 1 and 10. Move the decimal one place right to get $5.0$, and decrease the power by 1: $5.0 \\times 10^{7-1} = 5.0 \\times 10^6$."
      },
      hint: "Be careful with subtracting a negative exponent! Subtracting a negative is the same as adding. Adjust the final form if the coefficient is not between 1 and 10."
    }
  ]
};


const StandardFormDivision = ()=>{
    return <MultiStepInteractiveComponent toolData={standardFormDivisionData} />
}
export default StandardFormDivision;
// Then, in your main App component or where you render the tools:
// <MultiStepInteractiveComponent toolData={standardFormDivisionData} />
