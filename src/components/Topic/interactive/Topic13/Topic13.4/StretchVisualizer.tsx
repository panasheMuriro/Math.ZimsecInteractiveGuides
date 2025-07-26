import React, { useState } from 'react';
import { X, Calculator, MapPin } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface Point {
  x: number;
  y: number;
}

const StretchVisualizer: React.FC = () => {
  const points: Point[] = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
    { x: 2, y: 0 },
  ];
  const [mode, setMode] = useState<'draw' | 'compute' | 'invariant' | 'describe'>('draw');
  const [stretchType, setStretchType] = useState<'one-way' | 'two-way'>('one-way');
  const [k1, setK1] = useState<number>(2); // Stretch factor along x-axis
  const [k2, setK2] = useState<number>(1); // Stretch factor along y-axis
  const [pointA, setPointA] = useState<Point>({ x: 1, y: 1 });
  const [pointAPrime, setPointAPrime] = useState<Point>({ x: 4, y: 3 });
  const [showResult, setShowResult] = useState(false);

  const handleK1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 1;
    setK1(value);
  };

  const handleK2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 1;
    setK2(value);
  };

  const handlePointChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    axis: 'x' | 'y',
    isPrime: boolean
  ) => {
    const value = parseFloat(e.target.value) || 0;
    if (isPrime) {
      setPointAPrime((prev) => ({ ...prev, [axis]: value }));
    } else {
      setPointA((prev) => ({ ...prev, [axis]: value }));
    }
  };

  const applyAction = () => {
    setShowResult(true);
  };

  const reset = () => {
    setShowResult(false);
    setStretchType('one-way');
    setK1(2);
    setK2(1);
    setPointA({ x: 2, y: 3 });
    setPointAPrime({ x: 4, y: 3 });
  };

  const gridCount = 10;
  const cellSize = 30;

  const getStretchedPoints = () => {
    return points.map((p) => ({
      x: p.x * k1,
      y: stretchType === 'two-way' ? p.y * k2 : p.y,
    }));
  };

  const stretchedPoints = getStretchedPoints();

  const getStretchMatrix = () => {
    return `\\begin{pmatrix} ${k1} & 0 \\\\ 0 & ${stretchType === 'two-way' ? k2 : 1} \\end{pmatrix}`;
  };

  const getInvariantLine = () => {
    if (stretchType === 'one-way') {
      return 'y-axis (x = 0)';
    }
    if (k1 === 1) return 'y-axis (x = 0)';
    if (k2 === 1) return 'x-axis (y = 0)';
    return 'none';
  };

  const computeImagePoint = () => {
    return {
      x: pointA.x * k1,
      y: stretchType === 'two-way' ? pointA.y * k2 : pointA.y,
    };
  };

  const calculatedImagePoint = computeImagePoint();

  const describeStretch = () => {
    const possibleK1 = pointA.x !== 0 ? pointAPrime.x / pointA.x : NaN;
    const possibleK2 = pointA.y !== 0 ? pointAPrime.y / pointA.y : NaN;
    if (!isNaN(possibleK1) && pointAPrime.y === pointA.y) {
      return {
        type: 'one-way',
        k1: possibleK1,
        k2: 1,
        invariant: 'y-axis (x = 0)',
      };
    }
    if (!isNaN(possibleK1) && !isNaN(possibleK2)) {
      return {
        type: 'two-way',
        k1: possibleK1,
        k2: possibleK2,
        invariant: possibleK1 === 1 ? 'y-axis (x = 0)' : possibleK2 === 1 ? 'x-axis (y = 0)' : 'none',
      };
    }
    return {
      type: 'unknown',
      k1: NaN,
      k2: NaN,
      invariant: 'unknown',
    };
  };

  const { type: calculatedType, k1: calculatedK1, k2: calculatedK2, invariant: calculatedInvariant } = describeStretch();

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Stretch Visualizer</h2>

      {/* Modes */}
      <div className="grid grid-cols-2 gap-2 border-b mb-4">
        <button
          className={`py-2 px-4 text-sm font-semibold ${mode === 'draw' ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500' : 'text-gray-600 hover:bg-gray-100'}`}
          onClick={() => setMode('draw')}
        >
          Draw Stretch
        </button>
        <button
          className={`py-2 px-4 text-sm font-semibold ${mode === 'compute' ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500' : 'text-gray-600 hover:bg-gray-100'}`}
          onClick={() => setMode('compute')}
        >
          Compute Coordinates
        </button>
        <button
          className={`py-2 px-4 text-sm font-semibold ${mode === 'invariant' ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500' : 'text-gray-600 hover:bg-gray-100'}`}
          onClick={() => setMode('invariant')}
        >
          Invariant Line
        </button>
        <button
          className={`py-2 px-4 text-sm font-semibold ${mode === 'describe' ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500' : 'text-gray-600 hover:bg-gray-100'}`}
          onClick={() => setMode('describe')}
        >
          Describe Stretch
        </button>
      </div>

      {/* Mode Content */}
      {mode === 'draw' && (
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Set Stretch Parameters</h3>
            <div className="flex gap-4 mb-2">
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold ${stretchType === 'one-way' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setStretchType('one-way')}
              >
                One-Way
              </button>
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold ${stretchType === 'two-way' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setStretchType('two-way')}
              >
                Two-Way
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">X-axis Factor (k₁)</label>
                <input
                  type="number"
                  value={k1}
                  onChange={handleK1Change}
                  className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  step="0.5"
                />
              </div>
              {stretchType === 'two-way' && (
                <div>
                  <label className="block text-sm font-medium">Y-axis Factor (k₂)</label>
                  <input
                    type="number"
                    value={k2}
                    onChange={handleK2Change}
                    className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    step="0.5"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={applyAction}
              className="bg-blue-500 text-white px-2 py-2 rounded flex items-center justify-center text-sm hover:bg-blue-600 transition"
            >
              Apply
            </button>
            <button
              onClick={reset}
              className="bg-gray-500 text-white px-2 py-2 rounded flex items-center justify-center text-sm hover:bg-gray-600 transition"
            >
              <X className="mr-1 w-4 h-4" /> Reset
            </button>
          </div>
        </div>
      )}

      {mode === 'compute' && (
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Compute Image Coordinates</h3>
            <div className="flex gap-4 mb-2">
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold ${stretchType === 'one-way' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setStretchType('one-way')}
              >
                One-Way
              </button>
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold ${stretchType === 'two-way' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setStretchType('two-way')}
              >
                Two-Way
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <label className="block text-sm font-medium">X-axis Factor (k₁)</label>
                <input
                  type="number"
                  value={k1}
                  onChange={handleK1Change}
                  className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  step="0.5"
                />
              </div>
              {stretchType === 'two-way' && (
                <div>
                  <label className="block text-sm font-medium">Y-axis Factor (k₂)</label>
                  <input
                    type="number"
                    value={k2}
                    onChange={handleK2Change}
                    className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    step="0.5"
                  />
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Point A (x, y)</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={pointA.x}
                  onChange={(e) => handlePointChange(e, 'x', false)}
                  className="w-16 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  step="0.5"
                />
                <input
                  type="number"
                  value={pointA.y}
                  onChange={(e) => handlePointChange(e, 'y', false)}
                  className="w-16 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  step="0.5"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={applyAction}
              className="bg-green-500 text-white px-2 py-2 rounded flex items-center justify-center text-sm hover:bg-green-600 transition"
            >
              <Calculator className="mr-1 w-4 h-4" /> Compute
            </button>
            <button
              onClick={reset}
              className="bg-gray-500 text-white px-2 py-2 rounded flex items-center justify-center text-sm hover:bg-gray-600 transition"
            >
              <X className="mr-1 w-4 h-4" /> Reset
            </button>
          </div>
        </div>
      )}

      {mode === 'invariant' && (
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Identify Invariant Line</h3>
            <div className="flex gap-4 mb-2">
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold ${stretchType === 'one-way' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setStretchType('one-way')}
              >
                One-Way
              </button>
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold ${stretchType === 'two-way' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setStretchType('two-way')}
              >
                Two-Way
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">X-axis Factor (k₁)</label>
                <input
                  type="number"
                  value={k1}
                  onChange={handleK1Change}
                  className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  step="0.5"
                />
              </div>
              {stretchType === 'two-way' && (
                <div>
                  <label className="block text-sm font-medium">Y-axis Factor (k₂)</label>
                  <input
                    type="number"
                    value={k2}
                    onChange={handleK2Change}
                    className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    step="0.5"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={applyAction}
              className="bg-blue-500 text-white px-2 py-2 rounded flex items-center justify-center text-sm hover:bg-blue-600 transition"
            >
              <MapPin className="mr-1 w-4 h-4" /> Show
            </button>
            <button
              onClick={reset}
              className="bg-gray-500 text-white px-2 py-2 rounded flex items-center justify-center text-sm hover:bg-gray-600 transition"
            >
              <X className="mr-1 w-4 h-4" /> Reset
            </button>
          </div>
        </div>
      )}

      {mode === 'describe' && (
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Describe Stretch</h3>
            <p className="text-sm mb-2">
              Enter a point and its image to find the stretch type, factors, and invariant line:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Point A (x, y)</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={pointA.x}
                    onChange={(e) => handlePointChange(e, 'x', false)}
                    className="w-16 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    step="0.5"
                  />
                  <input
                    type="number"
                    value={pointA.y}
                    onChange={(e) => handlePointChange(e, 'y', false)}
                    className="w-16 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    step="0.5"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Point A' (x', y')</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={pointAPrime.x}
                    onChange={(e) => handlePointChange(e, 'x', true)}
                    className="w-16 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    step="0.5"
                  />
                  <input
                    type="number"
                    value={pointAPrime.y}
                    onChange={(e) => handlePointChange(e, 'y', true)}
                    className="w-16 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    step="0.5"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={applyAction}
              className="bg-green-500 text-white px-2 py-2 rounded flex items-center justify-center text-sm hover:bg-green-600 transition"
            >
              <Calculator className="mr-1 w-4 h-4" /> Describe
            </button>
            <button
              onClick={reset}
              className="bg-gray-500 text-white px-2 py-2 rounded flex items-center justify-center text-sm hover:bg-gray-600 transition"
            >
              <X className="mr-1 w-4 h-4" /> Reset
            </button>
          </div>
        </div>
      )}

      {/* SVG Visualization */}
      <div className="relative w-full h-80 bg-gray-100 rounded overflow-hidden">
        <svg
          width={gridCount * cellSize}
          height={gridCount * cellSize}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          {/* Grid */}
          {[...Array(gridCount + 1)].map((_, i) => (
            <g key={i}>
              <line
                x1={i * cellSize}
                y1={0}
                x2={i * cellSize}
                y2={gridCount * cellSize}
                stroke="#ddd"
              />
              <line
                x1={0}
                y1={i * cellSize}
                x2={gridCount * cellSize}
                y2={i * cellSize}
                stroke="#ddd"
              />
            </g>
          ))}

          {/* Axes */}
          <line
            x1={gridCount * cellSize / 2}
            y1={0}
            x2={gridCount * cellSize / 2}
            y2={gridCount * cellSize}
            stroke="#000"
            strokeWidth="2"
          />
          <line
            x1={0}
            y1={gridCount * cellSize / 2}
            x2={gridCount * cellSize}
            y2={gridCount * cellSize / 2}
            stroke="#000"
            strokeWidth="2"
          />

          {/* X-axis scale */}
          {[...Array(gridCount + 1)].map((_, i) => {
            const xCoord = i - gridCount / 2;
            return (
              <text
                key={`x-${i}`}
                x={i * cellSize}
                y={gridCount * cellSize / 2 + 15}
                fill="#000"
                fontSize="10"
                textAnchor="middle"
              >
                {xCoord}
              </text>
            );
          })}

          {/* Y-axis scale */}
          {[...Array(gridCount + 1)].map((_, i) => {
            const yCoord = gridCount / 2 - i;
            if (yCoord !== 0) {
              return (
                <text
                  key={`y-${i}`}
                  x={gridCount * cellSize / 2 + 10}
                  y={i * cellSize + 5}
                  fill="#000"
                  fontSize="10"
                  textAnchor="start"
                >
                  {yCoord}
                </text>
              );
            }
            return null;
          })}

          {/* Invariant Line */}
          {showResult && (mode === 'draw' || mode === 'invariant') && (
            <>
              {(stretchType === 'one-way' || k1 === 1) && (
                <line
                  x1={gridCount * cellSize / 2}
                  y1={0}
                  x2={gridCount * cellSize / 2}
                  y2={gridCount * cellSize}
                  stroke="green"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              )}
              {stretchType === 'two-way' && k2 === 1 && (
                <line
                  x1={0}
                  y1={gridCount * cellSize / 2}
                  x2={gridCount * cellSize}
                  y2={gridCount * cellSize / 2}
                  stroke="green"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              )}
            </>
          )}

          {/* Original Quadrilateral */}
          {(mode === 'draw' || mode === 'invariant') && (
            <polygon
              points={points
                .map((p) => `${p.x * cellSize + gridCount * cellSize / 2},${gridCount * cellSize / 2 - p.y * cellSize}`)
                .join(' ')}
              fill="rgba(59, 130, 246, 0.5)"
              stroke="blue"
              strokeWidth="2"
            />
          )}

          {/* Stretched Quadrilateral */}
          {(mode === 'draw' || mode === 'invariant') && showResult && (
            <polygon
              points={stretchedPoints
                .map((p) => `${p.x * cellSize + gridCount * cellSize / 2},${gridCount * cellSize / 2 - p.y * cellSize}`)
                .join(' ')}
              fill="rgba(239, 68, 68, 0.5)"
              stroke="red"
              strokeWidth="2"
            />
          )}

          {/* Points for Compute Mode */}
          {mode === 'compute' && (
            <>
              <circle
                cx={pointA.x * cellSize + gridCount * cellSize / 2}
                cy={gridCount * cellSize / 2 - pointA.y * cellSize}
                r="3"
                fill="blue"
              />
              {showResult && (
                <circle
                  cx={calculatedImagePoint.x * cellSize + gridCount * cellSize / 2}
                  cy={gridCount * cellSize / 2 - calculatedImagePoint.y * cellSize}
                  r="3"
                  fill="red"
                />
              )}
            </>
          )}

          {/* Points Labels */}
          {(mode === 'draw' || mode === 'invariant') && (
            <>
              {points.map((p, i) => (
                <text
                  key={i}
                  x={p.x * cellSize + gridCount * cellSize / 2 + 5}
                  y={gridCount * cellSize / 2 - p.y * cellSize - 5}
                  fill="blue"
                  fontSize="12"
                >
                  A{i + 1}({p.x},{p.y})
                </text>
              ))}
              {showResult &&
                stretchedPoints.map((p, i) => (
                  <text
                    key={i}
                    x={p.x * cellSize + gridCount * cellSize / 2 + 5}
                    y={gridCount * cellSize / 2 - p.y * cellSize - 5}
                    fill="red"
                    fontSize="12"
                  >
                    A{i + 1}'({p.x},{p.y})
                  </text>
                ))}
            </>
          )}
          {mode === 'compute' && (
            <>
              <text
                x={pointA.x * cellSize + gridCount * cellSize / 2 + 5}
                y={gridCount * cellSize / 2 - pointA.y * cellSize - 5}
                fill="blue"
                fontSize="12"
              >
                A({pointA.x},{pointA.y})
              </text>
              {showResult && (
                <text
                  x={calculatedImagePoint.x * cellSize + gridCount * cellSize / 2 + 5}
                  y={gridCount * cellSize / 2 - calculatedImagePoint.y * cellSize - 5}
                  fill="red"
                  fontSize="12"
                >
                  A'({calculatedImagePoint.x},{calculatedImagePoint.y})
                </text>
              )}
            </>
          )}
        </svg>
      </div>

      {/* Explanation Section */}
      <div className="mt-4 text-sm">
        {(mode === 'draw' || mode === 'invariant') && (
          <>
            <p>Original quadrilateral vertices:</p>
            <ul className="list-disc pl-5">
              {points.map((p, i) => (
                <li key={i}>
                  <InlineMath math={`A_{${i + 1}}(${p.x}, ${p.y})`} />
                </li>
              ))}
            </ul>
          </>
        )}
        {mode === 'draw' && showResult && (
          <>
            <p className="mt-2">Stretched quadrilateral vertices:</p>
            <ul className="list-disc pl-5">
              {stretchedPoints.map((p, i) => (
                <li key={i}>
                  <InlineMath math={`A_{${i + 1}}'(${p.x},${p.y})`} />
                </li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">Stretch Matrix:</p>
            <BlockMath math={getStretchMatrix()} />
            <p className="mt-2 font-semibold">How Transformation Works:</p>
            <p>
              For a {stretchType} stretch with k₁={k1}
              {stretchType === 'two-way' ? ` and k₂=${k2}` : ''}:
            </p>
            <ul className="list-disc pl-5">
              {points.map((p, i) => (
                <li key={i}>
                  <BlockMath
                    math={`${
                      getStretchMatrix()
                    } \\begin{pmatrix} ${p.x} \\\\ ${p.y} \\end{pmatrix} = \\begin{pmatrix} ${stretchedPoints[i].x} \\\\ ${stretchedPoints[i].y} \\end{pmatrix}`}
                  />
                </li>
              ))}
            </ul>
            <p className="mt-2">Explanation:</p>
            <p>
              Each point’s x-coordinate is scaled by k₁{stretchType === 'two-way' ? ', and y-coordinate by k₂' : ''}.
            </p>
          </>
        )}
        {mode === 'compute' && showResult && (
          <>
            <p className="mt-2 font-semibold">Computed Image:</p>
            <p>
              Point A: <InlineMath math={`(${pointA.x}, ${pointA.y})`} />
            </p>
            <p>
              Image A': <InlineMath math={`(${calculatedImagePoint.x}, ${calculatedImagePoint.y})`} />
            </p>
            <p className="mt-2 font-semibold">Stretch Matrix:</p>
            <BlockMath math={getStretchMatrix()} />
            <p className="mt-2">Calculation:</p>
            <BlockMath
              math={`${
                getStretchMatrix()
              } \\begin{pmatrix} ${pointA.x} \\\\ ${pointA.y} \\end{pmatrix} = \\begin{pmatrix} ${calculatedImagePoint.x} \\\\ ${calculatedImagePoint.y} \\end{pmatrix}`}
            />
            <p className="mt-2">Explanation:</p>
            <p>
              The point’s x-coordinate is multiplied by k₁{stretchType === 'two-way' ? ', and y-coordinate by k₂' : ''} using the stretch matrix.
            </p>
          </>
        )}
        {mode === 'invariant' && showResult && (
          <>
            <p className="mt-2">Stretched quadrilateral vertices:</p>
            <ul className="list-disc pl-5">
              {stretchedPoints.map((p, i) => (
                <li key={i}>
                  <InlineMath math={`A_{${i + 1}}'(${p.x},${p.y})`} />
                </li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">Invariant Line:</p>
            <p>{getInvariantLine()}</p>
            <p className="mt-2">Explanation:</p>
            <p>
              The invariant line is unchanged by the stretch. For a one-way stretch along x-axis, the y-axis (x=0) is invariant. For a two-way stretch, the x-axis or y-axis is invariant if k₁=1 or k₂=1, respectively.
            </p>
          </>
        )}
        {mode === 'describe' && showResult && (
          <>
            <p className="mt-2 font-semibold">Calculated Stretch:</p>
            <p>
              From <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> to{' '}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />:
            </p>
            <p>
              Type: {calculatedType === 'one-way' ? 'One-way stretch' : calculatedType === 'two-way' ? 'Two-way stretch' : 'Unknown'}
            </p>
            <p>
              X-axis factor: <InlineMath math={`k_1 = ${isNaN(calculatedK1) ? 'undefined' : calculatedK1}`} />
            </p>
            {calculatedType === 'two-way' && (
              <p>
                Y-axis factor: <InlineMath math={`k_2 = ${isNaN(calculatedK2) ? 'undefined' : calculatedK2}`} />
              </p>
            )}
            <p>
              Invariant line: {calculatedInvariant}
            </p>
            <p className="mt-2">Explanation:</p>
            <p>
              If y' = y, it’s a one-way stretch with k₁ = x'/x. For a two-way stretch, k₁ = x'/x and k₂ = y'/y. The invariant line is determined by factors equal to 1.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default StretchVisualizer;