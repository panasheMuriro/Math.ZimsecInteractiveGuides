import React, { useState } from "react";
import { Move, X, Calculator, Eye, FileText } from "lucide-react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

interface Point {
  x: number;
  y: number;
}

const ShearVisualizer: React.FC = () => {
  const points: Point[] = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
    { x: 2, y: 0 },
  ];

  const [mode, setMode] = useState<
    "draw" | "compute" | "invariant" | "describe"
  >("draw");

  const [shearAxis, setShearAxis] = useState<"x-axis" | "y-axis">("x-axis");
  const [k, setK] = useState<number>(1);

  const [pointA, setPointA] = useState<Point>({ x: 2, y: 3 });
  const [pointAPrime, setPointAPrime] = useState<Point>({ x: 5, y: 3 });

  const [showResult, setShowResult] = useState(false);

  const handleKChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setK(value);

    if (showResult) setShowResult(false);
  };

  const handlePointChange = (
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

    if (showResult) setShowResult(false);
  };

  const applyAction = () => {
    setShowResult(true);
  };

  const reset = () => {
    setShowResult(false);
    setShearAxis("x-axis");
    setK(1);
    setPointA({ x: 2, y: 3 });
    setPointAPrime({ x: 5, y: 3 });
  };

  const gridCount = 10;
  const cellSize = 30;

  const getShearedPoints = () => {
    return points.map((p) => {
      if (shearAxis === "x-axis") {
        return { x: p.x + k * p.y, y: p.y };
      } else {
        return { x: p.x, y: p.y + k * p.x };
      }
    });
  };

  const shearedPoints = getShearedPoints();

  const getShearMatrix = () => {
    if (shearAxis === "x-axis") {
      return `\\begin{pmatrix} 1 & ${k} \\\\ 0 & 1 \\end{pmatrix}`;
    } else {
      return `\\begin{pmatrix} 1 & 0 \\\\ ${k} & 1 \\end{pmatrix}`;
    }
  };

  const describeShear = () => {
    if (pointA.y !== 0 && pointAPrime.y === pointA.y) {
      const possibleK = (pointAPrime.x - pointA.x) / pointA.y;
      return {
        axis: "x-axis",
        k: possibleK,
        invariant: "y-axis (x = 0)",
      };
    } else if (pointA.x !== 0 && pointAPrime.x === pointA.x) {
      const possibleK = (pointAPrime.y - pointA.y) / pointA.x;
      return {
        axis: "y-axis",
        k: possibleK,
        invariant: "x-axis (y = 0)",
      };
    }

    return { axis: "unknown", k: NaN, invariant: "unknown" };
  };

  const {
    axis: calculatedAxis,
    k: calculatedK,
    invariant: calculatedInvariant,
  } = describeShear();

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-teal-500 to-green-700 rounded-2xl shadow-xl text-white">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-5 flex items-center">
        <Move className="mr-3" size={28} /> Shear Visualizer
      </h2>

      {/* Tab Navigation - Styled like RotationVisualizer */}
      <div className="flex flex-wrap border-b border-white/30 mb-6">
        <button
          className={`py-2 px-3 text-sm font-semibold rounded-t-lg transition-colors ${
            mode === "draw"
              ? "bg-white/20 text-white"
              : "bg-transparent text-white/70 hover:text-white hover:bg-white/10"
          }`}
          onClick={() => setMode("draw")}
        >
          <Eye className="inline mr-1" size={16} /> Draw Shear
        </button>
        <button
          className={`py-2 px-3 text-sm font-semibold rounded-t-lg transition-colors ${
            mode === "compute"
              ? "bg-white/20 text-white"
              : "bg-transparent text-white/70 hover:text-white hover:bg-white/10"
          }`}
          onClick={() => setMode("compute")}
        >
          <Calculator className="inline mr-1" size={16} /> Compute Coordinates
        </button>
        <button
          className={`py-2 px-3 text-sm font-semibold rounded-t-lg transition-colors ${
            mode === "invariant"
              ? "bg-white/20 text-white"
              : "bg-transparent text-white/70 hover:text-white hover:bg-white/10"
          }`}
          onClick={() => setMode("invariant")}
        >
          Invariant Line
        </button>
        <button
          className={`py-2 px-3 text-sm font-semibold rounded-t-lg transition-colors ${
            mode === "describe"
              ? "bg-white/20 text-white"
              : "bg-transparent text-white/70 hover:text-white hover:bg-white/10"
          }`}
          onClick={() => setMode("describe")}
        >
          <FileText className="inline mr-1" size={16} /> Describe Shear
        </button>
      </div>

      {/* Mode Content */}
      <div className="mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
        {(mode === "draw" || mode === "compute" || mode === "invariant") && (
          <>
            <h3 className="text-lg font-semibold mb-3">
              {mode === "draw" && "Set Shear Parameters"}
              {mode === "compute" && "Set Parameters & Point"}
              {mode === "invariant" && "Find Invariant Line"}
            </h3>
            <div className="flex gap-4 mb-4">
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold rounded-lg transition-colors ${
                  shearAxis === "x-axis"
                    ? "bg-white text-teal-600"
                    : "bg-white/30 text-white hover:bg-white/40"
                }`}
                onClick={() => setShearAxis("x-axis")}
              >
                Parallel to X-axis
              </button>
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold rounded-lg transition-colors ${
                  shearAxis === "y-axis"
                    ? "bg-white text-teal-600"
                    : "bg-white/30 text-white hover:bg-white/40"
                }`}
                onClick={() => setShearAxis("y-axis")}
              >
                Parallel to Y-axis
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1 opacity-90">
                Shear Factor (k)
              </label>
              <input
                type="number"
                value={k}
                onChange={handleKChange}
                className="w-full p-2.5 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                step="0.5"
              />
            </div>

            {mode === "compute" && (
              <>
                <p className="text-sm my-3 opacity-90">
                  Enter a point to see its image under the current shear:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1 opacity-90">
                      Point A (x, y)
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="number"
                        value={pointA.x}
                        onChange={(e) => handlePointChange(e, "x", false)}
                        className="w-20 p-2 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-center"
                        step="0.5"
                      />
                      <input
                        type="number"
                        value={pointA.y}
                        onChange={(e) => handlePointChange(e, "y", false)}
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
                        readOnly
                        className="w-20 p-2 bg-gray-200 text-gray-500 rounded-lg border border-gray-300 text-center"
                        step="0.5"
                      />
                      <input
                        type="number"
                        value={pointAPrime.y}
                        readOnly
                        className="w-20 p-2 bg-gray-200 text-gray-500 rounded-lg border border-gray-300 text-center"
                        step="0.5"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className="mt-4 flex justify-center">
              <button
                onClick={applyAction}
                className={`flex items-center px-5 py-2.5 font-semibold rounded-full shadow-md hover:bg-gray-100 transition-all duration-200 active:scale-95 ${
                  mode === "draw"
                    ? "bg-white text-teal-600"
                    : mode === "compute"
                    ? "bg-white text-green-600"
                    : "bg-white text-purple-600"
                }`}
              >
                {mode === "draw" && <Eye className="mr-2" size={18} />}
                {mode === "compute" && (
                  <Calculator className="mr-2" size={18} />
                )}
                {mode === "invariant" && "Show Invariant Line"}
                {mode === "draw" && "Show Shear"}
                {mode === "compute" && "Compute"}
              </button>
            </div>
          </>
        )}

        {mode === "describe" && (
          <>
            <h3 className="text-lg font-semibold mb-3">
              Describe Shear Transformation
            </h3>
            <p className="text-sm mb-3 opacity-90">
              Enter a point and its image to determine the shear axis and
              factor:
            </p>
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <label className="block text-sm mb-1 opacity-90">
                  Point A (x, y)
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={pointA.x}
                    onChange={(e) => handlePointChange(e, "x", false)}
                    className="w-20 p-2 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-center"
                    step="0.5"
                  />
                  <input
                    type="number"
                    value={pointA.y}
                    onChange={(e) => handlePointChange(e, "y", false)}
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
                    onChange={(e) => handlePointChange(e, "x", true)}
                    className="w-20 p-2 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-center"
                    step="0.5"
                  />
                  <input
                    type="number"
                    value={pointAPrime.y}
                    onChange={(e) => handlePointChange(e, "y", true)}
                    className="w-20 p-2 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-center"
                    step="0.5"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={applyAction}
                className="flex items-center px-5 py-2.5 font-semibold bg-white text-green-600 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200 active:scale-95"
              >
                <Calculator className="mr-2" size={18} /> Describe
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

          {/* Invariant Line - Shown for 'draw', 'invariant', 'describe' modes when result is shown */}
          {showResult &&
            (mode === "draw" ||
              mode === "invariant" ||
              mode === "describe") && (
              <>
                {/* Invariant line for shear parallel to x-axis (y-axis line x=0) */}
                {shearAxis === "x-axis" && (
                  <line
                    x1={(gridCount * cellSize) / 2}
                    y1={0}
                    x2={(gridCount * cellSize) / 2}
                    y2={gridCount * cellSize}
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                )}
                {/* Invariant line for shear parallel to y-axis (x-axis line y=0) */}
                {shearAxis === "y-axis" && (
                  <line
                    x1={0}
                    y1={(gridCount * cellSize) / 2}
                    x2={gridCount * cellSize}
                    y2={(gridCount * cellSize) / 2}
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                )}
                {/* If 'describe' mode and a shear was calculated, show that invariant line too */}
                {mode === "describe" &&
                  calculatedAxis !== "unknown" &&
                  calculatedAxis === "x-axis" && (
                    <line
                      x1={(gridCount * cellSize) / 2}
                      y1={0}
                      x2={(gridCount * cellSize) / 2}
                      y2={gridCount * cellSize}
                      stroke="#8b5cf6"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                    />
                  )}
                {mode === "describe" &&
                  calculatedAxis !== "unknown" &&
                  calculatedAxis === "y-axis" && (
                    <line
                      x1={0}
                      y1={(gridCount * cellSize) / 2}
                      x2={gridCount * cellSize}
                      y2={(gridCount * cellSize) / 2}
                      stroke="#8b5cf6"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                    />
                  )}
              </>
            )}

          {/* Original Quadrilateral - Kept blue, shown for 'draw', 'invariant' modes */}
          {(mode === "draw" || mode === "invariant") && (
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
          )}

          {/* Sheared Quadrilateral - Kept red, shown conditionally for 'draw', 'invariant' modes */}
          {(mode === "draw" || mode === "invariant") && showResult && (
            <polygon
              points={shearedPoints
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
          )}

          {/* Points for Compute Mode */}
          {mode === "compute" && (
            <>
              {/* Original Point A */}
              <circle
                cx={pointA.x * cellSize + (gridCount * cellSize) / 2}
                cy={(gridCount * cellSize) / 2 - pointA.y * cellSize}
                r="4"
                fill="#3b82f6"
              />
              <text
                x={pointA.x * cellSize + (gridCount * cellSize) / 2 + 6}
                y={(gridCount * cellSize) / 2 - pointA.y * cellSize - 6}
                fill="#1e40af"
                fontSize="11"
                fontWeight="500"
                pointerEvents="none"
              >
                A({pointA.x},{pointA.y})
              </text>

              {/* Image Point A' - shown conditionally */}
              {showResult && (
                <>
                  {/* Calculate A' based on current shear parameters */}
                  <circle
                    cx={
                      (shearAxis === "x-axis"
                        ? pointA.x + k * pointA.y
                        : pointA.x) *
                        cellSize +
                      (gridCount * cellSize) / 2
                    }
                    cy={
                      (gridCount * cellSize) / 2 -
                      (shearAxis === "x-axis"
                        ? pointA.y
                        : pointA.y + k * pointA.x) *
                        cellSize
                    }
                    r="4"
                    fill="#ef4444"
                  />
                  <text
                    x={
                      (shearAxis === "x-axis"
                        ? pointA.x + k * pointA.y
                        : pointA.x) *
                        cellSize +
                      (gridCount * cellSize) / 2 +
                      6
                    }
                    y={
                      (gridCount * cellSize) / 2 -
                      (shearAxis === "x-axis"
                        ? pointA.y
                        : pointA.y + k * pointA.x) *
                        cellSize -
                      6
                    }
                    fill="#b91c1c"
                    fontSize="11"
                    fontWeight="500"
                    pointerEvents="none"
                  >
                    A'(
                    {shearAxis === "x-axis"
                      ? pointA.x + k * pointA.y
                      : pointA.x}
                    ,
                    {shearAxis === "x-axis"
                      ? pointA.y
                      : pointA.y + k * pointA.x}
                    )
                  </text>
                </>
              )}
            </>
          )}

          {/* Points for Describe Mode */}
          {mode === "describe" && (
            <>
              {/* Original Point A */}
              <circle
                cx={pointA.x * cellSize + (gridCount * cellSize) / 2}
                cy={(gridCount * cellSize) / 2 - pointA.y * cellSize}
                r="4"
                fill="#3b82f6"
              />
              <text
                x={pointA.x * cellSize + (gridCount * cellSize) / 2 + 6}
                y={(gridCount * cellSize) / 2 - pointA.y * cellSize - 6}
                fill="#1e40af"
                fontSize="11"
                fontWeight="500"
                pointerEvents="none"
              >
                A({pointA.x},{pointA.y})
              </text>

              {/* Image Point A' - shown conditionally */}
              {showResult && (
                <>
                  <circle
                    cx={pointAPrime.x * cellSize + (gridCount * cellSize) / 2}
                    cy={(gridCount * cellSize) / 2 - pointAPrime.y * cellSize}
                    r="4"
                    fill="#ef4444"
                  />
                  <text
                    x={
                      pointAPrime.x * cellSize + (gridCount * cellSize) / 2 + 6
                    }
                    y={
                      (gridCount * cellSize) / 2 - pointAPrime.y * cellSize - 6
                    }
                    fill="#b91c1c"
                    fontSize="11"
                    fontWeight="500"
                    pointerEvents="none"
                  >
                    A'({pointAPrime.x},{pointAPrime.y})
                  </text>
                </>
              )}
            </>
          )}
        </svg>
      </div>

      {/* Information Panel - Shows results based on mode */}
      <div className="mt-5 p-4 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 text-sm">
        <p className="font-semibold mb-2">Original Vertices:</p>
        <ul className="list-disc list-inside space-y-1">
          {points.map((p, i) => (
            <li key={`info-orig-${i}`} className="font-mono">
              <InlineMath math={`A_{${i + 1}}(${p.x}, ${p.y})`} />
            </li>
          ))}
        </ul>

        {/* Show sheared vertices info if 'draw' or 'invariant' mode action was performed */}
        {(mode === "draw" || mode === "invariant") && showResult && (
          <>
            <p className="font-semibold mt-3 mb-2">
              Sheared Vertices (
              {shearAxis === "x-axis"
                ? `Parallel to X-axis, k=${k}`
                : `Parallel to Y-axis, k=${k}`}
              ):
            </p>
            <ul className="list-disc list-inside space-y-1">
              {shearedPoints.map((p, i) => (
                <li key={`info-shear-${i}`} className="font-mono">
                  <InlineMath math={`A_{${i + 1}}'(${p.x}, ${p.y})`} />
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-3 border-t border-white/20">
              <p className="font-semibold mb-2">How Shear Works:</p>
              <p className="mb-2">
                Each point <InlineMath math="(x, y)" /> is transformed:
              </p>
              <ul className="list-disc list-inside space-y-1">
                {shearAxis === "x-axis" ? (
                  <li className="font-mono text-xs">
                    <InlineMath math={`(x, y) \to (x + ${k} \\cdot y, y)`} />
                  </li>
                ) : (
                  <li className="font-mono text-xs">
                    <InlineMath math={`(x, y) \to (x, y + ${k} \\cdot x)`} />
                  </li>
                )}
              </ul>
              <p className="mt-2 text-xs italic">
                {shearAxis === "x-axis"
                  ? "Points move horizontally. The y-coordinate (and the y-axis) is invariant."
                  : "Points move vertically. The x-coordinate (and the x-axis) is invariant."}
              </p>
            </div>
          </>
        )}

        {/* Show computed point info if 'compute' mode action was performed */}
        {mode === "compute" && showResult && (
          <div className="mt-3 pt-3 border-t border-white/20">
            <p className="font-semibold mb-2">
              Computed Image (
              {shearAxis === "x-axis"
                ? `Parallel to X-axis, k=${k}`
                : `Parallel to Y-axis, k=${k}`}
              ):
            </p>
            <p>
              Original point <InlineMath math={`A(${pointA.x}, ${pointA.y})`} />{" "}
              is transformed to:
            </p>
            <p className="my-2 text-center font-bold">
              <InlineMath
                math={`A'(${
                  shearAxis === "x-axis" ? pointA.x + k * pointA.y : pointA.x
                }, ${
                  shearAxis === "x-axis" ? pointA.y : pointA.y + k * pointA.x
                })`}
              />
            </p>
            <div className="flex justify-center my-2">
              <BlockMath
                math={`${getShearMatrix()} \\begin{pmatrix} ${pointA.x} \\\\ ${
                  pointA.y
                } \\end{pmatrix} = \\begin{pmatrix} ${
                  shearAxis === "x-axis" ? pointA.x + k * pointA.y : pointA.x
                } \\\\ ${
                  shearAxis === "x-axis" ? pointA.y : pointA.y + k * pointA.x
                } \\end{pmatrix}`}
              />
            </div>
          </div>
        )}

        {/* Show invariant line info if 'invariant' mode action was performed */}
        {mode === "invariant" && showResult && (
          <div className="mt-3 pt-3 border-t border-white/20">
            <p className="font-semibold mb-2">Invariant Line:</p>
            <p>
              For a shear transformation, the invariant line is the line
              parallel to the direction of the shear. Points on this line do not
              move.
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                Shear parallel to the <strong>X-axis</strong>: The invariant
                line is the <strong>Y-axis</strong> (<InlineMath math="x = 0" />
                ).
              </li>
              <li>
                Shear parallel to the <strong>Y-axis</strong>: The invariant
                line is the <strong>X-axis</strong> (<InlineMath math="y = 0" />
                ).
              </li>
            </ul>
          </div>
        )}

        {/* Show description info if 'describe' mode action was performed */}
        {mode === "describe" && showResult && (
          <div className="mt-3 pt-3 border-t border-white/20">
            <p className="font-semibold mb-2">
              Described Shear Transformation:
            </p>
            {calculatedAxis !== "unknown" ? (
              <>
                <p>
                  Based on points{" "}
                  <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> and{" "}
                  <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />
                  :
                </p>
                <ul className="list-disc list-inside space-y-1 my-2">
                  <li>
                    Axis of Shear:{" "}
                    <span className="font-bold">{calculatedAxis}</span>
                  </li>
                  <li>
                    Shear Factor:{" "}
                    <span className="font-bold">
                      <InlineMath math={`k = ${calculatedK}`} />
                    </span>
                  </li>
                  <li>
                    Invariant Line:{" "}
                    <span className="font-bold">{calculatedInvariant}</span>
                  </li>
                </ul>
                <p className="mt-2 text-xs italic">
                  This was determined because the invariant coordinate remained
                  unchanged, and the change in the other coordinate was
                  proportional to the invariant one.
                </p>
              </>
            ) : (
              <p>
                Could not determine a unique shear transformation from these
                points. They might not represent a simple shear, or more
                information is needed.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShearVisualizer;
