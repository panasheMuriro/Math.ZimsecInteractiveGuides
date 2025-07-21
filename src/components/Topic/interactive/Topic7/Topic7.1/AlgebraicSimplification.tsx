
// export default AlgebraicSimplification;

import { useState } from 'react';
import { Check, X, RefreshCw, Eye, EyeOff, Calculator, HelpCircle } from 'lucide-react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const AlgebraicSimplification = () => {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showSteps, setShowSteps] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const problems = [
    {
      type: 'combining',
      question: '3x + 7x - 2x',
      answer: '8x',
      steps: [
        'Identify like terms: $3x$, $7x$, and $-2x$ are all terms with variable $x$',
        'Combine coefficients: $3 + 7 - 2 = 8$',
        'Keep the variable: $8x$'
      ],
      hint: 'Look for terms with the same variable and combine their coefficients.'
    },
    {
      type: 'combining',
      question: '5x^2 - 3x^2 + 2x - x + 4',
      answer: '2x^2 + x + 4',
      steps: [
        'Group like terms: $(5x^2 - 3x^2) + (2x - x) + 4$',
        'Combine $x^2$ terms: $5x^2 - 3x^2 = 2x^2$',
        'Combine $x$ terms: $2x - x = x$',
        'Constant term stays: $4$',
        'Final answer: $2x^2 + x + 4$'
      ],
      hint: 'Group terms by their variable powers: $x^2$, $x$, and constants.'
    },
    {
      type: 'multiplication',
      question: '4x \\times 3x^2',
      answer: '12x^3',
      steps: [
        'Multiply coefficients: $4 \\times 3 = 12$',
        'Add indices of $x$: $x \\times x^2 = x^{1+2} = x^3$',
        'Final answer: $12x^3$'
      ],
      hint: 'When multiplying powers of the same base, add the exponents.'
    },
    {
      type: 'division',
      question: '15x^4 \\div 3x^2',
      answer: '5x^2',
      steps: [
        'Divide coefficients: $15 \\div 3 = 5$',
        'Subtract indices of $x$: $x^4 \\div x^2 = x^{4-2} = x^2$',
        'Final answer: $5x^2$'
      ],
      hint: 'When dividing powers of the same base, subtract the exponents.'
    },
    {
      type: 'substitution',
      question: 'Find 2x^2 + 3y$ when $x = 4$ and $y = -1',
      answer: '29',
      steps: [
        'Substitute $x = 4$: $2(4)^2 + 3(-1)$',
        'Calculate $x^2$: $2(16) + 3(-1)$',
        'Multiply: $32 + (-3)$',
        'Add: $32 - 3 = 29$'
      ],
      hint: 'Replace each variable with its given value, then calculate step by step.'
    },
    {
      type: 'mixed',
      question: '3x^2y \\times 2xy^2 \\div 6xy',
      answer: 'x^2y^2',
      steps: [
        'First multiply: $3x^2y \\times 2xy^2 = 6x^3y^3$',
        'Multiply coefficients: $3 \\times 2 = 6$',
        'Add $x$ indices: $x^2 \\times x = x^3$',
        'Add $y$ indices: $y \\times y^2 = y^3$',
        'Now divide: $6x^3y^3 \\div 6xy = x^2y^2$',
        'Divide coefficients: $6 \\div 6 = 1$',
        'Subtract $x$ indices: $x^3 \\div x = x^2$',
        'Subtract $y$ indices: $y^3 \\div y = y^2$'
      ],
      hint: 'Work from left to right, handling multiplication first, then division.'
    }
  ];

  const checkAnswer = () => {
    const problem = problems[currentProblem];
    const normalizedUserAnswer = userAnswer.replace(/\s+/g, '').toLowerCase();
    const normalizedCorrectAnswer = problem.answer.replace(/\s+/g, '').toLowerCase();
    
    setAttempts(attempts + 1);
    
    if (normalizedUserAnswer === normalizedCorrectAnswer) {
      setFeedback('correct');
      setScore(score + 1);
      setTimeout(() => {
        nextProblem();
      }, 2000);
    } else {
      setFeedback('incorrect');
      setTimeout(() => {
        setFeedback('');
      }, 3000);
    }
  };

  const nextProblem = () => {
    setCurrentProblem((prev) => (prev + 1) % problems.length);
    setUserAnswer('');
    setFeedback('');
    setShowSteps(false);
    setShowHint(false);
  };

  const resetQuiz = () => {
    setCurrentProblem(0);
    setUserAnswer('');
    setFeedback('');
    setScore(0);
    setAttempts(0);
    setShowSteps(false);
    setShowHint(false);
  };



  const renderMath = (text: string) => {
  const parts = text.split(/(\$[^$]*\$)/g); // Split around $...$ inline math

  return parts.map((part, i) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={i} math={part.slice(1, -1)} />;
    }
    return <span key={i}>{part}</span>;
  });
};

  const problem = problems[currentProblem];

  return (
    <div className="w-full p-4 bg-gradient-to-br from-blue-50 to-purple-50 shadow-sm rounded-lg">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            <Calculator className="inline-block mr-2" />
            Algebraic Simplification
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-gray-600">
            <span>Problem {currentProblem + 1} of {problems.length}</span>
            <span>Score: {score}/{attempts}</span>
            <span className="px-2 py-0.5 bg-blue-100 rounded-full capitalize text-xs">{problem.type}</span>
          </div>
        </div>

        {/* Problem Card */}
        <div className="bg-white rounded-lg p-4 shadow-md mb-4">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Simplify:</h3>
            <div className="text-xl font-mono bg-gray-50 p-3 rounded border border-dashed border-blue-300">
              <InlineMath math={problem.question} />
            </div>
          </div>

          {/* Answer Input */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-full">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                placeholder="Enter your answer..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-base font-mono"
                disabled={feedback === 'correct'}
              />
            </div>
            <button
              onClick={checkAnswer}
              disabled={!userAnswer || feedback === 'correct'}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Check Answer
            </button>

            {feedback && (
              <div className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg ${
                feedback === 'correct' 
                  ? 'bg-green-100 text-green-800 border border-green-300' 
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}>
                {feedback === 'correct' ? (
                  <>
                    <Check size={18} />
                    <span>Correct! The answer is <InlineMath math={problem.answer} /></span>
                  </>
                ) : (
                  <>
                    <X size={18} />
                    <span>Try again! The correct answer is <InlineMath math={problem.answer} /></span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center justify-center gap-1 px-3 py-2 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors text-sm"
          >
            <HelpCircle size={16} />
            {showHint ? 'Hide Hint' : 'Hint'}
          </button>
          
          <button
            onClick={() => setShowSteps(!showSteps)}
            className="flex items-center justify-center gap-1 px-3 py-2 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-colors text-sm"
          >
            {showSteps ? <EyeOff size={16} /> : <Eye size={16} />}
            {showSteps ? 'Hide Steps' : 'Steps'}
          </button>

          <button
            onClick={nextProblem}
            className="flex items-center justify-center gap-1 px-3 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors text-sm col-span-2"
          >
            <RefreshCw size={16} />
            Next Problem
          </button>
        </div>

        {/* Hint Section */}
        {showHint && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-3">
            <h4 className="font-semibold text-yellow-800 mb-1 text-sm">💡 Hint:</h4>
            <p className="text-yellow-700 text-sm">{problem.hint}</p>
          </div>
        )}

        {/* Steps Section */}
        {showSteps && (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-3">
            <h4 className="font-semibold text-purple-800 mb-2 text-sm">📝 Step-by-Step Solution:</h4>
            <ol className="space-y-1.5 text-sm">
              {problem.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-2 text-purple-700">
                  <span className="flex-shrink-0 w-5 h-5 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                    
                  </span>
                  <span>{renderMath(step)}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Reset Button */}
        <div className="text-center">
          <button
            onClick={resetQuiz}
            className="px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors text-sm"
          >
            Reset Quiz
          </button>
        </div>

        {/* Quick Reference */}
        <div className="mt-4 text-xs text-gray-600 bg-white p-3 rounded-lg">
          <h4 className="font-semibold mb-1">Quick Reference:</h4>
          <div className="space-y-1">
            <div>• Like terms: same variable and power</div>
            <div>• Multiply: <InlineMath math="x^2 \times x^3 = x^5" /></div>
            <div>• Divide: <InlineMath math="x^5 \div x^2 = x^3" /></div>
            <div>• Substitution: replace variables with values</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgebraicSimplification;