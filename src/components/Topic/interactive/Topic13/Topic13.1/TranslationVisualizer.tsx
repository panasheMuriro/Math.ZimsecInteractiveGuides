import React, { useState } from 'react';
import { Move, X, Plus } from 'lucide-react';

interface Point {
  x: number;
  y: number;
}

const TranslationVisualizer: React.FC = () => {
  const [points,] = useState<Point[]>([
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 1 },
  ]);
  const [vector, setVector] = useState<Point>({ x: -3, y: 2 });
  const [showTranslated, setShowTranslated] = useState(false);

  const handleVectorChange = (e: React.ChangeEvent<HTMLInputElement>, axis: 'x' | 'y') => {
    const value = parseFloat(e.target.value) || 0;
    setVector((prev) => ({ ...prev, [axis]: value }));
  };

  const translatePoints = () => {
    setShowTranslated(true);
  };

  const reset = () => {
    setShowTranslated(false);
    setVector({ x: 3, y: 2 });
  };

  // const gridSize = 20;
  const gridCount = 10;
  const cellSize = 30;

  const translatedPoints = points.map((point) => ({
    x: point.x + vector.x,
    y: point.y + vector.y,
  }));

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Move className="mr-2" /> Basic Translation Visualizer
      </h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Translation Vector</h3>
        <div className="flex space-x-4">
          <div>
            <label className="block text-sm">X</label>
            <input
              type="number"
              value={vector.x}
              onChange={(e) => handleVectorChange(e, 'x')}
              className="w-20 p-1 border rounded"
              step="0.5"
            />
          </div>
          <div>
            <label className="block text-sm">Y</label>
            <input
              type="number"
              value={vector.y}
              onChange={(e) => handleVectorChange(e, 'y')}
              className="w-20 p-1 border rounded"
              step="0.5"
            />
          </div>
        </div>
        <p className="text-sm mt-2">
          Vector: <span className="font-mono">[{vector.x}, {vector.y}]</span>
        </p>
      </div>

      <div className="flex space-x-2 mb-4">
        <button
          onClick={translatePoints}
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
        >
          <Plus className="mr-2" /> Translate
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

          {/* Original Triangle */}
          <polygon
            points={points
              .map((p) => `${p.x * cellSize + gridCount * cellSize / 2},${gridCount * cellSize / 2 - p.y * cellSize}`)
              .join(' ')}
            fill="rgba(59, 130, 246, 0.5)"
            stroke="blue"
            strokeWidth="2"
          />

          {/* Translated Triangle */}
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
        <p>Original triangle vertices:</p>
        <ul className="list-disc pl-5">
          {points.map((p, i) => (
            <li key={i}>
              A{i + 1}({p.x}, {p.y})
            </li>
          ))}
        </ul>
        {showTranslated && (
          <>
            <p className="mt-2">Translated triangle vertices:</p>
            <ul className="list-disc pl-5">
              {translatedPoints.map((p, i) => (
                <li key={i}>
                  A{i + 1}'({p.x}, {p.y})
                </li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">How Translation Works:</p>
            <p>
              Each point is translated by adding the translation vector [{vector.x}, {vector.y}] to its coordinates:
            </p>
            <ul className="list-disc pl-5">
              {points.map((p, i) => (
                <li key={i}>
                  A{i + 1}({p.x}, {p.y}) → A{i + 1}'({p.x} + {vector.x}, {p.y} + {vector.y}) = A{i + 1}'({translatedPoints[i].x}, {translatedPoints[i].y})
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default TranslationVisualizer;