// ForeignExchangeInteractiveComponent.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from "../../Templates/MultipleChoiceInteractiveComponent"; // Adjust path

const foreignExchangeQuestions: QuizQuestion[] = [
  {
    // Question text uses renderTextWithMath, so questionType is 'text'
    question: "Convert $100 USD to ZWL at rate 1 USD = 350 ZWL.",
    options: [
      "35,000 ZWL",
      "3,500 ZWL",
      "350,000 ZWL",
      "350 ZWL"
    ],
    correct: 0,
    // Explanation text uses renderTextWithMath, so explanationType is 'text'
    explanation: "Amount in ZWL = Amount in USD × Exchange Rate = $100 × 350 = 35,000 ZWL.",
    explanationType: 'text', // Tell the component to use renderTextWithMath for the explanation
    questionType: 'text',    // Tell the component to use renderTextWithMath for the question
    optionType: 'text'       // Tell the component to use renderTextWithMath for the options
  },
  {
    question: "If the exchange rate is 1 GBP = 1.30 USD, how much is £200 GBP in USD?",
    options: [
      "$260 USD",
      "$153.85 USD",
      "$200 USD",
      "$330 USD"
    ],
    correct: 0,
    explanation: "Amount in USD = Amount in GBP × Exchange Rate = £200 × 1.30 = $260 USD.",
    explanationType: 'text',
    questionType: 'text',
    optionType: 'text'
  },
  {
    question: "A bank sells EUR at a rate of 1 EUR = 1.10 USD. How much USD do you get for 500 EUR?",
    options: [
      "$550 USD",
      "$454.55 USD",
      "$500 USD",
      "$610 USD"
    ],
    correct: 0,
    explanation: "Using the selling rate: Amount in USD = Amount in EUR × Selling Rate = 500 EUR × 1.10 = $550 USD.",
    explanationType: 'text',
    questionType: 'text',
    optionType: 'text'
  },
  {
    question: "If 1 USD = 0.85 EUR, how much is $425 USD in EUR?",
    options: [
      "361.25 EUR",
      "500 EUR",
      "425 EUR",
      "382.50 EUR"
    ],
    correct: 0,
    explanation: "Amount in EUR = Amount in USD × Exchange Rate = $425 × 0.85 = 361.25 EUR.",
    explanationType: 'text',
    questionType: 'text',
    optionType: 'text'
  }
];

const ForeignExchange: React.FC = () => {
  return (
    <MultipleChoiceInteractiveComponent
      title="Foreign Exchange and Currency"
      icon="💱"
      theme={{
        from: "from-emerald-600",
        to: "to-teal-700",
        button: "bg-teal-600",
        buttonHover: "hover:bg-teal-700",
      }}
      rules={[
        "Amount in Quote Currency = Amount in Base Currency $\\times$ Exchange Rate",
        "Base Currency: Currency being converted from",
        "Quote Currency: Currency being converted to"
        // Note: Rules are always rendered with renderTextWithMath, so KaTeX delimiters like \\( and \\) or $...$ work.
      ]}
      questions={foreignExchangeQuestions}
    />
  );
};

export default ForeignExchange;