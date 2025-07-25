import React, { useState } from 'react';
import { ArrowRight, Grid, } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

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

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50  font-sans">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-800 flex items-center justify-center">
        <ArrowRight className="w-6 h-6 mr-2" /> Position Vectors
      </h1>

      {/* Interactive Visualization */}
      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          <Grid className="w-5 h-5 mr-2 text-blue-600" /> Interactive Visualization
        </h2>
        <p className="text-sm text-gray-700 mb-2">
          Adjust the coordinates of point <InlineMath math="A(x, y)" /> to see the position vector <InlineMath math="\vec{OA}" />.
          Current position vector: <BlockMath math={`\\vec{OA} = \\begin{pmatrix} ${point.x} \\\\ ${point.y} \\end{pmatrix}`} />
        </p>
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
            {/* Position Vector */}
            <line
              x1={originX}
              y1={originY}
              x2={originX + point.x * scale}
              y2={originY - point.y * scale}
              stroke="blue"
              strokeWidth="3"
              markerEnd="url(#arrowhead-blue)"
            />
            <defs>
              <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="blue" />
              </marker>
            </defs>
          </svg>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">
              y-coordinate: {point.y}
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={point.y}
              onChange={handleYChange}
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PositionVectors;