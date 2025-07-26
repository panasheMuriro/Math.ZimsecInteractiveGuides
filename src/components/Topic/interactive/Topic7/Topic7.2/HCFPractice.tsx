import React, { useState } from 'react';
import { BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface HCFProblem {
  expressions: string[];
  factorizations: string[];
  commonFactors: string[];
  lowestPowers: string[];
  answer: string;
}

const problems: HCFProblem[] = [
  {
    expressions: ['12x^3y^2', '18x^2y^4'],
    factorizations: ['2^2 \\times 3 \\times x^3 \\times y^2', '2 \\times 3^2 \\times x^2 \\times y^4'],
    commonFactors: ['2', '3', 'x', 'y'],
    lowestPowers: ['2^1', '3^1', 'x^2', 'y^2'],
    answer: '6x^2y^2'
  },
  {
    expressions: ['24', '36'],
    factorizations: ['2^3 \\times 3', '2^2 \\times 3^2'],
    commonFactors: ['2', '3'],
    lowestPowers: ['2^2', '3^1'],
    answer: '12'
  },
  {
    expressions: ['16a^4b', '24a^2b^3'],
    factorizations: ['2^4 \\times a^4 \\times b', '2^3 \\times 3 \\times a^2 \\times b^3'],
    commonFactors: ['2', 'a', 'b'],
    lowestPowers: ['2^3', 'a^2', 'b^1'],
    answer: '8a^2b'
  }
];

const HCFPractice: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showSteps, setShowSteps] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentProblem = problems[currentIndex];

  const handleSubmit = () => {
    const normalizedUserAnswer = userAnswer.replace(/\s/g, '');
    const normalizedCorrectAnswer = currentProblem.answer.replace(/\s/g, '');
    setIsCorrect(normalizedUserAnswer === normalizedCorrectAnswer);
    setShowSteps(true);
  };

  const nextProblem = () => {
    setCurrentIndex((prev) => (prev + 1) % problems.length);
    setUserAnswer('');
    setShowSteps(false);
    setIsCorrect(null);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 font-sans">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        HCF Practice
      </h2>
      
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="text-lg mb-2">
          Find the HCF of:
        </p>
        {currentProblem.expressions.map((expr, index) => (
          <p key={index} className="text-md">
            <InlineMath math={expr} />
          </p>
        ))}
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Enter HCF (e.g., 2x^2y^5)"
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
          <div className="mb-2">
            <BlockMath math={`\\text{Step 1: Factorize}`}/>
            {currentProblem.factorizations.map((factor, index) => (
              <BlockMath key={index} math={`${currentProblem.expressions[index]} = ${factor}`} />
            ))}
          </div>
          <div className="mb-2">
            <BlockMath math={`\\text{Step 2: Common factors: } ${currentProblem.commonFactors.join(', ')}`} />
          </div>
          <div className="mb-2">
            <BlockMath math={`\\text{Step 3: Lowest powers: } ${currentProblem.lowestPowers.join(', ')}`} />
          </div>
          <div className="mb-2">
            <BlockMath math={`\\text{Step 4: HCF = } ${currentProblem.answer}`} />
          </div>
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

export default HCFPractice;