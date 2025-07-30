import MultiStepInteractiveComponent, { InteractiveToolData } from "../../Templates/MultiStepInteractiveComponent";

// --- Updated Data with unescaped £ ---
const consumerArithmeticData: InteractiveToolData = {
  title: "Consumer Arithmetic: Discounts",
  description: "Master calculating discounts and final prices.",
  theme: {
    primaryColor: 'amber',
    backgroundColorFrom: 'from-amber-50',
    backgroundColorTo: 'to-orange-100',
  },
  expressionSize: 'text-xl',
  inlineExpression: true,
  steps: [
    {
      id: "identify_formula",
      title: "Identify the Formula",
      description: "Which formula relates Marked Price, Selling Price, and Discount?",
      type: "mcq"
    },
    {
      id: "calculate_discount",
      title: "Calculate the Discount Amount",
      description: "Find the discount amount. Use £ for currency.", // Updated description
      type: "mcq"
    },
    {
      id: "calculate_final_price",
      title: "Calculate the Final Price",
      description: "What is the final price after applying the discount? Use £ for currency.", // Updated description
      type: "mcq"
    },
    {
      id: "find_discount_formula",
      title: "Identify the Target Formula",
      description: "To find the unknown discount percentage, which formula should you rearrange?",
      type: "mcq"
    },
    {
      id: "calculate_discount_percent",
      title: "Calculate the Discount Percentage",
      description: "What is the discount percentage?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // Problem 1: Known discount %
    {
      identify_formula: [
        "Discount = Marked Price + Selling Price",
        "Discount = Marked Price - Selling Price", // Correct
        "Discount = Selling Price - Marked Price",
  "Discount\\% = Marked Price \\times Selling Price"
      ],
      calculate_discount: [
        "£8", // Updated to £ (unescaped)
        "£10",
        "£12",
        "£15"
      ],
      calculate_final_price: [
        "£30", // Updated to £ (unescaped)
        "£32",
        "£35",
        "£40"
      ],
      find_discount_formula: [
        "Discount% = \\frac{\\text{Discount Amount}}{\\text{Selling Price}} \\times 100\\%",
        "Discount% = \\frac{\\text{Marked Price} - \\text{Selling Price}}{\\text{Marked Price}} \\times 100\\%", // Correct
        "Discount% = (\\text{Marked Price} - \\text{Selling Price}) \\times 100\\%",
        "Discount% = \\frac{\\text{Selling Price}}{\\text{Marked Price}} \\times 100\\%"
      ],
      calculate_discount_percent: [
       "15\\%",
       "18\\%",
       "20\\%", // Correct
       "25\\%"
      ]
    },
    // Problem 2: Unknown discount %
    {
      identify_formula: [
        "Discount = Marked Price + Selling Price",
        "Discount = Marked Price - Selling Price", // Correct
        "Discount = Selling Price - Marked Price",
        "Discount\\% = Marked Price \\times Selling Price"
      ],
      calculate_discount: [
        "£10",
        "£12", // Correct
        "£15",
        "£18"
      ],
      calculate_final_price: [
        "£45",
        "£48", // Correct (matches selling price given in problem text)
        "£50",
        "£55"
      ],
      find_discount_formula: [
        "Discount% = \\frac{\\text{Discount Amount}}{\\text{Selling Price}} \\times 100\\%",
        "Discount% = \\frac{\\text{Marked Price} - \\text{Selling Price}}{\\text{Marked Price}} \\times 100\\%", // Correct
        "Discount% = (\\text{Marked Price} - \\text{Selling Price}) \\times 100\\%",
        "Discount% = \\frac{\\text{Selling Price}}{\\text{Marked Price}} \\times 100\\%"
      ],
      calculate_discount_percent: [
       "15\\%",
       "18\\%",
       "20\\%", // Correct
       "25\\%"
      ]
    }
  ],
  practiceProblems: [
    {
      // Updated problem text and solutions to use £ (unescaped in text, escaped in KaTeX math mode)
      expression: "A jacket is marked at £40. There is a 20% discount.",
      solution: {
        identify_formula: "Discount = Marked Price - Selling Price",
        calculate_discount: "\\£8", // KaTeX math mode still needs \ for £
        calculate_final_price: "\\£32", // KaTeX math mode still needs \ for £
        find_discount_formula: "Discount\\% = \\frac{\\text{Marked Price} - \\text{Selling Price}}{\\text{Marked Price}} \\times 100\\%",
        calculate_discount_percent: "20\\%"
      },
      // Updated explanations to use £ (KaTeX math mode still needs \ for £)
      explanation: {
        identify_formula: "The discount is the difference between the Marked Price and the Selling Price.",
        calculate_discount: "Discount = Marked Price \\times Rate = \\£40 \\times 0.20 = \\£8.", // KaTeX math mode
        calculate_final_price: "Final Price = Marked Price - Discount = \\£40 - \\£8 = \\£32.", // KaTeX math mode
        find_discount_formula: "To find the percentage, calculate the discount amount as a fraction of the Marked Price.",
        calculate_discount_percent: "The discount percentage is given as 20\\% in this problem."
      },
      // Updated hint to use £ (unescaped in regular text)
      hint: "Discount is part of the Marked Price. Final Price is what's left after removing the discount. Use £ for currency."
    },
    {
      // Updated problem text and solutions to use £ (unescaped in text, escaped in KaTeX math mode)
      expression: "A pair of shoes originally priced at \\£60 is on sale for \\£48. What is the discount percentage?",
      solution: {
        identify_formula: "Discount = Marked Price - Selling Price",
        calculate_discount: "\\£12", // KaTeX math mode
        calculate_final_price: "\\£48", // KaTeX math mode (Note: This is the selling price, not calculated from MP - Discount)
        find_discount_formula: "Discount\\% = \\frac{\\text{Marked Price} - \\text{Selling Price}}{\\text{Marked Price}} \\times 100\\%",
        calculate_discount_percent: "20\\%"
      },
      // Updated explanations to use £ (KaTeX math mode still needs \ for £)
      explanation: {
        identify_formula: "The discount amount is the difference between the Marked Price and the Selling Price.",
        calculate_discount: "Discount Amount = \\£60 - \\£48 = \\£12.", // KaTeX math mode
        calculate_final_price: "The final price is the selling price, which is \\£48.", // KaTeX math mode
        find_discount_formula: "To find the percentage, you calculate the discount amount as a fraction of the original Marked Price.",
        calculate_discount_percent: "Discount\\% = $\\frac{\\£12}{\\£60} \\times 100\\% = 20\\%$." // KaTeX math mode
      },
      // Updated hint to use £ (unescaped in regular text)
      hint: "Find the difference between the original price and the sale price. Then express that difference as a percentage of the original price. Use £ for currency."
    }
  ]
};

// --- Component using the updated data ---
const ConsumerArithmeticQuiz: React.FC = () => {
  return (
    <MultiStepInteractiveComponent
      toolData={consumerArithmeticData}
    />
  );
};

export default ConsumerArithmeticQuiz;