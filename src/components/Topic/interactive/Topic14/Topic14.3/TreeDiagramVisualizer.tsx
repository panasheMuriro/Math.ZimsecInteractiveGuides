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

  const getCoinColor = (coin: string | null) => {
    if (!coin) return "text-[#F4F1DE]";
    return coin === 'H' ? "text-[#E07A5F]" : "text-[#81B29A]";
  };

  const getHighlightedOutcomeColor = (outcome: string) => {
    return coin1 && coin2 && `${coin1}${coin2}` === outcome 
      ? "font-extrabold text-[#E07A5F]" 
      : "text-[#F4F1DE]";
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#3D405B] border-4 border-[#F4F1DE] rounded-3xl font-sans">
      <section className="mb-6">
        <h2 className="text-2xl font-extrabold mb-4 text-center text-[#F4F1DE] underline decoration-2 underline-offset-4">FLIP TWO COINS</h2>
        <div className="bg-[#81B29A] border-3 border-[#F4F1DE] rounded-2xl p-4 mb-6">
          <p className="text-base mb-3 text-center text-[#3D405B] font-extrabold">
            Probability of Getting Two Heads:
            <BlockMath math={"P(\\text{HH}) = \\dfrac{1}{2} \\cdot \\dfrac{1}{2} = \\dfrac{1}{4}"} />
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <div className="flex flex-col items-center">
            <Coins className={`w-14 h-14 ${getCoinColor(coin1)} drop-shadow-lg`} />
            <span className="mt-2 text-2xl font-extrabold text-[#3D405B] bg-[#F2CC8F] border-3 border-[#3D405B] rounded-full w-10 h-10 flex items-center justify-center">
              {coin1 || '?'}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Coins className={`w-14 h-14 ${getCoinColor(coin2)} drop-shadow-lg`} />
            <span className="mt-2 text-2xl font-extrabold text-[#3D405B] bg-[#F2CC8F] border-3 border-[#3D405B] rounded-full w-10 h-10 flex items-center justify-center">
              {coin2 || '?'}
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={flipCoins}
            className="flex items-center px-6 py-3 rounded-full font-extrabold border-3 border-[#F4F1DE] bg-[#E07A5F] text-[#F4F1DE] hover:bg-[#F2CC8F] hover:text-[#3D405B] transform hover:scale-105 transition-all duration-200 drop-shadow-lg"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            FLIP COINS
          </button>
        </div>
        {coin1 && coin2 && (
          <p className="text-base mt-4 text-center text-[#F4F1DE] font-extrabold bg-[#81B29A] py-3 px-4 rounded-full border-3 border-[#F4F1DE]">
            Result: You got <span className="text-[#E07A5F]">{coin1}{coin2}</span>!
            {`${coin1}${coin2}` === 'HH' ? ' 🎉 That’s two heads!' : ''}
          </p>
        )}
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-extrabold mb-4 text-center text-[#F4F1DE] underline decoration-2 underline-offset-4">TREE DIAGRAM</h2>
        <p className="text-base mb-4 text-center text-[#F4F1DE] font-extrabold bg-[#81B29A] py-2 px-4 rounded-full border-3 border-[#F4F1DE]">
          Sample space: {`{${outcomes.join(', ')}}`}
        </p>
        <div className="flex justify-center">
          <svg className="w-full max-w-xs" viewBox="0 0 300 200">
            {/* Root Node */}
            <text x="10" y="20" className="text-sm font-extrabold fill-[#F4F1DE]">START</text>
            <circle cx="20" cy="30" r="6" fill="#F2CC8F" stroke="#F4F1DE" strokeWidth="2" />

            {/* First Coin Branches */}
            <line x1="20" y1="30" x2="100" y2="70" stroke="#F4F1DE" strokeWidth="2" />
            <line x1="20" y1="30" x2="100" y2="130" stroke="#F4F1DE" strokeWidth="2" />
            <text x="50" y="55" className="text-sm font-extrabold fill-[#E07A5F]">H (½)</text>
            <text x="50" y="115" className="text-sm font-extrabold fill-[#81B29A]">T (½)</text>

            {/* Second Coin - Heads Branch */}
            <circle cx="100" cy="70" r="6" fill="#F4F1DE" stroke="#3D405B" strokeWidth="2" />
            <text x="110" y="65" className="text-sm font-extrabold fill-[#3D405B]">H</text>
            <line x1="100" y1="70" x2="180" y2="50" stroke="#F4F1DE" strokeWidth="2" />
            <line x1="100" y1="70" x2="180" y2="90" stroke="#F4F1DE" strokeWidth="2" />
            <text x="140" y="45" className="text-sm font-extrabold fill-[#E07A5F]">H (½)</text>
            <text x="140" y="85" className="text-sm font-extrabold fill-[#81B29A]">T (½)</text>
            <text x="190" y="50" className={`text-sm ${getHighlightedOutcomeColor('HH')}`}>HH</text>
            <text x="190" y="90" className={`text-sm ${getHighlightedOutcomeColor('HT')}`}>HT</text>

            {/* Second Coin - Tails Branch */}
            <circle cx="100" cy="130" r="6" fill="#F4F1DE" stroke="#3D405B" strokeWidth="2" />
            <text x="110" y="125" className="text-sm font-extrabold fill-[#3D405B]">T</text>
            <line x1="100" y1="130" x2="180" y2="110" stroke="#F4F1DE" strokeWidth="2" />
            <line x1="100" y1="130" x2="180" y2="150" stroke="#F4F1DE" strokeWidth="2" />
            <text x="140" y="105" className="text-sm font-extrabold fill-[#E07A5F]">H (½)</text>
            <text x="140" y="145" className="text-sm font-extrabold fill-[#81B29A]">T (½)</text>
            <text x="190" y="110" className={`text-sm ${getHighlightedOutcomeColor('TH')}`}>TH</text>
            <text x="190" y="150" className={`text-sm ${getHighlightedOutcomeColor('TT')}`}>TT</text>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default TreeDiagramVisualizer;