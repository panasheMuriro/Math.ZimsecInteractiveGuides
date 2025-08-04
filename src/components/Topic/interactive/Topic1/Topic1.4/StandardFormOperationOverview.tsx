/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderOperationsSummary = (sharedValues: { [key: string]: any }) => {
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

// --- The Question Data ---
const standardFormOperationsQuestion: MultiStepQuestion = {
  id: 'standard-form-operations-quiz',
  title: 'Operations in Standard Form',
  steps: [
    {
      id: 'sf-mult-principle',
      question: "What is the first step when multiplying $(a \\times 10^m) \\times (b \\times 10^n)$?",
      questionType: 'text',
      options: [
        "Add the coefficients $a$ and $b$",
        "Multiply the coefficients $a$ and $b$, then add the exponents $m$ and $n$",
        "Multiply the coefficients $a$ and $b$, then multiply the exponents $m$ and $n$",
        "Add the coefficients $a$ and $b$, then add the exponents $m$ and $n$"
      ],
      optionType: 'text',
      correct: 1, // Index of "Multiply the coefficients..."
      explanation: "According to the rules of indices, $(a \\times 10^m) \\times (b \\times 10^n) = (a \\times b) \\times (10^m \\times 10^n) = (a \\times b) \\times 10^{m+n}$."
    },
    {
      id: 'sf-div-principle',
      question: "What is the first step when dividing $(a \\times 10^m) \\div (b \\times 10^n)$?",
      questionType: 'text',
      options: [
        "Subtract the coefficients $a$ and $b$, then subtract the exponents $m$ and $n$",
        "Divide the coefficients $a$ and $b$, then multiply the exponents $m$ and $n$",
        "Subtract the coefficients $a$ and $b$, then divide the exponents $m$ and $n$",
        "Divide the coefficients $a$ and $b$, then subtract the exponents $m$ and $n$"
      ],
      optionType: 'text',
      correct: 3, // Index of "Divide the coefficients..."
      explanation: "According to the rules of indices, $(a \\times 10^m) \\div (b \\times 10^n) = (a \\div b) \\times (10^m \\div 10^n) = (a \\div b) \\times 10^{m-n}$."
    },
    {
      id: 'sf-add-principle',
      question: "How do you add or subtract numbers in standard form?",
      questionType: 'text',
      options: [
        "Add or subtract the coefficients and add or subtract the exponents",
        "Multiply the coefficients and add the exponents",
        "Convert them to ordinary numbers, perform the operation, then convert back to standard form",
        "Ensure the exponents are the same, then add or subtract the coefficients"
      ],
      optionType: 'text',
      correct: 3, // Index of "Ensure the exponents are the same..."
      explanation: "To add or subtract numbers in standard form, the powers of 10 must be the same. You adjust one or both numbers so they have the same exponent, then add or subtract the coefficients."
    },
    {
      id: 'sf-mult-example',
      question: "Calculate $(2 \\times 10^4) \\times (3 \\times 10^5)$. Give your answer in standard form.",
      questionType: 'text',
      options: [
        "$6 \\times 10^{20}$",
        "$6 \\times 10^9$",
        "$5 \\times 10^9$",
        "$6 \\times 10^{1.8}$"
      ],
      optionType: 'text',
      correct: 1, // Index of "$6 \\times 10^9$"
      explanation: "Multiply coefficients: $2 \\times 3 = 6$. Add exponents: $4 + 5 = 9$. Result: $6 \\times 10^9$. This is already in standard form.",
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Multiplication Result", "6 \\times 10^9");
      }
    },
    {
      id: 'sf-div-example',
      question: "Calculate $(8 \\times 10^6) \\div (2 \\times 10^3)$. Give your answer in standard form.",
      questionType: 'text',
      options: [
        "$4 \\times 10^3$",
        "$4 \\times 10^2$",
        "$6 \\times 10^3$",
        "$4 \\times 10^9$"
      ],
      optionType: 'text',
      correct: 0, // Index of "$4 \\times 10^3$"
      explanation: "Divide coefficients: $8 \\div 2 = 4$. Subtract exponents: $6 - 3 = 3$. Result: $4 \\times 10^3$. This is already in standard form.",
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Division Result", "4 \\times 10^3");
      }
    },
    {
      id: 'sf-add-example',
      question: "Calculate $(3 \\times 10^4) + (5 \\times 10^3)$. Give your answer in standard form.",
      questionType: 'text',
      options: [
        "$8 \\times 10^7$",
        "$8 \\times 10^4$",
        "$3.5 \\times 10^4$",
        "$35 \\times 10^3$"
      ],
      optionType: 'text',
      correct: 2, // Index of "$3.5 \\times 10^4$"
      explanation: "First, make exponents the same. Convert $5 \\times 10^3$ to $0.5 \\times 10^4$. Now add coefficients: $3 + 0.5 = 3.5$. Result: $3.5 \\times 10^4$. This is in standard form.",
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Addition Result", "3.5 \\times 10^4");
      }
    }
  ]
};


export default function StandardFormOperationOverview() {
  return (
    <>
    <MultipleStepInteractiveComponent
  title="Operations in Standard Form Practice"
  icon="✖️" // Or any other relevant icon
  rules={[
    "For multiplication: $(a \\times 10^m) \\times (b \\times 10^n) = (a \\times b) \\times 10^{m+n}$",
    "For division: $(a \\times 10^m) \\div (b \\times 10^n) = (a \\div b) \\times 10^{m-n}$",
    "For addition/subtraction: Make exponents the same, then add/subtract coefficients.",
    "Ensure the final answer is in standard form ($1 \\leq a < 10$)."
  ]}
  rulesTitle="Operation Rules:"
  questions={[standardFormOperationsQuestion]} // Pass the question object
  renderSharedValuesSummary={renderOperationsSummary} // Pass the summary renderer
  // initialSharedValues, onReset if needed
/>
    
    </>
  );
}
