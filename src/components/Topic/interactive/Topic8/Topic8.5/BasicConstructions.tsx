import React, { ReactNode, useState } from 'react';
import { Compass, Ruler, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

type ConstructionStep = {
  id: string;
  title: string;
  description: string;
  illustration: JSX.Element;
  maxSteps: number; // Added to track steps per construction
};

const BasicConstructions: React.FC = () => {
  const [activeConstruction, setActiveConstruction] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const constructions: ConstructionStep[] = [
    {
      id: 'perpendicular',
      title: 'Perpendicular Line Through Point',
      description: 'Construct a line perpendicular to a given line passing through a point on that line',
      illustration: <PerpendicularConstruction step={animationStep} />,
      maxSteps: 5
    },
    {
      id: 'angle-bisector',
      title: 'Angle Bisector',
      description: 'Divide an angle into two equal parts',
      illustration: <AngleBisectorConstruction step={animationStep} />,
      maxSteps: 5
    },
    {
      id: 'parallel-lines',
      title: 'Parallel Lines',
      description: 'Construct a line parallel to a given line passing through an external point',
      illustration: <ParallelLinesConstruction step={animationStep} />,
      maxSteps: 6
    },
    {
      id: 'angle-60',
      title: '60-Degree Angle',
      description: 'Construct a 60-degree angle using compass and straightedge',
      illustration: <Angle60Construction step={animationStep} />,
      maxSteps: 4
    }
  ];

  const currentConstruction = constructions[activeConstruction];
  const maxStepsForCurrent = currentConstruction.maxSteps;

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

  // const resetAnimation = () => {
  //   setAnimationStep(0);
  //   setIsPlaying(false);
  // };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && animationStep < maxStepsForCurrent) {
      interval = setInterval(() => {
        setAnimationStep(prev => prev + 1);
      }, 1500);
    } else if (animationStep >= maxStepsForCurrent) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, animationStep, maxStepsForCurrent]);

  return (
      <div className="bg-gradient-to-br from-[#35858B] to-[#395B64] rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">Geometric Constructions</h2>
          <p className="text-white mb-6">
            Learn fundamental constructions using compass and straightedge
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {constructions.map((construction, index) => (
              <button
                key={construction.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeConstruction === index
                    ? 'bg-rose-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => {
                  setActiveConstruction(index);
                  setAnimationStep(0);
                  setIsPlaying(false);
                }}
              >
                {construction.title}
              </button>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-gray-50 rounded-lg p-4 mb-4 min-h-[300px] flex items-center justify-center">
                {currentConstruction.illustration as ReactNode}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex justify-between space-x-2 w-full">
                  <button
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center"
                    onClick={handlePrev}
                    disabled={animationStep === 0}
                    aria-label="Previous step"
                  >
                    <ChevronLeft className="w-5 h-5" />
                     Previous
                  </button>
                  <button
                    className="p-2 rounded-full bg-rose-500 text-white hover:bg-blue-600 flex items-center"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause animation" : "Play animation"}
                  >
                    {isPlaying ? <Pause className="w-10 h-5" /> :  <Play className="w-10 h-5" />}
                  </button>
                  <button
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center"
                    onClick={handleNext}
                    disabled={animationStep === maxStepsForCurrent}
                    aria-label="Next step"
                  >
                    <ChevronRight className="w-5 h-5" />
                    Next Step
                  </button>
                </div>
                {/* <button
                  className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900"
                  onClick={resetAnimation}
                >
                  <RotateCcw className="w-4 h-4" />
                  {/* <span>Reset</span> */}
                {/* </button> */}
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-rose-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(animationStep / maxStepsForCurrent) * 100}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-white mt-1">
                  Step {animationStep} of {maxStepsForCurrent}
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-white mb-3">
                {currentConstruction.title}
              </h3>
              <p className="text-white mb-4">
                {currentConstruction.description}
              </p>
              <div className="bg-white/20 text-white rounded-lg p-4">
                <h4 className="font-medium mb-2">Construction Steps:</h4>
                <ol className="list-decimal list-inside space-y-2 text-white">
                  {getStepsForConstruction(activeConstruction, animationStep)}
                </ol>
              </div>
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-800 mb-2">Tools Required:</h4>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <Compass className="w-4 h-4 mr-2 text-amber-600" />
                    <span>Compass for drawing arcs</span>
                  </li>
                  <li className="flex items-center">
                    <Ruler className="w-4 h-4 mr-2 text-amber-600" />
                    <span>Straightedge for drawing lines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

// Helper function to render correct steps based on construction
const getStepsForConstruction = (constructionIndex: number, currentStep: number) => {
  const stepClass = (stepNum: number) => currentStep >= stepNum ? 'text-white font-medium' : 'text-black';

  switch (constructionIndex) {
    case 0: // Perpendicular Line
      return (
        <>
          <li className={stepClass(1)}>
            With P as center and any suitable radius, draw an arc cutting line AB at points X and Y
          </li>
          <li className={stepClass(2)}>
            With X as center and suitable radius, draw an arc above the line
          </li>
          <li className={stepClass(3)}>
            With Y as center and same radius, draw another arc intersecting the first at point M
          </li>
          <li className={stepClass(4)}>
            Join points M and P to form the perpendicular line MP
          </li>
          <li className={stepClass(5)}>
            Line MP is perpendicular to line AB through point P
          </li>
        </>
      );
    case 1: // Angle Bisector
      return (
        <>
          <li className={stepClass(1)}>
            Place compass at vertex Q and make an arc that cuts both arms of the angle at points A and B
          </li>
          <li className={stepClass(2)}>
            From point A, make an arc towards the interior of the angle
          </li>
          <li className={stepClass(3)}>
            Without changing compass width, from point B make another arc intersecting the first at point C
          </li>
          <li className={stepClass(4)}>
            Draw a line from Q through C using a ruler
          </li>
          <li className={stepClass(5)}>
            Line QC bisects the angle
          </li>
        </>
      );
    case 2: // Parallel Lines
      return (
        <>
          <li className={stepClass(1)}>
            Choose any point X on line AB and join it to point P
          </li>
          <li className={stepClass(2)}>
            With X as center and any suitable radius, draw an arc cutting PX at M and AB at N
          </li>
          <li className={stepClass(3)}>
            With P as center and same radius, draw an arc cutting PX at Q
          </li>
          <li className={stepClass(4)}>
            With Q as center and same radius as before, draw an arc cutting the previous arc at R
          </li>
          <li className={stepClass(5)}>
            Join P and R to draw line CD
          </li>
          <li className={stepClass(6)}>
            Line CD is parallel to line AB and passes through P
          </li>
        </>
      );
    case 3: // 60 Degree Angle
      return (
        <>
          <li className={stepClass(1)}>
            Draw a line segment OB with point O at the left end
          </li>
          <li className={stepClass(2)}>
            Place compass at O and draw an arc meeting OB at point P
          </li>
          <li className={stepClass(3)}>
            Place compass at P and draw an arc through O, intersecting the first arc at point A
          </li>
          <li className={stepClass(4)}>
            Draw a line from O through A to form the 60° angle
          </li>
        </>
      );
    default:
      return null;
  }
};

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

// Parallel Lines Construction Component
const ParallelLinesConstruction: React.FC<{ step: number }> = ({ step }) => {
  const width = 400;
  const height = 300;
  const pointA = { x: 50, y: 200 };
  const pointB = { x: 350, y: 200 };
  const pointP = { x: 200, y: 100 };
  const pointX = { x: 150, y: 200 };
  const radius = 50;
  const pxLength = Math.sqrt((pointP.x - pointX.x) ** 2 + (pointP.y - pointX.y) ** 2);
  const ratio = radius / pxLength;
  const pointM = {
    x: pointX.x + ratio * (pointP.x - pointX.x),
    y: pointX.y + ratio * (pointP.y - pointX.y)
  };
  const pointN = {
    x: pointX.x - radius,
    y: pointX.y
  };
  const pointQ = {
    x: pointP.x - ratio * (pointP.x - pointX.x),
    y: pointP.y - ratio * (pointP.y - pointX.y)
  };

  // Simplified calculation for point R at intersection
  const pointR = {
    x: pointQ.x - radius / 2,
    y: pointQ.y - radius * 0.866
  };

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
      <line
        x1={pointA.x}
        y1={pointA.y}
        x2={pointB.x}
        y2={pointB.y}
        stroke="#94a3b8"
        strokeWidth="2"
      />
      <text x={pointA.x - 20} y={pointA.y + 5} className="text-xs fill-gray-700">A</text>
      <text x={pointB.x + 10} y={pointB.y + 5} className="text-xs fill-gray-700">B</text>

      <circle cx={pointP.x} cy={pointP.y} r="4" fill="#3b82f6" />
      <text x={pointP.x + 10} y={pointP.y - 5} className="text-xs fill-gray-700">P</text>

      {step >= 1 && (
        <line
          x1={pointP.x}
          y1={pointP.y}
          x2={pointX.x}
          y2={pointX.y}
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="3,3"
        />
      )}

      {step >= 1 && (
        <>
          <circle cx={pointX.x} cy={pointX.y} r="3" fill="#3b82f6" />
          <text x={pointX.x - 15} y={pointX.y + 20} className="text-xs fill-gray-700">X</text>
        </>
      )}

      {step >= 2 && (
        <circle
          cx={pointX.x}
          cy={pointX.y}
          r={radius}
          fill="none"
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeDasharray="4,4"
        />
      )}

      {step >= 2 && (
        <>
          <circle cx={pointM.x} cy={pointM.y} r="3" fill="#ef4444" />
          <circle cx={pointN.x} cy={pointN.y} r="3" fill="#ef4444" />
          <text x={pointM.x + 5} y={pointM.y - 5} className="text-xs fill-gray-700">M</text>
          <text x={pointN.x - 15} y={pointN.y + 20} className="text-xs fill-gray-700">N</text>
        </>
      )}

      {step >= 3 && (
        <circle
          cx={pointP.x}
          cy={pointP.y}
          r={radius}
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeDasharray="4,4"
        />
      )}

      {step >= 3 && (
        <>
          <circle cx={pointQ.x} cy={pointQ.y} r="3" fill="#10b981" />
          <text x={pointQ.x + 5} y={pointQ.y - 5} className="text-xs fill-gray-700">Q</text>
        </>
      )}

      {step >= 4 && (
        <circle
          cx={pointQ.x}
          cy={pointQ.y}
          r={radius}
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="1.5"
          strokeDasharray="4,4"
        />
      )}

      {step >= 4 && (
        <>
          <circle cx={pointR.x} cy={pointR.y} r="4" fill="#8b5cf6" />
          <text x={pointR.x + 10} y={pointR.y - 5} className="text-xs fill-gray-700">R</text>
        </>
      )}

      {step >= 5 && (
        <line
          x1={pointP.x}
          y1={pointP.y}
          x2={pointR.x}
          y2={pointR.y}
          stroke="#3b82f6"
          strokeWidth="2"
        />
      )}
    </svg>
  );
};

// 60-Degree Angle Construction Component
const Angle60Construction: React.FC<{ step: number }> = ({ step }) => {
  const width = 400;
  const height = 300;
  const pointO = { x: 100, y: 150 };
  const pointB = { x: 300, y: 150 };
  const radius = 80;
  const pointP = { x: pointO.x + radius, y: pointO.y };
  const pointA = {
    x: pointO.x + radius * Math.cos(Math.PI / 3),
    y: pointO.y - radius * Math.sin(Math.PI / 3)
  };

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
      <line
        x1={pointO.x}
        y1={pointO.y}
        x2={pointB.x}
        y2={pointB.y}
        stroke="#94a3b8"
        strokeWidth="2"
      />
      <text x={pointO.x - 15} y={pointO.y + 5} className="text-xs fill-gray-700">O</text>
      <text x={pointB.x + 5} y={pointB.y + 5} className="text-xs fill-gray-700">B</text>

      {step >= 2 && (
        <circle
          cx={pointO.x}
          cy={pointO.y}
          r={radius}
          fill="none"
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeDasharray="4,4"
        />
      )}

      {step >= 2 && (
        <>
          <circle cx={pointP.x} cy={pointP.y} r="3" fill="#ef4444" />
          <text x={pointP.x + 5} y={pointP.y + 15} className="text-xs fill-gray-700">P</text>
        </>
      )}

      {step >= 3 && (
        <circle
          cx={pointP.x}
          cy={pointP.y}
          r={radius}
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeDasharray="4,4"
        />
      )}

      {step >= 3 && (
        <>
          <circle cx={pointA.x} cy={pointA.y} r="4" fill="#10b981" />
          <text x={pointA.x + 10} y={pointA.y - 5} className="text-xs fill-gray-700">A</text>
        </>
      )}

      {step >= 4 && (
        <line
          x1={pointO.x}
          y1={pointO.y}
          x2={pointA.x}
          y2={pointA.y}
          stroke="#3b82f6"
          strokeWidth="2"
        />
      )}

      {step >= 4 && (
        <path
          d={`M ${pointO.x + 30} ${pointO.y} A 30 30 0 0 1 ${pointA.x - 20} ${pointA.y + 15}`}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
        />
      )}

      {step >= 4 && (
        <text x={pointO.x + 35} y={pointO.y - 10} className="text-xs fill-blue-600">60°</text>
      )}
    </svg>
  );
};

export default BasicConstructions;