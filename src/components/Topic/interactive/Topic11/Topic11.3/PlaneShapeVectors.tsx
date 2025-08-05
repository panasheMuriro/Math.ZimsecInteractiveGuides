/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { ArrowRight, Grid } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// --- Neubrutalism Styles & Colors with the new palette ---
const NEUBRUTALISM_COLORS = {
  darkBlue: '#1d3557',    // Borders, shadows, axes, text
  red: '#e63946',         // Main background, vector w
  midBlue: '#457b9d',     // Scaled vector, slider track, highlight
  lightCyan: '#2a9d8f',   // Sum vector, active button
  lightest: '#f1faee',    // Card backgrounds, vector v, grid lines
  white: '#ffffff',       // Text on dark backgrounds
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.darkBlue}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.darkBlue}5d`,
  padding: '1rem',
};

interface Vector {
  x: number;
  y: number;
}

const PlaneShapeVectors: React.FC = () => {
  const [v, setV] = useState<Vector>({ x: 4, y: 1 });
  const [w, setW] = useState<Vector>({ x: 1, y: 4 });
  const [k, setK] = useState<number>(1);

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

  const handleKChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setK(Number(e.target.value));
  };

  const scale = 15;
  const originX = 100;
  const originY = 150;

  const diagonal = { x: v.x + w.x, y: v.y + w.y };
  const kv = { x: k * v.x, y: k * v.y };
  const magnitudeV = Math.sqrt(v.x ** 2 + v.y ** 2).toFixed(2);
  const magnitudeW = Math.sqrt(w.x ** 2 + w.y ** 2).toFixed(2);
  const ratioVW = magnitudeW === '0.00' ? 'undefined' : (Number(magnitudeV) / Number(magnitudeW)).toFixed(2);
  const isEqual = Math.abs(k * v.x - w.x) < 0.01 && Math.abs(k * v.y - w.y) < 0.01;

  return (
    <div
      style={{
        ...neubrutalismBase,
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: NEUBRUTALISM_COLORS.red,
        color: NEUBRUTALISM_COLORS.white,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.darkBlue}`,
      }}
    >
      <h1 className="text-2xl font-bold text-center mb-4 flex items-center justify-center" style={{ color: NEUBRUTALISM_COLORS.white }}>
        <ArrowRight className="w-6 h-6 mr-2" /> Vector Properties of Plane Shapes
      </h1>

      {/* Interactive Visualization */}
      <section
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.lightest,
          borderColor: NEUBRUTALISM_COLORS.darkBlue,
          marginBottom: '1.5rem',
        }}
      >
        <h2 className="text-lg font-semibold mb-2 flex items-center" style={{ color: NEUBRUTALISM_COLORS.darkBlue }}>
          <Grid className="w-5 h-5 mr-2" style={{ color: NEUBRUTALISM_COLORS.darkBlue }} /> Interactive Visualization
        </h2>
        <p className="text-sm mb-2" style={{ color: NEUBRUTALISM_COLORS.darkBlue }}>
          Adjust vectors <InlineMath math="\vec{v}" /> (lightest, OA) and <InlineMath math="\vec{w}" /> (red, OC) to form parallelogram OABC. See diagonal{' '}
          <InlineMath math="\vec{v} + \vec{w}" /> (light cyan, OB) and scaled vector <InlineMath math="k\vec{v}" /> (mid-blue). Check if{' '}
          <InlineMath math="k\vec{v} = \vec{w}" /> and view the ratio of parallel edges.
        </p>

        {/* Vector and Properties Displays */}
        <div className="text-sm mb-2" style={{ color: NEUBRUTALISM_COLORS.darkBlue }}>
          <div className="flex items-center">
            <span className="mr-1" style={{ color: NEUBRUTALISM_COLORS.darkBlue }}>
              <InlineMath math="\vec{v} = \overrightarrow{OA}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${v.x.toFixed(1)} \\\\ ${v.y.toFixed(1)} \\end{pmatrix}`} />
          </div>
          <div className="flex items-center">
            <span className="mr-1" style={{ color: NEUBRUTALISM_COLORS.red }}>
              <InlineMath math="\vec{w} = \overrightarrow{OC}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${w.x.toFixed(1)} \\\\ ${w.y.toFixed(1)} \\end{pmatrix}`} />
          </div>
          <div className="flex items-center">
            <span className="mr-1" style={{ color: NEUBRUTALISM_COLORS.lightCyan }}>
              <InlineMath math="\vec{v} + \vec{w} = \overrightarrow{OB}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${diagonal.x.toFixed(1)} \\\\ ${diagonal.y.toFixed(1)} \\end{pmatrix}`} />
          </div>
          <div className="flex items-center">
            <span className="mr-1" style={{ color: NEUBRUTALISM_COLORS.midBlue }}>
              <InlineMath math="k\vec{v}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${kv.x.toFixed(1)} \\\\ ${kv.y.toFixed(1)} \\end{pmatrix}`} />
            {isEqual ? (
              <span className="ml-2" style={{ color: NEUBRUTALISM_COLORS.lightCyan }}>= <InlineMath math="\vec{w}" /></span>
            ) : (
              <span className="ml-2" style={{ color: NEUBRUTALISM_COLORS.midBlue }}>≠ <InlineMath math="\vec{w}" /></span>
            )}
          </div>
          <div className="flex items-center">
            <span className="mr-1" style={{ color: NEUBRUTALISM_COLORS.darkBlue }}>
              Ratio <InlineMath math="|\vec{v}| : |\vec{w}|" />
            </span>
            = <InlineMath math={`${magnitudeV} : ${magnitudeW} ${ratioVW !== 'undefined' ? `= ${ratioVW} : 1` : ''}`} />
          </div>
        </div>
      </section>

      <section
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.lightest,
          borderColor: NEUBRUTALISM_COLORS.darkBlue,
        }}
      >
        {/* SVG Visualization */}
        <div className="flex flex-col items-center">
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.white,
              borderColor: NEUBRUTALISM_COLORS.darkBlue,
              padding: '1rem',
              marginBottom: '1rem',
            }}
          >
            <svg width="200" height="300">
              {/* Grid lines */}
              <g stroke={NEUBRUTALISM_COLORS.lightest} strokeWidth="1">
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
              <line x1={100} y1={0} x2={100} y2={300} stroke={NEUBRUTALISM_COLORS.darkBlue} strokeWidth="2" />
              <line x1={0} y1={150} x2={200} y2={150} stroke={NEUBRUTALISM_COLORS.darkBlue} strokeWidth="2" />

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
                    fill={NEUBRUTALISM_COLORS.darkBlue}
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
                    fill={NEUBRUTALISM_COLORS.darkBlue}
                    textAnchor="middle"
                  >
                    {unit}
                  </text>
                );
              })}

              {/* Parallelogram Edges */}
              {/* OA = v */}
              <line
                x1={originX}
                y1={originY}
                x2={originX + v.x * scale}
                y2={originY - v.y * scale}
                stroke={NEUBRUTALISM_COLORS.lightest}
                strokeWidth="2"
                markerEnd="url(#arrowhead-lightest)"
              />
              <text x={originX + v.x * scale / 2} y={originY - v.y * scale / 2 - 5} fill={NEUBRUTALISM_COLORS.lightest} fontSize="12">
                v
              </text>

              {/* OC = w */}
              <line
                x1={originX}
                y1={originY}
                x2={originX + w.x * scale}
                y2={originY - w.y * scale}
                stroke={NEUBRUTALISM_COLORS.red}
                strokeWidth="2"
                markerEnd="url(#arrowhead-red)"
              />
              <text x={originX + w.x * scale / 2} y={originY - w.y * scale / 2 - 5} fill={NEUBRUTALISM_COLORS.red} fontSize="12">
                w
              </text>

              {/* AB = w */}
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

              {/* BC = v */}
              <line
                x1={originX + w.x * scale}
                y1={originY - w.y * scale}
                x2={originX + (v.x + w.x) * scale}
                y2={originY - (v.y + w.y) * scale}
                stroke={NEUBRUTALISM_COLORS.lightest}
                strokeWidth="2"
                markerEnd="url(#arrowhead-lightest)"
              />
              <text
                x={originX + w.x * scale + v.x * scale / 2}
                y={originY - w.y * scale - v.y * scale / 2 - 5}
                fill={NEUBRUTALISM_COLORS.lightest}
                fontSize="12"
              >
                v
              </text>

              {/* Diagonal OB = v + w */}
              <line
                x1={originX}
                y1={originY}
                x2={originX + diagonal.x * scale}
                y2={originY - diagonal.y * scale}
                stroke={NEUBRUTALISM_COLORS.lightCyan}
                strokeWidth="3"
                markerEnd="url(#arrowhead-lightCyan)"
              />
              <text
                x={originX + diagonal.x * scale / 2}
                y={originY - diagonal.y * scale / 2 - 5}
                fill={NEUBRUTALISM_COLORS.lightCyan}
                fontSize="12"
              >
                v+w
              </text>

              {/* Scaled Vector k*v */}
              <line
                x1={originX}
                y1={originY}
                x2={originX + kv.x * scale}
                y2={originY - kv.y * scale}
                stroke={NEUBRUTALISM_COLORS.midBlue}
                strokeWidth="2"
                markerEnd="url(#arrowhead-midBlue)"
              />
              <text x={originX + kv.x * scale / 2} y={originY - kv.y * scale / 2 - 5} fill={NEUBRUTALISM_COLORS.midBlue} fontSize="12">
                k·v
              </text>

              {/* Points O, A, B, C */}
              <circle cx={originX} cy={originY} r="3" fill={NEUBRUTALISM_COLORS.darkBlue} />
              <text x={originX - 10} y={originY + 10} fontSize="12" fill={NEUBRUTALISM_COLORS.darkBlue}>
                O
              </text>
              <circle cx={originX + v.x * scale} cy={originY - v.y * scale} r="3" fill={NEUBRUTALISM_COLORS.darkBlue} />
              <text x={originX + v.x * scale + 10} y={originY - v.y * scale + 10} fontSize="12" fill={NEUBRUTALISM_COLORS.darkBlue}>
                A
              </text>
              <circle cx={originX + (v.x + w.x) * scale} cy={originY - (v.y + w.y) * scale} r="3" fill={NEUBRUTALISM_COLORS.darkBlue} />
              <text x={originX + (v.x + w.x) * scale + 10} y={originY - (v.y + w.y) * scale + 10} fontSize="12" fill={NEUBRUTALISM_COLORS.darkBlue}>
                B
              </text>
              <circle cx={originX + w.x * scale} cy={originY - w.y * scale} r="3" fill={NEUBRUTALISM_COLORS.darkBlue} />
              <text x={originX + w.x * scale + 10} y={originY - w.y * scale + 10} fontSize="12" fill={NEUBRUTALISM_COLORS.darkBlue}>
                C
              </text>

              <defs>
                <marker id="arrowhead-lightest" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                  <polygon points="0 0, 8 2.5, 0 5" fill={NEUBRUTALISM_COLORS.lightest} strokeWidth="2" />
                </marker>
                <marker id="arrowhead-red" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                  <polygon points="0 0, 8 2.5, 0 5" fill={NEUBRUTALISM_COLORS.red} strokeWidth="2" />
                </marker>
                <marker id="arrowhead-lightCyan" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                  <polygon points="0 0, 8 2.5, 0 5" fill={NEUBRUTALISM_COLORS.lightCyan} strokeWidth="2" />
                </marker>
                <marker id="arrowhead-midBlue" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                  <polygon points="0 0, 8 2.5, 0 5" fill={NEUBRUTALISM_COLORS.midBlue} strokeWidth="2" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Control Sliders */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.darkBlue }}>
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
                background: NEUBRUTALISM_COLORS.midBlue,
                outline: 'none',
                borderRadius: '4px',
              }}
            />
            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.darkBlue }}>
              <InlineMath math="\vec{v}" /> x-component: {v.x.toFixed(1)}
            </label>
            <input
              type="range"
              min="-3"
              max="3"
              step="0.1"
              value={v.x}
              onChange={handleVXChange}
              className="w-full mb-4"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.midBlue,
                outline: 'none',
                borderRadius: '4px',
              }}
            />
            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.darkBlue }}>
              <InlineMath math="\vec{v}" /> y-component: {v.y.toFixed(1)}
            </label>
            <input
              type="range"
              min="-3"
              max="3"
              step="0.1"
              value={v.y}
              onChange={handleVYChange}
              className="w-full mb-4"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.midBlue,
                outline: 'none',
                borderRadius: '4px',
              }}
            />
            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.darkBlue }}>
              <InlineMath math="\vec{w}" /> x-component: {w.x.toFixed(1)}
            </label>
            <input
              type="range"
              min="-3"
              max="3"
              step="0.1"
              value={w.x}
              onChange={handleWXChange}
              className="w-full mb-4"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.midBlue,
                outline: 'none',
                borderRadius: '4px',
              }}
            />
            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.darkBlue }}>
              <InlineMath math="\vec{w}" /> y-component: {w.y.toFixed(1)}
            </label>
            <input
              type="range"
              min="-3"
              max="3"
              step="0.1"
              value={w.y}
              onChange={handleWYChange}
              className="w-full mb-4"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.midBlue,
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

export default PlaneShapeVectors;
