import React, { useState } from 'react';
import { BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface LCMProblem {
  expressions: string[];
  factorizations: string[];
  highestPowers: string[];
  answer: string;
}

const problems: LCMProblem[] = [
  {
    expressions: ['12x^3y^2', '18x^2y^4'],
    factorizations: ['2^2 \\times 3 \\times x^3 \\times y^2', '2 \\times 3^2 \\times x^2 \\times y^4'],
    highestPowers: ['2^2', '3^2', 'x^3', 'y^4'],
    answer: '36x^3y^4'
  },
  {
    expressions: ['15', '20'],
    factorizations: ['3 \\times 5', '2^2 \\times 5'],
    highestPowers: ['2^2', '3^1', '5^1'],
    answer: '60'
  },
  {
    expressions: ['10m^2n', '15m^3n^2'],
    factorizations: ['2 \\times 5 \\times m^2 \\times n', '3 \\times 5 \\times m^3 \\times n^2'],
    highestPowers: ['2^1', '3^1', '5^1', 'm^3', 'n^2'],
    answer: '30m^3n^2'
  }
];

const LCMPractice: React.FC = () => {
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
        LCM Practice
      </h2>
      
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="text-lg mb-2">
          Find the LCM of:
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
          placeholder={"3x^4y^2"}
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
            <BlockMath math={`\\text{Step 2: Highest powers: } ${currentProblem.highestPowers.join(', ')}`} />
          </div>
          <div className="mb-2">
            <BlockMath math={`\\text{Step 3: LCM = } ${currentProblem.answer}`} />
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

export default LCMPractice;