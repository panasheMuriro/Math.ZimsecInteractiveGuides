/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Move, X, Calculator, Eye, FileText } from "lucide-react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

// --- Neubrutalism Styles & Colors with the new palette ---
const PALETTE = {
  darkBlueGreen: "#264653",
  mediumTeal: "#2a9d8f",
  vibrantYellow: "#e9c46a",
  warmOrange: "#f4a261",
  redOrange: "#e76f51",
  offWhite: "#fbf8f1",
};

const neubrutalismBase = {
  border: `3px solid ${PALETTE.darkBlueGreen}`,
  borderRadius: "12px",
  boxShadow: `4px 4px 0px ${PALETTE.darkBlueGreen}9D`,
  padding: "1rem",
};

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
      setPointAPrime((prev: any) => ({ ...prev, [axis]: value }));
    } else {
      setPointA((prev: any) => ({ ...prev, [axis]: value }));
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
    <div
      className="w-full max-w-md mx-auto p-6 rounded-2xl"
      style={{
        backgroundColor: PALETTE.mediumTeal,
        ...neubrutalismBase,
        boxShadow: `8px 8px 0px ${PALETTE.darkBlueGreen}`,
      }}
    >
      {/* Title */}
      <h2
        className="text-2xl font-bold mb-5 flex items-center"
        style={{ color: PALETTE.offWhite }}
      >
        <Move className="mr-3" size={28} style={{ color: PALETTE.darkBlueGreen }} /> Shear Visualizer
      </h2>

      {/* Tab Navigation - Neubrutalism style */}
      <div className="flex flex-wrap border-b-2 mb-6" style={{ borderColor: PALETTE.darkBlueGreen }}>
        <button
          className={`py-2 px-3 text-sm font-semibold transition-all ${
            mode === "draw"
              ? "bg-white"
              : "bg-transparent text-gray-700/80 hover:bg-gray-100/50"
          }`}
          style={{
            ...neubrutalismBase,
            boxShadow: "none",
            borderBottom: "none",
            borderRadius: "10px 10px 0 0",
            backgroundColor: mode === "draw" ? PALETTE.offWhite : "transparent",
            color:mode === "draw"?  PALETTE.darkBlueGreen:PALETTE.offWhite ,
          }}
          onClick={() => setMode("draw")}
        >
          <Eye className="inline mr-1" size={16} /> Draw Shear
        </button>
        <button
          className={`py-2 px-3 text-sm font-semibold transition-all ${
            mode === "compute"
              ? "bg-white"
              : "bg-transparent text-gray-700/80 hover:bg-gray-100/50"
          }`}
          style={{
            ...neubrutalismBase,
            boxShadow: "none",
            borderBottom: "none",
            borderRadius: "10px 10px 0 0",
            backgroundColor: mode === "compute" ? PALETTE.offWhite : "transparent",
            color:mode === "compute"?  PALETTE.darkBlueGreen:PALETTE.offWhite ,
          }}
          onClick={() => setMode("compute")}
        >
          <Calculator className="inline mr-1" size={16} /> Compute
        </button>
        <button
          className={`py-2 px-3 text-sm font-semibold transition-all ${
            mode === "describe"
              ? "bg-white"
              : "bg-transparent text-gray-700/80 hover:bg-gray-100/50"
          }`}
          style={{
            ...neubrutalismBase,
            boxShadow: "none",
            borderBottom: "none",
            borderRadius: "10px 10px 0 0",
            backgroundColor: mode === "describe" ? PALETTE.offWhite : "transparent",
            color:mode === "describe"?  PALETTE.darkBlueGreen:PALETTE.offWhite ,
          }}
          onClick={() => setMode("describe")}
        >
          <FileText className="inline mr-1" size={16} /> Describe
        </button>
      </div>

      {/* Mode Content */}
      <div
        className="mb-6 rounded-xl"
        style={{
          ...neubrutalismBase,
          backgroundColor: PALETTE.offWhite,
          borderColor: PALETTE.darkBlueGreen,
        }}
      >
        <h3 className="text-lg font-semibold mb-3" style={{ color: PALETTE.darkBlueGreen }}>
          {mode === "draw" && "Shear Parameters"}
          {mode === "compute" && "Compute Point"}
          {mode === "describe" && "Describe Shear"}
        </h3>
        {/* Draw & Compute Controls */}
        {(mode === "draw" || mode === "compute") && (
          <>
            <div className="flex gap-4 mb-4">
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold rounded-lg transition-colors active:scale-95`}
                style={{
                  ...neubrutalismBase,
                  boxShadow: `3px 3px 0px ${
                    shearAxis === "x-axis" ? PALETTE.warmOrange : PALETTE.mediumTeal
                  }`,
                  backgroundColor:
                    shearAxis === "x-axis" ? PALETTE.vibrantYellow : PALETTE.offWhite,
                  color: PALETTE.darkBlueGreen,
                  borderColor: PALETTE.darkBlueGreen,
                  border: `2px solid ${PALETTE.darkBlueGreen}`,
                }}
                onClick={() => setShearAxis("x-axis")}
              >
                Parallel to X-axis
              </button>
              <button
                className={`flex-1 py-2 px-4 text-sm font-semibold rounded-lg transition-colors active:scale-95`}
                style={{
                  ...neubrutalismBase,
                  boxShadow: `3px 3px 0px ${
                    shearAxis === "y-axis" ? PALETTE.warmOrange : PALETTE.mediumTeal
                  }`,
                  backgroundColor:
                    shearAxis === "y-axis" ? PALETTE.vibrantYellow : PALETTE.offWhite,
                  color: PALETTE.darkBlueGreen,
                  borderColor: PALETTE.darkBlueGreen,
                  border: `2px solid ${PALETTE.darkBlueGreen}`,
                }}
                onClick={() => setShearAxis("y-axis")}
              >
                Parallel to Y-axis
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1 opacity-90" style={{ color: PALETTE.darkBlueGreen }}>
                Shear Factor (k)
              </label>
              <input
                type="number"
                value={k}
                onChange={handleKChange}
                className="w-full p-2.5 rounded-lg border-2 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: PALETTE.offWhite,
                  color: PALETTE.darkBlueGreen,
                  borderColor: PALETTE.darkBlueGreen,
                  boxShadow: `2px 2px 0px ${PALETTE.vibrantYellow}`,
                  WebkitAppearance: "none",
                }}
                step="0.5"
              />
            </div>
          </>
        )}

        {/* Compute & Describe Controls */}
        {(mode === "compute" || mode === "describe") && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 opacity-90" style={{ color: PALETTE.darkBlueGreen }}>
                Point A
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={pointA.x}
                  onChange={(e) => handlePointChange(e, "x", false)}
                  className="w-full p-2 rounded-lg border-2 focus:outline-none focus:ring-2 text-center"
                  style={{
                    backgroundColor: PALETTE.offWhite,
                    color: PALETTE.darkBlueGreen,
                    borderColor: PALETTE.darkBlueGreen,
                    boxShadow: `2px 2px 0px ${PALETTE.vibrantYellow}`,
                  }}
                  step="0.5"
                />
                <input
                  type="number"
                  value={pointA.y}
                  onChange={(e) => handlePointChange(e, "y", false)}
                  className="w-full p-2 rounded-lg border-2 focus:outline-none focus:ring-2 text-center"
                  style={{
                    backgroundColor: PALETTE.offWhite,
                    color: PALETTE.darkBlueGreen,
                    borderColor: PALETTE.darkBlueGreen,
                    boxShadow: `2px 2px 0px ${PALETTE.vibrantYellow}`,
                  }}
                  step="0.5"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1 opacity-90" style={{ color: PALETTE.darkBlueGreen }}>
                Point A'
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={mode === "compute" ? (shearAxis === "x-axis" ? pointA.x + k * pointA.y : pointA.x) : pointAPrime.x}
                  onChange={(e) => handlePointChange(e, "x", true)}
                  readOnly={mode === "compute"}
                  className="w-full p-2 rounded-lg border-2 focus:outline-none focus:ring-2 text-center"
                  style={{
                    backgroundColor: mode === "compute" ? `${PALETTE.offWhite}80` : PALETTE.offWhite,
                    color: mode === "compute" ? `${PALETTE.darkBlueGreen}90` : PALETTE.darkBlueGreen,
                    borderColor: PALETTE.darkBlueGreen,
                    boxShadow: `2px 2px 0px ${PALETTE.vibrantYellow}`,
                  }}
                  step="0.5"
                />
                <input
                  type="number"
                  value={mode === "compute" ? (shearAxis === "x-axis" ? pointA.y : pointA.y + k * pointA.x) : pointAPrime.y}
                  onChange={(e) => handlePointChange(e, "y", true)}
                  readOnly={mode === "compute"}
                  className="w-full p-2 rounded-lg border-2 focus:outline-none focus:ring-2 text-center"
                  style={{
                    backgroundColor: mode === "compute" ? `${PALETTE.offWhite}80` : PALETTE.offWhite,
                    color: mode === "compute" ? `${PALETTE.darkBlueGreen}90` : PALETTE.darkBlueGreen,
                    borderColor: PALETTE.darkBlueGreen,
                    boxShadow: `2px 2px 0px ${PALETTE.vibrantYellow}`,
                  }}
                  step="0.5"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mb-6 h-12">
        <button
          onClick={applyAction}
          className={`flex items-center px-5 py-2.5 font-semibold rounded-full transition-all duration-200 active:scale-95`}
          style={{
            backgroundColor: PALETTE.vibrantYellow,
            color: PALETTE.darkBlueGreen,
            ...neubrutalismBase,
            boxShadow: `3px 3px 0px ${PALETTE.darkBlueGreen}9d`,
          }}
        >
          {mode === "draw" && <Eye className="mr-2" size={18} />}
          {mode === "compute" && <Calculator className="mr-2" size={18} />}
          {mode === "describe" && <FileText className="mr-2" size={18} />}
          {mode === "draw" && "Show Shear"}
          {mode === "compute" && "Compute"}
          {mode === "describe" && "Describe"}
        </button>
        <button
          onClick={reset}
          className="flex items-center px-5 py-2.5 font-semibold rounded-full transition-all duration-200 active:scale-95"
          style={{
            backgroundColor: PALETTE.warmOrange,
            color: PALETTE.darkBlueGreen,
            ...neubrutalismBase,
            boxShadow: `3px 3px 0px ${PALETTE.darkBlueGreen}9d`,
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
          padding: "1rem",
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
          {/* Invariant Line */}
          {showResult && (mode === "draw" || mode === "describe") && (
            <>
              {(shearAxis === "x-axis" || calculatedAxis === "x-axis") && (
                <line
                  x1={(gridCount * cellSize) / 2}
                  y1={0}
                  x2={(gridCount * cellSize) / 2}
                  y2={gridCount * cellSize}
                  stroke={
                    mode === "draw" ? PALETTE.vibrantYellow : PALETTE.redOrange
                  }
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              )}
              {(shearAxis === "y-axis" || calculatedAxis === "y-axis") && (
                <line
                  x1={0}
                  y1={(gridCount * cellSize) / 2}
                  x2={gridCount * cellSize}
                  y2={(gridCount * cellSize) / 2}
                  stroke={
                    mode === "draw" ? PALETTE.vibrantYellow : PALETTE.redOrange
                  }
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              )}
            </>
          )}

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
          {/* Sheared Quadrilateral */}
          {showResult && (
            <polygon
              points={shearedPoints
                .map(
                  (p) =>
                    `${p.x * cellSize + (gridCount * cellSize) / 2},${
                      (gridCount * cellSize) / 2 - p.y * cellSize
                    }`
                )
                .join(" ")}
              fill={PALETTE.redOrange}
              fillOpacity="0.6"
              stroke={PALETTE.redOrange}
              strokeWidth="2"
            />
          )}

          {/* Points & Labels */}
          {mode === "compute" && (
            <>
              {/* Original Point A */}
              <circle
                cx={pointA.x * cellSize + (gridCount * cellSize) / 2}
                cy={(gridCount * cellSize) / 2 - pointA.y * cellSize}
                r="4"
                fill={PALETTE.darkBlueGreen}
              />
              <text
                x={pointA.x * cellSize + (gridCount * cellSize) / 2 + 6}
                y={(gridCount * cellSize) / 2 - pointA.y * cellSize - 6}
                fill={PALETTE.darkBlueGreen}
                fontSize="11"
                fontWeight="500"
                pointerEvents="none"
              >
                A({pointA.x},{pointA.y})
              </text>
              {/* Image Point A' */}
              {showResult && (
                <>
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
                    fill={PALETTE.redOrange}
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
                    fill={PALETTE.redOrange}
                    fontSize="11"
                    fontWeight="500"
                    pointerEvents="none"
                  >
                    A'({shearAxis === "x-axis" ? pointA.x + k * pointA.y : pointA.x}, {shearAxis === "x-axis" ? pointA.y : pointA.y + k * pointA.x})
                  </text>
                </>
              )}
            </>
          )}

          {mode === "describe" && (
            <>
              {/* Original Point A */}
              <circle
                cx={pointA.x * cellSize + (gridCount * cellSize) / 2}
                cy={(gridCount * cellSize) / 2 - pointA.y * cellSize}
                r="4"
                fill={PALETTE.darkBlueGreen}
              />
              <text
                x={pointA.x * cellSize + (gridCount * cellSize) / 2 + 6}
                y={(gridCount * cellSize) / 2 - pointA.y * cellSize - 6}
                fill={PALETTE.darkBlueGreen}
                fontSize="11"
                fontWeight="500"
                pointerEvents="none"
              >
                A({pointA.x},{pointA.y})
              </text>
              {/* Image Point A' */}
              <circle
                cx={pointAPrime.x * cellSize + (gridCount * cellSize) / 2}
                cy={(gridCount * cellSize) / 2 - pointAPrime.y * cellSize}
                r="4"
                fill={PALETTE.redOrange}
              />
              <text
                x={pointAPrime.x * cellSize + (gridCount * cellSize) / 2 + 6}
                y={(gridCount * cellSize) / 2 - pointAPrime.y * cellSize - 6}
                fill={PALETTE.redOrange}
                fontSize="11"
                fontWeight="500"
                pointerEvents="none"
              >
                A'({pointAPrime.x},{pointAPrime.y})
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Information Panel */}
      <div
        className="mt-5 p-4 rounded-xl text-sm"
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
        {/* Sheared vertices info */}
        {(mode === "draw" || mode === "invariant") && showResult && (
          <>
            <p className="font-semibold mt-3 mb-2" style={{ color: PALETTE.darkBlueGreen }}>
              Sheared Vertices (
              {shearAxis === "x-axis"
                ? `Parallel to X-axis, k=${k}`
                : `Parallel to Y-axis, k=${k}`}
              ):
            </p>
            <ul className="list-disc list-inside space-y-1" style={{ color: PALETTE.darkBlueGreen }}>
              {shearedPoints.map((p, i) => (
                <li key={`info-shear-${i}`} className="font-mono">
                  <InlineMath math={`A_{${i + 1}}'(${p.x}, ${p.y})`} />
                </li>
              ))}
            </ul>
            <div
              className="mt-3 pt-3 border-t-2"
              style={{ borderColor: PALETTE.mediumTeal }}
            >
              <p className="font-semibold mb-2" style={{ color: PALETTE.darkBlueGreen }}>How Shear Works:</p>
              <p className="mb-2" style={{ color: PALETTE.darkBlueGreen }}>
                Each point <InlineMath math="(x, y)" /> is transformed:
              </p>
              <ul className="list-disc list-inside space-y-1" style={{ color: PALETTE.darkBlueGreen }}>
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
            </div>
          </>
        )}
        {/* Computed point info */}
        {mode === "compute" && showResult && (
          <div
            className="mt-3 pt-3 border-t-2"
            style={{ borderColor: PALETTE.mediumTeal }}
          >
            <p className="font-semibold mb-2" style={{ color: PALETTE.darkBlueGreen }}>
              Computed Image (
              {shearAxis === "x-axis"
                ? `Parallel to X-axis, k=${k}`
                : `Parallel to Y-axis, k=${k}`}
              ):
            </p>
            <p style={{ color: PALETTE.darkBlueGreen }}>
              Original point <InlineMath math={`A(${pointA.x}, ${pointA.y})`} />{" "}
              is transformed to:
            </p>
            <p className="my-2 text-center font-bold" style={{ color: PALETTE.darkBlueGreen }}>
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
        {/* Description info */}
        {mode === "describe" && showResult && (
          <div
            className="mt-3 pt-3 border-t-2"
            style={{ borderColor: PALETTE.mediumTeal }}
          >
            <p className="font-semibold mb-2" style={{ color: PALETTE.darkBlueGreen }}>
              Described Shear Transformation:
            </p>
            {calculatedAxis !== "unknown" ? (
              <>
                <p style={{ color: PALETTE.darkBlueGreen }}>
                  Based on points{" "}
                  <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> and{" "}
                  <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />
                  :
                </p>
                <ul className="list-disc list-inside space-y-1 my-2" style={{ color: PALETTE.darkBlueGreen }}>
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
              </>
            ) : (
              <p style={{ color: PALETTE.darkBlueGreen }}>
                Could not determine a unique shear transformation from these
                points.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShearVisualizer;