/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// Define types for flexibility
type GraphType = 'distance-time' | 'velocity-time' | 'displacement-time';

interface MotionGraphExampleProps {
  graphType: GraphType;
  width?: number;
  height?: number;
  unitSize?: number;
}

// --- Helper function to generate parabolic points ---
const generateParabolicPoints = (
  startX: number,
  startY: number,
  peakX: number,
  peakY: number,
  endX: number,
  endY: number,
  numPoints: number
): [number, number][] => {
  const points: [number, number][] = [];
  // Generate points for the upward part of the parabola (start to peak)
  for (let i = 0; i <= Math.floor(numPoints / 2); i++) {
    const t = i / Math.floor(numPoints / 2);
    const x = startX + t * (peakX - startX);
    // Parabolic equation for y: y = a*(x - h)^2 + k, where (h,k) is the vertex (peakX, peakY)
    // We know it passes through (startX, startY), so we can solve for 'a'
    // a = (startY - peakY) / ( (startX - peakX)^2 )
    const a = (startY - peakY) / Math.pow(startX - peakX, 2);
    const y = a * Math.pow(x - peakX, 2) + peakY;
    points.push([x, y]);
  }
  // Generate points for the downward part of the parabola (peak to end)
  // Note: For a symmetrical parabola starting and ending at y=0, this is the same curve.
  // The logic above already covers the full curve from start to end if it's a single parabola.
  // Let's simplify and generate the whole curve directly.
  
  // Simpler approach: Generate points for the entire parabola from start to end
  points.length = 0; // Clear previous points
  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const x = startX + t * (endX - startX);
    // Using the general parabolic form y = a*x^2 + b*x + c
    // We have three points: (startX, startY), (peakX, peakY), (endX, endY)
    // Solving for a, b, c:
    // startY = a*startX^2 + b*startX + c  --- (1)
    // peakY  = a*peakX^2  + b*peakX  + c  --- (2)
    // endY   = a*endX^2   + b*endX   + c  --- (3)
    
    // For simplicity, and because our example starts and ends at y=0,
    // we can use the vertex form: y = a*(x - h)^2 + k
    // Where (h, k) is the vertex (peakX, peakY).
    // We know it passes through (startX, startY), so:
    // const a = (startY - peakY) / Math.pow(startX - peakX, 2);
    // Since startY = 0 and endY = 0 in our example, this simplifies nicely.
    // But let's use the general calculation to be robust.
    // Recalculate 'a' correctly:
    // From (1) and (2): startY - peakY = a*(startX^2 - peakX^2) + b*(startX - peakX)
    // From (3) and (2): endY - peakY = a*(endX^2 - peakX^2) + b*(endX - peakX)
    // Let d1 = startX - peakX, d2 = endX - peakX
    // startY - peakY = a*(startX^2 - peakX^2) + b*d1
    // endY - peakY = a*(endX^2 - peakX^2) + b*d2
    // Let diff1 = startY - peakY, diff2 = endY - peakY
    // diff1 = a*(startX^2 - peakX^2) + b*d1
    // diff2 = a*(endX^2 - peakX^2) + b*d2
    // Multiply first by d2, second by d1:
    // diff1*d2 = a*(startX^2 - peakX^2)*d2 + b*d1*d2
    // diff2*d1 = a*(endX^2 - peakX^2)*d1 + b*d1*d2
    // Subtract:
    // diff1*d2 - diff2*d1 = a*[(startX^2 - peakX^2)*d2 - (endX^2 - peakX^2)*d1]
    // Solve for a:
    const d1 = startX - peakX;
    const d2 = endX - peakX;
    const diff1 = startY - peakY;
    const diff2 = endY - peakY;
    const denominator = (Math.pow(startX, 2) - Math.pow(peakX, 2)) * d2 - (Math.pow(endX, 2) - Math.pow(peakX, 2)) * d1;
    
    if (Math.abs(denominator) < 1e-10) { // Avoid division by zero or near-zero
        // Fallback to simple vertex form if points are problematic
        const a_simple = (startY - peakY) / Math.pow(startX - peakX, 2);
        const y = a_simple * Math.pow(x - peakX, 2) + peakY;
        points.push([x, y]);
    } else {
         const a_calc = (diff1 * d2 - diff2 * d1) / denominator;
        // Now solve for b using one of the original equations:
        // diff1 = a*(startX^2 - peakX^2) + b*d1  =>  b = (diff1 - a*(startX^2 - peakX^2)) / d1
        // Handle case where d1 is zero (peakX = startX)
        let b_calc;
        if (Math.abs(d1) > 1e-10) {
            b_calc = (diff1 - a_calc * (Math.pow(startX, 2) - Math.pow(peakX, 2))) / d1;
        } else {
            // Use the other equation
            b_calc = (diff2 - a_calc * (Math.pow(endX, 2) - Math.pow(peakX, 2))) / d2;
        }
        // Calculate c using equation (2):
        const c_calc = peakY - a_calc * Math.pow(peakX, 2) - b_calc * peakX;
        
        const y = a_calc * Math.pow(x, 2) + b_calc * x + c_calc;
        points.push([x, y]);
    }
  }
  return points;
};

// Configuration object to hold graph-specific details
const GRAPH_CONFIGS: Record<GraphType, {
  yAxisLabel: string;
  segments: {
    points: [number, number][] | 'generateParabola'; // 'generateParabola' is a special flag
    startPoint?: [number, number]; // For parabola generation
    peakPoint?: [number, number];  // For parabola generation
    endPoint?: [number, number];   // For parabola generation
    numPoints?: number;            // For parabola generation
    colorClass: string;
    label: string;
    labelClass: string;
    labelPosition?: { x: number; y: number; textAnchor?: string }; // Optional custom label position
  }[];
  legendItems: { label: string; colorClass: string }[];
  exampleDescription: string;
}> = {
  'distance-time': {
    yAxisLabel: 'Distance (m)',
    segments: [
      {
        points: [[0, 0], [2, 5]],
        colorClass: 'stroke-blue-600',
        label: '5 m/s away',
        labelClass: 'fill-blue-700',
      },
      {
        points: [[2, 5], [4, 5]],
        colorClass: 'stroke-green-600',
        label: 'Stationary',
        labelClass: 'fill-green-700',
      },
      {
        points: [[4, 5], [6, 0]], // Adjusted end time to 6s to match original example duration
        colorClass: 'stroke-red-600',
        label: '5 m/s towards start',
        labelClass: 'fill-red-700',
      },
    ],
    legendItems: [
      { label: 'Moving Away', colorClass: 'stroke-blue-600' },
      { label: 'Stationary', colorClass: 'stroke-green-600' },
      { label: 'Returning', colorClass: 'stroke-red-600' },
    ],
    exampleDescription: "An object moves away at 5 m/s for 2s,\nthen is stationary for 2s,\nthen returns at 5 m/s for 2s.",
  },
  'velocity-time': {
    yAxisLabel: 'Velocity (m/s)',
    segments: [
      {
        points: [[0, 0], [2, 5]],
        colorClass: 'stroke-blue-600',
        label: 'Accel. 2.5 m/s²',
        labelClass: 'fill-blue-700',
      },
      {
        points: [[2, 5], [4, 5]],
        colorClass: 'stroke-green-600',
        label: 'Constant 5 m/s',
        labelClass: 'fill-green-700',
      },
      {
        points: [[4, 5], [6, 0]],
        colorClass: 'stroke-red-600',
        label: 'Decel. -2.5 m/s²',
        labelClass: 'fill-red-700',
      },
    ],
    legendItems: [
      { label: 'Acceleration', colorClass: 'stroke-blue-600' },
      { label: 'Constant Vel.', colorClass: 'stroke-green-600' },
      { label: 'Deceleration', colorClass: 'stroke-red-600' },
    ],
    exampleDescription: "Velocity increases from 0 to 5 m/s in 2s,\nremains constant at 5 m/s for 2s,\nthen decreases to 0 m/s in 2s.",
  },
  'displacement-time': {
    yAxisLabel: 'Displacement (m)',
    segments: [
      {
        // Special flag to indicate this segment should be generated as a parabola
        points: 'generateParabola',
        startPoint: [0, 0],
        peakPoint: [2, 5], // Maximum displacement = 5m at t = 2s
        endPoint: [4, 0],  // Returns to starting position at t = 4s
        numPoints: 20,    // Number of points to generate for the curve
        colorClass: 'stroke-purple-600',
        label: 'Parabolic Motion',
        labelClass: 'fill-purple-700',
        labelPosition: { x: 2, y: 5, textAnchor: 'middle' } // Label at the peak
      }
    ],
    legendItems: [
      { label: 'Up then Down (Parabola)', colorClass: 'stroke-purple-600' }
    ],
    exampleDescription: "A ball is thrown up, reaching 5m at 2s,\nthen falls back, returning to start at 4s.",
  },
};

const MotionGraphExample: React.FC<MotionGraphExampleProps> = ({
  graphType,
  width = 400,
  height = 300,
  unitSize = 40,
}) => {
  const config = GRAPH_CONFIGS[graphType];
  const padding = 40;

  
  // Dynamically calculate maxX and maxY based on segment points
  let maxX = 6; // Default or minimum
  let maxY = 6; // Default or minimum
  config.segments.forEach(segment => {
    if (segment.points !== 'generateParabola') {
        segment.points.forEach(([x, y]) => {
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        });
    } else {
        // Handle generated parabola points
        if (segment.startPoint && segment.endPoint) {
            maxX = Math.max(maxX, segment.endPoint[0]);
            maxY = Math.max(maxY, (segment.peakPoint?.[1] || 0));
        }
    }
  });

  // Convert graph coordinates to SVG coordinates
  const graphToSvg = (x: number, y: number) => ({
    x: padding + x * unitSize,
    y: height - padding - y * unitSize,
  });

  // Generate axis ticks and labels
  const renderTicks = () => {
    const ticks = [];
    
    // X-axis ticks (Time) - up to maxX
    for (let i = 0; i <= Math.ceil(maxX); i++) {
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

    // Y-axis ticks (Distance/Velocity/Displacement) - up to maxY
    for (let i = 0; i <= Math.ceil(maxY); i++) {
      // Add tick at y=0 for displacement if it's within range and not already added by loop
      if (graphType === 'displacement-time' && i === 0) continue; 
      
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
    
    // Ensure 0 tick is present for all graphs, especially displacement
    const { x: zeroX, y: zeroY } = graphToSvg(0, 0);
    ticks.push(
      <g key={`y-0`}>
        <line x1={zeroX - 5} y1={zeroY} x2={zeroX} y2={zeroY} stroke="#4b5563" strokeWidth="1" />
        <text x={zeroX - 10} y={zeroY + 4} textAnchor="end" className="text-xs fill-gray-600">
          0
        </text>
      </g>
    );

    return ticks;
  };

  // Render graph segments
  const renderSegments = () => {
    return config.segments.map((segment, index) => {
      let svgPoints;
      
      // Handle special case for parabolic generation
      if (segment.points === 'generateParabola' && segment.startPoint && segment.peakPoint && segment.endPoint) {
        const generatedPoints = generateParabolicPoints(
          segment.startPoint[0],
          segment.startPoint[1],
          segment.peakPoint[0],
          segment.peakPoint[1],
          segment.endPoint[0],
          segment.endPoint[1],
          segment.numPoints || 20
        );
        svgPoints = generatedPoints.map(([x, y]) => graphToSvg(x, y));
      } else {
        // Standard point array
        svgPoints = (segment.points as [number, number][]).map(([x, y]) => graphToSvg(x, y));
      }

      if (svgPoints.length >= 2) {
        // Create path data for lines or curves
        let pathData = `M ${svgPoints[0].x} ${svgPoints[0].y}`;
        for (let i = 1; i < svgPoints.length; i++) {
            pathData += ` L ${svgPoints[i].x} ${svgPoints[i].y}`;
        }
        
        // Determine label position
        let labelX, labelY, textAnchor = 'start';
        if (segment.labelPosition) {
            const svgPos = graphToSvg(segment.labelPosition.x, segment.labelPosition.y);
            labelX = svgPos.x;
            labelY = svgPos.y;
            textAnchor = segment.labelPosition.textAnchor || 'start';
        } else {
            // Default to midpoint of the last segment or a significant point
            const lastPoint = svgPoints[svgPoints.length - 1];
            const secondLastPoint = svgPoints[svgPoints.length - 2] || svgPoints[0];
            labelX = (lastPoint.x + secondLastPoint.x) / 2 + 10; // Offset slightly
            labelY = (lastPoint.y + secondLastPoint.y) / 2 - 10;
        }

        return (
          <g key={`segment-${index}`}>
            <path
              d={pathData}
              fill="none"
              className={segment.colorClass}
              strokeWidth="3"
            />
            {segment.label && (
              <text
                x={labelX}
                y={labelY}
                textAnchor={textAnchor as any} // Type assertion for SVG attribute
                className={`text-xs font-bold ${segment.labelClass.replace('fill-', '')}`}
              >
                {segment.label}
              </text>
            )}
          </g>
        );
      }
      return null;
    });
  };

  // Render data points (start, peak, end etc.)
  const renderDataPoints = () => {
    const pointsToRender: { x: number; y: number }[] = [];
    
    if (graphType === 'distance-time') {
        pointsToRender.push(graphToSvg(0, 0)); // Start
        pointsToRender.push(graphToSvg(2, 5)); // Midpoint 1
        pointsToRender.push(graphToSvg(4, 5)); // Midpoint 2
        pointsToRender.push(graphToSvg(6, 0)); // End
    } else if (graphType === 'velocity-time') {
        pointsToRender.push(graphToSvg(0, 0)); // Start
        pointsToRender.push(graphToSvg(2, 5)); // Midpoint 1
        pointsToRender.push(graphToSvg(4, 5)); // Midpoint 2
        pointsToRender.push(graphToSvg(6, 0)); // End
    } else if (graphType === 'displacement-time') {
        pointsToRender.push(graphToSvg(0, 0));   // Start
        pointsToRender.push(graphToSvg(2, 5));   // Peak
        pointsToRender.push(graphToSvg(4, 0));   // End
    }

    return pointsToRender.map((point, index) => (
      <circle
        key={`point-${index}`}
        cx={point.x}
        cy={point.y}
        r="4"
        className="fill-white stroke-gray-800 stroke-2"
      />
    ));
  };

  // Render the legend
  const renderLegend = () => {
    // Calculate height based on number of legend items
    const legendHeight = config.legendItems.length * 15 + 35;
    return (
      <g transform={`translate(${width - 170}, ${padding + 10})`}>
        <rect x="0" y="0" width="160" height={legendHeight} fill="white" stroke="#e5e7eb" strokeWidth="1" rx="5" />
        <text x="10" y="20" className="text-xs font-bold fill-gray-800">Motion Phases:</text>
        {config.legendItems.map((item, index) => (
          <g key={`legend-${index}`} transform={`translate(0, ${25 + index * 15})`}>
            {/* Use path for curved legend item if needed, otherwise line */}
            {graphType === 'displacement-time' ? (
              // Represent curved line with a small path in the legend
              <path d="M 10 5 Q 15 0 20 5 Q 25 10 30 5" fill="none" className={item.colorClass} strokeWidth="3" />
            ) : (
              <line x1="10" y1="5" x2="30" y2="5" className={item.colorClass} strokeWidth="3" />
            )}
            <text x="35" y="9" className="text-xs fill-gray-700">{item.label}</text>
          </g>
        ))}
      </g>
    );
  };

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md border border-gray-200">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Grid lines - adjust to maxX and maxY */}
        {Array.from({ length: Math.ceil(maxX) + 1 }).map((_, i) => {
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
        {Array.from({ length: Math.ceil(maxY) + 1 }).map((_, i) => {
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
        
        {/* Axes */}
        <line // X-axis
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          className="stroke-gray-700"
          strokeWidth="2"
        />
        <line // Y-axis
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          className="stroke-gray-700"
          strokeWidth="2"
        />
        
        {/* Ticks and labels */}
        {renderTicks()}
        
        {/* Axis labels */}
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
        
        {/* Origin label is handled by renderTicks now */}
        
        {/* Graph Segments */}
        {renderSegments()}

        {/* Data Points */}
        {renderDataPoints()}
        
        {/* Legend */}
        {renderLegend()}
      </svg>
    </div>
  );
};

export default MotionGraphExample;