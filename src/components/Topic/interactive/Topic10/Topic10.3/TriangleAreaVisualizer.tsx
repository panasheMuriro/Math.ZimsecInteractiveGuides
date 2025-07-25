import React, { useState, useRef, useEffect } from 'react';
import { Calculator, Info, Eye, EyeOff, ChevronRight, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface Triangle {
  a: number;
  b: number;
  c: number;
  A: number;
  B: number;
  C: number;
}

interface Problem {
  given: Partial<Triangle>;
  description: string;
  steps: string[];
  answer: number;
}

const TriangleAreaVisualizer: React.FC = () => {
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
  const [triangle, setTriangle] = useState<Triangle>({
    a: 5, b: 7, c: 6, A: 60, B: 70, C: 50
  });
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showSteps, setShowSteps] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showFormula, setShowFormula] = useState<boolean>(true);
  const [answerSubmitted, setAnswerSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const problems: Problem[] = [
    {
      given: { a: 5, b: 7, C: 60 },
      description: 'Given side a = 5, side b = 7, and included angle C = 60°, find the area of the triangle.',
      steps: [
        'Use the area formula: Area = ½ × a × b × sin(C)',
        'Substitute the known values: Area = ½ × 5 × 7 × sin(60°)',
        'Calculate: Area = ½ × 35 × √3/2',
        'Calculate: Area = 35 × 0.866 / 2 ≈ 30.31',
        'Final answer: Area ≈ 30.31 cm²'
      ],
      answer: 30.31
    },
    {
      given: { b: 8, c: 10, A: 45 },
      description: 'Given side b = 8, side c = 10, and included angle A = 45°, find the area of the triangle.',
      steps: [
        'Use the area formula: Area = ½ × b × c × sin(A)',
        'Substitute the known values: Area = ½ × 8 × 10 × sin(45°)',
        'Calculate: Area = ½ × 80 × √2/2',
        'Calculate: Area = 80 × 0.707 / 2 ≈ 28.28',
        'Final answer: Area ≈ 28.28 cm²'
      ],
      answer: 28.28
    },
    {
      given: { a: 6, c: 9, B: 30 },
      description: 'Given side a = 6, side c = 9, and included angle B = 30°, find the area of the triangle.',
      steps: [
        'Use the area formula: Area = ½ × a × c × sin(B)',
        'Substitute the known values: Area = ½ × 6 × 9 × sin(30°)',
        'Calculate: Area = ½ × 54 × 0.5',
        'Calculate: Area = 54 / 4 = 13.5',
        'Final answer: Area = 13.5 cm²'
      ],
      answer: 13.5
    },
    {
      given: { a: 4, b: 5, C: 120 },
      description: 'Given side a = 4, side b = 5, and included angle C = 120°, find the area of the triangle.',
      steps: [
        'Use the area formula: Area = ½ × a × b × sin(C)',
        'Substitute the known values: Area = ½ × 4 × 5 × sin(120°)',
        'Calculate: Area = ½ × 20 × √3/2',
        'Calculate: Area = 20 × 0.866 / 2 ≈ 8.66',
        'Final answer: Area ≈ 8.66 cm²'
      ],
      answer: 8.66
    }
  ];

  const generateTriangleFromProblem = (problem: Problem): Triangle => {
    const newTriangle = { ...triangle };
    Object.entries(problem.given).forEach(([key, value]) => {
      if (value !== undefined) {
        newTriangle[key as keyof Triangle] = value;
      }
    });
    const knownAngle = Object.keys(problem.given).find(k => ['A', 'B', 'C'].includes(k));
    if (knownAngle) {
      const totalKnown = newTriangle[knownAngle as keyof Triangle];
      const remaining = 180 - totalKnown;
      const angles = ['A', 'B', 'C'].filter(a => a !== knownAngle);
      newTriangle[angles[0] as keyof Triangle] = remaining * 0.6;
      newTriangle[angles[1] as keyof Triangle] = remaining * 0.4;
    }
    return newTriangle;
  };

  const startNewProblem = (problemIndex: number): void => {
    const problem = problems[problemIndex];
    setCurrentProblem(problem);
    setTriangle(generateTriangleFromProblem(problem));
    setUserAnswer('');
    setShowSteps(false);
    setCurrentStep(0);
    setAnswerSubmitted(false);
    setIsCorrect(null);
  };

  const checkAnswer = (): void => {
    if (!currentProblem || userAnswer === '') return;
    const userValue = parseFloat(userAnswer);
    const tolerance = 0.2;
    const correct = Math.abs(userValue - currentProblem.answer) <= tolerance;
    setIsCorrect(correct);
    setAnswerSubmitted(true);
  };

  const showNextStep = (): void => {
    if (currentStep < (currentProblem?.steps.length || 0) - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const showAllSteps = (): void => {
    setCurrentStep((currentProblem?.steps.length || 1) - 1);
  };

  const drawTriangle = (): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const scale = Math.min(canvas.width, canvas.height) * 0.25;

    const A_rad = triangle.A * Math.PI / 180;
    const vertices = {
      A: { x: centerX - scale * 0.8, y: centerY + scale * 0.5 },
      B: { x: centerX + scale * 0.8, y: centerY + scale * 0.5 },
      C: {
        x: centerX - scale * 0.8 + (triangle.c / triangle.a) * scale * 1.6 * Math.cos(A_rad),
        y: centerY + scale * 0.5 - (triangle.c / triangle.a) * scale * 1.6 * Math.sin(A_rad)
      }
    };

    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(vertices.A.x, vertices.A.y);
    ctx.lineTo(vertices.B.x, vertices.B.y);
    ctx.lineTo(vertices.C.x, vertices.C.y);
    ctx.closePath();
    ctx.stroke();

    const shouldShow = (key: keyof Triangle): boolean => {
      if (!currentProblem) return true;
      return currentProblem.given[key] !== undefined;
    };

    const getDisplayValue = (key: keyof Triangle): string | number => {
      if (!currentProblem) return triangle[key];
      return currentProblem.given[key] ?? '?';
    };

    ctx.font = 'bold 16px Arial';
    const midAB = { x: (vertices.A.x + vertices.B.x) / 2, y: (vertices.A.y + vertices.B.y) / 2 };
    const midAC = { x: (vertices.A.x + vertices.C.x) / 2, y: (vertices.A.y + vertices.C.y) / 2 };
    const midBC = { x: (vertices.B.x + vertices.C.x) / 2, y: (vertices.B.y + vertices.C.y) / 2 };

    ctx.fillStyle = currentProblem?.given.c ? '#dc2626' : '#666';
    ctx.fillText(`a = ${shouldShow('a') ? getDisplayValue('a') : '?'}`, midBC.x + 10, midBC.y - 5);
    ctx.fillStyle = currentProblem?.given.b ? '#dc2626' : '#666';
    ctx.fillText(`b = ${shouldShow('b') ? getDisplayValue('b') : '?'}`, midAC.x - 35, midAC.y - 5);
    ctx.fillStyle = currentProblem?.given.a ? '#dc2626' : '#666';
    ctx.fillText(`c = ${shouldShow('c') ? getDisplayValue('c') : '?'}`, midAB.x - 10, midAB.y + 25);

    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = currentProblem?.given.A ? '#059669' : '#666';
    ctx.fillText(`A = ${shouldShow('A') ? getDisplayValue('A') + '°' : '?'}`, vertices.A.x - 25, vertices.A.y - 15);
    ctx.fillStyle = currentProblem?.given.B ? '#059669' : '#666';
    ctx.fillText(`B = ${shouldShow('B') ? getDisplayValue('B') + '°' : '?'}`, vertices.B.x + 5, vertices.B.y - 15);
    ctx.fillStyle = currentProblem?.given.C ? '#059669' : '#666';
    ctx.fillText(`C = ${shouldShow('C') ? getDisplayValue('C') + '°' : '?'}`, vertices.C.x - 5, vertices.C.y - 20);

    if (currentProblem?.given.A || currentProblem?.given.B || currentProblem?.given.C) {
      ctx.strokeStyle = '#ff6b35';
      ctx.lineWidth = 4;
      const angleToHighlight = currentProblem.given.A ? 'A' : currentProblem.given.B ? 'B' : 'C';
      const vertex = angleToHighlight === 'A' ? vertices.A : angleToHighlight === 'B' ? vertices.B : vertices.C;
      ctx.beginPath();
      ctx.arc(vertex.x, vertex.y, 20, 0, Math.PI / 4);
      ctx.stroke();
    }
  };

  useEffect(() => {
    drawTriangle();
  }, [triangle, currentProblem, answerSubmitted, isCorrect]);

  useEffect(() => {
    startNewProblem(0);
  }, []);

  if (!currentProblem) return null;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Triangle Area Practice</h2>
        <p className="text-sm text-gray-600">Calculate triangle areas using the trigonometric area formula</p>
      </div>

      <div className="mb-4">
        <button
          onClick={() => setShowFormula(!showFormula)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          {showFormula ? <EyeOff size={16} /> : <Eye size={16} />}
          {showFormula ? 'Hide' : 'Show'} Formula
        </button>
        {showFormula && (
          <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-center font-mono text-sm text-blue-800 space-y-1">
              <div><strong>Area Formula:</strong> Area = ½ × a × b × sin(C)</div>
              <div><strong>Alternative forms:</strong></div>
              <div>Area = ½ × b × c × sin(A)</div>
              <div>Area = ½ × a × c × sin(B)</div>
            </div>
          </div>
        )}
      </div>

      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-semibold text-yellow-800 mb-2">Problem:</h3>
        <p className="text-yellow-700">{currentProblem.description}</p>
        <div className="mt-2 text-xs text-yellow-600">
          Use: Area = ½ × a × b × sin(C)
        </div>
      </div>

      <div className="mb-6">
        <canvas
          ref={canvasRef}
          width={350}
          height={250}
          className="border border-gray-300 rounded-lg w-full max-w-sm mx-auto block bg-gray-50"
        />
        <p className="text-xs text-center text-gray-500 mt-2">
          Orange highlight shows the included angle
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="font-semibold text-gray-700">Your answer for area:</label>
          <span className="text-xs text-gray-500">(to 2 decimal places)</span>
        </div>
        <div className="flex gap-2">
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={answerSubmitted}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
            placeholder="Enter your answer..."
            step="0.01"
          />
          <button
            onClick={checkAnswer}
            disabled={userAnswer === '' || answerSubmitted}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 transition-colors"
          >
            Check
          </button>
        </div>
        {answerSubmitted && (
          <div className={`mt-2 flex items-center gap-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? <CheckCircle size={16} /> : <XCircle size={16} />}
            {isCorrect
              ? `Correct! The area is ${currentProblem.answer} cm²`
              : `Incorrect. The correct area is ${currentProblem.answer} cm²`}
          </div>
        )}
      </div>

      <div className="mb-6">
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setShowSteps(!showSteps)}
            className="flex items-center gap-1 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
          >
            <Calculator size={14} />
            {showSteps ? 'Hide' : 'Show'} Solution Steps
          </button>
          {showSteps && (
            <>
              <button
                onClick={showNextStep}
                disabled={currentStep >= currentProblem.steps.length - 1}
                className="flex items-center gap-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 transition-colors text-sm"
              >
                <ChevronRight size={14} />
                Next Step
              </button>
              <button
                onClick={showAllSteps}
                className="px-3 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm"
              >
                Show All
              </button>
            </>
          )}
        </div>
        {showSteps && (
          <div className="bg-gray-50 rounded-lg p-4 border">
            <h3 className="font-semibold text-gray-700 mb-3">Solution Steps:</h3>
            {currentProblem.steps.slice(0, currentStep + 1).map((step, index) => (
              <div key={index} className="mb-2 p-2 bg-white rounded border-l-4 border-blue-500">
                <div className="text-sm font-medium text-blue-600 mb-1">Step {index + 1}:</div>
                <div className="text-sm text-gray-700 font-mono">{step}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">Practice Problems:</h3>
        <div className="grid grid-cols-2 gap-2">
          {problems.map((problem, index) => (
            <button
              key={index}
              onClick={() => startNewProblem(index)}
              className={`p-2 rounded-lg text-sm transition-colors ${
                problems.indexOf(currentProblem) === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <div>Problem {index + 1}</div>
              <div className="text-xs opacity-75">Find area</div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
        <h3 className="font-semibold text-indigo-800 mb-2 flex items-center gap-2">
          <Info size={16} />
          Triangle Area Key Points
        </h3>
        <ul className="text-sm text-indigo-700 space-y-1">
          <li>• Use when you have: <strong>2 sides + included angle</strong></li>
          <li>• Formula: Area = ½ × a × b × sin(C)</li>
          <li>• Alternative forms: Use sin(A) or sin(B) with corresponding sides</li>
          <li>• Applications: Surveying, architecture, land measurement</li>
          <li>• Always check units and round to 2 decimal places for consistency</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => startNewProblem(problems.indexOf(currentProblem))}
          className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          <RotateCcw size={16} />
          Reset Current Problem
        </button>
      </div>
    </div>
  );
};

export default TriangleAreaVisualizer;