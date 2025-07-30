import React from 'react';
import MultiStepInteractiveComponent, { InteractiveToolData } from "../../Templates/MultiStepInteractiveComponent"; // Adjust path as needed

// --- Data for Compound Interest Calculations ---
const compoundInterestData: InteractiveToolData = {
  title: "Compound Interest Calculations",
  description: "Learn to calculate final amounts and compound interest using the formula A = P(1 + r/100)^t.",
  theme: {
    primaryColor: 'indigo', // Indigo theme for advanced financial concepts
    backgroundColorFrom: 'from-indigo-50',
    backgroundColorTo: 'to-purple-100',
  },
  expressionSize: 'text-xl',
  inlineExpression: true, // Makes the problem expression inline
  mcqOptionRenderType: 'text', // Use renderTextWithMath for MCQ options
  steps: [
    {
      id: "identify_variables",
      title: "Identify the Variables",
      description: "What are the Principal (P), Rate (r), Time (t), and Compounding Frequency (n) from the problem?",
      type: "mcq"
    },
    {
      id: "calculate_amount",
      title: "Calculate the Final Amount (A)",
      description: "Use the appropriate formula: $A = P(1 + \\frac{r}{100n})^{nt}$",
      type: "mcq"
    },
    {
      id: "calculate_compound_interest",
      title: "Calculate the Compound Interest (CI)",
      description: "Use the formula: $CI = A - P$",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: Annual Compounding ---
    {
      identify_variables: [
        "P = $2000, r = 5%, t = 4 years, n = 1 (annual)", // Correct
        "P = $2000, r = 4%, t = 5 years, n = 1",
        "P = $2500, r = 5%, t = 4 years, n = 1",
        "P = $2000, r = 5%, t = 4 years, n = 4 (quarterly)"
      ],
      calculate_amount: [
        "$2431.01", // Correct (A = 2000*(1 + 0.05/1)^4 = 2000*(1.05)^4)
        "$2400.00",
        "$2500.00",
        "$2450.00"
      ],
      calculate_compound_interest: [
       "$431.01", // Correct (CI = A - P = 2431.01 - 2000)
       "$400.00",
       "$500.00",
       "$450.00"
      ]
    },
    // --- Problem 2: Quarterly Compounding ---
    {
      identify_variables: [
        "P = $1500, r = 8%, t = 3 years, n = 4 (quarterly)", // Correct
        "P = $1500, r = 3%, t = 8 years, n = 4",
        "P = $1800, r = 8%, t = 3 years, n = 4",
        "P = $1500, r = 8%, t = 3 years, n = 1 (annual)"
      ],
      calculate_amount: [
        "$1900.16", // Correct (A = 1500*(1 + 0.08/4)^(4*3) = 1500*(1.02)^12)
        "$1860.00",
        "$1950.00",
        "$1850.00"
      ],
      calculate_compound_interest: [
       "$400.16", // Correct (CI = A - P = 1900.16 - 1500)
       "$360.00",
       "$450.00",
       "$350.00"
      ]
    }
  ],
  practiceProblems: [
    // --- Problem 1 Details ---
    {
      expression: "Calculate the compound interest and final amount. Principal = $2000, Rate = 5% per annum, Time = 4 years, compounded annually.",
      solution: {
        identify_variables: "P = $2000, r = 5%, t = 4 years, n = 1 (annual)",
        calculate_amount: "$2431.01", // Rounded to 2 decimal places for display
        calculate_compound_interest: "$431.01"
      },
      explanation: {
        identify_variables: "Principal (P) is $2000. Rate (r) is 5%. Time (t) is 4 years. It's compounded annually, so n = 1.",
        calculate_amount: "Using the formula $A = P(1 + \\frac{r}{100n})^{nt}$: $A = 2000(1 + \\frac{5}{100 \\times 1})^{1 \\times 4} = 2000(1.05)^4$. Calculate $(1.05)^4 \\approx 1.21550625$. So, $A = 2000 \\times 1.21550625 = $2431.01$.",
        calculate_compound_interest: "The compound interest is the final amount minus the principal: $CI = A - P = $2431.01 - $2000 = $431.01$."
      },
      hint: "Identify P, r, t, and n. Use A = P(1 + r/(100n))^(nt). Then, CI = A - P."
    },
    // --- Problem 2 Details (Quarterly Compounding) ---
    {
      expression: "Find the compound interest earned and the final amount. Principal = $1500, Rate = 8% per annum, Time = 3 years, compounded quarterly.",
      solution: {
        identify_variables: "P = $1500, r = 8%, t = 3 years, n = 4 (quarterly)",
        calculate_amount: "$1900.16", // Rounded to 2 decimal places for display
        calculate_compound_interest: "$400.16"
      },
      explanation: {
        identify_variables: "Principal (P) is $1500. Rate (r) is 8%. Time (t) is 3 years. It's compounded quarterly, so n = 4 (4 times per year).",
        calculate_amount: "Using the formula $A = P(1 + \\frac{r}{100n})^{nt}$: $A = 1500(1 + \\frac{8}{100 \\times 4})^{4 \\times 3} = 1500(1 + \\frac{8}{400})^{12} = 1500(1.02)^{12}$. Calculate $(1.02)^{12} \\approx 1.26824179$. So, $A = 1500 \\times 1.26824179 = $1900.16$.",
        calculate_compound_interest: "The compound interest is the final amount minus the principal: $CI = A - P = $1900.16 - $1500 = $400.16$."
      },
      hint: "Identify P, r, t, and n (4 for quarterly). Use A = P(1 + r/(100n))^(nt). Then, CI = A - P."
    }
  ]
};

// --- Component using the data ---
const CompoundInterest: React.FC = () => {
  return (
    <MultiStepInteractiveComponent
      toolData={compoundInterestData}
    />
  );
};

export default CompoundInterest;