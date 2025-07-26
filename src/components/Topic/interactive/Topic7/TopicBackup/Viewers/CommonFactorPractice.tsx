/* eslint-disable no-case-declarations */
import React, { useState, useEffect, ChangeEvent } from 'react';

interface Term {
  coeff: number;
  vars: Record<string, number>;
}

interface Problem {
  expression: string;
  terms: Term[];
  gcd: number;
  lowestPowers: string;
  commonFactor: string;
  factorizedForm: string;
}

const CommonFactorPractice: React.FC = () => {
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
  const [userAnswers, setUserAnswers] = useState({
    gcd: '',
    lowestPowers: '',
    commonFactor: '',
    factorizedForm: ''
  });
  const [step, setStep] = useState<number>(1);
  const [feedback, setFeedback] = useState<string>('');
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);

  const generateProblem = (): Problem => {
    const problems: Problem[] = [
      {
        expression: "6x² + 9x",
        terms: [
          { coeff: 6, vars: { x: 2 } },
          { coeff: 9, vars: { x: 1 } }
        ],
        gcd: 3,
        lowestPowers: "x¹",
        commonFactor: "3x",
        factorizedForm: "3x(2x + 3)"
      },
      {
        expression: "12x³y - 8x²y²",
        terms: [
          { coeff: 12, vars: { x: 3, y: 1 } },
          { coeff: -8, vars: { x: 2, y: 2 } }
        ],
        gcd: 4,
        lowestPowers: "x²y¹",
        commonFactor: "4x²y",
        factorizedForm: "4x²y(3x - 2y)"
      },
      {
        expression: "15a³b² + 10a²b³ - 5ab",
        terms: [
          { coeff: 15, vars: { a: 3, b: 2 } },
          { coeff: 10, vars: { a: 2, b: 3 } },
          { coeff: -5, vars: { a: 1, b: 1 } }
        ],
        gcd: 5,
        lowestPowers: "a¹b¹",
        commonFactor: "5ab",
        factorizedForm: "5ab(3a²b + 2ab² - 1)"
      },
      {
        expression: "18m⁴n² + 12m³n³ + 24m²n",
        terms: [
          { coeff: 18, vars: { m: 4, n: 2 } },
          { coeff: 12, vars: { m: 3, n: 3 } },
          { coeff: 24, vars: { m: 2, n: 1 } }
        ],
        gcd: 6,
        lowestPowers: "m²n¹",
        commonFactor: "6m²n",
        factorizedForm: "6m²n(3m²n + 2mn² + 4)"
      },
      {
        expression: "20x³ + 15x² - 10x",
        terms: [
          { coeff: 20, vars: { x: 3 } },
          { coeff: 15, vars: { x: 2 } },
          { coeff: -10, vars: { x: 1 } }
        ],
        gcd: 5,
        lowestPowers: "x¹",
        commonFactor: "5x",
        factorizedForm: "5x(4x² + 3x - 2)"
      }
    ];

    const randomIndex = Math.floor(Math.random() * problems.length);
    return problems[randomIndex];
  };

  const startNewProblem = () => {
    setCurrentProblem(generateProblem());
    setUserAnswers({ gcd: '', lowestPowers: '', commonFactor: '', factorizedForm: '' });
    setStep(1);
    setFeedback('');
    setShowSolution(false);
  };

  useEffect(() => {
    startNewProblem();
  }, []);

  const checkAnswer = () => {
    if (!currentProblem) return;

    let correct = false;
    let feedbackMsg = '';

    switch(step) {
      case 1:
        const userGCD = parseInt(userAnswers.gcd);
        if (userGCD === currentProblem.gcd) {
          correct = true;
          feedbackMsg = `✓ Correct! The GCD is ${currentProblem.gcd}`;
        } else {
          feedbackMsg = `✗ Incorrect. The GCD of the coefficients is ${currentProblem.gcd}. Try finding the largest number that divides all coefficients.`;
        }
        break;

      case 2:
        const normAnswer = userAnswers.lowestPowers.toLowerCase().replace(/\s/g, '');
        const normCorrect = currentProblem.lowestPowers.toLowerCase().replace(/\s/g, '');
        if (normAnswer === normCorrect || normAnswer === normCorrect.replace('¹', '')) {
          correct = true;
          feedbackMsg = `✓ Correct! The lowest powers are ${currentProblem.lowestPowers}`;
        } else {
          feedbackMsg = `✗ Incorrect. The lowest powers are ${currentProblem.lowestPowers}. Look at each variable and find the smallest exponent.`;
        }
        break;

      case 3:
        const userFactor = userAnswers.commonFactor.replace(/\s/g, '');
        const correctFactor = currentProblem.commonFactor.replace(/\s/g, '');
        if (userFactor === correctFactor) {
          correct = true;
          feedbackMsg = `✓ Correct! The common factor is ${currentProblem.commonFactor}`;
        } else {
          feedbackMsg = `✗ Incorrect. The common factor is ${currentProblem.commonFactor}. Multiply the GCD with the lowest powers.`;
        }
        break;

      case 4:
        const userFinal = userAnswers.factorizedForm.replace(/\s/g, '');
        const correctFinal = currentProblem.factorizedForm.replace(/\s/g, '');
        if (userFinal === correctFinal) {
          correct = true;
          feedbackMsg = `🎉 Excellent! You've successfully factorized the expression!`;
          setScore(prev => prev + 1);
        } else {
          feedbackMsg = `✗ Incorrect. The complete factorization is ${currentProblem.factorizedForm}.`;
        }
        setAttempts(prev => prev + 1);
        break;
    }

    setFeedback(feedbackMsg);

    if (correct && step < 4) {
      setTimeout(() => {
        setStep(prev => prev + 1);
        setFeedback('');
      }, 1500);
    }
  };

  const handleChange = (field: keyof typeof userAnswers) => (e: ChangeEvent<HTMLInputElement>) => {
    setUserAnswers(prev => ({ ...prev, [field]: e.target.value }));
  };

  const steps = [
    {
      title: "Step 1: Find the GCD of coefficients",
      instruction: "What is the Greatest Common Divisor of all the coefficients?",
      inputType: "number",
      placeholder: "Enter GCD",
      field: "gcd"
    },
    {
      title: "Step 2: Find the lowest powers",
      instruction: "What are the lowest powers of each variable? (e.g., x²y¹ or xy)",
      inputType: "text",
      placeholder: "e.g., x²y or xy",
      field: "lowestPowers"
    },
    {
      title: "Step 3: Determine the common factor",
      instruction: "What is the common factor? (GCD × lowest powers)",
      inputType: "text",
      placeholder: "e.g., 3x or 4x²y",
      field: "commonFactor"
    },
    {
      title: "Step 4: Write the factorized form",
      instruction: "Write the complete factorization",
      inputType: "text",
      placeholder: "e.g., 3x(2x + 3)",
      field: "factorizedForm"
    }
  ];

  const currentStepData = steps[step - 1];

  return (
    <div className="max-w-2xl mx-auto p-3 bg-white rounded-lg shadow-lg text-wrap">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Common Factor Method Practice</h2>
        <div className="flex justify-center gap-4 text-sm text-gray-600">
          <span>Score: {score}</span>
          <span>Attempts: {attempts}</span>
          <span>Step: {step}/4</span>
        </div>
      </div>

      {currentProblem && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Factor the expression:</h3>
            <div className="text-2xl font-mono bg-gray-100 p-4 rounded-lg">
              {currentProblem.expression}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-800">{currentStepData.title}</h3>
            <p className="text-gray-700">{currentStepData.instruction}</p>
            <div className="flex gap-2">
              <input
                type={currentStepData.inputType}
                value={userAnswers[currentStepData.field as keyof typeof userAnswers]}
                onChange={handleChange(currentStepData.field as keyof typeof userAnswers)}
                placeholder={currentStepData.placeholder}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={checkAnswer}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Check
              </button>
            </div>
            {feedback && (
              <div className={`p-3 rounded-lg ${feedback.includes('✓') || feedback.includes('🎉') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {feedback}
              </div>
            )}
          </div>

          <div className="flex gap-2 justify-center">
            <button
              onClick={() => setShowSolution(true)}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Show Solution
            </button>
            <button
              onClick={startNewProblem}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              New Problem
            </button>
          </div>

          {showSolution && (
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Complete Solution:</h4>
              <div className="space-y-2 text-sm">
                <p><strong>GCD of coefficients:</strong> {currentProblem.gcd}</p>
                <p><strong>Lowest powers:</strong> {currentProblem.lowestPowers}</p>
                <p><strong>Common factor:</strong> {currentProblem.commonFactor}</p>
                <p><strong>Final answer:</strong> {currentProblem.factorizedForm}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommonFactorPractice;
