import React, { useState } from 'react';
import { ArrowRight, Grid, Plus, Minus } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

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

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-800 flex items-center justify-center">
        <ArrowRight className="w-6 h-6 mr-2" /> Vector Addition and Subtraction
      </h1>

      {/* Addition Section */}
      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          <Plus className="w-5 h-5 mr-2 text-blue-600" /> Addition
        </h2>
        <p className="text-sm text-gray-700">
          For vectors <InlineMath math="\vec{v} = \begin{pmatrix} x_1 \\ y_1 \end{pmatrix}" /> and{' '}
          <InlineMath math="\vec{w} = \begin{pmatrix} x_2 \\ y_2 \end{pmatrix}" />:
          <BlockMath math="\vec{v} + \vec{w} = \begin{pmatrix} x_1 + x_2 \\ y_1 + y_2 \end{pmatrix}" />
          Geometrically: Place tail of <InlineMath math="\vec{w}" /> at head of <InlineMath math="\vec{v}" />, result is from tail of{' '}
          <InlineMath math="\vec{v}" /> to head of <InlineMath math="\vec{w}" />.
          Example: <BlockMath math="\begin{pmatrix} 2 \\ 3 \end{pmatrix} + \begin{pmatrix} 1 \\ 4 \end{pmatrix} = \begin{pmatrix} 3 \\ 7 \end{pmatrix}" />
        </p>
      </section>

      {/* Subtraction Section */}
      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          <Minus className="w-5 h-5 mr-2 text-blue-600" /> Subtraction
        </h2>
        <p className="text-sm text-gray-700">
          <InlineMath math="\vec{v} - \vec{w} = \vec{v} + (-\vec{w}) = \begin{pmatrix} x_1 - x_2 \\ y_1 - y_2 \end{pmatrix}" />.
          Geometrically: Vector from head of <InlineMath math="\vec{w}" /> to head of <InlineMath math="\vec{v}" />.
          Example: <BlockMath math="\begin{pmatrix} 2 \\ 3 \end{pmatrix} - \begin{pmatrix} 1 \\ 4 \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \end{pmatrix}" />
        </p>
      </section>

      {/* Interactive Visualization */}
      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          <Grid className="w-5 h-5 mr-2 text-blue-600" /> Interactive Visualization
        </h2>
        <p className="text-sm text-gray-700 mb-2">
          Adjust the components of <InlineMath math="\vec{v}" /> (blue) and <InlineMath math="\vec{w}" /> (purple) to see addition (green) and subtraction (green, with{' '}
          <InlineMath math="-\vec{w}" /> in red).
        </p>

        {/* Vector Displays */}
        <div className="text-sm text-gray-700 mb-2">
          <div className="flex items-center">
            <span className="text-blue-500 mr-1">
              <InlineMath math="\vec{v}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${v.x} \\\\ ${v.y} \\end{pmatrix}`} />
          </div>
          <div className="flex items-center">
            <span className="text-purple-500 mr-1">
              <InlineMath math="\vec{w}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${w.x} \\\\ ${w.y} \\end{pmatrix}`} />
          </div>
          {(displayMode === 'addition' || displayMode === 'both') && (
            <div className="flex items-center">
              <span className="text-green-500 mr-1">
                <InlineMath math="\vec{v} + \vec{w}" />
              </span>
              : <BlockMath math={`\\begin{pmatrix} ${sumVector.x} \\\\ ${sumVector.y} \\end{pmatrix}`} />
            </div>
          )}
          {(displayMode === 'subtraction' || displayMode === 'both') && (
            <>
              <div className="flex items-center">
                <span className="text-red-500 mr-1">
                  <InlineMath math="-\vec{w}" />
                </span>
                : <BlockMath math={`\\begin{pmatrix} ${negW.x} \\\\ ${negW.y} \\end{pmatrix}`} />
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-1">
                  <InlineMath math="\vec{v} - \vec{w}" />
                </span>
                : <BlockMath math={`\\begin{pmatrix} ${diffVector.x} \\\\ ${diffVector.y} \\end{pmatrix}`} />
              </div>
            </>
          )}
        </div>

        {/* Display Mode Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            className={`px-3 py-1 text-sm rounded ${displayMode === 'addition' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setDisplayMode('addition')}
          >
            See Addition
          </button>
          <button
            className={`px-3 py-1 text-sm rounded ${displayMode === 'subtraction' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setDisplayMode('subtraction')}
          >
            See Subtraction
          </button>
        </div>

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
                    <line x1={originX + unit * scale} y1={0} x2={originX + unit * scale} y2={400} />
                  </React.Fragment>
                );
              })}
            </g>

            {/* Axes */}
            <line x1={100} y1={0} x2={100} y2={400} stroke="black" strokeWidth="2" />
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

            {/* Vector v (always visible) */}
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

            {/* Vector w (for addition) */}
            {(displayMode === 'addition' || displayMode === 'both') && (
              <>
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
                  stroke="purple"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
                <text
                  x={originX + w.x * scale / 2}
                  y={originY - w.y * scale / 2 - 5}
                  fill="purple"
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
                  stroke="red"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-red)"
                />
                <text
                  x={originX + negW.x * scale / 2}
                  y={originY - negW.y * scale / 2 - 5}
                  fill="red"
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
                  stroke="green"
                  strokeWidth="3"
                  markerEnd="url(#arrowhead-green)"
                />
                <text
                  x={originX + sumVector.x * scale / 2}
                  y={originY - sumVector.y * scale / 2 - 5}
                  fill="green"
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
                  stroke="green"
                  strokeWidth="3"
                  markerEnd="url(#arrowhead-green)"
                />
                <text
                  x={originX + w.x * scale + (v.x - w.x) * scale / 2}
                  y={originY - w.y * scale - (v.y - w.y) * scale / 2 - 5}
                  fill="green"
                  fontSize="12"
                >
                  v-w
                </text>
              </>
            )}

            <defs>
              <marker id="arrowhead-blue" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                <polygon points="0 0, 8 2.5, 0 5" fill="blue" strokeWidth="2" />
              </marker>
              <marker id="arrowhead-purple" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                <polygon points="0 0, 8 2.5, 0 5" fill="purple" strokeWidth="2" />
              </marker>
              <marker id="arrowhead-red" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                <polygon points="0 0, 8 2.5, 0 5" fill="red" strokeWidth="2" />
              </marker>
              <marker id="arrowhead-green" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                <polygon points="0 0, 8 2.5, 0 5" fill="green" strokeWidth="2" />
              </marker>
            </defs>
          </svg>

          {/* Control Sliders */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VectorAddSubtract;