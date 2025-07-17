import { useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import { Hash } from 'lucide-react';

const Base10Explorer = () => {
  const [number, setNumber] = useState<string>('245');

  const explainPlaceValue = (num: string) => {
    return num
      .split('')
      .map((digit, index) => {
        const power = num.length - index - 1;
        return `${digit} \\times 10^{${power}}`;
      })
      .join(' + ');
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-3xl text-white shadow-xl max-w-md mx-auto animate-fade-in">
      <h3 className="text-2xl font-extrabold mb-4 flex items-center justify-center tracking-wide">
        <Hash className="mr-2" /> Base-10 Place Value Explorer
      </h3>

      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 border border-white/30 shadow-md">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number..."
          className="w-full bg-white/20 border border-white/40 rounded-xl p-3 text-white placeholder-white/70 font-mono text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-white"
        />

        <div className="space-y-2 overflow-x-auto">
          <p className="font-semibold text-white/90">Breakdown:</p>
          <div className="bg-white/10 p-3 rounded-xl text-base text-white overflow-x-auto whitespace-pre-wrap">
            <MathJax dynamic inline>
              {`\\(${number}_{10} = ${explainPlaceValue(number)}\\)`}
            </MathJax>
          </div>
          <p className="text-sm text-white/70 mt-2">
            Each digit is multiplied by a power of 10 based on its position.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Base10Explorer;
