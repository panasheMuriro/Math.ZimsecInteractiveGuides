import React, { useState, useEffect } from "react";
import { RotateCcw, X, Calculator } from "lucide-react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

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

  const [activeTab, setActiveTab] = useState<"rotate" | "find">("rotate");

  const [rotationAngle, setRotationAngle] = useState<string>("90ccw");

  const [pointA, setPointA] = useState<Point>({ x: 2, y: 3 });
  const [pointAPrime, setPointAPrime] = useState<Point>({ x: -3, y: 2 });

  const [showRotated, setShowRotated] = useState(false);
  const [showCalculatedRotation, setShowCalculatedRotation] = useState(false);

  const [animationKey, setAnimationKey] = useState(0);

  const handleCorrespondencePointChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    axis: "x" | "y",
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

    setAnimationKey((prev) => prev + 1);
  };

  const calculateRotation = () => {
    setShowCalculatedRotation(true);

    setShowRotated(false);
  };

  const reset = () => {
    setShowRotated(false);
    setShowCalculatedRotation(false);
    setRotationAngle("90ccw");
    setPointA({ x: 2, y: 3 });
    setPointAPrime({ x: -3, y: 2 });
    setAnimationKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (showRotated) {
      setShowRotated(false);
      setTimeout(() => {
        setShowRotated(true);
        setAnimationKey((prev) => prev + 1);
      }, 0);
    }
  }, [rotationAngle, showRotated]);

  const gridCount = 10;
  const cellSize = 30;

  const getRotatedPoints = () => {
    switch (rotationAngle) {
      case "90ccw":
        return points.map((p) => ({ x: -p.y, y: p.x }));
      case "180":
        return points.map((p) => ({ x: -p.x, y: -p.y }));
      case "270ccw":
        return points.map((p) => ({ x: p.y, y: -p.x }));
      default:
        return points;
    }
  };

  const rotatedPoints = getRotatedPoints();

  const getRotationMatrix = () => {
    switch (rotationAngle) {
      case "90ccw":
        return "\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}";
      case "180":
        return "\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}";
      case "270ccw":
        return "\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}";
      default:
        return "";
    }
  };

  const getRotationDegrees = () => {
    switch (rotationAngle) {
      case "90ccw":
        return 90;
      case "180":
        return 180;
      case "270ccw":
        return 270;
      default:
        return 0;
    }
  };

  const findRotation = () => {
    if (pointA.x === -pointAPrime.y && pointA.y === pointAPrime.x)
      return "90° counterclockwise";

    if (pointA.x === -pointAPrime.x && pointA.y === -pointAPrime.y)
      return "180°";

    if (pointA.x === pointAPrime.y && pointA.y === -pointAPrime.x)
      return "270° counterclockwise";
    return "unknown";
  };

  const calculatedRotation = findRotation();

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl shadow-xl text-white">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-5 flex items-center">
        <RotateCcw className="mr-3" size={28} /> Rotation Visualizer
      </h2>

      {/* Tab Navigation */}
      <div className="flex border-b border-white/30 mb-6">
        <button
          className={`py-2 px-4 font-semibold rounded-t-lg transition-colors ${
            activeTab === "rotate"
              ? "bg-white/20 text-white"
              : "bg-transparent text-white/70 hover:text-white hover:bg-white/10"
          }`}
          onClick={() => setActiveTab("rotate")}
        >
          Rotate Shape
        </button>
        <button
          className={`py-2 px-4 font-semibold rounded-t-lg transition-colors ${
            activeTab === "find"
              ? "bg-white/20 text-white"
              : "bg-transparent text-white/70 hover:text-white hover:bg-white/10"
          }`}
          onClick={() => setActiveTab("find")}
        >
          Find Rotation
        </button>
      </div>

      {/* Tab Content */}
      <div className="mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
        {activeTab === "rotate" ? (
          <>
            <h3 className="text-lg font-semibold mb-3">
              Select Rotation Angle
            </h3>
            <select
              value={rotationAngle}
              onChange={(e) => setRotationAngle(e.target.value)}
              className="w-full p-2.5 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <option value="90ccw">90° Counterclockwise</option>
              <option value="180">180°</option>
              <option value="270ccw">270° Counterclockwise</option>
            </select>
            <div className="mt-4 flex justify-center">
              <button
                onClick={rotatePoints}
                className="flex items-center px-5 py-2.5 font-semibold bg-white text-cyan-600 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200 active:scale-95"
              >
                <RotateCcw className="mr-2" size={18} /> Rotate
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold mb-3">Find Rotation</h3>
            <p className="text-sm mb-3 opacity-90">
              Enter a point and its image to calculate the rotation angle and
              direction:
            </p>
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm mb-1 opacity-90">
                  Point A (x, y)
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={pointA.x}
                    onChange={(e) =>
                      handleCorrespondencePointChange(e, "x", false)
                    }
                    className="w-20 p-2 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-center"
                    step="0.5"
                  />
                  <input
                    type="number"
                    value={pointA.y}
                    onChange={(e) =>
                      handleCorrespondencePointChange(e, "y", false)
                    }
                    className="w-20 p-2 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-center"
                    step="0.5"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1 opacity-90">
                  Point A' (x', y')
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={pointAPrime.x}
                    onChange={(e) =>
                      handleCorrespondencePointChange(e, "x", true)
                    }
                    className="w-20 p-2 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-center"
                    step="0.5"
                  />
                  <input
                    type="number"
                    value={pointAPrime.y}
                    onChange={(e) =>
                      handleCorrespondencePointChange(e, "y", true)
                    }
                    className="w-20 p-2 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-center"
                    step="0.5"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={calculateRotation}
                className="flex items-center px-5 py-2.5 font-semibold bg-white text-green-600 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200 active:scale-95"
              >
                <Calculator className="mr-2" size={18} /> Find Rotation
              </button>
            </div>
          </>
        )}
      </div>

      {/* Action Buttons - Reset (Always visible) */}
      <div className="flex justify-center mb-6">
        <button
          onClick={reset}
          className="flex items-center px-5 py-2.5 font-semibold bg-white/20 hover:bg-white/30 text-white rounded-full shadow-md transition-all duration-200 active:scale-95"
        >
          <X className="mr-2" size={18} /> Reset
        </button>
      </div>

      {/* SVG Visualization Canvas - White background */}
      {/* Include animation styles */}
      <style>{`
        @keyframes rotateShape {
          from { transform: rotate(0deg); }
          to { transform: rotate(${getRotationDegrees()}deg); }
        }
        .rotate-animation {
          animation: rotateShape 1s ease-in-out forwards;
          transform-origin: ${(gridCount * cellSize) / 2}px ${
        (gridCount * cellSize) / 2
      }px;
        }
      `}</style>

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
                stroke="rgba(156, 163, 175, 0.5)"
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
            x1={(gridCount * cellSize) / 2}
            y1={0}
            x2={(gridCount * cellSize) / 2}
            y2={gridCount * cellSize}
            stroke="#000000"
            strokeWidth="2"
          />
          <line
            x1={0}
            y1={(gridCount * cellSize) / 2}
            x2={gridCount * cellSize}
            y2={(gridCount * cellSize) / 2}
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
                y={(gridCount * cellSize) / 2 + 15}
                fill="#374151"
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
            if (yCoord !== 0) {
              return (
                <text
                  key={`y-${i}`}
                  x={(gridCount * cellSize) / 2 + 10}
                  y={i * cellSize + 5}
                  fill="#374151"
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
              .map(
                (p) =>
                  `${p.x * cellSize + (gridCount * cellSize) / 2},${
                    (gridCount * cellSize) / 2 - p.y * cellSize
                  }`
              )
              .join(" ")}
            fill="rgba(59, 130, 246, 0.6)"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* Original Points Labels - Darker blue for contrast */}
          {points.map((p, i) => (
            <text
              key={`orig-label-${i}`}
              x={p.x * cellSize + (gridCount * cellSize) / 2 + 6}
              y={(gridCount * cellSize) / 2 - p.y * cellSize - 6}
              fill="#1e40af"
              fontSize="11"
              fontWeight="500"
              pointerEvents="none"
            >
              A{i + 1}({p.x},{p.y})
            </text>
          ))}

          {/* Rotated Quadrilateral and Labels - Shown conditionally with animation */}
          {showRotated && (
            <g key={`rotate-${animationKey}`} className="rotate-animation">
              {/* Rotated Polygon */}
              <polygon
                points={points
                  .map(
                    (p) =>
                      `${p.x * cellSize + (gridCount * cellSize) / 2},${
                        (gridCount * cellSize) / 2 - p.y * cellSize
                      }`
                  )
                  .join(" ")}
                fill="rgba(239, 68, 68, 0.6)"
                stroke="#ef4444"
                strokeWidth="2"
              />
              {/* Rotated Points Labels */}
              {points.map((_, i) => {
                const finalRotatedPoint = rotatedPoints[i];
                return (
                  <text
                    key={`rot-label-${i}`}
                    x={
                      finalRotatedPoint.x * cellSize +
                      (gridCount * cellSize) / 2 +
                      6
                    }
                    y={
                      (gridCount * cellSize) / 2 -
                      finalRotatedPoint.y * cellSize -
                      6
                    }
                    fill="#b91c1c"
                    fontSize="11"
                    fontWeight="500"
                    pointerEvents="none"
                  >
                    A{i + 1}'({finalRotatedPoint.x},{finalRotatedPoint.y})
                  </text>
                );
              })}
            </g>
          )}
        </svg>
      </div>

      {/* Information Panel - Shows rotation results or calculation */}
      <div className="mt-5 p-4 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 text-sm">
        <p className="font-semibold mb-2">Original Vertices:</p>
        <ul className="list-disc list-inside space-y-1">
          {points.map((p, i) => (
            <li key={`info-orig-${i}`} className="font-mono">
              <InlineMath math={`A_{${i + 1}}(${p.x}, ${p.y})`} />
            </li>
          ))}
        </ul>

        {/* Show rotated vertices and matrix info if 'rotate' tab action was performed */}
        {showRotated && (
          <>
            <p className="font-semibold mt-3 mb-2">
              Rotated Vertices (
              {rotationAngle === "90ccw"
                ? "90° CCW"
                : rotationAngle === "180"
                ? "180°"
                : "270° CCW"}
              ):
            </p>
            <ul className="list-disc list-inside space-y-1">
              {rotatedPoints.map((p, i) => (
                <li key={`info-rot-${i}`} className="font-mono">
                  <InlineMath math={`A_{${i + 1}}'(${p.x}, ${p.y})`} />
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-3 border-t border-white/20">
              <p className="font-semibold mb-2">Rotation Matrix:</p>
              <div className="flex justify-center my-2">
                <BlockMath math={getRotationMatrix()} />
              </div>

              <p className="font-semibold mb-2 mt-3">How Rotation Works:</p>
              <p className="mb-2">
                Each point's coordinate vector is multiplied by the matrix for a{" "}
                {rotationAngle === "90ccw"
                  ? "90° counterclockwise"
                  : rotationAngle === "180"
                  ? "180°"
                  : "270° counterclockwise"}{" "}
                rotation:
              </p>
              <ul className="list-disc list-inside space-y-1">
                {points.map((p, i) => (
                  <li key={`process-rot-${i}`} className="font-mono text-xs">
                    <BlockMath
                      math={`${getRotationMatrix()} \\begin{pmatrix} ${
                        p.x
                      } \\\\ ${p.y} \\end{pmatrix} = \\begin{pmatrix} ${
                        rotatedPoints[i].x
                      } \\\\ ${rotatedPoints[i].y} \\end{pmatrix}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* Show calculated rotation info if 'find rotation' tab action was performed */}
        {showCalculatedRotation && (
          <div className="mt-3 pt-3 border-t border-white/20">
            <p className="font-semibold mb-2">Calculated Rotation:</p>
            <p>
              From <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> to{" "}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />:
            </p>
            <p className="my-2 text-center font-bold text-lg">
              {calculatedRotation !== "unknown" ? (
                <InlineMath math={`\text{Rotation: } ${calculatedRotation}`} />
              ) : (
                "Rotation: Not a standard angle (90°, 180°, or 270° CCW)"
              )}
            </p>
            <p className="mt-2 font-semibold">Explanation:</p>
            <p>
              To find the rotation, we compare the coordinates of{" "}
              <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> and{" "}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li className="text-xs">
                If <InlineMath math="x' = -y \text{ and } y' = x" />, the
                rotation is 90° CCW.
              </li>
              <li className="text-xs">
                If <InlineMath math="x' = -x \text{ and } y' = -y" />, the
                rotation is 180°.
              </li>
              <li className="text-xs">
                If <InlineMath math="x' = y \text{ and } y' = -x" />, the
                rotation is 270° CCW.
              </li>
            </ul>
            <p className="mt-2 text-xs italic">
              In this case:{" "}
              <InlineMath
                math={`(${pointA.x}, ${pointA.y}) \to (${pointAPrime.x}, ${pointAPrime.y})`}
              />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RotationVisualizer;
