import { useState, useEffect } from 'react';
import { InlineMath } from 'react-katex';

interface TriangleSides {
  a: number | null;
  b: number | null;
  c: number | null;
}

const PythagorasTheorem: React.FC = () => {
  const [sides, setSides] = useState<TriangleSides>({ a: null, b: null, c: null });
  const [error, setError] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [step, setStep] = useState<number>(0);
  const [quizMode, setQuizMode] = useState<'find_c' | 'find_a' | 'find_b'>('find_c');
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const [showSteps, setShowSteps] = useState<boolean>(false);
  const [questionNum, setQuestionNum] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  // Initialize quiz with random values (max 5 for visualization)
  useEffect(() => {
    const newA = Math.floor(Math.random() * 5) + 1;
    const newB = Math.floor(Math.random() * 5) + 1;
    setSides({ a: newA, b: newB, c: null });
    setStep(0);
    setUserAnswer(null);
    setError('');
    setResult('');
  }, [quizMode, questionNum]);

  const handleInputChange = (value: string) => {
    const numValue = value === '' ? null : parseFloat(value);
    setUserAnswer(numValue);
    setError('');
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
    setError('');
    setResult('');
  };

  const checkAnswer = () => {
    const { a, b, c } = sides;
    let expected: number;
    if (quizMode === 'find_c' && a && b) {
      expected = Math.sqrt(a * a + b * b);
    } else if (quizMode === 'find_a' && b && c) {
      expected = Math.sqrt(c! * c! - b * b);
    } else if (quizMode === 'find_b' && a && c) {
      expected = Math.sqrt(c! * c! - a * a);
    } else {
      setError('Invalid quiz state');
      return;
    }
    if (userAnswer !== null && Math.abs(userAnswer - expected) < 0.01) {
      setResult('Correct! Well done!');
      setScore(prev => prev + 1);
    } else {
      setError(`Incorrect. The correct answer is approximately ${expected.toFixed(2)}`);
    }
    if (questionNum < 5) {
      setQuestionNum(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
    setStep(0);
    setUserAnswer(null);
  };

  const restartQuiz = () => {
    setSides({ a: null, b: null, c: null });
    setQuestionNum(1);
    setScore(0);
    setQuizCompleted(false);
    setQuizMode('find_c');
    setStep(0);
    setUserAnswer(null);
    setError('');
    setResult('');
    setShowSteps(false);
  };

  const switchQuizMode = () => {
    setQuizMode(prev => {
      if (prev === 'find_c') return 'find_a';
      if (prev === 'find_a') return 'find_b';
      return 'find_c';
    });
  };

  // Grid visualization parameters
  const gridSize = 10;
  const a = Math.min(sides.a || 3, 5);
  const b = Math.min(sides.b || 4, 5);
  const c = sides.c !== null ? Math.min(sides.c, 5) : Math.sqrt(a * a + b * b);

  const renderGrid = (side: number, xOffset: number, color: string, label: string) => {
    const squares = [];
    const sideInt = Math.floor(side);
    const totalSquares = sideInt * sideInt;
    for (let i = 0; i < sideInt; i++) {
      for (let j = 0; j < sideInt; j++) {
        squares.push(
          <rect
            key={`${label}-${i}-${j}`}
            x={xOffset + i * gridSize}
            y={150 - (j + 1) * gridSize}
            width={gridSize}
            height={gridSize}
            fill={color}
            stroke="black"
            strokeWidth="0.5"
          />
        );
      }
    }
    return (
      <>
        {squares}
        <text x={xOffset + sideInt * gridSize / 2} y={160} fontSize="12" textAnchor="middle">
          {label} ({sideInt}² = {totalSquares})
        </text>
        <text x={xOffset + sideInt * gridSize / 2} y={170} fontSize="10" textAnchor="middle">
          Rendered: {squares.length}
        </text>
      </>
    );
  };

  // Quiz steps
  const getSteps = () => {
    const { a, b } = sides;
    if (!a || !b) return [];
    if (quizMode === 'find_c') {
      return [
        `Identify the legs: a = ${a}, b = ${b}.`,
        <InlineMath key="step1" math={`a^2 = ${a}^2 = ${a * a}`} />,
        <InlineMath key="step2" math={`b^2 = ${b}^2 = ${b * b}`} />,
        <InlineMath key="step3" math={`a^2 + b^2 = ${a * a} + ${b * b} = ${a * a + b * b}`} />,
        <InlineMath key="step4" math={`c = \\sqrt{${a}^2 + ${b}^2} = \\sqrt{${a * a + b * b}} \\approx ${Math.sqrt(a * a + b * b).toFixed(2)}`} />
      ];
    } else if (quizMode === 'find_a') {
      const c = sides.c || 5;
      return [
        `Identify the hypotenuse and leg: c = ${c}, b = ${b}.`,
        <InlineMath key="step1" math={`c^2 = ${c}^2 = ${c * c}`} />,
        <InlineMath key="step2" math={`b^2 = ${b}^2 = ${b * b}`} />,
        <InlineMath key="step3" math={`c^2 - b^2 = ${c * c} - ${b * b} = ${c * c - b * b}`} />,
        <InlineMath key="step4" math={`a = \\sqrt{${c}^2 - ${b}^2} = \\sqrt{${c * c - b * b}} \\approx ${Math.sqrt(c * c - b * b).toFixed(2)}`} />
      ];
    } else if (quizMode === 'find_b') {
      const c = sides.c || 5;
      return [
        `Identify the hypotenuse and leg: c = ${c}, a = ${a}.`,
        <InlineMath key="step1" math={`c^2 = ${c}^2 = ${c * c}`} />,
        <InlineMath key="step2" math={`a^2 = ${a}^2 = ${a * a}`} />,
        <InlineMath key="step3" math={`c^2 - a^2 = ${c * c} - ${a * a} = ${c * c - a * a}`} />,
        <InlineMath key="step4" math={`b = \\sqrt{${c}^2 - ${a}^2} = \\sqrt{${c * c - a * a}} \\approx ${Math.sqrt(c * c - a * a).toFixed(2)}`} />
      ];
    }
    return [];
  };

  const steps = getSteps();
  const currentQuestion = 
    quizMode === 'find_c' ? `What is the hypotenuse c? (a = ${a}, b = ${b})` :
    quizMode === 'find_a' ? `What is the leg a? (b = ${b}, c = ${sides.c || 5})` :
    `What is the leg b? (a = ${a}, c = ${sides.c || 5})`;

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-2xl font-bold text-center mb-4">[WIP]Pythagoras Theorem Quiz</h1>
      
      {/* Question Number */}
      <div className="mb-4 text-center">
        <p className="text-lg">Question {questionNum} of 5</p>
      </div>

      {/* Quiz Mode Switch */}
      <div className="mb-4">
        <button
          onClick={switchQuizMode}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          disabled={questionNum > 1}
        >
          Switch to {quizMode === 'find_c' ? 'Find a' : quizMode === 'find_a' ? 'Find b' : 'Find c'}
        </button>
      </div>

      {/* Theorem Explanation */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Formula: a² + b² = c²</h2>
        <p className="text-sm text-gray-700 mb-2">
          Solve for the missing side in a right-angled triangle.
        </p>
      </div>

      {/* Triangle and Grid Visualization */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 flex justify-center">
        <svg width="300" height="200" viewBox="0 0 300 200" className="border">
          {/* Triangle */}
          <polygon
            points={`10,150 ${10 + a * gridSize},150 10,${150 - b * gridSize}`}
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
          <text x="5" y="160" fontSize="12">a = {a}</text>
          <text x="30" y="140" fontSize="12">b = {b}</text>
          <text x="30" y="110" fontSize="12">c = ?</text>
          
          {/* Grids for a^2, b^2, c^2 */}
          {renderGrid(a, 80, 'rgba(255,0,0,0.2)', 'a²')}
          {renderGrid(b, 140, 'rgba(0,255,0,0.2)', 'b²')}
          {renderGrid(c, 200, 'rgba(0,0,255,0.2)', 'c²')}
        </svg>
      </div>

      {/* Quiz Question */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Question</h2>
        <p className="text-sm text-gray-700 mb-2">{currentQuestion}</p>
        <input
          type="number"
          value={userAnswer ?? ''}
          onChange={(e) => handleInputChange(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2"
          placeholder="Enter your answer"
        />
        <button
          onClick={checkAnswer}
          className="mt-2 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
        >
          Submit Answer
        </button>
      </div>

      {/* Steps Button and Display */}
      <div className="mb-6">
        <button
          onClick={() => setShowSteps(!showSteps)}
          className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
        >
          {showSteps ? 'Hide Steps' : 'Show Steps'}
        </button>
        {showSteps && (
          <div className="mt-4 bg-white p-4 rounded-lg shadow">
            <ol className="list-decimal list-inside text-sm text-gray-700">
              {steps.slice(0, step + 1).map((stepContent, index) => (
                <li key={index} className="mb-2">{stepContent}</li>
              ))}
            </ol>
            <button
              onClick={nextStep}
              className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              disabled={step >= steps.length - 1}
            >
              Next Step
            </button>
          </div>
        )}
      </div>

      {/* Result and Error */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {result && <p className="text-green-500 text-sm mb-4">{result}</p>}

      {/* Score and Restart */}
      {quizCompleted && (
        <div className="bg-white p-4 rounded-lg shadow mb-6 text-center">
          <h2 className="text-lg font-semibold mb-2">Quiz Completed!</h2>
          <p className="text-sm text-gray-700 mb-2">Your Score: {score} out of 5</p>
          <button
            onClick={restartQuiz}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default PythagorasTheorem;