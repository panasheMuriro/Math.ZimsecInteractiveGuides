import MultiStepInteractiveComponent, { InteractiveToolData } from '../../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Substitution in Expressions
const substitutionInExpressionsData: InteractiveToolData = {
  title: "Substitution in Expressions",
  description: "Evaluate algebraic expressions by replacing variables with given numerical values and following the order of operations.",
  theme: {
    primaryColor: 'purple', // Specify the primary color theme
    backgroundColorFrom: 'indigo-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'purple-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "identifyVariables",
      title: "Step 1: Identify the Variables",
      description: "List the variables present in the expression and their corresponding values.",
      type: "mcq"
    },
    {
      id: "substituteValues",
      title: "Step 2: Substitute the Values",
      description: "Replace each variable in the expression with its given numerical value, using parentheses where necessary.",
      type: "mcq"
    },
    {
      id: "applyOrderOfOperations",
      title: "Step 3: Apply Order of Operations (PEMDAS/BODMAS)",
      description: "Identify the first operation to perform according to the order of operations (Parentheses/Brackets, Exponents/Orders, Multiplication/Division, Addition/Subtraction).",
      type: "mcq"
    },
    {
      id: "performCalculation",
      title: "Step 4: Perform the Calculation",
      description: "Carry out the arithmetic for the operation identified in the previous step.",
      type: "mcq"
    },
    {
      id: "simplifyExpression",
      title: "Step 5: Simplify the Expression",
      description: "Continue applying the order of operations and performing calculations until a single numerical result is obtained.",
      type: "mcq"
    },
    {
      id: "finalResult",
      title: "Step 6: State the Final Result",
      description: "What is the final numerical value of the expression after all substitutions and calculations?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: 2x + 3y, x=3, y=-2 ---
    {
      identifyVariables: ["x = 3, y = -2", "x = 2, y = 3", "x = -2, y = 3", "x, y"],
      substituteValues: ["2(3) + 3(-2)", "2x + 3y", "6 + -6", "2*3 + 3*-2"],
      applyOrderOfOperations: ["Multiplication (2*3 and 3*(-2))", "Addition (2 + 3)", "Subtraction (2 - 3)", "Parentheses ((3) and (-2))"],
      performCalculation: ["6 + (-6)", "6 - 6", "0", "2(3) + 3(-2)"],
      simplifyExpression: ["0", "6 - 6", "12", "-12"],
      finalResult: ["0", "6", "-6", "1"]
    },
    // --- Problem 2: 2x^2 + 3y, x=3, y=-2 ---
    {
      identifyVariables: ["x = 3, y = -2", "x = 2, y = 3", "x = -2, y = 3", "x, y"],
      substituteValues: ["2(3^2) + 3(-2)", "2x^2 + 3y", "2*9 + 3*(-2)", "2(3)^2 + 3(-2)"],
      applyOrderOfOperations: ["Exponent (3^2)", "Multiplication (2*(3^2))", "Addition", "Parentheses"],
      performCalculation: ["3^2 = 9", "2*9 = 18", "3*(-2) = -6", "18 + (-6)"],
      simplifyExpression: ["18 + (-6) = 12", "18 - 6 = 12", "12", "2*9 - 6"],
      finalResult: ["12", "18", "6", "-6"]
    },
    // --- Problem 3: x^2 - 2xy + y^2, x=2, y=1 ---
    {
      identifyVariables: ["x = 2, y = 1", "x = 1, y = 2", "x = -2, y = -1", "x, y"],
      substituteValues: ["(2)^2 - 2(2)(1) + (1)^2", "x^2 - 2xy + y^2", "4 - 4 + 1", "2^2 - 2*2*1 + 1^2"],
      applyOrderOfOperations: ["Exponent ((2)^2 and (1)^2)", "Multiplication (-2(2)(1))", "Addition/Subtraction", "Parentheses"],
      performCalculation: ["(2)^2 = 4, (1)^2 = 1", "-2(2)(1) = -4", "4 - 4 + 1", "4 - 4 = 0"],
      simplifyExpression: ["4 - 4 + 1 = 1", "0 + 1 = 1", "1", "4 - 4 + 1"],
      finalResult: ["1", "0", "-1", "4"]
    },
     // --- Problem 4: 3a^2 - 2b, a=2, b=3 (Practice Example) ---
     {
        identifyVariables: ["a = 2, b = 3", "a = 3, b = 2", "a = -2, b = -3", "a, b"],
        substituteValues: ["3(2^2) - 2(3)", "3a^2 - 2b", "3*4 - 2*3", "3(2)^2 - 2(3)"],
        applyOrderOfOperations: ["Exponent (2^2)", "Multiplication (3*(2^2) and 2*3)", "Subtraction", "Parentheses"],
        performCalculation: ["2^2 = 4", "3*4 = 12, 2*3 = 6", "12 - 6", "4"],
        simplifyExpression: ["12 - 6 = 6", "6", "12 - 6", "3*4 - 6"],
        finalResult: ["6", "12", "0", "18"]
      }
  ],
  practiceProblems: [
    // --- Problem 1: 2x + 3y, x=3, y=-2 ---
    {
      expression: "2x + 3y \\text{ where } x = 3 \\text{ and } y = -2",
      solution: {
        identifyVariables: "x = 3, y = -2",
        substituteValues: "2(3) + 3(-2)",
        applyOrderOfOperations: "Multiplication",
        performCalculation: "2(3) = 6 \\text{ and } 3(-2) = -6",
        simplifyExpression: "6 + (-6) = 0",
        finalResult: "0"
      },
      explanation: {
        identifyVariables: "The expression $2x + 3y$ contains two variables: $x$ and $y$. The problem states that $x = 3$ and $y = -2$.",
        substituteValues: "Replace every instance of $x$ with $3$ and every instance of $y$ with $-2$. This gives us $2(3) + 3(-2)$.",
        applyOrderOfOperations: "According to the order of operations (PEMDAS/BODMAS), multiplication must be performed before addition or subtraction. We need to calculate $2(3)$ and $3(-2)$ first.",
        performCalculation: "Calculate the multiplications: $2 \\times 3 = 6$ and $3 \\times (-2) = -6$. The expression now is $6 + (-6)$.",
        simplifyExpression: "Now perform the addition: $6 + (-6) = 6 - 6 = 0$.",
        finalResult: "After substituting the values and performing all calculations according to the order of operations, the final result of the expression $2x + 3y$ when $x = 3$ and $y = -2$ is $0$."
      },
      hint: "Replace $x$ with 3 and $y$ with -2. Remember to use parentheses around the -2. What is the first operation you should do (multiplication or addition)?"
    },
    // --- Problem 2: 2x^2 + 3y, x=3, y=-2 ---
    {
      expression: "2x^2 + 3y \\text{ where } x = 3 \\text{ and } y = -2",
      solution: {
        identifyVariables: "x = 3, y = -2",
        substituteValues: "2(3^2) + 3(-2)",
        applyOrderOfOperations: "Exponent (3^2)",
        performCalculation: "3^2 = 9",
        simplifyExpression: "2(9) + 3(-2) = 18 + (-6) = 18 - 6 = 12",
        finalResult: "12"
      },
      explanation: {
        identifyVariables: "The expression $2x^2 + 3y$ has variables $x$ and $y$. The given values are $x = 3$ and $y = -2$.",
        substituteValues: "Substitute $x = 3$ and $y = -2$ into the expression: $2(3^2) + 3(-2)$.",
        applyOrderOfOperations: "The order of operations dictates that exponents are calculated before multiplication and addition. The first step is to evaluate the exponent $3^2$.",
        performCalculation: "Calculate the exponent: $3^2 = 3 \\times 3 = 9$.",
        simplifyExpression: "Now the expression is $2(9) + 3(-2)$. Perform the multiplications: $2 \\times 9 = 18$ and $3 \\times (-2) = -6$. This gives $18 + (-6)$. Finally, perform the addition: $18 + (-6) = 18 - 6 = 12$.",
        finalResult: "The final value of the expression $2x^2 + 3y$ when $x = 3$ and $y = -2$ is $12$."
      },
      hint: "Plug in $x=3$ and $y=-2$. Be careful with the exponent $x^2$; it becomes $3^2$. What operation comes first: exponent, multiplication, or addition?"
    },
    // --- Problem 3: x^2 - 2xy + y^2, x=2, y=1 ---
    {
      expression: "x^2 - 2xy + y^2 \\text{ where } x = 2 \\text{ and } y = 1",
      solution: {
        identifyVariables: "x = 2, y = 1",
        substituteValues: "(2)^2 - 2(2)(1) + (1)^2",
        applyOrderOfOperations: "Exponents ((2)^2 and (1)^2)",
        performCalculation: "(2)^2 = 4 \\text{ and } (1)^2 = 1",
        simplifyExpression: "4 - 2(2)(1) + 1 = 4 - 4 + 1 = 0 + 1 = 1",
        finalResult: "1"
      },
      explanation: {
        identifyVariables: "The expression $x^2 - 2xy + y^2$ involves two variables, $x$ and $y$. The problem provides $x = 2$ and $y = 1$.",
        substituteValues: "Replace $x$ with $2$ and $y$ with $1$: $(2)^2 - 2(2)(1) + (1)^2$. Note that parentheses are used to clearly show the substituted values, especially important for exponents.",
        applyOrderOfOperations: "Following the order of operations, exponents are calculated first. We need to compute $(2)^2$ and $(1)^2$.",
        performCalculation: "Calculate the exponents: $(2)^2 = 2 \\times 2 = 4$ and $(1)^2 = 1 \\times 1 = 1$.",
        simplifyExpression: "The expression becomes $4 - 2(2)(1) + 1$. Next, perform the multiplication: $2 \\times 2 \\times 1 = 4$. Now we have $4 - 4 + 1$. Perform the subtraction and addition from left to right: $4 - 4 = 0$, then $0 + 1 = 1$.",
        finalResult: "The final value of the expression $x^2 - 2xy + y^2$ when $x = 2$ and $y = 1$ is $1$."
      },
      hint: "Substitute $x=2$ and $y=1$. Handle the exponents $x^2$ and $y^2$ first. Then, calculate the multiplication term $2xy$. Finally, perform the addition and subtraction from left to right."
    },
     // --- Problem 4: 3a^2 - 2b, a=2, b=3 ---
     {
        expression: "3a^2 - 2b \\text{ where } a = 2 \\text{ and } b = 3",
        solution: {
            identifyVariables: "a = 2, b = 3",
            substituteValues: "3(2^2) - 2(3)",
            applyOrderOfOperations: "Exponent (2^2)",
            performCalculation: "2^2 = 4",
            simplifyExpression: "3(4) - 2(3) = 12 - 6 = 6",
            finalResult: "6"
        },
        explanation: {
            identifyVariables: "The expression $3a^2 - 2b$ contains the variables $a$ and $b$. The given values are $a = 2$ and $b = 3$.",
            substituteValues: "Substitute $a = 2$ and $b = 3$ into the expression: $3(2^2) - 2(3)$.",
            applyOrderOfOperations: "According to the order of operations, the exponent $2^2$ must be calculated first.",
            performCalculation: "Evaluate the exponent: $2^2 = 2 \\times 2 = 4$.",
            simplifyExpression: "The expression is now $3(4) - 2(3)$. Perform the multiplications: $3 \\times 4 = 12$ and $2 \\times 3 = 6$. This gives $12 - 6$. Finally, perform the subtraction: $12 - 6 = 6$.",
            finalResult: "The final value of the expression $3a^2 - 2b$ when $a = 2$ and $b = 3$ is $6$."
        },
        hint: "Put $a=2$ and $b=3$ into the expression. Calculate the exponent $a^2$ first (which is $2^2$). Then do the multiplications. Finish with the subtraction."
    }
  ]
};

export default function SubstitutionInExpressionsTool() {
  return (
    <MultiStepInteractiveComponent toolData={substitutionInExpressionsData} />
  );
}
