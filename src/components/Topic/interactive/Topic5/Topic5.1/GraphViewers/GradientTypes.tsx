import React from 'react';

interface GradientTypesProps {
  width?: number;
  height?: number;
  unitSize?: number;
}

const GradientTypes: React.FC<GradientTypesProps> = ({
  width = 300,
  height = 300,
  unitSize = 30
}) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const maxUnitsX = Math.floor(centerX / unitSize);
  const maxUnitsY = Math.floor(centerY / unitSize);
  
  // Convert Cartesian coordinates to SVG coordinates
  const cartesianToSvg = (x: number, y: number) => ({
    x: centerX + x * unitSize,
    y: centerY - y * unitSize
  });

  // Generate tick marks and labels
  const renderTicks = () => {
    const ticks = [];
    
    // X-axis ticks and labels
    for (let i = -maxUnitsX; i <= maxUnitsX; i++) {
      if (i === 0) continue;
      const { x } = cartesianToSvg(i, 0);
      ticks.push(
        <g key={`x-${i}`}>
          <line 
            x1={x} 
            y1={centerY - 5} 
            x2={x} 
            y2={centerY + 5} 
            className="stroke-slate-400 stroke-1" 
          />
          <text 
            x={x} 
            y={centerY + 20} 
            textAnchor="middle" 
            className="text-xs fill-slate-500"
          >
            {i}
          </text>
        </g>
      );
    }

    // Y-axis ticks and labels
    for (let i = -maxUnitsY; i <= maxUnitsY; i++) {
      if (i === 0) continue;
      const { y } = cartesianToSvg(0, i);
      ticks.push(
        <g key={`y-${i}`}>
          <line 
            x1={centerX - 5} 
            y1={y} 
            x2={centerX + 5} 
            y2={y} 
            className="stroke-slate-400 stroke-1" 
          />
          <text 
            x={centerX - 15} 
            y={y + 4} 
            textAnchor="end" 
            className="text-xs fill-slate-500"
          >
            {i}
          </text>
        </g>
      );
    }
    
    return ticks;
  };

  return (
    <div className="overflow-hidden max-w-full bg-white rounded-lg shadow-md">
      <svg 
        width="100%" 
        height={height}
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
              className="stroke-slate-100 stroke-1"
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
              className="stroke-slate-100 stroke-1"
            />
          );
        })}
        
        {/* Axes */}
        <line 
          x1={0} 
          y1={centerY} 
          x2={width} 
          y2={centerY} 
          className="stroke-slate-700 stroke-2" 
        />
        <line 
          x1={centerX} 
          y1={0} 
          x2={centerX} 
          y2={height} 
          className="stroke-slate-700 stroke-2" 
        />
        
        {/* Ticks and labels */}
        {renderTicks()}
        
        {/* Origin label */}
        <circle cx={centerX} cy={centerY} r={3} className="fill-slate-700" />
        <text x={centerX + 10} y={centerY + 15} className="text-xs fill-slate-400">(0,0)</text>
        
        {/* Axis labels */}
        <text x={width - 15} y={centerY - 15} textAnchor="end" className="text-sm font-bold fill-slate-700">x</text>
        <text x={centerX + 15} y={20} textAnchor="start" className="text-sm font-bold fill-slate-700">y</text>
        
        {/* Positive Gradient Line (Blue) - y = x */}
        <line 
          x1={cartesianToSvg(-4, -4).x} 
          y1={cartesianToSvg(-4, -4).y} 
          x2={cartesianToSvg(4, 4).x} 
          y2={cartesianToSvg(4, 4).y} 
          className="stroke-blue-500 stroke-2" 
        />
        <text 
          x={cartesianToSvg(2, 2).x + 10} 
          y={cartesianToSvg(2, 2).y - 10} 
          className="text-xs font-bold fill-blue-500"
        >
          Positive (m {'>'} 0)
        </text>
        
        {/* Negative Gradient Line (Orange) - y = -x */}
        <line 
          x1={cartesianToSvg(-4, 4).x} 
          y1={cartesianToSvg(-4, 4).y} 
          x2={cartesianToSvg(4, -4).x} 
          y2={cartesianToSvg(4, -4).y} 
          className="stroke-orange-500 stroke-2" 
        />
        <text 
          x={cartesianToSvg(2, -2).x + 10} 
          y={cartesianToSvg(2, -2).y - 10} 
          className="text-xs font-bold fill-orange-500"
        >
          Negative (m {'<'} 0)
        </text>
        
        {/* Zero Gradient Line (Green) - y = 1 */}
        <line 
          x1={cartesianToSvg(-4, 1).x} 
          y1={cartesianToSvg(-4, 1).y} 
          x2={cartesianToSvg(4, 1).x} 
          y2={cartesianToSvg(4, 1).y} 
          className="stroke-green-500 stroke-2" 
        />
        <text 
          x={cartesianToSvg(3, 1).x + 10} 
          y={cartesianToSvg(3, 1).y - 10} 
          className="text-xs font-bold fill-green-500"
        >
          Zero (m = 0)
        </text>
        
        {/* Undefined Gradient Line (Red) - x = -2 */}
        <line 
          x1={cartesianToSvg(-2, -4).x} 
          y1={cartesianToSvg(-2, -4).y} 
          x2={cartesianToSvg(-2, 4).x} 
          y2={cartesianToSvg(-2, 4).y} 
          className="stroke-red-500 stroke-2" 
        />
        <text 
          x={cartesianToSvg(-2, 3).x + 10} 
          y={cartesianToSvg(-2, 3).y - 10} 
          className="text-xs font-bold fill-red-500"
        >
          Undefined
        </text>
      </svg>
    </div>
  );
};

export default GradientTypes;