import React, { useState } from 'react';
import { Coins, RefreshCw } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const TreeDiagramVisualizer: React.FC = () => {
  const [coin1, setCoin1] = useState<string | null>(null);
  const [coin2, setCoin2] = useState<string | null>(null);
  const outcomes = ['HH', 'HT', 'TH', 'TT'];

  const flipCoins = () => {
    const result1 = Math.random() < 0.5 ? 'H' : 'T';
    const result2 = Math.random() < 0.5 ? 'H' : 'T';
    setCoin1(result1);
    setCoin2(result2);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg shadow-md text-gray-800 font-sans">
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Try It: Flip Two Coins</h2>
        <p className="text-sm mb-2">
          Probability of Getting Two Heads:
<BlockMath math={"P(\\text{HH}) = \\dfrac{1}{2} \\cdot \\dfrac{1}{2} = \\dfrac{1}{4}"} />
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <div className="flex items-center">
            <Coins className="w-12 h-12 text-blue-500" />
            <span className="ml-2 text-lg font-bold">{coin1 || '-'}</span>
          </div>
          <div className="flex items-center">
            <Coins className="w-12 h-12 text-blue-500" />
            <span className="ml-2 text-lg font-bold">{coin2 || '-'}</span>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <button
            onClick={flipCoins}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Flip Coins
          </button>
        </div>
        {coin1 && coin2 && (
          <p className="text-sm mt-2 text-center">
            Result: You got <span className="font-bold">{coin1}{coin2}</span>!
            {`${coin1}${coin2}` === 'HH' ? ' 🎉 That’s two heads!' : ''}
          </p>
        )}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tree Diagram</h2>
        <p className="text-sm mb-2">Sample space for two coins: {`{${outcomes.join(', ')}}`}</p>
        <div className="flex justify-center">
          <svg className="w-full max-w-xs" viewBox="0 0 300 200">
            {/* Root Node */}
            <text x="10" y="20" className="text-sm font-bold">Start</text>
            <circle cx="20" cy="30" r="5" fill="blue" />

            {/* First Coin Branches */}
            <line x1="20" y1="30" x2="100" y2="70" stroke="black" strokeWidth="1" />
            <line x1="20" y1="30" x2="100" y2="130" stroke="black" strokeWidth="1" />
            <text x="60" y="55" className="text-xs">H (1/2)</text>
            <text x="60" y="115" className="text-xs">T (1/2)</text>

            

            {/* Second Coin - Heads Branch */}
            <circle cx="100" cy="70" r="5" fill="blue" />
            <text x="110" y="65" className="text-sm font-bold">H</text>
            <line x1="100" y1="70" x2="180" y2="50" stroke="black" strokeWidth="1" />
            <line x1="100" y1="70" x2="180" y2="90" stroke="black" strokeWidth="1" />
            <text x="140" y="45" className="text-xs">H (1/2)</text>
            <text x="140" y="85" className="text-xs">T (1/2)</text>
            <text x="190" y="50" className={`text-sm ${coin1 === 'H' && coin2 === 'H' ? 'font-bold text-blue-500' : ''}`}>HH</text>
            <text x="190" y="90" className={`text-sm ${coin1 === 'H' && coin2 === 'T' ? 'font-bold text-blue-500' : ''}`}>HT</text>

            {/* Second Coin - Tails Branch */}
            <circle cx="100" cy="130" r="5" fill="blue" />
            <text x="110" y="125" className="text-sm font-bold">T</text>
            <line x1="100" y1="130" x2="180" y2="110" stroke="black" strokeWidth="1" />
            <line x1="100" y1="130" x2="180" y2="150" stroke="black" strokeWidth="1" />
            <text x="140" y="105" className="text-xs">H (1/2)</text>
            <text x="140" y="145" className="text-xs">T (1/2)</text>
            <text x="190" y="110" className={`text-sm ${coin1 === 'T' && coin2 === 'H' ? 'font-bold text-blue-500' : ''}`}>TH</text>
            <text x="190" y="150" className={`text-sm ${coin1 === 'T' && coin2 === 'T' ? 'font-bold text-blue-500' : ''}`}>TT</text>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default TreeDiagramVisualizer;