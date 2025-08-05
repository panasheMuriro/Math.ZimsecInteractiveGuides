/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { ArrowRight, Grid } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// --- Neubrutalism Styles & Colors ---
const NEUBRUTALISM_COLORS = {
  darkGray: '#151515',    // Borders, shadows, axes, text
  red: '#a63d40',       // Highlight, negative vector, active button
  yellow: '#e9b872',    // Card backgrounds, grid lines
  green: '#1b998b',     // Sum/difference vector
  blue: '#6494aa',      // Main background, vector v
  white: '#ffffff',
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.darkGray}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.darkGray}5D`,
  padding: '1rem',
};

interface Vector {
  x: number;
  y: number;
}

const VectorAddSubtract: React.FC = () => {
  const [v, setV] = useState<Vector>({ x: 4, y: 2 });
  const [w, setW] = useState<Vector>({ x: 1, y: 4 });
  const [displayMode, setDisplayMode] = useState<'addition' | 'subtraction' | 'both'>('addition');

  const handleVXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setV({ ...v, x: Number(e.target.value) });
  };

  const handleVYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setV({ ...v, y: Number(e.target.value) });
  };

  const handleWXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setW({ ...w, x: Number(e.target.value) });
  };

  const handleWYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setW({ ...w, y: Number(e.target.value) });
  };

  const scale = 15;
  const originX = 100;
  const originY = 150;

  const sumVector = { x: v.x + w.x, y: v.y + w.y };
  const diffVector = { x: v.x - w.x, y: v.y - w.y };
  const negW = { x: -w.x, y: -w.y };

  // Helper for styling buttons
  const getButtonStyle = (isActive: boolean) => {
    return {
      ...neubrutalismBase,
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      backgroundColor: isActive ? NEUBRUTALISM_COLORS.red : NEUBRUTALISM_COLORS.yellow,
      color:isActive ? NEUBRUTALISM_COLORS.white:  NEUBRUTALISM_COLORS.darkGray,
      borderColor: NEUBRUTALISM_COLORS.darkGray,
      cursor: 'pointer',
      transition: 'all 0.2s',
      boxShadow: isActive ? `2px 2px 0px ${NEUBRUTALISM_COLORS.darkGray}` : `4px 4px 0px ${NEUBRUTALISM_COLORS.darkGray}`,
    };
  };

  return (
    <div
      style={{
        ...neubrutalismBase,
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: NEUBRUTALISM_COLORS.blue,
        color: NEUBRUTALISM_COLORS.darkGray,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.darkGray}`,
      }}
    >
      <h1 className="text-2xl font-bold text-center mb-4 flex items-center justify-center" style={{ color: NEUBRUTALISM_COLORS.white }}>
        <ArrowRight className="w-6 h-6 mr-2" /> Vector Addition and Subtraction
      </h1>

      {/* Interactive Visualization */}
      <section
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.white,
          borderColor: NEUBRUTALISM_COLORS.darkGray,
          marginBottom: '1.5rem',
        }}
      >
        <h2 className="text-lg font-semibold mb-2 flex items-center" style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
          <Grid className="w-5 h-5 mr-2" style={{ color: NEUBRUTALISM_COLORS.darkGray }} /> Interactive Visualization
        </h2>
        <p className="text-sm mb-2" style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
          Adjust the components of <InlineMath math="\vec{v}" /> (blue) and <InlineMath math="\vec{w}" /> (red) to see addition (green) and subtraction (green, with{' '}
          <InlineMath math="-\vec{w}" /> in red).
        </p>

        {/* Vector Displays */}
        <div className="text-sm mb-2" style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
          <div className="flex items-center">
            <span className="mr-1" style={{ color: NEUBRUTALISM_COLORS.blue }}>
              <InlineMath math="\vec{v}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${v.x} \\\\ ${v.y} \\end{pmatrix}`} />
          </div>
          <div className="flex items-center">
            <span className="mr-1" style={{ color: NEUBRUTALISM_COLORS.red }}>
              <InlineMath math="\vec{w}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${w.x} \\\\ ${w.y} \\end{pmatrix}`} />
          </div>
          {(displayMode === 'addition' || displayMode === 'both') && (
            <div className="flex items-center">
              <span className="mr-1" style={{ color: NEUBRUTALISM_COLORS.green }}>
                <InlineMath math="\vec{v} + \vec{w}" />
              </span>
              : <BlockMath math={`\\begin{pmatrix} ${sumVector.x} \\\\ ${sumVector.y} \\end{pmatrix}`} />
            </div>
          )}
          {(displayMode === 'subtraction' || displayMode === 'both') && (
            <>
              <div className="flex items-center">
                <span className="mr-1" style={{ color: NEUBRUTALISM_COLORS.red }}>
                  <InlineMath math="-\vec{w}" />
                </span>
                : <BlockMath math={`\\begin{pmatrix} ${negW.x} \\\\ ${negW.y} \\end{pmatrix}`} />
              </div>
              <div className="flex items-center">
                <span className="mr-1" style={{ color: NEUBRUTALISM_COLORS.green }}>
                  <InlineMath math="\vec{v} - \vec{w}" />
                </span>
                : <BlockMath math={`\\begin{pmatrix} ${diffVector.x} \\\\ ${diffVector.y} \\end{pmatrix}`} />
              </div>
            </>
          )}
        </div>
      </section>

      <section
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.yellow,
          borderColor: NEUBRUTALISM_COLORS.darkGray,
        }}
      >
        {/* Display Mode Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            style={getButtonStyle(displayMode === 'addition')}
            onClick={() => setDisplayMode('addition')}
          >
            See Addition
          </button>
          <button
            style={getButtonStyle(displayMode === 'subtraction')}
            onClick={() => setDisplayMode('subtraction')}
          >
            See Subtraction
          </button>
        </div>

        {/* SVG Visualization */}
        <div className="flex flex-col items-center">
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.white,
              borderColor: NEUBRUTALISM_COLORS.darkGray,
              padding: '1rem',
              marginBottom: '1rem',
            }}
          >
            <svg width="200" height="300">
              {/* Grid lines */}
              <g stroke={NEUBRUTALISM_COLORS.yellow} strokeWidth="1">
                {[...Array(21)].map((_, i) => {
                  const unit = i - 10;
                  return (
                    <React.Fragment key={i}>
                      <line x1={0} y1={originY + unit * scale} x2={200} y2={originY + unit * scale} />
                      <line x1={originX + unit * scale} y1={0} x2={originX + unit * scale} y2={300} />
                    </React.Fragment>
                  );
                })}
              </g>

              {/* Axes */}
              <line x1={100} y1={0} x2={100} y2={300} stroke={NEUBRUTALISM_COLORS.darkGray} strokeWidth="2" />
              <line x1={0} y1={150} x2={200} y2={150} stroke={NEUBRUTALISM_COLORS.darkGray} strokeWidth="2" />

              {/* X-Axis Labels */}
              {[...Array(21)].map((_, i) => {
                const unit = i - 10;
                if (unit === 0) return null;
                return (
                  <text
                    key={`x-${i}`}
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
              {[...Array(21)].map((_, i) => {
                const unit = i - 10;
                if (unit === 0) return null;
                return (
                  <text
                    key={`y-${i}`}
                    x={originX - 15}
                    y={originY - unit * scale + 4}
                    fontSize="12"
                    fill={NEUBRUTALISM_COLORS.darkGray}
                    textAnchor="middle"
                  >
                    {unit}
                  </text>
                );
              })}

              {/* Vector v (always visible) */}
              <line
                x1={originX}
                y1={originY}
                x2={originX + v.x * scale}
                y2={originY - v.y * scale}
                stroke={NEUBRUTALISM_COLORS.blue}
                strokeWidth="2"
                markerEnd="url(#arrowhead-blue)"
              />
              <text x={originX + v.x * scale / 2} y={originY - v.y * scale / 2 - 5} fill={NEUBRUTALISM_COLORS.blue} fontSize="12">
                v
              </text>

              {/* Vector w (for addition) */}
              {(displayMode === 'addition' || displayMode === 'both') && (
                <>
                  <line
                    x1={originX + v.x * scale}
                    y1={originY - v.y * scale}
                    x2={originX + (v.x + w.x) * scale}
                    y2={originY - (v.y + w.y) * scale}
                    stroke={NEUBRUTALISM_COLORS.red}
                    strokeWidth="2"
                    markerEnd="url(#arrowhead-red)"
                  />
                  <text
                    x={originX + v.x * scale + w.x * scale / 2}
                    y={originY - v.y * scale - w.y * scale / 2 - 5}
                    fill={NEUBRUTALISM_COLORS.red}
                    fontSize="12"
                  >
                    w
                  </text>
                </>
              )}

              {/* Vector w (for subtraction) */}
              {(displayMode === 'subtraction' || displayMode === 'both') && (
                <>
                  <line
                    x1={originX}
                    y1={originY}
                    x2={originX + w.x * scale}
                    y2={originY - w.y * scale}
                    stroke={NEUBRUTALISM_COLORS.red}
                    strokeWidth="2"
                    markerEnd="url(#arrowhead-red)"
                  />
                  <text
                    x={originX + w.x * scale / 2}
                    y={originY - w.y * scale / 2 - 5}
                    fill={NEUBRUTALISM_COLORS.red}
                    fontSize="12"
                  >
                    w
                  </text>
                </>
              )}

              {/* Negative Vector w */}
              {(displayMode === 'subtraction' || displayMode === 'both') && (
                <>
                  <line
                    x1={originX}
                    y1={originY}
                    x2={originX + negW.x * scale}
                    y2={originY - negW.y * scale}
                    stroke={NEUBRUTALISM_COLORS.red}
                    strokeWidth="2"
                    markerEnd="url(#arrowhead-red)"
                  />
                  <text
                    x={originX + negW.x * scale / 2}
                    y={originY - negW.y * scale / 2 - 5}
                    fill={NEUBRUTALISM_COLORS.red}
                    fontSize="12"
                  >
                    -w
                  </text>
                </>
              )}

              {/* Sum Vector */}
              {(displayMode === 'addition' || displayMode === 'both') && (
                <>
                  <line
                    x1={originX}
                    y1={originY}
                    x2={originX + sumVector.x * scale}
                    y2={originY - sumVector.y * scale}
                    stroke={NEUBRUTALISM_COLORS.green}
                    strokeWidth="3"
                    markerEnd="url(#arrowhead-green)"
                  />
                  <text
                    x={originX + sumVector.x * scale / 2}
                    y={originY - sumVector.y * scale / 2 - 5}
                    fill={NEUBRUTALISM_COLORS.green}
                    fontSize="12"
                  >
                    v+w
                  </text>
                </>
              )}

              {/* Difference Vector */}
              {(displayMode === 'subtraction' || displayMode === 'both') && (
                <>
                  <line
                    x1={originX + w.x * scale}
                    y1={originY - w.y * scale}
                    x2={originX + v.x * scale}
                    y2={originY - v.y * scale}
                    stroke={NEUBRUTALISM_COLORS.green}
                    strokeWidth="3"
                    markerEnd="url(#arrowhead-green)"
                  />
                  <text
                    x={originX + w.x * scale + (v.x - w.x) * scale / 2}
                    y={originY - w.y * scale - (v.y - w.y) * scale / 2 - 5}
                    fill={NEUBRUTALISM_COLORS.green}
                    fontSize="12"
                  >
                    v-w
                  </text>
                </>
              )}

              <defs>
                <marker id="arrowhead-blue" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                  <polygon points="0 0, 8 2.5, 0 5" fill={NEUBRUTALISM_COLORS.blue} strokeWidth="2" />
                </marker>
                <marker id="arrowhead-red" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                  <polygon points="0 0, 8 2.5, 0 5" fill={NEUBRUTALISM_COLORS.red} strokeWidth="2" />
                </marker>
                <marker id="arrowhead-green" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                  <polygon points="0 0, 8 2.5, 0 5" fill={NEUBRUTALISM_COLORS.green} strokeWidth="2" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Control Sliders */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
              <InlineMath math="\vec{v}" /> x-component: {v.x}
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={v.x}
              onChange={handleVXChange}
              className="w-full mb-4"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.red,
                outline: 'none',
                borderRadius: '4px',
              }}
            />

            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
              <InlineMath math="\vec{v}" /> y-component: {v.y}
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={v.y}
              onChange={handleVYChange}
              className="w-full mb-4"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.red,
                outline: 'none',
                borderRadius: '4px',
              }}
            />

            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
              <InlineMath math="\vec{w}" /> x-component: {w.x}
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={w.x}
              onChange={handleWXChange}
              className="w-full mb-4"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.red,
                outline: 'none',
                borderRadius: '4px',
              }}
            />

            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
              <InlineMath math="\vec{w}" /> y-component: {w.y}
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={w.y}
              onChange={handleWYChange}
              className="w-full"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.red,
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

export default VectorAddSubtract;
