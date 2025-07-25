import React, { useState } from 'react';
import { ArrowRight, Grid} from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

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
    <div className="max-w-md mx-auto p-4 bg-gray-50 min-h-screen font-sans">
 
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-800 flex items-center justify-center">
        <ArrowRight className="w-6 h-6 mr-2" /> Scalar Multiplication and Magnitude
      </h1>

      {/* Interactive Visualization */}
      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          <Grid className="w-5 h-5 mr-2 text-blue-600" /> Interactive Visualization
        </h2>
        <p className="text-sm text-gray-700 mb-2">
          Adjust the components of <InlineMath math="\vec{v}" /> (blue) and scalar <InlineMath math="k" /> to see the scaled vector{' '}
          <InlineMath math="k\vec{v}" /> (green) and magnitude <InlineMath math="|\vec{v}|" />.
        </p>

        {/* Vector and Magnitude Displays */}
        <div className="text-sm text-gray-700 mb-2">
          <div className="flex items-center">
            <span className="text-blue-500 mr-1">
              <InlineMath math="\vec{v}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${v.x} \\\\ ${v.y} \\end{pmatrix}`} />
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-1">
              <InlineMath math="k\vec{v}" />
            </span>
            : <BlockMath math={`\\begin{pmatrix} ${scaledVector.x.toFixed(2)} \\\\ ${scaledVector.y.toFixed(2)} \\end{pmatrix}`} />
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 mr-1">
              <InlineMath math="|\vec{v}|" />
            </span>
            = <InlineMath math={`${magnitude}`} />
          </div>
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

            {/* Vector v */}
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

            {/* Scaled Vector k*v */}
            <line
              x1={originX}
              y1={originY}
              x2={originX + scaledVector.x * scale}
              y2={originY - scaledVector.y * scale}
              stroke="green"
              strokeWidth="3"
              markerEnd="url(#arrowhead-green)"
            />
            <text
              x={originX + scaledVector.x * scale / 2}
              y={originY - scaledVector.y * scale / 2 - 5}
              fill="green"
              fontSize="12"
            >
              k·v
            </text>

            <defs>
              <marker id="arrowhead-blue" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                <polygon points="0 0, 8 2.5, 0 5" fill="blue" strokeWidth="2" />
              </marker>
              <marker id="arrowhead-green" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
                <polygon points="0 0, 8 2.5, 0 5" fill="green" strokeWidth="2" />
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

           
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScalarMultiplicationMagnitude;