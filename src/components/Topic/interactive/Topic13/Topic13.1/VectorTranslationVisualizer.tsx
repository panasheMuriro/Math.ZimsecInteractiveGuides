/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Move, X, Calculator } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

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

const VectorTranslationVisualizer: React.FC = () => {
  
  const points: Point[] = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
    { x: 2, y: 0 },
  ];

  
  const [pointA, setPointA] = useState<Point>({ x: 1, y: 1 });
  const [pointAPrime, setPointAPrime] = useState<Point>({ x: -3, y: 4 });

  
  const [isTranslated, setIsTranslated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  
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

  
  const calculateVector = () => {
    if (!isTranslated) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsTranslated(true);
      }, 50);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1050);
    }
  };

  
  const reset = () => {
    setIsTranslated(false);
  };

  
  const gridCount = 10;
  const cellSize = 30;

  
  const calculatedVector = {
    x: pointAPrime.x - pointA.x,
    y: pointAPrime.y - pointA.y,
  };

  
  const translatedPoints = points.map((point) => ({
    x: point.x + calculatedVector.x,
    y: point.y + calculatedVector.y,
  }));
  
  const translatedTransform = `translate(${isTranslated ? calculatedVector.x * cellSize : 0}px, ${isTranslated ? -calculatedVector.y * cellSize : 0}px)`;

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
        <Move className="mr-3" size={28} style={{ color: PALETTE.darkBlueGreen }} /> Vector-Based Translation
      </h2>

      {/* Vector Calculation Input Section */}
      <div
        className="mb-6 rounded-xl"
        style={{
          ...neubrutalismBase,
          backgroundColor: PALETTE.offWhite,
          borderColor: PALETTE.darkBlueGreen,
        }}
      >
        <h3 className="text-lg font-semibold mb-3" style={{ color: PALETTE.darkBlueGreen }}>Find Translation Vector</h3>
        <p className="text-sm mb-3 opacity-90" style={{ color: PALETTE.darkBlueGreen }}>
          Enter a point and its image to calculate the translation vector:
        </p>
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm mb-1 opacity-90" style={{ color: PALETTE.darkBlueGreen }}>Point A (x, y)</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={pointA.x}
                onChange={(e) => handleCorrespondencePointChange(e, 'x', false)}
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
                onChange={(e) => handleCorrespondencePointChange(e, 'y', false)}
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
            <label className="block text-sm mb-1 opacity-90" style={{ color: PALETTE.darkBlueGreen }}>Point A' (x, y)</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={pointAPrime.x}
                onChange={(e) => handleCorrespondencePointChange(e, 'x', true)}
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
                onChange={(e) => handleCorrespondencePointChange(e, 'y', true)}
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
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={calculateVector}
          disabled={isTranslated || isAnimating}
          className={`flex items-center px-5 py-2.5 font-semibold rounded-full transition-all duration-200 active:scale-95 ${
            isTranslated || isAnimating
              ? 'bg-gray-400 cursor-not-allowed text-gray-700'
              : ''
          }`}
          style={isTranslated || isAnimating ? {} : { backgroundColor: PALETTE.vibrantYellow, color: PALETTE.darkBlueGreen, ...neubrutalismBase }}
        >
          <Calculator className="mr-2" size={18} /> Calculate & Show
        </button>
        <button
          onClick={reset}
          disabled={!isTranslated || isAnimating}
          className={`flex items-center px-5 py-2.5 font-semibold rounded-full transition-all duration-200 active:scale-95 ${
            !isTranslated || isAnimating
              ? 'bg-gray-400 cursor-not-allowed text-gray-700'
              : ''
          }`}
          style={!isTranslated || isAnimating ? {} : { backgroundColor: PALETTE.redOrange, color: PALETTE.darkBlueGreen, ...neubrutalismBase }}
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
            x1={gridCount * cellSize / 2}
            y1={0}
            x2={gridCount * cellSize / 2}
            y2={gridCount * cellSize}
            stroke={PALETTE.darkBlueGreen}
            strokeWidth="2"
          />
          <line
            x1={0}
            y1={gridCount * cellSize / 2}
            x2={gridCount * cellSize}
            y2={gridCount * cellSize / 2}
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
                y={gridCount * cellSize / 2 + 15}
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
                  x={gridCount * cellSize / 2 + 10}
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
              .map((p) => `${p.x * cellSize + gridCount * cellSize / 2},${gridCount * cellSize / 2 - p.y * cellSize}`)
              .join(' ')}
            fill={PALETTE.mediumTeal}
            fillOpacity="0.6"
            stroke={PALETTE.mediumTeal}
            strokeWidth="2"
          />

          {/* Translated Quadrilateral (animated) */}
          <polygon
            points={points
              .map((p) => `${p.x * cellSize + gridCount * cellSize / 2},${gridCount * cellSize / 2 - p.y * cellSize}`)
              .join(' ')}
            fill={PALETTE.redOrange}
            fillOpacity="0.6"
            stroke={PALETTE.redOrange}
            strokeWidth="2"
            style={{
              transition: 'transform 1s ease-in-out',
              transform: translatedTransform
            }}
          />

          {/* Original Points Labels */}
          {points.map((p, i) => (
            <text
              key={`orig-label-${i}`}
              x={p.x * cellSize + gridCount * cellSize / 2 + 6}
              y={gridCount * cellSize / 2 - p.y * cellSize - 6}
              fill={PALETTE.darkBlueGreen}
              fontSize="11"
              fontWeight="500"
              pointerEvents="none"
            >
              A{i + 1}({p.x},{p.y})
            </text>
          ))}

          {/* Translated Points Labels (animated) */}
          {points.map((p, i) => (
            <text
              key={`trans-label-${i}`}
              x={p.x * cellSize + gridCount * cellSize / 2 + 6}
              y={gridCount * cellSize / 2 - p.y * cellSize - 6}
              fill={PALETTE.redOrange}
              fontSize="11"
              fontWeight="500"
              pointerEvents="none"
              style={{
                transition: 'transform 1s ease-in-out',
                transform: translatedTransform,
                opacity: isTranslated ? 1 : 0
              }}
            >
              A{i + 1}'({translatedPoints[i].x}, {translatedPoints[i].y})
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

        {isTranslated && (
          <>
            <p className="font-semibold mt-3 mb-2" style={{ color: PALETTE.darkBlueGreen }}>Translated Vertices:</p>
            <ul className="list-disc list-inside space-y-1" style={{ color: PALETTE.darkBlueGreen }}>
              {translatedPoints.map((p, i) => (
                <li key={`info-trans-${i}`} className="font-mono">
                  <InlineMath math={`A_{${i + 1}}'(${p.x}, ${p.y})`} />
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-3 border-t-2" style={{ borderColor: PALETTE.mediumTeal }}>
              <p className="font-semibold mb-2" style={{ color: PALETTE.darkBlueGreen }}>Calculated Translation Vector:</p>
              <p style={{ color: PALETTE.darkBlueGreen }}>
                From <InlineMath math={`A(${pointA.x}, ${pointA.y})`} /> to{' '}
                <InlineMath math={`A'(${pointAPrime.x}, ${pointAPrime.y})`} />:
              </p>
              <div className="flex justify-center my-2 text-dark-blue-green" style={{ color: PALETTE.darkBlueGreen }}>
                <BlockMath
                  math={`\\begin{pmatrix} ${pointAPrime.x} - ${pointA.x} \\\\ ${pointAPrime.y} - ${pointA.y} \\end{pmatrix} = \\begin{pmatrix} ${calculatedVector.x} \\\\ ${calculatedVector.y} \\end{pmatrix}`}
                />
              </div>

              <p className="font-semibold mb-2 mt-3" style={{ color: PALETTE.darkBlueGreen }}>How Translation Works:</p>
              <p className="mb-2" style={{ color: PALETTE.darkBlueGreen }}>
                The vector <InlineMath math={`\\begin{pmatrix} ${calculatedVector.x} \\\\ ${calculatedVector.y} \\end{pmatrix}`} /> is added to each vertex:
              </p>
              <ul className="list-disc list-inside space-y-1" style={{ color: PALETTE.darkBlueGreen }}>
                {points.map((p, i) => (
                  <li key={`process-${i}`} className="font-mono text-xs">
                    <InlineMath
                      math={`A_{${i + 1}}(${p.x}, ${p.y}) \\to A_{${i + 1}}'(${p.x} + ${calculatedVector.x}, ${p.y} + ${calculatedVector.y}) = A_{${i + 1}}'(${translatedPoints[i].x}, ${translatedPoints[i].y})`}
                    />
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs italic" style={{ color: PALETTE.darkBlueGreen }}>
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
