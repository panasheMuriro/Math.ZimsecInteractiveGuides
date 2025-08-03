// src/components/VectorTranslationVisualizer.tsx (or your preferred location)

import React, { useState } from 'react';
import { Move, X, Calculator } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface Point {
  x: number;
  y: number;
}

const VectorTranslationVisualizer: React.FC = () => {
  // Vertices of the original quadrilateral
  const points: Point[] = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
    { x: 2, y: 0 },
  ];

  // State for the correspondence points used to calculate the vector
  const [pointA, setPointA] = useState<Point>({ x: 1, y: 1 });
  const [pointAPrime, setPointAPrime] = useState<Point>({ x: -3, y: 4 }); // Default changed for demo

  // State flags for UI control
  const [showCalculatedVector, setShowCalculatedVector] = useState(false);
  const [showTranslated, setShowTranslated] = useState(false);

  // Handler for input changes of correspondence points
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

  // Function to calculate the vector and show the translation
  const calculateVector = () => {
    setShowCalculatedVector(true);
    setShowTranslated(true);
  };

  // Function to reset the visualizer to its initial state
  const reset = () => {
    setShowCalculatedVector(false);
    setShowTranslated(false);
    setPointA({ x: 1, y: 1 });
    setPointAPrime({ x: -3, y: 4 }); // Reset to default
  };

  // Grid and visualization settings
  const gridCount = 10; // Number of cells along one axis
  const cellSize = 30;  // Size of each grid cell in pixels

  // Calculate the translation vector based on the correspondence points
  const calculatedVector = {
    x: pointAPrime.x - pointA.x,
    y: pointAPrime.y - pointA.y,
  };

  // Calculate the vertices of the translated quadrilateral
  const translatedPoints = points.map((point) => ({
    x: point.x + calculatedVector.x,
    y: point.y + calculatedVector.y,
  }));

  return (
    // Main container with gradient background
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl text-white">

      {/* Title */}
      <h2 className="text-2xl font-bold mb-5 flex items-center">
        <Move className="mr-3" size={28} /> Vector-Based Translation
      </h2>

      {/* Vector Calculation Input Section */}
      <div className="mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
        <h3 className="text-lg font-semibold mb-3">Find Translation Vector</h3>
        <p className="text-sm mb-3 opacity-90">
          Enter a point and its image to calculate the translation vector:
        </p>
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm mb-1 opacity-90">Point A (x, y)</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={pointA.x}
                onChange={(e) => handleCorrespondencePointChange(e, 'x', false)}
                className="w-20 p-2 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-center"
                step="0.5"
              />
              <input
                type="number"
                value={pointA.y}
                onChange={(e) => handleCorrespondencePointChange(e, 'y', false)}
                className="w-20 p-2 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-center"
                step="0.5"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1 opacity-90">Point A' (x, y)</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={pointAPrime.x}
                onChange={(e) => handleCorrespondencePointChange(e, 'x', true)}
                className="w-20 p-2 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-center"
                step="0.5"
              />
              <input
                type="number"
                value={pointAPrime.y}
                onChange={(e) => handleCorrespondencePointChange(e, 'y', true)}
                className="w-20 p-2 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-center"
                step="0.5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons - Rounded Full */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={calculateVector}
          className="flex items-center px-5 py-2.5 font-semibold bg-white text-indigo-600 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200 active:scale-95"
        >
          <Calculator className="mr-2" size={18} /> Calculate & Show
        </button>
        <button
          onClick={reset}
          className="flex items-center px-5 py-2.5 font-semibold bg-white/20 hover:bg-white/30 text-white rounded-full shadow-md transition-all duration-200 active:scale-95"
        >
          <X className="mr-2" size={18} /> Reset
        </button>
      </div>

      {/* SVG Visualization Canvas - White background */}
      <div className="relative w-full h-80 bg-white rounded-xl border-2 border-white/50 overflow-hidden flex items-center justify-center">
        <svg
          width={gridCount * cellSize}
          height={gridCount * cellSize}
          className="absolute"
        >
          {/* Grid Lines - Adjusted for white background */}
          {[...Array(gridCount + 1)].map((_, i) => (
            <g key={i}>
              <line
                x1={i * cellSize}
                y1={0}
                x2={i * cellSize}
                y2={gridCount * cellSize}
                stroke="rgba(156, 163, 175, 0.5)" // Gray-400 with opacity
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

          {/* X-axis scale labels - Darker for visibility */}
          {[...Array(gridCount + 1)].map((_, i) => {
            const xCoord = i - gridCount / 2;
            return (
              <text
                key={`x-${i}`}
                x={i * cellSize}
                y={gridCount * cellSize / 2 + 15}
                fill="#374151" // Gray-700
                fontSize="10"
                textAnchor="middle"
                opacity="0.9"
              >
                {xCoord}
              </text>
            );
          })}

          {/* Y-axis scale labels - Darker for visibility */}
          {[...Array(gridCount + 1)].map((_, i) => {
            const yCoord = gridCount / 2 - i;
            if (yCoord !== 0) { // Skip origin label if it overlaps
              return (
                <text
                  key={`y-${i}`}
                  x={gridCount * cellSize / 2 + 10}
                  y={i * cellSize + 5}
                  fill="#374151" // Gray-700
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

          {/* Original Quadrilateral - Kept blue */}
          <polygon
            points={points
              .map((p) => `${p.x * cellSize + gridCount * cellSize / 2},${gridCount * cellSize / 2 - p.y * cellSize}`)
              .join(' ')}
            fill="rgba(59, 130, 246, 0.6)" // Blue with transparency
            stroke="#3b82f6" // Solid blue stroke
            strokeWidth="2"
          />

          {/* Translated Quadrilateral - Kept red, shown conditionally */}
          {showTranslated && (
            <polygon
              points={translatedPoints
                .map((p) => `${p.x * cellSize + gridCount * cellSize / 2},${gridCount * cellSize / 2 - p.y * cellSize}`)
                .join(' ')}
              fill="rgba(239, 68, 68, 0.6)" // Red with transparency
              stroke="#ef4444" // Solid red stroke
              strokeWidth="2"
            />
          )}

          {/* Original Points Labels - Darker blue for contrast */}
          {points.map((p, i) => (
            <text
              key={`orig-label-${i}`}
              x={p.x * cellSize + gridCount * cellSize / 2 + 6}
              y={gridCount * cellSize / 2 - p.y * cellSize - 6}
              fill="#1e40af" // Blue-800
              fontSize="11"
              fontWeight="500"
              pointerEvents="none"
            >
              A{i + 1}({p.x},{p.y})
            </text>
          ))}

          {/* Translated Points Labels - Darker red for contrast, shown conditionally */}
          {showTranslated &&
            translatedPoints.map((p, i) => (
              <text
                key={`trans-label-${i}`}
                x={p.x * cellSize + gridCount * cellSize / 2 + 6}
                y={gridCount * cellSize / 2 - p.y * cellSize - 6}
                fill="#b91c1c" // Red-700
                fontSize="11"
                fontWeight="500"
                pointerEvents="none"
              >
                A{i + 1}'({p.x},{p.y})
              </text>
            ))}
        </svg>
      </div>

      {/* Information Panel - Shows calculated vector and explanation */}
      <div className="mt-5 p-4 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 text-sm">
        <p className="font-semibold mb-2">Original Vertices:</p>
        <ul className="list-disc list-inside space-y-1">
          {points.map((p, i) => (
            <li key={`info-orig-${i}`} className="font-mono">
              <InlineMath math={`A_{${i + 1}}(${p.x}, ${p.y})`} />
            </li>
          ))}
        </ul>

        {showCalculatedVector && (
          <>
            <p className="font-semibold mt-3 mb-2">Translated Vertices:</p>
            <ul className="list-disc list-inside space-y-1">
              {translatedPoints.map((p, i) => (
                <li key={`info-trans-${i}`} className="font-mono">
                  <InlineMath math={`A_{${i + 1}}'(${p.x}, ${p.y})`} />
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-3 border-t border-white/20">
              <p className="font-semibold mb-2">Calculated Translation Vector:</p>
              <p>
                From <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> to{' '}
                <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />:
              </p>
              <div className="flex justify-center my-2">
                 <BlockMath
                  math={`\\begin{pmatrix} ${pointAPrime.x} - ${pointA.x} \\\\ ${pointAPrime.y} - ${pointA.y} \\end{pmatrix} = \\begin{pmatrix} ${calculatedVector.x} \\\\ ${calculatedVector.y} \\end{pmatrix}`}
                />
              </div>

              <p className="font-semibold mb-2 mt-3">How Translation Works:</p>
              <p className="mb-2">
                The vector <InlineMath math={`\\begin{pmatrix} ${calculatedVector.x} \\\\ ${calculatedVector.y} \\end{pmatrix}`} /> is added to each vertex:
              </p>
              <ul className="list-disc list-inside space-y-1">
                {points.map((p, i) => (
                  <li key={`process-${i}`} className="font-mono text-xs">
                    <InlineMath
                      math={`A_{${i + 1}}(${p.x}, ${p.y}) \\to A_{${i + 1}}'(${p.x} + ${calculatedVector.x}, ${p.y} + ${calculatedVector.y}) = A_{${i + 1}}'(${translatedPoints[i].x}, ${translatedPoints[i].y})`}
                    />
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs italic">
                Vector calculation: <InlineMath math={`(${pointAPrime.x} - ${pointA.x}, ${pointAPrime.y} - ${pointA.y}) = (${calculatedVector.x}, ${calculatedVector.y})`} />
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VectorTranslationVisualizer;