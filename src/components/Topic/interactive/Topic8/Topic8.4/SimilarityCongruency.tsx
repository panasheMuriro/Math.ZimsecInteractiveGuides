import { useState } from 'react';
import { RefreshCw, Minus, Plus } from 'lucide-react';

const SimilarityCongruency = () => {
  const [scaleFactor, setScaleFactor] = useState(.75);

  const resetScale = () => setScaleFactor(1);
  const decreaseScale = () => setScaleFactor(prev => Math.max(0.5, prev - 0.25));
  const increaseScale = () => setScaleFactor(prev => Math.min(2, prev + 0.25));

  // Determine current relationship
  const getCurrentStatus = () => {
    if (scaleFactor === 1) {
      return { 
        text: "Congruent", 
        bgColor: "bg-green-100", 
        textColor: "text-green-800",
        symbol: "≅"
      };
    } else {
      return { 
        text: "Similar", 
        bgColor: "bg-blue-100", 
        textColor: "text-blue-800",
        symbol: "∼"
      };
    }
  };

  const status = getCurrentStatus();

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 bg-gradient-to-br from-[#0E8388] to-[#2E4F4F] rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold text-white mb-4 mt-5">Similarity vs Congruency</h2>
      
      <div className="w-full mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-white">Scale Factor: {scaleFactor}x</span>
          <button 
            onClick={resetScale}
            className="flex items-center text-xs text-white hover:text-blue-800"
          >
            <RefreshCw size={14} className="mr-1" />
            Reset
          </button>
        </div>
        
        <div className="flex items-center justify-between bg-gray-100 rounded-3xl p-2">
          <button 
            onClick={decreaseScale}
            className="p-2 rounded-full bg-[#FDA769] shadow hover:bg-gray-50"
            aria-label="Decrease scale"
          >
            <Minus size={16} />
          </button>
          
          <div className="w-3/5 mx-2">
            <input 
              type="range" 
              min="0.5" 
              max="2" 
              step="0.25"
              value={scaleFactor}
              onChange={(e) => setScaleFactor(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0.5x</span>
              <span>1x</span>
              <span>2x</span>
            </div>
          </div>
          
          <button 
            onClick={increaseScale}
            className="p-2 rounded-full bg-[#FDA769] shadow hover:bg-gray-50"
            aria-label="Increase scale"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Current Status Indicator */}
      <div className={`w-full mb-4 py-2 px-4 rounded-lg flex items-center justify-center ${status.bgColor}`}>
        <span className={`font-bold text-lg ${status.textColor}`}>
          {status.text} {status.symbol}
        </span>
      </div>

      <div className="relative w-full h-64 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden mb-4">
        {/* Congruent Figure (Original) */}
        <svg 
          className="absolute transition-all duration-300"
          style={{ transform: `scale(1)` }}
          viewBox="0 0 100 100"
        >
          <rect 
            x="20" 
            y="20" 
            width="60" 
            height="60" 
            fill="none" 
            stroke="#FDA769" 
            strokeWidth="3"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Similar Figure (Transformed) */}
        <svg 
          className="absolute transition-all duration-300"
          style={{ transform: `scale(${scaleFactor})` }}
          viewBox="0 0 100 100"
        >
          <rect 
            x="20" 
            y="20" 
            width="60" 
            height="60" 
            fill="none" 
            stroke="#10B981" 
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mb-6 w-full">
        <div className="flex items-center">
          <div className="w-6 h-6 border-2 border-dashed border-[#FDA769] mr-2"></div>
          <span className="text-sm text-white">Original (1x)</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 border-2 border-green-500 mr-2"></div>
          <span className="text-sm text-white">Transformed ({scaleFactor}x)</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-2 w-full">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-bold text-blue-800 mb-2">Congruent Figures</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Same shape & size</li>
            <li>• Equal sides</li>
            <li>• Equal angles</li>
            <li>• Symbol: ≅</li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h3 className="font-bold text-green-800 mb-2">Similar Figures</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Same shape</li>
            <li>• Proportional sides</li>
            <li>• Equal angles</li>
            <li>• Symbol: ∼</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-sm text-white bg-white/20 p-3 rounded-lg  w-full">
        <p className="font-medium mb-1">Key Insight:</p>
        <p>Congruent → Always Similar</p>
        <p>Similar → Congruent only when scale factor = 1</p>
      </div>
    </div>
  );
};

export default SimilarityCongruency;