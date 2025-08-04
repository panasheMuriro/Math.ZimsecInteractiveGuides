/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderBaseArithmeticSummary = (sharedValues: { [key: string]: any }) => {
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
const baseArithmeticQuestion: MultiStepQuestion = {
  id: 'base-arithmetic-quiz',
  title: 'Adding and Subtracting in Number Bases',
  steps: [
    {
      id: 'ba-bin-add-rule',
      question: "What happens when you add $1 + 1$ in binary?",
      questionType: 'text',
      options: [
        "You get $2$",
        "You get $10_2$ and carry $1$",
        "You get $0$ and carry $1$",
        "You get $1$ and carry $0$"
      ],
      optionType: 'text',
      correct: 1, // Index of "You get $10_2$ and carry $1$"
      explanation: "In binary, the digits are only 0 and 1. Adding $1 + 1$ equals $2$ in decimal, which is represented as $10_2$ in binary. You write down $0$ and carry $1$ to the next column.",
      explanationType: 'text'
    },
    {
      id: 'ba-bin-add-example',
      question: "Calculate $1101_2 + 1011_2$.",
      questionType: 'text',
      options: [
        "$10100_2$",
        "$11000_2$",
        "$10010_2$",
        "$10110_2$"
      ],
      optionType: 'text',
      correct: 1, // Index of "$11000_2$"
      explanation: "Performing binary addition: $1+1=10$ (write 0, carry 1). $0+1+1=10$ (write 0, carry 1). $1+0+1=10$ (write 0, carry 1). $1+1+1=11$ (write 1, carry 1). Final carry is 1. Result is $11000_2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Binary Addition Result", "11000_2");
      }
    },
    {
      id: 'ba-base8-add-concept',
      question: "When adding digits in base 8, what do you do if the sum is 8 or greater?",
      questionType: 'text',
      options: [
        "You write the sum directly",
        "You subtract 8 and carry 1",
        "You divide the sum by 8, write the remainder, and carry the quotient",
        "You stop and convert to decimal"
      ],
      optionType: 'text',
      correct: 2, // Index of "You divide the sum by 8..."
      explanation: "When the sum of digits in any base is greater than or equal to that base, you perform division. You write down the remainder and carry the quotient to the next column. For base 8, if the sum is 8 or more, divide by 8.",
      explanationType: 'text'
    },
    {
      id: 'ba-bin-sub-example',
      question: "Calculate $1101_2 - 1011_2$.",
      questionType: 'text',
      options: [
        "$100_2$",
        "$10_2$",
        "$110_2$",
        "$1_2$"
      ],
      optionType: 'text',
      correct: 1, // Index of "$10_2$"
      explanation: "Performing binary subtraction: $1-1=0$. $0-1$ requires borrowing, so it becomes $10-1=1$. The next column $0$ (after lending) minus $0$ is $0$. The leftmost $1$ minus $1$ is $0$. Result is $0010_2$, which is $10_2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Binary Subtraction Result", "10_2");
      }
    },
    {
      id: 'ba-key-tip',
      question: "What is a crucial tip for performing arithmetic in different bases?",
      questionType: 'text',
      options: [
        "Always convert numbers to decimal first",
        "Remember that carrying and borrowing rules are based on the base itself",
        "Use a calculator for all steps",
        "Ignore the base and add/subtract like base 10"
      ],
      optionType: 'text',
      correct: 1, // Index of "Remember that carrying and borrowing..."
      explanation: "The key to base arithmetic is understanding that carrying (when the sum is greater than or equal to the base) and borrowing (adding the base value to a digit) are defined by the specific base you are working in.",
      explanationType: 'text'
    }
  ]
};

const BaseArithmeticQuiz: React.FC = () => {
  const baseArithmeticRules = [
    "Binary Addition: $0+0=0$, $0+1=1$, $1+0=1$, $1+1=10_2$ (carry 1).",
    "Binary Subtraction: $0-0=0$, $1-0=1$, $1-1=0$, $0-1=1$ (borrow 1, becomes $10_2-1=1$).",
    "Carrying: If sum of digits $\\geq$ base, divide sum by base. Write remainder, carry quotient.",
    "Borrowing: Add the base value to the current digit when borrowing from the next column.",
    "Always verify your answer by converting operands and result to base 10."
  ];

  return (
    <div className="flex justify-center items-center my-8">
      <MultipleStepInteractiveComponent
        title="Base Arithmetic Practice"
        icon="🔢"
        rules={baseArithmeticRules}
        rulesTitle="Arithmetic Rules:"
        questions={[baseArithmeticQuestion]}
        renderSharedValuesSummary={renderBaseArithmeticSummary}
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default BaseArithmeticQuiz;