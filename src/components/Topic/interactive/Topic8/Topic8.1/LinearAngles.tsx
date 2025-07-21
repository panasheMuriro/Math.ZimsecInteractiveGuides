import { useState } from 'react';

export default function LinearAngles() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Generate random angle problems
  const generateQuestion = () => {
    const angle1 = Math.floor(Math.random() * 120) + 20; // 20-140°
    const angle2 = 180 - angle1; // The missing angle
    const knownAngle = Math.floor(Math.random() * (angle1 - 10)) + 10; // Known part of angle1
    const missingAngle = angle1 - knownAngle + angle2; // What user needs to find
    
    return {
      knownAngle1: knownAngle,
      knownAngle2: angle1 - knownAngle,
      missingAngle: missingAngle,
      totalCheck: knownAngle + (angle1 - knownAngle) + missingAngle
    };
  };

  const [question, setQuestion] = useState(() => generateQuestion());

  const checkAnswer = () => {
    const answer = parseInt(userAnswer);
    const correct = Math.abs(answer - question.missingAngle) <= 1; // Allow 1° tolerance
    
    setIsCorrect(correct);
    setShowAnswer(true);
    
    if (correct) {
      setFeedback('Correct! 🎉');
      setScore(score + 1);
    } else {
      setFeedback(`Not quite! The answer is ${question.missingAngle}°`);
    }
  };

  const nextQuestion = () => {
    setQuestion(generateQuestion());
    setUserAnswer('');
    setFeedback('');
    setShowAnswer(false);
    setIsCorrect(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuestion(generateQuestion());
    setUserAnswer('');
    setFeedback('');
    setShowAnswer(false);
    setIsCorrect(false);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Angle Quiz</h1>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Question {currentQuestion + 1}</span>
            <span>Score: {score}/{currentQuestion + (showAnswer ? 1 : 0)}</span>
          </div>
        </div>

        {/* SVG Diagram */}
        <div className="mb-6">
          <svg
            width="100%"
            viewBox="0 0 320 200"
            xmlns="http://www.w3.org/2000/svg"
            className="border rounded bg-slate-50"
          >
            {/* Straight line */}
            <line
              x1="20"
              y1="100"
              x2="300"
              y2="100"
              stroke="#1f2937"
              strokeWidth="2"
            />

            {/* Center point O */}
            <circle cx="160" cy="100" r="3" fill="#1f2937" />

            {/* Points A and B on the line */}
            <circle cx="50" cy="100" r="2.5" fill="#dc2626" />
            <circle cx="270" cy="100" r="2.5" fill="#059669" />

            {/* Point C creating the angles */}
            <circle cx="200" cy="40" r="2.5" fill="#2563eb" />

            {/* Ray OC */}
            <line
              x1="160"
              y1="100"
              x2="200"
              y2="40"
              stroke="#2563eb"
              strokeWidth="2"
            />

            {/* Angle AOC arc */}
            <path
              d="M 130 100 A 30 30 0 0 1 175 75"
              stroke="#dc2626"
              strokeWidth="2"
              fill="none"
            />

            {/* Angle COB arc */}
            <path
              d="M 175 75 A 25 25 0 0 1 220 100"
              stroke="#059669"
              strokeWidth="2"
              fill="none"
            />

            {/* Point labels */}
            <text
              x="50"
              y="90"
              fontSize="12"
              fontFamily="serif"
              fill="#dc2626"
              textAnchor="middle"
              fontWeight="bold"
            >
              A
            </text>
            <text
              x="160"
              y="90"
              fontSize="12"
              fontFamily="serif"
              fill="#1f2937"
              textAnchor="middle"
              fontWeight="bold"
            >
              O
            </text>
            <text
              x="270"
              y="90"
              fontSize="12"
              fontFamily="serif"
              fill="#059669"
              textAnchor="middle"
              fontWeight="bold"
            >
              B
            </text>
            <text
              x="205"
              y="35"
              fontSize="12"
              fontFamily="serif"
              fill="#2563eb"
              textAnchor="middle"
              fontWeight="bold"
            >
              C
            </text>

            {/* Angle labels with values */}
            <text
              x="145"
              y="80"
              fontSize="11"
              fontFamily="serif"
              fill="#dc2626"
              textAnchor="middle"
              fontWeight="bold"
            >
              {question.knownAngle1}°
            </text>

            <text
              x="195"
              y="80"
              fontSize="11"
              fontFamily="serif"
              fill="#059669"
              textAnchor="middle"
              fontWeight="bold"
            >
              ?
            </text>

            {/* Formula */}
            <text
              x="160"
              y="150"
              fontSize="14"
              fontFamily="serif"
              fill="#1f2937"
              textAnchor="middle"
              fontWeight="bold"
            >
              ∠AOC + ∠COB = 180°
            </text>

            <text
              x="160"
              y="170"
              fontSize="12"
              fontFamily="serif"
              fill="#374151"
              textAnchor="middle"
            >
              {question.knownAngle1}° + ? = 180°
            </text>
          </svg>
        </div>

        {/* Question */}
        <div className="mb-4">
          <p className="text-center text-gray-700 mb-4">
            If ∠AOC = {question.knownAngle1}°, what is ∠COB?
          </p>
          
          <div className="flex gap-2">
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter angle in degrees"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={showAnswer}
            />
            <span className="flex items-center text-gray-600">°</span>
          </div>
        </div>

        {/* Feedback */}
        {feedback && (
          <div className={`text-center mb-4 p-3 rounded-md ${
            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {feedback}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-2">
          {!showAnswer ? (
            <button
              onClick={checkAnswer}
              disabled={!userAnswer.trim()}
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              Next Question
            </button>
          )}
          
          <button
            onClick={resetQuiz}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Reset
          </button>
        </div>

        {/* Show working when answer is revealed */}
        {showAnswer && (
          <div className="mt-4 p-3 bg-blue-50 rounded-md">
            <p className="text-sm text-gray-700">
              <strong>Working:</strong><br/>
              ∠COB = 180° - ∠AOC<br/>
              ∠COB = 180° - {question.knownAngle1}°<br/>
              ∠COB = {question.missingAngle}°
            </p>
          </div>
        )}
      </div>
    </div>
  );
}