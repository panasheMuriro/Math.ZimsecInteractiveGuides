// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { ReactNode, useState } from 'react';

// interface Theorem {
//   name: string;
//   description: string;
//   renderDiagram: (svgSize: number, centerX: number, centerY: number, radius: number) => any;
// }

// const CircleTheorems: React.FC = () => {
//   const [selectedTheorem, setSelectedTheorem] = useState<number>(0);

//   // SVG setup
//   const svgSize = Math.min(window.innerWidth * 0.8, 250); // Responsive for mobile
//   const centerX = svgSize / 2;
//   const centerY = svgSize / 2;
//   const radius = svgSize * 0.35;

//   const theorems: Theorem[] = [
//     {
//       name: 'Angle at Center vs Circumference',
//       description: 'Angle at center = 2 × angle at circumference (same arc). ∠AOB = 2 × ∠ACB.',
//       renderDiagram: (_svgSize, centerX, centerY, radius) => {
//         const A = { x: centerX + radius * Math.cos(Math.PI / 6), y: centerY + radius * Math.sin(Math.PI / 6) };
//         const B = { x: centerX + radius * Math.cos(5 * Math.PI / 6), y: centerY + radius * Math.sin(5 * Math.PI / 6) };
//         const C = { x: centerX + radius * Math.cos(-Math.PI / 3), y: centerY + radius * Math.sin(-Math.PI / 3) };
//         const arcRadius = radius * 0.25;
//         const centerAngle = 120; // ∠AOB
//         const circumAngle = centerAngle / 2; // ∠ACB
        
//         return (
//           <>
//             <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#2563eb" strokeWidth="3" />
//             {/* Arc AB */}
//             <path
//               d={`M ${A.x} ${A.y} A ${radius} ${radius} 0 0 1 ${B.x} ${B.y}`}
//               fill="none"
//               stroke="#059669"
//               strokeWidth="2"
//               strokeDasharray="4,4"
//             />
//             {/* Lines from center */}
//             <line x1={centerX} y1={centerY} x2={A.x} y2={A.y} stroke="#000" strokeWidth="2" />
//             <line x1={centerX} y1={centerY} x2={B.x} y2={B.y} stroke="#000" strokeWidth="2" />
//             {/* Lines from circumference point */}
//             <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} stroke="#000" strokeWidth="2" />
//             <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} stroke="#000" strokeWidth="2" />
            
//             {/* Center angle arc */}
//             <path
//               d={`M ${centerX + arcRadius * Math.cos(Math.PI / 6)} ${centerY + arcRadius * Math.sin(Math.PI / 6)} A ${arcRadius} ${arcRadius} 0 0 1 ${centerX + arcRadius * Math.cos(5 * Math.PI / 6)} ${centerY + arcRadius * Math.sin(5 * Math.PI / 6)}`}
//               fill="none"
//               stroke="#dc2626"
//               strokeWidth="2"
//             />
//             <text x={centerX - 10} y={centerY - arcRadius - 5} textAnchor="middle" className="text-xs fill-red-600">
//               {centerAngle}°
//             </text>
            
//             {/* Circumference angle arc */}
//             <path
//               d={`M ${C.x + arcRadius * Math.cos(Math.PI / 3)} ${C.y + arcRadius * Math.sin(Math.PI / 3)} A ${arcRadius} ${arcRadius} 0 0 1 ${C.x + arcRadius * Math.cos(2 * Math.PI / 3)} ${C.y + arcRadius * Math.sin(2 * Math.PI / 3)}`}
//               fill="none"
//               stroke="#dc2626"
//               strokeWidth="2"
//             />
//             <text x={C.x} y={C.y - arcRadius - 8} textAnchor="middle" className="text-xs fill-red-600">
//               {circumAngle}°
//             </text>
            
//             <text x={A.x + 5} y={A.y - 5} className="text-xs fill-gray-800">A</text>
//             <text x={B.x - 15} y={B.y - 5} className="text-xs fill-gray-800">B</text>
//             <text x={C.x + 5} y={C.y + 15} className="text-xs fill-gray-800">C</text>
//             <text x={centerX - 8} y={centerY + 5} className="text-xs fill-gray-800">O</text>
//           </>
//         );
//       },
//     },
//     {
//       name: 'Angles in Same Segment',
//       description: 'Angles subtended by same arc are equal.',
//       renderDiagram: (_svgSize, centerX, centerY, radius) => {
//         const A = { x: centerX + radius * Math.cos(Math.PI / 6), y: centerY + radius * Math.sin(Math.PI / 6) };
//         const B = { x: centerX + radius * Math.cos(5 * Math.PI / 6), y: centerY + radius * Math.sin(5 * Math.PI / 6) };
//         const C = { x: centerX + radius * Math.cos(-Math.PI / 3), y: centerY + radius * Math.sin(-Math.PI / 3) };
//         const D = { x: centerX + radius * Math.cos(-2 * Math.PI / 3), y: centerY + radius * Math.sin(-2 * Math.PI / 3) };
//         const arcRadius = radius * 0.25;
//         const angle = 60; // ∠ACB = ∠ADB
        
//         return (
//           <>
//             <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#2563eb" strokeWidth="3" />
//             {/* Arc AB */}
//             <path
//               d={`M ${A.x} ${A.y} A ${radius} ${radius} 0 0 1 ${B.x} ${B.y}`}
//               fill="none"
//               stroke="#059669"
//               strokeWidth="2"
//               strokeDasharray="4,4"
//             />
//             {/* Lines for angle ACB */}
//             <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} stroke="#000" strokeWidth="2" />
//             <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} stroke="#000" strokeWidth="2" />
//             {/* Lines for angle ADB */}
//             <line x1={A.x} y1={A.y} x2={D.x} y2={D.y} stroke="#000" strokeWidth="2" />
//             <line x1={B.x} y1={B.y} x2={D.x} y2={D.y} stroke="#000" strokeWidth="2" />
            
//             {/* Angle arc at C */}
//             <path
//               d={`M ${C.x + arcRadius * Math.cos(Math.PI / 3)} ${C.y + arcRadius * Math.sin(Math.PI / 3)} A ${arcRadius} ${arcRadius} 0 0 1 ${C.x + arcRadius * Math.cos(2 * Math.PI / 3)} ${C.y + arcRadius * Math.sin(2 * Math.PI / 3)}`}
//               fill="none"
//               stroke="#dc2626"
//               strokeWidth="2"
//             />
//             <text x={C.x} y={C.y - arcRadius - 8} textAnchor="middle" className="text-xs fill-red-600">
//               {angle}°
//             </text>
            
//             {/* Angle arc at D */}
//             <path
//               d={`M ${D.x + arcRadius * Math.cos(Math.PI / 3)} ${D.y + arcRadius * Math.sin(Math.PI / 3)} A ${arcRadius} ${arcRadius} 0 0 1 ${D.x + arcRadius * Math.cos(2 * Math.PI / 3)} ${D.y + arcRadius * Math.sin(2 * Math.PI / 3)}`}
//               fill="none"
//               stroke="#dc2626"
//               strokeWidth="2"
//             />
//             <text x={D.x} y={D.y - arcRadius - 8} textAnchor="middle" className="text-xs fill-red-600">
//               {angle}°
//             </text>
            
//             <text x={A.x + 5} y={A.y - 5} className="text-xs fill-gray-800">A</text>
//             <text x={B.x - 15} y={B.y - 5} className="text-xs fill-gray-800">B</text>
//             <text x={C.x + 5} y={C.y + 15} className="text-xs fill-gray-800">C</text>
//             <text x={D.x - 15} y={D.y + 15} className="text-xs fill-gray-800">D</text>
//           </>
//         );
//       },
//     },
//     {
//       name: 'Angle in Semicircle',
//       description: 'Angle in semicircle = 90°. Triangle inscribed in semicircle is right-angled.',
//       renderDiagram: (_svgSize, centerX, centerY, radius) => {
//         const A = { x: centerX - radius, y: centerY };
//         const B = { x: centerX + radius, y: centerY };
//         const C = { x: centerX - radius * 0.3, y: centerY - radius * 0.8 };
//         const arcRadius = radius * 0.2;
        
//         return (
//           <>
//             <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#2563eb" strokeWidth="3" />
//             {/* Semicircle arc */}
//             <path
//               d={`M ${A.x} ${A.y} A ${radius} ${radius} 0 1 1 ${B.x} ${B.y}`}
//               fill="none"
//               stroke="#059669"
//               strokeWidth="2"
//               strokeDasharray="4,4"
//             />
//             {/* Diameter */}
//             <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#000" strokeWidth="2" />
//             {/* Triangle sides */}
//             <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} stroke="#000" strokeWidth="2" />
//             <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} stroke="#000" strokeWidth="2" />
            
//             {/* Right angle indicator */}
//             <path
//               d={`M ${C.x + arcRadius} ${C.y} L ${C.x + arcRadius} ${C.y + arcRadius} L ${C.x} ${C.y + arcRadius}`}
//               fill="none"
//               stroke="#dc2626"
//               strokeWidth="2"
//             />
//             <text x={C.x + arcRadius + 5} y={C.y + arcRadius + 12} textAnchor="middle" className="text-xs fill-red-600">
//               90°
//             </text>
            
//             <text x={A.x - 10} y={A.y + 5} className="text-xs fill-gray-800">A</text>
//             <text x={B.x + 5} y={B.y + 5} className="text-xs fill-gray-800">B</text>
//             <text x={C.x - 8} y={C.y - 8} className="text-xs fill-gray-800">C</text>
//           </>
//         );
//       },
//     },
//    {
//       name: 'Cyclic Quadrilaterals',
//       description: 'Opposite angles sum to 180°. ∠A + ∠C = 180°, ∠B + ∠D = 180°.',
//       renderDiagram: (_svgSize, centerX, centerY, radius) => {
//         const A = { x: centerX + radius * Math.cos(Math.PI / 4), y: centerY + radius * Math.sin(Math.PI / 4) };
//         const B = { x: centerX + radius * Math.cos((3 * Math.PI) / 4), y: centerY + radius * Math.sin((3 * Math.PI) / 4) };
//         const C = { x: centerX + radius * Math.cos((5 * Math.PI) / 4), y: centerY + radius * Math.sin((5 * Math.PI) / 4) };
//         const D = { x: centerX + radius * Math.cos((7 * Math.PI) / 4), y: centerY + radius * Math.sin((7 * Math.PI) / 4) };
//         const arcRadius = radius * 0.3;
//         const angleA = 100;
//         const angleC = 180 - angleA;

//         // Calculate angles for arcs at A (between DA and AB) and C (between BC and CD)
//         const angleToD = Math.atan2(D.y - A.y, D.x - A.x);
//         const angleToB = Math.atan2(B.y - A.y, B.x - A.x);
//         const startAngleA = angleToD;
//         let endAngleA = angleToB;
//         if (endAngleA < startAngleA) endAngleA += 2 * Math.PI;

//         const angleToBFromC = Math.atan2(B.y - C.y, B.x - C.x);
//         const angleToDFromC = Math.atan2(D.y - C.y, D.x - C.x);
//         const startAngleC = angleToBFromC;
//         let endAngleC = angleToDFromC;
//         if (endAngleC < startAngleC) endAngleC += 2 * Math.PI;

//         const arcStartA = {
//           x: A.x + arcRadius * Math.cos(startAngleA),
//           y: A.y + arcRadius * Math.sin(startAngleA),
//         };
//         const arcEndA = {
//           x: A.x + arcRadius * Math.cos(endAngleA),
//           y: A.y + arcRadius * Math.sin(endAngleA),
//         };
//         const arcStartC = {
//           x: C.x + arcRadius * Math.cos(startAngleC),
//           y: C.y + arcRadius * Math.sin(startAngleC),
//         };
//         const arcEndC = {
//           x: C.x + arcRadius * Math.cos(endAngleC),
//           y: C.y + arcRadius * Math.sin(endAngleC),
//         };

//         return (
//           <>
//             <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#2563eb" strokeWidth="3" />
//             <polygon
//               points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`}
//               fill="none"
//               stroke="#000"
//               strokeWidth="2"
//             />
//             <path
//               d={`M ${arcStartA.x} ${arcStartA.y} A ${arcRadius} ${arcRadius} 0 0 0 ${arcEndA.x} ${arcEndA.y}`}
//               fill="none"
//               stroke="#dc2626"
//               strokeWidth="2"
//             />
//             <text
//               x={A.x + (arcRadius * 0.5) * Math.cos((startAngleA + endAngleA) / 2)}
//               y={A.y + (arcRadius * 0.5) * Math.sin((startAngleA + endAngleA) / 2) + 5}
//               textAnchor="middle"
//               className="text-xs fill-red-600"
//             >
//               {angleA}°
//             </text>
//             <path
//               d={`M ${arcStartC.x} ${arcStartC.y} A ${arcRadius} ${arcRadius} 0 0 0 ${arcEndC.x} ${arcEndC.y}`}
//               fill="none"
//               stroke="#dc2626"
//               strokeWidth="2"
//             />
//             <text
//               x={C.x + (arcRadius * 0.5) * Math.cos((startAngleC + endAngleC) / 2)}
//               y={C.y + (arcRadius * 0.5) * Math.sin((startAngleC + endAngleC) / 2) + 5}
//               textAnchor="middle"
//               className="text-xs fill-red-600"
//             >
//               {angleC}°
//             </text>
//             <text x={A.x + 5} y={A.y - 5} className="text-xs fill-gray-800">A</text>
//             <text x={B.x - 15} y={B.y - 5} className="text-xs fill-gray-800">B</text>
//             <text x={C.x - 15} y={C.y + 5} className="text-xs fill-gray-800">C</text>
//             <text x={D.x + 5} y={D.y + 10} className="text-xs fill-gray-800">D</text>
//           </>
//         );
//       },
//     },
//     {
//       name: 'Tangent-Radius',
//       description: 'Tangent perpendicular to radius at point of contact. ∠OTP = 90°.',
//       renderDiagram: (_svgSize, centerX, centerY, radius) => {
//         const T = { x: centerX + radius, y: centerY };
//         const tangentLength = radius * 0.8;
//         const arcRadius = radius * 0.15;
        
//         return (
//           <>
//             <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#2563eb" strokeWidth="3" />
//             {/* Radius to point of tangency */}
//             <line x1={centerX} y1={centerY} x2={T.x} y2={T.y} stroke="#000" strokeWidth="2" />
//             {/* Tangent line */}
//             <line x1={T.x} y1={T.y - tangentLength} x2={T.x} y2={T.y + tangentLength} stroke="#000" strokeWidth="2" />
            
//             {/* Right angle indicator */}
//             <path
//               d={`M ${T.x - arcRadius} ${T.y} L ${T.x - arcRadius} ${T.y - arcRadius} L ${T.x} ${T.y - arcRadius}`}
//               fill="none"
//               stroke="#dc2626"
//               strokeWidth="2"
//             />
//             <text x={T.x - arcRadius - 15} y={T.y - arcRadius - 5} textAnchor="middle" className="text-xs fill-red-600">
//               90°
//             </text>
            
//             <text x={T.x + 8} y={T.y + 5} className="text-xs fill-gray-800">T</text>
//             <text x={T.x + 8} y={T.y - tangentLength - 5} className="text-xs fill-gray-800">P</text>
//             <text x={centerX - 8} y={centerY + 5} className="text-xs fill-gray-800">O</text>
//           </>
//         );
//       },
//     },
//     {
//       name: 'Alternate Segment',
//       description: 'Angle between tangent and chord = angle in alternate segment. ∠PTA = ∠ABC.',
//       renderDiagram: (_svgSize, centerX, centerY, radius) => {
//         const T = { x: centerX + radius, y: centerY };
//         const A = { x: centerX + radius * Math.cos(Math.PI / 4), y: centerY + radius * Math.sin(Math.PI / 4) };
//         const B = { x: centerX + radius * Math.cos(-Math.PI / 4), y: centerY + radius * Math.sin(-Math.PI / 4) };
//         const C = { x: centerX + radius * Math.cos(3 * Math.PI / 4), y: centerY + radius * Math.sin(3 * Math.PI / 4) };
//         const tangentLength = radius * 0.6;
//         const arcRadius = radius * 0.2;
//         const angle = 45;
        
//         return (
//           <>
//             <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#2563eb" strokeWidth="3" />
//             {/* Tangent line */}
//             <line x1={T.x} y1={T.y - tangentLength} x2={T.x} y2={T.y + tangentLength} stroke="#000" strokeWidth="2" />
//             {/* Chord TA */}
//             <line x1={T.x} y1={T.y} x2={A.x} y2={A.y} stroke="#000" strokeWidth="2" />
//             {/* Triangle ABC inscribed in circle */}
//             <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#000" strokeWidth="2" />
//             <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} stroke="#000" strokeWidth="2" />
//             <line x1={C.x} y1={C.y} x2={A.x} y2={A.y} stroke="#000" strokeWidth="2" />
            
//             {/* Angle between tangent and chord at T */}
//             <path
//               d={`M ${T.x} ${T.y - arcRadius} A ${arcRadius} ${arcRadius} 0 0 1 ${T.x + arcRadius * Math.cos(Math.PI / 4)} ${T.y + arcRadius * Math.sin(Math.PI / 4)}`}
//               fill="none"
//               stroke="#dc2626"
//               strokeWidth="2"
//             />
//             <text x={T.x + 15} y={T.y - 10} textAnchor="middle" className="text-xs fill-red-600">
//               {angle}°
//             </text>
            
//             {/* Angle ABC in alternate segment */}
//             <path
//               d={`M ${B.x + arcRadius * Math.cos(Math.PI * 3/4)} ${B.y + arcRadius * Math.sin(Math.PI * 3/4)} A ${arcRadius} ${arcRadius} 0 0 1 ${B.x + arcRadius * Math.cos(Math.PI / 4)} ${B.y + arcRadius * Math.sin(Math.PI / 4)}`}
//               fill="none"
//               stroke="#dc2626"
//               strokeWidth="2"
//             />
//             <text x={B.x - 15} y={B.y - 5} textAnchor="middle" className="text-xs fill-red-600">
//               {angle}°
//             </text>
            
//             <text x={A.x + 5} y={A.y - 5} className="text-xs fill-gray-800">A</text>
//             <text x={B.x + 5} y={B.y + 15} className="text-xs fill-gray-800">B</text>
//             <text x={C.x - 15} y={C.y - 5} className="text-xs fill-gray-800">C</text>
//             <text x={T.x + 8} y={T.y + 5} className="text-xs fill-gray-800">T</text>
//             <text x={T.x + 8} y={T.y - tangentLength - 5} className="text-xs fill-gray-800">P</text>
//           </>
//         );
//       },
//     },
//   ];

//   const currentTheorem = theorems[selectedTheorem];

//   return (
//     <div className="p-4 bg-gradient-to-br from-[#146C94] to-[#2C3333] font-sans rounded-2xl">
//       <h1 className="text-xl font-bold text-white mb-2 text-center">
//         Circle Theorems
//       </h1>
//       <p className="text-sm text-white mb-4 text-center">
//         Explore fundamental circle theorems with interactive diagrams
//       </p>

//       <div className="flex flex-col gap-4">
//         {/* Theorem Visualization */}
//         <div className="bg-white/20 p-4 rounded-lg shadow-md">
//           <h2 className="text-base font-semibold mb-3 text-center text-white">{currentTheorem.name}</h2>
//           <div className="flex justify-center mb-3">
//             <svg width={svgSize} height={svgSize} className="border rounded-lg bg-gray-50">
//               {currentTheorem.renderDiagram(svgSize, centerX, centerY, radius) as ReactNode}
//             </svg>
//           </div>

//           {/* Theorem Selector */}
//           <div className="overflow-x-auto pb-2 mb-3">
//             <div className="flex gap-2 w-full flex-wrap">
//               {theorems.map((theorem, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedTheorem(index)}
//                   className={`px-3 py-2 text-sm rounded-2xl transition-colors flex-shrink-0 ${
//                     selectedTheorem === index
//                       ? 'bg-blue-500 text-white'
//                       : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                   }`}
//                 >
//                   {theorem.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Theorem Description */}
//           <div className="bg-white/30 text-white p-3 rounded-lg text-sm">
//             <p>{currentTheorem.description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CircleTheorems;


/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useState } from 'react';

interface Theorem {
  name: string;
  description: string;
  renderDiagram: (svgSize: number, centerX: number, centerY: number, radius: number) => any;
}

// --- Neubrutalism Styles & Colors ---
const NEUBRUTALISM_COLORS = {
  cream: '#f4f1de',      // Background, Cards
  orange: '#e07a5f',     // Accents, Selected, Reset Button, Ship Path
  slate: '#3d405b',      // Text, Lines, Center Dot, Borders
  teal: '#81b29a',       // Back Bearing, Correct, Highlights
  yellow: '#f2cc8f',     // Accents, Highlights, Button Default
  white: '#ffffff',
  shadow: 'rgba(61, 64, 91, 0.3)', // slate with opacity for shadow
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.slate}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadow}`,
  padding: '1rem',
};
// --- End Neubrutalism Styles ---

const CircleTheorems: React.FC = () => {
  const [selectedTheorem, setSelectedTheorem] = useState<number>(0);

  // SVG setup
  const svgSize = Math.min(window.innerWidth * 0.8, 250); // Responsive for mobile
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  const radius = svgSize * 0.35;

    const theorems: Theorem[] = [
    {
      name: 'Angle at Center vs Circumference',
      description: 'Angle at center = 2 × angle at circumference (same arc). ∠AOB = 2 × ∠ACB.',
      renderDiagram: (_svgSize, centerX, centerY, radius) => {
        const A = { x: centerX + radius * Math.cos(Math.PI / 6), y: centerY + radius * Math.sin(Math.PI / 6) };
        const B = { x: centerX + radius * Math.cos(5 * Math.PI / 6), y: centerY + radius * Math.sin(5 * Math.PI / 6) };
        const C = { x: centerX + radius * Math.cos(-Math.PI / 3), y: centerY + radius * Math.sin(-Math.PI / 3) };
        const arcRadius = radius * 0.25;
        const centerAngle = 120; // ∠AOB
        const circumAngle = centerAngle / 2; // ∠ACB
        
        return (
          <>
            <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#2563eb" strokeWidth="3" />
            {/* Arc AB */}
            <path
              d={`M ${A.x} ${A.y} A ${radius} ${radius} 0 0 1 ${B.x} ${B.y}`}
              fill="none"
              stroke="#059669"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            {/* Lines from center */}
            <line x1={centerX} y1={centerY} x2={A.x} y2={A.y} stroke="#000" strokeWidth="2" />
            <line x1={centerX} y1={centerY} x2={B.x} y2={B.y} stroke="#000" strokeWidth="2" />
            {/* Lines from circumference point */}
            <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} stroke="#000" strokeWidth="2" />
            <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} stroke="#000" strokeWidth="2" />
            
            {/* Center angle arc */}
            <path
              d={`M ${centerX + arcRadius * Math.cos(Math.PI / 6)} ${centerY + arcRadius * Math.sin(Math.PI / 6)} A ${arcRadius} ${arcRadius} 0 0 1 ${centerX + arcRadius * Math.cos(5 * Math.PI / 6)} ${centerY + arcRadius * Math.sin(5 * Math.PI / 6)}`}
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
            />
            <text x={centerX - 10} y={centerY - arcRadius - 5} textAnchor="middle" className="text-xs fill-red-600">
              {centerAngle}°
            </text>
            
            {/* Circumference angle arc */}
            <path
              d={`M ${C.x + arcRadius * Math.cos(Math.PI / 3)} ${C.y + arcRadius * Math.sin(Math.PI / 3)} A ${arcRadius} ${arcRadius} 0 0 1 ${C.x + arcRadius * Math.cos(2 * Math.PI / 3)} ${C.y + arcRadius * Math.sin(2 * Math.PI / 3)}`}
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
            />
            <text x={C.x} y={C.y - arcRadius - 8} textAnchor="middle" className="text-xs fill-red-600">
              {circumAngle}°
            </text>
            
            <text x={A.x + 5} y={A.y - 5} className="text-xs fill-gray-800">A</text>
            <text x={B.x - 15} y={B.y - 5} className="text-xs fill-gray-800">B</text>
            <text x={C.x + 5} y={C.y + 15} className="text-xs fill-gray-800">C</text>
            <text x={centerX - 8} y={centerY + 5} className="text-xs fill-gray-800">O</text>
          </>
        );
      },
    },
    {
      name: 'Angles in Same Segment',
      description: 'Angles subtended by same arc are equal.',
      renderDiagram: (_svgSize, centerX, centerY, radius) => {
        const A = { x: centerX + radius * Math.cos(Math.PI / 6), y: centerY + radius * Math.sin(Math.PI / 6) };
        const B = { x: centerX + radius * Math.cos(5 * Math.PI / 6), y: centerY + radius * Math.sin(5 * Math.PI / 6) };
        const C = { x: centerX + radius * Math.cos(-Math.PI / 3), y: centerY + radius * Math.sin(-Math.PI / 3) };
        const D = { x: centerX + radius * Math.cos(-2 * Math.PI / 3), y: centerY + radius * Math.sin(-2 * Math.PI / 3) };
        const arcRadius = radius * 0.25;
        const angle = 60; // ∠ACB = ∠ADB
        
        return (
          <>
            <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#2563eb" strokeWidth="3" />
            {/* Arc AB */}
            <path
              d={`M ${A.x} ${A.y} A ${radius} ${radius} 0 0 1 ${B.x} ${B.y}`}
              fill="none"
              stroke="#059669"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            {/* Lines for angle ACB */}
            <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} stroke="#000" strokeWidth="2" />
            <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} stroke="#000" strokeWidth="2" />
            {/* Lines for angle ADB */}
            <line x1={A.x} y1={A.y} x2={D.x} y2={D.y} stroke="#000" strokeWidth="2" />
            <line x1={B.x} y1={B.y} x2={D.x} y2={D.y} stroke="#000" strokeWidth="2" />
            
            {/* Angle arc at C */}
            <path
              d={`M ${C.x + arcRadius * Math.cos(Math.PI / 3)} ${C.y + arcRadius * Math.sin(Math.PI / 3)} A ${arcRadius} ${arcRadius} 0 0 1 ${C.x + arcRadius * Math.cos(2 * Math.PI / 3)} ${C.y + arcRadius * Math.sin(2 * Math.PI / 3)}`}
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
            />
            <text x={C.x} y={C.y - arcRadius - 8} textAnchor="middle" className="text-xs fill-red-600">
              {angle}°
            </text>
            
            {/* Angle arc at D */}
            <path
              d={`M ${D.x + arcRadius * Math.cos(Math.PI / 3)} ${D.y + arcRadius * Math.sin(Math.PI / 3)} A ${arcRadius} ${arcRadius} 0 0 1 ${D.x + arcRadius * Math.cos(2 * Math.PI / 3)} ${D.y + arcRadius * Math.sin(2 * Math.PI / 3)}`}
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
            />
            <text x={D.x} y={D.y - arcRadius - 8} textAnchor="middle" className="text-xs fill-red-600">
              {angle}°
            </text>
            
            <text x={A.x + 5} y={A.y - 5} className="text-xs fill-gray-800">A</text>
            <text x={B.x - 15} y={B.y - 5} className="text-xs fill-gray-800">B</text>
            <text x={C.x + 5} y={C.y + 15} className="text-xs fill-gray-800">C</text>
            <text x={D.x - 15} y={D.y + 15} className="text-xs fill-gray-800">D</text>
          </>
        );
      },
    },
    {
      name: 'Angle in Semicircle',
      description: 'Angle in semicircle = 90°. Triangle inscribed in semicircle is right-angled.',
      renderDiagram: (_svgSize, centerX, centerY, radius) => {
        const A = { x: centerX - radius, y: centerY };
        const B = { x: centerX + radius, y: centerY };
        const C = { x: centerX - radius * 0.3, y: centerY - radius * 0.8 };
        const arcRadius = radius * 0.2;
        
        return (
          <>
            <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#2563eb" strokeWidth="3" />
            {/* Semicircle arc */}
            <path
              d={`M ${A.x} ${A.y} A ${radius} ${radius} 0 1 1 ${B.x} ${B.y}`}
              fill="none"
              stroke="#059669"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            {/* Diameter */}
            <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#000" strokeWidth="2" />
            {/* Triangle sides */}
            <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} stroke="#000" strokeWidth="2" />
            <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} stroke="#000" strokeWidth="2" />
            
            {/* Right angle indicator */}
            <path
              d={`M ${C.x + arcRadius} ${C.y} L ${C.x + arcRadius} ${C.y + arcRadius} L ${C.x} ${C.y + arcRadius}`}
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
            />
            <text x={C.x + arcRadius + 5} y={C.y + arcRadius + 12} textAnchor="middle" className="text-xs fill-red-600">
              90°
            </text>
            
            <text x={A.x - 10} y={A.y + 5} className="text-xs fill-gray-800">A</text>
            <text x={B.x + 5} y={B.y + 5} className="text-xs fill-gray-800">B</text>
            <text x={C.x - 8} y={C.y - 8} className="text-xs fill-gray-800">C</text>
          </>
        );
      },
    },
   {
      name: 'Cyclic Quadrilaterals',
      description: 'Opposite angles sum to 180°. ∠A + ∠C = 180°, ∠B + ∠D = 180°.',
      renderDiagram: (_svgSize, centerX, centerY, radius) => {
        const A = { x: centerX + radius * Math.cos(Math.PI / 4), y: centerY + radius * Math.sin(Math.PI / 4) };
        const B = { x: centerX + radius * Math.cos((3 * Math.PI) / 4), y: centerY + radius * Math.sin((3 * Math.PI) / 4) };
        const C = { x: centerX + radius * Math.cos((5 * Math.PI) / 4), y: centerY + radius * Math.sin((5 * Math.PI) / 4) };
        const D = { x: centerX + radius * Math.cos((7 * Math.PI) / 4), y: centerY + radius * Math.sin((7 * Math.PI) / 4) };
        const arcRadius = radius * 0.3;
        const angleA = 100;
        const angleC = 180 - angleA;

        // Calculate angles for arcs at A (between DA and AB) and C (between BC and CD)
        const angleToD = Math.atan2(D.y - A.y, D.x - A.x);
        const angleToB = Math.atan2(B.y - A.y, B.x - A.x);
        const startAngleA = angleToD;
        let endAngleA = angleToB;
        if (endAngleA < startAngleA) endAngleA += 2 * Math.PI;

        const angleToBFromC = Math.atan2(B.y - C.y, B.x - C.x);
        const angleToDFromC = Math.atan2(D.y - C.y, D.x - C.x);
        const startAngleC = angleToBFromC;
        let endAngleC = angleToDFromC;
        if (endAngleC < startAngleC) endAngleC += 2 * Math.PI;

        const arcStartA = {
          x: A.x + arcRadius * Math.cos(startAngleA),
          y: A.y + arcRadius * Math.sin(startAngleA),
        };
        const arcEndA = {
          x: A.x + arcRadius * Math.cos(endAngleA),
          y: A.y + arcRadius * Math.sin(endAngleA),
        };
        const arcStartC = {
          x: C.x + arcRadius * Math.cos(startAngleC),
          y: C.y + arcRadius * Math.sin(startAngleC),
        };
        const arcEndC = {
          x: C.x + arcRadius * Math.cos(endAngleC),
          y: C.y + arcRadius * Math.sin(endAngleC),
        };

        return (
          <>
            <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#2563eb" strokeWidth="3" />
            <polygon
              points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`}
              fill="none"
              stroke="#000"
              strokeWidth="2"
            />
            <path
              d={`M ${arcStartA.x} ${arcStartA.y} A ${arcRadius} ${arcRadius} 0 0 0 ${arcEndA.x} ${arcEndA.y}`}
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
            />
            <text
              x={A.x + (arcRadius * 0.5) * Math.cos((startAngleA + endAngleA) / 2)}
              y={A.y + (arcRadius * 0.5) * Math.sin((startAngleA + endAngleA) / 2) + 5}
              textAnchor="middle"
              className="text-xs fill-red-600"
            >
              {angleA}°
            </text>
            <path
              d={`M ${arcStartC.x} ${arcStartC.y} A ${arcRadius} ${arcRadius} 0 0 0 ${arcEndC.x} ${arcEndC.y}`}
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
            />
            <text
              x={C.x + (arcRadius * 0.5) * Math.cos((startAngleC + endAngleC) / 2)}
              y={C.y + (arcRadius * 0.5) * Math.sin((startAngleC + endAngleC) / 2) + 5}
              textAnchor="middle"
              className="text-xs fill-red-600"
            >
              {angleC}°
            </text>
            <text x={A.x + 5} y={A.y - 5} className="text-xs fill-gray-800">A</text>
            <text x={B.x - 15} y={B.y - 5} className="text-xs fill-gray-800">B</text>
            <text x={C.x - 15} y={C.y + 5} className="text-xs fill-gray-800">C</text>
            <text x={D.x + 5} y={D.y + 10} className="text-xs fill-gray-800">D</text>
          </>
        );
      },
    },
    {
      name: 'Tangent-Radius',
      description: 'Tangent perpendicular to radius at point of contact. ∠OTP = 90°.',
      renderDiagram: (_svgSize, centerX, centerY, radius) => {
        const T = { x: centerX + radius, y: centerY };
        const tangentLength = radius * 0.8;
        const arcRadius = radius * 0.15;
        
        return (
          <>
            <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#2563eb" strokeWidth="3" />
            {/* Radius to point of tangency */}
            <line x1={centerX} y1={centerY} x2={T.x} y2={T.y} stroke="#000" strokeWidth="2" />
            {/* Tangent line */}
            <line x1={T.x} y1={T.y - tangentLength} x2={T.x} y2={T.y + tangentLength} stroke="#000" strokeWidth="2" />
            
            {/* Right angle indicator */}
            <path
              d={`M ${T.x - arcRadius} ${T.y} L ${T.x - arcRadius} ${T.y - arcRadius} L ${T.x} ${T.y - arcRadius}`}
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
            />
            <text x={T.x - arcRadius - 15} y={T.y - arcRadius - 5} textAnchor="middle" className="text-xs fill-red-600">
              90°
            </text>
            
            <text x={T.x + 8} y={T.y + 5} className="text-xs fill-gray-800">T</text>
            <text x={T.x + 8} y={T.y - tangentLength - 5} className="text-xs fill-gray-800">P</text>
            <text x={centerX - 8} y={centerY + 5} className="text-xs fill-gray-800">O</text>
          </>
        );
      },
    },
    {
      name: 'Alternate Segment',
      description: 'Angle between tangent and chord = angle in alternate segment. ∠PTA = ∠ABC.',
      renderDiagram: (_svgSize, centerX, centerY, radius) => {
        const T = { x: centerX + radius, y: centerY };
        const A = { x: centerX + radius * Math.cos(Math.PI / 4), y: centerY + radius * Math.sin(Math.PI / 4) };
        const B = { x: centerX + radius * Math.cos(-Math.PI / 4), y: centerY + radius * Math.sin(-Math.PI / 4) };
        const C = { x: centerX + radius * Math.cos(3 * Math.PI / 4), y: centerY + radius * Math.sin(3 * Math.PI / 4) };
        const tangentLength = radius * 0.6;
        const arcRadius = radius * 0.2;
        const angle = 45;
        
        return (
          <>
            <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#2563eb" strokeWidth="3" />
            {/* Tangent line */}
            <line x1={T.x} y1={T.y - tangentLength} x2={T.x} y2={T.y + tangentLength} stroke="#000" strokeWidth="2" />
            {/* Chord TA */}
            <line x1={T.x} y1={T.y} x2={A.x} y2={A.y} stroke="#000" strokeWidth="2" />
            {/* Triangle ABC inscribed in circle */}
            <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#000" strokeWidth="2" />
            <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} stroke="#000" strokeWidth="2" />
            <line x1={C.x} y1={C.y} x2={A.x} y2={A.y} stroke="#000" strokeWidth="2" />
            
            {/* Angle between tangent and chord at T */}
            <path
              d={`M ${T.x} ${T.y - arcRadius} A ${arcRadius} ${arcRadius} 0 0 1 ${T.x + arcRadius * Math.cos(Math.PI / 4)} ${T.y + arcRadius * Math.sin(Math.PI / 4)}`}
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
            />
            <text x={T.x + 15} y={T.y - 10} textAnchor="middle" className="text-xs fill-red-600">
              {angle}°
            </text>
            
            {/* Angle ABC in alternate segment */}
            <path
              d={`M ${B.x + arcRadius * Math.cos(Math.PI * 3/4)} ${B.y + arcRadius * Math.sin(Math.PI * 3/4)} A ${arcRadius} ${arcRadius} 0 0 1 ${B.x + arcRadius * Math.cos(Math.PI / 4)} ${B.y + arcRadius * Math.sin(Math.PI / 4)}`}
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
            />
            <text x={B.x - 15} y={B.y - 5} textAnchor="middle" className="text-xs fill-red-600">
              {angle}°
            </text>
            
            <text x={A.x + 5} y={A.y - 5} className="text-xs fill-gray-800">A</text>
            <text x={B.x + 5} y={B.y + 15} className="text-xs fill-gray-800">B</text>
            <text x={C.x - 15} y={C.y - 5} className="text-xs fill-gray-800">C</text>
            <text x={T.x + 8} y={T.y + 5} className="text-xs fill-gray-800">T</text>
            <text x={T.x + 8} y={T.y - tangentLength - 5} className="text-xs fill-gray-800">P</text>
          </>
        );
      },
    },
  ];

  const currentTheorem = theorems[selectedTheorem];

  // --- Button Styling Helper ---
  const getButtonStyle = (isActive: boolean) => {
    return {
      ...neubrutalismBase,
      padding: '0.5rem 1rem',
      fontSize: '0.875rem', // text-sm
      fontWeight: 'bold',
      backgroundColor: isActive ? NEUBRUTALISM_COLORS.teal : NEUBRUTALISM_COLORS.yellow,
      color: isActive ? NEUBRUTALISM_COLORS.white : NEUBRUTALISM_COLORS.slate,
      borderColor: NEUBRUTALISM_COLORS.slate,
      cursor: 'pointer',
      transition: 'all 0.2s',
      // Add hover effect inline
      ...(isActive ? {} : { // No hover change for active buttons
        ':hover': {
          backgroundColor: NEUBRUTALISM_COLORS.cream,
        }
      })
    };
  };
  // --- End Button Styling ---

  return (
    <div
      style={{
        ...neubrutalismBase,
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: NEUBRUTALISM_COLORS.teal, // Teal background
        borderColor: NEUBRUTALISM_COLORS.slate,
        color: NEUBRUTALISM_COLORS.slate,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.slate}`,
      }}
    >
      <div className="mb-4 mt-3 text-white">
        <h1 className="text-xl font-bold mb-1 text-center">
          Circle Theorems
        </h1>
        <p className="text-sm text-center">
          Explore key theorems about angles and lines in circles
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Theorem Visualization */}
        <div
          style={{
            ...neubrutalismBase,
            backgroundColor: NEUBRUTALISM_COLORS.cream,
            borderColor: NEUBRUTALISM_COLORS.slate,
            padding: '1rem',
          }}
        >
          <h2
            className="text-base font-bold mb-3 text-center"
            style={{ color: NEUBRUTALISM_COLORS.slate }}
          >
            {currentTheorem.name}
          </h2>
          <div className="flex justify-center mb-3">
            <svg
              width={svgSize}
              height={svgSize}
              className="border rounded-lg bg-gray-50 block"
              style={{
                border: `2px solid ${NEUBRUTALISM_COLORS.slate}`,
                borderRadius: '12px',
                backgroundColor: NEUBRUTALISM_COLORS.white,
              }}
            >
              {currentTheorem.renderDiagram(svgSize, centerX, centerY, radius) as ReactNode}
            </svg>
          </div>

          {/* Theorem Selector */}
          <div className="overflow-x-auto pb-2 mb-3">
            <div className="flex gap-2 w-full flex-wrap justify-center">
              {theorems.map((theorem, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTheorem(index)}
                  style={getButtonStyle(selectedTheorem === index)}
                  onMouseEnter={(e) => {
                    if (selectedTheorem !== index)
                      e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.cream;
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTheorem !== index)
                      e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.yellow;
                  }}
                >
                  {theorem.name}
                </button>
              ))}
            </div>
          </div>

          {/* Theorem Description */}
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.white,
              borderColor: NEUBRUTALISM_COLORS.slate,
              padding: '0.75rem',
            }}
          >
            <p style={{ color: NEUBRUTALISM_COLORS.slate }}>{currentTheorem.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleTheorems;