import { useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import { Target } from 'lucide-react';

const ScaleCalculator = () => {
  const [mapDistance, setMapDistance] = useState<string>('');
  const [scale, setScale] = useState<string>('50000');
  const [realDistance, setRealDistance] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);

  const calculate = () => {
    const map = parseFloat(mapDistance);
    const scaleFactor = parseFloat(scale);
    
    if (!isNaN(map) && !isNaN(scaleFactor)) {
      const real = (map * scaleFactor) / 100000; // Convert to km
      setRealDistance(real.toFixed(2));
      setShowResult(true);
    }
  };

  return (
    <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-6 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Target className="mr-2" /> Scale Calculator
      </h3>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Map Distance (cm):</label>
          <input
            type="number"
            value={mapDistance}
            onChange={(e) => setMapDistance(e.target.value)}
            placeholder="Enter map distance..."
            className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Scale (1:):</label>
          <input
            type="number"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
            placeholder="Enter scale..."
            className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg"
          />
        </div>
        
        <button
          onClick={calculate}
          disabled={!mapDistance || !scale}
          className="w-full bg-white/30 hover:bg-white/50 disabled:bg-gray-400/30 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105 disabled:scale-100"
        >
          Calculate Real Distance
        </button>
      </div>
      
      {showResult && (
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <p className="font-bold mb-2">Real Distance:</p>
          <p className="text-xl font-mono">{realDistance} km</p>
          <p className="text-sm mt-2">
            <MathJax>{`\\(${mapDistance}\\text{ cm on map} = ${realDistance}\\text{ km in reality}\\)`}</MathJax>
          </p>
        </div>
      )}
    </div>
  );
};

export default ScaleCalculator;