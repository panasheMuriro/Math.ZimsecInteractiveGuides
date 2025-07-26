import React, { useState } from 'react';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const AddSubtractTermsPractice: React.FC = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const expression = '4m + 5n - m + 2n';
  const correctAnswer = '3m + 7n';

  const steps = [
    {
      description: 'Identify like terms in the expression.',
      math: '4m \\text{ and } -m \\text{ are like terms (same variable } m\\text{, same power 1)}; \\quad 5n \\text{ and } 2n \\text{ are like terms (same variable } n\\text{, same power 1)}.',
    },
    {
      description: 'Combine the coefficients of the \\(m\\) terms: \\(4m - m\\).',
      math: '4 - 1 = 3 \\quad \\text{so} \\quad 4m - m = 3m',
    },
    {
      description: 'Combine the coefficients of the \\(n\\) terms: \\(5n + 2n\\).',
      math: '5 + 2 = 7 \\quad \\text{so} \\quad 5n + 2n = 7n',
    },
    {
      description: 'Write the simplified expression.',
      math: '3m + 7n',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
    setShowFeedback(false);
  };

  const handleCheck = () => {
    const normalizedUserAnswer = userAnswer
      .replace(/\s+/g, '')
      .toLowerCase()
      .split('+')
      .sort()
      .join('+');
    const normalizedCorrectAnswer = correctAnswer
      .replace(/\s+/g, '')
      .toLowerCase()
      .split('+')
      .sort()
      .join('+');

    const isAnswerCorrect = normalizedUserAnswer === normalizedCorrectAnswer;
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
  };

  const handleReset = () => {
    setUserAnswer('');
    setShowFeedback(false);
    setShowSteps(false);
    setCurrentStep(0);
  };

  const toggleSteps = () => {
    setShowSteps(!showSteps);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center break-words whitespace-normal">
        Add and Subtract Like Terms
      </h2>
      <div className="text-gray-600 mb-4 text-sm text-center break-words whitespace-normal">
        Simplify the expression: <BlockMath math={expression} />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={userAnswer}
          onChange={handleInputChange}
          placeholder="Enter simplified expression (e.g., 3m + 7n)"
          className="w-full p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-between mb-4">
        <button
          onClick={handleCheck}
          className="flex-1 mr-2 bg-green-500 text-white py-2 rounded-lg text-sm hover:bg-green-600 transition-colors disabled:bg-gray-300"
          disabled={!userAnswer}
        >
          Check Answer
        </button>
        <button
          onClick={handleReset}
          className="flex-1 ml-2 bg-gray-300 text-gray-800 py-2 rounded-lg text-sm hover:bg-gray-400 transition-colors"
        >
          Reset
        </button>
      </div>
      <div className="mb-4">
        <button
          onClick={toggleSteps}
          className="w-full flex items-center justify-center bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors"
        >
          <HelpCircle className="w-5 h-5 mr-2" />
          {showSteps ? 'Hide Steps' : 'Show Steps'}
        </button>
      </div>
      {showSteps && (
        <div className="p-3 bg-blue-50 rounded-lg text-sm">
          <p className="font-medium text-gray-800 break-words whitespace-normal">
            Step {currentStep + 1}: {steps[currentStep].description}
          </p>
          <div className="break-words whitespace-normal">
            <BlockMath math={steps[currentStep].math} />
          </div>
          <div className="flex justify-between mt-2">
            <button
              onClick={prevStep}
              className="px-3 py-1 bg-gray-200 text-gray-800 rounded-lg text-sm hover:bg-gray-300 transition-colors disabled:bg-gray-100"
              disabled={currentStep === 0}
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              className="px-3 py-1 bg-gray-200 text-gray-800 rounded-lg text-sm hover:bg-gray-300 transition-colors disabled:bg-gray-100"
              disabled={currentStep === steps.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {showFeedback && (
        <div
          className={`p-3 rounded-lg flex items-center text-sm ${
            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          <div className="flex-1 break-words whitespace-normal">
            {isCorrect ? (
              <>
                <CheckCircle className="w-5 h-5 mr-2 inline-block" />
                Correct! The simplified expression is <InlineMath math={correctAnswer} />.
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 mr-2 inline-block" />
                Incorrect. Combine like terms: <InlineMath math="4m - m = 3m" /> and{' '}
                <InlineMath math="5n + 2n = 7n" />. Try again!
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddSubtractTermsPractice;