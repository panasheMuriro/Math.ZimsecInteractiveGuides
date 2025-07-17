import { useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import { Binary } from 'lucide-react';

const BinaryExplorer = () => {
  const [binary, setBinary] = useState<string>('1011');
  const [decimal, setDecimal] = useState<number>(11);
  
  const convertToDecimal = (bin: string) => {
    return bin.split('').reduce((acc, digit, index) => {
      const power = bin.length - index - 1;
      return acc + (parseInt(digit) * Math.pow(2, power));
    }, 0);
  };

  const handleBinaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[01]*$/.test(value)) {
      setBinary(value);
      setDecimal(convertToDecimal(value));
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-6 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Binary className="mr-2" /> Binary Converter
      </h3>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <input
          type="text"
          value={binary}
          onChange={handleBinaryChange}
          placeholder="Enter binary number..."
          className="w-full bg-white/20 border-2 border-white/30 rounded-lg p-3 text-white placeholder-white/70 font-mono text-lg mb-4"
        />
        
        <div className="space-y-2">
          <p className="font-bold">Decimal Equivalent:</p>
          <MathJax>{`\\(${binary}_2 = ${decimal}_{10}\\)`}</MathJax>
          <div className="text-sm opacity-80 mt-2">
            <p>Each digit represents a power of 2:</p>
<MathJax>
  {`\\(${binary.split('').map((d, i) => `${d} × 2^${binary.length - i - 1}`).join(' + ')}\\)`}
</MathJax>          </div>
        </div>
      </div>
    </div>
  );
};

export default BinaryExplorer;