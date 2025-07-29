
// import "katex/dist/katex.min.css";
// import { InteractiveToolData } from "../../Topic7/Templates/AlgebraMultiStepInteractiveTemplate";

import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData } from "../../Topic7/Templates/AlgebraMultiStepInteractiveTemplate";


// // Data for Adding and Subtracting Standard Form using AlgebraMultiStepInteractiveTemplate
// export const standardFormAdditionSubtractionData: InteractiveToolData = {
//   title: "Adding and Subtracting Numbers in Standard Form",
//   description: "Practice adding and subtracting numbers written in standard form by converting to ordinary numbers.",
//   theme: { primaryColor: 'green' }, // Example theme
//   steps: [
//     {
//       id: "convertNum1",
//       title: "Step 1: Convert First Number",
//       description: "Convert the first number to its ordinary (decimal) form:",
//       type: 'mcq'
//     },
//     {
//       id: "convertNum2",
//       title: "Step 2: Convert Second Number",
//       description: "Convert the second number to its ordinary (decimal) form:",
//       type: 'mcq'
//     },
//     {
//       id: "calculateResult",
//       title: "Step 3: Perform the Calculation",
//       description: "Add or subtract the two ordinary numbers:",
//       type: 'mcq'
//     },
//     {
//       id: "convertStandardForm",
//       title: "Step 4: Convert Back",
//       description: "Convert your result back into standard form:",
//       type: 'mcq'
//     }
//   ],
//   mcqOptionsPerProblem: [
//     // Problem 1: 3.2 x 10^5 + 4.7 x 10^4
//     [
//       { // convertNum1
//         convertNum1: ["320,000", "32,000", "3,200,000", "32,000,000"]
//       },
//       { // convertNum2
//         convertNum2: ["47,000", "4,700", "470,000", "4,700,000"]
//       },
//       { // calculateResult
//         calculateResult: ["367,000", "36,700", "3,670,000", "367,000,000"]
//       },
//       { // convertStandardForm
//         convertStandardForm: ["3.67 \\times 10^5", "36.7 \\times 10^4", "367 \\times 10^3", "0.367 \\times 10^6"]
//       }
//     ],
//     // Problem 2: 7.3 x 10^4 - 2.8 x 10^3
//     [
//       { // convertNum1
//         convertNum1: ["73,000", "7,300", "730,000", "7,300,000"]
//       },
//       { // convertNum2
//         convertNum2: ["2,800", "280", "28,000", "280,000"]
//       },
//       { // calculateResult
//         calculateResult: ["70,200", "7,020", "702,000", "7,020,000"]
//       },
//       { // convertStandardForm
//         convertStandardForm: ["7.02 \\times 10^4", "70.2 \\times 10^3", "702 \\times 10^2", "0.702 \\times 10^5"]
//       }
//     ],
//     // Problem 3: 1.5 x 10^-3 + 4.2 x 10^-4
//     [
//       { // convertNum1
//         convertNum1: ["0.0015", "0.015", "0.15", "1.5"]
//       },
//       { // convertNum2
//         convertNum2: ["0.00042", "0.0042", "0.042", "0.42"]
//       },
//       { // calculateResult
//         calculateResult: ["0.00192", "0.0192", "0.192", "1.92"]
//       },
//       { // convertStandardForm
//         convertStandardForm: ["1.92 \\times 10^{-3}", "19.2 \\times 10^{-4}", "192 \\times 10^{-5}", "0.192 \\times 10^{-2}"]
//       }
//     ],
//     // Problem 4: 5.2 x 10^7 + 3.1 x 10^6 (Different exponents)
//     [
//       { // convertNum1
//         convertNum1: ["52,000,000", "5,200,000", "520,000,000", "5,200,000,000"]
//       },
//       { // convertNum2
//         convertNum2: ["3,100,000", "310,000", "31,000,000", "310,000,000"]
//       },
//       { // calculateResult
//         calculateResult: ["55,100,000", "5,510,000", "551,000,000", "55,100,000,000"]
//       },
//       { // convertStandardForm
//         convertStandardForm: ["5.51 \\times 10^7", "55.1 \\times 10^6", "551 \\times 10^5", "0.551 \\times 10^8"]
//       }
//     ],
//     // Problem 5: 2.3 x 10^6 + 1.4 x 10^6 (Same exponents)
//     [
//       { // convertNum1
//         convertNum1: ["2,300,000", "230,000", "23,000,000", "230,000,000"]
//       },
//       { // convertNum2
//         convertNum2: ["1,400,000", "140,000", "14,000,000", "140,000,000"]
//       },
//       { // calculateResult
//         calculateResult: ["3,700,000", "370,000", "37,000,000", "370,000,000"]
//       },
//       { // convertStandardForm
//         convertStandardForm: ["3.7 \\times 10^6", "37 \\times 10^5", "370 \\times 10^4", "0.37 \\times 10^7"]
//       }
//     ]
//   ],
//   practiceProblems: [
//     {
//       expression: "(3.2 \\times 10^5) + (4.7 \\times 10^4)",
//       solution: {
//         convertNum1: "320,000",
//         convertNum2: "47,000",
//         calculateResult: "367,000",
//         convertStandardForm: "3.67 \\times 10^5"
//       },
//       explanation: {
//         convertNum1: "To convert $3.2 \\times 10^5$ to an ordinary number, move the decimal point 5 places to the right.",
//         convertNum2: "To convert $4.7 \\times 10^4$ to an ordinary number, move the decimal point 4 places to the right.",
//         calculateResult: "Add the two ordinary numbers: $320,000 + 47,000 = 367,000$.",
//         convertStandardForm: "To convert 367,000 to standard form, place the decimal after the first significant digit (3) and count the places moved (5)."
//       },
//       hint: "Remember, the exponent tells you how many places to move the decimal point. Positive exponents mean moving right."
//     },
//     {
//       expression: "(7.3 \\times 10^4) - (2.8 \\times 10^3)",
//       solution: {
//         convertNum1: "73,000",
//         convertNum2: "2,800",
//         calculateResult: "70,200",
//         convertStandardForm: "7.02 \\times 10^4"
//       },
//       explanation: {
//         convertNum1: "To convert $7.3 \\times 10^4$ to an ordinary number, move the decimal point 4 places to the right.",
//         convertNum2: "To convert $2.8 \\times 10^3$ to an ordinary number, move the decimal point 3 places to the right.",
//         calculateResult: "Subtract the two ordinary numbers: $73,000 - 2,800 = 70,200$.",
//         convertStandardForm: "To convert 70,200 to standard form, place the decimal after the first significant digit (7) and count the places moved (4)."
//       },
//       hint: "When subtracting, make sure to align the numbers correctly based on their place values."
//     },
//     {
//       expression: "(1.5 \\times 10^{-3}) + (4.2 \\times 10^{-4})",
//       solution: {
//         convertNum1: "0.0015",
//         convertNum2: "0.00042",
//         calculateResult: "0.00192",
//         convertStandardForm: "1.92 \\times 10^{-3}"
//       },
//       explanation: {
//         convertNum1: "To convert $1.5 \\times 10^{-3}$ to an ordinary number, move the decimal point 3 places to the left.",
//         convertNum2: "To convert $4.2 \\times 10^{-4}$ to an ordinary number, move the decimal point 4 places to the left.",
//         calculateResult: "Add the two ordinary numbers: $0.0015 + 0.00042 = 0.00192$.",
//         convertStandardForm: "To convert 0.00192 to standard form, place the decimal after the first significant digit (1) and count the places moved (3 to the right from the decimal point, so exponent is -3)."
//       },
//       hint: "Negative exponents mean moving the decimal point to the left. Be careful with the number of zeros."
//     },
//     {
//       expression: "(5.2 \\times 10^7) + (3.1 \\times 10^6)",
//       solution: {
//         convertNum1: "52,000,000",
//         convertNum2: "3,100,000",
//         calculateResult: "55,100,000",
//         convertStandardForm: "5.51 \\times 10^7"
//       },
//       explanation: {
//         convertNum1: "To convert $5.2 \\times 10^7$ to an ordinary number, move the decimal point 7 places to the right.",
//         convertNum2: "To convert $3.1 \\times 10^6$ to an ordinary number, move the decimal point 6 places to the right.",
//         calculateResult: "Add the two ordinary numbers: $52,000,000 + 3,100,000 = 55,100,000$.",
//         convertStandardForm: "To convert 55,100,000 to standard form, place the decimal after the first significant digit (5) and count the places moved (7)."
//       },
//       hint: "When the exponents are different, you can convert both to ordinary form first, or adjust one number to match the other's exponent."
//     },
//     {
//       expression: "(2.3 \\times 10^6) + (1.4 \\times 10^6)",
//       solution: {
//         convertNum1: "2,300,000",
//         convertNum2: "1,400,000",
//         calculateResult: "3,700,000",
//         convertStandardForm: "3.7 \\times 10^6"
//       },
//       explanation: {
//         convertNum1: "To convert $2.3 \\times 10^6$ to an ordinary number, move the decimal point 6 places to the right.",
//         convertNum2: "To convert $1.4 \\times 10^6$ to an ordinary number, move the decimal point 6 places to the right.",
//         calculateResult: "Add the two ordinary numbers: $2,300,000 + 1,400,000 = 3,700,000$.",
//         convertStandardForm: "To convert 3,700,000 to standard form, place the decimal after the first significant digit (3) and count the places moved (6). When exponents are the same, you can also add coefficients directly: $(2.3 + 1.4) \\times 10^6$."
//       },
//       hint: "When the exponents are the same, you can add or subtract the coefficients directly and keep the same power of 10."
//     }
//   ]
// };





// const StandardFormAdditionSubtraction = () => {
// };

// export default StandardFormAdditionSubtraction;



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
  return <AlgebraMultiStepInteractiveTemplate toolData={standardFormAddSubData} />
};

export default StandardFormAdditionSubtraction;


// Then, in your main App component or where you render the tools:
// <AlgebraMultiStepInteractiveTemplate toolData={standardFormAddSubData} />
