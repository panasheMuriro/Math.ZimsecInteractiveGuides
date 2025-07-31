import React from 'react';

type GraphType = 'distance-time' | 'velocity-time' | 'displacement-time';
type FeatureType = 'horizontal' | 'sloping' | 'curved';

interface MotionGraphKeyFeaturesProps {
  graphType: GraphType;
  width?: number;
  height?: number;
  unitSize?: number;
  showLabels?: boolean;
}

const GRAPH_CONFIGS: Record<GraphType, {
  yAxisLabel: string;
  features: { type: FeatureType; label: string; colorClass: string; points: [number, number][] }[];
  legendItems: { label: string; colorClass: string; isCurved?: boolean }[];
}> = {
  'distance-time': {
    yAxisLabel: 'Distance (m)',
    features: [
      {
        type: 'horizontal',
        label: 'Stationary',
        colorClass: 'stroke-blue-500',
        points: [[0, 3], [8, 3]],
      },
      {
        type: 'sloping',
        label: 'Constant Speed',
        colorClass: 'stroke-green-500',
        points: [[0, 0], [6, 4]],
      },
      {
        type: 'curved',
        label: 'Acceleration',
        colorClass: 'stroke-amber-500',
        points: [
          [0, 0],
          [1, 0.2],
          [2, 0.6],
          [3, 1.4],
          [4, 2.4],
          [5, 3.6],
          [6, 5],
        ],
      },
      {
        type: 'curved',
        label: 'Deceleration',
        colorClass: 'stroke-red-500',
        points: [
          [0, 0],
          [1, 2.5],
          [2, 4.2],
          [3, 5.2],
          [4, 5.8],
          [5, 6.0],
          [6, 6.1],
        ],
      },
    ],
    legendItems: [
      { label: 'Stationary', colorClass: 'stroke-blue-500' },
      { label: 'Constant Speed', colorClass: 'stroke-green-500' },
      { label: 'Acceleration', colorClass: 'stroke-amber-500', isCurved: true },
      { label: 'Deceleration', colorClass: 'stroke-red-500', isCurved: true },
    ],
  },
  'velocity-time': {
    yAxisLabel: 'Velocity (m/s)',
    features: [
      {
        type: 'horizontal',
        label: 'Constant Velocity',
        colorClass: 'stroke-blue-500',
        points: [[0, 3], [8, 3]],
      },
      {
        type: 'sloping',
        label: 'Constant Acceleration',
        colorClass: 'stroke-green-500',
        points: [[0, 0], [4, 6]],
      },
      {
        type: 'sloping',
        label: 'Constant Deceleration',
        colorClass: 'stroke-purple-500',
        points: [[5, 6], [8, 0]],
      },
      {
        type: 'curved',
        label: 'Variable Acceleration',
        colorClass: 'stroke-amber-500',
        points: [
          [0, 0],
          [1, 1],
          [2, 3],
          [3, 5.5],
          [4, 7],
        ],
      },
    ],
    legendItems: [
      { label: 'Constant Velocity', colorClass: 'stroke-blue-500' },
      { label: 'Constant Accel.', colorClass: 'stroke-green-500' },
      { label: 'Constant Decel.', colorClass: 'stroke-purple-500' },
      { label: 'Variable Accel.', colorClass: 'stroke-amber-500', isCurved: true },
    ],
  },
  'displacement-time': {
    yAxisLabel: 'Displacement (m)',
    features: [
      {
        type: 'sloping',
        label: 'Moving Forward (Positive Velocity)',
        colorClass: 'stroke-green-500',
        points: [[0, 0], [2, 4]],
      },
      {
        type: 'horizontal',
        label: 'Stationary (Zero Velocity)',
        colorClass: 'stroke-blue-500',
        points: [[2, 4], [4, 4]],
      },
      {
        type: 'sloping',
        label: 'Moving Backward (Negative Velocity)',
        colorClass: 'stroke-red-500',
        points: [[4, 4], [6, -2]],
      },
      {
        type: 'horizontal',
        label: 'At Start Position',
        colorClass: 'stroke-purple-500',
        points: [[6, 0], [8, 0]],
      },
      {
        type: 'curved',
        label: 'Acceleration/Deceleration',
        colorClass: 'stroke-amber-500',
        points: [
          [9, 0],
          [9.5, 1.5],
          [10, 2.5],
          [10.5, 3],
          [11, 2.5],
          [11.5, 1.5],
          [12, 0],
          [12.5, -1.5],
          [13, -2.5],
          [13.5, -3],
          [14, -2.5],
        ],
      },
    ],
    legendItems: [
      { label: 'Moving Forward (+Vel)', colorClass: 'stroke-green-500' },
      { label: 'Stationary (0 Vel)', colorClass: 'stroke-blue-500' },
      { label: 'Moving Backward (-Vel)', colorClass: 'stroke-red-500' },
      { label: 'At Start (0 Disp)', colorClass: 'stroke-purple-500' },
      { label: 'Accel./Decel.', colorClass: 'stroke-amber-500', isCurved: true },
    ],
  },
};

const MotionGraphKeyFeatures: React.FC<MotionGraphKeyFeaturesProps> = ({
  graphType,
  width = 400,
  height = 400,
  unitSize = 40,
  showLabels = true,
}) => {
  const config = GRAPH_CONFIGS[graphType];
  const padding = 40;
  const graphWidth = width - 2 * padding;
  const graphHeight = height - 2 * padding;
  const maxX = graphWidth / unitSize;

  const isDisplacement = graphType === 'displacement-time';

  let minY = 0;
  let maxY = 6;
  if (isDisplacement) {
    minY = 0;
    maxY = 0;
    config.features.forEach(feature => {
      feature.points.forEach(([, y]) => {
        if (y < minY) minY = Math.floor(y);
        if (y > maxY) maxY = Math.ceil(y);
      });
    });
  }
  const totalYUnits = isDisplacement ? maxY - minY : maxY;

  const graphToSvg = (x: number, y: number) => {
    const svgX = padding + x * unitSize;
    const svgY = isDisplacement
      ? height - padding - ((y - minY) / totalYUnits) * graphHeight
      : height - padding - (y / maxY) * graphHeight;
    return { x: svgX, y: svgY };
  };

  const renderTicks = () => {
    const ticks = [];
    for (let i = 0; i <= maxX; i++) {
      const { x, y: axisY } = graphToSvg(i, isDisplacement ? 0 : 0);
      ticks.push(
        <g key={`x-${i}`}>
          <line x1={x} y1={axisY} x2={x} y2={axisY + 5} stroke="#4b5563" strokeWidth="1" />
          <text x={x} y={axisY + 20} textAnchor="middle" className="text-xs fill-gray-600">
            {i}
          </text>
        </g>
      );
    }

    if (isDisplacement) {
       for (let i = minY; i <= maxY; i++) {
        if (i === 0) continue;
        const graphY = i;
        const { x, y } = graphToSvg(0, graphY);
        ticks.push(
          <g key={`y-${i}`}>
            <line x1={x - 5} y1={y} x2={x} y2={y} stroke="#4b5563" strokeWidth="1" />
            <text x={x - 10} y={y + 4} textAnchor="end" className="text-xs fill-gray-600">
              {i}
            </text>
          </g>
        );
      }
      const { x: zeroX, y: zeroY } = graphToSvg(0, 0);
      ticks.push(
        <g key={`y-0`}>
          <line x1={zeroX - 5} y1={zeroY} x2={zeroX} y2={zeroY} stroke="#4b5563" strokeWidth="1" />
          <text x={zeroX - 10} y={zeroY + 4} textAnchor="end" className="text-xs fill-gray-600">
            0
          </text>
        </g>
      );
    } else {
      for (let i = 0; i <= maxY; i++) {
        const { x, y } = graphToSvg(0, i);
        ticks.push(
          <g key={`y-${i}`}>
            <line x1={x - 5} y1={y} x2={x} y2={y} stroke="#4b5563" strokeWidth="1" />
            <text x={x - 10} y={y + 4} textAnchor="end" className="text-xs fill-gray-600">
              {i}
            </text>
          </g>
        );
      }
      ticks.push(
        <text
          key="origin-label"
          x={padding - 10}
          y={height - padding + 25}
          textAnchor="end"
          className="text-xs fill-gray-500"
        >
          0
        </text>
      );
    }

    return ticks;
  };

  const renderGrid = () => {
    const gridLines = [];
    for (let i = 0; i <= maxX; i++) {
      const { x } = graphToSvg(i, 0);
      gridLines.push(
        <line
          key={`grid-x-${i}`}
          x1={x}
          y1={padding}
          x2={x}
          y2={height - padding}
          className="stroke-gray-100"
          strokeWidth="1"
        />
      );
    }
    if (isDisplacement) {
        for (let i = minY; i <= maxY; i++) {
          const { y } = graphToSvg(0, i);
          gridLines.push(
            <line
              key={`grid-y-${i}`}
              x1={padding}
              y1={y}
              x2={width - padding}
              y2={y}
              className="stroke-gray-100"
              strokeWidth="1"
            />
          );
        }
    } else {
        for (let i = 0; i <= maxY; i++) {
          const { y } = graphToSvg(0, i);
          gridLines.push(
            <line
              key={`grid-y-${i}`}
              x1={padding}
              y1={y}
              x2={width - padding}
              y2={y}
              className="stroke-gray-100"
              strokeWidth="1"
            />
          );
        }
    }
    return gridLines;
  };

  const renderFeatures = () => {
    return config.features.map((feature, index) => {
      const { type, label, colorClass, points } = feature;
      const svgPoints = points.map(([x, y]) => graphToSvg(x, y));

      if (type === 'horizontal' || type === 'sloping') {
        const start = svgPoints[0];
        const end = svgPoints[svgPoints.length - 1];
        return (
          <g key={`feature-${index}`}>
            <line
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              className={colorClass}
              strokeWidth="3"
            />
            {showLabels && (
              <text
                x={end.x + 10}
                y={end.y - 10}
                className="text-xs font-bold fill-current"
              >
                {label}
              </text>
            )}
          </g>
        );
      }

      if (type === 'curved') {
        let pathData = `M ${svgPoints[0].x} ${svgPoints[0].y}`;
        for (let i = 1; i < svgPoints.length; i++) {
          pathData += ` L ${svgPoints[i].x} ${svgPoints[i].y}`;
        }
        const endPoint = svgPoints[svgPoints.length - 1];
        return (
          <g key={`feature-${index}`}>
            <path
              d={pathData}
              fill="none"
              className={colorClass}
              strokeWidth="3"
            />
            {showLabels && (
              <text
                x={endPoint.x + 10}
                y={endPoint.y - 10}
                className="text-xs font-bold fill-current"
              >
                {label}
              </text>
            )}
          </g>
        );
      }

      return null;
    });
  };

  const renderLegend = () => {
    if (!showLabels) return null;

    return (
      <g transform={`translate(${width - 150}, ${padding + 10})`}>
        <rect x="0" y="0" width="140" height={config.legendItems.length * 15 + 25} fill="white" stroke="#e5e7eb" strokeWidth="1" rx="5" />
        <text x="10" y="20" className="text-xs font-bold fill-gray-800">Legend:</text>
        {config.legendItems.map((item, index) => (
          <g key={`legend-${index}`} transform={`translate(0, ${25 + index * 15})`}>
            {item.isCurved ? (
              <path d="M 10 5 Q 20 0 30 5" fill="none" className={item.colorClass} strokeWidth="3" />
            ) : (
              <line x1="10" y1="5" x2="30" y2="5" className={item.colorClass} strokeWidth="3" />
            )}
            <text x="35" y="9" className="text-xs fill-gray-700">{item.label}</text>
          </g>
        ))}
      </g>
    );
  };

  const xAxisY = graphToSvg(0, 0).y;
  const yAxisY1 = isDisplacement ? padding : height - padding;
  const yAxisY2 = isDisplacement ? height - padding : padding;

  return (
    <div className="overflow-hidden bg-white rounded-lg border border-gray-400">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {renderGrid()}

        <line
          x1={padding}
          y1={xAxisY}
          x2={width - padding}
          y2={xAxisY}
          className="stroke-gray-700"
          strokeWidth="2"
        />
        <line
          x1={padding}
          y1={yAxisY1}
          x2={padding}
          y2={yAxisY2}
          className="stroke-gray-700"
          strokeWidth="2"
        />

        {renderTicks()}

     
          <>
            <text
              x={width / 2}
              y={height - 5}
              textAnchor="middle"
              className="text-sm font-bold fill-gray-800"
            >
              Time (s)
            </text>
            <text
              x={15}
              y={height / 2}
              textAnchor="middle"
              transform={`rotate(-90, 15, ${height / 2})`}
              className="text-sm font-bold fill-gray-800"
            >
              {config.yAxisLabel}
            </text>
          </>
      
        {renderFeatures()}
        {renderLegend()}
      </svg>
    </div>
  );
};

export default MotionGraphKeyFeatures;