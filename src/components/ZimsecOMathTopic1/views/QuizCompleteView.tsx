import { QuizQuestion } from '../types';

interface QuizCompleteViewProps {
  quizScore: number;
  quizQuestions: QuizQuestion[];
  setCurrentView: (view: 'home' | 'study' | 'quiz' | 'quiz-complete') => void;
  resetQuiz: () => void;
}

const QuizCompleteView = ({
  quizScore,
  quizQuestions,
  setCurrentView,
  resetQuiz
}: QuizCompleteViewProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-emerald-600 p-6">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-6xl mb-6 animate-bounce">
            {quizScore === quizQuestions.length ? '🏆' : quizScore >= quizQuestions.length / 2 ? '🎉' : '📚'}
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Quiz Complete!
          </h2>
          
          <div className="bg-white/20 rounded-xl p-6 mb-6">
            <p className="text-white/90 mb-2">Your Score:</p>
            <div className="text-4xl font-bold text-white">
              {quizScore}/{quizQuestions.length}
            </div>
            <p className="text-white/90 mt-2">
              {quizScore === quizQuestions.length ? 'Perfect!' :
               quizScore >= quizQuestions.length / 2 ? 'Well Done!' : 'Keep Learning!'}
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                resetQuiz();
                setCurrentView('quiz');
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
            >
              Retake Quiz
            </button>
            
            <button
              onClick={() => setCurrentView('home')}
              className="w-full bg-white/20 text-white font-bold py-4 px-6 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCompleteView;