import React, { useState, useEffect, useRef } from 'react';
import JXG from 'jsxgraph';
import '../../../../../assets/jsxgraph.css';

type FunctionType = 
  | 'quadratic' 
  | 'cubic' 
  | 'reciprocal' 
  | 'square-root' 
  | 'exponential' 
  | 'absolute-value';

interface FunctionExample {
  type: FunctionType;
  name: string;
  equation: string;
  description: string;
  definition: (x: number) => number;
  domain: [number, number];
  range?: [number, number];
  specialPoints: Array<{
    x: number;
    y: number;
    label: string;
    color: string;
  }>;
}

const CubicFunctions: React.FC = () => {
  const boardRef = useRef<HTMLDivElement>(null);
  const [selectedFunction, setSelectedFunction] = useState<FunctionType>('quadratic');
  const [currentExample, setCurrentExample] = useState<FunctionExample | null>(null);

  // Define examples for each function type
  const functionExamples: Record<FunctionType, FunctionExample> = {
    quadratic: {
      type: 'quadratic',
      name: 'Quadratic',
      equation: 'y = x² - 4x + 3',
      description: 'U-shaped parabola with one turning point (vertex)',
      definition: (x) => x * x - 4 * x + 3,
      domain: [0, 4],
      specialPoints: [
        { x: 2, y: -1, label: 'Vertex', color: '#d62728' },
        { x: 0, y: 3, label: 'y-intercept', color: '#2ca02c' },
        { x: 1, y: 0, label: 'Root', color: '#ff7f0e' },
        { x: 3, y: 0, label: 'Root', color: '#ff7f0e' }
      ]
    },
    cubic: {
      type: 'cubic',
      name: 'Cubic',
      equation: 'y = x³ - 3x',
      description: 'S-shaped curve with two turning points',
      definition: (x) => x * x * x - 3 * x,
      domain: [-2.5, 2.5],
      specialPoints: [
        { x: -1, y: 2, label: 'Local max', color: '#d62728' },
        { x: 1, y: -2, label: 'Local min', color: '#d62728' },
        { x: 0, y: 0, label: 'Inflection point', color: '#9467bd' },
        { x: -Math.sqrt(3), y: 0, label: 'Root', color: '#ff7f0e' },
        { x: 0, y: 0, label: 'Root', color: '#ff7f0e' },
        { x: Math.sqrt(3), y: 0, label: 'Root', color: '#ff7f0e' }
      ]
    },
    reciprocal: {
      type: 'reciprocal',
      name: 'Reciprocal',
      equation: 'y = 1/x',
      description: 'Hyperbola with two branches and asymptotes at x=0 and y=0',
      definition: (x) => 1 / x,
      domain: [-4, -0.5],
      specialPoints: [
        { x: 1, y: 1, label: '(1,1)', color: '#1f77b4' },
        { x: -1, y: -1, label: '(-1,-1)', color: '#1f77b4' }
      ]
    },
    'square-root': {
      type: 'square-root',
      name: 'Square Root',
      equation: 'y = √x',
      description: 'Curve starting at origin and increasing gradually',
      definition: (x) => Math.sqrt(x),
      domain: [0, 9],
      specialPoints: [
        { x: 0, y: 0, label: 'Origin', color: '#2ca02c' },
        { x: 1, y: 1, label: '(1,1)', color: '#1f77b4' },
        { x: 4, y: 2, label: '(4,2)', color: '#1f77b4' }
      ]
    },
    exponential: {
      type: 'exponential',
      name: 'Exponential',
      equation: 'y = 2ˣ',
      description: 'Rapid growth curve with horizontal asymptote at y=0',
      definition: (x) => Math.pow(2, x),
      domain: [-3, 3],
      specialPoints: [
        { x: 0, y: 1, label: '(0,1)', color: '#2ca02c' },
        { x: 1, y: 2, label: '(1,2)', color: '#1f77b4' },
        { x: -1, y: 0.5, label: '(-1,0.5)', color: '#1f77b4' }
      ]
    },
    'absolute-value': {
      type: 'absolute-value',
      name: 'Absolute Value',
      equation: 'y = |x|',
      description: 'V-shaped graph with corner at origin',
      definition: (x) => Math.abs(x),
      domain: [-3, 3],
      specialPoints: [
        { x: 0, y: 0, label: 'Vertex', color: '#d62728' },
        { x: 1, y: 1, label: '(1,1)', color: '#1f77b4' },
        { x: -1, y: 1, label: '(-1,1)', color: '#1f77b4' }
      ]
    }
  };

  // Update current example when selection changes
  useEffect(() => {
    setCurrentExample(functionExamples[selectedFunction]);
  }, [selectedFunction]);

  // Draw the graph when example changes
  useEffect(() => {
    if (!currentExample || !boardRef.current) return;

    const board = JXG.JSXGraph.initBoard(boardRef.current, {
      boundingbox: [
        currentExample.domain[0] - 1,
        currentExample.domain[1] + 1,
        currentExample.domain[1] + 1,
        currentExample.domain[0] - 1
      ],
      axis: true,
      showNavigation: false,
      showCopyright: false,
      pan: { enabled: true },
      zoom:  true,

    });

    // Plot the function
    board.create('functiongraph', [
      currentExample.definition,
      currentExample.domain[0],
      currentExample.domain[1]
    ], {
      strokeWidth: 2,
      strokeColor: '#3b82f6',
      highlight: false
    });

    // Add asymptotes for reciprocal function
    if (currentExample.type === 'reciprocal') {
      board.create('line', [[0, -10], [0, 10]], {
        strokeColor: '#888',
        strokeWidth: 1,
        dash: 2,
        fixed: true,
        label: { text: 'x=0', position: 'rt', offset: [-10, -10] }
      });
      board.create('line', [[-10, 0], [10, 0]], {
        strokeColor: '#888',
        strokeWidth: 1,
        dash: 2,
        fixed: true,
        label: { text: 'y=0', position: 'rt', offset: [10, -10] }
      });
    }

    // Mark special points
    currentExample.specialPoints.forEach(point => {
      board.create('point', [point.x, point.y], {
        name: point.label,
        size: 3,
        fixed: true,
        fillColor: point.color,
        strokeColor: point.color,
        label: { offset: [10, 10], fontSize: 10 }
      });
    });

    return () => {
      JXG.JSXGraph.freeBoard(board);
    };
  }, [currentExample]);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Function Visualizer</h2>
      
      <div className="mb-4">
        <label htmlFor="function-select" className="block text-sm font-medium mb-1">
          Select Function Type:
        </label>
        <select
          id="function-select"
          value={selectedFunction}
          onChange={(e) => setSelectedFunction(e.target.value as FunctionType)}
          className="w-full p-2 border rounded"
        >
          <option value="quadratic">Quadratic (y = ax² + bx + c)</option>
          <option value="cubic">Cubic (y = ax³ + bx² + cx + d)</option>
          <option value="reciprocal">Reciprocal (y = 1/x)</option>
          <option value="square-root">Square Root (y = √x)</option>
          <option value="exponential">Exponential (y = aˣ)</option>
          <option value="absolute-value">Absolute Value (y = |x|)</option>
        </select>
      </div>
      
      {currentExample && (
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-lg">{currentExample.name} Function</h3>
              <p className="text-gray-700 mb-2">{currentExample.description}</p>
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-mono text-lg">{currentExample.equation}</p>
              </div>
              <div className="mt-3">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {currentExample.specialPoints.map((point, index) => (
                    <li key={index}>
                      <span style={{ color: point.color }}>{point.label}</span> at ({point.x.toFixed(1)}, {point.y.toFixed(1)})
                    </li>
                  ))}
                  {currentExample.type === 'reciprocal' && (
                    <li>Asymptotes at x=0 and y=0</li>
                  )}
                  {currentExample.type === 'exponential' && (
                    <li>Horizontal asymptote at y=0</li>
                  )}
                </ul>
              </div>
            </div>
            <div>
              <div 
                ref={boardRef} 
                className="w-full h-64 md:h-80 border rounded-md"
              />
              <div className="mt-2 text-sm text-gray-600">
                <p>Domain: x ∈ [{currentExample.domain[0]}, {currentExample.domain[1]}]</p>
                {currentExample.range && (
                  <p>Range: y ∈ [{currentExample.range[0]}, {currentExample.range[1]}]</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-gray-50 p-3 rounded">
        <h4 className="font-bold mb-2">Function Characteristics:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Quadratic</strong>: U-shaped parabola with one vertex</li>
          <li><strong>Cubic</strong>: S-shaped curve with two turning points</li>
          <li><strong>Reciprocal</strong>: Hyperbola with two branches</li>
          <li><strong>Square Root</strong>: Starts at origin and increases</li>
          <li><strong>Exponential</strong>: Rapid growth/decay with asymptote</li>
          <li><strong>Absolute Value</strong>: V-shaped graph with sharp vertex</li>
        </ul>
      </div>
    </div>
  );
};

export default CubicFunctions;