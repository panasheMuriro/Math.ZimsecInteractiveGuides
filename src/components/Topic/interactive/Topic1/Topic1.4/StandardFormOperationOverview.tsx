import MultiStepInteractiveComponent, { InteractiveToolData } from "../../Topic7/Templates/MultiStepInteractiveComponent";

// Define data for Operations in Standard Form Overview
const standardFormOperationsOverviewData: InteractiveToolData = {
  title: "Operations in Standard Form: Overview",
  description: "Test your understanding of the key principles and index laws used when performing calculations with numbers in standard form.",
  theme: {
    primaryColor: "indigo", // Using a different color
  },
  steps: [
    {
      id: "identifyOperation",
      title: "Identify the Operation",
      description: "What mathematical operation is being described?",
      type: 'mcq'
    },
    {
      id: "applyLaw",
      title: "Apply the Correct Law",
      description: "Which rule should be used to combine the powers of 10?",
      type: 'mcq'
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: Multiplication ---
    {
      // Wrap text options in \text{} for KaTeX rendering
      identifyOperation: ["\\text{Multiplication}", "\\text{Addition}", "\\text{Division}", "\\text{Subtraction}"],
      applyLaw: ["10^a \\times 10^b = 10^{a+b}", "10^a \\div 10^b = 10^{a-b}", "(10^a)^b = 10^{ab}", "10^a + 10^b = 10^{a+b}"]
    },
    // --- Problem 2: Division ---
    {
      // Wrap text options in \text{} for KaTeX rendering
      identifyOperation: ["\\text{Division}", "\\text{Subtraction}", "\\text{Multiplication}", "\\text{Addition}"],
      applyLaw: ["10^a \\div 10^b = 10^{a-b}", "10^a \\times 10^b = 10^{a+b}", "(10^a)^b = 10^{ab}", "10^a - 10^b = 10^{a-b}"]
    },
    // --- Problem 3: Power ---
    {
      // Wrap text options in \text{} for KaTeX rendering
      // Also corrected the text for consistency
      identifyOperation: ["\\text{Raising to a Power}", "\\text{Multiplication}", "\\text{Division}", "\\text{Addition}"],
      applyLaw: ["(10^a)^b = 10^{ab}", "10^a \\times 10^b = 10^{a+b}", "10^a \\div 10^b = 10^{a-b}", "10^{a^b} = 10^{ab}"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: Multiplication ---
    {
      // Kept your line break formatting for the expression
      expression: "(a \\times 10^m) \\\\ \\times (b \\times 10^n)",
      solution: {
        // Solutions should also use \text{} if they are meant to be displayed as text by KaTeX
        // (Although in this specific case, matching the MCQ options exactly is key)
        identifyOperation: "\\text{Multiplication}",
        applyLaw: "10^a \\times 10^b = 10^{a+b}"
      },
      explanation: {
        identifyOperation: "\\text{The operation between the two terms is multiplication (}\\times\\text{).}",
        applyLaw: "\\text{When multiplying terms with the same base (10), you add the exponents: } 10^m \\times 10^n = 10^{m+n}\\text{.}"
      },
      hint: "\\text{Look at the symbol between the two parts of the expression. What rule do you use for } 10^m \\times 10^n \\text{?}"
    },
    // --- Problem 2: Division ---
    {
      // Kept your line break formatting for the expression
      expression: "(a \\times 10^m) \\\\ \\div (b \\times 10^n)",
      solution: {
        identifyOperation: "\\text{Division}",
        applyLaw: "10^a \\div 10^b = 10^{a-b}"
      },
      explanation: {
        identifyOperation: "\\text{The operation between the two terms is division (} \\div \\text{).}",
        applyLaw: "\\text{When dividing terms with the same base (10), you subtract the exponents: } 10^m \\div 10^n = 10^{m-n}\\text{.}"
      },
      hint: "\\text{Look at the symbol between the two parts of the expression. What rule do you use for } 10^m \\div 10^n \\text{?}"
    },
    // --- Problem 3: Power ---
    {
      expression: "(a \\times 10^m)^n",
      solution: {
        identifyOperation: "\\text{Raising to a Power}",
        applyLaw: "(10^a)^b = 10^{ab}"
      },
      explanation: {
        identifyOperation: "\\text{The entire term } (a \\times 10^m) \\text{ is being raised to the power of } n\\text{.}",
        applyLaw: "\\text{When raising a power to another power, you multiply the exponents: } (10^m)^n = 10^{m \\times n}\\text{.}"
      },
      hint: "\\text{The whole expression in the brackets is being raised to a power. What rule do you use for } (10^m)^n \\text{?}"
    }
  ]
};

const StandardFormOperationOverview = ()=>{
    return  <MultiStepInteractiveComponent toolData={standardFormOperationsOverviewData} />
}

export default StandardFormOperationOverview;