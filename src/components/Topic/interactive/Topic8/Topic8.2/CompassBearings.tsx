/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';

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
  const [sweepAngle, setSweepAngle] = useState<number>(0);
  const [showFinalResult, setShowFinalResult] = useState<boolean>(false);
  const [customAngle, setCustomAngle] = useState<string>('30');
  const [customStart, setCustomStart] = useState<'N' | 'S'>('N');
  const [customEnd, setCustomEnd] = useState<'E' | 'W'>('E');

  // Refs for stable references and cleanup
  const animationRef = useRef<number | null>(null); // For requestAnimationFrame
  const exampleChangeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef<boolean>(true); // To prevent state updates on unmounted component

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

  // Set isMountedRef on mount/unmount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      // Cleanup any running animation or timeout on unmount
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (exampleChangeTimeoutRef.current) {
        clearTimeout(exampleChangeTimeoutRef.current);
      }
    };
  }, []);

  // Handle example change and trigger animation reset/start
  const handleExampleChange = (index: number) => {
    if (index === currentExample) return; // No change, do nothing

    // Cancel any ongoing animation frame
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    // Clear any pending example change timeout
    if (exampleChangeTimeoutRef.current) {
      clearTimeout(exampleChangeTimeoutRef.current);
      exampleChangeTimeoutRef.current = null;
    }

    // Immediately reset animation state
    if (isMountedRef.current) {
        setShowFinalResult(false);
        setIsAnimating(false);
        setSweepAngle(examples[index].startDirection === 'N' ? 0 : 180); // Set to start angle immediately
    }

    // Use timeout to ensure state is flushed and then start animation
    exampleChangeTimeoutRef.current = setTimeout(() => {
        if (isMountedRef.current) {
            setCurrentExample(index);
            // Delay the animation start slightly to ensure state reset is rendered
            setTimeout(() => {
                if (isMountedRef.current) {
                    setIsAnimating(true);
                }
            }, 20); // Very short delay
        }
    }, 10); // Very short delay to ensure reset
  };

  // Animation cycle using requestAnimationFrame for smoother performance
  useEffect(() => {
    if (isAnimating) {
      const currentBearing = examples[currentExample];
      const startAngle = currentBearing.startDirection === 'N' ? 0 : 180;
      const targetAngle = currentBearing.threeFigure;
      const totalDuration = 1500; // ms
      const startTime = performance.now();

      // Cancel any previous animation frame
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / totalDuration, 1);
        
        // Ease-in-out function for smoother start/stop
        const easeProgress = progress < 0.5 
          ? 2 * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        const currentAngle = startAngle + (targetAngle - startAngle) * easeProgress;
        
        // Normalize angle to 0-360 range
        const normalizedAngle = ((currentAngle % 360) + 360) % 360;
        
        if (isMountedRef.current) {
            setSweepAngle(normalizedAngle);
        }

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          // Animation complete
          if (isMountedRef.current) {
            animationRef.current = null;
            setIsAnimating(false);
            setShowFinalResult(true);
          }
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    }

    // Cleanup function for this effect
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isAnimating, currentExample]); // Only re-run when isAnimating or currentExample changes

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
    // Normalize angle to [0, 360)
    const normalizedAngle = ((angleInDegrees % 360) + 360) % 360;
    const angleInRadians = (normalizedAngle - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const currentBearing = examples[currentExample];

  // Determine which line to show
  let animatedLine = null;
  const lineEnd = polarToCartesian(centerX, centerY, radius, sweepAngle);
  
  if (isAnimating || showFinalResult) {
    // Show animated or final line
    animatedLine = (
      <line
        key={`animated-line-${currentExample}-${isAnimating}`} 
        x1={centerX}
        y1={centerY}
        x2={lineEnd.x}
        y2={lineEnd.y}
        stroke="#dc2626"
        strokeWidth="3"
        markerEnd="url(#arrowhead)"
      />
    );
  } else {
    // Show initial reference line (start direction)
    const startAngle = currentBearing.startDirection === 'N' ? 0 : 180;
    const startLineEnd = polarToCartesian(centerX, centerY, radius, startAngle);
    animatedLine = (
      <line
        key={`initial-line-${currentExample}`}
        x1={centerX}
        y1={centerY}
        x2={startLineEnd.x}
        y2={startLineEnd.y}
        stroke="#94a3b8"
        strokeWidth="2"
        strokeDasharray="8,4"
      />
    );
  }


  return (
    <div className="p-6 bg-gradient-to-br from-[#DA6C6C] to-[#AF3E3E] rounded-2xl mx-auto font-sans">
      <div className="mb-4 mt-3 text-white">
        <h2 className="text-xl font-bold mb-1">
          Animated Compass Bearings
        </h2>
        <p className="text-sm">
          Tap any bearing to see the animated conversion
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {/* Animated Compass Display */}
        <div className="bg-white/20 p-3 rounded-lg shadow-md">
          <h3 className="text-base font-semibold mb-3 text-center text-white">Visual Demonstration</h3>
         <div className="mb-3 overflow-x-auto"> 
            {/* Added 'block' and 'min-w-min' to the SVG for better left alignment behavior within the container */}
            <svg width={svgSize} height={svgSize} className="border rounded-lg bg-gray-50 block scale-90">
              {/* Background circles */}
              <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#e5e7eb" strokeWidth="2"/>
              <circle cx={centerX} cy={centerY} r={radius * 0.8} fill="none" stroke="#f3f4f6" strokeWidth="1"/>
              {/* Cardinal directions */}
              <text x={centerX} y={centerY - radius - 10} textAnchor="middle" className="text-base font-bold fill-blue-600">N</text>
              <text x={centerX + radius + 10} y={centerY + 5} textAnchor="middle" className="text-base font-bold fill-green-600">E</text>
              <text x={centerX} y={centerY + radius + 15} textAnchor="middle" className="text-base font-bold fill-red-600">S</text>
              <text x={centerX - radius - 10} y={centerY + 5} textAnchor="middle" className="text-base font-bold fill-purple-600">W</text>
              
              {/* Animated or static line */}
              {animatedLine}

              {/* Final result elements - stays visible when showFinalResult is true */}
              {showFinalResult && (
                <>
                  {/* Three-figure bearing display */}
                  <text
                    key="bearing-text"
                    x={centerX}
                    y={centerY - 8}
                    textAnchor="middle"
                    className="text-xl font-bold fill-green-600"
                  >
                    {currentBearing.threeFigure.toString().padStart(3, '0')}°
                  </text>
                  <text
                    key="label-text"
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
            <div className="flex gap-2 w-full flex-wrap">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleChange(index)}
                  className={`px-3 py-2 text-sm rounded-3xl transition-colors flex-shrink-0 ${
                    currentExample === index
                      ? 'bg-[#129990] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {example.compassBearing}
                </button>
              ))}
            </div>
          </div>
          <div className="text-center text-xs text-white">
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
          <div className="bg-white/20 text-white p-3 rounded-lg shadow-md">
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
              <p className="bg-gray-50 p-2 rounded mt-1 text-xs text-black">
                <span className="font-medium">Formula:</span> {currentBearing.formula}
              </p>
            </div>
          </div>
          {/* Custom Calculator */}
          <div className="bg-white/90 p-3 rounded-lg shadow-md">
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
          <div className="bg-white/20 p-3 rounded-lg shadow-md">
            <h3 className="text-base font-semibold mb-2 text-white">Conversion Rules</h3>
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