/* eslint-disable @typescript-eslint/no-explicit-any */
// ConsumerArithmeticQuiz.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

// --- Helper Function for Summary ---
const renderConsumerArithmeticSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No calculations performed yet.</p>;
  }

  return (
    <ul className="space-y-2">
      {entries.map(([key, value]) => (
        <li key={key} className="flex justify-between items-center">
          <span style={{ color: '#264653' }}>{key}:</span>
          <span className="font-mono" style={{ color: '#264653' }}>£{parseFloat(value).toFixed(2)}</span>
        </li>
      ))}
    </ul>
  );
};

// --- The Question Data ---
const consumerArithmeticQuestion: MultiStepQuestion = {
  id: 'consumer-arithmetic-quiz',
  title: 'Consumer Arithmetic and Discounts',
  steps: [
    {
      id: 'ca-discount-amount',
      question: "A coat is marked at £80. It has a discount of 15%. How much is the discount?",
      questionType: 'text',
      options: [
        "£10",
        "£12",
        "£15",
        "£68"
      ],
      optionType: 'text', // Options are plain text currency values
      correct: 1, // Index of "£12"
      explanation: "Discount = Marked Price × (Discount % / 100) Discount = £80 × (15 / 100) = £80 × 0.15 = £12.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Discount Amount (15%)", "12.00");
      }
    },
    {
      id: 'ca-final-price-single-discount',
      question: "A pair of jeans costs £65. There is a 20% discount. What is the final price?",
      questionType: 'text',
      options: [
        "£13",
        "£50",
        "£52",
        "£78"
      ],
      optionType: 'text',
      correct: 2, // Index of "£52"
      explanation: "First, find the discount: £65 × (20 / 100) = £65 × 0.20 = £13. Final Price = Marked Price - Discount = £65 - £13 = £52.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Final Price (Single Discount)", "52.00");
      }
    },
    {
      id: 'ca-final-price-multiple-discounts',
      question: "A gadget costs £120. It has a 10% discount followed by a further 5% discount on the new price. What is the final price?",
      questionType: 'text',
      options: [
        "£102.60",
        "£108.00",
        "£114.00",
        "£102.00"
      ],
      optionType: 'text',
      correct: 0, // Index of "£102.60"
      explanation: "Apply the first discount: £120 × (10 / 100) = £12. New price = £120 - £12 = £108. Apply the second discount: £108 × (5 / 100) = £5.40. Final Price = £108 - £5.40 = £102.60.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Final Price (Multiple Discounts)", "102.60");
      }
    },
    {
      id: 'ca-find-original-price',
      question: "After a 25% discount, a book costs £22.50. What was its original marked price?",
      questionType: 'text',
      options: [
        "£28.13",
        "£30.00",
        "£29.00",
        "£27.50"
      ],
      optionType: 'text',
      correct: 1, // Index of "£30.00"
      explanation: "Let the Marked Price be MP. Final Price = MP - (MP × 25/100) = MP × (1 - 0.25) = MP × 0.75. We know Final Price = £22.50. So, MP × 0.75 = £22.50. MP = £22.50 / 0.75 = £30.00.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Original Marked Price", "30.00");
      }
    }
  ]
};

const ConsumerArithmeticQuiz: React.FC = () => {
  const consumerRules = [
    "Cost Price (CP): Original price paid.",
    "Marked Price (MP): Listed price before discounts.",
    "Selling Price (SP) / Final Price: Price after discount.",
    "Discount = MP - SP.",
    "Discount % = (Discount / MP) × 100%.",
    "Final Price = MP - (MP × Discount %).",
    "For multiple discounts, apply them sequentially to the new price."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Consumer Arithmetic and Discounts"
        icon="💷" // Or any other relevant icon like "🛍️" or "💰"
        rules={consumerRules}
        rulesTitle="Consumer Arithmetic Rules:"
        questions={[consumerArithmeticQuestion]} // Pass the question object
        renderSharedValuesSummary={renderConsumerArithmeticSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default ConsumerArithmeticQuiz