/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { ArrowRight, Grid } from 'lucide-react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// --- Neubrutalism Styles & Colors ---
const NEUBRUTALISM_COLORS = {
  lightBlue: '#8ecae6',  // Main background, Card backgrounds
  blue: '#219ebc',       // Borders, Dark text, Axes
  darkBlue: '#023047',     // Shadow, Accents
  yellow: '#ffb703',     // Grid lines, Parallel vector
  orange: '#fb8500',     // Negative vector, Button highlight
  white: '#ffffff',
  
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.blue}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS}`,
  padding: '1rem',
};

interface Vector {
  x: number;
  y: number;
}

const VectorTypes: React.FC = () => {
  const [vector, setVector] = useState<Vector>({ x: 2, y: 3 });
  const [startPoint,] = useState<Vector>({ x: 1, y: 1 });
  const [displayMode, setDisplayMode] = useState<'all' | 'original-negative' | 'original-parallel' | 'original-equal'>('all');

  const handleVectorXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVector({ ...vector, x: Number(e.target.value) });
  };

  const handleVectorYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVector({ ...vector, y: Number(e.target.value) });
  };

  const scale = 20; // Pixels per unit for visualization
  const originX = 100;
  const originY = 100;

  const negativeVector = { x: -vector.x, y: -vector.y };
  const parallelVector = { x: vector.x * 2, y: vector.y * 2 };
  const equalVectorStart = { x: 3, y: 4 };

  // Helper for styling buttons
  const getButtonStyle = (isActive: boolean) => {
    return {
      ...neubrutalismBase,
      padding: '0.5rem 1rem',
      fontSize: '0.875rem', // text-sm
      fontWeight: 'bold',
      backgroundColor: isActive ? NEUBRUTALISM_COLORS.orange : NEUBRUTALISM_COLORS.lightBlue,
      color: isActive ? NEUBRUTALISM_COLORS.white : NEUBRUTALISM_COLORS.darkBlue,
      borderColor: NEUBRUTALISM_COLORS.blue,
      cursor: 'pointer',
      transition: 'all 0.2s',
      boxShadow: isActive ? `2px 2px 0px ${NEUBRUTALISM_COLORS.darkBlue}` : `4px 4px 0px ${NEUBRUTALISM_COLORS.darkBlue}`,
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
        backgroundColor: NEUBRUTALISM_COLORS.lightBlue,
        color: NEUBRUTALISM_COLORS.darkBlue,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.darkBlue}`,
      }}
    >
      <h1 className="text-2xl font-bold text-center mb-4 flex items-center justify-center" style={{ color: NEUBRUTALISM_COLORS.darkBlue }}>
        <ArrowRight className="w-6 h-6 mr-2" /> Vector Types
      </h1>

      {/* Interactive Visualization */}
      <section
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.white,
          borderColor: NEUBRUTALISM_COLORS.blue,
          marginBottom: '1.5rem',
        }}
      >
        <h2 className="text-lg font-semibold mb-2 flex items-center" style={{ color: NEUBRUTALISM_COLORS.blue }}>
          <Grid className="w-5 h-5 mr-2" style={{ color: NEUBRUTALISM_COLORS.blue }} /> Interactive Visualization
        </h2>
        <p className="text-sm mb-2" style={{ color: NEUBRUTALISM_COLORS.darkBlue }}>
          Adjust the start point to see how the translation and equal vectors move. Negative and parallel vectors are drawn from the origin.
        </p>
        <div className="text-sm mb-2" style={{ color: NEUBRUTALISM_COLORS.darkBlue }}>
          <div>Current vector: <BlockMath math={`\\vec{v} = \\begin{pmatrix} ${vector.x} \\\\ ${vector.y} \\end{pmatrix}`} /></div>
          {(displayMode === 'all' || displayMode === 'original-negative') && (<div style={{ color: NEUBRUTALISM_COLORS.orange }}>Negative: <BlockMath math={`-\\vec{v} = \\begin{pmatrix} ${negativeVector.x} \\\\ ${negativeVector.y} \\end{pmatrix}`} /></div>)}
          {(displayMode === 'all' || displayMode === 'original-parallel') && (<div style={{ color: NEUBRUTALISM_COLORS.yellow }} >Parallel (2x): <BlockMath math={`\\begin{pmatrix} ${parallelVector.x} \\\\ ${parallelVector.y} \\end{pmatrix}`} /></div>)}
          {(displayMode === 'all' || displayMode === 'original-equal') && (<div style={{ color: NEUBRUTALISM_COLORS.blue }}>Equal at (3,4): <BlockMath math={`\\vec{w} = \\begin{pmatrix} ${vector.x} \\\\ ${vector.y} \\end{pmatrix}`} /></div>)}
        </div>
      </section>

      {/* Control section */}
      <section
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.white,
          borderColor: NEUBRUTALISM_COLORS.blue,
        }}
      >
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            style={getButtonStyle(displayMode === 'all')}
            onClick={() => setDisplayMode('all')}
          >
            All Vectors
          </button>
          <button
            style={getButtonStyle(displayMode === 'original-negative')}
            onClick={() => setDisplayMode('original-negative')}
          >
            Original & Negative
          </button>
          <button
            style={getButtonStyle(displayMode === 'original-parallel')}
            onClick={() => setDisplayMode('original-parallel')}
          >
            Original & Parallel
          </button>
          <button
            style={getButtonStyle(displayMode === 'original-equal')}
            onClick={() => setDisplayMode('original-equal')}
          >
            Original & Equal
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.white,
              borderColor: NEUBRUTALISM_COLORS.blue,
              padding: '1rem',
              marginBottom: '1rem',
            }}
          >
            <svg width="200" height="200">
              {/* Grid lines */}
              <g stroke={NEUBRUTALISM_COLORS.darkBlue+"10"} strokeWidth="1">
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
              <line x1={100} y1={0} x2={100} y2={200} stroke={NEUBRUTALISM_COLORS.blue} strokeWidth="2" />
              <line x1={0} y1={100} x2={200} y2={100} stroke={NEUBRUTALISM_COLORS.blue} strokeWidth="2" />

              {/* X-Axis Labels */}
              {[...Array(11)].map((_, i) => {
                const unit = i - 5;
                if (unit === 0) return null;
                return (
                  <text
                    key={i}
                    x={originX + unit * scale}
                    y={originY + 15}
                    fontSize="12"
                    fill={NEUBRUTALISM_COLORS.blue}
                    textAnchor="middle"
                  >
                    {unit}
                  </text>
                );
              })}
              {/* Y-Axis Labels */}
              {[...Array(11)].map((_, i) => {
                const unit = i - 5;
                if (unit === 0) return null;
                return (
                  <text
                    key={i}
                    x={originX - 15}
                    y={originY - unit * scale + 4}
                    fontSize="12"
                    fill={NEUBRUTALISM_COLORS.blue}
                    textAnchor="middle"
                  >
                    {unit}
                  </text>
                );
              })}

              {/* Original Vector */}
              {(displayMode === 'all' || displayMode === 'original-negative' || displayMode === 'original-parallel' || displayMode === 'original-equal') && (
                <line
                  x1={originX + startPoint.x * scale}
                  y1={originY - startPoint.y * scale}
                  x2={originX + (startPoint.x + vector.x) * scale}
                  y2={originY - (startPoint.y + vector.y) * scale}
                  stroke={NEUBRUTALISM_COLORS.blue}
                  strokeWidth="3"
                  markerEnd="url(#arrowhead-blue)"
                />
              )}
              {/* Negative Vector */}
              {(displayMode === 'all' || displayMode === 'original-negative') && (
                <line
                  x1={originX}
                  y1={originY}
                  x2={originX + negativeVector.x * scale}
                  y2={originY - negativeVector.y * scale}
                  stroke={NEUBRUTALISM_COLORS.orange}
                  strokeWidth="3"
                  markerEnd="url(#arrowhead-orange)"
                />
              )}
              {/* Parallel Vector */}
              {(displayMode === 'all' || displayMode === 'original-parallel') && (
                <line
                  x1={originX}
                  y1={originY}
                  x2={originX + parallelVector.x * scale}
                  y2={originY - parallelVector.y * scale}
                  stroke={NEUBRUTALISM_COLORS.yellow}
                  strokeWidth="3"
                  markerEnd="url(#arrowhead-yellow)"
                />
              )}
              {/* Equal Vector */}
              {(displayMode === 'all' || displayMode === 'original-equal') && (
                <line
                  x1={originX + equalVectorStart.x * scale}
                  y1={originY - equalVectorStart.y * scale}
                  x2={originX + (equalVectorStart.x + vector.x) * scale}
                  y2={originY - (equalVectorStart.y + vector.y) * scale}
                  stroke={NEUBRUTALISM_COLORS.blue}
                  strokeWidth="3"
                  markerEnd="url(#arrowhead-blue)"
                />
              )}
              <defs>
                <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill={NEUBRUTALISM_COLORS.blue} />
                </marker>
                <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill={NEUBRUTALISM_COLORS.orange} />
                </marker>
                <marker id="arrowhead-yellow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill={NEUBRUTALISM_COLORS.yellow} />
                </marker>
              </defs>
            </svg>
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.darkBlue }}>
              Vector x-component: {vector.x}
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={vector.x}
              onChange={handleVectorXChange}
              className="w-full mb-4"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.blue,
                outline: 'none',
                borderRadius: '4px',
              }}
            />
            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.darkBlue }}>
              Vector y-component: {vector.y}
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={vector.y}
              onChange={handleVectorYChange}
              className="w-full mb-4"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.blue,
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

export default VectorTypes;
