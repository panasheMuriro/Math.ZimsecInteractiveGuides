import React from 'react';
import MultiStepInteractiveComponent, { InteractiveToolData } from "../../Templates/MultiStepInteractiveComponent"; // Adjust path as needed

// --- Data for Simple Interest Calculations ---
const simpleInterestData: InteractiveToolData = {
  title: "Simple Interest Calculations",
  description: "Learn to calculate interest earned and final amounts using the simple interest formula.",
  theme: {
    primaryColor: 'blue', // Blue theme for financial concepts
    backgroundColorFrom: 'from-blue-50',
    backgroundColorTo: 'to-cyan-100',
  },
  expressionSize: 'text-xl',
  inlineExpression: true, // Makes the problem expression inline
  mcqOptionRenderType: 'text', // Use renderTextWithMath for MCQ options
  steps: [
    {
      id: "identify_variables",
      title: "Identify the Variables",
      description: "What are the Principal (P), Rate (R), and Time (T) from the problem?",
      type: "mcq"
    },
    {
      id: "calculate_interest",
      title: "Calculate the Simple Interest (I)",
      description: "Use the formula: $I = \\frac{P \\times R \\times T}{100}$",
      type: "mcq"
    },
    {
      id: "calculate_amount",
      title: "Calculate the Final Amount (A)",
      description: "Use the formula: $A = P + I$",
      type: "mcq"
    }
    // Optional advanced steps for finding P, R, or T could be added here
    // {
    //   id: "find_principal",
    //   title: "Find the Principal (P)",
    //   description: "If given I, R, and T, how would you find P?",
    //   type: "mcq"
    // }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: Basic Calculation ---
    {
      identify_variables: [
        "P = $1000, R = 5%, T = 3 years", // Correct
        "P = $150, R = 5%, T = 3 years",
        "P = $1000, R = 3%, T = 5 years",
        "P = $1150, R = 5%, T = 3 years"
      ],
      calculate_interest: [
        "$150", // Correct (I = (1000*5*3)/100)
        "$100",
        "$50",
        "$200"
      ],
      calculate_amount: [
       "$1150", // Correct (A = P + I = 1000 + 150)
       "$1200",
       "$1100",
       "$1050"
      ]
      // find_principal: [ ...options... ] // If advanced step is added
    },
    // --- Problem 2: Time Conversion ---
    {
      identify_variables: [
        "P = $800, R = 6%, T = 1.5 years", // Correct (18 months = 1.5 years)
        "P = $800, R = 6%, T = 18 years",
        "P = $800, R = 6%, T = 0.5 years",
        "P = $800, R = 6%, T = 2 years"
      ],
      calculate_interest: [
        "$72", // Correct (I = (800*6*1.5)/100)
        "$48",
        "$120",
        "$96"
      ],
      calculate_amount: [
       "$872", // Correct (A = P + I = 800 + 72)
       "$848",
       "$920",
       "$728"
      ]
      // find_principal: [ ...options... ] // If advanced step is added
    }
  ],
  practiceProblems: [
    // --- Problem 1 Details ---
    {
      expression: "Calculate the simple interest and final amount. Principal = $1000, Rate = 5% per annum, Time = 3 years.",
      solution: {
        identify_variables: "P = $1000, R = 5%, T = 3 years",
        calculate_interest: "$150",
        calculate_amount: "$1150"
      },
      explanation: {
        identify_variables: "The variables are given directly: Principal (P) is $1000, Rate (R) is 5%, and Time (T) is 3 years.",
        calculate_interest: "Using the formula $I = \\frac{P \\times R \\times T}{100}$: $I = \\frac{1000 \\times 5 \\times 3}{100} = \\frac{15000}{100} = $150.",
        calculate_amount: "The final amount is the principal plus the interest: $A = P + I = $1000 + $150 = $1150."
      },
      hint: "Identify P, R, and T. Use I = (P*R*T)/100. Then, A = P + I."
    },
    // --- Problem 2 Details (Time Conversion) ---
    {
      expression: "Find the simple interest earned and the final amount. Principal = $800, Rate = 6% per annum, Time = 18 months.",
      solution: {
        identify_variables: "P = $800, R = 6%, T = 1.5 years", // Note: T converted in solution description
        calculate_interest: "$72",
        calculate_amount: "$872"
      },
      explanation: {
        identify_variables: "Principal (P) is $800, Rate (R) is 6%. Time is given as 18 months. Convert to years: $T = \\frac{18}{12} = 1.5$ years.",
        calculate_interest: "Using the formula $I = \\frac{P \\times R \\times T}{100}$: $I = \\frac{800 \\times 6 \\times 1.5}{100} = \\frac{7200}{100} = $72.",
        calculate_amount: "The final amount is the principal plus the interest: $A = P + I = $800 + $72 = $872."
      },
      hint: "Convert months to years. Use I = (P*R*T)/100. Then, A = P + I."
    }
  ]
};

// --- Component using the data ---
const SimpleInterest: React.FC = () => {
  return (
    <MultiStepInteractiveComponent
      toolData={simpleInterestData}
    />
  );
};

export default SimpleInterest;