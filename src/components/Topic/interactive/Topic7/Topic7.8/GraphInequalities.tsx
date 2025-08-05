import React, { useState } from 'react';
import { Circle, Square, Info } from 'lucide-react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// --- Neubrutalism color palette ---
const NEUBRUTALISM_COLORS = {
  primaryDark: '#264653',    // Dark teal - for backgrounds, text
  secondary: '#2a9d8f',      // Teal - for correct answers, accents
  neutral: '#e9c46a',        // Sand yellow - for highlights, explanations
  warning: '#f4a261',        // Orange - for warnings, incorrect answers
  danger: '#e76f51',         // Salmon - for danger, resets, main background
  white: '#ffffff',
  lightGray: '#f0f0f0',
  borderGray: '#d0d0d0',
  shadowGray: 'rgba(0, 0, 0, 0.2)',
};

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

  // --- Neubrutalism base style helper ---
  const neubrutalismBase = {
    border: `3px solid ${NEUBRUTALISM_COLORS.borderGray}`,
    borderRadius: '12px',
    boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadowGray}`,
    padding: '1rem',
    backgroundColor: NEUBRUTALISM_COLORS.white,
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: NEUBRUTALISM_COLORS.danger, // Salmon background
        border: `4px solid ${NEUBRUTALISM_COLORS.primaryDark}`,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.primaryDark}`,
      }}
    >
      <h2
        className="text-xl font-bold mb-4"
        style={{ color: NEUBRUTALISM_COLORS.white }}
      >
        Graphical Representation of Inequalities
      </h2>

      <div className="flex gap-3 mb-4">
        <button
          style={{
            ...neubrutalismBase,
            ...(type === 'linear'
              ? {
                  backgroundColor: NEUBRUTALISM_COLORS.secondary,
                  borderColor: NEUBRUTALISM_COLORS.primaryDark,
                }
              : {
                  backgroundColor: NEUBRUTALISM_COLORS.lightGray,
                  borderColor: NEUBRUTALISM_COLORS.borderGray,
                }),
            padding: '0.5rem 1rem',
            fontWeight: 'bold',
            color: type === 'linear' ? NEUBRUTALISM_COLORS.white : NEUBRUTALISM_COLORS.primaryDark,
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            if (type !== 'linear') {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = `6px 6px 0px ${NEUBRUTALISM_COLORS.shadowGray}`;
            }
          }}
          onMouseLeave={(e) => {
            if (type !== 'linear') {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = `4px 4px 0px ${NEUBRUTALISM_COLORS.shadowGray}`;
            }
          }}
          onClick={() => setType('linear')}
        >
          Linear
        </button>
        <button
          style={{
            ...neubrutalismBase,
            ...(type === 'quadratic'
              ? {
                  backgroundColor: NEUBRUTALISM_COLORS.secondary,
                  borderColor: NEUBRUTALISM_COLORS.primaryDark,
                }
              : {
                  backgroundColor: NEUBRUTALISM_COLORS.lightGray,
                  borderColor: NEUBRUTALISM_COLORS.borderGray,
                }),
            padding: '0.5rem 1rem',
            fontWeight: 'bold',
            color: type === 'quadratic' ? NEUBRUTALISM_COLORS.white : NEUBRUTALISM_COLORS.primaryDark,
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            if (type !== 'quadratic') {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = `6px 6px 0px ${NEUBRUTALISM_COLORS.shadowGray}`;
            }
          }}
          onMouseLeave={(e) => {
            if (type !== 'quadratic') {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = `4px 4px 0px ${NEUBRUTALISM_COLORS.shadowGray}`;
            }
          }}
          onClick={() => setType('quadratic')}
        >
          Quadratic
        </button>
      </div>

      <div
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.neutral,
          borderColor: NEUBRUTALISM_COLORS.primaryDark,
        }}
      >
        <Info
          className="inline mr-2"
          style={{ color: NEUBRUTALISM_COLORS.primaryDark }}
        />
        <strong style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>Example:</strong>{' '}
        <span style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
          <InlineMath math={type === 'linear' ? linearInequality : quadraticInequality} />
        </span>
      </div>

      <div className="my-6">
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

      <div
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.lightGray,
          borderColor: NEUBRUTALISM_COLORS.borderGray,
        }}
      >
        <h3
          className="font-semibold mb-2"
          style={{ color: NEUBRUTALISM_COLORS.primaryDark }}
        >
          Steps:
        </h3>
        <ul
          className="list-disc pl-5 space-y-1"
          style={{ color: NEUBRUTALISM_COLORS.primaryDark }}
        >
          {type === 'linear' ? (
            <>
              <li>Solve the inequality to find the boundary point.</li>
              <li>Draw a number line and mark the boundary.</li>
              <li>
                Use an open circle for <InlineMath math="<" /> or <InlineMath math=">" />, or closed
                circle for <InlineMath math="\leq" /> or <InlineMath math="\geq" />.
              </li>
              <li>Shade the direction of the solution (left or right).</li>
            </>
          ) : (
            <>
              <li>Solve the quadratic to find roots.</li>
              <li>Sketch the parabola using vertex and roots.</li>
              <li>Shade the region where the inequality holds (above or below).</li>
              <li>
                Use dashed line for <InlineMath math="<" /> or <InlineMath math=">" />, or solid
                line for <InlineMath math="\leq" /> or <InlineMath math="\geq" />.
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Example Solutions */}
      <div
        className="mt-4"
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.secondary,
          borderColor: NEUBRUTALISM_COLORS.primaryDark,
        }}
      >
        <h4
          className="font-semibold mb-2"
          style={{ color: NEUBRUTALISM_COLORS.white }}
        >
          Solution:
        </h4>
        <p style={{ color: NEUBRUTALISM_COLORS.white }}>
          {type === 'linear' ? (
            <InlineMath math="x > -1" />
          ) : (
            <InlineMath math={"1 \\leq x \\leq 3"} />
          )}
        </p>
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

  // --- Neubrutalism base style helper ---
  const neubrutalismBase = {
    border: `3px solid ${NEUBRUTALISM_COLORS.borderGray}`,
    borderRadius: '12px',
    boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadowGray}`,
  };

  return (
    <div
      style={{
        ...neubrutalismBase,
        backgroundColor: NEUBRUTALISM_COLORS.white,
        borderColor: NEUBRUTALISM_COLORS.neutral,
        padding: '1rem',
      }}
    >
      <div
        className="flex items-center justify-center mb-2 text-sm"
        style={{ color: NEUBRUTALISM_COLORS.primaryDark }}
      >
        Number Line
      </div>
      <div className="flex justify-between relative h-12">
        {points.map((point) => (
          <div key={point} className="flex flex-col items-center relative">
            <div
              className="text-xs"
              style={{ color: NEUBRUTALISM_COLORS.primaryDark }}
            >
              {point}
            </div>
            <div
              className={`w-0.5 h-4 ${
                point === boundary ? 'bg-red-500' : 'bg-gray-400'
              }`}
            ></div>
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
          className={`absolute top-6 h-2`}
          style={{
            backgroundColor:
              direction === '>' ? NEUBRUTALISM_COLORS.secondary : NEUBRUTALISM_COLORS.secondary,
            opacity: '0.3',
            left: direction === '>' ? `${((boundary + 5) / 10) * 100}%` : '0%',
            width:
              direction === '>'
                ? `${(5 - boundary) * 10}%`
                : `${((boundary + 5) / 10) * 100}%`,
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
      .filter((point) => point.x >= roots[0] && point.x <= roots[1])
      .map((point) => `L ${toSvgX(point.x)} ${toSvgY(point.y)}`)
      .join(' ')}
    L ${toSvgX(roots[1])} 50
    Z
  `;

  // --- Neubrutalism base style helper ---
  const neubrutalismBase = {
    border: `3px solid ${NEUBRUTALISM_COLORS.borderGray}`,
    borderRadius: '12px',
    boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadowGray}`,
  };

  return (
    <div
      style={{
        ...neubrutalismBase,
        backgroundColor: NEUBRUTALISM_COLORS.white,
        borderColor: NEUBRUTALISM_COLORS.neutral,
        height: '16rem', // h-64
        overflow: 'hidden',
      }}
      className="relative rounded-md"
    >
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
        {Array.from({ length: 48 }).map((_, i) => (
          <div
            key={i}
            className="border-r border-b"
            style={{ borderColor: `${NEUBRUTALISM_COLORS.borderGray}80` }}
          ></div>
        ))}
      </div>

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Axes */}
        <line
          x1="0"
          y1="50"
          x2="100"
          y2="50"
          stroke={NEUBRUTALISM_COLORS.primaryDark}
          strokeWidth="0.5"
        />
        <line
          x1="14.3"
          y1="0"
          x2="14.3"
          y2="100"
          stroke={NEUBRUTALISM_COLORS.primaryDark}
          strokeWidth="0.5"
        />

        {/* Roots */}
        <circle
          cx={toSvgX(roots[0])}
          cy="50"
          r="1"
          fill={NEUBRUTALISM_COLORS.danger}
        />
        <circle
          cx={toSvgX(roots[1])}
          cy="50"
          r="1"
          fill={NEUBRUTALISM_COLORS.danger}
        />
        {/* Vertex */}
        <circle
          cx={toSvgX(vertex.x)}
          cy={toSvgY(vertex.y)}
          r="1"
          fill={NEUBRUTALISM_COLORS.warning}
        />

        {/* Shaded Area */}
        {direction === 'below' && (
          <path
            d={shadedAreaPath}
            fill={`${NEUBRUTALISM_COLORS.secondary}40`} // 25% opacity teal
            stroke="none"
          />
        )}

        {/* Parabola */}
        <path
          d={parabolaPath}
          fill="none"
          stroke={NEUBRUTALISM_COLORS.secondary}
          strokeWidth="1"
        />
      </svg>

      <div
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs"
        style={{ color: NEUBRUTALISM_COLORS.primaryDark }}
      >
        X
      </div>
      <div
        className="absolute top-1 left-1 text-xs"
        style={{ color: NEUBRUTALISM_COLORS.primaryDark }}
      >
        Y
      </div>
    </div>
  );
};

export default GraphInequalities;