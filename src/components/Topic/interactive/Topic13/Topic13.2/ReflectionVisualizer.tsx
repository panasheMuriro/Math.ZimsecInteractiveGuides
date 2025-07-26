import React, { useState } from 'react';
import { Move, X, Calculator } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface Point {
  x: number;
  y: number;
}

const ReflectionVisualizer: React.FC = () => {
  const points: Point[] = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
    { x: 2, y: 0 },
  ];
  const [reflectionAxis, setReflectionAxis] = useState<string>('x-axis');
  const [pointA, setPointA] = useState<Point>({ x: 1, y: 2 });
  const [pointAPrime, setPointAPrime] = useState<Point>({ x: 1, y: -2 });
  const [showReflected, setShowReflected] = useState(false);
  const [showCalculatedAxis, setShowCalculatedAxis] = useState(false);

  const handleCorrespondencePointChange = (
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

  const reflectPoints = () => {
    setShowReflected(true);
    setShowCalculatedAxis(false);
  };

  const calculateAxis = () => {
    setShowCalculatedAxis(true);
    setShowReflected(false);
  };

  const reset = () => {
    setShowReflected(false);
    setShowCalculatedAxis(false);
    setReflectionAxis('x-axis');
    setPointA({ x: 1, y: 2 });
    setPointAPrime({ x: 1, y: -2 });
  };

  const gridCount = 10;
  const cellSize = 30;

  const getReflectedPoints = () => {
    switch (reflectionAxis) {
      case 'x-axis':
        return points.map((p) => ({ x: p.x, y: -p.y }));
      case 'y-axis':
        return points.map((p) => ({ x: -p.x, y: p.y }));
      case 'y=x':
        return points.map((p) => ({ x: p.y, y: p.x }));
      case 'y=-x':
        return points.map((p) => ({ x: -p.y, y: -p.x }));
      default:
        return points;
    }
  };

  const reflectedPoints = getReflectedPoints();

  const getReflectionMatrix = () => {
    switch (reflectionAxis) {
      case 'x-axis':
        return '\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}';
      case 'y-axis':
        return '\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}';
      case 'y=x':
        return '\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}';
      case 'y=-x':
        return '\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}';
      default:
        return '';
    }
  };

  const findReflectionAxis = () => {
    if (pointA.x === pointAPrime.x && pointA.y === -pointAPrime.y) return 'x-axis';
    if (pointA.x === -pointAPrime.x && pointA.y === pointAPrime.y) return 'y-axis';
    if (pointA.x === pointAPrime.y && pointA.y === pointAPrime.x) return 'y=x';
    if (pointA.x === -pointAPrime.y && pointA.y === -pointAPrime.x) return 'y=-x';
    return 'unknown';
  };

  const calculatedAxis = findReflectionAxis();

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Move className="mr-2" /> Reflection Visualizer
      </h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Select Reflection Axis</h3>
        <select
          value={reflectionAxis}
          onChange={(e) => setReflectionAxis(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="x-axis">X-axis</option>
          <option value="y-axis">Y-axis</option>
          <option value="y=x">Line y=x</option>
          <option value="y=-x">Line y=-x</option>
        </select>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Find Reflection Axis</h3>
        <p className="text-sm mb-2">
          Enter a point and its image to find the reflection axis:
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Point A (x, y)</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={pointA.x}
                onChange={(e) => handleCorrespondencePointChange(e, 'x', false)}
                className="w-16 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                step="0.5"
              />
              <input
                type="number"
                value={pointA.y}
                onChange={(e) => handleCorrespondencePointChange(e, 'y', false)}
                className="w-16 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                step="0.5"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Point A' (x, y)</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={pointAPrime.x}
                onChange={(e) => handleCorrespondencePointChange(e, 'x', true)}
                className="w-16 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                step="0.5"
              />
              <input
                type="number"
                value={pointAPrime.y}
                onChange={(e) => handleCorrespondencePointChange(e, 'y', true)}
                className="w-16 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                step="0.5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <button
          onClick={reflectPoints}
          className="bg-blue-500 text-white px-2 py-2 rounded flex items-center justify-center text-sm hover:bg-blue-600 transition"
        >
          <Move className="mr-1 w-4 h-4" /> Reflect
        </button>
        <button
          onClick={calculateAxis}
          className="bg-green-500 text-white px-2 py-2 rounded flex items-center justify-center text-sm hover:bg-green-600 transition"
        >
          <Calculator className="mr-1 w-4 h-4" /> Find Axis
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-2 py-2 rounded flex items-center justify-center text-sm hover:bg-gray-600 transition"
        >
          <X className="mr-1 w-4 h-4" /> Reset
        </button>
      </div>

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

          {/* Reflection Lines */}
          {reflectionAxis === 'y=x' && (
            <line
              x1={0}
              y1={gridCount * cellSize}
              x2={gridCount * cellSize}
              y2={0}
              stroke="#666"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          )}
          {reflectionAxis === 'y=-x' && (
            <line
              x1={0}
              y1={0}
              x2={gridCount * cellSize}
              y2={gridCount * cellSize}
              stroke="#666"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          )}

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

          {/* Original Quadrilateral */}
          <polygon
            points={points
              .map((p) => `${p.x * cellSize + gridCount * cellSize / 2},${gridCount * cellSize / 2 - p.y * cellSize}`)
              .join(' ')}
            fill="rgba(59, 130, 246, 0.5)"
            stroke="blue"
            strokeWidth="2"
          />

          {/* Reflected Quadrilateral */}
          {showReflected && (
            <polygon
              points={reflectedPoints
                .map((p) => `${p.x * cellSize + gridCount * cellSize / 2},${gridCount * cellSize / 2 - p.y * cellSize}`)
                .join(' ')}
              fill="rgba(239, 68, 68, 0.5)"
              stroke="red"
              strokeWidth="2"
            />
          )}

          {/* Points Labels */}
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
          {showReflected &&
            reflectedPoints.map((p, i) => (
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
        </svg>
      </div>

      <div className="mt-4 text-sm">
        <p>Original quadrilateral vertices:</p>
        <ul className="list-disc pl-5">
          {points.map((p, i) => (
            <li key={i}>
              <InlineMath math={`A_{${i + 1}}(${p.x}, ${p.y})`} />
            </li>
          ))}
        </ul>
        {showReflected && (
          <>
            <p className="mt-2">Reflected quadrilateral vertices:</p>
            <ul className="list-disc pl-5">
              {reflectedPoints.map((p, i) => (
                <li key={i}>
                  <InlineMath math={`A_{${i + 1}}'(${p.x}, ${p.y})`} />
                </li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">Reflection Matrix:</p>
            <BlockMath math={getReflectionMatrix()} />
            <p className="mt-2 font-semibold">How Reflection Works:</p>
            <p>
              Each point is transformed using the reflection matrix for the {reflectionAxis}:
            </p>
            <ul className="list-disc pl-5">
              {points.map((p, i) => (
                <li key={i}>
                  <BlockMath
                    math={`${
                      getReflectionMatrix()
                    } \\begin{pmatrix} ${p.x} \\\\ ${p.y} \\end{pmatrix} = \\begin{pmatrix} ${reflectedPoints[i].x} \\\\ ${reflectedPoints[i].y} \\end{pmatrix}`}
                  />
                </li>
              ))}
            </ul>
            <p className="mt-2">Explanation:</p>
            <p>
              For each vertex <InlineMath math={`A_{i}(${points[0].x}, ${points[0].y})`} />, multiply its coordinate vector by the reflection matrix to get the reflected coordinates <InlineMath math={`A_{i}'`} />.
            </p>
          </>
        )}
        {showCalculatedAxis && (
          <>
            <p className="mt-2 font-semibold">Calculated Reflection Axis:</p>
            <p>
              From <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> to{' '}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />:
            </p>
            <p>
              The reflection axis is{' '}
              {calculatedAxis !== 'unknown' ? (
                <InlineMath math={calculatedAxis} />
              ) : (
                'not a standard axis (x-axis, y-axis, y=x, or y=-x)'
              )}.
            </p>
            <p className="mt-2">Explanation:</p>
            <p>
              To find the reflection axis, compare the coordinates of <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> and{' '}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />. For example, if{' '}
              <InlineMath math={`x = x'`} /> and <InlineMath math={`y = -y'`} />, the axis is the x-axis.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ReflectionVisualizer;