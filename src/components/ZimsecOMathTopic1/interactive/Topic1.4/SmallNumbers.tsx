import { useEffect, useRef, useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import { TrendingDown, Microscope, ArrowLeft } from 'lucide-react';

const SmallNumbers = () => {
  const [selectedNumber, setSelectedNumber] = useState<string>('');
  const [showConversion, setShowConversion] = useState<boolean>(false);
  const [steps, setSteps] = useState<string[]>([]);
  const resultRef = useRef<HTMLDivElement>(null);

  const examples = [
    { ordinary: '0.005', scientific: '5 \\times 10^{-3}', name: 'Five thousandths', context: 'Thickness of paper' },
    { ordinary: '0.00034', scientific: '3.4 \\times 10^{-4}', name: 'Three point four ten-thousandths', context: 'Width of human hair' },
    { ordinary: '0.000000072', scientific: '7.2 \\times 10^{-8}', name: 'Seventy-two hundred-millionths', context: 'Size of virus' },
    { ordinary: '0.0000000123', scientific: '1.23 \\times 10^{-8}', name: 'One point two three hundred-millionths', context: 'Wavelength of radio wave' },
    { ordinary: '0.00000000000456', scientific: '4.56 \\times 10^{-12}', name: 'Four point five six trillionths', context: 'Size of atom' }
  ];

  const convertToStandardForm = (num: string) => {
    const decimalIndex = num.indexOf('.');
    const firstNonZeroIndex = num.search(/[1-9]/);
    const power = -(firstNonZeroIndex - decimalIndex);
    
    const firstDigit = num[firstNonZeroIndex];
    // const remainingDigits = num.substring(firstNonZeroIndex + 1).replace(/0+$/, '');
    
    const conversionSteps = [
      `Original number: ${num}`,
      `Find first non-zero digit: ${firstDigit}`,
      `Count places from decimal point: ${Math.abs(power)} places`,
      `Move decimal point ${Math.abs(power)} places to the right`,
      `Power of 10: ${power} (negative for small numbers)`
    ];
    
    setSteps(conversionSteps);
    setShowConversion(true);
  };

  useEffect(() => {
    if (showConversion && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showConversion, selectedNumber]);

  return (
    <div className="bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-100 p-6 rounded-2xl text-gray-800 shadow-2xl">
      <h3 className="text-2xl font-bold mb-4 flex items-center text-amber-700">
        <TrendingDown className="mr-2" />
        Small Numbers Explorer
        <Microscope className="ml-2 text-pink-500" />
      </h3>

      <div className="bg-white/70 rounded-xl p-4 mb-4 border-2 border-amber-200 shadow-sm">
        <p className="mb-4 text-lg">Explore tiny numbers and their real-world contexts!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedNumber(example.ordinary);
                convertToStandardForm(example.ordinary);
              }}
              className="bg-white hover:bg-orange-100 rounded-lg p-3 text-left transition-all duration-200 hover:scale-105 border-2 border-amber-100"
            >
              <div className="font-mono text-lg font-bold text-amber-800">{example.ordinary}</div>
              <div className="text-sm text-gray-700">{example.name}</div>
              <div className="text-xs text-pink-500 mt-1">📏 {example.context}</div>
            </button>
          ))}
        </div>
      </div>

      {showConversion && (
        <div
          ref={resultRef}
          className="bg-white/90 rounded-xl p-4 border-2 border-orange-200 shadow-inner"
        >
          <div className="mb-4">
            <h4 className="font-bold text-lg mb-2 flex items-center text-orange-700">
              Conversion Steps <ArrowLeft className="ml-2" />
            </h4>
            <div className="space-y-2">
              {steps.map((step, index) => (
                <div key={index} className="bg-orange-50 rounded-lg p-2 text-sm text-gray-800 border border-orange-100">
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg p-4 mt-2">
            <p className="font-bold mb-2 text-orange-700">Standard Form Result:</p>
            <MathJax>{`\\[${examples.find(e => e.ordinary === selectedNumber)?.scientific}\\]`}</MathJax>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallNumbers;
