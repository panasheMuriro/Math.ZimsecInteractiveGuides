import React, { useState } from 'react';
import { X, Calculator, MapPin } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface Point {
  x: number;
  y: number;
}

const ShearVisualizer: React.FC = () => {
  const points: Point[] = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
    { x: 2, y: 0 },
  ];
  const [mode, setMode] = useState<'draw' | 'compute' | 'invariant' | 'describe'>('draw');
  const [shearAxis, setShearAxis] = useState<'x-axis' | 'y-axis'>('x-axis');
  const [k, setK] = useState<number>(1); // Shear factor
  const [pointA, setPointA] = useState<Point>({ x: 2, y: 3 });
  const [pointAPrime, setPointAPrime] = useState<Point>({ x: 5, y: 3 });
  const [showResult, setShowResult] = useState(false);

  const handleKChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setK(value);
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
    setShearAxis('x-axis');
    setK(1);
    setPointA({ x: 2, y: 3 });
    setPointAPrime({ x: 5, y: 3 });
  };

  const gridCount = 10;
  const cellSize = 30;

  const getShearedPoints = () => {
    return points.map((p) => {
      if (shearAxis === 'x-axis') {
        return { x: p.x + k * p.y, y: p.y };
      } else {
        return { x: p.x, y: p.y + k * p.x };
      }
    });
  };

  const shearedPoints = getShearedPoints();

  const getShearMatrix = () => {
    if (shearAxis === 'x-axis') {
      return `\\begin{pmatrix} 1 & ${k} \\\\ 0 & 1 \\end{pmatrix}`;
    } else {
      return `\\begin{pmatrix} 1 & 0 \\\\ ${k} & 1 \\end{pmatrix}`;
    }
  };

  const getInvariantLine = () => {
    return shearAxis === 'x-axis' ? 'y-axis (x = 0)' : 'x-axis (y = 0)';
  };

  const computeImagePoint = () => {
    if (shearAxis === 'x-axis') {
      return { x: pointA.x + k * pointA.y, y: pointA.y };
    } else {
      return { x: pointA.x, y: pointA.y + k * pointA.x };
    }
  };

  const calculatedImagePoint = computeImagePoint();

  const describeShear = () => {
    if (shearAxis === 'x-axis') {
      const possibleK = pointA.y !== 0 ? (pointAPrime.x - pointA.x) / pointA.y : NaN;
      if (!isNaN(possibleK) && pointAPrime.y === pointA.y) {
        return {
          axis: 'x-axis',
          k: possibleK,
          invariant: 'y-axis (x = 0)',
        };
      }
    } else {
      const possibleK = pointA.x !== 0 ? (pointAPrime.y - pointA.y) / pointA.x : NaN;
      if (!isNaN(possibleK) && pointAPrime.x === pointA.x) {
        return {
          axis: 'y-axis',
          k: possibleK,
          invariant: 'x-axis (y = 0)',
        };
      }
    }
    return {
      axis: 'unknown',
      k: NaN,
      invariant: 'unknown',
    };
  };

  const { axis: calculatedAxis, k: calculatedK, invariant: calculatedInvariant } = describeShear();

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Shear Visualizer</h2>

      {/* Modes */}
      <div className="grid grid-cols-2 gap-2 border-b mb-4">
        <button
          className={`py-2 px-4 text-sm font-semibold ${mode === 'draw' ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500' : 'text-gray-600 hover:bg-gray-100'}`}
          onClick={() => setMode('draw')}
        >
          Draw Shear
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
          Describe Shear
        </button>
      </div>

      {/* Mode Content */}
      {mode === 'draw' && (
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Set Shear Parameters</h3>
            <div className="flex gap-4 mb-2">
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold ${shearAxis === 'x-axis' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setShearAxis('x-axis')}
              >
                X-Axis Shear
              </button>
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold ${shearAxis === 'y-axis' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setShearAxis('y-axis')}
              >
                Y-Axis Shear
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium">Shear Factor (k)</label>
              <input
                type="number"
                value={k}
                onChange={handleKChange}
                className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                step="0.5"
              />
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
                className={`flex-1 py-2 px-4 text-sm font-semibold ${shearAxis === 'x-axis' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setShearAxis('x-axis')}
              >
                X-Axis Shear
              </button>
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold ${shearAxis === 'y-axis' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setShearAxis('y-axis')}
              >
                Y-Axis Shear
              </button>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Shear Factor (k)</label>
              <input
                type="number"
                value={k}
                onChange={handleKChange}
                className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                step="0.5"
              />
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
                className={`flex-1 py-2 px-4 text-sm font-semibold ${shearAxis === 'x-axis' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setShearAxis('x-axis')}
              >
                X-Axis Shear
              </button>
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold ${shearAxis === 'y-axis' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setShearAxis('y-axis')}
              >
                Y-Axis Shear
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium">Shear Factor (k)</label>
              <input
                type="number"
                value={k}
                onChange={handleKChange}
                className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                step="0.5"
              />
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
            <h3 className="text-lg font-semibold">Describe Shear</h3>
            <p className="text-sm mb-2">
              Enter a point and its image to find the shear axis, factor, and invariant line:
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
              {shearAxis === 'x-axis' && (
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
              {shearAxis === 'y-axis' && (
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

          {/* Sheared Quadrilateral */}
          {(mode === 'draw' || mode === 'invariant') && showResult && (
            <polygon
              points={shearedPoints
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

          {/* Points for Describe Mode */}
          {mode === 'describe' && (
            <>
              <circle
                cx={pointA.x * cellSize + gridCount * cellSize / 2}
                cy={gridCount * cellSize / 2 - pointA.y * cellSize}
                r="3"
                fill="blue"
              />
              {showResult && (
                <circle
                  cx={pointAPrime.x * cellSize + gridCount * cellSize / 2}
                  cy={gridCount * cellSize / 2 - pointAPrime.y * cellSize}
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
                shearedPoints.map((p, i) => (
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
          {mode === 'describe' && (
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
                  x={pointAPrime.x * cellSize + gridCount * cellSize / 2 + 5}
                  y={gridCount * cellSize / 2 - pointAPrime.y * cellSize - 5}
                  fill="red"
                  fontSize="12"
                >
                  A'({pointAPrime.x},{pointAPrime.y})
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
            <p className="mt-2">Sheared quadrilateral vertices:</p>
            <ul className="list-disc pl-5">
              {shearedPoints.map((p, i) => (
                <li key={i}>
                  <InlineMath math={`A_{${i + 1}}'(${p.x},${p.y})`} />
                </li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">Shear Matrix:</p>
            <BlockMath math={getShearMatrix()} />
            <p className="mt-2 font-semibold">How Transformation Works:</p>
            <p>
              For a shear along {shearAxis} with factor k={k}:
            </p>
            <ul className="list-disc pl-5">
              {points.map((p, i) => (
                <li key={i}>
                  <BlockMath
                    math={`${
                      getShearMatrix()
                    } \\begin{pmatrix} ${p.x} \\\\ ${p.y} \\end{pmatrix} = \\begin{pmatrix} ${shearedPoints[i].x} \\\\ ${shearedPoints[i].y} \\end{pmatrix}`}
                  />
                </li>
              ))}
            </ul>
            <p className="mt-2">Explanation:</p>
            <p>
              Each point’s {shearAxis === 'x-axis' ? 'x-coordinate is shifted by k times its y-coordinate' : 'y-coordinate is shifted by k times its x-coordinate'}, while the other coordinate remains unchanged.
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
            <p className="mt-2 font-semibold">Shear Matrix:</p>
            <BlockMath math={getShearMatrix()} />
            <p className="mt-2">Calculation:</p>
            <BlockMath
              math={`${
                getShearMatrix()
              } \\begin{pmatrix} ${pointA.x} \\\\ ${pointA.y} \\end{pmatrix} = \\begin{pmatrix} ${calculatedImagePoint.x} \\\\ ${calculatedImagePoint.y} \\end{pmatrix}`}
            />
            <p className="mt-2">Explanation:</p>
            <p>
              The point’s {shearAxis === 'x-axis' ? 'x-coordinate is increased by k times its y-coordinate' : 'y-coordinate is increased by k times its x-coordinate'}, using the shear matrix.
            </p>
          </>
        )}
        {mode === 'invariant' && showResult && (
          <>
            <p className="mt-2">Sheared quadrilateral vertices:</p>
            <ul className="list-disc pl-5">
              {shearedPoints.map((p, i) => (
                <li key={i}>
                  <InlineMath math={`A_{${i + 1}}'(${p.x},${p.y})`} />
                </li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">Invariant Line:</p>
            <p>{getInvariantLine()}</p>
            <p className="mt-2">Explanation:</p>
            <p>
              The invariant line is unchanged by the shear. For a shear along {shearAxis}, the {shearAxis === 'x-axis' ? 'y-axis (x=0)' : 'x-axis (y=0)'} remains fixed.
            </p>
          </>
        )}
        {mode === 'describe' && showResult && (
          <>
            <p className="mt-2 font-semibold">Calculated Shear:</p>
            <p>
              From <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> to{' '}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />:
            </p>
            <p>
              Shear Axis: {calculatedAxis === 'x-axis' ? 'X-axis shear' : calculatedAxis === 'y-axis' ? 'Y-axis shear' : 'Unknown'}
            </p>
            <p>
              Shear factor: <InlineMath math={`k = ${isNaN(calculatedK) ? 'undefined' : calculatedK}`} />
            </p>
            <p>
              Invariant line: {calculatedInvariant}
            </p>
            <p className="mt-2">Explanation:</p>
            <p>
              For an x-axis shear, x' = x + k*y and y' = y. For a y-axis shear, y' = y + k*x and x' = x. The shear factor k is calculated accordingly, and the invariant line is determined by the axis of shear.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ShearVisualizer;