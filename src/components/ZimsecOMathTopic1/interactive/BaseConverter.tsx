import { useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import { Hash } from 'lucide-react';

const BaseConverter = () => {
  const [decimal, setDecimal] = useState<string>('');
  const [targetBase, setTargetBase] = useState<number>(2);
  const [result, setResult] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);

  const convertToBase = (num: string, base: number): string => {
    const number = parseInt(num);
    if (isNaN(number)) return "";
    
    if (number === 0) return "0";
    
    let result = "";
    let temp = Math.abs(number);
    
    while (temp > 0) {
      result = (temp % base) + result;
      temp = Math.floor(temp / base);
    }
    
    return number < 0 ? "-" + result : result;
  };

  const convert = () => {
    const converted = convertToBase(decimal, targetBase);
    setResult(converted);
    setShowResult(true);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-6 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Hash className="mr-2" /> Base Converter
      </h3>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <input
          type="number"
          value={decimal}
          onChange={(e) => setDecimal(e.target.value)}
          placeholder="Enter decimal number..."
          className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg mb-4"
        />
        
        <select
          value={targetBase}
          onChange={(e) => setTargetBase(parseInt(e.target.value))}
          className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white font-mono text-lg mb-4"
        >
          <option value={2}>Base 2 (Binary)</option>
          <option value={5}>Base 5 (Quinary)</option>
          <option value={8}>Base 8 (Octal)</option>
        </select>
        
        <button
          onClick={convert}
          disabled={!decimal}
          className="w-full bg-white/30 hover:bg-white/50 disabled:bg-gray-400/30 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105 disabled:scale-100"
        >
          Convert
        </button>
      </div>
      
      {showResult && (
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <p className="font-bold mb-2">Result:</p>
          <MathJax>{`\\(${decimal}_{10} = ${result}_{${targetBase}}\\)`}</MathJax>
        </div>
      )}
    </div>
  );
};

export default BaseConverter;