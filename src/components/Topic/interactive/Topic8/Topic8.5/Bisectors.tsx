// Bisectors.tsx
import React, { useState, useEffect } from 'react';

// --- Neubrutalism Styles & Colors ---
const NEUBRUTALISM_COLORS = {
  primaryDark: '#264653', // Darkest color - Text, borders, background
  secondary: '#2a9d8f',   // Teal - Correct, accents, active elements
  neutral: '#e9c46a',     // Sand yellow - Highlights, explanations
  warning: '#f4a261',     // Orange - Warnings, some highlights
  danger: '#e76f51',      // Salmon - Danger, resets, highlights
  white: '#ffffff',
  lightGray: '#f0f0f0',
  borderGray: '#d0d0d0',
  shadowGray: 'rgba(38, 70, 83, 0.2)', // primaryDark with opacity
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.primaryDark}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadowGray}`,
  padding: '1rem',
};

const getButtonStyle = (isActive: boolean) => {
  return {
    ...neubrutalismBase,
    padding: '0.5rem 1rem',
    fontSize: '0.875rem', // text-sm
    fontWeight: 'bold',
    backgroundColor: isActive ? NEUBRUTALISM_COLORS.secondary : NEUBRUTALISM_COLORS.lightGray,
    color: isActive ? NEUBRUTALISM_COLORS.white : NEUBRUTALISM_COLORS.primaryDark,
    borderColor: NEUBRUTALISM_COLORS.primaryDark,
    cursor: 'pointer',
    transition: 'all 0.2s',
    ...(isActive ? {} : {
      ':hover': {
        backgroundColor: NEUBRUTALISM_COLORS.neutral,
      }
    })
  };
};

const getInfoBoxStyle = () => {
  return {
    ...neubrutalismBase,
    backgroundColor: NEUBRUTALISM_COLORS.lightGray,
    borderColor: NEUBRUTALISM_COLORS.primaryDark,
    padding: '0.75rem',
    width: '100%',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // textAlign: 'center',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: NEUBRUTALISM_COLORS.primaryDark,
  };
};
// --- End Neubrutalism Styles ---

const Bisectors = () => {
  type ConstructionType = 'perpendicular' | 'angleBisector';
  const [activeConstruction, setActiveConstruction] = useState<ConstructionType>('perpendicular');
  const [animationStep, setAnimationStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Auto-play logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setAnimationStep(prev => {
          const maxSteps = constructionData[activeConstruction].maxSteps;
          if (prev >= maxSteps) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1500); // Adjust interval time as needed
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, activeConstruction]);

  // Reset step when construction changes
  useEffect(() => {
    setAnimationStep(0);
    setIsPlaying(false);
  }, [activeConstruction]);

  // Helper functions for step descriptions
  const getStepsForPerpendicular = (currentStep: number) => {
    const steps = [
      "Place compass at point P and draw arcs intersecting line AB at points X and Y",
      "With X as center and suitable radius, draw an arc above the line",
      "With Y as center and same radius, draw another arc intersecting the first at point M",
      "Join points M and P to form the perpendicular line MP",
      "Line MP is perpendicular to line AB through point P"
    ];
    return steps[currentStep - 1] || "Starting construction...";
  };

  const getStepsForAngleBisector = (currentStep: number) => {
    const steps = [
      "Place compass at vertex Q and make an arc that cuts both arms of the angle at points A and B",
      "From point A, make an arc towards the interior of the angle",
      "Without changing compass width, from point B make another arc intersecting the first at point C",
      "Draw a line from Q through C using a ruler",
      "Line QC bisects the angle"
    ];
    return steps[currentStep - 1] || "Starting construction...";
  };


  // --- Construction Illustration Components ---
  // 1. Perpendicular Line through a Point
 // Perpendicular Line Construction Component
const PerpendicularConstruction: React.FC<{ step: number }> = ({ step }) => {
  const width = 400;
  const height = 300;
  const lineY = 150;
  const pointP = { x: 200, y: lineY };
  const radius = 60;
  const pointX = { x: pointP.x - radius, y: lineY };
  const pointY = { x: pointP.x + radius, y: lineY };
  const arcRadius = 70;
  const pointM = {
    x: pointP.x,
    y: pointP.y - Math.sqrt(arcRadius ** 2 - ((pointY.x - pointX.x) / 2) ** 2)
  };
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
      <line
        x1="50"
        y1={lineY}
        x2={width - 50}
        y2={lineY}
        stroke="#94a3b8"
        strokeWidth="2"
      />
      <circle cx={pointX.x} cy={pointX.y} r="3" fill="#3b82f6" />
      <circle cx={pointP.x} cy={pointP.y} r="4" fill="#3b82f6" />
      <circle cx={pointY.x} cy={pointY.y} r="3" fill="#3b82f6" />
      <text x={pointX.x - 15} y={pointX.y + 20} className="text-xs fill-gray-700">X</text>
      <text x={pointP.x - 10} y={pointP.y + 20} className="text-xs fill-gray-700">P</text>
      <text x={pointY.x + 5} y={pointY.y + 20} className="text-xs fill-gray-700">Y</text>
      {step >= 1 && (
        <circle
          cx={pointP.x}
          cy={pointP.y}
          r={radius}
          fill="none"
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeDasharray="4,4"
        />
      )}
      {step >= 2 && (
        <circle
          cx={pointX.x}
          cy={pointX.y}
          r={arcRadius}
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeDasharray="4,4"
        />
      )}
      {step >= 3 && (
        <circle
          cx={pointY.x}
          cy={pointY.y}
          r={arcRadius}
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeDasharray="4,4"
        />
      )}
      {step >= 4 && (
        <>
          <circle cx={pointM.x} cy={pointM.y} r="4" fill="#8b5cf6" />
          <text x={pointM.x + 10} y={pointM.y - 5} className="text-xs fill-gray-700">M</text>
        </>
      )}
      {step >= 5 && (
        <line
          x1={pointP.x}
          y1={pointP.y}
          x2={pointM.x}
          y2={pointM.y}
          stroke="#3b82f6"
          strokeWidth="2"
        />
      )}
      {step >= 4 && (
        <>
          <line
            x1={pointX.x}
            y1={pointX.y}
            x2={pointM.x}
            y2={pointM.y}
            stroke="#d1d5db"
            strokeWidth="1"
            strokeDasharray="3,3"
          />
          <line
            x1={pointY.x}
            y1={pointY.y}
            x2={pointM.x}
            y2={pointM.y}
            stroke="#d1d5db"
            strokeWidth="1"
            strokeDasharray="3,3"
          />
        </>
      )}
    </svg>
  );
};

// Angle Bisector Construction Component
const AngleBisectorConstruction: React.FC<{ step: number }> = ({ step }) => {
  const width = 400;
  const height = 300;
  const vertexQ = { x: 200, y: 150 };
  const arm1Angle = -30 * Math.PI / 180;
  const arm2Angle = 30 * Math.PI / 180;
  const armLength = 120;
  const pointP = {
    x: vertexQ.x + armLength * Math.cos(arm1Angle),
    y: vertexQ.y + armLength * Math.sin(arm1Angle)
  };
  const pointR = {
    x: vertexQ.x + armLength * Math.cos(arm2Angle),
    y: vertexQ.y + armLength * Math.sin(arm2Angle)
  };
  const firstArcRadius = 60;
  const pointA = {
    x: vertexQ.x + firstArcRadius * Math.cos(arm1Angle),
    y: vertexQ.y + firstArcRadius * Math.sin(arm1Angle)
  };
  const pointB = {
    x: vertexQ.x + firstArcRadius * Math.cos(arm2Angle),
    y: vertexQ.y + firstArcRadius * Math.sin(arm2Angle)
  };
  const secondArcRadius = 50;
  // Calculate intersection point C correctly
  const x1 = pointA.x;
  const y1 = pointA.y;
  const x2 = pointB.x;
  const y2 = pointB.y;
  const r = secondArcRadius;
  const d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  let pointC = { x: 0, y: 0 };
  if (d <= 2 * r) {
    const a = (r ** 2 - r ** 2 + d ** 2) / (2 * d);
    const h = Math.sqrt(r ** 2 - a ** 2);
    const x3 = x1 + a * (x2 - x1) / d;
    const y3 = y1 + a * (y2 - y1) / d;
    pointC = {
      x: x3 + h * (y2 - y1) / d,
      y: y3 - h * (x2 - x1) / d
    };
  } else {
    // Fallback if circles don't intersect properly
    pointC = {
      x: vertexQ.x,
      y: vertexQ.y - Math.sqrt(secondArcRadius ** 2 - ((pointB.x - pointA.x) / 2) ** 2)
    };
  }
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
      <line
        x1={vertexQ.x}
        y1={vertexQ.y}
        x2={pointP.x}
        y2={pointP.y}
        stroke="#94a3b8"
        strokeWidth="2"
      />
      <line
        x1={vertexQ.x}
        y1={vertexQ.y}
        x2={pointR.x}
        y2={pointR.y}
        stroke="#94a3b8"
        strokeWidth="2"
      />
      <circle cx={vertexQ.x} cy={vertexQ.y} r="4" fill="#3b82f6" />
      <text x={vertexQ.x + 10} y={vertexQ.y + 10} className="text-xs fill-gray-700">Q</text>
      <text x={pointP.x + 10} y={pointP.y - 10} className="text-xs fill-gray-700">P</text>
      <text x={pointR.x + 10} y={pointR.y + 10} className="text-xs fill-gray-700">R</text>
      {step >= 1 && (
        <>
          <path
            d={`M ${pointA.x} ${pointA.y} A ${firstArcRadius} ${firstArcRadius} 0 0 1 ${pointB.x} ${pointB.y}`}
            fill="none"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />
          <circle cx={pointA.x} cy={pointA.y} r="3" fill="#3b82f6" />
          <circle cx={pointB.x} cy={pointB.y} r="3" fill="#3b82f6" />
          <text x={pointA.x + 10} y={pointA.y - 5} className="text-xs fill-gray-700">A</text>
          <text x={pointB.x + 10} y={pointB.y + 15} className="text-xs fill-gray-700">B</text>
        </>
      )}
      {step >= 2 && (
        <circle
          cx={pointA.x}
          cy={pointA.y}
          r={secondArcRadius}
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeDasharray="4,4"
        />
      )}
      {step >= 3 && (
        <circle
          cx={pointB.x}
          cy={pointB.y}
          r={secondArcRadius}
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeDasharray="4,4"
        />
      )}
      {step >= 4 && (
        <>
          <circle cx={pointC.x} cy={pointC.y} r="4" fill="#8b5cf6" />
          <text x={pointC.x + 10} y={pointC.y - 5} className="text-xs fill-gray-700">C</text>
        </>
      )}
      {step >= 5 && (
        <line
          x1={vertexQ.x}
          y1={vertexQ.y}
          x2={pointC.x}
          y2={pointC.y}
          stroke="#3b82f6"
          strokeWidth="2"
        />
      )}
    </svg>
  );
};


  // Construction data
  const constructionData: Record<ConstructionType, { name: string; maxSteps: number; description: string; IllustrationComponent: React.FC<{ step: number }> }> = {
    perpendicular: {
      name: "Perpendicular Line",
      maxSteps: 5,
      description: "Construct a line perpendicular to a given line through a point on the line.",
      IllustrationComponent: PerpendicularConstruction,
    },
    angleBisector: {
      name: "Angle Bisector",
      maxSteps: 5,
      description: "Construct a line that bisects a given angle.",
      IllustrationComponent: AngleBisectorConstruction,
    }
  };

  const currentConstruction = constructionData[activeConstruction];
  const maxStepsForCurrent = currentConstruction.maxSteps;
  const IllustrationComponent = currentConstruction.IllustrationComponent;

  const handleNext = () => {
    if (animationStep < maxStepsForCurrent) {
      setAnimationStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (animationStep > 0) {
      setAnimationStep(prev => prev - 1);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      style={{
        ...neubrutalismBase,
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: NEUBRUTALISM_COLORS.secondary,
        borderColor: NEUBRUTALISM_COLORS.primaryDark,
        color: NEUBRUTALISM_COLORS.primaryDark,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.primaryDark}`,
      }}
    >
      <div className="mb-4 mt-3 text-white">
        <h2 className="text-xl font-bold mb-1 text-center">
          Bisector Constructions
        </h2>
        <p className="text-sm text-center">
          Step-by-step visual guide for perpendicular and angle bisectors
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {/* Construction Selector */}
        <div
          style={{
            ...neubrutalismBase,
            backgroundColor: NEUBRUTALISM_COLORS.lightGray,
            borderColor: NEUBRUTALISM_COLORS.primaryDark,
            padding: '1rem',
          }}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {(Object.keys(constructionData) as ConstructionType[]).map((type) => (
              <button
                key={type}
                onClick={() => setActiveConstruction(type)}
                style={getButtonStyle(activeConstruction === type)}
                onMouseEnter={(e) => {
                  if (activeConstruction !== type)
                    e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.neutral;
                }}
                onMouseLeave={(e) => {
                  if (activeConstruction !== type)
                    e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.lightGray;
                }}
              >
                {constructionData[type].name}
              </button>
            ))}
          </div>
        </div>
        {/* Construction Visualization */}
        <div
          style={{
            ...neubrutalismBase,
            backgroundColor: NEUBRUTALISM_COLORS.white,
            borderColor: NEUBRUTALISM_COLORS.primaryDark,
            padding: '1rem',
          }}
        >
          <h3 className="text-base font-bold mb-2 text-center" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
            {currentConstruction.name}
          </h3>
          <p className="text-sm mb-3 text-center" style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
            {currentConstruction.description}
          </p>
          <div className="flex justify-center mb-4">
            <IllustrationComponent step={animationStep} />
          </div>
          {/* Controls */}
          <div className="flex justify-between items-center mb-3">
            <button
              onClick={handlePrev}
              disabled={animationStep === 0}
              style={getButtonStyle(false)}
              onMouseEnter={(e) => {
                if (animationStep !== 0)
                  e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.neutral;
              }}
              onMouseLeave={(e) => {
                if (animationStep !== 0)
                  e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.lightGray;
              }}
            >
              Previous
            </button>
            <button
              onClick={togglePlay}
              style={getButtonStyle(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.neutral;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.lightGray;
              }}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={handleNext}
              disabled={animationStep === maxStepsForCurrent}
              style={getButtonStyle(false)}
              onMouseEnter={(e) => {
                if (animationStep !== maxStepsForCurrent)
                  e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.neutral;
              }}
              onMouseLeave={(e) => {
                if (animationStep !== maxStepsForCurrent)
                  e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.lightGray;
              }}
            >
              Next
            </button>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="h-2.5 rounded-full"
              style={{
                width: `${(animationStep / maxStepsForCurrent) * 100}%`,
                backgroundColor: NEUBRUTALISM_COLORS.secondary,
              }}
            ></div>
          </div>
          {/* Step Description */}
          <div style={getInfoBoxStyle()}>
            <p style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
              <span className="font-bold">Step {animationStep}:</span> {getStepsForPerpendicular(animationStep) ||
                getStepsForAngleBisector(animationStep)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bisectors;