import React, { useState } from 'react';
import { RefreshCw, Coins } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const ExperimentalProbabilityVisualizer: React.FC = () => {
  const [trials, setTrials] = useState<number[]>([]);
  const [headsCount, setHeadsCount] = useState<number>(0);

  const flipCoin = (numFlips: number) => {
    const newTrials = Array.from({ length: numFlips }, () => Math.random() < 0.5 ? 0 : 1); // 0 for tails, 1 for heads
    setTrials([...trials, ...newTrials]);
    setHeadsCount(headsCount + newTrials.filter(result => result === 1).length);
  };

  const resetTrials = () => {
    setTrials([]);
    setHeadsCount(0);
  };

  const experimentalProbability = trials.length > 0 ? (headsCount / trials.length).toFixed(2) : '0.00';

  return (
    <div className="max-w-md mx-auto p-6 bg-[#F4F1DE] rounded-2xl shadow-xl text-gray-800 font-sans border-4 border-[#3D405B]">
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-center text-[#3D405B] tracking-wide">COIN FLIP EXPERIMENT</h2>
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-[#E09F3E] rounded-full flex items-center justify-center border-4 border-[#3D405B]">
            <Coins className="w-8 h-8 text-[#3D405B]" />
          </div>
        </div>
        <p className="text-sm mb-4 text-center text-[#3D405B] font-medium">
          Experimental Probability of Heads: 
          <BlockMath math={`P(\\text{heads}) = \\frac{\\text{${headsCount}}}{\\text{${trials.length}}} = ${experimentalProbability}`} />
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-5">
          <button
            onClick={() => flipCoin(1)}
            className="flex items-center px-5 py-3 bg-[#E09F3E] text-[#3D405B] rounded-full hover:bg-[#F0A841] transition shadow-md hover:shadow-lg border-2 border-[#3D405B] font-bold"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            FLIP ONCE
          </button>
          <button
            onClick={() => flipCoin(10)}
            className="flex items-center px-5 py-3 bg-[#99C1B9] text-[#3D405B] rounded-full hover:bg-[#A8CCC4] transition shadow-md hover:shadow-lg border-2 border-[#3D405B] font-bold"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            FLIP 10 TIMES
          </button>
          <button
            onClick={() => flipCoin(100)}
            className="flex items-center px-5 py-3 bg-[#8E7DBE] text-white rounded-full hover:bg-[#9D8BCD] transition shadow-md hover:shadow-lg border-2 border-[#3D405B] font-bold"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            FLIP 100 TIMES
          </button>
          <button
            onClick={resetTrials}
            className="flex items-center px-5 py-3 bg-[#F2545B] text-white rounded-full hover:bg-[#F56B70] transition shadow-md hover:shadow-lg border-2 border-[#3D405B] font-bold"
          >
            RESET
          </button>
        </div>
        {trials.length > 0 && (
          <p className="text-sm text-center text-[#3D405B] font-medium bg-[#F4F1DE] py-2 px-4 rounded-full border-2 border-[#99C1B9]">
            Results: <span className="font-bold text-[#E09F3E]">{headsCount}</span> Heads,{' '}
            <span className="font-bold text-[#8E7DBE]">{trials.length - headsCount}</span> Tails in{' '}
            <span className="font-bold text-[#F2545B]">{trials.length}</span> trials
          </p>
        )}
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-3 text-center text-[#3D405B] tracking-wide">RECENT FLIPS</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {trials.slice(-10).map((result, index) => (
            <span 
              key={index} 
              className={`text-sm px-3 py-2 rounded-full font-bold border-2 border-[#3D405B] ${
                result === 1 
                  ? 'bg-[#E09F3E] text-[#3D405B]' 
                  : 'bg-[#99C1B9] text-[#3D405B]'
              }`}
            >
              {result === 1 ? 'HEADS' : 'TAILS'}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperimentalProbabilityVisualizer;