import { MathJax } from 'better-react-mathjax';
import { Star, XCircle, CheckCircle } from 'lucide-react';
import { QuizQuestion } from '../types';

interface QuizViewProps {
  quizQuestions: QuizQuestion[];
  currentQuestion: number;
  quizScore: number;
  animateScore: boolean;
  selectedAnswer: number | null;
  showResult: boolean;
  setCurrentView: (view: 'home' | 'study' | 'quiz' | 'quiz-complete') => void;
  handleQuizAnswer: (answerIndex: number) => void;
  nextQuestion: () => void;
}

const QuizView = ({
  quizQuestions,
  currentQuestion,
  quizScore,
  animateScore,
  selectedAnswer,
  showResult,
  setCurrentView,
  handleQuizAnswer,
  nextQuestion
}: QuizViewProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-600 to-orange-600 p-6">
      <div className="max-w-md mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setCurrentView('home')}
              className="text-white/60 hover:text-white transition-colors"
            >
              ← Back
            </button>
            <div className="flex items-center space-x-2">
              <Star className={`w-6 h-6 ${animateScore ? 'animate-spin text-yellow-300' : 'text-white/60'}`} />
              <span className="text-white font-bold">Score: {quizScore}/{quizQuestions.length}</span>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="bg-white/20 rounded-full h-2 mb-2">
              <div 
                className="bg-yellow-300 h-2 rounded-full transition-all duration-500"
                style={{width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`}}
              />
            </div>
            <p className="text-white/80 text-sm">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </p>
          </div>

          <h3 className="text-xl font-bold text-white mb-6">
            <MathJax inline>{`\\(${quizQuestions[currentQuestion].question}\\)`}</MathJax>
          </h3>

          <div className="space-y-3 mb-6">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleQuizAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 rounded-xl font-semibold transition-all duration-300 text-left ${
                  showResult
                    ? index === quizQuestions[currentQuestion].correct
                      ? 'bg-green-500 text-white'
                      : index === selectedAnswer
                      ? 'bg-red-500 text-white'
                      : 'bg-white/20 text-white/60'
                    : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'
                }`}
              >
                <MathJax inline>{`\\(${option}\\)`}</MathJax>
              </button>
            ))}
          </div>

          {showResult && (
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-6">
              <div className="flex items-center mb-2">
                {selectedAnswer === quizQuestions[currentQuestion].correct ? (
                  <CheckCircle className="text-green-400 w-6 h-6 mr-2" />
                ) : (
                  <XCircle className="text-red-400 w-6 h-6 mr-2" />
                )}
                <span className="text-white font-semibold">
                  {selectedAnswer === quizQuestions[currentQuestion].correct ? 'Correct!' : 'Incorrect'}
                </span>
              </div>
              <p className="text-white/90 text-sm">
                <MathJax inline>{`\\(${quizQuestions[currentQuestion].explanation}\\)`}</MathJax>
              </p>
            </div>
          )}

          {showResult && (
            <button
              onClick={nextQuestion}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
            >
              {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizView;