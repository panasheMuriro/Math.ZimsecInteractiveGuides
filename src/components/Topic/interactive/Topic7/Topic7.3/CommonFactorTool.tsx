/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, ReactNode } from 'react';
import { Book, CheckCircle } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface Term {
  coefficient: number;
  variable: string;
  power: number;
}

interface UserAnswer {
  firstSquare: string;
  secondSquare: string;
  factoredForm: string;
}

interface Solution {
  firstSquare: string;
  secondSquare: string;
  factoredForm: string;
}

const DifferenceOfSquaresTool: React.FC = () => {
  const [question, setQuestion] = useState<Term[]>([]);
  const [userAnswer, setUserAnswer] = useState<UserAnswer>({
    firstSquare: '',
    secondSquare: '',
    factoredForm: '',
  });
  const [solution, setSolution] = useState<Solution>({
    firstSquare: '',
    secondSquare: '',
    factoredForm: '',
  });
  const [step, setStep] = useState<number>(0);
  const [feedback, setFeedback] = useState<string[]>(['', '', '']);
  const [showSolution, setShowSolution] = useState<boolean>(false);

  const generateQuestion = (): void => {
    const possibleVars: string[] = ['x', 'y', 'a', 'b'];
    const varIndex: number = Math.floor(Math.random() * possibleVars.length);
    const var2Index: number = Math.floor(Math.random() * (possibleVars.length - 1));
    const secondVar: string = possibleVars.filter((_, i) => i !== varIndex)[var2Index];

    const firstCoef: number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10][Math.floor(Math.random() * 10)];
    const secondCoef: number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10][Math.floor(Math.random() * 10)];
    const firstPower: number = [2, 4][Math.floor(Math.random() * 2)]; // x^2 or x^4
    const secondPower: number = [2, 4][Math.floor(Math.random() * 2)];

    const useSecondVar: boolean = Math.random() > 0.5; // 50% chance to use a second variable
    const terms: Term[] = [
      { coefficient: firstCoef * firstCoef, variable: useSecondVar ? possibleVars[varIndex] : '', power: firstPower },
      { coefficient: secondCoef * secondCoef, variable: useSecondVar ? secondVar : '', power: secondPower },
    ];

    setQuestion(terms);
    calculateSolution(terms);
    setUserAnswer({ firstSquare: '', secondSquare: '', factoredForm: '' });
    setFeedback(['', '', '']);
    setShowSolution(false);
    setStep(0);
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const calculateSolution = (terms: Term[]): void => {
    const firstTerm: Term = terms[0];
    const secondTerm: Term = terms[1];

    // Calculate base for first term
    const firstCoefSqrt: number = Math.sqrt(firstTerm.coefficient);
    const firstVarPower: number = firstTerm.power / 2;
    let firstBase: string = '';
    if (firstCoefSqrt !== 1) {
      firstBase += firstCoefSqrt.toString();
    }
    if (firstTerm.variable) {
      firstBase += firstTerm.variable;
      if (firstVarPower > 1) {
        firstBase += `^${firstVarPower}`;
      }
    } else if (firstCoefSqrt === 1) {
      firstBase = '1';
    }
    const firstSquare: string = firstVarPower > 1 && firstTerm.variable && firstCoefSqrt !== 1
      ? `(${firstBase})`
      : firstBase;

    // Calculate base for second term
    const secondCoefSqrt: number = Math.sqrt(secondTerm.coefficient);
    const secondVarPower: number = secondTerm.power / 2;
    let secondBase: string = '';
    if (secondCoefSqrt !== 1) {
      secondBase += secondCoefSqrt.toString();
    }
    if (secondTerm.variable) {
      secondBase += secondTerm.variable;
      if (secondVarPower > 1) {
        secondBase += `^${secondVarPower}`;
      }
    } else if (secondCoefSqrt === 1) {
      secondBase = '1';
    }
    const secondSquare: string = secondVarPower > 1 && secondTerm.variable && secondCoefSqrt !== 1
      ? `(${secondBase})`
      : secondBase;

    // Construct factored form
    const factoredForm: string = `(${firstSquare} + ${secondSquare})(${firstSquare} - ${secondSquare})`;

    setSolution({ firstSquare, secondSquare, factoredForm });
  };

  const checkStep = (currentStep: number): void => {
    const newFeedback: string[] = [...feedback];
    if (currentStep === 0) {
      if (userAnswer.firstSquare === solution.firstSquare) {
        newFeedback[0] = 'Correct! Proceed to the next step.';
        setStep(1);
      } else {
        newFeedback[0] = 'Incorrect first square. Hint: Identify the term that is a perfect square (e.g., 9x^2 = (3x)^2, 81a^4 = (9a^2)^2).';
      }
    } else if (currentStep === 1) {
      if (userAnswer.secondSquare === solution.secondSquare) {
        newFeedback[1] = 'Correct! Proceed to the final step.';
        setStep(2);
      } else {
        newFeedback[1] = 'Incorrect second square. Hint: Identify the second term that is a perfect square (e.g., 16 = 4^2).';
      }
    } else if (currentStep === 2) {
      if (userAnswer.factoredForm === solution.factoredForm) {
        newFeedback[2] = 'Correct! You factored the polynomial successfully!';
      } else {
        newFeedback[2] = 'Incorrect factored form. Hint: Use the formula a^2 - b^2 = (a + b)(a - b).';
      }
    }
    setFeedback(newFeedback);
  };

  const handleUserAnswerChange = (field: keyof UserAnswer, value: string): void => {
    setUserAnswer(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const renderQuestion = (): ReactNode => {
    const termsString: string = question
      .map(term => {
        const coef: number = term.coefficient;
        const vars: string = term.variable && term.power > 0
          ? term.power > 1
            ? `${term.variable}^${term.power}`
            : term.variable
          : '';
        return coef === 1 && vars ? vars : `${coef}${vars}`;
      })
      .join(' - ');
    return <BlockMath math={termsString} />;
  };

  const steps: { title: string; content: string; input: ReactNode }[] = [
    {
      title: 'Step 1: Identify First Perfect Square',
      content: 'Enter the base of the first perfect square (e.g., for 9x^2, enter 3x; for 81a^4, enter 9a^2).',
      input: (
        <div className="mb-2">
          <input
            type="text"
            value={userAnswer.firstSquare}
            onChange={e => handleUserAnswerChange('firstSquare', e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="e.g., 3x or 9a^2"
          />
        </div>
      ),
    },
    {
      title: 'Step 2: Identify Second Perfect Square',
      content: 'Enter the base of the second perfect square (e.g., for 16, enter 4; for 25b^2, enter 5b).',
      input: (
        <div className="mb-2">
          <input
            type="text"
            value={userAnswer.secondSquare}
            onChange={e => handleUserAnswerChange('secondSquare', e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="e.g., 4 or 5b"
          />
        </div>
      ),
    },
    {
      title: 'Step 3: Write Factored Form',
      content: 'Enter the factored form using the formula a^2 - b^2 = (a + b)(a - b).',
      input: (
        <div className="mb-2">
          <input
            type="text"
            value={userAnswer.factoredForm}
            onChange={e => handleUserAnswerChange('factoredForm', e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="e.g., (3x + 4)(3x - 4)"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Book className="mr-2" /> Difference of Two Squares Practice Tool
      </h2>
      <p className="mb-4 text-sm">Factor the following polynomial using the Difference of Two Squares method:</p>
      <div className="mb-4">{question.length > 0 && renderQuestion() as ReactNode}</div>
      {steps.map((s, index) => (
        <div key={index} className="mb-4">
          {step >= index && (
            <>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm mb-2">{s.content}</p>
              {s.input}
              <button
                onClick={() => checkStep(index)}
                className="w-full p-2 bg-green-500 text-white rounded-md mb-2"
              >
                Check Step
              </button>
              {feedback[index] && (
                <p className={`text-sm ${feedback[index].includes('Correct') ? 'text-green-500' : 'text-red-600'}`}>
                  {feedback[index]}
                  {feedback[index].includes('Incorrect') && (
                    <button
                      onClick={() => setShowSolution(true)}
                      className="ml-2 text-blue-500 underline"
                    >
                      Show Solution
                    </button>
                  )}
                </p>
              )}
            </>
          )}
        </div>
      ))}
      {showSolution && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="font-semibold">Solution:</h3>
          <p>
            <strong>First perfect square:</strong> <InlineMath math={solution.firstSquare} />
          </p>
          <p>
            <strong>Second perfect square:</strong> <InlineMath math={solution.secondSquare} />
          </p>
          <p>
            <strong>Factored form:</strong> <BlockMath math={solution.factoredForm} />
          </p>
          <CheckCircle className="text-green-500 mt-2" />
        </div>
      )}
      <button
        onClick={generateQuestion}
        className="w-full p-2 bg-blue-500 text-white rounded-md mt-4"
      >
        New Question
      </button>
    </div>
  );
};

export default DifferenceOfSquaresTool;