/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const AngleTypesVisualizer = () => {
  const [angle, setAngle] = useState(45);
  const [isAnimating, setIsAnimating] = useState(false);

  // Neubrutalism color palette
  const NEUBRUTALISM_COLORS = {
    cream: '#f4f1de',     // Background, cards
    terracotta: '#e07a5f', // Accents, buttons
    slate: '#3d405b',      // Text, lines
    sage: '#81b29a',       // Acute angles
    champagne: '#f2cc8f',  // Highlights, Obtuse angles
    white: '#ffffff',
    lightGray: '#e0e0e0',
    shadow: 'rgba(0, 0, 0, 0.2)',
  };

  // Neubrutalism base style helper
  const neubrutalismBase = {
    border: `3px solid ${NEUBRUTALISM_COLORS.slate}`,
    borderRadius: '12px',
    boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadow}`,
    padding: '1rem',
    backgroundColor: NEUBRUTALISM_COLORS.white,
  };

  // Animation effect
  useEffect(() => {
    let interval: any;
    if (isAnimating) {
      interval = setInterval(() => {
        setAngle(prev => {
          const next = prev + 2;
          return next > 360 ? 0 : next;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isAnimating]);

  // Determine angle type
  const getAngleType = (deg: number) => {
    if (deg === 0) return { name: 'Zero', color: NEUBRUTALISM_COLORS.lightGray, range: '0°' };
    if (deg > 0 && deg < 90) return { name: 'Acute', color: NEUBRUTALISM_COLORS.sage, range: '0° < θ < 90°' }; // Sage
    if (deg === 90) return { name: 'Right', color: NEUBRUTALISM_COLORS.terracotta, range: 'θ = 90°' }; // Terracotta
    if (deg > 90 && deg < 180) return { name: 'Obtuse', color: NEUBRUTALISM_COLORS.champagne, range: '90° < θ < 180°' }; // Champagne
    if (deg === 180) return { name: 'Straight', color: NEUBRUTALISM_COLORS.terracotta, range: 'θ = 180°' }; // Terracotta
    if (deg > 180 && deg < 360) return { name: 'Reflex', color: NEUBRUTALISM_COLORS.slate, range: '180° < θ < 360°' }; // Slate
    if (deg === 360) return { name: 'Complete', color: NEUBRUTALISM_COLORS.sage, range: 'θ = 360°' }; // Sage
    return { name: 'Unknown', color: NEUBRUTALISM_COLORS.lightGray, range: '' };
  };

  const currentType = getAngleType(angle);

  // SVG dimensions and center
  const size = 300;
  const center = size / 2;
  const radius = 120;

  // Calculate end point of the rotating line
  const endX = center + radius * Math.cos((angle - 90) * Math.PI / 180);
  const endY = center + radius * Math.sin((angle - 90) * Math.PI / 180);

  // Create arc path for angle visualization
  const createArcPath = (degrees: number) => {
    const arcRadius = radius * 0.6;
    if (degrees === 0) return '';
    // For 360 degrees, create a complete circle
    if (degrees >= 360) {
      return `M ${center - arcRadius} ${center} 
              A ${arcRadius} ${arcRadius} 0 1 1 ${center + arcRadius} ${center}
              A ${arcRadius} ${arcRadius} 0 1 1 ${center - arcRadius} ${center} Z`;
    }
    const startAngle = -90; // Start from top
    const endAngle = startAngle + degrees;
    const startX = center + arcRadius * Math.cos(startAngle * Math.PI / 180);
    const startY = center + arcRadius * Math.sin(startAngle * Math.PI / 180);
    const endArcX = center + arcRadius * Math.cos(endAngle * Math.PI / 180);
    const endArcY = center + arcRadius * Math.sin(endAngle * Math.PI / 180);
    const largeArc = degrees > 180 ? 1 : 0;
    return `M ${center} ${center} L ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 ${largeArc} 1 ${endArcX} ${endArcY} Z`;
  };

  // Predefined angle types for quick selection
  const angleTypes = [
    { name: 'Acute', angle: 45, color: NEUBRUTALISM_COLORS.sage },
    { name: 'Right', angle: 90, color: NEUBRUTALISM_COLORS.terracotta },
    { name: 'Obtuse', angle: 135, color: NEUBRUTALISM_COLORS.champagne },
    { name: 'Straight', angle: 180, color: NEUBRUTALISM_COLORS.terracotta },
    { name: 'Reflex', angle: 270, color: NEUBRUTALISM_COLORS.slate },
    { name: 'Complete', angle: 360, color: NEUBRUTALISM_COLORS.sage }
  ];

  return (
    <div
      style={{
        maxWidth: '800px', // Reduced from max-w-4xl
        width: '100%',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: NEUBRUTALISM_COLORS.cream, // Cream background
        border: `4px solid ${NEUBRUTALISM_COLORS.slate}`,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.slate}`,
      }}
    >
      <div className="text-center mb-6" style={{ color: NEUBRUTALISM_COLORS.slate }}>
        <h1 className="text-3xl font-bold mb-2">Angle Types Visualizer</h1>
        <p>Explore different types of angles interactively</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> {/* Reduced gap */}
        {/* SVG Visualization */}
        <div
          style={{
            ...neubrutalismBase,
            backgroundColor: NEUBRUTALISM_COLORS.white,
            borderColor: NEUBRUTALISM_COLORS.slate,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <svg width={size} height={size} style={{ border: `2px solid ${NEUBRUTALISM_COLORS.sage}`, borderRadius: '8px', backgroundColor: NEUBRUTALISM_COLORS.white }}>
            {/* Grid lines for reference */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke={NEUBRUTALISM_COLORS.lightGray} strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Center point */}
            <circle cx={center} cy={center} r="4" fill={NEUBRUTALISM_COLORS.slate} />
            {/* Fixed reference line (horizontal) */}
            <line
              x1={center}
              y1={center}
              x2={center + radius}
              y2={center}
              stroke={NEUBRUTALISM_COLORS.lightGray}
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Rotating line */}
            <line
              x1={center}
              y1={center}
              x2={endX}
              y2={endY}
              stroke={currentType.color}
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Angle arc */}
            <path
              d={createArcPath(angle)}
              fill={currentType.color}
              fillOpacity="0.25"
              stroke={currentType.color}
              strokeWidth="2"
            />
            {/* Angle measurement text */}
            <text
              x={center}
              y={center + 120}
              fill={currentType.color}
              fontSize="20"
              fontWeight="bold"
              textAnchor="middle"
              style={{ color: currentType.color }} // Ensure text color matches
            >
              {angle}°
            </text>
            {/* Center label */}
            <text
              x={center}
              y={center + 25}
              fill={NEUBRUTALISM_COLORS.slate}
              fontSize="12"
              textAnchor="middle"
            >
              Vertex
            </text>
          </svg>
          {/* Current Angle Info */}
          <div className="mt-4 text-center">
            <div
              className="inline-block px-6 py-3 rounded-lg text-white font-bold text-lg mb-2"
              style={{
                ...neubrutalismBase,
                backgroundColor: currentType.color,
                borderColor: NEUBRUTALISM_COLORS.slate,
                color: NEUBRUTALISM_COLORS.white,
              }}
            >
              {currentType.name} Angle
            </div>
            <p className="text-sm font-mono" style={{ color: NEUBRUTALISM_COLORS.slate }}>{currentType.range}</p>
          </div>
        </div>
        {/* Controls */}
        <div className="space-y-4"> {/* Reduced space-y */}
          {/* Slider Control */}
          <div style={{ ...neubrutalismBase, backgroundColor: NEUBRUTALISM_COLORS.white, borderColor: NEUBRUTALISM_COLORS.slate }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: NEUBRUTALISM_COLORS.slate }}>Angle Control</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => setAngle(parseInt(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, ${currentType.color} 0%, ${currentType.color} ${(angle / 360) * 100}%, ${NEUBRUTALISM_COLORS.lightGray} ${(angle / 360) * 100}%, ${NEUBRUTALISM_COLORS.lightGray} 100%)`,
                  height: '8px',
                  borderRadius: '4px',
                  outline: 'none',
                }}
              />
              <div className="flex justify-between text-sm" style={{ color: NEUBRUTALISM_COLORS.slate }}>
                <span>0°</span>
                <span>180°</span>
                <span>360°</span>
              </div>
            </div>
            {/* Animation Controls */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                style={{
                  ...neubrutalismBase,
                  backgroundColor: NEUBRUTALISM_COLORS.terracotta,
                  borderColor: NEUBRUTALISM_COLORS.slate,
                  color: NEUBRUTALISM_COLORS.white,
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                }}
              >
                {isAnimating ? <Pause size={16} /> : <Play size={16} />}
                {isAnimating ? 'Pause' : 'Animate'}
              </button>
              <button
                onClick={() => {
                  setAngle(0);
                  setIsAnimating(false);
                }}
                style={{
                  ...neubrutalismBase,
                  backgroundColor: NEUBRUTALISM_COLORS.slate,
                  borderColor: NEUBRUTALISM_COLORS.slate,
                  color: NEUBRUTALISM_COLORS.white,
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                }}
              >
                <RotateCcw size={16} />
                Reset
              </button>
            </div>
          </div>
          {/* Quick Selection */}
          <div style={{ ...neubrutalismBase, backgroundColor: NEUBRUTALISM_COLORS.white, borderColor: NEUBRUTALISM_COLORS.slate }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: NEUBRUTALISM_COLORS.slate }}>Quick Examples</h3>
            <div className="grid grid-cols-2 gap-2">
              {angleTypes.map((type) => (
                <button
                  key={type.name}
                  onClick={() => {
                    setAngle(type.angle);
                    setIsAnimating(false);
                  }}
                  style={{
                    ...neubrutalismBase,
                    backgroundColor: type.color,
                    borderColor: NEUBRUTALISM_COLORS.slate,
                    color: NEUBRUTALISM_COLORS.white,
                    fontWeight: 'medium',
                    padding: '0.5rem',
                  }}
                >
                  {type.name} ({type.angle}°)
                </button>
              ))}
            </div>
          </div>
          {/* Definitions */}
          <div style={{ ...neubrutalismBase, backgroundColor: NEUBRUTALISM_COLORS.white, borderColor: NEUBRUTALISM_COLORS.slate }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: NEUBRUTALISM_COLORS.slate }}>Angle Definitions</h3>
            <div className="space-y-2 text-sm"> {/* Reduced space-y */}
              <div className="flex justify-between items-center p-2 rounded hover:bg-slate-50" style={{ backgroundColor: NEUBRUTALISM_COLORS.cream }}>
                <span className="font-medium" style={{ color: NEUBRUTALISM_COLORS.sage }}>Acute:</span>
                <span style={{ color: NEUBRUTALISM_COLORS.slate }}>{'0° < θ < 90°'}</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded hover:bg-slate-50" style={{ backgroundColor: NEUBRUTALISM_COLORS.cream }}>
                <span className="font-medium" style={{ color: NEUBRUTALISM_COLORS.terracotta }}>Right:</span>
                <span style={{ color: NEUBRUTALISM_COLORS.slate }}>θ = 90°</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded hover:bg-slate-50" style={{ backgroundColor: NEUBRUTALISM_COLORS.cream }}>
                <span className="font-medium" style={{ color: NEUBRUTALISM_COLORS.champagne }}>Obtuse:</span>
                <span style={{ color: NEUBRUTALISM_COLORS.slate }}>{'90° < θ < 180°'}</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded hover:bg-slate-50" style={{ backgroundColor: NEUBRUTALISM_COLORS.cream }}>
                <span className="font-medium" style={{ color: NEUBRUTALISM_COLORS.terracotta }}>Straight:</span>
                <span style={{ color: NEUBRUTALISM_COLORS.slate }}>θ = 180°</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded hover:bg-slate-50" style={{ backgroundColor: NEUBRUTALISM_COLORS.cream }}>
                <span className="font-medium" style={{ color: NEUBRUTALISM_COLORS.slate }}>Reflex:</span>
                <span style={{ color: NEUBRUTALISM_COLORS.slate }}>{'180° < θ < 360°'}</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded hover:bg-slate-50" style={{ backgroundColor: NEUBRUTALISM_COLORS.cream }}>
                <span className="font-medium" style={{ color: NEUBRUTALISM_COLORS.sage }}>Complete:</span>
                <span style={{ color: NEUBRUTALISM_COLORS.slate }}>θ = 360°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngleTypesVisualizer;