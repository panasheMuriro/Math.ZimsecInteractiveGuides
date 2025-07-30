import React from 'react';
import MultiStepInteractiveComponent, { InteractiveToolData } from "../../Templates/MultiStepInteractiveComponent"; // Adjust path as needed

// --- Data for Profit and Loss Calculations (Using £ correctly with renderTextWithMath) ---
const profitLossData: InteractiveToolData = {
  title: "Profit and Loss Calculations",
  description: "Master essential business calculations for buying and selling.",
  theme: {
    primaryColor: 'green', // Green theme for financial concepts
    backgroundColorFrom: 'from-green-50',
    backgroundColorTo: 'to-emerald-100',
  },
  expressionSize: 'text-xl',
  inlineExpression: true, // Makes the problem expression inline
  // --- Key Addition: Tell the component to use renderTextWithMath for MCQ options ---
  mcqOptionRenderType: 'text',
  steps: [
    {
      id: "identify_cp_sp",
      title: "Identify Cost Price (CP) and Selling Price (SP)",
      description: "What are the CP and SP from the problem?",
      type: "mcq"
    },
    {
      id: "determine_profit_or_loss",
      title: "Is there a Profit or Loss?",
      description: "Compare CP and SP.",
      type: "mcq"
    },
    {
      id: "calculate_amount",
      title: "Calculate the Profit or Loss Amount",
      description: "Use the correct formula: Profit = SP - CP or Loss = CP - SP.",
      type: "mcq"
    },
    {
      id: "calculate_percentage",
      title: "Calculate the Profit or Loss Percentage",
      description: "Use the formula based on CP: (Amount/CP) × 100%.",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: Basic Profit ---
    {
      identify_cp_sp: [
        "CP = £80, SP = £100", // Correct (Plain text, rendered by renderTextWithMath)
        "CP = £100, SP = £80",
        "CP = £20, SP = £100",
        "CP = £80, SP = £20"
      ],
      determine_profit_or_loss: [
        "Profit", // Correct (Plain text)
        "Loss",
        "Break-even (No Profit, No Loss)",
        "Cannot be determined"
      ],
      calculate_amount: [
        "£20", // Correct (SP - CP = 100 - 80) (Plain text)
        "£180",
        "£80",
        "£100"
      ],
      calculate_percentage: [
       "20%", // Plain text %
       "25%", // Correct Answer for this specific problem
       "15%",
       "10%"
      ]
    },
    // --- Problem 2: Basic Loss ---
    {
      identify_cp_sp: [
        "CP = £150, SP = £120", // Correct (Plain text)
        "CP = £120, SP = £150",
        "CP = £30, SP = £120",
        "CP = £150, SP = £30"
      ],
      determine_profit_or_loss: [
        "Profit",
        "Loss", // Correct (Plain text)
        "Break-even (No Profit, No Loss)",
        "Cannot be determined"
      ],
      calculate_amount: [
        "£30", // Correct (CP - SP = 150 - 120) (Plain text)
        "£270",
        "£120",
        "£150"
      ],
      calculate_percentage: [
       "15%", // Plain text %
       "25%",
       "20%", // Correct (Plain text %)
       "10%"
      ]
    }
  ],
  practiceProblems: [
    // --- Problem 1 Details ---
    {
      // Expression uses renderTextWithMath (inlineExpression: true)
      expression: "An article was bought for £80 and sold for £100.",
      solution: {
        // Solutions for steps - Match the EXACT plain text strings from mcqOptionsPerProblem
        // These are also rendered by renderTextWithMath due to mcqOptionRenderType: 'text'
        identify_cp_sp: "CP = £80, SP = £100",
        determine_profit_or_loss: "Profit",
        calculate_amount: "£20",
        calculate_percentage: "25%" // Consistent plain text
      },
      explanation: {
        // Explanations use renderTextWithMath
        identify_cp_sp: "The cost price (CP) is the price paid (£80). The selling price (SP) is the price received (£100).",
        determine_profit_or_loss: "Since SP (£100) is greater than CP (£80), there is a Profit.",
        calculate_amount: "Profit = SP - CP = £100 - £80 = £20.",
        calculate_percentage: "Profit% = (Profit / CP) × 100% = (£20 / £80) × 100% = 25%."
      },
      // Hint uses renderTextWithMath
      hint: "CP is the buying price, SP is the selling price. Profit occurs when SP > CP. Use £ for currency."
    },
    // --- Problem 2 Details ---
    {
      // Expression uses renderTextWithMath
      expression: "A book was purchased for £150 and later sold for £120.",
      solution: {
        // Match the EXACT plain text strings
        identify_cp_sp: "CP = £150, SP = £120",
        determine_profit_or_loss: "Loss",
        calculate_amount: "£30",
        calculate_percentage: "20%" // Consistent plain text
      },
      explanation: {
        // Explanations use renderTextWithMath
        identify_cp_sp: "The cost price (CP) is the purchase price (£150). The selling price (SP) is the sale price (£120).",
        determine_profit_or_loss: "Since CP (£150) is greater than SP (£120), there is a Loss.",
        calculate_amount: "Loss = CP - SP = £150 - £120 = £30.",
        calculate_percentage: "Loss% = (Loss / CP) × 100% = (£30 / £150) × 100% = 20%."
      },
      // Hint uses renderTextWithMath
      hint: "CP is the buying price, SP is the selling price. Loss occurs when CP > SP. Use £ for currency."
    }
  ]
};

// --- Component using the data ---
const ProfitLoss: React.FC = () => {
  return (
    <MultiStepInteractiveComponent
      toolData={profitLossData}
    />
  );
};

export default ProfitLoss