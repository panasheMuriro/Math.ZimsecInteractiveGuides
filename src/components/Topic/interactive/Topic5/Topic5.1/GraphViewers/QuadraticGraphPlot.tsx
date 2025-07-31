import React from 'react';

interface QuadraticGraphPlotProps {
  width?: number;
  height?: number;
  unitSize?: number;
  a?: number; // Coefficient of x²
  b?: number; // Coefficient of x
  c?: number; // Constant term
  xRange?: [number, number];
  minX?: number;
  maxX?: number;
  minY?: number;
  maxY?: number;
  showPoints?: boolean;
}

const QuadraticGraphPlot: React.FC<QuadraticGraphPlotProps> = ({
  width = 300,
  height = 300,
  unitSize = 30,
  a = 1,
  b = 0,
  c = 0,
  xRange = [-5, 5] as [number, number],
  minX = -6,
  maxX = 6,
  minY = -6,
  maxY = 6,
  showPoints = true
}) => {
  const centerX = width / 2;
  const centerY = height / 2;
  
  // Generate points based on quadratic equation y = ax² + bx + c
  const generatePoints = () => {
    const points: [number, number][] = [];
    const [startX, endX] = xRange;
    const step = 0.2; // Very fine resolution for smooth curves
    
    for (let x = startX; x <= endX; x += step) {
      const y = a * x * x + b * x + c;
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

  // Alternative simpler approach: just use line segments with high resolution
  const generateSimpleSmoothCurvePath = () => {
    if (points.length < 2) return '';
    
    const pathParts = points.map((point, index) => {
      const { x, y } = cartesianToSvg(point[0], point[1]);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    });
    
    return pathParts.join(' ');
  };

  // Generate point markers
  const renderPoints = () => {
    if (!showPoints) return null;
    
    // Show points at integer x values for clarity
    const integerPoints: [number, number][] = [];
    const [startX, endX] = xRange;
    
    for (let x = Math.ceil(startX); x <= Math.floor(endX); x++) {
      const y = a * x * x + b * x + c;
      integerPoints.push([x, y] as [number, number]);
    }
    
    return integerPoints.map((point, index) => {
      const { x, y } = cartesianToSvg(point[0], point[1]);
      return (
        <circle 
          key={index}
          cx={x} 
          cy={y} 
          r={4} 
          className="fill-purple-500 stroke-white stroke-1" 
        />
      );
    });
  };

  // Generate equation label
  const generateEquationLabel = () => {
    let equation = 'y = ';
    
    // Handle coefficient 'a'
    if (a === 0) {
      equation = 'y = ';
    } else if (a === 1) {
      equation += 'x²';
    } else if (a === -1) {
      equation += '-x²';
    } else {
      equation += `${a}x²`;
    }
    
    // Handle coefficient 'b'
    if (b > 0) {
      equation += a !== 0 ? ` + ${b === 1 ? 'x' : `${b}x`}` : (b === 1 ? 'x' : `${b}x`);
    } else if (b < 0) {
      equation += ` - ${b === -1 ? 'x' : `${Math.abs(b)}x`}`;
    }
    
    // Handle coefficient 'c'
    if (c > 0) {
      equation += ` + ${c}`;
    } else if (c < 0) {
      equation += ` - ${Math.abs(c)}`;
    }
    
    // Handle special case where all coefficients are zero
    if (a === 0 && b === 0 && c === 0) {
      equation += '0';
    }
    
    return equation;
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
        
        {/* Smooth quadratic curve */}
        <path
          d={generateSimpleSmoothCurvePath()}
          fill="none"
          className="stroke-purple-500 stroke-[2.5] stroke-linecap-round stroke-linejoin-round"
        />
        
        {/* Point markers */}
        {renderPoints()}
        
        {/* Equation label */}
        <text 
          x={20} 
          y={20} 
          className="text-sm font-bold fill-purple-600"
        >
          {generateEquationLabel()}
        </text>
      </svg>
    </div>
  );
};

export default QuadraticGraphPlot;