// AddingSubtractingLikeTermsTool.tsx
import MultiStepInteractiveComponent, { InteractiveToolData } from '../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Adding and Subtracting Like Terms
const addingSubtractingLikeTermsData: InteractiveToolData = {
  title: "Adding and Subtracting Like Terms",
  description: "Simplify algebraic expressions by combining terms that have the same variable part.",
  theme: {
    primaryColor: 'rose', // Specify the primary color theme
    backgroundColorFrom: 'rose-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'pink-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "identifyLikeTerms",
      title: "Step 1: Identify Like Terms",
      description: "Group the terms in the expression that have the same variable part (including the same exponents).",
      type: "mcq"
    },
    {
      id: "groupLikeTerms",
      title: "Step 2: Group Like Terms",
      description: "Rewrite the expression by placing like terms next to each other.",
      type: "mcq"
    },
    {
      id: "addSubtractCoefficientsX",
      title: "Step 3a: Add/Subtract Coefficients (Group 1)",
      description: "Add or subtract the numerical coefficients of the first group of like terms.",
      type: "mcq"
    },
    {
      id: "addSubtractCoefficientsY",
      title: "Step 3b: Add/Subtract Coefficients (Group 2)",
      description: "Add or subtract the numerical coefficients of the second group of like terms.",
      type: "mcq"
    },
    {
      id: "combineResults",
      title: "Step 4: Combine the Results",
      description: "Write the simplified terms together to form the final expression.",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: 3x + 5x ---
    {
      identifyLikeTerms: [["3x \\text{ and } 5x"], ["3 \\text{ and } 5"], ["x \\text{ and } x"], ["3x, 5x"]],
      groupLikeTerms: ["3x + 5x", "3 + 5 + x + x", "3x, 5x", "(3x) + (5x)"],
      addSubtractCoefficientsX: ["8", "8x", "15", "2"],
      addSubtractCoefficientsY: ["N/A (Only one group of like terms)", "0", "x", "8x"],
      combineResults: ["8x", "8", "3x + 5x", "15x"]
    },
    // --- Problem 2: 7x^2 - 2x^2 ---
    {
      identifyLikeTerms: [["7x^2 \\text{ and } -2x^2"], ["7 \\text{ and } -2"], ["x^2 \\text{ and } x^2"], ["7x^2, -2x^2"]],
      groupLikeTerms: ["7x^2 - 2x^2", "7 - 2 + x^2 - x^2", "7x^2, -2x^2", "(7x^2) + (-2x^2)"],
      addSubtractCoefficientsX: ["5", "5x^2", "9", "-5"],
      addSubtractCoefficientsY: ["N/A (Only one group of like terms)", "0", "x^2", "5x^2"],
      combineResults: ["5x^2", "5", "7x^2 - 2x^2", "9x^2"]
    },
    // --- Problem 3: 4x + 3y - 2x + y ---
    {
      identifyLikeTerms: [["4x \\text{ and } -2x", "3y \\text{ and } y"], ["4, 3, -2, 1"], ["x terms \\text{ and } y terms"], ["4x, -2x, 3y, y"]],
      groupLikeTerms: ["(4x - 2x) + (3y + y)", "4x + 3y - 2x + y", "(4x + 3y) + (-2x + y)", "4x - 2x + 3y + y"],
      addSubtractCoefficientsX: ["2", "2x", "6", "-2"],
      addSubtractCoefficientsY: ["4", "4y", "3", "2"],
      combineResults: ["2x + 4y", "4y + 2x", "6x + 5y", "2x + 3y"]
    },
     // --- Problem 4: 6a + 2b - 3a + 4b (Practice Example) ---
     {
        identifyLikeTerms: [["6a \\text{ and } -3a", "2b \\text{ and } 4b"], ["6, 2, -3, 4"], ["a terms \\text{ and } b terms"], ["6a, -3a, 2b, 4b"]],
        groupLikeTerms: ["(6a - 3a) + (2b + 4b)", "6a + 2b - 3a + 4b", "(6a + 2b) + (-3a + 4b)", "6a - 3a + 2b + 4b"],
        addSubtractCoefficientsX: ["3", "3a", "9", "-3"],
        addSubtractCoefficientsY: ["6", "6b", "2", "4"],
        combineResults: ["3a + 6b", "6b + 3a", "9a + 6b", "3a + 2b"]
      }
  ],
  practiceProblems: [
    // --- Problem 1: 3x + 5x ---
    {
      expression: "3x + 5x",
      solution: {
        identifyLikeTerms: "3x \\text{ and } 5x", // Like terms have the same variable part (x)
        groupLikeTerms: "3x + 5x", // Already grouped
        addSubtractCoefficientsX: "8", // Coefficients: 3 + 5 = 8
        addSubtractCoefficientsY: "N/A (Only one group of like terms)", // No other group
        combineResults: "8x" // Attach the variable x to the result
      },
      explanation: {
        identifyLikeTerms: "Like terms are terms that have the exact same variable part, including the same exponents. In $3x + 5x$, both terms have the variable $x$ raised to the power of 1. Therefore, $3x$ and $5x$ are like terms.",
        groupLikeTerms: "The terms are already presented grouped together: $3x + 5x$.",
        addSubtractCoefficientsX: "To combine the like terms $3x$ and $5x$, add their coefficients (the numbers in front of the variable). The coefficients are $3$ and $5$. Adding them gives $3 + 5 = 8$.",
        addSubtractCoefficientsY: "There is only one group of like terms in this expression ($x$ terms). There are no other variables like $y$ or $x^2$ to combine.",
        combineResults: "Take the result of adding the coefficients ($8$) and attach the common variable part ($x$). The simplified expression is $8x$."
      },
      hint: "What part of the terms $3x$ and $5x$ is the same? Those are like terms. Add the numbers in front of the $x$."
    },
    // --- Problem 2: 7x^2 - 2x^2 ---
    {
      expression: "7x^2 - 2x^2",
      solution: {
        identifyLikeTerms: "7x^2 \\text{ and } -2x^2", // Like terms have the same variable part (x^2)
        groupLikeTerms: "7x^2 - 2x^2", // Already grouped
        addSubtractCoefficientsX: "5", // Coefficients: 7 + (-2) = 7 - 2 = 5
        addSubtractCoefficientsY: "N/A (Only one group of like terms)", // No other group
        combineResults: "5x^2" // Attach the variable x^2 to the result
      },
      explanation: {
        identifyLikeTerms: "Like terms must have the same variable raised to the same power. Here, both terms have the variable $x$ raised to the power of 2 ($x^2$). Therefore, $7x^2$ and $-2x^2$ are like terms.",
        groupLikeTerms: "The terms are already grouped together: $7x^2 - 2x^2$.",
        addSubtractCoefficientsX: "Combine the like terms by performing the operation on their coefficients. The coefficients are $7$ and $-2$. Subtract the second coefficient from the first: $7 - 2 = 5$.",
        addSubtractCoefficientsY: "There is only one group of like terms ($x^2$ terms). No other variables are present.",
        combineResults: "Take the result of the coefficient operation ($5$) and attach the common variable part ($x^2$). The simplified expression is $5x^2$."
      },
      hint: "Check the variables and their exponents. Are $7x^2$ and $2x^2$ like terms? What do you do with the coefficients 7 and -2?"
    },
    // --- Problem 3: 4x + 3y - 2x + y ---
    {
      expression: "4x + 3y - 2x + y",
      solution: {
        identifyLikeTerms: "4x \\text{ and } -2x; 3y \\text{ and } y", // Group x terms and y terms
        groupLikeTerms: "(4x - 2x) + (3y + y)", // Rewrite to group like terms
        addSubtractCoefficientsX: "2", // Coefficients of x: 4 + (-2) = 4 - 2 = 2
        addSubtractCoefficientsY: "4", // Coefficients of y: 3 + 1 = 4 (y is 1y)
        combineResults: "2x + 4y" // Combine simplified terms
      },
      explanation: {
        identifyLikeTerms: "Look for terms with the same variable part. The terms with $x$ are $4x$ and $-2x$. The terms with $y$ are $3y$ and $y$ (which is the same as $1y$). So, the like terms are grouped as $x$ terms: $4x, -2x$ and $y$ terms: $3y, y$.",
        groupLikeTerms: "To make combining easier, rewrite the expression by grouping the like terms together using parentheses: $(4x - 2x) + (3y + y)$.",
        addSubtractCoefficientsX: "Combine the coefficients of the $x$ terms: $4$ (from $4x$) and $-2$ (from $-2x$). Perform the operation: $4 + (-2) = 4 - 2 = 2$.",
        addSubtractCoefficientsY: "Combine the coefficients of the $y$ terms: $3$ (from $3y$) and $1$ (from $y$, since $y = 1y$). Add them: $3 + 1 = 4$.",
        combineResults: "Take the results from combining the coefficients and attach the respective variable parts. The simplified $x$ term is $2x$, and the simplified $y$ term is $4y$. Write them together: $2x + 4y$."
      },
      hint: "First, group the terms with the same variable. What are the 'x' terms? What are the 'y' terms? (Remember, $y$ is the same as $1y$). Add or subtract the numbers in front of each group separately."
    },
     // --- Problem 4: 6a + 2b - 3a + 4b ---
     {
        expression: "6a + 2b - 3a + 4b",
        solution: {
            identifyLikeTerms: "6a \\text{ and } -3a; 2b \\text{ and } 4b", // Group a terms and b terms
            groupLikeTerms: "(6a - 3a) + (2b + 4b)", // Rewrite to group like terms
            addSubtractCoefficientsX: "3", // Coefficients of a: 6 + (-3) = 6 - 3 = 3
            addSubtractCoefficientsY: "6", // Coefficients of b: 2 + 4 = 6
            combineResults: "3a + 6b" // Combine simplified terms
        },
        explanation: {
            identifyLikeTerms: "Identify terms with the same variable. The terms with $a$ are $6a$ and $-3a$. The terms with $b$ are $2b$ and $4b$. The like terms are $a$ terms: $6a, -3a$ and $b$ terms: $2b, 4b$.",
            groupLikeTerms: "Rewrite the expression to group the like terms together: $(6a - 3a) + (2b + 4b)$.",
            addSubtractCoefficientsX: "Combine the coefficients of the $a$ terms: $6$ (from $6a$) and $-3$ (from $-3a$). Calculate: $6 + (-3) = 6 - 3 = 3$.",
            addSubtractCoefficientsY: "Combine the coefficients of the $b$ terms: $2$ (from $2b$) and $4$ (from $4b$). Add them: $2 + 4 = 6$.",
            combineResults: "Attach the results to their variables. The simplified $a$ term is $3a$, and the simplified $b$ term is $6b$. The final simplified expression is $3a + 6b$."
        },
        hint: "Group the 'a' terms ($6a$ and $-3a$) and the 'b' terms ($2b$ and $4b$). Add or subtract the coefficients for each group. What is $6 - 3$? What is $2 + 4$?"
    }
  ]
};

export default function AddingSubtractingLikeTermsTool() {
  return (
    <MultiStepInteractiveComponent toolData={addingSubtractingLikeTermsData} />
  );
}
