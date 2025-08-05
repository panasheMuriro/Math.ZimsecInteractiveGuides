import React, { useState, useEffect } from "react";
import { Move, X, Calculator, Eye, FileText } from "lucide-react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

// A neubrutalism-inspired color palette for high contrast
const NEUBRUTAL_PALETTE = {
  background: "#f9f7f3", // Soft off-white
  black: "#1a1a1a",      // A very dark grey
  shadowBlack: "#1a1a1a9D", // Dark grey with 9D opacity
  primaryAccent: "#0fa3b1", // Original dark teal
  secondaryAccent: "#f7a072", // Original peach for stretched shape
  tertiaryAccent: "#eddea4", // Original light yellow for controls
};

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
      return `\\begin{pmatrix} ${k1} & 0 \\\\ 0 & 1 \\end{pmatrix}`;
    } else {
      return (
        `\\begin{pmatrix} ${k1} & 0 \\\\ 0 & ${k2} \\end{pmatrix}`
      );
    }
  };

  // Common styling for neubrutalistic elements
  const neubrutalButton = (isActive: boolean = false) => `
    flex-1 py-2 px-4 text-sm font-semibold rounded-xl
    border-2 border-${NEUBRUTAL_PALETTE.black}
    active:translate-y-0 active:shadow-none
    transition-all duration-100
    ${isActive ? `shadow-[4px_4px_0px_0px_${NEUBRUTAL_PALETTE.shadowBlack}]` : `shadow-[2px_2px_0px_0px_${NEUBRUTAL_PALETTE.shadowBlack}]`}
  `;

  return (
    <div
      className="w-full max-w-md mx-auto p-6 rounded-2xl border-4"
      style={{
        backgroundColor: NEUBRUTAL_PALETTE.tertiaryAccent,
        borderColor: NEUBRUTAL_PALETTE.black,
        boxShadow: `8px 8px 0px 0px ${NEUBRUTAL_PALETTE.black}`,
        color: NEUBRUTAL_PALETTE.black,
      }}
    >
      {/* Title */}
      <h2 className="text-2xl font-bold mb-5 flex items-center">
        <Move className="mr-3" size={28} /> Stretch Visualizer
      </h2>

      {/* Tab Navigation */}
      <div className="flex flex-wrap mb-6">
        <button
          className={neubrutalButton(mode === "draw")}
          style={{
            backgroundColor: mode === "draw" ? NEUBRUTAL_PALETTE.primaryAccent : NEUBRUTAL_PALETTE.background,
            color: mode === "draw" ? NEUBRUTAL_PALETTE.background : NEUBRUTAL_PALETTE.black,
          }}
          onClick={() => setMode("draw")}
        >
          <Eye className="inline mr-1" size={16} /> Draw Stretch
        </button>
        <button
          className={neubrutalButton(mode === "compute")}
          style={{
            backgroundColor: mode === "compute" ? NEUBRUTAL_PALETTE.primaryAccent : NEUBRUTAL_PALETTE.background,
            color: mode === "compute" ? NEUBRUTAL_PALETTE.background : NEUBRUTAL_PALETTE.black,
          }}
          onClick={() => setMode("compute")}
        >
          <Calculator className="inline mr-1" size={16} /> Compute Coordinates
        </button>
        <button
          className={neubrutalButton(mode === "invariant")}
          style={{
            backgroundColor: mode === "invariant" ? NEUBRUTAL_PALETTE.primaryAccent : NEUBRUTAL_PALETTE.background,
            color: mode === "invariant" ? NEUBRUTAL_PALETTE.background : NEUBRUTAL_PALETTE.black,
          }}
          onClick={() => setMode("invariant")}
        >
          Invariant Line
        </button>
        <button
          className={neubrutalButton(mode === "describe")}
          style={{
            backgroundColor: mode === "describe" ? NEUBRUTAL_PALETTE.primaryAccent : NEUBRUTAL_PALETTE.background,
            color: mode === "describe" ? NEUBRUTAL_PALETTE.background : NEUBRUTAL_PALETTE.black,
          }}
          onClick={() => setMode("describe")}
        >
          <FileText className="inline mr-1" size={16} /> Describe
        </button>
      </div>

      {/* Mode Content */}
      <div
        className="mb-6 p-4 rounded-xl border-2"
        style={{
          backgroundColor: NEUBRUTAL_PALETTE.background,
          borderColor: NEUBRUTAL_PALETTE.black,
          boxShadow: `4px 4px 0px 0px ${NEUBRUTAL_PALETTE.shadowBlack}`,
        }}
      >
        {mode === "draw" && (
          <>
            <h3 className="text-lg font-bold mb-3">Set Stretch Parameters</h3>
            <div className="flex gap-4 mb-4">
              <button
                className={neubrutalButton(stretchType === "one-way")}
                style={{
                  backgroundColor: stretchType === "one-way" ? NEUBRUTAL_PALETTE.secondaryAccent : NEUBRUTAL_PALETTE.tertiaryAccent,
                }}
                onClick={() => setStretchType("one-way")}
              >
                One-Way (X-axis)
              </button>
              <button
                className={neubrutalButton(stretchType === "two-way")}
                style={{
                  backgroundColor: stretchType === "two-way" ? NEUBRUTAL_PALETTE.secondaryAccent : NEUBRUTAL_PALETTE.tertiaryAccent,
                }}
                onClick={() => setStretchType("two-way")}
              >
                Two-Way
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  X-axis Factor (k₁)
                </label>
                <input
                  type="number"
                  value={k1}
                  onChange={handleK1Change}
                  className="w-full p-2.5 rounded-lg border-2 font-bold"
                  style={{
                    backgroundColor: NEUBRUTAL_PALETTE.background,
                    borderColor: NEUBRUTAL_PALETTE.black,
                    boxShadow: `2px 2px 0px 0px ${NEUBRUTAL_PALETTE.shadowBlack}`,
                  }}
                  step="0.5"
                />
              </div>
              {stretchType === "two-way" && (
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Y-axis Factor (k₂)
                  </label>
                  <input
                    type="number"
                    value={k2}
                    onChange={handleK2Change}
                    className="w-full p-2.5 rounded-lg border-2 font-bold"
                    style={{
                      backgroundColor: NEUBRUTAL_PALETTE.background,
                      borderColor: NEUBRUTAL_PALETTE.black,
                      boxShadow: `2px 2px 0px 0px ${NEUBRUTAL_PALETTE.shadowBlack}`,
                    }}
                    step="0.5"
                  />
                </div>
              )}
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={applyAction}
                className="flex items-center px-5 py-2.5 font-bold rounded-full border-2 border-black
                         shadow-[4px_4px_0px_0px_#1a1a1a9D] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1a1a1a9D]
                         active:translate-y-0 active:shadow-[2px_2px_0px_0px_#1a1a1a9D] transition-all duration-100"
                style={{
                  backgroundColor: NEUBRUTAL_PALETTE.secondaryAccent,
                }}
              >
                <Eye className="mr-2" size={18} /> Show Stretch
              </button>
            </div>
          </>
        )}

        {mode === "compute" && (
          <>
            <h3 className="text-lg font-bold mb-3">
              Compute Image Coordinates
            </h3>
            <div className="flex gap-4 mb-4">
              <button
                className={neubrutalButton(stretchType === "one-way")}
                style={{
                  backgroundColor: stretchType === "one-way" ? NEUBRUTAL_PALETTE.secondaryAccent : NEUBRUTAL_PALETTE.tertiaryAccent,
                }}
                onClick={() => setStretchType("one-way")}
              >
                One-Way (X-axis)
              </button>
              <button
                className={neubrutalButton(stretchType === "two-way")}
                style={{
                  backgroundColor: stretchType === "two-way" ? NEUBRUTAL_PALETTE.secondaryAccent : NEUBRUTAL_PALETTE.tertiaryAccent,
                }}
                onClick={() => setStretchType("two-way")}
              >
                Two-Way
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-2">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  X-axis Factor (k₁)
                </label>
                <input
                  type="number"
                  value={k1}
                  onChange={handleK1Change}
                  className="w-full p-2.5 rounded-lg border-2 font-bold"
                  style={{
                    backgroundColor: NEUBRUTAL_PALETTE.background,
                    borderColor: NEUBRUTAL_PALETTE.black,
                    boxShadow: `2px 2px 0px 0px ${NEUBRUTAL_PALETTE.shadowBlack}`,
                  }}
                  step="0.5"
                />
              </div>
              {stretchType === "two-way" && (
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Y-axis Factor (k₂)
                  </label>
                  <input
                    type="number"
                    value={k2}
                    onChange={handleK2Change}
                    className="w-full p-2.5 rounded-lg border-2 font-bold"
                    style={{
                      backgroundColor: NEUBRUTAL_PALETTE.background,
                      borderColor: NEUBRUTAL_PALETTE.black,
                      boxShadow: `2px 2px 0px 0px ${NEUBRUTAL_PALETTE.shadowBlack}`,
                    }}
                    step="0.5"
                  />
                </div>
              )}
            </div>
            <p className="text-sm font-semibold my-3">
              Enter a point to see its image:
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Point A (x, y)
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={pointA.x}
                    onChange={(e) => handlePointChange(e, "x", false)}
                    className="w-20 p-2 rounded-lg border-2 font-bold text-center"
                    style={{
                      backgroundColor: NEUBRUTAL_PALETTE.background,
                      borderColor: NEUBRUTAL_PALETTE.black,
                      boxShadow: `2px 2px 0px 0px ${NEUBRUTAL_PALETTE.shadowBlack}`,
                    }}
                    step="0.5"
                  />
                  <input
                    type="number"
                    value={pointA.y}
                    onChange={(e) => handlePointChange(e, "y", false)}
                    className="w-20 p-2 rounded-lg border-2 font-bold text-center"
                    style={{
                      backgroundColor: NEUBRUTAL_PALETTE.background,
                      borderColor: NEUBRUTAL_PALETTE.black,
                      boxShadow: `2px 2px 0px 0px ${NEUBRUTAL_PALETTE.shadowBlack}`,
                    }}
                    step="0.5"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Point A' (x', y')
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={pointAPrime.x}
                    readOnly
                    className="w-20 p-2 rounded-lg border-2 font-bold text-center"
                    style={{
                      backgroundColor: NEUBRUTAL_PALETTE.tertiaryAccent,
                      borderColor: NEUBRUTAL_PALETTE.black,
                      boxShadow: `2px 2px 0px 0px ${NEUBRUTAL_PALETTE.shadowBlack}`,
                    }}
                    step="0.5"
                  />
                  <input
                    type="number"
                    value={pointAPrime.y}
                    readOnly
                    className="w-20 p-2 rounded-lg border-2 font-bold text-center"
                    style={{
                      backgroundColor: NEUBRUTAL_PALETTE.tertiaryAccent,
                      borderColor: NEUBRUTAL_PALETTE.black,
                      boxShadow: `2px 2px 0px 0px ${NEUBRUTAL_PALETTE.shadowBlack}`,
                    }}
                    step="0.5"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={applyAction}
                className="flex items-center px-5 py-2.5 font-bold rounded-full border-2 border-black
                         shadow-[4px_4px_0px_0px_#1a1a1a9D] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1a1a1a9D]
                         active:translate-y-0 active:shadow-[2px_2px_0px_0px_#1a1a1a9D] transition-all duration-100"
                style={{
                  backgroundColor: NEUBRUTAL_PALETTE.secondaryAccent,
                }}
              >
                <Calculator className="mr-2" size={18} /> Compute
              </button>
            </div>
          </>
        )}

        {mode === "invariant" && (
          <>
            <h3 className="text-lg font-bold mb-3">Find Invariant Line</h3>
            <p className="text-sm font-semibold mb-3">
              Set stretch parameters to see the invariant line(s).
            </p>
            <div className="flex gap-4 mb-4">
              <button
                className={neubrutalButton(stretchType === "one-way")}
                style={{
                  backgroundColor: stretchType === "one-way" ? NEUBRUTAL_PALETTE.secondaryAccent : NEUBRUTAL_PALETTE.tertiaryAccent,
                }}
                onClick={() => setStretchType("one-way")}
              >
                One-Way (X-axis)
              </button>
              <button
                className={neubrutalButton(stretchType === "two-way")}
                style={{
                  backgroundColor: stretchType === "two-way" ? NEUBRUTAL_PALETTE.secondaryAccent : NEUBRUTAL_PALETTE.tertiaryAccent,
                }}
                onClick={() => setStretchType("two-way")}
              >
                Two-Way
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  X-axis Factor (k₁)
                </label>
                <input
                  type="number"
                  value={k1}
                  onChange={handleK1Change}
                  className="w-full p-2.5 rounded-lg border-2 font-bold"
                  style={{
                    backgroundColor: NEUBRUTAL_PALETTE.background,
                    borderColor: NEUBRUTAL_PALETTE.black,
                    boxShadow: `2px 2px 0px 0px ${NEUBRUTAL_PALETTE.shadowBlack}`,
                  }}
                  step="0.5"
                />
              </div>
              {stretchType === "two-way" && (
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Y-axis Factor (k₂)
                  </label>
                  <input
                    type="number"
                    value={k2}
                    onChange={handleK2Change}
                    className="w-full p-2.5 rounded-lg border-2 font-bold"
                    style={{
                      backgroundColor: NEUBRUTAL_PALETTE.background,
                      borderColor: NEUBRUTAL_PALETTE.black,
                      boxShadow: `2px 2px 0px 0px ${NEUBRUTAL_PALETTE.shadowBlack}`,
                    }}
                    step="0.5"
                  />
                </div>
              )}
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={applyAction}
                className="flex items-center px-5 py-2.5 font-bold rounded-full border-2 border-black
                         shadow-[4px_4px_0px_0px_#1a1a1a9D] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1a1a1a9D]
                         active:translate-y-0 active:shadow-[2px_2px_0px_0px_#1a1a1a9D] transition-all duration-100"
                style={{
                  backgroundColor: NEUBRUTAL_PALETTE.secondaryAccent,
                }}
              >
                Show Invariant Line
              </button>
            </div>
          </>
        )}

        {mode === "describe" && (
          <div>
            <h3 className="text-lg font-bold mb-3">
              Describe Stretch Transformation
            </h3>
            <p className="mb-2">
              A stretch transformation scales points along one or two axes
              relative to an invariant line.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm font-semibold">
              <li>
                <span className="font-bold">One-Way Stretch:</span>{" "}
                Stretches points parallel to one axis (e.g., X-axis) while
                leaving points on the perpendicular axis (Y-axis) unchanged.
              </li>
              <li>
                <span className="font-bold">Two-Way Stretch:</span>{" "}
                Stretches points along both the X-axis and Y-axis independently.
              </li>
              <li>
                <span className="font-bold">Invariant Line/Point:</span> A
                line (or point) that remains unchanged by the transformation.
                For a one-way stretch along the X-axis, the invariant line is
                the Y-axis (<InlineMath math="x=0" />
                ).
              </li>
              <li>
                <span className="font-bold">Matrix Representation:</span>{" "}
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
          className="flex items-center px-5 py-2.5 font-bold rounded-full border-2 border-black
                     shadow-[4px_4px_0px_0px_#1a1a1a9D] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1a1a1a9D]
                     active:translate-y-0 active:shadow-[2px_2px_0px_0px_#1a1a1a9D] transition-all duration-100"
          style={{
            backgroundColor: NEUBRUTAL_PALETTE.tertiaryAccent,
          }}
        >
          <X className="mr-2" size={18} /> Reset
        </button>
      </div>

      {/* SVG Visualization Canvas */}
      <div
        className="relative w-full h-80 rounded-xl border-4 overflow-hidden flex items-center justify-center"
        style={{
          backgroundColor: NEUBRUTAL_PALETTE.background,
          borderColor: NEUBRUTAL_PALETTE.black,
          boxShadow: `4px 4px 0px 0px ${NEUBRUTAL_PALETTE.shadowBlack}`,
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
                stroke={NEUBRUTAL_PALETTE.black}
                strokeOpacity="0.1"
                strokeWidth="1"
              />
              <line
                x1={0}
                y1={i * cellSize}
                x2={gridCount * cellSize}
                y2={i * cellSize}
                stroke={NEUBRUTAL_PALETTE.black}
                strokeOpacity="0.1"
                strokeWidth="1"
              />
            </g>
          ))}

          {/* Axes */}
          <line
            x1={(gridCount * cellSize) / 2}
            y1={0}
            x2={(gridCount * cellSize) / 2}
            y2={gridCount * cellSize}
            stroke={NEUBRUTAL_PALETTE.black}
            strokeWidth="2"
          />
          <line
            x1={0}
            y1={(gridCount * cellSize) / 2}
            x2={gridCount * cellSize}
            y2={(gridCount * cellSize) / 2}
            stroke={NEUBRUTAL_PALETTE.black}
            strokeWidth="2"
          />

          {/* X-axis scale labels */}
          {[...Array(gridCount + 1)].map((_, i) => {
            const xCoord = i - gridCount / 2;
            return (
              <text
                key={`x-${i}`}
                x={i * cellSize}
                y={(gridCount * cellSize) / 2 + 15}
                fill={NEUBRUTAL_PALETTE.black}
                fontSize="10"
                textAnchor="middle"
                fontWeight="bold"
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
                  fill={NEUBRUTAL_PALETTE.black}
                  fontSize="10"
                  textAnchor="start"
                  fontWeight="bold"
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
                  stroke={NEUBRUTAL_PALETTE.primaryAccent}
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
                  stroke={NEUBRUTAL_PALETTE.primaryAccent}
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              )}
            </>
          )}

          {/* Original Quadrilateral - Shown for 'draw', 'invariant' modes */}
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
              fill={NEUBRUTAL_PALETTE.primaryAccent}
              fillOpacity="0.6"
              stroke={NEUBRUTAL_PALETTE.black}
              strokeWidth="2"
            />
          )}

          {/* Stretched Quadrilateral - shown conditionally for 'draw', 'invariant' modes */}
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
              fill={NEUBRUTAL_PALETTE.secondaryAccent}
              fillOpacity="0.8"
              stroke={NEUBRUTAL_PALETTE.black}
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
                fill={NEUBRUTAL_PALETTE.primaryAccent}
              />
              <text
                x={pointA.x * cellSize + (gridCount * cellSize) / 2 + 6}
                y={(gridCount * cellSize) / 2 - pointA.y * cellSize - 6}
                fill={NEUBRUTAL_PALETTE.black}
                fontSize="11"
                fontWeight="bold"
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
                    fill={NEUBRUTAL_PALETTE.secondaryAccent}
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
                    fill={NEUBRUTAL_PALETTE.black}
                    fontSize="11"
                    fontWeight="bold"
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

      {/* Information Panel */}
      <div
        className="mt-5 p-4 rounded-xl text-sm font-semibold border-2"
        style={{
          backgroundColor: NEUBRUTAL_PALETTE.background,
          borderColor: NEUBRUTAL_PALETTE.black,
          boxShadow: `4px 4px 0px 0px ${NEUBRUTAL_PALETTE.shadowBlack}`,
        }}
      >
        <p className="font-bold mb-2">Original Vertices:</p>
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
            <p className="font-bold mt-3 mb-2">
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

            <div className="mt-3 pt-3 border-t-2" style={{borderColor: NEUBRUTAL_PALETTE.black}}>
              <p className="font-bold mb-2">How Stretch Works:</p>
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
            </div>
          </>
        )}

        {/* Show computed point info if 'compute' mode action was performed */}
        {mode === "compute" && showResult && (
          <div className="mt-3 pt-3 border-t-2" style={{borderColor: NEUBRUTAL_PALETTE.black}}>
            <p className="font-bold mb-2">
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
          <div className="mt-3 pt-3 border-t-2" style={{borderColor: NEUBRUTAL_PALETTE.black}}>
            <p className="font-bold mb-2">Invariant Line(s):</p>
            <ul className="list-disc list-inside space-y-1">
              {stretchType === "one-way" && (
                <li>
                  The invariant line is the Y-axis (<InlineMath math="x = 0" />
                  ).
                </li>
              )}
              {stretchType === "two-way" && k1 === 1 && k2 !== 1 && (
                <li>
                  The Y-axis (<InlineMath math="x = 0" />) is invariant.
                </li>
              )}
              {stretchType === "two-way" && k2 === 1 && k1 !== 1 && (
                <li>
                  The X-axis (<InlineMath math="y = 0" />) is invariant.
                </li>
              )}
              {stretchType === "two-way" && k1 === 1 && k2 === 1 && (
                <li>
                  Every point is invariant. This is the identity transformation.
                </li>
              )}
              {stretchType === "two-way" && k1 !== 1 && k2 !== 1 && (
                <li>
                  The only invariant point is the origin (0, 0).
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
