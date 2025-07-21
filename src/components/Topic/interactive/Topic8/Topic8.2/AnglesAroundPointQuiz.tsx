import { useState } from 'react';

export default function AnglesAroundPointQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Generate random angle problems
  const generateQuestion = () => {
    const knownAngle = Math.floor(Math.random() * 120) + 30; // 30-150°
    const oppositeAngle = knownAngle; // Vertically opposite angles are equal
    const adjacentAngle = 180 - knownAngle; // Adjacent angles are supplementary
    
    // Randomly choose which angle to ask for
    const questionType = Math.floor(Math.random() * 3); // 0: opposite, 1: adjacent, 2: other opposite
    
    let missingAngle, questionText, concept;
    
    switch (questionType) {
      case 0: // Ask for vertically opposite angle
        missingAngle = oppositeAngle;
        questionText = `If one angle is ${knownAngle}°, what is the vertically opposite angle x?`;
        concept = 'vertically opposite';
        break;
      case 1: // Ask for adjacent angle
        missingAngle = adjacentAngle;
        questionText = `If one angle is ${knownAngle}°, what is the adjacent angle x?`;
        concept = 'adjacent';
        break;
      case 2: // Ask for the other vertically opposite
        missingAngle = adjacentAngle;
        questionText = `If one angle is ${knownAngle}°, what is angle x?`;
        concept = 'other adjacent';
        break;
      default:
        missingAngle = oppositeAngle;
        questionText = `If one angle is ${knownAngle}°, what is the vertically opposite angle x?`;
        concept = 'vertically opposite';
    }
    
    return {
      knownAngle,
      missingAngle,
      adjacentAngle,
      questionText,
      concept,
      questionType
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
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Angle Quiz</h1>
          <p className="text-sm text-gray-600 mb-2">Vertically Opposite & Adjacent Angles</p>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Question {currentQuestion + 1}</span>
            <span>Score: {score}/{currentQuestion + (showAnswer ? 1 : 0)}</span>
          </div>
        </div>

        {/* SVG Diagram */}
        <div className="mb-6">
          <svg
            width="100%"
            viewBox="0 0 280 280"
            xmlns="http://www.w3.org/2000/svg"
            className="border rounded bg-slate-50"
          >
            {/* Intersecting lines */}
            <line x1="40" y1="40" x2="240" y2="240" stroke="#1f2937" strokeWidth="2"/>
            <line x1="240" y1="40" x2="40" y2="240" stroke="#1f2937" strokeWidth="2"/>
            
            {/* Center intersection point */}
            <circle cx="140" cy="140" r="3" fill="#1f2937"/>
            
            {/* Angle arcs based on question type */}
            {question.questionType === 0 && (
              <>
                {/* Known angle (top) */}
                <path 
                  d="M 120 110 A 25 25 0 0 1 160 110" 
                  stroke="#dc2626" 
                  strokeWidth="3" 
                  fill="none"
                />
                {/* Missing angle (bottom) - vertically opposite */}
                <path 
                  d="M 160 170 A 25 25 0 0 1 120 170" 
                  stroke="#059669" 
                  strokeWidth="3" 
                  fill="none"
                />
                {/* Labels */}
                <text x="140" y="100" fontSize="12" fontFamily="serif" fill="#dc2626" textAnchor="middle" fontWeight="bold">
                  {question.knownAngle}°
                </text>
                <text x="140" y="185" fontSize="14" fontFamily="serif" fill="#059669" textAnchor="middle" fontWeight="bold">
                  x = ?
                </text>
              </>
            )}
            
            {question.questionType === 1 && (
              <>
                {/* Known angle (top) */}
                <path 
                  d="M 120 110 A 25 25 0 0 1 160 110" 
                  stroke="#dc2626" 
                  strokeWidth="3" 
                  fill="none"
                />
                {/* Missing angle (right) - adjacent */}
                <path 
                  d="M 170 120 A 30 30 0 0 1 170 160" 
                  stroke="#059669" 
                  strokeWidth="3" 
                  fill="none"
                />
                {/* Labels */}
                <text x="140" y="100" fontSize="12" fontFamily="serif" fill="#dc2626" textAnchor="middle" fontWeight="bold">
                  {question.knownAngle}°
                </text>
                <text x="190" y="145" fontSize="14" fontFamily="serif" fill="#059669" textAnchor="middle" fontWeight="bold">
                  x = ?
                </text>
              </>
            )}
            
            {question.questionType === 2 && (
              <>
                {/* Known angle (top) */}
                <path 
                  d="M 120 110 A 25 25 0 0 1 160 110" 
                  stroke="#dc2626" 
                  strokeWidth="3" 
                  fill="none"
                />
                {/* Missing angle (left) - other adjacent */}
                <path 
                  d="M 110 160 A 30 30 0 0 1 110 120" 
                  stroke="#059669" 
                  strokeWidth="3" 
                  fill="none"
                />
                {/* Labels */}
                <text x="140" y="100" fontSize="12" fontFamily="serif" fill="#dc2626" textAnchor="middle" fontWeight="bold">
                  {question.knownAngle}°
                </text>
                <text x="90" y="145" fontSize="14" fontFamily="serif" fill="#059669" textAnchor="middle" fontWeight="bold">
                  x = ?
                </text>
              </>
            )}
            
            {/* Instructions */}
            <text x="140" y="250" fontSize="11" fontFamily="sans-serif" fill="#6b7280" textAnchor="middle">
              Two intersecting lines
            </text>
          </svg>
        </div>

        {/* Question */}
        <div className="mb-4">
          <p className="text-center text-gray-700 mb-4">
            {question.questionText}
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
              {question.concept === 'vertically opposite' && (
                <>
                  Vertically opposite angles are equal<br/>
                  x = {question.knownAngle}°
                </>
              )}
              {(question.concept === 'adjacent' || question.concept === 'other adjacent') && (
                <>
                  Adjacent angles are supplementary<br/>
                  x = 180° - {question.knownAngle}°<br/>
                  x = {question.missingAngle}°
                </>
              )}
            </p>
          </div>
        )}

        {/* Quick reference */}
        <div className="mt-4 p-3 bg-gray-50 rounded-md">
          <p className="text-xs text-gray-600">
            <strong>Remember:</strong> Vertically opposite angles are equal. Adjacent angles sum to 180°.
          </p>
        </div>
      </div>
    </div>
  );
}