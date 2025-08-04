/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderSimpleInterestSummary = (sharedValues: { [key: string]: any }) => {
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
            £{typeof value === 'number' ? value.toFixed(2) : parseFloat(value).toFixed(2)}
          </span>
        </li>
      ))}
    </ul>
  );
};

// --- The Question Data ---
const simpleInterestQuestion: MultiStepQuestion = {
  id: 'simple-interest-quiz',
  title: 'Simple Interest Calculations',
  steps: [
    {
      id: 'si-calculate-interest',
      question: "Calculate the simple interest earned on £400 invested for 3 years at 6% per annum.",
      questionType: 'text',
      options: [
        "£60",
        "£72",
        "£80",
        "£90"
      ],
      optionType: 'text',
      correct: 1, // Index of "£72"
      explanation: "Formula: $I = \\frac{P \\times R \\times T}{100}$ \\\\ $I = \\frac{400 \\times 6 \\times 3}{100} = \\frac{7200}{100} = 72$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Interest Earned (£400, 3y, 6%)", "72.00");
      }
    },
    {
      id: 'si-calculate-amount',
      question: "What is the total amount in the account after investing £800 for 2 years at 4.5% per annum simple interest?",
      questionType: 'text',
      options: [
        "£864",
        "£872",
        "£880",
        "£890"
      ],
      optionType: 'text',
      correct: 1, // Index of "£872"
      explanation: "First, find the interest: $I = \\frac{P \\times R \\times T}{100} = \\frac{800 \\times 4.5 \\times 2}{100} = \\frac{7200}{100} = 72$. \\\\ Then, Amount $A = P + I = 800 + 72 = 872$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Total Amount (£800, 2y, 4.5%)", "872.00");
      }
    },
    {
      id: 'si-find-principal',
      question: "£90 simple interest was earned over 3 years at a rate of 5% per annum. What was the principal amount?",
      questionType: 'text',
      options: [
        "£500",
        "£550",
        "£600",
        "£650"
      ],
      optionType: 'text',
      correct: 2, // Index of "£600"
      explanation: "Formula: $P = \\frac{100 \\times I}{R \\times T}$ \\\\ $P = \\frac{100 \\times 90}{5 \\times 3} = \\frac{9000}{15} = 600$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Principal (I=£90, T=3y, R=5%)", "600.00");
      }
    },
    {
      id: 'si-find-rate',
      question: "An investment of £1200 earned £108 simple interest over 2 years. What was the annual interest rate?",
      questionType: 'text',
      options: [
        "4%",
        "4.5%",
        "5%",
        "5.5%"
      ],
      optionType: 'text',
      correct: 1, // Index of "4.5%"
      explanation: "Formula: $R = \\frac{100 \\times I}{P \\times T}$ \\\\ $R = \\frac{100 \\times 108}{1200 \\times 2} = \\frac{10800}{2400} = 4.5$%.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Interest Rate (P=£1200, I=£108, T=2y)", "4.5");
      }
    },
    {
      id: 'si-calculate-time-months',
      question: "For how long (in months) must £500 be invested at 8% per annum to earn £40 in simple interest?",
      questionType: 'text',
      options: [
        "10 months",
        "12 months",
        "15 months",
        "18 months"
      ],
      optionType: 'text',
      correct: 1, // Index of "12 months"
      explanation: "First, find the time in years using the formula: $T = \\frac{100 \\times I}{P \\times R}$ \\\\ $T = \\frac{100 \\times 40}{500 \\times 8} = \\frac{4000}{4000} = 1$ year. \\\\ Convert years to months: $1 \\times 12 = 12$ months.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Time for £40 Interest (P=£500, R=8%)", "12 months");
      }
    }
  ]
};



const SimpleInterest: React.FC = () => {
  const simpleInterestRules = [
    "Simple Interest Formula: $I = \\frac{P \\times R \\times T}{100}$",
    "Amount Formula: $A = P + I = P(1 + \\frac{R \\times T}{100})$",
    "Principal: $P = \\frac{100 \\times I}{R \\times T}$",
    "Rate: $R = \\frac{100 \\times I}{P \\times T}$",
    "Time: $T = \\frac{100 \\times I}{P \\times R}$",
    "Interest is calculated only on the original principal.",
    "Convert time to years if given in months (÷12) or days (÷365)."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Simple Interest"
        icon="💷" // Or any other relevant icon like "📈" or "🏦"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={simpleInterestRules}
        rulesTitle="Simple Interest Rules:"
        questions={[simpleInterestQuestion]} // Pass the question object
        renderSharedValuesSummary={renderSimpleInterestSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default SimpleInterest