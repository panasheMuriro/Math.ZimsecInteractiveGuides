import { useState } from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { ChevronRight, Target } from "lucide-react";

const SmallNumbers = () => {
  const [currentNumber, setCurrentNumber] = useState<number>(0.005);
  const [steps, setSteps] = useState<Array<{title: string, content: string, math?: string}>>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [standardForm, setStandardForm] = useState<string>("5 \\times 10^{-3}");

  const numbers = [
    0.005,
    0.00034,
    0.000000072,
    0.0000000001,
    0.000000000000000000000000000000911,
    0.00007
  ];

  const generateSteps = (num: number) => {
    const numStr = num.toString();
    const trimmedStr = numStr.replace(/0+$/, ''); // Remove trailing zeros
    const firstNonZeroIndex = trimmedStr.search(/[1-9]/);
    const firstDigit = trimmedStr[firstNonZeroIndex];
    
    // Count decimal places to move
    let decimalPlaces = firstNonZeroIndex;
    if (numStr.startsWith("0.")) {
      decimalPlaces = firstNonZeroIndex - 1; // Adjust for "0." prefix
    }
    
    const exponent = -decimalPlaces;
    const standard = `${firstDigit} \\times 10^{${exponent}}`;
    
    setStandardForm(standard);
    
    const newSteps = [
      {
        title: "Identify the number",
        content: `We start with: ${num}`
      },
      {
        title: "Find the first non-zero digit",
        content: `The first significant digit is: ${firstDigit}`
      },
      {
        title: "Place decimal after first digit",
        content: `Position decimal point: ${firstDigit}.${trimmedStr.slice(firstNonZeroIndex + 1)}`
      },
      {
        title: "Count decimal places moved",
        content: `We moved the decimal point ${decimalPlaces} places to the right`
      },
      {
        title: "Write in standard form",
        content: `Standard form: ${num} = `,
        math: standard
      }
    ];
    
    setSteps(newSteps);
    setCurrentStep(0);
    setShowAnswer(false);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowAnswer(true);
    }
  };

  const newQuestion = () => {
    const randomNum = numbers[Math.floor(Math.random() * numbers.length)];
    setCurrentNumber(randomNum);
    generateSteps(randomNum);
  };

  const reset = () => {
    generateSteps(currentNumber);
  };

  // Initialize on first render
  useState(() => {
    generateSteps(currentNumber);
  });

  return (
    <div className="bg-purple-500 p-6 rounded-2xl text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold flex items-center">
          <Target className="mr-2" /> Small Numbers in Standard Form
        </h3>
      </div>

      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <div className="mb-4">
          <h4 className="font-bold text-lg mb-2">Convert to Standard Form:</h4>
          <p className="text-2xl font-mono bg-white/10 p-3 rounded-lg inline-block">
            {currentNumber}
          </p>
        </div>

        <div className="bg-white/10 rounded-lg p-4 mb-4 min-h-[120px]">
          {currentStep < steps.length ? (
            <>
              <h5 className="font-bold text-lg mb-2">{steps[currentStep].title}</h5>
              <p className="text-lg">
                {steps[currentStep].content}
                {steps[currentStep].math && (
                  <InlineMath math={steps[currentStep].math} />
                )}
              </p>
            </>
          ) : showAnswer ? (
            <>
              <h5 className="font-bold text-lg mb-2">Final Answer</h5>
              <p className="text-xl">
                <InlineMath math={standardForm} />
              </p>
            </>
          ) : null}
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm">
            Step {currentStep + 1} of {steps.length}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={reset}
              className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-sm"
            >
              Reset
            </button>
            <button
              onClick={newQuestion}
              className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-sm"
            >
              New Number
            </button>
          </div>
        </div>

        <button
          onClick={nextStep}
          disabled={showAnswer}
          className="w-full bg-white/30 hover:bg-white/40 disabled:bg-gray-400/30 rounded-lg p-3 font-bold transition-all duration-200 flex items-center justify-center"
        >
          {currentStep < steps.length - 1 ? (
            <>
              Next Step <ChevronRight className="ml-2" />
            </>
          ) : showAnswer ? (
            "Completed"
          ) : (
            "Show Answer"
          )}
        </button>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
        <h4 className="font-bold mb-2">Real-World Examples:</h4>
        <ul className="text-sm space-y-1">
          <li>• Size of an atom: <InlineMath math={"1 \\times 10^{-10}"} /> meters</li>
          <li>• Mass of an electron: <InlineMath math={"9.11 \\times 10^{-31}"} /> kg</li>
          <li>• Thickness of human hair: <InlineMath math={"7 \\times 10^{-5}"} /> meters</li>
        </ul>
      </div>
    </div>
  );
};

export default SmallNumbers;