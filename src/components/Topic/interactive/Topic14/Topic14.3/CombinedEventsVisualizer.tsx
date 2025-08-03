import React, { useState } from 'react';
import { Coins, RefreshCw } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const CombinedEventsVisualizer: React.FC = () => {
  const [coin1, setCoin1] = useState<string | null>(null);
  const [coin2, setCoin2] = useState<string | null>(null);
  const outcomes = ['HH', 'HT', 'TH', 'TT'];
  // const outcomeTable = [
  //   ['HH', 'HT'],
  //   ['TH', 'TT'],
  // ];

  const flipCoins = () => {
    const result1 = Math.random() < 0.5 ? 'H' : 'T';
    const result2 = Math.random() < 0.5 ? 'H' : 'T';
    setCoin1(result1);
    setCoin2(result2);
  };

  const getCoinColor = (coin: string | null) => {
    if (!coin) return "text-[#264653]";
    return coin === 'H' ? "text-[#E76F51]" : "text-[#2A9D8F]";
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#E9C46A] border-4 border-[#264653] rounded-3xl font-sans">
      <section className="mb-6">
        <h2 className="text-2xl font-extrabold mb-4 text-center text-[#264653] underline decoration-2 underline-offset-4">FLIP TWO COINS</h2>
        <div className="bg-white border-3 border-[#264653] rounded-2xl p-4 mb-6">
          <p className="text-base mb-3 text-center text-[#264653] font-extrabold">
            Probability of Exactly One Head:
            <BlockMath math={"P(\\text{exactly one head}) = \\dfrac{2}{4} = \\dfrac{1}{2}"} />
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <div className="flex flex-col items-center">
            <Coins className={`w-14 h-14 ${getCoinColor(coin1)}`} />
            <span className="mt-2 text-2xl font-extrabold text-[#264653] bg-white border-3 border-[#264653] rounded-full w-10 h-10 flex items-center justify-center">
              {coin1 || '?'}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Coins className={`w-14 h-14 ${getCoinColor(coin2)}`} />
            <span className="mt-2 text-2xl font-extrabold text-[#264653] bg-white border-3 border-[#264653] rounded-full w-10 h-10 flex items-center justify-center">
              {coin2 || '?'}
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={flipCoins}
            className="flex items-center px-6 py-3 rounded-full font-extrabold border-3 border-[#264653] bg-[#F4A261] text-[#264653] hover:bg-[#E76F51] hover:text-white transform hover:scale-105 transition-all duration-200"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            FLIP COINS
          </button>
        </div>
        {coin1 && coin2 && (
          <p className="text-base mt-4 text-center text-[#264653] font-extrabold bg-white py-3 px-4 rounded-full border-3 border-[#264653]">
            Result: You got <span className="text-[#E76F51]">{coin1}{coin2}</span>!
            {['HT', 'TH'].includes(`${coin1}${coin2}`) ? ' 🎉 Exactly one head!' : ''}
          </p>
        )}
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-extrabold mb-4 text-center text-[#264653] underline decoration-2 underline-offset-4">OUTCOME TABLE</h2>
        <p className="text-base mb-4 text-center text-[#264653] font-extrabold bg-white py-2 px-4 rounded-full border-3 border-[#264653]">
          Sample space: {`{${outcomes.join(', ')}}`}
        </p>
        <div className="flex justify-center">
          <table className="border-3 border-[#264653] rounded-xl overflow-hidden">
            <thead>
              <tr>
                <th className="p-3 bg-[#2A9D8F] text-white font-extrabold border-2 border-[#264653]">First Coin</th>
                <th className="p-3 bg-[#2A9D8F] text-white font-extrabold border-2 border-[#264653]">H</th>
                <th className="p-3 bg-[#2A9D8F] text-white font-extrabold border-2 border-[#264653]">T</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 bg-[#F4A261] text-[#264653] font-extrabold border-2 border-[#264653]">H</td>
                <td
                  className={`p-3 border-2 border-[#264653] font-extrabold text-[#264653] ${
                    coin1 === 'H' && coin2 === 'H' ? 'bg-[#E76F51] text-white' : 'bg-white'
                  }`}
                >
                  HH
                </td>
                <td
                  className={`p-3 border-2 border-[#264653] font-extrabold text-[#264653] ${
                    coin1 === 'H' && coin2 === 'T' ? 'bg-[#E76F51] text-white' : 'bg-white'
                  }`}
                >
                  HT
                </td>
              </tr>
              <tr>
                <td className="p-3 bg-[#F4A261] text-[#264653] font-extrabold border-2 border-[#264653]">T</td>
                <td
                  className={`p-3 border-2 border-[#264653] font-extrabold text-[#264653] ${
                    coin1 === 'T' && coin2 === 'H' ? 'bg-[#E76F51] text-white' : 'bg-white'
                  }`}
                >
                  TH
                </td>
                <td
                  className={`p-3 border-2 border-[#264653] font-extrabold text-[#264653] ${
                    coin1 === 'T' && coin2 === 'T' ? 'bg-[#E76F51] text-white' : 'bg-white'
                  }`}
                >
                  TT
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default CombinedEventsVisualizer;