/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const AngleTypesVisualizer = () => {
  const [angle, setAngle] = useState(45);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation effect
  useEffect(() => {
    let interval: any
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
    if (deg === 0) return { name: 'Zero', color: '#94a3b8', range: '0°' };
    if (deg > 0 && deg < 90) return { name: 'Acute', color: '#10b981', range: '0° < θ < 90°' };
    if (deg === 90) return { name: 'Right', color: '#3b82f6', range: 'θ = 90°' };
    if (deg > 90 && deg < 180) return { name: 'Obtuse', color: '#f59e0b', range: '90° < θ < 180°' };
    if (deg === 180) return { name: 'Straight', color: '#ef4444', range: 'θ = 180°' };
    if (deg > 180 && deg < 360) return { name: 'Reflex', color: '#8b5cf6', range: '180° < θ < 360°' };
    if (deg === 360) return { name: 'Complete', color: '#ec4899', range: 'θ = 360°' };
    return { name: 'Unknown', color: '#64748b', range: '' };
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
    { name: 'Acute', angle: 45, color: '#10b981' },
    { name: 'Right', angle: 90, color: '#3b82f6' },
    { name: 'Obtuse', angle: 135, color: '#f59e0b' },
    { name: 'Straight', angle: 180, color: '#ef4444' },
    { name: 'Reflex', angle: 270, color: '#8b5cf6' },
    { name: 'Complete', angle: 360, color: '#ec4899' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-[#B9375D] to-[#D25D5D] rounded-2xl">
      <div className="text-center mb-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Angle Types Visualizer</h1>
        <p>Explore different types of angles interactively</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* SVG Visualization */}
        <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow-md">
          <svg width={size} height={size} className="border-2 border-slate-200 rounded-lg bg-slate-50 shadow-inner">
            {/* Grid lines for reference */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Center point */}
            <circle cx={center} cy={center} r="4" fill="#475569" />
            
            {/* Fixed reference line (horizontal) */}
            <line 
              x1={center} 
              y1={center} 
              x2={center + radius} 
              y2={center} 
              stroke="#94a3b8" 
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
            >
              {angle}°
            </text>
            
            {/* Center label */}
            <text
              x={center}
              y={center + 25}
              fill="#475569"
              fontSize="12"
              textAnchor="middle"
            >
              Vertex
            </text>
          </svg>
          
          {/* Current Angle Info */}
          <div className="mt-4 text-center">
            <div 
              className="inline-block px-6 py-3 rounded-lg text-white font-bold text-lg mb-2 shadow-sm"
              style={{ backgroundColor: currentType.color }}
            >
              {currentType.name} Angle
            </div>
            <p className="text-slate-600 font-mono text-sm">{currentType.range}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          {/* Slider Control */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Angle Control</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => setAngle(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, ${currentType.color} 0%, ${currentType.color} ${(angle/360)*100}%, #cbd5e1 ${(angle/360)*100}%, #cbd5e1 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-slate-500">
                <span>0°</span>
                <span>180°</span>
                <span>360°</span>
              </div>
            </div>
            
            {/* Animation Controls */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
              >
                {isAnimating ? <Pause size={16} /> : <Play size={16} />}
                {isAnimating ? 'Pause' : 'Animate'}
              </button>
              <button
                onClick={() => {
                  setAngle(0);
                  setIsAnimating(false);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors shadow-sm"
              >
                <RotateCcw size={16} />
                Reset
              </button>
            </div>
          </div>

          {/* Quick Selection */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Examples</h3>
            <div className="grid grid-cols-2 gap-2">
              {angleTypes.map((type) => (
                <button
                  key={type.name}
                  onClick={() => {
                    setAngle(type.angle);
                    setIsAnimating(false);
                  }}
                  className="px-3 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity shadow-sm"
                  style={{ backgroundColor: type.color }}
                >
                  {type.name} ({type.angle}°)
                </button>
              ))}
            </div>
          </div>

          {/* Definitions */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Angle Definitions</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-2 rounded hover:bg-slate-50">
                <span className="font-medium text-green-600">Acute:</span>
                <span className="text-slate-700">{'0° < θ < 90°'}</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded hover:bg-slate-50">
                <span className="font-medium text-blue-600">Right:</span>
                <span className="text-slate-700">θ = 90°</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded hover:bg-slate-50">
                <span className="font-medium text-amber-600">Obtuse:</span>
                <span className="text-slate-700">{'90° < θ < 180°'}</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded hover:bg-slate-50">
                <span className="font-medium text-red-600">Straight:</span>
                <span className="text-slate-700">θ = 180°</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded hover:bg-slate-50">
                <span className="font-medium text-purple-600">Reflex:</span>
                <span className="text-slate-700">{'180° < θ < 360°'}</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded hover:bg-slate-50">
                <span className="font-medium text-pink-600">Complete:</span>
                <span className="text-slate-700">θ = 360°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngleTypesVisualizer;