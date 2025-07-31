import React from 'react';

interface PointPlotProps {
  width?: number;
  height?: number;
  unitSize?: number;
  point?: [number, number];
}

const PointPlot: React.FC<PointPlotProps> = ({
  width = 300,
  height = 300,
  unitSize = 30,
  point = [3, -2]
}) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const maxUnitsX = Math.floor(centerX / unitSize);
  const maxUnitsY = Math.floor(centerY / unitSize);
  
  // Convert Cartesian coordinates to SVG coordinates
  const x = centerX + point[0] * unitSize;
  const y = centerY - point[1] * unitSize;

  // Generate tick marks and labels
  const renderTicks = () => {
    const ticks = [];
    
    // X-axis ticks and labels
    for (let i = -maxUnitsX; i <= maxUnitsX; i++) {
      if (i === 0) continue;
      const x = centerX + i * unitSize;
      ticks.push(
        <g key={`x-${i}`}>
          <line 
            x1={x} 
            y1={centerY - 5} 
            x2={x} 
            y2={centerY + 5} 
            stroke="black" 
            strokeWidth={1} 
          />
          <text 
            x={x} 
            y={centerY + 20} 
            textAnchor="middle" 
            fontSize={12}
            fill="black"
          >
            {i}
          </text>
        </g>
      );
    }

    // Y-axis ticks and labels
    for (let i = -maxUnitsY; i <= maxUnitsY; i++) {
      if (i === 0) continue;
      const y = centerY - i * unitSize;
      ticks.push(
        <g key={`y-${i}`}>
          <line 
            x1={centerX - 5} 
            y1={y} 
            x2={centerX + 5} 
            y2={y} 
            stroke="black" 
            strokeWidth={1} 
          />
          <text 
            x={centerX - 15} 
            y={y + 4} 
            textAnchor="end" 
            fontSize={12}
            fill="black"
          >
            {i}
          </text>
        </g>
      );
    }
    
    return ticks;
  };

  return (
    <div className="point-plot-container" style={{ overflow: 'hidden', maxWidth: '100%' }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Grid lines */}
        {Array.from({ length: maxUnitsX * 2 + 1 }).map((_, i) => {
          const x = i * unitSize;
          return (
            <line
              key={`grid-x-${i}`}
              x1={x}
              y1={0}
              x2={x}
              y2={height}
              stroke="#e5e7eb"
              strokeWidth={1}
            />
          );
        })}
        {Array.from({ length: maxUnitsY * 2 + 1 }).map((_, i) => {
          const y = i * unitSize;
          return (
            <line
              key={`grid-y-${i}`}
              x1={0}
              y1={y}
              x2={width}
              y2={y}
              stroke="#e5e7eb"
              strokeWidth={1}
            />
          );
        })}
        
        {/* Axes */}
        <line 
          x1={0} 
          y1={centerY} 
          x2={width} 
          y2={centerY} 
          stroke="black" 
          strokeWidth={2} 
        />
        <line 
          x1={centerX} 
          y1={0} 
          x2={centerX} 
          y2={height} 
          stroke="black" 
          strokeWidth={2} 
        />
        
        {/* Ticks and labels */}
        {renderTicks()}
        
        {/* Origin label */}
        <circle cx={centerX} cy={centerY} r={3} fill="black" />
        <text x={centerX + 10} y={centerY + 15} fontSize={12} fill="black">(0,0)</text>
        
        {/* Axis labels */}
        <text x={width - 10} y={centerY - 10} textAnchor="end" fontSize={14} fontWeight="bold">x</text>
        <text x={centerX + 10} y={15} textAnchor="start" fontSize={14} fontWeight="bold">y</text>
        
        {/* Plotted point */}
        <circle cx={x} cy={y} r={5} fill="#ef4444" stroke="#b91c1c" strokeWidth={1.5} />
        <text 
          x={x + 10} 
          y={y - 10} 
          fontSize={14} 
          fontWeight="bold" 
          fill="#1e293b"
        >
          ({point[0]}, {point[1]})
        </text>
      </svg>
    </div>
  );
};

export default PointPlot;