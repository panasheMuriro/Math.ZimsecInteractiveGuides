/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, {
  MultiStepQuestion,
} from "../../Templates/MultipleStepInteractiveComponent";


const renderDivisionSummary = (sharedValues: { [key: string]: any }) => {
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


const standardFormDivisionQuestion: MultiStepQuestion = {
  id: "standard-form-division-quiz",
  title: "Dividing in Standard Form",
  steps: [
    {
      id: "sf-div-rule",
      question:
        "What is the rule for dividing two numbers in standard form: $(a \\times 10^m) \\div (b \\times 10^n)$?",
      questionType: "text",
      options: [
        "$(a - b) \\times 10^{m \\div n}$",
        "$(a \\div b) \\times 10^{m \\div n}$",
        "$(a \\div b) \\times 10^{m - n}$",
        "$(a - b) \\times 10^{m - n}$",
      ],
      optionType: "text",
      correct: 2, 
      explanation:
        "To divide numbers in standard form, divide the coefficients ($a \\div b$) and subtract the exponents ($m - n$).",
    },
    {
      id: "sf-div-simple",
      question:
        "Calculate $(9.6 \\times 10^5) \\div (2.4 \\times 10^2)$. Give your answer in standard form.",
      questionType: "text",
      options: [
        "$4.0 \\times 10^3$",
        "$4.0 \\times 10^7$",
        "$7.2 \\times 10^3$",
        "$7.2 \\times 10^7$",
      ],
      optionType: "text",
      correct: 0, 
      explanation:
        "Divide coefficients: $9.6 \\div 2.4 = 4.0$. Subtract exponents: $5 - 2 = 3$. Result: $4.0 \\times 10^3$. This is already in standard form.",
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Simple Division", "4.0 \\times 10^3");
      },
    },
    {
      id: "sf-div-adjust-coeff",
      question:
        "Calculate $(5.4 \\times 10^6) \\div (9.0 \\times 10^4)$. Give your answer in standard form.",
      questionType: "text",
      options: [
        "$0.6 \\times 10^2$",
        "$6.0 \\times 10^1$",
        "$6.0 \\times 10^2$",
        "$0.6 \\times 10^1$",
      ],
      optionType: "text",
      correct: 1, 
      explanation:
        "Divide coefficients: $5.4 \\div 9.0 = 0.6$. Subtract exponents: $6 - 4 = 2$. Initial result: $0.6 \\times 10^2$. Since $0.6$ is not between 1 and 10, adjust it: $0.6 = 6.0 \\times 10^{-1}$. So, $(6.0 \\times 10^{-1}) \\times 10^2 = 6.0 \\times 10^{-1+2} = 6.0 \\times 10^1$.",
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Division (Adjust Coefficient)", "6.0 \\times 10^1");
      },
    },
    {
      id: "sf-div-negative-exp",
      question:
        "Calculate $(2.0 \\times 10^3) \\div (4.0 \\times 10^{-2})$. Give your answer in standard form.",
      questionType: "text",
      options: [
        "$0.5 \\times 10^5$",
        "$5.0 \\times 10^4$",
        "$5.0 \\times 10^5$",
        "$0.5 \\times 10^4$",
      ],
      optionType: "text",
      correct: 1, 
      explanation:
        "Divide coefficients: $2.0 \\div 4.0 = 0.5$. Subtract exponents: $3 - (-2) = 3 + 2 = 5$. Initial result: $0.5 \\times 10^5$. Since $0.5$ is not between 1 and 10, adjust it: $0.5 = 5.0 \\times 10^{-1}$. So, $(5.0 \\times 10^{-1}) \\times 10^5 = 5.0 \\times 10^{-1+5} = 5.0 \\times 10^4$.",
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Division (Negative Exponent)", "5.0 \\times 10^4");
      },
    },
    {
      id: "sf-div-decimal-coeff",
      question:
        "Calculate $(8.4 \\times 10^{-1}) \\div (2.1 \\times 10^2)$. Give your answer in standard form.",
      questionType: "text",
      options: [
        "$4.0 \\times 10^{-3}$",
        "$4.0 \\times 10^1$",
        "$4.0 \\times 10^3$",
        "$4.0 \\times 10^{-1}$",
      ],
      optionType: "text",
      correct: 0, 
      explanation:
        "Divide coefficients: $8.4 \\div 2.1 = 4.0$. Subtract exponents: $-1 - 2 = -3$. Result: $4.0 \\times 10^{-3}$. This is already in standard form.",
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Division (Decimal Coefficient)", "4.0 \\times 10^{-3}");
      },
    },
  ],
};

export default function StandardFormDivision() {
  return (
    <>
      <MultipleStepInteractiveComponent
        title="Dividing Numbers in Standard Form"
        icon="➗" 
        rules={[
          "Rule: $(a \\times 10^m) \\div (b \\times 10^n) = (a \\div b) \\times 10^{m-n}$",
          "Step 1: Divide the coefficients ($a \\div b$).",
          "Step 2: Subtract the exponents ($m - n$).",
          "Step 3: Ensure the coefficient is between 1 and 10 (adjust if needed).",
          "Remember: Subtracting a negative exponent means adding its absolute value.",
        ]}
        rulesTitle="Division Rules:"
        questions={[standardFormDivisionQuestion]} 
        renderSharedValuesSummary={renderDivisionSummary} 
        
      />
    </>
  );
}
