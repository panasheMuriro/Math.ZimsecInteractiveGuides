/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderProfitLossSummary = (sharedValues: { [key: string]: any }) => {
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
            £{typeof value === 'number' ? value.toFixed(2) : parseFloat(value).toFixed(2)}
          </span>
        </li>
      ))}
    </ul>
  );
};

// --- The Question Data ---
const profitLossQuestion: MultiStepQuestion = {
  id: 'profit-loss-quiz',
  title: 'Profit and Loss Calculations',
  steps: [
    {
      id: 'pl-calculate-profit',
      question: "A shopkeeper buys a book for £45 and sells it for £60. What is the profit?",
      questionType: 'text',
      options: [
        "£10",
        "£15",
        "£20",
        "£25"
      ],
      optionType: 'text',
      correct: 1, // Index of "£15"
      explanation: "Profit = Selling Price (SP) - Cost Price (CP) Profit = £60 - £45 = £15.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Profit (Book)", "15.00");
      }
    },
    {
      id: 'pl-calculate-profit-percent',
      question: "An item is bought for £120 and sold for £150. What is the profit percentage?",
      questionType: 'text',
      options: [
        "20%",
        "25%",
        "30%",
        "35%"
      ],
      optionType: 'text',
      correct: 1, // Index of "25%"
      explanation: "Profit = SP - CP = £150 - £120 = £30. Profit% = (Profit / CP) × 100% Profit% = (£30 / £120) × 100% = 0.25 × 100% = 25%.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Profit Percentage", "25");
      }
    },
    {
      id: 'pl-find-selling-price',
      question: "A trader wants to make a 20% profit on an item that cost £80. What should be the selling price?",
      questionType: 'text',
      options: [
        "£90",
        "£96",
        "£100",
        "£104"
      ],
      optionType: 'text',
      correct: 1, // Index of "£96"
      explanation: "Formula: SP = CP × (1 + Profit%/100) SP = £80 × (1 + 20/100) = £80 × (1 + 0.20) = £80 × 1.20 = £96.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Selling Price (20% Profit)", "96.00");
      }
    },
    {
      id: 'pl-find-cost-price',
      question: "An article is sold for £90, resulting in a 10% loss. What was the original cost price?",
      questionType: 'text',
      options: [
        "£100",
        "£99",
        "£81",
        "£110"
      ],
      optionType: 'text',
      correct: 0, // Index of "£100"
      explanation: "Let CP be the Cost Price. Loss = CP - SP. Loss% = (Loss / CP) × 100%. We know SP = £90 and Loss% = 10%. So, 10 = ((CP - £90) / CP) × 100. 10/100 = (CP - £90) / CP. 0.1 × CP = CP - £90. £90 = CP - 0.1 × CP. £90 = CP × (1 - 0.1). £90 = CP × 0.9. CP = £90 / 0.9 = £100.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Cost Price (10% Loss)", "100.00");
      }
    },
    {
      id: 'pl-profit-with-overheads',
      question: "A retailer buys goods for £200 and spends £20 on transport. If he sells them for £275, what is his profit percentage based on total cost?",
      questionType: 'text',
      options: [
        "25%",
        "27.5%",
        "22.5%",
        "30%"
      ],
      optionType: 'text',
      correct: 0, // Index of "25%"
      explanation: "Total Cost Price (CP) = Purchase Price + Overheads = £200 + £20 = £220. Selling Price (SP) = £275. Profit = SP - CP = £275 - £220 = £55. Profit% = (Profit / Total CP) × 100% = (£55 / £220) × 100% = 0.25 × 100% = 25%.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Profit Percentage (With Overheads)", "25");
      }
    }
  ]
};

const ProfitLoss: React.FC = () => {
  const profitLossRules = [
    "Cost Price (CP): Price paid to acquire goods.",
    "Selling Price (SP): Price at which goods are sold.",
    "Profit = SP - CP (if SP > CP).",
    "Loss = CP - SP (if CP > SP).",
    "Profit% = (Profit / CP) × 100%.",
    "Loss% = (Loss / CP) × 100%.",
    "SP = CP × (1 + Profit%/100).",
    "CP = SP / (1 + Profit%/100).",
    "Include overheads in total CP for accurate profit calculations."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Profit and Loss Calculations"
        icon="📈" // Or any other relevant icon like "💰" or "🏪"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={profitLossRules}
        rulesTitle="Profit & Loss Rules:"
        questions={[profitLossQuestion]} // Pass the question object
        renderSharedValuesSummary={renderProfitLossSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default ProfitLoss
