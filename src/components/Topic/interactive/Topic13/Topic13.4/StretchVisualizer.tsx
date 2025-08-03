import React, { useState, useEffect } from "react";
import { Move, X, Calculator, Eye, FileText } from "lucide-react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

interface Point {
  x: number;
  y: number;
}

const StretchVisualizer: React.FC = () => {
  const points: Point[] = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
    { x: 2, y: 0 },
  ];

  const [mode, setMode] = useState<
    "draw" | "compute" | "invariant" | "describe"
  >("draw");

  const [stretchType, setStretchType] = useState<"one-way" | "two-way">(
    "one-way"
  );
  const [k1, setK1] = useState<number>(2);
  const [k2, setK2] = useState<number>(1);

  const [pointA, setPointA] = useState<Point>({ x: 2, y: 3 });
  const [pointAPrime, setPointAPrime] = useState<Point>({ x: 4, y: 3 });

  const [showResult, setShowResult] = useState(false);

  const handleK1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 1;
    setK1(value);

    if (showResult) setShowResult(false);
  };

  const handleK2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 1;
    setK2(value);

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
    setStretchType("one-way");
    setK1(2);
    setK2(1);
    setPointA({ x: 2, y: 3 });
    setPointAPrime({ x: 4, y: 3 });
  };

  useEffect(() => {
    if (showResult) {
      const timer = setTimeout(() => setShowResult(false), 0);
      return () => clearTimeout(timer);
    }
  }, [k1, k2, stretchType, pointA, pointAPrime]);

  const gridCount = 10;
  const cellSize = 30;

  const getStretchedPoints = () => {
    return points.map((p) => ({
      x: p.x * k1,
      y: stretchType === "two-way" ? p.y * k2 : p.y,
    }));
  };

  const stretchedPoints = getStretchedPoints();

  const getStretchMatrix = () => {
    if (stretchType === "one-way") {
      return "\\begin{pmatrix} " + k1 + " & 0 \\\\ 0 & 1 \\end{pmatrix}";
    } else {
      return (
        "\\begin{pmatrix} " + k1 + " & 0 \\\\ 0 & " + k2 + " \\end{pmatrix}"
      );
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl shadow-xl text-white">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-5 flex items-center">
        <Move className="mr-3" size={28} /> Stretch Visualizer
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
          <Eye className="inline mr-1" size={16} /> Draw Stretch
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
          <FileText className="inline mr-1" size={16} /> Describe Stretch
        </button>
      </div>

      {/* Mode Content */}
      <div className="mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
        {mode === "draw" && (
          <>
            <h3 className="text-lg font-semibold mb-3">
              Set Stretch Parameters
            </h3>
            <div className="flex gap-4 mb-4">
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold rounded-lg transition-colors ${
                  stretchType === "one-way"
                    ? "bg-white text-sky-600"
                    : "bg-white/30 text-white hover:bg-white/40"
                }`}
                onClick={() => setStretchType("one-way")}
              >
                One-Way (X-axis)
              </button>
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold rounded-lg transition-colors ${
                  stretchType === "two-way"
                    ? "bg-white text-sky-600"
                    : "bg-white/30 text-white hover:bg-white/40"
                }`}
                onClick={() => setStretchType("two-way")}
              >
                Two-Way
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 opacity-90">
                  X-axis Factor (k₁)
                </label>
                <input
                  type="number"
                  value={k1}
                  onChange={handleK1Change}
                  className="w-full p-2.5 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  step="0.5"
                />
              </div>
              {stretchType === "two-way" && (
                <div>
                  <label className="block text-sm mb-1 opacity-90">
                    Y-axis Factor (k₂)
                  </label>
                  <input
                    type="number"
                    value={k2}
                    onChange={handleK2Change}
                    className="w-full p-2.5 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    step="0.5"
                  />
                </div>
              )}
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={applyAction}
                className="flex items-center px-5 py-2.5 font-semibold bg-white text-sky-600 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200 active:scale-95"
              >
                <Eye className="mr-2" size={18} /> Show Stretch
              </button>
            </div>
          </>
        )}

        {mode === "compute" && (
          <>
            <h3 className="text-lg font-semibold mb-3">
              Compute Image Coordinates
            </h3>
            <div className="flex gap-4 mb-4">
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold rounded-lg transition-colors ${
                  stretchType === "one-way"
                    ? "bg-white text-sky-600"
                    : "bg-white/30 text-white hover:bg-white/40"
                }`}
                onClick={() => setStretchType("one-way")}
              >
                One-Way (X-axis)
              </button>
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold rounded-lg transition-colors ${
                  stretchType === "two-way"
                    ? "bg-white text-sky-600"
                    : "bg-white/30 text-white hover:bg-white/40"
                }`}
                onClick={() => setStretchType("two-way")}
              >
                Two-Way
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-2">
              <div>
                <label className="block text-sm mb-1 opacity-90">
                  X-axis Factor (k₁)
                </label>
                <input
                  type="number"
                  value={k1}
                  onChange={handleK1Change}
                  className="w-full p-2.5 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  step="0.5"
                />
              </div>
              {stretchType === "two-way" && (
                <div>
                  <label className="block text-sm mb-1 opacity-90">
                    Y-axis Factor (k₂)
                  </label>
                  <input
                    type="number"
                    value={k2}
                    onChange={handleK2Change}
                    className="w-full p-2.5 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    step="0.5"
                  />
                </div>
              )}
            </div>
            <p className="text-sm my-3 opacity-90">
              Enter a point to see its image under the current stretch:
            </p>
            <div className="grid grid-cols-1 gap-4">
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
            <div className="mt-4 flex justify-center">
              <button
                onClick={applyAction}
                className="flex items-center px-5 py-2.5 font-semibold bg-white text-green-600 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200 active:scale-95"
              >
                <Calculator className="mr-2" size={18} /> Compute
              </button>
            </div>
          </>
        )}

        {mode === "invariant" && (
          <>
            <h3 className="text-lg font-semibold mb-3">Find Invariant Line</h3>
            <p className="text-sm mb-3 opacity-90">
              Set stretch parameters to see the invariant line(s). Points on
              these lines do not move.
            </p>
            <div className="flex gap-4 mb-4">
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold rounded-lg transition-colors ${
                  stretchType === "one-way"
                    ? "bg-white text-sky-600"
                    : "bg-white/30 text-white hover:bg-white/40"
                }`}
                onClick={() => setStretchType("one-way")}
              >
                One-Way (X-axis)
              </button>
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold rounded-lg transition-colors ${
                  stretchType === "two-way"
                    ? "bg-white text-sky-600"
                    : "bg-white/30 text-white hover:bg-white/40"
                }`}
                onClick={() => setStretchType("two-way")}
              >
                Two-Way
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 opacity-90">
                  X-axis Factor (k₁)
                </label>
                <input
                  type="number"
                  value={k1}
                  onChange={handleK1Change}
                  className="w-full p-2.5 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  step="0.5"
                />
              </div>
              {stretchType === "two-way" && (
                <div>
                  <label className="block text-sm mb-1 opacity-90">
                    Y-axis Factor (k₂)
                  </label>
                  <input
                    type="number"
                    value={k2}
                    onChange={handleK2Change}
                    className="w-full p-2.5 bg-white/90 text-gray-800 rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    step="0.5"
                  />
                </div>
              )}
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={applyAction}
                className="flex items-center px-5 py-2.5 font-semibold bg-white text-purple-600 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200 active:scale-95"
              >
                Show Invariant Line
              </button>
            </div>
          </>
        )}

        {mode === "describe" && (
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Describe Stretch Transformation
            </h3>
            <p className="mb-2">
              A stretch transformation scales points along one or two axes
              relative to an invariant line.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                <span className="font-semibold">One-Way Stretch:</span>{" "}
                Stretches points parallel to one axis (e.g., X-axis) while
                leaving points on the perpendicular axis (Y-axis) unchanged. The
                invariant line is the axis perpendicular to the stretch
                direction.
              </li>
              <li>
                <span className="font-semibold">Two-Way Stretch:</span>{" "}
                Stretches points along both the X-axis and Y-axis independently.
                The only invariant point is usually the origin, unless{" "}
                <InlineMath math="k_1=1" /> or <InlineMath math="k_2=1" />.
              </li>
              <li>
                <span className="font-semibold">Invariant Line/Point:</span> A
                line (or point) that remains unchanged by the transformation.
                For a one-way stretch along the X-axis, the invariant line is
                the Y-axis (<InlineMath math="x=0" />
                ).
              </li>
              <li>
                <span className="font-semibold">Matrix Representation:</span>{" "}
                The transformation can be represented by a matrix.
                <div className="flex justify-center my-2">
                  <BlockMath math={getStretchMatrix()} />
                </div>
                For a point <InlineMath math="(x, y)" />, the new coordinates{" "}
                <InlineMath math="(x', y')" /> are found by:
                <div className="flex justify-center my-2">
                  <BlockMath
                    math={`${getStretchMatrix()} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} x' \\\\ y' \\end{pmatrix}`}
                  />
                </div>
              </li>
            </ul>
          </div>
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

          {/* Invariant Line(s) - Shown for 'draw', 'invariant' modes when result is shown */}
          {showResult && (mode === "draw" || mode === "invariant") && (
            <>
              {/* Invariant line for X-axis stretch (Y-axis line x=0) if k1=1 or one-way */}
              {(stretchType === "one-way" || k1 === 1) && (
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
              {/* Invariant line for Y-axis stretch (X-axis line y=0) if two-way and k2=1 */}
              {stretchType === "two-way" && k2 === 1 && (
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

          {/* Stretched Quadrilateral - Kept red, shown conditionally for 'draw', 'invariant' modes */}
          {(mode === "draw" || mode === "invariant") && showResult && (
            <polygon
              points={stretchedPoints
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
                  {/* Calculate A' based on current stretch parameters */}
                  <circle
                    cx={pointA.x * k1 * cellSize + (gridCount * cellSize) / 2}
                    cy={
                      (gridCount * cellSize) / 2 -
                      (stretchType === "one-way" ? pointA.y : pointA.y * k2) *
                        cellSize
                    }
                    r="4"
                    fill="#ef4444"
                  />
                  <text
                    x={
                      pointA.x * k1 * cellSize + (gridCount * cellSize) / 2 + 6
                    }
                    y={
                      (gridCount * cellSize) / 2 -
                      (stretchType === "one-way" ? pointA.y : pointA.y * k2) *
                        cellSize -
                      6
                    }
                    fill="#b91c1c"
                    fontSize="11"
                    fontWeight="500"
                    pointerEvents="none"
                  >
                    A'({pointA.x * k1},
                    {stretchType === "one-way" ? pointA.y : pointA.y * k2})
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

        {/* Show stretched vertices info if 'draw' or 'invariant' mode action was performed */}
        {(mode === "draw" || mode === "invariant") && showResult && (
          <>
            <p className="font-semibold mt-3 mb-2">
              Stretched Vertices (
              {stretchType === "one-way"
                ? `One-Way, k₁=${k1}`
                : `Two-Way, k₁=${k1}, k₂=${k2}`}
              ):
            </p>
            <ul className="list-disc list-inside space-y-1">
              {stretchedPoints.map((p, i) => (
                <li key={`info-str-${i}`} className="font-mono">
                  <InlineMath math={`A_{${i + 1}}'(${p.x}, ${p.y})`} />
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-3 border-t border-white/20">
              <p className="font-semibold mb-2">How Stretch Works:</p>
              <p className="mb-2">
                Each point <InlineMath math="(x, y)" /> is transformed:
              </p>
              <ul className="list-disc list-inside space-y-1">
                {stretchType === "one-way" ? (
                  <li className="font-mono text-xs">
                    <InlineMath math={`(x, y) \to (${k1} \\cdot x, y)`} />
                  </li>
                ) : (
                  points.map((p, i) => (
                    <li key={`process-str-${i}`} className="font-mono text-xs">
                      <InlineMath
                        math={`A_{${i + 1}}(${p.x}, ${p.y}) \to A_{${
                          i + 1
                        }}'(${k1} \\cdot ${p.x}, ${k2} \\cdot ${p.y}) = A_{${
                          i + 1
                        }}'(${p.x * k1}, ${p.y * k2})`}
                      />
                    </li>
                  ))
                )}
              </ul>
              <p className="mt-2 text-xs italic">
                {stretchType === "one-way"
                  ? "Only the x-coordinate is scaled. The y-coordinate (and the y-axis) is invariant."
                  : "Both coordinates are scaled independently."}
              </p>
            </div>
          </>
        )}

        {/* Show computed point info if 'compute' mode action was performed */}
        {mode === "compute" && showResult && (
          <div className="mt-3 pt-3 border-t border-white/20">
            <p className="font-semibold mb-2">
              Computed Image (
              {stretchType === "one-way"
                ? `One-Way, k₁=${k1}`
                : `Two-Way, k₁=${k1}, k₂=${k2}`}
              ):
            </p>
            <p>
              Original point <InlineMath math={`A(${pointA.x}, ${pointA.y})`} />{" "}
              is transformed to:
            </p>
            <p className="my-2 text-center font-bold">
              <InlineMath
                math={`A'(${pointA.x * k1}, ${
                  stretchType === "one-way" ? pointA.y : pointA.y * k2
                })`}
              />
            </p>
            <div className="flex justify-center my-2">
              <BlockMath
                math={`${getStretchMatrix()} \\begin{pmatrix} ${
                  pointA.x
                } \\\\ ${pointA.y} \\end{pmatrix} = \\begin{pmatrix} ${
                  pointA.x * k1
                } \\\\ ${
                  stretchType === "one-way" ? pointA.y : pointA.y * k2
                } \\end{pmatrix}`}
              />
            </div>
          </div>
        )}

        {/* Show invariant line info if 'invariant' mode action was performed */}
        {mode === "invariant" && showResult && (
          <div className="mt-3 pt-3 border-t border-white/20">
            <p className="font-semibold mb-2">Invariant Line(s):</p>
            <ul className="list-disc list-inside space-y-1">
              {stretchType === "one-way" && (
                <li>
                  For a one-way stretch along the X-axis (parallel to the
                  Y-axis), the invariant line is the Y-axis itself (
                  <InlineMath math="x = 0" />
                  ). Points on this line do not move.
                </li>
              )}
              {stretchType === "two-way" && k1 === 1 && k2 !== 1 && (
                <li>
                  Since <InlineMath math="k_1 = 1" />, the Y-axis (
                  <InlineMath math="x = 0" />) is invariant.
                </li>
              )}
              {stretchType === "two-way" && k2 === 1 && k1 !== 1 && (
                <li>
                  Since <InlineMath math="k_2 = 1" />, the X-axis (
                  <InlineMath math="y = 0" />) is invariant.
                </li>
              )}
              {stretchType === "two-way" && k1 === 1 && k2 === 1 && (
                <li>
                  Since both <InlineMath math="k_1 = 1" /> and{" "}
                  <InlineMath math="k_2 = 1" />, every point is invariant. This
                  is the identity transformation.
                </li>
              )}
              {stretchType === "two-way" && k1 !== 1 && k2 !== 1 && (
                <li>
                  For a general two-way stretch where both{" "}
                  <InlineMath math="k_1 \neq 1" /> and{" "}
                  <InlineMath math="k_2 \neq 1" />, the only invariant point is
                  the origin (0, 0).
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StretchVisualizer;
