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
    setTimeout(() => setAnimateDie(false), 300);
  };

  const drawCard = () => {
    const card = Math.random() < 0.5 ? 'Red' : 'Black';
    setCardResult(card);
    setAnimateCard(true);
    setTimeout(() => setAnimateCard(false), 300);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#F4F1DE] border-4 border-[#3D405B] rounded-3xl font-sans">
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#3D405B] tracking-wider underline decoration-2 underline-offset-4">DIE & COIN</h2>
        <div className="bg-[#F2CC8F] border-4 border-[#3D405B] rounded-2xl p-4 mb-6">
          <p className="text-base mb-3 text-center text-[#3D405B] font-bold">
            Probability of Rolling a 3 and Flipping Heads:
            <BlockMath math={"P(3 \\text{ and heads}) = \\dfrac{1}{6} \\cdot \\dfrac{1}{2} = \\dfrac{1}{12}"} />
          </p>
        </div>
        <div className="flex justify-center space-x-8 mb-6">
          <div className="flex flex-col items-center">
            <Dice3 className="w-14 h-14 text-[#3D405B] rounded-full bg-white border-3 border-[#3D405B] p-2" />
            <span className="mt-2 text-2xl font-bold text-white bg-[#81B29A] border-4 border-[#3D405B] rounded-full w-12 h-12 flex items-center justify-center">
              {dieResult || '?'}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Coins className="w-14 h-14 text-[#3D405B] rounded-full bg-white border-3 border-[#3D405B] p-2" />
            <span className="mt-2 text-2xl font-bold text-white bg-[#81B29A] border-4 border-[#3D405B] rounded-full w-12 h-12 flex items-center justify-center">
              {coinResult || '?'}
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={rollDieAndFlipCoin}
            className={`flex items-center px-6 py-3 rounded-full font-bold border-4 border-[#3D405B] bg-[#81B29A] text-[#3D405B] hover:bg-[#99C1B9] transform transition-all duration-200 ${
              animateDie ? 'scale-110' : 'scale-100'
            }`}
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            ROLL & FLIP
          </button>
        </div>
        {dieResult && coinResult && (
          <p className="text-base mt-4 text-center text-[#3D405B] font-bold bg-[#F2CC8F] py-3 px-4 rounded-full border-4 border-[#3D405B]">
            Result: You got <span className="text-[#E07A5F]">{dieResult}</span> and{' '}
            <span className="text-[#E07A5F]">{coinResult}</span>!
            {dieResult === 3 && coinResult === 'H' ? ' 🎉' : ''}
          </p>
        )}
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#3D405B] tracking-wider underline decoration-2 underline-offset-4">CARD DRAW</h2>
        <div className="bg-[#F2CC8F] border-4 border-[#3D405B] rounded-2xl p-4 mb-6">
          <p className="text-base mb-3 text-center text-[#3D405B] font-bold">
            Probability of Drawing a Red or Black Card:
            <BlockMath math={"P(\\text{red or black}) = \\dfrac{26}{52} + \\dfrac{26}{52} = 1"} />
          </p>
        </div>
        <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center">
            <div className={`w-16 h-16 rounded-full border-4 border-[#3D405B] flex items-center justify-center ${
              cardResult === 'Red' ? 'bg-[#E07A5F]' : cardResult === 'Black' ? 'bg-[#81B29A]' : 'bg-white'
            }`}>
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="8" />
              </svg>
            </div>
            <span className="mt-3 text-2xl font-bold text-white bg-[#3D405B] border-4 border-[#3D405B] rounded-full w-12 h-12 flex items-center justify-center">
              {cardResult || '?'}
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={drawCard}
            className={`flex items-center px-6 py-3 rounded-full font-bold border-4 border-[#3D405B] bg-[#E07A5F] text-white hover:bg-[#F09070] transform transition-all duration-200 ${
              animateCard ? 'scale-110' : 'scale-100'
            }`}
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            DRAW CARD
          </button>
        </div>
        {cardResult && (
          <p className="text-base mt-4 text-center text-[#3D405B] font-bold bg-[#F2CC8F] py-3 px-4 rounded-full border-4 border-[#3D405B]">
            Result: You drew a <span className={cardResult === 'Red' ? 'text-[#E07A5F]' : 'text-[#81B29A]'}>{cardResult}</span> card!
          </p>
        )}
      </section>
    </div>
  );
};

export default ProbabilityRulesVisualizer;