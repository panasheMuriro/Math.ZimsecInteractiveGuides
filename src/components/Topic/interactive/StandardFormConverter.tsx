import { useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import { Zap } from 'lucide-react';

const StandardFormConverter = () => {
  const [inputNumber, setInputNumber] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);

  const convertToStandardForm = (num: string): string => {
    const number = parseFloat(num);
    if (isNaN(number)) return "0";
    if (number === 0) return "0";
    
    const exponent = Math.floor(Math.log10(Math.abs(number)));
    const mantissa = number / Math.pow(10, exponent);
    
    return `${mantissa.toFixed(2)} \\times 10^{${exponent}}`;
  };

  const convert = () => {
    const standardForm = convertToStandardForm(inputNumber);
    setResult(standardForm);
    setShowResult(true);
  };

  return (
    <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Zap className="mr-2" /> Standard Form Converter
      </h3>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          placeholder="Enter a number..."
          className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg mb-4"
        />
        
        <button
          onClick={convert}
          disabled={!inputNumber}
          className="w-full bg-white/30 hover:bg-white/50 disabled:bg-gray-400/30 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105 disabled:scale-100"
        >
          Convert to Standard Form
        </button>
      </div>
      
      {showResult && (
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <p className="font-bold mb-2">Standard Form:</p>
          <MathJax>{`\\[${result}\\]`}</MathJax>
        </div>
      )}
    </div>
  );
};

export default StandardFormConverter;