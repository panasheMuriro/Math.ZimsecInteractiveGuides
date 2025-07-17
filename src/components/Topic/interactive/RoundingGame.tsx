import { useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import { Target, CheckCircle, XCircle } from 'lucide-react';

const RoundingGame = () => {
  const [number, setNumber] = useState<number>(3.6789);
  const [decimalPlaces, setDecimalPlaces] = useState<number>(2);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const correctAnswer = parseFloat(number.toFixed(decimalPlaces));

  const checkAnswer = () => {
    const answer = parseFloat(userAnswer);
    setIsCorrect(Math.abs(answer - correctAnswer) < 0.001);
    setShowResult(true);
  };

  const newQuestion = () => {
    setNumber(parseFloat((Math.random() * 100 + 1).toFixed(4)));
    setDecimalPlaces(Math.floor(Math.random() * 3) + 1);
    setUserAnswer('');
    setShowResult(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Target className="mr-2" /> Rounding Practice
      </h3>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <p className="text-lg mb-2">
          Round <MathJax inline>{`\\(${number}\\)`}</MathJax> to <MathJax inline>{`\\(${decimalPlaces}\\)`}</MathJax> decimal places
        </p>
        
        <input
          type="number"
          step="0.01"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Your answer..."
          className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg"
        />
      </div>
      
      <div className="flex gap-2 mb-4">
        <button
          onClick={checkAnswer}
          disabled={!userAnswer || showResult}
          className="flex-1 bg-white/30 hover:bg-white/50 disabled:bg-gray-400/30 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105 disabled:scale-100"
        >
          Check Answer
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
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
          <p>Correct answer: <MathJax inline>{`\\(${correctAnswer}\\)`}</MathJax></p>
        </div>
      )}
    </div>
  );
};

export default RoundingGame;