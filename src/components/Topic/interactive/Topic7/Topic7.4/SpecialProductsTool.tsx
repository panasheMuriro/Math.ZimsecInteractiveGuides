// SpecialProductsTool.tsx
import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData } from '../Templates/AlgebraMultiStepInteractiveTemplate'; // Adjust path as needed

// Define data for Special Products
const specialProductsData: InteractiveToolData = {
  title: "Special Products",
  description: "Recognize and expand common algebraic patterns like perfect squares and the difference of squares.",
  theme: {
    primaryColor: 'rose', // Specify the primary color theme
    backgroundColorFrom: 'rose-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'pink-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "identifyPattern",
      title: "Step 1: Identify the Pattern",
      description: "Which special product pattern does the expression match: $(a+b)^2$, $(a-b)^2$, or $(a+b)(a-b)$?",
      type: "mcq"
    },
    {
      id: "identifyAandB",
      title: "Step 2: Identify $a$ and $b$",
      description: "Determine the terms $a$ and $b$ in the identified pattern.",
      type: "mcq"
    },
    {
      id: "applyFormula",
      title: "Step 3: Apply the Formula",
      description: "Substitute $a$ and $b$ into the correct special product formula.",
      type: "mcq"
    },
    {
      id: "simplifyTerms",
      title: "Step 4: Simplify Each Term",
      description: "Calculate the squares and the middle term (if applicable).",
      type: "mcq"
    },
    {
      id: "finalExpanded",
      title: "Step 5: Write the Final Expanded Form",
      description: "Combine the simplified terms to write the fully expanded expression.",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: (x + 3)^2 ---
    {
      identifyPattern: ["(a + b)^2", "(a - b)^2", "(a + b)(a - b)", "FOIL"],
      identifyAandB: ["a = x, b = 3", "a = 3, b = x", "a = x, b = -3", "a = x^2, b = 9"],
      applyFormula: ["x^2 + 2(x)(3) + 3^2", "x^2 - 2(x)(3) + 3^2", "x^2 + 3^2", "x^2 - 3^2"],
      simplifyTerms: ["x^2 + 6x + 9", "x^2 - 6x + 9", "x^2 + 9", "x^2 - 9"],
      finalExpanded: ["x^2 + 6x + 9", "x^2 - 6x + 9", "(x + 3)^2", "x(x + 6) + 9"]
    },
    // --- Problem 2: (2x - 5)(2x + 5) ---
    {
      identifyPattern: ["(a + b)(a - b)", "(a + b)^2", "(a - b)^2", "FOIL"],
      identifyAandB: ["a = 2x, b = 5", "a = 5, b = 2x", "a = 2x, b = -5", "a = 2, b = 5x"],
      applyFormula: ["(2x)^2 - 5^2", "(2x)^2 + 5^2", "2x^2 - 5^2", "(2x - 5)^2"],
      simplifyTerms: ["4x^2 - 25", "4x^2 + 25", "2x^2 - 25", "4x^2 - 10x + 25"],
      finalExpanded: ["4x^2 - 25", "4x^2 + 25", "(2x - 5)(2x + 5)", "4x^2 - 10x + 25"]
    },
    // --- Problem 3: (x - 4)^2 (Practice Example) ---
    {
      identifyPattern: ["(a - b)^2", "(a + b)^2", "(a + b)(a - b)", "FOIL"],
      identifyAandB: ["a = x, b = 4", "a = 4, b = x", "a = x, b = -4", "a = x^2, b = 16"],
      applyFormula: ["x^2 - 2(x)(4) + 4^2", "x^2 + 2(x)(4) + 4^2", "x^2 - 4^2", "x^2 + 4^2"],
      simplifyTerms: ["x^2 - 8x + 16", "x^2 + 8x + 16", "x^2 - 16", "x^2 + 16"],
      finalExpanded: ["x^2 - 8x + 16", "x^2 + 8x + 16", "(x - 4)^2", "x(x - 8) + 16"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: (x + 3)^2 ---
    {
      expression: "(x + 3)^2",
      solution: {
        identifyPattern: "(a + b)^2",
        identifyAandB: "a = x, b = 3",
        applyFormula: "x^2 + 2(x)(3) + 3^2",
        simplifyTerms: "x^2 + 6x + 9",
        finalExpanded: "x^2 + 6x + 9"
      },
      explanation: {
        identifyPattern: "The expression is a binomial $(x + 3)$ multiplied by itself, which fits the pattern $(a + b)^2$.",
        identifyAandB: "Comparing $(x + 3)^2$ to the pattern $(a + b)^2$, we identify $a = x$ and $b = 3$.",
        applyFormula: "Apply the formula for $(a + b)^2$, which is $a^2 + 2ab + b^2$. Substituting $a = x$ and $b = 3$ gives $x^2 + 2(x)(3) + 3^2$.",
        simplifyTerms: "Calculate each part of the formula: $x^2$ remains $x^2$. The middle term is $2(x)(3) = 6x$. The last term is $3^2 = 9$.",
        finalExpanded: "Combine the simplified terms: $x^2 + 6x + 9$. This is the fully expanded form."
      },
      hint: "This is a perfect square binomial. Is it $(a+b)^2$ or $(a-b)^2$? Identify $a$ and $b$, then use the correct formula."
    },
    // --- Problem 2: (2x - 5)(2x + 5) ---
    {
      expression: "(2x - 5)(2x + 5)",
      solution: {
        identifyPattern: "(a + b)(a - b)",
        identifyAandB: "a = 2x, b = 5",
        applyFormula: "(2x)^2 - 5^2",
        simplifyTerms: "4x^2 - 25",
        finalExpanded: "4x^2 - 25"
      },
      explanation: {
        identifyPattern: "The expression is the product of a sum $(2x + 5)$ and a difference $(2x - 5)$. This fits the pattern $(a + b)(a - b)$, known as the difference of squares.",
        identifyAandB: "Comparing $(2x - 5)(2x + 5)$ to the pattern $(a - b)(a + b)$ (or $(a + b)(a - b)$), we identify $a = 2x$ and $b = 5$. (Note: $a$ is the term that stays the same, $b$ is the term that changes sign).",
        applyFormula: "Apply the formula for $(a + b)(a - b)$, which is $a^2 - b^2$. Substituting $a = 2x$ and $b = 5$ gives $(2x)^2 - 5^2$.",
        simplifyTerms: "Calculate each square: $(2x)^2 = 4x^2$ and $5^2 = 25$.",
        finalExpanded: "Combine the results: $4x^2 - 25$. This is the fully expanded form."
      },
      hint: "One bracket is a sum and the other is the same terms but a difference. Which special pattern does this represent? Identify $a$ and $b$, then apply the formula for that pattern."
    },
    // --- Problem 3: (x - 4)^2 ---
    {
      expression: "(x - 4)^2",
      solution: {
        identifyPattern: "(a - b)^2",
        identifyAandB: "a = x, b = 4",
        applyFormula: "x^2 - 2(x)(4) + 4^2",
        simplifyTerms: "x^2 - 8x + 16",
        finalExpanded: "x^2 - 8x + 16"
      },
      explanation: {
        identifyPattern: "The expression is a binomial $(x - 4)$ multiplied by itself, which fits the pattern $(a - b)^2$.",
        identifyAandB: "Comparing $(x - 4)^2$ to the pattern $(a - b)^2$, we identify $a = x$ and $b = 4$.",
        applyFormula: "Apply the formula for $(a - b)^2$, which is $a^2 - 2ab + b^2$. Substituting $a = x$ and $b = 4$ gives $x^2 - 2(x)(4) + 4^2$.",
        simplifyTerms: "Calculate each part of the formula: $x^2$ remains $x^2$. The middle term is $-2(x)(4) = -8x$. The last term is $4^2 = 16$.",
        finalExpanded: "Combine the simplified terms: $x^2 - 8x + 16$. This is the fully expanded form."
      },
      hint: "This is another perfect square binomial. Is it $(a+b)^2$ or $(a-b)^2$? Identify $a$ and $b$, then use the correct formula, paying attention to the signs."
    }
  ]
};

export default function SpecialProductsTool() {
  return (
    <AlgebraMultiStepInteractiveTemplate toolData={specialProductsData} />
  );
}
