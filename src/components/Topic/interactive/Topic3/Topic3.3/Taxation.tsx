// TaxationInteractiveComponent.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from "../../Templates/MultipleChoiceInteractiveComponent";

const taxationQuestions: QuizQuestion[] = [
  {
    question: "Calculate the VAT on a product priced at £200 with a VAT rate of 15%.",
    options: [
      "£30",
      "£230",
      "£170",
      "£15"
    ],
    correct: 0,
    explanation: "VAT = Price × VAT Rate = £200 × 0.15 = £30.",
    explanationType: 'text',
    questionType: 'text',
    optionType: 'text'
  },
  {
    question: "An imported car costs £10,000. Customs duty is 30% and VAT is 15%. What is the total cost?",
    options: [
      "£14,950",
      "£15,000",
      "£13,000",
      "£11,950"
    ],
    correct: 0,
    explanation: "Duty = £10,000 × 0.30 = £3,000. Duty-inclusive value = £10,000 + £3,000 = £13,000. VAT = £13,000 × 0.15 = £1,950. Total cost = £13,000 + £1,950 = £14,950.",
    explanationType: 'text',
    questionType: 'text',
    optionType: 'text'
  },
  {
    question: "Calculate the income tax for someone earning £520 with these tax brackets: First £300 at 0%, next £200 at 10%, above £500 at 25%.",
    options: [
      "£25",
      "£35",
      "£15",
      "£45"
    ],
    correct: 0,
    explanation: "Taxable Income = £520. Tax on first £300: £0. Tax on next £200 (up to £500): £200 × 0.10 = £20. Tax on remaining £20 (above £500): £20 × 0.25 = £5. Total Income Tax = £0 + £20 + £5 = £25.",
    explanationType: 'text',
    questionType: 'text',
    optionType: 'text'
  },
  {
    question: "A product costs £150 excluding VAT. If VAT is 20%, what is the total price?",
    options: [
      "£180",
      "£170",
      "£160",
      "£190"
    ],
    correct: 0,
    explanation: "VAT = £150 × 0.20 = £30. Total Price = £150 + £30 = £180.",
    explanationType: 'text',
    questionType: 'text',
    optionType: 'text'
  }
];

const Taxation: React.FC = () => {
  return (
    <MultipleChoiceInteractiveComponent
      title="Taxation Systems"
      icon="💸"
      theme={{
        from: "from-green-600",
        to: "to-emerald-700",
        button: "bg-emerald-600",
        buttonHover: "hover:bg-emerald-700",
      }}
      rules={[
        "VAT = Price \\( \\times \\) VAT Rate",
        "Total Cost = Price + VAT",
        "Income Tax calculated using progressive brackets"
      ]}
      questions={taxationQuestions}
    />
  );
};

export default Taxation;