import { useRef, useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import { TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

const LargeNumbers = () => {
  const [selectedNumber, setSelectedNumber] = useState<string>('');
  const [showConversion, setShowConversion] = useState<boolean>(false);
  const [steps, setSteps] = useState<string[]>([]);
  const conversionRef = useRef<HTMLDivElement>(null);

  const examples = [
    { ordinary: '5000000', display: '5,000,000', scientific: '5 \\times 10^6', name: 'Five million' },
    { ordinary: '340000000', display: '340,000,000', scientific: '3.4 \\times 10^8', name: 'Three hundred forty million' },
    { ordinary: '7200000000', display: '7,200,000,000', scientific: '7.2 \\times 10^9', name: 'Seven point two billion' },
    { ordinary: '45000000000', display: '45,000,000,000', scientific: '4.5 \\times 10^{10}', name: 'Forty-five billion' },
    { ordinary: '123000000000000', display: '123,000,000,000,000', scientific: '1.23 \\times 10^{14}', name: 'One hundred twenty-three trillion' }
  ];

  const convertToStandardForm = (num: string) => {
    const number = num.replace(/,/g, '');
    const firstDigit = number[0];
    const decimalPart = number.substring(1).replace(/0+$/, '');
    const power = number.length - 1;

    const conversionSteps = [
      `Original number: ${num}`,
      `Move decimal point ${power} places to the left`,
      `First significant digit: ${firstDigit}`,
      decimalPart ? `Decimal part: .${decimalPart}` : 'No decimal part needed',
      `Power of 10: ${power} (positive for large numbers)`
    ];

    setSteps(conversionSteps);
    setShowConversion(true);

    // Scroll after short delay
    setTimeout(() => {
      conversionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="bg-[#fefae0] p-6 rounded-2xl shadow-xl font-serif text-[#4e342e] border-4 border-[#f1e2c6]">
      <h3 className="text-2xl font-bold mb-4 flex items-center">
        <TrendingUp className="mr-2 text-[#8d6e63]" />
        Large Numbers Explorer
        <Sparkles className="ml-2 text-yellow-600" />
      </h3>

      <div className="bg-[#fff8e1] rounded-xl p-4 mb-4 border border-[#e0c097] shadow-inner">
        <p className="mb-4 text-lg">Click on a large number to see how it converts to standard form:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedNumber(example.display);
                convertToStandardForm(example.display);
              }}
              className="bg-[#fdf6e3] hover:bg-[#f3eacb] transition-all duration-200 hover:scale-105 p-3 rounded-lg text-left border border-[#e6d3b3] shadow"
            >
              <div className="font-mono text-lg font-semibold text-[#3e2723]">{example.display}</div>
              <div className="text-sm text-[#6d4c41]">{example.name}</div>
            </button>
          ))}
        </div>
      </div>

      {showConversion && (
        <div
          ref={conversionRef}
          className="bg-[#fffde7] rounded-xl p-4 border border-[#e0c097] shadow-lg"
        >
          <div className="mb-4">
            <h4 className="font-bold text-lg mb-2 flex items-center text-[#5d4037]">
              Conversion Steps <ArrowRight className="ml-2" />
            </h4>
            <div className="space-y-2">
              {steps.map((step, index) => (
                <div key={index} className="bg-[#f5f0dc] rounded-md p-2 text-sm border border-[#e4d4aa]">
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#ffecb3]/30 to-[#ffe0b2]/30 rounded-lg p-4 border border-[#e1c699] mt-4">
            <p className="font-bold mb-2 text-[#4e342e]">Standard Form Result:</p>
            <MathJax>{`\\[${examples.find(e => e.display === selectedNumber)?.scientific}\\]`}</MathJax>
          </div>
        </div>
      )}
    </div>
  );
};

export default LargeNumbers;
