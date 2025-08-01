import React, { useState } from "react";
import { RefreshCw, Minus, Plus } from 'lucide-react';

const ScaleFactors: React.FC = () => {
  const [scaleFactor, setScaleFactor] = useState<number>(1.2);
  const resetScale = () => {
    setScaleFactor(1);
  };

  const decreaseScale = () => {
    const newScale = Math.max(0.25, scaleFactor - 0.25);
    setScaleFactor(newScale);
  };

  const increaseScale = () => {
    const newScale = Math.min(3, scaleFactor + 0.25);
    setScaleFactor(newScale);
  };

  const areaScaleFactor = (scaleFactor ** 2).toFixed(2);
  const volumeScaleFactor = (scaleFactor ** 3).toFixed(2);

  // Function to render isometric cube with proper scaling
  const renderCube = (scale: number, color: string, offsetX: number, offsetY: number) => {
    // Base cube coordinates (isometric projection)
    const basePoints = {
      front: [
        { x: 20, y: 80 }, // Bottom-left
        { x: 70, y: 80 }, // Bottom-right
        { x: 70, y: 30 }, // Top-right
        { x: 20, y: 30 }, // Top-left
      ],
      back: [
        { x: 5, y: 65 },  // Bottom-left
        { x: 55, y: 65 }, // Bottom-right
        { x: 55, y: 15 }, // Top-right
        { x: 5, y: 15 },  // Top-left
      ]
    };

    // Scale all points
    const scaledPoints = {
      front: basePoints.front.map(point => ({
        x: (point.x - 37.5) * scale + 37.5 + offsetX,
        y: (point.y - 55) * scale + 55 + offsetY
      })),
      back: basePoints.back.map(point => ({
        x: (point.x - 30) * scale + 30 + offsetX,
        y: (point.y - 40) * scale + 40 + offsetY
      }))
    };

    return (
      <g stroke={color} strokeWidth="2" fill="none">
        {/* Front face */}
        <polygon 
          points={scaledPoints.front.map(p => `${p.x},${p.y}`).join(' ')} 
        />
        {/* Back face */}
        <polygon 
          points={scaledPoints.back.map(p => `${p.x},${p.y}`).join(' ')} 
        />
        {/* Connecting edges */}
        <line 
          x1={scaledPoints.back[0].x} 
          y1={scaledPoints.back[0].y} 
          x2={scaledPoints.front[0].x} 
          y2={scaledPoints.front[0].y} 
        />
        <line 
          x1={scaledPoints.back[1].x} 
          y1={scaledPoints.back[1].y} 
          x2={scaledPoints.front[1].x} 
          y2={scaledPoints.front[1].y} 
        />
        <line 
          x1={scaledPoints.back[2].x} 
          y1={scaledPoints.back[2].y} 
          x2={scaledPoints.front[2].x} 
          y2={scaledPoints.front[2].y} 
        />
        <line 
          x1={scaledPoints.back[3].x} 
          y1={scaledPoints.back[3].y} 
          x2={scaledPoints.front[3].x} 
          y2={scaledPoints.front[3].y} 
        />
      </g>
    );
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 bg-gradient-to-br from-[#C69B7B] to-[#826F66] rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-white mb-4 mt-5">Scale Factor Effects</h2>
      
      {/* Scale Controls */}
      <div className="w-full mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-white">Scale Factor: {scaleFactor.toFixed(2)}x</span>
          <button 
            onClick={resetScale}
            className="flex items-center text-xs text-white hover:text-blue-800"
          >
            <RefreshCw size={14} className="mr-1" />
            Reset
          </button>
        </div>
        
        <div className="flex items-center justify-between bg-gray-100 rounded-2xl p-2 mb-2">
          <button 
            onClick={decreaseScale}
            className="p-2 rounded-full bg-[#826F66] text-white shadow hover:bg-gray-50"
            aria-label="Decrease scale"
          >
            <Minus size={16} />
          </button>
          
          <div className="w-3/5 mx-2">
            <input 
              type="range" 
              min="0.25" 
              max="3" 
              step="0.25"
              value={scaleFactor}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setScaleFactor(value);
              }}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0.25x</span>
              <span>1x</span>
              <span>3x</span>
            </div>
          </div>
          
          <button 
            onClick={increaseScale}
            className="p-2 rounded-full bg-[#826F66] text-white shadow hover:bg-gray-50"
            aria-label="Increase scale"
          >
            <Plus size={16} />
          </button>
        </div>
      
      </div>

      {/* Visualization Section */}
      <div className="w-full space-y-8">
        {/* 2D Square Visualization */}
        <div className="bg-white/60 p-4 rounded-lg">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            Length & Area Scaling
          </h3>
          
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              {/* Original Square */}
              <div
                className="absolute border-2 border-blue-500"
                style={{ 
                  width: "60px", 
                  height: "60px",
                  left: "30px",
                  top: "30px"
                }}
              ></div>
              
              {/* Scaled Square */}
              <div
                className="absolute border-2 border-red-500 transition-all duration-300"
                style={{
                  width: `${60 * scaleFactor}px`,
                  height: `${60 * scaleFactor}px`,
                  left: `calc(50% - ${30 * scaleFactor}px)`,
                  top: `calc(50% - ${30 * scaleFactor}px)`,
                  opacity: 0.8,
                }}
              ></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full text-sm">
              <div className="bg-blue-50 p-2 rounded text-center">
                <p className="font-medium text-blue-800">Original</p>
                <p>1×1</p>
              </div>
              <div className="bg-red-50 p-2 rounded text-center">
                <p className="font-medium text-red-800">Scaled</p>
                <p>{scaleFactor.toFixed(2)}×{scaleFactor.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Cube Visualization */}
        <div className="bg-white/60 p-4 rounded-lg">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            Volume Scaling
          </h3>
          
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 mb-4">
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full"
              >
                {/* Original Cube */}
                {renderCube(1, "#3B82F6", 0, 0)}
                
                {/* Scaled Cube */}
                {renderCube(scaleFactor, "#10B981", 0, 0)}
              </svg>
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full text-sm">
              <div className="bg-blue-50 p-2 rounded text-center">
                <p className="font-medium text-blue-800">Original</p>
                <p>1³</p>
              </div>
              <div className="bg-green-50 p-2 rounded text-center">
                <p className="font-medium text-green-800">Scaled</p>
                <p>({scaleFactor.toFixed(2)})³</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scale Factor Results */}
      <div className="w-full mt-6 bg-white/20 text-white p-4 rounded-lg">
        <h3 className="font-bold text-white mb-2">Scale Factor Effects</h3>
        <div className="space-y-1 text-sm">
          <p><span className="font-medium">Linear (k):</span> {scaleFactor.toFixed(2)}x</p>
          <p><span className="font-medium">Area (k²):</span> {areaScaleFactor}x</p>
          <p><span className="font-medium">Volume (k³):</span> {volumeScaleFactor}x</p>
        </div>
        
        <div className="mt-3 p-2 bg-white text-black rounded text-xs">
          <p className="font-medium">Example:</p>
          <p>If k = 2, then areas scale by 4× and volumes by 8×</p>
        </div>
      </div>
    </div>
  );
};

export default ScaleFactors;