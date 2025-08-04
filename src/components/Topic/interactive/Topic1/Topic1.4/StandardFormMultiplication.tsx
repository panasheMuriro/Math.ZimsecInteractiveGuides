/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';


const renderMultiplicationSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No calculations performed yet.</p>;
  }

  return (
    <ul className="space-y-2">
      {entries.map(([key, value]) => (
        <li key={key} className="flex justify-between items-center">
          <span style={{ color: '#264653' }}>{key}:</span>
          <span className="font-mono" style={{ color: '#264653' }}>{value}</span>
        </li>
      ))}
    </ul>
  );
};


const standardFormMultiplicationQuestion: MultiStepQuestion = {
  id: 'standard-form-multiplication-quiz',
  title: 'Multiplying in Standard Form',
  steps: [
    {
      id: 'sf-mult-rule',
      question: "What is the rule for multiplying two numbers in standard form: $(a \\times 10^m) \\times (b \\times 10^n)$?",
      questionType: 'text',
      options: [
        "$(a + b) \\times 10^{m \\times n}$",
        "$(a \\times b) \\times 10^{m \\times n}$",
        "$(a \\times b) \\times 10^{m + n}$",
        "$(a + b) \\times 10^{m + n}$"
      ],
      optionType: 'text',
      correct: 2, 
      explanation: "To multiply numbers in standard form, multiply the coefficients ($a \\times b$) and add the exponents ($m + n$)."
    },
    {
      id: 'sf-mult-simple',
      question: "Calculate $(2.5 \\times 10^4) \\times (3.0 \\times 10^2)$. Give your answer in standard form.",
      questionType: 'text',
      options: [
        "$7.5 \\times 10^8$",
        "$7.5 \\times 10^6$",
        "$5.5 \\times 10^6$",
        "$6.0 \\times 10^6$"
      ],
      optionType: 'text',
      correct: 1, 
      explanation: "Multiply coefficients: $2.5 \\times 3.0 = 7.5$. Add exponents: $4 + 2 = 6$. Result: $7.5 \\times 10^6$. This is already in standard form.",
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Simple Multiplication", "7.5 \\times 10^6");
      }
    },
    {
      id: 'sf-mult-adjust',
      question: "Calculate $(4.0 \\times 10^3) \\times (2.5 \\times 10^5)$. Give your answer in standard form.",
      questionType: 'text',
      options: [
        "$10.0 \\times 10^8$",
        "$1.0 \\times 10^8$",
        "$1.0 \\times 10^9$",
        "$10.0 \\times 10^9$"
      ],
      optionType: 'text',
      correct: 2, 
      explanation: "Multiply coefficients: $4.0 \\times 2.5 = 10.0$. Add exponents: $3 + 5 = 8$. Initial result: $10.0 \\times 10^8$. Since $10.0$ is not between 1 and 10, adjust it: $10.0 = 1.0 \\times 10^1$. So, $(1.0 \\times 10^1) \\times 10^8 = 1.0 \\times 10^{1+8} = 1.0 \\times 10^9$.",
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Adjusted Multiplication", "1.0 \\times 10^9");
      }
    },
    {
      id: 'sf-mult-negative',
      question: "Calculate $(6.0 \\times 10^{-2}) \\times (2.0 \\times 10^4)$. Give your answer in standard form.",
      questionType: 'text',
      options: [
        "$12.0 \\times 10^2$",
        "$1.2 \\times 10^2$",
        "$1.2 \\times 10^3$",
        "$12.0 \\times 10^6$"
      ],
      optionType: 'text',
      correct: 2, 
      explanation: "Multiply coefficients: $6.0 \\times 2.0 = 12.0$. Add exponents: $-2 + 4 = 2$. Initial result: $12.0 \\times 10^2$. Since $12.0$ is not between 1 and 10, adjust it: $12.0 = 1.2 \\times 10^1$. So, $(1.2 \\times 10^1) \\times 10^2 = 1.2 \\times 10^{1+2} = 1.2 \\times 10^3$.",
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Multiplication with Negatives", "1.2 \\times 10^3");
      }
    },
    {
      id: 'sf-mult-complex',
      question: "Calculate $(1.5 \\times 10^2) \\times (2.0 \\times 10^{-1}) \\times (4.0 \\times 10^3)$. Give your answer in standard form.",
      questionType: 'text',
      options: [
        "$12.0 \\times 10^4$",
        "$1.2 \\times 10^4$",
        "$1.2 \\times 10^5$",
        "$12.0 \\times 10^5$"
      ],
      optionType: 'text',
      correct: 2, 
      explanation: "Multiply coefficients: $1.5 \\times 2.0 \\times 4.0 = 12.0$. Add exponents: $2 + (-1) + 3 = 4$. Initial result: $12.0 \\times 10^4$. Since $12.0$ is not between 1 and 10, adjust it: $12.0 = 1.2 \\times 10^1$. So, $(1.2 \\times 10^1) \\times 10^4 = 1.2 \\times 10^{1+4} = 1.2 \\times 10^5$.",
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Complex Multiplication", "1.2 \\times 10^5");
      }
    }
  ]
};


export default function StandardFormMultiplication() {
  return (
    <>
    <MultipleStepInteractiveComponent
  title="Multiplying Numbers in Standard Form"
  icon="✖️" 
  rules={[
    "Rule: $(a \\times 10^m) \\times (b \\times 10^n) = (a \\times b) \\times 10^{m+n}$",
    "Step 1: Multiply the coefficients ($a \\times b$).",
    "Step 2: Add the exponents ($m + n$).",
    "Step 3: Ensure the coefficient is between 1 and 10 (adjust if needed)."
  ]}
  rulesTitle="Multiplication Rules:"
  questions={[standardFormMultiplicationQuestion]} 
  renderSharedValuesSummary={renderMultiplicationSummary} 
  
/>
    </>
  );
}
