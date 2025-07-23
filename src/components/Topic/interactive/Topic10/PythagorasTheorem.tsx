import React, { useState } from 'react';

interface TriangleSides {
  a: number | null;
  b: number | null;
  c: number | null;
}

const PythagorasTheorem: React.FC = () => {
  const [sides, setSides] = useState<TriangleSides>({ a: null, b: null, c: null });
  const [error, setError] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleInputChange = (side: keyof TriangleSides, value: string) => {
    const numValue = value === '' ? null : parseFloat(value);
    setSides(prev => ({ ...prev, [side]: numValue }));
    setError('');
    setResult('');
  };

  const calculateSide = () => {
    const { a, b, c } = sides;
    
    if ((a && b && !c) || (a && c && !b) || (b && c && !a)) {
      if (a && b && !c) {
        if (a <= 0 || b <= 0) {
          setError('Sides must be positive numbers');
          return;
        }
        const cValue = Math.sqrt(a * a + b * b);
        setResult(`Hypotenuse (c) = ${cValue.toFixed(2)}`);
      } else if (a && c && !b) {
        if (a <= 0 || c <= 0 || a >= c) {
          setError('Invalid input: a must be positive and less than c');
          return;
        }
        const bValue = Math.sqrt(c! * c! - a * a);
        setResult(`Leg (b) = ${bValue.toFixed(2)}`);
      } else if (b && c && !a) {
        if (b <= 0 || c <= 0 || b >= c) {
          setError('Invalid input: b must be positive and less than c');
          return;
        }
        const aValue = Math.sqrt(c! * c! - b * b);
        setResult(`Leg (a) = ${aValue.toFixed(2)}`);
      }
    } else {
      setError('Please provide exactly two sides to calculate the third');
    }
  };

  const reset = () => {
    setSides({ a: null, b: null, c: null });
    setError('');
    setResult('');
  };

  // Grid visualization parameters
  const gridSize = 10; // Size of each unit square in pixels
  const maxSide = 5; // Max side length for visualization to fit on mobile
  const a = Math.min(sides.a || 3, maxSide); // Default to 3 if null
  const b = Math.min(sides.b || 4, maxSide); // Default to 4 if null
  const c = Math.sqrt(a * a + b * b); // Hypotenuse

  // Generate grid squares for a^2, b^2, c^2
  const renderGrid = (side: number, xOffset: number, color: string, label: string) => {
    const squares = [];
    const sideInt = Math.floor(side); // Use integer for grid
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
          {label} ({sideInt}² = {sideInt * sideInt})
        </text>
      </>
    );
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-2xl font-bold text-center mb-4">Pythagoras Theorem</h1>
      
      {/* Theorem Explanation */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Formula: a² + b² = c²</h2>
        <p className="text-sm text-gray-700 mb-2">
          For a right-angled triangle, the square of the hypotenuse (c) equals the sum of the squares of the legs (a and b).
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
          <text x="30" y="110" fontSize="12">c = {c.toFixed(2)}</text>
          
          {/* Grids for a^2, b^2, c^2 */}
          {renderGrid(a, 80, 'rgba(255,0,0,0.2)', 'a²')}
          {renderGrid(b, 140, 'rgba(0,255,0,0.2)', 'b²')}
          {renderGrid(c, 200, 'rgba(0,0,255,0.2)', 'c²')}
        </svg>
      </div>

      {/* Input Fields */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Side a (leg):</label>
          <input
            type="number"
            value={sides.a ?? ''}
            onChange={(e) => handleInputChange('a', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2"
            placeholder="Enter side a"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Side b (leg):</label>
          <input
            type="number"
            value={sides.b ?? ''}
            onChange={(e) => handleInputChange('b', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2"
            placeholder="Enter side b"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Side c (hypotenuse):</label>
          <input
            type="number"
            value={sides.c ?? ''}
            onChange={(e) => handleInputChange('c', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2"
            placeholder="Enter side c"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={calculateSide}
          className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Calculate
        </button>
        <button
          onClick={reset}
          className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>

      {/* Result and Error */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {result && <p className="text-green-500 text-sm mb-4">{result}</p>}

      {/* Applications */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Applications</h2>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Calculate the diagonal of a rectangle</li>
          <li>Find the height of a ladder against a wall</li>
          <li>Determine distances in navigation or surveying</li>
        </ul>
      </div>
    </div>
  );
};

export default PythagorasTheorem;