import { useState, useMemo } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { RotateCw, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

const FactorsHCF = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedHCF, setSelectedHCF] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [showMethod, setShowMethod] = useState<boolean>(false);

  // Helper function to find factors of a number
  const findFactors = (num: number): number[] => {
    const factors: number[] = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  };

  // HCF questions with shuffled factors
  const hcfQuestions = [
    {
      numbers: [12, 18],
      correctHCF: 6,
      method: 'Listing Method',
      explanation: '\\text{Factors of } 12: 1, 2, 3, 4, 6, 12\\\\\\text{Factors of } 18: 1, 2, 3, 6, 9, 18\\\\\\text{Common: } 1, 2, 3, 6\\\\\\text{H.C.F.} = 6'
    },
    {
      numbers: [24, 36],
      correctHCF: 12,
      method: 'Prime Factorization',
      explanation: '24 = 2^3 \\times 3^1,\\quad 36 = 2^2 \\times 3^2\\\\\\text{H.C.F.} = 2^{\\min(3,2)} \\times 3^{\\min(1,2)} = 2^2 \\times 3^1 = 4 \\times 3 = 12'
    },
    {
      numbers: [15, 25],
      correctHCF: 5,
      method: 'Listing Method',
      explanation: '\\text{Factors of } 15: 1, 3, 5, 15\\\\\\text{Factors of } 25: 1, 5, 25\\\\\\text{Common: } 1, 5\\\\\\text{H.C.F.} = 5'
    },
    {
      numbers: [20, 30],
      correctHCF: 10,
      method: 'Listing Method',
      explanation: '\\text{Factors of } 20: 1, 2, 4, 5, 10, 20\\\\\\text{Factors of } 30: 1, 2, 3, 5, 6, 10, 15, 30\\\\\\text{Common: } 1, 2, 5, 10\\\\\\text{H.C.F.} = 10'
    }
  ];

  // Memoized shuffled factors - only recalculates when currentQuestion changes
  const shuffledFactors = useMemo(() => {
    const question = hcfQuestions[currentQuestion];
    const factors1 = findFactors(question.numbers[0]);
    const factors2 = findFactors(question.numbers[1]);
    
    // Combine and deduplicate factors
    const allFactors = [...new Set([...factors1, ...factors2])];
    
    // Shuffle the factors
    return allFactors.sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  const checkAnswer = () => {
    if (selectedHCF === null) return;
    
    const question = hcfQuestions[currentQuestion];
    const isCorrect = selectedHCF === question.correctHCF;
    
    if (isCorrect) {
      setFeedback({ 
        message: 'Correct! ✓', 
        isCorrect: true 
      });
      setScore(score + 1);
    } else {
      setFeedback({ 
        message: `Incorrect. H.C.F. of ${question.numbers[0]} and ${question.numbers[1]} is ${question.correctHCF}.`, 
        isCorrect: false 
      });
    }
    
    setAttempts(attempts + 1);
  };

  const nextQuestion = () => {
    setCurrentQuestion((currentQuestion + 1) % hcfQuestions.length);
    setSelectedHCF(null);
    setFeedback(null);
    setShowMethod(false);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedHCF(null);
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
    <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-6 rounded-3xl text-white shadow-xl max-w-md w-full">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold flex items-center">
          <span className="mr-2 text-3xl">🔢</span> Find the H.C.F.
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
            Question {currentQuestion + 1} of {hcfQuestions.length}
          </span>
        </div>
      </div>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 mb-5 shadow-sm border border-white/10">
        <h4 className="font-bold text-lg mb-4 text-center">
          Find H.C.F. of <InlineMath math={`${hcfQuestions[currentQuestion].numbers[0]}`} /> and <InlineMath math={`${hcfQuestions[currentQuestion].numbers[1]}`} />
        </h4>
        
        <div className="bg-white/10 rounded-xl p-4 mb-4">
          <p className="text-center mb-3 font-medium">Select the Highest Common Factor:</p>
          <div className="grid grid-cols-4 gap-2">
            {shuffledFactors.map((factor, index) => (
              <button
                key={index}
                onClick={() => setSelectedHCF(factor)}
                disabled={!!feedback}
                className={`aspect-square flex items-center justify-center rounded-xl font-bold transition-all duration-200 border-2 text-lg ${
                  selectedHCF === factor
                    ? feedback
                      ? factor === hcfQuestions[currentQuestion].correctHCF
                        ? 'bg-green-500 text-white border-green-300'
                        : 'bg-red-500 text-white border-red-300'
                      : 'bg-white/40 border-white scale-95'
                    : feedback && factor === hcfQuestions[currentQuestion].correctHCF
                      ? 'bg-green-500/30 text-white border-green-400'
                      : 'bg-white/20 hover:bg-white/30 border-transparent'
                } ${feedback ? 'cursor-default' : 'hover:scale-[1.03]'}`}
              >
                {factor}
              </button>
            ))}
          </div>
        </div>
        
        {selectedHCF !== null && !feedback && (
          <button
            onClick={checkAnswer}
            className="w-full bg-teal-500 hover:bg-teal-600 rounded-xl p-3 font-bold transition-all duration-200 shadow-md"
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
                {hcfQuestions[currentQuestion].method}
              </h4>
              <div className="overflow-x-auto max-w-full">
                <div className="min-w-max">
                  <BlockMath math={hcfQuestions[currentQuestion].explanation} />
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
          {currentQuestion === hcfQuestions.length - 1 
            ? 'Restart Quiz' 
            : 'Next Question'} →
        </button>
      </div>
      
      <div className="mt-4 bg-white/10 rounded-xl p-3 text-sm">
        <p className="font-bold mb-1">How to Find H.C.F.:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Find factors of both numbers</li>
          <li>Identify common factors</li>
          <li>Select the largest common factor</li>
        </ul>
      </div>
    </div>
  );
};

export default FactorsHCF;