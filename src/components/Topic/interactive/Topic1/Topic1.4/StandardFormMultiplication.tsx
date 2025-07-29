import MultiStepInteractiveComponent, { InteractiveToolData } from "../../Templates/MultiStepInteractiveComponent";

// Define data for Multiplying Numbers in Standard Form
const standardFormMultiplicationData: InteractiveToolData = {
  title: "Multiplying Numbers in Standard Form",
  description: "Practice multiplying numbers in standard form by handling coefficients and powers separately.",
  theme: {
    primaryColor: "teal", // Using a different color from the previous example
  },
  steps: [
    {
      id: "multiplyCoefficients",
      title: "Step 1: Multiply the Coefficients",
      description: "Calculate the product of the numerical parts (coefficients).",
      type: 'mcq'
    },
    {
      id: "addPowers",
      title: "Step 2: Add the Powers of 10",
      description: "Add the exponents of the powers of 10.",
      type: 'mcq'
    },
    {
      id: "initialResult",
      title: "Step 3: Form the Initial Result",
      description: "Combine the product of coefficients with the new power of 10.",
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
    // --- Problem 1: $(3.2 \times 10^5) \times (2.1 \times 10^3)$ ---
    {
      multiplyCoefficients: ["6.72", "5.3", "67.2", "5.3 \\times 10^8"],
      addPowers: ["8", "2", "15", "5^3"],
      initialResult: ["6.72 \\times 10^8", "67.2 \\times 10^8", "6.72 \\times 10^{15}", "5.3 \\times 10^8"],
      convertToStandard: ["6.72 \\times 10^8", "67.2 \\times 10^7", "0.672 \\times 10^9", "6.72 \\times 10^7"]
    },
    // --- Problem 2: $(4.5 \times 10^{-2}) \times (3.0 \times 10^6)$ ---
    {
      multiplyCoefficients: ["13.5", "7.5", "1.35", "12.0"],
      addPowers: ["4", "8", "-12", "4.0"],
      initialResult: ["13.5 \\times 10^4", "1.35 \\times 10^5", "13.5 \\times 10^{-12}", "7.5 \\times 10^4"],
      convertToStandard: ["1.35 \\times 10^5", "13.5 \\times 10^4", "1.35 \\times 10^4", "0.135 \\times 10^6"]
    },
    // --- Problem 3: $(2.4 \times 10^7) \times (5.0 \times 10^{-3}) \times (1.2 \times 10^2)$ ---
    {
      multiplyCoefficients: ["14.4", "8.6", "144", "8.6 \\times 10^6"],
      addPowers: ["6", "9", "12", "7 + (-3) + 2"],
      initialResult: ["14.4 \\times 10^6", "1.44 \\times 10^7", "14.4 \\times 10^9", "8.6 \\times 10^6"],
      convertToStandard: ["1.44 \\times 10^7", "14.4 \\times 10^6", "1.44 \\times 10^6", "0.144 \\times 10^8"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: $(3.2 \times 10^5) \times (2.1 \times 10^3)$ ---
    {
      expression: "(3.2 \\times 10^5) \\\\ \\times (2.1 \\times 10^3)",
      solution: {
        multiplyCoefficients: "6.72",
        addPowers: "8",
        initialResult: "6.72 \\times 10^8",
        convertToStandard: "6.72 \\times 10^8"
      },
      explanation: {
        multiplyCoefficients: "Multiply the coefficients: $3.2 \\times 2.1 = 6.72$.",
        addPowers: "Add the exponents: $5 + 3 = 8$.",
        initialResult: "Combine the results: $(3.2 \\times 2.1) \\times 10^{5+3} = 6.72 \\times 10^8$.",
        convertToStandard: "The coefficient $6.72$ is between 1 and 10, so $6.72 \\times 10^8$ is already in proper standard form."
      },
      hint: "Multiply the numbers in front, add the powers of 10. Remember to check if the final coefficient is between 1 and 10."
    },
    // --- Problem 2: $(4.5 \times 10^{-2}) \times (3.0 \times 10^6)$ ---
    {
      expression: "(4.5 \\times 10^{-2}) \\\\ \\times (3.0 \\times 10^6)",
      solution: {
        multiplyCoefficients: "13.5",
        addPowers: "4",
        initialResult: "13.5 \\times 10^4",
        convertToStandard: "1.35 \\times 10^5"
      },
      explanation: {
        multiplyCoefficients: "Multiply the coefficients: $4.5 \\times 3.0 = 13.5$.",
        addPowers: "Add the exponents: $-2 + 6 = 4$.",
        initialResult: "Combine the results: $(4.5 \\times 3.0) \\times 10^{-2+6} = 13.5 \\times 10^4$.",
        convertToStandard: "The coefficient $13.5$ is not between 1 and 10. Move the decimal one place left to get $1.35$, and increase the power by 1: $1.35 \\times 10^{4+1} = 1.35 \\times 10^5$."
      },
      hint: "Follow the same steps. If your coefficient (like 13.5) is 10 or greater, you'll need to adjust it to standard form at the end."
    },
    // --- Problem 3: $(2.4 \times 10^7) \times (5.0 \times 10^{-3}) \times (1.2 \times 10^2)$ ---
    {
      expression: "(2.4 \\times 10^7) \\\\ \\times (5.0 \\times 10^{-3}) \\\\ \\times (1.2 \\times 10^2)",
      solution: {
        multiplyCoefficients: "14.4",
        addPowers: "6",
        initialResult: "14.4 \\times 10^6",
        convertToStandard: "1.44 \\times 10^7"
      },
      explanation: {
        multiplyCoefficients: "Multiply all coefficients: $2.4 \\times 5.0 \\times 1.2 = 14.4$.",
        addPowers: "Add all exponents: $7 + (-3) + 2 = 6$.",
        initialResult: "Combine the results: $(2.4 \\times 5.0 \\times 1.2) \\times 10^{7+(-3)+2} = 14.4 \\times 10^6$.",
        convertToStandard: "The coefficient $14.4$ is not between 1 and 10. Move the decimal one place left to get $1.44$, and increase the power by 1: $1.44 \\times 10^{6+1} = 1.44 \\times 10^7$."
      },
      hint: "The rule extends to more than two numbers. Multiply all coefficients together and add all the exponents together. Don't forget the final check for standard form!"
    }
  ]
};

// Then, in your main App component or where you render the tools:
// <MultiStepInteractiveComponent toolData={standardFormMultiplicationData} />

const StandardFormMultiplication = ()=> {
  return <MultiStepInteractiveComponent toolData={standardFormMultiplicationData} />
}


export default StandardFormMultiplication