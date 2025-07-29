import MultiStepInteractiveComponent, { InteractiveToolData } from "../../Templates/MultiStepInteractiveComponent";

// Define data for Adding and Subtracting Numbers in Standard Form (Method 1: Convert to Ordinary)
const standardFormAddSubData: InteractiveToolData = {
  title: "Adding and Subtracting Numbers in Standard Form",
  description: "Practice converting numbers to ordinary form, performing the calculation, and converting the result back.",
  theme: {
    primaryColor: "blue", // You can choose a color from the template's options (indigo, blue, green, purple, amber, rose, teal)
    // backgroundColorFrom and backgroundColorTo are optional if you want to customize the gradient further
  },
  steps: [
    {
      id: "convertFirst",
      title: "Step 1: Convert the First Number",
      description: "Convert the first number from standard form to ordinary form.",
      type: 'mcq'
    },
    {
      id: "convertSecond",
      title: "Step 2: Convert the Second Number",
      description: "Convert the second number from standard form to ordinary form.",
      type: 'mcq'
    },
    {
      id: "calculateOrdinary",
      title: "Step 3: Perform the Calculation",
      description: "Add or subtract the two ordinary numbers you found.",
      type: 'mcq'
    },
    {
      id: "convertResult",
      title: "Step 4: Convert the Result Back",
      description: "Convert the ordinary result back into standard form.",
      type: 'mcq'
    }
    // Optional: Add an 'info' step at the end summarizing Method 1 vs other methods?
    // {
    //   id: "summary",
    //   title: "Summary: Method 1",
    //   description: "This method involves converting to ordinary numbers. Remember to check the other methods for cases where powers are the same or can be easily adjusted!",
    //   type: 'info'
    // }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: Example from template content ---
    // Expression: $3.2 \times 10^5 + 4.7 \times 10^4$
    {
      convertFirst: ["320000", "32000", "3200000", "3.2 \\times 10^5"], // Correct: "320000"
      convertSecond: ["47000", "4700", "470000", "4.7 \\times 10^4"], // Correct: "47000"
      calculateOrdinary: ["367000", "36700", "3670000", "273000"], // Correct: "367000"
      convertResult: ["3.67 \\times 10^5", "36.7 \\times 10^4", "367 \\times 10^3", "3.67 \\times 10^6"] // Correct: "3.67 \times 10^5"
    },
    // --- Problem 2: Subtraction Example ---
    // Expression: $(7.3 \times 10^4) - (2.8 \times 10^3)$
    {
      convertFirst: ["73000", "7300", "730000", "7.3 \\times 10^4"], // Correct: "73000"
      convertSecond: ["2800", "28000", "280", "2.8 \\times 10^3"], // Correct: "2800"
      calculateOrdinary: ["70200", "72000", "70020", "45000"], // Correct: "70200"
      convertResult: ["7.02 \\times 10^4", "70.2 \\times 10^3", "702 \\times 10^2", "7.02 \\times 10^5"] // Correct: "7.02 \times 10^4"
    }
    // Add more problems following the same pattern in the array...
  ],
  practiceProblems: [
    // --- Problem 1: Example from template content ---
    {
      expression: "(3.2 \\times 10^5)\\\\ + (4.7 \\times 10^4)", // KaTeX formatted
      solution: {
        convertFirst: "320000",
        convertSecond: "47000",
        calculateOrdinary: "367000",
        convertResult: "3.67 \\times 10^5" // KaTeX formatted
      },
      explanation: {
        convertFirst: "Move the decimal point 5 places to the right: $3.2 \\times 100000 = 320000$.",
        convertSecond: "Move the decimal point 4 places to the right: $4.7 \\times 10000 = 47000$.",
        calculateOrdinary: "$320000 + 47000 = 367000$.",
        convertResult: "Move the decimal point in 367000 to get one non-zero digit before it: $3.67$. Count the places moved (5) for the power of 10: $3.67 \\times 10^5$."
      },
      hint: "Remember, $10^n$ means moving the decimal point $n$ places. Add when converting to ordinary form if the power is positive."
    },
    // --- Problem 2: Subtraction Example ---
    {
      expression: "(7.3 \\times 10^4) \\\\ - (2.8 \\times 10^3)",
      solution: {
        convertFirst: "73000",
        convertSecond: "2800",
        calculateOrdinary: "70200",
        convertResult: "7.02 \\times 10^4"
      },
      explanation: {
        convertFirst: "Move the decimal point 4 places to the right: $7.3 \\times 10000 = 73000$.",
        convertSecond: "Move the decimal point 3 places to the right: $2.8 \\times 1000 = 2800$.",
        calculateOrdinary: "$73000 - 2800 = 70200$.",
        convertResult: "Move the decimal point in 70200 to get one non-zero digit before it: $7.02$. Count the places moved (4) for the power of 10: $7.02 \\times 10^4$."
      },
      hint: "Convert both numbers to ordinary form first, then perform the subtraction. Be careful with place values."
    }
    // Add more problems following the same pattern in the array...
  ]
};




const StandardFormAdditionSubtraction = () => {
  return <MultiStepInteractiveComponent toolData={standardFormAddSubData} />
};

export default StandardFormAdditionSubtraction;


// Then, in your main App component or where you render the tools:
// <MultiStepInteractiveComponent toolData={standardFormAddSubData} />
