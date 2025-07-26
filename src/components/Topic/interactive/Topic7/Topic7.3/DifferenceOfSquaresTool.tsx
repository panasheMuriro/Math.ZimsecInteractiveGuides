import React, { useState, useEffect } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface Term {
  coefficient: number;
  variable?: string;
  power?: number;
}

interface Solution {
  firstSquare: string;
  secondSquare: string;
  factoredForm: string;
}

interface UserAnswer {
  firstSquare: string;
  secondSquare: string;
  factoredForm: string;
}

const DifferenceOfSquaresTool: React.FC = () => {
  const [solution, setSolution] = useState<Solution>({
    firstSquare: '',
    secondSquare: '',
    factoredForm: '',
  });

  const [userAnswer, setUserAnswer] = useState<UserAnswer>({
    firstSquare: '',
    secondSquare: '',
    factoredForm: '',
  });

  const [feedback, setFeedback] = useState<string[]>(['', '', '']);
  const [stepComplete, setStepComplete] = useState<boolean[]>([false, false, false]);

  const terms: Term[] = [
    { coefficient: 4, variable: 'a', power: 4 },
    { coefficient: 1 },
  ];

  useEffect(() => {
    calculateSolution(terms);
  }, []);

  const calculateSolution = (terms: Term[]) => {
    const formatBase = (term: Term): string => {
      const coefSqrt = Math.sqrt(term.coefficient);
      const powerSqrt = term.power ? term.power / 2 : 0;

      const coefPart = coefSqrt % 1 === 0 ? coefSqrt.toString() : `\\sqrt{${term.coefficient}}`;
      const variablePart = term.variable
        ? powerSqrt === 1
          ? term.variable
          : `${term.variable}^{${powerSqrt}}`
        : '';

      return `${coefPart}${variablePart}`;
    };

    const firstBase = formatBase(terms[0]);
    const secondBase = formatBase(terms[1]);
    const factoredForm = `(${firstBase} + ${secondBase})(${firstBase} - ${secondBase})`;

    setSolution({
      firstSquare: firstBase,
      secondSquare: secondBase,
      factoredForm,
    });
  };

  const normalize = (input: string): string =>
    input.replace(/\s+/g, '').replace(/\^\{?(\d+)\}?/g, '^{$1}');

  const handleChange = (field: keyof UserAnswer, value: string) => {
    setUserAnswer((prev) => ({ ...prev, [field]: value }));
  };

  const checkAnswer = (field: keyof UserAnswer, index: number, expected: string) => {
    const updatedFeedback = [...feedback];
    if (normalize(userAnswer[field]) === normalize(expected)) {
      updatedFeedback[index] = '✅ Correct!';
      const updatedStepComplete = [...stepComplete];
      updatedStepComplete[index] = true;
      setStepComplete(updatedStepComplete);
    } else {
      updatedFeedback[index] = '❌ Try again. Hint: Think of what squared gives this term.';
    }
    setFeedback(updatedFeedback);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Factor the Difference of Squares</h2>

      <p className="mb-4">
        Given:
        <BlockMath
          math={`${terms[0].coefficient}${terms[0].variable ?? ''}${terms[0].power ? `^${terms[0].power}` : ''} - ${terms[1].coefficient}`}
        />
      </p>

      {/* Step 1 */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">1. What is the square root of the first term?</label>
        
           {userAnswer.firstSquare && (
          <div className="mt-2 text-sm text-gray-600">
            <span>You entered:</span>
            <BlockMath math={userAnswer.firstSquare} />
          </div>
        )}
        <input
          type="text"
          value={userAnswer.firstSquare}
          onChange={(e) => handleChange('firstSquare', e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="e.g., 2a^2"
        />
     
        <button
          onClick={() => checkAnswer('firstSquare', 0, solution.firstSquare)}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Check
        </button>
        {feedback[0] && <p className="mt-2">{feedback[0]}</p>}
      </div>

      {/* Step 2 */}
      {stepComplete[0] && (
        <div className="mb-6">
          <label className="block mb-1 font-medium">2. What is the square root of the second term?</label>
              {userAnswer.secondSquare && (
            <div className="mt-2 text-sm text-gray-600">
              <span>You entered:</span>
              <BlockMath math={userAnswer.secondSquare} />
            </div>
          )}
          <input
            type="text"
            value={userAnswer.secondSquare}
            onChange={(e) => handleChange('secondSquare', e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="e.g., 1"
          />
     
          <button
            onClick={() => checkAnswer('secondSquare', 1, solution.secondSquare)}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Check
          </button>
          {feedback[1] && <p className="mt-2">{feedback[1]}</p>}
        </div>
      )}

      {/* Step 3 */}
      {stepComplete[1] && (
        <div className="mb-6">
          <label className="block mb-1 font-medium">3. Write the fully factored form</label>
          <input
            type="text"
            value={userAnswer.factoredForm}
            onChange={(e) => handleChange('factoredForm', e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="e.g., (3a^3 + 2)(3a^3 - 2)"
          />
          {userAnswer.factoredForm && (
            <div className="mt-2 text-sm text-gray-600">
              <span>You entered:</span>
              <BlockMath math={userAnswer.factoredForm} />
            </div>
          )}
          <button
            onClick={() => checkAnswer('factoredForm', 2, solution.factoredForm)}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Check
          </button>
          {feedback[2] && <p className="mt-2">{feedback[2]}</p>}
        </div>
      )}

      {/* Final Answer */}
      {stepComplete[2] && (
        <div className="mt-6">
          <p className="font-semibold mb-2">🎉 Final Answer:</p>
          <BlockMath math={solution.factoredForm} />
        </div>
      )}
    </div>
  );
};

export default DifferenceOfSquaresTool;

