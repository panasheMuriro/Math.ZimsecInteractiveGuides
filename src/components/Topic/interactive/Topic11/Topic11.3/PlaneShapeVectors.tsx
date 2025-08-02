
import React, { useState } from 'react';
import { ArrowRight, Grid } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

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
    <div className="max-w-md mx-auto p-4 bg-gradient-to-br from-slate-400 to-slate-800 rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-4 text-white flex items-center justify-center">
        <ArrowRight className="w-6 h-6 mr-2" /> Vector Properties of Plane Shapes
      </h1>

      {/* Interactive Visualization */}
      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          <Grid className="w-5 h-5 mr-2 text-blue-600" /> Interactive Visualization
        </h2>
        <p className="text-sm text-gray-700 mb-2">
          Adjust vectors <InlineMath math="\vec{v}" /> (blue, OA) and <InlineMath math="\vec{w}" /> (purple, OC) to form parallelogram OABC. See diagonal{' '}
          <InlineMath math="\vec{v} + \vec{w}" /> (green, OB) and scaled vector <InlineMath math="k\vec{v}" /> (red). Check if{' '}
          <InlineMath math="k\vec{v} = \vec{w}" /> and view the ratio of parallel edges.
        </p>

        {/* Vector and Properties Displays */}
        <div className="text-sm text-gray-700 mb-2">
          <div className="flex items-center">
            <span className="text-blue-500 mr-1">
              <InlineMath math="\vec{v} = \overrightarrow{OA}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${v.x.toFixed(1)} \\\\ ${v.y.toFixed(1)} \\end{pmatrix}`} />
          </div>
          <div className="flex items-center">
            <span className="text-purple-500 mr-1">
              <InlineMath math="\vec{w} = \overrightarrow{OC}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${w.x.toFixed(1)} \\\\ ${w.y.toFixed(1)} \\end{pmatrix}`} />
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-1">
              <InlineMath math="\vec{v} + \vec{w} = \overrightarrow{OB}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${diagonal.x.toFixed(1)} \\\\ ${diagonal.y.toFixed(1)} \\end{pmatrix}`} />
          </div>
          <div className="flex items-center">
            <span className="text-red-500 mr-1">
              <InlineMath math="k\vec{v}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${kv.x.toFixed(1)} \\\\ ${kv.y.toFixed(1)} \\end{pmatrix}`} />
            {isEqual ? (
              <span className="text-green-600 ml-2">= <InlineMath math="\vec{w}" /></span>
            ) : (
              <span className="text-red-600 ml-2">≠ <InlineMath math="\vec{w}" /></span>
            )}
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 mr-1">
              Ratio <InlineMath math="|\vec{v}| : |\vec{w}|" />
            </span>
            = <InlineMath math={`${magnitudeV} : ${magnitudeW} ${ratioVW !== 'undefined' ? `= ${ratioVW} : 1` : ''}`} />
          </div>
        </div>

      </section>


         <section className="mb-6 bg-white p-4 rounded-lg shadow">

        {/* SVG Visualization */}
        <div className="flex flex-col items-center">
          <svg width="200" height="300" className="mb-4">
            {/* Grid lines */}
            <g stroke="lightgray" strokeWidth="1">
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
            <line x1={100} y1={0} x2={100} y2={300} stroke="black" strokeWidth="2" />
            <line x1={0} y1={150} x2={200} y2={150} stroke="black" strokeWidth="2" />

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
                  fill="black"
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
                  fill="black"
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
              stroke="blue"
              strokeWidth="2"
              markerEnd="url(#arrowhead-blue)"
            />
            <text x={originX + v.x * scale / 2} y={originY - v.y * scale / 2 - 5} fill="blue" fontSize="12">
              v
            </text>

            {/* OC = w */}
            <line
              x1={originX}
              y1={originY}
              x2={originX + w.x * scale}
              y2={originY - w.y * scale}
              stroke="purple"
              strokeWidth="2"
              markerEnd="url(#arrowhead-purple)"
            />
            <text x={originX + w.x * scale / 2} y={originY - w.y * scale / 2 - 5} fill="purple" fontSize="12">
              w
            </text>

            {/* AB = w */}
            <line
              x1={originX + v.x * scale}
              y1={originY - v.y * scale}
              x2={originX + (v.x + w.x) * scale}
              y2={originY - (v.y + w.y) * scale}
              stroke="purple"
              strokeWidth="2"
              markerEnd="url(#arrowhead-purple)"
            />
            <text
              x={originX + v.x * scale + w.x * scale / 2}
              y={originY - v.y * scale - w.y * scale / 2 - 5}
              fill="purple"
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
              stroke="blue"
              strokeWidth="2"
              markerEnd="url(#arrowhead-blue)"
            />
            <text
              x={originX + w.x * scale + v.x * scale / 2}
              y={originY - w.y * scale - v.y * scale / 2 - 5}
              fill="blue"
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
              stroke="green"
              strokeWidth="3"
              markerEnd="url(#arrowhead-green)"
            />
            <text
              x={originX + diagonal.x * scale / 2}
              y={originY - diagonal.y * scale / 2 - 5}
              fill="green"
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
              stroke="red"
              strokeWidth="2"
              markerEnd="url(#arrowhead-red)"
            />
            <text x={originX + kv.x * scale / 2} y={originY - kv.y * scale / 2 - 5} fill="red" fontSize="12">
              k·v
            </text>

            {/* Points O, A, B, C */}
            <circle cx={originX} cy={originY} r="3" fill="black" />
            <text x={originX - 10} y={originY + 10} fontSize="12" fill="black">
              O
            </text>
            <circle cx={originX + v.x * scale} cy={originY - v.y * scale} r="3" fill="black" />
            <text x={originX + v.x * scale + 10} y={originY - v.y * scale + 10} fontSize="12" fill="black">
              A
            </text>
            <circle cx={originX + (v.x + w.x) * scale} cy={originY - (v.y + w.y) * scale} r="3" fill="black" />
            <text x={originX + (v.x + w.x) * scale + 10} y={originY - (v.y + w.y) * scale + 10} fontSize="12" fill="black">
              B
            </text>
            <circle cx={originX + w.x * scale} cy={originY - w.y * scale} r="3" fill="black" />
            <text x={originX + w.x * scale + 10} y={originY - w.y * scale + 10} fontSize="12" fill="black">
              C
            </text>

            <defs>
              <marker id="arrowhead-blue" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                <polygon points="0 0, 8 2.5, 0 5" fill="blue" strokeWidth="2" />
              </marker>
              <marker id="arrowhead-purple" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                <polygon points="0 0, 8 2.5, 0 5" fill="purple" strokeWidth="2" />
              </marker>
              <marker id="arrowhead-green" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                <polygon points="0 0, 8 2.5, 0 5" fill="green" strokeWidth="2" />
              </marker>
              <marker id="arrowhead-red" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                <polygon points="0 0, 8 2.5, 0 5" fill="red" strokeWidth="2" />
              </marker>
            </defs>
          </svg>

          {/* Control Sliders */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlaneShapeVectors;