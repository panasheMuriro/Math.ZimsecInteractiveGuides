/* eslint-disable @typescript-eslint/no-explicit-any */
// CompoundInterestQuiz.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';
// renderTextWithtext is imported within the template

// --- Helper Function for Summary ---
const renderCompoundInterestSummary = (sharedValues: { [key: string]: any }) => {
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
            {key.includes("Time") || key.includes("Rate") ? value : `£${typeof value === 'number' ? value.toFixed(2) : parseFloat(value).toFixed(2)}`}
          </span>
        </li>
      ))}
    </ul>
  );
};

// --- The Multi-Step Question Data ---
const compoundInterestQuestion: MultiStepQuestion = {
  id: 'compound-interest-quiz',
  title: 'Compound Interest Calculations',
  steps: [
    {
      id: 'ci-identify-formula',
      question: "Which formula is used to calculate the final amount (A) with annual compound interest?",
      questionType: 'text',
      options: [
        "$A = P + \\frac{P \\times R \\times T}{100}$",
        "$A = P(1 + \\frac{r}{100})^t$",
        "$A = P(1 + \\frac{r}{n})^{nt}$",
        "$A = P \\times e^{rt}$"
      ],
      optionType: 'text',
      correct: 1, // Index of "$A = P(1 + \\frac{r}{100})^t$"
      explanation: "The standard formula for compound interest compounded annually is $A = P(1 + \\frac{r}{100})^t$, where $P$ is the principal, $r$ is the annual rate, and $t$ is the time in years.",
      explanationType: 'text'
    },
    {
      id: 'ci-calculate-amount',
      question: "Calculate the final amount if £1000 is invested for 3 years at 5% per annum compound interest.",
      questionType: 'text',
      options: [
        "£1150.00",
        "£1157.63",
        "£1160.00",
        "£1175.00"
      ],
      optionType: 'text',
      correct: 1, // Index of "£1157.63"
      explanation: "Using the formula $A = P(1 + \\frac{r}{100})^t$: \\\\ $A = 1000(1 + \\frac{5}{100})^3 = 1000(1.05)^3 = 1000 \\times 1.157625 = 1157.63$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Final Amount (Annual, £1000, 3y, 5%)", "1157.63");
      }
    },
    {
      id: 'ci-calculate-interest',
      question: "Using the amount calculated (£1157.63), how much compound interest was earned on the £1000 investment?",
      questionType: 'text',
      options: [
        "£150.00",
        "£157.63",
        "£160.00",
        "£175.00"
      ],
      optionType: 'text',
      correct: 1, // Index of "£157.63"
      explanation: "Compound Interest (CI) is the difference between the final amount (A) and the principal (P). \\\\ $CI = A - P = 1157.63 - 1000 = 157.63$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Compound Interest Earned", "157.63");
      }
    },
    {
      id: 'ci-rule-of-72',
      question: "Using the Rule of 72, approximately how long will it take for the £1000 investment to double at an annual interest rate of 5%?",
      questionType: 'text',
      options: [
        "10 years",
        "12 years",
        "14 years",
        "15 years"
      ],
      optionType: 'text',
      correct: 2, // Index of "14 years"
      explanation: "Rule of 72: Time to double $\\approx \\frac{72}{\\text{interest rate}}$ \\\\ Time $\\approx \\frac{72}{5} = 14.4$ years, which is approximately 14 years.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Doubling Time (Rule of 72, 5%)", "14 years");
      }
    }
  ]
};

const CompoundInterest: React.FC = () => {
  const compoundInterestRules = [
    "Annual Compounding: $A = P(1 + \\frac{r}{100})^t$",
    "Compound Interest: $CI = A - P = P[(1 + \\frac{r}{100})^t - 1]$",
    "More frequent compounding (quarterly, monthly) uses: $A = P(1 + \\frac{r}{100n})^{nt}$",
    "Compound interest grows faster than simple interest over time.",
    "Rule of 72: Time to double $\\approx \\frac{72}{\\text{interest rate}}$"
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Compound Interest"
        icon="💷" // Or any other relevant icon like "📈" or "🏦"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={compoundInterestRules}
        rulesTitle="Compound Interest Rules:"
        questions={[compoundInterestQuestion]} // Pass the question object
        renderSharedValuesSummary={renderCompoundInterestSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default CompoundInterest;