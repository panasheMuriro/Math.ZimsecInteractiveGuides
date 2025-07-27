import React, { useState } from 'react';
import { Circle, Square, Info } from 'lucide-react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

type InequalityType = 'linear' | 'quadratic';

const GraphInequalities: React.FC = () => {
  const [type, setType] = useState<InequalityType>('linear');
  const [linearInequality] = useState('x > -1');
  const [quadraticInequality] = useState('x^2 - 4x + 3 \\leq 0');

  const linearBoundary = -1;
  const linearDirection: '<' | '>' = '>';

  const quadraticRoots = [1, 3];
  const quadraticVertex = { x: 2, y: -1 };
  const quadraticDirection: 'above' | 'below' = 'below';

  return (
    <div className="p-4 max-w-2xl mx-auto bg-blue-50 rounded-lg shadow-md p-5">
      <h2 className="text-xl font-bold mb-4">Graphical Representation of Inequalities</h2>

      <div className="flex gap-3 mb-4">
        <button
          className={`px-4 py-2 rounded-full ${type === 'linear' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setType('linear')}
        >
          Linear
        </button>
        <button
          className={`px-4 py-2 rounded-full ${type === 'quadratic' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setType('quadratic')}
        >
          Quadratic
        </button>
      </div>

      <div className="mb-4 p-3 bg-blue-50 rounded-md border border-blue-200">
        <Info className="inline mr-2 text-blue-500" />
        <strong>Example:</strong> 
        <InlineMath math={type === 'linear' ? linearInequality : quadraticInequality} />
      </div>

      <div className="mb-6">
        {type === 'linear' ? (
          <LinearGraph boundary={linearBoundary} direction={linearDirection} />
        ) : (
          <QuadraticGraph
            roots={quadraticRoots}
            vertex={quadraticVertex}
            direction={quadraticDirection}
          />
        )}
      </div>

      <div className="text-sm text-gray-700">
        <h3 className="font-semibold mb-2">Steps:</h3>
        <ul className="list-disc pl-5 space-y-1">
          {type === 'linear' ? (
            <>
              <li>Solve the inequality to find the boundary point.</li>
              <li>Draw a number line and mark the boundary.</li>
              <li>Use an open circle for <InlineMath math="<" /> or <InlineMath math=">" />, or closed circle for <InlineMath math="\\leq" /> or <InlineMath math="\\geq" />.</li>
              <li>Shade the direction of the solution (left or right).</li>
            </>
          ) : (
            <>
              <li>Solve the quadratic to find roots.</li>
              <li>Sketch the parabola using vertex and roots.</li>
              <li>Shade the region where the inequality holds (above or below).</li>
              <li>Use dashed line for <InlineMath math="<" /> or <InlineMath math=">" />, or solid line for <InlineMath math="\\leq" /> or <InlineMath math="\\geq" />.</li>
            </>
          )}
        </ul>
      </div>

      {/* Example Solutions */}
      <div className="mt-4 p-3 bg-green-50 rounded-md border border-green-200">
        <h4 className="font-semibold mb-2">Solution:</h4>
        {type === 'linear' ? (
          <p><InlineMath math="x > -1" /></p>
        ) : (
          <p><InlineMath math={"1 \\leq x \\leq 3"} /></p>
        )}
      </div>
    </div>
  );
};

const LinearGraph: React.FC<{ boundary: number; direction: '<' | '>' }> = ({
  boundary,
  direction,
}) => {
  const points = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  const isOpen = direction === '>' || direction === '<';

  return (
    <div className="relative">
      <div className="flex items-center justify-center mb-2 text-sm text-gray-600">
        Number Line
      </div>
      <div className="flex justify-between relative h-12">
        {points.map((point) => (
          <div key={point} className="flex flex-col items-center relative">
            <div className="text-xs">{point}</div>
            <div className={`w-0.5 h-4 ${point === boundary ? 'bg-red-500' : 'bg-gray-400'}`}></div>
          </div>
        ))}

        <div
          className="absolute top-6 transform -translate-x-1/2"
          style={{ left: `${((boundary + 5) / 10) * 100}%` }}
        >
          {isOpen ? (
            <Circle className="w-4 h-4 text-red-500 fill-white" />
          ) : (
            <Square className="w-4 h-4 text-red-500 fill-red-500" />
          )}
        </div>

        <div
          className={`absolute top-6 h-2 ${direction === '>' ? 'bg-blue-200' : 'bg-blue-200'}`}
          style={{
            left: direction === '>' ? `${((boundary + 5) / 10) * 100}%` : '0%',
            width: direction === '>' ? `${(5 - boundary) * 10}%` : `${((boundary + 5) / 10) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

const QuadraticGraph: React.FC<{
  roots: number[];
  vertex: { x: number; y: number };
  direction: 'above' | 'below';
}> = ({ roots, vertex, direction }) => {
  const generateParabolaPoints = () => {
    const points = [];
    for (let x = -1; x <= 6; x += 0.2) {
      const y = x * x - 4 * x + 3;
      points.push({ x, y });
    }
    return points;
  };

  const parabolaPoints = generateParabolaPoints();

  const toSvgX = (x: number) => ((x + 1) / 7) * 100;
  const toSvgY = (y: number) => ((3 - y) / 6) * 100;

  const parabolaPath = parabolaPoints
    .map((point, i) => 
      `${i === 0 ? 'M' : 'L'} ${toSvgX(point.x)} ${toSvgY(point.y)}`
    )
    .join(' ');

  const shadedAreaPath = `
    M ${toSvgX(roots[0])} 50
    L ${toSvgX(roots[0])} ${toSvgY(0)}
    ${parabolaPoints
      .filter(point => point.x >= roots[0] && point.x <= roots[1])
      .map(point => `L ${toSvgX(point.x)} ${toSvgY(point.y)}`)
      .join(' ')}
    L ${toSvgX(roots[1])} 50
    Z
  `;

  return (
    <div className="relative border border-gray-300 rounded-md h-64 overflow-hidden bg-white">
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="border-r border-b border-gray-100"></div>
        ))}
      </div>

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="50" x2="100" y2="50" stroke="#333" strokeWidth="0.5" />
        <line x1="14.3" y1="0" x2="14.3" y2="100" stroke="#333" strokeWidth="0.5" />
        
        <circle cx={toSvgX(roots[0])} cy="50" r="1" fill="red" />
        <circle cx={toSvgX(roots[1])} cy="50" r="1" fill="red" />
        <circle cx={toSvgX(vertex.x)} cy={toSvgY(vertex.y)} r="1" fill="green" />
        
        {direction === 'below' && (
          <path
            d={shadedAreaPath}
            fill="rgba(173, 216, 230, 0.4)"
            stroke="none"
          />
        )}
        
        <path
          d={parabolaPath}
          fill="none"
          stroke="blue"
          strokeWidth="1"
        />
      </svg>

      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">X</div>
      <div className="absolute top-1 left-1 text-xs text-gray-600">Y</div>
    </div>
  );
};

export default GraphInequalities;