import React from 'react';
import MultiStepInteractiveComponent, { InteractiveToolData } from "../../Templates/MultiStepInteractiveComponent";

const hirePurchaseData: InteractiveToolData = {
  title: "Hire Purchase Calculations",
  description: "Learn to calculate total HP cost, extra amount paid, and interest rates for installment purchases.",
  theme: {
    primaryColor: 'amber',
    backgroundColorFrom: 'from-amber-50',
    backgroundColorTo: 'to-orange-100',
  },
  expressionSize: 'text-xl',
  inlineExpression: true,
  mcqOptionRenderType: 'text',
  steps: [
    {
      id: "identify_variables",
      title: "Identify the Variables",
      description: "What are the Cash Price, Down Payment, Monthly Payment, and Number of Months?",
      type: "mcq"
    },
    {
      id: "calculate_total_hp",
      title: "Calculate the Total Hire Purchase (HP) Price",
      description: "Use the formula: Total HP Price = Down Payment + (Monthly Payment × Number of Months)",
      type: "mcq"
    },
    {
      id: "calculate_extra_paid",
      title: "Calculate the Extra Amount Paid",
      description: "Use the formula: Extra Amount = Total HP Price - Cash Price",
      type: "mcq"
    },
    {
      id: "calculate_hp_interest_rate",
      title: "Calculate the HP Interest Rate",
      description: "Use the formula: HP Interest Rate = (Extra Amount / Cash Price) × 100%",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    {
      identify_variables: [
        "Cash Price = £800, Down Payment = £200, Monthly Payment = £55, Months = 12",
        "Cash Price = £860, Down Payment = £200, Monthly Payment = £55, Months = 12",
        "Cash Price = £800, Down Payment = £55, Monthly Payment = £200, Months = 12",
        "Cash Price = £800, Down Payment = £200, Monthly Payment = £12, Months = £55"
      ],
      calculate_total_hp: [
        "£860",
        "£800",
        "£660",
        "£1060"
      ],
      calculate_extra_paid: [
        "£60",
        "£100",
        "£20",
        "£0"
      ],
      calculate_hp_interest_rate: [
       "7.5%",
       "6.0%",
       "8.0%",
       "5.5%"
      ]
    },
    {
      identify_variables: [
        "Cash Price = £1080, Down Payment = £150, Monthly Payment = £45, Months = 24",
        "Cash Price = £1250, Down Payment = £150, Monthly Payment = £45, Months = 24",
        "Cash Price = £1080, Down Payment = £45, Monthly Payment = £150, Months = 24",
        "Cash Price = £1080, Down Payment = £24, Monthly Payment = £45, Months = £150"
      ],
      calculate_total_hp: [
        "£1230",
        "£1080",
        "£1050",
        "£1250"
      ],
      calculate_extra_paid: [
        "£150",
        "£170",
        "£200",
        "£100"
      ],
      calculate_hp_interest_rate: [
       "13.89%",
       "15.74%",
       "12.5%",
       "10.2%"
      ]
    }
  ],
  practiceProblems: [
    {
      expression: "A TV costs £800 cash or £200 down + £55/month for 12 months via Hire Purchase.",
      solution: {
        identify_variables: "Cash Price = £800, Down Payment = £200, Monthly Payment = £55, Months = 12",
        calculate_total_hp: "£860",
        calculate_extra_paid: "£60",
        calculate_hp_interest_rate: "7.5%"
      },
      explanation: {
        identify_variables: "The cash price is £800. The down payment (deposit) is £200. The monthly payment is £55. The number of months is 12.",
        calculate_total_hp: "Total HP Price = Down Payment + (Monthly Payment × Number of Months) = £200 + (£55 × 12) = £200 + £660 = £860.",
        calculate_extra_paid: "Extra Amount Paid = Total HP Price - Cash Price = £860 - £800 = £60.",
        calculate_hp_interest_rate: "HP Interest Rate = (Extra Amount / Cash Price) × 100% = (£60 / £800) × 100% = 0.075 × 100% = 7.5%."
      },
      hint: "Identify all given values. Total HP includes the deposit and all monthly payments."
    },
    {
      expression: "A sofa set costs £1080 cash or £150 down + £45/month for 24 months via Hire Purchase.",
      solution: {
        identify_variables: "Cash Price = £1080, Down Payment = £150, Monthly Payment = £45, Months = 24",
        calculate_total_hp: "£1230",
        calculate_extra_paid: "£150",
        calculate_hp_interest_rate: "13.89%"
      },
      explanation: {
        identify_variables: "The cash price is £1080. The down payment (deposit) is £150. The monthly payment is £45. The number of months is 24.",
        calculate_total_hp: "Total HP Price = Down Payment + (Monthly Payment × Number of Months) = £150 + (£45 × 24) = £150 + £1080 = £1230.",
        calculate_extra_paid: "Extra Amount Paid = Total HP Price - Cash Price = £1230 - £1080 = £150.",
        calculate_hp_interest_rate: "HP Interest Rate = (Extra Amount / Cash Price) × 100% = (£150 / £1080) × 100% ≈ 0.138889 × 100% ≈ 13.89%."
      },
      hint: "Identify all given values. Total HP includes the deposit and all monthly payments."
    }
  ]
};

const HirePurchase: React.FC = () => {
  return (
    <MultiStepInteractiveComponent
      toolData={hirePurchaseData}
    />
  );
};

export default HirePurchase;
