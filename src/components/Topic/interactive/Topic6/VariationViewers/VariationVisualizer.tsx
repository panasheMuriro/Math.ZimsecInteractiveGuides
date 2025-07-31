// import React from 'react';

// const VariationVisualizer: React.FC<{ type: string }> = ({ type }) => {
//   // Grid lines component with better spacing (40px per unit)
//   const GridLines = () => (
//     <>
//       {/* Vertical grid lines and labels */}
//       {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
//         <g key={`v-${i}`}>
//           <line
//             x1={40 + i * 40}
//             y1="20"
//             x2={40 + i * 40}
//             y2="180"
//             stroke="#e2e8f0"
//             strokeWidth="1"
//           />
//           <text 
//             x={40 + i * 40} 
//             y="195" 
//             fontSize="12" 
//             fill="#94a3b8" 
//             textAnchor="middle"
//           >
//             {i}
//           </text>
//         </g>
//       ))}
//       {/* Horizontal grid lines and labels */}
//       {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
//         <g key={`h-${i}`}>
//           <line
//             x1="40"
//             y1={20 + i * 16}
//             x2="360"
//             y2={20 + i * 16}
//             stroke="#e2e8f0"
//             strokeWidth="1"
//           />
//           <text 
//             x="30" 
//             y={20 + i * 16 + 5} 
//             fontSize="12" 
//             fill="#94a3b8" 
//             textAnchor="end"
//           >
//             {10 - i}
//           </text>
//         </g>
//       ))}
//     </>
//   );

//   // Axes component
//   const Axes = () => (
//     <>
//       {/* X-axis */}
//       <line x1="40" y1="180" x2="360" y2="180" stroke="#94a3b8" strokeWidth="2" />
//       {/* Y-axis */}
//       <line x1="40" y1="180" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
//       {/* X-axis label */}
//       <text x="350" y="195" fontSize="14" fill="#4b5563">x</text>
//       {/* Y-axis label */}
//       <text x="15" y="30" fontSize="14" fill="#4b5563">y</text>
//       {/* Origin label */}
//       <text x="30" y="195" fontSize="12" fill="#94a3b8">0</text>
//     </>
//   );

//   // Generate inverse variation path (y = 1/x curve) with new scale
//   const InversePath = () => {
//     const pathData = [];
//     let isFirst = true;
    
//     // Start from x=0.1 to avoid extreme values
//     for (let x = 44; x <= 360; x += 2) {
//       // Map x from 44-360 to 0.1-8 domain
//       const domainX = 0.1 + ((x - 44) / 316) * 7.9;
//       const yValue = 1 / domainX;
      
//       // Map y from 0-10 to 180-20 range (1 unit = 16px)
//       const svgY = 180 - (yValue * 16);
      
//       if (svgY >= 20 && svgY <= 180) {
//         if (isFirst) {
//           pathData.push(`M ${x} ${svgY}`);
//           isFirst = false;
//         } else {
//           pathData.push(`L ${x} ${svgY}`);
//         }
//       }
//     }
    
//     return (
//       <path 
//         d={pathData.join(' ')} 
//         fill="none" 
//         stroke="#4f46e5" 
//         strokeWidth="3" 
//       />
//     );
//   };

//   // Generate inverse variation path for k < 0
//   const InversePathNegative = () => {
//     const pathData = [];
//     let isFirst = true;
    
//     // Quadrant II branch (negative x, positive y)
//     for (let x = 36; x >= 20; x -= 2) {
//       // Map x from 36-20 to -0.1 to -8 domain
//       const domainX = -0.1 + ((x - 36) / -16) * -7.9;
//       const yValue = -1 / domainX; // k = -1
      
//       // Map y from 0-10 to 180-20 range
//       const svgY = 180 - (yValue * 16);
      
//       if (svgY >= 20 && svgY <= 180) {
//         if (isFirst) {
//           pathData.push(`M ${x} ${svgY}`);
//           isFirst = false;
//         } else {
//           pathData.push(`L ${x} ${svgY}`);
//         }
//       }
//     }
    
//     // Reset for Quadrant IV branch
//     isFirst = true;
//     for (let x = 44; x <= 360; x += 2) {
//       // Map x from 44-360 to 0.1 to 8 domain
//       const domainX = 0.1 + ((x - 44) / 316) * 7.9;
//       const yValue = -1 / domainX; // k = -1
      
//       // Map y from 0-10 to 180-20 range
//       const svgY = 180 - (yValue * 16);
      
//       if (svgY >= 20 && svgY <= 180) {
//         if (isFirst) {
//           pathData.push(`M ${x} ${svgY}`);
//           isFirst = false;
//         } else {
//           pathData.push(`L ${x} ${svgY}`);
//         }
//       }
//     }
    
//     return (
//       <path 
//         d={pathData.join(' ')} 
//         fill="none" 
//         stroke="#ef4444" 
//         strokeWidth="3" 
//       />
//     );
//   };

//   // Generate direct variation path for k > 0 (y = kx, k=1)
//   const DirectPathPositive = () => (
//     <line x1="40" y1="180" x2="200" y2="20" stroke="#4f46e5" strokeWidth="3" />
//   );

//   // Generate direct variation path for k < 0 (y = kx, k=-1)
//   const DirectPathNegative = () => (
//     <line x1="40" y1="20" x2="200" y2="180" stroke="#ef4444" strokeWidth="3" />
//   );

//   // Update viewbox for better spacing
//   const getViewBox = () => {
//     if (type === 'joint-variation') return "0 0 400 250";
//     return "0 0 380 210";
//   };

//   switch (type) {
//     case 'direct-variation':
//       return (
//         <svg viewBox={getViewBox()} className="w-full h-full">
//           <GridLines />
//           <Axes />
//           <line x1="40" y1="180" x2="360" y2="20" stroke="#4f46e5" strokeWidth="3" />
//         </svg>
//       );
      
//     case 'inverse-variation':
//       return (
//         <svg viewBox={getViewBox()} className="w-full h-full">
//           <GridLines />
//           <Axes />
//           <InversePath />
//         </svg>
//       );
      
//     case 'variation-comparison':
//       return (
//         <svg viewBox={getViewBox()} className="w-full h-full">
//           <GridLines />
//           <Axes />
//           {/* Direct variation (k > 0) */}
//           <line x1="40" y1="180" x2="200" y2="20" stroke="#4f46e5" strokeWidth="2" />
          
//           {/* Inverse variation (k > 0) */}
//           <InversePath />
          
//           <text x="120" y="50" fontSize="12" fill="#4f46e5">Direct (k {'>'} 0)</text>
//           <text x="280" y="50" fontSize="12" fill="#ec4899">Inverse (k {'>'} 0)</text>
//         </svg>
//       );
      
   
//     default:
//       return (
//         <div className="flex items-center justify-center w-full h-full">
//           <div className="text-center text-gray-500">
//             <div className="text-4xl mb-2">📊</div>
//             <p>Visualization</p>
//           </div>
//         </div>
//       );
//   }
// };

// export default VariationVisualizer;

import React from 'react';

const VariationVisualizer: React.FC<{ type: string }> = ({ type }) => {
  // Grid lines component with better spacing (40px per unit)
  const GridLines = () => (
    <>
      {/* Vertical grid lines and labels */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
        <g key={`v-${i}`}>
          <line
            x1={40 + i * 40}
            y1="20"
            x2={40 + i * 40}
            y2="180"
            stroke="#e2e8f0"
            strokeWidth="1"
          />
          <text 
            x={40 + i * 40} 
            y="195" 
            fontSize="12" 
            fill="#94a3b8" 
            textAnchor="middle"
          >
            {i}
          </text>
        </g>
      ))}
      {/* Horizontal grid lines and labels */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
        <g key={`h-${i}`}>
          <line
            x1="40"
            y1={20 + i * 16}
            x2="360"
            y2={20 + i * 16}
            stroke="#e2e8f0"
            strokeWidth="1"
          />
          <text 
            x="30" 
            y={20 + i * 16 + 5} 
            fontSize="12" 
            fill="#94a3b8" 
            textAnchor="end"
          >
            {10 - i}
          </text>
        </g>
      ))}
    </>
  );

  // Axes component
  const Axes = () => (
    <>
      {/* X-axis */}
      <line x1="40" y1="180" x2="360" y2="180" stroke="#94a3b8" strokeWidth="2" />
      {/* Y-axis */}
      <line x1="40" y1="180" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" />
      {/* X-axis label */}
      <text x="350" y="195" fontSize="14" fill="#4b5563">x</text>
      {/* Y-axis label */}
      <text x="15" y="30" fontSize="14" fill="#4b5563">y</text>
      {/* Origin label */}
      <text x="30" y="195" fontSize="12" fill="#94a3b8">0</text>
    </>
  );

  // Generate inverse variation path (y = 1/x curve) with new scale
  const InversePath = () => {
    const pathData = [];
    let isFirst = true;
    
    // Start from x=0.1 to avoid extreme values
    for (let x = 44; x <= 360; x += 2) {
      // Map x from 44-360 to 0.1-8 domain
      const domainX = 0.1 + ((x - 44) / 316) * 7.9;
      const yValue = 1 / domainX;
      
      // Map y from 0-10 to 180-20 range (1 unit = 16px)
      const svgY = 180 - (yValue * 16);
      
      if (svgY >= 20 && svgY <= 180) {
        if (isFirst) {
          pathData.push(`M ${x} ${svgY}`);
          isFirst = false;
        } else {
          pathData.push(`L ${x} ${svgY}`);
        }
      }
    }
    
    return (
      <path 
        d={pathData.join(' ')} 
        fill="none" 
        stroke="#4f46e5" 
        strokeWidth="3" 
      />
    );
  };

  // Generate inverse variation path for k < 0
  const InversePathNegative = () => {
    const pathData = [];
    let isFirst = true;
    
    // Quadrant II branch (negative x, positive y)
    for (let x = 36; x >= 20; x -= 2) {
      // Map x from 36-20 to -0.1 to -8 domain
      const domainX = -0.1 + ((x - 36) / -16) * -7.9;
      const yValue = -1 / domainX; // k = -1
      
      // Map y from 0-10 to 180-20 range
      const svgY = 180 - (yValue * 16);
      
      if (svgY >= 20 && svgY <= 180) {
        if (isFirst) {
          pathData.push(`M ${x} ${svgY}`);
          isFirst = false;
        } else {
          pathData.push(`L ${x} ${svgY}`);
        }
      }
    }
    
    // Reset for Quadrant IV branch
    isFirst = true;
    for (let x = 44; x <= 360; x += 2) {
      // Map x from 44-360 to 0.1 to 8 domain
      const domainX = 0.1 + ((x - 44) / 316) * 7.9;
      const yValue = -1 / domainX; // k = -1
      
      // Map y from 0-10 to 180-20 range
      const svgY = 180 - (yValue * 16);
      
      if (svgY >= 20 && svgY <= 180) {
        if (isFirst) {
          pathData.push(`M ${x} ${svgY}`);
          isFirst = false;
        } else {
          pathData.push(`L ${x} ${svgY}`);
        }
      }
    }
    
    return (
      <path 
        d={pathData.join(' ')} 
        fill="none" 
        stroke="#ef4444" 
        strokeWidth="3" 
      />
    );
  };

  // Generate direct variation path for k > 0 (y = kx, k=1)
  const DirectPathPositive = () => (
    <line x1="40" y1="180" x2="200" y2="20" stroke="#4f46e5" strokeWidth="3" />
  );

  // Generate direct variation path for k < 0 (y = kx, k=-1)
  const DirectPathNegative = () => (
    <line x1="40" y1="20" x2="200" y2="180" stroke="#ef4444" strokeWidth="3" />
  );

  // Generate joint variation surface representation (simplified 2D projection)
  const JointVariationLines = () => {
    const lines = [];
    // Show multiple lines for different values of one variable
    for (let i = 1; i <= 4; i++) {
      const k = 0.5; // constant
      const y = i; // fixed y value
      // For z = kxy, if y is fixed, then z = (ky)x, which is direct variation
      const slope = k * y;
      const x1 = 40;
      const y1 = 180 - (slope * 0 * 16); // z at x=0
      const x2 = 200;
      const y2 = 180 - (slope * 4 * 16); // z at x=4
      
      if (y2 >= 20) {
        lines.push(
          <line 
            key={i}
            x1={x1} 
            y1={y1} 
            x2={x2} 
            y2={y2} 
            stroke={`hsl(${240 + i * 30}, 70%, 50%)`} 
            strokeWidth="2"
          />
        );
      }
    }
    return <>{lines}</>;
  };

  // Generate partial variation graph (y = a + bx)
  const PartialVariationLine = () => {
    const a = 2; // y-intercept
    const b = 1; // slope
    const x1 = 40;
    const y1 = 180 - (a * 16); // y = a when x = 0
    const x2 = 200;
    const y2 = 180 - ((a + b * 4) * 16); // y = a + 4b when x = 4
    
    return (
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#10b981" strokeWidth="3" />
    );
  };

  // Generate partial variation with inverse component (y = a + k/x)
  const PartialInversePath = () => {
    const pathData = [];
    let isFirst = true;
    const a = 2; // constant term
    const k = 4; // inverse variation constant
    
    for (let x = 44; x <= 360; x += 2) {
      const domainX = 0.1 + ((x - 44) / 316) * 7.9;
      const yValue = a + (k / domainX);
      const svgY = 180 - (yValue * 16);
      
      if (svgY >= 20 && svgY <= 180) {
        if (isFirst) {
          pathData.push(`M ${x} ${svgY}`);
          isFirst = false;
        } else {
          pathData.push(`L ${x} ${svgY}`);
        }
      }
    }
    
    return (
      <path 
        d={pathData.join(' ')} 
        fill="none" 
        stroke="#f59e0b" 
        strokeWidth="3" 
      />
    );
  };

  // Update viewbox for better spacing
  const getViewBox = () => {
    if (type === 'joint-variation') return "0 0 400 250";
    return "0 0 380 210";
  };

  switch (type) {
    case 'direct-variation':
      return (
        <svg viewBox={getViewBox()} className="w-full h-full">
          <GridLines />
          <Axes />
          <line x1="40" y1="180" x2="360" y2="20" stroke="#4f46e5" strokeWidth="3" />
        </svg>
      );
      
    case 'inverse-variation':
      return (
        <svg viewBox={getViewBox()} className="w-full h-full">
          <GridLines />
          <Axes />
          <InversePath />
        </svg>
      );
      
    case 'variation-comparison':
      return (
        <svg viewBox={getViewBox()} className="w-full h-full">
          <GridLines />
          <Axes />
          {/* Direct variation (k > 0) */}
          <line x1="40" y1="180" x2="200" y2="20" stroke="#4f46e5" strokeWidth="2" />
          
          {/* Inverse variation (k > 0) */}
          <InversePath />
          
          <text x="120" y="50" fontSize="12" fill="#4f46e5">Direct (k {'>'} 0)</text>
          <text x="280" y="50" fontSize="12" fill="#4f46e5">Inverse (k {'>'} 0)</text>
        </svg>
      );

    case 'distinguishing-variation':
      return (
        <svg viewBox={getViewBox()} className="w-full h-full">
          <GridLines />
          <Axes />
          {/* Direct variation example */}
          <line x1="40" y1="180" x2="200" y2="20" stroke="#4f46e5" strokeWidth="2" />
          {/* Inverse variation example */}
          <InversePath />
          
          {/* Data points for direct variation */}
          <circle cx="80" cy="140" r="3" fill="#4f46e5" />
          <circle cx="120" cy="100" r="3" fill="#4f46e5" />
          <circle cx="160" cy="60" r="3" fill="#4f46e5" />
          
          {/* Data points for inverse variation */}
          <circle cx="80" cy="100" r="3" fill="#ec4899" />
          <circle cx="120" cy="66.7" r="3" fill="#ec4899" />
          <circle cx="200" cy="50" r="3" fill="#ec4899" />
          
          <text x="90" y="40" fontSize="12" fill="#4f46e5">y/x = constant</text>
          <text x="250" y="40" fontSize="12" fill="#ec4899">xy = constant</text>
        </svg>
      );

    case 'variation-graphs':
      return (
        <svg viewBox={getViewBox()} className="w-full h-full">
          <GridLines />
          <Axes />
          
          {/* Direct variation (k > 0) */}
          <DirectPathPositive />
          {/* Direct variation (k < 0) */}
          <DirectPathNegative />
          
          {/* Inverse variation (k > 0) */}
          <InversePath />
          {/* Inverse variation (k < 0) */}
          <InversePathNegative />
          
          {/* Labels */}
          <text x="150" y="40" fontSize="11" fill="#4f46e5">Direct (k {'>'} 0)</text>
          <text x="150" y="200" fontSize="11" fill="#ef4444">Direct (k {'<'} 0)</text>
          <text x="280" y="60" fontSize="11" fill="#4f46e5">Inverse (k {'>'} 0)</text>
          <text x="70" y="60" fontSize="11" fill="#ef4444">Inverse (k {'<'} 0)</text>
        </svg>
      );

    case 'joint-variation':
      return (
        <svg viewBox={getViewBox()} className="w-full h-full">
          <GridLines />
          <Axes />
          
          {/* Multiple lines showing z = kxy for different y values */}
          <JointVariationLines />
          
          {/* Labels */}
          <text x="220" y="40" fontSize="12" fill="#4f46e5">z = kxy</text>
          <text x="220" y="55" fontSize="10" fill="#6b7280">Different y values</text>
          <text x="220" y="68" fontSize="10" fill="#6b7280">(y = 1, 2, 3, 4)</text>
        </svg>
      );

    case 'partial-variation':
      return (
        <svg viewBox={getViewBox()} className="w-full h-full">
          <GridLines />
          <Axes />
          
          {/* Linear partial variation (y = a + bx) */}
          <PartialVariationLine />
          
          {/* Partial with inverse (y = a + k/x) */}
          <PartialInversePath />
          
          {/* Show y-intercept point for linear */}
          <circle cx="40" cy="148" r="3" fill="#10b981" />
          
          {/* Labels */}
          <text x="150" y="110" fontSize="12" fill="#10b981">y = a + bx</text>
          <text x="280" y="80" fontSize="12" fill="#f59e0b">y = a + k/x</text>
          <text x="45" y="145" fontSize="10" fill="#10b981">y-intercept = a</text>
        </svg>
      );

    case 'variation-problems':
      return (
        <svg viewBox={getViewBox()} className="w-full h-full">
          <GridLines />
          <Axes />
          
          {/* Example inverse variation problem */}
          <InversePath />
          
          {/* Mark the given point (x=5, y=12) - but scale to our grid */}
          {/* x=5 maps to x=240, y=12 maps to y=180-12*16=180-192 which is off-grid */}
          {/* Let's use a different scale - if y=12 when x=5, k=60 */}
          {/* So when x=8, y=60/8=7.5 */}
          
          {/* Point 1: (5, 12) - but we need to scale this to fit our 0-8, 0-10 grid */}
          {/* Let's show (1, 4) and (2, 2) as examples where k=4 */}
          <circle cx="80" cy="116" r="4" fill="#ef4444" />
          <circle cx="120" cy="148" r="4" fill="#ef4444" />
          
          {/* Labels for the points */}
          <text x="85" y="112" fontSize="10" fill="#ef4444">(1, 4)</text>
          <text x="125" y="144" fontSize="10" fill="#ef4444">(2, 2)</text>
          <text x="200" y="60" fontSize="12" fill="#4f46e5">xy = k</text>
          <text x="200" y="75" fontSize="10" fill="#6b7280">1×4 = 2×2 = 4</text>
        </svg>
      );
   
    default:
      return (
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">📊</div>
            <p>Visualization</p>
          </div>
        </div>
      );
  }
};

export default VariationVisualizer;