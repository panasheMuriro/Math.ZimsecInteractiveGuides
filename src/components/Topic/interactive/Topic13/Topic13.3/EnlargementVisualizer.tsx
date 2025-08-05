import React, { useState } from "react";
import { ZoomIn, X, Calculator } from "lucide-react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

interface Point {
  x: number;
  y: number;
}

// New Color Palette for Neubrutalist Style
const PALETTE = {
  cream: "#f4f1de",
  terraCotta: "#e07a5f",
  darkBlue: "#3d405b",
  sageGreen: "#81b29a",
  mustard: "#f2cc8f",
};

const neubrutalismBase = {
  border: `3px solid ${PALETTE.darkBlue}`,
  borderRadius: "12px",
  boxShadow: `4px 4px 0px ${PALETTE.darkBlue}`,
  padding: "1rem",
};

const EnlargementVisualizer: React.FC = () => {
  const points: Point[] = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
    { x: 2, y: 0 },
  ];

  const [activeTab, setActiveTab] = useState<"enlarge" | "find">("enlarge");

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
    axis: "x" | "y"
  ) => {
    const value = parseFloat(e.target.value) || 0;
    setCenter((prev) => ({ ...prev, [axis]: value }));
  };

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
    const possibleKx = pointA.x !== 0 ? pointAPrime.x / pointA.x : NaN;
    const possibleKy = pointA.y !== 0 ? pointAPrime.y / pointA.y : NaN;

    if (
      !isNaN(possibleKx) &&
      !isNaN(possibleKy) &&
      Math.abs(possibleKx - possibleKy) < 1e-10
    ) {
      return { scaleFactor: possibleKx, center: { x: 0, y: 0 } };
    }

    return { scaleFactor: NaN, center: { x: NaN, y: NaN } };
  };

  const { scaleFactor: calculatedK } = calculateScaleFactorAndCenter();

  return (
    <div
      className="w-full max-w-md mx-auto p-6 rounded-2xl"
      style={{
        backgroundColor: PALETTE.sageGreen,
        ...neubrutalismBase,
        boxShadow: `8px 8px 0px ${PALETTE.darkBlue}`,
      }}
    >
      {/* Title */}
      <h2
        className="text-2xl font-bold mb-5 flex items-center"
        style={{ color: PALETTE.darkBlue }}
      >
        <ZoomIn className="mr-3" size={28} /> Enlargement Visualizer
      </h2>

      {/* Tab Navigation */}
      <div className="flex border-b-4" style={{ borderColor: PALETTE.darkBlue }}>
        <button
          className={`py-2 px-4 font-semibold transition-colors rounded-t-lg ${
            activeTab === "enlarge"
              ? "rounded-b-none"
              : "bg-transparent hover:bg-white/10"
          }`}
          style={
            activeTab === "enlarge"
              ? {
                  backgroundColor: PALETTE.terraCotta,
                  color: PALETTE.darkBlue,
                  border: `3px solid ${PALETTE.darkBlue}`,
                  borderBottom: "none",
                }
              : { color: PALETTE.darkBlue, opacity: "0.7" }
          }
          onClick={() => setActiveTab("enlarge")}
        >
          Enlarge Shape
        </button>
        <button
          className={`py-2 px-4 font-semibold transition-colors rounded-t-lg ${
            activeTab === "find"
              ? "rounded-b-none"
              : "bg-transparent hover:bg-white/10"
          }`}
          style={
            activeTab === "find"
              ? {
                  backgroundColor: PALETTE.terraCotta,
                  color: PALETTE.darkBlue,
                  border: `3px solid ${PALETTE.darkBlue}`,
                  borderBottom: "none",
                }
              : { color: PALETTE.darkBlue, opacity: "0.7" }
          }
          onClick={() => setActiveTab("find")}
        >
          Find Enlargement
        </button>
      </div>

      {/* Tab Content */}
      <div
        className="mb-6 p-4 rounded-xl"
        style={{
          ...neubrutalismBase,
          backgroundColor: PALETTE.cream,
          borderColor: PALETTE.darkBlue,
        }}
      >
        {activeTab === "enlarge" ? (
          <>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: PALETTE.darkBlue }}
            >
              Set Enlargement Parameters
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  className="block text-sm mb-1 opacity-90"
                  style={{ color: PALETTE.darkBlue }}
                >
                  Scale Factor (k)
                </label>
                <input
                  type="number"
                  value={scaleFactor}
                  onChange={handleScaleFactorChange}
                  className="w-full p-2.5 rounded-lg border-2 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: PALETTE.mustard,
                    color: PALETTE.darkBlue,
                    borderColor: PALETTE.darkBlue,
                    boxShadow: `2px 2px 0px ${PALETTE.terraCotta}`,
                  }}
                  step="0.5"
                />
              </div>
              <div>
                <label
                  className="block text-sm mb-1 opacity-90"
                  style={{ color: PALETTE.darkBlue }}
                >
                  Center (h, k)
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={center.x}
                    onChange={(e) => handleCenterChange(e, "x")}
                    className="w-20 p-2 rounded-lg border-2 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: PALETTE.mustard,
                      color: PALETTE.darkBlue,
                      borderColor: PALETTE.darkBlue,
                      boxShadow: `2px 2px 0px ${PALETTE.terraCotta}`,
                      WebkitAppearance: "none",
                    }}
                    step="0.5"
                  />
                  <input
                    type="number"
                    value={center.y}
                    onChange={(e) => handleCenterChange(e, "y")}
                    className="w-20 p-2 rounded-lg border-2 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: PALETTE.mustard,
                      color: PALETTE.darkBlue,
                      borderColor: PALETTE.darkBlue,
                      boxShadow: `2px 2px 0px ${PALETTE.terraCotta}`,
                      WebkitAppearance: "none",
                    }}
                    step="0.5"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={enlargePoints}
                className="flex items-center px-5 py-2.5 font-semibold rounded-full transition-all duration-200 active:scale-95"
                style={{
                  backgroundColor: PALETTE.terraCotta,
                  color: PALETTE.darkBlue,
                  ...neubrutalismBase,
                  padding: "0.75rem 1.25rem",
                }}
              >
                <ZoomIn className="mr-2" size={18} /> Enlarge
              </button>
            </div>
          </>
        ) : (
          <>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: PALETTE.darkBlue }}
            >
              Find Scale Factor and Center
            </h3>
            <p
              className="text-sm mb-3 opacity-90"
              style={{ color: PALETTE.darkBlue }}
            >
              Enter a point and its image to calculate the scale factor
              (assuming center is origin):
            </p>
            <div className="flex flex-wrap gap-4">
              <div>
                <label
                  className="block text-sm mb-1 opacity-90"
                  style={{ color: PALETTE.darkBlue }}
                >
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
                      backgroundColor: PALETTE.mustard,
                      color: PALETTE.darkBlue,
                      borderColor: PALETTE.darkBlue,
                      boxShadow: `2px 2px 0px ${PALETTE.terraCotta}`,
                      WebkitAppearance: "none",
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
                      backgroundColor: PALETTE.mustard,
                      color: PALETTE.darkBlue,
                      borderColor: PALETTE.darkBlue,
                      boxShadow: `2px 2px 0px ${PALETTE.terraCotta}`,
                      WebkitAppearance: "none",
                    }}
                    step="0.5"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm mb-1 opacity-90"
                  style={{ color: PALETTE.darkBlue }}
                >
                  Point A' (x', y')
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
                      backgroundColor: PALETTE.mustard,
                      color: PALETTE.darkBlue,
                      borderColor: PALETTE.darkBlue,
                      boxShadow: `2px 2px 0px ${PALETTE.terraCotta}`,
                      WebkitAppearance: "none",
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
                      backgroundColor: PALETTE.mustard,
                      color: PALETTE.darkBlue,
                      borderColor: PALETTE.darkBlue,
                      boxShadow: `2px 2px 0px ${PALETTE.terraCotta}`,
                      WebkitAppearance: "none",
                    }}
                    step="0.5"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={calculateEnlargement}
                className="flex items-center px-5 py-2.5 font-semibold rounded-full transition-all duration-200 active:scale-95"
                style={{
                  backgroundColor: PALETTE.terraCotta,
                  color: PALETTE.darkBlue,
                  ...neubrutalismBase,
                  padding: "0.75rem 1.25rem",
                }}
              >
                <Calculator className="mr-2" size={18} /> Find Enlargement
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
            backgroundColor: PALETTE.mustard,
            color: PALETTE.darkBlue,
            ...neubrutalismBase,
            padding: "0.75rem 1.25rem",
          }}
        >
          <X className="mr-2" size={18} /> Reset
        </button>
      </div>

      {/* SVG Visualization Canvas */}
      <div
        className="relative w-full h-80 rounded-xl overflow-hidden flex items-center justify-center"
        style={{
          backgroundColor: PALETTE.cream,
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
                stroke={PALETTE.mustard}
                strokeWidth="1"
                strokeOpacity="0.8"
              />
              <line
                x1={0}
                y1={i * cellSize}
                x2={gridCount * cellSize}
                y2={i * cellSize}
                stroke={PALETTE.mustard}
                strokeWidth="1"
                strokeOpacity="0.8"
              />
            </g>
          ))}

          {/* Axes */}
          <line
            x1={(gridCount * cellSize) / 2}
            y1={0}
            x2={(gridCount * cellSize) / 2}
            y2={gridCount * cellSize}
            stroke={PALETTE.darkBlue}
            strokeWidth="2"
          />
          <line
            x1={0}
            y1={(gridCount * cellSize) / 2}
            x2={gridCount * cellSize}
            y2={(gridCount * cellSize) / 2}
            stroke={PALETTE.darkBlue}
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
                fill={PALETTE.darkBlue}
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
                  fill={PALETTE.darkBlue}
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
            fill={PALETTE.terraCotta}
            fillOpacity="0.6"
            stroke={PALETTE.terraCotta}
            strokeWidth="2"
          />

          {/* Enlarged Quadrilateral - shown conditionally */}
          {(showEnlarged || showCalculated) && (
            <polygon
              points={enlargedPoints
                .map(
                  (p) =>
                    `${p.x * cellSize + (gridCount * cellSize) / 2},${
                      (gridCount * cellSize) / 2 - p.y * cellSize
                    }`
                )
                .join(" ")}
              fill={PALETTE.mustard}
              fillOpacity="0.6"
              stroke={PALETTE.mustard}
              strokeWidth="2"
            />
          )}

          {/* Center of Enlargement - Shown only when enlarging */}
          {showEnlarged && (
            <circle
              cx={center.x * cellSize + (gridCount * cellSize) / 2}
              cy={(gridCount * cellSize) / 2 - center.y * cellSize}
              r="4"
              fill={PALETTE.darkBlue}
            />
          )}

          {/* Dashed Lines from Center to Points - Shown only when enlarging */}
          {showEnlarged &&
            points.map((p, i) => (
              <g key={`line-${i}`}>
                {/* Line from center to original point */}
                <line
                  x1={center.x * cellSize + (gridCount * cellSize) / 2}
                  y1={(gridCount * cellSize) / 2 - center.y * cellSize}
                  x2={p.x * cellSize + (gridCount * cellSize) / 2}
                  y2={(gridCount * cellSize) / 2 - p.y * cellSize}
                  stroke={PALETTE.terraCotta}
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                {/* Line from center to image point */}
                <line
                  x1={center.x * cellSize + (gridCount * cellSize) / 2}
                  y1={(gridCount * cellSize) / 2 - center.y * cellSize}
                  x2={
                    enlargedPoints[i].x * cellSize + (gridCount * cellSize) / 2
                  }
                  y2={
                    (gridCount * cellSize) / 2 - enlargedPoints[i].y * cellSize
                  }
                  stroke={PALETTE.mustard}
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
              </g>
            ))}

          {/* Original Points Labels */}
          {points.map((p, i) => (
            <text
              key={`orig-label-${i}`}
              x={p.x * cellSize + (gridCount * cellSize) / 2 + 6}
              y={(gridCount * cellSize) / 2 - p.y * cellSize - 6}
              fill={PALETTE.darkBlue}
              fontSize="11"
              fontWeight="500"
              pointerEvents="none"
            >
              A{i + 1}({p.x},{p.y})
            </text>
          ))}

          {/* Enlarged/Calculated Points Labels - shown conditionally */}
          {(showEnlarged || showCalculated) &&
            enlargedPoints.map((p, i) => (
              <text
                key={`enl-label-${i}`}
                x={p.x * cellSize + (gridCount * cellSize) / 2 + 6}
                y={(gridCount * cellSize) / 2 - p.y * cellSize - 6}
                fill={PALETTE.darkBlue}
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
        className="mt-5 p-4 rounded-xl text-sm"
        style={{
          ...neubrutalismBase,
          backgroundColor: PALETTE.cream,
          borderColor: PALETTE.darkBlue,
          color: PALETTE.darkBlue,
        }}
      >
        <p className="font-semibold mb-2">Original Vertices:</p>
        <ul className="list-disc list-inside space-y-1">
          {points.map((p, i) => (
            <li key={`info-orig-${i}`} className="font-mono">
              <InlineMath math={`A_{${i + 1}}(${p.x}, ${p.y})`} />
            </li>
          ))}
        </ul>

        {showEnlarged && (
          <>
            <p className="font-semibold mt-3 mb-2">
              Enlarged Vertices (k={scaleFactor}, Center=({center.x}, {center.y}
              )):
            </p>
            <ul className="list-disc list-inside space-y-1">
              {enlargedPoints.map((p, i) => (
                <li key={`info-enl-${i}`} className="font-mono">
                  <InlineMath math={`A_{${i + 1}}'(${p.x}, ${p.y})`} />
                </li>
              ))}
            </ul>

            <div
              className="mt-3 pt-3 border-t-2"
              style={{ borderColor: PALETTE.darkBlue }}
            >
              <p className="font-semibold mb-2">
                Enlargement Matrix (for origin-centered only):
              </p>
              <div className="flex justify-center my-2">
                <BlockMath math={getEnlargementMatrix()} />
              </div>

              <p className="font-semibold mb-2 mt-3">How Enlargement Works:</p>
              <p className="mb-2">
                Each point <InlineMath math={`(x, y)`} /> is transformed
                relative to the center{" "}
                <InlineMath math={`(${center.x}, ${center.y})`} />:
              </p>
              <ul className="list-disc list-inside space-y-1">
                {points.map((p, i) => (
                  <li key={`process-enl-${i}`} className="font-mono text-xs">
                    <InlineMath
                      math={`A_{${i + 1}}(${p.x}, ${p.y}) \\to A_{${i + 1}}'(${
                        center.x
                      } + ${scaleFactor}(${p.x} - ${center.x}), ${
                        center.y
                      } + ${scaleFactor}(${p.y} - ${center.y})) = A_{${
                        i + 1
                      }}'(${enlargedPoints[i].x}, ${enlargedPoints[i].y})`}
                    />
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs italic">
                Dashed lines connect the center of enlargement to corresponding
                points and their images.
              </p>
            </div>
          </>
        )}

        {showCalculated && (
          <div
            className="mt-3 pt-3 border-t-2"
            style={{ borderColor: PALETTE.darkBlue }}
          >
            <p className="font-semibold mb-2">
              Calculated Enlargement (Assuming Origin Center):
            </p>
            <p>
              From <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> to{" "}
              <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />:
            </p>
            <p className="my-2 text-center">
              Scale factor:{" "}
              <span className="font-bold">
                <InlineMath
                  math={`k = ${
                    isNaN(calculatedK)
                      ? "\\text{Cannot determine (need more info or assume origin)}"
                      : calculatedK
                  }`}
                />
              </span>
            </p>
            <p className="mt-2 font-semibold">Explanation:</p>
            <p>
              If the center of enlargement is the origin (0, 0), the scale
              factor <InlineMath math={`k`} /> can be found by{" "}
              <InlineMath math={`k = \\frac{x'}{x} = \\frac{y'}{y}`} />{" "}
              (provided <InlineMath math={`x, y \\neq 0`} />
              ).
            </p>
            <p className="mt-1">
              In this case:
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <InlineMath
                    math={`\\frac{x'}{x} = \\frac{${pointAPrime.x}}{${
                      pointA.x
                    }} ${
                      pointA.x !== 0
                        ? `= ${pointAPrime.x / pointA.x}`
                        : " (undefined)"
                    } `}
                  />
                </li>
                <li>
                  <InlineMath
                    math={`\\frac{y'}{y} = \\frac{${pointAPrime.y}}{${
                      pointA.y
                    }} ${
                      pointA.y !== 0
                        ? `= ${pointAPrime.y / pointA.y}`
                        : " (undefined)"
                    } `}
                  />
                </li>
              </ul>
            </p>
            <p className="mt-2 text-xs italic">
              Note: Finding the exact center and scale factor from a single
              point pair generally requires more information or assumptions
              (like the center being the origin).
            </p>

            {/* Show the assumed enlarged shape if a scale factor was calculated */}
            {!isNaN(calculatedK) && calculatedK > 0 && (
              <>
                <p className="font-semibold mt-3 mb-2">
                  Assumed Enlarged Vertices (k={calculatedK}, Center=(0, 0)):
                </p>
                <ul className="list-disc list-inside space-y-1">
                  {points.map((p, i) => {
                    const assumedEnlarged = {
                      x: p.x * calculatedK,
                      y: p.y * calculatedK,
                    };
                    return (
                      <li key={`info-assumed-${i}`} className="font-mono">
                        <InlineMath
                          math={`A_{${i + 1}}'(${assumedEnlarged.x}, ${
                            assumedEnlarged.y
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

export default EnlargementVisualizer;
