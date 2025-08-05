/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Move, X, Calculator } from "lucide-react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

interface Point {
  x: number;
  y: number;
}

// --- Neubrutalism Styles & Colors with the new palette ---
const PALETTE = {
  darkBlueGreen: '#264653',
  mediumTeal: '#2a9d8f',
  vibrantYellow: '#e9c46a',
  warmOrange: '#f4a261',
  redOrange: '#e76f51',
  offWhite: '#fbf8f1',
};

const neubrutalismBase = {
  border: `3px solid ${PALETTE.darkBlueGreen}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${PALETTE.darkBlueGreen}`,
  padding: '1rem',
};

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
    <div
      className="w-full max-w-md mx-auto p-6 rounded-2xl"
      style={{
        backgroundColor: PALETTE.warmOrange,
        ...neubrutalismBase,
        boxShadow: `8px 8px 0px ${PALETTE.darkBlueGreen}`,
      }}
    >
      {/* Title */}
      <h2 className="text-2xl font-bold mb-5 flex items-center" style={{ color: PALETTE.darkBlueGreen }}>
        <Move className="mr-3" size={28} style={{ color: PALETTE.darkBlueGreen }} /> Reflection Visualizer
      </h2>

      {/* Tab Navigation */}
      <div className="flex mb-6" style={{ borderBottom: `3px solid ${PALETTE.darkBlueGreen}` }}>
        <button
          className={`py-2 px-4 font-semibold rounded-t-lg transition-colors`}
          style={{
            ...neubrutalismBase,
            boxShadow: 'none',
            borderBottom: 'none',
            backgroundColor: activeTab === "reflect" ? PALETTE.offWhite : 'transparent',
            color: PALETTE.darkBlueGreen,
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0',
            borderRight: 'none',
            ...(activeTab === "reflect" ? {} : { border: 'none', boxShadow: 'none' })
          }}
          onClick={() => setActiveTab("reflect")}
        >
          Reflect Shape
        </button>
        <button
          className={`py-2 px-4 font-semibold rounded-t-lg transition-colors`}
          style={{
            ...neubrutalismBase,
            boxShadow: 'none',
            borderBottom: 'none',
            backgroundColor: activeTab === "find" ? PALETTE.offWhite : 'transparent',
            color: PALETTE.darkBlueGreen,
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0',
            ...(activeTab === "find" ? {} : { border: 'none', boxShadow: 'none' })
          }}
          onClick={() => setActiveTab("find")}
        >
          Find Axis
        </button>
      </div>

      {/* Tab Content */}
      <div
        className="mb-6 rounded-xl"
        style={{
          ...neubrutalismBase,
          backgroundColor: PALETTE.offWhite,
          borderColor: PALETTE.darkBlueGreen,
        }}
      >
        {activeTab === "reflect" ? (
          <>
            <h3 className="text-lg font-semibold mb-3" style={{ color: PALETTE.darkBlueGreen }}>
              Select Reflection Axis
            </h3>
            <select
              value={reflectionAxis}
              onChange={(e) => setReflectionAxis(e.target.value)}
              className="w-full p-2.5 rounded-lg border-2 focus:outline-none focus:ring-2"
              style={{
                backgroundColor: PALETTE.offWhite,
                color: PALETTE.darkBlueGreen,
                borderColor: PALETTE.darkBlueGreen,
                boxShadow: `2px 2px 0px ${PALETTE.vibrantYellow}`,
              }}
            >
              <option value="x-axis">X-axis</option>
              <option value="y-axis">Y-axis</option>
              <option value="y=x">Line y=x</option>
              <option value="y=-x">Line y=-x</option>
            </select>
            <div className="mt-4 flex justify-center">
              <button
                onClick={reflectPoints}
                className="flex items-center px-5 py-2.5 font-semibold rounded-full transition-all duration-200 active:scale-95"
                style={{
                  backgroundColor: PALETTE.vibrantYellow,
                  color: PALETTE.darkBlueGreen,
                  ...neubrutalismBase
                }}
              >
                <Move className="mr-2" size={18} /> Reflect
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold mb-3" style={{ color: PALETTE.darkBlueGreen }}>Find Reflection Axis</h3>
            <p className="text-sm mb-3 opacity-90" style={{ color: PALETTE.darkBlueGreen }}>
              Enter a point and its image to calculate the reflection axis:
            </p>
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm mb-1 opacity-90" style={{ color: PALETTE.darkBlueGreen }}>
                  Point A (x, y)
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={pointA.x}
                    onChange={(e) =>
                      handleCorrespondencePointChange(e, "x", false)
                    }
                    className="w-20 p-2 rounded-lg border-2 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: PALETTE.offWhite,
                      color: PALETTE.darkBlueGreen,
                      borderColor: PALETTE.darkBlueGreen,
                      boxShadow: `2px 2px 0px ${PALETTE.vibrantYellow}`,
                      WebkitAppearance: 'none',
                    }}
                    step="0.5"
                  />
                  <input
                    type="number"
                    value={pointA.y}
                    onChange={(e) =>
                      handleCorrespondencePointChange(e, "y", false)
                    }
                    className="w-20 p-2 rounded-lg border-2 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: PALETTE.offWhite,
                      color: PALETTE.darkBlueGreen,
                      borderColor: PALETTE.darkBlueGreen,
                      boxShadow: `2px 2px 0px ${PALETTE.vibrantYellow}`,
                      WebkitAppearance: 'none',
                    }}
                    step="0.5"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1 opacity-90" style={{ color: PALETTE.darkBlueGreen }}>
                  Point A' (x, y)
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={pointAPrime.x}
                    onChange={(e) =>
                      handleCorrespondencePointChange(e, "x", true)
                    }
                    className="w-20 p-2 rounded-lg border-2 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: PALETTE.offWhite,
                      color: PALETTE.darkBlueGreen,
                      borderColor: PALETTE.darkBlueGreen,
                      boxShadow: `2px 2px 0px ${PALETTE.vibrantYellow}`,
                      WebkitAppearance: 'none',
                    }}
                    step="0.5"
                  />
                  <input
                    type="number"
                    value={pointAPrime.y}
                    onChange={(e) =>
                      handleCorrespondencePointChange(e, "y", true)
                    }
                    className="w-20 p-2 rounded-lg border-2 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: PALETTE.offWhite,
                      color: PALETTE.darkBlueGreen,
                      borderColor: PALETTE.darkBlueGreen,
                      boxShadow: `2px 2px 0px ${PALETTE.vibrantYellow}`,
                      WebkitAppearance: 'none',
                    }}
                    step="0.5"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={calculateAxis}
                className="flex items-center px-5 py-2.5 font-semibold rounded-full transition-all duration-200 active:scale-95"
                style={{
                  backgroundColor: PALETTE.vibrantYellow,
                  color: PALETTE.darkBlueGreen,
                  ...neubrutalismBase
                }}
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
          className="flex items-center px-5 py-2.5 font-semibold rounded-full transition-all duration-200 active:scale-95"
          style={{
            backgroundColor: PALETTE.redOrange,
            color: PALETTE.darkBlueGreen,
            ...neubrutalismBase
          }}
        >
          <X className="mr-2" size={18} /> Reset
        </button>
      </div>

      {/* SVG Visualization Canvas */}
      <div
        className="relative w-full h-80 rounded-xl overflow-hidden flex items-center justify-center"
        style={{
          backgroundColor: PALETTE.offWhite,
          ...neubrutalismBase,
          padding: '1rem',
        }}
      >
        <svg
          width={gridCount * cellSize}
          height={gridCount * cellSize}
          className="absolute"
        >
          {/* Grid Lines */}
          {[...Array(gridCount + 1)].map((_, i) => (
            <g key={i}>
              <line
                x1={i * cellSize}
                y1={0}
                x2={i * cellSize}
                y2={gridCount * cellSize}
                stroke={PALETTE.mediumTeal}
                strokeWidth="1"
                strokeOpacity="0.4"
              />
              <line
                x1={0}
                y1={i * cellSize}
                x2={gridCount * cellSize}
                y2={i * cellSize}
                stroke={PALETTE.mediumTeal}
                strokeWidth="1"
                strokeOpacity="0.4"
              />
            </g>
          ))}

          {/* Axes */}
          <line
            x1={(gridCount * cellSize) / 2}
            y1={0}
            x2={(gridCount * cellSize) / 2}
            y2={gridCount * cellSize}
            stroke={PALETTE.darkBlueGreen}
            strokeWidth="2"
          />
          <line
            x1={0}
            y1={(gridCount * cellSize) / 2}
            x2={gridCount * cellSize}
            y2={(gridCount * cellSize) / 2}
            stroke={PALETTE.darkBlueGreen}
            strokeWidth="2"
          />

          {/* Reflection Lines (y=x and y=-x) */}
          {(reflectionAxis === "y=x" ||
            (showCalculatedAxis && calculatedAxis === "y=x")) && (
            <line
              x1={0}
              y1={gridCount * cellSize}
              x2={gridCount * cellSize}
              y2={0}
              stroke={PALETTE.darkBlueGreen}
              strokeWidth="2"
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
              stroke={PALETTE.darkBlueGreen}
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          )}

          {/* X-axis scale labels */}
          {[...Array(gridCount + 1)].map((_, i) => {
            const xCoord = i - gridCount / 2;
            return (
              <text
                key={`x-${i}`}
                x={i * cellSize}
                y={(gridCount * cellSize) / 2 + 15}
                fill={PALETTE.darkBlueGreen}
                fontSize="10"
                textAnchor="middle"
                opacity="0.9"
              >
                {xCoord}
              </text>
            );
          })}

          {/* Y-axis scale labels */}
          {[...Array(gridCount + 1)].map((_, i) => {
            const yCoord = gridCount / 2 - i;
            if (yCoord !== 0) {
              return (
                <text
                  key={`y-${i}`}
                  x={(gridCount * cellSize) / 2 + 10}
                  y={i * cellSize + 5}
                  fill={PALETTE.darkBlueGreen}
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

          {/* Original Quadrilateral */}
          <polygon
            points={points
              .map(
                (p) =>
                  `${p.x * cellSize + (gridCount * cellSize) / 2},${
                    (gridCount * cellSize) / 2 - p.y * cellSize
                  }`
              )
              .join(" ")}
            fill={PALETTE.mediumTeal}
            fillOpacity="0.6"
            stroke={PALETTE.mediumTeal}
            strokeWidth="2"
          />

          {/* Reflected Quadrilateral */}
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
              fill={PALETTE.redOrange}
              fillOpacity="0.6"
              stroke={PALETTE.redOrange}
              strokeWidth="2"
            />
          ) : null}

          {/* Original Points Labels */}
          {points.map((p, i) => (
            <text
              key={`orig-label-${i}`}
              x={p.x * cellSize + (gridCount * cellSize) / 2 + 6}
              y={(gridCount * cellSize) / 2 - p.y * cellSize - 6}
              fill={PALETTE.darkBlueGreen}
              fontSize="11"
              fontWeight="500"
              pointerEvents="none"
            >
              A{i + 1}({p.x},{p.y})
            </text>
          ))}

          {/* Reflected Points Labels */}
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
                fill={PALETTE.redOrange}
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
      <div
        className="mt-5 rounded-xl text-sm"
        style={{
          ...neubrutalismBase,
          backgroundColor: PALETTE.offWhite,
          borderColor: PALETTE.darkBlueGreen,
        }}
      >
        <p className="font-semibold mb-2" style={{ color: PALETTE.darkBlueGreen }}>Original Vertices:</p>
        <ul className="list-disc list-inside space-y-1" style={{ color: PALETTE.darkBlueGreen }}>
          {points.map((p, i) => (
            <li key={`info-orig-${i}`} className="font-mono">
              <InlineMath math={`A_{${i + 1}}(${p.x}, ${p.y})`} />
            </li>
          ))}
        </ul>

        {showReflected && (
          <>
            <p className="font-semibold mt-3 mb-2" style={{ color: PALETTE.darkBlueGreen }}>
              Reflected Vertices (over {reflectionAxis}):
            </p>
            <ul className="list-disc list-inside space-y-1" style={{ color: PALETTE.darkBlueGreen }}>
              {reflectedPoints.map((p, i) => (
                <li key={`info-refl-${i}`} className="font-mono">
                  <InlineMath math={`A_{${i + 1}}'(${p.x}, ${p.y})`} />
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-3 border-t-2" style={{ borderColor: PALETTE.mediumTeal }}>
              <p className="font-semibold mb-2" style={{ color: PALETTE.darkBlueGreen }}>Reflection Matrix:</p>
              <div className="flex justify-center my-2" style={{ color: PALETTE.darkBlueGreen }}>
                <BlockMath math={getReflectionMatrix()} />
              </div>

              <p className="font-semibold mb-2 mt-3" style={{ color: PALETTE.darkBlueGreen }}>How Reflection Works:</p>
              <p className="mb-2" style={{ color: PALETTE.darkBlueGreen }}>
                Each point's coordinate vector is multiplied by the matrix for
                the {reflectionAxis}:
              </p>
              <ul className="list-disc list-inside space-y-1" style={{ color: PALETTE.darkBlueGreen }}>
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

        {showCalculatedAxis && (
          <div className="mt-3 pt-3 border-t-2" style={{ borderColor: PALETTE.mediumTeal }}>
            <p className="font-semibold mb-2" style={{ color: PALETTE.darkBlueGreen }}>Calculated Reflection Axis:</p>
            <p style={{ color: PALETTE.darkBlueGreen }}>
              From <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> to{" "}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />:
            </p>
            <p className="my-2 text-center font-bold text-lg" style={{ color: PALETTE.darkBlueGreen }}>
              {calculatedAxis !== "unknown" ? (
                <InlineMath math={`\text{Axis: } ${calculatedAxis}`} />
              ) : (
                "Axis: Not a standard line (x-axis, y-axis, y=x, or y=-x)"
              )}
            </p>
            <p className="mt-2 font-semibold" style={{ color: PALETTE.darkBlueGreen }}>Explanation:</p>
            <p style={{ color: PALETTE.darkBlueGreen }}>
              To find the reflection axis, we compare the coordinates of{" "}
              <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> and{" "}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-1" style={{ color: PALETTE.darkBlueGreen }}>
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
            <p className="mt-2 text-xs italic" style={{ color: PALETTE.darkBlueGreen }}>
              In this case:{" "}
              <InlineMath
                math={`(${pointA.x}, ${pointA.y}) \\to (${pointAPrime.x}, ${pointAPrime.y})`}
              />
            </p>

            {calculatedAxis !== "unknown" && (
              <>
                <p className="font-semibold mt-3 mb-2" style={{ color: PALETTE.darkBlueGreen }}>
                  Reflected Vertices (using calculated axis '{calculatedAxis}'):
                </p>
                <ul className="list-disc list-inside space-y-1" style={{ color: PALETTE.darkBlueGreen }}>
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
