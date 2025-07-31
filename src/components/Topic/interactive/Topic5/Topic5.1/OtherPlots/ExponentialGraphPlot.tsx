// src/Components/GraphViewers/ExponentialGraphPlot.tsx
import React from 'react';

interface ExponentialGraphPlotProps {
  width?: number;
  height?: number;
  unitSize?: number;
  a?: number; // Base in y = a^x (a > 0, a ≠ 1)
  minX?: number;
  maxX?: number;
  minY?: number;
  maxY?: number;
  showPoints?: boolean;
}

const ExponentialGraphPlot: React.FC<ExponentialGraphPlotProps> = ({
  width = 300,
  height = 300,
  unitSize = 30,
  a = 2, // Default to y = 2^x
  minX = -3,
  maxX = 3,
  minY = -1,
  maxY = 8,
}) => {
  const centerX = width / 2;
  const centerY = height / 2;
  
  // Generate points for y = a^x
  const generatePoints = () => {
    const points: [number, number][] = [];
    const step = 0.1;
    
    for (let x = minX; x <= maxX; x += step) {
      // Handle potential overflow for large x or a
      let y;
      try {
        y = Math.pow(a, x);
        if (isFinite(y) && y >= minY && y <= maxY) {
          points.push([x, y] as [number, number]);
        }
      } catch{
        // Skip points that cause overflow
      }
    }
    
    return points;
  };

  const points = generatePoints();
  
  const cartesianToSvg = (x: number, y: number) => ({
    x: centerX + x * unitSize,
    y: centerY - y * unitSize
  });

  const renderTicks = () => {
    const ticks = [];
    for (let i = minX; i <= maxX; i++) {
      if (i === 0) continue;
      const { x } = cartesianToSvg(i, 0);
      ticks.push(
        <g key={`x-${i}`}>
          <line x1={x} y1={centerY - 5} x2={x} y2={centerY + 5} className="stroke-slate-400 stroke-1" />
          <text x={x} y={centerY + 20} textAnchor="middle" className="text-xs fill-slate-500">{i}</text>
        </g>
      );
    }
    for (let i = minY; i <= maxY; i++) {
      if (i === 0) continue;
      const { y } = cartesianToSvg(0, i);
      ticks.push(
        <g key={`y-${i}`}>
          <line x1={centerX - 5} y1={y} x2={centerX + 5} y2={y} className="stroke-slate-400 stroke-1" />
          <text x={centerX - 15} y={y + 4} textAnchor="end" className="text-xs fill-slate-500">{i}</text>
        </g>
      );
    }
    return ticks;
  };

  const generateCurvePath = () => {
    if (points.length < 2) return '';
    const pathParts = points.map((point, index) => {
      const { x, y } = cartesianToSvg(point[0], point[1]);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    });
    return pathParts.join(' ');
  };

  const generateEquationLabel = () => {
    if (a === Math.E) return 'y = eˣ';
    return `y = ${a}ˣ`;
  };

  return (
    <div className="overflow-hidden max-w-full bg-white rounded-lg shadow-md">
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
        {/* Grid lines */}
        {Array.from({ length: maxX - minX + 1 }).map((_, i) => {
          const xVal = minX + i;
          const { x } = cartesianToSvg(xVal, 0);
          return <line key={`grid-x-${i}`} x1={x} y1={0} x2={x} y2={height} className="stroke-slate-100 stroke-1" />;
        })}
        {Array.from({ length: maxY - minY + 1 }).map((_, i) => {
          const yVal = minY + i;
          const { y } = cartesianToSvg(0, yVal);
          return <line key={`grid-y-${i}`} x1={0} y1={y} x2={width} y2={y} className="stroke-slate-100 stroke-1" />;
        })}
        
        {/* Axes */}
        <line x1={0} y1={centerY} x2={width} y2={centerY} className="stroke-slate-700 stroke-2" />
        <line x1={centerX} y1={0} x2={centerX} y2={height} className="stroke-slate-700 stroke-2" />
        
        {renderTicks()}
        <circle cx={centerX} cy={centerY} r={3} className="fill-slate-700" />
        <text x={centerX + 10} y={centerY + 15} className="text-xs fill-slate-400">(0,0)</text>
        <text x={width - 15} y={centerY - 15} textAnchor="end" className="text-sm font-bold fill-slate-700">x</text>
        <text x={centerX + 15} y={20} textAnchor="start" className="text-sm font-bold fill-slate-700">y</text>
        
        <path d={generateCurvePath()} fill="none" className="stroke-red-500 stroke-[2.5] stroke-linecap-round stroke-linejoin-round" />
        <text x={20} y={20} className="text-sm font-bold fill-red-600">{generateEquationLabel()}</text>
      </svg>
    </div>
  );
};

export default ExponentialGraphPlot;