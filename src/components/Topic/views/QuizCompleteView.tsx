import { useNavigate } from 'react-router-dom';
import { useTopicContext } from '../hooks/useTopicContext';
import Header from '../../Global/Header';

const QuizCompleteView = () => {
  const { 
    topicData, 
    quizState: { score: quizScore, setScore: setQuizScore } 
  } = useTopicContext();
  const navigate = useNavigate();

  const resetQuiz = () => {
    setQuizScore(0);
    navigate('quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-emerald-600 p-6">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <Header
            title="Quiz Complete!"
            showBackButton={false}
          />
          
          <div className="text-6xl mb-6 animate-bounce">
            {quizScore === topicData.quizQuestions.length ? '🏆' : 
             quizScore >= topicData.quizQuestions.length / 2 ? '🎉' : '📚'}
          </div>
          
          <div className="bg-white/20 rounded-xl p-6 mb-6">
            <p className="text-white/90 mb-2">Your Score:</p>
            <div className="text-4xl font-bold text-white">
              {quizScore}/{topicData.quizQuestions.length}
            </div>
            <p className="text-white/90 mt-2">
              {quizScore === topicData.quizQuestions.length ? 'Perfect!' :
               quizScore >= topicData.quizQuestions.length / 2 ? 'Well Done!' : 'Keep Learning!'}
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={resetQuiz}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
            >
              Retake Quiz
            </button>
            
            <button
              onClick={() => navigate(`/topics/${topicData.id}`)}
              className="w-full bg-white/20 text-white font-bold py-4 px-6 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              Back to Topic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCompleteView;