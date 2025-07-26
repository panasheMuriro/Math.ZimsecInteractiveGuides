import React, { useState } from 'react';
import { Move, X, Calculator } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface Point {
  x: number;
  y: number;
}

const VectorTranslationVisualizer: React.FC = () => {
  const points: Point[] = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
    { x: 2, y: 0 },
  ];
  const [pointA, setPointA] = useState<Point>({ x: 1, y: 1 });
  const [pointAPrime, setPointAPrime] = useState<Point>({ x: -3, y: 4 });
  const [showCalculatedVector, setShowCalculatedVector] = useState(false);
  const [showTranslated, setShowTranslated] = useState(false);

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

  const calculateVector = () => {
    setShowCalculatedVector(true);
    setShowTranslated(true);
  };

  const reset = () => {
    setShowCalculatedVector(false);
    setShowTranslated(false);
    setPointA({ x: 1, y: 1 });
    setPointAPrime({ x: 3, y: 4 });
  };

  const gridCount = 10;
  const cellSize = 30;

  const calculatedVector = {
    x: pointAPrime.x - pointA.x,
    y: pointAPrime.y - pointA.y,
  };

  const translatedPoints = points.map((point) => ({
    x: point.x + calculatedVector.x,
    y: point.y + calculatedVector.y,
  }));

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Move className="mr-2" /> Vector-Based Translation Visualizer
      </h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Find Translation Vector</h3>
        <p className="text-sm mb-2">
          Enter a point and its image to calculate the translation vector:
        </p>
        <div className="flex space-x-4">
          <div>
            <label className="block text-sm">Point A (x, y)</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={pointA.x}
                onChange={(e) => handleCorrespondencePointChange(e, 'x', false)}
                className="w-16 p-1 border rounded"
                step="0.5"
              />
              <input
                type="number"
                value={pointA.y}
                onChange={(e) => handleCorrespondencePointChange(e, 'y', false)}
                className="w-16 p-1 border rounded"
                step="0.5"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm">Point A' (x, y)</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={pointAPrime.x}
                onChange={(e) => handleCorrespondencePointChange(e, 'x', true)}
                className="w-16 p-1 border rounded"
                step="0.5"
              />
              <input
                type="number"
                value={pointAPrime.y}
                onChange={(e) => handleCorrespondencePointChange(e, 'y', true)}
                className="w-16 p-1 border rounded"
                step="0.5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-2 mb-4">
        <button
          onClick={calculateVector}
          className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
        >
          <Calculator className="mr-2" /> Calculate & Show Translation
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded flex items-center"
        >
          <X className="mr-2" /> Reset
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

          {/* Translated Quadrilateral */}
          {showTranslated && (
            <polygon
              points={translatedPoints
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
          {showTranslated &&
            translatedPoints.map((p, i) => (
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
        {showCalculatedVector && (
          <>
            <p className="mt-2">Translated quadrilateral vertices:</p>
            <ul className="list-disc pl-5">
              {translatedPoints.map((p, i) => (
                <li key={i}>
                  <InlineMath math={`A_{${i + 1}}'(${p.x}, ${p.y})`} />
                </li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">Calculated Translation Vector:</p>
            <p>
              From <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> to{' '}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />:
            </p>
            <BlockMath
              math={`\\begin{pmatrix} ${pointAPrime.x} - ${pointA.x} \\\\ ${pointAPrime.y} - ${pointA.y} \\end{pmatrix} = \\begin{pmatrix} ${calculatedVector.x} \\\\ ${calculatedVector.y} \\end{pmatrix}`}
            />
            <p className="mt-2 font-semibold">How Translation Works:</p>
            <p>
              The translation vector{' '}
              <InlineMath math={`\\begin{pmatrix} ${calculatedVector.x} \\\\ ${calculatedVector.y} \\end{pmatrix}`} />{' '}
              is applied to each vertex:
            </p>
            <ul className="list-disc pl-5">
              {points.map((p, i) => (
                <li key={i}>
                  <InlineMath
                    math={`A_{${i + 1}}(${p.x}, ${p.y}) \\to A_{${i + 1}}'(${p.x} + ${calculatedVector.x}, ${p.y} + ${calculatedVector.y}) = A_{${i + 1}}'(${translatedPoints[i].x}, ${translatedPoints[i].y})`}
                  />
                </li>
              ))}
            </ul>
            <p className="mt-2">Explanation:</p>
            <p>
              To find the translation vector, subtract the original point{' '}
              <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> coordinates from the image point{' '}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} /> coordinates:
            </p>
            <BlockMath
              math={`(${pointAPrime.x} - ${pointA.x}, ${pointAPrime.y} - ${pointA.y}) = (${calculatedVector.x}, ${calculatedVector.y})`}
            />
            <p>
              This vector is then added to each vertex of the original quadrilateral to get the translated coordinates.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default VectorTranslationVisualizer;