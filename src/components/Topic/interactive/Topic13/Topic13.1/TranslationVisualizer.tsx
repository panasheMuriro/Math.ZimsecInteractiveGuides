/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Move, X, Plus } from 'lucide-react';

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
  boxShadow: `4px 4px 0px ${PALETTE.darkBlueGreen}9d`,
  padding: '1rem',
};

const TranslationVisualizer: React.FC = () => {
  
  const [points] = useState<Point[]>([
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 1 },
  ]);

  
  const [vector, setVector] = useState<Point>({ x: -3, y: 2 });

  // Use a state to control the animated translation
  const [isTranslated, setIsTranslated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  
  const handleVectorChange = (e: React.ChangeEvent<HTMLInputElement>, axis: 'x' | 'y') => {
    const value = parseFloat(e.target.value) || 0;
    setVector((prev) => ({ ...prev, [axis]: value }));
  };

  
  const translatePoints = () => {
    if (!isTranslated) {
      setIsAnimating(true);
      // Trigger the translation with a slight delay to allow the `isTranslated` state to be registered
      setTimeout(() => {
        setIsTranslated(true);
      }, 50);
      // Reset the animating state after the animation duration
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

  
  const translatedPoints = points.map((point) => ({
    x: point.x + vector.x,
    y: point.y + vector.y,
  }));

  const translatedTransform = `translate(${isTranslated ? vector.x * cellSize : 0}px, ${isTranslated ? -vector.y * cellSize : 0}px)`;

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
      <h2 className="text-2xl font-bold mb-5 flex items-center" style={{ color: PALETTE.darkBlueGreen }}>
        <Move className="mr-3" size={28} style={{ color: PALETTE.darkBlueGreen }} /> Translation Visualizer
      </h2>

      {/* Vector Input Section */}
      <div
        className="mb-6 rounded-xl"
        style={{
          ...neubrutalismBase,
          backgroundColor: PALETTE.offWhite,
          borderColor: PALETTE.darkBlueGreen,
        }}
      >
        <h3 className="text-lg font-semibold mb-3" style={{ color: PALETTE.darkBlueGreen }}>Translation Vector</h3>
        <div className="flex space-x-6">
          <div>
            <label className="block text-sm mb-1 opacity-90" style={{ color: PALETTE.darkBlueGreen }}>X Component</label>
            <input
              type="number"
              value={vector.x}
              onChange={(e) => handleVectorChange(e, 'x')}
              className="w-24 p-2 rounded-lg border-2 focus:outline-none focus:ring-2"
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
          <div>
            <label className="block text-sm mb-1 opacity-90" style={{ color: PALETTE.darkBlueGreen }}>Y Component</label>
            <input
              type="number"
              value={vector.y}
              onChange={(e) => handleVectorChange(e, 'y')}
              className="w-24 p-2 rounded-lg border-2 focus:outline-none focus:ring-2"
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
        <p className="text-sm mt-3 font-medium" style={{ color: PALETTE.darkBlueGreen }}>
          Vector: <span className="font-mono px-2 py-1 rounded" style={{ backgroundColor: `${PALETTE.vibrantYellow}80` }}>[{vector.x}, {vector.y}]</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mb-6 h-12">
        <button
          onClick={translatePoints}
          disabled={isTranslated || isAnimating} 
          className={`flex items-center px-5 py-2.5 font-semibold rounded-full transition-all duration-200 active:scale-95 ${
            isTranslated || isAnimating
              ? 'bg-gray-400 cursor-not-allowed text-gray-700'
              : ''
          }`}
          style={isTranslated || isAnimating ? {} : { backgroundColor: PALETTE.vibrantYellow, color: PALETTE.darkBlueGreen, ...neubrutalismBase }}
        >
          <Plus className="mr-2" size={18} /> Translate
        </button>
        <button
          onClick={reset}
          disabled={!isTranslated || isAnimating}
          className={`flex items-center px-5 py-2.5 font-semibold rounded-full transition-all duration-200 active:scale-95 ${
            !isTranslated || isAnimating
              ? 'bg-gray-400 cursor-not-allowed text-gray-700'
              : ''
          }`}
          style={!isTranslated || isAnimating ? {} : { backgroundColor: PALETTE.warmOrange, color: PALETTE.darkBlueGreen, ...neubrutalismBase }}
        >
          <X className="mr-2" size={18} /> Reset
        </button>
      </div>

      {/* SVG Visualization Canvas - Background is now white */}
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
          {/* Grid Lines - Changed to a darker gray for visibility on white */}
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

          {/* Axes - Kept black for strong contrast */}
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

          {/* X-axis scale labels - Changed to dark gray */}
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

          {/* Y-axis scale labels - Changed to dark gray */}
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

          {/* Original Triangle */}
          <polygon
            points={points
              .map((p) => `${p.x * cellSize + gridCount * cellSize / 2},${gridCount * cellSize / 2 - p.y * cellSize}`)
              .join(' ')}
            fill={PALETTE.mediumTeal}
            fillOpacity="0.6"
            stroke={PALETTE.mediumTeal} 
            strokeWidth="2"
          />

          {/* Translated Triangle (The "ghost" shape) */}
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

          {/* Translated Points Labels (follow the animation) */}
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
              A{i + 1}: ({p.x}, {p.y})
            </li>
          ))}
        </ul>

        {isTranslated && (
          <>
            <p className="font-semibold mt-3 mb-2" style={{ color: PALETTE.darkBlueGreen }}>Translated Vertices:</p>
            <ul className="list-disc list-inside space-y-1" style={{ color: PALETTE.darkBlueGreen }}>
              {translatedPoints.map((p, i) => (
                <li key={`info-trans-${i}`} className="font-mono">
                  A{i + 1}'({p.x}, {p.y})
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-3 border-t-2" style={{ borderColor: PALETTE.mediumTeal }}>
              <p className="font-semibold mb-2" style={{ color: PALETTE.darkBlueGreen }}>How Translation Works:</p>
              <p className="mb-2" style={{ color: PALETTE.darkBlueGreen }}>
                Each point (x, y) is moved by adding the vector components:
              </p>
              <ul className="list-disc list-inside space-y-1" style={{ color: PALETTE.darkBlueGreen }}>
                {points.map((p, i) => (
                  <li key={`process-${i}`} className="font-mono text-xs">
                    A{i + 1}({p.x}, {p.y}) → ({p.x} + {vector.x}, {p.y} + {vector.y}) = A{i + 1}'({translatedPoints[i].x}, {translatedPoints[i].y})
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TranslationVisualizer;
