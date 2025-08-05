/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { ArrowRight, Grid, } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// --- Neubrutalism Styles & Colors with the new palette ---
const NEUBRUTALISM_COLORS = {
  highlightRed: '#f06543',  // Vector line, button highlight
  lightGray: '#e8e9eb',     // Main background
  offWhite: '#e0dfd5',      // Card backgrounds, grid lines
  darkGray: '#313638',      // Borders, shadows, axes, text
  orange: '#f09d51',        // Inactive button background
  white: '#ffffff',
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.darkGray}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.darkGray}9d`,
  padding: '1rem',
};

interface Vector {
  x: number;
  y: number;
}

const PositionVectors: React.FC = () => {
  const [point, setPoint] = useState<Vector>({ x: 3, y: 4 });

  const handleXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoint({ ...point, x: Number(e.target.value) });
  };

  const handleYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoint({ ...point, y: Number(e.target.value) });
  };

  const scale = 20; // Pixels per unit for visualization
  const originX = 100;
  const originY = 100;

  // // Helper for styling buttons
  // const getButtonStyle = () => {
  //   return {
  //     ...neubrutalismBase,
  //     padding: '0.5rem 1rem',
  //     fontSize: '0.875rem', // text-sm
  //     fontWeight: 'bold',
  //     backgroundColor: NEUBRUTALISM_COLORS.orange,
  //     color: NEUBRUTALISM_COLORS.white,
  //     borderColor: NEUBRUTALISM_COLORS.darkGray,
  //     cursor: 'pointer',
  //     transition: 'all 0.2s',
  //   };
  // };

  return (
    <div
      style={{
        ...neubrutalismBase,
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: NEUBRUTALISM_COLORS.lightGray,
        color: NEUBRUTALISM_COLORS.darkGray,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.darkGray}`,
      }}
    >
      <h1 className="text-2xl font-bold text-center mb-4 flex items-center justify-center" style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
        <ArrowRight className="w-6 h-6 mr-2" /> Position Vectors
      </h1>

      {/* Interactive Visualization */}
      <section
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.offWhite,
          borderColor: NEUBRUTALISM_COLORS.darkGray,
          marginBottom: '1.5rem',
        }}
      >
        <h2 className="text-lg font-semibold mb-2 flex items-center" style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
          <Grid className="w-5 h-5 mr-2" style={{ color: NEUBRUTALISM_COLORS.darkGray }} /> Interactive Visualization
        </h2>
        <p className="text-sm mb-2" style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
          Adjust the coordinates of point <InlineMath math="A(x, y)" /> to see the position vector <InlineMath math="\vec{OA}" />.
          Current position vector: <BlockMath math={`\\vec{OA} = \\begin{pmatrix} ${point.x} \\\\ ${point.y} \\end{pmatrix}`} />
        </p>
        <div className="flex flex-col items-center">
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.lightGray,
              borderColor: NEUBRUTALISM_COLORS.darkGray,
              padding: '1rem',
              marginBottom: '1rem',
            }}
          >
            <svg width="200" height="200">
              {/* Grid lines */}
              <g stroke={NEUBRUTALISM_COLORS.offWhite} strokeWidth="1">
                {[...Array(11)].map((_, i) => {
                  const unit = i - 5;
                  return (
                    <React.Fragment key={i}>
                      <line x1={0} y1={originY + unit * scale} x2={200} y2={originY + unit * scale} />
                      <line x1={originX + unit * scale} y1={0} x2={originX + unit * scale} y2={200} />
                    </React.Fragment>
                  );
                })}
              </g>
              {/* Axes */}
              <line x1={100} y1={0} x2={100} y2={200} stroke={NEUBRUTALISM_COLORS.darkGray} strokeWidth="2" />
              <line x1={0} y1={100} x2={200} y2={100} stroke={NEUBRUTALISM_COLORS.darkGray} strokeWidth="2" />
              {/* X-Axis Labels */}
              {[...Array(11)].map((_, i) => {
                const unit = i - 5;
                if (unit === 0) return null; // Skip label at origin to avoid clutter
                return (
                  <text
                    key={i}
                    x={originX + unit * scale}
                    y={originY + 15}
                    fontSize="12"
                    fill={NEUBRUTALISM_COLORS.darkGray}
                    textAnchor="middle"
                  >
                    {unit}
                  </text>
                );
              })}
              {/* Y-Axis Labels */}
              {[...Array(11)].map((_, i) => {
                const unit = i - 5;
                if (unit === 0) return null; // Skip label at origin to avoid clutter
                return (
                  <text
                    key={i}
                    x={originX - 15}
                    y={originY - unit * scale + 4} // Adjust vertically for text alignment
                    fontSize="12"
                    fill={NEUBRUTALISM_COLORS.darkGray}
                    textAnchor="middle"
                  >
                    {unit}
                  </text>
                );
              })}
              {/* Position Vector */}
              <line
                x1={originX}
                y1={originY}
                x2={originX + point.x * scale}
                y2={originY - point.y * scale}
                stroke={NEUBRUTALISM_COLORS.highlightRed}
                strokeWidth="3"
                markerEnd="url(#arrowhead-highlightRed)"
              />
              <defs>
                <marker id="arrowhead-highlightRed" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill={NEUBRUTALISM_COLORS.highlightRed} />
                </marker>
              </defs>
            </svg>
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
              x-coordinate: {point.x}
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={point.x}
              onChange={handleXChange}
              className="w-full mb-4"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.orange,
                outline: 'none',
                borderRadius: '4px',
              }}
            />
            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
              y-coordinate: {point.y}
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={point.y}
              onChange={handleYChange}
              className="w-full mb-4"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.orange,
                outline: 'none',
                borderRadius: '4px',
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PositionVectors;
