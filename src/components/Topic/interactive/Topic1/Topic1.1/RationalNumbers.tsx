import { useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import { RefreshCw, Calculator } from 'lucide-react';

const RationalNumbers = () => {
  const [numerator, setNumerator] = useState<string>('');
  const [denominator, setDenominator] = useState<string>('');
  const [decimal, setDecimal] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [mode, setMode] = useState<'fraction' | 'decimal'>('fraction');

  const fractionToDecimal = (num: number, den: number): string => {
    if (den === 0) return 'undefined';
    const result = num / den;
    
    // Check if it's a terminating decimal
    const str = result.toString();
    if (str.includes('.') && str.split('.')[1].length <= 10) {
      return str;
    }
    
    // For repeating decimals, we'll show a simplified version
    return result.toFixed(6);
  };

  const decimalToFraction = (decimal: number): { num: number; den: number } => {
    const tolerance = 1.0E-6;
    let h1 = 1, h2 = 0, k1 = 0, k2 = 1;
    let b = decimal;
    
    do {
      const a = Math.floor(b);
      const aux = h1;
      h1 = a * h1 + h2;
      h2 = aux;
      const aux2 = k1;
      k1 = a * k1 + k2;
      k2 = aux2;
      b = 1 / (b - a);
    } while (Math.abs(decimal - h1 / k1) > decimal * tolerance);
    
    return { num: h1, den: k1 };
  };

  const handleFractionConvert = () => {
    const num = parseInt(numerator);
    const den = parseInt(denominator);
    
    if (isNaN(num) || isNaN(den)) {
      setFeedback('Please enter valid numbers');
      return;
    }
    
    if (den === 0) {
      setFeedback('Denominator cannot be zero!');
      return;
    }
    
    const result = fractionToDecimal(num, den);
    setFeedback(`${num}/${den} = ${result}`);
  };

  const handleDecimalConvert = () => {
    const dec = parseFloat(decimal);
    
    if (isNaN(dec)) {
      setFeedback('Please enter a valid decimal');
      return;
    }
    
    const frac = decimalToFraction(dec);
    setFeedback(`${dec} ≈ ${frac.num}/${frac.den}`);
  };

  const examples = [
    { fraction: '1/2', decimal: '0.5', type: 'terminating' },
    { fraction: '1/3', decimal: '0.333...', type: 'repeating' },
    { fraction: '3/4', decimal: '0.75', type: 'terminating' },
    { fraction: '1/6', decimal: '0.1666...', type: 'repeating' },
    { fraction: '7/8', decimal: '0.875', type: 'terminating' },
    { fraction: '2/3', decimal: '0.666...', type: 'repeating' }
  ];

  const reset = () => {
    setNumerator('');
    setDenominator('');
    setDecimal('');
    setFeedback('');
  };

  return (
    <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Calculator className="mr-2" /> Rational Numbers Converter
      </h3>
      
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode('fraction')}
          className={`flex-1 p-2 rounded-lg font-bold transition-all ${
            mode === 'fraction' ? 'bg-white/30' : 'bg-white/10'
          }`}
        >
          Fraction → Decimal
        </button>
        <button
          onClick={() => setMode('decimal')}
          className={`flex-1 p-2 rounded-lg font-bold transition-all ${
            mode === 'decimal' ? 'bg-white/30' : 'bg-white/10'
          }`}
        >
          Decimal → Fraction
        </button>
      </div>
      
      {mode === 'fraction' ? (
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <input
              type="number"
              value={numerator}
              onChange={(e) => setNumerator(e.target.value)}
              placeholder="Numerator"
              className="flex-1 bg-white/20 border-2 border-white/30 rounded-lg p-2 text-white placeholder-white/70"
            />
            <span className="text-2xl font-bold">/</span>
            <input
              type="number"
              value={denominator}
              onChange={(e) => setDenominator(e.target.value)}
              placeholder="Denominator"
              className="flex-1 bg-white/20 border-2 border-white/30 rounded-lg p-2 text-white placeholder-white/70"
            />
          </div>
          <button
            onClick={handleFractionConvert}
            className="w-full bg-white/30 hover:bg-white/50 rounded-lg p-3 font-bold"
          >
            Convert to Decimal
          </button>
        </div>
      ) : (
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <input
            type="number"
            step="any"
            value={decimal}
            onChange={(e) => setDecimal(e.target.value)}
            placeholder="Enter decimal (e.g., 0.25)"
            className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 mb-3"
          />
          <button
            onClick={handleDecimalConvert}
            className="w-full bg-white/30 hover:bg-white/50 rounded-lg p-3 font-bold"
          >
            Convert to Fraction
          </button>
        </div>
      )}
      
      {feedback && (
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <p className="font-bold text-lg">{feedback}</p>
        </div>
      )}
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <h4 className="font-bold mb-2">Examples:</h4>
        <div className="grid grid-cols-1 gap-2">
          {examples.map((example, index) => (
            <div key={index} className="flex justify-between items-center">
              <MathJax inline>{`\\(${example.fraction}\\)`}</MathJax>
              <span>=</span>
              <span className="font-mono">{example.decimal}</span>
              <span className={`text-xs px-2 py-1 rounded ${
                example.type === 'terminating' ? 'bg-green-500' : 'bg-blue-500'
              }`}>
                {example.type}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <p className="text-sm">
          All fractions are rational numbers!
        </p>
        <button
          onClick={reset}
          className="bg-white/30 hover:bg-white/50 rounded-lg p-2"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default RationalNumbers;