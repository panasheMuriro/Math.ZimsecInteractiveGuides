import { useState, useMemo } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { RotateCw, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

const MultiplesLCM = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedLCM, setSelectedLCM] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [showMethod, setShowMethod] = useState<boolean>(false);

  // Helper function to find first n multiples of a number
  const findMultiples = (num: number, count: number = 8): number[] => {
    return Array.from({ length: count }, (_, i) => num * (i + 1));
  };


  // LCM questions with shuffled multiples
  const lcmQuestions = [
    {
      numbers: [4, 6],
      correctLCM: 12,
      method: 'Listing Method',
      explanation: '\\text{Multiples of } 4: 4, 8, 12, 16, 20, 24, \\ldots\\\\\\text{Multiples of } 6: 6, 12, 18, 24, 30, \\ldots\\\\\\text{Common: } 12, 24, \\ldots\\\\\\text{L.C.M.} = 12'
    },
    {
      numbers: [12, 18],
      correctLCM: 36,
      method: 'Prime Factorization',
      explanation: '12 = 2^2 \\times 3^1,\\quad 18 = 2^1 \\times 3^2\\\\\\text{L.C.M.} = 2^{\\max(2,1)} \\times 3^{\\max(1,2)} = 2^2 \\times 3^2 = 4 \\times 9 = 36'
    },
    {
      numbers: [8, 12],
      correctLCM: 24,
      method: 'Listing Method',
      explanation: '\\text{Multiples of } 8: 8, 16, 24, 32, 40, \\ldots\\\\\\text{Multiples of } 12: 12, 24, 36, 48, \\ldots\\\\\\text{Common: } 24, \\ldots\\\\\\text{L.C.M.} = 24'
    },
    {
      numbers: [15, 20],
      correctLCM: 60,
      method: 'Prime Factorization',
      explanation: '15 = 3^1 \\times 5^1,\\quad 20 = 2^2 \\times 5^1\\\\\\text{L.C.M.} = 2^2 \\times 3^1 \\times 5^1 = 4 \\times 3 \\times 5 = 60'
    }
  ];

  // Memoized shuffled multiples - only recalculates when currentQuestion changes
  const shuffledMultiples = useMemo(() => {
    const question = lcmQuestions[currentQuestion];
    const multiples1 = findMultiples(question.numbers[0], 6);
    const multiples2 = findMultiples(question.numbers[1], 6);
    
    // Combine and deduplicate multiples
    const allMultiples = [...new Set([...multiples1, ...multiples2])];
    
    // Add some additional multiples to make it challenging
    const additionalMultiples = [
      question.correctLCM * 2,
      question.correctLCM * 3,
      question.correctLCM + 10,
      question.correctLCM - 5
    ].filter(m => m > 0 && !allMultiples.includes(m));
    
    const combinedMultiples = [...allMultiples, ...additionalMultiples];
    
    // Shuffle the multiples
    return combinedMultiples.sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  const checkAnswer = () => {
    if (selectedLCM === null) return;
    
    const question = lcmQuestions[currentQuestion];
    const isCorrect = selectedLCM === question.correctLCM;
    
    if (isCorrect) {
      setFeedback({ 
        message: 'Correct! ✓', 
        isCorrect: true 
      });
      setScore(score + 1);
    } else {
      setFeedback({ 
        message: `Incorrect. L.C.M. of ${question.numbers[0]} and ${question.numbers[1]} is ${question.correctLCM}.`, 
        isCorrect: false 
      });
    }
    
    setAttempts(attempts + 1);
  };

  const nextQuestion = () => {
    setCurrentQuestion((currentQuestion + 1) % lcmQuestions.length);
    setSelectedLCM(null);
    setFeedback(null);
    setShowMethod(false);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedLCM(null);
    setFeedback(null);
    setScore(0);
    setAttempts(0);
    setShowMethod(false);
  };

  const getFeedbackColor = () => {
    if (!feedback) return '';
    return feedback.isCorrect 
      ? 'bg-green-500/20 border-green-400' 
      : 'bg-amber-500/20 border-amber-400';
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-3xl text-white shadow-xl max-w-md w-full">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold flex items-center">
          <span className="mr-2 text-3xl">🔢</span> Find the L.C.M.
        </h3>
        <div className="flex gap-2">
          <div className="bg-white/20 text-sm font-bold px-3 py-1 rounded-full">
            {score}/{attempts || '0'}
          </div>
          <button
            onClick={resetQuiz}
            className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
            aria-label="Reset quiz"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-5 shadow-sm border border-white/10">
        <div className="text-center">
          <span className="text-sm opacity-90">
            Question {currentQuestion + 1} of {lcmQuestions.length}
          </span>
        </div>
      </div>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 mb-5 shadow-sm border border-white/10">
        <h4 className="font-bold text-lg mb-4 text-center">
          Find L.C.M. of <InlineMath math={`${lcmQuestions[currentQuestion].numbers[0]}`} /> and <InlineMath math={`${lcmQuestions[currentQuestion].numbers[1]}`} />
        </h4>
        
        <div className="bg-white/10 rounded-xl p-4 mb-4">
          <p className="text-center mb-3 font-medium">Select the Lowest Common Multiple:</p>
          <div className="grid grid-cols-4 gap-2">
            {shuffledMultiples.map((multiple, index) => (
              <button
                key={index}
                onClick={() => setSelectedLCM(multiple)}
                disabled={!!feedback}
                className={`aspect-square flex items-center justify-center rounded-xl font-bold transition-all duration-200 border-2 text-sm ${
                  selectedLCM === multiple
                    ? feedback
                      ? multiple === lcmQuestions[currentQuestion].correctLCM
                        ? 'bg-green-500 text-white border-green-300'
                        : 'bg-red-500 text-white border-red-300'
                      : 'bg-white/40 border-white scale-95'
                    : feedback && multiple === lcmQuestions[currentQuestion].correctLCM
                      ? 'bg-green-500/30 text-white border-green-400'
                      : 'bg-white/20 hover:bg-white/30 border-transparent'
                } ${feedback ? 'cursor-default' : 'hover:scale-[1.03]'}`}
              >
                {multiple}
              </button>
            ))}
          </div>
        </div>
        
        {selectedLCM !== null && !feedback && (
          <button
            onClick={checkAnswer}
            className="w-full bg-indigo-500 hover:bg-indigo-600 rounded-xl p-3 font-bold transition-all duration-200 shadow-md"
          >
            Check Answer
          </button>
        )}
      </div>
      
      {feedback && (
        <div className={`rounded-2xl p-5 mb-5 backdrop-blur-sm border ${getFeedbackColor()}`}>
          <div className="flex items-center mb-3">
            {feedback.isCorrect ? (
              <CheckCircle className="text-green-300 mr-2" size={24} />
            ) : (
              <XCircle className="text-amber-300 mr-2" size={24} />
            )}
            <p className={`font-bold text-lg ${feedback.isCorrect ? 'text-green-100' : 'text-amber-100'}`}>
              {feedback.message}
            </p>
          </div>
          
          <button 
            onClick={() => setShowMethod(!showMethod)}
            className="flex items-center text-white/90 font-medium text-sm mb-3"
          >
            <HelpCircle className="mr-1" size={16} />
            {showMethod ? 'Hide method' : 'Show method'}
          </button>
          
          {showMethod && (
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold mb-2 flex items-center">
                <span className="mr-2">🧮</span>
                {lcmQuestions[currentQuestion].method}
              </h4>
              <div className="overflow-x-auto max-w-full">
                <div className="min-w-max">
                  <BlockMath math={lcmQuestions[currentQuestion].explanation} />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="flex gap-3">
        <button
          onClick={nextQuestion}
          className="flex-1 bg-white/20 hover:bg-white/30 rounded-xl p-3 font-bold transition-all duration-200 shadow-md"
        >
          {currentQuestion === lcmQuestions.length - 1 
            ? 'Restart Quiz' 
            : 'Next Question'} →
        </button>
      </div>
      
      <div className="mt-4 bg-white/10 rounded-xl p-3 text-sm">
        <p className="font-bold mb-1">How to Find L.C.M.:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Find multiples of both numbers</li>
          <li>Identify common multiples</li>
          <li>Select the smallest common multiple</li>
        </ul>
      </div>
    </div>
  );
};

export default MultiplesLCM;