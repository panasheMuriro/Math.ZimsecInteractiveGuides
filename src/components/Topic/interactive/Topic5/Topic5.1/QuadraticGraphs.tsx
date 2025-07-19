import React, { useState, useEffect, useRef } from 'react';
import JXG from 'jsxgraph';
import '../../../../../assets/jsxgraph.css';

interface QuizQuestion {
  equation: string;
  a: number;
  b: number;
  c: number;
  domain: [number, number];
  correctAnswers: {
    vertex: [number, number];
    yIntercept: number;
    roots: [number | null, number | null];
  };
}

const QuadraticGraphs: React.FC = () => {
  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [userAnswers, setUserAnswers] = useState({
    vertexX: '',
    vertexY: '',
    yIntercept: '',
    root1: '',
    root2: ''
  });
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);

  // Generate random quadratic equation
  const generateQuestion = (): QuizQuestion => {
    const a = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 3) + 1);
    const b = Math.floor(Math.random() * 8) - 4;
    const c = Math.floor(Math.random() * 10) - 3;
    
    // Calculate properties
    const vertexX = -b / (2 * a);
    const vertexY = a * vertexX * vertexX + b * vertexX + c;
    const discriminant = b * b - 4 * a * c;
    
    let root1: number | null = null;
    let root2: number | null = null;
    
    if (discriminant >= 0) {
      root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    }
    
    // Determine domain to show important features
    const xMin = Math.min(vertexX, root1 || vertexX, root2 || vertexX) - 2;
    const xMax = Math.max(vertexX, root1 || vertexX, root2 || vertexX) + 2;
    
    return {
      equation: `y = ${a}x² ${b >= 0 ? '+' : '-'} ${Math.abs(b)}x ${c >= 0 ? '+' : '-'} ${Math.abs(c)}`,
      a,
      b,
      c,
      domain: [xMin, xMax],
      correctAnswers: {
        vertex: [vertexX, vertexY],
        yIntercept: c,
        roots: [root1, root2]
      }
    };
  };

  // Initialize quiz
  useEffect(() => {
    setCurrentQuestion(generateQuestion());
  }, []);

  // Draw graph when question changes
  useEffect(() => {
    if (!currentQuestion || !boardRef.current) return;

    const { a, b, c, domain } = currentQuestion;
    const board = JXG.JSXGraph.initBoard(boardRef.current, {
      boundingbox: [domain[0], domain[1], domain[1], domain[0]],
      axis: true,
      showNavigation: false,
      showCopyright: false,
      pan: { enabled: false },
      zoom: false,
    //   responsive: true
    });

    // Plot quadratic function
    board.create('functiongraph', [
      (x: number) => a * x * x + b * x + c,
      domain[0],
      domain[1]
    ], {
      strokeWidth: 2,
      strokeColor: '#3b82f6',
      highlight: false
    });

    return () => {
      JXG.JSXGraph.freeBoard(board);
    };
  }, [currentQuestion]);

  const handleAnswerSubmit = () => {
    if (!currentQuestion) return;

    const { correctAnswers } = currentQuestion;
    let correctCount = 0;
    const feedbackMessages: string[] = [];

    // Check vertex
    const vertexXCorrect = parseFloat(userAnswers.vertexX).toFixed(2) === correctAnswers.vertex[0].toFixed(2);
    const vertexYCorrect = parseFloat(userAnswers.vertexY).toFixed(2) === correctAnswers.vertex[1].toFixed(2);
    
    if (vertexXCorrect && vertexYCorrect) {
      correctCount++;
    } else {
      feedbackMessages.push(`Vertex should be (${correctAnswers.vertex[0].toFixed(2)}, ${correctAnswers.vertex[1].toFixed(2)})`);
    }

    // Check y-intercept
    const yInterceptCorrect = parseFloat(userAnswers.yIntercept).toFixed(2) === correctAnswers.yIntercept.toFixed(2);
    
    if (yInterceptCorrect) {
      correctCount++;
    } else {
      feedbackMessages.push(`Y-intercept should be ${correctAnswers.yIntercept.toFixed(2)}`);
    }

    // Check roots
    let rootsCorrect = 0;
    const root1Correct = userAnswers.root1 === '' || 
      (correctAnswers.roots[0] !== null && 
       parseFloat(userAnswers.root1).toFixed(2) === correctAnswers.roots[0].toFixed(2));
    
    const root2Correct = userAnswers.root2 === '' || 
      (correctAnswers.roots[1] !== null && 
       parseFloat(userAnswers.root2).toFixed(2) === correctAnswers.roots[1].toFixed(2));

    if (root1Correct && root2Correct) {
      rootsCorrect = 2;
    } else {
      const expectedRoots = correctAnswers.roots.filter(r => r !== null).map(r => r!.toFixed(2));
      feedbackMessages.push(`Roots should be ${expectedRoots.join(' and ')} or leave blank if none`);
    }

    correctCount += rootsCorrect;

    // Calculate score (5 possible points: vertex x/y, y-int, root1, root2)
    const totalPossible = 5;
    const newScore = correctCount / totalPossible * 100;

    setScore(newScore);
    setFeedback(feedbackMessages.length > 0 ? feedbackMessages.join('\n') : 'All answers correct!');
    setQuizCompleted(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(generateQuestion());
    setUserAnswers({
      vertexX: '',
      vertexY: '',
      yIntercept: '',
      root1: '',
      root2: ''
    });
    setFeedback('');
    setShowHint(false);
    setQuizCompleted(false);
  };

  const handleShowHint = () => {
    if (!currentQuestion) return;
    
    const hint = `
      Remember:
      - Vertex x = -b/(2a)
      - Vertex y: plug x back into equation
      - Y-intercept is the constant term (c)
      - Roots: use quadratic formula
    `;
    setShowHint(true);
    setFeedback(hint);
  };

  if (!currentQuestion) return <div>Loading quiz...</div>;

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Quadratic Graph Quiz</h2>
      
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Equation: {currentQuestion.equation}</h3>
        <div ref={boardRef} className="w-full h-64 border rounded-md"></div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Vertex X</label>
          <input
            type="number"
            step="0.01"
            value={userAnswers.vertexX}
            onChange={(e) => setUserAnswers({...userAnswers, vertexX: e.target.value})}
            className="w-full p-2 border rounded"
            disabled={quizCompleted}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Vertex Y</label>
          <input
            type="number"
            step="0.01"
            value={userAnswers.vertexY}
            onChange={(e) => setUserAnswers({...userAnswers, vertexY: e.target.value})}
            className="w-full p-2 border rounded"
            disabled={quizCompleted}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Y-intercept</label>
          <input
            type="number"
            step="0.01"
            value={userAnswers.yIntercept}
            onChange={(e) => setUserAnswers({...userAnswers, yIntercept: e.target.value})}
            className="w-full p-2 border rounded"
            disabled={quizCompleted}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Root 1 (optional)</label>
          <input
            type="number"
            step="0.01"
            value={userAnswers.root1}
            onChange={(e) => setUserAnswers({...userAnswers, root1: e.target.value})}
            className="w-full p-2 border rounded"
            disabled={quizCompleted}
            placeholder="Leave blank if none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Root 2 (optional)</label>
          <input
            type="number"
            step="0.01"
            value={userAnswers.root2}
            onChange={(e) => setUserAnswers({...userAnswers, root2: e.target.value})}
            className="w-full p-2 border rounded"
            disabled={quizCompleted}
            placeholder="Leave blank if none"
          />
        </div>
      </div>
      
      {feedback && (
        <div className={`p-3 mb-4 rounded ${feedback.includes('correct') ? 'bg-green-100' : 'bg-yellow-100'}`}>
          {feedback.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
      
      {quizCompleted && (
        <div className="mb-4 p-3 bg-blue-100 rounded">
          <p>Your score: <strong>{score.toFixed(0)}%</strong></p>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-2">
        {!quizCompleted ? (
          <>
            <button
              onClick={handleAnswerSubmit}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Submit Answers
            </button>
            <button
              onClick={handleShowHint}
              disabled={showHint}
              className={`flex-1 py-2 px-4 rounded ${showHint ? 'bg-gray-300' : 'bg-yellow-500 hover:bg-yellow-600 text-white'}`}
            >
              {showHint ? 'Hint Shown' : 'Get Hint'}
            </button>
          </>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Next Question
          </button>
        )}
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p><strong>Tips:</strong></p>
        <ul className="list-disc pl-5">
          <li>Vertex form: x = -b/(2a)</li>
          <li>Y-intercept is the constant term (c)</li>
          <li>Roots may not exist (when discriminant is negative)</li>
        </ul>
      </div>
    </div>
  );
};

export default QuadraticGraphs;