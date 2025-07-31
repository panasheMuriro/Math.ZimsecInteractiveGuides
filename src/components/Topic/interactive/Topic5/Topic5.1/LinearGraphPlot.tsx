import React from 'react';

interface LinearGraphPlotProps {
  width?: number;
  height?: number;
  unitSize?: number;
  gradient?: number;
  yIntercept?: number;
  xRange?: [number, number];
  minX?: number;
  maxX?: number;
  minY?: number;
  maxY?: number;
}

const LinearGraphPlot: React.FC<LinearGraphPlotProps> = ({
  width = 300,
  height = 300,
  unitSize = 30,
  gradient = 2,
  yIntercept = 2,
  xRange = [-3, 3] as [number, number],
  minX = -5,
  maxX = 5,
  minY = -5,
  maxY = 5
}) => {
  const centerX = width / 2;
  const centerY = height / 2;
  
  // Generate points based on linear equation y = mx + c
  const generatePoints = () => {
    const points: [number, number][] = [];
    const [startX, endX] = xRange;
    
    for (let x = startX; x <= endX; x += 1) {
      const y = gradient * x + yIntercept;
      points.push([x, y] as [number, number]);
    }
    
    return points;
  };

  const points = generatePoints();
  
  // Convert Cartesian coordinates to SVG coordinates
  const cartesianToSvg = (x: number, y: number) => ({
    x: centerX + x * unitSize,
    y: centerY - y * unitSize
  });

  // Generate tick marks and labels
  const renderTicks = () => {
    const ticks = [];
    
    // X-axis ticks and labels
    for (let i = minX; i <= maxX; i++) {
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
    for (let i = minY; i <= maxY; i++) {
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

  // Generate line path
  const generateLinePath = () => {
    if (points.length < 2) return '';
    
    // Calculate extended line points to cover full graph area
    const startX = minX;
    const endX = maxX;
    const startY = gradient * startX + yIntercept;
    const endY = gradient * endX + yIntercept;
    
    const startSvg = cartesianToSvg(startX, startY);
    const endSvg = cartesianToSvg(endX, endY);
    
    return `M ${startSvg.x} ${startSvg.y} L ${endSvg.x} ${endSvg.y}`;
  };

  // Generate point markers
  const renderPoints = () => {
    return points.map((point, index) => {
      const { x, y } = cartesianToSvg(point[0], point[1]);
      return (
        <circle 
          key={index}
          cx={x} 
          cy={y} 
          r={4} 
          className="fill-blue-500 stroke-white stroke-1" 
        />
      );
    });
  };

  // Generate equation label
  const generateEquationLabel = () => {
    if (gradient === 0) {
      return `y = ${yIntercept}`;
    } else if (gradient === 1) {
      return yIntercept === 0 ? 'y = x' : `y = x ${yIntercept >= 0 ? '+' : ''}${yIntercept}`;
    } else if (gradient === -1) {
      return yIntercept === 0 ? 'y = -x' : `y = -x ${yIntercept >= 0 ? '+' : ''}${yIntercept}`;
    } else {
      return yIntercept === 0 ? `y = ${gradient}x` : `y = ${gradient}x ${yIntercept >= 0 ? '+' : ''}${yIntercept}`;
    }
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
        {Array.from({ length: maxX - minX + 1 }).map((_, i) => {
          const xVal = minX + i;
          const { x } = cartesianToSvg(xVal, 0);
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
        {Array.from({ length: maxY - minY + 1 }).map((_, i) => {
          const yVal = minY + i;
          const { y } = cartesianToSvg(0, yVal);
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
        
        {/* Line graph */}
        <path
          d={generateLinePath()}
          fill="none"
          className="stroke-blue-500 stroke-[2.5] stroke-linecap-round stroke-linejoin-round"
        />
        
        {/* Point markers */}
        {renderPoints()}
        
        {/* Equation label */}
        <text 
          x={20} 
          y={20} 
          className="text-sm font-bold fill-blue-600"
        >
          {generateEquationLabel()}
        </text>
      </svg>
    </div>
  );
};

export default LinearGraphPlot;