import { Brain, CheckCircle, XCircle, Lightbulb, RotateCcw, Trophy, Target } from 'lucide-react';
import { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';


export type QuestionType = 
  | 'findVolume' 
  | 'findMass'
  | 'findWidth'
  | 'findLength'
  | 'findSurfaceArea'
  | 'findDensity'
  | 'findHeight'
  | 'findRadius'
  | 'findSide'
  | 'conversion'
  | 'compositeMass'
  | 'hollowVolume';

export type ShapeType = 
  | 'cuboid' 
  | 'cube' 
  | 'cylinder' 
  | 'sphere' 
  | 'cone' 
  | 'pyramid'
  | 'prism'
  | 'irregular'
  | 'composite';

export interface QuizQuestion {
  type: QuestionType;
  question: string;
  given: Record<string, number>;
  answer: number;
  unit: string;
  hint: string;
  context: string;
  shape?: ShapeType;
  formula?: string;
}

export interface QuizData {
  title: string;
  subtitle: string;
  questions: QuizQuestion[];
}

interface QuizTemplateProps {
  quizData: QuizData;
}



export const SolidShapesQuizTemplate = ({ quizData }: QuizTemplateProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQ = quizData.questions[currentQuestion];

  const checkAnswer = () => {
    const tolerance = currentQ.answer > 100 ? currentQ.answer * 0.01 : 0.1;
    const userNum = parseFloat(userAnswer);
    const correct = Math.abs(userNum - currentQ.answer) <= tolerance;
    
    setIsCorrect(correct);
    setAnswered(true);
    setShowAnswer(true);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      resetQuestion();
    }
  };

  const resetQuestion = () => {
    setUserAnswer('');
    setShowHint(false);
    setShowAnswer(false);
    setAnswered(false);
    setIsCorrect(false);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    resetQuestion();
  };

  const formatNumber = (num: number) => {
    // Format with commas and handle decimal places appropriately
    if (num % 1 === 0) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return num.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
  };

  const getQuestionTypeIcon = (type: string) => {
    switch (type) {
      case 'findVolume':
        return <Target className="text-blue-600" size={16} />;
      case 'findHeight':
      case 'findWidth':
      case 'findLength':
      case 'findRadius':
      case 'findSide':
        return <Brain className="text-purple-600" size={16} />;
      case 'conversion':
        return <RotateCcw className="text-green-600" size={16} />;
      default:
        return <Target className="text-blue-600" size={16} />;
    }
  };

  const getQuestionTypeLabel = (type: string) => {
    switch (type) {
      case 'findVolume':
        return 'Find Volume';
      case 'findHeight':
        return 'Find Height';
      case 'findWidth':
        return 'Find Width';
      case 'findLength':
        return 'Find Length';
      case 'findRadius':
        return 'Find Radius';
      case 'findSide':
        return 'Find Side Length';
      case 'conversion':
        return 'Unit Conversion';
      default:
        return 'Question';
    }
  };

  const getShapeFormula = (shape?: string) => {
    if (!shape) return null;
    
    switch (shape.toLowerCase()) {
      case 'cuboid':
        return <InlineMath math="V = l \\times w \\times h" />;
      case 'cube':
        return <InlineMath math="V = s^3" />;
      case 'cylinder':
        return <InlineMath math="V = \\pi r^2 h" />;
      case 'cone':
        return <InlineMath math="V = \\frac{1}{3}\\pi r^2 h" />;
      case 'sphere':
        return <InlineMath math="V = \\frac{4}{3}\\pi r^3" />;
      case 'pyramid':
        return <InlineMath math="V = \\frac{1}{3} \\times \\text{base area} \\times h" />;
      default:
        return null;
    }
  };

  const isQuizComplete = currentQuestion === quizData.questions.length - 1 && answered;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold text-gray-800 mb-2">{quizData.title}</h1>
        <p className="text-gray-600">{quizData.subtitle}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Question {currentQuestion + 1} of {quizData.questions.length}
          </span>
          <span className="text-sm font-medium text-blue-600">
            Score: {score}/{quizData.questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / quizData.questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6 border">
        <div className="flex items-center gap-2 mb-4">
          {getQuestionTypeIcon(currentQ.type)}
          <span className="text-sm font-medium text-gray-600">
            {getQuestionTypeLabel(currentQ.type)}
          </span>
          {currentQ.shape && (
            <span className="text-sm font-medium text-gray-600 ml-auto">
              Shape: {currentQ.shape.charAt(0).toUpperCase() + currentQ.shape.slice(1)}
            </span>
          )}
        </div>
        
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          {currentQ.question}
        </h2>

        {/* Given Information */}
        <div className="bg-white p-4 rounded-lg mb-4">
          <h3 className="font-medium text-gray-700 mb-2">Given:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
            {currentQ.given.length !== undefined && (
              <div className="flex justify-between">
                <span>Length:</span>
                <span className="font-medium">{formatNumber(currentQ.given.length)} {currentQ.unit === 'm' ? 'm' : 'cm'}</span>
              </div>
            )}
            {currentQ.given.width !== undefined && (
              <div className="flex justify-between">
                <span>Width:</span>
                <span className="font-medium">{formatNumber(currentQ.given.width)} {currentQ.unit === 'm' ? 'm' : 'cm'}</span>
              </div>
            )}
            {currentQ.given.height !== undefined && (
              <div className="flex justify-between">
                <span>Height:</span>
                <span className="font-medium">{formatNumber(currentQ.given.height)} {currentQ.unit === 'm' ? 'm' : 'cm'}</span>
              </div>
            )}
            {currentQ.given.radius !== undefined && (
              <div className="flex justify-between">
                <span>Radius:</span>
                <span className="font-medium">{formatNumber(currentQ.given.radius)} {currentQ.unit === 'm' ? 'm' : 'cm'}</span>
              </div>
            )}
            {currentQ.given.diameter !== undefined && (
              <div className="flex justify-between">
                <span>Diameter:</span>
                <span className="font-medium">{formatNumber(currentQ.given.diameter)} {currentQ.unit === 'm' ? 'm' : 'cm'}</span>
              </div>
            )}
            {currentQ.given.side !== undefined && (
              <div className="flex justify-between">
                <span>Side:</span>
                <span className="font-medium">{formatNumber(currentQ.given.side)} {currentQ.unit === 'm' ? 'm' : 'cm'}</span>
              </div>
            )}
            {currentQ.given.volume !== undefined && (
              <div className="flex justify-between">
                <span>Volume:</span>
                <span className="font-medium">{formatNumber(currentQ.given.volume)} {currentQ.unit === 'L' ? 'cm³' : currentQ.unit === 'm' ? 'm³' : 'cm³'}</span>
              </div>
            )}
          </div>
        </div>

        {/* Answer Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Answer:
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your answer"
              disabled={answered}
            />
            <span className="flex items-center px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-600">
              {currentQ.unit}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          {!answered && (
            <>
              <button
                onClick={checkAnswer}
                disabled={!userAnswer}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <CheckCircle size={16} />
                Check Answer
              </button>
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors"
              >
                <Lightbulb size={16} />
                {showHint ? 'Hide Hint' : 'Show Hint'}
              </button>
            </>
          )}
          
          {answered && !isQuizComplete && (
            <button
              onClick={nextQuestion}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Next Question →
            </button>
          )}
          
          {isQuizComplete && (
            <button
              onClick={restartQuiz}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <RotateCcw size={16} />
              Restart Quiz
            </button>
          )}
        </div>

        {/* Hint */}
        {showHint && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="text-yellow-600" size={16} />
              <span className="font-medium text-yellow-800">Hint:</span>
            </div>
            <p className="text-yellow-700 text-sm mb-2">{currentQ.hint}</p>
            {currentQ.shape && (
              <div className="mt-2">
                <p className="text-sm font-medium text-yellow-800 mb-1">Formula:</p>
                <div className="bg-white p-2 rounded inline-block">
                  {currentQ.formula ? (
                    <InlineMath math={currentQ.formula} />
                  ) : (
                    getShapeFormula(currentQ.shape)
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Answer Feedback */}
        {showAnswer && (
          <div className={`border rounded-lg p-4 mb-4 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <CheckCircle className="text-green-600" size={16} />
              ) : (
                <XCircle className="text-red-600" size={16} />
              )}
              <span className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </span>
            </div>
            <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              The correct answer is: <strong>{formatNumber(currentQ.answer)} {currentQ.unit}</strong>
            </p>
            {!isCorrect && (
              <p className="text-red-600 text-sm mt-2">
                Your answer: {userAnswer} {currentQ.unit}
              </p>
            )}
          </div>
        )}

        {/* Context */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-700 text-sm">
            <strong>Context:</strong> {currentQ.context}
          </p>
        </div>
      </div>

      {/* Final Score */}
      {isQuizComplete && (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 text-center">
          <Trophy className="mx-auto text-yellow-500 mb-4" size={48} />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
          <p className="text-lg text-gray-600 mb-4">
            Your final score: <span className="font-bold text-purple-600">{score} out of {quizData.questions.length}</span>
          </p>
          <p className="text-gray-600">
            {score === quizData.questions.length ? 'Perfect score! Excellent work!' :
             score >= quizData.questions.length * 0.8 ? 'Great job! You have a solid understanding.' :
             score >= quizData.questions.length * 0.6 ? 'Good effort! Keep practicing.' :
             'Keep studying and try again!'}
          </p>
        </div>
      )}
    </div>
  );
};