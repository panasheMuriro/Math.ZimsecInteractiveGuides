// IntroductionToLogarithmsTool.tsx
import MultiStepInteractiveComponent, { InteractiveToolData } from '../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Introduction to Logarithms
const introductionToLogarithmsData: InteractiveToolData = {
  title: "Introduction to Logarithms",
  description: "Understand logarithms as the inverse of exponents and learn to evaluate and simplify basic logarithmic expressions.",
  theme: {
    primaryColor: 'indigo', // Specify the primary color theme
    backgroundColorFrom: 'indigo-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'purple-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "rewriteExponential",
      title: "Step 1: Rewrite in Exponential Form",
      description: "Convert the logarithmic equation $\\log_b(a) = c$ into its exponential equivalent $b^c = a$. What is the exponential form?",
      type: "mcq"
    },
    {
      id: "identifyExponent",
      title: "Step 2: Identify the Exponent",
      description: "In the exponential equation $b^c = a$, what value is the exponent $c$?",
      type: "mcq"
    },
    {
      id: "applyProperty",
      title: "Step 3: Apply Logarithm Property (if needed)",
      description: "If the problem involves addition, subtraction, or multiplication by a constant, which logarithm property should be applied first?",
      type: "mcq"
    },
    {
      id: "simplifyExpression",
      title: "Step 4: Simplify the Expression",
      description: "Perform the necessary calculations or simplifications. What is the simplified result?",
      type: "mcq"
    },
    {
      id: "checkAnswer",
      title: "Step 5: Check Your Answer",
      description: "Convert your answer back to exponential form or use the definition to verify it's correct.",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: log_3(9) ---
    {
      rewriteExponential: ["3^x = 9", "3^9 = x", "x^3 = 9", "9^3 = x"],
      identifyExponent: ["x", "3", "9", "log_3(9)"],
      applyProperty: ["Not Applicable", "Product Rule", "Quotient Rule", "Power Rule"],
      simplifyExpression: ["2", "3", "9", "1"],
      checkAnswer: ["3^2 = 9", "2^3 = 8", "9^1 = 9", "3^1 = 3"]
    },
    // --- Problem 2: log_2(4) + log_2(8) ---
    {
      rewriteExponential: ["Not needed for this step", "2^x = 4 + 8", "2^x = 12", "2^x = 32"],
      identifyExponent: ["Not needed for this step", "x", "2", "12"],
      applyProperty: ["Product Rule", "Quotient Rule", "Power Rule", "Sum of Logs"],
      simplifyExpression: ["5", "3", "12", "32"],
      checkAnswer: ["log_2(4*8) = log_2(32) = 5", "2 + 3 = 5", "4 + 8 = 12", "2^5 = 32"]
    },
    // --- Problem 3: 2 * log_5(3) ---
    {
      rewriteExponential: ["Not needed for this step", "5^x = 3^2", "5^x = 9", "5^x = 6"],
      identifyExponent: ["Not needed for this step", "x", "2", "3"],
      applyProperty: ["Power Rule", "Product Rule", "Quotient Rule", "Multiplication"],
      simplifyExpression: ["\\log_5(9)", "2\\log_5(3)", "9", "6"],
      checkAnswer: ["2\\log_5(3) = \\log_5(3^2) = \\log_5(9)", "5^9 = ...", "3^2 = 9", "2 * 3 = 6"]
    },
     // --- Problem 4: log_4(16) (Practice Example) ---
     {
        rewriteExponential: ["4^x = 16", "4^16 = x", "x^4 = 16", "16^4 = x"],
        identifyExponent: ["x", "4", "16", "log_4(16)"],
        applyProperty: ["Not Applicable", "Product Rule", "Quotient Rule", "Power Rule"],
        simplifyExpression: ["2", "4", "16", "1"],
        checkAnswer: ["4^2 = 16", "2^4 = 16", "16^1 = 16", "4^1 = 4"]
      }
  ],
  practiceProblems: [
    // --- Problem 1: log_3(9) ---
    {
      expression: "\\log_3(9)",
      solution: {
        rewriteExponential: "3^x = 9",
        identifyExponent: "x",
        applyProperty: "Not Applicable", // Direct evaluation
        simplifyExpression: "2",
        checkAnswer: "3^2 = 9"
      },
      explanation: {
        rewriteExponential: "The logarithmic equation $\\log_3(9) = x$ asks, 'To what power must 3 be raised to get 9?'. This is equivalent to the exponential equation $3^x = 9$.",
        identifyExponent: "In the exponential form $3^x = 9$, the unknown value we are solving for is the exponent $x$.",
        applyProperty: "This is a basic logarithm evaluation. We don't need to apply any specific logarithm properties like the Product, Quotient, or Power Rules yet. We can solve it directly by recognizing powers of the base.",
        simplifyExpression: "We need to find the value of $x$ such that $3^x = 9$. We know that $3^2 = 3 \\times 3 = 9$. Therefore, $x = 2$. So, $\\log_3(9) = 2$.",
        checkAnswer: "To verify, substitute the answer back into the original exponential form: $3^2$. Calculating $3^2 = 9$, which matches the right side of the equation $3^x = 9$. The answer is correct."
      },
      hint: "Ask yourself: 3 to the power of what number equals 9? Rewrite the logarithm as an exponential equation and solve for the exponent."
    },
    // --- Problem 2: log_2(4) + log_2(8) ---
    {
      expression: "\\log_2(4) + \\log_2(8)",
      solution: {
        rewriteExponential: "Not needed for this step", // Property applied first
        identifyExponent: "Not needed for this step",
        applyProperty: "Product Rule", // log_b(m) + log_b(n) = log_b(m*n)
        simplifyExpression: "5",
        checkAnswer: "\\log_2(4 \\times 8) = \\log_2(32) = 5"
      },
      explanation: {
        rewriteExponential: "While we could evaluate $\\log_2(4)$ and $\\log_2(8)$ separately first, it's often more efficient to use a logarithm property when adding logs with the same base. We will apply the property first.",
        identifyExponent: "Not applicable at this stage as we are combining the logs first.",
        applyProperty: "We are adding two logarithms with the same base (2). The Product Rule states that $\\log_b(m) + \\log_b(n) = \\log_b(m \\times n)$. Applying this rule: $\\log_2(4) + \\log_2(8) = \\log_2(4 \\times 8)$.",
        simplifyExpression: "First, calculate the product inside the logarithm: $4 \\times 8 = 32$. Now we have $\\log_2(32)$. We need to find the exponent $x$ such that $2^x = 32$. We know $2^5 = 32$. Therefore, $\\log_2(32) = 5$.",
        checkAnswer: "We can check by evaluating the original logs separately and adding: $\\log_2(4) = 2$ (because $2^2 = 4$) and $\\log_2(8) = 3$ (because $2^3 = 8$). Adding them gives $2 + 3 = 5$. This matches our simplified result of $5$, confirming our use of the Product Rule was correct."
      },
      hint: "You are adding two logs with the same base. Is there a logarithm property that deals with the sum of logs? Apply that property first, then evaluate the resulting single logarithm."
    },
    // --- Problem 3: 2 * log_5(3) ---
    {
      expression: "2 \\times \\log_5(3)",
      solution: {
        rewriteExponential: "Not needed for this step", // Property applied first
        identifyExponent: "Not needed for this step",
        applyProperty: "Power Rule", // n * log_b(m) = log_b(m^n)
        simplifyExpression: "\\log_5(9)",
        checkAnswer: "2\\log_5(3) = \\log_5(3^2) = \\log_5(9)"
      },
      explanation: {
        rewriteExponential: "We are multiplying a logarithm by a constant. A specific property addresses this situation. We will apply the property first.",
        identifyExponent: "Not applicable at this stage as we are transforming the expression first.",
        applyProperty: "We have a constant (2) multiplied by a logarithm ($\\log_5(3)$). The Power Rule states that $n \\times \\log_b(m) = \\log_b(m^n)$. Applying this rule: $2 \\times \\log_5(3) = \\log_5(3^2)$.",
        simplifyExpression: "Calculate the power inside the logarithm: $3^2 = 9$. The simplified expression is $\\log_5(9)$. This cannot be simplified further to a basic integer without a calculator, as 9 is not an obvious power of 5.",
        checkAnswer: "Verify by using the Power Rule in reverse: $\\log_5(9) = \\log_5(3^2) = 2\\log_5(3)$. This confirms that our transformation using the Power Rule was correct. The final answer is $\\log_5(9)$."
      },
      hint: "You have a number (2) multiplying a logarithm. Which logarithm property allows you to move a coefficient multiplying a log to become an exponent inside the log? Apply that rule."
    },
     // --- Problem 4: log_4(16) ---
     {
        expression: "\\log_4(16)",
        solution: {
            rewriteExponential: "4^x = 16",
            identifyExponent: "x",
            applyProperty: "Not Applicable", // Direct evaluation
            simplifyExpression: "2",
            checkAnswer: "4^2 = 16"
        },
        explanation: {
            rewriteExponential: "The logarithmic equation $\\log_4(16) = x$ asks, 'To what power must 4 be raised to get 16?'. This is equivalent to the exponential equation $4^x = 16$.",
            identifyExponent: "In the exponential form $4^x = 16$, the unknown value we are solving for is the exponent $x$.",
            applyProperty: "This is a basic logarithm evaluation. We don't need to apply any specific logarithm properties like the Product, Quotient, or Power Rules. We can solve it directly by recognizing powers of the base.",
            simplifyExpression: "We need to find the value of $x$ such that $4^x = 16$. We know that $4^2 = 4 \\times 4 = 16$. Therefore, $x = 2$. So, $\\log_4(16) = 2$.",
            checkAnswer: "To verify, substitute the answer back into the original exponential form: $4^2$. Calculating $4^2 = 16$, which matches the right side of the equation $4^x = 16$. The answer is correct."
        },
        hint: "Ask yourself: 4 to the power of what number equals 16? Rewrite the logarithm as an exponential equation and solve for the exponent."
    }
  ]
};

export default function IntroductionToLogarithmsTool() {
  return (
    <MultiStepInteractiveComponent toolData={introductionToLogarithmsData} />
  );
}
