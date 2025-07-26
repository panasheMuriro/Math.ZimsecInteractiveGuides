import React, { useState } from 'react';
import { ZoomIn, X, Calculator } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface Point {
  x: number;
  y: number;
}

const EnlargementVisualizer: React.FC = () => {
  const points: Point[] = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
    { x: 2, y: 0 },
  ];
  const [activeTab, setActiveTab] = useState<'enlarge' | 'find'>('enlarge');
  const [scaleFactor, setScaleFactor] = useState<number>(2);
  const [center, setCenter] = useState<Point>({ x: 0, y: 0 });
  const [pointA, setPointA] = useState<Point>({ x: 2, y: 1 });
  const [pointAPrime, setPointAPrime] = useState<Point>({ x: 4, y: 2 });
  const [showEnlarged, setShowEnlarged] = useState(false);
  const [showCalculated, setShowCalculated] = useState(false);

  const handleScaleFactorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 1;
    setScaleFactor(value);
  };

  const handleCenterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    axis: 'x' | 'y'
  ) => {
    const value = parseFloat(e.target.value) || 0;
    setCenter((prev) => ({ ...prev, [axis]: value }));
  };

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

  const enlargePoints = () => {
    setShowEnlarged(true);
    setShowCalculated(false);
  };

  const calculateEnlargement = () => {
    setShowCalculated(true);
    setShowEnlarged(false);
  };

  const reset = () => {
    setShowEnlarged(false);
    setShowCalculated(false);
    setScaleFactor(2);
    setCenter({ x: 0, y: 0 });
    setPointA({ x: 2, y: 1 });
    setPointAPrime({ x: 4, y: 2 });
  };

  const gridCount = 10;
  const cellSize = 30;

  const getEnlargedPoints = () => {
    return points.map((p) => {
      // Translate to origin relative to center, scale, translate back
      const translatedX = p.x - center.x;
      const translatedY = p.y - center.y;
      const scaledX = translatedX * scaleFactor;
      const scaledY = translatedY * scaleFactor;
      return {
        x: scaledX + center.x,
        y: scaledY + center.y,
      };
    });
  };

  const enlargedPoints = getEnlargedPoints();

  const getEnlargementMatrix = () => {
    return `\\begin{pmatrix} ${scaleFactor} & 0 \\\\ 0 & ${scaleFactor} \\end{pmatrix}`;
  };

  const calculateScaleFactorAndCenter = () => {
    // For a point A(x,y) and A'(x',y') with center C(h,k), we have:
    // x' = h + k(x - h), y' = k + k(y - k)
    // If center is origin (h,k) = (0,0), then k = x'/x = y'/y
    const possibleKx = pointA.x !== 0 ? pointAPrime.x / pointA.x : NaN;
    const possibleKy = pointA.y !== 0 ? pointAPrime.y / pointA.y : NaN;
    if (!isNaN(possibleKx) && possibleKx === possibleKy) {
      return { scaleFactor: possibleKx, center: { x: 0, y: 0 } };
    }
    // For general center, need more points or assumptions
    return { scaleFactor: NaN, center: { x: NaN, y: NaN } };
  };

  const { scaleFactor: calculatedK, center: calculatedCenter } = calculateScaleFactorAndCenter();

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <ZoomIn className="mr-2" /> Enlargement Visualizer
      </h2>

      {/* Tabs */}
      <div className="flex border-b mb-4">
        <button
          className={`flex-1 py-2 px-4 text-sm font-semibold ${activeTab === 'enlarge' ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500' : 'text-gray-600 hover:bg-gray-100'}`}
          onClick={() => setActiveTab('enlarge')}
        >
          Enlarge Shape
        </button>
        <button
          className={`flex-1 py-2 px-4 text-sm font-semibold ${activeTab === 'find' ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500' : 'text-gray-600 hover:bg-gray-100'}`}
          onClick={() => setActiveTab('find')}
        >
          Find Scale Factor
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'enlarge' && (
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Set Enlargement Parameters</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Scale Factor (k)</label>
                <input
                  type="number"
                  value={scaleFactor}
                  onChange={handleScaleFactorChange}
                  className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  step="0.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Center (h, k)</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={center.x}
                    onChange={(e) => handleCenterChange(e, 'x')}
                    className="w-16 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    step="0.5"
                  />
                  <input
                    type="number"
                    value={center.y}
                    onChange={(e) => handleCenterChange(e, 'y')}
                    className="w-16 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    step="0.5"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={enlargePoints}
              className="bg-blue-500 text-white px-2 py-2 rounded flex items-center justify-center text-sm hover:bg-blue-600 transition"
            >
              <ZoomIn className="mr-1 w-4 h-4" /> Enlarge
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

      {activeTab === 'find' && (
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Find Scale Factor and Center</h3>
            <p className="text-sm mb-2">
              Enter a point and its image to find the scale factor and center:
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
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={calculateEnlargement}
              className="bg-green-500 text-white px-2 py-2 rounded flex items-center justify-center text-sm hover:bg-green-600 transition"
            >
              <Calculator className="mr-1 w-4 h-4" /> Find Enlargement
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

          {/* Original Quadrilateral */}
          <polygon
            points={points
              .map((p) => `${p.x * cellSize + gridCount * cellSize / 2},${gridCount * cellSize / 2 - p.y * cellSize}`)
              .join(' ')}
            fill="rgba(59, 130, 246, 0.5)"
            stroke="blue"
            strokeWidth="2"
          />

          {/* Enlarged Quadrilateral */}
          {(showEnlarged || showCalculated) && (
            <polygon
              points={enlargedPoints
                .map((p) => `${p.x * cellSize + gridCount * cellSize / 2},${gridCount * cellSize / 2 - p.y * cellSize}`)
                .join(' ')}
              fill="rgba(239, 68, 68, 0.5)"
              stroke="red"
              strokeWidth="2"
            />
          )}

          {/* Center of Enlargement */}
          {showEnlarged && (
            <circle
              cx={center.x * cellSize + gridCount * cellSize / 2}
              cy={gridCount * cellSize / 2 - center.y * cellSize}
              r="3"
              fill="green"
            />
          )}

          {/* Dashed Lines from Center to Points */}
          {showEnlarged &&
            points.map((p, i) => (
              <g key={`line-${i}`}>
                {/* Line from center to original point */}
                <line
                  x1={center.x * cellSize + gridCount * cellSize / 2}
                  y1={gridCount * cellSize / 2 - center.y * cellSize}
                  x2={p.x * cellSize + gridCount * cellSize / 2}
                  y2={gridCount * cellSize / 2 - p.y * cellSize}
                  stroke="blue"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                {/* Line from center to image point */}
                <line
                  x1={center.x * cellSize + gridCount * cellSize / 2}
                  y1={gridCount * cellSize / 2 - center.y * cellSize}
                  x2={enlargedPoints[i].x * cellSize + gridCount * cellSize / 2}
                  y2={gridCount * cellSize / 2 - enlargedPoints[i].y * cellSize}
                  stroke="red"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
              </g>
            ))}

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
          {(showEnlarged || showCalculated) &&
            enlargedPoints.map((p, i) => (
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

      {/* Explanation Section */}
      <div className="mt-4 text-sm">
        <p>Original quadrilateral vertices:</p>
        <ul className="list-disc pl-5">
          {points.map((p, i) => (
            <li key={i}>
              <InlineMath math={`A_{${i + 1}}(${p.x}, ${p.y})`} />
            </li>
          ))}
        </ul>
        {showEnlarged && (
          <>
            <p className="mt-2">Enlarged quadrilateral vertices:</p>
            <ul className="list-disc pl-5">
              {enlargedPoints.map((p, i) => (
                <li key={i}>
                  <InlineMath math={`A_{${i + 1}}'(${p.x}, ${p.y})`} />
                </li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">Enlargement Matrix (about origin):</p>
            <BlockMath math={getEnlargementMatrix()} />
            <p className="mt-2 font-semibold">How Enlargement Works:</p>
            <p>
              For center at <InlineMath math={`(${center.x}, ${center.y})`} /> and scale factor{' '}
              <InlineMath math={`k = ${scaleFactor}`} />:
            </p>
            <ul className="list-disc pl-5">
              {points.map((p, i) => (
                <li key={i}>
                  <InlineMath
                    math={`A_{${i + 1}}(${p.x}, ${p.y}) \\to A_{${i + 1}}'(${center.x} + ${scaleFactor}(${p.x} - ${center.x}), ${center.y} + ${scaleFactor}(${p.y} - ${center.y})) = A_{${i + 1}}'(${enlargedPoints[i].x}, ${enlargedPoints[i].y})`}
                  />
                </li>
              ))}
            </ul>
            <p className="mt-2">Explanation:</p>
            <p>
              Each point is translated to the origin relative to the center, scaled by <InlineMath math={`k`} />, and translated back. For origin as center, use the matrix above. Dashed lines show the scaling from the center to each point and its image.
            </p>
          </>
        )}
        {showCalculated && (
          <>
            <p className="mt-2">Enlarged quadrilateral vertices (assumed):</p>
            <ul className="list-disc pl-5">
              {enlargedPoints.map((p, i) => (
                <li key={i}>
                  <InlineMath math={`A_{${i + 1}}'(${p.x}, ${p.y})`} />
                </li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">Calculated Enlargement:</p>
            <p>
              From <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> to{' '}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />:
            </p>
            <p>
              Scale factor: <InlineMath math={`k = ${isNaN(calculatedK) ? 'undefined' : calculatedK}`} />
            </p>
            <p>
              Center: <InlineMath math={`(${isNaN(calculatedCenter.x) ? '?' : calculatedCenter.x}, ${isNaN(calculatedCenter.y) ? '?' : calculatedCenter.y})`} />
            </p>
            <p className="mt-2">Explanation:</p>
            <p>
              If the center is the origin, <InlineMath math={`k = x'/x = y'/y`} />. For a general center, additional points or assumptions are needed to determine the exact center.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default EnlargementVisualizer;