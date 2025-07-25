import React, { useState, useRef, useEffect } from 'react';
import { Calculator, Info, Eye, EyeOff, ChevronRight, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface Pyramid {
  a: number; // Base side
  b: number; // Base side
  c: number; // Diagonal or edge
  C: number; // Included angle
}

interface Problem {
  given: Partial<Pyramid>;
  find: keyof Pyramid;
  description: string;
  steps: string[];
  answer: number;
  type: 'side' | 'angle';
}

const ThreeDTrigVisualizer: React.FC = () => {
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
  const [pyramid, setPyramid] = useState<Pyramid>({
    a: 4, b: 5, c: 6, C: 70
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
      given: { a: 4, b: 5, C: 70 },
      find: 'c',
      type: 'side',
      description: 'In a triangular pyramid, base sides a = 4, b = 5, and included angle C = 70°, find the base diagonal c.',
      steps: [
        'Use the cosine rule: c² = a² + b² - 2ab cos(C)',
        'Substitute the known values: c² = 4² + 5² - 2(4)(5)cos(70°)',
        'Calculate: c² = 16 + 25 - 40 × cos(70°)',
        'Calculate: c² = 41 - 40 × 0.342 = 41 - 13.68 = 27.32',
        'Take the square root: c = √27.32 ≈ 5.23'
      ],
      answer: 5.23
    },
    {
      given: { a: 6, b: 7, c: 8 },
      find: 'C',
      type: 'angle',
      description: 'In a triangular pyramid, base sides a = 6, b = 7, and base diagonal c = 8, find the included angle C.',
      steps: [
        'Use the cosine rule rearranged: cos(C) = (a² + b² - c²)/(2ab)',
        'Substitute the known values: cos(C) = (6² + 7² - 8²)/(2 × 6 × 7)',
        'Calculate: cos(C) = (36 + 49 - 64)/(84)',
        'Calculate: cos(C) = 21/84 = 0.25',
        'Find the angle: C = arccos(0.25) ≈ 75.5°'
      ],
      answer: 75.5
    },
    {
      given: { a: 3, c: 4, b: 80 },
      find: 'b',
      type: 'side',
      description: 'In a triangular pyramid, base side a = 3, base diagonal c = 4, and included angle B = 80°, find base side b.',
      steps: [
        'Use the cosine rule: b² = a² + c² - 2ac cos(B)',
        'Substitute the known values: b² = 3² + 4² - 2(3)(4)cos(80°)',
        'Calculate: b² = 9 + 16 - 24 × cos(80°)',
        'Calculate: b² = 25 - 24 × 0.174 = 25 - 4.176 = 20.824',
        'Take the square root: b = √20.824 ≈ 4.56'
      ],
      answer: 4.56
    },
    {
      given: { b: 5, c: 6, a: 60 },
      find: 'a',
      type: 'side',
      description: 'In a triangular pyramid, base side b = 5, base diagonal c = 6, and included angle A = 60°, find base side a.',
      steps: [
        'Use the cosine rule: a² = b² + c² - 2bc cos(A)',
        'Substitute the known values: a² = 5² + 6² - 2(5)(6)cos(60°)',
        'Calculate: a² = 25 + 36 - 60 × cos(60°)',
        'Calculate: a² = 61 - 60 × 0.5 = 61 - 30 = 31',
        'Take the square root: a = √31 ≈ 5.57'
      ],
      answer: 5.57
    }
  ];

  const generatePyramidFromProblem = (problem: Problem): Pyramid => {
    const newPyramid = { ...pyramid };
    Object.entries(problem.given).forEach(([key, value]) => {
      if (value !== undefined) {
        newPyramid[key as keyof Pyramid] = value;
      }
    });
    if (problem.type === 'side' && Object.keys(problem.given).includes('C')) {
      const totalKnown = newPyramid.C;
      const remaining = 180 - totalKnown;
      newPyramid.a = remaining * 0.6;
      newPyramid.b = remaining * 0.4;
    }
    return newPyramid;
  };

  const startNewProblem = (problemIndex: number): void => {
    const problem = problems[problemIndex];
    setCurrentProblem(problem);
    setPyramid(generatePyramidFromProblem(problem));
    setUserAnswer('');
    setShowSteps(false);
    setCurrentStep(0);
    setAnswerSubmitted(false);
    setIsCorrect(null);
  };

  const checkAnswer = (): void => {
    if (!currentProblem || userAnswer === '') return;
    const userValue = parseFloat(userAnswer);
    const tolerance = currentProblem.type === 'angle' ? 0.5 : 0.2;
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

  const drawPyramid = (): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const scale = Math.min(canvas.width, canvas.height) * 0.25;

    const C_rad = pyramid.C * Math.PI / 180;
    const vertices = {
      A: { x: centerX - scale * 0.8, y: centerY + scale * 0.5 },
      B: { x: centerX + scale * 0.8, y: centerY + scale * 0.5 },
      C: {
        x: centerX - scale * 0.8 + (pyramid.c / pyramid.a) * scale * 1.6 * Math.cos(C_rad),
        y: centerY + scale * 0.5 - (pyramid.c / pyramid.a) * scale * 1.6 * Math.sin(C_rad)
      },
      Apex: { x: centerX, y: centerY - scale * 0.8 } // Simplified apex for 3D effect
    };

    // Draw base triangle
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(vertices.A.x, vertices.A.y);
    ctx.lineTo(vertices.B.x, vertices.B.y);
    ctx.lineTo(vertices.C.x, vertices.C.y);
    ctx.closePath();
    ctx.stroke();

    // Draw edges to apex (dashed for 3D effect)
    ctx.strokeStyle = '#3b82f6';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(vertices.A.x, vertices.A.y);
    ctx.lineTo(vertices.Apex.x, vertices.Apex.y);
    ctx.moveTo(vertices.B.x, vertices.B.y);
    ctx.lineTo(vertices.Apex.x, vertices.Apex.y);
    ctx.moveTo(vertices.C.x, vertices.C.y);
    ctx.lineTo(vertices.Apex.x, vertices.Apex.y);
    ctx.stroke();
    ctx.setLineDash([]);

    const shouldShow = (key: keyof Pyramid): boolean => {
      if (!currentProblem) return true;
      return currentProblem.given[key] !== undefined || 
             (currentProblem.find === key && answerSubmitted && isCorrect) as boolean;
    };

    const getDisplayValue = (key: keyof Pyramid): string | number => {
      if (!currentProblem) return pyramid[key];
      if (currentProblem.given[key] !== undefined) return currentProblem.given[key]!;
      if (currentProblem.find === key && answerSubmitted && isCorrect) return currentProblem.answer;
      return '?';
    };

    ctx.font = 'bold 16px Arial';
    const midAB = { x: (vertices.A.x + vertices.B.x) / 2, y: (vertices.A.y + vertices.B.y) / 2 };
    const midAC = { x: (vertices.A.x + vertices.C.x) / 2, y: (vertices.A.y + vertices.C.y) / 2 };
    const midBC = { x: (vertices.B.x + vertices.C.x) / 2, y: (vertices.B.y + vertices.C.y) / 2 };

    ctx.fillStyle = currentProblem?.find === 'a' ? '#dc2626' : '#666';
    ctx.fillText(`a = ${shouldShow('a') ? getDisplayValue('a') : '?'}`, midBC.x + 10, midBC.y - 5);
    ctx.fillStyle = currentProblem?.find === 'b' ? '#dc2626' : '#666';
    ctx.fillText(`b = ${shouldShow('b') ? getDisplayValue('b') : '?'}`, midAC.x - 35, midAC.y - 5);
    ctx.fillStyle = currentProblem?.find === 'c' ? '#dc2626' : '#666';
    ctx.fillText(`c = ${shouldShow('c') ? getDisplayValue('c') : '?'}`, midAB.x - 10, midAB.y + 25);

    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = currentProblem?.find === 'C' ? '#059669' : '#666';
    ctx.fillText(`C = ${shouldShow('C') ? getDisplayValue('C') + '°' : '?'}`, vertices.C.x - 5, vertices.C.y - 20);

    if (currentProblem?.type === 'side' && currentProblem.given.C) {
      ctx.strokeStyle = '#ff6b35';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(vertices.C.x, vertices.C.y, 20, 0, Math.PI / 4);
      ctx.stroke();
    }
  };

  useEffect(() => {
    drawPyramid();
  }, [pyramid, currentProblem, answerSubmitted, isCorrect]);

  useEffect(() => {
    startNewProblem(0);
  }, []);

  if (!currentProblem) return null;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">3D Trigonometry Practice</h2>
        <p className="text-sm text-gray-600">Solve 3D problems using the cosine rule in pyramid structures</p>
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
              <div><strong>For sides:</strong> c² = a² + b² - 2ab cos(C)</div>
              <div><strong>For angles:</strong> cos(C) = (a² + b² - c²)/(2ab)</div>
            </div>
          </div>
        )}
      </div>

      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-semibold text-yellow-800 mb-2">Problem:</h3>
        <p className="text-yellow-700">{currentProblem.description}</p>
        <div className="mt-2 text-xs text-yellow-600">
          {currentProblem.type === 'side' 
            ? 'Use: c² = a² + b² - 2ab cos(C)' 
            : 'Use: cos(C) = (a² + b² - c²)/(2ab)'}
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
          Blue dashed lines show pyramid edges to apex; orange highlight shows included angle
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="font-semibold text-gray-700">
            Your answer for {currentProblem.find}:
          </label>
          <span className="text-xs text-gray-500">
            {currentProblem.type === 'angle' ? '(in degrees)' : '(to 2 decimal places)'}
          </span>
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
              ? `Correct! The ${currentProblem.find} is ${currentProblem.answer}${currentProblem.type === 'angle' ? '°' : ''}`
              : `Incorrect. The correct ${currentProblem.find} is ${currentProblem.answer}${currentProblem.type === 'angle' ? '°' : ''}`}
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
              <div className="text-xs opacity-75">Find {problem.find} ({problem.type})</div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
        <h3 className="font-semibold text-indigo-800 mb-2 flex items-center gap-2">
          <Info size={16} />
          3D Trigonometry Key Points
        </h3>
        <ul className="text-sm text-indigo-700 space-y-1">
          <li>• Use cosine rule for base diagonals or angles in 3D structures</li>
          <li>• Formula for sides: c² = a² + b² - 2ab cos(C)</li>
          <li>• Formula for angles: cos(C) = (a² + b² - c²)/(2ab)</li>
          <li>• Applications: Engineering (bridges), surveying, navigation</li>
          <li>• Visualize 3D problems as 2D projections for clarity</li>
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

export default ThreeDTrigVisualizer;