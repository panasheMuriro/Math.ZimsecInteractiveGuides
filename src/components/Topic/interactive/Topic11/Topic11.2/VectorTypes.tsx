import React, { useState } from 'react';
import { ArrowRight, Grid } from 'lucide-react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

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

  return (
    <div className="max-w-md mx-auto p-4 bg-gradient-to-br from-[#FF9D23] to-[#854836] rounded-2xl font-sans">
      <h1 className="text-2xl font-bold text-center mb-4 text-white flex items-center justify-center">
        <ArrowRight className="w-6 h-6 mr-2" /> Vector Types
      </h1>
      {/* Interactive Visualization */}
      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          <Grid className="w-5 h-5 mr-2 text-blue-600" /> Interactive Visualization
        </h2>
        <p className="text-sm text-gray-700 mb-2">
          Adjust the start point to see how the translation and equal vectors move. Negative and parallel vectors are drawn from the origin.
        </p>
        <div className="text-sm text-gray-700 mb-2">
          <div>Current vector: <BlockMath math={`\\vec{v} = \\begin{pmatrix} ${vector.x} \\\\ ${vector.y} \\end{pmatrix}`} /></div>
          {(displayMode === 'all' || displayMode === 'original-negative') && (<div className="text-red-500">Negative: <BlockMath math={`-\\vec{v} = \\begin{pmatrix} ${negativeVector.x} \\\\ ${negativeVector.y} \\end{pmatrix}`} /></div>)}
          {(displayMode === 'all' || displayMode === 'original-parallel') && (<div className="text-green-700" >Parallel (2x): <BlockMath math={`\\begin{pmatrix} ${parallelVector.x} \\\\ ${parallelVector.y} \\end{pmatrix}`} /></div>)}
          {(displayMode === 'all' || displayMode === 'original-equal') && (<div className="text-purple-700">Equal at (3,4): <BlockMath math={`\\vec{w} = \\begin{pmatrix} ${vector.x} \\\\ ${vector.y} \\end{pmatrix}`} /></div>)}
        </div>
      </section>
      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            className={`px-3 py-2 text-sm rounded-full ${displayMode === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setDisplayMode('all')}
          >
            All Vectors
          </button>
          <button
            className={`px-3 py-2 text-sm rounded-full ${displayMode === 'original-negative' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setDisplayMode('original-negative')}
          >
            Original & Negative
          </button>
          <button
            className={`px-3 py-2 text-sm rounded-full ${displayMode === 'original-parallel' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setDisplayMode('original-parallel')}
          >
            Original & Parallel
          </button>
          <button
            className={`px-3 py-2 text-sm rounded-full ${displayMode === 'original-equal' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setDisplayMode('original-equal')}
          >
            Original & Equal
          </button>


        </div>

        <div className="flex flex-col items-center">
          <svg width="200" height="200" className="mb-4">
            {/* Grid lines */}
            <g stroke="lightgray" strokeWidth="1">
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
            <line x1={100} y1={0} x2={100} y2={200} stroke="black" strokeWidth="2" />
            <line x1={0} y1={100} x2={200} y2={100} stroke="black" strokeWidth="2" />

            {[...Array(11)].map((_, i) => {
              const unit = i - 5;
              if (unit === 0) return null; // Skip label at origin to avoid clutter
              return (
                <text
                  key={i}
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
            {[...Array(11)].map((_, i) => {
              const unit = i - 5;
              if (unit === 0) return null; // Skip label at origin to avoid clutter
              return (
                <text
                  key={i}
                  x={originX - 15}
                  y={originY - unit * scale + 4} // Adjust vertically for text alignment
                  fontSize="12"
                  fill="black"
                  textAnchor="middle"
                >
                  {unit}
                </text>
              );
            })}
            {/* Translation Vector */}
            {(displayMode === 'all' || displayMode === 'original-negative' || displayMode === 'original-parallel' || displayMode === 'original-equal') && (
              <line
                x1={originX + startPoint.x * scale}
                y1={originY - startPoint.y * scale}
                x2={originX + (startPoint.x + vector.x) * scale}
                y2={originY - (startPoint.y + vector.y) * scale}
                stroke="blue"
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
                stroke="red"
                strokeWidth="3"
                markerEnd="url(#arrowhead-red)"
              />
            )}
            {/* Parallel Vector */}
            {(displayMode === 'all' || displayMode === 'original-parallel') && (
              <line
                x1={originX}
                y1={originY}
                x2={originX + parallelVector.x * scale}
                y2={originY - parallelVector.y * scale}
                stroke="green"
                strokeWidth="3"
                markerEnd="url(#arrowhead-green)"
              />
            )}
            {/* Equal Vector */}
            {(displayMode === 'all' || displayMode === 'original-equal') && (
              <line
                x1={originX + equalVectorStart.x * scale}
                y1={originY - equalVectorStart.y * scale}
                x2={originX + (equalVectorStart.x + vector.x) * scale}
                y2={originY - (equalVectorStart.y + vector.y) * scale}
                stroke="purple"
                strokeWidth="3"
                markerEnd="url(#arrowhead-purple)"
              />
            )}
            <defs>
              <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="blue" />
              </marker>
              <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="red" />
              </marker>
              <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="green" />
              </marker>
              <marker id="arrowhead-purple" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="purple" />
              </marker>
            </defs>
          </svg>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            />




          </div>
        </div>


      </section>

    </div>
  );
};

export default VectorTypes;