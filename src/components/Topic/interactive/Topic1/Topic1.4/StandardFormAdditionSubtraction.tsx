/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, {
  MultiStepQuestion,
} from "../../Templates/MultipleStepInteractiveComponent";

const renderAddSubSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: "#264653" }}>No calculations performed yet.</p>;
  }

  return (
    <ul className="space-y-2">
      {entries.map(([key, value]) => (
        <li key={key} className="flex justify-between items-center">
          <span style={{ color: "#264653" }}>{key}:</span>
          <span className="font-mono" style={{ color: "#264653" }}>
            {value}
          </span>
        </li>
      ))}
    </ul>
  );
};


const standardFormAddSubQuestion: MultiStepQuestion = {
  id: "standard-form-addsub-quiz",
  title: "Adding and Subtracting in Standard Form",
  steps: [
    {
      id: "sf-addsub-method",
      question:
        "What is the main principle for adding or subtracting numbers in standard form?",
      questionType: "text",
      options: [
        "Add or subtract the coefficients and the exponents separately",
        "Convert both numbers to ordinary form, perform the operation, then convert back",
        "Ensure the powers of 10 are the same, then add or subtract the coefficients",
        "Multiply one number by a power of 10 to make the exponents match",
      ],
      optionType: "text",
      correct: 2, 
      explanation:
        "To add or subtract numbers in standard form, the indices (powers of 10) must be the same. You then add or subtract the coefficients (the numbers in front) and keep the common power of 10.",
    },
    {
      id: "sf-add-same-power",
      question:
        "Calculate $(4.5 \\times 10^3) + (2.1 \\times 10^3)$. Give your answer in standard form.",
      questionType: "text",
      options: [
        "$6.6 \\times 10^6$",
        "$6.6 \\times 10^3$",
        "$2.4 \\times 10^3$",
        "$2.4 \\times 10^0$",
      ],
      optionType: "text",
      correct: 1, 
      explanation:
        "The powers of 10 are the same ($10^3$). Add the coefficients: $4.5 + 2.1 = 6.6$. Keep the power of 10: $6.6 \\times 10^3$. This is already in standard form.",
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Addition (Same Power)", "6.6 \\times 10^3");
      },
    },
    {
      id: "sf-add-diff-power",
      question:
        "Calculate $(6.2 \\times 10^5) + (3.4 \\times 10^4)$. Give your answer in standard form.",
      questionType: "text",
      options: [
        "$9.6 \\times 10^9$",
        "$6.54 \\times 10^5$",
        "$9.6 \\times 10^5$",
        "$65.4 \\times 10^4$",
      ],
      optionType: "text",
      correct: 1, 
      explanation:
        "The powers are different ($10^5$ and $10^4$). Adjust one number to match the other. Convert $3.4 \\times 10^4$ to $0.34 \\times 10^5$. Now add coefficients: $6.2 + 0.34 = 6.54$. Result: $6.54 \\times 10^5$. This is in standard form.",
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Addition (Different Power)", "6.54 \\times 10^5");
      },
    },
    {
      id: "sf-subtract-example",
      question:
        "Calculate $(8.7 \\times 10^6) - (2.9 \\times 10^5)$. Give your answer in standard form.",
      questionType: "text",
      options: [
        "$5.8 \\times 10^6$",
        "$8.41 \\times 10^6$",
        "$8.41 \\times 10^5$",
        "$84.1 \\times 10^5$",
      ],
      optionType: "text",
      correct: 1, 
      explanation:
        "Make exponents the same. Convert $2.9 \\times 10^5$ to $0.29 \\times 10^6$. Now subtract coefficients: $8.7 - 0.29 = 8.41$. Result: $8.41 \\times 10^6$. This is in standard form.",
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Subtraction Example", "8.41 \\times 10^6");
      },
    },
    {
      id: "sf-negative-power",
      question:
        "Calculate $(5.1 \\times 10^{-3}) + (2.4 \\times 10^{-4})$. Give your answer in standard form.",
      questionType: "text",
      options: [
        "$7.5 \\times 10^{-7}$",
        "$5.34 \\times 10^{-3}$",
        "$7.5 \\times 10^{-3}$",
        "$53.4 \\times 10^{-4}$",
      ],
      optionType: "text",
      correct: 1, 
      explanation:
        "Adjust powers. Convert $2.4 \\times 10^{-4}$ to $0.24 \\times 10^{-3}$. Add coefficients: $5.1 + 0.24 = 5.34$. Result: $5.34 \\times 10^{-3}$. This is in standard form.",
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Addition (Negative Powers)", "5.34 \\times 10^{-3}");
      },
    },
  ],
};

export default function StandardFormAdditionSubtraction() {
  return (
    <>
      <MultipleStepInteractiveComponent
        title="Adding and Subtracting in Standard Form"
        icon="➕" 
        rules={[
          "Main Principle: Make the powers of 10 the same.",
          "If powers are the same: Add/Subtract coefficients directly.",
          "If powers are different: Adjust one number so the powers match.",
          "Always ensure the final answer is in standard form ($1 \\leq a < 10$).",
        ]}
        rulesTitle="Addition/Subtraction Rules:"
        questions={[standardFormAddSubQuestion]} 
        renderSharedValuesSummary={renderAddSubSummary} 
        
      />
    </>
  );
}
