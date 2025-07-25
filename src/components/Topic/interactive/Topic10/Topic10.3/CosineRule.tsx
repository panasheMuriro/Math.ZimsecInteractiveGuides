import React, { useState, useRef, useEffect } from 'react';
import { Calculator, Info, Eye, EyeOff, ChevronRight, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

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
  type: 'side' | 'angle';
}

const CosineRuleVisualizer: React.FC = () => {
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
  const [triangle, setTriangle] = useState<Triangle>({
    A: 60, B: 70, C: 50,
    a: 7, b: 8, c: 6
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
      given: { a: 5, b: 6, C: 80 },
      find: 'c',
      type: 'side',
      description: 'Given side a = 5, side b = 6, and angle C = 80°, find side c.',
      steps: [
        'Use the cosine rule: c² = a² + b² - 2ab cos(C)',
        'Substitute the known values: c² = 5² + 6² - 2(5)(6)cos(80°)',
        'Calculate: c² = 25 + 36 - 60 × cos(80°)',
        'Calculate: c² = 61 - 60 × 0.174 = 61 - 10.44 = 50.56',
        'Take the square root: c = √50.56 = 7.11'
      ],
      answer: 7.11
    },
    {
      given: { a: 3, b: 4, c: 5 },
      find: 'C',
      type: 'angle',
      description: 'Given side a = 3, side b = 4, and side c = 5, find angle C.',
      steps: [
        'Use the cosine rule rearranged: cos(C) = (a² + b² - c²)/(2ab)',
        'Substitute the known values: cos(C) = (3² + 4² - 5²)/(2 × 3 × 4)',
        'Calculate: cos(C) = (9 + 16 - 25)/(24)',
        'Calculate: cos(C) = 0/24 = 0',
        'Find the angle: C = arccos(0) = 90°'
      ],
      answer: 90
    },
    {
      given: { b: 7, c: 9, A: 60 },
      find: 'a',
      type: 'side',
      description: 'Given side b = 7, side c = 9, and angle A = 60°, find side a.',
      steps: [
        'Use the cosine rule: a² = b² + c² - 2bc cos(A)',
        'Substitute the known values: a² = 7² + 9² - 2(7)(9)cos(60°)',
        'Calculate: a² = 49 + 81 - 126 × cos(60°)',
        'Calculate: a² = 130 - 126 × 0.5 = 130 - 63 = 67',
        'Take the square root: a = √67 = 8.19'
      ],
      answer: 8.19
    },
    {
      given: { a: 8, b: 10, c: 12 },
      find: 'A',
      type: 'angle',
      description: 'Given side a = 8, side b = 10, and side c = 12, find angle A.',
      steps: [
        'Use the cosine rule rearranged: cos(A) = (b² + c² - a²)/(2bc)',
        'Substitute the known values: cos(A) = (10² + 12² - 8²)/(2 × 10 × 12)',
        'Calculate: cos(A) = (100 + 144 - 64)/(240)',
        'Calculate: cos(A) = 180/240 = 0.75',
        'Find the angle: A = arccos(0.75) = 41.4°'
      ],
      answer: 41.4
    },
    {
      given: { a: 6, c: 8, B: 45 },
      find: 'b',
      type: 'side',
      description: 'Given side a = 6, side c = 8, and angle B = 45°, find side b.',
      steps: [
        'Use the cosine rule: b² = a² + c² - 2ac cos(B)',
        'Substitute the known values: b² = 6² + 8² - 2(6)(8)cos(45°)',
        'Calculate: b² = 36 + 64 - 96 × cos(45°)',
        'Calculate: b² = 100 - 96 × 0.707 = 100 - 67.87 = 32.13',
        'Take the square root: b = √32.13 = 5.67'
      ],
      answer: 5.67
    },
    {
      given: { a: 7, b: 5, c: 9 },
      find: 'B',
      type: 'angle',
      description: 'Given side a = 7, side b = 5, and side c = 9, find angle B.',
      steps: [
        'Use the cosine rule rearranged: cos(B) = (a² + c² - b²)/(2ac)',
        'Substitute the known values: cos(B) = (7² + 9² - 5²)/(2 × 7 × 9)',
        'Calculate: cos(B) = (49 + 81 - 25)/(126)',
        'Calculate: cos(B) = 105/126 = 0.833',
        'Find the angle: B = arccos(0.833) = 33.6°'
      ],
      answer: 33.6
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

    // Calculate missing values using cosine rule
    if (problem.type === 'side') {
      // We have two sides and included angle, calculate third side
      const angles = ['A', 'B', 'C'] as const;
      
      // Calculate missing angles using angle sum
      const knownAngles = angles.filter(angle => newTriangle[angle] > 0);
      if (knownAngles.length === 1) {
        // We need to calculate other angles after finding the missing side
        // For now, use approximate values for visualization
        const totalKnown = knownAngles.reduce((acc, angle) => acc + newTriangle[angle], 0);
        const remaining = 180 - totalKnown;
        
        let assignedAngles = 0;
        for (const angle of angles) {
          if (newTriangle[angle] === 0) {
            if (assignedAngles === 0) {
              newTriangle[angle] = remaining * 0.6; // Rough approximation
            } else {
              newTriangle[angle] = remaining * 0.4;
            }
            assignedAngles++;
          }
        }
      }
    } else {
      // We have three sides, calculate angles
      if (newTriangle.a > 0 && newTriangle.b > 0 && newTriangle.c > 0) {
        // Calculate all angles using cosine rule
        newTriangle.A = Math.acos((newTriangle.b * newTriangle.b + newTriangle.c * newTriangle.c - newTriangle.a * newTriangle.a) / (2 * newTriangle.b * newTriangle.c)) * 180 / Math.PI;
        newTriangle.B = Math.acos((newTriangle.a * newTriangle.a + newTriangle.c * newTriangle.c - newTriangle.b * newTriangle.b) / (2 * newTriangle.a * newTriangle.c)) * 180 / Math.PI;
        newTriangle.C = Math.acos((newTriangle.a * newTriangle.a + newTriangle.b * newTriangle.b - newTriangle.c * newTriangle.c) / (2 * newTriangle.a * newTriangle.b)) * 180 / Math.PI;
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
    const tolerance = currentProblem.type === 'angle' ? 0.5 : 0.2; // Larger tolerance for angles
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
    const scale = Math.min(canvas.width, canvas.height) * 0.25;
    
    // Calculate triangle vertices based on sides and angles
    const A_rad = triangle.A * Math.PI / 180;
    
    // Position vertices to show the triangle clearly
    const vertices = {
      A: { x: centerX - scale * 0.8, y: centerY + scale * 0.5 },
      B: { x: centerX + scale * 0.8, y: centerY + scale * 0.5 },
      C: { 
        x: centerX - scale * 0.8 + (triangle.c / triangle.a) * scale * 1.6 * Math.cos(A_rad),
        y: centerY + scale * 0.5 - (triangle.c / triangle.a) * scale * 1.6 * Math.sin(A_rad)
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
    ctx.fillText(`a = ${shouldShow('a') ? getDisplayValue('a') : '?'}`, midBC.x + 10, midBC.y - 5);
    
    ctx.fillStyle = currentProblem?.find === 'b' ? '#dc2626' : '#666';
    ctx.fillText(`b = ${shouldShow('b') ? getDisplayValue('b') : '?'}`, midAC.x - 35, midAC.y - 5);
    
    ctx.fillStyle = currentProblem?.find === 'c' ? '#dc2626' : '#666';
    ctx.fillText(`c = ${shouldShow('c') ? getDisplayValue('c') : '?'}`, midAB.x - 10, midAB.y + 25);
    
    // Draw and label angles
    ctx.font = 'bold 14px Arial';
    
    ctx.fillStyle = currentProblem?.find === 'A' ? '#059669' : '#666';
    ctx.fillText(`A = ${shouldShow('A') ? getDisplayValue('A') + '°' : '?'}`, vertices.A.x - 25, vertices.A.y - 15);
    
    ctx.fillStyle = currentProblem?.find === 'B' ? '#059669' : '#666';
    ctx.fillText(`B = ${shouldShow('B') ? getDisplayValue('B') + '°' : '?'}`, vertices.B.x + 5, vertices.B.y - 15);
    
    ctx.fillStyle = currentProblem?.find === 'C' ? '#059669' : '#666';
    ctx.fillText(`C = ${shouldShow('C') ? getDisplayValue('C') + '°' : '?'}`, vertices.C.x - 5, vertices.C.y - 20);

    // Highlight the included angle for side problems
    if (currentProblem?.type === 'side') {
      ctx.strokeStyle = '#ff6b35';
      ctx.lineWidth = 4;
      const angleToHighlight = currentProblem.find === 'a' ? 'A' : 
                              currentProblem.find === 'b' ? 'B' : 'C';
      
      if (currentProblem.given[angleToHighlight]) {
        // Draw a small arc to highlight the included angle
        const vertex = angleToHighlight === 'A' ? vertices.A : 
                      angleToHighlight === 'B' ? vertices.B : vertices.C;
        ctx.beginPath();
        ctx.arc(vertex.x, vertex.y, 20, 0, Math.PI / 4);
        ctx.stroke();
      }
    }
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
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Cosine Rule Practice</h2>
        <p className="text-sm text-gray-600">Solve step-by-step problems using the cosine rule</p>
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
            <div className="text-center font-mono text-sm text-blue-800 space-y-1">
              <div><strong>For sides:</strong> c² = a² + b² - 2ab cos(C)</div>
              <div><strong>For angles:</strong> cos(C) = (a² + b² - c²)/(2ab)</div>
            </div>
          </div>
        )}
      </div>

      {/* Problem Statement */}
      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-semibold text-yellow-800 mb-2">Problem:</h3>
        <p className="text-yellow-700">{currentProblem.description}</p>
        <div className="mt-2 text-xs text-yellow-600">
          {currentProblem.type === 'side' 
            ? 'Use: c² = a² + b² - 2ab cos(C)' 
            : 'Use: cos(C) = (a² + b² - c²)/(2ab)'
          }
        </div>
      </div>

      {/* Triangle Visualization */}
      <div className="mb-6">
        <canvas
          ref={canvasRef}
          width={350}
          height={250}
          className="border border-gray-300 rounded-lg w-full max-w-sm mx-auto block bg-gray-50"
        />
        {currentProblem.type === 'side' && (
          <p className="text-xs text-center text-gray-500 mt-2">
            Orange highlight shows the included angle
          </p>
        )}
      </div>

      {/* Answer Input */}
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
              ? `Correct! The answer is ${currentProblem.answer}${currentProblem.type === 'angle' ? '°' : ''}`
              : `Incorrect. The correct answer is ${currentProblem.answer}${currentProblem.type === 'angle' ? '°' : ''}`
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
              <div className="text-xs opacity-75">
                Find {problem.find} ({problem.type})
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Key Information */}
      <div className="mb-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
        <h3 className="font-semibold text-indigo-800 mb-2 flex items-center gap-2">
          <Info size={16} />
          Cosine Rule Key Points
        </h3>
        <ul className="text-sm text-indigo-700 space-y-1">
          <li>• Use when you have: <strong>2 sides + included angle</strong> (to find 3rd side)</li>
          <li>• Use when you have: <strong>3 sides</strong> (to find any angle)</li>
          <li>• The cosine rule works for ALL triangles (not just right-angled)</li>
          <li>• When angle = 90°, cos(90°) = 0, so it becomes Pythagoras' theorem</li>
          <li>• Always check your answer makes sense (angles should sum to 180°)</li>
        </ul>
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

export default CosineRuleVisualizer;