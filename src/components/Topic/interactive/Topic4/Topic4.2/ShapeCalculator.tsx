import React, { useState, useEffect } from 'react';
import { RefreshCw, Eye, EyeOff, Check, X } from 'lucide-react';

interface ShapeDimensions {
  [key: string]: number;
}

interface ShapeTemplate {
  type: string;
  name: string;
  formula: string;
  dimensions: ShapeDimensions;
  answer: number;
  unit: string;
  color: {
    border: string;
    bg: string;
  };
}

interface ShapeCalculatorProps {
  mode: 'perimeter' | 'area';
  shapes: ShapeTemplate[];
  title: string;
  calculateAnswer: (shape: ShapeTemplate) => number;
  generateDimensions: (baseShape: ShapeTemplate) => ShapeDimensions;
}

const ShapeCalculator: React.FC<ShapeCalculatorProps> = ({
  mode,
  shapes,
  title,
  calculateAnswer,
  generateDimensions
}) => {
  const [currentShape, setCurrentShape] = useState<ShapeTemplate | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showHint, setShowHint] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);

  const generateNewShape = (): void => {
    const randomIndex = Math.floor(Math.random() * shapes.length);
    const baseShape = shapes[randomIndex];
    
    const newDimensions = generateDimensions(baseShape);
    const newShape: ShapeTemplate = {
      ...baseShape,
      dimensions: newDimensions,
      answer: 0
    };

    newShape.answer = calculateAnswer(newShape);
    
    setCurrentShape(newShape);
    setUserAnswer('');
    setShowHint(false);
    setFeedback('');
    setIsCorrect(null);
  };

  const checkAnswer = (): void => {
    if (!currentShape || !userAnswer.trim()) return;

    const userValue = parseFloat(userAnswer);
    const tolerance = mode === 'area' && currentShape.type === 'circle' ? 0.5 : 0.1;
    const correct = Math.abs(userValue - currentShape.answer) <= tolerance;

    setIsCorrect(correct);
    setAttempts(attempts + 1);
    
    if (correct) {
      setScore(score + 1);
      setFeedback('Correct! Well done!');
    } else {
      setFeedback(`Incorrect. The correct answer is ${currentShape.answer} ${currentShape.unit}`);
    }
  };

  const renderShape = (): JSX.Element | null => {
    if (!currentShape) return null;

    const { type, dimensions, color } = currentShape;

    switch (type) {
      case 'rectangle':
        return (
          <div className="flex flex-col items-center">
            <div 
              className={`border-4 ${color.border} ${color.bg}`}
              style={{
                width: `${Math.min(dimensions.length * 12, 160)}px`,
                height: `${Math.min(dimensions.width * 12, 100)}px`,
              }}
            />
            <div className="mt-2 text-sm text-gray-700">
              Length: {dimensions.length} cm, Width: {dimensions.width} cm
              {mode === 'area' && dimensions.height && (
                <><br />Height: {dimensions.height} cm</>
              )}
            </div>
          </div>
        );
      
      case 'square':
        return (
          <div className="flex flex-col items-center">
            <div 
              className={`border-4 ${color.border} ${color.bg}`}
              style={{
                width: `${Math.min(dimensions.side * 12, 120)}px`,
                height: `${Math.min(dimensions.side * 12, 120)}px`,
              }}
            />
            <div className="mt-2 text-sm text-gray-700">
              Side: {dimensions.side} cm
            </div>
          </div>
        );
      
      case 'triangle':
        return (
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg width="120" height="80" viewBox="0 0 120 80">
                <polygon 
                  points="60,10 10,70 110,70" 
                  fill={color.bg.replace('bg-', '#')} 
                  stroke={color.border.replace('border-', '#')} 
                  strokeWidth="3"
                  className={`${color.bg.includes('yellow') ? 'fill-yellow-100' : color.bg.includes('blue') ? 'fill-blue-100' : 'fill-gray-100'}`}
                />
                <line x1="60" y1="10" x2="60" y2="70" stroke="#666" strokeWidth="1" strokeDasharray="3,3" />
              </svg>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              {mode === 'perimeter' ? (
                <>Sides: {dimensions.side1} cm, {dimensions.side2} cm, {dimensions.side3} cm</>
              ) : (
                <>Base: {dimensions.base} cm, Height: {dimensions.height} cm</>
              )}
            </div>
          </div>
        );
      
      case 'circle':
        return (
          <div className="flex flex-col items-center">
            <div 
              className={`border-4 ${color.border} ${color.bg} rounded-full`}
              style={{
                width: `${Math.min(dimensions.radius * 20, 120)}px`,
                height: `${Math.min(dimensions.radius * 20, 120)}px`,
              }}
            />
            <div className="mt-2 text-sm text-gray-700">
              Radius: {dimensions.radius} cm
            </div>
          </div>
        );
      
      case 'parallelogram':
        return (
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg width="140" height="80" viewBox="0 0 140 80">
                <polygon 
                  points="20,60 120,60 100,20 0,20" 
                  className={`${color.bg.includes('purple') ? 'fill-purple-100' : 'fill-blue-100'}`}
                  stroke={color.border.replace('border-', '#')} 
                  strokeWidth="3"
                />
                {mode === 'area' && (
                  <line x1="20" y1="60" x2="20" y2="20" stroke="#666" strokeWidth="1" strokeDasharray="3,3" />
                )}
              </svg>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              Base: {dimensions.base} cm, {mode === 'area' ? `Height: ${dimensions.height}` : `Side: ${dimensions.side}`} cm
            </div>
          </div>
        );
      
      case 'trapezium':
        return (
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg width="120" height="80" viewBox="0 0 120 80">
                <polygon 
                  points="30,20 90,20 110,60 10,60" 
                  className={`${color.bg.includes('green') ? 'fill-green-100' : 'fill-gray-100'}`}
                  stroke={color.border.replace('border-', '#')} 
                  strokeWidth="3"
                />
                {mode === 'area' && (
                  <line x1="30" y1="20" x2="30" y2="60" stroke="#666" strokeWidth="1" strokeDasharray="3,3" />
                )}
              </svg>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              {mode === 'perimeter' ? (
                <>Sides: {dimensions.side1} cm, {dimensions.side2} cm, {dimensions.side3} cm, {dimensions.side4} cm</>
              ) : (
                <>Parallel sides: {dimensions.parallel1} cm, {dimensions.parallel2} cm<br />Height: {dimensions.height} cm</>
              )}
            </div>
          </div>
        );
      
      case 'rhombus':
        return (
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg width="100" height="80" viewBox="0 0 100 80">
                <polygon 
                  points="50,10 85,40 50,70 15,40" 
                  className={`${color.bg.includes('pink') ? 'fill-pink-100' : 'fill-gray-100'}`}
                  stroke={color.border.replace('border-', '#')} 
                  strokeWidth="3"
                />
                {mode === 'area' && dimensions.diagonal1 && (
                  <>
                    <line x1="50" y1="10" x2="50" y2="70" stroke="#666" strokeWidth="1" strokeDasharray="3,3" />
                    <line x1="15" y1="40" x2="85" y2="40" stroke="#666" strokeWidth="1" strokeDasharray="3,3" />
                  </>
                )}
              </svg>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              {mode === 'perimeter' ? (
                <>Side: {dimensions.side} cm</>
              ) : dimensions.diagonal1 ? (
                <>Diagonals: {dimensions.diagonal1} cm, {dimensions.diagonal2} cm</>
              ) : (
                <>Base: {dimensions.base} cm, Height: {dimensions.height} cm</>
              )}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  useEffect(() => {
    generateNewShape();
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-[#F0BB78] rounded-xl">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
        <div className="text-sm text-gray-600">
          Score: {score}/{attempts} {attempts > 0 && `(${Math.round((score/attempts) * 100)}%)`}
        </div>
      </div>

      {currentShape && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">
              Calculate the {mode} of this {currentShape.name.toLowerCase()}:
            </h2>
            <div className="flex justify-center mb-4">
              {renderShape() as React.ReactNode}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Your answer ({currentShape.unit}):
              </label>
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
              >
                {showHint ? <EyeOff size={16} /> : <Eye size={16} />}
                {showHint ? 'Hide' : 'Show'} Hint
              </button>
            </div>

            {showHint && (
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-md">
                <p className="text-sm text-blue-800 font-medium">
                  {currentShape.formula}
                </p>
              </div>
            )}

            <div className="flex gap-2">
              <input
                type="number"
                step="0.01"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your answer..."
              />
              <button
                onClick={checkAnswer}
                disabled={!userAnswer.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <Check size={20} />
              </button>
            </div>

            {feedback && (
              <div className={`p-3 rounded-md flex items-center gap-2 ${
                isCorrect 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {isCorrect ? <Check size={16} /> : <X size={16} />}
                {feedback}
              </div>
            )}

            <button
              onClick={generateNewShape}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              <RefreshCw size={20} />
              New Shape
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Data and calculation functions for PERIMETER
export const perimeterShapes: ShapeTemplate[] = [
  {
    type: 'rectangle',
    name: 'Rectangle',
    formula: 'Perimeter = 2(length + width)',
    dimensions: { length: 8, width: 5 },
    answer: 0,
    unit: 'cm',
    color: { border: 'border-blue-600', bg: 'bg-blue-100' }
  },
  {
    type: 'square',
    name: 'Square',
    formula: 'Perimeter = 4 × side',
    dimensions: { side: 6 },
    answer: 0,
    unit: 'cm',
    color: { border: 'border-green-600', bg: 'bg-green-100' }
  },
  {
    type: 'triangle',
    name: 'Triangle',
    formula: 'Perimeter = side₁ + side₂ + side₃',
    dimensions: { side1: 5, side2: 7, side3: 9 },
    answer: 0,
    unit: 'cm',
    color: { border: 'border-yellow-600', bg: 'bg-yellow-100' }
  },
  {
    type: 'circle',
    name: 'Circle',
    formula: 'Perimeter = 2πr (use π ≈ 3.14)',
    dimensions: { radius: 4 },
    answer: 0,
    unit: 'cm',
    color: { border: 'border-red-600', bg: 'bg-red-100' }
  },
  {
    type: 'parallelogram',
    name: 'Parallelogram',
    formula: 'Perimeter = 2(base + side)',
    dimensions: { base: 10, side: 6 },
    answer: 0,
    unit: 'cm',
    color: { border: 'border-purple-600', bg: 'bg-purple-100' }
  }
];

export const perimeterCalculateAnswer = (shape: ShapeTemplate): number => {
  const { type, dimensions } = shape;
  switch (type) {
    case 'rectangle':
      return 2 * (dimensions.length + dimensions.width);
    case 'square':
      return 4 * dimensions.side;
    case 'triangle':
      return dimensions.side1 + dimensions.side2 + dimensions.side3;
    case 'circle':
      return Math.round(2 * Math.PI * dimensions.radius * 100) / 100;
    case 'parallelogram':
      return 2 * (dimensions.base + dimensions.side);
    default:
      return 0;
  }
};

export const perimeterGenerateDimensions = (baseShape: ShapeTemplate): ShapeDimensions => {
  const { type } = baseShape;
  switch (type) {
    case 'rectangle':
      return {
        length: Math.floor(Math.random() * 10) + 3,
        width: Math.floor(Math.random() * 8) + 2
      };
    case 'square':
      return {
        side: Math.floor(Math.random() * 8) + 3
      };
    case 'triangle':
      return {
        side1: Math.floor(Math.random() * 6) + 3,
        side2: Math.floor(Math.random() * 6) + 4,
        side3: Math.floor(Math.random() * 6) + 5
      };
    case 'circle':
      return {
        radius: Math.floor(Math.random() * 6) + 2
      };
    case 'parallelogram':
      return {
        base: Math.floor(Math.random() * 8) + 4,
        side: Math.floor(Math.random() * 6) + 3
      };
    default:
      return {};
  }
};

// Data and calculation functions for AREA
export const areaShapes: ShapeTemplate[] = [
  {
    type: 'rectangle',
    name: 'Rectangle',
    formula: 'Area = length × width',
    dimensions: { length: 8, width: 5 },
    answer: 0,
    unit: 'cm²',
    color: { border: 'border-blue-600', bg: 'bg-blue-100' }
  },
  {
    type: 'square',
    name: 'Square',
    formula: 'Area = side²',
    dimensions: { side: 6 },
    answer: 0,
    unit: 'cm²',
    color: { border: 'border-green-600', bg: 'bg-green-100' }
  },
  {
    type: 'triangle',
    name: 'Triangle',
    formula: 'Area = ½ × base × height',
    dimensions: { base: 10, height: 6 },
    answer: 0,
    unit: 'cm²',
    color: { border: 'border-yellow-600', bg: 'bg-yellow-100' }
  },
  {
    type: 'circle',
    name: 'Circle',
    formula: 'Area = πr² (use π ≈ 3.14)',
    dimensions: { radius: 4 },
    answer: 0,
    unit: 'cm²',
    color: { border: 'border-red-600', bg: 'bg-red-100' }
  },
  {
    type: 'parallelogram',
    name: 'Parallelogram',
    formula: 'Area = base × height',
    dimensions: { base: 10, height: 6 },
    answer: 0,
    unit: 'cm²',
    color: { border: 'border-purple-600', bg: 'bg-purple-100' }
  },
  {
    type: 'trapezium',
    name: 'Trapezium',
    formula: 'Area = ½(a + b) × height',
    dimensions: { parallel1: 8, parallel2: 12, height: 5 },
    answer: 0,
    unit: 'cm²',
    color: { border: 'border-green-600', bg: 'bg-green-100' }
  },
  {
    type: 'rhombus',
    name: 'Rhombus',
    formula: 'Area = base × height OR ½ × d₁ × d₂',
    dimensions: { base: 8, height: 6 },
    answer: 0,
    unit: 'cm²',
    color: { border: 'border-pink-600', bg: 'bg-pink-100' }
  }
];

export const areaCalculateAnswer = (shape: ShapeTemplate): number => {
  const { type, dimensions } = shape;
  switch (type) {
    case 'rectangle':
      return dimensions.length * dimensions.width;
    case 'square':
      return dimensions.side * dimensions.side;
    case 'triangle':
      return Math.round(0.5 * dimensions.base * dimensions.height * 100) / 100;
    case 'circle':
      return Math.round(Math.PI * dimensions.radius * dimensions.radius * 100) / 100;
    case 'parallelogram':
      return dimensions.base * dimensions.height;
    case 'trapezium':
      return Math.round(0.5 * (dimensions.parallel1 + dimensions.parallel2) * dimensions.height * 100) / 100;
    case 'rhombus':
      if (dimensions.diagonal1 && dimensions.diagonal2) {
        return Math.round(0.5 * dimensions.diagonal1 * dimensions.diagonal2 * 100) / 100;
      }
      return dimensions.base * dimensions.height;
    default:
      return 0;
  }
};

export const areaGenerateDimensions = (baseShape: ShapeTemplate): ShapeDimensions => {
  const { type } = baseShape;
  switch (type) {
    case 'rectangle':
      return {
        length: Math.floor(Math.random() * 10) + 3,
        width: Math.floor(Math.random() * 8) + 2
      };
    case 'square':
      return {
        side: Math.floor(Math.random() * 8) + 3
      };
    case 'triangle':
      return {
        base: Math.floor(Math.random() * 8) + 4,
        height: Math.floor(Math.random() * 6) + 3
      };
    case 'circle':
      return {
        radius: Math.floor(Math.random() * 6) + 2
      };
    case 'parallelogram':
      return {
        base: Math.floor(Math.random() * 8) + 4,
        height: Math.floor(Math.random() * 6) + 3
      };
    case 'trapezium':
      return {
        parallel1: Math.floor(Math.random() * 6) + 4,
        parallel2: Math.floor(Math.random() * 6) + 6,
        height: Math.floor(Math.random() * 5) + 3
      };
    case 'rhombus':
      // Randomly choose between base×height or diagonal method
      if (Math.random() < 0.5) {
        return {
          diagonal1: Math.floor(Math.random() * 6) + 4,
          diagonal2: Math.floor(Math.random() * 6) + 6
        };
      } else {
        return {
          base: Math.floor(Math.random() * 6) + 4,
          height: Math.floor(Math.random() * 5) + 3
        };
      }
    default:
      return {};
  }
};

// Usage Examples:
// For Perimeter:
// <ShapeCalculator 
//   mode="perimeter"
//   shapes={perimeterShapes}
//   title="Perimeter Calculator"
//   calculateAnswer={perimeterCalculateAnswer}
//   generateDimensions={perimeterGenerateDimensions}
// />

// For Area:
// <ShapeCalculator 
//   mode="area"
//   shapes={areaShapes}
//   title="Area Calculator"
//   calculateAnswer={areaCalculateAnswer}
//   generateDimensions={areaGenerateDimensions}
// />

export default ShapeCalculator;