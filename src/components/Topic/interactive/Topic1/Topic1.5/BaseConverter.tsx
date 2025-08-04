/* eslint-disable @typescript-eslint/no-explicit-any */
// BaseConverterQuestions.ts
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

// --- Helper Function for Summary ---
const renderBaseConverterSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No conversions performed yet.</p>;
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
const baseConverterQuestion: MultiStepQuestion = {
  id: 'base-converter-quiz',
  title: 'Base Converter',
  steps: [
    {
      id: 'bc-method-identify',
      question: "What is the general method to convert a decimal number to another base?",
      questionType: 'text',
      options: [
        "Multiply the number by the target base repeatedly",
        "Divide the number by the target base repeatedly and read the remainders from bottom to top",
        "Subtract the target base from the number repeatedly",
        "Add the target base to the number repeatedly"
      ],
      optionType: 'text',
      correct: 1, // Index of "Divide..."
      explanation: "To convert from base 10 to another base, you repeatedly divide the number by the target base and collect the remainders. The remainders, read from the last division to the first, form the number in the new base.",
      explanationType: 'text'
    },
    {
      id: 'bc-dec-to-bin',
      question: "Convert $11_{10}$ to binary ($base\\ 2$).",
      questionType: 'text',
      options: [
        "$1011_2$",
        "$1101_2$",
        "$1110_2$",
        "$1001_2$"
      ],
      optionType: 'text',
      correct: 0, // Index of "$1011_2$"
      explanation: "Divide by 2: $11\\div2=5\\ R1$, $5\\div2=2\\ R1$, $2\\div2=1\\ R0$, $1\\div2=0\\ R1$. Read remainders bottom to top: $1011_2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Decimal 11 to Binary", "1011_2");
      }
    },
    {
      id: 'bc-dec-to-oct',
      question: "Convert $65_{10}$ to octal ($base\\ 8$).",
      questionType: 'text',
      options: [
        "$101_8$",
        "$110_8$",
        "$102_8$",
        "$121_8$"
      ],
      optionType: 'text',
      correct: 0, // Index of "$101_8$"
      explanation: "Divide by 8: $65\\div8=8\\ R1$, $8\\div8=1\\ R0$, $1\\div8=0\\ R1$. Read remainders bottom to top: $101_8$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Decimal 65 to Octal", "101_8");
      }
    },
    {
      id: 'bc-hex-to-dec',
      question: "Convert $2B_{16}$ (hexadecimal) to decimal ($base\\ 10$). Remember, B represents 11.",
      questionType: 'text',
      options: [
        "$37_{10}$",
        "$43_{10}$",
        "$59_{10}$",
        "$75_{10}$"
      ],
      optionType: 'text',
      correct: 1, // Index of "$43_{10}$"
      explanation: "Use place values: $2B_{16} = 2 \\times 16^1 + 11 \\times 16^0 = 2 \\times 16 + 11 \\times 1 = 32 + 11 = 43_{10}$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Hex 2B to Decimal", "43_{10}");
      }
    },
    {
      id: 'bc-bin-to-hex',
      question: "What is a quick way to convert a binary number like $11010110_2$ to hexadecimal?",
      questionType: 'text',
      options: [
        "Add up all the binary digits",
        "Group the binary digits into sets of three from the right",
        "Group the binary digits into sets of four from the right",
        "Divide the binary number by 16"
      ],
      optionType: 'text',
      correct: 2, // Index of "Group... sets of four..."
      explanation: "A shortcut for converting binary to hexadecimal is to group the binary digits into sets of four, starting from the right. Each group of four binary digits corresponds to one hexadecimal digit.",
      explanationType: 'text'
    }
  ]
};

const BaseConverter: React.FC = () => {
  const baseConverterRules = [
    "To convert Decimal to Base N: Divide by N, record remainders, read remainders bottom-up.",
    "To convert Base N to Decimal: Multiply each digit by N^(position), sum the results.",
    "Shortcut - Binary to Octal: Group binary digits in threes from the right.",
    "Shortcut - Binary to Hexadecimal: Group binary digits in fours from the right.",
    "Remember Hex digits: A=10, B=11, C=12, D=13, E=14, F=15."
  ];

  return (
    <div className="flex justify-center items-center my-8">
      <MultipleStepInteractiveComponent
        title="Base Converter Practice"
        icon="🔄"
        rules={baseConverterRules}
        rulesTitle="Conversion Rules:"
        questions={[baseConverterQuestion]}
        renderSharedValuesSummary={renderBaseConverterSummary}
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default BaseConverter;