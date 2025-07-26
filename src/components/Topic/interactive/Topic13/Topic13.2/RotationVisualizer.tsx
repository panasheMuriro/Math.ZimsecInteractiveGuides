import React, { useState, useEffect } from 'react';
import { RotateCcw, X, Calculator } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface Point {
  x: number;
  y: number;
}

const RotationVisualizer: React.FC = () => {
  const points: Point[] = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
    { x: 2, y: 0 },
  ];
  const [rotationAngle, setRotationAngle] = useState<string>('90ccw');
  const [pointA, setPointA] = useState<Point>({ x: 2, y: 3 });
  const [pointAPrime, setPointAPrime] = useState<Point>({ x: -3, y: 2 });
  const [showRotated, setShowRotated] = useState(false);
  const [showCalculatedRotation, setShowCalculatedRotation] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); // For resetting animation

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

  const rotatePoints = () => {
    setShowRotated(true);
    setShowCalculatedRotation(false);
    setAnimationKey((prev) => prev + 1); // Trigger animation
  };

  const calculateRotation = () => {
    setShowCalculatedRotation(true);
    setShowRotated(false);
  };

  const reset = () => {
    setShowRotated(false);
    setShowCalculatedRotation(false);
    setRotationAngle('90ccw');
    setPointA({ x: 2, y: 3 });
    setPointAPrime({ x: -3, y: 2 });
    setAnimationKey((prev) => prev + 1);
  };

  // Trigger animation when rotationAngle changes and shape is already shown
  useEffect(() => {
    if (showRotated) {
      setShowRotated(false);
      setTimeout(() => {
        setShowRotated(true);
        setAnimationKey((prev) => prev + 1);
      }, 0);
    }
  }, [rotationAngle]);

  const gridCount = 10;
  const cellSize = 30;

  const getRotatedPoints = () => {
    switch (rotationAngle) {
      case '90ccw':
        return points.map((p) => ({ x: -p.y, y: p.x }));
      case '180':
        return points.map((p) => ({ x: -p.x, y: -p.y }));
      case '270ccw':
        return points.map((p) => ({ x: p.y, y: -p.x }));
      default:
        return points;
    }
  };

  const rotatedPoints = getRotatedPoints();

  const getRotationMatrix = () => {
    switch (rotationAngle) {
      case '90ccw':
        return '\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}';
      case '180':
        return '\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}';
      case '270ccw':
        return '\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}';
      default:
        return '';
    }
  };

  const getRotationDegrees = () => {
    switch (rotationAngle) {
      case '90ccw':
        return 90;
      case '180':
        return 180;
      case '270ccw':
        return 270;
      default:
        return 0;
    }
  };

  const findRotation = () => {
    if (pointA.x === -pointAPrime.y && pointA.y === pointAPrime.x) return '90° counterclockwise';
    if (pointA.x === -pointAPrime.x && pointA.y === -pointAPrime.y) return '180°';
    if (pointA.x === pointAPrime.y && pointA.y === -pointAPrime.x) return '270° counterclockwise';
    return 'unknown';
  };

  const calculatedRotation = findRotation();

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <style>
        {`
          @keyframes rotateShape {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(${getRotationDegrees()}deg);
            }
          }
          .rotate-animation {
            animation: rotateShape 1s ease-in-out forwards;
            transform-origin: ${gridCount * cellSize / 2}px ${gridCount * cellSize / 2}px;
          }
        `}
      </style>
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <RotateCcw className="mr-2" /> Rotation Visualizer
      </h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Select Rotation Angle</h3>
        <select
          value={rotationAngle}
          onChange={(e) => setRotationAngle(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="90ccw">90° Counterclockwise</option>
          <option value="180">180°</option>
          <option value="270ccw">270° Counterclockwise</option>
        </select>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Find Rotation</h3>
        <p className="text-sm mb-2">
          Enter a point and its image to find the rotation angle and direction:
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
            <label className="block text-sm font-medium">Point A' (x', y')</label>
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
          onClick={rotatePoints}
          className="bg-blue-500 text-white px-2 py-2 rounded flex items-center justify-center text-sm hover:bg-blue-600 transition"
        >
          <RotateCcw className="mr-1 w-4 h-4" /> Rotate
        </button>
        <button
          onClick={calculateRotation}
          className="bg-green-500 text-white px-2 py-2 rounded flex items-center justify-center text-sm hover:bg-green-600 transition"
        >
          <Calculator className="mr-1 w-4 h-4" /> Find Rotation
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

          {/* Original Points Labels */}
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

          {/* Rotated Quadrilateral and Labels */}
          {showRotated && (
            <g
              key={`rotate-${animationKey}`}
              className="rotate-animation"
            >
              <polygon
                points={points
                  .map((p) => `${p.x * cellSize + gridCount * cellSize / 2},${gridCount * cellSize / 2 - p.y * cellSize}`)
                  .join(' ')}
                fill="rgba(239, 68, 68, 0.5)"
                stroke="red"
                strokeWidth="2"
              />
              {points.map((p, i) => (
                <text
                  key={i}
                  x={p.x * cellSize + gridCount * cellSize / 2 + 5}
                  y={gridCount * cellSize / 2 - p.y * cellSize - 5}
                  fill="red"
                  fontSize="12"
                >
                  A{i + 1}'({rotatedPoints[i].x},{rotatedPoints[i].y})
                </text>
              ))}
            </g>
          )}
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
        {showRotated && (
          <>
            <p className="mt-2">Rotated quadrilateral vertices:</p>
            <ul className="list-disc pl-5">
              {rotatedPoints.map((p, i) => (
                <li key={i}>
                  <InlineMath math={`A_{${i + 1}}'(${p.x}, ${p.y})`} />
                </li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">Rotation Matrix:</p>
            <BlockMath math={getRotationMatrix()} />
            <p className="mt-2 font-semibold">How Rotation Works:</p>
            <p>
              Each point is transformed using the rotation matrix for{' '}
              {rotationAngle === '90ccw' ? '90° counterclockwise' : rotationAngle === '180' ? '180°' : '270° counterclockwise'}:
            </p>
            <ul className="list-disc pl-5">
              {points.map((p, i) => (
                <li key={i}>
                  <BlockMath
                    math={`${
                      getRotationMatrix()
                    } \\begin{pmatrix} ${p.x} \\\\ ${p.y} \\end{pmatrix} = \\begin{pmatrix} ${rotatedPoints[i].x} \\\\ ${rotatedPoints[i].y} \\end{pmatrix}`}
                  />
                </li>
              ))}
            </ul>
            <p className="mt-2">Explanation:</p>
            <p>
              For each vertex <InlineMath math={`A_{i}(${points[0].x}, ${points[0].y})`} />, multiply its coordinate vector by the rotation matrix to get the rotated coordinates <InlineMath math={`A_{i}'`} />.
            </p>
          </>
        )}
        {showCalculatedRotation && (
          <>
            <p className="mt-2 font-semibold">Calculated Rotation:</p>
            <p>
              From <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> to{' '}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />:
            </p>
            <p>
              The rotation is{' '}
              {calculatedRotation !== 'unknown' ? (
                calculatedRotation
              ) : (
                'not a standard rotation (90° ccw, 180°, or 270° ccw)'
              )}.
            </p>
            <p className="mt-2">Explanation:</p>
            <p>
              To find the rotation, compare the coordinates of <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> and{' '}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />. For example, if{' '}
              <InlineMath math={`x' = -y, y' = x`} />, the rotation is 90° counterclockwise.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default RotationVisualizer;