import React from 'react';

interface QuadrantsProps {
  width?: number;
  height?: number;
  unitSize?: number; // pixels per unit
}

const Quadrants: React.FC<QuadrantsProps> = ({
  width = 300,
  height = 300,
  unitSize = 30
}) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const maxUnitsX = Math.floor(centerX / unitSize);
  const maxUnitsY = Math.floor(centerY / unitSize);

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

  // Quadrant labels
  const renderQuadrantLabels = () => (
    <>
      <text x={width - 20} y={20} textAnchor="end" fontSize={14} fontWeight="bold" fill="#1e40af">I</text>
      <text x={20} y={20} textAnchor="start" fontSize={14} fontWeight="bold" fill="#166534">II</text>
      <text x={20} y={height - 10} textAnchor="start" fontSize={14} fontWeight="bold" fill="#991b1b">III</text>
      <text x={width - 20} y={height - 10} textAnchor="end" fontSize={14} fontWeight="bold" fill="#7e22ce">IV</text>
    </>
  );

  return (
    <div className="quadrants-container" style={{ overflow: 'hidden', maxWidth: '100%' }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Colored Quadrants */}
        <rect 
          x={centerX} 
          y={0} 
          width={centerX} 
          height={centerY} 
          fill="#dbeafe" // Light blue for Quadrant I
        />
        <rect 
          x={0} 
          y={0} 
          width={centerX} 
          height={centerY} 
          fill="#dcfce7" // Light green for Quadrant II
        />
        <rect 
          x={0} 
          y={centerY} 
          width={centerX} 
          height={centerY} 
          fill="#fee2e2" // Light red for Quadrant III
        />
        <rect 
          x={centerX} 
          y={centerY} 
          width={centerX} 
          height={centerY} 
          fill="#f3e8ff" // Light purple for Quadrant IV
        />
        
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
        
        {/* Quadrant labels */}
        {renderQuadrantLabels()}
      </svg>
    </div>
  );
};

export default Quadrants;