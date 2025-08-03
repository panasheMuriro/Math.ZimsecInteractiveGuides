import React, { useState } from 'react';
import { Move, X, Plus } from 'lucide-react';

interface Point {
  x: number;
  y: number;
}

const TranslationVisualizer: React.FC = () => {
  // Original points of the triangle
  const [points] = useState<Point[]>([
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 1 },
  ]);

  // State for the translation vector
  const [vector, setVector] = useState<Point>({ x: -3, y: 2 });

  // State to control visibility of the translated shape
  const [showTranslated, setShowTranslated] = useState(false);

  // Handler for vector input changes
  const handleVectorChange = (e: React.ChangeEvent<HTMLInputElement>, axis: 'x' | 'y') => {
    const value = parseFloat(e.target.value) || 0;
    setVector((prev) => ({ ...prev, [axis]: value }));
  };

  // Function to trigger the translation display
  const translatePoints = () => {
    setShowTranslated(true);
  };

  // Function to reset the visualizer
  const reset = () => {
    setShowTranslated(false);
    // Reset vector to a default if desired, e.g., { x: -3, y: 2 }
    // setVector({ x: -3, y: 2 });
  };

  // Grid and visualization settings
  const gridCount = 10; // Number of cells along one axis
  const cellSize = 30;  // Size of each grid cell in pixels

  // Calculate translated points
  const translatedPoints = points.map((point) => ({
    x: point.x + vector.x,
    y: point.y + vector.y,
  }));

  return (
    // Main container with gradient background
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl shadow-xl text-white">

      {/* Title */}
      <h2 className="text-2xl font-bold mb-5 flex items-center">
        <Move className="mr-3" size={28} /> Translation Visualizer
      </h2>

      {/* Vector Input Section */}
      <div className="mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
        <h3 className="text-lg font-semibold mb-3">Translation Vector</h3>
        <div className="flex space-x-6">
          <div>
            <label className="block text-sm mb-1 opacity-90">X Component</label>
            <input
              type="number"
              value={vector.x}
              onChange={(e) => handleVectorChange(e, 'x')}
              className="w-24 p-2 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              step="0.5"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 opacity-90">Y Component</label>
            <input
              type="number"
              value={vector.y}
              onChange={(e) => handleVectorChange(e, 'y')}
              className="w-24 p-2 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              step="0.5"
            />
          </div>
        </div>
        <p className="text-sm mt-3 font-medium">
          Vector: <span className="font-mono bg-black/20 px-2 py-1 rounded">[{vector.x}, {vector.y}]</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={translatePoints}
          disabled={showTranslated} // Optional: disable if already translated
          className={`flex items-center px-5 py-2.5 font-semibold rounded-full shadow-md transition-all duration-200 ${
            showTranslated
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-white text-teal-600 hover:bg-gray-100 active:scale-95'
          }`}
        >
          <Plus className="mr-2" size={18} /> Translate
        </button>
        <button
          onClick={reset}
          className="flex items-center px-5 py-2.5 font-semibold bg-white/20 hover:bg-white/30 text-white rounded-full shadow-md transition-all duration-200 active:scale-95"
        >
          <X className="mr-2" size={18} /> Reset
        </button>
      </div>

      {/* SVG Visualization Canvas - Background is now white */}
      <div className="relative w-full h-80 bg-white rounded-xl border-2 border-white/50 overflow-hidden flex items-center justify-center">
        <svg
          width={gridCount * cellSize}
          height={gridCount * cellSize}
          // viewBox={`0 0 ${gridCount * cellSize} ${gridCount * cellSize}`} // Optional for scaling
          className="absolute" // Removed complex transform, handled by parent flex
        >
          {/* Grid Lines - Changed to a darker gray for visibility on white */}
          {[...Array(gridCount + 1)].map((_, i) => (
            <g key={i}>
              <line
                x1={i * cellSize}
                y1={0}
                x2={i * cellSize}
                y2={gridCount * cellSize}
                stroke="rgba(156, 163, 175, 0.5)" // Tailwind gray-400 with 50% opacity
                strokeWidth="1"
              />
              <line
                x1={0}
                y1={i * cellSize}
                x2={gridCount * cellSize}
                y2={i * cellSize}
                stroke="rgba(156, 163, 175, 0.5)"
                strokeWidth="1"
              />
            </g>
          ))}

          {/* Axes - Kept black for strong contrast */}
          <line
            x1={gridCount * cellSize / 2}
            y1={0}
            x2={gridCount * cellSize / 2}
            y2={gridCount * cellSize}
            stroke="#000000"
            strokeWidth="2"
          />
          <line
            x1={0}
            y1={gridCount * cellSize / 2}
            x2={gridCount * cellSize}
            y2={gridCount * cellSize / 2}
            stroke="#000000"
            strokeWidth="2"
          />

          {/* X-axis scale labels - Changed to dark gray */}
          {[...Array(gridCount + 1)].map((_, i) => {
            const xCoord = i - gridCount / 2;
            return (
              <text
                key={`x-${i}`}
                x={i * cellSize}
                y={gridCount * cellSize / 2 + 15}
                fill="#374151" // Tailwind gray-700
                fontSize="10"
                textAnchor="middle"
                opacity="0.9"
              >
                {xCoord}
              </text>
            );
          })}

          {/* Y-axis scale labels - Changed to dark gray */}
          {[...Array(gridCount + 1)].map((_, i) => {
            const yCoord = gridCount / 2 - i;
            if (yCoord !== 0) { // Skip origin label if it overlaps
              return (
                <text
                  key={`y-${i}`}
                  x={gridCount * cellSize / 2 + 10}
                  y={i * cellSize + 5}
                  fill="#374151" // Tailwind gray-700
                  fontSize="10"
                  textAnchor="start"
                  opacity="0.9"
                >
                  {yCoord}
                </text>
              );
            }
            return null;
          })}

          {/* Original Triangle - Kept blue */}
          <polygon
            points={points
              .map((p) => `${p.x * cellSize + gridCount * cellSize / 2},${gridCount * cellSize / 2 - p.y * cellSize}`)
              .join(' ')}
            fill="rgba(59, 130, 246, 0.6)" // Blue with some transparency
            stroke="#3b82f6" // Solid blue stroke
            strokeWidth="2"
          />

          {/* Translated Triangle - Kept red */}
          {showTranslated && (
            <polygon
              points={translatedPoints
                .map((p) => `${p.x * cellSize + gridCount * cellSize / 2},${gridCount * cellSize / 2 - p.y * cellSize}`)
                .join(' ')}
              fill="rgba(239, 68, 68, 0.6)" // Red with some transparency
              stroke="#ef4444" // Solid red stroke
              strokeWidth="2"
            />
          )}

          {/* Original Points Labels - Kept dark blueish for contrast */}
          {points.map((p, i) => (
            <text
              key={`orig-label-${i}`}
              x={p.x * cellSize + gridCount * cellSize / 2 + 6}
              y={gridCount * cellSize / 2 - p.y * cellSize - 6}
              fill="#1e40af" // Tailwind blue-800
              fontSize="11"
              fontWeight="500"
              pointerEvents="none" // Prevent labels from interfering with interactions
            >
              A{i + 1}({p.x},{p.y})
            </text>
          ))}

          {/* Translated Points Labels - Kept dark redish for contrast */}
          {showTranslated &&
            translatedPoints.map((p, i) => (
              <text
                key={`trans-label-${i}`}
                x={p.x * cellSize + gridCount * cellSize / 2 + 6}
                y={gridCount * cellSize / 2 - p.y * cellSize - 6}
                fill="#b91c1c" // Tailwind red-700
                fontSize="11"
                fontWeight="500"
                pointerEvents="none"
              >
                A{i + 1}'({p.x},{p.y})
              </text>
            ))}
        </svg>
      </div>

      {/* Information Panel */}
      <div className="mt-5 p-4 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 text-sm">
        <p className="font-semibold mb-2">Original Vertices:</p>
        <ul className="list-disc list-inside space-y-1">
          {points.map((p, i) => (
            <li key={`info-orig-${i}`} className="font-mono">
              A{i + 1}: ({p.x}, {p.y})
            </li>
          ))}
        </ul>

        {showTranslated && (
          <>
            <p className="font-semibold mt-3 mb-2">Translated Vertices:</p>
            <ul className="list-disc list-inside space-y-1">
              {translatedPoints.map((p, i) => (
                <li key={`info-trans-${i}`} className="font-mono">
                  A{i + 1}': ({p.x}, {p.y})
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-3 border-t border-white/20">
              <p className="font-semibold mb-2">How Translation Works:</p>
              <p className="mb-2">
                Each point (x, y) is moved by adding the vector components:
              </p>
              <ul className="list-disc list-inside space-y-1">
                {points.map((p, i) => (
                  <li key={`process-${i}`} className="font-mono text-xs">
                    A{i + 1}({p.x}, {p.y}) → ({p.x} + {vector.x}, {p.y} + {vector.y}) = A{i + 1}'({translatedPoints[i].x}, {translatedPoints[i].y})
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TranslationVisualizer;