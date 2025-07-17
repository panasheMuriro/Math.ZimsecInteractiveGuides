import { useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import { Calculator, CheckCircle, XCircle } from 'lucide-react';

const DecimalPlacesVisualizer = () => {
const [currentNumber, setCurrentNumber] = useState<string>('3.456');
  const [questionType, setQuestionType] = useState<'dp' | 'sf'>('dp');
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const numbers = ['3.456', '0.00456', '3400', '0.2', '15.0', '0.0304', '2050'];

  const getDecimalPlaces = (num: string) => {
    const parts = num.split('.');
    return parts.length > 1 ? parts[1].length : 0;
  };

  const getSignificantFigures = (num: string) => {
    const cleanNum = num.replace(/^0+/, '').replace(/\.$/, '');
    if (cleanNum.includes('.')) {
      return cleanNum.replace('.', '').replace(/0+$/, '').length;
    }
    return cleanNum.replace(/0+$/, '').length;
  };

  const correctAnswer = questionType === 'dp' ? getDecimalPlaces(currentNumber) : getSignificantFigures(currentNumber);

  const checkAnswer = () => {
    const answer = parseInt(userAnswer);
    setIsCorrect(answer === correctAnswer);
    setShowResult(true);
  };

  const newQuestion = () => {
    setCurrentNumber(numbers[Math.floor(Math.random() * numbers.length)]);
    setQuestionType(Math.random() > 0.5 ? 'dp' : 'sf');
    setUserAnswer('');
    setShowResult(false);
  };

  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Calculator className="mr-2" /> D.P. & S.F. Practice
      </h3>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <p className="text-lg mb-2">
          How many {questionType === 'dp' ? 'decimal places' : 'significant figures'} does{' '}
          <MathJax inline>{`\\(${currentNumber}\\)`}</MathJax> have?
        </p>
        
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Number of places/figures..."
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
          <p>
            Correct answer: {correctAnswer} {questionType === 'dp' ? 'decimal places' : 'significant figures'}
          </p>
        </div>
      )}
    </div>
  );
};

export default DecimalPlacesVisualizer;