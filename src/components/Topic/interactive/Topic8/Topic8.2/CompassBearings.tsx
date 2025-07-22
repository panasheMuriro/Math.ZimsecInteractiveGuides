/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

interface BearingExample {
  compassBearing: string;
  threeFigure: number;
  startDirection: 'N' | 'S';
  angle: number;
  endDirection: 'E' | 'W';
  description: string;
  formula: string;
}

const CompassBearings: React.FC = () => {
  const [currentExample, setCurrentExample] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [animationStep, setAnimationStep] = useState<number>(0);
  const [sweepAngle, setSweepAngle] = useState<number>(0);
  const [showFinalResult, setShowFinalResult] = useState<boolean>(false);
  const [customAngle, setCustomAngle] = useState<string>('30');
  const [customStart, setCustomStart] = useState<'N' | 'S'>('N');
  const [customEnd, setCustomEnd] = useState<'E' | 'W'>('E');

  const examples: BearingExample[] = [
    {
      compassBearing: 'N30°E',
      threeFigure: 30,
      startDirection: 'N',
      angle: 30,
      endDirection: 'E',
      description: 'Start from North, turn 30° toward East',
      formula: 'Bearing = angle = 30°'
    },
    {
      compassBearing: 'S45°W',
      threeFigure: 225,
      startDirection: 'S',
      angle: 45,
      endDirection: 'W',
      description: 'Start from South, turn 45° toward West',
      formula: 'Bearing = 180° + angle = 180° + 45° = 225°'
    },
    {
      compassBearing: 'N60°W',
      threeFigure: 300,
      startDirection: 'N',
      angle: 60,
      endDirection: 'W',
      description: 'Start from North, turn 60° toward West',
      formula: 'Bearing = 360° - angle = 360° - 60° = 300°'
    },
    {
      compassBearing: 'S25°E',
      threeFigure: 155,
      startDirection: 'S',
      angle: 25,
      endDirection: 'E',
      description: 'Start from South, turn 25° toward East',
      formula: 'Bearing = 180° - angle = 180° - 25° = 155°'
    }
  ];

  // Auto-start animation when example changes
  useEffect(() => {
    setShowFinalResult(false);
    setIsAnimating(true);
    setAnimationStep(0);
    setSweepAngle(0);
  }, [currentExample]);

  // Animation cycle
  useEffect(() => {
    if (isAnimating) {
      if (animationStep === 0) {
        // Step 1: Show two lines at start direction
        setTimeout(() => setAnimationStep(1), 800);
      } else if (animationStep === 1) {
        // Step 2: Start sweeping animation
        const currentBearing = examples[currentExample];
        const targetAngle = currentBearing.threeFigure;
        const startAngle = currentBearing.startDirection === 'N' ? 0 : 180;
        const duration = 2000; // 2 seconds for sweep
        const steps = 60;
        const angleIncrement = (targetAngle - startAngle) / steps;
        
        let step = 0;
        const sweepInterval = setInterval(() => {
          step++;
          setSweepAngle(startAngle + (angleIncrement * step));
          
          if (step >= steps) {
            clearInterval(sweepInterval);
            setAnimationStep(2);
          }
        }, duration / steps);
      } else if (animationStep === 2) {
        // Step 3: Show three-figure bearing and keep it visible
        setTimeout(() => {
          setAnimationStep(3);
          setShowFinalResult(true);
          setIsAnimating(false);
        }, 500);
      }
    }
  }, [isAnimating, animationStep, currentExample]);

  const handleExampleChange = (index: number) => {
    if (index !== currentExample) {
      setCurrentExample(index);
    }
  };

  const calculateCustomBearing = (): number => {
    const angle = parseInt(customAngle) || 0;
    if (customStart === 'N' && customEnd === 'E') return angle;
    if (customStart === 'N' && customEnd === 'W') return 360 - angle;
    if (customStart === 'S' && customEnd === 'E') return 180 - angle;
    if (customStart === 'S' && customEnd === 'W') return 180 + angle;
    return 0;
  };

  const getCustomFormula = (): string => {
    const angle = parseInt(customAngle) || 0;
    if (customStart === 'N' && customEnd === 'E') return `Bearing = angle = ${angle}°`;
    if (customStart === 'N' && customEnd === 'W') return `Bearing = 360° - angle = 360° - ${angle}° = ${360 - angle}°`;
    if (customStart === 'S' && customEnd === 'E') return `Bearing = 180° - angle = 180° - ${angle}° = ${180 - angle}°`;
    if (customStart === 'S' && customEnd === 'W') return `Bearing = 180° + angle = 180° + ${angle}° = ${180 + angle}°`;
    return '';
  };

  // SVG compass components - made smaller for mobile
  const svgSize = Math.min(window.innerWidth * 0.8, 300); // Responsive size
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  const radius = svgSize * 0.4;

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const currentBearing = examples[currentExample];

  return (
    <div className="p-4 bg-bearings-gradient rounded-lg mx-auto">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">
          Animated Compass Bearings
        </h2>
        <p className="text-sm text-gray-600">
          Tap any bearing to see the animated conversion
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Animated Compass Display */}
        <div className="bg-white p-3 rounded-lg shadow-md">
          <h3 className="text-base font-semibold mb-3 text-center">Visual Demonstration</h3>
          
          <div className="flex justify-center mb-3">
            <svg width={svgSize} height={svgSize} className="border rounded-lg bg-gray-50">
              {/* Background circles */}
              <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#e5e7eb" strokeWidth="2"/>
              <circle cx={centerX} cy={centerY} r={radius * 0.8} fill="none" stroke="#f3f4f6" strokeWidth="1"/>
              
              {/* Cardinal directions */}
              <text x={centerX} y={centerY - radius - 10} textAnchor="middle" className="text-base font-bold fill-blue-600">N</text>
              <text x={centerX + radius + 10} y={centerY + 5} textAnchor="middle" className="text-base font-bold fill-green-600">E</text>
              <text x={centerX} y={centerY + radius + 15} textAnchor="middle" className="text-base font-bold fill-red-600">S</text>
              <text x={centerX - radius - 10} y={centerY + 5} textAnchor="middle" className="text-base font-bold fill-purple-600">W</text>

              {/* Reference line (always visible for North start direction) */}
    
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={centerX}
                  y2={centerY - radius}
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeDasharray="8,4"
                />
        

              {/* Step 1: Moving line at starting direction */}
              {(isAnimating && animationStep === 0) && (
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={centerX}
                  y2={currentBearing.startDirection === 'N' ? centerY - radius : centerY + radius}
                  stroke="#dc2626"
                  strokeWidth="3"
                />
              )}

              {/* Step 2: Sweeping line */}
              {(isAnimating && animationStep >= 1) && (
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={polarToCartesian(centerX, centerY, radius, sweepAngle).x}
                  y2={polarToCartesian(centerX, centerY, radius, sweepAngle).y}
                  stroke="#dc2626"
                  strokeWidth="3"
                  markerEnd="url(#arrowhead)"
                />
              )}

              {/* Final result - stays visible */}
              {showFinalResult && (
                <>
                  {/* Final bearing line */}
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={polarToCartesian(centerX, centerY, radius, currentBearing.threeFigure).x}
                    y2={polarToCartesian(centerX, centerY, radius, currentBearing.threeFigure).y}
                    stroke="#dc2626"
                    strokeWidth="3"
                    markerEnd="url(#arrowhead)"
                  />
                  {/* Three-figure bearing display */}
                  <text
                    x={centerX}
                    y={centerY - 8}
                    textAnchor="middle"
                    className="text-xl font-bold fill-green-600"
                  >
                    {currentBearing.threeFigure.toString().padStart(3, '0')}°
                  </text>
                  <text
                    x={centerX}
                    y={centerY + 12}
                    textAnchor="middle"
                    className="text-xs font-semibold fill-gray-600"
                  >
                    Three-Figure Bearing
                  </text>
                </>
              )}

              {/* Arrow marker definition */}
              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#dc2626"/>
                </marker>
              </defs>
            </svg>
          </div>

          {/* Example selector - now horizontal scroll for mobile */}
          <div className="overflow-x-auto pb-2 mb-3">
            <div className="flex gap-2 w-max">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleChange(index)}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors flex-shrink-0 ${
                    currentExample === index
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {example.compassBearing}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center text-xs text-gray-600">
            {isAnimating ? (
              <span className="text-blue-600 font-semibold">🔄 Animating...</span>
            ) : (
              <span>✅ Conversion complete! Tap another bearing.</span>
            )}
          </div>
        </div>

        {/* Information Panel */}
        <div className="space-y-3">
          {/* Current Example Details */}
          <div className="bg-white p-3 rounded-lg shadow-md">
            <h3 className="text-base font-semibold mb-2">Current Example</h3>
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-medium">Compass Bearing:</span> {currentBearing.compassBearing}
              </p>
              <p>
                <span className="font-medium">Three-Figure:</span> {currentBearing.threeFigure.toString().padStart(3, '0')}°
              </p>
              <p>
                <span className="font-medium">Description:</span> {currentBearing.description}
              </p>
              <p className="bg-gray-50 p-2 rounded mt-1 text-xs">
                <span className="font-medium">Formula:</span> {currentBearing.formula}
              </p>
            </div>
          </div>

          {/* Custom Calculator */}
          <div className="bg-white p-3 rounded-lg shadow-md">
            <h3 className="text-base font-semibold mb-2">Custom Calculator</h3>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <label className="block text-xs font-medium mb-1">Start Direction</label>
                <select
                  value={customStart}
                  onChange={(e) => setCustomStart(e.target.value as 'N' | 'S')}
                  className="w-full p-1.5 border rounded text-sm"
                >
                  <option value="N">North (N)</option>
                  <option value="S">South (S)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">End Direction</label>
                <select
                  value={customEnd}
                  onChange={(e) => setCustomEnd(e.target.value as 'E' | 'W')}
                  className="w-full p-1.5 border rounded text-sm"
                >
                  <option value="E">East (E)</option>
                  <option value="W">West (W)</option>
                </select>
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-xs font-medium mb-1">Angle (0-90°)</label>
              <input
                type="number"
                min="0"
                max="90"
                value={customAngle}
                onChange={(e) => setCustomAngle(e.target.value)}
                className="w-full p-1.5 border rounded text-sm"
              />
            </div>
            <div className="bg-gray-50 p-2 rounded text-sm">
              <p className="font-medium">
                Compass Bearing: {customStart}{customAngle}°{customEnd}
              </p>
              <p className="font-medium">
                Three-Figure: {calculateCustomBearing().toString().padStart(3, '0')}°
              </p>
              <p className="text-xs text-gray-600 mt-1">
                {getCustomFormula()}
              </p>
            </div>
          </div>

          {/* Conversion Rules */}
          <div className="bg-white p-3 rounded-lg shadow-md">
            <h3 className="text-base font-semibold mb-2">Conversion Rules</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-1.5 bg-blue-50 rounded">
                <strong>N...°E:</strong> angle
              </div>
              <div className="p-1.5 bg-purple-50 rounded">
                <strong>N...°W:</strong> 360° - angle
              </div>
              <div className="p-1.5 bg-green-50 rounded">
                <strong>S...°E:</strong> 180° - angle
              </div>
              <div className="p-1.5 bg-red-50 rounded">
                <strong>S...°W:</strong> 180° + angle
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompassBearings;