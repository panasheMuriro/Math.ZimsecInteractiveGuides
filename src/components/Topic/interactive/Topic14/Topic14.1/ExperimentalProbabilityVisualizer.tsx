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
    <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg shadow-md text-gray-800 font-sans">
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Try It: Coin Flip Experiment</h2>
        <p className="text-sm mb-2">
          Experimental Probability of Heads: 
          <BlockMath math={`P(\\text{heads}) = \\frac{\\text{${headsCount}}}{\\text{${trials.length}}} = ${experimentalProbability}`} />
        </p>
        <div className="flex justify-center mb-4">
          <Coins className="w-12 h-12 text-blue-500" />
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            onClick={() => flipCoin(1)}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Flip Once
          </button>
          <button
            onClick={() => flipCoin(10)}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Flip 10 Times
          </button>
          <button
            onClick={() => flipCoin(100)}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Flip 100 Times
          </button>
          <button
            onClick={resetTrials}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Reset
          </button>
        </div>
        {trials.length > 0 && (
          <p className="text-sm text-center">
            Results: <span className="font-bold">{headsCount}</span> Heads,{' '}
            <span className="font-bold">{trials.length - headsCount}</span> Tails in{' '}
            <span className="font-bold">{trials.length}</span> trials
          </p>
        )}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Recent Flips</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {trials.slice(-10).map((result, index) => (
            <span key={index} className="text-sm px-2 py-1 bg-gray-200 rounded">
              {result === 1 ? 'Heads' : 'Tails'}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperimentalProbabilityVisualizer;