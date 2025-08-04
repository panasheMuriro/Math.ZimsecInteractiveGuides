import { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { ChevronRight, Target, RotateCw } from "lucide-react";

// Neubrutalism color palette
const NEUBRUTALISM_COLORS = {
  primaryDark: '#264653',    // Dark teal
  secondary: '#2a9d8f',      // Teal
  neutral: '#e9c46a',        // Sand yellow
  warning: '#f4a261',        // Orange
  danger: '#e76f51',         // Salmon
  white: '#ffffff',
  lightGray: '#f0f0f0',
  borderGray: '#d0d0d0',
  shadowGray: 'rgba(0, 0, 0, 0.2)',
};

// Neubrutalism styles helper
const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.borderGray}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadowGray}`,
  padding: '1rem',
};

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
  useEffect(() => {
    generateSteps(currentNumber);
  }, []);

  return (
    <div style={{
      ...neubrutalismBase,
      maxWidth: '600px',
      width: '100%',
      margin: '0 auto',
      padding: '1.5rem',
      backgroundColor: NEUBRUTALISM_COLORS.secondary,
      border: `4px solid ${NEUBRUTALISM_COLORS.primaryDark}`,
      borderRadius: '20px',
      boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.primaryDark}`,
      color: NEUBRUTALISM_COLORS.white,
    }}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-extrabold flex items-center" style={{ color: NEUBRUTALISM_COLORS.white }}>
          <Target className="mr-2" size={28} /> Large Numbers in Standard Form
        </h3>
        <button
          onClick={newQuestion}
          style={{
            ...neubrutalismBase,
            backgroundColor: NEUBRUTALISM_COLORS.danger,
            borderColor: NEUBRUTALISM_COLORS.white,
            padding: '0.5rem',
          }}
          aria-label="New question"
        >
          <RotateCw className="w-5 h-5" style={{ color: NEUBRUTALISM_COLORS.white }} />
        </button>
      </div>

      <div style={{
        ...neubrutalismBase,
        backgroundColor: NEUBRUTALISM_COLORS.neutral,
        borderColor: NEUBRUTALISM_COLORS.primaryDark,
        marginBottom: '1.25rem',
      }}>
        <div className="mb-4">
          <h4 className="font-extrabold text-lg mb-2" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
            Convert to Standard Form:
          </h4>
          <p style={{
            ...neubrutalismBase,
            backgroundColor: NEUBRUTALISM_COLORS.lightGray,
            borderColor: NEUBRUTALISM_COLORS.primaryDark,
            color: NEUBRUTALISM_COLORS.primaryDark,
            fontFamily: 'monospace',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            padding: '0.75rem',
            textAlign: 'center',
          }}>
            {currentNumber.toLocaleString()}
          </p>
        </div>

        <div style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.lightGray,
          borderColor: NEUBRUTALISM_COLORS.primaryDark,
          minHeight: '150px',
          marginBottom: '1.25rem',
        }}>
          {currentStep < steps.length ? (
            <>
              <h5 className="font-extrabold text-lg mb-2" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                {steps[currentStep].title}
              </h5>
              <p className="text-lg" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                {steps[currentStep].content}
                {steps[currentStep].math && (
                  <BlockMath math={steps[currentStep].math} />
                )}
              </p>
            </>
          ) : showAnswer ? (
            <>
              <h5 className="font-extrabold text-lg mb-2" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                Final Answer
              </h5>
              <div style={{ textAlign: 'center' }}>
                <BlockMath math={standardForm} />
              </div>
            </>
          ) : null}
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-bold" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
            Step {currentStep + 1} of {steps.length}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={reset}
              style={{
                ...neubrutalismBase,
                backgroundColor: NEUBRUTALISM_COLORS.lightGray,
                borderColor: NEUBRUTALISM_COLORS.primaryDark,
                color: NEUBRUTALISM_COLORS.primaryDark,
                fontWeight: 'bold',
                fontSize: '0.875rem',
                padding: '0.5rem 1rem',
              }}
            >
              Reset
            </button>
          </div>
        </div>

        <button
          onClick={nextStep}
          disabled={showAnswer}
          style={{
            ...neubrutalismBase,
            width: '100%',
            padding: '0.75rem',
            fontWeight: 'bold',
            backgroundColor: showAnswer ? NEUBRUTALISM_COLORS.secondary : NEUBRUTALISM_COLORS.warning,
            borderColor: NEUBRUTALISM_COLORS.primaryDark,
            color: NEUBRUTALISM_COLORS.white,
            cursor: showAnswer ? 'not-allowed' : 'pointer',
          }}
        >
          {currentStep < steps.length - 1 ? (
            <span className="flex items-center justify-center">
              Next Step <ChevronRight className="ml-2" size={20} />
            </span>
          ) : showAnswer ? (
            "Completed"
          ) : (
            "Show Answer"
          )}
        </button>
      </div>

      <div style={{
        ...neubrutalismBase,
        backgroundColor: NEUBRUTALISM_COLORS.neutral,
        borderColor: NEUBRUTALISM_COLORS.primaryDark,
        fontSize: '0.875rem',
      }}>
        <h4 className="font-extrabold mb-2" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
          Real-World Examples:
        </h4>
        <ul className="space-y-1" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
          <li>• Earth's mass: <InlineMath math={"5.97 \\times 10^{24}"} /> kg</li>
          <li>• Speed of light: <InlineMath math={"3 \\times 10^8"} /> m/s</li>
          <li>• World population: <InlineMath math={"8 \\times 10^9"} /> people</li>
        </ul>
      </div>
    </div>
  );
};

export default LargeNumbers;