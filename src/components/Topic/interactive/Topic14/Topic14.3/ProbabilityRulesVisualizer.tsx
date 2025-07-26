import React, { useState } from 'react';
import { Dice3, Coins, RefreshCw } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const ProbabilityRulesVisualizer: React.FC = () => {
  const [dieResult, setDieResult] = useState<number | null>(null);
  const [coinResult, setCoinResult] = useState<string | null>(null);
  const [cardResult, setCardResult] = useState<string | null>(null);
  const [animateDie, setAnimateDie] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);

  const rollDieAndFlipCoin = () => {
    const die = Math.floor(Math.random() * 6) + 1;
    const coin = Math.random() < 0.5 ? 'H' : 'T';
    setDieResult(die);
    setCoinResult(coin);
    setAnimateDie(true);
    setTimeout(() => setAnimateDie(false), 300); // Reset animation after 300ms
  };

  const drawCard = () => {
    const card = Math.random() < 0.5 ? 'Red' : 'Black';
    setCardResult(card);
    setAnimateCard(true);
    setTimeout(() => setAnimateCard(false), 300); // Reset animation after 300ms
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg shadow-md text-gray-800 font-sans">
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Independent Events: Die and Coin</h2>
        <p className="text-sm mb-2">
          Probability of Rolling a 3 and Flipping Heads:
          <BlockMath math={"P(3 \\text{ and heads}) = \\dfrac{1}{6} \\cdot \\dfrac{1}{2} = \\dfrac{1}{12}"} />
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <div className="flex items-center">
            <Dice3 className="w-12 h-12 text-blue-500" />
            <span className="ml-2 text-lg font-bold">{dieResult || '-'}</span>
          </div>
          <div className="flex items-center">
            <Coins className="w-12 h-12 text-blue-500" />
            <span className="ml-2 text-lg font-bold">{coinResult || '-'}</span>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <button
            onClick={rollDieAndFlipCoin}
            className={`flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-transform ${
              animateDie ? 'scale-110' : 'scale-100'
            }`}
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Roll & Flip
          </button>
        </div>
        {dieResult && coinResult && (
          <p className="text-sm mt-2 text-center">
            Result: You got <span className="font-bold">{dieResult}</span> and{' '}
            <span className="font-bold">{coinResult}</span>!
            {dieResult === 3 && coinResult === 'H' ? ' 🎉 That’s a 3 and heads!' : ''}
          </p>
        )}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Mutually Exclusive Events: Card Draw</h2>
        <p className="text-sm mb-2">
          Probability of Drawing a Red or Black Card:
          <BlockMath math={"P(\\text{red or black}) = \\dfrac{26}{52} + \\dfrac{26}{52} = 1"} />
        </p>
        <div className="flex justify-center mb-4">
          <div className="flex items-center">
            <svg className={`w-12 h-12 ${cardResult === 'Red' ? 'text-red-500' : cardResult === 'Black' ? 'text-gray-800' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="ml-2 text-lg font-bold">{cardResult || '-'}</span>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <button
            onClick={drawCard}
            className={`flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-transform ${
              animateCard ? 'scale-110' : 'scale-100'
            }`}
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Draw Card
          </button>
        </div>
        {cardResult && (
          <p className="text-sm mt-2 text-center">
            Result: You drew a <span className="font-bold">{cardResult}</span> card!
          </p>
        )}
      </section>
    </div>
  );
};

export default ProbabilityRulesVisualizer;