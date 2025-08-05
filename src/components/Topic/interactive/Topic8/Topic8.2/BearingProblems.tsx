/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useState } from 'react';

interface Step {
  label: string;
  description: string;
  svgContent: any;
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

const BearingProblems: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  // SVG setup
  const svgSize = Math.min(window.innerWidth * 0.8, 300); // Responsive for mobile
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  const scale = svgSize / 100; // Scale for distances (100km = svgSize)

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  // Example problem data
  const leg1Distance = 50; // km
  const leg1Bearing = 60; // degrees
  const leg2Distance = 30; // km
  const leg2Bearing = 150; // degrees

  // Calculate coordinates for the ship's path
  const pointA = { x: centerX, y: centerY }; // Starting point
  const pointB = polarToCartesian(centerX, centerY, leg1Distance * scale * 0.5, leg1Bearing); // After first leg
  const pointC = polarToCartesian(
    pointB.x,
    pointB.y,
    leg2Distance * scale * 0.5,
    leg2Bearing
  ); // After second leg

  // Calculate direct route home (from C to A)
  const deltaX = pointA.x - pointC.x;
  const deltaY = pointA.y - pointC.y;
  const distanceHome = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / (scale * 0.5); // Convert back to km
  const angleRad = Math.atan2(deltaY, deltaX);
  let bearingHome = ((angleRad * 180) / Math.PI + 90) % 360;
  if (bearingHome < 0) bearingHome += 360;
  bearingHome = Math.round(bearingHome);

  // Steps for the problem-solving strategy
  const steps: Step[] = [
    {
      label: 'Step 1: Draw a Diagram',
      description:
        'Mark North at the starting point (A), draw the path (A to B, B to C), and label known angles (060°, 150°) and distances (50km, 30km).',
      svgContent: (
        <>
          {/* North line at A */}
          <line
            x1={centerX}
            y1={centerY}
            x2={centerX}
            y2={centerY - svgSize * 0.4}
            stroke={NEUBRUTALISM_COLORS.slate}
            strokeWidth="2"
            strokeDasharray="8,4"
          />
          {/* Point A */}
          <circle cx={centerX} cy={centerY} r="4" fill={NEUBRUTALISM_COLORS.slate} />
          <text x={centerX - 10} y={centerY - 5} className="text-xs" style={{ fill: NEUBRUTALISM_COLORS.slate }}>
            A
          </text>
          <text x={centerX} y={centerY - svgSize * 0.4 - 10} textAnchor="middle" className="text-sm font-bold" style={{ fill: NEUBRUTALISM_COLORS.teal }}>
            N
          </text>
        </>
      ),
    },
    {
      label: 'Step 2: First Leg (A to B)',
      description: 'The ship sails 50km on bearing 060° from point A to point B.',
      svgContent: (
        <>
          {/* North line at A */}
          <line
            x1={centerX}
            y1={centerY}
            x2={centerX}
            y2={centerY - svgSize * 0.4}
            stroke={NEUBRUTALISM_COLORS.slate}
            strokeWidth="2"
            strokeDasharray="8,4"
          />
          {/* Path A to B */}
          <line
            x1={pointA.x}
            y1={pointA.y}
            x2={pointB.x}
            y2={pointB.y}
            stroke={NEUBRUTALISM_COLORS.orange}
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          {/* Points */}
          <circle cx={pointA.x} cy={pointA.y} r="4" fill={NEUBRUTALISM_COLORS.slate} />
          <circle cx={pointB.x} cy={pointB.y} r="4" fill={NEUBRUTALISM_COLORS.slate} />
          <text x={pointA.x - 10} y={pointA.y - 5} className="text-xs" style={{ fill: NEUBRUTALISM_COLORS.slate }}>
            A
          </text>
          <text x={pointB.x + 5} y={pointB.y - 5} className="text-xs" style={{ fill: NEUBRUTALISM_COLORS.slate }}>
            B
          </text>
          <text x={centerX} y={centerY - svgSize * 0.4 - 10} textAnchor="middle" className="text-sm font-bold" style={{ fill: NEUBRUTALISM_COLORS.teal }}>
            N
          </text>
          <text
            x={(pointA.x + pointB.x) / 2}
            y={(pointA.y + pointB.y) / 2 - 20}
            textAnchor="middle"
            className="text-xs"
            style={{ fill: NEUBRUTALISM_COLORS.slate }}
          >
            50km, 060°
          </text>
        </>
      ),
    },
    {
      label: 'Step 3: Second Leg (B to C)',
      description: 'From point B, the ship sails 30km on bearing 150° to point C.',
      svgContent: (
        <>
          {/* North line at A */}
          <line
            x1={centerX}
            y1={centerY}
            x2={centerX}
            y2={centerY - svgSize * 0.4}
            stroke={NEUBRUTALISM_COLORS.slate}
            strokeWidth="2"
            strokeDasharray="8,4"
          />
          {/* Path A to B */}
          <line
            x1={pointA.x}
            y1={pointA.y}
            x2={pointB.x}
            y2={pointB.y}
            stroke={NEUBRUTALISM_COLORS.orange}
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          {/* Path B to C */}
          <line
            x1={pointB.x}
            y1={pointB.y}
            x2={pointC.x}
            y2={pointC.y}
            stroke={NEUBRUTALISM_COLORS.orange}
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          {/* Points */}
          <circle cx={pointA.x} cy={pointA.y} r="4" fill={NEUBRUTALISM_COLORS.slate} />
          <circle cx={pointB.x} cy={pointB.y} r="4" fill={NEUBRUTALISM_COLORS.slate} />
          <circle cx={pointC.x} cy={pointC.y} r="4" fill={NEUBRUTALISM_COLORS.slate} />
          <text x={pointA.x - 10} y={pointA.y - 5} className="text-xs" style={{ fill: NEUBRUTALISM_COLORS.slate }}>
            A
          </text>
          <text x={pointB.x + 5} y={pointB.y - 5} className="text-xs" style={{ fill: NEUBRUTALISM_COLORS.slate }}>
            B
          </text>
          <text x={pointC.x + 5} y={pointC.y + 10} className="text-xs" style={{ fill: NEUBRUTALISM_COLORS.slate }}>
            C
          </text>
          <text x={centerX} y={centerY - svgSize * 0.4 - 10} textAnchor="middle" className="text-sm font-bold" style={{ fill: NEUBRUTALISM_COLORS.teal }}>
            N
          </text>
          <text
            x={(pointA.x + pointB.x) / 2}
            y={(pointA.y + pointB.y) / 2 - 20}
            textAnchor="middle"
            className="text-xs"
            style={{ fill: NEUBRUTALISM_COLORS.slate }}
          >
            50km, 060°
          </text>
          <text
            x={(pointB.x + pointC.x) / 2}
            y={(pointB.y + pointC.y) / 2 + 10}
            textAnchor="middle"
            className="text-xs"
            style={{ fill: NEUBRUTALISM_COLORS.slate }}
          >
            30km, 150°
          </text>
        </>
      ),
    },
    {
      label: 'Step 4: Direct Route Home',
      description: `Calculate the direct route from C to A. Using trigonometry, the distance is approximately ${distanceHome.toFixed(
        1
      )}km, and the bearing is ${bearingHome.toString().padStart(3, '0')}°.`,
      svgContent: (
        <>
          {/* North line at A */}
          <line
            x1={centerX}
            y1={centerY}
            x2={centerX}
            y2={centerY - svgSize * 0.4}
            stroke={NEUBRUTALISM_COLORS.slate}
            strokeWidth="2"
            strokeDasharray="8,4"
          />
          {/* Path A to B to C */}
          <line
            x1={pointA.x}
            y1={pointA.y}
            x2={pointB.x}
            y2={pointB.y}
            stroke={NEUBRUTALISM_COLORS.orange}
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          <line
            x1={pointB.x}
            y1={pointB.y}
            x2={pointC.x}
            y2={pointC.y}
            stroke={NEUBRUTALISM_COLORS.orange}
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          {/* Direct route C to A */}
          <line
            x1={pointC.x}
            y1={pointC.y}
            x2={pointA.x}
            y2={pointA.y}
            stroke={NEUBRUTALISM_COLORS.teal}
            strokeWidth="3"
            strokeDasharray="4,4"
            markerEnd="url(#back-arrowhead)"
          />
          {/* Points */}
          <circle cx={pointA.x} cy={pointA.y} r="4" fill={NEUBRUTALISM_COLORS.slate} />
          <circle cx={pointB.x} cy={pointB.y} r="4" fill={NEUBRUTALISM_COLORS.slate} />
          <circle cx={pointC.x} cy={pointC.y} r="4" fill={NEUBRUTALISM_COLORS.slate} />
          <text x={pointA.x - 10} y={pointA.y - 5} className="text-xs" style={{ fill: NEUBRUTALISM_COLORS.slate }}>
            A
          </text>
          <text x={pointB.x + 5} y={pointB.y - 5} className="text-xs" style={{ fill: NEUBRUTALISM_COLORS.slate }}>
            B
          </text>
          <text x={pointC.x + 5} y={pointC.y + 10} className="text-xs" style={{ fill: NEUBRUTALISM_COLORS.slate }}>
            C
          </text>
          <text x={centerX} y={centerY - svgSize * 0.4 - 10} textAnchor="middle" className="text-sm font-bold" style={{ fill: NEUBRUTALISM_COLORS.teal }}>
            N
          </text>
          <text
            x={(pointA.x + pointB.x) / 2}
            y={(pointA.y + pointB.y) / 2 - 20}
            textAnchor="middle"
            className="text-xs"
            style={{ fill: NEUBRUTALISM_COLORS.slate }}
          >
            50km, 060°
          </text>
          <text
            x={(pointB.x + pointC.x) / 2}
            y={(pointB.y + pointC.y) / 2 + 10}
            textAnchor="middle"
            className="text-xs"
            style={{ fill: NEUBRUTALISM_COLORS.slate }}
          >
            30km, 150°
          </text>
          <text
            x={(pointC.x + pointA.x) / 2}
            y={(pointC.y + pointA.y) / 2 + 20}
            textAnchor="middle"
            className="text-xs"
            style={{ fill: NEUBRUTALISM_COLORS.teal }}
          >
            {distanceHome.toFixed(1)}km, {bearingHome.toString().padStart(3, '0')}°
          </text>
        </>
      ),
    },
  ];

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
          Solving Bearing Problems
        </h1>
        <p className="text-sm text-center">
          Step through an example to learn how to solve bearing problems
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {/* SVG Diagram */}
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
            Example: Ship Navigation
          </h2>
          <p
            className="text-sm mb-3 text-center"
            style={{ color: NEUBRUTALISM_COLORS.slate }}
          >
            A ship sails 50km on 060°, then 30km on 150°. Find the direct route home.
          </p>
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
              {steps[currentStep].svgContent as ReactNode}
              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill={NEUBRUTALISM_COLORS.orange} />
                </marker>
                <marker id="back-arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill={NEUBRUTALISM_COLORS.teal} />
                </marker>
              </defs>
            </svg>
          </div>
          {/* Step Navigation */}
          <div className="flex justify-between mb-3">
            <button
              onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              style={getButtonStyle(false)}
              onMouseEnter={(e) => {
                if (currentStep !== 0)
                  e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.cream;
              }}
              onMouseLeave={(e) => {
                if (currentStep !== 0)
                  e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.yellow;
              }}
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={currentStep === steps.length - 1}
              style={getButtonStyle(false)}
              onMouseEnter={(e) => {
                if (currentStep !== steps.length - 1)
                  e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.cream;
              }}
              onMouseLeave={(e) => {
                if (currentStep !== steps.length - 1)
                  e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.yellow;
              }}
            >
              Next
            </button>
          </div>
          {/* Step Description */}
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.white,
              borderColor: NEUBRUTALISM_COLORS.slate,
              padding: '0.75rem',
            }}
          >
            <h3
              className="font-medium mb-1"
              style={{ color: NEUBRUTALISM_COLORS.slate }}
            >
              {steps[currentStep].label}
            </h3>
            <p style={{ color: NEUBRUTALISM_COLORS.slate }}>{steps[currentStep].description}</p>
          </div>
        </div>
        {/* Problem-Solving Strategy */}
        <div
          style={{
            ...neubrutalismBase,
            backgroundColor: NEUBRUTALISM_COLORS.cream,
            borderColor: NEUBRUTALISM_COLORS.slate,
            padding: '1rem',
          }}
        >
          <div className="text-sm space-y-2" style={{ color: NEUBRUTALISM_COLORS.slate }}>
            <span className="font-medium">Common Problem Types:</span>
            <ul className="list-disc pl-4">
              <li>
                <strong>Finding Final Position:</strong> Given start point, bearing, and distance, find end coordinates or new bearing.
              </li>
              <li>
                <strong>Navigation Problems:</strong> Given multiple legs of a journey, find final position or direct route home.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BearingProblems;