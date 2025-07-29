// PerfectSquareTrinomialsTool.tsx
import MultiStepInteractiveComponent, { InteractiveToolData } from '../../Templates/MultiStepInteractiveComponent'; // Adjust path as needed

// Define data for Perfect Square Trinomials
const perfectSquareTrinomialsData: InteractiveToolData = {
  title: "Perfect Square Trinomials",
  description: "Recognize and factor quadratic expressions that are perfect square trinomials into the form $(a + b)^2$ or $(a - b)^2$.",
  theme: {
    primaryColor: 'blue', // Specify the primary color theme
    backgroundColorFrom: 'blue-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'cyan-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "identifyFirstTermSquare",
      title: "Step 1a: Check First Term",
      description: "Is the first term of the trinomial a perfect square? If so, what is its square root?",
      type: "mcq"
    },
    {
      id: "identifyLastTermSquare",
      title: "Step 1b: Check Last Term",
      description: "Is the last term of the trinomial a perfect square? If so, what is its square root?",
      type: "mcq"
    },
    {
      id: "verifyMiddleTerm",
      title: "Step 2: Verify the Middle Term",
      description: "Is the middle term equal to $\\pm 2 \\times \\text{(square root of first term)} \\times \\text{(square root of last term)}$?",
      type: "mcq"
    },
    {
      id: "determineSign",
      title: "Step 3: Determine the Sign",
      description: "Based on the sign of the middle term, should the factored form use $(a + b)^2$ or $(a - b)^2$?",
      type: "mcq"
    },
    {
      id: "writeFactoredForm",
      title: "Step 4: Write the Factored Form",
      description: "Write the trinomial as the square of a binomial using the square roots found and the correct sign.",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: x^2 + 6x + 9 ---
    {
      identifyFirstTermSquare: ["Yes, \\sqrt{x^2} = x", "No", "Yes, \\sqrt{x^2} = x^2", "Yes, \\sqrt{x} = x"],
      identifyLastTermSquare: ["Yes, \\sqrt{9} = 3", "No", "Yes, \\sqrt{9} = 9", "Yes, \\sqrt{3} = 3"],
      verifyMiddleTerm: ["Yes, 6x = 2(x)(3)", "No", "Yes, 6x = x + 3", "Yes, 6x = 2(x^2)(3)"],
      determineSign: ["Positive, use (a + b)^2", "Negative, use (a - b)^2", "Positive, use (a - b)^2", "Negative, use (a + b)^2"],
      writeFactoredForm: ["(x + 3)^2", "(x - 3)^2", "x^2 + 3^2", "(x + 3)(x - 3)"]
    },
    // --- Problem 2: 4x^2 - 12x + 9 ---
    {
      identifyFirstTermSquare: ["Yes, \\sqrt{4x^2} = 2x", "No", "Yes, \\sqrt{4x^2} = 4x", "Yes, \\sqrt{2x} = 2x"],
      identifyLastTermSquare: ["Yes, \\sqrt{9} = 3", "No", "Yes, \\sqrt{9} = 9", "Yes, \\sqrt{3} = 3"],
      verifyMiddleTerm: ["Yes, -12x = -2(2x)(3)", "No", "Yes, -12x = 2(2x)(3)", "Yes, -12x = -2(4x)(3)"],
      determineSign: ["Negative, use (a - b)^2", "Positive, use (a + b)^2", "Negative, use (a + b)^2", "Positive, use (a - b)^2"],
      writeFactoredForm: ["(2x - 3)^2", "(2x + 3)^2", "(2x - 3)(2x + 3)", "4x^2 - 3^2"]
    },
    // --- Problem 3: x^2 + 10x + 25 (Practice Example) ---
    {
      identifyFirstTermSquare: ["Yes, \\sqrt{x^2} = x", "No", "Yes, \\sqrt{x^2} = x^2", "Yes, \\sqrt{x} = x"],
      identifyLastTermSquare: ["Yes, \\sqrt{25} = 5", "No", "Yes, \\sqrt{25} = 25", "Yes, \\sqrt{5} = 5"],
      verifyMiddleTerm: ["Yes, 10x = 2(x)(5)", "No", "Yes, 10x = x + 5", "Yes, 10x = 2(x^2)(5)"],
      determineSign: ["Positive, use (a + b)^2", "Negative, use (a - b)^2", "Positive, use (a - b)^2", "Negative, use (a + b)^2"],
      writeFactoredForm: ["(x + 5)^2", "(x - 5)^2", "x^2 + 5^2", "(x + 5)(x - 5)"]
    }
  ],
  practiceProblems: [
    // --- Problem 1: x^2 + 6x + 9 ---
    {
      expression: "x^2 + 6x + 9",
      solution: {
        identifyFirstTermSquare: "Yes, \\sqrt{x^2} = x",
        identifyLastTermSquare: "Yes, \\sqrt{9} = 3",
        verifyMiddleTerm: "Yes, 6x = 2(x)(3)",
        determineSign: "Positive, use (a + b)^2",
        writeFactoredForm: "(x + 3)^2"
      },
      explanation: {
        identifyFirstTermSquare: "The first term of the trinomial is $x^2$. This is a perfect square because it can be written as $(x)^2$. The square root of $x^2$ is $x$.",
        identifyLastTermSquare: "The last term of the trinomial is $9$. This is a perfect square because $9 = 3^2$. The square root of $9$ is $3$.",
        verifyMiddleTerm: "The middle term is $6x$. We need to check if this equals $2 \\times \\text{(square root of first term)} \\times \\text{(square root of last term)}$. Calculate $2 \\times x \\times 3 = 6x$. This matches the middle term $6x$.",
        determineSign: "Since the middle term $6x$ is positive, the factored form will be $(a + b)^2$, where $a$ is the square root of the first term ($x$) and $b$ is the square root of the last term ($3$).",
        writeFactoredForm: "Using the square roots $a = x$ and $b = 3$, and the positive sign determined, the factored form is $(x + 3)^2$."
      },
      hint: "Is the first term $x^2$ a perfect square? What about the last term $9$? If both are, take their square roots. Is the middle term $6x$ exactly twice the product of these square roots? What is the sign of the middle term?"
    },
    // --- Problem 2: 4x^2 - 12x + 9 ---
    {
      expression: "4x^2 - 12x + 9",
      solution: {
        identifyFirstTermSquare: "Yes, \\sqrt{4x^2} = 2x",
        identifyLastTermSquare: "Yes, \\sqrt{9} = 3",
        verifyMiddleTerm: "Yes, -12x = -2(2x)(3)",
        determineSign: "Negative, use (a - b)^2",
        writeFactoredForm: "(2x - 3)^2"
      },
      explanation: {
        identifyFirstTermSquare: "The first term is $4x^2$. This is a perfect square because $4x^2 = (2x)^2$. The square root of $4x^2$ is $2x$.",
        identifyLastTermSquare: "The last term is $9$. This is a perfect square because $9 = 3^2$. The square root of $9$ is $3$.",
        verifyMiddleTerm: "The middle term is $-12x$. Check if it equals $\\pm 2 \\times \\text{(square root of first term)} \\times \\text{(square root of last term)}$. Calculate $2 \\times 2x \\times 3 = 12x$. The middle term is $-12x$, which is $-2 \\times 2x \\times 3$.",
        determineSign: "Since the middle term $-12x$ is negative, the factored form will be $(a - b)^2$, where $a$ is the square root of the first term ($2x$) and $b$ is the square root of the last term ($3$).",
        writeFactoredForm: "Using the square roots $a = 2x$ and $b = 3$, and the negative sign determined, the factored form is $(2x - 3)^2$."
      },
      hint: "What is the square root of the first term $4x^2$? What is the square root of the last term $9$? Is the middle term $-12x$ equal to negative two times the product of these square roots? Based on the sign of the middle term, which pattern does it fit?"
    },
    // --- Problem 3: x^2 + 10x + 25 ---
    {
      expression: "x^2 + 10x + 25",
      solution: {
        identifyFirstTermSquare: "Yes, \\sqrt{x^2} = x",
        identifyLastTermSquare: "Yes, \\sqrt{25} = 5",
        verifyMiddleTerm: "Yes, 10x = 2(x)(5)",
        determineSign: "Positive, use (a + b)^2",
        writeFactoredForm: "(x + 5)^2"
      },
      explanation: {
        identifyFirstTermSquare: "The first term is $x^2$. This is a perfect square because $x^2 = (x)^2$. The square root of $x^2$ is $x$.",
        identifyLastTermSquare: "The last term is $25$. This is a perfect square because $25 = 5^2$. The square root of $25$ is $5$.",
        verifyMiddleTerm: "The middle term is $10x$. Check if it equals $2 \\times \\text{(square root of first term)} \\times \\text{(square root of last term)}$. Calculate $2 \\times x \\times 5 = 10x$. This matches the middle term $10x$.",
        determineSign: "Since the middle term $10x$ is positive, the factored form will be $(a + b)^2$, where $a$ is the square root of the first term ($x$) and $b$ is the square root of the last term ($5$).",
        writeFactoredForm: "Using the square roots $a = x$ and $b = 5$, and the positive sign determined, the factored form is $(x + 5)^2$."
      },
      hint: "Identify the square roots of the first term $x^2$ and the last term $25$. Is the middle term $10x$ exactly twice the product of these square roots? Is the middle term positive or negative? Use that to decide the pattern and write the factors."
    }
  ]
};

export default function PerfectSquareTrinomialsTool() {
  return (
    <MultiStepInteractiveComponent toolData={perfectSquareTrinomialsData} />
  );
}
