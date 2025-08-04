/* eslint-disable @typescript-eslint/no-explicit-any */

import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";


// --- Helper Function for Summary ---
const renderHirePurchaseSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No calculations performed yet.</p>;
  }

  return (
    <ul className="space-y-2">
      {entries.map(([key, value]) => (
        <li key={key} className="flex justify-between items-center">
          <span style={{ color: '#264653' }}>{key}:</span>
          <span className="font-mono" style={{ color: '#264653' }}>
            {/* Assume values are stored as numbers or number strings */}
            {key.includes("Interest Rate") || key.includes("Percentage") ? `${parseFloat(value).toFixed(2)}%` : `£${typeof value === 'number' ? value.toFixed(2) : parseFloat(value).toFixed(2)}`}
          </span>
        </li>
      ))}
    </ul>
  );
};

const hpFindMonthlyPaymentQuestion: MultiStepQuestion = {
  id: 'hp-find-monthly-payment-quiz',
  title: 'Finding the Monthly Payment',
  steps: [
    {
      id: 'hp-identify-balance-formula',
      question: "To find the monthly payment, you first need to calculate the balance to be paid in installments. How do you find this balance?",
      questionType: 'text',
      options: [
        "Cash Price + Deposit",
        "Cash Price - Deposit",
        "Deposit / Cash Price",
        "Cash Price × Deposit"
      ],
      optionType: 'text',
      correct: 1, // Index of "Cash Price - Deposit"
      explanation: "The balance after the deposit is the amount that needs to be paid through monthly installments. This is calculated by subtracting the deposit from the cash price.",
      explanationType: 'text'
    },
    {
      id: 'hp-calculate-monthly-payment',
      question: "A fridge costs £800 cash. You pay a £200 deposit and the remaining balance over 18 months. What is the monthly payment?",
      questionType: 'text',
      options: [
        "£30.00",
        "£33.33",
        "£40.00",
        "£44.44"
      ],
      optionType: 'text',
      correct: 1, // Index of "£33.33"
      explanation: "First, find the balance after deposit: Balance = Cash Price - Deposit = £800 - £200 = £600. \\\\ Then, Monthly Payment = Balance / Number of months = £600 / 18 = £33.33.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Monthly Payment (Fridge)", "33.33");
      }
    }
  ]
};

// --- NEW QUESTION 6: Finding Down Payment (Multi-Step) ---
const hpFindDownPaymentQuestion: MultiStepQuestion = {
  id: 'hp-find-down-payment-quiz',
  title: 'Finding the Down Payment',
  steps: [
    {
      id: 'hp-identify-hp-price-components',
      question: "The total HP price consists of the down payment and the total of all monthly payments. How do you calculate the total of monthly payments?",
      questionType: 'text',
      options: [
        "Monthly Payment + Number of months",
        "Monthly Payment - Number of months",
        "Monthly Payment × Number of months",
        "Monthly Payment / Number of months"
      ],
      optionType: 'text',
      correct: 2, // Index of "Monthly Payment × Number of months"
      explanation: "The total amount paid through installments is the monthly payment multiplied by the number of months over which payments are made.",
      explanationType: 'text'
    },
    {
      id: 'hp-calculate-required-deposit',
      question: "You want to buy a £1000 TV on HP. The monthly payment is £60 for 15 months. What deposit is required?",
      questionType: 'text',
      options: [
        "£50",
        "£100",
        "£150",
        "£200"
      ],
      optionType: 'text',
      correct: 1, // Index of "£100"
      explanation: "First, calculate the total of monthly payments: Total Payments = Monthly Payment × Number of months = £60 × 15 = £900. \\\\ The HP price is the sum of the deposit and total payments. Assuming the HP price is based on the cash price for this calculation, Deposit = HP Price - Total Payments. \\\\ Therefore, Deposit = £1000 - £900 = £100.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Required Deposit (TV)", "100.00");
      }
    }
  ]
};
// --- END OF NEW QUESTION OBJECTS ---

// --- Original Question (Steps 1-4) converted to a MultiStepQuestion object ---
const hirePurchaseBasicsQuestion: MultiStepQuestion = {
  id: 'hire-purchase-basics-quiz',
  title: 'Hire Purchase Basics',
  steps: [
    {
      id: 'hp-calculate-total-price',
      question: "A laptop costs £600 cash. The HP terms are a £100 deposit and £45 per month for 12 months. What is the total HP price?",
      questionType: 'text',
      options: [
        "£600",
        "£640",
        "£645",
        "£700"
      ],
      optionType: 'text',
      correct: 1, // Index of "£640"
      explanation: "Total HP Price = Down Payment + (Monthly Payment × Number of months) \\\\ Total HP Price = £100 + (£45 × 12) = £100 + £540 = £640.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Total HP Price (Laptop)", "640.00");
      }
    },
    {
      id: 'hp-calculate-extra-paid',
      question: "Using the total HP price of £640, how much extra is paid compared to the cash price of £600?",
      questionType: 'text',
      options: [
        "£10",
        "£20",
        "£30",
        "£40"
      ],
      optionType: 'text',
      correct: 3, // Index of "£40"
      explanation: "Extra amount paid = Total HP Price - Cash Price \\\\ Extra amount paid = £640 - £600 = £40.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Extra Amount Paid (Laptop)", "40.00");
      }
    },
    {
      id: 'hp-calculate-interest-rate',
      question: "What is the HP interest rate based on the £40 extra paid on a £600 cash price?",
      questionType: 'text',
      options: [
        "6.25%",
        "6.67%",
        "7.50%",
        "8.00%"
      ],
      optionType: 'text',
      correct: 1, // Index of "6.67%"
      explanation: "HP Interest Rate = $\\frac{\\text{Extra Amount}}{\\text{Cash Price}} \\times 100\\%$ \\\\ HP Interest Rate = $\\frac{40}{600} \\times 100\\% = 0.0667 \\times 100\\% = 6.67\\%$.",
      explanationType: 'text', // Uses text for formula display
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("HP Interest Rate (Laptop)", "6.67");
      }
    },
    {
      id: 'hp-compare-deals',
      question: "Deal A: £600 cash or £100 deposit + £50/month for 12 months. Deal B: £600 cash or £50 deposit + £55/month for 12 months. Which deal has a lower total HP cost?",
      questionType: 'text',
      options: [
        "Deal A (Total HP: £700)",
        "Deal B (Total HP: £710)",
        "Deal A (Total HP: £650)",
        "Deal B (Total HP: £660)"
      ],
      optionType: 'text',
      correct: 0, // Index of "Deal A (Total HP: £700)"
      explanation: "Calculate Total HP for each: \\\\ Deal A: £100 + (£50 × 12) = £100 + £600 = £700. \\\\ Deal B: £50 + (£55 × 12) = £50 + £660 = £710. \\\\ Deal A has a lower total HP cost (£700 < £710).",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Best HP Deal Comparison", "Deal A (£700 vs £710)");
      }
    }
  ]
};
// --- END OF ORIGINAL QUESTION OBJECT ---

// --- Export all questions in an array for the main component ---
// Combine all individual MultiStepQuestion objects into the array expected by the component
const hirePurchaseQuestions: MultiStepQuestion[] = [
  hirePurchaseBasicsQuestion,
  hpFindMonthlyPaymentQuestion,
  hpFindDownPaymentQuestion
];

const HirePurchase: React.FC = () => {
  const hirePurchaseRules = [
    "Cash Price: Full price if paid immediately.",
    "Total HP Price = Down Payment + (Monthly Payment × Number of months).",
    "Extra Amount Paid = Total HP Price - Cash Price.",
    "HP Interest Rate = $\\frac{\\text{Extra Amount}}{\\text{Cash Price}} \\times 100\\%$.",
    "Always compare total HP costs and interest rates between deals."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Hire Purchase"
        icon="💷" // Or any other relevant icon like "🛒" or "💳"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={hirePurchaseRules}
        rulesTitle="Hire Purchase Rules:"
        questions={hirePurchaseQuestions} // Pass the question object
        renderSharedValuesSummary={renderHirePurchaseSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default HirePurchase