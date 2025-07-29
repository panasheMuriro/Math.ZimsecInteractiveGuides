// BaseEquationsData.ts
import MultiStepInteractiveComponent, { InteractiveToolData, PracticeProblem, McqOptions, Step } from '../../Templates/MultiStepInteractiveComponent'; // Adjust path

// --- Generic Steps for Solving Base Equations ---
const baseEquationsSteps: Step[] = [
  {
    id: "identify_unknown",
    title: "Step 1: Identify the Unknown",
    description: "What are you solving for in this equation? (e.g., Base $b$, Digit $x$)",
    type: 'mcq'
  },
  {
    id: "convert_to_polynomial",
    title: "Step 2: Convert Base Expression",
    description: "Express the number(s) with the unknown base/digit as a polynomial in terms of that unknown.",
    type: 'mcq'
  },
  {
    id: "convert_constants",
    title: "Step 3: Convert Other Numbers",
    description: "Convert any other numbers in the equation to base 10.",
    type: 'mcq'
  },
  {
    id: "form_equation",
    title: "Step 4: Form the Equation",
    description: "Set the converted expressions equal to each other to form an equation in base 10.",
    type: 'mcq'
  },
  {
    id: "solve_equation",
    title: "Step 5: Solve the Equation",
    description: "Solve the resulting equation for the unknown variable.",
    type: 'mcq'
  },
  {
    id: "validate_solution",
    title: "Step 6: Validate the Solution",
    description: "Check if the solution makes sense for the original base/digit (e.g., base must be ≥ 2, digit must be < base).",
    type: 'mcq'
  },
  {
    id: "verify_solution",
    title: "Step 7: Verify the Solution",
    description: "Substitute the found value back into the original equation to ensure it holds true.",
    type: 'mcq'
  }
];

// --- Problem 1: Finding the Base (25_b = 17_10) ---
const problemFindBase: PracticeProblem = {
  expression: "25_b = 17_{10}",
  solution: {
    "identify_unknown": "\\text{Base } b",
    "convert_to_polynomial": "2b + 5",
    "convert_constants": "17",
    "form_equation": "2b + 5 = 17",
    "solve_equation": "b = 6",
    "validate_solution": "\\text{Valid, } b=6 \\geq 2",
    "verify_solution": "25_6 = 2\\times6 + 5 = 17_{10} \\checkmark"
  },
  explanation: {
    "identify_unknown": "The unknown is the base, represented by the variable $b$.",
    "convert_to_polynomial": "The number $25_b$ means $2 \\times b^1 + 5 \\times b^0 = 2b + 5$.",
    "convert_constants": "The right side of the equation is already in base 10: $17$.",
    "form_equation": "Set the polynomial equal to the base 10 number: $2b + 5 = 17$.",
    "solve_equation": "Subtract 5 from both sides: $2b = 12$. Divide by 2: $b = 6$.",
    "validate_solution": "A base must be an integer greater than or equal to 2. $b=6$ satisfies this condition.",
    "verify_solution": "Substitute $b=6$ back into the original: $25_6 = 2 \\times 6 + 5 = 12 + 5 = 17$. This matches the right side, so the solution is correct."
  },
  hint: "To convert a number from an unknown base $b$, express each digit as a coefficient of a power of $b$. The rightmost digit is $b^0$, the next is $b^1$, and so on."
};

const mcqOptionsFindBase: McqOptions = {
  "identify_unknown": ["\\text{Base } b", "\\text{Digit } b", "\\text{Exponent}", "\\text{Coefficient}"],
  "convert_to_polynomial": ["2b + 5", "25b", "2 + 5b", "2 \\times 5^b"],
  "convert_constants": ["17", "17_b", "1 \\times 10 + 7", "170"],
  "form_equation": ["2b + 5 = 17", "25 = 17b", "2b = 17 - 5", "2 + 5b = 17"],
  "solve_equation": ["b = 6", "b = 12", "b = 8.5", "b = 5"],
  "validate_solution": [
    "\\text{Valid, } b=6 \\geq 2",
    "\\text{Invalid, } b \\text{ is not an integer}",
    "\\text{Invalid, } b < 2",
    "\\text{Valid, but } b=6 \\text{ is too large}"
  ],
  "verify_solution": [
    "25_6 = 2\\times6 + 5 = 17_{10} \\checkmark",
    "25_6 = 2 + 5\\times6 = 17_{10} \\checkmark",
    "25_6 = 2\\times6 + 5 = 12_{10} \\times",
    "25_6 = 26_{10} \\times"
  ]
};

// --- Problem 2: Finding Unknown Digits (3x_5 = 23_10) ---
const problemFindDigit: PracticeProblem = {
  expression: "3x_5 = 23_{10}",
  solution: {
    "identify_unknown": "\\text{Digit } x",
    "convert_to_polynomial": "15 + x",
    "convert_constants": "23",
    "form_equation": "15 + x = 23",
    "solve_equation": "x = 8",
    "validate_solution": "\\text{Invalid, } x=8 \\geq 5",
    "verify_solution": "\\text{No solution, as } x=8 \\text{ is not valid in base 5.}"
  },
  explanation: {
    "identify_unknown": "The unknown is a single digit, represented by the variable $x$, in base 5.",
    "convert_to_polynomial": "The number $3x_5$ means $3 \\times 5^1 + x \\times 5^0 = 15 + x$.",
    "convert_constants": "The right side of the equation is already in base 10: $23$.",
    "form_equation": "Set the polynomial equal to the base 10 number: $15 + x = 23$.",
    "solve_equation": "Subtract 15 from both sides: $x = 23 - 15 = 8$.",
    "validate_solution": "In base 5, all digits must be less than 5 (i.e., 0, 1, 2, 3, or 4). The calculated value $x=8$ is not less than 5.",
    "verify_solution": "Since the validation step failed ($x=8$ is invalid for base 5), there is no solution to the original equation within the constraints of base 5."
  },
  hint: "When solving for a digit $x$ in base $n$, after finding the algebraic value of $x$, always check if $0 \\leq x < n$. If not, the equation has no solution in that base."
};

const mcqOptionsFindDigit: McqOptions = {
  "identify_unknown": ["\\text{Digit } x", "\\text{Base } x", "\\text{Exponent}", "\\text{Coefficient}"],
  "convert_to_polynomial": ["15 + x", "3x", "3 + 5x", "3 \\times x^5"],
  "convert_constants": ["23", "23_b", "2 \\times 10 + 3", "230"],
  "form_equation": ["15 + x = 23", "3x = 23", "3 + x = 23", "15x = 23"],
  "solve_equation": ["x = 8", "x = 15", "x = 2.3", "x = 5"],
  "validate_solution": [
    "\\text{Invalid, } x=8 \\geq 5",
    "\\text{Valid, } 0 \\leq x < 5",
    "\\text{Valid, } x=8 \\text{ is an integer}",
    "\\text{Invalid, } x \\text{ is not an integer}"
  ],
  "verify_solution": [
    "\\text{No solution, as } x=8 \\text{ is not valid in base 5.}",
    "38_5 = 3\\times5 + 8 = 23_{10} \\checkmark",
    "33_5 = 3\\times5 + 3 = 18_{10} \\times",
    "The equation is correct."
  ]
};

// --- Problem 3: Complex Equation (x23_7 = 156_10) ---
const problemComplex: PracticeProblem = {
  expression: "x23_7 = 156_{10}",
  // Corrected solution and explanation based on content example
  solution: {
    "identify_unknown": "\\text{Digit } x",
    "convert_to_polynomial": "49x + 17",
    "convert_constants": "156",
    "form_equation": "49x + 17 = 156",
    "solve_equation": "x = 139/49",
    "validate_solution": "\\text{Test integer values for } x \\text{ (0 to 6)}",
    "verify_solution": "\\text{No integer solution found.}"
  },
  explanation: {
    "identify_unknown": "The unknown is a single digit, represented by the variable $x$, in base 7.",
    "convert_to_polynomial": "The number $x23_7$ means $x \\times 7^2 + 2 \\times 7^1 + 3 \\times 7^0 = 49x + 14 + 3 = 49x + 17$.",
    "convert_constants": "The right side of the equation is already in base 10: $156$.",
    "form_equation": "Set the polynomial equal to the base 10 number: $49x + 17 = 156$.",
    "solve_equation": "Subtract 17 from both sides: $49x = 139$. Divide by 49: $x = 139/49$. This is approximately $2.84$.",
    "validate_solution": "The value of $x$ must be an integer and also a valid digit in base 7, meaning $0 \\leq x \\leq 6$. Since $x = 139/49$ is not an integer, we test integer values close to 2.84, specifically $x = 2$ and $x = 3$. We also need to check if the resulting number makes sense.",
    "verify_solution": "Let's test $x=2$: $223_7 = 2\\times49 + 2\\times7 + 3 = 98 + 14 + 3 = 115_{10}$. This is not 156. Let's test $x=3$: $323_7 = 3\\times49 + 2\\times7 + 3 = 147 + 14 + 3 = 164_{10}$. This is also not 156. Since $x$ must be an integer and neither 2 nor 3 work (and the algebraic solution is not an integer), there is no integer solution for $x$ in this equation within base 7."
  },
  hint: "When solving for a digit and the algebraic solution is not an integer, test the integer values close to the calculated result. Remember the digit constraints for the specific base."
};

const mcqOptionsComplex: McqOptions = {
  "identify_unknown": ["\\text{Digit } x", "\\text{Base } x", "\\text{Exponent}", "\\text{Coefficient}"],
  "convert_to_polynomial": ["49x + 17", "x23", "x + 2\\times7 + 3", "x \\times 23^7"],
  "convert_constants": ["156", "156_b", "1 \\times 100 + 5 \\times 10 + 6", "1560"],
  "form_equation": ["49x + 17 = 156", "x23 = 156", "49 + 17x = 156", "x \\times 17 = 156"],
  "solve_equation": ["x = 139/49", "x = 156/49", "x = 2.84", "x = 49/139"],
  "validate_solution": [
    "\\text{Test integer values for } x \\text{ (0 to 6)}",
    "\\text{Valid, } x=2.84 \\text{ is close to 3}",
    "\\text{Invalid, } x \\text{ is not an integer}",
    "\\text{Valid, } x=3 \\text{ is less than 7}"
  ],
  "verify_solution": [
    "\\text{No integer solution found.}",
    "x=3 \\text{ works: } 323_7 = 164_{10}",
    "x=2 \\text{ works: } 223_7 = 115_{10}",
    "The equation is correct."
  ]
};

// --- Package Data Sets ---
const baseEquationsAllData: InteractiveToolData = {
  title: "Solving Base Equations Quiz",
  description: "Practice solving equations where the unknown is a base or a digit.",
  steps: baseEquationsSteps,
  practiceProblems: [problemFindBase, problemFindDigit, problemComplex],
  mcqOptionsPerProblem: [mcqOptionsFindBase, mcqOptionsFindDigit, mcqOptionsComplex],
  theme: {
    primaryColor: 'rose' // A distinct theme
  }
};


const BaseEquationsQuiz: React.FC = () => {
  return (
    // Simple container, similar to previous components
    <div className="flex justify-center items-center">
      <MultiStepInteractiveComponent toolData={baseEquationsAllData} />
    </div>
  );
};

export default BaseEquationsQuiz;