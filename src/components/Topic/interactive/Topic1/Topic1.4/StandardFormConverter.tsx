import { useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import { Zap, Calculator, RefreshCw, CheckCircle } from 'lucide-react';

const StandardFormConverter = () => {
  const [inputNumber, setInputNumber] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [showSteps, setShowSteps] = useState<boolean>(false);
  const [steps, setSteps] = useState<string[]>([]);
  const [numberType, setNumberType] = useState<string>('');

  const examples = [
    '5000000',
    '0.00456',
    '340000000',
    '0.0000072',
    '7200000000',
    '0.000000123'
  ];

  const convertToStandardForm = (num: string): { result: string; steps: string[]; type: string } => {
    const number = parseFloat(num);
    if (isNaN(number)) return { result: "Invalid number", steps: [], type: "" };
    if (number === 0) return { result: "0", steps: ["Zero is already in standard form"], type: "zero" };
    
    const isLarge = Math.abs(number) >= 10;
    const isSmall = Math.abs(number) < 1 && number !== 0;
    
    let exponent: number;
    let mantissa: number;
    let conversionSteps: string[] = [];
    let type: string;
    
    if (isLarge) {
      exponent = Math.floor(Math.log10(Math.abs(number)));
      mantissa = number / Math.pow(10, exponent);
      type = "large";
      conversionSteps = [
        `Original number: ${num}`,
        `This is a large number (≥ 10)`,
        `Move decimal point ${exponent} places to the left`,
        `Mantissa: ${mantissa.toFixed(2)}`,
        `Exponent: +${exponent} (positive for large numbers)`
      ];
    } else if (isSmall) {
      exponent = Math.floor(Math.log10(Math.abs(number)));
      mantissa = number / Math.pow(10, exponent);
      type = "small";
      conversionSteps = [
        `Original number: ${num}`,
        `This is a small number (< 1)`,
        `Move decimal point ${Math.abs(exponent)} places to the right`,
        `Mantissa: ${mantissa.toFixed(2)}`,
        `Exponent: ${exponent} (negative for small numbers)`
      ];
    } else {
      // Number between 1 and 10
      mantissa = number;
      exponent = 0;
      type = "standard";
      conversionSteps = [
        `Original number: ${num}`,
        `This number is already between 1 and 10`,
        `No conversion needed`,
        `Mantissa: ${mantissa.toFixed(2)}`,
        `Exponent: 0`
      ];
    }
    
    const result = exponent === 0 ? 
      mantissa.toFixed(2) : 
      `${mantissa.toFixed(2)} \\times 10^{${exponent}}`;
    
    return { result, steps: conversionSteps, type };
  };

  const convert = () => {
    const { result: standardForm, steps: conversionSteps, type } = convertToStandardForm(inputNumber);
    setResult(standardForm);
    setSteps(conversionSteps);
    setNumberType(type);
    setShowResult(true);
    setShowSteps(true);
  };

  const loadExample = (example: string) => {
    setInputNumber(example);
    setShowResult(false);
    setShowSteps(false);
  };

  const clear = () => {
    setInputNumber('');
    setResult('');
    setShowResult(false);
    setShowSteps(false);
    setSteps([]);
    setNumberType('');
  };

  return (
    <div className="bg-gradient-to-br from-orange-400 to-red-600 p-6 rounded-2xl text-white shadow-2xl">
      <h3 className="text-2xl font-bold mb-4 flex items-center">
        <Zap className="mr-2" /> 
        Standard Form Converter
        <Calculator className="ml-2 text-yellow-300" />
      </h3>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4 border-2 border-white/30">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Enter a number:</label>
          <input
            type="text"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
            placeholder="Try: 5000000 or 0.00456"
            className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg mb-4 focus:outline-none focus:border-white/50"
          />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-sm font-bold">Quick examples:</span>
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => loadExample(example)}
              className="bg-white/20 hover:bg-white/30 rounded-lg px-3 py-1 text-xs font-mono transition-all duration-200 hover:scale-105"
            >
              {example}
            </button>
          ))}
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={convert}
            disabled={!inputNumber}
            className="flex-1 bg-white/30 hover:bg-white/50 disabled:bg-gray-400/30 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105 disabled:scale-100 flex items-center justify-center"
          >
            <CheckCircle className="mr-2 h-5 w-5" />
            Convert
          </button>
          
          <button
            onClick={clear}
            className="bg-white/20 hover:bg-white/30 rounded-lg p-3 transition-all duration-200 hover:scale-105"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {showResult && (
        <div className="space-y-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
            <div className={`rounded-lg p-4 ${
              numberType === 'large' ? 'bg-blue-400/20' :
              numberType === 'small' ? 'bg-green-400/20' :
              'bg-purple-400/20'
            }`}>
              <p className="font-bold mb-2">Standard Form Result:</p>
              <MathJax>{`\\[${result}\\]`}</MathJax>
            </div>
          </div>
          
          {showSteps && (
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
              <h4 className="font-bold text-lg mb-3">Step-by-step conversion:</h4>
              <div className="space-y-2">
                {steps.map((step, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-3 text-sm flex items-center">
                    <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
                      {index + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StandardFormConverter;