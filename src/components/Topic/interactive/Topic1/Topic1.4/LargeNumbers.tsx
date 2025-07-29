import { useState } from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { ChevronRight, Target } from "lucide-react";

const LargeNumbers = () => {
  const [currentNumber, setCurrentNumber] = useState<number>(5000000);
  const [steps, setSteps] = useState<Array<{title: string, content: string, math?: string}>>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [standardForm, setStandardForm] = useState<string>("5 \\times 10^6");

  const numbers = [
    5000000,
    340000000,
    7200000000,
    5970000000000000000000000,
    300000000,
    8000000000
  ];

  const generateSteps = (num: number) => {
    const numStr = num.toString();
    const firstDigit = numStr[0];
    const exponent = numStr.length - 1;
    const standard = `${firstDigit} \\times 10^{${exponent}}`;
    
    setStandardForm(standard);
    
    const newSteps = [
      {
        title: "Identify the number",
        content: `We start with: ${num.toLocaleString()}`
      },
      {
        title: "Find the first non-zero digit",
        content: `The first significant digit is: ${firstDigit}`
      },
      {
        title: "Place decimal after first digit",
        content: `Position decimal point: ${firstDigit}.${numStr.slice(1)}`
      },
      {
        title: "Count decimal places moved",
        content: `We moved the decimal point ${exponent} places to the left`
      },
      {
        title: "Write in standard form",
        content: `Standard form: ${num.toLocaleString()} = `,
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
    <div className="bg-blue-500 p-6 rounded-2xl text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold flex items-center">
          <Target className="mr-2" /> Large Numbers in Standard Form
        </h3>
      </div>

      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <div className="mb-4">
          <h4 className="font-bold text-lg mb-2">Convert to Standard Form:</h4>
          <p className="text-2xl font-mono bg-white/10 p-3 rounded-lg inline-block">
            {currentNumber.toLocaleString()}
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
          <li>• Earth's mass: <InlineMath math={"5.97 \\times 10^{24}"} /> kg</li>
          <li>• Speed of light: <InlineMath math={"3 \\times 10^8"} /> m/s</li>
          <li>• World population: <InlineMath math={"8 \\times 10^9"} /> people</li>
        </ul>
      </div>
    </div>
  );
};

export default LargeNumbers;