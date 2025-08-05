/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { ArrowRight, Grid } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// --- Neubrutalism Styles & Colors ---
const NEUBRUTALISM_COLORS = {
  orange: '#ff6b35',     // Main background, Accents
  yellow: '#f7c59f',     // Accents, Highlights
  cream: '#efefd0',      // Background, Cards
  slate: '#004e89',      // Text, Lines, Borders
  teal: '#1a659e',       // Highlights, Vector Color
  white: '#ffffff',
  shadow: 'rgba(0, 78, 137, 0.3)', // slate with opacity for shadow
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.slate}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadow}`,
  padding: '1rem',
};
// --- End Neubrutalism Styles ---

interface Vector {
  x: number;
  y: number;
}

const VectorNotation: React.FC = () => {
  const [vector, setVector] = useState<Vector>({ x: 2, y: 3 });

  const handleXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVector({ ...vector, x: Number(e.target.value) });
  };

  const handleYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVector({ ...vector, y: Number(e.target.value) });
  };

  const scale = 20; // Pixels per unit for visualization
  const originX = 100;
  const originY = 100;

  return (
    <div
      style={{
        ...neubrutalismBase,
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: NEUBRUTALISM_COLORS.orange,
        color: NEUBRUTALISM_COLORS.slate,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.slate}`,
      }}
    >
      <h1 className="text-2xl font-bold text-center mb-4 text-white mt-3 flex items-center justify-center">
        <ArrowRight className="w-6 h-6 mr-2" /> Vector Notation
      </h1>

      {/* Interactive Vector Representation */}
      <section
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.cream,
          borderColor: NEUBRUTALISM_COLORS.slate,
          marginBottom: '1.5rem',
        }}
      >
        <h2 className="text-lg font-semibold mb-2 flex items-center" style={{ color: NEUBRUTALISM_COLORS.slate }}>
          <Grid className="w-5 h-5 mr-2" style={{ color: NEUBRUTALISM_COLORS.teal }} /> Vector Representation
        </h2>
        <p className="text-sm mb-2">
          On a Cartesian plane, draw an arrow from (0,0) to (<InlineMath math="x" />,<InlineMath math="y" />).
          Current vector: <BlockMath math={`\\vec{v} = \\begin{pmatrix} ${vector.x} \\\\ ${vector.y} \\end{pmatrix}`} />
        </p>
        <div className="flex flex-col items-center">
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.white,
              borderColor: NEUBRUTALISM_COLORS.slate,
              padding: '1rem',
              marginBottom: '1rem',
            }}
          >
            <svg width="200" height="200" className="bg-white">
              {/* Grid lines */}
              <g stroke={NEUBRUTALISM_COLORS.yellow} strokeWidth="1">
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
              <line x1={100} y1={0} x2={100} y2={200} stroke={NEUBRUTALISM_COLORS.slate} strokeWidth="2" />
              <line x1={0} y1={100} x2={200} y2={100} stroke={NEUBRUTALISM_COLORS.slate} strokeWidth="2" />
              {/* Vector */}
              <line
                x1={originX}
                y1={originY}
                x2={originX + vector.x * scale}
                y2={originY - vector.y * scale}
                stroke={NEUBRUTALISM_COLORS.teal}
                strokeWidth="3"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill={NEUBRUTALISM_COLORS.teal} />
                </marker>
              </defs>
            </svg>
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.slate }}>
              x-component: {vector.x}
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={vector.x}
              onChange={handleXChange}
              className="w-full mb-4"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.teal,
                outline: 'none',
                borderRadius: '4px',
              }}
            />
            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.slate }}>
              y-component: {vector.y}
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={vector.y}
              onChange={handleYChange}
              className="w-full"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.teal,
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

export default VectorNotation;
