import React, { useState, useRef, useEffect } from 'react';
import { Calculator, Eye, EyeOff, ChevronRight, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface Triangle {
  A: number;
  B: number;
  C: number;
  a: number;
  b: number;
  c: number;
}

interface Problem {
  given: Partial<Triangle>;
  find: keyof Triangle;
  description: string;
  steps: string[];
  answer: number;
}

const SineRuleVisualizer: React.FC = () => {
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
  const [triangle, setTriangle] = useState<Triangle>({
    A: 40, B: 60, C: 80,
    a: 5, b: 6.75, c: 7.66
  });
  
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showSteps, setShowSteps] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showFormula, setShowFormula] = useState(true);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const problems: Problem[] = [
    {
      given: { A: 40, B: 60, a: 5 },
      find: 'b',
      description: 'Given angle A = 40°, angle B = 60°, and side a = 5, find side b.',
      steps: [
        'First, find angle C: C = 180° - A - B = 180° - 40° - 60° = 80°',
        'Apply the sine rule: a/sin(A) = b/sin(B)',
        'Substitute known values: 5/sin(40°) = b/sin(60°)',
        'Rearrange to solve for b: b = 5 × sin(60°)/sin(40°)',
        'Calculate: b = 5 × 0.866/0.643 = 6.74'
      ],
      answer: 6.74
    },
    {
      given: { a: 7, b: 8, A: 50 },
      find: 'B',
      description: 'Given side a = 7, side b = 8, and angle A = 50°, find angle B.',
      steps: [
        'Apply the sine rule: a/sin(A) = b/sin(B)',
        'Substitute known values: 7/sin(50°) = 8/sin(B)',
        'Rearrange: sin(B) = 8 × sin(50°)/7',
        'Calculate: sin(B) = 8 × 0.766/7 = 0.876',
        'Find angle B: B = arcsin(0.876) = 61.1°'
      ],
      answer: 61.1
    },
    {
      given: { A: 30, C: 90, c: 10 },
      find: 'a',
      description: 'Given angle A = 30°, angle C = 90°, and side c = 10, find side a.',
      steps: [
        'First, find angle B: B = 180° - A - C = 180° - 30° - 90° = 60°',
        'Apply the sine rule: a/sin(A) = c/sin(C)',
        'Substitute known values: a/sin(30°) = 10/sin(90°)',
        'Calculate: a = 10 × sin(30°)/sin(90°)',
        'Calculate: a = 10 × 0.5/1 = 5.0'
      ],
      answer: 5.0
    },
    {
      given: { B: 45, C: 75, b: 8 },
      find: 'c',
      description: 'Given angle B = 45°, angle C = 75°, and side b = 8, find side c.',
      steps: [
        'First, find angle A: A = 180° - B - C = 180° - 45° - 75° = 60°',
        'Apply the sine rule: b/sin(B) = c/sin(C)',
        'Substitute known values: 8/sin(45°) = c/sin(75°)',
        'Rearrange: c = 8 × sin(75°)/sin(45°)',
        'Calculate: c = 8 × 0.966/0.707 = 10.9'
      ],
      answer: 10.9
    }
  ];

  const generateTriangleFromProblem = (problem: Problem): Triangle => {
    const newTriangle = { ...triangle };
    
    // Set given values
    Object.entries(problem.given).forEach(([key, value]) => {
      if (value !== undefined) {
        newTriangle[key as keyof Triangle] = value;
      }
    });

    // Calculate missing angles if possible
    const angles = ['A', 'B', 'C'] as const;
    const knownAngles = angles.filter(angle => newTriangle[angle] > 0);
    
    if (knownAngles.length === 2) {
      const unknownAngle = angles.find(angle => newTriangle[angle] === 0 || !problem.given[angle]);
      if (unknownAngle) {
        const sum = knownAngles.reduce((acc, angle) => acc + newTriangle[angle], 0);
        newTriangle[unknownAngle] = 180 - sum;
      }
    }

    // Calculate sides using sine rule if we have enough information
    const sideAngles = [['a', 'A'], ['b', 'B'], ['c', 'C']] as const;
    
    // Find a known side-angle pair to establish ratio
    let ratio = 0;
    for (const [side, angle] of sideAngles) {
      if (newTriangle[side] > 0 && newTriangle[angle] > 0) {
        ratio = newTriangle[side] / Math.sin(newTriangle[angle] * Math.PI / 180);
        break;
      }
    }

    // Calculate missing sides
    if (ratio > 0) {
      for (const [side, angle] of sideAngles) {
        if (newTriangle[angle] > 0 && (newTriangle[side] === 0 || !problem.given[side])) {
          newTriangle[side] = ratio * Math.sin(newTriangle[angle] * Math.PI / 180);
        }
      }
    }

    return newTriangle;
  };

  const startNewProblem = (problemIndex: number) => {
    const problem = problems[problemIndex];
    setCurrentProblem(problem);
    setTriangle(generateTriangleFromProblem(problem));
    setUserAnswer('');
    setShowSteps(false);
    setCurrentStep(0);
    setAnswerSubmitted(false);
    setIsCorrect(null);
  };

  const checkAnswer = () => {
    if (!currentProblem || userAnswer === '') return;
    
    const userValue = parseFloat(userAnswer);
    const tolerance = 0.2; // Allow small rounding differences
    const correct = Math.abs(userValue - currentProblem.answer) <= tolerance;
    
    setIsCorrect(correct);
    setAnswerSubmitted(true);
  };

  const showNextStep = () => {
    if (currentStep < (currentProblem?.steps.length || 0) - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const showAllSteps = () => {
    setCurrentStep((currentProblem?.steps.length || 1) - 1);
  };

  const drawTriangle = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const scale = Math.min(canvas.width, canvas.height) * 0.3;
    
    // Calculate triangle vertices
    const A_rad = triangle.A * Math.PI / 180;
    
    const vertices = {
      A: { x: centerX - scale/2, y: centerY + scale/3 },
      B: { x: centerX + scale/2, y: centerY + scale/3 },
      C: { 
        x: centerX - scale/2 + triangle.c * Math.cos(A_rad) * scale/15,
        y: centerY + scale/3 - triangle.c * Math.sin(A_rad) * scale/15
      }
    };
    
    // Draw triangle
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(vertices.A.x, vertices.A.y);
    ctx.lineTo(vertices.B.x, vertices.B.y);
    ctx.lineTo(vertices.C.x, vertices.C.y);
    ctx.closePath();
    ctx.stroke();
    
    // Helper function to determine if value should be shown
    const shouldShow = (key: keyof Triangle) => {
      if (!currentProblem) return true;
      return currentProblem.given[key] !== undefined || 
             (currentProblem.find === key && answerSubmitted && isCorrect);
    };

    // Helper function to get display value
    const getDisplayValue = (key: keyof Triangle) => {
      if (!currentProblem) return triangle[key];
      if (currentProblem.given[key] !== undefined) return currentProblem.given[key];
      if (currentProblem.find === key && answerSubmitted && isCorrect) return currentProblem.answer;
      return '?';
    };

    // Draw and label sides
    ctx.font = 'bold 16px Arial';
    const midAB = { x: (vertices.A.x + vertices.B.x) / 2, y: (vertices.A.y + vertices.B.y) / 2 };
    const midAC = { x: (vertices.A.x + vertices.C.x) / 2, y: (vertices.A.y + vertices.C.y) / 2 };
    const midBC = { x: (vertices.B.x + vertices.C.x) / 2, y: (vertices.B.y + vertices.C.y) / 2 };

    // Highlight the value we're looking for
    ctx.fillStyle = currentProblem?.find === 'a' ? '#dc2626' : '#666';
    ctx.fillText(`a = ${shouldShow('a') ? getDisplayValue('a') : '?'}`, midAB.x - 25, midAB.y + 25);
    
    ctx.fillStyle = currentProblem?.find === 'b' ? '#dc2626' : '#666';
    ctx.fillText(`b = ${shouldShow('b') ? getDisplayValue('b') : '?'}`, midAC.x - 35, midAC.y);
    
    ctx.fillStyle = currentProblem?.find === 'c' ? '#dc2626' : '#666';
    ctx.fillText(`c = ${shouldShow('c') ? getDisplayValue('c') : '?'}`, midBC.x + 10, midBC.y);
    
    // Draw and label angles with adjusted positions to prevent overlap
    ctx.font = 'bold 14px Arial';
    
    // Angle A label position
    const angleAPos = {
      x: vertices.A.x - 20,
      y: vertices.A.y - (triangle.A < 45 ? 25 : 15)
    };
    
    // Angle B label position
    const angleBPos = {
      x: vertices.B.x + 5,
      y: vertices.B.y - (triangle.B < 45 ? 25 : 15)
    };
    
    // Angle C label position - adjust based on angle size
    const angleCPos = {
      x: vertices.C.x - (triangle.C > 90 ? 25 : 5),
      y: vertices.C.y - (triangle.C > 90 ? 30 : 20)
    };
    
    ctx.fillStyle = currentProblem?.find === 'A' ? '#059669' : '#666';
    ctx.fillText(`A = ${shouldShow('A') ? getDisplayValue('A') + '°' : '?'}`, angleAPos.x, angleAPos.y);
    
    ctx.fillStyle = currentProblem?.find === 'B' ? '#059669' : '#666';
    ctx.fillText(`B = ${shouldShow('B') ? getDisplayValue('B') + '°' : '?'}`, angleBPos.x, angleBPos.y);
    
    ctx.fillStyle = currentProblem?.find === 'C' ? '#059669' : '#666';
    ctx.fillText(`C = ${shouldShow('C') ? getDisplayValue('C') + '°' : '?'}`, angleCPos.x, angleCPos.y);
  };

  useEffect(() => {
    drawTriangle();
  }, [triangle, currentProblem, answerSubmitted, isCorrect]);

  useEffect(() => {
    // Start with first problem
    startNewProblem(0);
  }, []);

  if (!currentProblem) return null;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sine Rule Practice</h2>
        <p className="text-sm text-gray-600">Solve step-by-step problems using the sine rule</p>
      </div>

      {/* Formula Display */}
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
            <div className="text-center font-mono text-lg text-blue-800">
              a/sin(A) = b/sin(B) = c/sin(C)
            </div>
          </div>
        )}
      </div>

      {/* Problem Statement */}
      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-semibold text-yellow-800 mb-2">Problem:</h3>
        <p className="text-yellow-700">{currentProblem.description}</p>
      </div>

      {/* Triangle Visualization */}
      <div className="mb-6">
        <canvas
          ref={canvasRef}
          width={350}
          height={250}
          className="border border-gray-300 rounded-lg w-full max-w-sm mx-auto block bg-gray-50"
        />
      </div>

      {/* Answer Input */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="font-semibold text-gray-700">
            Your answer for {currentProblem.find}:
          </label>
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
              ? `Correct! The answer is ${currentProblem.answer}`
              : `Incorrect. The correct answer is ${currentProblem.answer}`
            }
          </div>
        )}
      </div>

      {/* Step-by-step solution */}
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

      {/* Problem Selection */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">Practice Problems:</h3>
        <div className="grid grid-cols-2 gap-2">
          {problems.map((_, index) => (
            <button
              key={index}
              onClick={() => startNewProblem(index)}
              className={`p-2 rounded-lg text-sm transition-colors ${
                problems.indexOf(currentProblem) === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Problem {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Reset button */}
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

export default SineRuleVisualizer;