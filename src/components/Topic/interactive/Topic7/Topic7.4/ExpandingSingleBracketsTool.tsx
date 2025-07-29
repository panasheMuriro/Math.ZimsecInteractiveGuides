// ExpandingSingleBracketsTool.tsx
import MultiStepInteractiveComponent, { InteractiveToolData } from '../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Expanding Single Brackets
const expandingSingleBracketsData: InteractiveToolData = {
  title: "Expanding Single Brackets",
  description: "Multiply the term outside the bracket by each term inside using the distributive property.",
  theme: {
    primaryColor: 'blue', // Specify the primary color theme
    backgroundColorFrom: 'blue-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'cyan-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "identifyOutsideTerm",
      title: "Step 1: Identify the Outside Term",
      description: "What is the term being multiplied by the expression inside the brackets?",
      type: "mcq"
    },
    {
      id: "identifyInsideTerms",
      title: "Step 2: Identify the Inside Terms",
      description: "List the terms inside the brackets that need to be multiplied.",
      type: "mcq"
    },
    {
      id: "performMultiplications",
      title: "Step 3: Perform the Multiplications",
      description: "Multiply the outside term by each inside term. What are the resulting products?",
      type: "mcq"
    },
    {
      id: "writeExpandedForm",
      title: "Step 4: Write the Expanded Expression",
      description: "Combine the products from the previous step using the correct signs ($+$ or $-$).",
      type: "mcq"
    },
    {
      id: "simplifyExpression",
      title: "Step 5: Simplify (if possible)",
      description: "Are there any like terms that can be combined in the expanded expression?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: 3(2x + 5) ---
    {
      identifyOutsideTerm: ["3", "2x", "5", "2x + 5"],
      identifyInsideTerms: [["2x", "5"], ["3", "2x"], ["3", "5"], ["2", "5"]],
      performMultiplications: [["6x", "15"], ["3x", "5"], ["6", "15"], ["5x", "8"]],
      writeExpandedForm: ["6x + 15", "6x - 15", "15 + 6x", "6x * 15"],
      simplifyExpression: ["No simplification needed", "11x", "21", "6x + 15"]
    },
    // --- Problem 2: -2x(3x - 4) ---
    {
      identifyOutsideTerm: ["-2x", "3x", "-4", "3x - 4"],
      identifyInsideTerms: [["3x", "-4"], ["-2x", "3x"], ["-2x", "-4"], ["3", "-4"]],
      performMultiplications: [["-6x^2", "8x"], ["-6x", "-8"], ["-6x^2", "-8x"], ["-6x", "8x"]],
      writeExpandedForm: ["-6x^2 + 8x", "-6x^2 - 8x", "8x - 6x^2", "-6x^2 * 8x"],
      simplifyExpression: ["No simplification needed", "-6x^2 + 8x", "-14x^2", "-6x^2 + 8x"]
    },
    // --- Problem 3: 4(3a - 2) (Practice Example) ---
    {
      identifyOutsideTerm: ["4", "3a", "-2", "3a - 2"],
      identifyInsideTerms: [["3a", "-2"], ["4", "3a"], ["4", "-2"], ["3", "-2"]],
      performMultiplications: [["12a", "-8"], ["4a", "-2"], ["12", "-8"], ["7a", "2"]],
      writeExpandedForm: ["12a - 8", "12a + (-8)", "-8 + 12a", "12a * (-8)"],
      simplifyExpression: ["No simplification needed", "12a - 8", "4a", "12a - 8"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: 3(2x + 5) ---
    {
      expression: "3(2x + 5)",
      solution: {
        identifyOutsideTerm: "3",
        identifyInsideTerms: ["2x", "5"],
        performMultiplications: ["6x", "15"],
        writeExpandedForm: "6x + 15",
        simplifyExpression: "No simplification needed"
      },
      explanation: {
        identifyOutsideTerm: "The term outside the bracket, which multiplies the entire expression inside, is $3$.",
        identifyInsideTerms: "The terms inside the bracket are $2x$ and $+5$.",
        performMultiplications: "Multiply the outside term $3$ by each inside term: $3 \\times 2x = 6x$ and $3 \\times 5 = 15$.",
        writeExpandedForm: "Combine the results of the multiplications, keeping the original signs between the terms: $6x + 15$.",
        simplifyExpression: "The terms $6x$ and $15$ are not like terms (one has a variable, the other doesn't), so they cannot be combined further. The expression is already fully simplified."
      },
      hint: "What number is multiplying the bracket? What are the two terms inside the bracket? Multiply the outside number by each inside term separately."
    },
    // --- Problem 2: -2x(3x - 4) ---
    {
      expression: "-2x(3x - 4)",
      solution: {
        identifyOutsideTerm: "-2x",
        identifyInsideTerms: ["3x", "-4"],
        performMultiplications: ["-6x^2", "8x"],
        writeExpandedForm: "-6x^2 + 8x",
        simplifyExpression: "No simplification needed"
      },
      explanation: {
        identifyOutsideTerm: "The term outside the bracket is $-2x$.",
        identifyInsideTerms: "The terms inside the bracket are $3x$ and $-4$.",
        performMultiplications: "Multiply the outside term $-2x$ by each inside term. $-2x \\times 3x = -6x^2$. $-2x \\times -4 = 8x$. Remember that a negative times a negative gives a positive.",
        writeExpandedForm: "Combine the results: $-6x^2 + 8x$. The original expression had $3x - 4$, which is $3x + (-4)$, so the multiplication gives $-6x^2 + 8x$.",
        simplifyExpression: "The terms $-6x^2$ and $8x$ are not like terms (they have different powers of $x$), so they cannot be combined. The expression is fully simplified."
      },
      hint: "The term outside includes a variable. Be careful with the signs when multiplying. What is $-2x$ times $3x$? What is $-2x$ times $-4$? Combine the results with the correct sign."
    },
    // --- Problem 3: 4(3a - 2) ---
    {
      expression: "4(3a - 2)",
      solution: {
        identifyOutsideTerm: "4",
        identifyInsideTerms: ["3a", "-2"],
        performMultiplications: ["12a", "-8"],
        writeExpandedForm: "12a - 8",
        simplifyExpression: "No simplification needed"
      },
      explanation: {
        identifyOutsideTerm: "The term outside the bracket is $4$.",
        identifyInsideTerms: "The terms inside the bracket are $3a$ and $-2$.",
        performMultiplications: "Multiply the outside term $4$ by each inside term: $4 \\times 3a = 12a$ and $4 \\times -2 = -8$.",
        writeExpandedForm: "Combine the results, keeping the original signs: $12a + (-8)$, which is written as $12a - 8$.",
        simplifyExpression: "The terms $12a$ and $-8$ are not like terms, so no further simplification is possible."
      },
      hint: "Multiply 4 by $3a$. Then multiply 4 by $-2$. Put the results together with the correct sign between them."
    }
  ]
};

export default function ExpandingSingleBracketsTool() {
  return (
    <MultiStepInteractiveComponent toolData={expandingSingleBracketsData} />
  );
}
