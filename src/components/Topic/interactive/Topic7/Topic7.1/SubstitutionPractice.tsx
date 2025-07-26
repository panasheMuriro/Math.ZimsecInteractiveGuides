import React, { useState } from 'react';
import { BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface Expression {
  expression: string;
  variables: { [key: string]: number };
  steps: string[];
  answer: number;
}

const expressions: Expression[] = [
  {
    expression: '2x + 3y',
    variables: { x: 3, y: -2 },
    steps: [
      '2(3) + 3(-2)',
      '6 - 6',
      '0'
    ],
    answer: 0
  },
  {
    expression: '2x^2 + 3y',
    variables: { x: 3, y: -2 },
    steps: [
      '2(3^2) + 3(-2)',
      '2(9) + 3(-2)',
      '18 - 6',
      '12'
    ],
    answer: 12
  },
  {
    expression: 'x^2 - 2xy + y^2',
    variables: { x: 2, y: 1 },
    steps: [
      '(2)^2 - 2(2)(1) + (1)^2',
      '4 - 2(2)(1) + 1',
      '4 - 4 + 1',
      '1'
    ],
    answer: 1
  },
  {
    expression: '3a^2 - 2b',
    variables: { a: 2, b: 3 },
    steps: [
      '3(2^2) - 2(3)',
      '3(4) - 2(3)',
      '12 - 6',
      '6'
    ],
    answer: 6
  }
];

const SubstitutionPractice: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showSteps, setShowSteps] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentExpression = expressions[currentIndex];

  const handleSubmit = () => {
    const answer = parseFloat(userAnswer);
    if (isNaN(answer)) {
      setIsCorrect(false);
      return;
    }
    setIsCorrect(answer === currentExpression.answer);
    setShowSteps(true);
  };

  const nextProblem = () => {
    setCurrentIndex((prev) => (prev + 1) % expressions.length);
    setUserAnswer('');
    setShowSteps(false);
    setIsCorrect(null);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 font-sans">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Substitution Practice
      </h2>
      
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="text-lg mb-2">
          Evaluate <InlineMath math={currentExpression.expression} /> when:
        </p>
        {Object.entries(currentExpression.variables).map(([varName, value]) => (
          <p key={varName} className="text-md">
            <InlineMath math={`${varName} = ${value}`} />
          </p>
        ))}
      </div>

      <div className="mb-4">
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Enter your answer"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex space-x-2 mb-4">
        <button
          onClick={handleSubmit}
          className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <CheckCircle className="mr-2 h-4 w-4" /> Check Answer
        </button>
        <button
          onClick={() => setShowSteps(!showSteps)}
          className="flex-1 bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center"
        >
          <BookOpen className="mr-2 h-4 w-4" /> {showSteps ? 'Hide Steps' : 'Show Steps'}
        </button>
      </div>

      {isCorrect !== null && (
        <div className={`p-3 rounded-md mb-4 flex items-center ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
          {isCorrect ? (
            <>
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-600">Correct!</span>
            </>
          ) : (
            <>
              <XCircle className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-red-600">Try again!</span>
            </>
          )}
        </div>
      )}

      {showSteps && (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-semibold mb-2">Solution Steps:</h3>
          {currentExpression.steps.map((step, index) => (
            <div key={index} className="mb-2">
              <BlockMath math={`\\text{Step ${index + 1}: } ${step}`} />
            </div>
          ))}
          <BlockMath math={`\\text{Answer: } ${currentExpression.answer}`} />
        </div>
      )}

      <button
        onClick={nextProblem}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Next Problem
      </button>
    </div>
  );
};

export default SubstitutionPractice;