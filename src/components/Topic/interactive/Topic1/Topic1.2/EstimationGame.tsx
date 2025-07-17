import { useState} from 'react';
import { MathJax } from 'better-react-mathjax';
import { Zap, CheckCircle, XCircle } from 'lucide-react';

const EstimationGame = () => {
  const [expression, setExpression] = useState<string>('19.8 × 4.2');
  const [actualAnswer, setActualAnswer] = useState<number>(83.16);
  const [estimatedAnswer, setEstimatedAnswer] = useState<number>(80);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const expressions = [
    { expr: '19.8 × 4.2', actual: 83.16, estimated: 80 },
    { expr: '297 ÷ 3.1', actual: 95.81, estimated: 100 },
    { expr: '48.7 + 21.3', actual: 70, estimated: 70 },
    { expr: '89.2 - 31.7', actual: 57.5, estimated: 60 },
    { expr: '15.9 × 6.1', actual: 96.99, estimated: 96 },
    { expr: '203 ÷ 4.9', actual: 41.43, estimated: 40 }
  ];

  const checkAnswer = () => {
    const answer = parseFloat(userAnswer);
    const tolerance = estimatedAnswer * 0.25; // 25% tolerance
    setIsCorrect(Math.abs(answer - estimatedAnswer) <= tolerance);
    setShowResult(true);
  };

  const newQuestion = () => {
    const randomExpr = expressions[Math.floor(Math.random() * expressions.length)];
    setExpression(randomExpr.expr);
    setActualAnswer(randomExpr.actual);
    setEstimatedAnswer(randomExpr.estimated);
    setUserAnswer('');
    setShowResult(false);
  };

  return (
    <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Zap className="mr-2" /> Quick Estimation
      </h3>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <p className="text-lg mb-2">
          Estimate: <MathJax inline>{`\\(${expression}\\)`}</MathJax>
        </p>
        <p className="text-sm text-white/80 mb-3">
          Round numbers to make calculation easier!
        </p>
        
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Your estimation..."
          className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg"
        />
      </div>
      
      <div className="flex gap-2 mb-4">
        <button
          onClick={checkAnswer}
          disabled={!userAnswer || showResult}
          className="flex-1 bg-white/30 hover:bg-white/50 disabled:bg-gray-400/30 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105 disabled:scale-100"
        >
          Check Estimate
        </button>
        
        <button
          onClick={newQuestion}
          className="flex-1 bg-white/20 hover:bg-white/40 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105"
        >
          New Question
        </button>
      </div>
      
      {showResult && (
        <div className={`bg-white/20 backdrop-blur-sm rounded-xl p-4 ${isCorrect ? 'ring-2 ring-green-400' : 'ring-2 ring-red-400'}`}>
          <div className="flex items-center mb-2">
            {isCorrect ? (
              <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
            ) : (
              <XCircle className="w-5 h-5 mr-2 text-red-300" />
            )}
            <span className="font-bold">
              {isCorrect ? 'Good estimation!' : 'Try again'}
            </span>
          </div>
          <p>Good estimate: ~{estimatedAnswer}</p>
          <p className="text-sm text-white/80">Actual answer: {actualAnswer}</p>
        </div>
      )}
    </div>
  );
};

export default EstimationGame;