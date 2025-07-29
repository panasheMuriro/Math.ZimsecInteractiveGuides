
// ExpandingTwoBracketsFOILTool.tsx
import MultiStepInteractiveComponent, { InteractiveToolData } from '../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Expanding Two Brackets (FOIL Method)
const expandingTwoBracketsFOILData: InteractiveToolData = {
  title: "Expanding Two Brackets (FOIL Method)",
  description: "Multiply two binomials using the First, Outer, Inner, Last method and combine like terms.",
  theme: {
    primaryColor: 'amber', // Specify the primary color theme
    backgroundColorFrom: 'amber-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'orange-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "firstTerms",
      title: "Step 1: Multiply First Terms",
      description: "Multiply the first term of the first bracket by the first term of the second bracket.",
      type: "mcq"
    },
    {
      id: "outerTerms",
      title: "Step 2: Multiply Outer Terms",
      description: "Multiply the outer terms of the two brackets.",
      type: "mcq"
    },
    {
      id: "innerTerms",
      title: "Step 3: Multiply Inner Terms",
      description: "Multiply the inner terms of the two brackets.",
      type: "mcq"
    },
    {
      id: "lastTerms",
      title: "Step 4: Multiply Last Terms",
      description: "Multiply the last term of the first bracket by the last term of the second bracket.",
      type: "mcq"
    },
    {
      id: "combinedProducts",
      title: "Step 5: Write All Products",
      description: "Write down the four products obtained from the F, O, I, L steps, keeping their signs.",
      type: "mcq"
    },
    {
      id: "finalExpanded",
      title: "Step 6: Combine Like Terms",
      description: "Add or subtract the like terms from the products to get the final expanded form.",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: (x + 3)(x + 5) ---
    {
      firstTerms: ["x^2", "x", "3x", "15"],
      outerTerms: ["5x", "5", "x", "3x"],
      innerTerms: ["3x", "3", "x", "5x"],
      lastTerms: ["15", "5", "3", "8x"],
      combinedProducts: ["x^2 + 5x + 3x + 15", "x^2 + 5x + 3x - 15", "x^2 - 5x + 3x + 15", "x + 5x + 3x + 15"],
      finalExpanded: ["x^2 + 8x + 15", "x^2 + 2x + 15", "x^2 - 2x + 15", "2x^2 + 8x + 15"]
    },
    // --- Problem 2: (2x - 1)(x + 4) ---
    {
      firstTerms: ["2x^2", "2x", "-1", "x"],
      outerTerms: ["8x", "4", "2x", "-1"],
      innerTerms: ["-x", "-1", "x", "4"],
      lastTerms: ["-4", "4", "-1", "-x"],
      combinedProducts: ["2x^2 + 8x - x - 4", "2x^2 + 8x + x - 4", "2x^2 - 8x - x - 4", "2x + 8x - x - 4"],
      finalExpanded: ["2x^2 + 7x - 4", "2x^2 + 9x - 4", "2x^2 - 9x - 4", "2x^2 + 7x + 4"]
    },
    // --- Problem 3: (x + 2)(x + 6) (Practice Example) ---
    {
      firstTerms: ["x^2", "x", "2x", "12"],
      outerTerms: ["6x", "6", "x", "2x"],
      innerTerms: ["2x", "2", "x", "6x"],
      lastTerms: ["12", "6", "2", "8x"],
      combinedProducts: ["x^2 + 6x + 2x + 12", "x^2 + 6x + 2x - 12", "x^2 - 6x + 2x + 12", "x + 6x + 2x + 12"],
      finalExpanded: ["x^2 + 8x + 12", "x^2 + 4x + 12", "x^2 - 4x + 12", "2x^2 + 8x + 12"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: (x + 3)(x + 5) ---
    {
      expression: "(x + 3)(x + 5)",
      solution: {
        firstTerms: "x^2",
        outerTerms: "5x",
        innerTerms: "3x",
        lastTerms: "15",
        combinedProducts: "x^2 + 5x + 3x + 15",
        finalExpanded: "x^2 + 8x + 15"
      },
      explanation: {
        firstTerms: "The first terms of each bracket are $x$ and $x$. Multiplying them gives $x \\times x = x^2$.",
        outerTerms: "The outer terms are $x$ (from the first bracket) and $5$ (from the second bracket). Multiplying them gives $x \\times 5 = 5x$.",
        innerTerms: "The inner terms are $3$ (from the first bracket) and $x$ (from the second bracket). Multiplying them gives $3 \\times x = 3x$.",
        lastTerms: "The last terms of each bracket are $3$ and $5$. Multiplying them gives $3 \\times 5 = 15$.",
        combinedProducts: "Combine all the products from the FOIL steps, keeping their signs: $x^2$ (First) $+$ $5x$ (Outer) $+$ $3x$ (Inner) $+$ $15$ (Last). This gives $x^2 + 5x + 3x + 15$.",
        finalExpanded: "Combine the like terms $5x$ and $3x$: $5x + 3x = 8x$. The final expanded form is $x^2 + 8x + 15$."
      },
      hint: "Apply the FOIL method: First ($x \\times x$), Outer ($x \\times 5$), Inner ($3 \\times x$), Last ($3 \\times 5$). Then, add all the results and combine like terms."
    },
    // --- Problem 2: (2x - 1)(x + 4) ---
    {
      expression: "(2x - 1)(x + 4)",
      solution: {
        firstTerms: "2x^2",
        outerTerms: "8x",
        innerTerms: "-x",
        lastTerms: "-4",
        combinedProducts: "2x^2 + 8x - x - 4",
        finalExpanded: "2x^2 + 7x - 4"
      },
      explanation: {
        firstTerms: "The first terms are $2x$ and $x$. Multiplying them gives $2x \\times x = 2x^2$.",
        outerTerms: "The outer terms are $2x$ and $4$. Multiplying them gives $2x \\times 4 = 8x$.",
        innerTerms: "The inner terms are $-1$ and $x$. Multiplying them gives $-1 \\times x = -x$.",
        lastTerms: "The last terms are $-1$ and $4$. Multiplying them gives $-1 \\times 4 = -4$.",
        combinedProducts: "Combine all the products: $2x^2$ (First) $+$ $8x$ (Outer) $+$ $(-x)$ (Inner) $+$ $(-4)$ (Last). This gives $2x^2 + 8x - x - 4$.",
        finalExpanded: "Combine the like terms $8x$ and $-x$: $8x - x = 7x$. The final expanded form is $2x^2 + 7x - 4$."
      },
      hint: "Use FOIL: First ($2x \\times x$), Outer ($2x \\times 4$), Inner ($-1 \\times x$), Last ($-1 \\times 4$). Pay close attention to the signs when multiplying and combining terms."
    },
    // --- Problem 3: (x + 2)(x + 6) ---
    {
      expression: "(x + 2)(x + 6)",
      solution: {
        firstTerms: "x^2",
        outerTerms: "6x",
        innerTerms: "2x",
        lastTerms: "12",
        combinedProducts: "x^2 + 6x + 2x + 12",
        finalExpanded: "x^2 + 8x + 12"
      },
      explanation: {
        firstTerms: "The first terms are $x$ and $x$. Multiplying them gives $x \\times x = x^2$.",
        outerTerms: "The outer terms are $x$ and $6$. Multiplying them gives $x \\times 6 = 6x$.",
        innerTerms: "The inner terms are $2$ and $x$. Multiplying them gives $2 \\times x = 2x$.",
        lastTerms: "The last terms are $2$ and $6$. Multiplying them gives $2 \\times 6 = 12$.",
        combinedProducts: "Combine all the products: $x^2$ (First) $+$ $6x$ (Outer) $+$ $2x$ (Inner) $+$ $12$ (Last). This gives $x^2 + 6x + 2x + 12$.",
        finalExpanded: "Combine the like terms $6x$ and $2x$: $6x + 2x = 8x$. The final expanded form is $x^2 + 8x + 12$."
      },
      hint: "Apply FOIL: First ($x \\times x$), Outer ($x \\times 6$), Inner ($2 \\times x$), Last ($2 \\times 6$). Add the results and combine the $x$ terms."
    }
  ]
};

export default function ExpandingTwoBracketsFOILTool() {
  return (
    <MultiStepInteractiveComponent toolData={expandingTwoBracketsFOILData} />
  );
}
