/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { ArrowRight, Grid } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// --- Neubrutalism Styles & Colors with the new palette ---
const NEUBRUTALISM_COLORS = {
  white: '#fdfffc',       // Main background, text
  blue: '#235789',        // Primary container, vector v
  red: '#c1292e',         // Scaled vector, highlight, slider track
  yellow: '#e9c46a',      // Card backgrounds, grid lines
  black: '#020100',       // Borders, shadows, axes, primary text
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.black}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.black}5D`,
  padding: '1rem',
};

interface Vector {
  x: number;
  y: number;
}

const ScalarMultiplicationMagnitude: React.FC = () => {
  const [v, setV] = useState<Vector>({ x: 3, y: 4 });
  const [k, setK] = useState<number>(2);

  const handleVXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setV({ ...v, x: Number(e.target.value) });
  };

  const handleVYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setV({ ...v, y: Number(e.target.value) });
  };

  const handleKChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setK(Number(e.target.value));
  };

  const scale = 15;
  const originX = 100;
  const originY = 150;

  const scaledVector = { x: k * v.x, y: k * v.y };
  const magnitude = Math.sqrt(v.x ** 2 + v.y ** 2).toFixed(2);

  return (
    <div
      style={{
        ...neubrutalismBase,
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: NEUBRUTALISM_COLORS.blue,
        color: NEUBRUTALISM_COLORS.black,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.black}`,
      }}
    >
      <h1 className="text-2xl font-bold text-center mb-4 flex items-center justify-center" style={{ color: NEUBRUTALISM_COLORS.white }}>
        <ArrowRight className="w-6 h-6 mr-2" /> Scalar Multiplication and Magnitude
      </h1>

      {/* Interactive Visualization */}
      <section
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.white,
          borderColor: NEUBRUTALISM_COLORS.black,
          marginBottom: '1.5rem',
        }}
      >
        <h2 className="text-lg font-semibold mb-2 flex items-center" style={{ color: NEUBRUTALISM_COLORS.black }}>
          <Grid className="w-5 h-5 mr-2" style={{ color: NEUBRUTALISM_COLORS.black }} /> Interactive Visualization
        </h2>
        <p className="text-sm mb-2" style={{ color: NEUBRUTALISM_COLORS.black }}>
          Adjust the components of <InlineMath math="\vec{v}" /> (blue) and scalar <InlineMath math="k" /> to see the scaled vector{' '}
          <InlineMath math="k\vec{v}" /> (red) and magnitude <InlineMath math="|\vec{v}|" />.
        </p>

        {/* Vector and Magnitude Displays */}
        <div className="text-sm mb-2" style={{ color: NEUBRUTALISM_COLORS.black }}>
          <div className="flex items-center">
            <span className="mr-1" style={{ color: NEUBRUTALISM_COLORS.blue }}>
              <InlineMath math="\vec{v}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${v.x} \\\\ ${v.y} \\end{pmatrix}`} />
          </div>
          <div className="flex items-center">
            <span className="mr-1" style={{ color: NEUBRUTALISM_COLORS.red }}>
              <InlineMath math="k\vec{v}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${scaledVector.x.toFixed(2)} \\\\ ${scaledVector.y.toFixed(2)} \\end{pmatrix}`} />
          </div>
          <div className="flex items-center">
            <span className="mr-1" style={{ color: NEUBRUTALISM_COLORS.black }}>
              <InlineMath math="|\vec{v}|" />
            </span>
            = <InlineMath math={`${magnitude}`} />
          </div>
        </div>
      </section>

      <section
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.yellow,
          borderColor: NEUBRUTALISM_COLORS.black,
        }}
      >
        {/* SVG Visualization */}
        <div className="flex flex-col items-center">
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.white,
              borderColor: NEUBRUTALISM_COLORS.black,
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
              <line x1={100} y1={0} x2={100} y2={300} stroke={NEUBRUTALISM_COLORS.black} strokeWidth="2" />
              <line x1={0} y1={150} x2={200} y2={150} stroke={NEUBRUTALISM_COLORS.black} strokeWidth="2" />

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
                    fill={NEUBRUTALISM_COLORS.black}
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
                    fill={NEUBRUTALISM_COLORS.black}
                    textAnchor="middle"
                  >
                    {unit}
                  </text>
                );
              })}

              {/* Vector v */}
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

              {/* Scaled Vector k*v */}
              <line
                x1={originX}
                y1={originY}
                x2={originX + scaledVector.x * scale}
                y2={originY - scaledVector.y * scale}
                stroke={NEUBRUTALISM_COLORS.red}
                strokeWidth="3"
                markerEnd="url(#arrowhead-red)"
              />
              <text
                x={originX + scaledVector.x * scale / 2}
                y={originY - scaledVector.y * scale / 2 - 5}
                fill={NEUBRUTALISM_COLORS.red}
                fontSize="12"
              >
                k·v
              </text>

              <defs>
                <marker id="arrowhead-blue" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                  <polygon points="0 0, 8 2.5, 0 5" fill={NEUBRUTALISM_COLORS.blue} strokeWidth="2" />
                </marker>
                <marker id="arrowhead-red" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                  <polygon points="0 0, 8 2.5, 0 5" fill={NEUBRUTALISM_COLORS.red} strokeWidth="2" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Control Sliders */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.black }}>
              Scalar <InlineMath math="k" />: {k.toFixed(1)}
            </label>
            <input
              type="range"
              min="-3"
              max="3"
              step="0.1"
              value={k}
              onChange={handleKChange}
              className="w-full mb-4"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.red,
                outline: 'none',
                borderRadius: '4px',
              }}
            />

            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.black }}>
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

            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.black }}>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScalarMultiplicationMagnitude;
