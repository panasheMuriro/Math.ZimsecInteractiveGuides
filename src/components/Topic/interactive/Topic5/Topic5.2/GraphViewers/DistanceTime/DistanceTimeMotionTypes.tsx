import React from 'react';

interface TypesOfMotionProps {
  width?: number;
  height?: number;
  unitSize?: number;
  showLabels?: boolean; // New prop to control label visibility
}

const DistanceTimeMotionTypes: React.FC<TypesOfMotionProps> = ({
  width = 400,
  height = 300,
  unitSize = 40,
  showLabels = true, // Labels are shown by default
}) => {
  const padding = 40;
  const graphWidth = width - 2 * padding;
  const graphHeight = height - 2 * padding;
  const maxX = graphWidth / unitSize;
  const maxY = graphHeight / unitSize;

  const graphToSvg = (x: number, y: number) => ({
    x: padding + x * unitSize,
    y: height - padding - y * unitSize,
  });

  const renderTicks = () => {
    const ticks = [];
    
    for (let i = 0; i <= maxX; i++) {
      const { x, y } = graphToSvg(i, 0);
      ticks.push(
        <g key={`x-${i}`}>
          <line x1={x} y1={y} x2={x} y2={y + 5} stroke="#4b5563" strokeWidth="1" />
          <text x={x} y={y + 20} textAnchor="middle" className="text-xs fill-gray-600">
            {i}
          </text>
        </g>
      );
    }

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
    
    return ticks;
  };

  // At Rest (Horizontal line at distance = 0)
  const atRestLine = [
    graphToSvg(0, 0),
    graphToSvg(6, 0)
  ];

  // Uniform Motion (Straight line from (0,0) to (6,4))
  const uniformLine = [
    graphToSvg(0, 0),
    graphToSvg(6, 4)
  ];

  // Acceleration (Curved line, increasing slope)
  const accelerationPoints = [
    graphToSvg(0, 0),
    graphToSvg(1, 0.1),
    graphToSvg(2, 0.4),
    graphToSvg(3, 0.9),
    graphToSvg(4, 1.6),
    graphToSvg(5, 2.5),
    graphToSvg(6, 3.6)
  ];
  let accelerationPath = `M ${accelerationPoints[0].x} ${accelerationPoints[0].y}`;
  for (let i = 1; i < accelerationPoints.length; i++) {
      accelerationPath += ` L ${accelerationPoints[i].x} ${accelerationPoints[i].y}`;
  }

  // Deceleration (Curved line, decreasing slope)
  const decelerationPoints = [
    graphToSvg(0, 0),
    graphToSvg(1, 1.5),
    graphToSvg(2, 2.6),
    graphToSvg(3, 3.3),
    graphToSvg(4, 3.7),
    graphToSvg(5, 3.9),
    graphToSvg(6, 4)
  ];
  let decelerationPath = `M ${decelerationPoints[0].x} ${decelerationPoints[0].y}`;
  for (let i = 1; i < decelerationPoints.length; i++) {
      decelerationPath += ` L ${decelerationPoints[i].x} ${decelerationPoints[i].y}`;
  }

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md border border-gray-200">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {Array.from({ length: maxX + 1 }).map((_, i) => {
          const { x } = graphToSvg(i, 0);
          return (
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
        })}
        {Array.from({ length: maxY + 1 }).map((_, i) => {
          const { y } = graphToSvg(0, i);
          return (
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
        })}
        
        <line 
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          className="stroke-gray-700"
          strokeWidth="2"
        />
        <line 
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          className="stroke-gray-700"
          strokeWidth="2"
        />
        
        {renderTicks()}
        
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
          Distance (m)
        </text>
        
        <text 
          x={padding - 10} 
          y={height - padding + 25} 
          textAnchor="end" 
          className="text-xs fill-gray-500"
        >
          0
        </text>
        
        {/* At Rest - Blue */}
        <line
          x1={atRestLine[0].x}
          y1={atRestLine[0].y}
          x2={atRestLine[1].x}
          y2={atRestLine[1].y}
          className="stroke-blue-500"
          strokeWidth="3"
        />
        {showLabels && (
          <text
            x={atRestLine[1].x + 10}
            y={atRestLine[1].y - 10}
            className="text-xs font-bold fill-blue-600"
          >
            At Rest
          </text>
        )}
        
        {/* Uniform Motion - Green */}
        <line
          x1={uniformLine[0].x}
          y1={uniformLine[0].y}
          x2={uniformLine[1].x}
          y2={uniformLine[1].y}
          className="stroke-green-500"
          strokeWidth="3"
        />
        {showLabels && (
          <text
            x={uniformLine[1].x + 10}
            y={uniformLine[1].y - 10}
            className="text-xs font-bold fill-green-600"
          >
            Uniform Motion
          </text>
        )}
        
        {/* Acceleration - Amber */}
        <path
          d={accelerationPath}
          fill="none"
          className="stroke-amber-500"
          strokeWidth="3"
        />
        {showLabels && (
          <text
            x={accelerationPoints[accelerationPoints.length - 1].x + 10}
            y={accelerationPoints[accelerationPoints.length - 1].y - 10}
            className="text-xs font-bold fill-amber-600"
          >
            Acceleration
          </text>
        )}
        
        {/* Deceleration - Red */}
        <path
          d={decelerationPath}
          fill="none"
          className="stroke-red-500"
          strokeWidth="3"
        />
        {showLabels && (
          <text
            x={decelerationPoints[decelerationPoints.length - 1].x + 10}
            y={decelerationPoints[decelerationPoints.length - 1].y - 10}
            className="text-xs font-bold fill-red-600"
          >
            Deceleration
          </text>
        )}
        
        {/* Legend */}
        {showLabels && (
          <g transform={`translate(${width - 170}, ${padding + 10})`}>
            <rect x="0" y="0" width="160" height="85" fill="white" stroke="#e5e7eb" strokeWidth="1" rx="5" />
            <text x="10" y="20" className="text-xs font-bold fill-gray-800">Types of Motion:</text>
            
            <line x1="10" y1="35" x2="30" y2="35" className="stroke-blue-500" strokeWidth="3" />
            <text x="35" y="39" className="text-xs fill-gray-700">At Rest</text>
            
            <line x1="10" y1="50" x2="30" y2="50" className="stroke-green-500" strokeWidth="3" />
            <text x="35" y="54" className="text-xs fill-gray-700">Uniform Motion</text>
            
            <path d="M 10 65 Q 20 60 30 65" fill="none" className="stroke-amber-500" strokeWidth="3" />
            <text x="35" y="69" className="text-xs fill-gray-700">Acceleration</text>
            
            <path d="M 10 80 Q 20 75 30 80" fill="none" className="stroke-red-500" strokeWidth="3" />
            <text x="35" y="84" className="text-xs fill-gray-700">Deceleration</text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default DistanceTimeMotionTypes;