import React, { useState } from "react";
import { Move, X, Calculator } from "lucide-react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

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

  const [activeTab, setActiveTab] = useState<"reflect" | "find">("reflect");

  const [reflectionAxis, setReflectionAxis] = useState<string>("x-axis");

  const [pointA, setPointA] = useState<Point>({ x: 1, y: 2 });
  const [pointAPrime, setPointAPrime] = useState<Point>({ x: 1, y: -2 });

  const [showReflected, setShowReflected] = useState(false);
  const [showCalculatedAxis, setShowCalculatedAxis] = useState(false);

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
    setReflectionAxis("x-axis");
    setPointA({ x: 1, y: 2 });
    setPointAPrime({ x: 1, y: -2 });
  };

  const gridCount = 10;
  const cellSize = 30;

  const getReflectedPoints = () => {
    switch (reflectionAxis) {
      case "x-axis":
        return points.map((p) => ({ x: p.x, y: -p.y }));
      case "y-axis":
        return points.map((p) => ({ x: -p.x, y: p.y }));
      case "y=x":
        return points.map((p) => ({ x: p.y, y: p.x }));
      case "y=-x":
        return points.map((p) => ({ x: -p.y, y: -p.x }));
      default:
        return points;
    }
  };

  const reflectedPoints = getReflectedPoints();

  const getReflectionMatrix = () => {
    switch (reflectionAxis) {
      case "x-axis":
        return "\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}";
      case "y-axis":
        return "\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}";
      case "y=x":
        return "\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}";
      case "y=-x":
        return "\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}";
      default:
        return "";
    }
  };

  const findReflectionAxis = () => {
    if (pointA.x === pointAPrime.x && pointA.y === -pointAPrime.y)
      return "x-axis";
    if (pointA.x === -pointAPrime.x && pointA.y === pointAPrime.y)
      return "y-axis";
    if (pointA.x === pointAPrime.y && pointA.y === pointAPrime.x) return "y=x";
    if (pointA.x === -pointAPrime.y && pointA.y === -pointAPrime.x)
      return "y=-x";
    return "unknown";
  };

  const calculatedAxis = findReflectionAxis();

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-2xl shadow-xl text-white">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-5 flex items-center">
        <Move className="mr-3" size={28} /> Reflection Visualizer
      </h2>

      {/* Tab Navigation */}
      <div className="flex border-b border-white/30 mb-6">
        <button
          className={`py-2 px-4 font-semibold rounded-t-lg transition-colors ${
            activeTab === "reflect"
              ? "bg-white/20 text-white"
              : "bg-transparent text-white/70 hover:text-white hover:bg-white/10"
          }`}
          onClick={() => setActiveTab("reflect")}
        >
          Reflect Shape
        </button>
        <button
          className={`py-2 px-4 font-semibold rounded-t-lg transition-colors ${
            activeTab === "find"
              ? "bg-white/20 text-white"
              : "bg-transparent text-white/70 hover:text-white hover:bg-white/10"
          }`}
          onClick={() => setActiveTab("find")}
        >
          Find Axis
        </button>
      </div>

      {/* Tab Content */}
      <div className="mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
        {activeTab === "reflect" ? (
          <>
            <h3 className="text-lg font-semibold mb-3">
              Select Reflection Axis
            </h3>
            <select
              value={reflectionAxis}
              onChange={(e) => setReflectionAxis(e.target.value)}
              className="w-full p-2.5 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <option value="x-axis">X-axis</option>
              <option value="y-axis">Y-axis</option>
              <option value="y=x">Line y=x</option>
              <option value="y=-x">Line y=-x</option>
            </select>
            <div className="mt-4 flex justify-center">
              <button
                onClick={reflectPoints}
                className="flex items-center px-5 py-2.5 font-semibold bg-white text-violet-600 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200 active:scale-95"
              >
                <Move className="mr-2" size={18} /> Reflect
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold mb-3">Find Reflection Axis</h3>
            <p className="text-sm mb-3 opacity-90">
              Enter a point and its image to calculate the reflection axis:
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
                  Point A' (x, y)
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
                onClick={calculateAxis}
                className="flex items-center px-5 py-2.5 font-semibold bg-white text-green-600 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200 active:scale-95"
              >
                <Calculator className="mr-2" size={18} /> Find Axis
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

          {/* Reflection Lines (y=x and y=-x) - Adjusted for visibility */}
          {/* These lines are shown based on the selected axis in the 'reflect' tab OR the calculated axis in the 'find' tab */}
          {(reflectionAxis === "y=x" ||
            (showCalculatedAxis && calculatedAxis === "y=x")) && (
            <line
              x1={0}
              y1={gridCount * cellSize}
              x2={gridCount * cellSize}
              y2={0}
              stroke="#4b5563"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          )}
          {(reflectionAxis === "y=-x" ||
            (showCalculatedAxis && calculatedAxis === "y=-x")) && (
            <line
              x1={0}
              y1={0}
              x2={gridCount * cellSize}
              y2={gridCount * cellSize}
              stroke="#4b5563"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          )}

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

          {/* Reflected Quadrilateral - Kept red, shown conditionally */}
          {/* Show if 'reflect' action was performed OR if 'find axis' determined an axis and showCalculatedAxis is true */}
          {showReflected ||
          (showCalculatedAxis && calculatedAxis !== "unknown") ? (
            <polygon
              points={
                showReflected
                  ? reflectedPoints
                      .map(
                        (p) =>
                          `${p.x * cellSize + (gridCount * cellSize) / 2},${
                            (gridCount * cellSize) / 2 - p.y * cellSize
                          }`
                      )
                      .join(" ")
                  : points
                      .map((p) => {
                        let reflectedP = p;
                        if (calculatedAxis === "x-axis")
                          reflectedP = { x: p.x, y: -p.y };
                        else if (calculatedAxis === "y-axis")
                          reflectedP = { x: -p.x, y: p.y };
                        else if (calculatedAxis === "y=x")
                          reflectedP = { x: p.y, y: p.x };
                        else if (calculatedAxis === "y=-x")
                          reflectedP = { x: -p.y, y: -p.x };
                        return `${
                          reflectedP.x * cellSize + (gridCount * cellSize) / 2
                        },${
                          (gridCount * cellSize) / 2 - reflectedP.y * cellSize
                        }`;
                      })
                      .join(" ")
              }
              fill="rgba(239, 68, 68, 0.6)"
              stroke="#ef4444"
              strokeWidth="2"
            />
          ) : null}

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

          {/* Reflected Points Labels - Darker red for contrast, shown conditionally */}
          {/* Show if 'reflect' action was performed OR if 'find axis' determined an axis and showCalculatedAxis is true */}
          {(showReflected ||
            (showCalculatedAxis && calculatedAxis !== "unknown")) &&
            (showReflected
              ? reflectedPoints
              : points.map((p) => {
                  let reflectedP = p;
                  if (calculatedAxis === "x-axis")
                    reflectedP = { x: p.x, y: -p.y };
                  else if (calculatedAxis === "y-axis")
                    reflectedP = { x: -p.x, y: p.y };
                  else if (calculatedAxis === "y=x")
                    reflectedP = { x: p.y, y: p.x };
                  else if (calculatedAxis === "y=-x")
                    reflectedP = { x: -p.y, y: -p.x };
                  return reflectedP;
                })
            ).map((p, i) => (
              <text
                key={`refl-label-${i}`}
                x={p.x * cellSize + (gridCount * cellSize) / 2 + 6}
                y={(gridCount * cellSize) / 2 - p.y * cellSize - 6}
                fill="#b91c1c"
                fontSize="11"
                fontWeight="500"
                pointerEvents="none"
              >
                A{i + 1}'({p.x},{p.y})
              </text>
            ))}
        </svg>
      </div>

      {/* Information Panel - Shows reflection results or axis calculation */}
      <div className="mt-5 p-4 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 text-sm">
        <p className="font-semibold mb-2">Original Vertices:</p>
        <ul className="list-disc list-inside space-y-1">
          {points.map((p, i) => (
            <li key={`info-orig-${i}`} className="font-mono">
              <InlineMath math={`A_{${i + 1}}(${p.x}, ${p.y})`} />
            </li>
          ))}
        </ul>

        {/* Show reflected vertices and matrix info if 'reflect' tab action was performed */}
        {showReflected && (
          <>
            <p className="font-semibold mt-3 mb-2">
              Reflected Vertices (over {reflectionAxis}):
            </p>
            <ul className="list-disc list-inside space-y-1">
              {reflectedPoints.map((p, i) => (
                <li key={`info-refl-${i}`} className="font-mono">
                  <InlineMath math={`A_{${i + 1}}'(${p.x}, ${p.y})`} />
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-3 border-t border-white/20">
              <p className="font-semibold mb-2">Reflection Matrix:</p>
              <div className="flex justify-center my-2">
                <BlockMath math={getReflectionMatrix()} />
              </div>

              <p className="font-semibold mb-2 mt-3">How Reflection Works:</p>
              <p className="mb-2">
                Each point's coordinate vector is multiplied by the matrix for
                the {reflectionAxis}:
              </p>
              <ul className="list-disc list-inside space-y-1">
                {points.map((p, i) => (
                  <li key={`process-refl-${i}`} className="font-mono text-xs">
                    <BlockMath
                      math={`${getReflectionMatrix()} \\begin{pmatrix} ${
                        p.x
                      } \\\\ ${p.y} \\end{pmatrix} = \\begin{pmatrix} ${
                        reflectedPoints[i].x
                      } \\\\ ${reflectedPoints[i].y} \\end{pmatrix}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* Show calculated axis info if 'find axis' tab action was performed */}
        {showCalculatedAxis && (
          <div className="mt-3 pt-3 border-t border-white/20">
            <p className="font-semibold mb-2">Calculated Reflection Axis:</p>
            <p>
              From <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> to{" "}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />:
            </p>
            <p className="my-2 text-center font-bold text-lg">
              {calculatedAxis !== "unknown" ? (
                <InlineMath math={`\text{Axis: } ${calculatedAxis}`} />
              ) : (
                "Axis: Not a standard line (x-axis, y-axis, y=x, or y=-x)"
              )}
            </p>
            <p className="mt-2 font-semibold">Explanation:</p>
            <p>
              To find the reflection axis, we compare the coordinates of{" "}
              <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> and{" "}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li className="text-xs">
                If <InlineMath math="x = x' \text{ and } y = -y'" />, the axis
                is the x-axis.
              </li>
              <li className="text-xs">
                If <InlineMath math="x = -x' \text{ and } y = y'" />, the axis
                is the y-axis.
              </li>
              <li className="text-xs">
                If <InlineMath math="x = y' \text{ and } y = x'" />, the axis is
                the line y=x.
              </li>
              <li className="text-xs">
                If <InlineMath math="x = -y' \text{ and } y = -x'" />, the axis
                is the line y=-x.
              </li>
            </ul>
            <p className="mt-2 text-xs italic">
              In this case:{" "}
              <InlineMath
                math={`(${pointA.x}, ${pointA.y}) \to (${pointAPrime.x}, ${pointAPrime.y})`}
              />
            </p>

            {/* If an axis was calculated, also show the reflected shape based on that axis */}
            {calculatedAxis !== "unknown" && (
              <>
                <p className="font-semibold mt-3 mb-2">
                  Reflected Vertices (using calculated axis '{calculatedAxis}'):
                </p>
                <ul className="list-disc list-inside space-y-1">
                  {points.map((p, i) => {
                    let reflectedP = p;
                    if (calculatedAxis === "x-axis")
                      reflectedP = { x: p.x, y: -p.y };
                    else if (calculatedAxis === "y-axis")
                      reflectedP = { x: -p.x, y: p.y };
                    else if (calculatedAxis === "y=x")
                      reflectedP = { x: p.y, y: p.x };
                    else if (calculatedAxis === "y=-x")
                      reflectedP = { x: -p.y, y: -p.x };
                    return (
                      <li key={`info-refl-calc-${i}`} className="font-mono">
                        <InlineMath
                          math={`A_{${i + 1}}'(${reflectedP.x}, ${
                            reflectedP.y
                          })`}
                        />
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReflectionVisualizer;
