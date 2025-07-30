// CommissionInteractiveComponent.tsx
import React from 'react';
import MultiStepInteractiveComponent, { InteractiveToolData } from "../../Templates/MultiStepInteractiveComponent";

const commissionData: InteractiveToolData = {
  title: "Commission and Sales Incentives",
  description: "Learn to calculate commission earnings and total compensation.",
  theme: {
    primaryColor: 'teal',
    backgroundColorFrom: 'from-teal-50',
    backgroundColorTo: 'to-cyan-100',
  },
  expressionSize: 'text-xl',
  inlineExpression: true,
  mcqOptionRenderType: 'text',
  steps: [
    {
      id: "calculate_commission",
      title: "Calculate the Commission",
      description: "Use the formula: Commission = Sales Amount × Commission Rate",
      type: "mcq"
    },
    {
      id: "calculate_total_compensation",
      title: "Calculate Total Compensation",
      description: "Use the formula: Total Pay = Base Salary + Commission",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    {
      calculate_commission: [
        "£300",
        "£250",
        "£350",
        "£400"
      ],
      calculate_total_compensation: [
        "£800",
        "£750",
        "£850",
        "£775"
      ]
    }
  ],
  practiceProblems: [
    {
      expression: "A salesperson has a base salary of £500 and earns a 5% commission on £6000 in sales. What is their total pay?",
      solution: {
        calculate_commission: "£300",
        calculate_total_compensation: "£800"
      },
      explanation: {
        calculate_commission: "Commission = Sales Amount × Commission Rate = £6000 × 0.05 = £300.",
        calculate_total_compensation: "Total Pay = Base Salary + Commission = £500 + £300 = £800."
      },
      hint: "Add the base salary to the commission earned from sales."
    }
  ]
};

const Commission: React.FC = () => {
  return (
    <MultiStepInteractiveComponent
      toolData={commissionData}
    />
  );
};

export default Commission;